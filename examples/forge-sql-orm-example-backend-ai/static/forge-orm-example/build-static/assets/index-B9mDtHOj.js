const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./iframe-resizer-DSle_E2m.js",
      "./rolldown-runtime-COnpUsM8.js",
      "./custom-theme-BAegSagx.js",
      "./custom-theme-loading-utils-CslEMBWq.js",
      "./wrapNativeSuper-CcHGmOvu.js",
      "./client-core-vendor-BFJ-FBHn.js",
      "./body-CWwQGvKG.js",
      "./inline-styles-if-ranking-DsmzJ8E-.js",
      "./react-dom-vendor-DD8-Uyz5.js",
      "./inline-styles-if-ranking-DMqwCerb.css",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { a as e, i as t, n, r, t as i } from "./rolldown-runtime-COnpUsM8.js";
import { n as a, r as o, t as s } from "./react-dom-vendor-DD8-Uyz5.js";
import { t as c } from "./lodash-vendor-DVWR8zLq.js";
import {
  _ as l,
  a as u,
  b as d,
  c as f,
  d as p,
  f as m,
  g as h,
  h as g,
  i as _,
  l as v,
  m as y,
  n as b,
  o as x,
  p as S,
  r as C,
  s as w,
  t as T,
  u as E,
  v as D,
  x as O,
  y as k,
} from "./inline-styles-if-ranking-DsmzJ8E-.js";
import {
  a as A,
  c as j,
  d as M,
  f as N,
  h as P,
  i as F,
  l as I,
  m as ee,
  n as te,
  o as ne,
  p as re,
  r as L,
  s as R,
  u as z,
} from "./wrapNativeSuper-CcHGmOvu.js";
import {
  C as B,
  D as V,
  E as H,
  S as ie,
  T as ae,
  _ as oe,
  b as se,
  d as ce,
  g as le,
  h as ue,
  i as U,
  m as de,
  t as fe,
  v as pe,
  w as W,
  x as me,
  y as he,
} from "./custom-theme-loading-utils-CslEMBWq.js";
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
var G = e(o()),
  K = r({
    __addDisposableResource: () => He,
    __assign: () => Ke,
    __asyncDelegator: () => Pe,
    __asyncGenerator: () => Ne,
    __asyncValues: () => Fe,
    __await: () => Me,
    __awaiter: () => we,
    __classPrivateFieldGet: () => ze,
    __classPrivateFieldIn: () => Ve,
    __classPrivateFieldSet: () => Be,
    __createBinding: () => qe,
    __decorate: () => ve,
    __disposeResources: () => Ue,
    __esDecorate: () => ye,
    __exportStar: () => Ee,
    __extends: () => ge,
    __generator: () => Te,
    __importDefault: () => Re,
    __importStar: () => Le,
    __makeTemplateObject: () => Ie,
    __metadata: () => Ce,
    __param: () => q,
    __propKey: () => xe,
    __read: () => Oe,
    __rest: () => _e,
    __rewriteRelativeImportExtension: () => We,
    __runInitializers: () => be,
    __setFunctionName: () => Se,
    __spread: () => ke,
    __spreadArray: () => je,
    __spreadArrays: () => Ae,
    __values: () => De,
    default: () => Ze,
  });
function ge(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Class extends value ` + String(t) + ` is not a constructor or null`);
  Ge(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function _e(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function ve(e, t, n, r) {
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
function q(e, t) {
  return function (n, r) {
    t(n, r, e);
  };
}
function ye(e, t, n, r, i, a) {
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
function be(e, t, n) {
  for (var r = arguments.length > 2, i = 0; i < t.length; i++)
    n = r ? t[i].call(e, n) : t[i].call(e);
  return r ? n : void 0;
}
function xe(e) {
  return typeof e == `symbol` ? e : `${e}`;
}
function Se(e, t, n) {
  return (
    typeof t == `symbol` && (t = t.description ? `[${t.description}]` : ``),
    Object.defineProperty(e, `name`, { configurable: !0, value: n ? `${n} ${t}` : t })
  );
}
function Ce(e, t) {
  if (typeof Reflect == `object` && typeof Reflect.metadata == `function`)
    return Reflect.metadata(e, t);
}
function we(e, t, n, r) {
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
function Te(e, t) {
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
function Ee(e, t) {
  for (var n in e) n !== `default` && !Object.prototype.hasOwnProperty.call(t, n) && qe(t, e, n);
}
function De(e) {
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
function Oe(e, t) {
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
function ke() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Oe(arguments[t]));
  return e;
}
function Ae() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
  return r;
}
function je(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
function Me(e) {
  return this instanceof Me ? ((this.v = e), this) : new Me(e);
}
function Ne(e, t, n) {
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
    e.value instanceof Me ? Promise.resolve(e.value.v).then(u, d) : f(a[0][2], e);
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
function Pe(e) {
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
          return (n = !n) ? { value: Me(e[r](t)), done: !1 } : i ? i(t) : t;
        }
      : i;
  }
}
function Fe(e) {
  if (!Symbol.asyncIterator) throw TypeError(`Symbol.asyncIterator is not defined.`);
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof De == `function` ? De(e) : e[Symbol.iterator]()),
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
function Ie(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, `raw`, { value: t }) : (e.raw = t), e);
}
function Le(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n = Ye(e), r = 0; r < n.length; r++) n[r] !== `default` && qe(t, e, n[r]);
  return (Je(t, e), t);
}
function Re(e) {
  return e && e.__esModule ? e : { default: e };
}
function ze(e, t, n, r) {
  if (n === `a` && !r) throw TypeError(`Private accessor was defined without a getter`);
  if (typeof t == `function` ? e !== t || !r : !t.has(e))
    throw TypeError(`Cannot read private member from an object whose class did not declare it`);
  return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e);
}
function Be(e, t, n, r, i) {
  if (r === `m`) throw TypeError(`Private method is not writable`);
  if (r === `a` && !i) throw TypeError(`Private accessor was defined without a setter`);
  if (typeof t == `function` ? e !== t || !i : !t.has(e))
    throw TypeError(`Cannot write private member to an object whose class did not declare it`);
  return (r === `a` ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n);
}
function Ve(e, t) {
  if (t === null || (typeof t != `object` && typeof t != `function`))
    throw TypeError(`Cannot use 'in' operator on non-object`);
  return typeof e == `function` ? t === e : e.has(t);
}
function He(e, t, n) {
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
function Ue(e) {
  function t(t) {
    ((e.error = e.hasError ? new Xe(t, e.error, `An error was suppressed during disposal.`) : t),
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
function We(e, t) {
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
var Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe = n(() => {
    ((Ge = function (e, t) {
      return (
        (Ge =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }),
        Ge(e, t)
      );
    }),
      (Ke = function () {
        return (
          (Ke =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          Ke.apply(this, arguments)
        );
      }),
      (qe = Object.create
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
      (Je = Object.create
        ? function (e, t) {
            Object.defineProperty(e, `default`, { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
      (Ye = function (e) {
        return (
          (Ye =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
              return t;
            }),
          Ye(e)
        );
      }),
      (Xe =
        typeof SuppressedError == `function`
          ? SuppressedError
          : function (e, t, n) {
              var r = Error(n);
              return ((r.name = `SuppressedError`), (r.error = e), (r.suppressed = t), r);
            }),
      (Ze = {
        __extends: ge,
        __assign: Ke,
        __rest: _e,
        __decorate: ve,
        __param: q,
        __esDecorate: ye,
        __runInitializers: be,
        __propKey: xe,
        __setFunctionName: Se,
        __metadata: Ce,
        __awaiter: we,
        __generator: Te,
        __createBinding: qe,
        __exportStar: Ee,
        __values: De,
        __read: Oe,
        __spread: ke,
        __spreadArrays: Ae,
        __spreadArray: je,
        __await: Me,
        __asyncGenerator: Ne,
        __asyncDelegator: Pe,
        __asyncValues: Fe,
        __makeTemplateObject: Ie,
        __importStar: Le,
        __importDefault: Re,
        __classPrivateFieldGet: ze,
        __classPrivateFieldSet: Be,
        __classPrivateFieldIn: Ve,
        __addDisposableResource: He,
        __disposeResources: Ue,
        __rewriteRelativeImportExtension: We,
      }));
  }),
  $e = i((e) => {
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
  J = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.BridgeAPIError = void 0),
      (e.BridgeAPIError = class extends Error {}));
  }),
  Y = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getCallBridge = void 0));
    var t = J();
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
  et = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.withRateLimiter = void 0));
    var t = J();
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
  tt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.makeInvoke = e.invoke = void 0));
    var t = Y(),
      n = J(),
      r = et(),
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
  nt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (Qe(), t(K)).__exportStar(tt(), e));
  }),
  rt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._invokeEndpointFn = e.InvokeType = void 0));
    var t = Y(),
      n = J(),
      r = et(),
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
  it = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.invokeRemote = void 0));
    var t = rt();
    e.invokeRemote = (e) => (0, t._invokeEndpointFn)(t.InvokeType.REMOTE)(e);
  }),
  at = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.invokeService = void 0));
    var t = rt();
    e.invokeService = (e) => (0, t._invokeEndpointFn)(t.InvokeType.SERVICE)(e);
  }),
  ot = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (Qe(), t(K));
    (n.__exportStar(it(), e), n.__exportStar(at(), e));
  }),
  st = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.submit = void 0));
    var t = Y(),
      n = J(),
      r = (0, t.getCallBridge)();
    e.submit = async (e) => {
      if ((await r(`submit`, e)) === !1)
        throw new n.BridgeAPIError(`this resource's view is not submittable.`);
    };
  }),
  ct = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.close = void 0));
    var t = Y(),
      n = J(),
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
  lt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.open = void 0));
    var t = Y(),
      n = J(),
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
  ut = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.refresh = void 0));
    var t = Y(),
      n = J(),
      r = (0, t.getCallBridge)();
    e.refresh = async (e) => {
      if ((await r(`refresh`, e)) === !1)
        throw new n.BridgeAPIError(`this resource's view is not refreshable.`);
    };
  }),
  dt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.createHistory = void 0));
    var t = (0, Y().getCallBridge)();
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
  ft = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.FORGE_SUPPORTED_LOCALE_CODES = e.I18N_BUNDLE_FOLDER_NAME = e.I18N_INFO_FILE_NAME = void 0),
      (e.I18N_INFO_FILE_NAME = `i18n-info.json`),
      (e.I18N_BUNDLE_FOLDER_NAME = `__LOCALES__`),
      (e.FORGE_SUPPORTED_LOCALE_CODES =
        `zh-CN.zh-TW.cs-CZ.da-DK.nl-NL.en-US.en-GB.et-EE.fi-FI.fr-FR.de-DE.hu-HU.is-IS.it-IT.ja-JP.ko-KR.no-NO.pl-PL.pt-BR.pt-PT.ro-RO.ru-RU.sk-SK.tr-TR.es-ES.sv-SE`.split(
          `.`,
        )));
  }),
  pt = i((e) => {
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
  mt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
    var n = (Qe(), t(K)).__importDefault(c());
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
  ht = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Translator = void 0));
    var t = mt();
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
  gt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.ensureLocale = void 0));
    var t = ft(),
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
  _t = i((e) => {
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
  vt = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
  }),
  yt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getI18nSupportedModuleEntries =
        e.extractI18nPropertiesFromModules =
        e.extractI18nKeysFromModules =
        e.getTranslationValue =
          void 0));
    var n = (Qe(), t(K));
    (n.__exportStar(ft(), e),
      n.__exportStar(pt(), e),
      n.__exportStar(ht(), e),
      n.__exportStar(gt(), e));
    var r = mt();
    Object.defineProperty(e, `getTranslationValue`, {
      enumerable: !0,
      get: function () {
        return r.getTranslationValue;
      },
    });
    var i = _t();
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
      n.__exportStar(vt(), e));
  }),
  bt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getContext = void 0));
    var t = Y(),
      n = yt(),
      r = (0, t.getCallBridge)();
    e.getContext = async () => {
      let e = await r(`getContext`),
        t = e?.locale;
      return (t && (e.locale = (0, n.ensureLocale)(t) ?? t), e);
    };
  }),
  xt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.changeWindowTitle = void 0));
    var t = Y(),
      n = J(),
      r = (0, t.getCallBridge)();
    e.changeWindowTitle = async (e) => {
      try {
        await r(`changeWindowTitle`, e);
      } catch {
        throw new n.BridgeAPIError(`the window title wasn't changed due to error.`);
      }
    };
  }),
  St = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.theme = void 0));
    var t = (0, Y().getCallBridge)();
    e.theme = { enable: () => t(`enableTheming`) };
  }),
  Ct = i((e) => {
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
  wt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.containsSerialisedBlobs =
        e.containsBlobs =
        e.deserialiseBlobsInPayload =
        e.serialiseBlobsInPayload =
          void 0));
    var t = Ct(),
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
  Tt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.events = void 0));
    var t = Y(),
      n = wt(),
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
  Et = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.emitReadyEvent = void 0));
    var t = Tt(),
      n = Xt(),
      r = (0, Y().getCallBridge)(),
      i = `EXTENSION_READY`;
    e.emitReadyEvent = async () => {
      let e = await n.view.getContext();
      await t.events.emit(i, { localId: e.localId });
      try {
        await r(`emitReadyEvent`);
      } catch {}
    };
  }),
  Dt,
  Ot,
  kt,
  At,
  jt = n(() => {
    ((Dt = `modulepreload`),
      (Ot = function (e, t) {
        return new URL(e, t).href;
      }),
      (kt = {}),
      (At = function (e, t, n) {
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
              if (((t = Ot(t, n)), t in kt)) return;
              kt[t] = !0;
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
                ((o.rel = r ? `stylesheet` : Dt),
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
  Mt = i((e) => {
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
  Nt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i));
  }),
  Pt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(Nt());
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e) {
      return typeof e == `string` && t.default.test(e);
    }
    e.default = r;
  }),
  Ft = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.unsafeStringify = i));
    var t = n(Pt());
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
  It = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(Mt()),
      n = Ft();
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
  Lt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(Pt());
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
  Rt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.URL = e.DNS = void 0),
      (e.default = s));
    var t = Ft(),
      n = r(Lt());
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
  zt = i((e) => {
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
  Bt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(Rt()),
      n = r(zt());
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    e.default = (0, t.default)(`v3`, 48, n.default);
  }),
  Vt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default = {
        randomUUID: typeof crypto < `u` && crypto.randomUUID && crypto.randomUUID.bind(crypto),
      }));
  }),
  Ht = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = i(Vt()),
      n = i(Mt()),
      r = Ft();
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
  Ut = i((e) => {
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
  Wt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(Rt()),
      n = r(Ut());
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    e.default = (0, t.default)(`v5`, 80, n.default);
  }),
  Gt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default = `00000000-0000-0000-0000-000000000000`));
  }),
  Kt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(Pt());
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e) {
      if (!(0, t.default)(e)) throw TypeError(`Invalid UUID`);
      return parseInt(e.slice(14, 15), 16);
    }
    e.default = r;
  }),
  qt = i((e) => {
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
    var t = u(It()),
      n = u(Bt()),
      r = u(Ht()),
      i = u(Wt()),
      a = u(Gt()),
      o = u(Kt()),
      s = u(Pt()),
      c = u(Ft()),
      l = u(Lt());
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
  }),
  Jt = i((t) => {
    (jt(),
      Object.defineProperty(t, `__esModule`, { value: !0 }),
      (t.createAdfRendererIframeProps = void 0));
    var n = qt();
    t.createAdfRendererIframeProps = async (t, r) => {
      let i = await At(
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
  Yt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.onClose = void 0));
    var t = Y(),
      n = J(),
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
  Xt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.view = void 0));
    var t = st(),
      n = ct(),
      r = lt(),
      i = ut(),
      a = dt(),
      o = bt(),
      s = xt(),
      c = St(),
      l = Et(),
      u = Jt(),
      d = Yt();
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
  Zt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (Qe(), t(K)).__exportStar(Xt(), e));
  }),
  Qt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.router = void 0));
    var t = (0, Y().getCallBridge)();
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
  $t = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (Qe(), t(K)).__exportStar(Qt(), e));
  }),
  en = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Modal = void 0));
    var t = Y(),
      n = J(),
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
  tn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (Qe(), t(K)).__exportStar(en(), e));
  }),
  nn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.productFetchApi = e.remoteFetchApi = void 0));
    var t = Ct(),
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
  rn = i((e) => {
    var t;
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.requestRemote = e.requestBitbucket = e.requestJira = e.requestConfluence = void 0));
    var n = Y(),
      r = nn();
    ((t = (0, r.productFetchApi)((0, n.getCallBridge)())),
      (e.requestConfluence = t.requestConfluence),
      (e.requestJira = t.requestJira),
      (e.requestBitbucket = t.requestBitbucket),
      (e.requestRemote = (0, r.remoteFetchApi)((0, n.getCallBridge)()).requestRemote));
  }),
  an = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.showFlag = void 0));
    var t = Y(),
      n = J(),
      r = (0, t.getCallBridge)();
    e.showFlag = (e) => {
      if (!e.id) throw new n.BridgeAPIError(`"id" must be defined in flag options`);
      let t = r(`showFlag`, { ...e, type: e.type ?? `info` });
      return { close: async () => (await t, r(`closeFlag`, { id: e.id })) };
    };
  }),
  on = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.showFlag = void 0));
    var t = an();
    Object.defineProperty(e, `showFlag`, {
      enumerable: !0,
      get: function () {
        return t.showFlag;
      },
    });
  }),
  sn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (Qe(), t(K)).__exportStar(Tt(), e));
  }),
  cn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.realtime = void 0));
    var t = (0, Y().getCallBridge)();
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
  ln = i((e) => {
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
  un = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
    var t = cn();
    Object.defineProperty(e, `realtime`, {
      enumerable: !0,
      get: function () {
        return t.realtime;
      },
    });
    var n = ln();
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
  dn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
    var t = Y(),
      n = J(),
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
  fn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.isEnabled = void 0));
    var t = (0, Y().getCallBridge)();
    e.isEnabled = () => t(`isRovoEnabled`);
  }),
  pn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.rovo = void 0));
    var t = dn(),
      n = fn();
    e.rovo = { open: t.open, isEnabled: n.isEnabled };
  }),
  mn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (Qe(), t(K)).__exportStar(pn(), e));
  }),
  hn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.createTranslationFunction = e.getTranslations = e.resetTranslationsCache = void 0));
    var t = yt(),
      n = Zt(),
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
  gn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.permissions = void 0));
    var t = (0, Y().getCallBridge)();
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
  _n = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.parseUrl = void 0));
    function t(e) {
      let t = e.match(/^(.*?:)/)?.[0] ?? `https:`,
        n = e.replace(t, ``).replace(/^\/*/, ``).replace(/^\\*/, ``).split(`?`)[0].split(`#`)[0],
        r = n.split(`/`)[0];
      return { protocol: t, hostname: r, pathname: n.slice(r.length) || `/` };
    }
    e.parseUrl = t;
  }),
  vn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getEgressesBasedOnToggles =
        e.sortAndGroupEgressPermissionsByDomain =
        e.EgressCategory =
        e.EgressType =
        e.globToRegex =
          void 0));
    var t = _n();
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
  yn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.EgressFilteringService = void 0));
    var t = _n(),
      n = vn();
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
  bn = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (Qe(), t(K));
    (n.__exportStar(yn(), e), n.__exportStar(_n(), e), n.__exportStar(vn(), e));
  }),
  xn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (Qe(), t(K)).__exportStar(bn(), e));
  }),
  Sn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.checkPermissions = e.createPermissionUtils = void 0));
    var t = xn(),
      n = Zt();
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
  Cn = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (Qe(), t(K));
    (n.__exportStar(gn(), e), n.__exportStar(Sn(), e));
  }),
  wn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (e.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = `Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.`));
  }),
  Tn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.checkRestrictedEnvironment = void 0));
    var t = J(),
      n = Zt(),
      r = wn();
    e.checkRestrictedEnvironment = async () => {
      let { environmentType: e } = await n.view.getContext();
      if (e === `PRODUCTION`)
        throw new t.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  }),
  En = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.upload = e.createUploadPromises = void 0));
    var t = nt(),
      n = J(),
      r = Tn(),
      i = (0, Y().getCallBridge)(),
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
  Dn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.deleteObjects = void 0));
    var t = nt(),
      n = J(),
      r = Tn(),
      i = (0, Y().getCallBridge)();
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
  On = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.download = void 0));
    var t = nt(),
      n = J(),
      r = Tn(),
      i = (0, Y().getCallBridge)();
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
  kn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getMetadata = void 0));
    var t = nt(),
      n = J(),
      r = Tn(),
      i = (0, Y().getCallBridge)();
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
  An = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.createUploadPromises = e.objectStore = void 0));
    var t = En();
    Object.defineProperty(e, `createUploadPromises`, {
      enumerable: !0,
      get: function () {
        return t.createUploadPromises;
      },
    });
    var n = Dn(),
      r = On(),
      i = kn();
    e.objectStore = {
      upload: t.upload,
      download: r.download,
      getMetadata: i.getMetadata,
      delete: n.deleteObjects,
    };
  }),
  jn = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (Qe(), t(K));
    (n.__exportStar(An(), e), n.__exportStar(wn(), e));
  }),
  Mn = i((e) => {
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
  Nn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.FeatureFlagEventType = void 0),
      (function (e) {
        e.CHECKFLAG = `checkFlag`;
      })((e.FeatureFlagEventType ||= {})));
  }),
  Pn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.trackFeatureFlagEvent = void 0));
    var t = Y(),
      n = J(),
      r = et(),
      i = Nn(),
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
  Fn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.initFeatureFlags = void 0));
    var t = Y(),
      n = J(),
      r = et(),
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
  In = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.FeatureFlags = void 0));
    var t = Mn(),
      n = Pn(),
      r = Fn(),
      i = Nn();
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
  Ln = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.FeatureFlags = void 0));
    var t = In();
    Object.defineProperty(e, `FeatureFlags`, {
      enumerable: !0,
      get: function () {
        return t.FeatureFlags;
      },
    });
  }),
  Rn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.i18n = e.NavigationTarget = void 0));
    var n = (Qe(), t(K)),
      r = $e();
    (Object.defineProperty(e, `NavigationTarget`, {
      enumerable: !0,
      get: function () {
        return r.NavigationTarget;
      },
    }),
      n.__exportStar(nt(), e),
      n.__exportStar(ot(), e),
      n.__exportStar(Zt(), e),
      n.__exportStar($t(), e),
      n.__exportStar(tn(), e),
      n.__exportStar(rn(), e),
      n.__exportStar(on(), e),
      n.__exportStar(sn(), e),
      n.__exportStar(un(), e),
      n.__exportStar(mn(), e),
      (e.i18n = n.__importStar(hn())),
      n.__exportStar(Cn(), e),
      n.__exportStar(jn(), e),
      n.__exportStar(Ln(), e));
  });
function zn() {}
function Bn(e, t) {
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
function Vn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Bn(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Bn(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Hn = (function () {
  function e(t) {
    var n = this;
    (I(this, e),
      R(this, `_isAnalyticsEvent`, !0),
      R(this, `clone`, function () {
        return new e({ payload: Vn({}, n.payload) });
      }),
      (this.payload = t.payload));
  }
  return j(e, [
    {
      key: `update`,
      value: function (e) {
        return (
          typeof e == `function` && (this.payload = e(this.payload)),
          z(e) === `object` && (this.payload = Vn(Vn({}, this.payload), e)),
          this
        );
      },
    },
  ]);
})();
function Un(e, t, n) {
  return ((t = L(t)), F(e, Wn() ? Reflect.construct(t, n || [], L(e).constructor) : t.apply(e, n)));
}
function Wn() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Wn = function () {
    return !!e;
  })();
}
function Gn(e, t, n, r) {
  var i = V(L(1 & r ? e.prototype : e), t, n);
  return 2 & r && typeof i == `function`
    ? function (e) {
        return i.apply(n, e);
      }
    : i;
}
var Kn = (function (e) {
    function t(e) {
      var n;
      return (
        I(this, t),
        (n = Un(this, t, [e])),
        R(n, `_isUIAnalyticsEvent`, !0),
        R(n, `clone`, function () {
          return n.hasFired
            ? null
            : new t({
                context: A(n.context),
                handlers: A(n.handlers),
                payload: JSON.parse(JSON.stringify(n.payload)),
              });
        }),
        R(n, `fire`, function (e) {
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
      te(t, e),
      j(t, [
        {
          key: `update`,
          value: function (e) {
            return this.hasFired ? this : Gn(t, `update`, this, 3)([e]);
          },
        },
      ])
    );
  })(Hn),
  qn = (0, G.createContext)({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Jn = function () {
    return (0, G.useContext)(qn);
  },
  Yn = function (e) {
    var t = (0, G.useRef)(e);
    return ((t.current = e), t);
  };
function Xn(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function Zn(e, t) {
  var n = (0, G.useState)(function () {
      return { inputs: t, result: e() };
    })[0],
    r = (0, G.useRef)(!0),
    i = (0, G.useRef)(n),
    a =
      r.current || (t && i.current.inputs && Xn(t, i.current.inputs))
        ? i.current
        : { inputs: t, result: e() };
  return (
    (0, G.useEffect)(
      function () {
        ((r.current = !1), (i.current = a));
      },
      [a],
    ),
    a.result
  );
}
function Qn(e, t) {
  return Zn(function () {
    return e;
  }, t);
}
function $n() {
  var e = Jn();
  return {
    createAnalyticsEvent: Qn(
      function (t) {
        return new Kn({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: t,
        });
      },
      [e],
    ),
  };
}
function er(e, t) {
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
function tr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? er(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : er(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function nr(e) {
  var t = e.fn,
    n = e.action,
    r = e.componentName,
    i = e.actionSubject,
    a = e.packageName,
    o = e.packageVersion,
    s = e.analyticsData,
    c = $n().createAnalyticsEvent,
    l = Yn(s),
    u = Yn(t);
  return (0, G.useCallback)(
    function (e) {
      var t = c({
          action: n,
          actionSubject: i || r,
          attributes: { componentName: r, packageName: a, packageVersion: o },
        }),
        s = tr({ componentName: r, packageName: a, packageVersion: o }, l.current);
      t.context.push(s);
      var d = t.clone();
      (d && d.fire(`atlaskit`), u.current(e, t));
    },
    [n, r, i, a, o, c, l, u],
  );
}
function rr(e, t) {
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
function ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? rr(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : rr(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ar(e) {
  var t = e.fn,
    n = e.action,
    r = e.componentName,
    i = e.packageName,
    a = e.packageVersion,
    o = e.analyticsData,
    s = $n().createAnalyticsEvent,
    c = Yn(o),
    l = Yn(t);
  return (0, G.useCallback)(
    function () {
      var e = s({
          action: n,
          actionSubject: r,
          attributes: { componentName: r, packageName: i, packageVersion: a },
        }),
        t = ir({ componentName: r, packageName: i, packageVersion: a }, c.current);
      e.context.push(t);
      var o = e.clone();
      (o && o.fire(`atlaskit`), l.current(e));
    },
    [n, r, i, a, s, c, l],
  );
}
function or(e, t) {
  var n = (0, G.useRef)(!0);
  (0, G.useEffect)(
    function () {
      (e && n.current && t && e.current && e.current.focus(), (n.current = !1));
    },
    [t, e],
  );
}
var sr = 2,
  cr = k({
    outline: `var(--ds-border-width-focused, 2px) solid var(--ds-border-focused, #4688EC)`,
    outlineOffset: sr,
  }),
  lr = k({
    outlineColor: `var(--ds-border-focused, #4688EC)`,
    outlineOffset: -sr,
    outlineStyle: `solid`,
    outlineWidth: `var(--ds-border-width-focused, 2px)`,
  }),
  ur = k({
    "&:focus": cr,
    "&:focus-visible": cr,
    "&:focus:not(:focus-visible)": { outline: `none` },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: `var(--ds-border-width, 1px) solid` },
    },
  }),
  dr = k({
    "&:focus": lr,
    "&:focus-visible": lr,
    "&:focus:not(:focus-visible)": { outline: `none` },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: `var(--ds-border-width, 1px) solid`, outlineOffset: `-1px` },
    },
  }),
  fr = (0, G.memo)(function (e) {
    var t = e.children,
      n = e.isInset,
      r = e.focus,
      i = r === void 0 ? (n ? dr : ur) : r === `on` && (n ? lr : cr);
    return d(D, null, function (e) {
      var n = e.css,
        r = e.cx;
      return G.Children.only(
        i ? (0, G.cloneElement)(t, { className: r([n(i), t.props.className]) }) : t,
      );
    });
  });
fr.displayName = `FocusRing`;
var pr = (0, G.createContext)(null);
function mr(e) {
  (e.preventDefault(), e.stopPropagation());
}
var hr = 9;
function gr(e) {
  e.keyCode !== hr && mr(e);
}
var _r = {
    onMouseDownCapture: mr,
    onMouseUpCapture: mr,
    onKeyDownCapture: gr,
    onKeyUpCapture: gr,
    onTouchStartCapture: mr,
    onTouchEndCapture: mr,
    onPointerDownCapture: mr,
    onPointerUpCapture: mr,
    onClickCapture: mr,
    onClick: mr,
  },
  vr = {};
function yr(e) {
  return e.isInteractive ? vr : _r;
}
function br(e) {
  var t = e.spacing;
  return k({
    margin: t === `none` ? 0 : `0 2px`,
    flexGrow: 1,
    flexShrink: 1,
    overflow: `hidden`,
    textOverflow: `ellipsis`,
    whiteSpace: `nowrap`,
  });
}
function xr(e) {
  var t = e.hasOverlay;
  return k({ opacity: +!t, transition: `opacity 0.3s` });
}
function Sr(e) {
  var t = e.spacing;
  return k({
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
g();
var Cr = function (e) {
  var t = e.children,
    n = e.testId,
    r = e.role,
    i = e.id;
  return G.createElement(
    `span`,
    {
      id: i,
      "data-testid": n,
      role: r,
      className: l([
        `_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c`,
      ]),
    },
    t,
  );
};
Cr.displayName = `VisuallyHidden`;
var wr = function (e) {
    return e && (0, G.isValidElement)(e) && e.type === Cr;
  },
  Tr = {
    position: `absolute`,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  Er = [
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
  Dr = { "> *": { pointerEvents: `none` } },
  Or = k({
    "--ds--button--new-icon-padding-end": `var(--ds-space-025, 2px)`,
    "--ds--button--new-icon-padding-start": `var(--ds-space-050, 4px)`,
    marginInlineStart: `var(--ds-space-negative-025, -2px)`,
  }),
  kr = k({
    "--ds--button--new-icon-padding-end": `var(--ds-space-050, 4px)`,
    "--ds--button--new-icon-padding-start": `var(--ds-space-025, 2px)`,
    marginInlineEnd: `var(--ds-space-negative-025, -2px)`,
  }),
  Ar = function (e, t) {
    return !e || wr(e) ? null : t;
  },
  jr = function (e, t) {
    return wr(e) ? e : e ? d(`span`, { css: t }, e) : null;
  },
  Mr = G.forwardRef(function (e, t) {
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
      C = S === void 0 ? zn : S,
      w = e.onFocus,
      T = e.onMouseDown,
      E = T === void 0 ? zn : T,
      D = e.overlay;
    e.shouldFitContainer;
    var A = e.spacing,
      j = A === void 0 ? `default` : A,
      N = e.tabIndex,
      P = N === void 0 ? 0 : N,
      F = e.type,
      I = F === void 0 ? (u ? void 0 : `button`) : F,
      ee = e.testId,
      te = M(e, Er),
      ne = (0, G.useRef)(),
      re = (0, G.useCallback)(
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
    or(ne, o);
    var L = (0, G.useContext)(pr),
      R = nr({
        fn: (0, G.useCallback)(
          function (e, t) {
            (L && L.tracePress(g, e.timeStamp), C(e, t));
          },
          [C, L, g],
        ),
        action: `clicked`,
        componentName: `button`,
        packageName: `@atlaskit/button`,
        packageVersion: `23.11.3`,
        analyticsData: n,
      }),
      z = (0, G.useCallback)(
        function (e) {
          (e.preventDefault(), E(e));
        },
        [E],
      );
    (0, G.useEffect)(
      function () {
        var e = ne.current;
        v && e && e === document.activeElement && e.blur();
      },
      [v],
    );
    var B = !!D,
      V = k(xr({ hasOverlay: B })),
      H = !v && !B,
      ie = {};
    return (
      (b || v || i === `warning`) &&
        (ie = {
          "[data-theme] & circle": {
            stroke: `${b || v ? `var(--ds-icon-subtle, #505258)` : `var(--ds-icon-warning-inverse, #292A2E)`} !important`,
          },
        }),
      d(
        fr,
        null,
        d(
          p,
          O(
            {},
            te,
            {
              ref: re,
              className: l,
              css: [s, H ? null : Dr],
              "data-has-overlay": B ? !0 : void 0,
              "data-testid": ee,
              disabled: v,
              href: H ? u : void 0,
              onBlur: x,
              onClick: R,
              onFocus: w,
              onMouseDown: z,
              tabIndex: v ? -1 : P,
              type: I,
            },
            yr({ isInteractive: H }),
          ),
          h ? d(`span`, { css: [V, Sr({ spacing: j }), Ar(c, Or)] }, h) : null,
          jr(c, [V, br({ spacing: j })]),
          m ? d(`span`, { css: [V, Sr({ spacing: j }), Ar(c, kr)] }, m) : null,
          D ? d(`span`, { css: [Tr, ie] }, D) : null,
        ),
      )
    );
  });
function Nr(e, t) {
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
function Pr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Nr(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Nr(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Fr = 8,
  Ir = [`default`, `primary`, `danger`, `warning`],
  Lr = { default: `${32 / 14}em`, compact: `${24 / 14}em`, none: `auto` },
  Rr = { default: Lr.default, compact: Lr.compact, none: `inherit` },
  zr = { default: `0 ${Fr + Fr / 4}px`, compact: `0 ${Fr + Fr / 4}px`, none: `0` },
  Br = { compact: `0 ${Fr / 4}px`, default: `0 ${Fr / 4}px`, none: `0` },
  Vr = { default: `middle`, compact: `middle`, none: `baseline` },
  Hr = {
    borderRadius: `inherit`,
    inset: `var(--ds-space-0, 0px)`,
    borderStyle: `solid`,
    borderWidth: `var(--ds-border-width, 1px)`,
    pointerEvents: `none`,
    position: `absolute`,
  },
  Ur = {
    background: `var(--ds-background-neutral-subtle, #00000000)`,
    color: `var(--ds-text, #292A2E)`,
    "&::after": Pr(Pr({}, Hr), {}, { content: `""`, borderColor: `var(--ds-border, #0B120E24)` }),
    "&:hover": { background: `var(--ds-background-neutral-hovered, #0B120E24)` },
    "&:active": { background: `var(--ds-background-neutral-pressed, #080F214A)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-neutral-subtle, #00000000)`,
    },
    "&:disabled[disabled]": { background: `var(--ds-background-neutral-subtle, #00000000)` },
    "&:disabled[disabled]:hover": { background: `var(--ds-background-neutral-subtle, #00000000)` },
    "&:disabled[disabled]:active": { background: `var(--ds-background-neutral-subtle, #00000000)` },
  },
  Wr = {
    background: `var(--ds-background-brand-bold, #1868DB)`,
    color: `var(--ds-text-inverse, #FFFFFF)`,
    "&:hover": { background: `var(--ds-background-brand-bold-hovered, #1558BC)` },
    "&:active": { background: `var(--ds-background-brand-bold-pressed, #144794)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-brand-bold, #1868DB)`,
    },
  },
  Gr = {
    background: `transparent`,
    color: `var(--ds-link, #1868DB)`,
    "&:hover": { color: `var(--ds-link, #1868DB)`, textDecoration: `underline` },
    "&:active": { color: `var(--ds-link-pressed, #1558BC)`, textDecoration: `underline` },
  },
  Kr = {
    background: `transparent`,
    color: `var(--ds-text-subtle, #505258)`,
    "&:hover": { background: `var(--ds-background-neutral-subtle-hovered, #0515240F)` },
    "&:active": { background: `var(--ds-background-neutral-subtle-pressed, #0B120E24)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: `transparent` },
  },
  qr = {
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
  Jr = {
    background: `var(--ds-background-warning-bold, #FBC828)`,
    color: `var(--ds-text-warning-inverse, #292A2E)`,
    "&:hover": { background: `var(--ds-background-warning-bold-hovered, #FCA700)` },
    "&:active": { background: `var(--ds-background-warning-bold-pressed, #F68909)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-warning-bold, #FBC828)`,
    },
  },
  Yr = {
    background: `var(--ds-background-danger-bold, #C9372C)`,
    color: `var(--ds-text-inverse, #FFFFFF)`,
    "&:hover": { background: `var(--ds-background-danger-bold-hovered, #AE2E24)` },
    "&:active": { background: `var(--ds-background-danger-bold-pressed, #872821)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-danger-bold, #C9372C)`,
    },
  },
  Xr = {
    background: `var(--ds-background-selected, #E9F2FE)`,
    color: `var(--ds-text-selected, #1868DB)`,
    "&:not([disabled])::after": Pr(
      Pr({}, Hr),
      {},
      { content: `""`, borderColor: `var(--ds-border-selected, #1868DB)` },
    ),
  },
  Zr = { '&[data-has-overlay="true"]': { cursor: `default`, textDecoration: `none` } };
function Qr(e) {
  var t = e.appearance,
    n = e.spacing,
    r = e.isSelected,
    i = e.shouldFitContainer,
    a = e.isOnlySingleIcon;
  return Pr(
    Pr(
      {
        alignItems: `baseline`,
        borderWidth: 0,
        borderRadius: W(`platform-dst-shape-theme-default`)
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
        height: Lr[n],
        lineHeight: Rr[n],
        padding: a ? Br[n] : zr[n],
        verticalAlign: Vr[n],
        width: i ? `100%` : `auto`,
        justifyContent: `center`,
      },
      r
        ? Xr
        : Pr(
            Pr(
              Pr(
                Pr(
                  Pr(
                    Pr(
                      Pr(Pr({}, t === `default` && Ur), t === `primary` && Wr),
                      t === `link` && Gr,
                    ),
                    t === `subtle` && Kr,
                  ),
                  t === `subtle-link` && qr,
                ),
                t === `warning` && Jr,
              ),
              t === `danger` && Yr,
            ),
            {},
            {
              "&[disabled]": {
                color: `var(--ds-text-disabled, #080F214A)`,
                backgroundColor: Ir.includes(t)
                  ? `var(--ds-background-disabled, #17171708)`
                  : `transparent`,
                cursor: `not-allowed`,
                textDecoration: `none`,
                "&:hovered": {
                  backgroundColor: Ir.includes(t)
                    ? `var(--ds-background-disabled, #17171708)`
                    : `transparent`,
                },
                "&:active": {
                  backgroundColor: Ir.includes(t)
                    ? `var(--ds-background-disabled, #17171708)`
                    : `transparent`,
                },
              },
            },
            Zr,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function $r(e) {
  var t = e.children,
    n = e.iconBefore,
    r = e.iconAfter;
  return wr(t) ? !0 : t ? !1 : !!((n && !r) || (!n && r));
}
var ei = [
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
  ti = typeof navigator < `u` && navigator.userAgent.toLowerCase().indexOf(`firefox`) > -1,
  ni = G.memo(
    G.forwardRef(function (e, t) {
      var n = e.appearance,
        r = n === void 0 ? `default` : n,
        i = e.children,
        a = e.iconBefore,
        o = e.iconAfter,
        s = e.isSelected,
        c = s === void 0 ? !1 : s,
        l = e.onMouseDown,
        u = l === void 0 ? zn : l,
        d = e.onMouseUp,
        f = d === void 0 ? zn : d,
        p = e.shouldFitContainer,
        m = p === void 0 ? !1 : p,
        h = e.spacing,
        g = h === void 0 ? `default` : h,
        _ = M(e, ei),
        v = $r({ children: i, iconBefore: a, iconAfter: o }),
        y = N((0, G.useState)(!1), 2),
        b = y[0],
        x = y[1],
        S = (0, G.useCallback)(
          function (e) {
            (u(e), ti && x(!0));
          },
          [u, x],
        ),
        C = (0, G.useCallback)(
          function (e) {
            (f(e), ti && x(!1));
          },
          [f, x],
        ),
        w = (0, G.useMemo)(
          function () {
            return Qr({
              appearance: r,
              spacing: g,
              isSelected: c,
              shouldFitContainer: m,
              isOnlySingleIcon: v,
            });
          },
          [r, g, c, m, v],
        );
      return G.createElement(
        Mr,
        O({}, _, {
          ref: t,
          appearance: r,
          buttonCss: w,
          children: i,
          "data-firefox-is-active": b ? !0 : void 0,
          iconAfter: o,
          iconBefore: a,
          isSelected: c,
          onMouseDown: S,
          onMouseUp: C,
          spacing: g,
        }),
      );
    }),
  );
ni.displayName = `Button`;
var ri = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
g();
function ii(e) {
  return e === `inherit` ? `var(--ds-icon-subtle, #505258)` : `var(--ds-icon-inverse, #FFFFFF)`;
}
var ai = {
    rotateStyles: `_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o`,
    loadInStyles: `_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw`,
    wrapperStyles: `_1e0c116y _s7n4nkob`,
    circleStyles: `_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz`,
  },
  oi = typeof window > `u` ? G.useEffect : G.useLayoutEffect,
  si = G.memo(
    G.forwardRef(function (e, t) {
      var n = e.appearance,
        r = n === void 0 ? `inherit` : n,
        i = e.delay,
        a = i === void 0 ? 0 : i,
        o = e.interactionName,
        s = e.label,
        c = e.size,
        u = c === void 0 ? `medium` : c,
        d = e.testId,
        f = typeof u == `number` ? u : ri[u],
        p = `${a}ms`,
        m = ii(r),
        h = (0, G.useContext)(pr);
      return (
        oi(
          function () {
            if (h != null) return h.hold(o);
          },
          [h, o],
        ),
        G.createElement(
          `span`,
          {
            "data-testid": d ? `${d}-wrapper` : `spinner-wrapper`,
            style: { animationDelay: p, width: f, height: f },
            className: l([ai.wrapperStyles, ai.rotateStyles]),
          },
          G.createElement(
            `svg`,
            {
              height: f,
              width: f,
              viewBox: `0 0 16 16`,
              xmlns: `http://www.w3.org/2000/svg`,
              "data-testid": d,
              ref: t,
              "aria-label": s || void 0,
              style: { animationDelay: p },
              role: s ? `img` : `none`,
              className: l([ai.loadInStyles]),
            },
            G.createElement(`circle`, {
              cx: `8`,
              cy: `8`,
              r: `7`,
              style: { stroke: m },
              className: l([ai.circleStyles]),
            }),
          ),
        )
      );
    }),
  ),
  ci = {
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
  li = function (e, t, n) {
    return e + (n && isFinite(n) ? (t - 1) * n : 0);
  },
  ui = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      r = arguments.length > 3 ? arguments[3] : void 0,
      i = e.destination,
      a = e.sourceIndex;
    if (!i) return t;
    var o = li(a, n, r),
      s = li(i.index, n, r),
      c = t.slice(),
      l = N(c.splice(o, 1), 1)[0];
    return (c.splice(s, 0, l), c);
  },
  di = function (e) {
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
g();
var fi = function (e) {
  var t = e.children;
  return G.createElement(
    `caption`,
    { className: l([`_11c81af2 _6rthu2gc _1pfh1ejb _m6k41e03`]) },
    t,
  );
};
g();
var pi = function (e) {
  var t = e.children,
    n = e.testId;
  return G.createElement(
    `div`,
    {
      "data-testid": n && `${n}--empty-view-container`,
      className: l([
        `_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o`,
      ]),
    },
    t,
  );
};
g();
var mi = function (e) {
  var t = e.children,
    n = e.testId;
  return G.createElement(
    `div`,
    { "data-testid": n && `${n}--empty-view-with-fixed-height`, className: l([`_4t3i1jdh`]) },
    t,
  );
};
g();
var hi = function (e) {
  var t = e.children,
    n = e.testId;
  return G.createElement(
    `div`,
    { "data-testid": n && `${n}--pagination--container`, className: l([`_1e0c1txw _1bah1h6o`]) },
    t,
  );
};
g();
var gi = [`isFixedSize`, `hasDataRow`, `children`, `testId`, `isLoading`],
  _i = (0, G.forwardRef)(function (e, t) {
    var n = e.isFixedSize,
      r = e.hasDataRow,
      i = e.children,
      a = e.testId,
      o = e.isLoading,
      s = M(e, gi);
    return G.createElement(
      `table`,
      O(
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
          className: l([
            `_1bsb1osq _yq5hus1c _btyzidpf _ect4ttxp`,
            n && `_1kqm1n9t`,
            r && `_179r1uh4`,
          ]),
        },
      ),
      i,
    );
  }),
  vi = [`cells`],
  yi = [`content`, `testId`],
  bi = function (e) {
    var t = e.row,
      n = e.head,
      r = e.testId,
      i = e.isFixedSize,
      a = e.isHighlighted,
      o = t.cells,
      s = M(t, vi);
    return G.createElement(
      u,
      O(
        {},
        s,
        { isHighlighted: a },
        a ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: t.testId || (r && `${r}--row-${s.key}`) },
      ),
      o.map(function (e, t) {
        var a = e.content,
          o = e.testId,
          s = M(e, yi),
          c = (n || { cells: [] }).cells[t] || {},
          l = c.shouldTruncate,
          u = c.width;
        return G.createElement(
          x,
          O({ "data-testid": o || (r && `${r}--cell-${t}`) }, s, {
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
function xi(e, t, n) {
  return ((t = L(t)), F(e, Si() ? Reflect.construct(t, n || [], L(e).constructor) : t.apply(e, n)));
}
function Si() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Si = function () {
    return !!e;
  })();
}
var Ci = (function (e) {
    function t() {
      return (I(this, t), xi(this, t, arguments));
    }
    return (
      te(t, e),
      j(t, [
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
            return G.createElement(
              `tbody`,
              { "data-testid": a && `${a}--body`, ref: o },
              t.map(function (e, t) {
                return G.createElement(bi, {
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
  })(G.Component),
  wi = f(
    G.forwardRef(function (e, t) {
      return G.createElement(Ci, O({}, e, { forwardedRef: t }));
    }),
  );
function Ti(e, t, n) {
  return ((t = L(t)), F(e, Ei() ? Reflect.construct(t, n || [], L(e).constructor) : t.apply(e, n)));
}
function Ei() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ei = function () {
    return !!e;
  })();
}
var Di = (function (e) {
  function t(e) {
    var n;
    return (I(this, t), (n = Ti(this, t, [e])), (n.state = { hasError: !1 }), n);
  }
  return (
    te(t, e),
    j(
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
})(G.Component);
g();
var Oi = function (e) {
  var t = e.children,
    n = e.testId;
  return G.createElement(
    `div`,
    { "data-testid": n && `${n}--container`, className: l([`_kqswh2mm`]) },
    t,
  );
};
g();
function ki(e, t) {
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
function Ai(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ki(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ki(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var ji = `--contents-opacity`,
  Mi = function (e) {
    var t = e.children,
      n = e.contentsOpacity,
      r = e.testId;
    return G.createElement(
      `div`,
      {
        "data-testid": r && `${r}--contents--container`,
        className: l([`_tzy47hfw _lcxvglyw`]),
        style: Ai(Ai({}, R({}, ji, n)), {}, { "--_cnddr8": h(`var(${ji})`) }),
      },
      t,
    );
  };
g();
var Ni = function (e) {
  var t = e.children,
    n = e.testId;
  return G.createElement(
    `div`,
    {
      "data-testid": n && `${n}--spinner--container`,
      className: l([`_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o`]),
    },
    t,
  );
};
function Pi(e, t, n) {
  return ((t = L(t)), F(e, Fi() ? Reflect.construct(t, n || [], L(e).constructor) : t.apply(e, n)));
}
function Fi() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Fi = function () {
    return !!e;
  })();
}
var Ii = (function (e) {
  function t() {
    return (I(this, t), Pi(this, t, arguments));
  }
  return (
    te(t, e),
    j(t, [
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
          return G.createElement(
            Oi,
            { testId: a },
            n ? G.createElement(Mi, { contentsOpacity: i, testId: a }, t) : t,
            n &&
              G.createElement(
                Ni,
                { testId: a },
                G.createElement(si, { size: r, testId: a && `${a}--loadingSpinner`, label: o }),
              ),
          );
        },
      },
    ])
  );
})(G.Component);
(R(Ii, `defaultProps`, {
  isLoading: !0,
  spinnerSize: m,
  contentsOpacity: S,
  loadingLabel: `Loading table`,
}),
  g());
var Li = [`children`, `testId`];
function Ri(e, t, n) {
  return ((t = L(t)), F(e, zi() ? Reflect.construct(t, n || [], L(e).constructor) : t.apply(e, n)));
}
function zi() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (zi = function () {
    return !!e;
  })();
}
var Bi = (0, G.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.testId,
      i = M(e, Li);
    return G.createElement(
      `div`,
      O({}, i, { "data-testid": r, ref: t, className: l([`_kqswh2mm _6rth1ejb`]) }),
      n,
    );
  }),
  Vi = function (e) {
    var t = e.children,
      n = e.testId;
    return G.createElement(
      `div`,
      {
        "data-testid": n && `${n}--spinner-backdrop`,
        className: l([`_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw`]),
      },
      t,
    );
  },
  Hi = (0, G.forwardRef)(function (e, t) {
    var n = e.children;
    return G.createElement(`div`, { ref: t, className: l([`_kqswh2mm _152tidpf`]) }, n);
  }),
  Ui = (function (e) {
    function t() {
      var e;
      I(this, t);
      var n = [...arguments];
      return (
        (e = Ri(this, t, [].concat(n))),
        R(e, `spinnerRef`, G.createRef()),
        R(e, `containerRef`, G.createRef()),
        R(e, `componentDidMount`, function () {
          e.props.isLoading &&
            e.hasTargetNode() &&
            (e.attachListeners(), e.updateTargetAppearance(), e.updateSpinnerPosition());
        }),
        R(e, `UNSAFE_componentWillReceiveProps`, function (t) {
          !t.isLoading || !e.hasTargetNode(t)
            ? e.detachListeners()
            : e.props.isLoading || e.attachListeners();
        }),
        R(e, `componentDidUpdate`, function () {
          e.hasTargetNode() &&
            (e.updateTargetAppearance(), e.props.isLoading && e.updateSpinnerPosition());
        }),
        R(e, `componentWillUnmount`, function () {
          e.detachListeners();
        }),
        R(e, `getTargetNode`, function () {
          var t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.props)
            .targetRef;
          return t?.() || e.containerRef.current;
        }),
        R(e, `hasTargetNode`, function (t) {
          return !!e.getTargetNode(t);
        }),
        R(e, `isVerticallyVisible`, function (e, t) {
          var n = e.top;
          return e.bottom <= 0 ? !1 : n < t;
        }),
        R(e, `isFullyVerticallyVisible`, function (e, t) {
          var n = e.top,
            r = e.bottom;
          return n >= 0 && r <= t;
        }),
        R(e, `handleResize`, function () {
          e.updateSpinnerPosition();
        }),
        R(e, `handleScroll`, function () {
          e.updateSpinnerPosition();
        }),
        R(e, `translateSpinner`, function (e, t, n) {
          ((e.style.position = n ? `fixed` : ``),
            (e.style.transform = t === 0 ? `` : `translate3d(0, ${t}px, 0)`));
        }),
        R(e, `updateTargetAppearance`, function () {
          var t = e.getTargetNode(),
            n = e.props,
            r = n.isLoading,
            i = n.contentsOpacity;
          t &&
            t.style &&
            z(t.style) === `object` &&
            ((t.style.pointerEvents = r ? `none` : ``), (t.style.opacity = r ? i.toString() : ``));
        }),
        e
      );
    }
    return (
      te(t, e),
      j(t, [
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
            return G.createElement(
              Bi,
              { testId: i && `${i}--loading--container--advanced`, ref: this.containerRef },
              t,
              n &&
                G.createElement(
                  Vi,
                  { testId: i },
                  G.createElement(
                    Hi,
                    { ref: this.spinnerRef },
                    G.createElement(si, { size: r, testId: i && `${i}--loadingSpinner`, label: a }),
                  ),
                ),
            );
          },
        },
      ])
    );
  })(G.Component);
R(Ui, `defaultProps`, {
  isLoading: !0,
  spinnerSize: m,
  contentsOpacity: `var(--ds-opacity-loading, 0.2)`,
  loadingLabel: `Loading table`,
});
function Wi(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    n = e !== void 0,
    r = N((0, G.useState)(t), 2),
    i = r[0],
    a = r[1],
    o = (0, G.useRef)(n);
  return (
    (0, G.useEffect)(
      function () {
        o.current = n;
      },
      [n],
    ),
    [
      n ? e : i,
      (0, G.useCallback)(function (e) {
        o.current || a(e);
      }, []),
    ]
  );
}
var Gi = n(() => {}),
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi = n(() => {
    (Gi(),
      (Ki = e(o())),
      g(),
      (qi = e(o())),
      (Ji = {
        none: `_1bsbpxbi _4t3ipxbi`,
        compact: `_1bsb1ejb _4t3i1ejb`,
        spacious: `_1bsb1ejb _4t3i1ejb`,
      }),
      (Yi = {
        none: `_1bsbutpp _4t3iutpp`,
        compact: `_1bsbpxbi _4t3ipxbi`,
        spacious: `_1bsb1ejb _4t3i1ejb`,
      }),
      (Xi = {
        medium: { none: 0, compact: 4, spacious: 4 },
        small: { none: 0, compact: 2.66, spacious: 8 },
      }),
      (Zi = (0, qi.memo)(function (e) {
        var t = e,
          n = t.color,
          r = n === void 0 ? `currentColor` : n,
          i = t.testId,
          a = t.label,
          o = t.dangerouslySetGlyph,
          s = t.shouldScale,
          c = t.spacing,
          u = c === void 0 ? `none` : c,
          d = t.name,
          f = o ? { __html: o } : void 0,
          p = `medium`;
        if (`size` in e && e.size !== void 0) {
          if (typeof e.size == `string`) p = e.size === `small` || e.size === `medium` ? e.size : p;
          else if (d) {
            var m = e.size(d);
            p = m === `small` || m === `medium` ? m : p;
          }
        }
        var h = 16,
          g = Xi[p][u],
          _ = h + 2 * g;
        return Ki.createElement(
          `span`,
          {
            "data-testid": i,
            role: a ? `img` : void 0,
            "aria-label": a || void 0,
            "aria-hidden": a ? void 0 : !0,
            style: { color: r },
            className: l([
              `_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9`,
              `_12va1onz _jcxd1r8n`,
              s && `_1bsb1kw7 _4t3i1kw7`,
              p === `small` && `_vwz4utpp`,
            ]),
          },
          Ki.createElement(`svg`, {
            fill: `none`,
            viewBox: `${0 - g} ${0 - g} ${_} ${_}`,
            role: `presentation`,
            dangerouslySetInnerHTML: f,
            className: l([
              `_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31`,
              s ? `_1bsb1kw7 _4t3i1kw7` : p === `small` ? Yi[u] : Ji[u],
            ]),
          }),
        );
      })));
  }),
  $i = r({ Icon: () => Zi, default: () => Zi }),
  ea = n(() => {
    Qi();
  }),
  ta = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((ea(), t($i)));
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
  na = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((ea(), t($i)));
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
  ra = (0, G.createContext)(`elevation.surface`),
  ia = function () {
    return (0, G.useContext)(ra);
  };
((ra.displayName = `SurfaceProvider`), g());
var aa = [
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
  oa = [`className`],
  sa = {
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
  ca = {
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
  la = {
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
  ua = {
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
  da = {
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
  fa = {
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
  pa = (0, G.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `div` : n,
      i = e.children,
      a = e.backgroundColor,
      o = e.padding,
      s = e.paddingBlock,
      c = s === void 0 ? o : s,
      u = e.paddingBlockStart,
      d = u === void 0 ? c : u,
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
      C = M(e, aa);
    C.className;
    var w = M(C, oa),
      T = G.createElement(
        r,
        O(
          {
            style: b,
            ref: t,
            className: l([
              `_19itglyw _vchhusvi _r06hglyw`,
              a && sa[a],
              a && ma(a) && ca[a],
              d && la[d],
              p && ua[p],
              _ && da[_],
              y && fa[y],
              S,
            ]),
          },
          w,
          { "data-testid": x },
        ),
        i,
      );
    return a ? G.createElement(ra.Provider, { value: a }, T) : T;
  });
function ma(e) {
  return e in ca;
}
var ha = () =>
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
g();
var ga = (...e) => l(e);
function _a() {
  return {
    css() {
      throw ha();
    },
    cssMap() {
      throw ha();
    },
    cx: ga,
    XCSSProp() {
      throw ha();
    },
  };
}
var va = _a();
(va.css, va.cssMap, va.cssMap);
var ya = va.cx;
(va.XCSSProp, g());
var ba = [
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
  xa = {
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
  Sa = {
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
  Ca = {
    start: `_1bahv2br`,
    center: `_1bah1h6o`,
    end: `_1bahh9n0`,
    "space-between": `_1bah1yb4`,
    "space-around": `_1bah1b1v`,
    "space-evenly": `_1bahitcz`,
    stretch: `_1bah1fhb`,
  },
  wa = { column: `_2lx21bp4`, row: `_2lx2vrvc` },
  Ta = { wrap: `_1n261g80`, nowrap: `_1n261q9c` },
  Ea = {
    start: `_4cvrv2br`,
    center: `_4cvr1h6o`,
    baseline: `_4cvr1q9y`,
    end: `_4cvrh9n0`,
    stretch: `_4cvr1fhb`,
  },
  Da = { root: `_1e0c1txw _vchhusvi` },
  Oa = (0, G.memo)(
    (0, G.forwardRef)(function (e, t) {
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
        g = M(e, ba);
      return G.createElement(
        r,
        O({}, g, {
          role: i,
          className: l([
            Da.root,
            s && Sa[s],
            c && Sa[c],
            s && xa[s],
            u && xa[u],
            a && Ea[a],
            p && wa[p],
            o && Ca[o],
            m && Ta[m],
            h,
          ]),
          "data-testid": f,
          ref: t,
        }),
        d,
      );
    }),
  );
((Oa.displayName = `Flex`), g());
var ka = [
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
  Aa = {
    separator: `_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw`,
    hug: `_16jlidpf`,
    fill: `_1bsb1osq _16jlkb7n`,
  },
  ja = function (e) {
    var t = e.children;
    return G.createElement(`span`, { className: l([Aa.separator]) }, t);
  },
  Ma = (0, G.memo)(
    (0, G.forwardRef)(function (e, t) {
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
        g = e.children,
        _ = M(e, ka),
        v = typeof f == `string` ? G.createElement(ja, null, f) : f,
        y = v
          ? G.Children.toArray(g)
              .filter(Boolean)
              .map(function (e, t) {
                return G.createElement(G.Fragment, { key: t }, f && t > 0 ? v : null, e);
              })
          : g;
      return G.createElement(
        Oa,
        O({}, _, {
          as: n,
          role: h,
          alignItems: a,
          justifyContent: c || r,
          direction: `row`,
          gap: u,
          rowGap: d,
          wrap: s ? `wrap` : void 0,
          xcss: ya(l === `hug` && Aa.hug, l === `fill` && Aa.fill, p),
          testId: m,
          ref: t,
        }),
        y,
      );
    }),
  );
Ma.displayName = `Inline`;
var Na = [
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
  Pa = { hug: `_16jlidpf`, fill: `_1bsb1osq _16jlkb7n` },
  Fa = (0, G.memo)(
    (0, G.forwardRef)(function (e, t) {
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
        p = M(e, Na);
      return G.createElement(
        Oa,
        O({}, p, {
          as: n,
          role: f,
          gap: c,
          direction: `column`,
          alignItems: r,
          justifyContent: o || a,
          xcss: ya(s === `hug` && Pa.hug, s === `fill` && Pa.fill, d),
          testId: u,
          ref: t,
        }),
        l,
      );
    }),
  );
Fa.displayName = `Stack`;
var Ia = (0, G.createContext)(!1),
  La = function () {
    return (0, G.useContext)(Ia);
  },
  Ra = Ia.Provider;
g();
var za = [`span`, `p`, `strong`, `em`],
  Ba = function (e, t) {
    var n = ia();
    if (e !== `inherit`) {
      if (e) return e;
      if (!t) return Ga.hasOwnProperty(n) ? Ga[n] : `color.text`;
    }
  },
  Va = {
    root: `_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65`,
    "as.strong": `_k48pwu06`,
    "as.em": `_zg8l1m30`,
    "textAlign.center": `_y3gn1h6o`,
    "textAlign.end": `_y3gnh9n0`,
    "textAlign.start": `_y3gnv2br`,
    truncation: `_1reo15vq _18m915vq _1e0ccj1k _sudp1e54`,
    breakAll: `_1nmz9jpi`,
  },
  Ha = { medium: `_11c8fhey`, large: `_11c81d4k`, small: `_11c8wadc` },
  Ua = { bold: `_k48pwu06`, medium: `_k48p1wq8`, regular: `_k48pi7a9`, semibold: `_k48p1pd9` },
  Wa = {
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
  Ga = {
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
  Ka = (0, G.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `span` : n,
      i = e.color,
      a = e.align,
      o = e.testId,
      s = e.id,
      c = e.size,
      u = e.weight,
      d = e.maxLines,
      f = e.xcss,
      p = e.children;
    _(za.includes(r), `@atlaskit/primitives: Text received an invalid "as" value of "${r}"`);
    var m = La(),
      h = Ba(i, m);
    !c && !m && (c = `medium`);
    var g = G.createElement(
      r,
      {
        id: s,
        className: l([
          Va.root,
          c && Ha[c],
          h && Wa[h],
          d && Va.truncation,
          d === 1 && Va.breakAll,
          a && Va[`textAlign.${a}`],
          u && Ua[u],
          r === `em` && Va[`as.em`],
          r === `strong` && Va[`as.strong`],
          f,
        ]),
        style: { WebkitLineClamp: d },
        "data-testid": o,
        ref: t,
      },
      p,
    );
    return m ? g : G.createElement(Ra, { value: !0 }, g);
  });
function qa() {
  if (typeof window < `u` && window.navigator != null) {
    var e = window.navigator.userAgent?.toLowerCase();
    return e ? e.includes(`safari`) && !e.includes(`chrome`) : !1;
  }
  return !1;
}
g();
var Ja = [`as`, `children`, `isInset`, `testId`, `style`, `xcss`],
  Ya = [`className`],
  Xa = (0, G.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `button` : n,
      i = e.children,
      a = e.isInset,
      o = e.testId,
      s = e.style,
      c = e.xcss,
      u = M(e, Ja);
    u.className;
    var d = M(u, Ya);
    return G.createElement(
      r,
      O({}, d, {
        ref: t,
        className: l([
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
  Za = [
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
  Qa = [`className`],
  $a = { root: `_19itglyw _vchhusvi _r06hglyw _80omtlke`, disabled: `_80om13gf` },
  eo = (0, G.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.isDisabled,
      i = e.type,
      a = i === void 0 ? `button` : i,
      o = e.onClick,
      s = o === void 0 ? zn : o,
      c = e.interactionName,
      l = e.componentName,
      u = e.analyticsContext,
      d = e.style,
      f = e.testId,
      p = e.xcss,
      m = e.tabIndex,
      h = M(e, Za),
      g = (0, G.useContext)(pr),
      _ = nr({
        fn: (0, G.useCallback)(
          function (e, t) {
            (g && g.tracePress(c, e.timeStamp), s(e, t));
          },
          [s, g, c],
        ),
        action: `clicked`,
        componentName: l || `Pressable`,
        packageName: `@atlaskit/primitives`,
        packageVersion: `19.0.0`,
        analyticsData: u,
        actionSubject: `button`,
      });
    h.className;
    var v = M(h, Qa);
    return G.createElement(
      Xa,
      O({ as: `button`, tabIndex: m ?? (qa() && !r ? 0 : void 0), style: d }, v, {
        type: a,
        onClick: _,
        disabled: r,
        xcss: ga($a.root, r && $a.disabled, p),
        testId: f,
        ref: t,
      }),
      n,
    );
  }),
  to = (0, G.createContext)(!1),
  no = function () {
    return (0, G.useContext)(to);
  },
  ro = (0, G.createContext)(!1),
  io = function () {
    return (0, G.useContext)(ro);
  },
  ao = [`light`, `dark`, `spacing`, `typography`, `shape`, `motion`],
  oo = `UNSAFE_themeOptions`,
  so = function (e) {
    return (
      ao.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  co = function (e) {
    return (
      ie.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  lo = function (e) {
    return [`light`, `dark`, `auto`].includes(e);
  },
  uo = function (e) {
    return e
      .split(` `)
      .map(function (e) {
        return e.split(/:([^]*)/);
      })
      .reduce(function (e, t) {
        var n = N(t, 2),
          r = n[0],
          i = n[1];
        if ((r === `colorMode` && lo(i) && (e[r] = i), so(r) && co(i) && (e[r] = i), r === oo))
          try {
            e[oo] = JSON.parse(i);
          } catch {}
        return e;
      }, {});
  },
  fo = function (e) {
    return Object.entries(e).reduce(function (e, t) {
      var n = N(t, 2),
        r = n[0],
        i = n[1];
      return (r === `colorMode` && typeof i == `string` && lo(i)) ||
        (r === oo && z(i) === `object`) ||
        (so(r) && typeof i == `string` && co(i))
        ? e + `${e ? ` ` : ``}${r}:${z(i) === `object` ? JSON.stringify(i) : i}`
        : e;
    }, ``);
  };
function po(e, t) {
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
function mo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? po(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : po(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var ho = function (e) {
    return (
      se.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  go = function () {
    if (typeof document > `u`) return {};
    var e = document.documentElement,
      t = e.getAttribute(`data-color-mode`) || ``;
    return mo(mo({}, uo(e.getAttribute(`data-theme`) || ``)), ho(t) && { colorMode: t });
  };
function _o(e, t) {
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
function vo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? _o(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : _o(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var yo = `light`,
  bo = `no-preference`,
  xo = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.colorMode,
      n = t === void 0 ? B.colorMode : t,
      r = e.dark,
      i = r === void 0 ? B.dark : r,
      a = e.light,
      o = a === void 0 ? B.light : a,
      s = e.contrastMode,
      c = s === void 0 ? B.contrastMode : s,
      l = e.motion,
      u = l === void 0 ? B.motion() : l,
      d = e.shape,
      f = d === void 0 ? B.shape() : d,
      p = e.spacing,
      m = p === void 0 ? B.spacing : p,
      h = e.typography,
      g = h === void 0 ? B.typography : h,
      _ = e.UNSAFE_themeOptions,
      v = _ === void 0 ? B.UNSAFE_themeOptions : _,
      y = R(
        R({}, he, fo({ dark: i, light: o, motion: u, shape: f, spacing: m, typography: g })),
        de,
        n === `auto` ? yo : n,
      );
    if (
      (W(`platform_increased-contrast-themes`) &&
        (y = vo(vo({}, y), {}, R({}, ue, c === `auto` ? bo : c))),
      v && ce(v.brandColor))
    ) {
      var b = U(JSON.stringify(v));
      y[oe] = b;
    }
    return y;
  };
jt();
var So = {
    light: function () {
      return At(() => import(`./atlassian-light-B4KoDEbt.js`), [], import.meta.url);
    },
    "light-future": function () {
      return At(() => import(`./atlassian-light-future-DKM5j9ZV.js`), [], import.meta.url);
    },
    "light-increased-contrast": function () {
      return At(
        () => import(`./atlassian-light-increased-contrast-jVeZopnG.js`),
        [],
        import.meta.url,
      );
    },
    dark: function () {
      return At(() => import(`./atlassian-dark-BitxfF75.js`), [], import.meta.url);
    },
    "dark-future": function () {
      return At(() => import(`./atlassian-dark-future-CwgxGfeB.js`), [], import.meta.url);
    },
    "dark-increased-contrast": function () {
      return At(
        () => import(`./atlassian-dark-increased-contrast-Cnh8Zgxj.js`),
        [],
        import.meta.url,
      );
    },
    spacing: function () {
      return At(() => import(`./atlassian-spacing-Clc_kSQO.js`), [], import.meta.url);
    },
    typography: function () {
      return At(() => import(`./atlassian-typography-B1SRcYiZ.js`), [], import.meta.url);
    },
    shape: function () {
      return At(() => import(`./atlassian-shape-4W9UVfYR.js`), [], import.meta.url);
    },
    motion: function () {
      return At(() => import(`./atlassian-motion-DJC8sDd8.js`), [], import.meta.url);
    },
  },
  X = e(ae()),
  Co = (function () {
    var e = H(
      X.default.mark(function e(t) {
        var n, r;
        return X.default.wrap(function (e) {
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
                return ((e.next = 6), wo(t));
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
  wo = (function () {
    var e = H(
      X.default.mark(function e(t) {
        var n, r;
        return X.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), So[t]());
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
  To = C(),
  Eo = typeof window < `u` && `matchMedia` in window;
function Do(e) {
  document.documentElement.setAttribute(de, e.matches ? `dark` : `light`);
}
var Oo = Eo && window.matchMedia(`(prefers-color-scheme: dark)`),
  ko = new ((function () {
    function e() {
      (I(this, e), R(this, `unbindThemeChangeListener`, null));
    }
    return j(e, [
      {
        key: `getColorMode`,
        value: function () {
          return Oo && Oo != null && Oo.matches ? `dark` : `light`;
        },
      },
      {
        key: `bind`,
        value: function () {
          Oo &&
            this.unbindThemeChangeListener === null &&
            (this.unbindThemeChangeListener = (0, To.bind)(Oo, { type: `change`, listener: Do }));
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
  Ao = typeof window < `u` && `matchMedia` in window;
function jo(e) {
  document.documentElement.setAttribute(ue, e.matches ? `more` : `no-preference`);
}
var Mo = Ao && window.matchMedia(`(prefers-contrast: more)`),
  No = new ((function () {
    function e() {
      (I(this, e), R(this, `unbindContrastChangeListener`, null));
    }
    return j(e, [
      {
        key: `getContrastMode`,
        value: function () {
          return Mo && Mo != null && Mo.matches ? `more` : `no-preference`;
        },
      },
      {
        key: `bind`,
        value: function () {
          Mo &&
            this.unbindContrastChangeListener === null &&
            (this.unbindContrastChangeListener = (0, To.bind)(Mo, {
              type: `change`,
              listener: jo,
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
function Po(e) {
  (e.colorMode === `auto` ? ((e.colorMode = ko.getColorMode()), ko.bind()) : ko.unbind(),
    W(`platform_increased-contrast-themes`) &&
      (e.contrastMode === `auto`
        ? ((e.contrastMode = No.getContrastMode()), No.bind())
        : No.unbind()));
  var t = xo(e);
  return (
    Object.entries(t).forEach(function (e) {
      var t = N(e, 2),
        n = t[0],
        r = t[1];
      document.documentElement.setAttribute(n, r);
    }),
    function () {
      (ko.unbind(), W(`platform_increased-contrast-themes`) && No.unbind());
    }
  );
}
function Fo(e) {
  return Object.entries(me).find(function (t) {
    return N(t, 2)[1].increasesContrastFor === e;
  })?.[1].id;
}
var Io = function (e) {
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
        W(`platform_increased-contrast-themes`) &&
        l.forEach(function (e) {
          var t = Fo(e);
          t && l.push(t);
        }),
        u.push.apply(u, l));
    else if ((u.push(e[t]), n !== `no-preference` && W(`platform_increased-contrast-themes`))) {
      var d = Fo(e[t]);
      d && u.push(d);
    }
    return (
      [a, o, s, c].forEach(function (e) {
        e && u.push(e);
      }),
      A(new Set(u))
    );
  },
  Lo = function (e) {
    return A(new Set([]));
  };
jt();
function Ro(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = zo(e)) || (t && e && typeof e.length == `number`)) {
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
function zo(e, t) {
  if (e) {
    if (typeof e == `string`) return Bo(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Bo(e, t)
          : void 0
    );
  }
}
function Bo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Vo(e, t) {
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
function Ho(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Vo(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Vo(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Uo = (function () {
    var e = H(
      X.default.mark(function e() {
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
        return X.default.wrap(
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
                            Ho(
                              Ho({}, B),
                              {},
                              { typography: B.typography, shape: B.shape(), motion: B.motion() },
                              go(),
                            ),
                          )
                        : t),
                    (i = r.colorMode),
                    (a = i === void 0 ? B.colorMode : i),
                    (o = r.contrastMode),
                    (s = o === void 0 ? B.contrastMode : o),
                    (c = r.dark),
                    (l = c === void 0 ? B.dark : c),
                    (u = r.light),
                    (d = u === void 0 ? B.light : u),
                    (f = r.shape),
                    (p = f === void 0 ? B.shape() : f),
                    (m = r.spacing),
                    (h = m === void 0 ? B.spacing : m),
                    (g = r.typography),
                    (_ = g === void 0 ? B.typography : g),
                    (v = r.motion),
                    (y = v === void 0 ? B.motion() : v),
                    (b = r.UNSAFE_themeOptions),
                    (x = b === void 0 ? B.UNSAFE_themeOptions : b),
                    W(`platform_increased-contrast-themes`) ||
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
                    (C = Io(S)),
                    (w = n || Co),
                    (T = C.map(
                      (function () {
                        var e = H(
                          X.default.mark(function e(t) {
                            return X.default.wrap(function (e) {
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
                      ce(x?.brandColor) &&
                      ((E = a || B.colorMode),
                      (D = fe(x, E)),
                      D.length > 0 &&
                        T.push(
                          H(
                            X.default.mark(function e() {
                              var t, n;
                              return X.default.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        At(
                                          () => import(`./custom-theme-BAegSagx.js`),
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
                  ((O = Lo(S)), (k = Ro(O)), (e.prev = 13), k.s());
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
                  return ((M = Po(S)), e.abrupt(`return`, M));
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
  Wo = (function () {
    function e(t) {
      (I(this, e), R(this, `legacyObserver`, null), (this.callback = t), e.callbacks.add(t));
    }
    return j(e, [
      {
        key: `observe`,
        value: function () {
          e.observer ||
            ((e.observer = new MutationObserver(function () {
              var t = go();
              e.callbacks.forEach(function (e) {
                return e(t);
              });
            })),
            e.observer.observe(document.documentElement, { attributeFilter: [he, de] }));
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
(R(Wo, `observer`, null), R(Wo, `callbacks`, new Set()));
var Go = (0, G.createContext)(void 0),
  Ko = (0, G.createContext)(void 0),
  qo = (0, G.createContext)(!1),
  Jo = (0, G.createContext)(void 0),
  Yo = (0, G.createContext)(void 0),
  Xo = function () {
    return (0, G.useContext)(qo) ?? !1;
  },
  Zo = function () {
    return typeof document < `u` ? document : null;
  };
function Qo(e) {
  var t = Zo();
  return t ? t.head.querySelector(`style[${he}="${e}"]`) : !1;
}
var $o = (function () {
    var e = H(
      X.default.mark(function e(t) {
        var n, r;
        return X.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (!Qo(t)) {
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
                return ((e.next = 6), So[t]());
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
  es = (function () {
    var e = H(
      X.default.mark(function e(t, n) {
        var r, i;
        return X.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((r = Zo()), r)) {
                  e.next = 3;
                  break;
                }
                return e.abrupt(`return`);
              case 3:
                if (
                  ((i = r.createElement(`style`)),
                  (i.textContent = t),
                  (i.dataset.theme = n),
                  !Qo(n))
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
  ts = (function () {
    var e = H(
      X.default.mark(function e(t) {
        var n;
        return X.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), $o(t));
              case 2:
                if (((n = e.sent), n)) {
                  e.next = 5;
                  break;
                }
                return e.abrupt(`return`);
              case 5:
                es(n, t);
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
  ns = (function () {
    var e = H(
      X.default.mark(function e(t) {
        var n;
        return X.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                ((n = Object.values(t).filter(function (e) {
                  return !!e;
                })),
                  n.forEach(ts));
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
g();
function rs(e, t) {
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
function is(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? rs(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : rs(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var as = { dark: `dark`, light: `light`, spacing: `spacing`, typography: `typography` },
  os =
    typeof window < `u` && `matchMedia` in window
      ? window.matchMedia(`(prefers-color-scheme: dark)`)
      : void 0;
function ss(e) {
  return e === `auto` ? (os != null && os.matches ? `dark` : `light`) : e;
}
var cs = { body: `_1e0c1bgi` };
function ls(e) {
  var t = e.children,
    n = e.defaultColorMode,
    r = n === void 0 ? `auto` : n,
    i = e.defaultTheme,
    a = N((0, G.useState)(r), 2),
    o = a[0],
    s = a[1],
    c = N((0, G.useState)(ss(r)), 2),
    u = c[0],
    d = c[1],
    f = N(
      (0, G.useState)(function () {
        return is(is({}, as), i);
      }),
      2,
    ),
    p = f[0],
    m = f[1],
    h = (0, G.useCallback)(function (e) {
      (s(e), d(ss(e)));
    }, []),
    g = (0, G.useCallback)(function (e) {
      m(function (t) {
        return is(is({}, t), e);
      });
    }, []),
    _ = (0, G.useRef)(null),
    v = no(),
    y = io(),
    b = Xo(),
    x = v && !b && y;
  ((0, G.useEffect)(
    function () {
      if (x) {
        var e = (function () {
          var e = H(
            X.default.mark(function e() {
              var t;
              return X.default.wrap(function (e) {
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
            var t = H(
              X.default.mark(function t() {
                var n;
                return X.default.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return ((t.next = 2), e());
                      case 2:
                        ((n = Uo(is(is({}, p), {}, { colorMode: u }))), (_.current = n));
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
      } else ns(p);
    },
    [v, b, x, u, p],
  ),
    (0, G.useEffect)(
      function () {
        if (os)
          return (0, To.bind)(os, {
            type: `change`,
            listener: function (e) {
              o === `auto` && d(e.matches ? `dark` : `light`);
            },
          });
      },
      [o],
    ));
  var S = is(is({}, xo(is(is({}, p), {}, { colorMode: u }))), {}, R({}, pe, !0));
  return G.createElement(
    qo.Provider,
    { value: !0 },
    G.createElement(
      Go.Provider,
      { value: u },
      G.createElement(
        Ko.Provider,
        { value: h },
        G.createElement(
          Jo.Provider,
          { value: p },
          G.createElement(
            Yo.Provider,
            { value: g },
            x ? t : G.createElement(`div`, O({}, S, { className: l([cs.body]) }), t),
          ),
        ),
      ),
    ),
  );
}
function us() {
  var e = (0, G.useContext)(Go),
    t = go(),
    n = N((0, G.useState)(t?.colorMode || `light`), 2),
    r = n[0],
    i = n[1];
  return (
    (0, G.useEffect)(
      function () {
        if (!e) {
          var t = new Wo(function (e) {
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
function ds() {
  return G.useId().replace(/[:«»]/g, `_`);
}
function fs(e) {
  return G.createElement(ni, {
    "aria-label": e[`aria-label`],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: `subtle`,
  });
}
function ps(e) {
  return G.createElement(ni, O({}, e, { appearance: `subtle` }));
}
var ms = { container: `_1e0c1txw _kqswh2mm` };
function hs(e) {
  var t = e.key,
    n = e.testId,
    r = e.from,
    i = e.to;
  return G.createElement(
    pa,
    { as: `li`, testId: n, key: t, xcss: ms.container, paddingInline: `space.100` },
    G.createElement(
      Ka,
      { testId: n && `${n}-text` },
      G.createElement(Cr, null, `Skipped pages from `, r, ` to `, i),
      `…`,
    ),
  );
}
var gs = {},
  _s =
    Number.isNaN ||
    function (e) {
      return typeof e == `number` && e !== e;
    };
function vs(e, t) {
  return !!(e === t || (_s(e) && _s(t)));
}
function ys(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!vs(e[n], t[n])) return !1;
  return !0;
}
function bs(e, t) {
  t === void 0 && (t = ys);
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
var xs = function (e, t, n, r) {
    var i = n.max,
      a = n.ellipsis,
      o = n.transform,
      s = e.length,
      c = s > i,
      l = c && i - 4 < t,
      u = c && t < s - i + 3,
      d = bs(function () {
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
        A(d(0, 1)),
        [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: 2, to: s - f })],
        A(d(s - f)),
      );
    }
    if (!l && u) {
      var p = i - 2;
      return [].concat(
        A(d(0, p)),
        [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: p + 1, to: s - 1 })],
        A(d(s - 1)),
      );
    }
    var m = i - 4;
    return [].concat(
      A(d(0, 1)),
      [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: 2, to: t - Math.floor(m / 2) })],
      A(d(t - Math.floor(m / 2), t + m - 1)),
      [a({ key: `ellipsis-2`, testId: r && `${r}-ellipsis`, from: t + 3, to: s - 1 })],
      A(d(s - 1)),
    );
  },
  Ss = e(ta()),
  Cs = e(na());
function ws(e, t) {
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
function Ts(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ws(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ws(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Es = {
    paginationMenu: `_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t`,
    paginationMenuItem: `_1pfhze3t _ect4ttxp`,
    navigatorIconWrapper: `_18zr12x7`,
  },
  Ds = {
    componentName: `pagination`,
    packageName: `@atlaskit/pagination`,
    packageVersion: `16.2.11`,
  };
function Os(e) {
  var t = e.chevronDirection === `left` ? Ss.default : Cs.default;
  return G.createElement(
    pa,
    { as: `span`, xcss: Es.navigatorIconWrapper },
    G.createElement(t, { label: ``, color: `currentColor`, size: `small` }),
  );
}
function ks(e, t) {
  var n = e.components,
    r = n === void 0 ? gs : n,
    i = e.defaultSelectedIndex,
    a = i === void 0 ? 0 : i,
    o = e.selectedIndex,
    s = e.label,
    c = s === void 0 ? `pagination` : s,
    l = e.pageLabel,
    u = l === void 0 ? `page` : l,
    d = e.previousLabel,
    f = d === void 0 ? `previous` : d,
    p = e.nextLabel,
    m = p === void 0 ? `next` : p,
    h = e.style,
    g = h === void 0 ? gs : h,
    _ = e.max,
    v = _ === void 0 ? 7 : _,
    y = e.onChange,
    b = y === void 0 ? zn : y,
    x = e.pages,
    S = e.getPageLabel,
    C = e.renderEllipsis,
    w = C === void 0 ? hs : C,
    T = e.analyticsContext,
    E = e.testId,
    D = e.isDisabled,
    O = N(
      Wi(o, function () {
        return a || 0;
      }),
      2,
    ),
    k = O[0],
    A = O[1],
    j = nr(
      Ts(
        {
          fn: function (e, t) {
            var n = e.event,
              r = e.selectedPageIndex;
            (o === void 0 && A(r), b && b(n, x[r], t));
          },
          action: `changed`,
          actionSubject: `pageNumber`,
          analyticsData: T,
        },
        Ds,
      ),
    );
  return G.createElement(
    pa,
    { testId: E, style: g, ref: t, "aria-label": c, as: `nav` },
    G.createElement(
      Ma,
      { space: `space.0`, alignBlock: `center` },
      G.createElement(fs, {
        key: `left-navigator`,
        component: r.Previous,
        onClick: function (e) {
          return j({ event: e, selectedPageIndex: k - 1 });
        },
        isDisabled: D || k === 0,
        iconBefore: G.createElement(Os, { chevronDirection: `left` }),
        "aria-label": f,
        testId: E && `${E}--left-navigator`,
      }),
      G.createElement(
        Ma,
        { space: `space.0`, alignBlock: `baseline`, as: `ul`, xcss: Es.paginationMenu },
        xs(
          x,
          k,
          {
            max: v,
            ellipsis: w,
            transform: function (e, t, n) {
              var i = x[k],
                a = `${u} ${S ? S(e, t) : e}`,
                o = e === i;
              return G.createElement(
                Ma,
                { as: `li`, xcss: Es.paginationMenuItem, key: `page-${S ? S(e, t) : t}` },
                G.createElement(
                  ps,
                  {
                    component: r.Page,
                    onClick: function (e) {
                      return j({ event: e, selectedPageIndex: t });
                    },
                    "aria-current": o ? `page` : void 0,
                    "aria-label": a,
                    isSelected: o,
                    isDisabled: D,
                    page: e,
                    testId: n && `${n}--${o ? `current-` : ``}page-${t}`,
                  },
                  S ? S(e, t) : e,
                ),
              );
            },
          },
          E,
        ),
      ),
      G.createElement(fs, {
        key: `right-navigator`,
        component: r.Next,
        onClick: function (e) {
          return j({ event: e, selectedPageIndex: k + 1 });
        },
        isDisabled: D || k === x.length - 1,
        iconBefore: G.createElement(Os, { chevronDirection: `right` }),
        "aria-label": m,
        testId: E && `${E}--right-navigator`,
      }),
    ),
  );
}
var As = (0, G.memo)((0, G.forwardRef)(ks));
function js(e, t, n) {
  return ((t = L(t)), F(e, Ms() ? Reflect.construct(t, n || [], L(e).constructor) : t.apply(e, n)));
}
function Ms() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ms = function () {
    return !!e;
  })();
}
var Ns = (function (e) {
  function t() {
    var e;
    I(this, t);
    var n = [...arguments];
    return (
      (e = js(this, t, [].concat(n))),
      R(e, `onChange`, function (t, n, r) {
        e.props.onChange(n, r);
      }),
      e
    );
  }
  return (
    te(t, e),
    j(t, [
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
            s = A(Array(t)).map(function (e, t) {
              return t + 1;
            }),
            c = r - 1;
          return G.createElement(As, {
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
})(G.Component);
g();
var Ps = [`isRanking`, `testId`],
  Fs = function (e) {
    var t = e.isRanking,
      n = e.testId,
      r = M(e, Ps);
    return G.createElement(
      `thead`,
      O({ "data-testid": n }, r, { className: l([`_179rglyw`, t && `_1e0c1ule`]) }),
    );
  },
  Is = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((ea(), t($i)));
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
  Ls = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((ea(), t($i)));
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
function Rs(e) {
  var t = e.onClose,
    n = e.isDisabled,
    r = (0, G.useRef)(!1),
    i = (0, G.useCallback)(
      function (e) {
        n || r.current || e.key !== `Escape` || ((r.current = !0), t(e));
      },
      [t, n],
    ),
    a = (0, G.useCallback)(function () {
      r.current = !1;
    }, []);
  (0, G.useEffect)(
    function () {
      if (!n)
        return (0, To.bindAll)(
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
function zs(e) {
  var t = (0, G.useRef)(e);
  return (
    (0, G.useEffect)(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
var Bs = (0, G.createContext)(null),
  Vs = (0, G.createContext)(null);
function Hs() {
  return (0, G.useContext)(Vs);
}
function Us(e) {
  var t = e.isOpen,
    n = e.type,
    r = e.onClose,
    i = (0, G.useContext)(Bs),
    a = Hs();
  (0, G.useEffect)(
    function () {
      if (i !== null && t) return i.onClose(r, { namespace: a, type: n });
    },
    [i, t, a, r, n],
  );
}
var Ws = { none: 0, small: 100, medium: 350, large: 700 },
  Gs = 0.5,
  Ks = { none: Ws.none, small: Ws.small * Gs, medium: Ws.medium * Gs, large: Ws.large * Gs },
  qs = function () {
    return typeof window < `u` && `matchMedia` in window;
  },
  Js = function () {
    return qs() ? window.matchMedia(`(prefers-reduced-motion: reduce)`).matches : !1;
  },
  Ys = function (e) {
    switch (e.cleanup) {
      case `next-effect`:
        return;
      default:
        return [];
    }
  },
  Xs = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { cleanup: `unmount` },
      t = (0, G.useRef)([]);
    return (
      (0, G.useEffect)(function () {
        return function () {
          t.current.length &&
            (t.current.forEach(function (e) {
              return clearTimeout(e);
            }),
            (t.current = []));
        };
      }, Ys(e)),
      (0, G.useCallback)(function (e, n) {
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
  Zs = { appear: !0, isExiting: !1 },
  Qs = (0, G.createContext)(Zs),
  $s = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zs;
    return G.createElement(Qs.Provider, { key: `${e.key}-provider`, value: t }, e);
  },
  ec = function (e) {
    var t = [];
    return (
      G.Children.toArray(e).forEach(function (e) {
        typeof e != `boolean` && e && t.push(e);
      }),
      t
    );
  },
  tc = function (e, t) {
    for (var n = t.concat([]), r = nc(t), i = 0; i < e.length; i++) {
      var a = e[i];
      r[a.key] || n.splice(i + 1, 0, a);
    }
    return n;
  },
  nc = function (e) {
    return e.reduce(function (e, t) {
      return ((e[t.key] = t), e);
    }, {});
  },
  rc = function (e, t) {
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
  ic = (0, G.memo)(function (e) {
    var t = e.appear,
      n = t === void 0 ? !1 : t,
      r = e.children,
      i = e.exitThenEnter,
      a = N((0, G.useState)([null, r]), 2),
      o = a[0],
      s = a[1],
      c = N((0, G.useState)([]), 2),
      l = c[0],
      u = c[1],
      d = N(
        (0, G.useState)(function () {
          return { appear: n, isExiting: !1 };
        }),
        2,
      ),
      f = d[0],
      p = d[1];
    if (
      ((0, G.useEffect)(function () {
        f.appear || p({ appear: !0, isExiting: !1 });
      }, []),
      typeof o == `boolean`)
    )
      return r;
    var m = N(o, 2),
      h = m[0],
      g = m[1],
      _ = ec(h),
      v = ec(g);
    g !== r && s([g, r]);
    var y = rc(v, _),
      b = !!y.size,
      x = v;
    if ((b && (x = tc(v, _)), i))
      if (l.length) x = W(`platform-dst-motion-uplift`) ? _ : l;
      else {
        var S = x.filter(function (e) {
          return y.has(e.key);
        });
        S.length && u(S);
      }
    return (
      (x = y.size
        ? x.map(function (e) {
            var t = y.has(e.key);
            return $s(e, {
              appear: !0,
              isExiting: t,
              onFinish: t
                ? function () {
                    (y.delete(e.key), y.size === 0 && (s([null, r]), u([])));
                  }
                : void 0,
            });
          })
        : x.map(function (e) {
            return $s(e, f);
          })),
      x
    );
  }),
  ac = function () {
    return (0, G.useContext)(Qs);
  };
ic.displayName = `ExitingPersistence`;
function oc() {
  var e = (0, G.useRef)(``);
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
var sc = (0, G.createContext)(function () {
    return { isReady: !0, delay: 0, ref: zn };
  }),
  cc = function () {
    var e = oc();
    return (0, G.useContext)(sc)(e);
  };
g();
var lc = function (e) {
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
      p = cc(),
      m = ac(),
      h = m.isExiting,
      g = m.onFinish,
      _ = m.appear,
      v = Xs(),
      y = c || !p.isReady,
      b = h ? 0 : p.delay,
      x = h ? `exiting` : `entering`,
      S = N((0, G.useState)(_), 2),
      C = S[0],
      w = S[1];
    return (
      (0, G.useEffect)(
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
            if (Js()) {
              t();
              return;
            }
            return (
              w(!0),
              v(t, h ? Ks[f] : Ws[f] + b),
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
            ? l([
                l([`_1o51eoah _1y0co91m _1bumglyw _sedtglyw`]),
                y && l([`_1y0ctrqk`]),
                f === `small` && l([`_5sag1yx9`]),
                f === `medium` && l([`_5sag1ttt`]),
                f === `large` && l([`_5sagpwmj`]),
                h && f === `small` && l([`_5sag14ed`]),
                h && f === `medium` && l([`_5sagluct`]),
                h && f === `large` && l([`_5sag1ttt`]),
                h && l([`_ju255cps _1o51q7pw`]),
                !h && n === `linear` && l([`_1pglp3kn`]),
                !h && n === `ease-out` && l([`_1pgldkwg`]),
                !h && n === `ease-in` && l([`_1pgl1nzg`]),
                !h && n === `ease-in-40-out` && l([`_1pgl5y64`]),
                !h && n === `ease-in-60-out` && l([`_1pgl1ddy`]),
                !h && n === `ease-in-80-out` && l([`_1pglannl`]),
                !h && n === `ease-in-out` && l([`_1pgl1fu8`]),
                h && n === `linear` && l([`_1pglp3kn`]),
                h && i === `ease-out` && l([`_1pgldkwg`]),
                h && i === `ease-in` && l([`_1pgl1nzg`]),
                h && i === `ease-in-40-out` && l([`_1pgl5y64`]),
                h && i === `ease-in-60-out` && l([`_1pgl1ddy`]),
                h && i === `ease-in-80-out` && l([`_1pglannl`]),
                h && i === `ease-in-out` && l([`_1pgl1fu8`]),
                ((!h && a === `fade-in`) || (h && s === `fade-in`)) && l([`_j7hq1cgr`]),
                ((!h && a === `fade-out`) || (h && s === `fade-out`)) && l([`_j7hq1lln`]),
                ((!h && a === `zoom-in`) || (h && s === `zoom-in`)) && l([`_j7hqe8p0`]),
                ((!h && a === `zoom-out`) || (h && s === `zoom-out`)) && l([`_j7hqy6ql`]),
                ((!h && a === `slide-in-from-top`) || (h && s === `slide-in-from-top`)) &&
                  l([`_j7hqqshu`]),
                ((!h && a === `slide-out-from-top`) || (h && s === `slide-out-from-top`)) &&
                  l([`_j7hq7ri4`]),
                ((!h && a === `slide-in-from-right`) || (h && s === `slide-in-from-right`)) &&
                  l([`_j7hqdfjr`]),
                ((!h && a === `slide-out-from-right`) || (h && s === `slide-out-from-right`)) &&
                  l([`_j7hqonfj`]),
                ((!h && a === `slide-in-from-bottom`) || (h && s === `slide-in-from-bottom`)) &&
                  l([`_j7hq1liq`]),
                ((!h && a === `slide-out-from-bottom`) || (h && s === `slide-out-from-bottom`)) &&
                  l([`_j7hqhnf1`]),
                ((!h && a === `slide-in-from-left`) || (h && s === `slide-in-from-left`)) &&
                  l([`_j7hq1bh1`]),
                ((!h && a === `slide-out-from-left`) || (h && s === `slide-out-from-left`)) &&
                  l([`_j7hqj08w`]),
                ((!h && a === `fade-in-from-top`) || (h && s === `fade-in-from-top`)) &&
                  l([`_j7hq2iua`]),
                ((!h && a === `fade-out-from-top`) || (h && s === `fade-out-from-top`)) &&
                  l([`_j7hq39va`]),
                ((!h && a === `fade-in-from-left`) || (h && s === `fade-in-from-left`)) &&
                  l([`_j7hq15m2`]),
                ((!h && a === `fade-out-from-left`) || (h && s === `fade-out-from-left`)) &&
                  l([`_j7hq1yiv`]),
                ((!h && a === `fade-in-from-bottom`) || (h && s === `fade-in-from-bottom`)) &&
                  l([`_j7hq1w00`]),
                ((!h && a === `fade-out-from-bottom`) || (h && s === `fade-out-from-bottom`)) &&
                  l([`_j7hqzy3z`]),
                ((!h && a === `fade-in-from-right`) || (h && s === `fade-in-from-right`)) &&
                  l([`_j7hqpqak`]),
                ((!h && a === `fade-out-from-right`) || (h && s === `fade-out-from-right`)) &&
                  l([`_j7hq1ebg`]),
                ((!h && a === `fade-in-from-top-constant`) ||
                  (h && s === `fade-in-from-top-constant`)) &&
                  l([`_j7hqm2e2`]),
                ((!h && a === `fade-out-from-top-constant`) ||
                  (h && s === `fade-out-from-top-constant`)) &&
                  l([`_j7hq97jn`]),
                ((!h && a === `fade-in-from-left-constant`) ||
                  (h && s === `fade-in-from-left-constant`)) &&
                  l([`_j7hqovgq`]),
                ((!h && a === `fade-out-from-left-constant`) ||
                  (h && s === `fade-out-from-left-constant`)) &&
                  l([`_j7hq15do`]),
                ((!h && a === `fade-in-from-bottom-constant`) ||
                  (h && s === `fade-in-from-bottom-constant`)) &&
                  l([`_j7hq797a`]),
                ((!h && a === `fade-out-from-bottom-constant`) ||
                  (h && s === `fade-out-from-bottom-constant`)) &&
                  l([`_j7hqwo7r`]),
                ((!h && a === `fade-in-from-right-constant`) ||
                  (h && s === `fade-in-from-right-constant`)) &&
                  l([`_j7hqt8u5`]),
                ((!h && a === `fade-out-from-right-constant`) ||
                  (h && s === `fade-out-from-right-constant`)) &&
                  l([`_j7hq1pgp`]),
              ])
            : ``,
          style: { animationDelay: `${b}ms` },
        },
        x,
      )
    );
  },
  uc = { top: `bottom`, bottom: `top`, left: `right`, right: `left` },
  dc = function (e) {
    var t = e.children,
      n = e.duration,
      r = n === void 0 ? `large` : n,
      i = e.entranceDirection,
      a = e.exitDirection,
      o = e.distance,
      s = o === void 0 ? `proportional` : o,
      c = e.onFinish,
      l = e.isPaused,
      u = i === void 0 ? void 0 : uc[i],
      d = a || u ? `fade-out-from-${a || u}${s === `proportional` ? `` : `-constant`}` : `fade-out`;
    return G.createElement(
      lc,
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
  fc = G.createContext();
G.createContext();
var pc = function (e) {
    return Array.isArray(e) ? e[0] : e;
  },
  mc = function (e) {
    if (typeof e == `function`) {
      var t = [...arguments].slice(1);
      return e.apply(void 0, t);
    }
  },
  hc = function (e, t) {
    if (typeof e == `function`) return mc(e, t);
    e != null && (e.current = t);
  },
  gc = function (e) {
    return e.reduce(function (e, t) {
      var n = t[0];
      return ((e[n] = t[1]), e);
    }, {});
  },
  _c =
    typeof window < `u` && window.document && window.document.createElement
      ? G.useLayoutEffect
      : G.useEffect,
  vc = `bottom`,
  yc = `right`,
  bc = `left`,
  xc = `auto`,
  Sc = [`top`, vc, yc, bc],
  Cc = `start`,
  wc = `clippingParents`,
  Tc = `viewport`,
  Ec = `popper`,
  Dc = `reference`,
  Oc = Sc.reduce(function (e, t) {
    return e.concat([t + `-` + Cc, t + `-end`]);
  }, []),
  kc = [].concat(Sc, [xc]).reduce(function (e, t) {
    return e.concat([t, t + `-` + Cc, t + `-end`]);
  }, []),
  Ac = [
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
function jc(e) {
  return e ? (e.nodeName || ``).toLowerCase() : null;
}
function Mc(e) {
  if (e == null) return window;
  if (e.toString() !== `[object Window]`) {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Nc(e) {
  return e instanceof Mc(e).Element || e instanceof Element;
}
function Pc(e) {
  return e instanceof Mc(e).HTMLElement || e instanceof HTMLElement;
}
function Fc(e) {
  return typeof ShadowRoot > `u` ? !1 : e instanceof Mc(e).ShadowRoot || e instanceof ShadowRoot;
}
function Ic(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (e) {
    var n = t.styles[e] || {},
      r = t.attributes[e] || {},
      i = t.elements[e];
    !Pc(i) ||
      !jc(i) ||
      (Object.assign(i.style, n),
      Object.keys(r).forEach(function (e) {
        var t = r[e];
        t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? `` : t);
      }));
  });
}
function Lc(e) {
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
        !Pc(r) ||
          !jc(r) ||
          (Object.assign(r.style, a),
          Object.keys(i).forEach(function (e) {
            r.removeAttribute(e);
          }));
      });
    }
  );
}
var Rc = {
  name: `applyStyles`,
  enabled: !0,
  phase: `write`,
  fn: Ic,
  effect: Lc,
  requires: [`computeStyles`],
};
function zc(e) {
  return e.split(`-`)[0];
}
var Bc = Math.max,
  Vc = Math.min,
  Hc = Math.round;
function Uc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (e) {
          return e.brand + `/` + e.version;
        })
        .join(` `)
    : navigator.userAgent;
}
function Wc() {
  return !/^((?!chrome|android).)*safari/i.test(Uc());
}
function Gc(e, t, n) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  var r = e.getBoundingClientRect(),
    i = 1,
    a = 1;
  t &&
    Pc(e) &&
    ((i = (e.offsetWidth > 0 && Hc(r.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && Hc(r.height) / e.offsetHeight) || 1));
  var o = (Nc(e) ? Mc(e) : window).visualViewport,
    s = !Wc() && n,
    c = (r.left + (s && o ? o.offsetLeft : 0)) / i,
    l = (r.top + (s && o ? o.offsetTop : 0)) / a,
    u = r.width / i,
    d = r.height / a;
  return { width: u, height: d, top: l, right: c + u, bottom: l + d, left: c, x: c, y: l };
}
function Kc(e) {
  var t = Gc(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function qc(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Fc(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Jc(e) {
  return Mc(e).getComputedStyle(e);
}
function Yc(e) {
  return [`table`, `td`, `th`].indexOf(jc(e)) >= 0;
}
function Xc(e) {
  return ((Nc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Zc(e) {
  return jc(e) === `html` ? e : e.assignedSlot || e.parentNode || (Fc(e) ? e.host : null) || Xc(e);
}
function Qc(e) {
  return !Pc(e) || Jc(e).position === `fixed` ? null : e.offsetParent;
}
function $c(e) {
  var t = /firefox/i.test(Uc());
  if (/Trident/i.test(Uc()) && Pc(e) && Jc(e).position === `fixed`) return null;
  var n = Zc(e);
  for (Fc(n) && (n = n.host); Pc(n) && [`html`, `body`].indexOf(jc(n)) < 0; ) {
    var r = Jc(n);
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
function el(e) {
  for (var t = Mc(e), n = Qc(e); n && Yc(n) && Jc(n).position === `static`; ) n = Qc(n);
  return n && (jc(n) === `html` || (jc(n) === `body` && Jc(n).position === `static`))
    ? t
    : n || $c(e) || t;
}
function tl(e) {
  return [`top`, `bottom`].indexOf(e) >= 0 ? `x` : `y`;
}
function nl(e, t, n) {
  return Bc(e, Vc(t, n));
}
function rl(e, t, n) {
  var r = nl(e, t, n);
  return r > n ? n : r;
}
function il() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function al(e) {
  return Object.assign({}, il(), e);
}
function ol(e, t) {
  return t.reduce(function (t, n) {
    return ((t[n] = e), t);
  }, {});
}
var sl = function (e, t) {
  return (
    (e = typeof e == `function` ? e(Object.assign({}, t.rects, { placement: t.placement })) : e),
    al(typeof e == `number` ? ol(e, Sc) : e)
  );
};
function cl(e) {
  var t,
    n = e.state,
    r = e.name,
    i = e.options,
    a = n.elements.arrow,
    o = n.modifiersData.popperOffsets,
    s = zc(n.placement),
    c = tl(s),
    l = [`left`, `right`].indexOf(s) >= 0 ? `height` : `width`;
  if (!(!a || !o)) {
    var u = sl(i.padding, n),
      d = Kc(a),
      f = c === `y` ? `top` : bc,
      p = c === `y` ? vc : yc,
      m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l],
      h = o[c] - n.rects.reference[c],
      g = el(a),
      _ = g ? (c === `y` ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
      v = m / 2 - h / 2,
      y = u[f],
      b = _ - d[l] - u[p],
      x = _ / 2 - d[l] / 2 + v,
      S = nl(y, x, b),
      C = c;
    n.modifiersData[r] = ((t = {}), (t[C] = S), (t.centerOffset = S - x), t);
  }
}
function ll(e) {
  var t = e.state,
    n = e.options.element,
    r = n === void 0 ? `[data-popper-arrow]` : n;
  r != null &&
    ((typeof r == `string` && ((r = t.elements.popper.querySelector(r)), !r)) ||
      (qc(t.elements.popper, r) && (t.elements.arrow = r)));
}
var ul = {
  name: `arrow`,
  enabled: !0,
  phase: `main`,
  fn: cl,
  effect: ll,
  requires: [`popperOffsets`],
  requiresIfExists: [`preventOverflow`],
};
function dl(e) {
  return e.split(`-`)[1];
}
var fl = { top: `auto`, right: `auto`, bottom: `auto`, left: `auto` };
function pl(e, t) {
  var n = e.x,
    r = e.y,
    i = t.devicePixelRatio || 1;
  return { x: Hc(n * i) / i || 0, y: Hc(r * i) / i || 0 };
}
function ml(e) {
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
    y = bc,
    b = `top`,
    x = window;
  if (l) {
    var S = el(n),
      C = `clientHeight`,
      w = `clientWidth`;
    if (
      (S === Mc(n) &&
        ((S = Xc(n)),
        Jc(S).position !== `static` &&
          s === `absolute` &&
          ((C = `scrollHeight`), (w = `scrollWidth`))),
      (S = S),
      i === `top` || ((i === `left` || i === `right`) && a === `end`))
    ) {
      b = vc;
      var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
      ((h -= T - r.height), (h *= c ? 1 : -1));
    }
    if (i === `left` || ((i === `top` || i === `bottom`) && a === `end`)) {
      y = yc;
      var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
      ((p -= E - r.width), (p *= c ? 1 : -1));
    }
  }
  var D = Object.assign({ position: s }, l && fl),
    O = u === !0 ? pl({ x: p, y: h }, Mc(n)) : { x: p, y: h };
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
function hl(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    i = r === void 0 ? !0 : r,
    a = n.adaptive,
    o = a === void 0 ? !0 : a,
    s = n.roundOffsets,
    c = s === void 0 ? !0 : s,
    l = {
      placement: zc(t.placement),
      variation: dl(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === `fixed`,
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      ml(
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
        ml(
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
var gl = { name: `computeStyles`, enabled: !0, phase: `beforeWrite`, fn: hl, data: {} },
  _l = { passive: !0 };
function vl(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    i = r.scroll,
    a = i === void 0 ? !0 : i,
    o = r.resize,
    s = o === void 0 ? !0 : o,
    c = Mc(t.elements.popper),
    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    a &&
      l.forEach(function (e) {
        e.addEventListener(`scroll`, n.update, _l);
      }),
    s && c.addEventListener(`resize`, n.update, _l),
    function () {
      (a &&
        l.forEach(function (e) {
          e.removeEventListener(`scroll`, n.update, _l);
        }),
        s && c.removeEventListener(`resize`, n.update, _l));
    }
  );
}
var yl = {
    name: `eventListeners`,
    enabled: !0,
    phase: `write`,
    fn: function () {},
    effect: vl,
    data: {},
  },
  bl = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function xl(e) {
  return e.replace(/left|right|bottom|top/g, function (e) {
    return bl[e];
  });
}
var Sl = { start: `end`, end: `start` };
function Cl(e) {
  return e.replace(/start|end/g, function (e) {
    return Sl[e];
  });
}
function wl(e) {
  var t = Mc(e);
  return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Tl(e) {
  return Gc(Xc(e)).left + wl(e).scrollLeft;
}
function El(e, t) {
  var n = Mc(e),
    r = Xc(e),
    i = n.visualViewport,
    a = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    c = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    var l = Wc();
    (l || (!l && t === `fixed`)) && ((s = i.offsetLeft), (c = i.offsetTop));
  }
  return { width: a, height: o, x: s + Tl(e), y: c };
}
function Dl(e) {
  var t = Xc(e),
    n = wl(e),
    r = e.ownerDocument?.body,
    i = Bc(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
    a = Bc(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
    o = -n.scrollLeft + Tl(e),
    s = -n.scrollTop;
  return (
    Jc(r || t).direction === `rtl` && (o += Bc(t.clientWidth, r ? r.clientWidth : 0) - i),
    { width: i, height: a, x: o, y: s }
  );
}
function Ol(e) {
  var t = Jc(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function kl(e) {
  return [`html`, `body`, `#document`].indexOf(jc(e)) >= 0
    ? e.ownerDocument.body
    : Pc(e) && Ol(e)
      ? e
      : kl(Zc(e));
}
function Al(e, t) {
  t === void 0 && (t = []);
  var n = kl(e),
    r = n === e.ownerDocument?.body,
    i = Mc(n),
    a = r ? [i].concat(i.visualViewport || [], Ol(n) ? n : []) : n,
    o = t.concat(a);
  return r ? o : o.concat(Al(Zc(a)));
}
function jl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Ml(e, t) {
  var n = Gc(e, !1, t === `fixed`);
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
function Nl(e, t, n) {
  return t === `viewport` ? jl(El(e, n)) : Nc(t) ? Ml(t, n) : jl(Dl(Xc(e)));
}
function Pl(e) {
  var t = Al(Zc(e)),
    n = [`absolute`, `fixed`].indexOf(Jc(e).position) >= 0 && Pc(e) ? el(e) : e;
  return Nc(n)
    ? t.filter(function (e) {
        return Nc(e) && qc(e, n) && jc(e) !== `body`;
      })
    : [];
}
function Fl(e, t, n, r) {
  var i = t === `clippingParents` ? Pl(e) : [].concat(t),
    a = [].concat(i, [n]),
    o = a[0],
    s = a.reduce(
      function (t, n) {
        var i = Nl(e, n, r);
        return (
          (t.top = Bc(i.top, t.top)),
          (t.right = Vc(i.right, t.right)),
          (t.bottom = Vc(i.bottom, t.bottom)),
          (t.left = Bc(i.left, t.left)),
          t
        );
      },
      Nl(e, o, r),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Il(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    i = r ? zc(r) : null,
    a = r ? dl(r) : null,
    o = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    c;
  switch (i) {
    case `top`:
      c = { x: o, y: t.y - n.height };
      break;
    case vc:
      c = { x: o, y: t.y + t.height };
      break;
    case yc:
      c = { x: t.x + t.width, y: s };
      break;
    case bc:
      c = { x: t.x - n.width, y: s };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var l = i ? tl(i) : null;
  if (l != null) {
    var u = l === `y` ? `height` : `width`;
    switch (a) {
      case Cc:
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
function Ll(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = r === void 0 ? e.placement : r,
    a = n.strategy,
    o = a === void 0 ? e.strategy : a,
    s = n.boundary,
    c = s === void 0 ? wc : s,
    l = n.rootBoundary,
    u = l === void 0 ? Tc : l,
    d = n.elementContext,
    f = d === void 0 ? Ec : d,
    p = n.altBoundary,
    m = p === void 0 ? !1 : p,
    h = n.padding,
    g = h === void 0 ? 0 : h,
    _ = al(typeof g == `number` ? ol(g, Sc) : g),
    v = f === `popper` ? Dc : Ec,
    y = e.rects.popper,
    b = e.elements[m ? v : f],
    x = Fl(Nc(b) ? b : b.contextElement || Xc(e.elements.popper), c, u, o),
    S = Gc(e.elements.reference),
    C = Il({ reference: S, element: y, strategy: `absolute`, placement: i }),
    w = jl(Object.assign({}, y, C)),
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
function Rl(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = n.boundary,
    a = n.rootBoundary,
    o = n.padding,
    s = n.flipVariations,
    c = n.allowedAutoPlacements,
    l = c === void 0 ? kc : c,
    u = dl(r),
    d = u
      ? s
        ? Oc
        : Oc.filter(function (e) {
            return dl(e) === u;
          })
      : Sc,
    f = d.filter(function (e) {
      return l.indexOf(e) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (t, n) {
    return ((t[n] = Ll(e, { placement: n, boundary: i, rootBoundary: a, padding: o })[zc(n)]), t);
  }, {});
  return Object.keys(p).sort(function (e, t) {
    return p[e] - p[t];
  });
}
function zl(e) {
  if (zc(e) === `auto`) return [];
  var t = xl(e);
  return [Cl(e), t, Cl(t)];
}
function Bl(e) {
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
        _ = zc(g) === g,
        v = c || (_ || !m ? [xl(g)] : zl(g)),
        y = [g].concat(v).reduce(function (e, n) {
          return e.concat(
            zc(n) === `auto`
              ? Rl(t, {
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
        D = zc(E),
        O = dl(E) === Cc,
        k = [`top`, vc].indexOf(D) >= 0,
        A = k ? `width` : `height`,
        j = Ll(t, { placement: E, boundary: u, rootBoundary: d, altBoundary: f, padding: l }),
        M = k ? (O ? yc : bc) : O ? vc : `top`;
      b[A] > x[A] && (M = xl(M));
      var N = xl(M),
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
        var F = m ? 3 : 1,
          I = function (e) {
            var t = y.find(function (t) {
              var n = S.get(t);
              if (n)
                return n.slice(0, e).every(function (e) {
                  return e;
                });
            });
            if (t) return ((w = t), `break`);
          },
          ee = F;
        ee > 0 && I(ee) !== `break`;
        ee--
      );
    t.placement !== w && ((t.modifiersData[r]._skip = !0), (t.placement = w), (t.reset = !0));
  }
}
var Vl = {
  name: `flip`,
  enabled: !0,
  phase: `main`,
  fn: Bl,
  requiresIfExists: [`offset`],
  data: { _skip: !1 },
};
function Hl(e, t, n) {
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
function Ul(e) {
  return [`top`, yc, vc, bc].some(function (t) {
    return e[t] >= 0;
  });
}
function Wl(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    i = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    o = Ll(t, { elementContext: `reference` }),
    s = Ll(t, { altBoundary: !0 }),
    c = Hl(o, r),
    l = Hl(s, i, a),
    u = Ul(c),
    d = Ul(l);
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
var Gl = {
  name: `hide`,
  enabled: !0,
  phase: `main`,
  requiresIfExists: [`preventOverflow`],
  fn: Wl,
};
function Kl(e, t, n) {
  var r = zc(e),
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
function ql(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.offset,
    a = i === void 0 ? [0, 0] : i,
    o = kc.reduce(function (e, n) {
      return ((e[n] = Kl(n, t.rects, a)), e);
    }, {}),
    s = o[t.placement],
    c = s.x,
    l = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[r] = o));
}
var Jl = { name: `offset`, enabled: !0, phase: `main`, requires: [`popperOffsets`], fn: ql };
function Yl(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = Il({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: `absolute`,
    placement: t.placement,
  });
}
var Xl = { name: `popperOffsets`, enabled: !0, phase: `read`, fn: Yl, data: {} };
function Zl(e) {
  return e === `x` ? `y` : `x`;
}
function Ql(e) {
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
    g = Ll(t, { boundary: c, rootBoundary: l, padding: d, altBoundary: u }),
    _ = zc(t.placement),
    v = dl(t.placement),
    y = !v,
    b = tl(_),
    x = Zl(b),
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
      var k = b === `y` ? `top` : bc,
        A = b === `y` ? vc : yc,
        j = b === `y` ? `height` : `width`,
        M = S[b],
        N = M + g[k],
        P = M - g[A],
        F = p ? -w[j] / 2 : 0,
        I = v === `start` ? C[j] : w[j],
        ee = v === `start` ? -w[j] : -C[j],
        te = t.elements.arrow,
        ne = p && te ? Kc(te) : { width: 0, height: 0 },
        re = t.modifiersData[`arrow#persistent`]
          ? t.modifiersData[`arrow#persistent`].padding
          : il(),
        L = re[k],
        R = re[A],
        z = nl(0, C[j], ne[j]),
        B = y ? C[j] / 2 - F - z - L - E.mainAxis : I - z - L - E.mainAxis,
        V = y ? -C[j] / 2 + F + z + R + E.mainAxis : ee + z + R + E.mainAxis,
        H = t.elements.arrow && el(t.elements.arrow),
        ie = H ? (b === `y` ? H.clientTop || 0 : H.clientLeft || 0) : 0,
        ae = D?.[b] ?? 0,
        oe = M + B - ae - ie,
        se = M + V - ae,
        ce = nl(p ? Vc(N, oe) : N, M, p ? Bc(P, se) : P);
      ((S[b] = ce), (O[b] = ce - M));
    }
    if (s) {
      var le = b === `x` ? `top` : bc,
        ue = b === `x` ? vc : yc,
        U = S[x],
        de = x === `y` ? `height` : `width`,
        fe = U + g[le],
        pe = U - g[ue],
        W = [`top`, bc].indexOf(_) !== -1,
        me = D?.[x] ?? 0,
        he = W ? fe : U - C[de] - w[de] - me + E.altAxis,
        G = W ? U + C[de] + w[de] - me - E.altAxis : pe,
        K = p && W ? rl(he, U, G) : nl(p ? he : fe, U, p ? G : pe);
      ((S[x] = K), (O[x] = K - U));
    }
    t.modifiersData[r] = O;
  }
}
var $l = {
  name: `preventOverflow`,
  enabled: !0,
  phase: `main`,
  fn: Ql,
  requiresIfExists: [`offset`],
};
function eu(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function tu(e) {
  return e === Mc(e) || !Pc(e) ? wl(e) : eu(e);
}
function nu(e) {
  var t = e.getBoundingClientRect(),
    n = Hc(t.width) / e.offsetWidth || 1,
    r = Hc(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function ru(e, t, n) {
  n === void 0 && (n = !1);
  var r = Pc(t),
    i = Pc(t) && nu(t),
    a = Xc(t),
    o = Gc(e, i, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((jc(t) !== `body` || Ol(a)) && (s = tu(t)),
      Pc(t) ? ((c = Gc(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : a && (c.x = Tl(a))),
    {
      x: o.left + s.scrollLeft - c.x,
      y: o.top + s.scrollTop - c.y,
      width: o.width,
      height: o.height,
    }
  );
}
function iu(e) {
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
function au(e) {
  var t = iu(e);
  return Ac.reduce(function (e, n) {
    return e.concat(
      t.filter(function (e) {
        return e.phase === n;
      }),
    );
  }, []);
}
function ou(e) {
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
function su(e) {
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
var cu = { placement: `bottom`, modifiers: [], strategy: `absolute` };
function lu() {
  return ![...arguments].some(function (e) {
    return !(e && typeof e.getBoundingClientRect == `function`);
  });
}
function uu(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = t.defaultOptions,
    a = i === void 0 ? cu : i;
  return function (e, t, n) {
    n === void 0 && (n = a);
    var i = {
        placement: `bottom`,
        orderedModifiers: [],
        options: Object.assign({}, cu, a),
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
              reference: Nc(e) ? Al(e) : e.contextElement ? Al(e.contextElement) : [],
              popper: Al(t),
            }));
          var s = au(su([].concat(r, i.options.modifiers)));
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
            if (lu(t, n)) {
              ((i.rects = {
                reference: ru(t, el(n), i.options.strategy === `fixed`),
                popper: Kc(n),
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
        update: ou(function () {
          return new Promise(function (e) {
            (c.forceUpdate(), e(i));
          });
        }),
        destroy: function () {
          (u(), (s = !0));
        },
      };
    if (!lu(e, t)) return c;
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
var du = uu({ defaultModifiers: [yl, Xl, gl, Rc, Jl, Vl, $l, ul, Gl] }),
  fu = i((e, t) => {
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
  pu = e(a()),
  mu = e(fu()),
  hu = [],
  gu = function (e, t, n) {
    n === void 0 && (n = {});
    var r = G.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || `bottom`,
        strategy: n.strategy || `absolute`,
        modifiers: n.modifiers || hu,
      },
      a = G.useState({
        styles: {
          popper: { position: i.strategy, left: `0`, top: `0` },
          arrow: { position: `absolute` },
        },
        attributes: {},
      }),
      o = a[0],
      s = a[1],
      c = G.useMemo(function () {
        return {
          name: `updateState`,
          enabled: !0,
          phase: `write`,
          fn: function (e) {
            var t = e.state,
              n = Object.keys(t.elements);
            pu.flushSync(function () {
              s({
                styles: gc(
                  n.map(function (e) {
                    return [e, t.styles[e] || {}];
                  }),
                ),
                attributes: gc(
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
      l = G.useMemo(
        function () {
          var e = {
            onFirstUpdate: i.onFirstUpdate,
            placement: i.placement,
            strategy: i.strategy,
            modifiers: [].concat(i.modifiers, [c, { name: `applyStyles`, enabled: !1 }]),
          };
          return (0, mu.default)(r.current, e) ? r.current || e : ((r.current = e), e);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c],
      ),
      u = G.useRef();
    return (
      _c(
        function () {
          u.current && u.current.setOptions(l);
        },
        [l],
      ),
      _c(
        function () {
          if (!(e == null || t == null)) {
            var r = (n.createPopper || du)(e, t, l);
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
  _u = function () {},
  vu = function () {
    return Promise.resolve(null);
  },
  yu = [];
function bu(e) {
  var t = e.placement,
    n = t === void 0 ? `bottom` : t,
    r = e.strategy,
    i = r === void 0 ? `absolute` : r,
    a = e.modifiers,
    o = a === void 0 ? yu : a,
    s = e.referenceElement,
    c = e.onFirstUpdate,
    l = e.innerRef,
    u = e.children,
    d = G.useContext(fc),
    f = G.useState(null),
    p = f[0],
    m = f[1],
    h = G.useState(null),
    g = h[0],
    _ = h[1];
  G.useEffect(
    function () {
      hc(l, p);
    },
    [l, p],
  );
  var v = G.useMemo(
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
    y = gu(s || d, p, v),
    b = y.state,
    x = y.styles,
    S = y.forceUpdate,
    C = y.update,
    w = G.useMemo(
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
          forceUpdate: S || _u,
          update: C || vu,
        };
      },
      [m, _, n, b, x, C, S],
    );
  return pc(u)(w);
}
function xu(e) {
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
            u = N(a.placement.split(`-`), 1)[0],
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
var Su = 5,
  Cu = [
    {
      name: `flip`,
      options: {
        flipVariations: !1,
        padding: Su,
        boundary: `clippingParents`,
        rootBoundary: `viewport`,
      },
    },
  ];
function wu() {
  return null;
}
var Tu = [0, 8];
function Eu(e) {
  var t = e.children,
    n = t === void 0 ? wu : t,
    r = e.offset,
    i = r === void 0 ? Tu : r,
    a = e.placement,
    o = a === void 0 ? `bottom-start` : a,
    s = e.referenceElement,
    c = s === void 0 ? void 0 : s,
    l = e.modifiers,
    u = e.strategy,
    d = u === void 0 ? `fixed` : u,
    f = e.shouldFitViewport,
    p = f === void 0 ? !1 : f,
    m = N(i, 2),
    h = m[0],
    g = m[1],
    _ = (0, G.useMemo)(
      function () {
        var e = {
            name: `preventOverflow`,
            options: { padding: Su, rootBoundary: p ? `viewport` : `document` },
          },
          t = { name: `offset`, options: { offset: [h, g] } },
          n = p ? xu({ viewportPadding: Su }) : [];
        return [].concat(Cu, [e, t], A(n));
      },
      [h, g, p],
    ),
    v = (0, G.useMemo)(
      function () {
        return l == null ? _ : [].concat(A(_), A(l));
      },
      [_, l],
    );
  return G.createElement(bu, { modifiers: v, placement: o, strategy: d, referenceElement: c }, n);
}
var Du = `atlaskit-portal-container`,
  Ou = `body > .atlaskit-portal-container`,
  ku = `atlaskit-portal`,
  Au = function () {
    return document.body;
  },
  ju = function () {
    var e = document.querySelector(Ou);
    if (!e) {
      var t,
        n = document.createElement(`div`);
      return (
        (n.className = Du),
        (n.style.display = `flex`),
        (t = Au()) == null || t.appendChild(n),
        n
      );
    }
    return e;
  },
  Mu = function (e) {
    e.parentElement || ju().appendChild(e);
  },
  Nu = function (e) {
    var t = document.createElement(`div`);
    return ((t.className = ku), (t.style.zIndex = `${e}`), t);
  },
  Pu = function () {
    var e = document.querySelector(Ou);
    if (!e) {
      var t,
        n = document.createElement(`div`);
      return (
        (n.className = Du),
        (n.style.display = `flex`),
        (t = Au()) == null || t.appendChild(n),
        n
      );
    }
    return e;
  },
  Fu = function (e) {
    var t = Pu();
    t.contains(e) && t.removeChild(e);
  };
function Iu(e) {
  var t = e.zIndex,
    n = e.children,
    r = e.isClosed,
    i = r === void 0 ? !1 : r,
    a = (0, G.useMemo)(
      function () {
        return Nu(t);
      },
      [t],
    ),
    o = us();
  return (
    Mu(a),
    (0, G.useEffect)(
      function () {
        W(`import_into_jsm_in_template_gallery_killswitch`) && i && Fu(a);
      },
      [i, a],
    ),
    (0, G.useEffect)(
      function () {
        return function () {
          Fu(a);
        };
      },
      [a],
    ),
    (0, pu.createPortal)(o ? G.createElement(ls, { defaultColorMode: o }, n) : n, a)
  );
}
var Lu = typeof window < `u` ? G.useLayoutEffect : G.useEffect,
  Ru = function () {
    return document !== void 0;
  },
  zu = function (e) {
    if (Ru()) {
      var t = document.createElement(`div`);
      return ((t.className = ku), (t.style.zIndex = `${e}`), t);
    }
  },
  Bu = function () {
    return document !== void 0;
  },
  Vu = function () {
    if (Bu()) {
      var e = document.querySelector(Ou);
      if (!e) {
        var t,
          n = document.createElement(`div`);
        return (
          (n.className = Du),
          (n.style.display = `flex`),
          (t = Au()) == null || t.appendChild(n),
          n
        );
      }
      return e;
    }
  },
  Hu = function () {
    return document !== void 0;
  },
  Uu = function (e) {
    if (Hu() && e) {
      var t;
      (t = Au()) == null || t.removeChild(e);
    }
  };
function Wu(e) {
  var t = e.zIndex,
    n = e.children,
    r = e.isClosed,
    i = N((0, G.useState)(null), 2),
    a = i[0],
    o = i[1],
    s = us();
  return (
    Lu(
      function () {
        if (W(`import_into_jsm_in_template_gallery_killswitch`)) {
          if (!r) {
            var e = zu(t);
            o(e);
            var n = Vu();
            return !e || !n
              ? void 0
              : (n.appendChild(e),
                function () {
                  (n && (n.removeChild(e), !n.hasChildNodes() && Uu(n)), o(null));
                });
          }
        } else {
          var i = zu(t);
          o(i);
          var a = Vu();
          return !i || !a
            ? void 0
            : (a.appendChild(i),
              function () {
                (i && a.removeChild(i), o(null));
              });
        }
      },
      [t, r, W],
    ),
    a
      ? (0, pu.createPortal)(
          G.createElement(
            G.Suspense,
            { fallback: null },
            s ? G.createElement(ls, { defaultColorMode: s }, n) : n,
          ),
          a,
        )
      : null
  );
}
var Gu = function (e) {
    var t = N((0, G.useState)(!1), 2),
      n = t[0],
      r = t[1],
      i = N(
        (0, G.useState)(function () {
          return e === `layoutEffect` ? Lu : G.useEffect;
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
  Ku = `akPortalMount`,
  qu = `akPortalUnmount`,
  Ju = {
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
  Yu = function (e) {
    return Ju.hasOwnProperty(e) ? Ju[e] : null;
  },
  Xu = function (e, t) {
    var n = { layer: Yu(Number(t)), zIndex: t };
    return new CustomEvent(e, { detail: n });
  };
function Zu(e, t) {
  var n = Xu(e, t);
  window.dispatchEvent(n);
}
var Qu = function (e) {
  var t = Number(e);
  (0, G.useEffect)(
    function () {
      return (
        Zu(Ku, t),
        function () {
          Zu(qu, t);
        }
      );
    },
    [t],
  );
};
function $u(e) {
  var t = e.zIndex,
    n = t === void 0 ? 0 : t,
    r = e.children,
    i = e.mountStrategy,
    a = i === void 0 ? `effect` : i,
    o = e.isClosed,
    s = o === void 0 ? !1 : o,
    c = Gu(a);
  return (
    Qu(n),
    W(`platform_design_system_team_portal_logic_r18_fix`)
      ? G.createElement(Wu, { zIndex: n, isClosed: s }, r)
      : c
        ? G.createElement(Iu, { zIndex: n, isClosed: s }, r)
        : null
  );
}
var ed = new Set(),
  td = null;
function nd() {
  td ||
    ((td = (0, To.bindAll)(window, [
      { type: `dragend`, listener: rd },
      { type: `pointerdown`, listener: rd },
      {
        type: `pointermove`,
        listener: (function () {
          var e = 0;
          return function () {
            if (e < 20) {
              e++;
              return;
            }
            rd();
          };
        })(),
      },
    ])),
    Array.from(ed).forEach(function (e) {
      e.onDragStart();
    }));
}
function rd() {
  var e;
  ((e = td) == null || e(),
    (td = null),
    Array.from(ed).forEach(function (e) {
      e.onDragEnd();
    }));
}
function id() {
  return (0, To.bindAll)(window, [
    { type: `dragstart`, listener: nd },
    { type: `dragenter`, listener: nd },
  ]);
}
var ad = null;
function od(e) {
  return (
    (ad ||= id()),
    ed.add(e),
    e.onRegister({ isDragging: td !== null }),
    function () {
      if ((ed.delete(e), ed.size === 0)) {
        var t;
        ((t = ad) == null || t(), (ad = null));
      }
    }
  );
}
function sd(e) {
  var t = e || { top: 0, left: 0 };
  return {
    getBoundingClientRect: function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    },
    clientWidth: 0,
    clientHeight: 0,
  };
}
function cd(e, t) {
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
var ld = null;
function ud() {
  ld != null && (window.clearTimeout(ld), (ld = null));
}
function dd(e, t) {
  (ud(),
    (ld = window.setTimeout(function () {
      ((ld = null), e());
    }, t)));
}
var fd = null;
function pd(e) {
  var t = `waiting-to-show`;
  function n() {
    return !!(fd && fd.entry === e);
  }
  function r() {
    n() && (ud(), (fd = null));
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
        ((t = `shown`), ud());
        return;
      }
      if (t === `hide-animating`) {
        ((t = `shown`), ud(), e.show({ isImmediate: !1 }));
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
          dd(function () {
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
    var n = W(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ? e.shouldAlwaysFadeIn : !1,
      r = !!(fd && fd.isVisible()) && !n;
    ((fd &&= (ud(), fd.entry.hide({ isImmediate: !0 }), fd.entry.done(), null)),
      (fd = { entry: e, isVisible: l }));
    function i() {
      ((t = `shown`), e.show({ isImmediate: r }));
    }
    if (r) {
      i();
      return;
    }
    ((t = `waiting-to-show`), dd(i, e.delay));
  }
  return (
    d(),
    {
      keep: o,
      abort: r,
      isActive: n,
      requestHide: s,
      finishHideAnimation: c,
      mousePosition: W(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ? void 0 : u(),
      mousePos:
        e.source.type === `mouse` && W(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
          ? { clientX: e.source.clientX, clientY: e.source.clientY }
          : null,
    }
  );
}
function md() {
  var e = ds();
  return function (t) {
    return `${e}-${t.toString()}`;
  };
}
function hd(e, t) {
  var n = md();
  return t ? `${n(e)}` : void 0;
}
g();
var gd = {
    shortcutSegmentsContainer: `_zulpv77o _1e0c1txw _1q511b66 _85i5v77o`,
    shortcutSegment: `_11c8wadc _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p`,
  },
  _d = function (e) {
    var t = e.shortcut;
    return G.createElement(
      `div`,
      { className: l([gd.shortcutSegmentsContainer]) },
      t.map(function (e, t) {
        return G.createElement(`kbd`, { key: `${e}-${t}`, className: l([gd.shortcutSegment]) }, e);
      }),
    );
  };
g();
var vd = (0, G.forwardRef)(function (e, t) {
  var n = e.style,
    r = e.className,
    i = e.children,
    a = e.placement,
    o = e.testId,
    s = e.onMouseOut,
    c = e.onMouseOver,
    u = e.id,
    d = e.shortcut;
  return G.createElement(
    `div`,
    { ref: t, style: n, "data-testid": o ? `${o}--wrapper` : void 0 },
    G.createElement(
      `div`,
      {
        role: `tooltip`,
        className: l([`_80om73ad`, r]),
        onMouseOut: s,
        onMouseOver: c,
        "data-placement": a,
        "data-testid": o,
        id: u,
      },
      i,
      d && G.createElement(_d, { shortcut: d }),
    ),
  );
});
((vd.displayName = `TooltipPrimitive`), g());
var yd = {
    base: `_2rkofajl _11c8wadc _vchhusvi _p12fp3fh _bfhk1aqn _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna`,
    truncate: `_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c`,
  },
  bd = (0, G.forwardRef)(function (e, t) {
    var n = e.style,
      r = e.className,
      i = e.children,
      a = e.truncate,
      o = e.placement,
      s = e.testId,
      c = e.onMouseOut,
      u = e.onMouseOver,
      d = e.id,
      f = e.shortcut;
    return G.createElement(
      vd,
      {
        ref: t,
        style: n,
        className: l([yd.base, a && yd.truncate, r]),
        placement: o,
        testId: s,
        id: d,
        onMouseOut: c,
        onMouseOver: u,
        shortcut: f,
      },
      i,
    );
  });
bd.displayName = `TooltipContainer`;
function xd(e, t) {
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
function Sd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? xd(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : xd(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Cd = ci.tooltip(),
  wd = { componentName: `tooltip`, packageName: `@atlaskit/tooltip`, packageVersion: `21.1.6` },
  Td = { top: `bottom`, bottom: `top`, left: `right`, right: `left` },
  Ed = function (e) {
    return e.split(`-`)[0];
  };
function Dd(e) {
  var t = e.children,
    n = e.position,
    r = n === void 0 ? `bottom` : n,
    i = e.mousePosition,
    a = i === void 0 ? `bottom` : i,
    o = e.content,
    s = e.truncate,
    c = s === void 0 ? !1 : s,
    l = e.component,
    u = l === void 0 ? bd : l,
    d = e.tag,
    f = d === void 0 ? `div` : d,
    p = e.testId,
    m = e.delay,
    h = m === void 0 ? 300 : m,
    g = e.onShow,
    _ = g === void 0 ? zn : g,
    v = e.onHide,
    y = v === void 0 ? zn : v,
    b = e.canAppear,
    x = e.hideTooltipOnClick,
    S = x === void 0 ? !1 : x,
    C = e.hideTooltipOnMouseDown,
    w = C === void 0 ? !1 : C,
    T = e.analyticsContext,
    E = e.strategy,
    D = E === void 0 ? `fixed` : E,
    k = e.ignoreTooltipPointerEvents,
    A = k === void 0 ? !1 : k,
    j = e.isScreenReaderAnnouncementDisabled,
    M = j === void 0 ? !1 : j,
    P = e.shortcut,
    F = e.UNSAFE_shouldAlwaysFadeIn,
    I = F === void 0 ? !1 : F,
    ee = e.UNSAFE_shouldRenderToParent,
    te = ee === void 0 ? !1 : ee,
    ne = r === `mouse` || r === `mouse-y` || r === `mouse-x`,
    re = ne ? a : r,
    L = ar(Sd({ fn: _, action: `displayed`, analyticsData: T }, wd)),
    R = ar(Sd({ fn: y, action: `hidden`, analyticsData: T }, wd)),
    z = (0, G.useRef)(null),
    B = N((0, G.useState)(`hide`), 2),
    V = B[0],
    H = B[1],
    ie = (0, G.useRef)(null),
    ae = (0, G.useRef)(null),
    oe = function (e) {
      ((ae.current = e), (ie.current = e ? e.firstElementChild : null));
    },
    se = (0, G.useCallback)(function (e) {
      ie.current = e;
    }, []),
    ce = zs(V),
    le = zs(L),
    ue = zs(R),
    U = zs(h),
    de = zs(b),
    fe = (0, G.useRef)(!1),
    pe = zs(I),
    me = (0, G.useCallback)(function (e) {
      ((z.current = e), (fe.current = !1));
    }, []),
    he = (0, G.useCallback)(
      function () {
        z.current && (fe.current && ue.current(), (z.current = null), (fe.current = !1), H(`hide`));
      },
      [ue],
    ),
    K = (0, G.useCallback)(
      function () {
        z.current &&= (z.current.abort(), fe.current && ue.current(), null);
      },
      [ue],
    );
  (0, G.useEffect)(
    function () {
      return function () {
        z.current && K();
      };
    },
    [K],
  );
  var ge = (0, G.useRef)(!1);
  (0, G.useEffect)(function () {
    return od({
      onRegister: function (e) {
        ge.current = e.isDragging;
      },
      onDragStart: function () {
        var e;
        ((e = z.current) == null || e.requestHide({ isImmediate: !0 }), (ge.current = !0));
      },
      onDragEnd: function () {
        ge.current = !1;
      },
    });
  }, []);
  var _e = (0, G.useCallback)(
    function (e) {
      var t;
      if (!ge.current) {
        if ((z.current && !z.current.isActive() && K(), z.current && z.current.isActive())) {
          z.current.keep();
          return;
        }
        (de.current && !((t = de.current) != null && t.call(de))) ||
          me(
            pd({
              source: e,
              delay: U.current,
              show: function (e) {
                var t = e.isImmediate;
                (fe.current || ((fe.current = !0), le.current()),
                  H(t ? `show-immediate` : `fade-in`));
              },
              hide: function (e) {
                e.isImmediate ? H(`hide`) : H(`before-fade-out`);
              },
              done: he,
              shouldAlwaysFadeIn: W(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
                ? pe.current
                : !1,
            }),
          );
      }
    },
    [de, U, he, me, K, le, pe],
  );
  (Rs({
    onClose: (0, G.useCallback)(
      function () {
        var e;
        (e = z.current) == null || e.requestHide({ isImmediate: !0 });
      },
      [z],
    ),
    isDisabled: V === `hide` || V === `fade-out`,
  }),
    (0, G.useEffect)(
      function () {
        return V === `hide`
          ? zn
          : (V === `before-fade-out` && H(`fade-out`),
            (0, To.bind)(window, {
              type: `scroll`,
              listener: function () {
                z.current && z.current.requestHide({ isImmediate: !0 });
              },
              options: { capture: !0, passive: !0, once: !0 },
            }));
      },
      [V],
    ));
  var ve = (0, G.useCallback)(
      function () {
        w && z.current && z.current.requestHide({ isImmediate: !0 });
      },
      [w],
    ),
    q = (0, G.useCallback)(
      function () {
        S && z.current && z.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    ye = (0, G.useCallback)(
      function (e) {
        (ae.current && e.target === ae.current) ||
          e.defaultPrevented ||
          (e.preventDefault(),
          _e(
            ne
              ? {
                  type: `mouse`,
                  mouse: W(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
                    ? void 0
                    : sd({ left: e.clientX, top: e.clientY }),
                  clientX: e.clientX,
                  clientY: e.clientY,
                }
              : { type: `keyboard` },
          ));
      },
      [ne, _e],
    ),
    be = (0, G.useCallback)(function (e) {
      (ae.current && e.target === ae.current) ||
        e.defaultPrevented ||
        (e.preventDefault(), z.current && z.current.requestHide({ isImmediate: !1 }));
    }, []),
    xe = ne
      ? function (e) {
          var t;
          (t = z.current) != null &&
            t.isActive() &&
            (W(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ||
              (z.current.mousePosition = sd({ left: e.clientX, top: e.clientY })),
            (z.current.mousePos = { clientX: e.clientX, clientY: e.clientY }));
        }
      : void 0,
    Se = (0, G.useCallback)(function () {
      if (z.current && z.current.isActive()) {
        z.current.keep();
        return;
      }
    }, []),
    Ce = (0, G.useCallback)(
      function (e) {
        try {
          if (!e.target.matches(`:focus-visible`)) return;
        } catch {}
        _e({ type: `keyboard` });
      },
      [_e],
    ),
    we = (0, G.useCallback)(function () {
      z.current && z.current.requestHide({ isImmediate: !1 });
    }, []),
    Te = (0, G.useCallback)(
      function (e) {
        e === `exiting` &&
          ce.current === `fade-out` &&
          z.current &&
          z.current.finishHideAnimation();
      },
      [ce],
    ),
    Ee = f,
    De = V !== `hide` && !!o,
    Oe = !M && De,
    ke = V !== `hide` && V !== `fade-out`,
    Ae = (0, G.useCallback)(function () {
      var e;
      (e = z.current) == null || e.requestHide({ isImmediate: !0 });
    }, []);
  Us({ isOpen: De && ke, onClose: Ae });
  var je = function () {
      var e, t;
      return ne &&
        (e = z.current) != null &&
        e.mousePos &&
        ie.current &&
        W(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
        ? cd(z.current.mousePos, { targetElement: ie.current, tooltipPosition: r })
        : ne &&
            (t = z.current) != null &&
            t.mousePosition &&
            !W(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
          ? z.current?.mousePosition
          : ie.current || void 0;
    },
    Me = hd(`tooltip`, Oe),
    Ne = {
      onMouseOver: ye,
      onMouseOut: be,
      onMouseMove: xe,
      onMouseDown: ve,
      onClick: q,
      onFocus: Ce,
      onBlur: we,
    };
  p && (Ne[`data-testid`] = `${p}--container`);
  var Pe = typeof t == `function`;
  (0, G.useEffect)(
    function () {
      if (!Pe) {
        var e = ie.current;
        if (!(!e || !Me))
          return (
            e.setAttribute(`aria-describedby`, Me),
            function () {
              return e.removeAttribute(`aria-describedby`);
            }
          );
      }
    },
    [Pe, Me],
  );
  var Fe = Oe
      ? G.createElement(
          `span`,
          { "data-testid": p ? `${p}-hidden` : void 0, hidden: !0, id: Me },
          typeof o == `function` ? o({}) : o,
        )
      : null,
    Ie = te && W(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ? G.Fragment : Od;
  return G.createElement(
    G.Fragment,
    null,
    typeof t == `function`
      ? G.createElement(
          G.Fragment,
          null,
          t(Sd(Sd({}, Ne), {}, { "aria-describedby": Me, ref: se })),
          Fe,
        )
      : G.createElement(Ee, O({}, Ne, { ref: oe, role: `presentation` }), t, Fe),
    De
      ? G.createElement(
          Ie,
          null,
          G.createElement(Eu, { placement: re, referenceElement: je(), strategy: D }, function (e) {
            var t = e.ref,
              n = e.style,
              r = e.update,
              i = e.placement,
              a = ne ? void 0 : Td[Ed(i)];
            return G.createElement(
              ic,
              { appear: !0 },
              ke &&
                G.createElement(
                  dc,
                  {
                    distance: `constant`,
                    entranceDirection: a,
                    exitDirection: a,
                    onFinish: Te,
                    duration: V === `show-immediate` ? `none` : `medium`,
                  },
                  function (e) {
                    var i = e.className;
                    return G.createElement(
                      u,
                      {
                        ref: t,
                        className: `Tooltip ${i}`,
                        style: Sd(Sd({}, n), A && { pointerEvents: `none` }),
                        truncate: c,
                        placement: re,
                        testId: je() ? p : p && `${p}--unresolved`,
                        onMouseOut: be,
                        onMouseOver: Se,
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
var Od = function (e) {
  var t = e.children;
  return G.createElement($u, { zIndex: Cd }, t);
};
g();
var kd = [
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
function Ad(e, t) {
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
function jd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ad(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ad(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Md = `--local-dynamic-table-text-color`,
  Nd = (0, G.forwardRef)(function (e, t) {
    var n = e.width,
      r = e.children;
    e.isSortable;
    var i = e.sortOrder,
      a = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var s = e.style,
      c = e.testId,
      u = M(e, kd),
      d = jd(
        jd(jd({}, s), n && w({ width: n })),
        {},
        R({}, Md, `var(--ds-text-subtlest, #6B6E76)`),
      ),
      f = i === `ASC`,
      m = i === p,
      h = function () {
        if (f) return `ascending`;
        if (m) return `descending`;
      },
      g = r ? `th` : `td`;
    return G.createElement(
      g,
      O({ "aria-sort": h(), style: d, onClick: void 0, ref: t, "data-testid": c }, u, {
        className: l([
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
g();
var Pd = e(Is()),
  Fd = e(Ls()),
  Id = [
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
  Ld = {
    buttonWrapper: `_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke`,
    sortIconHiddenWrapper: `_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n`,
    sortIconVisibleWrapper: `_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66`,
    hideIconHeaderWrapper: `_tzy4idpf _18u010v4`,
    visibleHeaderWrapper: `_tzy4kb7n _u5f31b66`,
  },
  Rd = { headCellContainer: `_1e0c1txw _4cvr1h6o`, text: `_11c8wadc _syazazsu _k48pwu06` },
  zd = function (e) {
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
      m = p === void 0 ? `Sort descending` : p,
      h = e.buttonAriaRoleDescription,
      g = h === void 0 ? `Sort button` : h,
      _ = e.isIconOnlyHeader,
      v = M(e, Id),
      y = N((0, G.useState)(!1), 2),
      b = y[0],
      x = y[1],
      S = N((0, G.useState)(!1), 2),
      C = S[0],
      w = S[1],
      T = b || c === u || o !== void 0 || C,
      E = T && _,
      D = !_ || T || (_ && !C),
      k = (0, G.useCallback)(
        function () {
          w?.(!0);
        },
        [w],
      ),
      A = (0, G.useCallback)(
        function () {
          w?.(!1);
        },
        [w],
      ),
      j = (0, G.useCallback)(
        function () {
          x(!0);
        },
        [x],
      ),
      P = (0, G.useCallback)(
        function () {
          x(!1);
        },
        [x],
      ),
      F = G.createElement(
        pa,
        { xcss: Rd.headCellContainer, onMouseEnter: j, onMouseLeave: P, onFocus: k, onBlur: A },
        G.createElement(
          Dd,
          { content: o === `ASC` ? f : m },
          G.createElement(
            eo,
            { onClick: s, xcss: Ld.buttonWrapper, "aria-roledescription": g },
            G.createElement(
              Oa,
              { xcss: E ? Ld.hideIconHeaderWrapper : Ld.visibleHeaderWrapper },
              G.createElement(`span`, { className: l([Rd.text]) }, t),
            ),
            D &&
              G.createElement(
                Oa,
                { xcss: T ? Ld.sortIconVisibleWrapper : Ld.sortIconHiddenWrapper },
                o === `ASC`
                  ? G.createElement(Fd.default, {
                      label: ``,
                      color: `var(--ds-text-subtle, #505258)`,
                      testId: r && `${r}--up--icon`,
                    })
                  : G.createElement(Pd.default, {
                      label: ``,
                      color: `var(--ds-text-subtle, #505258)`,
                      testId: r && `${r}--down--icon`,
                    }),
              ),
          ),
        ),
      );
    return G.createElement(
      Nd,
      O({ style: n, testId: r && `${r}--head--cell`, ref: typeof i == `string` ? null : i }, v, {
        isSortable: a,
        sortOrder: o,
      }),
      a ? F : t,
    );
  },
  Bd = [`isRanking`, `refHeight`, `refWidth`];
function Vd(e, t, n) {
  return ((t = L(t)), F(e, Hd() ? Reflect.construct(t, n || [], L(e).constructor) : t.apply(e, n)));
}
function Hd() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Hd = function () {
    return !!e;
  })();
}
var Ud = b(
    (function (e) {
      function t() {
        return (I(this, t), Vd(this, t, arguments));
      }
      return (
        te(t, e),
        j(t, [
          {
            key: `render`,
            value: function () {
              var e = this.props,
                t = e.isRanking;
              e.refHeight;
              var n = e.refWidth,
                r = M(e, Bd),
                i = T(t, n);
              return G.createElement(zd, O({ inlineStyles: i }, r));
            },
          },
        ])
      );
    })(G.Component),
  ),
  Wd = [`cells`],
  Gd = [
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
function Kd(e, t, n) {
  return ((t = L(t)), F(e, qd() ? Reflect.construct(t, n || [], L(e).constructor) : t.apply(e, n)));
}
function qd() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (qd = function () {
    return !!e;
  })();
}
var Jd = (function (e) {
  function t(e) {
    var n;
    return (I(this, t), (n = Kd(this, t, [e])), (n.state = { activeSortButtonId: null }), n);
  }
  return (
    te(t, e),
    j(t, [
      {
        key: `UNSAFE_componentWillMount`,
        value: function () {
          v(this.props.sortKey, this.props.head);
        },
      },
      {
        key: `UNSAFE_componentWillReceiveProps`,
        value: function (e) {
          (this.props.sortKey !== e.sortKey || this.props.head !== e.head) && v(e.sortKey, e.head);
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
          var d = c ? Ud : zd,
            f = n.cells,
            p = M(n, Wd);
          return G.createElement(
            Fs,
            O({}, p, { isRanking: s, testId: l && `${l}--head` }),
            G.createElement(
              `tr`,
              null,
              f.map(function (t, n) {
                var c = t.ascendingSortTooltip,
                  f = t.buttonAriaRoleDescription,
                  p = t.colSpan,
                  m = t.content,
                  h = t.descendingSortTooltip,
                  g = t.isIconOnlyHeader,
                  _ = t.isSortable,
                  v = t.key,
                  y = t.shouldTruncate,
                  b = t.testId,
                  x = t.width,
                  S = M(t, Gd),
                  C = `head-cell-${n}`;
                return G.createElement(
                  d,
                  O(
                    {
                      colSpan: p,
                      content: m,
                      isFixedSize: a,
                      isIconOnlyHeader: g,
                      isSortable: !!_,
                      isRanking: s,
                      key: v || n,
                      headCellId: C,
                      activeSortButtonId: u,
                      onClick: function () {
                        (e.setState({ activeSortButtonId: C }), _ && o(t)());
                      },
                      testId: b || l,
                      shouldTruncate: y,
                      sortOrder: v === r ? i : void 0,
                      width: x,
                      ascendingSortTooltip: c,
                      descendingSortTooltip: h,
                      buttonAriaRoleDescription: f,
                    },
                    S,
                  ),
                );
              }),
            ),
          );
        },
      },
    ])
  );
})(G.Component);
jt();
var Yd = [`isRankable`, `isRanking`, `onRankStart`, `onRankEnd`, `isRankingDisabled`];
function Xd(e) {
  switch (e) {
    case p:
      return `ASC`;
    case `ASC`:
      return p;
    default:
      return e;
  }
}
var Zd = function (e) {
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
      f = e.isLoading,
      p = f === void 0 ? !1 : f,
      h = e.isFixedSize,
      g = h === void 0 ? !1 : h,
      _ = e.rowsPerPage,
      b = _ === void 0 ? 1 / 0 : _,
      x = e.onSetPage,
      S = x === void 0 ? zn : x,
      C = e.onSort,
      w = C === void 0 ? zn : C,
      T = e.page,
      D = T === void 0 ? 1 : T,
      O = e.emptyView,
      k = e.isRankable,
      A = k === void 0 ? !1 : k,
      j = e.isRankingDisabled,
      M = j === void 0 ? !1 : j,
      P = e.onRankStart,
      F = P === void 0 ? zn : P,
      I = e.onRankEnd,
      ee = I === void 0 ? zn : I,
      te = e.loadingSpinnerSize,
      ne = e.paginationi18n,
      re =
        ne === void 0
          ? { prev: `Previous Page`, next: `Next Page`, label: `Pagination`, pageLabel: `Page` }
          : ne,
      L = N((0, G.useState)(!1), 2),
      R = L[0],
      z = L[1],
      B = (0, G.useRef)(null),
      V = nr({
        fn: w,
        action: `sorted`,
        componentName: `dynamicTable`,
        packageName: `@atlaskit/dynamic-table`,
        packageVersion: `0.0.0-development`,
      }),
      H = nr({
        fn: ee,
        action: `ranked`,
        componentName: `dynamicTable`,
        packageName: `@atlaskit/dynamic-table`,
        packageVersion: `0.0.0-development`,
      });
    (0, G.useEffect)(
      function () {
        (v(a, n), di(n));
      },
      [a, n],
    );
    var ie = function (e) {
        return function () {
          var t = e.key;
          if (t) {
            if (V && A && t === a && o === `DESC`) {
              V({ key: null, sortOrder: null, item: e });
              return;
            }
            var n = t === a ? Xd(o) : `ASC`;
            V && V({ key: t, item: e, sortOrder: n });
          }
        };
      },
      ae = function (e, t) {
        S(e, t);
      },
      oe = function (e) {
        (z(!0), F(e));
      },
      se = function (e) {
        (z(!1), H(e));
      },
      ce = function () {
        return te || (E(i || [], D, b).length > 2 ? m : y);
      },
      le = function () {
        return p ? G.createElement(mi, { testId: l }) : O && G.createElement(pi, { testId: l }, O);
      },
      ue = i && i.length,
      U,
      de = !1;
    (u && Number.isInteger(u) && b && ue && ue <= u
      ? ((U = Math.ceil(u / b)), (de = !0))
      : (U = ue && b ? Math.ceil(ue / b) : 0),
      (U = U < 1 ? 1 : U));
    var fe = D > U ? U : D,
      pe = !!ue,
      W = ce(),
      me = le();
    return G.createElement(
      G.Fragment,
      null,
      G.createElement(
        Ui,
        {
          isLoading: p && pe,
          spinnerSize: W,
          targetRef: function () {
            return B.current;
          },
          testId: l,
          loadingLabel: s,
        },
        G.createElement(
          _i,
          { isFixedSize: g, "aria-label": d, hasDataRow: pe, testId: l, isLoading: p },
          !!t && G.createElement(fi, null, t),
          n &&
            G.createElement(Jd, {
              head: n,
              onSort: ie,
              sortKey: a,
              sortOrder: o,
              isRanking: R,
              isRankable: A,
              testId: l,
            }),
          pe &&
            G.createElement($d, {
              ref: B,
              highlightedRowIndex: r,
              rows: i,
              head: n,
              sortKey: a,
              sortOrder: o,
              rowsPerPage: b,
              page: fe,
              isFixedSize: g || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: de,
              testId: l,
              isRankable: A,
              isRanking: R,
              onRankStart: oe,
              onRankEnd: se,
              isRankingDisabled: M || p || !1,
            }),
        ),
      ),
      U <= 1
        ? null
        : G.createElement(
            hi,
            { testId: l },
            G.createElement(Ns, {
              value: fe,
              onChange: ae,
              total: U,
              i18n: re,
              isDisabled: p,
              testId: l,
            }),
          ),
      !pe &&
        me &&
        G.createElement(Ii, { isLoading: p, spinnerSize: `large`, testId: l, loadingLabel: s }, me),
    );
  },
  Qd = (0, G.lazy)(function () {
    return At(
      () => import(`./body-CWwQGvKG.js`),
      __vite__mapDeps([6, 1, 7, 4, 8, 9, 10]),
      import.meta.url,
    );
  }),
  $d = (0, G.forwardRef)(function (e, t) {
    var n = e.isRankable,
      r = n === void 0 ? !1 : n,
      i = e.isRanking,
      a = e.onRankStart,
      o = e.onRankEnd,
      s = e.isRankingDisabled,
      c = M(e, Yd),
      l = r && !c.sortKey,
      u = N((0, G.useState)(!1), 2),
      d = u[0],
      f = u[1];
    (0, G.useEffect)(
      function () {
        l && f(!0);
      },
      [l],
    );
    var p = G.createElement(wi, O({ ref: t }, c));
    return l && d
      ? G.createElement(
          Di,
          { fallback: p },
          G.createElement(
            G.Suspense,
            { fallback: p },
            G.createElement(
              Qd,
              O({ ref: t }, c, {
                isRanking: i,
                onRankStart: a,
                onRankEnd: o,
                isRankingDisabled: s,
              }),
            ),
          ),
        )
      : p;
  });
function ef(e, t, n) {
  return ((t = L(t)), F(e, tf() ? Reflect.construct(t, n || [], L(e).constructor) : t.apply(e, n)));
}
function tf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (tf = function () {
    return !!e;
  })();
}
var nf = (function (e) {
  function t() {
    var e;
    I(this, t);
    var n = [...arguments];
    return (
      (e = ef(this, t, [].concat(n))),
      R(e, `state`, {
        page: e.props.defaultPage,
        sortKey: e.props.defaultSortKey,
        sortOrder: e.props.defaultSortOrder,
        rows: e.props.rows,
      }),
      R(e, `onSetPageHandler`, function (t, n) {
        var r = e.props.onSetPage;
        r && (r(t, n), e.setState({ page: t }));
      }),
      R(e, `onSortHandler`, function (t, n) {
        var r = t.key,
          i = t.item,
          a = t.sortOrder,
          o = e.props.onSort;
        o && (o({ key: r, item: i, sortOrder: a }, n), e.setState({ sortKey: r, sortOrder: a }));
      }),
      R(e, `onRankEndIfExistsHandler`, function (t) {
        e.props.onRankEnd && e.props.onRankEnd(t);
      }),
      R(e, `onRankEndHandler`, function (t) {
        var n = t.destination,
          r = e.state,
          i = r.rows,
          a = r.page,
          o = e.props.rowsPerPage;
        if (!n || !i) {
          e.onRankEndIfExistsHandler(t);
          return;
        }
        var s = ui(t, i, a, o);
        (e.setState({ rows: s }), e.onRankEndIfExistsHandler(t));
      }),
      e
    );
  }
  return (
    te(t, e),
    j(t, [
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
          return G.createElement(Zd, {
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
})(G.Component);
(R(nf, `defaultProps`, {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: zn,
  onSort: zn,
  rowsPerPage: 1 / 0,
}),
  g());
var rf = [
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
function af(e, t) {
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
function of(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? af(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : af(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var sf = {
    componentName: `textArea`,
    packageName: `@atlaskit/textarea`,
    packageVersion: `0.0.0-development`,
  },
  cf = 20,
  lf = 16,
  uf = 2,
  df = 6,
  ff = `0.2s`,
  pf = 2,
  mf = {
    standard: `_1dqonqa1 _kp82rsbi _1ltx1j9a _1bqsbk0g _z1pvby5v _19wtrsbi _12yml4ek _1l02v77o _11zpv77o _141f1v6z _daj71v6z _olc612x7 _14ji12x7 _7ba01v6z _1kod1v6z _858u1v1w _jomrr01l _7ehivyy1 _186j1v1w _qu18by5v`,
    subtle: `_1dqonqa1 _kp821j28 _1ltx1j28 _19wtrsbi _12yml4ek _1l02v77o _11zpv77o _141f1v6z _daj71v6z _olc612x7 _14ji12x7 _1kod1v6z _7ba01v6z _858u1v1w _jomrr01l _7ehivyy1`,
    none: `_1dqoglyw _kp821j28 _1ltx1j28 _19wt1j28 _12ym1j28 _1l02v77o _daj712x7 _11zpv77o _141f12x7 _olc612x7 _1kod12x7 _14ji12x7 _7ba012x7 _858u1j28 _jomr1j28 _7ehi3sij`,
  },
  hf = { default: `_11c81d4k _1tn2fhey`, monospace: `_11c81d4k _ect4zzfg _1tn2fhey _14md1vhz` },
  gf = {
    horizontal: `_14zg1e08`,
    vertical: `_14zg1e54`,
    auto: `_14zg1hrf`,
    smart: `_14zgglyw`,
    none: `_14zgglyw`,
  },
  _f = function (e) {
    e.style.height = `auto`;
    var t = pf,
      n = e.scrollHeight + t * 2;
    e.style.height = `${n}px`;
  },
  vf = (0, G.forwardRef)(function (e, t) {
    var n = (0, G.useRef)(null),
      r = e.resize,
      i = r === void 0 ? `smart` : r,
      a = e.appearance,
      o = a === void 0 ? `standard` : a,
      s = e.isCompact,
      c = s === void 0 ? !1 : s,
      u = e.isRequired,
      d = u === void 0 ? !1 : u,
      f = e.isReadOnly,
      p = f === void 0 ? !1 : f,
      m = e.isDisabled,
      g = m === void 0 ? !1 : m,
      _ = e.isInvalid,
      v = _ === void 0 ? !1 : _,
      y = e.isMonospaced,
      b = y === void 0 ? !1 : y,
      x = e.minimumRows,
      S = x === void 0 ? 2 : x,
      C = e.testId,
      w = e.maxHeight,
      T = w === void 0 ? `50vh` : w,
      E = e.onBlur,
      D = e.onFocus,
      k = e.onChange,
      A = e.value,
      j = e.style,
      N = M(e, rf),
      P = (0, G.useMemo)(
        function () {
          return o === `none` ? 2 : 1;
        },
        [o],
      );
    (0, G.useEffect)(
      function () {
        var e = n.current;
        i === `smart` && e && _f(e);
      },
      [i, A],
    );
    var F = nr(
        of(
          {
            fn: function (e) {
              E && E(e);
            },
            action: `blurred`,
          },
          sf,
        ),
      ),
      I = nr(
        of(
          {
            fn: function (e) {
              D && D(e);
            },
            action: `focused`,
          },
          sf,
        ),
      ),
      ee = function (e) {
        ((n.current = e),
          t && z(t) === `object` && (t.current = e),
          t && typeof t == `function` && t(e));
      },
      te = (0, G.useCallback)(
        function (e) {
          var t = n.current;
          (i === `smart` && t && _f(t), k && k(e));
        },
        [k, i],
      ),
      ne = { "data-invalid": v || void 0, "data-compact": c || void 0, "data-testid": C || void 0 };
    return G.createElement(
      `textarea`,
      O(
        {},
        ne,
        {
          value: A,
          disabled: g,
          readOnly: p,
          required: d,
          ref: ee,
          onChange: te,
          onBlur: F,
          onFocus: I,
          rows: S,
        },
        N,
        {
          className: l([
            `_19pkidpf _2hwxidpf _otyridpf _18u0idpf _16jlkb7n _1o9zkb7n _i0dl1osq _2rkofajl _11c8fhey _12ji1r31 _1qu2glyw _12y31o36 _1reo1wug _18m91wug _v5641gs0 _189ee4h9 _1e0c1ule _vchhusvi _1bsb1osq _1ul9idpf _p12f1osq _kqswh2mm _syazi7uo _slp31hna _153g1bqt _usy41j9a _1a2sizbr _vbqb1gmx _j5dh13gf _cfjqkb7n _k3o7n7od _1goxglyw _13xeglyw _1fra1bqt _ibjdl4ek _6zpvizbr _19k0by5v _1idr1rpy _1lep1gmx _nmhq1fiz _1n388sxn _1luh1v1w _ndzbr01l _1vj0vyy1`,
            W(`platform-dst-shape-theme-default`) && `_2rko1qi0`,
            mf[o],
            hf[b ? `monospace` : `default`],
            gf[i],
            `_uzq71d1b _16lw1cn1`,
          ]),
          style: of(
            of({}, j),
            {},
            {
              maxHeight: T,
              "--_19uzta9": h(`background-color ${ff} ease-in-out,
               border-color ${ff} ease-in-out`),
              "--_dqsusn": h(`${lf * S + uf * 2 + P * 2}px`),
              "--_n9nqvh": h(`${cf * S + df * 2 + P * 2}px`),
            },
          ),
        },
      ),
    );
  }),
  yf = (0, G.memo)(
    (0, G.forwardRef)(function (e, t) {
      return G.createElement(vf, O({ ref: t }, e));
    }),
  );
((yf.displayName = `TextArea`), g());
var bf = [
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
function xf(e, t) {
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
function Sf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? xf(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : xf(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Cf = { invalid: `_msj6gir2`, disabled: `_6up518qt` },
  wf = { componentName: `textField`, packageName: `@atlaskit/textfield`, packageVersion: `8.3.2` },
  Tf = {
    standard: `_1h6dby5v _bfhkby5v _syaz1gmx _80om13gf`,
    subtle: `_1h6d1j28 _bfhk1j28 _syaz1gmx _80om13gf`,
    none: `_1h6d1j28 _bfhk1j28 _syaz1gmx _80om13gf`,
  },
  Ef = {
    standard: `_1p9x1v1w _qao9r01l _q433vyy1`,
    subtle: `_1p9x1v1w _qao9r01l _q433vyy1`,
    none: `_1p9x1j28 _qao91j28 _q4333sij`,
  },
  Df = {
    standard: `_4cvxrsbi _irr3l4ek`,
    subtle: `_4cvxrsbi _irr3l4ek`,
    none: `_4cvx1j28 _irr31j28`,
  },
  Of = {
    standard: `_1h6drsbi _1dqonqa1 _syazi7uo _80om1kdv _bfhk1j9a _msj6gir2`,
    subtle: `_1h6d1j28 _1dqonqa1 _syazi7uo _80om1kdv _16hg1j28 _msj6gir2`,
    none: `_1h6d1j28 _1dqoglyw _syazi7uo _80om1kdv _16hg1j28 _msj6gir2`,
  },
  kf = { xsmall: 80, small: 160, medium: 240, large: 320, xlarge: 480 },
  Af = function (e) {
    return e ? (e in kf ? `${kf[e]}px` : `${+e}px`) : `100%`;
  },
  jf = {
    standard: `_1dqonqa1 _1q51e4h9 _85i5e4h9 _bozgidpf _y4tiidpf`,
    subtle: `_1dqonqa1 _1q51e4h9 _85i5e4h9 _bozgidpf _y4tiidpf`,
    none: `_1dqoglyw`,
  },
  Mf = (0, G.forwardRef)(function (e, t) {
    var n = e.appearance,
      r = n === void 0 ? `standard` : n,
      i = e.className,
      a = e.elemAfterInput,
      o = e.elemBeforeInput,
      s = e.isCompact,
      c = s === void 0 ? !1 : s,
      u = e.isDisabled,
      d = u === void 0 ? !1 : u,
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
      C = e.onFocus,
      w = e.onMouseDown,
      T = e.placeholder,
      E = e.testId,
      D = e.width,
      k = M(e, bf),
      A = (0, G.useRef)(null),
      j = nr(
        Sf(
          {
            fn: function (e) {
              C && C(e);
            },
            action: `focused`,
          },
          wf,
        ),
      ),
      N = nr(
        Sf(
          {
            fn: function (e) {
              x && x(e);
            },
            action: `blurred`,
          },
          wf,
        ),
      ),
      P = (0, G.useCallback)(
        function (e) {
          (e.target.tagName !== `INPUT` && e.preventDefault(),
            A && A.current && !d && document.activeElement !== A.current && A.current.focus(),
            w && w(e));
        },
        [w, d],
      ),
      F = (0, G.useCallback)(
        function (e) {
          ((A.current = e),
            t && (z(t) === `object` && (t.current = e), typeof t == `function` && t(e)));
        },
        [t],
      );
    return G.createElement(
      `div`,
      {
        role: `presentation`,
        "data-disabled": d || void 0,
        "data-invalid": p || void 0,
        "data-ds--text-field--container": !0,
        "data-testid": E && `${E}-container`,
        onMouseDown: P,
        style: { maxWidth: `${Af(D)}` },
        className: l([
          `_16jlkb7n _1o9zkb7n _i0dl1osq _11c8fhey _1reo15vq _18m915vq _v564r5cv _189ee4h9 _1e0c1txw _vchhusvi _4cvr1h6o _1bah1yb4 _lcxv1wug _s7n4jp4b _slp31hna _1tnqfajl`,
          W(`platform-dst-shape-theme-default`) && `_1tnq1qi0`,
          Of[r],
          jf[r],
          !d && Ef[r],
          !d && Df[r],
          d && Cf.disabled,
          d && Tf[r],
          p && Cf.invalid,
          p && `_1h6d1bqt _4cvx1bqt _16qsizbr _1dbzizbr _uk1sr01l`,
          i,
        ]),
      },
      o,
      G.createElement(
        `input`,
        O({}, k, {
          "aria-invalid": p || void 0,
          "data-compact": c || void 0,
          "data-ds--text-field--input": !0,
          "data-monospaced": h || void 0,
          "data-testid": E,
          disabled: d,
          name: b,
          onBlur: N,
          onChange: S,
          onFocus: j,
          placeholder: T,
          readOnly: _,
          ref: F,
          required: y,
          className: l([
            `_19itidpf _11c81d4k _12ji1r31 _1qu2glyw _12y31o36 _vchhusvi _1bsb1osq _1ul9idpf _bfhk1j28 _syaz1kw7 _80om1kw7 _14ji12x7 _olc612x7 _1kod12x7 _7ba012x7 _1goxglyw _13xeglyw _1n7e1l2s _1idr1rpy _1tn2fhey _l9oiu2gc _549yu2gc _1h5w12x7 _124212x7`,
            h && `_ect4zzfg _14mdzzfg`,
            c && `_11zpv77o _1l02v77o _daj712x7 _141f12x7 _1srd1b66 _oi9h1b66 _1e3012x7 _1txv12x7`,
            d && `_syaz1gmx _1idr1gmx`,
            d && `_1fnx18qt`,
          ]),
        }),
      ),
      a,
    );
  });
function Nf(e) {
  return P(e) || ne(e) || ee(e) || re();
}
var Pf = (0, G.createContext)(null),
  Ff = (0, G.createContext)(null);
g();
function If(e, t) {
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
function Lf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? If(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : If(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Rf = {
    componentName: `tabs`,
    packageName: `@atlaskit/tabs`,
    packageVersion: `0.0.0-development`,
  },
  zf = function (e) {
    var t = e.tabPanel,
      n = e.index,
      r = e.isSelected,
      i = e.tabsId;
    return (
      t &&
      G.createElement(
        Ff.Provider,
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
  Bf = function (e) {
    var t = e.shouldUnmountTabPanelOnChange,
      n = t === void 0 ? !1 : t,
      r = e.selected,
      i = e.defaultSelected,
      a = e.onChange,
      o = e.id,
      s = e.analyticsContext,
      c = e.children,
      u = e.testId,
      d = N((0, G.useState)(r || i || 0), 2),
      f = d[0],
      p = d[1],
      m = r === void 0 ? f : r,
      h = Nf(
        G.Children.toArray(c).filter(function (e) {
          return !!e;
        }),
      ),
      g = h[0],
      _ = h.slice(1),
      v = (0, G.useRef)(new Set([m]));
    v.current.has(m) || v.current.add(m);
    var y = nr(
        Lf(
          {
            fn: (0, G.useCallback)(
              function (e, t) {
                (a && a(e, t), p(e));
              },
              [a],
            ),
            action: `clicked`,
            analyticsData: s,
          },
          Rf,
        ),
      ),
      b = n
        ? zf({ tabPanel: _[m], index: m, isSelected: !0, tabsId: o })
        : Array.from(v.current).map(function (e) {
            return zf({ tabPanel: _[e], index: e, isSelected: e === m, tabsId: o });
          });
    return G.createElement(
      `div`,
      {
        "data-testid": u,
        className: l([
          `_1e0c1txw _p12f1osq _1tkeidpf _i0dl1osq _2lx21bp4 _16jlkb7n`,
          `_1c3y1txw _ftfaidpf _18i0kb7n _185bglyw`,
        ]),
      },
      G.createElement(Pf.Provider, { value: { selected: m, onChange: y, tabsId: o } }, g),
      G.createElement(G.Fragment, null, b),
    );
  };
function Vf() {
  var e = (0, G.useContext)(Ff);
  if (e == null) throw Error(`@atlaskit/tabs:  A TabPanel must have a Tabs parent.`);
  return e;
}
var Hf = function (e) {
    var t = e.children,
      n = e.testId,
      r = Vf(),
      i = r.role,
      a = r.id,
      o = r.hidden,
      s = r[`aria-labelledby`],
      c = r.tabIndex;
    return G.createElement(
      Xa,
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
      G.createElement(G.Fragment, null, t),
    );
  },
  Uf = (0, G.createContext)(null);
function Wf() {
  var e = (0, G.useContext)(Uf);
  if (e == null || e === void 0) throw Error(`@atlaskit/tabs: A Tab must have a TabList parent.`);
  return e;
}
var Gf = (0, G.forwardRef)(function (e, t) {
  var n = e.children,
    r = e.testId,
    i = Wf(),
    a = i.onClick,
    o = i.id,
    s = i[`aria-controls`],
    c = i[`aria-posinset`],
    l = i[`aria-selected`],
    u = i[`aria-setsize`],
    d = i.onKeyDown,
    f = i.role,
    p = i.tabIndex;
  return G.createElement(
    Xa,
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
    G.createElement(Ka, { weight: `medium`, color: `inherit`, maxLines: 1 }, n),
  );
});
function Kf() {
  var e = (0, G.useContext)(Pf);
  if (e == null) throw Error(`@atlaskit/tabs: A TabList must have a Tabs parent.`);
  return e;
}
g();
var qf = function (e) {
  var t = e.children,
    n = Kf(),
    r = n.tabsId,
    i = n.selected,
    a = n.onChange,
    o = (0, G.createRef)(),
    s = G.Children.toArray(t).filter(Boolean),
    c = s.length,
    u = (0, G.useCallback)(
      function (e) {
        var t = o.current?.querySelector(`[id='${r}-${e}']`);
        (t && t.focus(), a(e));
      },
      [r, o, a],
    ),
    d = (0, G.useCallback)(
      function (e) {
        if ([`ArrowRight`, `ArrowLeft`, `Home`, `End`].includes(e.key)) {
          e.preventDefault();
          var t = c - 1;
          if ([`Home`, `End`].includes(e.key)) {
            u(e.key === `Home` ? 0 : t);
            return;
          }
          var n =
            parseInt(e.currentTarget.getAttribute(`aria-posinset`) || `0`) -
            1 +
            (e.key === `ArrowRight` ? 1 : -1);
          ((n < 0 || n >= c) && (n = n < 0 ? t : 0), u(n));
        }
      },
      [c, u],
    ),
    f = (0, G.useCallback)(
      function (e) {
        var t = e.tab,
          n = e.isSelected,
          i = e.index;
        return G.createElement(
          Uf.Provider,
          {
            value: {
              onClick: function () {
                return a(i);
              },
              onKeyDown: d,
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
      [c, d, a, r],
    );
  return G.createElement(
    `div`,
    {
      role: `tablist`,
      ref: o,
      className: l([
        `_1e0c1txw _kqswh2mm _85i5ze3t _1q51ze3t _y4tize3t _bozgze3t`,
        `_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _qwyt1qi0 _7hip15vq _1fud15vq _bb0mh2mm _1quzazsu _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _1lzu1uh4 _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oazazsu _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1b8d1uh4 _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i20i7uo _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _rsmzz0c1 _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiem6x5g _pascidpf _eid3idpf _zr3eidpf _fntnidpf _1mp41kw7 _kfgte4h9 _1cs8stnw _1rus1l7x _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc`,
      ]),
    },
    s.map(function (e, t) {
      return f({ tab: e, index: t, isSelected: t === i });
    }),
  );
};
function Jf(e) {
  return function (t) {
    e.forEach(function (e) {
      typeof e == `function` ? e(t) : e !== null && z(e) === `object` && (e.current = t);
    });
  };
}
var Yf = (0, G.createContext)(void 0),
  Xf = function () {
    var e = (0, G.useContext)(Yf);
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
function Zf(e) {
  (e.preventDefault(), e.stopPropagation());
}
var Qf = 9;
function $f(e) {
  e.keyCode !== Qf && Zf(e);
}
function ep(e, t) {
  return e
    ? {
        onMouseDownCapture: Zf,
        onMouseUpCapture: Zf,
        onKeyDownCapture: $f,
        onKeyUpCapture: $f,
        onTouchStartCapture: Zf,
        onTouchEndCapture: Zf,
        onPointerDownCapture: Zf,
        onPointerUpCapture: Zf,
        onClickCapture: Zf,
        onClick: Zf,
      }
    : t;
}
function tp(e) {
  switch (e) {
    case `compact`:
      return `small`;
    default:
      return `medium`;
  }
}
function np(e) {
  var t = e.appearance,
    n = e.isDisabled,
    r = e.isSelected;
  return n || r
    ? `inherit`
    : t === `primary` || t === `danger` || t === `discovery`
      ? `invert`
      : `inherit`;
}
function rp(e) {
  var t = e.appearance,
    n = e.spacing,
    r = e.isDisabled,
    i = e.isSelected,
    a = e.testId;
  return G.createElement(si, {
    size: tp(n),
    appearance: np({ appearance: t, isDisabled: r, isSelected: i }),
    testId: a ? `${a}--loading-spinner` : void 0,
  });
}
g();
var ip =
    `appearance.autoFocus.isDisabled.isLoading.isSelected.isIconButton.isCircle.hasIconBefore.hasIconAfter.shouldFitContainer.spacing.ariaLabel.ariaLabelledBy.children.interactionName.onClick.onMouseDown.onMouseDownCapture.onMouseUp.onMouseUpCapture.onKeyDown.onKeyDownCapture.onKeyUp.onKeyUpCapture.onTouchStart.onTouchStartCapture.onTouchEnd.onTouchEndCapture.onPointerDown.onPointerDownCapture.onPointerUp.onPointerUpCapture.onClickCapture.testId.analyticsContext.componentName.role.onMouseOver.onMouseOut.onFocus.onBlur.onMouseMove.type`.split(
      `.`,
    ),
  ap = [`className`, `css`, `as`, `style`],
  op = `, Loading`,
  sp = {
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
  cp = {
    root: `_bfhksm61 _syazazsu _8l3m1l7x _aetrb3bt _1053azsu _f8pjazsu _30l3azsu _9h8hazsu`,
    interactive: `_irr31dpa _30l3azsu _1di6fcek _9h8hazsu`,
    disabled: `_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28`,
  },
  lp = {
    root: `_bfhk1856 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3hf2y _9h8h15cr _1di6g6ey`,
  },
  up = {
    root: `_bfhk1kmu _syaz1yd3 _10531yd3 _f8pj1yd3 _30l31yd3 _9h8h1yd3`,
    interactive: `_30l31yd3 _irr31spp _9h8h1yd3 _1di64m4m`,
  },
  dp = {
    root: `_bfhkybec _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3s9hg _9h8h15cr _1di613a9`,
  },
  fp = {
    root: `_bfhku5tj _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3fqeg _9h8h15cr _1di61f1m`,
  },
  pp = {
    root: `_bfhksm61 _syazazsu _1053azsu _f8pjazsu _30l3azsu _9h8hazsu`,
    interactive: `_irr31dpa _30l3azsu _1di6fcek _9h8hazsu`,
    disabled: `_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28`,
  },
  mp = {
    root: `_bfhk15s3 _syaz6x5g _8l3mq98m _aetrb3bt _10536x5g _f8pj6x5g _30l36x5g _9h8h6x5g`,
    insideSplitButton: `_1pbycs5v`,
    interactive: `_irr3ufnl _30l36x5g _1di6nozp _9h8h6x5g`,
    warning: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
    danger: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
    discovery: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
  },
  hp = G.forwardRef(function (e, t) {
    var n = e.appearance,
      r = e.autoFocus,
      i = r === void 0 ? !1 : r,
      a = e.isDisabled,
      o = a === void 0 ? !1 : a,
      s = e.isLoading,
      c = s === void 0 ? !1 : s,
      u = e.isSelected,
      d = u === void 0 ? !1 : u,
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
      T = e.ariaLabelledBy,
      E = e.children,
      D = e.interactionName,
      k = e.onClick,
      A = e.onMouseDown,
      j = e.onMouseDownCapture,
      N = e.onMouseUp,
      P = e.onMouseUpCapture,
      F = e.onKeyDown,
      I = e.onKeyDownCapture,
      ee = e.onKeyUp,
      te = e.onKeyUpCapture,
      ne = e.onTouchStart,
      re = e.onTouchStartCapture,
      L = e.onTouchEnd,
      R = e.onTouchEndCapture,
      z = e.onPointerDown,
      B = e.onPointerDownCapture,
      V = e.onPointerUp,
      H = e.onPointerUpCapture,
      ie = e.onClickCapture,
      ae = e.testId,
      oe = e.analyticsContext,
      se = e.componentName,
      ce = e.role,
      le = e.onMouseOver,
      ue = e.onMouseOut,
      U = e.onFocus,
      de = e.onBlur,
      fe = e.onMouseMove,
      pe = e.type,
      me = M(e, ip),
      he = (0, G.useRef)(null),
      K = Xf(),
      ge = ds(),
      _e = !!K,
      ve = K?.isNavigationSplitButton || !1,
      q = K?.appearance === `default` ? `subtle` : n || K?.appearance || `default`,
      ye = K?.spacing || C,
      be = K?.isDisabled || o,
      xe = !be && !c,
      Se = be || c,
      Ce = d && !be;
    (or(he, i), me.className, me.css, me.as, me.style);
    var we = M(me, ap);
    return G.createElement(
      eo,
      O(
        {},
        we,
        {
          componentName: se || `button`,
          analyticsContext: oe,
          role: ce,
          ref: Jf([he, t]),
          xcss: ya(
            sp.base,
            W(`platform-dst-shape-theme-default`) && sp.baseT26Shape,
            q === `default` && cp.root,
            q === `default` && xe && cp.interactive,
            q === `primary` && lp.root,
            q === `primary` && xe && lp.interactive,
            q === `warning` && up.root,
            q === `warning` && xe && up.interactive,
            q === `danger` && dp.root,
            q === `danger` && xe && dp.interactive,
            q === `discovery` && fp.root,
            q === `discovery` && xe && fp.interactive,
            q === `subtle` && pp.root,
            q === `subtle` && xe && pp.interactive,
            sp.linkDecorationUnset,
            Ce && mp.root,
            Ce && _e && mp.insideSplitButton,
            Ce && xe && mp.interactive,
            Ce && q === `danger` && mp.danger,
            Ce && q === `warning` && mp.warning,
            Ce && q === `discovery` && mp.discovery,
            be && sp.disabled,
            be && q !== `default` && q !== `subtle` && sp.sharedDisabled,
            be && q === `default` && cp.disabled,
            h && !_e && sp.circle,
            ye === `compact` && sp.spacingCompact,
            ye === `compact` && W(`platform-dst-shape-theme-default`) && sp.spacingCompactT26Shape,
            x && sp.fullWidth,
            _ && sp.buttonIconBefore,
            y && sp.buttonIconAfter,
            p && sp.iconButton,
            p && ye === `compact` && sp.iconButtonCompact,
            c && sp.loading,
            _e && sp.splitButton,
            ve && sp.navigationSplitButton,
          ),
          isDisabled: W(`platform-dst_fix_not_focusable_loading_button`) ? be : Se,
        },
        W(`platform-dst_fix_not_focusable_loading_button`) && { "aria-live": `polite` },
        c && W(`platform-dst_fix_not_focusable_loading_button`) && { "aria-disabled": !0 },
        {
          "aria-label": c && w && !T ? `${w} ${op}` : w,
          "aria-labelledby": c && T ? `${T} ${ge}` : T,
          onClick: k,
        },
        ep(Se, {
          onMouseDownCapture: j,
          onMouseUpCapture: P,
          onKeyDownCapture: I,
          onKeyUpCapture: te,
          onTouchStartCapture: re,
          onTouchEndCapture: R,
          onPointerDownCapture: B,
          onPointerUpCapture: H,
          onClickCapture: ie,
        }),
        {
          testId: ae,
          onMouseOver: le,
          onFocus: U,
          onMouseMove: fe,
          onBlur: de,
          type: pe,
          interactionName: D,
          onMouseDown: A,
          onMouseUp: N,
          onKeyDown: F,
          onMouseOut: ue,
          onKeyUp: ee,
          onTouchStart: ne,
          onTouchEnd: L,
          onPointerDown: z,
          onPointerUp: V,
        },
      ),
      G.createElement(
        Yf.Provider,
        { value: void 0 },
        E,
        c &&
          G.createElement(
            `span`,
            { className: l([sp.loadingOverlay]) },
            rp({ spacing: ye, appearance: q, isDisabled: be, isSelected: Ce, testId: ae }),
          ),
        c && (T || !w) && G.createElement(Cr, { id: ge }, op),
      ),
    );
  });
g();
var gp = {
    text: `_1reo15vq _18m915vq _16jlkb7n _1o9zkb7n _1bto1l2s _o5721q9c`,
    icon: `_1e0c1txw _16jlidpf _1o9zidpf _1wpz1h6o _1wybidpf _vwz4idpf _uiztglyw`,
    common: `_v564g17y`,
    fade: `_tzy4idpf`,
  },
  _p = function (e) {
    var t = e.children,
      n = e.type,
      r = n === void 0 ? `text` : n,
      i = e.isLoading;
    return G.createElement(
      `span`,
      { className: l([gp.common, r === `text` && gp.text, r === `icon` && gp.icon, i && gp.fade]) },
      t,
    );
  };
function vp(e) {
  return !e.displayName && !e.render && typeof e == `function`;
}
var yp = function (e) {
    var t = e.icon,
      n = vp(t),
      r = {
        label: ``,
        color: `currentColor`,
        size: W(`platform_dst_button_chevron_sizing`)
          ? function (e) {
              return e.startsWith(`Chevron`) ? `small` : `medium`;
            }
          : void 0,
      };
    return G.createElement(G.Fragment, null, n ? t(r) : G.createElement(t, r));
  },
  bp =
    `aria-label.aria-labelledby.analyticsContext.appearance.autoFocus.icon.interactionName.isDisabled.isLoading.isSelected.isTooltipDisabled.label.onClick.onClickCapture.onKeyDownCapture.onKeyUpCapture.onMouseDownCapture.onMouseUpCapture.onPointerDownCapture.onPointerUpCapture.onTouchEndCapture.onTouchStartCapture.shape.spacing.testId.tooltip.type`.split(
      `.`,
    ),
  xp = [`className`, `css`, `as`, `style`],
  Sp = G.memo(
    G.forwardRef(function (e, t) {
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
        g = e.onClickCapture,
        _ = e.onKeyDownCapture,
        v = e.onKeyUpCapture,
        y = e.onMouseDownCapture,
        b = e.onMouseUpCapture,
        x = e.onPointerDownCapture,
        S = e.onPointerUpCapture,
        C = e.onTouchEndCapture,
        w = e.onTouchStartCapture,
        T = e.shape,
        E = e.spacing,
        D = e.testId,
        k = e.tooltip,
        A = e.type,
        j = A === void 0 ? `button` : A,
        N = M(e, bp);
      (N.className, N.css, N.as, N.style);
      var P = M(N, xp);
      return p
        ? G.createElement(
            hp,
            O({}, P, {
              ref: t,
              appearance: i,
              autoFocus: a,
              isDisabled: c,
              isLoading: u,
              isSelected: d,
              isIconButton: !0,
              isCircle: T === `circle`,
              hasIconBefore: !!o,
              spacing: E,
              ariaLabelledBy: n,
              onClick: h,
              onClickCapture: g,
              onKeyDownCapture: _,
              onKeyUpCapture: v,
              onMouseDownCapture: y,
              onMouseUpCapture: b,
              onPointerDownCapture: x,
              onPointerUpCapture: S,
              onTouchStartCapture: w,
              onTouchEndCapture: C,
              testId: D,
              componentName: `IconButton`,
              analyticsContext: r,
              type: j,
              interactionName: s,
            }),
            G.createElement(
              _p,
              { type: `icon`, isLoading: u },
              G.createElement(yp, { icon: o }),
              G.createElement(Cr, null, m),
            ),
          )
        : G.createElement(
            Dd,
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
              return G.createElement(
                hp,
                O({}, P, {
                  appearance: i,
                  autoFocus: a,
                  isDisabled: c,
                  isLoading: u,
                  isSelected: d,
                  isIconButton: !0,
                  isCircle: T === `circle`,
                  hasIconBefore: !1,
                  spacing: E,
                  ariaLabelledBy: n,
                  onClick: function (t, n) {
                    var r;
                    (h?.(t, n), (r = e.onClick) == null || r.call(e, t));
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
                  ref: Jf([t, e?.ref].filter(Boolean)),
                  onMouseDownCapture: y,
                  onMouseUpCapture: b,
                  onKeyDownCapture: _,
                  onKeyUpCapture: v,
                  onTouchStartCapture: w,
                  onTouchEndCapture: C,
                  onPointerDownCapture: x,
                  onPointerUpCapture: S,
                  onClickCapture: g,
                  type: j,
                  testId: D,
                  analyticsContext: r,
                  interactionName: s,
                  componentName: `IconButton`,
                }),
                G.createElement(
                  _p,
                  { type: `icon`, isLoading: u },
                  G.createElement(yp, { icon: o }),
                  G.createElement(Cr, null, m),
                ),
              );
            },
          );
    }),
  );
Sp.displayName = `IconButton`;
function Cp(e, t) {
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
function wp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Cp(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Cp(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Tp = {
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
  Q = wp(wp({}, Z), {
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
  Ep = {
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
  Dp = {
    "opacity.disabled": `var(--ds-opacity-disabled, 0.4)`,
    "opacity.loading": `var(--ds-opacity-loading, 0.2)`,
  },
  Op = {
    "elevation.shadow.overflow": `var(--ds-shadow-overflow, 0px 0px 8px #1E1F21, 0px 0px 1px #1E1F21)`,
    "elevation.shadow.overflow.perimeter": `var(--ds-shadow-overflow-perimeter, #1E1F211f)`,
    "elevation.shadow.overflow.spread": `var(--ds-shadow-overflow-spread, #1E1F2129)`,
    "elevation.shadow.overlay": `var(--ds-shadow-overlay, 0px 8px 12px #1E1F21, 0px 0px 1px #1E1F21)`,
    "elevation.shadow.raised": `var(--ds-shadow-raised, 0px 1px 1px #1E1F21, 0px 0px 1px #1E1F21)`,
  },
  kp = {
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
  Ap = {
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
  jp = {
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
  Mp = {
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
  Np = {
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
  Pp = {
    "border.width": `var(--ds-border-width, 1px)`,
    "border.width.selected": `var(--ds-border-width-selected, 2px)`,
    "border.width.focused": `var(--ds-border-width-focused, 2px)`,
  },
  Fp = {
    "radius.xsmall": `var(--ds-radius-xsmall, 2px)`,
    "radius.small": `var(--ds-radius-small, 3px)`,
    "radius.medium": `var(--ds-radius-medium, 6px)`,
    "radius.large": `var(--ds-radius-large, 8px)`,
    "radius.xlarge": `var(--ds-radius-xlarge, 12px)`,
    "radius.xxlarge": `var(--ds-radius-xxlarge, 16px)`,
    "radius.full": `var(--ds-radius-full, 9999px)`,
    "radius.tile": `var(--ds-radius-tile, 25%)`,
  },
  Ip = {
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
  Lp = {
    "font.weight.bold": `var(--ds-font-weight-bold, 653)`,
    "font.weight.medium": `var(--ds-font-weight-medium, 500)`,
    "font.weight.regular": `var(--ds-font-weight-regular, 400)`,
    "font.weight.semibold": `var(--ds-font-weight-semibold, 600)`,
  },
  Rp = {
    "font.family.body": `var(--ds-font-family-body, "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.family.brand.body": `var(--ds-font-family-brand-body, "Charlie Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.family.brand.heading": `var(--ds-font-family-brand-heading, "Charlie Display", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.family.code": `var(--ds-font-family-code, "Atlassian Mono", ui-monospace, Menlo, "Segoe UI Mono", "Ubuntu Mono", monospace)`,
    "font.family.heading": `var(--ds-font-family-heading, "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
  },
  zp = {
    medium: `var(--ds-font-body, normal 400 14px/20px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    large: `var(--ds-font-body-large, normal 400 16px/24px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    small: `var(--ds-font-body-small, normal 400 12px/16px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
  },
  Bp = {
    bold: `var(--ds-font-weight-bold, 653)`,
    medium: `var(--ds-font-weight-medium, 500)`,
    regular: `var(--ds-font-weight-regular, 400)`,
    semibold: `var(--ds-font-weight-semibold, 600)`,
  },
  Vp = {
    large: `var(--ds-font-metric-large, normal 653 28px/32px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    medium: `var(--ds-font-metric-medium, normal 653 24px/28px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    small: `var(--ds-font-metric-small, normal 653 16px/20px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
  },
  Hp = [
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
  Up = function (e, t) {
    return Object.keys(t).reduce(function (n, r) {
      return ((n[r] = k(R({}, e, t[r]))), n);
    }, {});
  },
  Wp = Hp.reduce(function (e, t) {
    return ((e[t] = Up(t, Z)), e);
  }, {}),
  Gp = Hp.reduce(function (e, t) {
    return ((e[t] = Up(t, Z)), e);
  }, {}),
  Kp = Up(`backgroundColor`, jp);
(Up(`color`, Mp),
  Up(`fontWeight`, Lp),
  Up(`fontFamily`, Rp),
  Up(`font`, Ip),
  Up(`font`, zp),
  Up(`fontWeight`, Bp));
var qp = Up(le, kp),
  Jp = function (e) {
    return kp[e] !== void 0;
  };
Up(`font`, Vp);
function Yp(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = Xp(e)) || (t && e && typeof e.length == `number`)) {
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
function Xp(e, t) {
  if (e) {
    if (typeof e == `string`) return Zp(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Zp(e, t)
          : void 0
    );
  }
}
function Zp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Qp = {
    backgroundColor: jp,
    blockSize: Tp,
    borderBlockColor: Ap,
    borderBlockEndColor: Ap,
    borderBlockEndWidth: Pp,
    borderBlockStartColor: Ap,
    borderBlockStartWidth: Pp,
    borderBlockWidth: Pp,
    borderBottomColor: Ap,
    borderBottomLeftRadius: Fp,
    borderBottomRightRadius: Fp,
    borderBottomWidth: Pp,
    borderColor: Ap,
    borderEndEndRadius: Fp,
    borderEndStartRadius: Fp,
    borderInlineColor: Ap,
    borderInlineEndColor: Ap,
    borderInlineEndWidth: Pp,
    borderInlineStartColor: Ap,
    borderInlineStartWidth: Pp,
    borderInlineWidth: Pp,
    borderLeftColor: Ap,
    borderLeftWidth: Pp,
    borderRadius: Fp,
    borderRightColor: Ap,
    borderRightWidth: Pp,
    borderStartEndRadius: Fp,
    borderStartStartRadius: Fp,
    borderTopColor: Ap,
    borderTopLeftRadius: Fp,
    borderTopRightRadius: Fp,
    borderTopWidth: Pp,
    borderWidth: Pp,
    bottom: Q,
    boxShadow: Op,
    color: Mp,
    columnGap: Z,
    font: Ip,
    fontFamily: Rp,
    fontWeight: Lp,
    gap: Z,
    height: Tp,
    inlineSize: Tp,
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
    maxBlockSize: Tp,
    maxHeight: Tp,
    maxInlineSize: Tp,
    maxWidth: Tp,
    minBlockSize: Tp,
    minHeight: Tp,
    minInlineSize: Tp,
    minWidth: Tp,
    opacity: Dp,
    outlineColor: Ap,
    outlineOffset: Q,
    outlineWidth: Pp,
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
    width: Tp,
    zIndex: Np,
  },
  $p = Symbol(`UNSAFE_INTERNAL_styles`),
  em = function () {
    return (
      (typeof process > `u` ? `undefined` : z(process)) === `object` && z({}) === `object` && !1
    );
  },
  tm = /(\.|\s|&+|\*\>|#|\[.*\])/,
  nm = /^@media .*$|^::?.*$|^@supports .*$/,
  rm = function (e) {
    return !e || z(e) !== `object`
      ? e
      : Array.isArray(e)
        ? e.map(rm)
        : (Object.entries(e).forEach(function (t) {
            var n = N(t, 2),
              r = n[0],
              i = n[1];
            if (z(i) === `object` && nm.test(r)) {
              e[r] = rm(i);
              return;
            }
            if (em() && tm.test(r)) throw Error(`Styles not supported for key '${r}'.`);
            r in Qp && (e[r] = Qp[r][i] ?? i);
          }),
          e);
  },
  im = function (e) {
    return R({}, $p, k(rm(e)));
  },
  am = function (e) {
    if (Array.isArray(e)) {
      var t = [],
        n = [],
        r = Yp(e),
        i;
      try {
        for (r.s(); !(i = r.n()).done; ) {
          var a = i.value,
            o = am(a);
          (o.emotion && t.push.apply(t, A(o.emotion)), o.static && n.push(o.static));
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
      return { emotion: t, static: n.join(` `) };
    }
    var s = (e || {})[$p];
    if (s) return { emotion: [s] };
    if (e) {
      var c = `${e}`;
      if (c) return { static: c };
    }
    return {};
  };
function om(e) {
  return im(e);
}
var sm = [
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
  cm = [`className`],
  lm = (0, G.forwardRef)(function (e, t) {
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
      _ = M(e, sm);
    _.className;
    var v = M(_, cm),
      y = am(g),
      b = d(
        r,
        O({ style: m, ref: t, className: y.static }, v, {
          css: [
            um,
            a && Kp[a],
            Jp(a) && qp[a],
            o && Wp.padding[o],
            s && Wp.paddingBlock[s],
            c && Wp.paddingBlockStart[c],
            l && Wp.paddingBlockEnd[l],
            u && Wp.paddingInline[u],
            f && Wp.paddingInlineStart[f],
            p && Wp.paddingInlineEnd[p],
            y.emotion,
          ],
          "data-testid": h,
        }),
        i,
      );
    return a ? d(ra.Provider, { value: a }, b) : b;
  }),
  um = k({ boxSizing: `border-box`, appearance: `none`, border: `none` }),
  dm = {
    start: k({ justifyContent: `start` }),
    center: k({ justifyContent: `center` }),
    end: k({ justifyContent: `end` }),
    "space-between": k({ justifyContent: `space-between` }),
    "space-around": k({ justifyContent: `space-around` }),
    "space-evenly": k({ justifyContent: `space-evenly` }),
    stretch: k({ justifyContent: `stretch` }),
  },
  fm = { column: k({ flexDirection: `column` }), row: k({ flexDirection: `row` }) },
  pm = { wrap: k({ flexWrap: `wrap` }), nowrap: k({ flexWrap: `nowrap` }) },
  mm = {
    start: k({ alignItems: `start` }),
    center: k({ alignItems: `center` }),
    baseline: k({ alignItems: `baseline` }),
    end: k({ alignItems: `end` }),
    stretch: k({ alignItems: `stretch` }),
  },
  hm = k({ display: `flex`, boxSizing: `border-box` }),
  gm = (0, G.memo)(
    (0, G.forwardRef)(function (e, t) {
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
        g = e.id,
        _ = am(h);
      return d(
        r,
        {
          id: g,
          role: i,
          className: _.static,
          css: [
            hm,
            s && Gp.gap[s],
            c && Gp.columnGap[c],
            l && Gp.rowGap[l],
            a && mm[a],
            p && fm[p],
            o && dm[o],
            m && pm[m],
          ].concat(A(_.emotion || [])),
          "data-testid": f,
          ref: t,
        },
        u,
      );
    }),
  );
gm.displayName = `Flex`;
var _m = { hug: om({ flexGrow: 0 }), fill: om({ width: `100%`, flexGrow: 1 }) },
  vm = k({
    color: `var(--ds-text-subtle, #42526E)`,
    marginBlock: `var(--ds-space-0, 0px)`,
    marginInline: `var(--ds-space-negative-025, -2px)`,
    pointerEvents: `none`,
    userSelect: `none`,
  }),
  ym = function (e) {
    var t = e.children;
    return d(`span`, { css: vm }, t);
  },
  bm = (0, G.memo)(
    (0, G.forwardRef)(function (e, t) {
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
        _ = e.id,
        v = e.children,
        y = typeof p == `string` ? d(ym, null, p) : p,
        b = y
          ? G.Children.toArray(v)
              .filter(Boolean)
              .map(function (e, t) {
                return d(G.Fragment, { key: t }, p && t > 0 ? y : null, e);
              })
          : v,
        x = c || r,
        S = l ? [_m[l]].concat(A(Array.isArray(m) ? m : [m])) : m;
      return d(
        gm,
        {
          id: _,
          as: n,
          role: g,
          alignItems: a,
          justifyContent: x,
          direction: `row`,
          gap: u,
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
bm.displayName = `Inline`;
var xm = { hug: om({ flexGrow: 0 }), fill: om({ width: `100%`, flexGrow: 1 }) },
  Sm = (0, G.memo)(
    (0, G.forwardRef)(function (e, t) {
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
        m = e.id;
      return d(
        gm,
        {
          id: m,
          as: n,
          role: p,
          gap: c,
          direction: `column`,
          alignItems: r,
          justifyContent: o || a,
          xcss: s ? [xm[s]].concat(A(Array.isArray(f) ? f : [f])) : f,
          testId: u,
          ref: t,
        },
        l,
      );
    }),
  );
Sm.displayName = `Stack`;
var Cm = (0, G.createContext)(0),
  wm = function () {
    return (0, G.useContext)(Cm);
  },
  Tm = function (e) {
    var t = wm();
    return [t, (t && (t > 6 ? `div` : `h${t}`)) || e];
  };
g();
var Em = {
    xxlarge: `h1`,
    xlarge: `h1`,
    large: `h2`,
    medium: `h3`,
    small: `h4`,
    xsmall: `h5`,
    xxsmall: `h6`,
  },
  Dm = { reset: `_dxsyidpf _1i144jg8 _nmk4glyw` },
  Om = {
    "color.text": `_1w90i7uo`,
    "color.text.inverse": `_1w9015cr`,
    "color.text.warning.inverse": `_1w901yd3`,
  },
  km = {
    xxlarge: `_fqox1iff`,
    xlarge: `_fqox12ln`,
    large: `_fqox10sd`,
    medium: `_fqox1af2`,
    small: `_fqox1e3o`,
    xsmall: `_fqox1qyo`,
    xxsmall: `_fqoxi4vh`,
  },
  Am = function (e) {
    var t = ia();
    return e || (Ep.hasOwnProperty(t) ? Ep[t] : `color.text`);
  },
  jm = (0, G.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.size,
      i = e.id,
      a = e.testId,
      o = e.as,
      s = e.color,
      c = N(Tm(Em[r]), 2),
      u = c[0],
      d = c[1],
      f = o || d,
      p = f === `div` && u,
      m = Am(s);
    return G.createElement(
      f,
      {
        id: i,
        ref: t,
        "data-testid": a,
        role: p ? `heading` : void 0,
        "aria-level": p ? u : void 0,
        className: l([Dm.reset, km[r], Om[m]]),
      },
      n,
    );
  }),
  Mm = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((ea(), t($i)));
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
  Nm = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((ea(), t($i)));
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
  Pm = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((ea(), t($i)));
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
  Fm = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((ea(), t($i)));
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
  Im = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((ea(), t($i)));
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
  Lm = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((ea(), t($i)));
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
  Rm = e(Nm()),
  zm = e(Pm()),
  Bm = e(Fm()),
  Vm = e(Im()),
  Hm = e(Lm());
function Um(e, t) {
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
function Wm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Um(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Um(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Gm = {
  information: {
    backgroundColor: `var(--ds-background-information, #E9F2FE)`,
    Icon: Bm.default,
    primaryIconColor: `var(--ds-icon-information, #357DE8)`,
  },
  warning: {
    backgroundColor: `var(--ds-background-warning, #FFF5DB)`,
    Icon: Hm.default,
    primaryIconColor: `var(--ds-icon-warning, #E06C00)`,
  },
  error: {
    backgroundColor: `var(--ds-background-danger, #FFECEB)`,
    Icon: zm.default,
    primaryIconColor: `var(--ds-icon-danger, #C9372C)`,
  },
  success: {
    backgroundColor: `var(--ds-background-success, #EFFFD6)`,
    Icon: Vm.default,
    primaryIconColor: `var(--ds-icon-success, #6A9A23)`,
  },
  discovery: {
    backgroundColor: `var(--ds-background-discovery, #F8EEFE)`,
    Icon: Rm.default,
    primaryIconColor: `var(--ds-icon-discovery, #AF59E1)`,
  },
};
function Km(e, t) {
  var n = Gm[e] || Gm.information,
    r =
      t ||
      function (t) {
        var r = t.primaryColor;
        return G.createElement(n.Icon, { color: r, spacing: `spacious`, label: e });
      };
  return Wm(Wm({}, n), {}, { Icon: r });
}
g();
var qm = e(Mm()),
  Jm = {
    container: `_2rko12b0 _1rjcpxbi _18zrpxbi _1nmz1hna`,
    containerT26Shape: `_2rko1mok`,
    iconContainer: `_1mou1i6y _1e0c1txw`,
    contentContainer: `_16jlkb7n`,
    content: `_11c8fhey _syazi7uo`,
    actionsContainer: `_11c8fhey`,
    dismissButtonContainer: `_1pfh1i6y`,
  },
  Ym = {
    information: `_bfhk19ip`,
    warning: `_bfhk1917`,
    error: `_bfhk1gly`,
    success: `_bfhk1y9u`,
    discovery: `_bfhk6vm6`,
  },
  Xm = (0, G.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.appearance,
      i = r === void 0 ? `information` : r,
      a = e.actions,
      o = e.title,
      s = e.icon,
      c = e.isDismissible,
      u = e.onDismiss,
      d = e.testId,
      f = N((0, G.useState)(!1), 2),
      p = f[0],
      m = f[1],
      h = (0, G.useCallback)(
        function () {
          (u?.(), m(!0));
        },
        [u],
      ),
      g = Km(i, s),
      _ = g.primaryIconColor,
      v = g.backgroundColor,
      y = g.Icon,
      b = a && a.type === G.Fragment ? a.props.children : a,
      x = G.Children.toArray(b);
    return c && p
      ? null
      : G.createElement(
          `section`,
          {
            "data-testid": d,
            ref: t,
            className: l([
              Jm.container,
              W(`platform-dst-shape-theme-default`) && Jm.containerT26Shape,
              Ym[i],
            ]),
          },
          G.createElement(
            Ma,
            { space: `space.200`, alignBlock: `stretch` },
            G.createElement(
              `div`,
              { className: l([Jm.iconContainer]) },
              G.createElement(y, {
                size: `medium`,
                primaryColor: _,
                secondaryColor: v,
                color: _,
                spacing: `spacious`,
              }),
            ),
            G.createElement(
              Fa,
              { space: `space.100`, testId: d && `${d}--content`, xcss: Jm.contentContainer },
              !!o && G.createElement(jm, { as: `h2`, size: `small` }, o),
              G.createElement(`div`, { className: l([Jm.content]) }, n),
              x.length > 0 &&
                G.createElement(
                  Ma,
                  {
                    shouldWrap: !0,
                    testId: d && `${d}--actions`,
                    separator: `·`,
                    space: `space.100`,
                    rowSpace: `space.0`,
                    role: x.length > 1 ? `list` : void 0,
                    xcss: Jm.actionsContainer,
                  },
                  x.map(function (e, t) {
                    return G.createElement(
                      Ma,
                      { role: x.length > 1 ? `listitem` : void 0, key: t },
                      e,
                    );
                  }),
                ),
            ),
            c &&
              G.createElement(
                `div`,
                { className: l([Jm.dismissButtonContainer]) },
                G.createElement(Sp, {
                  testId: d && `${d}--dismiss-button`,
                  label: `Dismiss`,
                  icon: qm.default,
                  appearance: `subtle`,
                  onClick: h,
                  spacing: `compact`,
                }),
              ),
          ),
        );
  });
Xm.displayName = `SectionMessage`;
var Zm = i((e) => {
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
  Qm = i((e, t) => {
    t.exports = Zm();
  }),
  $m = Rn(),
  $ = Qm(),
  eh = om({ width: `100%` }),
  th = om({ width: `100%`, maxWidth: `100%` }),
  nh = om({ whiteSpace: `normal`, overflowWrap: `anywhere` });
function rh() {
  let [e, t] = (0, G.useState)(1),
    [n, r] = (0, G.useState)(``),
    [i, a] = (0, G.useState)(``),
    [o, s] = (0, G.useState)(``),
    [c, l] = (0, G.useState)([]),
    [u, d] = (0, G.useState)([]),
    [f, p] = (0, G.useState)(!1),
    [m, h] = (0, G.useState)(``),
    [g, _] = (0, G.useState)(null),
    [v, y] = (0, G.useState)(null),
    [b, x] = (0, G.useState)(null),
    S = 2048,
    C = (0, G.useCallback)(async () => {
      let e = await (0, $m.invoke)(`fetch`);
      return (d(e), l([]), e);
    }, []),
    w = (0, G.useCallback)(async () => {
      (p(!0), h(``));
      try {
        h(`Loaded ${(await C()).length} document(s)`);
      } catch (e) {
        h(`Fetch failed: ${e instanceof Error ? e.message : String(e)}`);
      } finally {
        p(!1);
      }
    }, [C]);
  (0, G.useEffect)(() => {
    e === 0 && w();
  }, [e, w]);
  let T = async () => {
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
        let n = await (0, $m.invoke)(`create`, { data: { title: e, document: t } });
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
    E = async () => {
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
        let t = await (0, $m.invoke)(`search`, { text: e });
        (l(t), d([]), h(`Found ${t.length} result(s)`));
      } catch (e) {
        h(`Search failed: ${e instanceof Error ? e.message : String(e)}`);
      } finally {
        p(!1);
      }
    },
    D = {
      cells: [
        { key: `id`, content: `ID`, width: 10 },
        { key: `title`, content: `Title`, width: 25 },
        { key: `document`, content: `Document`, width: 45 },
        { key: `similarity`, content: `Similarity (%)`, width: 20 },
      ],
    },
    O = c.map((e) => ({
      key: `search-${e.id}`,
      cells: [
        { key: `id-${e.id}`, content: e.id },
        { key: `title-${e.id}`, content: e.title },
        {
          key: `document-${e.id}`,
          content: (0, $.jsxs)(Sm, {
            space: `space.100`,
            children: [
              (0, $.jsx)(bm, {
                children: (0, $.jsx)(ni, {
                  onClick: () => x((t) => (t === e.id ? null : e.id)),
                  children: b === e.id ? `Hide document` : `Open document`,
                }),
              }),
              b === e.id
                ? (0, $.jsxs)(lm, {
                    xcss: nh,
                    children: [(0, $.jsx)(`strong`, { children: `Document:` }), ` `, e.document],
                  })
                : null,
            ],
          }),
        },
        { key: `similarity-${e.id}`, content: `${((1 - e.distance) * 100).toFixed(2)}%` },
      ],
    })),
    k = {
      cells: [
        { key: `id`, content: `ID`, width: 10 },
        { key: `title`, content: `Title`, width: 25 },
        { key: `document`, content: `Document`, width: 30 },
        { key: `vector`, content: `Vector`, width: 35 },
      ],
    },
    A = u.map((e) => ({
      key: `fetch-${e.id}`,
      cells: [
        { key: `id-${e.id}`, content: e.id },
        { key: `title-${e.id}`, content: e.title },
        {
          key: `document-${e.id}`,
          content: (0, $.jsxs)(Sm, {
            space: `space.100`,
            children: [
              (0, $.jsx)(bm, {
                children: (0, $.jsx)(ni, {
                  onClick: () => _((t) => (t === e.id ? null : e.id)),
                  children: g === e.id ? `Hide document` : `Open document`,
                }),
              }),
              g === e.id
                ? (0, $.jsxs)(lm, {
                    xcss: nh,
                    children: [(0, $.jsx)(`strong`, { children: `Document:` }), ` `, e.document],
                  })
                : null,
            ],
          }),
        },
        {
          key: `vector-${e.id}`,
          content: (0, $.jsxs)(Sm, {
            space: `space.100`,
            children: [
              (0, $.jsx)(bm, {
                children: (0, $.jsx)(ni, {
                  onClick: () => y((t) => (t === e.id ? null : e.id)),
                  children: v === e.id ? `Hide vector` : `Open vector`,
                }),
              }),
              v === e.id
                ? (0, $.jsxs)(lm, {
                    xcss: nh,
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
  return (0, $.jsx)(lm, {
    padding: `space.300`,
    xcss: eh,
    children: (0, $.jsxs)(Sm, {
      space: `space.300`,
      children: [
        (0, $.jsx)(`h2`, { children: `TiDB Vector Example (backend embeddings)` }),
        (0, $.jsxs)(Bf, {
          id: `vector-tabs`,
          selected: e,
          onChange: (e) => t(e),
          children: [
            (0, $.jsxs)(qf, {
              children: [
                (0, $.jsx)(Gf, { children: `Add documents` }),
                (0, $.jsx)(Gf, { children: `AI(Vector) search` }),
              ],
            }),
            (0, $.jsx)(Hf, {
              children: (0, $.jsx)(lm, {
                padding: `space.200`,
                xcss: th,
                children: (0, $.jsxs)(Sm, {
                  space: `space.150`,
                  children: [
                    (0, $.jsx)(`h3`, { children: `Insert document` }),
                    (0, $.jsx)(Mf, {
                      value: n,
                      maxLength: 255,
                      placeholder: `Title`,
                      onChange: (e) => r(e.target.value),
                    }),
                    (0, $.jsx)(yf, {
                      value: i,
                      maxLength: S,
                      minimumRows: 8,
                      resize: `vertical`,
                      placeholder: `Document text`,
                      onChange: (e) => a(e.target.value),
                    }),
                    (0, $.jsxs)(lm, { as: `small`, children: [i.length, `/`, S, ` chars`] }),
                    (0, $.jsx)(lm, {
                      as: `small`,
                      children: `Embedding is computed on the Forge backend from document text.`,
                    }),
                    (0, $.jsxs)(bm, {
                      space: `space.100`,
                      children: [
                        (0, $.jsx)(ni, {
                          appearance: `primary`,
                          onClick: T,
                          isDisabled: f,
                          children: `Insert`,
                        }),
                        (0, $.jsx)(ni, { onClick: w, isDisabled: f, children: `Fetch all` }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, $.jsx)(Hf, {
              children: (0, $.jsx)(lm, {
                padding: `space.200`,
                xcss: th,
                children: (0, $.jsxs)(Sm, {
                  space: `space.150`,
                  children: [
                    (0, $.jsx)(`h3`, { children: `AI(Vector) search` }),
                    (0, $.jsx)(yf, {
                      value: o,
                      maxLength: S,
                      minimumRows: 6,
                      resize: `vertical`,
                      placeholder: `Query text`,
                      onChange: (e) => s(e.target.value),
                    }),
                    (0, $.jsxs)(lm, { as: `small`, children: [o.length, `/`, S, ` chars`] }),
                    (0, $.jsx)(lm, {
                      as: `small`,
                      children: `Search runs on the backend: your text is embedded server-side.`,
                    }),
                    (0, $.jsx)(bm, {
                      space: `space.100`,
                      children: (0, $.jsx)(ni, {
                        appearance: `primary`,
                        onClick: E,
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
          ? (0, $.jsx)(Xm, {
              appearance: `information`,
              children: (0, $.jsx)(`p`, { children: m }),
            })
          : null,
        (0, $.jsxs)(lm, {
          as: `section`,
          children: [
            (0, $.jsx)(`h3`, { children: `Results` }),
            c.length > 0
              ? (0, $.jsx)(nf, { head: D, rows: O, rowsPerPage: 10, defaultPage: 1 })
              : null,
            u.length > 0
              ? (0, $.jsx)(nf, { head: k, rows: A, rowsPerPage: 10, defaultPage: 1 })
              : null,
          ],
        }),
      ],
    }),
  });
}
var ih = (0, s().createRoot)(document.getElementById(`root`)),
  ah = () => {
    ih.render((0, $.jsx)(rh, {}));
  };
$m.view.theme
  .enable()
  .then(() => {
    ah();
  })
  .catch((e) => {
    (console.error(e.message), ah());
  });
