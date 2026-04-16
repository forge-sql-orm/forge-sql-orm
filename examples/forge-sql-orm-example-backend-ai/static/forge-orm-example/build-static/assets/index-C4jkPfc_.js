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
      "./body-DL6wfl37.js",
      "./with-dimensions-DOIvwlqT.js",
      "./react-dom-vendor-DD8-Uyz5.js",
      "./with-dimensions-DMqwCerb.css",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { a as e, i as t, n, r, t as i } from "./rolldown-runtime-COnpUsM8.js";
import { n as a, r as o, t as s } from "./react-dom-vendor-DD8-Uyz5.js";
import { t as c } from "./lodash-vendor-DVWR8zLq.js";
import {
  C as l,
  S as u,
  _ as d,
  a as f,
  b as p,
  c as m,
  d as h,
  f as g,
  g as _,
  h as v,
  i as y,
  l as b,
  m as x,
  n as S,
  o as C,
  p as w,
  r as T,
  s as E,
  t as D,
  u as O,
  v as k,
  x as A,
  y as j,
} from "./with-dimensions-DOIvwlqT.js";
import {
  a as M,
  c as N,
  d as P,
  f as F,
  h as ee,
  i as I,
  l as L,
  m as te,
  n as ne,
  o as re,
  p as ie,
  r as R,
  s as z,
  u as B,
} from "./wrapNativeSuper-CcHGmOvu.js";
import {
  C as V,
  D as ae,
  E as H,
  S as oe,
  T as se,
  _ as ce,
  b as le,
  d as ue,
  g as de,
  h as U,
  i as fe,
  m as pe,
  t as me,
  v as he,
  w as W,
  x as ge,
  y as _e,
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
    __addDisposableResource: () => We,
    __assign: () => Je,
    __asyncDelegator: () => Ie,
    __asyncGenerator: () => Fe,
    __asyncValues: () => Le,
    __await: () => Pe,
    __awaiter: () => Ee,
    __classPrivateFieldGet: () => Ve,
    __classPrivateFieldIn: () => Ue,
    __classPrivateFieldSet: () => He,
    __createBinding: () => Ye,
    __decorate: () => ye,
    __disposeResources: () => Ge,
    __esDecorate: () => xe,
    __exportStar: () => Oe,
    __extends: () => ve,
    __generator: () => De,
    __importDefault: () => Be,
    __importStar: () => ze,
    __makeTemplateObject: () => Re,
    __metadata: () => Te,
    __param: () => be,
    __propKey: () => Ce,
    __read: () => Ae,
    __rest: () => q,
    __rewriteRelativeImportExtension: () => Ke,
    __runInitializers: () => Se,
    __setFunctionName: () => we,
    __spread: () => je,
    __spreadArray: () => Ne,
    __spreadArrays: () => Me,
    __values: () => ke,
    default: () => $e,
  });
function ve(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Class extends value ` + String(t) + ` is not a constructor or null`);
  qe(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function q(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function ye(e, t, n, r) {
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
function be(e, t) {
  return function (n, r) {
    t(n, r, e);
  };
}
function xe(e, t, n, r, i, a) {
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
function Se(e, t, n) {
  for (var r = arguments.length > 2, i = 0; i < t.length; i++)
    n = r ? t[i].call(e, n) : t[i].call(e);
  return r ? n : void 0;
}
function Ce(e) {
  return typeof e == `symbol` ? e : `${e}`;
}
function we(e, t, n) {
  return (
    typeof t == `symbol` && (t = t.description ? `[${t.description}]` : ``),
    Object.defineProperty(e, `name`, { configurable: !0, value: n ? `${n} ${t}` : t })
  );
}
function Te(e, t) {
  if (typeof Reflect == `object` && typeof Reflect.metadata == `function`)
    return Reflect.metadata(e, t);
}
function Ee(e, t, n, r) {
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
function De(e, t) {
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
function Oe(e, t) {
  for (var n in e) n !== `default` && !Object.prototype.hasOwnProperty.call(t, n) && Ye(t, e, n);
}
function ke(e) {
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
function Ae(e, t) {
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
function je() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Ae(arguments[t]));
  return e;
}
function Me() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
  return r;
}
function Ne(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
function Pe(e) {
  return this instanceof Pe ? ((this.v = e), this) : new Pe(e);
}
function Fe(e, t, n) {
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
    e.value instanceof Pe ? Promise.resolve(e.value.v).then(u, d) : f(a[0][2], e);
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
function Ie(e) {
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
          return (n = !n) ? { value: Pe(e[r](t)), done: !1 } : i ? i(t) : t;
        }
      : i;
  }
}
function Le(e) {
  if (!Symbol.asyncIterator) throw TypeError(`Symbol.asyncIterator is not defined.`);
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof ke == `function` ? ke(e) : e[Symbol.iterator]()),
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
function Re(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, `raw`, { value: t }) : (e.raw = t), e);
}
function ze(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n = Ze(e), r = 0; r < n.length; r++) n[r] !== `default` && Ye(t, e, n[r]);
  return (Xe(t, e), t);
}
function Be(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ve(e, t, n, r) {
  if (n === `a` && !r) throw TypeError(`Private accessor was defined without a getter`);
  if (typeof t == `function` ? e !== t || !r : !t.has(e))
    throw TypeError(`Cannot read private member from an object whose class did not declare it`);
  return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e);
}
function He(e, t, n, r, i) {
  if (r === `m`) throw TypeError(`Private method is not writable`);
  if (r === `a` && !i) throw TypeError(`Private accessor was defined without a setter`);
  if (typeof t == `function` ? e !== t || !i : !t.has(e))
    throw TypeError(`Cannot write private member to an object whose class did not declare it`);
  return (r === `a` ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n);
}
function Ue(e, t) {
  if (t === null || (typeof t != `object` && typeof t != `function`))
    throw TypeError(`Cannot use 'in' operator on non-object`);
  return typeof e == `function` ? t === e : e.has(t);
}
function We(e, t, n) {
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
function Ge(e) {
  function t(t) {
    ((e.error = e.hasError ? new Qe(t, e.error, `An error was suppressed during disposal.`) : t),
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
function Ke(e, t) {
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
var qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et = n(() => {
    ((qe = function (e, t) {
      return (
        (qe =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }),
        qe(e, t)
      );
    }),
      (Je = function () {
        return (
          (Je =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          Je.apply(this, arguments)
        );
      }),
      (Ye = Object.create
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
      (Xe = Object.create
        ? function (e, t) {
            Object.defineProperty(e, `default`, { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
      (Ze = function (e) {
        return (
          (Ze =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
              return t;
            }),
          Ze(e)
        );
      }),
      (Qe =
        typeof SuppressedError == `function`
          ? SuppressedError
          : function (e, t, n) {
              var r = Error(n);
              return ((r.name = `SuppressedError`), (r.error = e), (r.suppressed = t), r);
            }),
      ($e = {
        __extends: ve,
        __assign: Je,
        __rest: q,
        __decorate: ye,
        __param: be,
        __esDecorate: xe,
        __runInitializers: Se,
        __propKey: Ce,
        __setFunctionName: we,
        __metadata: Te,
        __awaiter: Ee,
        __generator: De,
        __createBinding: Ye,
        __exportStar: Oe,
        __values: ke,
        __read: Ae,
        __spread: je,
        __spreadArrays: Me,
        __spreadArray: Ne,
        __await: Pe,
        __asyncGenerator: Fe,
        __asyncDelegator: Ie,
        __asyncValues: Le,
        __makeTemplateObject: Re,
        __importStar: ze,
        __importDefault: Be,
        __classPrivateFieldGet: Ve,
        __classPrivateFieldSet: He,
        __classPrivateFieldIn: Ue,
        __addDisposableResource: We,
        __disposeResources: Ge,
        __rewriteRelativeImportExtension: Ke,
      }));
  }),
  tt = i((e) => {
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
  nt = i((e) => {
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
  rt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.makeInvoke = e.invoke = void 0));
    var t = Y(),
      n = J(),
      r = nt(),
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
  it = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (et(), t(K)).__exportStar(rt(), e));
  }),
  at = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._invokeEndpointFn = e.InvokeType = void 0));
    var t = Y(),
      n = J(),
      r = nt(),
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
  ot = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.invokeRemote = void 0));
    var t = at();
    e.invokeRemote = (e) => (0, t._invokeEndpointFn)(t.InvokeType.REMOTE)(e);
  }),
  st = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.invokeService = void 0));
    var t = at();
    e.invokeService = (e) => (0, t._invokeEndpointFn)(t.InvokeType.SERVICE)(e);
  }),
  ct = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (et(), t(K));
    (n.__exportStar(ot(), e), n.__exportStar(st(), e));
  }),
  lt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.submit = void 0));
    var t = Y(),
      n = J(),
      r = (0, t.getCallBridge)();
    e.submit = async (e) => {
      if ((await r(`submit`, e)) === !1)
        throw new n.BridgeAPIError(`this resource's view is not submittable.`);
    };
  }),
  ut = i((e) => {
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
  dt = i((e) => {
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
  ft = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.refresh = void 0));
    var t = Y(),
      n = J(),
      r = (0, t.getCallBridge)();
    e.refresh = async (e) => {
      if ((await r(`refresh`, e)) === !1)
        throw new n.BridgeAPIError(`this resource's view is not refreshable.`);
    };
  }),
  pt = i((e) => {
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
  mt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.FORGE_SUPPORTED_LOCALE_CODES = e.I18N_BUNDLE_FOLDER_NAME = e.I18N_INFO_FILE_NAME = void 0),
      (e.I18N_INFO_FILE_NAME = `i18n-info.json`),
      (e.I18N_BUNDLE_FOLDER_NAME = `__LOCALES__`),
      (e.FORGE_SUPPORTED_LOCALE_CODES =
        `zh-CN.zh-TW.cs-CZ.da-DK.nl-NL.en-US.en-GB.et-EE.fi-FI.fr-FR.de-DE.hu-HU.is-IS.it-IT.ja-JP.ko-KR.no-NO.pl-PL.pt-BR.pt-PT.ro-RO.ru-RU.sk-SK.tr-TR.es-ES.sv-SE`.split(
          `.`,
        )));
  }),
  ht = i((e) => {
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
  gt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
    var n = (et(), t(K)).__importDefault(c());
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
  _t = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Translator = void 0));
    var t = gt();
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
  vt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.ensureLocale = void 0));
    var t = mt(),
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
  yt = i((e) => {
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
  bt = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
  }),
  xt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getI18nSupportedModuleEntries =
        e.extractI18nPropertiesFromModules =
        e.extractI18nKeysFromModules =
        e.getTranslationValue =
          void 0));
    var n = (et(), t(K));
    (n.__exportStar(mt(), e),
      n.__exportStar(ht(), e),
      n.__exportStar(_t(), e),
      n.__exportStar(vt(), e));
    var r = gt();
    Object.defineProperty(e, `getTranslationValue`, {
      enumerable: !0,
      get: function () {
        return r.getTranslationValue;
      },
    });
    var i = yt();
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
      n.__exportStar(bt(), e));
  }),
  St = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getContext = void 0));
    var t = Y(),
      n = xt(),
      r = (0, t.getCallBridge)();
    e.getContext = async () => {
      let e = await r(`getContext`),
        t = e?.locale;
      return (t && (e.locale = (0, n.ensureLocale)(t) ?? t), e);
    };
  }),
  Ct = i((e) => {
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
  wt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.theme = void 0));
    var t = (0, Y().getCallBridge)();
    e.theme = { enable: () => t(`enableTheming`) };
  }),
  Tt = i((e) => {
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
  Et = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.containsSerialisedBlobs =
        e.containsBlobs =
        e.deserialiseBlobsInPayload =
        e.serialiseBlobsInPayload =
          void 0));
    var t = Tt(),
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
  Dt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.events = void 0));
    var t = Y(),
      n = Et(),
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
  Ot = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.emitReadyEvent = void 0));
    var t = Dt(),
      n = Qt(),
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
  kt,
  At,
  jt,
  Mt,
  Nt = n(() => {
    ((kt = `modulepreload`),
      (At = function (e, t) {
        return new URL(e, t).href;
      }),
      (jt = {}),
      (Mt = function (e, t, n) {
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
              if (((t = At(t, n)), t in jt)) return;
              jt[t] = !0;
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
                ((o.rel = r ? `stylesheet` : kt),
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
  Pt = i((e) => {
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
  Ft = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i));
  }),
  It = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(Ft());
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e) {
      return typeof e == `string` && t.default.test(e);
    }
    e.default = r;
  }),
  Lt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.unsafeStringify = i));
    var t = n(It());
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
  Rt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(Pt()),
      n = Lt();
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
  zt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(It());
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
  Bt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.URL = e.DNS = void 0),
      (e.default = s));
    var t = Lt(),
      n = r(zt());
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
  Vt = i((e) => {
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
  Ht = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(Bt()),
      n = r(Vt());
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    e.default = (0, t.default)(`v3`, 48, n.default);
  }),
  Ut = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default = {
        randomUUID: typeof crypto < `u` && crypto.randomUUID && crypto.randomUUID.bind(crypto),
      }));
  }),
  Wt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = i(Ut()),
      n = i(Pt()),
      r = Lt();
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
  Gt = i((e) => {
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
  Kt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(Bt()),
      n = r(Gt());
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    e.default = (0, t.default)(`v5`, 80, n.default);
  }),
  qt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default = `00000000-0000-0000-0000-000000000000`));
  }),
  Jt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(It());
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e) {
      if (!(0, t.default)(e)) throw TypeError(`Invalid UUID`);
      return parseInt(e.slice(14, 15), 16);
    }
    e.default = r;
  }),
  Yt = i((e) => {
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
    var t = u(Rt()),
      n = u(Ht()),
      r = u(Wt()),
      i = u(Kt()),
      a = u(qt()),
      o = u(Jt()),
      s = u(It()),
      c = u(Lt()),
      l = u(zt());
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
  }),
  Xt = i((t) => {
    (Nt(),
      Object.defineProperty(t, `__esModule`, { value: !0 }),
      (t.createAdfRendererIframeProps = void 0));
    var n = Yt();
    t.createAdfRendererIframeProps = async (t, r) => {
      let i = await Mt(
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
  Zt = i((e) => {
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
  Qt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.view = void 0));
    var t = lt(),
      n = ut(),
      r = dt(),
      i = ft(),
      a = pt(),
      o = St(),
      s = Ct(),
      c = wt(),
      l = Ot(),
      u = Xt(),
      d = Zt();
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
  $t = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (et(), t(K)).__exportStar(Qt(), e));
  }),
  en = i((e) => {
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
  tn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (et(), t(K)).__exportStar(en(), e));
  }),
  nn = i((e) => {
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
  rn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (et(), t(K)).__exportStar(nn(), e));
  }),
  an = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.productFetchApi = e.remoteFetchApi = void 0));
    var t = Tt(),
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
  on = i((e) => {
    var t;
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.requestRemote = e.requestBitbucket = e.requestJira = e.requestConfluence = void 0));
    var n = Y(),
      r = an();
    ((t = (0, r.productFetchApi)((0, n.getCallBridge)())),
      (e.requestConfluence = t.requestConfluence),
      (e.requestJira = t.requestJira),
      (e.requestBitbucket = t.requestBitbucket),
      (e.requestRemote = (0, r.remoteFetchApi)((0, n.getCallBridge)()).requestRemote));
  }),
  sn = i((e) => {
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
  cn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.showFlag = void 0));
    var t = sn();
    Object.defineProperty(e, `showFlag`, {
      enumerable: !0,
      get: function () {
        return t.showFlag;
      },
    });
  }),
  ln = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (et(), t(K)).__exportStar(Dt(), e));
  }),
  un = i((e) => {
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
  dn = i((e) => {
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
  fn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
    var t = un();
    Object.defineProperty(e, `realtime`, {
      enumerable: !0,
      get: function () {
        return t.realtime;
      },
    });
    var n = dn();
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
  pn = i((e) => {
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
  mn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.isEnabled = void 0));
    var t = (0, Y().getCallBridge)();
    e.isEnabled = () => t(`isRovoEnabled`);
  }),
  hn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.rovo = void 0));
    var t = pn(),
      n = mn();
    e.rovo = { open: t.open, isEnabled: n.isEnabled };
  }),
  gn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (et(), t(K)).__exportStar(hn(), e));
  }),
  _n = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.createTranslationFunction = e.getTranslations = e.resetTranslationsCache = void 0));
    var t = xt(),
      n = $t(),
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
  vn = i((e) => {
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
  yn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.parseUrl = void 0));
    function t(e) {
      let t = e.match(/^(.*?:)/)?.[0] ?? `https:`,
        n = e.replace(t, ``).replace(/^\/*/, ``).replace(/^\\*/, ``).split(`?`)[0].split(`#`)[0],
        r = n.split(`/`)[0];
      return { protocol: t, hostname: r, pathname: n.slice(r.length) || `/` };
    }
    e.parseUrl = t;
  }),
  bn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getEgressesBasedOnToggles =
        e.sortAndGroupEgressPermissionsByDomain =
        e.EgressCategory =
        e.EgressType =
        e.globToRegex =
          void 0));
    var t = yn();
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
  xn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.EgressFilteringService = void 0));
    var t = yn(),
      n = bn();
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
  Sn = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (et(), t(K));
    (n.__exportStar(xn(), e), n.__exportStar(yn(), e), n.__exportStar(bn(), e));
  }),
  Cn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (et(), t(K)).__exportStar(Sn(), e));
  }),
  wn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.checkPermissions = e.createPermissionUtils = void 0));
    var t = Cn(),
      n = $t();
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
  Tn = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (et(), t(K));
    (n.__exportStar(vn(), e), n.__exportStar(wn(), e));
  }),
  En = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (e.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = `Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.`));
  }),
  Dn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.checkRestrictedEnvironment = void 0));
    var t = J(),
      n = $t(),
      r = En();
    e.checkRestrictedEnvironment = async () => {
      let { environmentType: e } = await n.view.getContext();
      if (e === `PRODUCTION`)
        throw new t.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  }),
  On = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.upload = e.createUploadPromises = void 0));
    var t = it(),
      n = J(),
      r = Dn(),
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
  kn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.deleteObjects = void 0));
    var t = it(),
      n = J(),
      r = Dn(),
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
  An = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.download = void 0));
    var t = it(),
      n = J(),
      r = Dn(),
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
  jn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getMetadata = void 0));
    var t = it(),
      n = J(),
      r = Dn(),
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
  Mn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.createUploadPromises = e.objectStore = void 0));
    var t = On();
    Object.defineProperty(e, `createUploadPromises`, {
      enumerable: !0,
      get: function () {
        return t.createUploadPromises;
      },
    });
    var n = kn(),
      r = An(),
      i = jn();
    e.objectStore = {
      upload: t.upload,
      download: r.download,
      getMetadata: i.getMetadata,
      delete: n.deleteObjects,
    };
  }),
  Nn = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (et(), t(K));
    (n.__exportStar(Mn(), e), n.__exportStar(En(), e));
  }),
  Pn = i((e) => {
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
  Fn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.FeatureFlagEventType = void 0),
      (function (e) {
        e.CHECKFLAG = `checkFlag`;
      })((e.FeatureFlagEventType ||= {})));
  }),
  In = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.trackFeatureFlagEvent = void 0));
    var t = Y(),
      n = J(),
      r = nt(),
      i = Fn(),
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
  Ln = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.initFeatureFlags = void 0));
    var t = Y(),
      n = J(),
      r = nt(),
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
  Rn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.FeatureFlags = void 0));
    var t = Pn(),
      n = In(),
      r = Ln(),
      i = Fn();
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
  zn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.FeatureFlags = void 0));
    var t = Rn();
    Object.defineProperty(e, `FeatureFlags`, {
      enumerable: !0,
      get: function () {
        return t.FeatureFlags;
      },
    });
  }),
  Bn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.i18n = e.NavigationTarget = void 0));
    var n = (et(), t(K)),
      r = tt();
    (Object.defineProperty(e, `NavigationTarget`, {
      enumerable: !0,
      get: function () {
        return r.NavigationTarget;
      },
    }),
      n.__exportStar(it(), e),
      n.__exportStar(ct(), e),
      n.__exportStar($t(), e),
      n.__exportStar(tn(), e),
      n.__exportStar(rn(), e),
      n.__exportStar(on(), e),
      n.__exportStar(cn(), e),
      n.__exportStar(ln(), e),
      n.__exportStar(fn(), e),
      n.__exportStar(gn(), e),
      (e.i18n = n.__importStar(_n())),
      n.__exportStar(Tn(), e),
      n.__exportStar(Nn(), e),
      n.__exportStar(zn(), e));
  });
function Vn() {}
function Hn(e, t) {
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
function Un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Hn(Object(n), !0).forEach(function (t) {
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Hn(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Wn = (function () {
  function e(t) {
    var n = this;
    (L(this, e),
      z(this, `_isAnalyticsEvent`, !0),
      z(this, `clone`, function () {
        return new e({ payload: Un({}, n.payload) });
      }),
      (this.payload = t.payload));
  }
  return N(e, [
    {
      key: `update`,
      value: function (e) {
        return (
          typeof e == `function` && (this.payload = e(this.payload)),
          B(e) === `object` && (this.payload = Un(Un({}, this.payload), e)),
          this
        );
      },
    },
  ]);
})();
function Gn(e, t, n) {
  return ((t = R(t)), I(e, Kn() ? Reflect.construct(t, n || [], R(e).constructor) : t.apply(e, n)));
}
function Kn() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Kn = function () {
    return !!e;
  })();
}
function qn(e, t, n, r) {
  var i = ae(R(1 & r ? e.prototype : e), t, n);
  return 2 & r && typeof i == `function`
    ? function (e) {
        return i.apply(n, e);
      }
    : i;
}
var Jn = (function (e) {
    function t(e) {
      var n;
      return (
        L(this, t),
        (n = Gn(this, t, [e])),
        z(n, `_isUIAnalyticsEvent`, !0),
        z(n, `clone`, function () {
          return n.hasFired
            ? null
            : new t({
                context: M(n.context),
                handlers: M(n.handlers),
                payload: JSON.parse(JSON.stringify(n.payload)),
              });
        }),
        z(n, `fire`, function (e) {
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
      ne(t, e),
      N(t, [
        {
          key: `update`,
          value: function (e) {
            return this.hasFired ? this : qn(t, `update`, this, 3)([e]);
          },
        },
      ])
    );
  })(Wn),
  Yn = (0, G.createContext)({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Xn = function () {
    return (0, G.useContext)(Yn);
  },
  Zn = function (e) {
    var t = (0, G.useRef)(e);
    return ((t.current = e), t);
  };
function Qn(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function $n(e, t) {
  var n = (0, G.useState)(function () {
      return { inputs: t, result: e() };
    })[0],
    r = (0, G.useRef)(!0),
    i = (0, G.useRef)(n),
    a =
      r.current || (t && i.current.inputs && Qn(t, i.current.inputs))
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
function er(e, t) {
  return $n(function () {
    return e;
  }, t);
}
function tr() {
  var e = Xn();
  return {
    createAnalyticsEvent: er(
      function (t) {
        return new Jn({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: t,
        });
      },
      [e],
    ),
  };
}
function nr(e, t) {
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
function rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? nr(Object(n), !0).forEach(function (t) {
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : nr(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ir(e) {
  var t = e.fn,
    n = e.action,
    r = e.componentName,
    i = e.actionSubject,
    a = e.packageName,
    o = e.packageVersion,
    s = e.analyticsData,
    c = tr().createAnalyticsEvent,
    l = Zn(s),
    u = Zn(t);
  return (0, G.useCallback)(
    function (e) {
      var t = c({
          action: n,
          actionSubject: i || r,
          attributes: { componentName: r, packageName: a, packageVersion: o },
        }),
        s = rr({ componentName: r, packageName: a, packageVersion: o }, l.current);
      t.context.push(s);
      var d = t.clone();
      (d && d.fire(`atlaskit`), u.current(e, t));
    },
    [n, r, i, a, o, c, l, u],
  );
}
function ar(e, t) {
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
function or(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ar(Object(n), !0).forEach(function (t) {
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ar(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function sr(e) {
  var t = e.fn,
    n = e.action,
    r = e.componentName,
    i = e.packageName,
    a = e.packageVersion,
    o = e.analyticsData,
    s = tr().createAnalyticsEvent,
    c = Zn(o),
    l = Zn(t);
  return (0, G.useCallback)(
    function () {
      var e = s({
          action: n,
          actionSubject: r,
          attributes: { componentName: r, packageName: i, packageVersion: a },
        }),
        t = or({ componentName: r, packageName: i, packageVersion: a }, c.current);
      e.context.push(t);
      var o = e.clone();
      (o && o.fire(`atlaskit`), l.current(e));
    },
    [n, r, i, a, s, c, l],
  );
}
function cr(e, t) {
  var n = (0, G.useRef)(!0);
  (0, G.useEffect)(
    function () {
      (e && n.current && t && e.current && e.current.focus(), (n.current = !1));
    },
    [t, e],
  );
}
var lr = 2,
  ur = A({
    outline: `var(--ds-border-width-focused, 2px) solid var(--ds-border-focused, #4688EC)`,
    outlineOffset: lr,
  }),
  dr = A({
    outlineColor: `var(--ds-border-focused, #4688EC)`,
    outlineOffset: -lr,
    outlineStyle: `solid`,
    outlineWidth: `var(--ds-border-width-focused, 2px)`,
  }),
  fr = A({
    "&:focus": ur,
    "&:focus-visible": ur,
    "&:focus:not(:focus-visible)": { outline: `none` },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: `var(--ds-border-width, 1px) solid` },
    },
  }),
  pr = A({
    "&:focus": dr,
    "&:focus-visible": dr,
    "&:focus:not(:focus-visible)": { outline: `none` },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: `var(--ds-border-width, 1px) solid`, outlineOffset: `-1px` },
    },
  }),
  mr = (0, G.memo)(function (e) {
    var t = e.children,
      n = e.isInset,
      r = e.focus,
      i = r === void 0 ? (n ? pr : fr) : r === `on` && (n ? dr : ur);
    return u(p, null, function (e) {
      var n = e.css,
        r = e.cx;
      return G.Children.only(
        i ? (0, G.cloneElement)(t, { className: r([n(i), t.props.className]) }) : t,
      );
    });
  });
mr.displayName = `FocusRing`;
var hr = (0, G.createContext)(null);
function gr(e) {
  (e.preventDefault(), e.stopPropagation());
}
var _r = 9;
function vr(e) {
  e.keyCode !== _r && gr(e);
}
var yr = {
    onMouseDownCapture: gr,
    onMouseUpCapture: gr,
    onKeyDownCapture: vr,
    onKeyUpCapture: vr,
    onTouchStartCapture: gr,
    onTouchEndCapture: gr,
    onPointerDownCapture: gr,
    onPointerUpCapture: gr,
    onClickCapture: gr,
    onClick: gr,
  },
  br = {};
function xr(e) {
  return e.isInteractive ? br : yr;
}
function Sr(e) {
  var t = e.spacing;
  return A({
    margin: t === `none` ? 0 : `0 2px`,
    flexGrow: 1,
    flexShrink: 1,
    overflow: `hidden`,
    textOverflow: `ellipsis`,
    whiteSpace: `nowrap`,
  });
}
function Cr(e) {
  var t = e.hasOverlay;
  return A({ opacity: +!t, transition: `opacity 0.3s` });
}
function wr(e) {
  var t = e.spacing;
  return A({
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
d();
var Tr = function (e) {
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
      className: j([
        `_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c`,
      ]),
    },
    t,
  );
};
Tr.displayName = `VisuallyHidden`;
var Er = function (e) {
    return e && (0, G.isValidElement)(e) && e.type === Tr;
  },
  Dr = {
    position: `absolute`,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  Or = [
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
  kr = { "> *": { pointerEvents: `none` } },
  Ar = A({
    "--ds--button--new-icon-padding-end": `var(--ds-space-025, 2px)`,
    "--ds--button--new-icon-padding-start": `var(--ds-space-050, 4px)`,
    marginInlineStart: `var(--ds-space-negative-025, -2px)`,
  }),
  jr = A({
    "--ds--button--new-icon-padding-end": `var(--ds-space-050, 4px)`,
    "--ds--button--new-icon-padding-start": `var(--ds-space-025, 2px)`,
    marginInlineEnd: `var(--ds-space-negative-025, -2px)`,
  }),
  Mr = function (e, t) {
    return !e || Er(e) ? null : t;
  },
  Nr = function (e, t) {
    return Er(e) ? e : e ? u(`span`, { css: t }, e) : null;
  },
  Pr = G.forwardRef(function (e, t) {
    var n = e.analyticsContext,
      r = e.appearance,
      i = r === void 0 ? `default` : r,
      a = e.autoFocus,
      o = a === void 0 ? !1 : a,
      s = e.buttonCss,
      c = e.children,
      d = e.className,
      f = e.href,
      p = e.component,
      m = p === void 0 ? (f ? `a` : `button`) : p,
      h = e.iconAfter,
      g = e.iconBefore,
      _ = e.interactionName,
      v = e.isDisabled,
      y = v === void 0 ? !1 : v,
      b = e.isSelected,
      x = b === void 0 ? !1 : b,
      S = e.onBlur,
      C = e.onClick,
      w = C === void 0 ? Vn : C,
      T = e.onFocus,
      E = e.onMouseDown,
      D = E === void 0 ? Vn : E,
      O = e.overlay;
    e.shouldFitContainer;
    var k = e.spacing,
      j = k === void 0 ? `default` : k,
      M = e.tabIndex,
      N = M === void 0 ? 0 : M,
      F = e.type,
      ee = F === void 0 ? (f ? void 0 : `button`) : F,
      I = e.testId,
      L = P(e, Or),
      te = (0, G.useRef)(),
      ne = (0, G.useCallback)(
        function (e) {
          if (((te.current = e), t != null)) {
            if (typeof t == `function`) {
              t(e);
              return;
            }
            t.current = e;
          }
        },
        [te, t],
      );
    cr(te, o);
    var re = (0, G.useContext)(hr),
      ie = ir({
        fn: (0, G.useCallback)(
          function (e, t) {
            (re && re.tracePress(_, e.timeStamp), w(e, t));
          },
          [w, re, _],
        ),
        action: `clicked`,
        componentName: `button`,
        packageName: `@atlaskit/button`,
        packageVersion: `23.11.3`,
        analyticsData: n,
      }),
      R = (0, G.useCallback)(
        function (e) {
          (e.preventDefault(), D(e));
        },
        [D],
      );
    (0, G.useEffect)(
      function () {
        var e = te.current;
        y && e && e === document.activeElement && e.blur();
      },
      [y],
    );
    var z = !!O,
      B = A(Cr({ hasOverlay: z })),
      V = !y && !z,
      ae = {};
    return (
      (x || y || i === `warning`) &&
        (ae = {
          "[data-theme] & circle": {
            stroke: `${x || y ? `var(--ds-icon-subtle, #505258)` : `var(--ds-icon-warning-inverse, #292A2E)`} !important`,
          },
        }),
      u(
        mr,
        null,
        u(
          m,
          l(
            {},
            L,
            {
              ref: ne,
              className: d,
              css: [s, V ? null : kr],
              "data-has-overlay": z ? !0 : void 0,
              "data-testid": I,
              disabled: y,
              href: V ? f : void 0,
              onBlur: S,
              onClick: ie,
              onFocus: T,
              onMouseDown: R,
              tabIndex: y ? -1 : N,
              type: ee,
            },
            xr({ isInteractive: V }),
          ),
          g ? u(`span`, { css: [B, wr({ spacing: j }), Mr(c, Ar)] }, g) : null,
          Nr(c, [B, Sr({ spacing: j })]),
          h ? u(`span`, { css: [B, wr({ spacing: j }), Mr(c, jr)] }, h) : null,
          O ? u(`span`, { css: [Dr, ae] }, O) : null,
        ),
      )
    );
  });
function Fr(e, t) {
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
function Ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Fr(Object(n), !0).forEach(function (t) {
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Fr(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Lr = 8,
  Rr = [`default`, `primary`, `danger`, `warning`],
  zr = { default: `${32 / 14}em`, compact: `${24 / 14}em`, none: `auto` },
  Br = { default: zr.default, compact: zr.compact, none: `inherit` },
  Vr = { default: `0 ${Lr + Lr / 4}px`, compact: `0 ${Lr + Lr / 4}px`, none: `0` },
  Hr = { compact: `0 ${Lr / 4}px`, default: `0 ${Lr / 4}px`, none: `0` },
  Ur = { default: `middle`, compact: `middle`, none: `baseline` },
  Wr = {
    borderRadius: `inherit`,
    inset: `var(--ds-space-0, 0px)`,
    borderStyle: `solid`,
    borderWidth: `var(--ds-border-width, 1px)`,
    pointerEvents: `none`,
    position: `absolute`,
  },
  Gr = {
    background: `var(--ds-background-neutral-subtle, #00000000)`,
    color: `var(--ds-text, #292A2E)`,
    "&::after": Ir(Ir({}, Wr), {}, { content: `""`, borderColor: `var(--ds-border, #0B120E24)` }),
    "&:hover": { background: `var(--ds-background-neutral-hovered, #0B120E24)` },
    "&:active": { background: `var(--ds-background-neutral-pressed, #080F214A)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-neutral-subtle, #00000000)`,
    },
    "&:disabled[disabled]": { background: `var(--ds-background-neutral-subtle, #00000000)` },
    "&:disabled[disabled]:hover": { background: `var(--ds-background-neutral-subtle, #00000000)` },
    "&:disabled[disabled]:active": { background: `var(--ds-background-neutral-subtle, #00000000)` },
  },
  Kr = {
    background: `var(--ds-background-brand-bold, #1868DB)`,
    color: `var(--ds-text-inverse, #FFFFFF)`,
    "&:hover": { background: `var(--ds-background-brand-bold-hovered, #1558BC)` },
    "&:active": { background: `var(--ds-background-brand-bold-pressed, #144794)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-brand-bold, #1868DB)`,
    },
  },
  qr = {
    background: `transparent`,
    color: `var(--ds-link, #1868DB)`,
    "&:hover": { color: `var(--ds-link, #1868DB)`, textDecoration: `underline` },
    "&:active": { color: `var(--ds-link-pressed, #1558BC)`, textDecoration: `underline` },
  },
  Jr = {
    background: `transparent`,
    color: `var(--ds-text-subtle, #505258)`,
    "&:hover": { background: `var(--ds-background-neutral-subtle-hovered, #0515240F)` },
    "&:active": { background: `var(--ds-background-neutral-subtle-pressed, #0B120E24)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: `transparent` },
  },
  Yr = {
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
  Xr = {
    background: `var(--ds-background-warning-bold, #FBC828)`,
    color: `var(--ds-text-warning-inverse, #292A2E)`,
    "&:hover": { background: `var(--ds-background-warning-bold-hovered, #FCA700)` },
    "&:active": { background: `var(--ds-background-warning-bold-pressed, #F68909)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-warning-bold, #FBC828)`,
    },
  },
  Zr = {
    background: `var(--ds-background-danger-bold, #C9372C)`,
    color: `var(--ds-text-inverse, #FFFFFF)`,
    "&:hover": { background: `var(--ds-background-danger-bold-hovered, #AE2E24)` },
    "&:active": { background: `var(--ds-background-danger-bold-pressed, #872821)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-danger-bold, #C9372C)`,
    },
  },
  Qr = {
    background: `var(--ds-background-selected, #E9F2FE)`,
    color: `var(--ds-text-selected, #1868DB)`,
    "&:not([disabled])::after": Ir(
      Ir({}, Wr),
      {},
      { content: `""`, borderColor: `var(--ds-border-selected, #1868DB)` },
    ),
  },
  $r = { '&[data-has-overlay="true"]': { cursor: `default`, textDecoration: `none` } };
function ei(e) {
  var t = e.appearance,
    n = e.spacing,
    r = e.isSelected,
    i = e.shouldFitContainer,
    a = e.isOnlySingleIcon;
  return Ir(
    Ir(
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
        height: zr[n],
        lineHeight: Br[n],
        padding: a ? Hr[n] : Vr[n],
        verticalAlign: Ur[n],
        width: i ? `100%` : `auto`,
        justifyContent: `center`,
      },
      r
        ? Qr
        : Ir(
            Ir(
              Ir(
                Ir(
                  Ir(
                    Ir(
                      Ir(Ir({}, t === `default` && Gr), t === `primary` && Kr),
                      t === `link` && qr,
                    ),
                    t === `subtle` && Jr,
                  ),
                  t === `subtle-link` && Yr,
                ),
                t === `warning` && Xr,
              ),
              t === `danger` && Zr,
            ),
            {},
            {
              "&[disabled]": {
                color: `var(--ds-text-disabled, #080F214A)`,
                backgroundColor: Rr.includes(t)
                  ? `var(--ds-background-disabled, #17171708)`
                  : `transparent`,
                cursor: `not-allowed`,
                textDecoration: `none`,
                "&:hovered": {
                  backgroundColor: Rr.includes(t)
                    ? `var(--ds-background-disabled, #17171708)`
                    : `transparent`,
                },
                "&:active": {
                  backgroundColor: Rr.includes(t)
                    ? `var(--ds-background-disabled, #17171708)`
                    : `transparent`,
                },
              },
            },
            $r,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function ti(e) {
  var t = e.children,
    n = e.iconBefore,
    r = e.iconAfter;
  return Er(t) ? !0 : t ? !1 : !!((n && !r) || (!n && r));
}
var ni = [
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
  ri = typeof navigator < `u` && navigator.userAgent.toLowerCase().indexOf(`firefox`) > -1,
  ii = G.memo(
    G.forwardRef(function (e, t) {
      var n = e.appearance,
        r = n === void 0 ? `default` : n,
        i = e.children,
        a = e.iconBefore,
        o = e.iconAfter,
        s = e.isSelected,
        c = s === void 0 ? !1 : s,
        u = e.onMouseDown,
        d = u === void 0 ? Vn : u,
        f = e.onMouseUp,
        p = f === void 0 ? Vn : f,
        m = e.shouldFitContainer,
        h = m === void 0 ? !1 : m,
        g = e.spacing,
        _ = g === void 0 ? `default` : g,
        v = P(e, ni),
        y = ti({ children: i, iconBefore: a, iconAfter: o }),
        b = F((0, G.useState)(!1), 2),
        x = b[0],
        S = b[1],
        C = (0, G.useCallback)(
          function (e) {
            (d(e), ri && S(!0));
          },
          [d, S],
        ),
        w = (0, G.useCallback)(
          function (e) {
            (p(e), ri && S(!1));
          },
          [p, S],
        ),
        T = (0, G.useMemo)(
          function () {
            return ei({
              appearance: r,
              spacing: _,
              isSelected: c,
              shouldFitContainer: h,
              isOnlySingleIcon: y,
            });
          },
          [r, _, c, h, y],
        );
      return G.createElement(
        Pr,
        l({}, v, {
          ref: t,
          appearance: r,
          buttonCss: T,
          children: i,
          "data-firefox-is-active": x ? !0 : void 0,
          iconAfter: o,
          iconBefore: a,
          isSelected: c,
          onMouseDown: C,
          onMouseUp: w,
          spacing: _,
        }),
      );
    }),
  );
ii.displayName = `Button`;
var ai = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
d();
function oi(e) {
  return e === `inherit` ? `var(--ds-icon-subtle, #505258)` : `var(--ds-icon-inverse, #FFFFFF)`;
}
var si = {
    rotateStyles: `_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o`,
    loadInStyles: `_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw`,
    wrapperStyles: `_1e0c116y _s7n4nkob`,
    circleStyles: `_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz`,
  },
  ci = typeof window > `u` ? G.useEffect : G.useLayoutEffect,
  li = G.memo(
    G.forwardRef(function (e, t) {
      var n = e.appearance,
        r = n === void 0 ? `inherit` : n,
        i = e.delay,
        a = i === void 0 ? 0 : i,
        o = e.interactionName,
        s = e.label,
        c = e.size,
        l = c === void 0 ? `medium` : c,
        u = e.testId,
        d = typeof l == `number` ? l : ai[l],
        f = `${a}ms`,
        p = oi(r),
        m = (0, G.useContext)(hr);
      return (
        ci(
          function () {
            if (m != null) return m.hold(o);
          },
          [m, o],
        ),
        G.createElement(
          `span`,
          {
            "data-testid": u ? `${u}-wrapper` : `spinner-wrapper`,
            style: { animationDelay: f, width: d, height: d },
            className: j([si.wrapperStyles, si.rotateStyles]),
          },
          G.createElement(
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
              className: j([si.loadInStyles]),
            },
            G.createElement(`circle`, {
              cx: `8`,
              cy: `8`,
              r: `7`,
              style: { stroke: p },
              className: j([si.circleStyles]),
            }),
          ),
        )
      );
    }),
  ),
  ui = {
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
d();
var di = [`isFixedSize`, `hasDataRow`, `children`, `testId`, `isLoading`],
  fi = (0, G.forwardRef)(function (e, t) {
    var n = e.isFixedSize,
      r = e.hasDataRow,
      i = e.children,
      a = e.testId,
      o = e.isLoading,
      s = P(e, di);
    return G.createElement(
      `table`,
      l(
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
          className: j([
            `_1bsb1osq _yq5hus1c _btyzidpf _ect4ttxp`,
            n && `_1kqm1n9t`,
            r && `_179r1uh4`,
          ]),
        },
      ),
      i,
    );
  }),
  pi = function (e) {
    var t = e.children;
    return G.createElement(
      `caption`,
      { className: j([`_11c81af2 _6rthu2gc _1pfh1ejb _m6k41e03`]) },
      t,
    );
  },
  mi = function (e) {
    var t = e.children,
      n = e.testId;
    return G.createElement(
      `div`,
      { "data-testid": n && `${n}--pagination--container`, className: j([`_1e0c1txw _1bah1h6o`]) },
      t,
    );
  };
d();
var hi = function (e) {
    var t = e.children,
      n = e.testId;
    return G.createElement(
      `div`,
      { "data-testid": n && `${n}--empty-view-with-fixed-height`, className: j([`_4t3i1jdh`]) },
      t,
    );
  },
  gi = function (e) {
    var t = e.children,
      n = e.testId;
    return G.createElement(
      `div`,
      {
        "data-testid": n && `${n}--empty-view-container`,
        className: j([
          `_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o`,
        ]),
      },
      t,
    );
  },
  _i = [`cells`],
  vi = [`content`, `testId`],
  yi = function (e) {
    var t = e.row,
      n = e.head,
      r = e.testId,
      i = e.isFixedSize,
      a = e.isHighlighted,
      o = t.cells,
      s = P(t, _i);
    return G.createElement(
      y,
      l(
        {},
        s,
        { isHighlighted: a },
        a ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: t.testId || (r && `${r}--row-${s.key}`) },
      ),
      o.map(function (e, t) {
        var a = e.content,
          o = e.testId,
          s = P(e, vi),
          c = (n || { cells: [] }).cells[t] || {},
          u = c.shouldTruncate,
          d = c.width;
        return G.createElement(
          f,
          l({ "data-testid": o || (r && `${r}--cell-${t}`) }, s, {
            isFixedSize: i,
            key: t,
            shouldTruncate: u,
            width: d,
          }),
          a,
        );
      }),
    );
  };
function bi(e, t, n) {
  return ((t = R(t)), I(e, xi() ? Reflect.construct(t, n || [], R(e).constructor) : t.apply(e, n)));
}
function xi() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (xi = function () {
    return !!e;
  })();
}
var Si = (function (e) {
    function t() {
      return (L(this, t), bi(this, t, arguments));
    }
    return (
      ne(t, e),
      N(t, [
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
                return G.createElement(yi, {
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
  Ci = E(
    G.forwardRef(function (e, t) {
      return G.createElement(Si, l({}, e, { forwardedRef: t }));
    }),
  );
function wi(e, t, n) {
  return ((t = R(t)), I(e, Ti() ? Reflect.construct(t, n || [], R(e).constructor) : t.apply(e, n)));
}
function Ti() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ti = function () {
    return !!e;
  })();
}
var Ei = (function (e) {
  function t(e) {
    var n;
    return (L(this, t), (n = wi(this, t, [e])), (n.state = { hasError: !1 }), n);
  }
  return (
    ne(t, e),
    N(
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
d();
function Di(e, t) {
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
function Oi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Di(Object(n), !0).forEach(function (t) {
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Di(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var ki = `--contents-opacity`,
  Ai = function (e) {
    var t = e.children,
      n = e.testId;
    return G.createElement(
      `div`,
      { "data-testid": n && `${n}--container`, className: j([`_kqswh2mm`]) },
      t,
    );
  },
  ji = function (e) {
    var t = e.children,
      n = e.contentsOpacity,
      r = e.testId;
    return G.createElement(
      `div`,
      {
        "data-testid": r && `${r}--contents--container`,
        className: j([`_tzy47hfw _lcxvglyw`]),
        style: Oi(Oi({}, z({}, ki, n)), {}, { "--_cnddr8": k(`var(${ki})`) }),
      },
      t,
    );
  },
  Mi = function (e) {
    var t = e.children,
      n = e.testId;
    return G.createElement(
      `div`,
      {
        "data-testid": n && `${n}--spinner--container`,
        className: j([`_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o`]),
      },
      t,
    );
  };
function Ni(e, t, n) {
  return ((t = R(t)), I(e, Pi() ? Reflect.construct(t, n || [], R(e).constructor) : t.apply(e, n)));
}
function Pi() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Pi = function () {
    return !!e;
  })();
}
var Fi = (function (e) {
  function t() {
    return (L(this, t), Ni(this, t, arguments));
  }
  return (
    ne(t, e),
    N(t, [
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
            Ai,
            { testId: a },
            n ? G.createElement(ji, { contentsOpacity: i, testId: a }, t) : t,
            n &&
              G.createElement(
                Mi,
                { testId: a },
                G.createElement(li, { size: r, testId: a && `${a}--loadingSpinner`, label: o }),
              ),
          );
        },
      },
    ])
  );
})(G.Component);
(z(Fi, `defaultProps`, {
  isLoading: !0,
  spinnerSize: b,
  contentsOpacity: O,
  loadingLabel: `Loading table`,
}),
  d());
var Ii = [`children`, `testId`],
  Li = (0, G.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.testId,
      i = P(e, Ii);
    return G.createElement(
      `div`,
      l({}, i, { "data-testid": r, ref: t, className: j([`_kqswh2mm _6rth1ejb`]) }),
      n,
    );
  }),
  Ri = function (e) {
    var t = e.children,
      n = e.testId;
    return G.createElement(
      `div`,
      {
        "data-testid": n && `${n}--spinner-backdrop`,
        className: j([`_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw`]),
      },
      t,
    );
  },
  zi = (0, G.forwardRef)(function (e, t) {
    var n = e.children;
    return G.createElement(`div`, { ref: t, className: j([`_kqswh2mm _152tidpf`]) }, n);
  });
function Bi(e, t, n) {
  return ((t = R(t)), I(e, Vi() ? Reflect.construct(t, n || [], R(e).constructor) : t.apply(e, n)));
}
function Vi() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Vi = function () {
    return !!e;
  })();
}
var Hi = (function (e) {
  function t() {
    var e;
    L(this, t);
    var n = [...arguments];
    return (
      (e = Bi(this, t, [].concat(n))),
      z(e, `spinnerRef`, G.createRef()),
      z(e, `containerRef`, G.createRef()),
      z(e, `componentDidMount`, function () {
        e.props.isLoading &&
          e.hasTargetNode() &&
          (e.attachListeners(), e.updateTargetAppearance(), e.updateSpinnerPosition());
      }),
      z(e, `UNSAFE_componentWillReceiveProps`, function (t) {
        !t.isLoading || !e.hasTargetNode(t)
          ? e.detachListeners()
          : e.props.isLoading || e.attachListeners();
      }),
      z(e, `componentDidUpdate`, function () {
        e.hasTargetNode() &&
          (e.updateTargetAppearance(), e.props.isLoading && e.updateSpinnerPosition());
      }),
      z(e, `componentWillUnmount`, function () {
        e.detachListeners();
      }),
      z(e, `getTargetNode`, function () {
        var t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.props)
          .targetRef;
        return t?.() || e.containerRef.current;
      }),
      z(e, `hasTargetNode`, function (t) {
        return !!e.getTargetNode(t);
      }),
      z(e, `isVerticallyVisible`, function (e, t) {
        var n = e.top;
        return e.bottom <= 0 ? !1 : n < t;
      }),
      z(e, `isFullyVerticallyVisible`, function (e, t) {
        var n = e.top,
          r = e.bottom;
        return n >= 0 && r <= t;
      }),
      z(e, `handleResize`, function () {
        e.updateSpinnerPosition();
      }),
      z(e, `handleScroll`, function () {
        e.updateSpinnerPosition();
      }),
      z(e, `translateSpinner`, function (e, t, n) {
        ((e.style.position = n ? `fixed` : ``),
          (e.style.transform = t === 0 ? `` : `translate3d(0, ${t}px, 0)`));
      }),
      z(e, `updateTargetAppearance`, function () {
        var t = e.getTargetNode(),
          n = e.props,
          r = n.isLoading,
          i = n.contentsOpacity;
        t &&
          t.style &&
          B(t.style) === `object` &&
          ((t.style.pointerEvents = r ? `none` : ``), (t.style.opacity = r ? i.toString() : ``));
      }),
      e
    );
  }
  return (
    ne(t, e),
    N(t, [
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
            Li,
            { testId: i && `${i}--loading--container--advanced`, ref: this.containerRef },
            t,
            n &&
              G.createElement(
                Ri,
                { testId: i },
                G.createElement(
                  zi,
                  { ref: this.spinnerRef },
                  G.createElement(li, { size: r, testId: i && `${i}--loadingSpinner`, label: a }),
                ),
              ),
          );
        },
      },
    ])
  );
})(G.Component);
z(Hi, `defaultProps`, {
  isLoading: !0,
  spinnerSize: b,
  contentsOpacity: `var(--ds-opacity-loading, 0.2)`,
  loadingLabel: `Loading table`,
});
function Ui(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    n = e !== void 0,
    r = F((0, G.useState)(t), 2),
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
var Wi = n(() => {}),
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi = n(() => {
    (Wi(),
      (Gi = e(o())),
      d(),
      (Ki = e(o())),
      (qi = {
        none: `_1bsbpxbi _4t3ipxbi`,
        compact: `_1bsb1ejb _4t3i1ejb`,
        spacious: `_1bsb1ejb _4t3i1ejb`,
      }),
      (Ji = {
        none: `_1bsbutpp _4t3iutpp`,
        compact: `_1bsbpxbi _4t3ipxbi`,
        spacious: `_1bsb1ejb _4t3i1ejb`,
      }),
      (Yi = {
        medium: { none: 0, compact: 4, spacious: 4 },
        small: { none: 0, compact: 2.66, spacious: 8 },
      }),
      (Xi = (0, Ki.memo)(function (e) {
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
          h = Yi[f][l],
          g = m + 2 * h;
        return Gi.createElement(
          `span`,
          {
            "data-testid": i,
            role: a ? `img` : void 0,
            "aria-label": a || void 0,
            "aria-hidden": a ? void 0 : !0,
            style: { color: r },
            className: j([
              `_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9`,
              `_12va1onz _jcxd1r8n`,
              s && `_1bsb1kw7 _4t3i1kw7`,
              f === `small` && `_vwz4utpp`,
            ]),
          },
          Gi.createElement(`svg`, {
            fill: `none`,
            viewBox: `${0 - h} ${0 - h} ${g} ${g}`,
            role: `presentation`,
            dangerouslySetInnerHTML: d,
            className: j([
              `_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31`,
              s ? `_1bsb1kw7 _4t3i1kw7` : f === `small` ? Ji[l] : qi[l],
            ]),
          }),
        );
      })));
  }),
  Qi = r({ Icon: () => Xi, default: () => Xi }),
  $i = n(() => {
    Zi();
  }),
  ea = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i(($i(), t(Qi)));
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
  ta = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i(($i(), t(Qi)));
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
  na = (0, G.createContext)(`elevation.surface`),
  ra = function () {
    return (0, G.useContext)(na);
  };
((na.displayName = `SurfaceProvider`), d());
var ia = [
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
  aa = [`className`],
  oa = {
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
  sa = {
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
  ca = {
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
  la = {
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
  ua = {
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
  da = {
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
  fa = (0, G.forwardRef)(function (e, t) {
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
      C = P(e, ia);
    C.className;
    var w = P(C, aa),
      T = G.createElement(
        r,
        l(
          {
            style: b,
            ref: t,
            className: j([
              `_19itglyw _vchhusvi _r06hglyw`,
              a && oa[a],
              a && pa(a) && sa[a],
              d && ca[d],
              p && la[p],
              _ && ua[_],
              y && da[y],
              S,
            ]),
          },
          w,
          { "data-testid": x },
        ),
        i,
      );
    return a ? G.createElement(na.Provider, { value: a }, T) : T;
  });
function pa(e) {
  return e in sa;
}
var ma = () =>
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
d();
var ha = (...e) => j(e);
function ga() {
  return {
    css() {
      throw ma();
    },
    cssMap() {
      throw ma();
    },
    cx: ha,
    XCSSProp() {
      throw ma();
    },
  };
}
var _a = ga();
(_a.css, _a.cssMap, _a.cssMap);
var va = _a.cx;
(_a.XCSSProp, d());
var ya = [
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
  ba = {
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
  xa = {
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
  Sa = {
    start: `_1bahv2br`,
    center: `_1bah1h6o`,
    end: `_1bahh9n0`,
    "space-between": `_1bah1yb4`,
    "space-around": `_1bah1b1v`,
    "space-evenly": `_1bahitcz`,
    stretch: `_1bah1fhb`,
  },
  Ca = { column: `_2lx21bp4`, row: `_2lx2vrvc` },
  wa = { wrap: `_1n261g80`, nowrap: `_1n261q9c` },
  Ta = {
    start: `_4cvrv2br`,
    center: `_4cvr1h6o`,
    baseline: `_4cvr1q9y`,
    end: `_4cvrh9n0`,
    stretch: `_4cvr1fhb`,
  },
  Ea = { root: `_1e0c1txw _vchhusvi` },
  Da = (0, G.memo)(
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
        g = P(e, ya);
      return G.createElement(
        r,
        l({}, g, {
          role: i,
          className: j([
            Ea.root,
            s && xa[s],
            c && xa[c],
            s && ba[s],
            u && ba[u],
            a && Ta[a],
            p && Ca[p],
            o && Sa[o],
            m && wa[m],
            h,
          ]),
          "data-testid": f,
          ref: t,
        }),
        d,
      );
    }),
  );
((Da.displayName = `Flex`), d());
var Oa = [
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
  ka = {
    separator: `_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw`,
    hug: `_16jlidpf`,
    fill: `_1bsb1osq _16jlkb7n`,
  },
  Aa = function (e) {
    var t = e.children;
    return G.createElement(`span`, { className: j([ka.separator]) }, t);
  },
  ja = (0, G.memo)(
    (0, G.forwardRef)(function (e, t) {
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
        _ = e.children,
        v = P(e, Oa),
        y = typeof p == `string` ? G.createElement(Aa, null, p) : p,
        b = y
          ? G.Children.toArray(_)
              .filter(Boolean)
              .map(function (e, t) {
                return G.createElement(G.Fragment, { key: t }, p && t > 0 ? y : null, e);
              })
          : _;
      return G.createElement(
        Da,
        l({}, v, {
          as: n,
          role: g,
          alignItems: a,
          justifyContent: c || r,
          direction: `row`,
          gap: d,
          rowGap: f,
          wrap: s ? `wrap` : void 0,
          xcss: va(u === `hug` && ka.hug, u === `fill` && ka.fill, m),
          testId: h,
          ref: t,
        }),
        b,
      );
    }),
  );
ja.displayName = `Inline`;
var Ma = [
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
  Na = { hug: `_16jlidpf`, fill: `_1bsb1osq _16jlkb7n` },
  Pa = (0, G.memo)(
    (0, G.forwardRef)(function (e, t) {
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
        m = P(e, Ma);
      return G.createElement(
        Da,
        l({}, m, {
          as: n,
          role: p,
          gap: c,
          direction: `column`,
          alignItems: r,
          justifyContent: o || a,
          xcss: va(s === `hug` && Na.hug, s === `fill` && Na.fill, f),
          testId: d,
          ref: t,
        }),
        u,
      );
    }),
  );
Pa.displayName = `Stack`;
var Fa = (0, G.createContext)(!1),
  Ia = function () {
    return (0, G.useContext)(Fa);
  },
  La = Fa.Provider;
d();
var Ra = [`span`, `p`, `strong`, `em`],
  za = function (e, t) {
    var n = ra();
    if (e !== `inherit`) {
      if (e) return e;
      if (!t) return Wa.hasOwnProperty(n) ? Wa[n] : `color.text`;
    }
  },
  Ba = {
    root: `_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65`,
    "as.strong": `_k48pwu06`,
    "as.em": `_zg8l1m30`,
    "textAlign.center": `_y3gn1h6o`,
    "textAlign.end": `_y3gnh9n0`,
    "textAlign.start": `_y3gnv2br`,
    truncation: `_1reo15vq _18m915vq _1e0ccj1k _sudp1e54`,
    breakAll: `_1nmz9jpi`,
  },
  Va = { medium: `_11c8fhey`, large: `_11c81d4k`, small: `_11c8wadc` },
  Ha = { bold: `_k48pwu06`, medium: `_k48p1wq8`, regular: `_k48pi7a9`, semibold: `_k48p1pd9` },
  Ua = {
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
  Wa = {
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
  Ga = (0, G.forwardRef)(function (e, t) {
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
    T(Ra.includes(r), `@atlaskit/primitives: Text received an invalid "as" value of "${r}"`);
    var p = Ia(),
      m = za(i, p);
    !c && !p && (c = `medium`);
    var h = G.createElement(
      r,
      {
        id: s,
        className: j([
          Ba.root,
          c && Va[c],
          m && Ua[m],
          u && Ba.truncation,
          u === 1 && Ba.breakAll,
          a && Ba[`textAlign.${a}`],
          l && Ha[l],
          r === `em` && Ba[`as.em`],
          r === `strong` && Ba[`as.strong`],
          d,
        ]),
        style: { WebkitLineClamp: u },
        "data-testid": o,
        ref: t,
      },
      f,
    );
    return p ? h : G.createElement(La, { value: !0 }, h);
  });
function Ka() {
  if (typeof window < `u` && window.navigator != null) {
    var e = window.navigator.userAgent?.toLowerCase();
    return e ? e.includes(`safari`) && !e.includes(`chrome`) : !1;
  }
  return !1;
}
d();
var qa = [`as`, `children`, `isInset`, `testId`, `style`, `xcss`],
  Ja = [`className`],
  Ya = (0, G.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `button` : n,
      i = e.children,
      a = e.isInset,
      o = e.testId,
      s = e.style,
      c = e.xcss,
      u = P(e, qa);
    u.className;
    var d = P(u, Ja);
    return G.createElement(
      r,
      l({}, d, {
        ref: t,
        className: j([
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
  Xa = [
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
  Za = [`className`],
  Qa = { root: `_19itglyw _vchhusvi _r06hglyw _80omtlke`, disabled: `_80om13gf` },
  $a = (0, G.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.isDisabled,
      i = e.type,
      a = i === void 0 ? `button` : i,
      o = e.onClick,
      s = o === void 0 ? Vn : o,
      c = e.interactionName,
      u = e.componentName,
      d = e.analyticsContext,
      f = e.style,
      p = e.testId,
      m = e.xcss,
      h = e.tabIndex,
      g = P(e, Xa),
      _ = (0, G.useContext)(hr),
      v = ir({
        fn: (0, G.useCallback)(
          function (e, t) {
            (_ && _.tracePress(c, e.timeStamp), s(e, t));
          },
          [s, _, c],
        ),
        action: `clicked`,
        componentName: u || `Pressable`,
        packageName: `@atlaskit/primitives`,
        packageVersion: `19.0.0`,
        analyticsData: d,
        actionSubject: `button`,
      });
    g.className;
    var y = P(g, Za);
    return G.createElement(
      Ya,
      l({ as: `button`, tabIndex: h ?? (Ka() && !r ? 0 : void 0), style: f }, y, {
        type: a,
        onClick: v,
        disabled: r,
        xcss: ha(Qa.root, r && Qa.disabled, m),
        testId: p,
        ref: t,
      }),
      n,
    );
  }),
  eo = (0, G.createContext)(!1),
  to = function () {
    return (0, G.useContext)(eo);
  },
  no = (0, G.createContext)(!1),
  ro = function () {
    return (0, G.useContext)(no);
  },
  io = [`light`, `dark`, `spacing`, `typography`, `shape`, `motion`],
  ao = `UNSAFE_themeOptions`,
  oo = function (e) {
    return (
      io.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  so = function (e) {
    return (
      oe.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  co = function (e) {
    return [`light`, `dark`, `auto`].includes(e);
  },
  lo = function (e) {
    return e
      .split(` `)
      .map(function (e) {
        return e.split(/:([^]*)/);
      })
      .reduce(function (e, t) {
        var n = F(t, 2),
          r = n[0],
          i = n[1];
        if ((r === `colorMode` && co(i) && (e[r] = i), oo(r) && so(i) && (e[r] = i), r === ao))
          try {
            e[ao] = JSON.parse(i);
          } catch {}
        return e;
      }, {});
  },
  uo = function (e) {
    return Object.entries(e).reduce(function (e, t) {
      var n = F(t, 2),
        r = n[0],
        i = n[1];
      return (r === `colorMode` && typeof i == `string` && co(i)) ||
        (r === ao && B(i) === `object`) ||
        (oo(r) && typeof i == `string` && so(i))
        ? e + `${e ? ` ` : ``}${r}:${B(i) === `object` ? JSON.stringify(i) : i}`
        : e;
    }, ``);
  };
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
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : fo(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var mo = function (e) {
    return (
      le.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  ho = function () {
    if (typeof document > `u`) return {};
    var e = document.documentElement,
      t = e.getAttribute(`data-color-mode`) || ``;
    return po(po({}, lo(e.getAttribute(`data-theme`) || ``)), mo(t) && { colorMode: t });
  };
function go(e, t) {
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
function _o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? go(Object(n), !0).forEach(function (t) {
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : go(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var vo = `light`,
  yo = `no-preference`,
  bo = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.colorMode,
      n = t === void 0 ? V.colorMode : t,
      r = e.dark,
      i = r === void 0 ? V.dark : r,
      a = e.light,
      o = a === void 0 ? V.light : a,
      s = e.contrastMode,
      c = s === void 0 ? V.contrastMode : s,
      l = e.motion,
      u = l === void 0 ? V.motion() : l,
      d = e.shape,
      f = d === void 0 ? V.shape() : d,
      p = e.spacing,
      m = p === void 0 ? V.spacing : p,
      h = e.typography,
      g = h === void 0 ? V.typography : h,
      _ = e.UNSAFE_themeOptions,
      v = _ === void 0 ? V.UNSAFE_themeOptions : _,
      y = z(
        z({}, _e, uo({ dark: i, light: o, motion: u, shape: f, spacing: m, typography: g })),
        pe,
        n === `auto` ? vo : n,
      );
    if (
      (W(`platform_increased-contrast-themes`) &&
        (y = _o(_o({}, y), {}, z({}, U, c === `auto` ? yo : c))),
      v && ue(v.brandColor))
    ) {
      var b = fe(JSON.stringify(v));
      y[ce] = b;
    }
    return y;
  };
Nt();
var xo = {
    light: function () {
      return Mt(() => import(`./atlassian-light-B4KoDEbt.js`), [], import.meta.url);
    },
    "light-future": function () {
      return Mt(() => import(`./atlassian-light-future-DKM5j9ZV.js`), [], import.meta.url);
    },
    "light-increased-contrast": function () {
      return Mt(
        () => import(`./atlassian-light-increased-contrast-jVeZopnG.js`),
        [],
        import.meta.url,
      );
    },
    dark: function () {
      return Mt(() => import(`./atlassian-dark-BitxfF75.js`), [], import.meta.url);
    },
    "dark-future": function () {
      return Mt(() => import(`./atlassian-dark-future-CwgxGfeB.js`), [], import.meta.url);
    },
    "dark-increased-contrast": function () {
      return Mt(
        () => import(`./atlassian-dark-increased-contrast-Cnh8Zgxj.js`),
        [],
        import.meta.url,
      );
    },
    spacing: function () {
      return Mt(() => import(`./atlassian-spacing-Clc_kSQO.js`), [], import.meta.url);
    },
    typography: function () {
      return Mt(() => import(`./atlassian-typography-B1SRcYiZ.js`), [], import.meta.url);
    },
    shape: function () {
      return Mt(() => import(`./atlassian-shape-4W9UVfYR.js`), [], import.meta.url);
    },
    motion: function () {
      return Mt(() => import(`./atlassian-motion-DJC8sDd8.js`), [], import.meta.url);
    },
  },
  X = e(se()),
  So = (function () {
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
                return ((e.next = 6), Co(t));
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
  Co = (function () {
    var e = H(
      X.default.mark(function e(t) {
        var n, r;
        return X.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), xo[t]());
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
  wo = S(),
  To = typeof window < `u` && `matchMedia` in window;
function Eo(e) {
  document.documentElement.setAttribute(pe, e.matches ? `dark` : `light`);
}
var Do = To && window.matchMedia(`(prefers-color-scheme: dark)`),
  Oo = new ((function () {
    function e() {
      (L(this, e), z(this, `unbindThemeChangeListener`, null));
    }
    return N(e, [
      {
        key: `getColorMode`,
        value: function () {
          return Do && Do != null && Do.matches ? `dark` : `light`;
        },
      },
      {
        key: `bind`,
        value: function () {
          Do &&
            this.unbindThemeChangeListener === null &&
            (this.unbindThemeChangeListener = (0, wo.bind)(Do, { type: `change`, listener: Eo }));
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
  ko = typeof window < `u` && `matchMedia` in window;
function Ao(e) {
  document.documentElement.setAttribute(U, e.matches ? `more` : `no-preference`);
}
var jo = ko && window.matchMedia(`(prefers-contrast: more)`),
  Mo = new ((function () {
    function e() {
      (L(this, e), z(this, `unbindContrastChangeListener`, null));
    }
    return N(e, [
      {
        key: `getContrastMode`,
        value: function () {
          return jo && jo != null && jo.matches ? `more` : `no-preference`;
        },
      },
      {
        key: `bind`,
        value: function () {
          jo &&
            this.unbindContrastChangeListener === null &&
            (this.unbindContrastChangeListener = (0, wo.bind)(jo, {
              type: `change`,
              listener: Ao,
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
function No(e) {
  (e.colorMode === `auto` ? ((e.colorMode = Oo.getColorMode()), Oo.bind()) : Oo.unbind(),
    W(`platform_increased-contrast-themes`) &&
      (e.contrastMode === `auto`
        ? ((e.contrastMode = Mo.getContrastMode()), Mo.bind())
        : Mo.unbind()));
  var t = bo(e);
  return (
    Object.entries(t).forEach(function (e) {
      var t = F(e, 2),
        n = t[0],
        r = t[1];
      document.documentElement.setAttribute(n, r);
    }),
    function () {
      (Oo.unbind(), W(`platform_increased-contrast-themes`) && Mo.unbind());
    }
  );
}
function Po(e) {
  return Object.entries(ge).find(function (t) {
    return F(t, 2)[1].increasesContrastFor === e;
  })?.[1].id;
}
var Fo = function (e) {
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
          var t = Po(e);
          t && l.push(t);
        }),
        u.push.apply(u, l));
    else if ((u.push(e[t]), n !== `no-preference` && W(`platform_increased-contrast-themes`))) {
      var d = Po(e[t]);
      d && u.push(d);
    }
    return (
      [a, o, s, c].forEach(function (e) {
        e && u.push(e);
      }),
      M(new Set(u))
    );
  },
  Io = function (e) {
    return M(new Set([]));
  };
Nt();
function Lo(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = Ro(e)) || (t && e && typeof e.length == `number`)) {
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
function Ro(e, t) {
  if (e) {
    if (typeof e == `string`) return zo(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? zo(e, t)
          : void 0
    );
  }
}
function zo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Bo(e, t) {
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
function Vo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Bo(Object(n), !0).forEach(function (t) {
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Bo(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Ho = (function () {
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
                            Vo(
                              Vo({}, V),
                              {},
                              { typography: V.typography, shape: V.shape(), motion: V.motion() },
                              ho(),
                            ),
                          )
                        : t),
                    (i = r.colorMode),
                    (a = i === void 0 ? V.colorMode : i),
                    (o = r.contrastMode),
                    (s = o === void 0 ? V.contrastMode : o),
                    (c = r.dark),
                    (l = c === void 0 ? V.dark : c),
                    (u = r.light),
                    (d = u === void 0 ? V.light : u),
                    (f = r.shape),
                    (p = f === void 0 ? V.shape() : f),
                    (m = r.spacing),
                    (h = m === void 0 ? V.spacing : m),
                    (g = r.typography),
                    (_ = g === void 0 ? V.typography : g),
                    (v = r.motion),
                    (y = v === void 0 ? V.motion() : v),
                    (b = r.UNSAFE_themeOptions),
                    (x = b === void 0 ? V.UNSAFE_themeOptions : b),
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
                    (C = Fo(S)),
                    (w = n || So),
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
                      ue(x?.brandColor) &&
                      ((E = a || V.colorMode),
                      (D = me(x, E)),
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
                                        Mt(
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
                  ((O = Io(S)), (k = Lo(O)), (e.prev = 13), k.s());
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
                  return ((M = No(S)), e.abrupt(`return`, M));
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
  Uo = (function () {
    function e(t) {
      (L(this, e), z(this, `legacyObserver`, null), (this.callback = t), e.callbacks.add(t));
    }
    return N(e, [
      {
        key: `observe`,
        value: function () {
          e.observer ||
            ((e.observer = new MutationObserver(function () {
              var t = ho();
              e.callbacks.forEach(function (e) {
                return e(t);
              });
            })),
            e.observer.observe(document.documentElement, { attributeFilter: [_e, pe] }));
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
(z(Uo, `observer`, null), z(Uo, `callbacks`, new Set()));
var Wo = (0, G.createContext)(void 0),
  Go = (0, G.createContext)(void 0),
  Ko = (0, G.createContext)(!1),
  qo = (0, G.createContext)(void 0),
  Jo = (0, G.createContext)(void 0),
  Yo = function () {
    return (0, G.useContext)(Ko) ?? !1;
  },
  Xo = function () {
    return typeof document < `u` ? document : null;
  };
function Zo(e) {
  var t = Xo();
  return t ? t.head.querySelector(`style[${_e}="${e}"]`) : !1;
}
var Qo = (function () {
    var e = H(
      X.default.mark(function e(t) {
        var n, r;
        return X.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (!Zo(t)) {
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
                return ((e.next = 6), xo[t]());
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
  $o = (function () {
    var e = H(
      X.default.mark(function e(t, n) {
        var r, i;
        return X.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((r = Xo()), r)) {
                  e.next = 3;
                  break;
                }
                return e.abrupt(`return`);
              case 3:
                if (
                  ((i = r.createElement(`style`)),
                  (i.textContent = t),
                  (i.dataset.theme = n),
                  !Zo(n))
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
  es = (function () {
    var e = H(
      X.default.mark(function e(t) {
        var n;
        return X.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), Qo(t));
              case 2:
                if (((n = e.sent), n)) {
                  e.next = 5;
                  break;
                }
                return e.abrupt(`return`);
              case 5:
                $o(n, t);
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
  ts = (function () {
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
                  n.forEach(es));
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
d();
function ns(e, t) {
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
function rs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ns(Object(n), !0).forEach(function (t) {
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ns(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var is = { dark: `dark`, light: `light`, spacing: `spacing`, typography: `typography` },
  as =
    typeof window < `u` && `matchMedia` in window
      ? window.matchMedia(`(prefers-color-scheme: dark)`)
      : void 0;
function os(e) {
  return e === `auto` ? (as != null && as.matches ? `dark` : `light`) : e;
}
var ss = { body: `_1e0c1bgi` };
function cs(e) {
  var t = e.children,
    n = e.defaultColorMode,
    r = n === void 0 ? `auto` : n,
    i = e.defaultTheme,
    a = F((0, G.useState)(r), 2),
    o = a[0],
    s = a[1],
    c = F((0, G.useState)(os(r)), 2),
    u = c[0],
    d = c[1],
    f = F(
      (0, G.useState)(function () {
        return rs(rs({}, is), i);
      }),
      2,
    ),
    p = f[0],
    m = f[1],
    h = (0, G.useCallback)(function (e) {
      (s(e), d(os(e)));
    }, []),
    g = (0, G.useCallback)(function (e) {
      m(function (t) {
        return rs(rs({}, t), e);
      });
    }, []),
    _ = (0, G.useRef)(null),
    v = to(),
    y = ro(),
    b = Yo(),
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
                        ((n = Ho(rs(rs({}, p), {}, { colorMode: u }))), (_.current = n));
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
      } else ts(p);
    },
    [v, b, x, u, p],
  ),
    (0, G.useEffect)(
      function () {
        if (as)
          return (0, wo.bind)(as, {
            type: `change`,
            listener: function (e) {
              o === `auto` && d(e.matches ? `dark` : `light`);
            },
          });
      },
      [o],
    ));
  var S = rs(rs({}, bo(rs(rs({}, p), {}, { colorMode: u }))), {}, z({}, he, !0));
  return G.createElement(
    Ko.Provider,
    { value: !0 },
    G.createElement(
      Wo.Provider,
      { value: u },
      G.createElement(
        Go.Provider,
        { value: h },
        G.createElement(
          qo.Provider,
          { value: p },
          G.createElement(
            Jo.Provider,
            { value: g },
            x ? t : G.createElement(`div`, l({}, S, { className: j([ss.body]) }), t),
          ),
        ),
      ),
    ),
  );
}
function ls() {
  var e = (0, G.useContext)(Wo),
    t = ho(),
    n = F((0, G.useState)(t?.colorMode || `light`), 2),
    r = n[0],
    i = n[1];
  return (
    (0, G.useEffect)(
      function () {
        if (!e) {
          var t = new Uo(function (e) {
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
function us() {
  return G.useId().replace(/[:«»]/g, `_`);
}
function ds(e) {
  return G.createElement(ii, {
    "aria-label": e[`aria-label`],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: `subtle`,
  });
}
function fs(e) {
  return G.createElement(ii, l({}, e, { appearance: `subtle` }));
}
var ps = { container: `_1e0c1txw _kqswh2mm` };
function ms(e) {
  var t = e.key,
    n = e.testId,
    r = e.from,
    i = e.to;
  return G.createElement(
    fa,
    { as: `li`, testId: n, key: t, xcss: ps.container, paddingInline: `space.100` },
    G.createElement(
      Ga,
      { testId: n && `${n}-text` },
      G.createElement(Tr, null, `Skipped pages from `, r, ` to `, i),
      `…`,
    ),
  );
}
var hs = {},
  gs =
    Number.isNaN ||
    function (e) {
      return typeof e == `number` && e !== e;
    };
function _s(e, t) {
  return !!(e === t || (gs(e) && gs(t)));
}
function vs(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!_s(e[n], t[n])) return !1;
  return !0;
}
function ys(e, t) {
  t === void 0 && (t = vs);
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
var bs = function (e, t, n, r) {
    var i = n.max,
      a = n.ellipsis,
      o = n.transform,
      s = e.length,
      c = s > i,
      l = c && i - 4 < t,
      u = c && t < s - i + 3,
      d = ys(function () {
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
        M(d(0, 1)),
        [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: 2, to: s - f })],
        M(d(s - f)),
      );
    }
    if (!l && u) {
      var p = i - 2;
      return [].concat(
        M(d(0, p)),
        [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: p + 1, to: s - 1 })],
        M(d(s - 1)),
      );
    }
    var m = i - 4;
    return [].concat(
      M(d(0, 1)),
      [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: 2, to: t - Math.floor(m / 2) })],
      M(d(t - Math.floor(m / 2), t + m - 1)),
      [a({ key: `ellipsis-2`, testId: r && `${r}-ellipsis`, from: t + 3, to: s - 1 })],
      M(d(s - 1)),
    );
  },
  xs = e(ea()),
  Ss = e(ta());
function Cs(e, t) {
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
function ws(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Cs(Object(n), !0).forEach(function (t) {
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Cs(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Ts = {
    paginationMenu: `_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t`,
    paginationMenuItem: `_1pfhze3t _ect4ttxp`,
    navigatorIconWrapper: `_18zr12x7`,
  },
  Es = {
    componentName: `pagination`,
    packageName: `@atlaskit/pagination`,
    packageVersion: `16.2.11`,
  };
function Ds(e) {
  var t = e.chevronDirection === `left` ? xs.default : Ss.default;
  return G.createElement(
    fa,
    { as: `span`, xcss: Ts.navigatorIconWrapper },
    G.createElement(t, { label: ``, color: `currentColor`, size: `small` }),
  );
}
function Os(e, t) {
  var n = e.components,
    r = n === void 0 ? hs : n,
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
    g = h === void 0 ? hs : h,
    _ = e.max,
    v = _ === void 0 ? 7 : _,
    y = e.onChange,
    b = y === void 0 ? Vn : y,
    x = e.pages,
    S = e.getPageLabel,
    C = e.renderEllipsis,
    w = C === void 0 ? ms : C,
    T = e.analyticsContext,
    E = e.testId,
    D = e.isDisabled,
    O = F(
      Ui(o, function () {
        return a || 0;
      }),
      2,
    ),
    k = O[0],
    A = O[1],
    j = ir(
      ws(
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
        Es,
      ),
    );
  return G.createElement(
    fa,
    { testId: E, style: g, ref: t, "aria-label": c, as: `nav` },
    G.createElement(
      ja,
      { space: `space.0`, alignBlock: `center` },
      G.createElement(ds, {
        key: `left-navigator`,
        component: r.Previous,
        onClick: function (e) {
          return j({ event: e, selectedPageIndex: k - 1 });
        },
        isDisabled: D || k === 0,
        iconBefore: G.createElement(Ds, { chevronDirection: `left` }),
        "aria-label": f,
        testId: E && `${E}--left-navigator`,
      }),
      G.createElement(
        ja,
        { space: `space.0`, alignBlock: `baseline`, as: `ul`, xcss: Ts.paginationMenu },
        bs(
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
                ja,
                { as: `li`, xcss: Ts.paginationMenuItem, key: `page-${S ? S(e, t) : t}` },
                G.createElement(
                  fs,
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
      G.createElement(ds, {
        key: `right-navigator`,
        component: r.Next,
        onClick: function (e) {
          return j({ event: e, selectedPageIndex: k + 1 });
        },
        isDisabled: D || k === x.length - 1,
        iconBefore: G.createElement(Ds, { chevronDirection: `right` }),
        "aria-label": m,
        testId: E && `${E}--right-navigator`,
      }),
    ),
  );
}
var ks = (0, G.memo)((0, G.forwardRef)(Os));
function As(e, t, n) {
  return ((t = R(t)), I(e, js() ? Reflect.construct(t, n || [], R(e).constructor) : t.apply(e, n)));
}
function js() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (js = function () {
    return !!e;
  })();
}
var Ms = (function (e) {
  function t() {
    var e;
    L(this, t);
    var n = [...arguments];
    return (
      (e = As(this, t, [].concat(n))),
      z(e, `onChange`, function (t, n, r) {
        e.props.onChange(n, r);
      }),
      e
    );
  }
  return (
    ne(t, e),
    N(t, [
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
            s = M(Array(t)).map(function (e, t) {
              return t + 1;
            }),
            c = r - 1;
          return G.createElement(ks, {
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
d();
var Ns = [`isRanking`, `testId`],
  Ps = [
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
function Fs(e, t) {
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
function Is(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Fs(Object(n), !0).forEach(function (t) {
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Fs(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Ls = `--local-dynamic-table-text-color`,
  Rs = function (e) {
    var t = e.isRanking,
      n = e.testId,
      r = P(e, Ns);
    return G.createElement(
      `thead`,
      l({ "data-testid": n }, r, { className: j([`_179rglyw`, t && `_1e0c1ule`]) }),
    );
  },
  zs = (0, G.forwardRef)(function (e, t) {
    var n = e.width,
      r = e.children;
    e.isSortable;
    var i = e.sortOrder,
      a = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var s = e.style,
      c = e.testId,
      u = P(e, Ps),
      d = Is(
        Is(Is({}, s), n && C({ width: n })),
        {},
        z({}, Ls, `var(--ds-text-subtlest, #6B6E76)`),
      ),
      f = i === `ASC`,
      p = i === m,
      h = function () {
        if (f) return `ascending`;
        if (p) return `descending`;
      },
      g = r ? `th` : `td`;
    return G.createElement(
      g,
      l({ "aria-sort": h(), style: d, onClick: void 0, ref: t, "data-testid": c }, u, {
        className: j([
          `_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t`,
          `_11c8wadc _179r1uh4 _mqm2glyw _kqswh2mm _syazazsu _k48pwu06 _y3gn1e5h _s7n4nkob _1ygbd0i9`,
          `_1bsb8a2a`,
          a && o && `_1bto1l2s _o5721q9c`,
          a && `_1reo15vq _18m915vq`,
        ]),
      }),
      r,
    );
  }),
  Bs = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i(($i(), t(Qi)));
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
  Vs = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i(($i(), t(Qi)));
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
function Hs(e) {
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
        return (0, wo.bindAll)(
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
function Us(e) {
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
var Ws = (0, G.createContext)(null),
  Gs = (0, G.createContext)(null);
function Ks() {
  return (0, G.useContext)(Gs);
}
function qs(e) {
  var t = e.isOpen,
    n = e.type,
    r = e.onClose,
    i = (0, G.useContext)(Ws),
    a = Ks();
  (0, G.useEffect)(
    function () {
      if (i !== null && t) return i.onClose(r, { namespace: a, type: n });
    },
    [i, t, a, r, n],
  );
}
var Js = { none: 0, small: 100, medium: 350, large: 700 },
  Ys = 0.5,
  Xs = { none: Js.none, small: Js.small * Ys, medium: Js.medium * Ys, large: Js.large * Ys },
  Zs = function () {
    return typeof window < `u` && `matchMedia` in window;
  },
  Qs = function () {
    return Zs() ? window.matchMedia(`(prefers-reduced-motion: reduce)`).matches : !1;
  },
  $s = function (e) {
    switch (e.cleanup) {
      case `next-effect`:
        return;
      default:
        return [];
    }
  },
  ec = function () {
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
      }, $s(e)),
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
  tc = { appear: !0, isExiting: !1 },
  nc = (0, G.createContext)(tc),
  rc = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tc;
    return G.createElement(nc.Provider, { key: `${e.key}-provider`, value: t }, e);
  },
  ic = function (e) {
    var t = [];
    return (
      G.Children.toArray(e).forEach(function (e) {
        typeof e != `boolean` && e && t.push(e);
      }),
      t
    );
  },
  ac = function (e, t) {
    for (var n = t.concat([]), r = oc(t), i = 0; i < e.length; i++) {
      var a = e[i];
      r[a.key] || n.splice(i + 1, 0, a);
    }
    return n;
  },
  oc = function (e) {
    return e.reduce(function (e, t) {
      return ((e[t.key] = t), e);
    }, {});
  },
  sc = function (e, t) {
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
  cc = (0, G.memo)(function (e) {
    var t = e.appear,
      n = t === void 0 ? !1 : t,
      r = e.children,
      i = e.exitThenEnter,
      a = F((0, G.useState)([null, r]), 2),
      o = a[0],
      s = a[1],
      c = F((0, G.useState)([]), 2),
      l = c[0],
      u = c[1],
      d = F(
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
    var m = F(o, 2),
      h = m[0],
      g = m[1],
      _ = ic(h),
      v = ic(g);
    g !== r && s([g, r]);
    var y = sc(v, _),
      b = !!y.size,
      x = v;
    if ((b && (x = ac(v, _)), i))
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
            return rc(e, {
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
            return rc(e, f);
          })),
      x
    );
  }),
  lc = function () {
    return (0, G.useContext)(nc);
  };
cc.displayName = `ExitingPersistence`;
function uc() {
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
var dc = (0, G.createContext)(function () {
    return { isReady: !0, delay: 0, ref: Vn };
  }),
  fc = function () {
    var e = uc();
    return (0, G.useContext)(dc)(e);
  };
d();
var pc = function (e) {
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
      f = fc(),
      p = lc(),
      m = p.isExiting,
      h = p.onFinish,
      g = p.appear,
      _ = ec(),
      v = c || !f.isReady,
      y = m ? 0 : f.delay,
      b = m ? `exiting` : `entering`,
      x = F((0, G.useState)(g), 2),
      S = x[0],
      C = x[1];
    return (
      (0, G.useEffect)(
        function () {
          var e = !1;
          if (!v) {
            if (!g) {
              l && l(b);
              return;
            }
            var t = function () {
              (b === `exiting` && h?.(), e || C(!1), l?.(b));
            };
            if (Qs()) {
              t();
              return;
            }
            return (
              C(!0),
              _(t, m ? Xs[d] : Js[d] + y),
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
          className: S
            ? j([
                j([`_1o51eoah _1y0co91m _1bumglyw _sedtglyw`]),
                v && j([`_1y0ctrqk`]),
                d === `small` && j([`_5sag1yx9`]),
                d === `medium` && j([`_5sag1ttt`]),
                d === `large` && j([`_5sagpwmj`]),
                m && d === `small` && j([`_5sag14ed`]),
                m && d === `medium` && j([`_5sagluct`]),
                m && d === `large` && j([`_5sag1ttt`]),
                m && j([`_ju255cps _1o51q7pw`]),
                !m && n === `linear` && j([`_1pglp3kn`]),
                !m && n === `ease-out` && j([`_1pgldkwg`]),
                !m && n === `ease-in` && j([`_1pgl1nzg`]),
                !m && n === `ease-in-40-out` && j([`_1pgl5y64`]),
                !m && n === `ease-in-60-out` && j([`_1pgl1ddy`]),
                !m && n === `ease-in-80-out` && j([`_1pglannl`]),
                !m && n === `ease-in-out` && j([`_1pgl1fu8`]),
                m && n === `linear` && j([`_1pglp3kn`]),
                m && i === `ease-out` && j([`_1pgldkwg`]),
                m && i === `ease-in` && j([`_1pgl1nzg`]),
                m && i === `ease-in-40-out` && j([`_1pgl5y64`]),
                m && i === `ease-in-60-out` && j([`_1pgl1ddy`]),
                m && i === `ease-in-80-out` && j([`_1pglannl`]),
                m && i === `ease-in-out` && j([`_1pgl1fu8`]),
                ((!m && a === `fade-in`) || (m && s === `fade-in`)) && j([`_j7hq1cgr`]),
                ((!m && a === `fade-out`) || (m && s === `fade-out`)) && j([`_j7hq1lln`]),
                ((!m && a === `zoom-in`) || (m && s === `zoom-in`)) && j([`_j7hqe8p0`]),
                ((!m && a === `zoom-out`) || (m && s === `zoom-out`)) && j([`_j7hqy6ql`]),
                ((!m && a === `slide-in-from-top`) || (m && s === `slide-in-from-top`)) &&
                  j([`_j7hqqshu`]),
                ((!m && a === `slide-out-from-top`) || (m && s === `slide-out-from-top`)) &&
                  j([`_j7hq7ri4`]),
                ((!m && a === `slide-in-from-right`) || (m && s === `slide-in-from-right`)) &&
                  j([`_j7hqdfjr`]),
                ((!m && a === `slide-out-from-right`) || (m && s === `slide-out-from-right`)) &&
                  j([`_j7hqonfj`]),
                ((!m && a === `slide-in-from-bottom`) || (m && s === `slide-in-from-bottom`)) &&
                  j([`_j7hq1liq`]),
                ((!m && a === `slide-out-from-bottom`) || (m && s === `slide-out-from-bottom`)) &&
                  j([`_j7hqhnf1`]),
                ((!m && a === `slide-in-from-left`) || (m && s === `slide-in-from-left`)) &&
                  j([`_j7hq1bh1`]),
                ((!m && a === `slide-out-from-left`) || (m && s === `slide-out-from-left`)) &&
                  j([`_j7hqj08w`]),
                ((!m && a === `fade-in-from-top`) || (m && s === `fade-in-from-top`)) &&
                  j([`_j7hq2iua`]),
                ((!m && a === `fade-out-from-top`) || (m && s === `fade-out-from-top`)) &&
                  j([`_j7hq39va`]),
                ((!m && a === `fade-in-from-left`) || (m && s === `fade-in-from-left`)) &&
                  j([`_j7hq15m2`]),
                ((!m && a === `fade-out-from-left`) || (m && s === `fade-out-from-left`)) &&
                  j([`_j7hq1yiv`]),
                ((!m && a === `fade-in-from-bottom`) || (m && s === `fade-in-from-bottom`)) &&
                  j([`_j7hq1w00`]),
                ((!m && a === `fade-out-from-bottom`) || (m && s === `fade-out-from-bottom`)) &&
                  j([`_j7hqzy3z`]),
                ((!m && a === `fade-in-from-right`) || (m && s === `fade-in-from-right`)) &&
                  j([`_j7hqpqak`]),
                ((!m && a === `fade-out-from-right`) || (m && s === `fade-out-from-right`)) &&
                  j([`_j7hq1ebg`]),
                ((!m && a === `fade-in-from-top-constant`) ||
                  (m && s === `fade-in-from-top-constant`)) &&
                  j([`_j7hqm2e2`]),
                ((!m && a === `fade-out-from-top-constant`) ||
                  (m && s === `fade-out-from-top-constant`)) &&
                  j([`_j7hq97jn`]),
                ((!m && a === `fade-in-from-left-constant`) ||
                  (m && s === `fade-in-from-left-constant`)) &&
                  j([`_j7hqovgq`]),
                ((!m && a === `fade-out-from-left-constant`) ||
                  (m && s === `fade-out-from-left-constant`)) &&
                  j([`_j7hq15do`]),
                ((!m && a === `fade-in-from-bottom-constant`) ||
                  (m && s === `fade-in-from-bottom-constant`)) &&
                  j([`_j7hq797a`]),
                ((!m && a === `fade-out-from-bottom-constant`) ||
                  (m && s === `fade-out-from-bottom-constant`)) &&
                  j([`_j7hqwo7r`]),
                ((!m && a === `fade-in-from-right-constant`) ||
                  (m && s === `fade-in-from-right-constant`)) &&
                  j([`_j7hqt8u5`]),
                ((!m && a === `fade-out-from-right-constant`) ||
                  (m && s === `fade-out-from-right-constant`)) &&
                  j([`_j7hq1pgp`]),
              ])
            : ``,
          style: { animationDelay: `${y}ms` },
        },
        b,
      )
    );
  },
  mc = { top: `bottom`, bottom: `top`, left: `right`, right: `left` },
  hc = function (e) {
    var t = e.children,
      n = e.duration,
      r = n === void 0 ? `large` : n,
      i = e.entranceDirection,
      a = e.exitDirection,
      o = e.distance,
      s = o === void 0 ? `proportional` : o,
      c = e.onFinish,
      l = e.isPaused,
      u = i === void 0 ? void 0 : mc[i],
      d = a || u ? `fade-out-from-${a || u}${s === `proportional` ? `` : `-constant`}` : `fade-out`;
    return G.createElement(
      pc,
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
  gc = G.createContext();
G.createContext();
var _c = function (e) {
    return Array.isArray(e) ? e[0] : e;
  },
  vc = function (e) {
    if (typeof e == `function`) {
      var t = [...arguments].slice(1);
      return e.apply(void 0, t);
    }
  },
  yc = function (e, t) {
    if (typeof e == `function`) return vc(e, t);
    e != null && (e.current = t);
  },
  bc = function (e) {
    return e.reduce(function (e, t) {
      var n = t[0];
      return ((e[n] = t[1]), e);
    }, {});
  },
  xc =
    typeof window < `u` && window.document && window.document.createElement
      ? G.useLayoutEffect
      : G.useEffect,
  Sc = `bottom`,
  Cc = `right`,
  wc = `left`,
  Tc = `auto`,
  Ec = [`top`, Sc, Cc, wc],
  Dc = `start`,
  Oc = `clippingParents`,
  kc = `viewport`,
  Ac = `popper`,
  jc = `reference`,
  Mc = Ec.reduce(function (e, t) {
    return e.concat([t + `-` + Dc, t + `-end`]);
  }, []),
  Nc = [].concat(Ec, [Tc]).reduce(function (e, t) {
    return e.concat([t, t + `-` + Dc, t + `-end`]);
  }, []),
  Pc = [
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
function Fc(e) {
  return e ? (e.nodeName || ``).toLowerCase() : null;
}
function Ic(e) {
  if (e == null) return window;
  if (e.toString() !== `[object Window]`) {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Lc(e) {
  return e instanceof Ic(e).Element || e instanceof Element;
}
function Rc(e) {
  return e instanceof Ic(e).HTMLElement || e instanceof HTMLElement;
}
function zc(e) {
  return typeof ShadowRoot > `u` ? !1 : e instanceof Ic(e).ShadowRoot || e instanceof ShadowRoot;
}
function Bc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (e) {
    var n = t.styles[e] || {},
      r = t.attributes[e] || {},
      i = t.elements[e];
    !Rc(i) ||
      !Fc(i) ||
      (Object.assign(i.style, n),
      Object.keys(r).forEach(function (e) {
        var t = r[e];
        t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? `` : t);
      }));
  });
}
function Vc(e) {
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
        !Rc(r) ||
          !Fc(r) ||
          (Object.assign(r.style, a),
          Object.keys(i).forEach(function (e) {
            r.removeAttribute(e);
          }));
      });
    }
  );
}
var Hc = {
  name: `applyStyles`,
  enabled: !0,
  phase: `write`,
  fn: Bc,
  effect: Vc,
  requires: [`computeStyles`],
};
function Uc(e) {
  return e.split(`-`)[0];
}
var Wc = Math.max,
  Gc = Math.min,
  Kc = Math.round;
function qc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (e) {
          return e.brand + `/` + e.version;
        })
        .join(` `)
    : navigator.userAgent;
}
function Jc() {
  return !/^((?!chrome|android).)*safari/i.test(qc());
}
function Yc(e, t, n) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  var r = e.getBoundingClientRect(),
    i = 1,
    a = 1;
  t &&
    Rc(e) &&
    ((i = (e.offsetWidth > 0 && Kc(r.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && Kc(r.height) / e.offsetHeight) || 1));
  var o = (Lc(e) ? Ic(e) : window).visualViewport,
    s = !Jc() && n,
    c = (r.left + (s && o ? o.offsetLeft : 0)) / i,
    l = (r.top + (s && o ? o.offsetTop : 0)) / a,
    u = r.width / i,
    d = r.height / a;
  return { width: u, height: d, top: l, right: c + u, bottom: l + d, left: c, x: c, y: l };
}
function Xc(e) {
  var t = Yc(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function Zc(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && zc(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Qc(e) {
  return Ic(e).getComputedStyle(e);
}
function $c(e) {
  return [`table`, `td`, `th`].indexOf(Fc(e)) >= 0;
}
function el(e) {
  return ((Lc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function tl(e) {
  return Fc(e) === `html` ? e : e.assignedSlot || e.parentNode || (zc(e) ? e.host : null) || el(e);
}
function nl(e) {
  return !Rc(e) || Qc(e).position === `fixed` ? null : e.offsetParent;
}
function rl(e) {
  var t = /firefox/i.test(qc());
  if (/Trident/i.test(qc()) && Rc(e) && Qc(e).position === `fixed`) return null;
  var n = tl(e);
  for (zc(n) && (n = n.host); Rc(n) && [`html`, `body`].indexOf(Fc(n)) < 0; ) {
    var r = Qc(n);
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
function il(e) {
  for (var t = Ic(e), n = nl(e); n && $c(n) && Qc(n).position === `static`; ) n = nl(n);
  return n && (Fc(n) === `html` || (Fc(n) === `body` && Qc(n).position === `static`))
    ? t
    : n || rl(e) || t;
}
function al(e) {
  return [`top`, `bottom`].indexOf(e) >= 0 ? `x` : `y`;
}
function ol(e, t, n) {
  return Wc(e, Gc(t, n));
}
function sl(e, t, n) {
  var r = ol(e, t, n);
  return r > n ? n : r;
}
function cl() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ll(e) {
  return Object.assign({}, cl(), e);
}
function ul(e, t) {
  return t.reduce(function (t, n) {
    return ((t[n] = e), t);
  }, {});
}
var dl = function (e, t) {
  return (
    (e = typeof e == `function` ? e(Object.assign({}, t.rects, { placement: t.placement })) : e),
    ll(typeof e == `number` ? ul(e, Ec) : e)
  );
};
function fl(e) {
  var t,
    n = e.state,
    r = e.name,
    i = e.options,
    a = n.elements.arrow,
    o = n.modifiersData.popperOffsets,
    s = Uc(n.placement),
    c = al(s),
    l = [`left`, `right`].indexOf(s) >= 0 ? `height` : `width`;
  if (!(!a || !o)) {
    var u = dl(i.padding, n),
      d = Xc(a),
      f = c === `y` ? `top` : wc,
      p = c === `y` ? Sc : Cc,
      m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l],
      h = o[c] - n.rects.reference[c],
      g = il(a),
      _ = g ? (c === `y` ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
      v = m / 2 - h / 2,
      y = u[f],
      b = _ - d[l] - u[p],
      x = _ / 2 - d[l] / 2 + v,
      S = ol(y, x, b),
      C = c;
    n.modifiersData[r] = ((t = {}), (t[C] = S), (t.centerOffset = S - x), t);
  }
}
function pl(e) {
  var t = e.state,
    n = e.options.element,
    r = n === void 0 ? `[data-popper-arrow]` : n;
  r != null &&
    ((typeof r == `string` && ((r = t.elements.popper.querySelector(r)), !r)) ||
      (Zc(t.elements.popper, r) && (t.elements.arrow = r)));
}
var ml = {
  name: `arrow`,
  enabled: !0,
  phase: `main`,
  fn: fl,
  effect: pl,
  requires: [`popperOffsets`],
  requiresIfExists: [`preventOverflow`],
};
function hl(e) {
  return e.split(`-`)[1];
}
var gl = { top: `auto`, right: `auto`, bottom: `auto`, left: `auto` };
function _l(e, t) {
  var n = e.x,
    r = e.y,
    i = t.devicePixelRatio || 1;
  return { x: Kc(n * i) / i || 0, y: Kc(r * i) / i || 0 };
}
function vl(e) {
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
    y = wc,
    b = `top`,
    x = window;
  if (l) {
    var S = il(n),
      C = `clientHeight`,
      w = `clientWidth`;
    if (
      (S === Ic(n) &&
        ((S = el(n)),
        Qc(S).position !== `static` &&
          s === `absolute` &&
          ((C = `scrollHeight`), (w = `scrollWidth`))),
      (S = S),
      i === `top` || ((i === `left` || i === `right`) && a === `end`))
    ) {
      b = Sc;
      var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
      ((h -= T - r.height), (h *= c ? 1 : -1));
    }
    if (i === `left` || ((i === `top` || i === `bottom`) && a === `end`)) {
      y = Cc;
      var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
      ((p -= E - r.width), (p *= c ? 1 : -1));
    }
  }
  var D = Object.assign({ position: s }, l && gl),
    O = u === !0 ? _l({ x: p, y: h }, Ic(n)) : { x: p, y: h };
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
function yl(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    i = r === void 0 ? !0 : r,
    a = n.adaptive,
    o = a === void 0 ? !0 : a,
    s = n.roundOffsets,
    c = s === void 0 ? !0 : s,
    l = {
      placement: Uc(t.placement),
      variation: hl(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === `fixed`,
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      vl(
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
        vl(
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
var bl = { name: `computeStyles`, enabled: !0, phase: `beforeWrite`, fn: yl, data: {} },
  xl = { passive: !0 };
function Sl(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    i = r.scroll,
    a = i === void 0 ? !0 : i,
    o = r.resize,
    s = o === void 0 ? !0 : o,
    c = Ic(t.elements.popper),
    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    a &&
      l.forEach(function (e) {
        e.addEventListener(`scroll`, n.update, xl);
      }),
    s && c.addEventListener(`resize`, n.update, xl),
    function () {
      (a &&
        l.forEach(function (e) {
          e.removeEventListener(`scroll`, n.update, xl);
        }),
        s && c.removeEventListener(`resize`, n.update, xl));
    }
  );
}
var Cl = {
    name: `eventListeners`,
    enabled: !0,
    phase: `write`,
    fn: function () {},
    effect: Sl,
    data: {},
  },
  wl = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function Tl(e) {
  return e.replace(/left|right|bottom|top/g, function (e) {
    return wl[e];
  });
}
var El = { start: `end`, end: `start` };
function Dl(e) {
  return e.replace(/start|end/g, function (e) {
    return El[e];
  });
}
function Ol(e) {
  var t = Ic(e);
  return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function kl(e) {
  return Yc(el(e)).left + Ol(e).scrollLeft;
}
function Al(e, t) {
  var n = Ic(e),
    r = el(e),
    i = n.visualViewport,
    a = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    c = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    var l = Jc();
    (l || (!l && t === `fixed`)) && ((s = i.offsetLeft), (c = i.offsetTop));
  }
  return { width: a, height: o, x: s + kl(e), y: c };
}
function jl(e) {
  var t = el(e),
    n = Ol(e),
    r = e.ownerDocument?.body,
    i = Wc(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
    a = Wc(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
    o = -n.scrollLeft + kl(e),
    s = -n.scrollTop;
  return (
    Qc(r || t).direction === `rtl` && (o += Wc(t.clientWidth, r ? r.clientWidth : 0) - i),
    { width: i, height: a, x: o, y: s }
  );
}
function Ml(e) {
  var t = Qc(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Nl(e) {
  return [`html`, `body`, `#document`].indexOf(Fc(e)) >= 0
    ? e.ownerDocument.body
    : Rc(e) && Ml(e)
      ? e
      : Nl(tl(e));
}
function Pl(e, t) {
  t === void 0 && (t = []);
  var n = Nl(e),
    r = n === e.ownerDocument?.body,
    i = Ic(n),
    a = r ? [i].concat(i.visualViewport || [], Ml(n) ? n : []) : n,
    o = t.concat(a);
  return r ? o : o.concat(Pl(tl(a)));
}
function Fl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Il(e, t) {
  var n = Yc(e, !1, t === `fixed`);
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
function Ll(e, t, n) {
  return t === `viewport` ? Fl(Al(e, n)) : Lc(t) ? Il(t, n) : Fl(jl(el(e)));
}
function Rl(e) {
  var t = Pl(tl(e)),
    n = [`absolute`, `fixed`].indexOf(Qc(e).position) >= 0 && Rc(e) ? il(e) : e;
  return Lc(n)
    ? t.filter(function (e) {
        return Lc(e) && Zc(e, n) && Fc(e) !== `body`;
      })
    : [];
}
function zl(e, t, n, r) {
  var i = t === `clippingParents` ? Rl(e) : [].concat(t),
    a = [].concat(i, [n]),
    o = a[0],
    s = a.reduce(
      function (t, n) {
        var i = Ll(e, n, r);
        return (
          (t.top = Wc(i.top, t.top)),
          (t.right = Gc(i.right, t.right)),
          (t.bottom = Gc(i.bottom, t.bottom)),
          (t.left = Wc(i.left, t.left)),
          t
        );
      },
      Ll(e, o, r),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Bl(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    i = r ? Uc(r) : null,
    a = r ? hl(r) : null,
    o = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    c;
  switch (i) {
    case `top`:
      c = { x: o, y: t.y - n.height };
      break;
    case Sc:
      c = { x: o, y: t.y + t.height };
      break;
    case Cc:
      c = { x: t.x + t.width, y: s };
      break;
    case wc:
      c = { x: t.x - n.width, y: s };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var l = i ? al(i) : null;
  if (l != null) {
    var u = l === `y` ? `height` : `width`;
    switch (a) {
      case Dc:
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
function Vl(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = r === void 0 ? e.placement : r,
    a = n.strategy,
    o = a === void 0 ? e.strategy : a,
    s = n.boundary,
    c = s === void 0 ? Oc : s,
    l = n.rootBoundary,
    u = l === void 0 ? kc : l,
    d = n.elementContext,
    f = d === void 0 ? Ac : d,
    p = n.altBoundary,
    m = p === void 0 ? !1 : p,
    h = n.padding,
    g = h === void 0 ? 0 : h,
    _ = ll(typeof g == `number` ? ul(g, Ec) : g),
    v = f === `popper` ? jc : Ac,
    y = e.rects.popper,
    b = e.elements[m ? v : f],
    x = zl(Lc(b) ? b : b.contextElement || el(e.elements.popper), c, u, o),
    S = Yc(e.elements.reference),
    C = Bl({ reference: S, element: y, strategy: `absolute`, placement: i }),
    w = Fl(Object.assign({}, y, C)),
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
function Hl(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = n.boundary,
    a = n.rootBoundary,
    o = n.padding,
    s = n.flipVariations,
    c = n.allowedAutoPlacements,
    l = c === void 0 ? Nc : c,
    u = hl(r),
    d = u
      ? s
        ? Mc
        : Mc.filter(function (e) {
            return hl(e) === u;
          })
      : Ec,
    f = d.filter(function (e) {
      return l.indexOf(e) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (t, n) {
    return ((t[n] = Vl(e, { placement: n, boundary: i, rootBoundary: a, padding: o })[Uc(n)]), t);
  }, {});
  return Object.keys(p).sort(function (e, t) {
    return p[e] - p[t];
  });
}
function Ul(e) {
  if (Uc(e) === `auto`) return [];
  var t = Tl(e);
  return [Dl(e), t, Dl(t)];
}
function Wl(e) {
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
        _ = Uc(g) === g,
        v = c || (_ || !m ? [Tl(g)] : Ul(g)),
        y = [g].concat(v).reduce(function (e, n) {
          return e.concat(
            Uc(n) === `auto`
              ? Hl(t, {
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
        D = Uc(E),
        O = hl(E) === Dc,
        k = [`top`, Sc].indexOf(D) >= 0,
        A = k ? `width` : `height`,
        j = Vl(t, { placement: E, boundary: u, rootBoundary: d, altBoundary: f, padding: l }),
        M = k ? (O ? Cc : wc) : O ? Sc : `top`;
      b[A] > x[A] && (M = Tl(M));
      var N = Tl(M),
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
          ee = function (e) {
            var t = y.find(function (t) {
              var n = S.get(t);
              if (n)
                return n.slice(0, e).every(function (e) {
                  return e;
                });
            });
            if (t) return ((w = t), `break`);
          },
          I = F;
        I > 0 && ee(I) !== `break`;
        I--
      );
    t.placement !== w && ((t.modifiersData[r]._skip = !0), (t.placement = w), (t.reset = !0));
  }
}
var Gl = {
  name: `flip`,
  enabled: !0,
  phase: `main`,
  fn: Wl,
  requiresIfExists: [`offset`],
  data: { _skip: !1 },
};
function Kl(e, t, n) {
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
function ql(e) {
  return [`top`, Cc, Sc, wc].some(function (t) {
    return e[t] >= 0;
  });
}
function Jl(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    i = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    o = Vl(t, { elementContext: `reference` }),
    s = Vl(t, { altBoundary: !0 }),
    c = Kl(o, r),
    l = Kl(s, i, a),
    u = ql(c),
    d = ql(l);
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
var Yl = {
  name: `hide`,
  enabled: !0,
  phase: `main`,
  requiresIfExists: [`preventOverflow`],
  fn: Jl,
};
function Xl(e, t, n) {
  var r = Uc(e),
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
function Zl(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.offset,
    a = i === void 0 ? [0, 0] : i,
    o = Nc.reduce(function (e, n) {
      return ((e[n] = Xl(n, t.rects, a)), e);
    }, {}),
    s = o[t.placement],
    c = s.x,
    l = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[r] = o));
}
var Ql = { name: `offset`, enabled: !0, phase: `main`, requires: [`popperOffsets`], fn: Zl };
function $l(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = Bl({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: `absolute`,
    placement: t.placement,
  });
}
var eu = { name: `popperOffsets`, enabled: !0, phase: `read`, fn: $l, data: {} };
function tu(e) {
  return e === `x` ? `y` : `x`;
}
function nu(e) {
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
    g = Vl(t, { boundary: c, rootBoundary: l, padding: d, altBoundary: u }),
    _ = Uc(t.placement),
    v = hl(t.placement),
    y = !v,
    b = al(_),
    x = tu(b),
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
      var k = b === `y` ? `top` : wc,
        A = b === `y` ? Sc : Cc,
        j = b === `y` ? `height` : `width`,
        M = S[b],
        N = M + g[k],
        P = M - g[A],
        F = p ? -w[j] / 2 : 0,
        ee = v === `start` ? C[j] : w[j],
        I = v === `start` ? -w[j] : -C[j],
        L = t.elements.arrow,
        te = p && L ? Xc(L) : { width: 0, height: 0 },
        ne = t.modifiersData[`arrow#persistent`]
          ? t.modifiersData[`arrow#persistent`].padding
          : cl(),
        re = ne[k],
        ie = ne[A],
        R = ol(0, C[j], te[j]),
        z = y ? C[j] / 2 - F - R - re - E.mainAxis : ee - R - re - E.mainAxis,
        B = y ? -C[j] / 2 + F + R + ie + E.mainAxis : I + R + ie + E.mainAxis,
        V = t.elements.arrow && il(t.elements.arrow),
        ae = V ? (b === `y` ? V.clientTop || 0 : V.clientLeft || 0) : 0,
        H = D?.[b] ?? 0,
        oe = M + z - H - ae,
        se = M + B - H,
        ce = ol(p ? Gc(N, oe) : N, M, p ? Wc(P, se) : P);
      ((S[b] = ce), (O[b] = ce - M));
    }
    if (s) {
      var le = b === `x` ? `top` : wc,
        ue = b === `x` ? Sc : Cc,
        de = S[x],
        U = x === `y` ? `height` : `width`,
        fe = de + g[le],
        pe = de - g[ue],
        me = [`top`, wc].indexOf(_) !== -1,
        he = D?.[x] ?? 0,
        W = me ? fe : de - C[U] - w[U] - he + E.altAxis,
        ge = me ? de + C[U] + w[U] - he - E.altAxis : pe,
        _e = p && me ? sl(W, de, ge) : ol(p ? W : fe, de, p ? ge : pe);
      ((S[x] = _e), (O[x] = _e - de));
    }
    t.modifiersData[r] = O;
  }
}
var ru = {
  name: `preventOverflow`,
  enabled: !0,
  phase: `main`,
  fn: nu,
  requiresIfExists: [`offset`],
};
function iu(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function au(e) {
  return e === Ic(e) || !Rc(e) ? Ol(e) : iu(e);
}
function ou(e) {
  var t = e.getBoundingClientRect(),
    n = Kc(t.width) / e.offsetWidth || 1,
    r = Kc(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function su(e, t, n) {
  n === void 0 && (n = !1);
  var r = Rc(t),
    i = Rc(t) && ou(t),
    a = el(t),
    o = Yc(e, i, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Fc(t) !== `body` || Ml(a)) && (s = au(t)),
      Rc(t) ? ((c = Yc(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : a && (c.x = kl(a))),
    {
      x: o.left + s.scrollLeft - c.x,
      y: o.top + s.scrollTop - c.y,
      width: o.width,
      height: o.height,
    }
  );
}
function cu(e) {
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
function lu(e) {
  var t = cu(e);
  return Pc.reduce(function (e, n) {
    return e.concat(
      t.filter(function (e) {
        return e.phase === n;
      }),
    );
  }, []);
}
function uu(e) {
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
function du(e) {
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
var fu = { placement: `bottom`, modifiers: [], strategy: `absolute` };
function pu() {
  return ![...arguments].some(function (e) {
    return !(e && typeof e.getBoundingClientRect == `function`);
  });
}
function mu(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = t.defaultOptions,
    a = i === void 0 ? fu : i;
  return function (e, t, n) {
    n === void 0 && (n = a);
    var i = {
        placement: `bottom`,
        orderedModifiers: [],
        options: Object.assign({}, fu, a),
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
              reference: Lc(e) ? Pl(e) : e.contextElement ? Pl(e.contextElement) : [],
              popper: Pl(t),
            }));
          var s = lu(du([].concat(r, i.options.modifiers)));
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
            if (pu(t, n)) {
              ((i.rects = {
                reference: su(t, il(n), i.options.strategy === `fixed`),
                popper: Xc(n),
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
        update: uu(function () {
          return new Promise(function (e) {
            (c.forceUpdate(), e(i));
          });
        }),
        destroy: function () {
          (u(), (s = !0));
        },
      };
    if (!pu(e, t)) return c;
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
var hu = mu({ defaultModifiers: [Cl, eu, bl, Hc, Ql, Gl, ru, ml, Yl] }),
  gu = i((e, t) => {
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
  _u = e(a()),
  vu = e(gu()),
  yu = [],
  bu = function (e, t, n) {
    n === void 0 && (n = {});
    var r = G.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || `bottom`,
        strategy: n.strategy || `absolute`,
        modifiers: n.modifiers || yu,
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
            _u.flushSync(function () {
              s({
                styles: bc(
                  n.map(function (e) {
                    return [e, t.styles[e] || {}];
                  }),
                ),
                attributes: bc(
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
          return (0, vu.default)(r.current, e) ? r.current || e : ((r.current = e), e);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c],
      ),
      u = G.useRef();
    return (
      xc(
        function () {
          u.current && u.current.setOptions(l);
        },
        [l],
      ),
      xc(
        function () {
          if (!(e == null || t == null)) {
            var r = (n.createPopper || hu)(e, t, l);
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
  xu = function () {},
  Su = function () {
    return Promise.resolve(null);
  },
  Cu = [];
function wu(e) {
  var t = e.placement,
    n = t === void 0 ? `bottom` : t,
    r = e.strategy,
    i = r === void 0 ? `absolute` : r,
    a = e.modifiers,
    o = a === void 0 ? Cu : a,
    s = e.referenceElement,
    c = e.onFirstUpdate,
    l = e.innerRef,
    u = e.children,
    d = G.useContext(gc),
    f = G.useState(null),
    p = f[0],
    m = f[1],
    h = G.useState(null),
    g = h[0],
    _ = h[1];
  G.useEffect(
    function () {
      yc(l, p);
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
    y = bu(s || d, p, v),
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
          forceUpdate: S || xu,
          update: C || Su,
        };
      },
      [m, _, n, b, x, C, S],
    );
  return _c(u)(w);
}
function Tu(e) {
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
            u = F(a.placement.split(`-`), 1)[0],
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
var Eu = 5,
  Du = [
    {
      name: `flip`,
      options: {
        flipVariations: !1,
        padding: Eu,
        boundary: `clippingParents`,
        rootBoundary: `viewport`,
      },
    },
  ];
function Ou() {
  return null;
}
var ku = [0, 8];
function Au(e) {
  var t = e.children,
    n = t === void 0 ? Ou : t,
    r = e.offset,
    i = r === void 0 ? ku : r,
    a = e.placement,
    o = a === void 0 ? `bottom-start` : a,
    s = e.referenceElement,
    c = s === void 0 ? void 0 : s,
    l = e.modifiers,
    u = e.strategy,
    d = u === void 0 ? `fixed` : u,
    f = e.shouldFitViewport,
    p = f === void 0 ? !1 : f,
    m = F(i, 2),
    h = m[0],
    g = m[1],
    _ = (0, G.useMemo)(
      function () {
        var e = {
            name: `preventOverflow`,
            options: { padding: Eu, rootBoundary: p ? `viewport` : `document` },
          },
          t = { name: `offset`, options: { offset: [h, g] } },
          n = p ? Tu({ viewportPadding: Eu }) : [];
        return [].concat(Du, [e, t], M(n));
      },
      [h, g, p],
    ),
    v = (0, G.useMemo)(
      function () {
        return l == null ? _ : [].concat(M(_), M(l));
      },
      [_, l],
    );
  return G.createElement(wu, { modifiers: v, placement: o, strategy: d, referenceElement: c }, n);
}
var ju = `atlaskit-portal-container`,
  Mu = `body > .atlaskit-portal-container`,
  Nu = `atlaskit-portal`,
  Pu = function () {
    return document.body;
  },
  Fu = function () {
    var e = document.querySelector(Mu);
    if (!e) {
      var t,
        n = document.createElement(`div`);
      return (
        (n.className = ju),
        (n.style.display = `flex`),
        (t = Pu()) == null || t.appendChild(n),
        n
      );
    }
    return e;
  },
  Iu = function (e) {
    e.parentElement || Fu().appendChild(e);
  },
  Lu = function (e) {
    var t = document.createElement(`div`);
    return ((t.className = Nu), (t.style.zIndex = `${e}`), t);
  },
  Ru = function () {
    var e = document.querySelector(Mu);
    if (!e) {
      var t,
        n = document.createElement(`div`);
      return (
        (n.className = ju),
        (n.style.display = `flex`),
        (t = Pu()) == null || t.appendChild(n),
        n
      );
    }
    return e;
  },
  zu = function (e) {
    var t = Ru();
    t.contains(e) && t.removeChild(e);
  };
function Bu(e) {
  var t = e.zIndex,
    n = e.children,
    r = e.isClosed,
    i = r === void 0 ? !1 : r,
    a = (0, G.useMemo)(
      function () {
        return Lu(t);
      },
      [t],
    ),
    o = ls();
  return (
    Iu(a),
    (0, G.useEffect)(
      function () {
        W(`import_into_jsm_in_template_gallery_killswitch`) && i && zu(a);
      },
      [i, a],
    ),
    (0, G.useEffect)(
      function () {
        return function () {
          zu(a);
        };
      },
      [a],
    ),
    (0, _u.createPortal)(o ? G.createElement(cs, { defaultColorMode: o }, n) : n, a)
  );
}
var Vu = typeof window < `u` ? G.useLayoutEffect : G.useEffect,
  Hu = function () {
    return document !== void 0;
  },
  Uu = function (e) {
    if (Hu()) {
      var t = document.createElement(`div`);
      return ((t.className = Nu), (t.style.zIndex = `${e}`), t);
    }
  },
  Wu = function () {
    return document !== void 0;
  },
  Gu = function () {
    if (Wu()) {
      var e = document.querySelector(Mu);
      if (!e) {
        var t,
          n = document.createElement(`div`);
        return (
          (n.className = ju),
          (n.style.display = `flex`),
          (t = Pu()) == null || t.appendChild(n),
          n
        );
      }
      return e;
    }
  },
  Ku = function () {
    return document !== void 0;
  },
  qu = function (e) {
    if (Ku() && e) {
      var t;
      (t = Pu()) == null || t.removeChild(e);
    }
  };
function Ju(e) {
  var t = e.zIndex,
    n = e.children,
    r = e.isClosed,
    i = F((0, G.useState)(null), 2),
    a = i[0],
    o = i[1],
    s = ls();
  return (
    Vu(
      function () {
        if (W(`import_into_jsm_in_template_gallery_killswitch`)) {
          if (!r) {
            var e = Uu(t);
            o(e);
            var n = Gu();
            return !e || !n
              ? void 0
              : (n.appendChild(e),
                function () {
                  (n && (n.removeChild(e), !n.hasChildNodes() && qu(n)), o(null));
                });
          }
        } else {
          var i = Uu(t);
          o(i);
          var a = Gu();
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
      ? (0, _u.createPortal)(
          G.createElement(
            G.Suspense,
            { fallback: null },
            s ? G.createElement(cs, { defaultColorMode: s }, n) : n,
          ),
          a,
        )
      : null
  );
}
var Yu = function (e) {
    var t = F((0, G.useState)(!1), 2),
      n = t[0],
      r = t[1],
      i = F(
        (0, G.useState)(function () {
          return e === `layoutEffect` ? Vu : G.useEffect;
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
  Xu = `akPortalMount`,
  Zu = `akPortalUnmount`,
  Qu = {
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
  $u = function (e) {
    return Qu.hasOwnProperty(e) ? Qu[e] : null;
  },
  ed = function (e, t) {
    var n = { layer: $u(Number(t)), zIndex: t };
    return new CustomEvent(e, { detail: n });
  };
function td(e, t) {
  var n = ed(e, t);
  window.dispatchEvent(n);
}
var nd = function (e) {
  var t = Number(e);
  (0, G.useEffect)(
    function () {
      return (
        td(Xu, t),
        function () {
          td(Zu, t);
        }
      );
    },
    [t],
  );
};
function rd(e) {
  var t = e.zIndex,
    n = t === void 0 ? 0 : t,
    r = e.children,
    i = e.mountStrategy,
    a = i === void 0 ? `effect` : i,
    o = e.isClosed,
    s = o === void 0 ? !1 : o,
    c = Yu(a);
  return (
    nd(n),
    W(`platform_design_system_team_portal_logic_r18_fix`)
      ? G.createElement(Ju, { zIndex: n, isClosed: s }, r)
      : c
        ? G.createElement(Bu, { zIndex: n, isClosed: s }, r)
        : null
  );
}
var id = new Set(),
  ad = null;
function od() {
  ad ||
    ((ad = (0, wo.bindAll)(window, [
      { type: `dragend`, listener: sd },
      { type: `pointerdown`, listener: sd },
      {
        type: `pointermove`,
        listener: (function () {
          var e = 0;
          return function () {
            if (e < 20) {
              e++;
              return;
            }
            sd();
          };
        })(),
      },
    ])),
    Array.from(id).forEach(function (e) {
      e.onDragStart();
    }));
}
function sd() {
  var e;
  ((e = ad) == null || e(),
    (ad = null),
    Array.from(id).forEach(function (e) {
      e.onDragEnd();
    }));
}
function cd() {
  return (0, wo.bindAll)(window, [
    { type: `dragstart`, listener: od },
    { type: `dragenter`, listener: od },
  ]);
}
var ld = null;
function ud(e) {
  return (
    (ld ||= cd()),
    id.add(e),
    e.onRegister({ isDragging: ad !== null }),
    function () {
      if ((id.delete(e), id.size === 0)) {
        var t;
        ((t = ld) == null || t(), (ld = null));
      }
    }
  );
}
function dd(e) {
  var t = e || { top: 0, left: 0 };
  return {
    getBoundingClientRect: function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    },
    clientWidth: 0,
    clientHeight: 0,
  };
}
function fd(e, t) {
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
var pd = null;
function md() {
  pd != null && (window.clearTimeout(pd), (pd = null));
}
function hd(e, t) {
  (md(),
    (pd = window.setTimeout(function () {
      ((pd = null), e());
    }, t)));
}
var gd = null;
function _d(e) {
  var t = `waiting-to-show`;
  function n() {
    return !!(gd && gd.entry === e);
  }
  function r() {
    n() && (md(), (gd = null));
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
        ((t = `shown`), md());
        return;
      }
      if (t === `hide-animating`) {
        ((t = `shown`), md(), e.show({ isImmediate: !1 }));
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
          hd(function () {
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
      r = !!(gd && gd.isVisible()) && !n;
    ((gd &&= (md(), gd.entry.hide({ isImmediate: !0 }), gd.entry.done(), null)),
      (gd = { entry: e, isVisible: l }));
    function i() {
      ((t = `shown`), e.show({ isImmediate: r }));
    }
    if (r) {
      i();
      return;
    }
    ((t = `waiting-to-show`), hd(i, e.delay));
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
function vd() {
  var e = us();
  return function (t) {
    return `${e}-${t.toString()}`;
  };
}
function yd(e, t) {
  var n = vd();
  return t ? `${n(e)}` : void 0;
}
d();
var bd = {
    shortcutSegmentsContainer: `_zulpv77o _1e0c1txw _1q511b66 _85i5v77o`,
    shortcutSegment: `_11c8wadc _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p`,
  },
  xd = function (e) {
    var t = e.shortcut;
    return G.createElement(
      `div`,
      { className: j([bd.shortcutSegmentsContainer]) },
      t.map(function (e, t) {
        return G.createElement(`kbd`, { key: `${e}-${t}`, className: j([bd.shortcutSegment]) }, e);
      }),
    );
  };
d();
var Sd = (0, G.forwardRef)(function (e, t) {
  var n = e.style,
    r = e.className,
    i = e.children,
    a = e.placement,
    o = e.testId,
    s = e.onMouseOut,
    c = e.onMouseOver,
    l = e.id,
    u = e.shortcut;
  return G.createElement(
    `div`,
    { ref: t, style: n, "data-testid": o ? `${o}--wrapper` : void 0 },
    G.createElement(
      `div`,
      {
        role: `tooltip`,
        className: j([`_80om73ad`, r]),
        onMouseOut: s,
        onMouseOver: c,
        "data-placement": a,
        "data-testid": o,
        id: l,
      },
      i,
      u && G.createElement(xd, { shortcut: u }),
    ),
  );
});
((Sd.displayName = `TooltipPrimitive`), d());
var Cd = {
    base: `_2rkofajl _11c8wadc _vchhusvi _p12fp3fh _bfhk1aqn _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna`,
    truncate: `_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c`,
  },
  wd = (0, G.forwardRef)(function (e, t) {
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
    return G.createElement(
      Sd,
      {
        ref: t,
        style: n,
        className: j([Cd.base, a && Cd.truncate, r]),
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
wd.displayName = `TooltipContainer`;
function Td(e, t) {
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
function Ed(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Td(Object(n), !0).forEach(function (t) {
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Td(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Dd = ui.tooltip(),
  Od = { componentName: `tooltip`, packageName: `@atlaskit/tooltip`, packageVersion: `21.1.6` },
  kd = { top: `bottom`, bottom: `top`, left: `right`, right: `left` },
  Ad = function (e) {
    return e.split(`-`)[0];
  };
function jd(e) {
  var t = e.children,
    n = e.position,
    r = n === void 0 ? `bottom` : n,
    i = e.mousePosition,
    a = i === void 0 ? `bottom` : i,
    o = e.content,
    s = e.truncate,
    c = s === void 0 ? !1 : s,
    u = e.component,
    d = u === void 0 ? wd : u,
    f = e.tag,
    p = f === void 0 ? `div` : f,
    m = e.testId,
    h = e.delay,
    g = h === void 0 ? 300 : h,
    _ = e.onShow,
    v = _ === void 0 ? Vn : _,
    y = e.onHide,
    b = y === void 0 ? Vn : y,
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
    P = e.UNSAFE_shouldAlwaysFadeIn,
    ee = P === void 0 ? !1 : P,
    I = e.UNSAFE_shouldRenderToParent,
    L = I === void 0 ? !1 : I,
    te = r === `mouse` || r === `mouse-y` || r === `mouse-x`,
    ne = te ? a : r,
    re = sr(Ed({ fn: v, action: `displayed`, analyticsData: E }, Od)),
    ie = sr(Ed({ fn: b, action: `hidden`, analyticsData: E }, Od)),
    R = (0, G.useRef)(null),
    z = F((0, G.useState)(`hide`), 2),
    B = z[0],
    V = z[1],
    ae = (0, G.useRef)(null),
    H = (0, G.useRef)(null),
    oe = function (e) {
      ((H.current = e), (ae.current = e ? e.firstElementChild : null));
    },
    se = (0, G.useCallback)(function (e) {
      ae.current = e;
    }, []),
    ce = Us(B),
    le = Us(re),
    ue = Us(ie),
    de = Us(g),
    U = Us(x),
    fe = (0, G.useRef)(!1),
    pe = Us(ee),
    me = (0, G.useCallback)(function (e) {
      ((R.current = e), (fe.current = !1));
    }, []),
    he = (0, G.useCallback)(
      function () {
        R.current && (fe.current && ue.current(), (R.current = null), (fe.current = !1), V(`hide`));
      },
      [ue],
    ),
    ge = (0, G.useCallback)(
      function () {
        R.current &&= (R.current.abort(), fe.current && ue.current(), null);
      },
      [ue],
    );
  (0, G.useEffect)(
    function () {
      return function () {
        R.current && ge();
      };
    },
    [ge],
  );
  var _e = (0, G.useRef)(!1);
  (0, G.useEffect)(function () {
    return ud({
      onRegister: function (e) {
        _e.current = e.isDragging;
      },
      onDragStart: function () {
        var e;
        ((e = R.current) == null || e.requestHide({ isImmediate: !0 }), (_e.current = !0));
      },
      onDragEnd: function () {
        _e.current = !1;
      },
    });
  }, []);
  var K = (0, G.useCallback)(
    function (e) {
      var t;
      if (!_e.current) {
        if ((R.current && !R.current.isActive() && ge(), R.current && R.current.isActive())) {
          R.current.keep();
          return;
        }
        (U.current && !((t = U.current) != null && t.call(U))) ||
          me(
            _d({
              source: e,
              delay: de.current,
              show: function (e) {
                var t = e.isImmediate;
                (fe.current || ((fe.current = !0), le.current()),
                  V(t ? `show-immediate` : `fade-in`));
              },
              hide: function (e) {
                e.isImmediate ? V(`hide`) : V(`before-fade-out`);
              },
              done: he,
              shouldAlwaysFadeIn: W(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
                ? pe.current
                : !1,
            }),
          );
      }
    },
    [U, de, he, me, ge, le, pe],
  );
  (Hs({
    onClose: (0, G.useCallback)(
      function () {
        var e;
        (e = R.current) == null || e.requestHide({ isImmediate: !0 });
      },
      [R],
    ),
    isDisabled: B === `hide` || B === `fade-out`,
  }),
    (0, G.useEffect)(
      function () {
        return B === `hide`
          ? Vn
          : (B === `before-fade-out` && V(`fade-out`),
            (0, wo.bind)(window, {
              type: `scroll`,
              listener: function () {
                R.current && R.current.requestHide({ isImmediate: !0 });
              },
              options: { capture: !0, passive: !0, once: !0 },
            }));
      },
      [B],
    ));
  var ve = (0, G.useCallback)(
      function () {
        T && R.current && R.current.requestHide({ isImmediate: !0 });
      },
      [T],
    ),
    q = (0, G.useCallback)(
      function () {
        C && R.current && R.current.requestHide({ isImmediate: !0 });
      },
      [C],
    ),
    ye = (0, G.useCallback)(
      function (e) {
        (H.current && e.target === H.current) ||
          e.defaultPrevented ||
          (e.preventDefault(),
          K(
            te
              ? {
                  type: `mouse`,
                  mouse: W(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
                    ? void 0
                    : dd({ left: e.clientX, top: e.clientY }),
                  clientX: e.clientX,
                  clientY: e.clientY,
                }
              : { type: `keyboard` },
          ));
      },
      [te, K],
    ),
    be = (0, G.useCallback)(function (e) {
      (H.current && e.target === H.current) ||
        e.defaultPrevented ||
        (e.preventDefault(), R.current && R.current.requestHide({ isImmediate: !1 }));
    }, []),
    xe = te
      ? function (e) {
          var t;
          (t = R.current) != null &&
            t.isActive() &&
            (W(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ||
              (R.current.mousePosition = dd({ left: e.clientX, top: e.clientY })),
            (R.current.mousePos = { clientX: e.clientX, clientY: e.clientY }));
        }
      : void 0,
    Se = (0, G.useCallback)(function () {
      if (R.current && R.current.isActive()) {
        R.current.keep();
        return;
      }
    }, []),
    Ce = (0, G.useCallback)(
      function (e) {
        try {
          if (!e.target.matches(`:focus-visible`)) return;
        } catch {}
        K({ type: `keyboard` });
      },
      [K],
    ),
    we = (0, G.useCallback)(function () {
      R.current && R.current.requestHide({ isImmediate: !1 });
    }, []),
    Te = (0, G.useCallback)(
      function (e) {
        e === `exiting` &&
          ce.current === `fade-out` &&
          R.current &&
          R.current.finishHideAnimation();
      },
      [ce],
    ),
    Ee = p,
    De = B !== `hide` && !!o,
    Oe = !M && De,
    ke = B !== `hide` && B !== `fade-out`,
    Ae = (0, G.useCallback)(function () {
      var e;
      (e = R.current) == null || e.requestHide({ isImmediate: !0 });
    }, []);
  qs({ isOpen: De && ke, onClose: Ae });
  var je = function () {
      var e, t;
      return te &&
        (e = R.current) != null &&
        e.mousePos &&
        ae.current &&
        W(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
        ? fd(R.current.mousePos, { targetElement: ae.current, tooltipPosition: r })
        : te &&
            (t = R.current) != null &&
            t.mousePosition &&
            !W(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
          ? R.current?.mousePosition
          : ae.current || void 0;
    },
    Me = yd(`tooltip`, Oe),
    Ne = {
      onMouseOver: ye,
      onMouseOut: be,
      onMouseMove: xe,
      onMouseDown: ve,
      onClick: q,
      onFocus: Ce,
      onBlur: we,
    };
  m && (Ne[`data-testid`] = `${m}--container`);
  var Pe = typeof t == `function`;
  (0, G.useEffect)(
    function () {
      if (!Pe) {
        var e = ae.current;
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
          { "data-testid": m ? `${m}-hidden` : void 0, hidden: !0, id: Me },
          typeof o == `function` ? o({}) : o,
        )
      : null,
    Ie = L && W(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ? G.Fragment : Md;
  return G.createElement(
    G.Fragment,
    null,
    typeof t == `function`
      ? G.createElement(
          G.Fragment,
          null,
          t(Ed(Ed({}, Ne), {}, { "aria-describedby": Me, ref: se })),
          Fe,
        )
      : G.createElement(Ee, l({}, Ne, { ref: oe, role: `presentation` }), t, Fe),
    De
      ? G.createElement(
          Ie,
          null,
          G.createElement(Au, { placement: ne, referenceElement: je(), strategy: O }, function (e) {
            var t = e.ref,
              n = e.style,
              r = e.update,
              i = e.placement,
              a = te ? void 0 : kd[Ad(i)];
            return G.createElement(
              cc,
              { appear: !0 },
              ke &&
                G.createElement(
                  hc,
                  {
                    distance: `constant`,
                    entranceDirection: a,
                    exitDirection: a,
                    onFinish: Te,
                    duration: B === `show-immediate` ? `none` : `medium`,
                  },
                  function (e) {
                    var i = e.className;
                    return G.createElement(
                      d,
                      {
                        ref: t,
                        className: `Tooltip ${i}`,
                        style: Ed(Ed({}, n), A && { pointerEvents: `none` }),
                        truncate: c,
                        placement: ne,
                        testId: je() ? m : m && `${m}--unresolved`,
                        onMouseOut: be,
                        onMouseOver: Se,
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
var Md = function (e) {
  var t = e.children;
  return G.createElement(rd, { zIndex: Dd }, t);
};
d();
var Nd = e(Bs()),
  Pd = e(Vs()),
  Fd = [
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
  Id = {
    buttonWrapper: `_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke`,
    sortIconHiddenWrapper: `_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n`,
    sortIconVisibleWrapper: `_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66`,
    hideIconHeaderWrapper: `_tzy4idpf _18u010v4`,
    visibleHeaderWrapper: `_tzy4kb7n _u5f31b66`,
  },
  Ld = { headCellContainer: `_1e0c1txw _4cvr1h6o`, text: `_11c8wadc _syazazsu _k48pwu06` },
  Rd = function (e) {
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
      v = P(e, Fd),
      y = F((0, G.useState)(!1), 2),
      b = y[0],
      x = y[1],
      S = F((0, G.useState)(!1), 2),
      C = S[0],
      w = S[1],
      T = b || c === u || o !== void 0 || C,
      E = T && _,
      D = !_ || T || (_ && !C),
      O = (0, G.useCallback)(
        function () {
          w?.(!0);
        },
        [w],
      ),
      k = (0, G.useCallback)(
        function () {
          w?.(!1);
        },
        [w],
      ),
      A = (0, G.useCallback)(
        function () {
          x(!0);
        },
        [x],
      ),
      M = (0, G.useCallback)(
        function () {
          x(!1);
        },
        [x],
      ),
      N = G.createElement(
        fa,
        { xcss: Ld.headCellContainer, onMouseEnter: A, onMouseLeave: M, onFocus: O, onBlur: k },
        G.createElement(
          jd,
          { content: o === `ASC` ? f : m },
          G.createElement(
            $a,
            { onClick: s, xcss: Id.buttonWrapper, "aria-roledescription": g },
            G.createElement(
              Da,
              { xcss: E ? Id.hideIconHeaderWrapper : Id.visibleHeaderWrapper },
              G.createElement(`span`, { className: j([Ld.text]) }, t),
            ),
            D &&
              G.createElement(
                Da,
                { xcss: T ? Id.sortIconVisibleWrapper : Id.sortIconHiddenWrapper },
                o === `ASC`
                  ? G.createElement(Pd.default, {
                      label: ``,
                      color: `var(--ds-text-subtle, #505258)`,
                      testId: r && `${r}--up--icon`,
                    })
                  : G.createElement(Nd.default, {
                      label: ``,
                      color: `var(--ds-text-subtle, #505258)`,
                      testId: r && `${r}--down--icon`,
                    }),
              ),
          ),
        ),
      );
    return G.createElement(
      zs,
      l({ style: n, testId: r && `${r}--head--cell`, ref: typeof i == `string` ? null : i }, v, {
        isSortable: a,
        sortOrder: o,
      }),
      a ? N : t,
    );
  },
  zd = [`isRanking`, `refHeight`, `refWidth`];
function Bd(e, t, n) {
  return ((t = R(t)), I(e, Vd() ? Reflect.construct(t, n || [], R(e).constructor) : t.apply(e, n)));
}
function Vd() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Vd = function () {
    return !!e;
  })();
}
var Hd = D(
    (function (e) {
      function t() {
        return (L(this, t), Bd(this, t, arguments));
      }
      return (
        ne(t, e),
        N(t, [
          {
            key: `render`,
            value: function () {
              var e = this.props,
                t = e.isRanking;
              e.refHeight;
              var n = e.refWidth,
                r = P(e, zd),
                i = x(t, n);
              return G.createElement(Rd, l({ inlineStyles: i }, r));
            },
          },
        ])
      );
    })(G.Component),
  ),
  Ud = [`cells`],
  Wd = [
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
function Gd(e, t, n) {
  return ((t = R(t)), I(e, Kd() ? Reflect.construct(t, n || [], R(e).constructor) : t.apply(e, n)));
}
function Kd() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Kd = function () {
    return !!e;
  })();
}
var qd = (function (e) {
  function t(e) {
    var n;
    return (L(this, t), (n = Gd(this, t, [e])), (n.state = { activeSortButtonId: null }), n);
  }
  return (
    ne(t, e),
    N(t, [
      {
        key: `UNSAFE_componentWillMount`,
        value: function () {
          _(this.props.sortKey, this.props.head);
        },
      },
      {
        key: `UNSAFE_componentWillReceiveProps`,
        value: function (e) {
          (this.props.sortKey !== e.sortKey || this.props.head !== e.head) && _(e.sortKey, e.head);
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
            u = t.testId,
            d = this.state.activeSortButtonId;
          if (!n) return null;
          var f = c ? Hd : Rd,
            p = n.cells,
            m = P(n, Ud);
          return G.createElement(
            Rs,
            l({}, m, { isRanking: s, testId: u && `${u}--head` }),
            G.createElement(
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
                  C = P(t, Wd),
                  w = `head-cell-${n}`;
                return G.createElement(
                  f,
                  l(
                    {
                      colSpan: m,
                      content: h,
                      isFixedSize: a,
                      isIconOnlyHeader: _,
                      isSortable: !!v,
                      isRanking: s,
                      key: y || n,
                      headCellId: w,
                      activeSortButtonId: d,
                      onClick: function () {
                        (e.setState({ activeSortButtonId: w }), v && o(t)());
                      },
                      testId: x || u,
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
})(G.Component);
Nt();
var Jd = [`isRankable`, `isRanking`, `onRankStart`, `onRankEnd`, `isRankingDisabled`];
function Yd(e) {
  switch (e) {
    case m:
      return `ASC`;
    case `ASC`:
      return m;
    default:
      return e;
  }
}
var Xd = function (e) {
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
      m = e.isFixedSize,
      v = m === void 0 ? !1 : m,
      y = e.rowsPerPage,
      x = y === void 0 ? 1 / 0 : y,
      S = e.onSetPage,
      C = S === void 0 ? Vn : S,
      T = e.onSort,
      E = T === void 0 ? Vn : T,
      D = e.page,
      O = D === void 0 ? 1 : D,
      k = e.emptyView,
      A = e.isRankable,
      j = A === void 0 ? !1 : A,
      M = e.isRankingDisabled,
      N = M === void 0 ? !1 : M,
      P = e.onRankStart,
      ee = P === void 0 ? Vn : P,
      I = e.onRankEnd,
      L = I === void 0 ? Vn : I,
      te = e.loadingSpinnerSize,
      ne = e.paginationi18n,
      re =
        ne === void 0
          ? { prev: `Previous Page`, next: `Next Page`, label: `Pagination`, pageLabel: `Page` }
          : ne,
      ie = F((0, G.useState)(!1), 2),
      R = ie[0],
      z = ie[1],
      B = (0, G.useRef)(null),
      V = ir({
        fn: E,
        action: `sorted`,
        componentName: `dynamicTable`,
        packageName: `@atlaskit/dynamic-table`,
        packageVersion: `18.3.28`,
      }),
      ae = ir({
        fn: L,
        action: `ranked`,
        componentName: `dynamicTable`,
        packageName: `@atlaskit/dynamic-table`,
        packageVersion: `18.3.28`,
      });
    (0, G.useEffect)(
      function () {
        (_(a, n), g(n));
      },
      [a, n],
    );
    var H = function (e) {
        return function () {
          var t = e.key;
          if (t) {
            if (V && j && t === a && o === `DESC`) {
              V({ key: null, sortOrder: null, item: e });
              return;
            }
            var n = t === a ? Yd(o) : `ASC`;
            V && V({ key: t, item: e, sortOrder: n });
          }
        };
      },
      oe = function (e, t) {
        C(e, t);
      },
      se = function (e) {
        (z(!0), ee(e));
      },
      ce = function (e) {
        (z(!1), ae(e));
      },
      le = function () {
        return te || (w(i || [], O, x).length > 2 ? b : h);
      },
      ue = function () {
        return p ? G.createElement(hi, { testId: l }) : k && G.createElement(gi, { testId: l }, k);
      },
      de = i && i.length,
      U,
      fe = !1;
    (u && Number.isInteger(u) && x && de && de <= u
      ? ((U = Math.ceil(u / x)), (fe = !0))
      : (U = de && x ? Math.ceil(de / x) : 0),
      (U = U < 1 ? 1 : U));
    var pe = O > U ? U : O,
      me = !!de,
      he = le(),
      W = ue();
    return G.createElement(
      G.Fragment,
      null,
      G.createElement(
        Hi,
        {
          isLoading: p && me,
          spinnerSize: he,
          targetRef: function () {
            return B.current;
          },
          testId: l,
          loadingLabel: s,
        },
        G.createElement(
          fi,
          { isFixedSize: v, "aria-label": d, hasDataRow: me, testId: l, isLoading: p },
          !!t && G.createElement(pi, null, t),
          n &&
            G.createElement(qd, {
              head: n,
              onSort: H,
              sortKey: a,
              sortOrder: o,
              isRanking: R,
              isRankable: j,
              testId: l,
            }),
          me &&
            G.createElement(Qd, {
              ref: B,
              highlightedRowIndex: r,
              rows: i,
              head: n,
              sortKey: a,
              sortOrder: o,
              rowsPerPage: x,
              page: pe,
              isFixedSize: v || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: fe,
              testId: l,
              isRankable: j,
              isRanking: R,
              onRankStart: se,
              onRankEnd: ce,
              isRankingDisabled: N || p || !1,
            }),
        ),
      ),
      U <= 1
        ? null
        : G.createElement(
            mi,
            { testId: l },
            G.createElement(Ms, {
              value: pe,
              onChange: oe,
              total: U,
              i18n: re,
              isDisabled: p,
              testId: l,
            }),
          ),
      !me &&
        W &&
        G.createElement(Fi, { isLoading: p, spinnerSize: `large`, testId: l, loadingLabel: s }, W),
    );
  },
  Zd = (0, G.lazy)(function () {
    return Mt(
      () => import(`./body-DL6wfl37.js`),
      __vite__mapDeps([6, 1, 7, 4, 8, 9, 10]),
      import.meta.url,
    );
  }),
  Qd = (0, G.forwardRef)(function (e, t) {
    var n = e.isRankable,
      r = n === void 0 ? !1 : n,
      i = e.isRanking,
      a = e.onRankStart,
      o = e.onRankEnd,
      s = e.isRankingDisabled,
      c = P(e, Jd),
      u = r && !c.sortKey,
      d = F((0, G.useState)(!1), 2),
      f = d[0],
      p = d[1];
    (0, G.useEffect)(
      function () {
        u && p(!0);
      },
      [u],
    );
    var m = G.createElement(Ci, l({ ref: t }, c));
    return u && f
      ? G.createElement(
          Ei,
          { fallback: m },
          G.createElement(
            G.Suspense,
            { fallback: m },
            G.createElement(
              Zd,
              l({ ref: t }, c, {
                isRanking: i,
                onRankStart: a,
                onRankEnd: o,
                isRankingDisabled: s,
              }),
            ),
          ),
        )
      : m;
  });
function $d(e, t, n) {
  return ((t = R(t)), I(e, ef() ? Reflect.construct(t, n || [], R(e).constructor) : t.apply(e, n)));
}
function ef() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ef = function () {
    return !!e;
  })();
}
var tf = (function (e) {
  function t() {
    var e;
    L(this, t);
    var n = [...arguments];
    return (
      (e = $d(this, t, [].concat(n))),
      z(e, `state`, {
        page: e.props.defaultPage,
        sortKey: e.props.defaultSortKey,
        sortOrder: e.props.defaultSortOrder,
        rows: e.props.rows,
      }),
      z(e, `onSetPageHandler`, function (t, n) {
        var r = e.props.onSetPage;
        r && (r(t, n), e.setState({ page: t }));
      }),
      z(e, `onSortHandler`, function (t, n) {
        var r = t.key,
          i = t.item,
          a = t.sortOrder,
          o = e.props.onSort;
        o && (o({ key: r, item: i, sortOrder: a }, n), e.setState({ sortKey: r, sortOrder: a }));
      }),
      z(e, `onRankEndIfExistsHandler`, function (t) {
        e.props.onRankEnd && e.props.onRankEnd(t);
      }),
      z(e, `onRankEndHandler`, function (t) {
        var n = t.destination,
          r = e.state,
          i = r.rows,
          a = r.page,
          o = e.props.rowsPerPage;
        if (!n || !i) {
          e.onRankEndIfExistsHandler(t);
          return;
        }
        var s = v(t, i, a, o);
        (e.setState({ rows: s }), e.onRankEndIfExistsHandler(t));
      }),
      e
    );
  }
  return (
    ne(t, e),
    N(t, [
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
          return G.createElement(Xd, {
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
(z(tf, `defaultProps`, {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Vn,
  onSort: Vn,
  rowsPerPage: 1 / 0,
}),
  d());
var nf = [
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
function rf(e, t) {
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
function af(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? rf(Object(n), !0).forEach(function (t) {
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : rf(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var of = { componentName: `textArea`, packageName: `@atlaskit/textarea`, packageVersion: `8.2.10` },
  sf = 20,
  cf = 16,
  lf = 2,
  uf = 6,
  df = `0.2s`,
  ff = 2,
  pf = {
    standard: `_1dqonqa1 _kp82rsbi _1ltx1j9a _1bqsbk0g _z1pvby5v _19wtrsbi _12yml4ek _1l02v77o _11zpv77o _141f1v6z _daj71v6z _olc612x7 _14ji12x7 _7ba01v6z _1kod1v6z _858u1v1w _jomrr01l _7ehivyy1 _186j1v1w _qu18by5v`,
    subtle: `_1dqonqa1 _kp821j28 _1ltx1j28 _19wtrsbi _12yml4ek _1l02v77o _11zpv77o _141f1v6z _daj71v6z _olc612x7 _14ji12x7 _1kod1v6z _7ba01v6z _858u1v1w _jomrr01l _7ehivyy1`,
    none: `_1dqoglyw _kp821j28 _1ltx1j28 _19wt1j28 _12ym1j28 _1l02v77o _daj712x7 _11zpv77o _141f12x7 _olc612x7 _1kod12x7 _14ji12x7 _7ba012x7 _858u1j28 _jomr1j28 _7ehi3sij`,
  },
  mf = { default: `_11c81d4k _1tn2fhey`, monospace: `_11c81d4k _ect4zzfg _1tn2fhey _14md1vhz` },
  hf = {
    horizontal: `_14zg1e08`,
    vertical: `_14zg1e54`,
    auto: `_14zg1hrf`,
    smart: `_14zgglyw`,
    none: `_14zgglyw`,
  },
  gf = function (e) {
    e.style.height = `auto`;
    var t = ff,
      n = e.scrollHeight + t * 2;
    e.style.height = `${n}px`;
  },
  _f = (0, G.forwardRef)(function (e, t) {
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
      h = m === void 0 ? !1 : m,
      g = e.isInvalid,
      _ = g === void 0 ? !1 : g,
      v = e.isMonospaced,
      y = v === void 0 ? !1 : v,
      b = e.minimumRows,
      x = b === void 0 ? 2 : b,
      S = e.testId,
      C = e.maxHeight,
      w = C === void 0 ? `50vh` : C,
      T = e.onBlur,
      E = e.onFocus,
      D = e.onChange,
      O = e.value,
      A = e.style,
      M = P(e, nf),
      N = (0, G.useMemo)(
        function () {
          return o === `none` ? 2 : 1;
        },
        [o],
      );
    (0, G.useEffect)(
      function () {
        var e = n.current;
        i === `smart` && e && gf(e);
      },
      [i, O],
    );
    var F = ir(
        af(
          {
            fn: function (e) {
              T && T(e);
            },
            action: `blurred`,
          },
          of,
        ),
      ),
      ee = ir(
        af(
          {
            fn: function (e) {
              E && E(e);
            },
            action: `focused`,
          },
          of,
        ),
      ),
      I = function (e) {
        ((n.current = e),
          t && B(t) === `object` && (t.current = e),
          t && typeof t == `function` && t(e));
      },
      L = (0, G.useCallback)(
        function (e) {
          var t = n.current;
          (i === `smart` && t && gf(t), D && D(e));
        },
        [D, i],
      ),
      te = { "data-invalid": _ || void 0, "data-compact": c || void 0, "data-testid": S || void 0 };
    return G.createElement(
      `textarea`,
      l(
        {},
        te,
        {
          value: O,
          disabled: h,
          readOnly: p,
          required: d,
          ref: I,
          onChange: L,
          onBlur: F,
          onFocus: ee,
          rows: x,
        },
        M,
        {
          className: j([
            `_19pkidpf _2hwxidpf _otyridpf _18u0idpf _16jlkb7n _1o9zkb7n _i0dl1osq _2rkofajl _11c8fhey _12ji1r31 _1qu2glyw _12y31o36 _1reo1wug _18m91wug _v5641gs0 _189ee4h9 _1e0c1ule _vchhusvi _1bsb1osq _1ul9idpf _p12f1osq _kqswh2mm _syazi7uo _slp31hna _153g1bqt _usy41j9a _1a2sizbr _vbqb1gmx _j5dh13gf _cfjqkb7n _k3o7n7od _1goxglyw _13xeglyw _1fra1bqt _ibjdl4ek _6zpvizbr _19k0by5v _1idr1rpy _1lep1gmx _nmhq1fiz _1n388sxn _1luh1v1w _ndzbr01l _1vj0vyy1`,
            W(`platform-dst-shape-theme-default`) && `_2rko1qi0`,
            pf[o],
            mf[y ? `monospace` : `default`],
            hf[i],
            `_uzq71d1b _16lw1cn1`,
          ]),
          style: af(
            af({}, A),
            {},
            {
              maxHeight: w,
              "--_19uzta9": k(`background-color ${df} ease-in-out,
               border-color ${df} ease-in-out`),
              "--_dqsusn": k(`${cf * x + lf * 2 + N * 2}px`),
              "--_n9nqvh": k(`${sf * x + uf * 2 + N * 2}px`),
            },
          ),
        },
      ),
    );
  }),
  vf = (0, G.memo)(
    (0, G.forwardRef)(function (e, t) {
      return G.createElement(_f, l({ ref: t }, e));
    }),
  );
((vf.displayName = `TextArea`), d());
var yf = [
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
function bf(e, t) {
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
function xf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? bf(Object(n), !0).forEach(function (t) {
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : bf(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Sf = { invalid: `_msj6gir2`, disabled: `_6up518qt` },
  Cf = { componentName: `textField`, packageName: `@atlaskit/textfield`, packageVersion: `8.3.2` },
  wf = {
    standard: `_1h6dby5v _bfhkby5v _syaz1gmx _80om13gf`,
    subtle: `_1h6d1j28 _bfhk1j28 _syaz1gmx _80om13gf`,
    none: `_1h6d1j28 _bfhk1j28 _syaz1gmx _80om13gf`,
  },
  Tf = {
    standard: `_1p9x1v1w _qao9r01l _q433vyy1`,
    subtle: `_1p9x1v1w _qao9r01l _q433vyy1`,
    none: `_1p9x1j28 _qao91j28 _q4333sij`,
  },
  Ef = {
    standard: `_4cvxrsbi _irr3l4ek`,
    subtle: `_4cvxrsbi _irr3l4ek`,
    none: `_4cvx1j28 _irr31j28`,
  },
  Df = {
    standard: `_1h6drsbi _1dqonqa1 _syazi7uo _80om1kdv _bfhk1j9a _msj6gir2`,
    subtle: `_1h6d1j28 _1dqonqa1 _syazi7uo _80om1kdv _16hg1j28 _msj6gir2`,
    none: `_1h6d1j28 _1dqoglyw _syazi7uo _80om1kdv _16hg1j28 _msj6gir2`,
  },
  Of = { xsmall: 80, small: 160, medium: 240, large: 320, xlarge: 480 },
  kf = function (e) {
    return e ? (e in Of ? `${Of[e]}px` : `${+e}px`) : `100%`;
  },
  Af = {
    standard: `_1dqonqa1 _1q51e4h9 _85i5e4h9 _bozgidpf _y4tiidpf`,
    subtle: `_1dqonqa1 _1q51e4h9 _85i5e4h9 _bozgidpf _y4tiidpf`,
    none: `_1dqoglyw`,
  },
  jf = (0, G.forwardRef)(function (e, t) {
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
      O = P(e, yf),
      k = (0, G.useRef)(null),
      A = ir(
        xf(
          {
            fn: function (e) {
              C && C(e);
            },
            action: `focused`,
          },
          Cf,
        ),
      ),
      M = ir(
        xf(
          {
            fn: function (e) {
              x && x(e);
            },
            action: `blurred`,
          },
          Cf,
        ),
      ),
      N = (0, G.useCallback)(
        function (e) {
          (e.target.tagName !== `INPUT` && e.preventDefault(),
            k && k.current && !d && document.activeElement !== k.current && k.current.focus(),
            w && w(e));
        },
        [w, d],
      ),
      F = (0, G.useCallback)(
        function (e) {
          ((k.current = e),
            t && (B(t) === `object` && (t.current = e), typeof t == `function` && t(e)));
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
        onMouseDown: N,
        style: { maxWidth: `${kf(D)}` },
        className: j([
          `_16jlkb7n _1o9zkb7n _i0dl1osq _11c8fhey _1reo15vq _18m915vq _v564r5cv _189ee4h9 _1e0c1txw _vchhusvi _4cvr1h6o _1bah1yb4 _lcxv1wug _s7n4jp4b _slp31hna _1tnqfajl`,
          W(`platform-dst-shape-theme-default`) && `_1tnq1qi0`,
          Df[r],
          Af[r],
          !d && Tf[r],
          !d && Ef[r],
          d && Sf.disabled,
          d && wf[r],
          p && Sf.invalid,
          p && `_1h6d1bqt _4cvx1bqt _16qsizbr _1dbzizbr _uk1sr01l`,
          i,
        ]),
      },
      o,
      G.createElement(
        `input`,
        l({}, O, {
          "aria-invalid": p || void 0,
          "data-compact": c || void 0,
          "data-ds--text-field--input": !0,
          "data-monospaced": h || void 0,
          "data-testid": E,
          disabled: d,
          name: b,
          onBlur: M,
          onChange: S,
          onFocus: A,
          placeholder: T,
          readOnly: _,
          ref: F,
          required: y,
          className: j([
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
function Mf(e) {
  return ee(e) || re(e) || te(e) || ie();
}
var Nf = (0, G.createContext)(null),
  Pf = (0, G.createContext)(null);
d();
function Ff(e, t) {
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
function If(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ff(Object(n), !0).forEach(function (t) {
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ff(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Lf = { componentName: `tabs`, packageName: `@atlaskit/tabs`, packageVersion: `19.0.5` },
  Rf = function (e) {
    var t = e.tabPanel,
      n = e.index,
      r = e.isSelected,
      i = e.tabsId;
    return (
      t &&
      G.createElement(
        Pf.Provider,
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
  zf = function (e) {
    var t = e.shouldUnmountTabPanelOnChange,
      n = t === void 0 ? !1 : t,
      r = e.selected,
      i = e.defaultSelected,
      a = e.onChange,
      o = e.id,
      s = e.analyticsContext,
      c = e.children,
      l = e.testId,
      u = F((0, G.useState)(r || i || 0), 2),
      d = u[0],
      f = u[1],
      p = r === void 0 ? d : r,
      m = Mf(
        G.Children.toArray(c).filter(function (e) {
          return !!e;
        }),
      ),
      h = m[0],
      g = m.slice(1),
      _ = (0, G.useRef)(new Set([p]));
    _.current.has(p) || _.current.add(p);
    var v = ir(
        If(
          {
            fn: (0, G.useCallback)(
              function (e, t) {
                (a && a(e, t), f(e));
              },
              [a],
            ),
            action: `clicked`,
            analyticsData: s,
          },
          Lf,
        ),
      ),
      y = n
        ? Rf({ tabPanel: g[p], index: p, isSelected: !0, tabsId: o })
        : Array.from(_.current).map(function (e) {
            return Rf({ tabPanel: g[e], index: e, isSelected: e === p, tabsId: o });
          });
    return G.createElement(
      `div`,
      {
        "data-testid": l,
        className: j([
          `_1e0c1txw _p12f1osq _1tkeidpf _i0dl1osq _2lx21bp4 _16jlkb7n`,
          `_1c3y1txw _ftfaidpf _18i0kb7n _185bglyw`,
        ]),
      },
      G.createElement(Nf.Provider, { value: { selected: p, onChange: v, tabsId: o } }, h),
      G.createElement(G.Fragment, null, y),
    );
  };
function Bf() {
  var e = (0, G.useContext)(Pf);
  if (e == null) throw Error(`@atlaskit/tabs:  A TabPanel must have a Tabs parent.`);
  return e;
}
var Vf = function (e) {
    var t = e.children,
      n = e.testId,
      r = Bf(),
      i = r.role,
      a = r.id,
      o = r.hidden,
      s = r[`aria-labelledby`],
      c = r.tabIndex;
    return G.createElement(
      Ya,
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
  Hf = (0, G.createContext)(null);
function Uf() {
  var e = (0, G.useContext)(Hf);
  if (e == null || e === void 0) throw Error(`@atlaskit/tabs: A Tab must have a TabList parent.`);
  return e;
}
var Wf = (0, G.forwardRef)(function (e, t) {
  var n = e.children,
    r = e.testId,
    i = Uf(),
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
    Ya,
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
    G.createElement(Ga, { weight: `medium`, color: `inherit`, maxLines: 1 }, n),
  );
});
function Gf() {
  var e = (0, G.useContext)(Nf);
  if (e == null) throw Error(`@atlaskit/tabs: A TabList must have a Tabs parent.`);
  return e;
}
d();
var Kf = function (e) {
  var t = e.children,
    n = Gf(),
    r = n.tabsId,
    i = n.selected,
    a = n.onChange,
    o = (0, G.createRef)(),
    s = G.Children.toArray(t).filter(Boolean),
    c = s.length,
    l = (0, G.useCallback)(
      function (e) {
        var t = o.current?.querySelector(`[id='${r}-${e}']`);
        (t && t.focus(), a(e));
      },
      [r, o, a],
    ),
    u = (0, G.useCallback)(
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
    d = (0, G.useCallback)(
      function (e) {
        var t = e.tab,
          n = e.isSelected,
          i = e.index;
        return G.createElement(
          Hf.Provider,
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
  return G.createElement(
    `div`,
    {
      role: `tablist`,
      ref: o,
      className: j([
        `_1e0c1txw _kqswh2mm _85i5ze3t _1q51ze3t _y4tize3t _bozgze3t`,
        `_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _qwyt1qi0 _7hip15vq _1fud15vq _bb0mh2mm _1quzazsu _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _1lzu1uh4 _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oazazsu _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1b8d1uh4 _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i20i7uo _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _rsmzz0c1 _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiem6x5g _pascidpf _eid3idpf _zr3eidpf _fntnidpf _1mp41kw7 _kfgte4h9 _1cs8stnw _1rus1l7x _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc`,
      ]),
    },
    s.map(function (e, t) {
      return d({ tab: e, index: t, isSelected: t === i });
    }),
  );
};
function qf(e) {
  return function (t) {
    e.forEach(function (e) {
      typeof e == `function` ? e(t) : e !== null && B(e) === `object` && (e.current = t);
    });
  };
}
var Jf = (0, G.createContext)(void 0),
  Yf = function () {
    var e = (0, G.useContext)(Jf);
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
function Xf(e) {
  (e.preventDefault(), e.stopPropagation());
}
var Zf = 9;
function Qf(e) {
  e.keyCode !== Zf && Xf(e);
}
function $f(e, t) {
  return e
    ? {
        onMouseDownCapture: Xf,
        onMouseUpCapture: Xf,
        onKeyDownCapture: Qf,
        onKeyUpCapture: Qf,
        onTouchStartCapture: Xf,
        onTouchEndCapture: Xf,
        onPointerDownCapture: Xf,
        onPointerUpCapture: Xf,
        onClickCapture: Xf,
        onClick: Xf,
      }
    : t;
}
function ep(e) {
  switch (e) {
    case `compact`:
      return `small`;
    default:
      return `medium`;
  }
}
function tp(e) {
  var t = e.appearance,
    n = e.isDisabled,
    r = e.isSelected;
  return n || r
    ? `inherit`
    : t === `primary` || t === `danger` || t === `discovery`
      ? `invert`
      : `inherit`;
}
function np(e) {
  var t = e.appearance,
    n = e.spacing,
    r = e.isDisabled,
    i = e.isSelected,
    a = e.testId;
  return G.createElement(li, {
    size: ep(n),
    appearance: tp({ appearance: t, isDisabled: r, isSelected: i }),
    testId: a ? `${a}--loading-spinner` : void 0,
  });
}
d();
var rp =
    `appearance.autoFocus.isDisabled.isLoading.isSelected.isIconButton.isCircle.hasIconBefore.hasIconAfter.shouldFitContainer.spacing.ariaLabel.ariaLabelledBy.children.interactionName.onClick.onMouseDown.onMouseDownCapture.onMouseUp.onMouseUpCapture.onKeyDown.onKeyDownCapture.onKeyUp.onKeyUpCapture.onTouchStart.onTouchStartCapture.onTouchEnd.onTouchEndCapture.onPointerDown.onPointerDownCapture.onPointerUp.onPointerUpCapture.onClickCapture.testId.analyticsContext.componentName.role.onMouseOver.onMouseOut.onFocus.onBlur.onMouseMove.type`.split(
      `.`,
    ),
  ip = [`className`, `css`, `as`, `style`],
  ap = `, Loading`,
  op = {
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
  sp = {
    root: `_bfhksm61 _syazazsu _8l3m1l7x _aetrb3bt _1053azsu _f8pjazsu _30l3azsu _9h8hazsu`,
    interactive: `_irr31dpa _30l3azsu _1di6fcek _9h8hazsu`,
    disabled: `_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28`,
  },
  cp = {
    root: `_bfhk1856 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3hf2y _9h8h15cr _1di6g6ey`,
  },
  lp = {
    root: `_bfhk1kmu _syaz1yd3 _10531yd3 _f8pj1yd3 _30l31yd3 _9h8h1yd3`,
    interactive: `_30l31yd3 _irr31spp _9h8h1yd3 _1di64m4m`,
  },
  up = {
    root: `_bfhkybec _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3s9hg _9h8h15cr _1di613a9`,
  },
  dp = {
    root: `_bfhku5tj _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3fqeg _9h8h15cr _1di61f1m`,
  },
  fp = {
    root: `_bfhksm61 _syazazsu _1053azsu _f8pjazsu _30l3azsu _9h8hazsu`,
    interactive: `_irr31dpa _30l3azsu _1di6fcek _9h8hazsu`,
    disabled: `_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28`,
  },
  pp = {
    root: `_bfhk15s3 _syaz6x5g _8l3mq98m _aetrb3bt _10536x5g _f8pj6x5g _30l36x5g _9h8h6x5g`,
    insideSplitButton: `_1pbycs5v`,
    interactive: `_irr3ufnl _30l36x5g _1di6nozp _9h8h6x5g`,
    warning: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
    danger: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
    discovery: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
  },
  mp = G.forwardRef(function (e, t) {
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
      O = e.onClick,
      k = e.onMouseDown,
      A = e.onMouseDownCapture,
      M = e.onMouseUp,
      N = e.onMouseUpCapture,
      F = e.onKeyDown,
      ee = e.onKeyDownCapture,
      I = e.onKeyUp,
      L = e.onKeyUpCapture,
      te = e.onTouchStart,
      ne = e.onTouchStartCapture,
      re = e.onTouchEnd,
      ie = e.onTouchEndCapture,
      R = e.onPointerDown,
      z = e.onPointerDownCapture,
      B = e.onPointerUp,
      V = e.onPointerUpCapture,
      ae = e.onClickCapture,
      H = e.testId,
      oe = e.analyticsContext,
      se = e.componentName,
      ce = e.role,
      le = e.onMouseOver,
      ue = e.onMouseOut,
      de = e.onFocus,
      U = e.onBlur,
      fe = e.onMouseMove,
      pe = e.type,
      me = P(e, rp),
      he = (0, G.useRef)(null),
      ge = Yf(),
      _e = us(),
      K = !!ge,
      ve = ge?.isNavigationSplitButton || !1,
      q = ge?.appearance === `default` ? `subtle` : n || ge?.appearance || `default`,
      ye = ge?.spacing || C,
      be = ge?.isDisabled || o,
      xe = !be && !c,
      Se = be || c,
      Ce = d && !be;
    (cr(he, i), me.className, me.css, me.as, me.style);
    var we = P(me, ip);
    return G.createElement(
      $a,
      l(
        {},
        we,
        {
          componentName: se || `button`,
          analyticsContext: oe,
          role: ce,
          ref: qf([he, t]),
          xcss: va(
            op.base,
            W(`platform-dst-shape-theme-default`) && op.baseT26Shape,
            q === `default` && sp.root,
            q === `default` && xe && sp.interactive,
            q === `primary` && cp.root,
            q === `primary` && xe && cp.interactive,
            q === `warning` && lp.root,
            q === `warning` && xe && lp.interactive,
            q === `danger` && up.root,
            q === `danger` && xe && up.interactive,
            q === `discovery` && dp.root,
            q === `discovery` && xe && dp.interactive,
            q === `subtle` && fp.root,
            q === `subtle` && xe && fp.interactive,
            op.linkDecorationUnset,
            Ce && pp.root,
            Ce && K && pp.insideSplitButton,
            Ce && xe && pp.interactive,
            Ce && q === `danger` && pp.danger,
            Ce && q === `warning` && pp.warning,
            Ce && q === `discovery` && pp.discovery,
            be && op.disabled,
            be && q !== `default` && q !== `subtle` && op.sharedDisabled,
            be && q === `default` && sp.disabled,
            h && !K && op.circle,
            ye === `compact` && op.spacingCompact,
            ye === `compact` && W(`platform-dst-shape-theme-default`) && op.spacingCompactT26Shape,
            x && op.fullWidth,
            _ && op.buttonIconBefore,
            y && op.buttonIconAfter,
            p && op.iconButton,
            p && ye === `compact` && op.iconButtonCompact,
            c && op.loading,
            K && op.splitButton,
            ve && op.navigationSplitButton,
          ),
          isDisabled: W(`platform-dst_fix_not_focusable_loading_button`) ? be : Se,
        },
        W(`platform-dst_fix_not_focusable_loading_button`) && { "aria-live": `polite` },
        c && W(`platform-dst_fix_not_focusable_loading_button`) && { "aria-disabled": !0 },
        {
          "aria-label": c && w && !T ? `${w} ${ap}` : w,
          "aria-labelledby": c && T ? `${T} ${_e}` : T,
          onClick: O,
        },
        $f(Se, {
          onMouseDownCapture: A,
          onMouseUpCapture: N,
          onKeyDownCapture: ee,
          onKeyUpCapture: L,
          onTouchStartCapture: ne,
          onTouchEndCapture: ie,
          onPointerDownCapture: z,
          onPointerUpCapture: V,
          onClickCapture: ae,
        }),
        {
          testId: H,
          onMouseOver: le,
          onFocus: de,
          onMouseMove: fe,
          onBlur: U,
          type: pe,
          interactionName: D,
          onMouseDown: k,
          onMouseUp: M,
          onKeyDown: F,
          onMouseOut: ue,
          onKeyUp: I,
          onTouchStart: te,
          onTouchEnd: re,
          onPointerDown: R,
          onPointerUp: B,
        },
      ),
      G.createElement(
        Jf.Provider,
        { value: void 0 },
        E,
        c &&
          G.createElement(
            `span`,
            { className: j([op.loadingOverlay]) },
            np({ spacing: ye, appearance: q, isDisabled: be, isSelected: Ce, testId: H }),
          ),
        c && (T || !w) && G.createElement(Tr, { id: _e }, ap),
      ),
    );
  });
d();
var hp = {
    text: `_1reo15vq _18m915vq _16jlkb7n _1o9zkb7n _1bto1l2s _o5721q9c`,
    icon: `_1e0c1txw _16jlidpf _1o9zidpf _1wpz1h6o _1wybidpf _vwz4idpf _uiztglyw`,
    common: `_v564g17y`,
    fade: `_tzy4idpf`,
  },
  gp = function (e) {
    var t = e.children,
      n = e.type,
      r = n === void 0 ? `text` : n,
      i = e.isLoading;
    return G.createElement(
      `span`,
      { className: j([hp.common, r === `text` && hp.text, r === `icon` && hp.icon, i && hp.fade]) },
      t,
    );
  };
function _p(e) {
  return !e.displayName && !e.render && typeof e == `function`;
}
var vp = function (e) {
    var t = e.icon,
      n = _p(t),
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
  yp =
    `aria-label.aria-labelledby.analyticsContext.appearance.autoFocus.icon.interactionName.isDisabled.isLoading.isSelected.isTooltipDisabled.label.onClick.onClickCapture.onKeyDownCapture.onKeyUpCapture.onMouseDownCapture.onMouseUpCapture.onPointerDownCapture.onPointerUpCapture.onTouchEndCapture.onTouchStartCapture.shape.spacing.testId.tooltip.type`.split(
      `.`,
    ),
  bp = [`className`, `css`, `as`, `style`],
  xp = G.memo(
    G.forwardRef(function (e, t) {
      e[`aria-label`];
      var n = e[`aria-labelledby`],
        r = e.analyticsContext,
        i = e.appearance,
        a = e.autoFocus,
        o = e.icon,
        s = e.interactionName,
        c = e.isDisabled,
        u = e.isLoading,
        d = u === void 0 ? !1 : u,
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
        T = e.onTouchStartCapture,
        E = e.shape,
        D = e.spacing,
        O = e.testId,
        k = e.tooltip,
        A = e.type,
        j = A === void 0 ? `button` : A,
        M = P(e, yp);
      (M.className, M.css, M.as, M.style);
      var N = P(M, bp);
      return m
        ? G.createElement(
            mp,
            l({}, N, {
              ref: t,
              appearance: i,
              autoFocus: a,
              isDisabled: c,
              isLoading: d,
              isSelected: f,
              isIconButton: !0,
              isCircle: E === `circle`,
              hasIconBefore: !!o,
              spacing: D,
              ariaLabelledBy: n,
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
              componentName: `IconButton`,
              analyticsContext: r,
              type: j,
              interactionName: s,
            }),
            G.createElement(
              gp,
              { type: `icon`, isLoading: d },
              G.createElement(vp, { icon: o }),
              G.createElement(Tr, null, h),
            ),
          )
        : G.createElement(
            jd,
            {
              content: k?.content ?? h,
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
                mp,
                l({}, N, {
                  appearance: i,
                  autoFocus: a,
                  isDisabled: c,
                  isLoading: d,
                  isSelected: f,
                  isIconButton: !0,
                  isCircle: E === `circle`,
                  hasIconBefore: !1,
                  spacing: D,
                  ariaLabelledBy: n,
                  onClick: function (t, n) {
                    var r;
                    (g?.(t, n), (r = e.onClick) == null || r.call(e, t));
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
                  ref: qf([t, e?.ref].filter(Boolean)),
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
                G.createElement(
                  gp,
                  { type: `icon`, isLoading: d },
                  G.createElement(vp, { icon: o }),
                  G.createElement(Tr, null, h),
                ),
              );
            },
          );
    }),
  );
xp.displayName = `IconButton`;
function Sp(e, t) {
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
function Cp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Sp(Object(n), !0).forEach(function (t) {
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Sp(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var wp = {
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
  Q = Cp(Cp({}, Z), {
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
  Tp = {
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
  Ep = {
    "opacity.disabled": `var(--ds-opacity-disabled, 0.4)`,
    "opacity.loading": `var(--ds-opacity-loading, 0.2)`,
  },
  Dp = {
    "elevation.shadow.overflow": `var(--ds-shadow-overflow, 0px 0px 8px #1E1F21, 0px 0px 1px #1E1F21)`,
    "elevation.shadow.overflow.perimeter": `var(--ds-shadow-overflow-perimeter, #1E1F211f)`,
    "elevation.shadow.overflow.spread": `var(--ds-shadow-overflow-spread, #1E1F2129)`,
    "elevation.shadow.overlay": `var(--ds-shadow-overlay, 0px 8px 12px #1E1F21, 0px 0px 1px #1E1F21)`,
    "elevation.shadow.raised": `var(--ds-shadow-raised, 0px 1px 1px #1E1F21, 0px 0px 1px #1E1F21)`,
  },
  Op = {
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
  kp = {
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
  Ap = {
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
  jp = {
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
  Mp = {
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
  Np = {
    "border.width": `var(--ds-border-width, 1px)`,
    "border.width.selected": `var(--ds-border-width-selected, 2px)`,
    "border.width.focused": `var(--ds-border-width-focused, 2px)`,
  },
  Pp = {
    "radius.xsmall": `var(--ds-radius-xsmall, 2px)`,
    "radius.small": `var(--ds-radius-small, 3px)`,
    "radius.medium": `var(--ds-radius-medium, 6px)`,
    "radius.large": `var(--ds-radius-large, 8px)`,
    "radius.xlarge": `var(--ds-radius-xlarge, 12px)`,
    "radius.xxlarge": `var(--ds-radius-xxlarge, 16px)`,
    "radius.full": `var(--ds-radius-full, 9999px)`,
    "radius.tile": `var(--ds-radius-tile, 25%)`,
  },
  Fp = {
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
  Ip = {
    "font.weight.bold": `var(--ds-font-weight-bold, 653)`,
    "font.weight.medium": `var(--ds-font-weight-medium, 500)`,
    "font.weight.regular": `var(--ds-font-weight-regular, 400)`,
    "font.weight.semibold": `var(--ds-font-weight-semibold, 600)`,
  },
  Lp = {
    "font.family.body": `var(--ds-font-family-body, "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.family.brand.body": `var(--ds-font-family-brand-body, "Charlie Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.family.brand.heading": `var(--ds-font-family-brand-heading, "Charlie Display", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.family.code": `var(--ds-font-family-code, "Atlassian Mono", ui-monospace, Menlo, "Segoe UI Mono", "Ubuntu Mono", monospace)`,
    "font.family.heading": `var(--ds-font-family-heading, "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
  },
  Rp = {
    medium: `var(--ds-font-body, normal 400 14px/20px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    large: `var(--ds-font-body-large, normal 400 16px/24px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    small: `var(--ds-font-body-small, normal 400 12px/16px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
  },
  zp = {
    bold: `var(--ds-font-weight-bold, 653)`,
    medium: `var(--ds-font-weight-medium, 500)`,
    regular: `var(--ds-font-weight-regular, 400)`,
    semibold: `var(--ds-font-weight-semibold, 600)`,
  },
  Bp = {
    large: `var(--ds-font-metric-large, normal 653 28px/32px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    medium: `var(--ds-font-metric-medium, normal 653 24px/28px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    small: `var(--ds-font-metric-small, normal 653 16px/20px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
  },
  Vp = [
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
  Hp = function (e, t) {
    return Object.keys(t).reduce(function (n, r) {
      return ((n[r] = A(z({}, e, t[r]))), n);
    }, {});
  },
  Up = Vp.reduce(function (e, t) {
    return ((e[t] = Hp(t, Z)), e);
  }, {}),
  Wp = Vp.reduce(function (e, t) {
    return ((e[t] = Hp(t, Z)), e);
  }, {}),
  Gp = Hp(`backgroundColor`, Ap);
(Hp(`color`, jp),
  Hp(`fontWeight`, Ip),
  Hp(`fontFamily`, Lp),
  Hp(`font`, Fp),
  Hp(`font`, Rp),
  Hp(`fontWeight`, zp));
var Kp = Hp(de, Op),
  qp = function (e) {
    return Op[e] !== void 0;
  };
Hp(`font`, Bp);
function Jp(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = Yp(e)) || (t && e && typeof e.length == `number`)) {
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
function Yp(e, t) {
  if (e) {
    if (typeof e == `string`) return Xp(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Xp(e, t)
          : void 0
    );
  }
}
function Xp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Zp = {
    backgroundColor: Ap,
    blockSize: wp,
    borderBlockColor: kp,
    borderBlockEndColor: kp,
    borderBlockEndWidth: Np,
    borderBlockStartColor: kp,
    borderBlockStartWidth: Np,
    borderBlockWidth: Np,
    borderBottomColor: kp,
    borderBottomLeftRadius: Pp,
    borderBottomRightRadius: Pp,
    borderBottomWidth: Np,
    borderColor: kp,
    borderEndEndRadius: Pp,
    borderEndStartRadius: Pp,
    borderInlineColor: kp,
    borderInlineEndColor: kp,
    borderInlineEndWidth: Np,
    borderInlineStartColor: kp,
    borderInlineStartWidth: Np,
    borderInlineWidth: Np,
    borderLeftColor: kp,
    borderLeftWidth: Np,
    borderRadius: Pp,
    borderRightColor: kp,
    borderRightWidth: Np,
    borderStartEndRadius: Pp,
    borderStartStartRadius: Pp,
    borderTopColor: kp,
    borderTopLeftRadius: Pp,
    borderTopRightRadius: Pp,
    borderTopWidth: Np,
    borderWidth: Np,
    bottom: Q,
    boxShadow: Dp,
    color: jp,
    columnGap: Z,
    font: Fp,
    fontFamily: Lp,
    fontWeight: Ip,
    gap: Z,
    height: wp,
    inlineSize: wp,
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
    maxBlockSize: wp,
    maxHeight: wp,
    maxInlineSize: wp,
    maxWidth: wp,
    minBlockSize: wp,
    minHeight: wp,
    minInlineSize: wp,
    minWidth: wp,
    opacity: Ep,
    outlineColor: kp,
    outlineOffset: Q,
    outlineWidth: Np,
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
    width: wp,
    zIndex: Mp,
  },
  Qp = Symbol(`UNSAFE_INTERNAL_styles`),
  $p = function () {
    return (
      (typeof process > `u` ? `undefined` : B(process)) === `object` && B({}) === `object` && !1
    );
  },
  em = /(\.|\s|&+|\*\>|#|\[.*\])/,
  tm = /^@media .*$|^::?.*$|^@supports .*$/,
  nm = function (e) {
    return !e || B(e) !== `object`
      ? e
      : Array.isArray(e)
        ? e.map(nm)
        : (Object.entries(e).forEach(function (t) {
            var n = F(t, 2),
              r = n[0],
              i = n[1];
            if (B(i) === `object` && tm.test(r)) {
              e[r] = nm(i);
              return;
            }
            if ($p() && em.test(r)) throw Error(`Styles not supported for key '${r}'.`);
            r in Zp && (e[r] = Zp[r][i] ?? i);
          }),
          e);
  },
  rm = function (e) {
    return z({}, Qp, A(nm(e)));
  },
  im = function (e) {
    if (Array.isArray(e)) {
      var t = [],
        n = [],
        r = Jp(e),
        i;
      try {
        for (r.s(); !(i = r.n()).done; ) {
          var a = i.value,
            o = im(a);
          (o.emotion && t.push.apply(t, M(o.emotion)), o.static && n.push(o.static));
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
      return { emotion: t, static: n.join(` `) };
    }
    var s = (e || {})[Qp];
    if (s) return { emotion: [s] };
    if (e) {
      var c = `${e}`;
      if (c) return { static: c };
    }
    return {};
  };
function am(e) {
  return rm(e);
}
var om = [
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
  sm = [`className`],
  cm = (0, G.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `div` : n,
      i = e.children,
      a = e.backgroundColor,
      o = e.padding,
      s = e.paddingBlock,
      c = e.paddingBlockStart,
      d = e.paddingBlockEnd,
      f = e.paddingInline,
      p = e.paddingInlineStart,
      m = e.paddingInlineEnd,
      h = e.style,
      g = e.testId,
      _ = e.xcss,
      v = P(e, om);
    v.className;
    var y = P(v, sm),
      b = im(_),
      x = u(
        r,
        l({ style: h, ref: t, className: b.static }, y, {
          css: [
            lm,
            a && Gp[a],
            qp(a) && Kp[a],
            o && Up.padding[o],
            s && Up.paddingBlock[s],
            c && Up.paddingBlockStart[c],
            d && Up.paddingBlockEnd[d],
            f && Up.paddingInline[f],
            p && Up.paddingInlineStart[p],
            m && Up.paddingInlineEnd[m],
            b.emotion,
          ],
          "data-testid": g,
        }),
        i,
      );
    return a ? u(na.Provider, { value: a }, x) : x;
  }),
  lm = A({ boxSizing: `border-box`, appearance: `none`, border: `none` }),
  um = {
    start: A({ justifyContent: `start` }),
    center: A({ justifyContent: `center` }),
    end: A({ justifyContent: `end` }),
    "space-between": A({ justifyContent: `space-between` }),
    "space-around": A({ justifyContent: `space-around` }),
    "space-evenly": A({ justifyContent: `space-evenly` }),
    stretch: A({ justifyContent: `stretch` }),
  },
  dm = { column: A({ flexDirection: `column` }), row: A({ flexDirection: `row` }) },
  fm = { wrap: A({ flexWrap: `wrap` }), nowrap: A({ flexWrap: `nowrap` }) },
  pm = {
    start: A({ alignItems: `start` }),
    center: A({ alignItems: `center` }),
    baseline: A({ alignItems: `baseline` }),
    end: A({ alignItems: `end` }),
    stretch: A({ alignItems: `stretch` }),
  },
  mm = A({ display: `flex`, boxSizing: `border-box` }),
  hm = (0, G.memo)(
    (0, G.forwardRef)(function (e, t) {
      var n = e.as,
        r = n === void 0 ? `div` : n,
        i = e.role,
        a = e.alignItems,
        o = e.justifyContent,
        s = e.gap,
        c = e.columnGap,
        l = e.rowGap,
        d = e.children,
        f = e.testId,
        p = e.direction,
        m = e.wrap,
        h = e.xcss,
        g = e.id,
        _ = im(h);
      return u(
        r,
        {
          id: g,
          role: i,
          className: _.static,
          css: [
            mm,
            s && Wp.gap[s],
            c && Wp.columnGap[c],
            l && Wp.rowGap[l],
            a && pm[a],
            p && dm[p],
            o && um[o],
            m && fm[m],
          ].concat(M(_.emotion || [])),
          "data-testid": f,
          ref: t,
        },
        d,
      );
    }),
  );
hm.displayName = `Flex`;
var gm = { hug: am({ flexGrow: 0 }), fill: am({ width: `100%`, flexGrow: 1 }) },
  _m = A({
    color: `var(--ds-text-subtle, #42526E)`,
    marginBlock: `var(--ds-space-0, 0px)`,
    marginInline: `var(--ds-space-negative-025, -2px)`,
    pointerEvents: `none`,
    userSelect: `none`,
  }),
  vm = function (e) {
    var t = e.children;
    return u(`span`, { css: _m }, t);
  },
  ym = (0, G.memo)(
    (0, G.forwardRef)(function (e, t) {
      var n = e.as,
        r = e.alignInline,
        i = e.alignBlock,
        a = i === void 0 ? `start` : i,
        o = e.shouldWrap,
        s = o === void 0 ? !1 : o,
        c = e.spread,
        l = e.grow,
        d = e.space,
        f = e.rowSpace,
        p = e.separator,
        m = e.xcss,
        h = e.testId,
        g = e.role,
        _ = e.id,
        v = e.children,
        y = typeof p == `string` ? u(vm, null, p) : p,
        b = y
          ? G.Children.toArray(v)
              .filter(Boolean)
              .map(function (e, t) {
                return u(G.Fragment, { key: t }, p && t > 0 ? y : null, e);
              })
          : v,
        x = c || r,
        S = l ? [gm[l]].concat(M(Array.isArray(m) ? m : [m])) : m;
      return u(
        hm,
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
ym.displayName = `Inline`;
var bm = { hug: am({ flexGrow: 0 }), fill: am({ width: `100%`, flexGrow: 1 }) },
  xm = (0, G.memo)(
    (0, G.forwardRef)(function (e, t) {
      var n = e.as,
        r = e.alignInline,
        i = e.alignBlock,
        a = i === void 0 ? `stretch` : i,
        o = e.spread,
        s = e.grow,
        c = e.space,
        l = e.children,
        d = e.testId,
        f = e.xcss,
        p = e.role,
        m = e.id;
      return u(
        hm,
        {
          id: m,
          as: n,
          role: p,
          gap: c,
          direction: `column`,
          alignItems: r,
          justifyContent: o || a,
          xcss: s ? [bm[s]].concat(M(Array.isArray(f) ? f : [f])) : f,
          testId: d,
          ref: t,
        },
        l,
      );
    }),
  );
xm.displayName = `Stack`;
var Sm = (0, G.createContext)(0),
  Cm = function () {
    return (0, G.useContext)(Sm);
  },
  wm = function (e) {
    var t = Cm();
    return [t, (t && (t > 6 ? `div` : `h${t}`)) || e];
  };
d();
var Tm = {
    xxlarge: `h1`,
    xlarge: `h1`,
    large: `h2`,
    medium: `h3`,
    small: `h4`,
    xsmall: `h5`,
    xxsmall: `h6`,
  },
  Em = { reset: `_dxsyidpf _1i144jg8 _nmk4glyw` },
  Dm = {
    "color.text": `_1w90i7uo`,
    "color.text.inverse": `_1w9015cr`,
    "color.text.warning.inverse": `_1w901yd3`,
  },
  Om = {
    xxlarge: `_fqox1iff`,
    xlarge: `_fqox12ln`,
    large: `_fqox10sd`,
    medium: `_fqox1af2`,
    small: `_fqox1e3o`,
    xsmall: `_fqox1qyo`,
    xxsmall: `_fqoxi4vh`,
  },
  km = function (e) {
    var t = ra();
    return e || (Tp.hasOwnProperty(t) ? Tp[t] : `color.text`);
  },
  Am = (0, G.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.size,
      i = e.id,
      a = e.testId,
      o = e.as,
      s = e.color,
      c = F(wm(Tm[r]), 2),
      l = c[0],
      u = c[1],
      d = o || u,
      f = d === `div` && l,
      p = km(s);
    return G.createElement(
      d,
      {
        id: i,
        ref: t,
        "data-testid": a,
        role: f ? `heading` : void 0,
        "aria-level": f ? l : void 0,
        className: j([Em.reset, Om[r], Dm[p]]),
      },
      n,
    );
  }),
  jm = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i(($i(), t(Qi)));
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
  Mm = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i(($i(), t(Qi)));
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
  Nm = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i(($i(), t(Qi)));
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
  Pm = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i(($i(), t(Qi)));
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
  Fm = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i(($i(), t(Qi)));
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
  Im = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i(($i(), t(Qi)));
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
  Lm = e(Mm()),
  Rm = e(Nm()),
  zm = e(Pm()),
  Bm = e(Fm()),
  Vm = e(Im());
function Hm(e, t) {
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
function Um(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Hm(Object(n), !0).forEach(function (t) {
          z(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Hm(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Wm = {
  information: {
    backgroundColor: `var(--ds-background-information, #E9F2FE)`,
    Icon: zm.default,
    primaryIconColor: `var(--ds-icon-information, #357DE8)`,
  },
  warning: {
    backgroundColor: `var(--ds-background-warning, #FFF5DB)`,
    Icon: Vm.default,
    primaryIconColor: `var(--ds-icon-warning, #E06C00)`,
  },
  error: {
    backgroundColor: `var(--ds-background-danger, #FFECEB)`,
    Icon: Rm.default,
    primaryIconColor: `var(--ds-icon-danger, #C9372C)`,
  },
  success: {
    backgroundColor: `var(--ds-background-success, #EFFFD6)`,
    Icon: Bm.default,
    primaryIconColor: `var(--ds-icon-success, #6A9A23)`,
  },
  discovery: {
    backgroundColor: `var(--ds-background-discovery, #F8EEFE)`,
    Icon: Lm.default,
    primaryIconColor: `var(--ds-icon-discovery, #AF59E1)`,
  },
};
function Gm(e, t) {
  var n = Wm[e] || Wm.information,
    r =
      t ||
      function (t) {
        var r = t.primaryColor;
        return G.createElement(n.Icon, { color: r, spacing: `spacious`, label: e });
      };
  return Um(Um({}, n), {}, { Icon: r });
}
d();
var Km = e(jm()),
  qm = {
    container: `_2rko12b0 _1rjcpxbi _18zrpxbi _1nmz1hna`,
    containerT26Shape: `_2rko1mok`,
    iconContainer: `_1mou1i6y _1e0c1txw`,
    contentContainer: `_16jlkb7n`,
    content: `_11c8fhey _syazi7uo`,
    actionsContainer: `_11c8fhey`,
    dismissButtonContainer: `_1pfh1i6y`,
  },
  Jm = {
    information: `_bfhk19ip`,
    warning: `_bfhk1917`,
    error: `_bfhk1gly`,
    success: `_bfhk1y9u`,
    discovery: `_bfhk6vm6`,
  },
  Ym = (0, G.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.appearance,
      i = r === void 0 ? `information` : r,
      a = e.actions,
      o = e.title,
      s = e.icon,
      c = e.isDismissible,
      l = e.onDismiss,
      u = e.testId,
      d = F((0, G.useState)(!1), 2),
      f = d[0],
      p = d[1],
      m = (0, G.useCallback)(
        function () {
          (l?.(), p(!0));
        },
        [l],
      ),
      h = Gm(i, s),
      g = h.primaryIconColor,
      _ = h.backgroundColor,
      v = h.Icon,
      y = a && a.type === G.Fragment ? a.props.children : a,
      b = G.Children.toArray(y);
    return c && f
      ? null
      : G.createElement(
          `section`,
          {
            "data-testid": u,
            ref: t,
            className: j([
              qm.container,
              W(`platform-dst-shape-theme-default`) && qm.containerT26Shape,
              Jm[i],
            ]),
          },
          G.createElement(
            ja,
            { space: `space.200`, alignBlock: `stretch` },
            G.createElement(
              `div`,
              { className: j([qm.iconContainer]) },
              G.createElement(v, {
                size: `medium`,
                primaryColor: g,
                secondaryColor: _,
                color: g,
                spacing: `spacious`,
              }),
            ),
            G.createElement(
              Pa,
              { space: `space.100`, testId: u && `${u}--content`, xcss: qm.contentContainer },
              !!o && G.createElement(Am, { as: `h2`, size: `small` }, o),
              G.createElement(`div`, { className: j([qm.content]) }, n),
              b.length > 0 &&
                G.createElement(
                  ja,
                  {
                    shouldWrap: !0,
                    testId: u && `${u}--actions`,
                    separator: `·`,
                    space: `space.100`,
                    rowSpace: `space.0`,
                    role: b.length > 1 ? `list` : void 0,
                    xcss: qm.actionsContainer,
                  },
                  b.map(function (e, t) {
                    return G.createElement(
                      ja,
                      { role: b.length > 1 ? `listitem` : void 0, key: t },
                      e,
                    );
                  }),
                ),
            ),
            c &&
              G.createElement(
                `div`,
                { className: j([qm.dismissButtonContainer]) },
                G.createElement(xp, {
                  testId: u && `${u}--dismiss-button`,
                  label: `Dismiss`,
                  icon: Km.default,
                  appearance: `subtle`,
                  onClick: m,
                  spacing: `compact`,
                }),
              ),
          ),
        );
  });
Ym.displayName = `SectionMessage`;
var Xm = i((e) => {
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
  Zm = i((e, t) => {
    t.exports = Xm();
  }),
  Qm = Bn(),
  $ = Zm(),
  $m = am({ width: `100%` }),
  eh = am({ width: `100%`, maxWidth: `100%` }),
  th = am({ whiteSpace: `normal`, overflowWrap: `anywhere` });
function nh() {
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
      let e = await (0, Qm.invoke)(`fetch`);
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
        let n = await (0, Qm.invoke)(`create`, { data: { title: e, document: t } });
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
        let t = await (0, Qm.invoke)(`search`, { text: e });
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
          content: (0, $.jsxs)(xm, {
            space: `space.100`,
            children: [
              (0, $.jsx)(ym, {
                children: (0, $.jsx)(ii, {
                  onClick: () => x((t) => (t === e.id ? null : e.id)),
                  children: b === e.id ? `Hide document` : `Open document`,
                }),
              }),
              b === e.id
                ? (0, $.jsxs)(cm, {
                    xcss: th,
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
          content: (0, $.jsxs)(xm, {
            space: `space.100`,
            children: [
              (0, $.jsx)(ym, {
                children: (0, $.jsx)(ii, {
                  onClick: () => _((t) => (t === e.id ? null : e.id)),
                  children: g === e.id ? `Hide document` : `Open document`,
                }),
              }),
              g === e.id
                ? (0, $.jsxs)(cm, {
                    xcss: th,
                    children: [(0, $.jsx)(`strong`, { children: `Document:` }), ` `, e.document],
                  })
                : null,
            ],
          }),
        },
        {
          key: `vector-${e.id}`,
          content: (0, $.jsxs)(xm, {
            space: `space.100`,
            children: [
              (0, $.jsx)(ym, {
                children: (0, $.jsx)(ii, {
                  onClick: () => y((t) => (t === e.id ? null : e.id)),
                  children: v === e.id ? `Hide vector` : `Open vector`,
                }),
              }),
              v === e.id
                ? (0, $.jsxs)(cm, {
                    xcss: th,
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
  return (0, $.jsx)(cm, {
    padding: `space.300`,
    xcss: $m,
    children: (0, $.jsxs)(xm, {
      space: `space.300`,
      children: [
        (0, $.jsx)(`h2`, { children: `TiDB Vector Example (backend embeddings)` }),
        (0, $.jsxs)(zf, {
          id: `vector-tabs`,
          selected: e,
          onChange: (e) => t(e),
          children: [
            (0, $.jsxs)(Kf, {
              children: [
                (0, $.jsx)(Wf, { children: `Add documents` }),
                (0, $.jsx)(Wf, { children: `AI(Vector) search` }),
              ],
            }),
            (0, $.jsx)(Vf, {
              children: (0, $.jsx)(cm, {
                padding: `space.200`,
                xcss: eh,
                children: (0, $.jsxs)(xm, {
                  space: `space.150`,
                  children: [
                    (0, $.jsx)(`h3`, { children: `Insert document` }),
                    (0, $.jsx)(jf, {
                      value: n,
                      maxLength: 255,
                      placeholder: `Title`,
                      onChange: (e) => r(e.target.value),
                    }),
                    (0, $.jsx)(vf, {
                      value: i,
                      maxLength: S,
                      minimumRows: 8,
                      resize: `vertical`,
                      placeholder: `Document text`,
                      onChange: (e) => a(e.target.value),
                    }),
                    (0, $.jsxs)(cm, { as: `small`, children: [i.length, `/`, S, ` chars`] }),
                    (0, $.jsx)(cm, {
                      as: `small`,
                      children: `Embedding is computed on the Forge backend from document text.`,
                    }),
                    (0, $.jsxs)(ym, {
                      space: `space.100`,
                      children: [
                        (0, $.jsx)(ii, {
                          appearance: `primary`,
                          onClick: T,
                          isDisabled: f,
                          children: `Insert`,
                        }),
                        (0, $.jsx)(ii, { onClick: w, isDisabled: f, children: `Fetch all` }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, $.jsx)(Vf, {
              children: (0, $.jsx)(cm, {
                padding: `space.200`,
                xcss: eh,
                children: (0, $.jsxs)(xm, {
                  space: `space.150`,
                  children: [
                    (0, $.jsx)(`h3`, { children: `AI(Vector) search` }),
                    (0, $.jsx)(vf, {
                      value: o,
                      maxLength: S,
                      minimumRows: 6,
                      resize: `vertical`,
                      placeholder: `Query text`,
                      onChange: (e) => s(e.target.value),
                    }),
                    (0, $.jsxs)(cm, { as: `small`, children: [o.length, `/`, S, ` chars`] }),
                    (0, $.jsx)(cm, {
                      as: `small`,
                      children: `Search runs on the backend: your text is embedded server-side.`,
                    }),
                    (0, $.jsx)(ym, {
                      space: `space.100`,
                      children: (0, $.jsx)(ii, {
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
          ? (0, $.jsx)(Ym, {
              appearance: `information`,
              children: (0, $.jsx)(`p`, { children: m }),
            })
          : null,
        (0, $.jsxs)(cm, {
          as: `section`,
          children: [
            (0, $.jsx)(`h3`, { children: `Results` }),
            c.length > 0
              ? (0, $.jsx)(tf, { head: D, rows: O, rowsPerPage: 10, defaultPage: 1 })
              : null,
            u.length > 0
              ? (0, $.jsx)(tf, { head: k, rows: A, rowsPerPage: 10, defaultPage: 1 })
              : null,
          ],
        }),
      ],
    }),
  });
}
var rh = (0, s().createRoot)(document.getElementById(`root`)),
  ih = () => {
    rh.render((0, $.jsx)(nh, {}));
  };
Qm.view.theme
  .enable()
  .then(() => {
    ih();
  })
  .catch((e) => {
    (console.error(e.message), ih());
  });
