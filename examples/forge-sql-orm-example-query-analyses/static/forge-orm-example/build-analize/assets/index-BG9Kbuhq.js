const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./iframe-resizer-DSle_E2m.js",
      "./rolldown-runtime-COnpUsM8.js",
      "./custom-theme-SRFouWTe.js",
      "./custom-theme-loading-utils-BkqqUriB.js",
      "./wrapNativeSuper-CMD0Ca0W.js",
      "./client-core-vendor-BFJ-FBHn.js",
      "./body-TQwOOaQv.js",
      "./inline-styles-if-ranking-CpP6B84A.js",
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
  i as f,
  l as p,
  n as m,
  o as h,
  r as g,
  s as _,
  u as v,
} from "./wrapNativeSuper-CMD0Ca0W.js";
import {
  _ as y,
  a as b,
  b as x,
  c as S,
  d as C,
  f as w,
  g as T,
  h as E,
  i as D,
  l as O,
  m as k,
  n as A,
  o as j,
  p as M,
  r as ee,
  s as te,
  t as ne,
  u as re,
  v as ie,
  x as N,
  y as ae,
} from "./inline-styles-if-ranking-CpP6B84A.js";
import {
  C as P,
  E as oe,
  S as F,
  T as I,
  _ as L,
  b as se,
  d as R,
  g as ce,
  h as le,
  i as ue,
  m as de,
  t as fe,
  v as pe,
  w as me,
  x as z,
  y as he,
} from "./custom-theme-loading-utils-BkqqUriB.js";
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
    __decorate: () => _e,
    __disposeResources: () => Ue,
    __esDecorate: () => ye,
    __exportStar: () => Ee,
    __extends: () => H,
    __generator: () => Te,
    __importDefault: () => Re,
    __importStar: () => Le,
    __makeTemplateObject: () => Ie,
    __metadata: () => Ce,
    __param: () => ve,
    __propKey: () => xe,
    __read: () => Oe,
    __rest: () => ge,
    __rewriteRelativeImportExtension: () => We,
    __runInitializers: () => be,
    __setFunctionName: () => Se,
    __spread: () => ke,
    __spreadArray: () => je,
    __spreadArrays: () => Ae,
    __values: () => De,
    default: () => Ze,
  });
function H(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Class extends value ` + String(t) + ` is not a constructor or null`);
  Ge(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function ge(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function _e(e, t, n, r) {
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
function ve(e, t) {
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
        __extends: H,
        __assign: Ke,
        __rest: ge,
        __decorate: _e,
        __param: ve,
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
  et = i((e) => {
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
  tt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.makeInvoke = e.invoke = void 0));
    var t = W(),
      n = U(),
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
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (Qe(), t(V)).__exportStar(tt(), e));
  }),
  rt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._invokeEndpointFn = e.InvokeType = void 0));
    var t = W(),
      n = U(),
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
    var n = (Qe(), t(V));
    (n.__exportStar(it(), e), n.__exportStar(at(), e));
  }),
  st = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.submit = void 0));
    var t = W(),
      n = U(),
      r = (0, t.getCallBridge)();
    e.submit = async (e) => {
      if ((await r(`submit`, e)) === !1)
        throw new n.BridgeAPIError(`this resource's view is not submittable.`);
    };
  }),
  ct = i((e) => {
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
  lt = i((e) => {
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
  ut = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.refresh = void 0));
    var t = W(),
      n = U(),
      r = (0, t.getCallBridge)();
    e.refresh = async (e) => {
      if ((await r(`refresh`, e)) === !1)
        throw new n.BridgeAPIError(`this resource's view is not refreshable.`);
    };
  }),
  dt = i((e) => {
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
    var n = (Qe(), t(V)).__importDefault(c());
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
    var n = (Qe(), t(V));
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
    var t = W(),
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
  St = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.theme = void 0));
    var t = (0, W().getCallBridge)();
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
    var t = W(),
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
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (Qe(), t(V)).__exportStar(Xt(), e));
  }),
  Qt = i((e) => {
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
  $t = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (Qe(), t(V)).__exportStar(Qt(), e));
  }),
  en = i((e) => {
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
  tn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (Qe(), t(V)).__exportStar(en(), e));
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
    var n = W(),
      r = nn();
    ((t = (0, r.productFetchApi)((0, n.getCallBridge)())),
      (e.requestConfluence = t.requestConfluence),
      (e.requestJira = t.requestJira),
      (e.requestBitbucket = t.requestBitbucket),
      (e.requestRemote = (0, r.remoteFetchApi)((0, n.getCallBridge)()).requestRemote));
  }),
  an = i((e) => {
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
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (Qe(), t(V)).__exportStar(Tt(), e));
  }),
  cn = i((e) => {
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
  fn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.isEnabled = void 0));
    var t = (0, W().getCallBridge)();
    e.isEnabled = () => t(`isRovoEnabled`);
  }),
  pn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.rovo = void 0));
    var t = dn(),
      n = fn();
    e.rovo = { open: t.open, isEnabled: n.isEnabled };
  }),
  mn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (Qe(), t(V)).__exportStar(pn(), e));
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
    var n = (Qe(), t(V));
    (n.__exportStar(yn(), e), n.__exportStar(_n(), e), n.__exportStar(vn(), e));
  }),
  xn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (Qe(), t(V)).__exportStar(bn(), e));
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
    var n = (Qe(), t(V));
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
    var t = U(),
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
      n = U(),
      r = Tn(),
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
  Dn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.deleteObjects = void 0));
    var t = nt(),
      n = U(),
      r = Tn(),
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
  On = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.download = void 0));
    var t = nt(),
      n = U(),
      r = Tn(),
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
  kn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getMetadata = void 0));
    var t = nt(),
      n = U(),
      r = Tn(),
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
    var n = (Qe(), t(V));
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
    var t = W(),
      n = U(),
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
    var t = W(),
      n = U(),
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
    var n = (Qe(), t(V)),
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
var zn = {};
function Bn() {
  return typeof globalThis < `u`
    ? globalThis
    : typeof window < `u`
      ? window
      : typeof global < `u`
        ? global
        : typeof self < `u`
          ? self
          : zn;
}
var Vn = Object.assign,
  Hn = Object.getOwnPropertyDescriptor,
  Un = Object.defineProperty,
  Wn = Object.prototype,
  Gn = [];
Object.freeze(Gn);
var Kn = {};
Object.freeze(Kn);
var qn = typeof Proxy < `u`,
  Jn = Object.toString();
function Yn() {
  qn || G(`Proxy not available`);
}
function Xn(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Zn = function () {};
function Qn(e) {
  return typeof e == `function`;
}
function $n(e) {
  switch (typeof e) {
    case `string`:
    case `symbol`:
    case `number`:
      return !0;
  }
  return !1;
}
function er(e) {
  return typeof e == `object` && !!e;
}
function tr(e) {
  if (!er(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var n = Object.hasOwnProperty.call(t, `constructor`) && t.constructor;
  return typeof n == `function` && n.toString() === Jn;
}
function nr(e) {
  var t = e?.constructor;
  return t ? t.name === `GeneratorFunction` || t.displayName === `GeneratorFunction` : !1;
}
function rr(e, t, n) {
  Un(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function ir(e, t, n) {
  Un(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function ar(e, t) {
  var n = `isMobX` + e;
  return (
    (t.prototype[n] = !0),
    function (e) {
      return er(e) && e[n] === !0;
    }
  );
}
function or(e) {
  return e != null && Object.prototype.toString.call(e) === `[object Map]`;
}
function sr(e) {
  return Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(e))) === null;
}
function cr(e) {
  return e != null && Object.prototype.toString.call(e) === `[object Set]`;
}
var lr = Object.getOwnPropertySymbols !== void 0;
function ur(e) {
  var t = Object.keys(e);
  if (!lr) return t;
  var n = Object.getOwnPropertySymbols(e);
  return n.length
    ? [].concat(
        t,
        n.filter(function (t) {
          return Wn.propertyIsEnumerable.call(e, t);
        }),
      )
    : t;
}
var dr =
  typeof Reflect < `u` && Reflect.ownKeys
    ? Reflect.ownKeys
    : lr
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function fr(e) {
  return e === null ? null : typeof e == `object` ? `` + e : e;
}
function pr(e, t) {
  return Wn.hasOwnProperty.call(e, t);
}
var mr =
  Object.getOwnPropertyDescriptors ||
  function (e) {
    var t = {};
    return (
      dr(e).forEach(function (n) {
        t[n] = Hn(e, n);
      }),
      t
    );
  };
function hr(e, t) {
  return !!(e & t);
}
function gr(e, t, n) {
  return (n ? (e |= t) : (e &= ~t), e);
}
function _r(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function vr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, Tr(r.key), r));
  }
}
function yr(e, t, n) {
  return (
    t && vr(e.prototype, t),
    n && vr(e, n),
    Object.defineProperty(e, `prototype`, { writable: !1 }),
    e
  );
}
function br(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n) return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Er(e)) || (t && e && typeof e.length == `number`)) {
    n && (e = n);
    var r = 0;
    return function () {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xr() {
  return (
    (xr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xr.apply(null, arguments)
  );
}
function Sr(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Cr(e, t));
}
function Cr(e, t) {
  return (
    (Cr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    Cr(e, t)
  );
}
function wr(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Tr(e) {
  var t = wr(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Er(e, t) {
  if (e) {
    if (typeof e == `string`) return _r(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? _r(e, t)
          : void 0
    );
  }
}
var Dr = Symbol(`mobx-stored-annotations`);
function Or(e) {
  function t(t, n) {
    if (jr(n)) return e.decorate_20223_(t, n);
    kr(t, n, e);
  }
  return Object.assign(t, e);
}
function kr(e, t, n) {
  (pr(e, Dr) || rr(e, Dr, xr({}, e[Dr])), Gr(n) || (e[Dr][t] = n));
}
function Ar(e) {
  return (pr(e, Dr) || rr(e, Dr, xr({}, e[Dr])), e[Dr]);
}
function jr(e) {
  return typeof e == `object` && typeof e.kind == `string`;
}
var K = Symbol(`mobx administration`),
  Mr = (function () {
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
        return Sa(this);
      }),
      (t.reportChanged = function () {
        (ba(), Ca(this), xa());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      yr(e, [
        {
          key: `isBeingObserved`,
          get: function () {
            return hr(this.flags_, e.isBeingObservedMask_);
          },
          set: function (t) {
            this.flags_ = gr(this.flags_, e.isBeingObservedMask_, t);
          },
        },
        {
          key: `isPendingUnobservation`,
          get: function () {
            return hr(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (t) {
            this.flags_ = gr(this.flags_, e.isPendingUnobservationMask_, t);
          },
        },
        {
          key: `diffValue`,
          get: function () {
            return +!!hr(this.flags_, e.diffValueMask_);
          },
          set: function (t) {
            this.flags_ = gr(this.flags_, e.diffValueMask_, t === 1);
          },
        },
      ])
    );
  })();
((Mr.isBeingObservedMask_ = 1), (Mr.isPendingUnobservationMask_ = 2), (Mr.diffValueMask_ = 4));
var Nr = ar(`Atom`, Mr);
function Pr(e, t, n) {
  (t === void 0 && (t = Zn), n === void 0 && (n = Zn));
  var r = new Mr(e);
  return (t !== Zn && $a(r, t), n !== Zn && eo(r, n), r);
}
function Fr(e, t) {
  return e === t;
}
function Ir(e, t) {
  return Cs(e, t);
}
function Lr(e, t) {
  return Cs(e, t, 1);
}
function Rr(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var zr = { identity: Fr, structural: Ir, default: Rr, shallow: Lr };
function Br(e, t, n) {
  return yo(e)
    ? e
    : Array.isArray(e)
      ? q.array(e, { name: n })
      : tr(e)
        ? q.object(e, void 0, { name: n })
        : or(e)
          ? q.map(e, { name: n })
          : cr(e)
            ? q.set(e, { name: n })
            : typeof e == `function` && !qa(e) && !_o(e)
              ? nr(e)
                ? ho(e)
                : Ka(n, e)
              : e;
}
function Vr(e, t, n) {
  if (e == null || os(e) || Ho(e) || qo(e) || Qo(e)) return e;
  if (Array.isArray(e)) return q.array(e, { name: n, deep: !1 });
  if (tr(e)) return q.object(e, void 0, { name: n, deep: !1 });
  if (or(e)) return q.map(e, { name: n, deep: !1 });
  if (cr(e)) return q.set(e, { name: n, deep: !1 });
}
function Hr(e) {
  return e;
}
function Ur(e, t) {
  return Cs(e, t) ? t : e;
}
var Wr = `override`;
function Gr(e) {
  return e.annotationType_ === Wr;
}
function Kr(e, t) {
  return { annotationType_: e, options_: t, make_: qr, extend_: Jr, decorate_20223_: Yr };
}
function qr(e, t, n, r) {
  var i;
  return (i = this.options_) != null && i.bound
    ? this.extend_(e, t, n, !1) === null
      ? 0
      : 1
    : r === e.target_
      ? this.extend_(e, t, n, !1) === null
        ? 0
        : 2
      : qa(n.value)
        ? 1
        : (Un(r, t, Zr(e, this, t, n, !1)), 2);
}
function Jr(e, t, n, r) {
  var i = Zr(e, this, t, n);
  return e.defineProperty_(t, i, r);
}
function Yr(e, t) {
  var n = t.kind,
    r = t.name,
    i = t.addInitializer,
    a = this,
    o = function (e) {
      return Wi(a.options_?.name ?? r.toString(), e, a.options_?.autoAction ?? !1);
    };
  if (n == `field`)
    return function (e) {
      var t,
        n = e;
      return (
        qa(n) || (n = o(n)),
        (t = a.options_) != null && t.bound && ((n = n.bind(this)), (n.isMobxAction = !0)),
        n
      );
    };
  if (n == `method`) {
    var s;
    return (
      qa(e) || (e = o(e)),
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
function Xr(e, t, n, r) {
  (t.annotationType_, r.value);
}
function Zr(e, t, n, r, i) {
  var a, o;
  (i === void 0 && (i = Y.safeDescriptors), Xr(e, t, n, r));
  var s = r.value;
  return (
    (a = t.options_) != null && a.bound && (s = s.bind(e.proxy_ ?? e.target_)),
    {
      value: Wi(
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
function Qr(e, t) {
  return { annotationType_: e, options_: t, make_: $r, extend_: ei, decorate_20223_: ti };
}
function $r(e, t, n, r) {
  var i;
  return r === e.target_
    ? this.extend_(e, t, n, !1) === null
      ? 0
      : 2
    : (i = this.options_) != null &&
        i.bound &&
        (!pr(e.target_, t) || !_o(e.target_[t])) &&
        this.extend_(e, t, n, !1) === null
      ? 0
      : _o(n.value)
        ? 1
        : (Un(r, t, ri(e, this, t, n, !1, !1)), 2);
}
function ei(e, t, n, r) {
  var i = ri(e, this, t, n, this.options_?.bound);
  return e.defineProperty_(t, i, r);
}
function ti(e, t) {
  var n,
    r = t.name,
    i = t.addInitializer;
  return (
    _o(e) || (e = ho(e)),
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
function ni(e, t, n, r) {
  (t.annotationType_, r.value);
}
function ri(e, t, n, r, i, a) {
  (a === void 0 && (a = Y.safeDescriptors), ni(e, t, n, r));
  var o = r.value;
  return (
    _o(o) || (o = ho(o)),
    i && ((o = o.bind(e.proxy_ ?? e.target_)), (o.isMobXFlow = !0)),
    { value: o, configurable: a ? e.isPlainObject_ : !0, enumerable: !1, writable: !a }
  );
}
function ii(e, t) {
  return { annotationType_: e, options_: t, make_: ai, extend_: oi, decorate_20223_: si };
}
function ai(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function oi(e, t, n, r) {
  return (
    ci(e, this, t, n),
    e.defineComputedProperty_(t, xr({}, this.options_, { get: n.get, set: n.set }), r)
  );
}
function si(e, t) {
  var n = this,
    r = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var t = rs(this)[K],
        i = xr({}, n.options_, { get: e, context: this });
      ((i.name ||= `ObservableObject.` + r.toString()), t.values_.set(r, new Qi(i)));
    }),
    function () {
      return this[K].getObservablePropValue_(r);
    }
  );
}
function ci(e, t, n, r) {
  (t.annotationType_, r.get);
}
function li(e, t) {
  return { annotationType_: e, options_: t, make_: ui, extend_: di, decorate_20223_: fi };
}
function ui(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function di(e, t, n, r) {
  return (
    pi(e, this, t, n),
    e.defineObservableProperty_(t, n.value, this.options_?.enhancer ?? Br, r)
  );
}
function fi(e, t) {
  var n = this,
    r = t.kind,
    i = t.name,
    a = new WeakSet();
  function o(e, t) {
    var r = rs(e)[K],
      o = new Zi(t, n.options_?.enhancer ?? Br, `ObservableObject.` + i.toString(), !1);
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
function pi(e, t, n, r) {
  t.annotationType_;
}
var mi = `true`,
  hi = gi();
function gi(e) {
  return { annotationType_: mi, options_: e, make_: _i, extend_: vi, decorate_20223_: yi };
}
function _i(e, t, n, r) {
  var i;
  if (n.get) return zi.make_(e, t, n, r);
  if (n.set) {
    var a = qa(n.set) ? n.set : Wi(t.toString(), n.set);
    return r === e.target_
      ? e.defineProperty_(t, {
          configurable: Y.safeDescriptors ? e.isPlainObject_ : !0,
          set: a,
        }) === null
        ? 0
        : 2
      : (Un(r, t, { configurable: !0, set: a }), 2);
  }
  if (r !== e.target_ && typeof n.value == `function`) {
    var o;
    if (nr(n.value)) {
      var s;
      return ((s = this.options_) != null && s.autoBind ? ho.bound : ho).make_(e, t, n, r);
    }
    return ((o = this.options_) != null && o.autoBind ? Ka.bound : Ka).make_(e, t, n, r);
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
function vi(e, t, n, r) {
  var i;
  return n.get
    ? zi.extend_(e, t, n, r)
    : n.set
      ? e.defineProperty_(
          t,
          { configurable: Y.safeDescriptors ? e.isPlainObject_ : !0, set: Wi(t.toString(), n.set) },
          r,
        )
      : (typeof n.value == `function` &&
          (i = this.options_) != null &&
          i.autoBind &&
          (n.value = n.value.bind(e.proxy_ ?? e.target_)),
        (this.options_?.deep === !1 ? q.ref : q).extend_(e, t, n, r));
}
function yi(e, t) {
  G(`'` + this.annotationType_ + `' cannot be used as a decorator`);
}
var bi = `observable`,
  xi = `observable.ref`,
  Si = `observable.shallow`,
  Ci = `observable.struct`,
  wi = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(wi);
function Ti(e) {
  return e || wi;
}
var Ei = li(bi),
  Di = li(xi, { enhancer: Hr }),
  Oi = li(Si, { enhancer: Vr }),
  ki = li(Ci, { enhancer: Ur }),
  Ai = Or(Ei);
function ji(e) {
  return e.deep === !0 ? Br : e.deep === !1 ? Hr : Ni(e.defaultDecorator);
}
function Mi(e) {
  return e ? (e.defaultDecorator ?? gi(e)) : void 0;
}
function Ni(e) {
  return e ? (e.options_?.enhancer ?? Br) : Br;
}
function Pi(e, t, n) {
  if (jr(t)) return Ei.decorate_20223_(e, t);
  if ($n(t)) {
    kr(e, t, Ei);
    return;
  }
  return yo(e)
    ? e
    : tr(e)
      ? q.object(e, t, n)
      : Array.isArray(e)
        ? q.array(e, t)
        : or(e)
          ? q.map(e, t)
          : cr(e)
            ? q.set(e, t)
            : typeof e == `object` && e
              ? e
              : q.box(e, t);
}
Vn(Pi, Ai);
var q = Vn(Pi, {
    box: function (e, t) {
      var n = Ti(t);
      return new Zi(e, ji(n), n.name, !0, n.equals);
    },
    array: function (e, t) {
      var n = Ti(t);
      return (Y.useProxies === !1 || n.proxy === !1 ? _s : Io)(e, ji(n), n.name);
    },
    map: function (e, t) {
      var n = Ti(t);
      return new Ko(e, ji(n), n.name);
    },
    set: function (e, t) {
      var n = Ti(t);
      return new Zo(e, ji(n), n.name);
    },
    object: function (e, t, n) {
      return xs(function () {
        return oo(Y.useProxies === !1 || n?.proxy === !1 ? rs({}, n) : Co({}, n), e, t);
      });
    },
    ref: Or(Di),
    shallow: Or(Oi),
    deep: Ai,
    struct: Or(ki),
  }),
  Fi = `computed`,
  Ii = `computed.struct`,
  Li = ii(Fi),
  Ri = ii(Ii, { equals: zr.structural }),
  zi = function (e, t) {
    if (jr(t)) return Li.decorate_20223_(e, t);
    if ($n(t)) return kr(e, t, Li);
    if (tr(e)) return Or(ii(Fi, e));
    var n = tr(t) ? t : {};
    return ((n.get = e), (n.name ||= e.name || ``), new Qi(n));
  };
(Object.assign(zi, Li), (zi.struct = Or(Ri)));
var Bi = 0,
  Vi = 1,
  Hi = Hn(function () {}, `name`)?.configurable ?? !1,
  Ui = { value: `action`, configurable: !0, writable: !1, enumerable: !1 };
function Wi(e, t, n, r) {
  n === void 0 && (n = !1);
  function i() {
    return Gi(e, n, t, r || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    Hi && ((Ui.value = e), Un(i, `name`, Ui)),
    i
  );
}
function Gi(e, t, n, r, i) {
  var a = Ki(e, t, r, i);
  try {
    return n.apply(r, i);
  } catch (e) {
    throw ((a.error_ = e), e);
  } finally {
    qi(a);
  }
}
function Ki(e, t, n, r) {
  var i = !1,
    a = 0,
    o = Y.trackingDerivation,
    s = !t || !o;
  ba();
  var c = Y.allowStateChanges;
  s && (ca(), (c = Yi(!0)));
  var l = ua(!0),
    u = {
      runAsAction_: s,
      prevDerivation_: o,
      prevAllowStateChanges_: c,
      prevAllowStateReads_: l,
      notifySpy_: i,
      startTime_: a,
      actionId_: Vi++,
      parentActionId_: Bi,
    };
  return ((Bi = u.actionId_), u);
}
function qi(e) {
  (Bi !== e.actionId_ && G(30),
    (Bi = e.parentActionId_),
    e.error_ !== void 0 && (Y.suppressReactionErrors = !0),
    Xi(e.prevAllowStateChanges_),
    da(e.prevAllowStateReads_),
    xa(),
    e.runAsAction_ && la(e.prevDerivation_),
    (Y.suppressReactionErrors = !1));
}
function Ji(e, t) {
  var n = Yi(e);
  try {
    return t();
  } finally {
    Xi(n);
  }
}
function Yi(e) {
  var t = Y.allowStateChanges;
  return ((Y.allowStateChanges = e), t);
}
function Xi(e) {
  Y.allowStateChanges = e;
}
var Zi = (function (e) {
    function t(t, n, r, i, a) {
      var o;
      return (
        r === void 0 && (r = `ObservableValue`),
        i === void 0 && (i = !0),
        a === void 0 && (a = zr.default),
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
    Sr(t, e);
    var n = t.prototype;
    return (
      (n.dehanceValue = function (e) {
        return this.dehancer === void 0 ? e : this.dehancer(e);
      }),
      (n.set = function (e) {
        (this.value_, (e = this.prepareNewValue_(e)), e !== Y.UNCHANGED && this.setNewValue_(e));
      }),
      (n.prepareNewValue_ = function (e) {
        if (wo(this)) {
          var t = Eo(this, { object: this, type: Mo, newValue: e });
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
          Do(this) && ko(this, { type: Mo, object: this, newValue: e, oldValue: t }));
      }),
      (n.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (n.intercept_ = function (e) {
        return To(this, e);
      }),
      (n.observe_ = function (e, t) {
        return (
          t &&
            e({
              observableKind: `value`,
              debugObjectName: this.name_,
              object: this,
              type: Mo,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Oo(this, e)
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
        return fr(this.get());
      }),
      (n[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(Mr),
  Qi = (function () {
    function e(e) {
      ((this.dependenciesState_ = J.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = J.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new ta(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = ea.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        e.get || G(31),
        (this.derivation = e.get),
        (this.name_ = e.name || `ComputedValue`),
        e.set && (this.setter_ = Wi(`ComputedValue-setter`, e.set)),
        (this.equals_ = e.equals || (e.compareStructural || e.struct ? zr.structural : zr.default)),
        (this.scope_ = e.context),
        (this.requiresReaction_ = e.requiresReaction),
        (this.keepAlive_ = !!e.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Ta(this);
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
          ra(this) &&
            (this.warnAboutUntrackedRead_(), ba(), (this.value_ = this.computeValue_(!1)), xa());
        else if ((Sa(this), ra(this))) {
          var e = Y.trackingContext;
          (this.keepAlive_ && !e && (Y.trackingContext = this),
            this.trackAndCompute() && wa(this),
            (Y.trackingContext = e));
        }
        var t = this.value_;
        if (na(t)) throw t.cause;
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
          r = t || na(e) || na(n) || !this.equals_(e, n);
        return (r && (this.value_ = n), r);
      }),
      (t.computeValue_ = function (e) {
        this.isComputing = !0;
        var t = Yi(!1),
          n;
        if (e) n = ia(this, this.derivation, this.scope_);
        else if (Y.disableErrorBoundaries === !0) n = this.derivation.call(this.scope_);
        else
          try {
            n = this.derivation.call(this.scope_);
          } catch (e) {
            n = new ta(e);
          }
        return (Xi(t), (this.isComputing = !1), n);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (oa(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (e, t) {
        var n = this,
          r = !0,
          i = void 0;
        return Ja(function () {
          var a = n.get();
          if (!r || t) {
            var o = ca();
            (e({
              observableKind: `computed`,
              debugObjectName: n.name_,
              type: Mo,
              object: n,
              newValue: a,
              oldValue: i,
            }),
              la(o));
          }
          ((r = !1), (i = a));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + `[` + this.derivation.toString() + `]`;
      }),
      (t.valueOf = function () {
        return fr(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      yr(e, [
        {
          key: `isComputing`,
          get: function () {
            return hr(this.flags_, e.isComputingMask_);
          },
          set: function (t) {
            this.flags_ = gr(this.flags_, e.isComputingMask_, t);
          },
        },
        {
          key: `isRunningSetter`,
          get: function () {
            return hr(this.flags_, e.isRunningSetterMask_);
          },
          set: function (t) {
            this.flags_ = gr(this.flags_, e.isRunningSetterMask_, t);
          },
        },
        {
          key: `isBeingObserved`,
          get: function () {
            return hr(this.flags_, e.isBeingObservedMask_);
          },
          set: function (t) {
            this.flags_ = gr(this.flags_, e.isBeingObservedMask_, t);
          },
        },
        {
          key: `isPendingUnobservation`,
          get: function () {
            return hr(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (t) {
            this.flags_ = gr(this.flags_, e.isPendingUnobservationMask_, t);
          },
        },
        {
          key: `diffValue`,
          get: function () {
            return +!!hr(this.flags_, e.diffValueMask_);
          },
          set: function (t) {
            this.flags_ = gr(this.flags_, e.diffValueMask_, t === 1);
          },
        },
      ])
    );
  })();
((Qi.isComputingMask_ = 1),
  (Qi.isRunningSetterMask_ = 2),
  (Qi.isBeingObservedMask_ = 4),
  (Qi.isPendingUnobservationMask_ = 8),
  (Qi.diffValueMask_ = 16));
var $i = ar(`ComputedValue`, Qi),
  J;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = `NOT_TRACKING_`),
    (e[(e.UP_TO_DATE_ = 0)] = `UP_TO_DATE_`),
    (e[(e.POSSIBLY_STALE_ = 1)] = `POSSIBLY_STALE_`),
    (e[(e.STALE_ = 2)] = `STALE_`));
})((J ||= {}));
var ea;
(function (e) {
  ((e[(e.NONE = 0)] = `NONE`), (e[(e.LOG = 1)] = `LOG`), (e[(e.BREAK = 2)] = `BREAK`));
})((ea ||= {}));
var ta = function (e) {
  ((this.cause = void 0), (this.cause = e));
};
function na(e) {
  return e instanceof ta;
}
function ra(e) {
  switch (e.dependenciesState_) {
    case J.UP_TO_DATE_:
      return !1;
    case J.NOT_TRACKING_:
    case J.STALE_:
      return !0;
    case J.POSSIBLY_STALE_:
      for (var t = ua(!0), n = ca(), r = e.observing_, i = r.length, a = 0; a < i; a++) {
        var o = r[a];
        if ($i(o)) {
          if (Y.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (la(n), da(t), !0);
            }
          if (e.dependenciesState_ === J.STALE_) return (la(n), da(t), !0);
        }
      }
      return (fa(e), la(n), da(t), !1);
  }
}
function ia(e, t, n) {
  var r = ua(!0);
  (fa(e),
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
      a = new ta(e);
    }
  return (Y.inBatch--, (Y.trackingDerivation = i), aa(e), da(r), a);
}
function aa(e) {
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
    (c.diffValue === 0 && va(c, e), (c.diffValue = 0));
  }
  for (; i--; ) {
    var l = n[i];
    l.diffValue === 1 && ((l.diffValue = 0), _a(l, e));
  }
  r !== J.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
}
function oa(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var n = t.length; n--; ) va(t[n], e);
  e.dependenciesState_ = J.NOT_TRACKING_;
}
function sa(e) {
  var t = ca();
  try {
    return e();
  } finally {
    la(t);
  }
}
function ca() {
  var e = Y.trackingDerivation;
  return ((Y.trackingDerivation = null), e);
}
function la(e) {
  Y.trackingDerivation = e;
}
function ua(e) {
  var t = Y.allowStateReads;
  return ((Y.allowStateReads = e), t);
}
function da(e) {
  Y.allowStateReads = e;
}
function fa(e) {
  if (e.dependenciesState_ !== J.UP_TO_DATE_) {
    e.dependenciesState_ = J.UP_TO_DATE_;
    for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = J.UP_TO_DATE_;
  }
}
var pa = function () {
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
  ma = !0,
  ha = !1,
  Y = (function () {
    var e = Bn();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ma = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new pa().version && (ma = !1),
      ma
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new pa()))
        : (setTimeout(function () {
            ha || G(35);
          }, 1),
          new pa())
    );
  })();
function ga() {
  if (((Y.pendingReactions.length || Y.inBatch || Y.isRunningReactions) && G(36), (ha = !0), ma)) {
    var e = Bn();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (Y = new pa()));
  }
}
function _a(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function va(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && ya(e));
}
function ya(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), Y.pendingUnobservations.push(e));
}
function ba() {
  Y.inBatch++;
}
function xa() {
  if (--Y.inBatch === 0) {
    ka();
    for (var e = Y.pendingUnobservations, t = 0; t < e.length; t++) {
      var n = e[t];
      ((n.isPendingUnobservation = !1),
        n.observers_.size === 0 &&
          (n.isBeingObserved && ((n.isBeingObserved = !1), n.onBUO()),
          n instanceof Qi && n.suspend_()));
    }
    Y.pendingUnobservations = [];
  }
}
function Sa(e) {
  var t = Y.trackingDerivation;
  return t === null
    ? (e.observers_.size === 0 && Y.inBatch > 0 && ya(e), !1)
    : (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && Y.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved);
}
function Ca(e) {
  e.lowestObserverState_ !== J.STALE_ &&
    ((e.lowestObserverState_ = J.STALE_),
    e.observers_.forEach(function (e) {
      (e.dependenciesState_ === J.UP_TO_DATE_ && e.onBecomeStale_(),
        (e.dependenciesState_ = J.STALE_));
    }));
}
function wa(e) {
  e.lowestObserverState_ !== J.STALE_ &&
    ((e.lowestObserverState_ = J.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === J.POSSIBLY_STALE_
        ? (t.dependenciesState_ = J.STALE_)
        : t.dependenciesState_ === J.UP_TO_DATE_ && (e.lowestObserverState_ = J.UP_TO_DATE_);
    }));
}
function Ta(e) {
  e.lowestObserverState_ === J.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = J.POSSIBLY_STALE_),
    e.observers_.forEach(function (e) {
      e.dependenciesState_ === J.UP_TO_DATE_ &&
        ((e.dependenciesState_ = J.POSSIBLY_STALE_), e.onBecomeStale_());
    }));
}
var Ea = (function () {
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
      (this.isTracing_ = ea.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), Y.pendingReactions.push(this), ka());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (ba(), (this.isScheduled = !1));
        var e = Y.trackingContext;
        if (((Y.trackingContext = this), ra(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (e) {
            this.reportExceptionInDerivation_(e);
          }
        }
        ((Y.trackingContext = e), xa());
      }
    }),
    (t.track = function (e) {
      if (!this.isDisposed) {
        (ba(), (this.isRunning = !0));
        var t = Y.trackingContext;
        Y.trackingContext = this;
        var n = ia(this, e, void 0);
        ((Y.trackingContext = t),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && oa(this),
          na(n) && this.reportExceptionInDerivation_(n.cause),
          xa());
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (ba(), oa(this), xa()));
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
    yr(e, [
      {
        key: `isDisposed`,
        get: function () {
          return hr(this.flags_, e.isDisposedMask_);
        },
        set: function (t) {
          this.flags_ = gr(this.flags_, e.isDisposedMask_, t);
        },
      },
      {
        key: `isScheduled`,
        get: function () {
          return hr(this.flags_, e.isScheduledMask_);
        },
        set: function (t) {
          this.flags_ = gr(this.flags_, e.isScheduledMask_, t);
        },
      },
      {
        key: `isTrackPending`,
        get: function () {
          return hr(this.flags_, e.isTrackPendingMask_);
        },
        set: function (t) {
          this.flags_ = gr(this.flags_, e.isTrackPendingMask_, t);
        },
      },
      {
        key: `isRunning`,
        get: function () {
          return hr(this.flags_, e.isRunningMask_);
        },
        set: function (t) {
          this.flags_ = gr(this.flags_, e.isRunningMask_, t);
        },
      },
      {
        key: `diffValue`,
        get: function () {
          return +!!hr(this.flags_, e.diffValueMask_);
        },
        set: function (t) {
          this.flags_ = gr(this.flags_, e.diffValueMask_, t === 1);
        },
      },
    ])
  );
})();
((Ea.isDisposedMask_ = 1),
  (Ea.isScheduledMask_ = 2),
  (Ea.isTrackPendingMask_ = 4),
  (Ea.isRunningMask_ = 8),
  (Ea.diffValueMask_ = 16));
var Da = 100,
  Oa = function (e) {
    return e();
  };
function ka() {
  Y.inBatch > 0 || Y.isRunningReactions || Oa(Aa);
}
function Aa() {
  Y.isRunningReactions = !0;
  for (var e = Y.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Da && (console.error(`[mobx] cycle in reaction: ` + e[0]), e.splice(0));
    for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
  }
  Y.isRunningReactions = !1;
}
var ja = ar(`Reaction`, Ea);
function Ma(e) {
  var t = Oa;
  Oa = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function Na() {
  return !1;
}
function Pa(e) {
  return (console.warn(`[mobx.spy] Is a no-op in production builds`), function () {});
}
var Fa = `action`,
  Ia = `action.bound`,
  La = `autoAction`,
  Ra = `autoAction.bound`,
  za = `<unnamed action>`,
  Ba = Kr(Fa),
  Va = Kr(Ia, { bound: !0 }),
  Ha = Kr(La, { autoAction: !0 }),
  Ua = Kr(Ra, { autoAction: !0, bound: !0 });
function Wa(e) {
  return function (t, n) {
    if (Qn(t)) return Wi(t.name || za, t, e);
    if (Qn(n)) return Wi(t, n, e);
    if (jr(n)) return (e ? Ha : Ba).decorate_20223_(t, n);
    if ($n(n)) return kr(t, n, e ? Ha : Ba);
    if ($n(t)) return Or(Kr(e ? La : Fa, { name: t, autoAction: e }));
  };
}
var Ga = Wa(!1);
Object.assign(Ga, Ba);
var Ka = Wa(!0);
(Object.assign(Ka, Ha), (Ga.bound = Or(Va)), (Ka.bound = Or(Ua)));
function qa(e) {
  return Qn(e) && e.isMobxAction === !0;
}
function Ja(e, t) {
  var n;
  t === void 0 && (t = Kn);
  var r = t?.name ?? `Autorun`,
    i = !t.scheduler && !t.delay,
    a;
  if (i)
    a = new Ea(
      r,
      function () {
        this.track(c);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var o = Xa(t),
      s = !1;
    a = new Ea(
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
var Ya = function (e) {
  return e();
};
function Xa(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Ya;
}
var Za = `onBO`,
  Qa = `onBUO`;
function $a(e, t, n) {
  return to(Za, e, t, n);
}
function eo(e, t, n) {
  return to(Qa, e, t, n);
}
function to(e, t, n, r) {
  var i = typeof r == `function` ? vs(t, n) : vs(t),
    a = Qn(r) ? r : n,
    o = e + `L`;
  return (
    i[o] ? i[o].add(a) : (i[o] = new Set([a])),
    function () {
      var e = i[o];
      e && (e.delete(a), e.size === 0 && delete i[o]);
    }
  );
}
var no = `never`,
  ro = `always`,
  io = `observed`;
function ao(e) {
  e.isolateGlobalState === !0 && ga();
  var t = e.useProxies,
    n = e.enforceActions;
  if (
    (t !== void 0 && (Y.useProxies = t === ro ? !0 : t === no ? !1 : typeof Proxy < `u`),
    t === `ifavailable` && (Y.verifyProxies = !0),
    n !== void 0)
  ) {
    var r = n === ro ? ro : n === io;
    ((Y.enforceActions = r), (Y.allowStateChanges = !(r === !0 || r === ro)));
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
    e.reactionScheduler && Ma(e.reactionScheduler));
}
function oo(e, t, n, r) {
  var i = mr(t);
  return (
    xs(function () {
      var t = rs(e, r)[K];
      dr(i).forEach(function (e) {
        t.extend_(e, i[e], n && e in n ? n[e] : !0);
      });
    }),
    e
  );
}
function so(e, t) {
  return co(vs(e, t));
}
function co(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = lo(e.observing_).map(co)),
    t
  );
}
function lo(e) {
  return Array.from(new Set(e));
}
var uo = 0;
function fo() {
  this.message = `FLOW_CANCELLED`;
}
fo.prototype = Object.create(Error.prototype);
var po = Qr(`flow`),
  mo = Qr(`flow.bound`, { bound: !0 }),
  ho = Object.assign(function (e, t) {
    if (jr(t)) return po.decorate_20223_(e, t);
    if ($n(t)) return kr(e, t, po);
    var n = e,
      r = n.name || `<unnamed flow>`,
      i = function () {
        var e = this,
          t = arguments,
          i = ++uo,
          a = Ga(r + ` - runid: ` + i + ` - init`, n).apply(e, t),
          o,
          s = void 0,
          c = new Promise(function (e, t) {
            var n = 0;
            o = t;
            function c(e) {
              s = void 0;
              var o;
              try {
                o = Ga(r + ` - runid: ` + i + ` - yield ` + n++, a.next).call(a, e);
              } catch (e) {
                return t(e);
              }
              u(o);
            }
            function l(e) {
              s = void 0;
              var o;
              try {
                o = Ga(r + ` - runid: ` + i + ` - yield ` + n++, a.throw).call(a, e);
              } catch (e) {
                return t(e);
              }
              u(o);
            }
            function u(n) {
              if (Qn(n?.then)) {
                n.then(u, t);
                return;
              }
              return n.done ? e(n.value) : ((s = Promise.resolve(n.value)), s.then(c, l));
            }
            c(void 0);
          });
        return (
          (c.cancel = Ga(r + ` - runid: ` + i + ` - cancel`, function () {
            try {
              s && go(s);
              var e = a.return(void 0),
                t = Promise.resolve(e.value);
              (t.then(Zn, Zn), go(t), o(new fo()));
            } catch (e) {
              o(e);
            }
          })),
          c
        );
      };
    return ((i.isMobXFlow = !0), i);
  }, po);
ho.bound = Or(mo);
function go(e) {
  Qn(e.cancel) && e.cancel();
}
function _o(e) {
  return e?.isMobXFlow === !0;
}
function vo(e, t) {
  return e
    ? t === void 0
      ? os(e) || !!e[K] || Nr(e) || ja(e) || $i(e)
      : os(e)
        ? e[K].values_.has(t)
        : !1
    : !1;
}
function yo(e) {
  return vo(e);
}
function bo(e, t) {
  (t === void 0 && (t = void 0), ba());
  try {
    return e.apply(t);
  } finally {
    xa();
  }
}
function xo(e) {
  return e[K];
}
var So = {
  has: function (e, t) {
    return xo(e).has_(t);
  },
  get: function (e, t) {
    return xo(e).get_(t);
  },
  set: function (e, t, n) {
    return $n(t) ? (xo(e).set_(t, n, !0) ?? !0) : !1;
  },
  deleteProperty: function (e, t) {
    return $n(t) ? (xo(e).delete_(t, !0) ?? !0) : !1;
  },
  defineProperty: function (e, t, n) {
    return xo(e).defineProperty_(t, n) ?? !0;
  },
  ownKeys: function (e) {
    return xo(e).ownKeys_();
  },
  preventExtensions: function (e) {
    G(13);
  },
};
function Co(e, t) {
  var n;
  return (Yn(), (e = rs(e, t)), (n = e[K]).proxy_ ?? (n.proxy_ = new Proxy(e, So)));
}
function wo(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function To(e, t) {
  var n = (e.interceptors_ ||= []);
  return (
    n.push(t),
    Xn(function () {
      var e = n.indexOf(t);
      e !== -1 && n.splice(e, 1);
    })
  );
}
function Eo(e, t) {
  var n = ca();
  try {
    for (
      var r = [].concat(e.interceptors_ || []), i = 0, a = r.length;
      i < a && ((t = r[i](t)), t && !t.type && G(14), t);
      i++
    );
    return t;
  } finally {
    la(n);
  }
}
function Do(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Oo(e, t) {
  var n = (e.changeListeners_ ||= []);
  return (
    n.push(t),
    Xn(function () {
      var e = n.indexOf(t);
      e !== -1 && n.splice(e, 1);
    })
  );
}
function ko(e, t) {
  var n = ca(),
    r = e.changeListeners_;
  if (r) {
    r = r.slice();
    for (var i = 0, a = r.length; i < a; i++) r[i](t);
    la(n);
  }
}
function Ao(e, t, n) {
  return (
    xs(function () {
      var r = rs(e, n)[K];
      ((t ??= Ar(e)),
        dr(t).forEach(function (e) {
          return r.make_(e, t[e]);
        }));
    }),
    e
  );
}
var jo = `splice`,
  Mo = `update`,
  No = 1e4,
  Po = {
    get: function (e, t) {
      var n = e[K];
      return t === K
        ? n
        : t === `length`
          ? n.getArrayLength_()
          : typeof t == `string` && !isNaN(t)
            ? n.get_(parseInt(t))
            : pr(Lo, t)
              ? Lo[t]
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
  Fo = (function () {
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
        (this.atom_ = new Mr(e)),
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
        return To(this, e);
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
          Oo(this, e)
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
          this.legacyMode_ && t > 0 && gs(e + t + 1));
      }),
      (t.spliceWithArray_ = function (e, t, n) {
        var r = this;
        this.atom_;
        var i = this.values_.length;
        if (
          (e === void 0 ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
          (t = arguments.length === 1 ? i - e : t == null ? 0 : Math.max(0, Math.min(t, i - e))),
          n === void 0 && (n = Gn),
          wo(this))
        ) {
          var a = Eo(this, { object: this.proxy_, type: jo, index: e, removedCount: t, added: n });
          if (!a) return Gn;
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
        if (n.length < No) {
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
        var r = !this.owned_ && Na(),
          i = Do(this),
          a =
            i || r
              ? {
                  observableKind: `array`,
                  object: this.proxy_,
                  type: Mo,
                  debugObjectName: this.atom_.name_,
                  index: e,
                  newValue: t,
                  oldValue: n,
                }
              : null;
        (this.atom_.reportChanged(), i && ko(this, a));
      }),
      (t.notifyArraySplice_ = function (e, t, n) {
        var r = !this.owned_ && Na(),
          i = Do(this),
          a =
            i || r
              ? {
                  observableKind: `array`,
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: jo,
                  index: e,
                  removed: n,
                  added: t,
                  removedCount: n.length,
                  addedCount: t.length,
                }
              : null;
        (this.atom_.reportChanged(), i && ko(this, a));
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
          if (wo(this)) {
            var i = Eo(this, { type: Mo, object: this.proxy_, index: e, newValue: t });
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
function Io(e, t, n, r) {
  return (
    n === void 0 && (n = `ObservableArray`),
    r === void 0 && (r = !1),
    Yn(),
    xs(function () {
      var i = new Fo(n, t, r, !1);
      ir(i.values_, K, i);
      var a = new Proxy(i.values_, Po);
      return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
    })
  );
}
var Lo = {
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
(X(`at`, Ro),
  X(`concat`, Ro),
  X(`flat`, Ro),
  X(`includes`, Ro),
  X(`indexOf`, Ro),
  X(`join`, Ro),
  X(`lastIndexOf`, Ro),
  X(`slice`, Ro),
  X(`toString`, Ro),
  X(`toLocaleString`, Ro),
  X(`toSorted`, Ro),
  X(`toSpliced`, Ro),
  X(`with`, Ro),
  X(`every`, zo),
  X(`filter`, zo),
  X(`find`, zo),
  X(`findIndex`, zo),
  X(`findLast`, zo),
  X(`findLastIndex`, zo),
  X(`flatMap`, zo),
  X(`forEach`, zo),
  X(`map`, zo),
  X(`some`, zo),
  X(`toReversed`, zo),
  X(`reduce`, Bo),
  X(`reduceRight`, Bo));
function X(e, t) {
  typeof Array.prototype[e] == `function` && (Lo[e] = t(e));
}
function Ro(e) {
  return function () {
    var t = this[K];
    t.atom_.reportObserved();
    var n = t.dehanceValues_(t.values_);
    return n[e].apply(n, arguments);
  };
}
function zo(e) {
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
function Bo(e) {
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
var Vo = ar(`ObservableArrayAdministration`, Fo);
function Ho(e) {
  return er(e) && Vo(e[K]);
}
var Uo = {},
  Wo = `add`,
  Go = `delete`,
  Ko = (function () {
    function e(e, t, n) {
      var r = this;
      (t === void 0 && (t = Br),
        n === void 0 && (n = `ObservableMap`),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[K] = Uo),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = t),
        (this.name_ = n),
        Qn(Map) || G(18),
        xs(function () {
          ((r.keysAtom_ = Pr(`ObservableMap.keys()`)),
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
          var r = (n = new Zi(this.has_(e), Hr, `ObservableMap.key?`, !1));
          (this.hasMap_.set(e, r),
            eo(r, function () {
              return t.hasMap_.delete(e);
            }));
        }
        return n.get();
      }),
      (t.set = function (e, t) {
        var n = this.has_(e);
        if (wo(this)) {
          var r = Eo(this, { type: n ? Mo : Wo, object: this, newValue: t, name: e });
          if (!r) return this;
          t = r.newValue;
        }
        return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
      }),
      (t.delete = function (e) {
        var t = this;
        if ((this.keysAtom_, wo(this) && !Eo(this, { type: Go, object: this, name: e }))) return !1;
        if (this.has_(e)) {
          var n = Na(),
            r = Do(this),
            i =
              r || n
                ? {
                    observableKind: `map`,
                    debugObjectName: this.name_,
                    type: Go,
                    object: this,
                    oldValue: this.data_.get(e).value_,
                    name: e,
                  }
                : null;
          return (
            bo(function () {
              var n;
              (t.keysAtom_.reportChanged(),
                (n = t.hasMap_.get(e)) == null || n.setNewValue_(!1),
                t.data_.get(e).setNewValue_(void 0),
                t.data_.delete(e));
            }),
            r && ko(this, i),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (e, t) {
        var n = this.data_.get(e);
        if (((t = n.prepareNewValue_(t)), t !== Y.UNCHANGED)) {
          var r = Na(),
            i = Do(this),
            a =
              i || r
                ? {
                    observableKind: `map`,
                    debugObjectName: this.name_,
                    type: Mo,
                    object: this,
                    oldValue: n.value_,
                    name: e,
                    newValue: t,
                  }
                : null;
          (n.setNewValue_(t), i && ko(this, a));
        }
      }),
      (t.addValue_ = function (e, t) {
        var n = this;
        (this.keysAtom_,
          bo(function () {
            var r,
              i = new Zi(t, n.enhancer_, `ObservableMap.key`, !1);
            (n.data_.set(e, i),
              (t = i.value_),
              (r = n.hasMap_.get(e)) == null || r.setNewValue_(!0),
              n.keysAtom_.reportChanged());
          }));
        var r = Na(),
          i = Do(this),
          a =
            i || r
              ? {
                  observableKind: `map`,
                  debugObjectName: this.name_,
                  type: Wo,
                  object: this,
                  name: e,
                  newValue: t,
                }
              : null;
        i && ko(this, a);
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
        return Jo({
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
        return Jo({
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
        for (var n = br(this), r; !(r = n()).done; ) {
          var i = r.value,
            a = i[0],
            o = i[1];
          e.call(t, o, a, this);
        }
      }),
      (t.merge = function (e) {
        var t = this;
        return (
          qo(e) && (e = new Map(e)),
          bo(function () {
            tr(e)
              ? ur(e).forEach(function (n) {
                  return t.set(n, e[n]);
                })
              : Array.isArray(e)
                ? e.forEach(function (e) {
                    var n = e[0],
                      r = e[1];
                    return t.set(n, r);
                  })
                : or(e)
                  ? (sr(e) || G(19, e),
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
        bo(function () {
          sa(function () {
            for (var t = br(e.keys()), n; !(n = t()).done; ) {
              var r = n.value;
              e.delete(r);
            }
          });
        });
      }),
      (t.replace = function (e) {
        var t = this;
        return (
          bo(function () {
            for (
              var n = Yo(e), r = new Map(), i = !1, a = br(t.data_.keys()), o;
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
            for (var l = br(n.entries()), u; !(u = l()).done; ) {
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
        return Oo(this, e);
      }),
      (t.intercept_ = function (e) {
        return To(this, e);
      }),
      yr(e, [
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
  qo = ar(`ObservableMap`, Ko);
function Jo(e) {
  return ((e[Symbol.toStringTag] = `MapIterator`), Ds(e));
}
function Yo(e) {
  if (or(e) || qo(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (tr(e)) {
    var t = new Map();
    for (var n in e) t.set(n, e[n]);
    return t;
  } else return G(21, e);
}
var Xo = {},
  Zo = (function () {
    function e(e, t, n) {
      var r = this;
      (t === void 0 && (t = Br),
        n === void 0 && (n = `ObservableSet`),
        (this.name_ = void 0),
        (this[K] = Xo),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = n),
        Qn(Set) || G(22),
        (this.enhancer_ = function (e, r) {
          return t(e, r, n);
        }),
        xs(function () {
          ((r.atom_ = Pr(r.name_)), e && r.replace(e));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (e) {
        return this.dehancer === void 0 ? e : this.dehancer(e);
      }),
      (t.clear = function () {
        var e = this;
        bo(function () {
          sa(function () {
            for (var t = br(e.data_.values()), n; !(n = t()).done; ) {
              var r = n.value;
              e.delete(r);
            }
          });
        });
      }),
      (t.forEach = function (e, t) {
        for (var n = br(this), r; !(r = n()).done; ) {
          var i = r.value;
          e.call(t, i, i, this);
        }
      }),
      (t.add = function (e) {
        var t = this;
        if ((this.atom_, wo(this))) {
          var n = Eo(this, { type: Wo, object: this, newValue: e });
          if (!n) return this;
          e = n.newValue;
        }
        if (!this.has(e)) {
          bo(function () {
            (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
          });
          var r = !1,
            i = Do(this),
            a =
              i || r
                ? {
                    observableKind: `set`,
                    debugObjectName: this.name_,
                    type: Wo,
                    object: this,
                    newValue: e,
                  }
                : null;
          i && ko(this, a);
        }
        return this;
      }),
      (t.delete = function (e) {
        var t = this;
        if (wo(this) && !Eo(this, { type: Go, object: this, oldValue: e })) return !1;
        if (this.has(e)) {
          var n = !1,
            r = Do(this),
            i =
              r || n
                ? {
                    observableKind: `set`,
                    debugObjectName: this.name_,
                    type: Go,
                    object: this,
                    oldValue: e,
                  }
                : null;
          return (
            bo(function () {
              (t.atom_.reportChanged(), t.data_.delete(e));
            }),
            r && ko(this, i),
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
        return $o({
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
        return $o({
          next: function () {
            var n = t.next(),
              r = n.value,
              i = n.done;
            return i ? { value: void 0, done: i } : { value: e.dehanceValue_(r), done: i };
          },
        });
      }),
      (t.intersection = function (e) {
        return cr(e) && !Qo(e) ? e.intersection(this) : new Set(this).intersection(e);
      }),
      (t.union = function (e) {
        return cr(e) && !Qo(e) ? e.union(this) : new Set(this).union(e);
      }),
      (t.difference = function (e) {
        return new Set(this).difference(e);
      }),
      (t.symmetricDifference = function (e) {
        return cr(e) && !Qo(e) ? e.symmetricDifference(this) : new Set(this).symmetricDifference(e);
      }),
      (t.isSubsetOf = function (e) {
        return new Set(this).isSubsetOf(e);
      }),
      (t.isSupersetOf = function (e) {
        return new Set(this).isSupersetOf(e);
      }),
      (t.isDisjointFrom = function (e) {
        return cr(e) && !Qo(e) ? e.isDisjointFrom(this) : new Set(this).isDisjointFrom(e);
      }),
      (t.replace = function (e) {
        var t = this;
        return (
          Qo(e) && (e = new Set(e)),
          bo(function () {
            Array.isArray(e) || cr(e)
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
        return Oo(this, e);
      }),
      (t.intercept_ = function (e) {
        return To(this, e);
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
      yr(e, [
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
  Qo = ar(`ObservableSet`, Zo);
function $o(e) {
  return ((e[Symbol.toStringTag] = `SetIterator`), Ds(e));
}
var es = Object.create(null),
  ts = `remove`,
  ns = (function () {
    function e(e, t, n, r) {
      (t === void 0 && (t = new Map()),
        r === void 0 && (r = hi),
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
        (this.keysAtom_ = new Mr(`ObservableObject.keys`)),
        (this.isPlainObject_ = tr(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (e) {
        return this.values_.get(e).get();
      }),
      (t.setObservablePropValue_ = function (e, t) {
        var n = this.values_.get(e);
        if (n instanceof Qi) return (n.set(t), !0);
        if (wo(this)) {
          var r = Eo(this, { type: Mo, object: this.proxy_ || this.target_, name: e, newValue: t });
          if (!r) return null;
          t = r.newValue;
        }
        if (((t = n.prepareNewValue_(t)), t !== Y.UNCHANGED)) {
          var i = Do(this),
            a = i
              ? {
                  type: Mo,
                  observableKind: `object`,
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  oldValue: n.value_,
                  name: e,
                  newValue: t,
                }
              : null;
          (n.setNewValue_(t), i && ko(this, a));
        }
        return !0;
      }),
      (t.get_ = function (e) {
        return (Y.trackingDerivation && !pr(this.target_, e) && this.has_(e), this.target_[e]);
      }),
      (t.set_ = function (e, t, n) {
        return (
          n === void 0 && (n = !1),
          pr(this.target_, e)
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
            ((t = new Zi(e in this.target_, Hr, `ObservableObject.key?`, !1)),
            this.pendingKeys_.set(e, t)),
          t.get()
        );
      }),
      (t.make_ = function (e, t) {
        if ((t === !0 && (t = this.defaultAnnotation_), t !== !1)) {
          if (!(e in this.target_)) {
            var n;
            if ((n = this.target_[Dr]) != null && n[e]) return;
            G(1, t.annotationType_, this.name_ + `.` + e.toString());
          }
          for (var r = this.target_; r && r !== Wn; ) {
            var i = Hn(r, e);
            if (i) {
              var a = t.make_(this, e, i, r);
              if (a === 0) return;
              if (a === 1) break;
            }
            r = Object.getPrototypeOf(r);
          }
          ss(this, t, e);
        }
      }),
      (t.extend_ = function (e, t, n, r) {
        if ((r === void 0 && (r = !1), n === !0 && (n = this.defaultAnnotation_), n === !1))
          return this.defineProperty_(e, t, r);
        var i = n.extend_(this, e, t, r);
        return (i && ss(this, n, e), i);
      }),
      (t.defineProperty_ = function (e, t, n) {
        (n === void 0 && (n = !1), this.keysAtom_);
        try {
          ba();
          var r = this.delete_(e);
          if (!r) return r;
          if (wo(this)) {
            var i = Eo(this, {
              object: this.proxy_ || this.target_,
              name: e,
              type: Wo,
              newValue: t.value,
            });
            if (!i) return null;
            var a = i.newValue;
            t.value !== a && (t = xr({}, t, { value: a }));
          }
          if (n) {
            if (!Reflect.defineProperty(this.target_, e, t)) return !1;
          } else Un(this.target_, e, t);
          this.notifyPropertyAddition_(e, t.value);
        } finally {
          xa();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (e, t, n, r) {
        (r === void 0 && (r = !1), this.keysAtom_);
        try {
          ba();
          var i = this.delete_(e);
          if (!i) return i;
          if (wo(this)) {
            var a = Eo(this, {
              object: this.proxy_ || this.target_,
              name: e,
              type: Wo,
              newValue: t,
            });
            if (!a) return null;
            t = a.newValue;
          }
          var o = as(e),
            s = {
              configurable: Y.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: o.get,
              set: o.set,
            };
          if (r) {
            if (!Reflect.defineProperty(this.target_, e, s)) return !1;
          } else Un(this.target_, e, s);
          var c = new Zi(t, n, `ObservableObject.key`, !1);
          (this.values_.set(e, c), this.notifyPropertyAddition_(e, c.value_));
        } finally {
          xa();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (e, t, n) {
        (n === void 0 && (n = !1), this.keysAtom_);
        try {
          ba();
          var r = this.delete_(e);
          if (!r) return r;
          if (
            wo(this) &&
            !Eo(this, { object: this.proxy_ || this.target_, name: e, type: Wo, newValue: void 0 })
          )
            return null;
          ((t.name ||= `ObservableObject.key`), (t.context = this.proxy_ || this.target_));
          var i = as(e),
            a = {
              configurable: Y.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: i.get,
              set: i.set,
            };
          if (n) {
            if (!Reflect.defineProperty(this.target_, e, a)) return !1;
          } else Un(this.target_, e, a);
          (this.values_.set(e, new Qi(t)), this.notifyPropertyAddition_(e, void 0));
        } finally {
          xa();
        }
        return !0;
      }),
      (t.delete_ = function (e, t) {
        if ((t === void 0 && (t = !1), this.keysAtom_, !pr(this.target_, e))) return !0;
        if (wo(this) && !Eo(this, { object: this.proxy_ || this.target_, name: e, type: ts }))
          return null;
        try {
          var n;
          ba();
          var r = Do(this),
            i = !1,
            a = this.values_.get(e),
            o = void 0;
          if ((!a && (r || i) && (o = Hn(this.target_, e)?.value), t)) {
            if (!Reflect.deleteProperty(this.target_, e)) return !1;
          } else delete this.target_[e];
          if (
            (a && (this.values_.delete(e), a instanceof Zi && (o = a.value_), Ca(a)),
            this.keysAtom_.reportChanged(),
            (n = this.pendingKeys_) == null || (n = n.get(e)) == null || n.set(e in this.target_),
            r || i)
          ) {
            var s = {
              type: ts,
              observableKind: `object`,
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: o,
              name: e,
            };
            r && ko(this, s);
          }
        } finally {
          xa();
        }
        return !0;
      }),
      (t.observe_ = function (e, t) {
        return Oo(this, e);
      }),
      (t.intercept_ = function (e) {
        return To(this, e);
      }),
      (t.notifyPropertyAddition_ = function (e, t) {
        var n,
          r = Do(this),
          i = !1;
        if (r || i) {
          var a =
            r || i
              ? {
                  type: Wo,
                  observableKind: `object`,
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: e,
                  newValue: t,
                }
              : null;
          r && ko(this, a);
        }
        ((n = this.pendingKeys_) == null || (n = n.get(e)) == null || n.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), dr(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function rs(e, t) {
  if (pr(e, K)) return e;
  var n = t?.name ?? `ObservableObject`;
  return (rr(e, K, new ns(e, new Map(), String(n), Mi(t))), e);
}
var is = ar(`ObservableObjectAdministration`, ns);
function as(e) {
  return (
    es[e] ||
    (es[e] = {
      get: function () {
        return this[K].getObservablePropValue_(e);
      },
      set: function (t) {
        return this[K].setObservablePropValue_(e, t);
      },
    })
  );
}
function os(e) {
  return er(e) ? is(e[K]) : !1;
}
function ss(e, t, n) {
  var r;
  (r = e.target_[Dr]) == null || delete r[n];
}
var cs = ms(0),
  ls = (function () {
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
  us = 0,
  ds = function () {};
function fs(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ === void 0
      ? (e.prototype = t)
      : (e.prototype.__proto__ = t);
}
fs(ds, Array.prototype);
var ps = (function (e) {
  function t(t, n, r, i) {
    var a;
    return (
      r === void 0 && (r = `ObservableArray`),
      i === void 0 && (i = !1),
      (a = e.call(this) || this),
      xs(function () {
        var e = new Fo(r, n, i, !0);
        ((e.proxy_ = a),
          ir(a, K, e),
          t && t.length && a.spliceWithArray(0, 0, t),
          ls && Object.defineProperty(a, `0`, cs));
      }),
      a
    );
  }
  Sr(t, e);
  var n = t.prototype;
  return (
    (n.concat = function () {
      this[K].atom_.reportObserved();
      var e = [...arguments];
      return Array.prototype.concat.apply(
        this.slice(),
        e.map(function (e) {
          return Ho(e) ? e.slice() : e;
        }),
      );
    }),
    (n[Symbol.iterator] = function () {
      var e = this,
        t = 0;
      return Ds({
        next: function () {
          return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    yr(t, [
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
})(ds);
Object.entries(Lo).forEach(function (e) {
  var t = e[0],
    n = e[1];
  t !== `concat` && rr(ps.prototype, t, n);
});
function ms(e) {
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
function hs(e) {
  Un(ps.prototype, `` + e, ms(e));
}
function gs(e) {
  if (e > us) {
    for (var t = us; t < e + 100; t++) hs(t);
    us = e;
  }
}
gs(1e3);
function _s(e, t, n) {
  return new ps(e, t, n);
}
function vs(e, t) {
  if (typeof e == `object` && e) {
    if (Ho(e)) return (t !== void 0 && G(23), e[K].atom_);
    if (Qo(e)) return e.atom_;
    if (qo(e)) {
      if (t === void 0) return e.keysAtom_;
      var n = e.data_.get(t) || e.hasMap_.get(t);
      return (n || G(25, t, bs(e)), n);
    }
    if (os(e)) {
      if (!t) return G(26);
      var r = e[K].values_.get(t);
      return (r || G(27, t, bs(e)), r);
    }
    if (Nr(e) || $i(e) || ja(e)) return e;
  } else if (Qn(e) && ja(e[K])) return e[K];
  G(28);
}
function ys(e, t) {
  if ((e || G(29), t !== void 0)) return ys(vs(e, t));
  if (Nr(e) || $i(e) || ja(e) || qo(e) || Qo(e)) return e;
  if (e[K]) return e[K];
  G(24, e);
}
function bs(e, t) {
  var n;
  if (t !== void 0) n = vs(e, t);
  else if (qa(e)) return e.name;
  else n = os(e) || qo(e) || Qo(e) ? ys(e) : vs(e);
  return n.name_;
}
function xs(e) {
  var t = ca(),
    n = Yi(!0);
  ba();
  try {
    return e();
  } finally {
    (xa(), Xi(n), la(t));
  }
}
var Ss = Wn.toString;
function Cs(e, t, n) {
  return (n === void 0 && (n = -1), ws(e, t, n));
}
function ws(e, t, n, r, i) {
  if (e === t) return e !== 0 || 1 / e == 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var a = typeof e;
  if (a !== `function` && a !== `object` && typeof t != `object`) return !1;
  var o = Ss.call(e);
  if (o !== Ss.call(t)) return !1;
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
  ((e = Ts(e)), (t = Ts(t)));
  var s = o === `[object Array]`;
  if (!s) {
    if (typeof e != `object` || typeof t != `object`) return !1;
    var c = e.constructor,
      l = t.constructor;
    if (
      c !== l &&
      !(Qn(c) && c instanceof c && Qn(l) && l instanceof l) &&
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
    for (; u--; ) if (!ws(e[u], t[u], n - 1, r, i)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var m = d[p];
      if (!(pr(t, m) && ws(e[m], t[m], n - 1, r, i))) return !1;
    }
  }
  return (r.pop(), i.pop(), !0);
}
function Ts(e) {
  return Ho(e) ? e.slice() : or(e) || qo(e) || cr(e) || Qo(e) ? Array.from(e.entries()) : e;
}
var Es = Bn().Iterator?.prototype || {};
function Ds(e) {
  return ((e[Symbol.iterator] = Os), Object.assign(Object.create(Es), e));
}
function Os() {
  return this;
}
if (
  ([`Symbol`, `Map`, `Set`].forEach(function (e) {
    Bn()[e] === void 0 && G(`MobX requires global '` + e + `' to be available or polyfilled`);
  }),
  typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == `object` &&
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: Pa, extras: { getDebugName: bs }, $mobx: K }),
  !B.useState)
)
  throw Error(`mobx-react-lite requires React with Hooks support`);
if (!Ao) throw Error(`mobx-react-lite@3 requires mobx at least version 6 to be available`);
var ks = e(a());
function As(e) {
  e();
}
function js(e) {
  ((e ||= As), ao({ reactionScheduler: e }));
}
function Ms(e) {
  return so(e);
}
var Ns = !1;
function Ps() {
  return Ns;
}
var Fs = 1e4,
  Is = 1e4,
  Ls = (function () {
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
            (e === void 0 && (e = Fs), clearTimeout(t.sweepTimeout), (t.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, Is));
        },
      }),
      e
    );
  })(),
  Rs = new (typeof FinalizationRegistry < `u` ? FinalizationRegistry : Ls)(function (e) {
    var t;
    ((t = e.reaction) == null || t.dispose(), (e.reaction = null));
  }),
  zs = i((e) => {
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
  Bs = i((e, t) => {
    t.exports = zs();
  })();
function Vs(e) {
  e.reaction = new Ea(`observer${e.name}`, function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) == null || t.call(e));
  });
}
function Hs(e, t) {
  if ((t === void 0 && (t = `observed`), Ps())) return e();
  var n = B.useRef(null);
  if (!n.current) {
    var r = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (e) {
        return (
          Rs.unregister(r),
          (r.onStoreChange = e),
          r.reaction || (Vs(r), (r.stateVersion = Symbol())),
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
  (i.reaction || (Vs(i), Rs.register(n, i, i)),
    B.useDebugValue(i.reaction, Ms),
    (0, Bs.useSyncExternalStore)(i.subscribe, i.getSnapshot, i.getSnapshot));
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
var Us = typeof Symbol == `function` && Symbol.for,
  Ws = Object.getOwnPropertyDescriptor(function () {}, `name`)?.configurable ?? !1,
  Gs = Us
    ? Symbol.for(`react.forward_ref`)
    : typeof B.forwardRef == `function` &&
      (0, B.forwardRef)(function (e) {
        return null;
      }).$$typeof,
  Ks = Us
    ? Symbol.for(`react.memo`)
    : typeof B.memo == `function` &&
      (0, B.memo)(function (e) {
        return null;
      }).$$typeof;
function qs(e, t) {
  if (Ks && e.$$typeof === Ks)
    throw Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (Ps()) return e;
  var n = t?.forwardRef ?? !1,
    r = e,
    i = e.displayName || e.name;
  if (Gs && e.$$typeof === Gs && ((n = !0), (r = e.render), typeof r != `function`))
    throw Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var a = function (e, t) {
    return Hs(function () {
      return r(e, t);
    }, i);
  };
  return (
    (a.displayName = e.displayName),
    Ws && Object.defineProperty(a, `name`, { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (a.contextTypes = e.contextTypes),
    n && (a = (0, B.forwardRef)(a)),
    (a = (0, B.memo)(a)),
    Ys(e, a),
    a
  );
}
var Js = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function Ys(e, t) {
  Object.keys(e).forEach(function (n) {
    Js[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  });
}
function Xs(e) {
  var t = e.children,
    n = e.render;
  t &&
    n &&
    console.error("MobX Observer: Do not use children and render in the same time in `Observer`");
  var r = t || n;
  return typeof r == `function` ? Hs(r) : null;
}
((Xs.displayName = `Observer`), js(ks.unstable_batchedUpdates), Rs.finalizeAllImmediately);
function Zs(e, t) {
  if (Qs(e, t)) return !0;
  if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (var i = 0; i < n.length; i++)
    if (!Object.hasOwnProperty.call(t, n[i]) || !Qs(e[n[i]], t[n[i]])) return !1;
  return !0;
}
function Qs(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var $s = Symbol(`patchMixins`),
  ec = Symbol(`patchedDefinition`);
function tc(e, t) {
  var n = (e[$s] = e[$s] || {}),
    r = (n[t] = n[t] || {});
  return ((r.locks = r.locks || 0), (r.methods = r.methods || []), r);
}
function nc(e, t) {
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
function rc(e, t) {
  return function () {
    var n = [...arguments];
    nc.call.apply(nc, [this, e, t].concat(n));
  };
}
function ic(e, t, n) {
  var r = tc(e, t);
  r.methods.indexOf(n) < 0 && r.methods.push(n);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (!(i && i[ec])) {
    var a = e[t],
      o = ac(e, t, i ? i.enumerable : void 0, r, a);
    Object.defineProperty(e, t, o);
  }
}
function ac(e, t, n, r, i) {
  var a,
    o = rc(i, r);
  return (
    (a = {}),
    (a[ec] = !0),
    (a.get = function () {
      return o;
    }),
    (a.set = function (i) {
      if (this === e) o = rc(i, r);
      else {
        var a = ac(this, t, n, r, i);
        Object.defineProperty(this, t, a);
      }
    }),
    (a.configurable = !0),
    (a.enumerable = n),
    a
  );
}
var oc = Symbol(`ObserverAdministration`),
  sc = Symbol(`isMobXReactObserver`);
function cc(e) {
  return (
    e[oc] ??
    (e[oc] = {
      reaction: null,
      mounted: !1,
      reactionInvalidatedBeforeMount: !1,
      forceUpdate: null,
      name: uc(e.constructor),
      state: void 0,
      props: void 0,
      context: void 0,
    })
  );
}
function lc(e) {
  var t = e.prototype;
  if (e[sc]) {
    var n = uc(e);
    throw Error(
      `The provided component class (` +
        n +
        `) has already been declared as an observer component.`,
    );
  } else e[sc] = !0;
  if (t.componentWillReact)
    throw Error(`The componentWillReact life-cycle event is no longer supported`);
  if (e.__proto__ !== B.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = pc;
    else if (t.shouldComponentUpdate !== pc)
      throw Error(`It is not allowed to use shouldComponentUpdate in observer based components.`);
  }
  var r = t.render;
  if (typeof r != `function`) {
    var i = uc(e);
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
        value: Ps() ? r : dc.call(this, r),
      }),
      this.render()
    );
  };
  var a = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var e = this,
        t = cc(this);
      return (
        (t.mounted = !0),
        Rs.unregister(this),
        (t.forceUpdate = function () {
          return e.forceUpdate();
        }),
        (!t.reaction || t.reactionInvalidatedBeforeMount) && t.forceUpdate(),
        a?.apply(this, arguments)
      );
    }),
    ic(t, `componentWillUnmount`, function () {
      var e;
      if (!Ps()) {
        var t = cc(this);
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
function uc(e) {
  return e.displayName || e.name || `<component>`;
}
function dc(e) {
  var t = e.bind(this),
    n = cc(this);
  function r() {
    n.reaction || ((n.reaction = fc(n)), n.mounted || Rs.register(this, n, this));
    var e = void 0,
      r = void 0;
    if (
      (n.reaction.track(function () {
        try {
          r = Ji(!1, t);
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
function fc(e) {
  return new Ea(e.name + `.render()`, function () {
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
function pc(e, t) {
  return (
    Ps() &&
      console.warn(
        `[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.`,
      ),
    this.state === t ? !Zs(this.props, e) : !0
  );
}
function mc(e, t) {
  if (t && t.kind !== `class`) throw Error(`The @observer decorator can be used on classes only`);
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(B.Component, e) ||
    Object.prototype.isPrototypeOf.call(B.PureComponent, e)
      ? lc(e)
      : qs(e)
  );
}
function hc() {
  return (
    (hc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hc.apply(null, arguments)
  );
}
function gc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var _c = [`children`],
  vc = B.createContext({});
function yc(e) {
  var t = e.children,
    n = gc(e, _c),
    r = B.useContext(vc),
    i = B.useRef(hc({}, r, n)).current;
  return B.createElement(vc.Provider, { value: i }, t);
}
if (((yc.displayName = `MobXProvider`), `18.3.1`.split(`.`)[0], !B.Component))
  throw Error(`mobx-react requires React to be available`);
if (!q) throw Error(`mobx-react requires mobx to be available`);
function bc(e, t, n, r) {
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
var xc = class {
  constructor() {
    ((this.isLoading = !1), Ao(this));
  }
  showPlan(e, t) {
    ((this.plan = e), (this.planString = t), (this.isLoading = !1));
  }
  saveSlowQuery(e) {
    this.slowQueries = e;
  }
  saveHistory(e) {
    this.history = e;
  }
  loading() {
    this.isLoading = !0;
  }
  stopLoading() {
    this.isLoading = !1;
  }
};
(bc([q], xc.prototype, `isLoading`, void 0),
  bc([q], xc.prototype, `plan`, void 0),
  bc([q], xc.prototype, `planString`, void 0),
  bc([q], xc.prototype, `slowQueries`, void 0),
  bc([q], xc.prototype, `history`, void 0),
  bc([Ga.bound], xc.prototype, `showPlan`, null),
  bc([Ga.bound], xc.prototype, `saveSlowQuery`, null),
  bc([Ga.bound], xc.prototype, `saveHistory`, null),
  bc([Ga], xc.prototype, `loading`, null),
  bc([Ga], xc.prototype, `stopLoading`, null));
var Sc = new xc(),
  Cc = class {
    constructor() {
      ((this.state = `ROOT`), (this.lastState = `ROOT`), Ao(this));
    }
    saveState(e) {
      ((this.lastState = this.state), (this.state = e));
    }
  };
(bc([q], Cc.prototype, `state`, void 0),
  bc([q], Cc.prototype, `lastState`, void 0),
  bc([Ga.bound], Cc.prototype, `saveState`, null));
var wc = new Cc(),
  Tc = new (class {
    constructor() {
      ((this.usersStore = Sc), (this.stateStore = wc));
    }
  })(),
  Ec = (0, B.createContext)(Tc),
  Dc = () => (0, B.useContext)(Ec);
function Z() {}
var Oc = function (e, t, n) {
    return e + (n && isFinite(n) ? (t - 1) * n : 0);
  },
  kc = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      r = arguments.length > 3 ? arguments[3] : void 0,
      i = e.destination,
      a = e.sourceIndex;
    if (!i) return t;
    var o = Oc(a, n, r),
      s = Oc(i.index, n, r),
      c = t.slice(),
      l = f(c.splice(o, 1), 1)[0];
    return (c.splice(s, 0, l), c);
  };
function Ac(e, t) {
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
function jc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ac(Object(n), !0).forEach(function (t) {
          l(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ac(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Mc = (function () {
  function e(t) {
    var n = this;
    (d(this, e),
      l(this, `_isAnalyticsEvent`, !0),
      l(this, `clone`, function () {
        return new e({ payload: jc({}, n.payload) });
      }),
      (this.payload = t.payload));
  }
  return p(e, [
    {
      key: `update`,
      value: function (e) {
        return (
          typeof e == `function` && (this.payload = e(this.payload)),
          v(e) === `object` && (this.payload = jc(jc({}, this.payload), e)),
          this
        );
      },
    },
  ]);
})();
function Nc(e, t, n) {
  return ((t = _(t)), u(e, Pc() ? Reflect.construct(t, n || [], _(e).constructor) : t.apply(e, n)));
}
function Pc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Pc = function () {
    return !!e;
  })();
}
function Fc(e, t, n, r) {
  var i = oe(_(1 & r ? e.prototype : e), t, n);
  return 2 & r && typeof i == `function`
    ? function (e) {
        return i.apply(n, e);
      }
    : i;
}
var Ic = (function (e) {
    function t(e) {
      var n;
      return (
        d(this, t),
        (n = Nc(this, t, [e])),
        l(n, `_isUIAnalyticsEvent`, !0),
        l(n, `clone`, function () {
          return n.hasFired
            ? null
            : new t({
                context: m(n.context),
                handlers: m(n.handlers),
                payload: JSON.parse(JSON.stringify(n.payload)),
              });
        }),
        l(n, `fire`, function (e) {
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
      h(t, e),
      p(t, [
        {
          key: `update`,
          value: function (e) {
            return this.hasFired ? this : Fc(t, `update`, this, 3)([e]);
          },
        },
      ])
    );
  })(Mc),
  Lc = (0, B.createContext)({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Rc = function () {
    return (0, B.useContext)(Lc);
  },
  zc = function (e) {
    var t = (0, B.useRef)(e);
    return ((t.current = e), t);
  };
function Bc(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function Vc(e, t) {
  var n = (0, B.useState)(function () {
      return { inputs: t, result: e() };
    })[0],
    r = (0, B.useRef)(!0),
    i = (0, B.useRef)(n),
    a =
      r.current || (t && i.current.inputs && Bc(t, i.current.inputs))
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
function Hc(e, t) {
  return Vc(function () {
    return e;
  }, t);
}
function Uc() {
  var e = Rc();
  return {
    createAnalyticsEvent: Hc(
      function (t) {
        return new Ic({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: t,
        });
      },
      [e],
    ),
  };
}
function Wc(e, t) {
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
function Gc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Wc(Object(n), !0).forEach(function (t) {
          l(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Wc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Kc(e) {
  var t = e.fn,
    n = e.action,
    r = e.componentName,
    i = e.actionSubject,
    a = e.packageName,
    o = e.packageVersion,
    s = e.analyticsData,
    c = Uc().createAnalyticsEvent,
    l = zc(s),
    u = zc(t);
  return (0, B.useCallback)(
    function (e) {
      var t = c({
          action: n,
          actionSubject: i || r,
          attributes: { componentName: r, packageName: a, packageVersion: o },
        }),
        s = Gc({ componentName: r, packageName: a, packageVersion: o }, l.current);
      t.context.push(s);
      var d = t.clone();
      (d && d.fire(`atlaskit`), u.current(e, t));
    },
    [n, r, i, a, o, c, l, u],
  );
}
function qc(e, t) {
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
function Jc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? qc(Object(n), !0).forEach(function (t) {
          l(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : qc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Yc(e) {
  var t = e.fn,
    n = e.action,
    r = e.componentName,
    i = e.packageName,
    a = e.packageVersion,
    o = e.analyticsData,
    s = Uc().createAnalyticsEvent,
    c = zc(o),
    l = zc(t);
  return (0, B.useCallback)(
    function () {
      var e = s({
          action: n,
          actionSubject: r,
          attributes: { componentName: r, packageName: i, packageVersion: a },
        }),
        t = Jc({ componentName: r, packageName: i, packageVersion: a }, c.current);
      e.context.push(t);
      var o = e.clone();
      (o && o.fire(`atlaskit`), l.current(e));
    },
    [n, r, i, a, s, c, l],
  );
}
var Xc = function (e) {
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
w();
var Zc = function (e) {
  var t = e.children;
  return B.createElement(
    `caption`,
    { className: k([`_11c81af2 _6rthu2gc _1pfh1ejb _m6k41e03`]) },
    t,
  );
};
w();
var Qc = function (e) {
  var t = e.children,
    n = e.testId;
  return B.createElement(
    `div`,
    {
      "data-testid": n && `${n}--empty-view-container`,
      className: k([
        `_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o`,
      ]),
    },
    t,
  );
};
w();
var $c = function (e) {
  var t = e.children,
    n = e.testId;
  return B.createElement(
    `div`,
    { "data-testid": n && `${n}--empty-view-with-fixed-height`, className: k([`_4t3i1jdh`]) },
    t,
  );
};
w();
var el = function (e) {
  var t = e.children,
    n = e.testId;
  return B.createElement(
    `div`,
    { "data-testid": n && `${n}--pagination--container`, className: k([`_1e0c1txw _1bah1h6o`]) },
    t,
  );
};
w();
var tl = [`isFixedSize`, `hasDataRow`, `children`, `testId`, `isLoading`],
  nl = (0, B.forwardRef)(function (e, t) {
    var n = e.isFixedSize,
      r = e.hasDataRow,
      i = e.children,
      a = e.testId,
      o = e.isLoading,
      s = g(e, tl);
    return B.createElement(
      `table`,
      N(
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
          className: k([
            `_1bsb1osq _yq5hus1c _btyzidpf _ect4ttxp`,
            n && `_1kqm1n9t`,
            r && `_179r1uh4`,
          ]),
        },
      ),
      i,
    );
  }),
  rl = [`cells`],
  il = [`content`, `testId`],
  al = function (e) {
    var t = e.row,
      n = e.head,
      r = e.testId,
      i = e.isFixedSize,
      a = e.isHighlighted,
      o = t.cells,
      s = g(t, rl);
    return B.createElement(
      S,
      N(
        {},
        s,
        { isHighlighted: a },
        a ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: t.testId || (r && `${r}--row-${s.key}`) },
      ),
      o.map(function (e, t) {
        var a = e.content,
          o = e.testId,
          s = g(e, il),
          c = (n || { cells: [] }).cells[t] || {},
          l = c.shouldTruncate,
          u = c.width;
        return B.createElement(
          O,
          N({ "data-testid": o || (r && `${r}--cell-${t}`) }, s, {
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
function ol(e, t, n) {
  return ((t = _(t)), u(e, sl() ? Reflect.construct(t, n || [], _(e).constructor) : t.apply(e, n)));
}
function sl() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (sl = function () {
    return !!e;
  })();
}
var cl = (function (e) {
    function t() {
      return (d(this, t), ol(this, t, arguments));
    }
    return (
      h(t, e),
      p(t, [
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
                return B.createElement(al, {
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
  ll = C(
    B.forwardRef(function (e, t) {
      return B.createElement(cl, N({}, e, { forwardedRef: t }));
    }),
  );
function ul(e, t, n) {
  return ((t = _(t)), u(e, dl() ? Reflect.construct(t, n || [], _(e).constructor) : t.apply(e, n)));
}
function dl() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (dl = function () {
    return !!e;
  })();
}
var fl = (function (e) {
    function t(e) {
      var n;
      return (d(this, t), (n = ul(this, t, [e])), (n.state = { hasError: !1 }), n);
    }
    return (
      h(t, e),
      p(
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
  pl = (0, B.createContext)(null),
  ml = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
w();
function hl(e) {
  return e === `inherit` ? `var(--ds-icon-subtle, #505258)` : `var(--ds-icon-inverse, #FFFFFF)`;
}
var gl = {
    rotateStyles: `_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o`,
    loadInStyles: `_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw`,
    wrapperStyles: `_1e0c116y _s7n4nkob`,
    circleStyles: `_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz`,
  },
  _l = typeof window > `u` ? B.useEffect : B.useLayoutEffect,
  vl = B.memo(
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
        d = typeof l == `number` ? l : ml[l],
        f = `${a}ms`,
        p = hl(r),
        m = (0, B.useContext)(pl);
      return (
        _l(
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
            className: k([gl.wrapperStyles, gl.rotateStyles]),
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
              className: k([gl.loadInStyles]),
            },
            B.createElement(`circle`, {
              cx: `8`,
              cy: `8`,
              r: `7`,
              style: { stroke: p },
              className: k([gl.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
w();
var yl = function (e) {
  var t = e.children,
    n = e.testId;
  return B.createElement(
    `div`,
    { "data-testid": n && `${n}--container`, className: k([`_kqswh2mm`]) },
    t,
  );
};
w();
function bl(e, t) {
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
function xl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? bl(Object(n), !0).forEach(function (t) {
          l(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : bl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Sl = `--contents-opacity`,
  Cl = function (e) {
    var t = e.children,
      n = e.contentsOpacity,
      r = e.testId;
    return B.createElement(
      `div`,
      {
        "data-testid": r && `${r}--contents--container`,
        className: k([`_tzy47hfw _lcxvglyw`]),
        style: xl(xl({}, l({}, Sl, n)), {}, { "--_cnddr8": M(`var(${Sl})`) }),
      },
      t,
    );
  };
w();
var wl = function (e) {
  var t = e.children,
    n = e.testId;
  return B.createElement(
    `div`,
    {
      "data-testid": n && `${n}--spinner--container`,
      className: k([`_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o`]),
    },
    t,
  );
};
function Tl(e, t, n) {
  return ((t = _(t)), u(e, El() ? Reflect.construct(t, n || [], _(e).constructor) : t.apply(e, n)));
}
function El() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (El = function () {
    return !!e;
  })();
}
var Dl = (function (e) {
  function t() {
    return (d(this, t), Tl(this, t, arguments));
  }
  return (
    h(t, e),
    p(t, [
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
            yl,
            { testId: a },
            n ? B.createElement(Cl, { contentsOpacity: i, testId: a }, t) : t,
            n &&
              B.createElement(
                wl,
                { testId: a },
                B.createElement(vl, { size: r, testId: a && `${a}--loadingSpinner`, label: o }),
              ),
          );
        },
      },
    ])
  );
})(B.Component);
(l(Dl, `defaultProps`, {
  isLoading: !0,
  spinnerSize: ie,
  contentsOpacity: ae,
  loadingLabel: `Loading table`,
}),
  w());
var Ol = [`children`, `testId`];
function kl(e, t, n) {
  return ((t = _(t)), u(e, Al() ? Reflect.construct(t, n || [], _(e).constructor) : t.apply(e, n)));
}
function Al() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Al = function () {
    return !!e;
  })();
}
var jl = (0, B.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.testId,
      i = g(e, Ol);
    return B.createElement(
      `div`,
      N({}, i, { "data-testid": r, ref: t, className: k([`_kqswh2mm _6rth1ejb`]) }),
      n,
    );
  }),
  Ml = function (e) {
    var t = e.children,
      n = e.testId;
    return B.createElement(
      `div`,
      {
        "data-testid": n && `${n}--spinner-backdrop`,
        className: k([`_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw`]),
      },
      t,
    );
  },
  Nl = (0, B.forwardRef)(function (e, t) {
    var n = e.children;
    return B.createElement(`div`, { ref: t, className: k([`_kqswh2mm _152tidpf`]) }, n);
  }),
  Pl = (function (e) {
    function t() {
      var e;
      d(this, t);
      var n = [...arguments];
      return (
        (e = kl(this, t, [].concat(n))),
        l(e, `spinnerRef`, B.createRef()),
        l(e, `containerRef`, B.createRef()),
        l(e, `componentDidMount`, function () {
          e.props.isLoading &&
            e.hasTargetNode() &&
            (e.attachListeners(), e.updateTargetAppearance(), e.updateSpinnerPosition());
        }),
        l(e, `UNSAFE_componentWillReceiveProps`, function (t) {
          !t.isLoading || !e.hasTargetNode(t)
            ? e.detachListeners()
            : e.props.isLoading || e.attachListeners();
        }),
        l(e, `componentDidUpdate`, function () {
          e.hasTargetNode() &&
            (e.updateTargetAppearance(), e.props.isLoading && e.updateSpinnerPosition());
        }),
        l(e, `componentWillUnmount`, function () {
          e.detachListeners();
        }),
        l(e, `getTargetNode`, function () {
          var t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.props)
            .targetRef;
          return t?.() || e.containerRef.current;
        }),
        l(e, `hasTargetNode`, function (t) {
          return !!e.getTargetNode(t);
        }),
        l(e, `isVerticallyVisible`, function (e, t) {
          var n = e.top;
          return e.bottom <= 0 ? !1 : n < t;
        }),
        l(e, `isFullyVerticallyVisible`, function (e, t) {
          var n = e.top,
            r = e.bottom;
          return n >= 0 && r <= t;
        }),
        l(e, `handleResize`, function () {
          e.updateSpinnerPosition();
        }),
        l(e, `handleScroll`, function () {
          e.updateSpinnerPosition();
        }),
        l(e, `translateSpinner`, function (e, t, n) {
          ((e.style.position = n ? `fixed` : ``),
            (e.style.transform = t === 0 ? `` : `translate3d(0, ${t}px, 0)`));
        }),
        l(e, `updateTargetAppearance`, function () {
          var t = e.getTargetNode(),
            n = e.props,
            r = n.isLoading,
            i = n.contentsOpacity;
          t &&
            t.style &&
            v(t.style) === `object` &&
            ((t.style.pointerEvents = r ? `none` : ``), (t.style.opacity = r ? i.toString() : ``));
        }),
        e
      );
    }
    return (
      h(t, e),
      p(t, [
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
              jl,
              { testId: i && `${i}--loading--container--advanced`, ref: this.containerRef },
              t,
              n &&
                B.createElement(
                  Ml,
                  { testId: i },
                  B.createElement(
                    Nl,
                    { ref: this.spinnerRef },
                    B.createElement(vl, { size: r, testId: i && `${i}--loadingSpinner`, label: a }),
                  ),
                ),
            );
          },
        },
      ])
    );
  })(B.Component);
l(Pl, `defaultProps`, {
  isLoading: !0,
  spinnerSize: ie,
  contentsOpacity: `var(--ds-opacity-loading, 0.2)`,
  loadingLabel: `Loading table`,
});
function Fl(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    n = e !== void 0,
    r = f((0, B.useState)(t), 2),
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
var Il = n(() => {}),
  Ll,
  Rl,
  zl,
  Bl,
  Vl,
  Hl,
  Ul = n(() => {
    (Il(),
      (Ll = e(o())),
      w(),
      (Rl = e(o())),
      (zl = {
        none: `_1bsbpxbi _4t3ipxbi`,
        compact: `_1bsb1ejb _4t3i1ejb`,
        spacious: `_1bsb1ejb _4t3i1ejb`,
      }),
      (Bl = {
        none: `_1bsbutpp _4t3iutpp`,
        compact: `_1bsbpxbi _4t3ipxbi`,
        spacious: `_1bsb1ejb _4t3i1ejb`,
      }),
      (Vl = {
        medium: { none: 0, compact: 4, spacious: 4 },
        small: { none: 0, compact: 2.66, spacious: 8 },
      }),
      (Hl = (0, Rl.memo)(function (e) {
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
          h = Vl[f][l],
          g = m + 2 * h;
        return Ll.createElement(
          `span`,
          {
            "data-testid": i,
            role: a ? `img` : void 0,
            "aria-label": a || void 0,
            "aria-hidden": a ? void 0 : !0,
            style: { color: r },
            className: k([
              `_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9`,
              `_12va1onz _jcxd1r8n`,
              s && `_1bsb1kw7 _4t3i1kw7`,
              f === `small` && `_vwz4utpp`,
            ]),
          },
          Ll.createElement(`svg`, {
            fill: `none`,
            viewBox: `${0 - h} ${0 - h} ${g} ${g}`,
            role: `presentation`,
            dangerouslySetInnerHTML: d,
            className: k([
              `_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31`,
              s ? `_1bsb1kw7 _4t3i1kw7` : f === `small` ? Bl[l] : zl[l],
            ]),
          }),
        );
      })));
  }),
  Wl = r({ Icon: () => Hl, default: () => Hl }),
  Gl = n(() => {
    Ul();
  }),
  Kl = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Gl(), t(Wl)));
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
  ql = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Gl(), t(Wl)));
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
  Jl = (0, B.createContext)(`elevation.surface`),
  Yl = function () {
    return (0, B.useContext)(Jl);
  };
((Jl.displayName = `SurfaceProvider`), w());
var Xl = [
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
  Zl = [`className`],
  Ql = {
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
  $l = {
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
  eu = {
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
  tu = {
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
  nu = {
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
  ru = {
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
  iu = (0, B.forwardRef)(function (e, t) {
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
      m = p === void 0 ? o : p,
      h = e.paddingInlineStart,
      _ = h === void 0 ? m : h,
      v = e.paddingInlineEnd,
      y = v === void 0 ? m : v,
      b = e.style,
      x = e.testId,
      S = e.xcss,
      C = g(e, Xl);
    C.className;
    var w = g(C, Zl),
      T = B.createElement(
        r,
        N(
          {
            style: b,
            ref: t,
            className: k([
              `_19itglyw _vchhusvi _r06hglyw`,
              a && Ql[a],
              a && au(a) && $l[a],
              u && eu[u],
              f && tu[f],
              _ && nu[_],
              y && ru[y],
              S,
            ]),
          },
          w,
          { "data-testid": x },
        ),
        i,
      );
    return a ? B.createElement(Jl.Provider, { value: a }, T) : T;
  });
function au(e) {
  return e in $l;
}
var ou = () =>
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
w();
var su = (...e) => k(e);
function cu() {
  return {
    css() {
      throw ou();
    },
    cssMap() {
      throw ou();
    },
    cx: su,
    XCSSProp() {
      throw ou();
    },
  };
}
var lu = cu();
(lu.css, lu.cssMap, lu.cssMap);
var uu = lu.cx;
(lu.XCSSProp, w());
var du = [
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
  fu = {
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
  pu = {
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
  mu = {
    start: `_1bahv2br`,
    center: `_1bah1h6o`,
    end: `_1bahh9n0`,
    "space-between": `_1bah1yb4`,
    "space-around": `_1bah1b1v`,
    "space-evenly": `_1bahitcz`,
    stretch: `_1bah1fhb`,
  },
  hu = { column: `_2lx21bp4`, row: `_2lx2vrvc` },
  gu = { wrap: `_1n261g80`, nowrap: `_1n261q9c` },
  _u = {
    start: `_4cvrv2br`,
    center: `_4cvr1h6o`,
    baseline: `_4cvr1q9y`,
    end: `_4cvrh9n0`,
    stretch: `_4cvr1fhb`,
  },
  vu = { root: `_1e0c1txw _vchhusvi` },
  yu = (0, B.memo)(
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
        m = e.xcss,
        h = g(e, du);
      return B.createElement(
        r,
        N({}, h, {
          role: i,
          className: k([
            vu.root,
            s && pu[s],
            c && pu[c],
            s && fu[s],
            l && fu[l],
            a && _u[a],
            f && hu[f],
            o && mu[o],
            p && gu[p],
            m,
          ]),
          "data-testid": d,
          ref: t,
        }),
        u,
      );
    }),
  );
((yu.displayName = `Flex`), w());
var bu = [
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
  xu = {
    separator: `_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw`,
    hug: `_16jlidpf`,
    fill: `_1bsb1osq _16jlkb7n`,
  },
  Su = function (e) {
    var t = e.children;
    return B.createElement(`span`, { className: k([xu.separator]) }, t);
  },
  Cu = (0, B.memo)(
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
        m = e.testId,
        h = e.role,
        _ = e.children,
        v = g(e, bu),
        y = typeof f == `string` ? B.createElement(Su, null, f) : f,
        b = y
          ? B.Children.toArray(_)
              .filter(Boolean)
              .map(function (e, t) {
                return B.createElement(B.Fragment, { key: t }, f && t > 0 ? y : null, e);
              })
          : _;
      return B.createElement(
        yu,
        N({}, v, {
          as: n,
          role: h,
          alignItems: a,
          justifyContent: c || r,
          direction: `row`,
          gap: u,
          rowGap: d,
          wrap: s ? `wrap` : void 0,
          xcss: uu(l === `hug` && xu.hug, l === `fill` && xu.fill, p),
          testId: m,
          ref: t,
        }),
        b,
      );
    }),
  );
Cu.displayName = `Inline`;
var wu = (0, B.createContext)(!1),
  Tu = function () {
    return (0, B.useContext)(wu);
  },
  Eu = wu.Provider;
w();
var Du = [`span`, `p`, `strong`, `em`],
  Ou = function (e, t) {
    var n = Yl();
    if (e !== `inherit`) {
      if (e) return e;
      if (!t) return Nu.hasOwnProperty(n) ? Nu[n] : `color.text`;
    }
  },
  ku = {
    root: `_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65`,
    "as.strong": `_k48pwu06`,
    "as.em": `_zg8l1m30`,
    "textAlign.center": `_y3gn1h6o`,
    "textAlign.end": `_y3gnh9n0`,
    "textAlign.start": `_y3gnv2br`,
    truncation: `_1reo15vq _18m915vq _1e0ccj1k _sudp1e54`,
    breakAll: `_1nmz9jpi`,
  },
  Au = { medium: `_11c8fhey`, large: `_11c81d4k`, small: `_11c8wadc` },
  ju = { bold: `_k48pwu06`, medium: `_k48p1wq8`, regular: `_k48pi7a9`, semibold: `_k48p1pd9` },
  Mu = {
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
  Nu = {
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
  Pu = (0, B.forwardRef)(function (e, t) {
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
    te(Du.includes(r), `@atlaskit/primitives: Text received an invalid "as" value of "${r}"`);
    var p = Tu(),
      m = Ou(i, p);
    !c && !p && (c = `medium`);
    var h = B.createElement(
      r,
      {
        id: s,
        className: k([
          ku.root,
          c && Au[c],
          m && Mu[m],
          u && ku.truncation,
          u === 1 && ku.breakAll,
          a && ku[`textAlign.${a}`],
          l && ju[l],
          r === `em` && ku[`as.em`],
          r === `strong` && ku[`as.strong`],
          d,
        ]),
        style: { WebkitLineClamp: u },
        "data-testid": o,
        ref: t,
      },
      f,
    );
    return p ? h : B.createElement(Eu, { value: !0 }, h);
  });
function Fu() {
  if (typeof window < `u` && window.navigator != null) {
    var e = window.navigator.userAgent?.toLowerCase();
    return e ? e.includes(`safari`) && !e.includes(`chrome`) : !1;
  }
  return !1;
}
w();
var Iu = [`as`, `children`, `isInset`, `testId`, `style`, `xcss`],
  Lu = [`className`],
  Ru = (0, B.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `button` : n,
      i = e.children,
      a = e.isInset,
      o = e.testId,
      s = e.style,
      c = e.xcss,
      l = g(e, Iu);
    l.className;
    var u = g(l, Lu);
    return B.createElement(
      r,
      N({}, u, {
        ref: t,
        className: k([
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
  zu = [
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
  Bu = [`className`],
  Vu = { root: `_19itglyw _vchhusvi _r06hglyw _80omtlke`, disabled: `_80om13gf` },
  Hu = (0, B.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.isDisabled,
      i = e.type,
      a = i === void 0 ? `button` : i,
      o = e.onClick,
      s = o === void 0 ? Z : o,
      c = e.interactionName,
      l = e.componentName,
      u = e.analyticsContext,
      d = e.style,
      f = e.testId,
      p = e.xcss,
      m = e.tabIndex,
      h = g(e, zu),
      _ = (0, B.useContext)(pl),
      v = Kc({
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
    h.className;
    var y = g(h, Bu);
    return B.createElement(
      Ru,
      N({ as: `button`, tabIndex: m ?? (Fu() && !r ? 0 : void 0), style: d }, y, {
        type: a,
        onClick: v,
        disabled: r,
        xcss: su(Vu.root, r && Vu.disabled, p),
        testId: f,
        ref: t,
      }),
      n,
    );
  }),
  Uu = (0, B.createContext)(!1),
  Wu = function () {
    return (0, B.useContext)(Uu);
  },
  Gu = (0, B.createContext)(!1),
  Ku = function () {
    return (0, B.useContext)(Gu);
  },
  qu = [`light`, `dark`, `spacing`, `typography`, `shape`, `motion`],
  Ju = `UNSAFE_themeOptions`,
  Yu = function (e) {
    return (
      qu.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  Xu = function (e) {
    return (
      z.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  Zu = function (e) {
    return [`light`, `dark`, `auto`].includes(e);
  },
  Qu = function (e) {
    return e
      .split(` `)
      .map(function (e) {
        return e.split(/:([^]*)/);
      })
      .reduce(function (e, t) {
        var n = f(t, 2),
          r = n[0],
          i = n[1];
        if ((r === `colorMode` && Zu(i) && (e[r] = i), Yu(r) && Xu(i) && (e[r] = i), r === Ju))
          try {
            e[Ju] = JSON.parse(i);
          } catch {}
        return e;
      }, {});
  },
  $u = function (e) {
    return Object.entries(e).reduce(function (e, t) {
      var n = f(t, 2),
        r = n[0],
        i = n[1];
      return (r === `colorMode` && typeof i == `string` && Zu(i)) ||
        (r === Ju && v(i) === `object`) ||
        (Yu(r) && typeof i == `string` && Xu(i))
        ? e + `${e ? ` ` : ``}${r}:${v(i) === `object` ? JSON.stringify(i) : i}`
        : e;
    }, ``);
  };
function ed(e, t) {
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
function td(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ed(Object(n), !0).forEach(function (t) {
          l(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ed(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var nd = function (e) {
    return (
      he.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  rd = function () {
    if (typeof document > `u`) return {};
    var e = document.documentElement,
      t = e.getAttribute(`data-color-mode`) || ``;
    return td(td({}, Qu(e.getAttribute(`data-theme`) || ``)), nd(t) && { colorMode: t });
  };
function id(e, t) {
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
function ad(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? id(Object(n), !0).forEach(function (t) {
          l(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : id(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var od = `light`,
  sd = `no-preference`,
  cd = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.colorMode,
      n = t === void 0 ? F.colorMode : t,
      r = e.dark,
      i = r === void 0 ? F.dark : r,
      a = e.light,
      o = a === void 0 ? F.light : a,
      s = e.contrastMode,
      c = s === void 0 ? F.contrastMode : s,
      u = e.motion,
      d = u === void 0 ? F.motion() : u,
      f = e.shape,
      p = f === void 0 ? F.shape() : f,
      m = e.spacing,
      h = m === void 0 ? F.spacing : m,
      g = e.typography,
      _ = g === void 0 ? F.typography : g,
      v = e.UNSAFE_themeOptions,
      y = v === void 0 ? F.UNSAFE_themeOptions : v,
      b = l(
        l({}, pe, $u({ dark: i, light: o, motion: d, shape: p, spacing: h, typography: _ })),
        de,
        n === `auto` ? od : n,
      );
    if (
      (P(`platform_increased-contrast-themes`) &&
        (b = ad(ad({}, b), {}, l({}, le, c === `auto` ? sd : c))),
      y && R(y.brandColor))
    ) {
      var x = ue(JSON.stringify(y));
      b[ce] = x;
    }
    return b;
  };
jt();
var ld = {
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
  Q = e(me()),
  ud = (function () {
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
                return ((e.next = 6), dd(t));
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
  dd = (function () {
    var e = I(
      Q.default.mark(function e(t) {
        var n, r;
        return Q.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), ld[t]());
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
  fd = j(),
  pd = typeof window < `u` && `matchMedia` in window;
function md(e) {
  document.documentElement.setAttribute(de, e.matches ? `dark` : `light`);
}
var hd = pd && window.matchMedia(`(prefers-color-scheme: dark)`),
  gd = new ((function () {
    function e() {
      (d(this, e), l(this, `unbindThemeChangeListener`, null));
    }
    return p(e, [
      {
        key: `getColorMode`,
        value: function () {
          return hd && hd != null && hd.matches ? `dark` : `light`;
        },
      },
      {
        key: `bind`,
        value: function () {
          hd &&
            this.unbindThemeChangeListener === null &&
            (this.unbindThemeChangeListener = (0, fd.bind)(hd, { type: `change`, listener: md }));
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
  _d = typeof window < `u` && `matchMedia` in window;
function vd(e) {
  document.documentElement.setAttribute(le, e.matches ? `more` : `no-preference`);
}
var yd = _d && window.matchMedia(`(prefers-contrast: more)`),
  bd = new ((function () {
    function e() {
      (d(this, e), l(this, `unbindContrastChangeListener`, null));
    }
    return p(e, [
      {
        key: `getContrastMode`,
        value: function () {
          return yd && yd != null && yd.matches ? `more` : `no-preference`;
        },
      },
      {
        key: `bind`,
        value: function () {
          yd &&
            this.unbindContrastChangeListener === null &&
            (this.unbindContrastChangeListener = (0, fd.bind)(yd, {
              type: `change`,
              listener: vd,
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
function xd(e) {
  (e.colorMode === `auto` ? ((e.colorMode = gd.getColorMode()), gd.bind()) : gd.unbind(),
    P(`platform_increased-contrast-themes`) &&
      (e.contrastMode === `auto`
        ? ((e.contrastMode = bd.getContrastMode()), bd.bind())
        : bd.unbind()));
  var t = cd(e);
  return (
    Object.entries(t).forEach(function (e) {
      var t = f(e, 2),
        n = t[0],
        r = t[1];
      document.documentElement.setAttribute(n, r);
    }),
    function () {
      (gd.unbind(), P(`platform_increased-contrast-themes`) && bd.unbind());
    }
  );
}
function Sd(e) {
  return Object.entries(se).find(function (t) {
    return f(t, 2)[1].increasesContrastFor === e;
  })?.[1].id;
}
var Cd = function (e) {
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
          var t = Sd(e);
          t && l.push(t);
        }),
        u.push.apply(u, l));
    else if ((u.push(e[t]), n !== `no-preference` && P(`platform_increased-contrast-themes`))) {
      var d = Sd(e[t]);
      d && u.push(d);
    }
    return (
      [a, o, s, c].forEach(function (e) {
        e && u.push(e);
      }),
      m(new Set(u))
    );
  },
  wd = function (e) {
    return m(new Set([]));
  };
jt();
function Td(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = Ed(e)) || (t && e && typeof e.length == `number`)) {
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
function Ed(e, t) {
  if (e) {
    if (typeof e == `string`) return Dd(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Dd(e, t)
          : void 0
    );
  }
}
function Dd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Od(e, t) {
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
function kd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Od(Object(n), !0).forEach(function (t) {
          l(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Od(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Ad = (function () {
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
          ee = arguments;
        return Q.default.wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (t = ee.length > 0 && ee[0] !== void 0 ? ee[0] : {}),
                    (n = ee.length > 1 ? ee[1] : void 0),
                    (r =
                      typeof t == `function`
                        ? t(
                            kd(
                              kd({}, F),
                              {},
                              { typography: F.typography, shape: F.shape(), motion: F.motion() },
                              rd(),
                            ),
                          )
                        : t),
                    (i = r.colorMode),
                    (a = i === void 0 ? F.colorMode : i),
                    (o = r.contrastMode),
                    (s = o === void 0 ? F.contrastMode : o),
                    (c = r.dark),
                    (l = c === void 0 ? F.dark : c),
                    (u = r.light),
                    (d = u === void 0 ? F.light : u),
                    (f = r.shape),
                    (p = f === void 0 ? F.shape() : f),
                    (m = r.spacing),
                    (h = m === void 0 ? F.spacing : m),
                    (g = r.typography),
                    (_ = g === void 0 ? F.typography : g),
                    (v = r.motion),
                    (y = v === void 0 ? F.motion() : v),
                    (b = r.UNSAFE_themeOptions),
                    (x = b === void 0 ? F.UNSAFE_themeOptions : b),
                    P(`platform_increased-contrast-themes`) ||
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
                    (C = Cd(S)),
                    (w = n || ud),
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
                      R(x?.brandColor) &&
                      ((E = a || F.colorMode),
                      (D = fe(x, E)),
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
                                        At(
                                          () => import(`./custom-theme-SRFouWTe.js`),
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
                  ((O = wd(S)), (k = Td(O)), (e.prev = 13), k.s());
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
                  return ((M = xd(S)), e.abrupt(`return`, M));
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
  jd = (function () {
    function e(t) {
      (d(this, e), l(this, `legacyObserver`, null), (this.callback = t), e.callbacks.add(t));
    }
    return p(e, [
      {
        key: `observe`,
        value: function () {
          e.observer ||
            ((e.observer = new MutationObserver(function () {
              var t = rd();
              e.callbacks.forEach(function (e) {
                return e(t);
              });
            })),
            e.observer.observe(document.documentElement, { attributeFilter: [pe, de] }));
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
(l(jd, `observer`, null), l(jd, `callbacks`, new Set()));
var Md = (0, B.createContext)(void 0),
  Nd = (0, B.createContext)(void 0),
  Pd = (0, B.createContext)(!1),
  Fd = (0, B.createContext)(void 0),
  Id = (0, B.createContext)(void 0),
  Ld = function () {
    return (0, B.useContext)(Pd) ?? !1;
  },
  Rd = function () {
    return typeof document < `u` ? document : null;
  };
function zd(e) {
  var t = Rd();
  return t ? t.head.querySelector(`style[${pe}="${e}"]`) : !1;
}
var Bd = (function () {
    var e = I(
      Q.default.mark(function e(t) {
        var n, r;
        return Q.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (!zd(t)) {
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
                return ((e.next = 6), ld[t]());
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
  Vd = (function () {
    var e = I(
      Q.default.mark(function e(t, n) {
        var r, i;
        return Q.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((r = Rd()), r)) {
                  e.next = 3;
                  break;
                }
                return e.abrupt(`return`);
              case 3:
                if (
                  ((i = r.createElement(`style`)),
                  (i.textContent = t),
                  (i.dataset.theme = n),
                  !zd(n))
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
  Hd = (function () {
    var e = I(
      Q.default.mark(function e(t) {
        var n;
        return Q.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), Bd(t));
              case 2:
                if (((n = e.sent), n)) {
                  e.next = 5;
                  break;
                }
                return e.abrupt(`return`);
              case 5:
                Vd(n, t);
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
  Ud = (function () {
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
                  n.forEach(Hd));
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
w();
function Wd(e, t) {
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
function Gd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Wd(Object(n), !0).forEach(function (t) {
          l(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Wd(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Kd = { dark: `dark`, light: `light`, spacing: `spacing`, typography: `typography` },
  qd =
    typeof window < `u` && `matchMedia` in window
      ? window.matchMedia(`(prefers-color-scheme: dark)`)
      : void 0;
function Jd(e) {
  return e === `auto` ? (qd != null && qd.matches ? `dark` : `light`) : e;
}
var Yd = { body: `_1e0c1bgi` };
function Xd(e) {
  var t = e.children,
    n = e.defaultColorMode,
    r = n === void 0 ? `auto` : n,
    i = e.defaultTheme,
    a = f((0, B.useState)(r), 2),
    o = a[0],
    s = a[1],
    c = f((0, B.useState)(Jd(r)), 2),
    u = c[0],
    d = c[1],
    p = f(
      (0, B.useState)(function () {
        return Gd(Gd({}, Kd), i);
      }),
      2,
    ),
    m = p[0],
    h = p[1],
    g = (0, B.useCallback)(function (e) {
      (s(e), d(Jd(e)));
    }, []),
    _ = (0, B.useCallback)(function (e) {
      h(function (t) {
        return Gd(Gd({}, t), e);
      });
    }, []),
    v = (0, B.useRef)(null),
    y = Wu(),
    b = Ku(),
    x = Ld(),
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
                        ((n = Ad(Gd(Gd({}, m), {}, { colorMode: u }))), (v.current = n));
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
      } else Ud(m);
    },
    [y, x, S, u, m],
  ),
    (0, B.useEffect)(
      function () {
        if (qd)
          return (0, fd.bind)(qd, {
            type: `change`,
            listener: function (e) {
              o === `auto` && d(e.matches ? `dark` : `light`);
            },
          });
      },
      [o],
    ));
  var C = Gd(Gd({}, cd(Gd(Gd({}, m), {}, { colorMode: u }))), {}, l({}, L, !0));
  return B.createElement(
    Pd.Provider,
    { value: !0 },
    B.createElement(
      Md.Provider,
      { value: u },
      B.createElement(
        Nd.Provider,
        { value: g },
        B.createElement(
          Fd.Provider,
          { value: m },
          B.createElement(
            Id.Provider,
            { value: _ },
            S ? t : B.createElement(`div`, N({}, C, { className: k([Yd.body]) }), t),
          ),
        ),
      ),
    ),
  );
}
function Zd() {
  var e = (0, B.useContext)(Md),
    t = rd(),
    n = f((0, B.useState)(t?.colorMode || `light`), 2),
    r = n[0],
    i = n[1];
  return (
    (0, B.useEffect)(
      function () {
        if (!e) {
          var t = new jd(function (e) {
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
function Qd() {
  return B.useId().replace(/[:«»]/g, `_`);
}
w();
var $d = function (e) {
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
      className: k([
        `_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c`,
      ]),
    },
    t,
  );
};
$d.displayName = `VisuallyHidden`;
function ef(e, t) {
  var n = (0, B.useRef)(!0);
  (0, B.useEffect)(
    function () {
      (e && n.current && t && e.current && e.current.focus(), (n.current = !1));
    },
    [t, e],
  );
}
var tf = 2,
  nf = D({
    outline: `var(--ds-border-width-focused, 2px) solid var(--ds-border-focused, #4688EC)`,
    outlineOffset: tf,
  }),
  rf = D({
    outlineColor: `var(--ds-border-focused, #4688EC)`,
    outlineOffset: -tf,
    outlineStyle: `solid`,
    outlineWidth: `var(--ds-border-width-focused, 2px)`,
  }),
  af = D({
    "&:focus": nf,
    "&:focus-visible": nf,
    "&:focus:not(:focus-visible)": { outline: `none` },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: `var(--ds-border-width, 1px) solid` },
    },
  }),
  of = D({
    "&:focus": rf,
    "&:focus-visible": rf,
    "&:focus:not(:focus-visible)": { outline: `none` },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: `var(--ds-border-width, 1px) solid`, outlineOffset: `-1px` },
    },
  }),
  sf = (0, B.memo)(function (e) {
    var t = e.children,
      n = e.isInset,
      r = e.focus,
      i = r === void 0 ? (n ? of : af) : r === `on` && (n ? rf : nf);
    return b(ee, null, function (e) {
      var n = e.css,
        r = e.cx;
      return B.Children.only(
        i ? (0, B.cloneElement)(t, { className: r([n(i), t.props.className]) }) : t,
      );
    });
  });
sf.displayName = `FocusRing`;
function cf(e) {
  (e.preventDefault(), e.stopPropagation());
}
var lf = 9;
function uf(e) {
  e.keyCode !== lf && cf(e);
}
var df = {
    onMouseDownCapture: cf,
    onMouseUpCapture: cf,
    onKeyDownCapture: uf,
    onKeyUpCapture: uf,
    onTouchStartCapture: cf,
    onTouchEndCapture: cf,
    onPointerDownCapture: cf,
    onPointerUpCapture: cf,
    onClickCapture: cf,
    onClick: cf,
  },
  ff = {};
function pf(e) {
  return e.isInteractive ? ff : df;
}
function mf(e) {
  var t = e.spacing;
  return D({
    margin: t === `none` ? 0 : `0 2px`,
    flexGrow: 1,
    flexShrink: 1,
    overflow: `hidden`,
    textOverflow: `ellipsis`,
    whiteSpace: `nowrap`,
  });
}
function hf(e) {
  var t = e.hasOverlay;
  return D({ opacity: +!t, transition: `opacity 0.3s` });
}
function gf(e) {
  var t = e.spacing;
  return D({
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
var _f = function (e) {
    return e && (0, B.isValidElement)(e) && e.type === $d;
  },
  vf = {
    position: `absolute`,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  yf = [
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
  bf = { "> *": { pointerEvents: `none` } },
  xf = D({
    "--ds--button--new-icon-padding-end": `var(--ds-space-025, 2px)`,
    "--ds--button--new-icon-padding-start": `var(--ds-space-050, 4px)`,
    marginInlineStart: `var(--ds-space-negative-025, -2px)`,
  }),
  Sf = D({
    "--ds--button--new-icon-padding-end": `var(--ds-space-050, 4px)`,
    "--ds--button--new-icon-padding-start": `var(--ds-space-025, 2px)`,
    marginInlineEnd: `var(--ds-space-negative-025, -2px)`,
  }),
  Cf = function (e, t) {
    return !e || _f(e) ? null : t;
  },
  wf = function (e, t) {
    return _f(e) ? e : e ? b(`span`, { css: t }, e) : null;
  },
  Tf = B.forwardRef(function (e, t) {
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
      x = y === void 0 ? !1 : y,
      S = e.onBlur,
      C = e.onClick,
      w = C === void 0 ? Z : C,
      T = e.onFocus,
      E = e.onMouseDown,
      O = E === void 0 ? Z : E,
      k = e.overlay;
    e.shouldFitContainer;
    var A = e.spacing,
      j = A === void 0 ? `default` : A,
      M = e.tabIndex,
      ee = M === void 0 ? 0 : M,
      te = e.type,
      ne = te === void 0 ? (u ? void 0 : `button`) : te,
      re = e.testId,
      ie = g(e, yf),
      ae = (0, B.useRef)(),
      P = (0, B.useCallback)(
        function (e) {
          if (((ae.current = e), t != null)) {
            if (typeof t == `function`) {
              t(e);
              return;
            }
            t.current = e;
          }
        },
        [ae, t],
      );
    ef(ae, o);
    var oe = (0, B.useContext)(pl),
      F = Kc({
        fn: (0, B.useCallback)(
          function (e, t) {
            (oe && oe.tracePress(h, e.timeStamp), w(e, t));
          },
          [w, oe, h],
        ),
        action: `clicked`,
        componentName: `button`,
        packageName: `@atlaskit/button`,
        packageVersion: `23.11.3`,
        analyticsData: n,
      }),
      I = (0, B.useCallback)(
        function (e) {
          (e.preventDefault(), O(e));
        },
        [O],
      );
    (0, B.useEffect)(
      function () {
        var e = ae.current;
        v && e && e === document.activeElement && e.blur();
      },
      [v],
    );
    var L = !!k,
      se = D(hf({ hasOverlay: L })),
      R = !v && !L,
      ce = {};
    return (
      (x || v || i === `warning`) &&
        (ce = {
          "[data-theme] & circle": {
            stroke: `${x || v ? `var(--ds-icon-subtle, #505258)` : `var(--ds-icon-warning-inverse, #292A2E)`} !important`,
          },
        }),
      b(
        sf,
        null,
        b(
          f,
          N(
            {},
            ie,
            {
              ref: P,
              className: l,
              css: [s, R ? null : bf],
              "data-has-overlay": L ? !0 : void 0,
              "data-testid": re,
              disabled: v,
              href: R ? u : void 0,
              onBlur: S,
              onClick: F,
              onFocus: T,
              onMouseDown: I,
              tabIndex: v ? -1 : ee,
              type: ne,
            },
            pf({ isInteractive: R }),
          ),
          m ? b(`span`, { css: [se, gf({ spacing: j }), Cf(c, xf)] }, m) : null,
          wf(c, [se, mf({ spacing: j })]),
          p ? b(`span`, { css: [se, gf({ spacing: j }), Cf(c, Sf)] }, p) : null,
          k ? b(`span`, { css: [vf, ce] }, k) : null,
        ),
      )
    );
  });
function Ef(e, t) {
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
function Df(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ef(Object(n), !0).forEach(function (t) {
          l(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ef(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Of = 8,
  kf = [`default`, `primary`, `danger`, `warning`],
  Af = { default: `${32 / 14}em`, compact: `${24 / 14}em`, none: `auto` },
  jf = { default: Af.default, compact: Af.compact, none: `inherit` },
  Mf = { default: `0 ${Of + Of / 4}px`, compact: `0 ${Of + Of / 4}px`, none: `0` },
  Nf = { compact: `0 ${Of / 4}px`, default: `0 ${Of / 4}px`, none: `0` },
  Pf = { default: `middle`, compact: `middle`, none: `baseline` },
  Ff = {
    borderRadius: `inherit`,
    inset: `var(--ds-space-0, 0px)`,
    borderStyle: `solid`,
    borderWidth: `var(--ds-border-width, 1px)`,
    pointerEvents: `none`,
    position: `absolute`,
  },
  If = {
    background: `var(--ds-background-neutral-subtle, #00000000)`,
    color: `var(--ds-text, #292A2E)`,
    "&::after": Df(Df({}, Ff), {}, { content: `""`, borderColor: `var(--ds-border, #0B120E24)` }),
    "&:hover": { background: `var(--ds-background-neutral-hovered, #0B120E24)` },
    "&:active": { background: `var(--ds-background-neutral-pressed, #080F214A)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-neutral-subtle, #00000000)`,
    },
    "&:disabled[disabled]": { background: `var(--ds-background-neutral-subtle, #00000000)` },
    "&:disabled[disabled]:hover": { background: `var(--ds-background-neutral-subtle, #00000000)` },
    "&:disabled[disabled]:active": { background: `var(--ds-background-neutral-subtle, #00000000)` },
  },
  Lf = {
    background: `var(--ds-background-brand-bold, #1868DB)`,
    color: `var(--ds-text-inverse, #FFFFFF)`,
    "&:hover": { background: `var(--ds-background-brand-bold-hovered, #1558BC)` },
    "&:active": { background: `var(--ds-background-brand-bold-pressed, #144794)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-brand-bold, #1868DB)`,
    },
  },
  Rf = {
    background: `transparent`,
    color: `var(--ds-link, #1868DB)`,
    "&:hover": { color: `var(--ds-link, #1868DB)`, textDecoration: `underline` },
    "&:active": { color: `var(--ds-link-pressed, #1558BC)`, textDecoration: `underline` },
  },
  zf = {
    background: `transparent`,
    color: `var(--ds-text-subtle, #505258)`,
    "&:hover": { background: `var(--ds-background-neutral-subtle-hovered, #0515240F)` },
    "&:active": { background: `var(--ds-background-neutral-subtle-pressed, #0B120E24)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: `transparent` },
  },
  Bf = {
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
  Vf = {
    background: `var(--ds-background-warning-bold, #FBC828)`,
    color: `var(--ds-text-warning-inverse, #292A2E)`,
    "&:hover": { background: `var(--ds-background-warning-bold-hovered, #FCA700)` },
    "&:active": { background: `var(--ds-background-warning-bold-pressed, #F68909)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-warning-bold, #FBC828)`,
    },
  },
  Hf = {
    background: `var(--ds-background-danger-bold, #C9372C)`,
    color: `var(--ds-text-inverse, #FFFFFF)`,
    "&:hover": { background: `var(--ds-background-danger-bold-hovered, #AE2E24)` },
    "&:active": { background: `var(--ds-background-danger-bold-pressed, #872821)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-danger-bold, #C9372C)`,
    },
  },
  Uf = {
    background: `var(--ds-background-selected, #E9F2FE)`,
    color: `var(--ds-text-selected, #1868DB)`,
    "&:not([disabled])::after": Df(
      Df({}, Ff),
      {},
      { content: `""`, borderColor: `var(--ds-border-selected, #1868DB)` },
    ),
  },
  Wf = { '&[data-has-overlay="true"]': { cursor: `default`, textDecoration: `none` } };
function Gf(e) {
  var t = e.appearance,
    n = e.spacing,
    r = e.isSelected,
    i = e.shouldFitContainer,
    a = e.isOnlySingleIcon;
  return Df(
    Df(
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
        height: Af[n],
        lineHeight: jf[n],
        padding: a ? Nf[n] : Mf[n],
        verticalAlign: Pf[n],
        width: i ? `100%` : `auto`,
        justifyContent: `center`,
      },
      r
        ? Uf
        : Df(
            Df(
              Df(
                Df(
                  Df(
                    Df(
                      Df(Df({}, t === `default` && If), t === `primary` && Lf),
                      t === `link` && Rf,
                    ),
                    t === `subtle` && zf,
                  ),
                  t === `subtle-link` && Bf,
                ),
                t === `warning` && Vf,
              ),
              t === `danger` && Hf,
            ),
            {},
            {
              "&[disabled]": {
                color: `var(--ds-text-disabled, #080F214A)`,
                backgroundColor: kf.includes(t)
                  ? `var(--ds-background-disabled, #17171708)`
                  : `transparent`,
                cursor: `not-allowed`,
                textDecoration: `none`,
                "&:hovered": {
                  backgroundColor: kf.includes(t)
                    ? `var(--ds-background-disabled, #17171708)`
                    : `transparent`,
                },
                "&:active": {
                  backgroundColor: kf.includes(t)
                    ? `var(--ds-background-disabled, #17171708)`
                    : `transparent`,
                },
              },
            },
            Wf,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function Kf(e) {
  var t = e.children,
    n = e.iconBefore,
    r = e.iconAfter;
  return _f(t) ? !0 : t ? !1 : !!((n && !r) || (!n && r));
}
var qf = [
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
  Jf = typeof navigator < `u` && navigator.userAgent.toLowerCase().indexOf(`firefox`) > -1,
  Yf = B.memo(
    B.forwardRef(function (e, t) {
      var n = e.appearance,
        r = n === void 0 ? `default` : n,
        i = e.children,
        a = e.iconBefore,
        o = e.iconAfter,
        s = e.isSelected,
        c = s === void 0 ? !1 : s,
        l = e.onMouseDown,
        u = l === void 0 ? Z : l,
        d = e.onMouseUp,
        p = d === void 0 ? Z : d,
        m = e.shouldFitContainer,
        h = m === void 0 ? !1 : m,
        _ = e.spacing,
        v = _ === void 0 ? `default` : _,
        y = g(e, qf),
        b = Kf({ children: i, iconBefore: a, iconAfter: o }),
        x = f((0, B.useState)(!1), 2),
        S = x[0],
        C = x[1],
        w = (0, B.useCallback)(
          function (e) {
            (u(e), Jf && C(!0));
          },
          [u, C],
        ),
        T = (0, B.useCallback)(
          function (e) {
            (p(e), Jf && C(!1));
          },
          [p, C],
        ),
        E = (0, B.useMemo)(
          function () {
            return Gf({
              appearance: r,
              spacing: v,
              isSelected: c,
              shouldFitContainer: h,
              isOnlySingleIcon: b,
            });
          },
          [r, v, c, h, b],
        );
      return B.createElement(
        Tf,
        N({}, y, {
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
Yf.displayName = `Button`;
function Xf(e) {
  return B.createElement(Yf, {
    "aria-label": e[`aria-label`],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: `subtle`,
  });
}
function Zf(e) {
  return B.createElement(Yf, N({}, e, { appearance: `subtle` }));
}
var Qf = { container: `_1e0c1txw _kqswh2mm` };
function $f(e) {
  var t = e.key,
    n = e.testId,
    r = e.from,
    i = e.to;
  return B.createElement(
    iu,
    { as: `li`, testId: n, key: t, xcss: Qf.container, paddingInline: `space.100` },
    B.createElement(
      Pu,
      { testId: n && `${n}-text` },
      B.createElement($d, null, `Skipped pages from `, r, ` to `, i),
      `…`,
    ),
  );
}
var ep = {},
  tp =
    Number.isNaN ||
    function (e) {
      return typeof e == `number` && e !== e;
    };
function np(e, t) {
  return !!(e === t || (tp(e) && tp(t)));
}
function rp(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!np(e[n], t[n])) return !1;
  return !0;
}
function ip(e, t) {
  t === void 0 && (t = rp);
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
var ap = function (e, t, n, r) {
    var i = n.max,
      a = n.ellipsis,
      o = n.transform,
      s = e.length,
      c = s > i,
      l = c && i - 4 < t,
      u = c && t < s - i + 3,
      d = ip(function () {
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
        m(d(0, 1)),
        [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: 2, to: s - f })],
        m(d(s - f)),
      );
    }
    if (!l && u) {
      var p = i - 2;
      return [].concat(
        m(d(0, p)),
        [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: p + 1, to: s - 1 })],
        m(d(s - 1)),
      );
    }
    var h = i - 4;
    return [].concat(
      m(d(0, 1)),
      [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: 2, to: t - Math.floor(h / 2) })],
      m(d(t - Math.floor(h / 2), t + h - 1)),
      [a({ key: `ellipsis-2`, testId: r && `${r}-ellipsis`, from: t + 3, to: s - 1 })],
      m(d(s - 1)),
    );
  },
  op = e(Kl()),
  sp = e(ql());
function cp(e, t) {
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
function lp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? cp(Object(n), !0).forEach(function (t) {
          l(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : cp(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var up = {
    paginationMenu: `_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t`,
    paginationMenuItem: `_1pfhze3t _ect4ttxp`,
    navigatorIconWrapper: `_18zr12x7`,
  },
  dp = {
    componentName: `pagination`,
    packageName: `@atlaskit/pagination`,
    packageVersion: `16.2.11`,
  };
function fp(e) {
  var t = e.chevronDirection === `left` ? op.default : sp.default;
  return B.createElement(
    iu,
    { as: `span`, xcss: up.navigatorIconWrapper },
    B.createElement(t, { label: ``, color: `currentColor`, size: `small` }),
  );
}
function pp(e, t) {
  var n = e.components,
    r = n === void 0 ? ep : n,
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
    _ = g === void 0 ? ep : g,
    v = e.max,
    y = v === void 0 ? 7 : v,
    b = e.onChange,
    x = b === void 0 ? Z : b,
    S = e.pages,
    C = e.getPageLabel,
    w = e.renderEllipsis,
    T = w === void 0 ? $f : w,
    E = e.analyticsContext,
    D = e.testId,
    O = e.isDisabled,
    k = f(
      Fl(o, function () {
        return a || 0;
      }),
      2,
    ),
    A = k[0],
    j = k[1],
    M = Kc(
      lp(
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
        dp,
      ),
    );
  return B.createElement(
    iu,
    { testId: D, style: _, ref: t, "aria-label": c, as: `nav` },
    B.createElement(
      Cu,
      { space: `space.0`, alignBlock: `center` },
      B.createElement(Xf, {
        key: `left-navigator`,
        component: r.Previous,
        onClick: function (e) {
          return M({ event: e, selectedPageIndex: A - 1 });
        },
        isDisabled: O || A === 0,
        iconBefore: B.createElement(fp, { chevronDirection: `left` }),
        "aria-label": p,
        testId: D && `${D}--left-navigator`,
      }),
      B.createElement(
        Cu,
        { space: `space.0`, alignBlock: `baseline`, as: `ul`, xcss: up.paginationMenu },
        ap(
          S,
          A,
          {
            max: y,
            ellipsis: T,
            transform: function (e, t, n) {
              var i = S[A],
                a = `${u} ${C ? C(e, t) : e}`,
                o = e === i;
              return B.createElement(
                Cu,
                { as: `li`, xcss: up.paginationMenuItem, key: `page-${C ? C(e, t) : t}` },
                B.createElement(
                  Zf,
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
      B.createElement(Xf, {
        key: `right-navigator`,
        component: r.Next,
        onClick: function (e) {
          return M({ event: e, selectedPageIndex: A + 1 });
        },
        isDisabled: O || A === S.length - 1,
        iconBefore: B.createElement(fp, { chevronDirection: `right` }),
        "aria-label": h,
        testId: D && `${D}--right-navigator`,
      }),
    ),
  );
}
var mp = (0, B.memo)((0, B.forwardRef)(pp));
function hp(e, t, n) {
  return ((t = _(t)), u(e, gp() ? Reflect.construct(t, n || [], _(e).constructor) : t.apply(e, n)));
}
function gp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (gp = function () {
    return !!e;
  })();
}
var _p = (function (e) {
  function t() {
    var e;
    d(this, t);
    var n = [...arguments];
    return (
      (e = hp(this, t, [].concat(n))),
      l(e, `onChange`, function (t, n, r) {
        e.props.onChange(n, r);
      }),
      e
    );
  }
  return (
    h(t, e),
    p(t, [
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
            s = m(Array(t)).map(function (e, t) {
              return t + 1;
            }),
            c = r - 1;
          return B.createElement(mp, {
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
w();
var vp = [`isRanking`, `testId`],
  yp = function (e) {
    var t = e.isRanking,
      n = e.testId,
      r = g(e, vp);
    return B.createElement(
      `thead`,
      N({ "data-testid": n }, r, { className: k([`_179rglyw`, t && `_1e0c1ule`]) }),
    );
  },
  bp = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Gl(), t(Wl)));
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
  xp = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Gl(), t(Wl)));
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
function Sp(e) {
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
        return (0, fd.bindAll)(
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
function Cp(e) {
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
var wp = (0, B.createContext)(null),
  Tp = (0, B.createContext)(null);
function Ep() {
  return (0, B.useContext)(Tp);
}
function Dp(e) {
  var t = e.isOpen,
    n = e.type,
    r = e.onClose,
    i = (0, B.useContext)(wp),
    a = Ep();
  (0, B.useEffect)(
    function () {
      if (i !== null && t) return i.onClose(r, { namespace: a, type: n });
    },
    [i, t, a, r, n],
  );
}
var Op = { none: 0, small: 100, medium: 350, large: 700 },
  kp = 0.5,
  Ap = { none: Op.none, small: Op.small * kp, medium: Op.medium * kp, large: Op.large * kp },
  jp = function () {
    return typeof window < `u` && `matchMedia` in window;
  },
  Mp = function () {
    return jp() ? window.matchMedia(`(prefers-reduced-motion: reduce)`).matches : !1;
  },
  Np = function (e) {
    switch (e.cleanup) {
      case `next-effect`:
        return;
      default:
        return [];
    }
  },
  Pp = function () {
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
      }, Np(e)),
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
  Fp = { appear: !0, isExiting: !1 },
  Ip = (0, B.createContext)(Fp),
  Lp = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fp;
    return B.createElement(Ip.Provider, { key: `${e.key}-provider`, value: t }, e);
  },
  Rp = function (e) {
    var t = [];
    return (
      B.Children.toArray(e).forEach(function (e) {
        typeof e != `boolean` && e && t.push(e);
      }),
      t
    );
  },
  zp = function (e, t) {
    for (var n = t.concat([]), r = Bp(t), i = 0; i < e.length; i++) {
      var a = e[i];
      r[a.key] || n.splice(i + 1, 0, a);
    }
    return n;
  },
  Bp = function (e) {
    return e.reduce(function (e, t) {
      return ((e[t.key] = t), e);
    }, {});
  },
  Vp = function (e, t) {
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
  Hp = (0, B.memo)(function (e) {
    var t = e.appear,
      n = t === void 0 ? !1 : t,
      r = e.children,
      i = e.exitThenEnter,
      a = f((0, B.useState)([null, r]), 2),
      o = a[0],
      s = a[1],
      c = f((0, B.useState)([]), 2),
      l = c[0],
      u = c[1],
      d = f(
        (0, B.useState)(function () {
          return { appear: n, isExiting: !1 };
        }),
        2,
      ),
      p = d[0],
      m = d[1];
    if (
      ((0, B.useEffect)(function () {
        p.appear || m({ appear: !0, isExiting: !1 });
      }, []),
      typeof o == `boolean`)
    )
      return r;
    var h = f(o, 2),
      g = h[0],
      _ = h[1],
      v = Rp(g),
      y = Rp(_);
    _ !== r && s([_, r]);
    var b = Vp(y, v),
      x = !!b.size,
      S = y;
    if ((x && (S = zp(y, v)), i))
      if (l.length) S = P(`platform-dst-motion-uplift`) ? v : l;
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
            return Lp(e, {
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
            return Lp(e, p);
          })),
      S
    );
  }),
  Up = function () {
    return (0, B.useContext)(Ip);
  };
Hp.displayName = `ExitingPersistence`;
function Wp() {
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
var Gp = (0, B.createContext)(function () {
    return { isReady: !0, delay: 0, ref: Z };
  }),
  Kp = function () {
    var e = Wp();
    return (0, B.useContext)(Gp)(e);
  };
w();
var qp = function (e) {
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
      p = Kp(),
      m = Up(),
      h = m.isExiting,
      g = m.onFinish,
      _ = m.appear,
      v = Pp(),
      y = c || !p.isReady,
      b = h ? 0 : p.delay,
      x = h ? `exiting` : `entering`,
      S = f((0, B.useState)(_), 2),
      C = S[0],
      w = S[1];
    return (
      (0, B.useEffect)(
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
            if (Mp()) {
              t();
              return;
            }
            return (
              w(!0),
              v(t, h ? Ap[d] : Op[d] + b),
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
            ? k([
                k([`_1o51eoah _1y0co91m _1bumglyw _sedtglyw`]),
                y && k([`_1y0ctrqk`]),
                d === `small` && k([`_5sag1yx9`]),
                d === `medium` && k([`_5sag1ttt`]),
                d === `large` && k([`_5sagpwmj`]),
                h && d === `small` && k([`_5sag14ed`]),
                h && d === `medium` && k([`_5sagluct`]),
                h && d === `large` && k([`_5sag1ttt`]),
                h && k([`_ju255cps _1o51q7pw`]),
                !h && n === `linear` && k([`_1pglp3kn`]),
                !h && n === `ease-out` && k([`_1pgldkwg`]),
                !h && n === `ease-in` && k([`_1pgl1nzg`]),
                !h && n === `ease-in-40-out` && k([`_1pgl5y64`]),
                !h && n === `ease-in-60-out` && k([`_1pgl1ddy`]),
                !h && n === `ease-in-80-out` && k([`_1pglannl`]),
                !h && n === `ease-in-out` && k([`_1pgl1fu8`]),
                h && n === `linear` && k([`_1pglp3kn`]),
                h && i === `ease-out` && k([`_1pgldkwg`]),
                h && i === `ease-in` && k([`_1pgl1nzg`]),
                h && i === `ease-in-40-out` && k([`_1pgl5y64`]),
                h && i === `ease-in-60-out` && k([`_1pgl1ddy`]),
                h && i === `ease-in-80-out` && k([`_1pglannl`]),
                h && i === `ease-in-out` && k([`_1pgl1fu8`]),
                ((!h && a === `fade-in`) || (h && s === `fade-in`)) && k([`_j7hq1cgr`]),
                ((!h && a === `fade-out`) || (h && s === `fade-out`)) && k([`_j7hq1lln`]),
                ((!h && a === `zoom-in`) || (h && s === `zoom-in`)) && k([`_j7hqe8p0`]),
                ((!h && a === `zoom-out`) || (h && s === `zoom-out`)) && k([`_j7hqy6ql`]),
                ((!h && a === `slide-in-from-top`) || (h && s === `slide-in-from-top`)) &&
                  k([`_j7hqqshu`]),
                ((!h && a === `slide-out-from-top`) || (h && s === `slide-out-from-top`)) &&
                  k([`_j7hq7ri4`]),
                ((!h && a === `slide-in-from-right`) || (h && s === `slide-in-from-right`)) &&
                  k([`_j7hqdfjr`]),
                ((!h && a === `slide-out-from-right`) || (h && s === `slide-out-from-right`)) &&
                  k([`_j7hqonfj`]),
                ((!h && a === `slide-in-from-bottom`) || (h && s === `slide-in-from-bottom`)) &&
                  k([`_j7hq1liq`]),
                ((!h && a === `slide-out-from-bottom`) || (h && s === `slide-out-from-bottom`)) &&
                  k([`_j7hqhnf1`]),
                ((!h && a === `slide-in-from-left`) || (h && s === `slide-in-from-left`)) &&
                  k([`_j7hq1bh1`]),
                ((!h && a === `slide-out-from-left`) || (h && s === `slide-out-from-left`)) &&
                  k([`_j7hqj08w`]),
                ((!h && a === `fade-in-from-top`) || (h && s === `fade-in-from-top`)) &&
                  k([`_j7hq2iua`]),
                ((!h && a === `fade-out-from-top`) || (h && s === `fade-out-from-top`)) &&
                  k([`_j7hq39va`]),
                ((!h && a === `fade-in-from-left`) || (h && s === `fade-in-from-left`)) &&
                  k([`_j7hq15m2`]),
                ((!h && a === `fade-out-from-left`) || (h && s === `fade-out-from-left`)) &&
                  k([`_j7hq1yiv`]),
                ((!h && a === `fade-in-from-bottom`) || (h && s === `fade-in-from-bottom`)) &&
                  k([`_j7hq1w00`]),
                ((!h && a === `fade-out-from-bottom`) || (h && s === `fade-out-from-bottom`)) &&
                  k([`_j7hqzy3z`]),
                ((!h && a === `fade-in-from-right`) || (h && s === `fade-in-from-right`)) &&
                  k([`_j7hqpqak`]),
                ((!h && a === `fade-out-from-right`) || (h && s === `fade-out-from-right`)) &&
                  k([`_j7hq1ebg`]),
                ((!h && a === `fade-in-from-top-constant`) ||
                  (h && s === `fade-in-from-top-constant`)) &&
                  k([`_j7hqm2e2`]),
                ((!h && a === `fade-out-from-top-constant`) ||
                  (h && s === `fade-out-from-top-constant`)) &&
                  k([`_j7hq97jn`]),
                ((!h && a === `fade-in-from-left-constant`) ||
                  (h && s === `fade-in-from-left-constant`)) &&
                  k([`_j7hqovgq`]),
                ((!h && a === `fade-out-from-left-constant`) ||
                  (h && s === `fade-out-from-left-constant`)) &&
                  k([`_j7hq15do`]),
                ((!h && a === `fade-in-from-bottom-constant`) ||
                  (h && s === `fade-in-from-bottom-constant`)) &&
                  k([`_j7hq797a`]),
                ((!h && a === `fade-out-from-bottom-constant`) ||
                  (h && s === `fade-out-from-bottom-constant`)) &&
                  k([`_j7hqwo7r`]),
                ((!h && a === `fade-in-from-right-constant`) ||
                  (h && s === `fade-in-from-right-constant`)) &&
                  k([`_j7hqt8u5`]),
                ((!h && a === `fade-out-from-right-constant`) ||
                  (h && s === `fade-out-from-right-constant`)) &&
                  k([`_j7hq1pgp`]),
              ])
            : ``,
          style: { animationDelay: `${b}ms` },
        },
        x,
      )
    );
  },
  Jp = { top: `bottom`, bottom: `top`, left: `right`, right: `left` },
  Yp = function (e) {
    var t = e.children,
      n = e.duration,
      r = n === void 0 ? `large` : n,
      i = e.entranceDirection,
      a = e.exitDirection,
      o = e.distance,
      s = o === void 0 ? `proportional` : o,
      c = e.onFinish,
      l = e.isPaused,
      u = i === void 0 ? void 0 : Jp[i],
      d = a || u ? `fade-out-from-${a || u}${s === `proportional` ? `` : `-constant`}` : `fade-out`;
    return B.createElement(
      qp,
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
  Xp = B.createContext();
B.createContext();
var Zp = function (e) {
    return Array.isArray(e) ? e[0] : e;
  },
  Qp = function (e) {
    if (typeof e == `function`) {
      var t = [...arguments].slice(1);
      return e.apply(void 0, t);
    }
  },
  $p = function (e, t) {
    if (typeof e == `function`) return Qp(e, t);
    e != null && (e.current = t);
  },
  em = function (e) {
    return e.reduce(function (e, t) {
      var n = t[0];
      return ((e[n] = t[1]), e);
    }, {});
  },
  tm =
    typeof window < `u` && window.document && window.document.createElement
      ? B.useLayoutEffect
      : B.useEffect,
  nm = `bottom`,
  rm = `right`,
  im = `left`,
  am = `auto`,
  om = [`top`, nm, rm, im],
  sm = `start`,
  cm = `clippingParents`,
  lm = `viewport`,
  um = `popper`,
  dm = `reference`,
  fm = om.reduce(function (e, t) {
    return e.concat([t + `-` + sm, t + `-end`]);
  }, []),
  pm = [].concat(om, [am]).reduce(function (e, t) {
    return e.concat([t, t + `-` + sm, t + `-end`]);
  }, []),
  mm = [
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
function hm(e) {
  return e ? (e.nodeName || ``).toLowerCase() : null;
}
function gm(e) {
  if (e == null) return window;
  if (e.toString() !== `[object Window]`) {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function _m(e) {
  return e instanceof gm(e).Element || e instanceof Element;
}
function vm(e) {
  return e instanceof gm(e).HTMLElement || e instanceof HTMLElement;
}
function ym(e) {
  return typeof ShadowRoot > `u` ? !1 : e instanceof gm(e).ShadowRoot || e instanceof ShadowRoot;
}
function bm(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (e) {
    var n = t.styles[e] || {},
      r = t.attributes[e] || {},
      i = t.elements[e];
    !vm(i) ||
      !hm(i) ||
      (Object.assign(i.style, n),
      Object.keys(r).forEach(function (e) {
        var t = r[e];
        t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? `` : t);
      }));
  });
}
function xm(e) {
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
        !vm(r) ||
          !hm(r) ||
          (Object.assign(r.style, a),
          Object.keys(i).forEach(function (e) {
            r.removeAttribute(e);
          }));
      });
    }
  );
}
var Sm = {
  name: `applyStyles`,
  enabled: !0,
  phase: `write`,
  fn: bm,
  effect: xm,
  requires: [`computeStyles`],
};
function Cm(e) {
  return e.split(`-`)[0];
}
var wm = Math.max,
  Tm = Math.min,
  Em = Math.round;
function Dm() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (e) {
          return e.brand + `/` + e.version;
        })
        .join(` `)
    : navigator.userAgent;
}
function Om() {
  return !/^((?!chrome|android).)*safari/i.test(Dm());
}
function km(e, t, n) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  var r = e.getBoundingClientRect(),
    i = 1,
    a = 1;
  t &&
    vm(e) &&
    ((i = (e.offsetWidth > 0 && Em(r.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && Em(r.height) / e.offsetHeight) || 1));
  var o = (_m(e) ? gm(e) : window).visualViewport,
    s = !Om() && n,
    c = (r.left + (s && o ? o.offsetLeft : 0)) / i,
    l = (r.top + (s && o ? o.offsetTop : 0)) / a,
    u = r.width / i,
    d = r.height / a;
  return { width: u, height: d, top: l, right: c + u, bottom: l + d, left: c, x: c, y: l };
}
function Am(e) {
  var t = km(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function jm(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && ym(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Mm(e) {
  return gm(e).getComputedStyle(e);
}
function Nm(e) {
  return [`table`, `td`, `th`].indexOf(hm(e)) >= 0;
}
function Pm(e) {
  return ((_m(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Fm(e) {
  return hm(e) === `html` ? e : e.assignedSlot || e.parentNode || (ym(e) ? e.host : null) || Pm(e);
}
function Im(e) {
  return !vm(e) || Mm(e).position === `fixed` ? null : e.offsetParent;
}
function Lm(e) {
  var t = /firefox/i.test(Dm());
  if (/Trident/i.test(Dm()) && vm(e) && Mm(e).position === `fixed`) return null;
  var n = Fm(e);
  for (ym(n) && (n = n.host); vm(n) && [`html`, `body`].indexOf(hm(n)) < 0; ) {
    var r = Mm(n);
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
function Rm(e) {
  for (var t = gm(e), n = Im(e); n && Nm(n) && Mm(n).position === `static`; ) n = Im(n);
  return n && (hm(n) === `html` || (hm(n) === `body` && Mm(n).position === `static`))
    ? t
    : n || Lm(e) || t;
}
function zm(e) {
  return [`top`, `bottom`].indexOf(e) >= 0 ? `x` : `y`;
}
function Bm(e, t, n) {
  return wm(e, Tm(t, n));
}
function Vm(e, t, n) {
  var r = Bm(e, t, n);
  return r > n ? n : r;
}
function Hm() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Um(e) {
  return Object.assign({}, Hm(), e);
}
function Wm(e, t) {
  return t.reduce(function (t, n) {
    return ((t[n] = e), t);
  }, {});
}
var Gm = function (e, t) {
  return (
    (e = typeof e == `function` ? e(Object.assign({}, t.rects, { placement: t.placement })) : e),
    Um(typeof e == `number` ? Wm(e, om) : e)
  );
};
function Km(e) {
  var t,
    n = e.state,
    r = e.name,
    i = e.options,
    a = n.elements.arrow,
    o = n.modifiersData.popperOffsets,
    s = Cm(n.placement),
    c = zm(s),
    l = [`left`, `right`].indexOf(s) >= 0 ? `height` : `width`;
  if (!(!a || !o)) {
    var u = Gm(i.padding, n),
      d = Am(a),
      f = c === `y` ? `top` : im,
      p = c === `y` ? nm : rm,
      m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l],
      h = o[c] - n.rects.reference[c],
      g = Rm(a),
      _ = g ? (c === `y` ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
      v = m / 2 - h / 2,
      y = u[f],
      b = _ - d[l] - u[p],
      x = _ / 2 - d[l] / 2 + v,
      S = Bm(y, x, b),
      C = c;
    n.modifiersData[r] = ((t = {}), (t[C] = S), (t.centerOffset = S - x), t);
  }
}
function qm(e) {
  var t = e.state,
    n = e.options.element,
    r = n === void 0 ? `[data-popper-arrow]` : n;
  r != null &&
    ((typeof r == `string` && ((r = t.elements.popper.querySelector(r)), !r)) ||
      (jm(t.elements.popper, r) && (t.elements.arrow = r)));
}
var Jm = {
  name: `arrow`,
  enabled: !0,
  phase: `main`,
  fn: Km,
  effect: qm,
  requires: [`popperOffsets`],
  requiresIfExists: [`preventOverflow`],
};
function Ym(e) {
  return e.split(`-`)[1];
}
var Xm = { top: `auto`, right: `auto`, bottom: `auto`, left: `auto` };
function Zm(e, t) {
  var n = e.x,
    r = e.y,
    i = t.devicePixelRatio || 1;
  return { x: Em(n * i) / i || 0, y: Em(r * i) / i || 0 };
}
function Qm(e) {
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
    y = im,
    b = `top`,
    x = window;
  if (l) {
    var S = Rm(n),
      C = `clientHeight`,
      w = `clientWidth`;
    if (
      (S === gm(n) &&
        ((S = Pm(n)),
        Mm(S).position !== `static` &&
          s === `absolute` &&
          ((C = `scrollHeight`), (w = `scrollWidth`))),
      (S = S),
      i === `top` || ((i === `left` || i === `right`) && a === `end`))
    ) {
      b = nm;
      var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
      ((h -= T - r.height), (h *= c ? 1 : -1));
    }
    if (i === `left` || ((i === `top` || i === `bottom`) && a === `end`)) {
      y = rm;
      var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
      ((p -= E - r.width), (p *= c ? 1 : -1));
    }
  }
  var D = Object.assign({ position: s }, l && Xm),
    O = u === !0 ? Zm({ x: p, y: h }, gm(n)) : { x: p, y: h };
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
function $m(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    i = r === void 0 ? !0 : r,
    a = n.adaptive,
    o = a === void 0 ? !0 : a,
    s = n.roundOffsets,
    c = s === void 0 ? !0 : s,
    l = {
      placement: Cm(t.placement),
      variation: Ym(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === `fixed`,
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Qm(
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
        Qm(
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
var eh = { name: `computeStyles`, enabled: !0, phase: `beforeWrite`, fn: $m, data: {} },
  th = { passive: !0 };
function nh(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    i = r.scroll,
    a = i === void 0 ? !0 : i,
    o = r.resize,
    s = o === void 0 ? !0 : o,
    c = gm(t.elements.popper),
    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    a &&
      l.forEach(function (e) {
        e.addEventListener(`scroll`, n.update, th);
      }),
    s && c.addEventListener(`resize`, n.update, th),
    function () {
      (a &&
        l.forEach(function (e) {
          e.removeEventListener(`scroll`, n.update, th);
        }),
        s && c.removeEventListener(`resize`, n.update, th));
    }
  );
}
var rh = {
    name: `eventListeners`,
    enabled: !0,
    phase: `write`,
    fn: function () {},
    effect: nh,
    data: {},
  },
  ih = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function ah(e) {
  return e.replace(/left|right|bottom|top/g, function (e) {
    return ih[e];
  });
}
var oh = { start: `end`, end: `start` };
function sh(e) {
  return e.replace(/start|end/g, function (e) {
    return oh[e];
  });
}
function ch(e) {
  var t = gm(e);
  return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function lh(e) {
  return km(Pm(e)).left + ch(e).scrollLeft;
}
function uh(e, t) {
  var n = gm(e),
    r = Pm(e),
    i = n.visualViewport,
    a = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    c = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    var l = Om();
    (l || (!l && t === `fixed`)) && ((s = i.offsetLeft), (c = i.offsetTop));
  }
  return { width: a, height: o, x: s + lh(e), y: c };
}
function dh(e) {
  var t = Pm(e),
    n = ch(e),
    r = e.ownerDocument?.body,
    i = wm(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
    a = wm(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
    o = -n.scrollLeft + lh(e),
    s = -n.scrollTop;
  return (
    Mm(r || t).direction === `rtl` && (o += wm(t.clientWidth, r ? r.clientWidth : 0) - i),
    { width: i, height: a, x: o, y: s }
  );
}
function fh(e) {
  var t = Mm(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function ph(e) {
  return [`html`, `body`, `#document`].indexOf(hm(e)) >= 0
    ? e.ownerDocument.body
    : vm(e) && fh(e)
      ? e
      : ph(Fm(e));
}
function mh(e, t) {
  t === void 0 && (t = []);
  var n = ph(e),
    r = n === e.ownerDocument?.body,
    i = gm(n),
    a = r ? [i].concat(i.visualViewport || [], fh(n) ? n : []) : n,
    o = t.concat(a);
  return r ? o : o.concat(mh(Fm(a)));
}
function hh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function gh(e, t) {
  var n = km(e, !1, t === `fixed`);
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
function _h(e, t, n) {
  return t === `viewport` ? hh(uh(e, n)) : _m(t) ? gh(t, n) : hh(dh(Pm(e)));
}
function vh(e) {
  var t = mh(Fm(e)),
    n = [`absolute`, `fixed`].indexOf(Mm(e).position) >= 0 && vm(e) ? Rm(e) : e;
  return _m(n)
    ? t.filter(function (e) {
        return _m(e) && jm(e, n) && hm(e) !== `body`;
      })
    : [];
}
function yh(e, t, n, r) {
  var i = t === `clippingParents` ? vh(e) : [].concat(t),
    a = [].concat(i, [n]),
    o = a[0],
    s = a.reduce(
      function (t, n) {
        var i = _h(e, n, r);
        return (
          (t.top = wm(i.top, t.top)),
          (t.right = Tm(i.right, t.right)),
          (t.bottom = Tm(i.bottom, t.bottom)),
          (t.left = wm(i.left, t.left)),
          t
        );
      },
      _h(e, o, r),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function bh(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    i = r ? Cm(r) : null,
    a = r ? Ym(r) : null,
    o = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    c;
  switch (i) {
    case `top`:
      c = { x: o, y: t.y - n.height };
      break;
    case nm:
      c = { x: o, y: t.y + t.height };
      break;
    case rm:
      c = { x: t.x + t.width, y: s };
      break;
    case im:
      c = { x: t.x - n.width, y: s };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var l = i ? zm(i) : null;
  if (l != null) {
    var u = l === `y` ? `height` : `width`;
    switch (a) {
      case sm:
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
function xh(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = r === void 0 ? e.placement : r,
    a = n.strategy,
    o = a === void 0 ? e.strategy : a,
    s = n.boundary,
    c = s === void 0 ? cm : s,
    l = n.rootBoundary,
    u = l === void 0 ? lm : l,
    d = n.elementContext,
    f = d === void 0 ? um : d,
    p = n.altBoundary,
    m = p === void 0 ? !1 : p,
    h = n.padding,
    g = h === void 0 ? 0 : h,
    _ = Um(typeof g == `number` ? Wm(g, om) : g),
    v = f === `popper` ? dm : um,
    y = e.rects.popper,
    b = e.elements[m ? v : f],
    x = yh(_m(b) ? b : b.contextElement || Pm(e.elements.popper), c, u, o),
    S = km(e.elements.reference),
    C = bh({ reference: S, element: y, strategy: `absolute`, placement: i }),
    w = hh(Object.assign({}, y, C)),
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
function Sh(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = n.boundary,
    a = n.rootBoundary,
    o = n.padding,
    s = n.flipVariations,
    c = n.allowedAutoPlacements,
    l = c === void 0 ? pm : c,
    u = Ym(r),
    d = u
      ? s
        ? fm
        : fm.filter(function (e) {
            return Ym(e) === u;
          })
      : om,
    f = d.filter(function (e) {
      return l.indexOf(e) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (t, n) {
    return ((t[n] = xh(e, { placement: n, boundary: i, rootBoundary: a, padding: o })[Cm(n)]), t);
  }, {});
  return Object.keys(p).sort(function (e, t) {
    return p[e] - p[t];
  });
}
function Ch(e) {
  if (Cm(e) === `auto`) return [];
  var t = ah(e);
  return [sh(e), t, sh(t)];
}
function wh(e) {
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
        _ = Cm(g) === g,
        v = c || (_ || !m ? [ah(g)] : Ch(g)),
        y = [g].concat(v).reduce(function (e, n) {
          return e.concat(
            Cm(n) === `auto`
              ? Sh(t, {
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
        D = Cm(E),
        O = Ym(E) === sm,
        k = [`top`, nm].indexOf(D) >= 0,
        A = k ? `width` : `height`,
        j = xh(t, { placement: E, boundary: u, rootBoundary: d, altBoundary: f, padding: l }),
        M = k ? (O ? rm : im) : O ? nm : `top`;
      b[A] > x[A] && (M = ah(M));
      var ee = ah(M),
        te = [];
      if (
        (a && te.push(j[D] <= 0),
        s && te.push(j[M] <= 0, j[ee] <= 0),
        te.every(function (e) {
          return e;
        }))
      ) {
        ((w = E), (C = !1));
        break;
      }
      S.set(E, te);
    }
    if (C)
      for (
        var ne = m ? 3 : 1,
          re = function (e) {
            var t = y.find(function (t) {
              var n = S.get(t);
              if (n)
                return n.slice(0, e).every(function (e) {
                  return e;
                });
            });
            if (t) return ((w = t), `break`);
          },
          ie = ne;
        ie > 0 && re(ie) !== `break`;
        ie--
      );
    t.placement !== w && ((t.modifiersData[r]._skip = !0), (t.placement = w), (t.reset = !0));
  }
}
var Th = {
  name: `flip`,
  enabled: !0,
  phase: `main`,
  fn: wh,
  requiresIfExists: [`offset`],
  data: { _skip: !1 },
};
function Eh(e, t, n) {
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
function Dh(e) {
  return [`top`, rm, nm, im].some(function (t) {
    return e[t] >= 0;
  });
}
function Oh(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    i = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    o = xh(t, { elementContext: `reference` }),
    s = xh(t, { altBoundary: !0 }),
    c = Eh(o, r),
    l = Eh(s, i, a),
    u = Dh(c),
    d = Dh(l);
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
var kh = {
  name: `hide`,
  enabled: !0,
  phase: `main`,
  requiresIfExists: [`preventOverflow`],
  fn: Oh,
};
function Ah(e, t, n) {
  var r = Cm(e),
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
function jh(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.offset,
    a = i === void 0 ? [0, 0] : i,
    o = pm.reduce(function (e, n) {
      return ((e[n] = Ah(n, t.rects, a)), e);
    }, {}),
    s = o[t.placement],
    c = s.x,
    l = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[r] = o));
}
var Mh = { name: `offset`, enabled: !0, phase: `main`, requires: [`popperOffsets`], fn: jh };
function Nh(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = bh({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: `absolute`,
    placement: t.placement,
  });
}
var Ph = { name: `popperOffsets`, enabled: !0, phase: `read`, fn: Nh, data: {} };
function Fh(e) {
  return e === `x` ? `y` : `x`;
}
function Ih(e) {
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
    g = xh(t, { boundary: c, rootBoundary: l, padding: d, altBoundary: u }),
    _ = Cm(t.placement),
    v = Ym(t.placement),
    y = !v,
    b = zm(_),
    x = Fh(b),
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
      var k = b === `y` ? `top` : im,
        A = b === `y` ? nm : rm,
        j = b === `y` ? `height` : `width`,
        M = S[b],
        ee = M + g[k],
        te = M - g[A],
        ne = p ? -w[j] / 2 : 0,
        re = v === `start` ? C[j] : w[j],
        ie = v === `start` ? -w[j] : -C[j],
        N = t.elements.arrow,
        ae = p && N ? Am(N) : { width: 0, height: 0 },
        P = t.modifiersData[`arrow#persistent`]
          ? t.modifiersData[`arrow#persistent`].padding
          : Hm(),
        oe = P[k],
        F = P[A],
        I = Bm(0, C[j], ae[j]),
        L = y ? C[j] / 2 - ne - I - oe - E.mainAxis : re - I - oe - E.mainAxis,
        se = y ? -C[j] / 2 + ne + I + F + E.mainAxis : ie + I + F + E.mainAxis,
        R = t.elements.arrow && Rm(t.elements.arrow),
        ce = R ? (b === `y` ? R.clientTop || 0 : R.clientLeft || 0) : 0,
        le = D?.[b] ?? 0,
        ue = M + L - le - ce,
        de = M + se - le,
        fe = Bm(p ? Tm(ee, ue) : ee, M, p ? wm(te, de) : te);
      ((S[b] = fe), (O[b] = fe - M));
    }
    if (s) {
      var pe = b === `x` ? `top` : im,
        me = b === `x` ? nm : rm,
        z = S[x],
        he = x === `y` ? `height` : `width`,
        B = z + g[pe],
        V = z - g[me],
        H = [`top`, im].indexOf(_) !== -1,
        ge = D?.[x] ?? 0,
        _e = H ? B : z - C[he] - w[he] - ge + E.altAxis,
        ve = H ? z + C[he] + w[he] - ge - E.altAxis : V,
        ye = p && H ? Vm(_e, z, ve) : Bm(p ? _e : B, z, p ? ve : V);
      ((S[x] = ye), (O[x] = ye - z));
    }
    t.modifiersData[r] = O;
  }
}
var Lh = {
  name: `preventOverflow`,
  enabled: !0,
  phase: `main`,
  fn: Ih,
  requiresIfExists: [`offset`],
};
function Rh(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function zh(e) {
  return e === gm(e) || !vm(e) ? ch(e) : Rh(e);
}
function Bh(e) {
  var t = e.getBoundingClientRect(),
    n = Em(t.width) / e.offsetWidth || 1,
    r = Em(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Vh(e, t, n) {
  n === void 0 && (n = !1);
  var r = vm(t),
    i = vm(t) && Bh(t),
    a = Pm(t),
    o = km(e, i, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((hm(t) !== `body` || fh(a)) && (s = zh(t)),
      vm(t) ? ((c = km(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : a && (c.x = lh(a))),
    {
      x: o.left + s.scrollLeft - c.x,
      y: o.top + s.scrollTop - c.y,
      width: o.width,
      height: o.height,
    }
  );
}
function Hh(e) {
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
function Uh(e) {
  var t = Hh(e);
  return mm.reduce(function (e, n) {
    return e.concat(
      t.filter(function (e) {
        return e.phase === n;
      }),
    );
  }, []);
}
function Wh(e) {
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
function Gh(e) {
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
var Kh = { placement: `bottom`, modifiers: [], strategy: `absolute` };
function qh() {
  return ![...arguments].some(function (e) {
    return !(e && typeof e.getBoundingClientRect == `function`);
  });
}
function Jh(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = t.defaultOptions,
    a = i === void 0 ? Kh : i;
  return function (e, t, n) {
    n === void 0 && (n = a);
    var i = {
        placement: `bottom`,
        orderedModifiers: [],
        options: Object.assign({}, Kh, a),
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
              reference: _m(e) ? mh(e) : e.contextElement ? mh(e.contextElement) : [],
              popper: mh(t),
            }));
          var s = Uh(Gh([].concat(r, i.options.modifiers)));
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
            if (qh(t, n)) {
              ((i.rects = {
                reference: Vh(t, Rm(n), i.options.strategy === `fixed`),
                popper: Am(n),
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
        update: Wh(function () {
          return new Promise(function (e) {
            (c.forceUpdate(), e(i));
          });
        }),
        destroy: function () {
          (u(), (s = !0));
        },
      };
    if (!qh(e, t)) return c;
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
var Yh = Jh({ defaultModifiers: [rh, Ph, eh, Sm, Mh, Th, Lh, Jm, kh] }),
  Xh = e(
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
  Zh = [],
  Qh = function (e, t, n) {
    n === void 0 && (n = {});
    var r = B.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || `bottom`,
        strategy: n.strategy || `absolute`,
        modifiers: n.modifiers || Zh,
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
            ks.flushSync(function () {
              s({
                styles: em(
                  n.map(function (e) {
                    return [e, t.styles[e] || {}];
                  }),
                ),
                attributes: em(
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
          return (0, Xh.default)(r.current, e) ? r.current || e : ((r.current = e), e);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c],
      ),
      u = B.useRef();
    return (
      tm(
        function () {
          u.current && u.current.setOptions(l);
        },
        [l],
      ),
      tm(
        function () {
          if (!(e == null || t == null)) {
            var r = (n.createPopper || Yh)(e, t, l);
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
  $h = function () {},
  eg = function () {
    return Promise.resolve(null);
  },
  tg = [];
function ng(e) {
  var t = e.placement,
    n = t === void 0 ? `bottom` : t,
    r = e.strategy,
    i = r === void 0 ? `absolute` : r,
    a = e.modifiers,
    o = a === void 0 ? tg : a,
    s = e.referenceElement,
    c = e.onFirstUpdate,
    l = e.innerRef,
    u = e.children,
    d = B.useContext(Xp),
    f = B.useState(null),
    p = f[0],
    m = f[1],
    h = B.useState(null),
    g = h[0],
    _ = h[1];
  B.useEffect(
    function () {
      $p(l, p);
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
    y = Qh(s || d, p, v),
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
          forceUpdate: S || $h,
          update: C || eg,
        };
      },
      [m, _, n, b, x, C, S],
    );
  return Zp(u)(w);
}
function rg(e) {
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
var ig = 5,
  ag = [
    {
      name: `flip`,
      options: {
        flipVariations: !1,
        padding: ig,
        boundary: `clippingParents`,
        rootBoundary: `viewport`,
      },
    },
  ];
function og() {
  return null;
}
var sg = [0, 8];
function cg(e) {
  var t = e.children,
    n = t === void 0 ? og : t,
    r = e.offset,
    i = r === void 0 ? sg : r,
    a = e.placement,
    o = a === void 0 ? `bottom-start` : a,
    s = e.referenceElement,
    c = s === void 0 ? void 0 : s,
    l = e.modifiers,
    u = e.strategy,
    d = u === void 0 ? `fixed` : u,
    p = e.shouldFitViewport,
    h = p === void 0 ? !1 : p,
    g = f(i, 2),
    _ = g[0],
    v = g[1],
    y = (0, B.useMemo)(
      function () {
        var e = {
            name: `preventOverflow`,
            options: { padding: ig, rootBoundary: h ? `viewport` : `document` },
          },
          t = { name: `offset`, options: { offset: [_, v] } },
          n = h ? rg({ viewportPadding: ig }) : [];
        return [].concat(ag, [e, t], m(n));
      },
      [_, v, h],
    ),
    b = (0, B.useMemo)(
      function () {
        return l == null ? y : [].concat(m(y), m(l));
      },
      [y, l],
    );
  return B.createElement(ng, { modifiers: b, placement: o, strategy: d, referenceElement: c }, n);
}
var lg = `atlaskit-portal-container`,
  ug = `body > .atlaskit-portal-container`,
  dg = `atlaskit-portal`,
  fg = function () {
    return document.body;
  },
  pg = function () {
    var e = document.querySelector(ug);
    if (!e) {
      var t,
        n = document.createElement(`div`);
      return (
        (n.className = lg),
        (n.style.display = `flex`),
        (t = fg()) == null || t.appendChild(n),
        n
      );
    }
    return e;
  },
  mg = function (e) {
    e.parentElement || pg().appendChild(e);
  },
  hg = function (e) {
    var t = document.createElement(`div`);
    return ((t.className = dg), (t.style.zIndex = `${e}`), t);
  },
  gg = function () {
    var e = document.querySelector(ug);
    if (!e) {
      var t,
        n = document.createElement(`div`);
      return (
        (n.className = lg),
        (n.style.display = `flex`),
        (t = fg()) == null || t.appendChild(n),
        n
      );
    }
    return e;
  },
  _g = function (e) {
    var t = gg();
    t.contains(e) && t.removeChild(e);
  };
function vg(e) {
  var t = e.zIndex,
    n = e.children,
    r = e.isClosed,
    i = r === void 0 ? !1 : r,
    a = (0, B.useMemo)(
      function () {
        return hg(t);
      },
      [t],
    ),
    o = Zd();
  return (
    mg(a),
    (0, B.useEffect)(
      function () {
        P(`import_into_jsm_in_template_gallery_killswitch`) && i && _g(a);
      },
      [i, a],
    ),
    (0, B.useEffect)(
      function () {
        return function () {
          _g(a);
        };
      },
      [a],
    ),
    (0, ks.createPortal)(o ? B.createElement(Xd, { defaultColorMode: o }, n) : n, a)
  );
}
var yg = typeof window < `u` ? B.useLayoutEffect : B.useEffect,
  bg = function () {
    return document !== void 0;
  },
  xg = function (e) {
    if (bg()) {
      var t = document.createElement(`div`);
      return ((t.className = dg), (t.style.zIndex = `${e}`), t);
    }
  },
  Sg = function () {
    return document !== void 0;
  },
  Cg = function () {
    if (Sg()) {
      var e = document.querySelector(ug);
      if (!e) {
        var t,
          n = document.createElement(`div`);
        return (
          (n.className = lg),
          (n.style.display = `flex`),
          (t = fg()) == null || t.appendChild(n),
          n
        );
      }
      return e;
    }
  },
  wg = function () {
    return document !== void 0;
  },
  Tg = function (e) {
    if (wg() && e) {
      var t;
      (t = fg()) == null || t.removeChild(e);
    }
  };
function Eg(e) {
  var t = e.zIndex,
    n = e.children,
    r = e.isClosed,
    i = f((0, B.useState)(null), 2),
    a = i[0],
    o = i[1],
    s = Zd();
  return (
    yg(
      function () {
        if (P(`import_into_jsm_in_template_gallery_killswitch`)) {
          if (!r) {
            var e = xg(t);
            o(e);
            var n = Cg();
            return !e || !n
              ? void 0
              : (n.appendChild(e),
                function () {
                  (n && (n.removeChild(e), !n.hasChildNodes() && Tg(n)), o(null));
                });
          }
        } else {
          var i = xg(t);
          o(i);
          var a = Cg();
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
      ? (0, ks.createPortal)(
          B.createElement(
            B.Suspense,
            { fallback: null },
            s ? B.createElement(Xd, { defaultColorMode: s }, n) : n,
          ),
          a,
        )
      : null
  );
}
var Dg = function (e) {
    var t = f((0, B.useState)(!1), 2),
      n = t[0],
      r = t[1],
      i = f(
        (0, B.useState)(function () {
          return e === `layoutEffect` ? yg : B.useEffect;
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
  Og = `akPortalMount`,
  kg = `akPortalUnmount`,
  Ag = {
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
  jg = function (e) {
    return Ag.hasOwnProperty(e) ? Ag[e] : null;
  },
  Mg = function (e, t) {
    var n = { layer: jg(Number(t)), zIndex: t };
    return new CustomEvent(e, { detail: n });
  };
function Ng(e, t) {
  var n = Mg(e, t);
  window.dispatchEvent(n);
}
var Pg = function (e) {
  var t = Number(e);
  (0, B.useEffect)(
    function () {
      return (
        Ng(Og, t),
        function () {
          Ng(kg, t);
        }
      );
    },
    [t],
  );
};
function Fg(e) {
  var t = e.zIndex,
    n = t === void 0 ? 0 : t,
    r = e.children,
    i = e.mountStrategy,
    a = i === void 0 ? `effect` : i,
    o = e.isClosed,
    s = o === void 0 ? !1 : o,
    c = Dg(a);
  return (
    Pg(n),
    P(`platform_design_system_team_portal_logic_r18_fix`)
      ? B.createElement(Eg, { zIndex: n, isClosed: s }, r)
      : c
        ? B.createElement(vg, { zIndex: n, isClosed: s }, r)
        : null
  );
}
var Ig = {
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
  Lg = new Set(),
  Rg = null;
function zg() {
  Rg ||
    ((Rg = (0, fd.bindAll)(window, [
      { type: `dragend`, listener: Bg },
      { type: `pointerdown`, listener: Bg },
      {
        type: `pointermove`,
        listener: (function () {
          var e = 0;
          return function () {
            if (e < 20) {
              e++;
              return;
            }
            Bg();
          };
        })(),
      },
    ])),
    Array.from(Lg).forEach(function (e) {
      e.onDragStart();
    }));
}
function Bg() {
  var e;
  ((e = Rg) == null || e(),
    (Rg = null),
    Array.from(Lg).forEach(function (e) {
      e.onDragEnd();
    }));
}
function Vg() {
  return (0, fd.bindAll)(window, [
    { type: `dragstart`, listener: zg },
    { type: `dragenter`, listener: zg },
  ]);
}
var Hg = null;
function Ug(e) {
  return (
    (Hg ||= Vg()),
    Lg.add(e),
    e.onRegister({ isDragging: Rg !== null }),
    function () {
      if ((Lg.delete(e), Lg.size === 0)) {
        var t;
        ((t = Hg) == null || t(), (Hg = null));
      }
    }
  );
}
function Wg(e) {
  var t = e || { top: 0, left: 0 };
  return {
    getBoundingClientRect: function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    },
    clientWidth: 0,
    clientHeight: 0,
  };
}
function Gg(e, t) {
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
var Kg = null;
function qg() {
  Kg != null && (window.clearTimeout(Kg), (Kg = null));
}
function Jg(e, t) {
  (qg(),
    (Kg = window.setTimeout(function () {
      ((Kg = null), e());
    }, t)));
}
var Yg = null;
function Xg(e) {
  var t = `waiting-to-show`;
  function n() {
    return !!(Yg && Yg.entry === e);
  }
  function r() {
    n() && (qg(), (Yg = null));
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
        ((t = `shown`), qg());
        return;
      }
      if (t === `hide-animating`) {
        ((t = `shown`), qg(), e.show({ isImmediate: !1 }));
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
          Jg(function () {
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
      r = !!(Yg && Yg.isVisible()) && !n;
    ((Yg &&= (qg(), Yg.entry.hide({ isImmediate: !0 }), Yg.entry.done(), null)),
      (Yg = { entry: e, isVisible: l }));
    function i() {
      ((t = `shown`), e.show({ isImmediate: r }));
    }
    if (r) {
      i();
      return;
    }
    ((t = `waiting-to-show`), Jg(i, e.delay));
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
function Zg() {
  var e = Qd();
  return function (t) {
    return `${e}-${t.toString()}`;
  };
}
function Qg(e, t) {
  var n = Zg();
  return t ? `${n(e)}` : void 0;
}
w();
var $g = {
    shortcutSegmentsContainer: `_zulpv77o _1e0c1txw _1q511b66 _85i5v77o`,
    shortcutSegment: `_11c8wadc _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p`,
  },
  e_ = function (e) {
    var t = e.shortcut;
    return B.createElement(
      `div`,
      { className: k([$g.shortcutSegmentsContainer]) },
      t.map(function (e, t) {
        return B.createElement(`kbd`, { key: `${e}-${t}`, className: k([$g.shortcutSegment]) }, e);
      }),
    );
  };
w();
var t_ = (0, B.forwardRef)(function (e, t) {
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
        className: k([`_80om73ad`, r]),
        onMouseOut: s,
        onMouseOver: c,
        "data-placement": a,
        "data-testid": o,
        id: l,
      },
      i,
      u && B.createElement(e_, { shortcut: u }),
    ),
  );
});
((t_.displayName = `TooltipPrimitive`), w());
var n_ = {
    base: `_2rkofajl _11c8wadc _vchhusvi _p12fp3fh _bfhk1aqn _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna`,
    truncate: `_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c`,
  },
  r_ = (0, B.forwardRef)(function (e, t) {
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
      t_,
      {
        ref: t,
        style: n,
        className: k([n_.base, a && n_.truncate, r]),
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
r_.displayName = `TooltipContainer`;
function i_(e, t) {
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
function a_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? i_(Object(n), !0).forEach(function (t) {
          l(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : i_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var o_ = Ig.tooltip(),
  s_ = { componentName: `tooltip`, packageName: `@atlaskit/tooltip`, packageVersion: `21.1.6` },
  c_ = { top: `bottom`, bottom: `top`, left: `right`, right: `left` },
  l_ = function (e) {
    return e.split(`-`)[0];
  };
function u_(e) {
  var t = e.children,
    n = e.position,
    r = n === void 0 ? `bottom` : n,
    i = e.mousePosition,
    a = i === void 0 ? `bottom` : i,
    o = e.content,
    s = e.truncate,
    c = s === void 0 ? !1 : s,
    l = e.component,
    u = l === void 0 ? r_ : l,
    d = e.tag,
    p = d === void 0 ? `div` : d,
    m = e.testId,
    h = e.delay,
    g = h === void 0 ? 300 : h,
    _ = e.onShow,
    v = _ === void 0 ? Z : _,
    y = e.onHide,
    b = y === void 0 ? Z : y,
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
    ee = e.shortcut,
    te = e.UNSAFE_shouldAlwaysFadeIn,
    ne = te === void 0 ? !1 : te,
    re = e.UNSAFE_shouldRenderToParent,
    ie = re === void 0 ? !1 : re,
    ae = r === `mouse` || r === `mouse-y` || r === `mouse-x`,
    oe = ae ? a : r,
    F = Yc(a_({ fn: v, action: `displayed`, analyticsData: E }, s_)),
    I = Yc(a_({ fn: b, action: `hidden`, analyticsData: E }, s_)),
    L = (0, B.useRef)(null),
    se = f((0, B.useState)(`hide`), 2),
    R = se[0],
    ce = se[1],
    le = (0, B.useRef)(null),
    ue = (0, B.useRef)(null),
    de = function (e) {
      ((ue.current = e), (le.current = e ? e.firstElementChild : null));
    },
    fe = (0, B.useCallback)(function (e) {
      le.current = e;
    }, []),
    pe = Cp(R),
    me = Cp(F),
    z = Cp(I),
    he = Cp(g),
    V = Cp(x),
    H = (0, B.useRef)(!1),
    ge = Cp(ne),
    _e = (0, B.useCallback)(function (e) {
      ((L.current = e), (H.current = !1));
    }, []),
    ve = (0, B.useCallback)(
      function () {
        L.current && (H.current && z.current(), (L.current = null), (H.current = !1), ce(`hide`));
      },
      [z],
    ),
    ye = (0, B.useCallback)(
      function () {
        L.current &&= (L.current.abort(), H.current && z.current(), null);
      },
      [z],
    );
  (0, B.useEffect)(
    function () {
      return function () {
        L.current && ye();
      };
    },
    [ye],
  );
  var be = (0, B.useRef)(!1);
  (0, B.useEffect)(function () {
    return Ug({
      onRegister: function (e) {
        be.current = e.isDragging;
      },
      onDragStart: function () {
        var e;
        ((e = L.current) == null || e.requestHide({ isImmediate: !0 }), (be.current = !0));
      },
      onDragEnd: function () {
        be.current = !1;
      },
    });
  }, []);
  var xe = (0, B.useCallback)(
    function (e) {
      var t;
      if (!be.current) {
        if ((L.current && !L.current.isActive() && ye(), L.current && L.current.isActive())) {
          L.current.keep();
          return;
        }
        (V.current && !((t = V.current) != null && t.call(V))) ||
          _e(
            Xg({
              source: e,
              delay: he.current,
              show: function (e) {
                var t = e.isImmediate;
                (H.current || ((H.current = !0), me.current()),
                  ce(t ? `show-immediate` : `fade-in`));
              },
              hide: function (e) {
                e.isImmediate ? ce(`hide`) : ce(`before-fade-out`);
              },
              done: ve,
              shouldAlwaysFadeIn: P(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
                ? ge.current
                : !1,
            }),
          );
      }
    },
    [V, he, ve, _e, ye, me, ge],
  );
  (Sp({
    onClose: (0, B.useCallback)(
      function () {
        var e;
        (e = L.current) == null || e.requestHide({ isImmediate: !0 });
      },
      [L],
    ),
    isDisabled: R === `hide` || R === `fade-out`,
  }),
    (0, B.useEffect)(
      function () {
        return R === `hide`
          ? Z
          : (R === `before-fade-out` && ce(`fade-out`),
            (0, fd.bind)(window, {
              type: `scroll`,
              listener: function () {
                L.current && L.current.requestHide({ isImmediate: !0 });
              },
              options: { capture: !0, passive: !0, once: !0 },
            }));
      },
      [R],
    ));
  var Se = (0, B.useCallback)(
      function () {
        T && L.current && L.current.requestHide({ isImmediate: !0 });
      },
      [T],
    ),
    Ce = (0, B.useCallback)(
      function () {
        C && L.current && L.current.requestHide({ isImmediate: !0 });
      },
      [C],
    ),
    we = (0, B.useCallback)(
      function (e) {
        (ue.current && e.target === ue.current) ||
          e.defaultPrevented ||
          (e.preventDefault(),
          xe(
            ae
              ? {
                  type: `mouse`,
                  mouse: P(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
                    ? void 0
                    : Wg({ left: e.clientX, top: e.clientY }),
                  clientX: e.clientX,
                  clientY: e.clientY,
                }
              : { type: `keyboard` },
          ));
      },
      [ae, xe],
    ),
    Te = (0, B.useCallback)(function (e) {
      (ue.current && e.target === ue.current) ||
        e.defaultPrevented ||
        (e.preventDefault(), L.current && L.current.requestHide({ isImmediate: !1 }));
    }, []),
    Ee = ae
      ? function (e) {
          var t;
          (t = L.current) != null &&
            t.isActive() &&
            (P(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ||
              (L.current.mousePosition = Wg({ left: e.clientX, top: e.clientY })),
            (L.current.mousePos = { clientX: e.clientX, clientY: e.clientY }));
        }
      : void 0,
    De = (0, B.useCallback)(function () {
      if (L.current && L.current.isActive()) {
        L.current.keep();
        return;
      }
    }, []),
    Oe = (0, B.useCallback)(
      function (e) {
        try {
          if (!e.target.matches(`:focus-visible`)) return;
        } catch {}
        xe({ type: `keyboard` });
      },
      [xe],
    ),
    ke = (0, B.useCallback)(function () {
      L.current && L.current.requestHide({ isImmediate: !1 });
    }, []),
    Ae = (0, B.useCallback)(
      function (e) {
        e === `exiting` &&
          pe.current === `fade-out` &&
          L.current &&
          L.current.finishHideAnimation();
      },
      [pe],
    ),
    je = p,
    Me = R !== `hide` && !!o,
    Ne = !M && Me,
    Pe = R !== `hide` && R !== `fade-out`,
    Fe = (0, B.useCallback)(function () {
      var e;
      (e = L.current) == null || e.requestHide({ isImmediate: !0 });
    }, []);
  Dp({ isOpen: Me && Pe, onClose: Fe });
  var Ie = function () {
      var e, t;
      return ae &&
        (e = L.current) != null &&
        e.mousePos &&
        le.current &&
        P(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
        ? Gg(L.current.mousePos, { targetElement: le.current, tooltipPosition: r })
        : ae &&
            (t = L.current) != null &&
            t.mousePosition &&
            !P(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
          ? L.current?.mousePosition
          : le.current || void 0;
    },
    Le = Qg(`tooltip`, Ne),
    Re = {
      onMouseOver: we,
      onMouseOut: Te,
      onMouseMove: Ee,
      onMouseDown: Se,
      onClick: Ce,
      onFocus: Oe,
      onBlur: ke,
    };
  m && (Re[`data-testid`] = `${m}--container`);
  var ze = typeof t == `function`;
  (0, B.useEffect)(
    function () {
      if (!ze) {
        var e = le.current;
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
    Ve = ie && P(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ? B.Fragment : d_;
  return B.createElement(
    B.Fragment,
    null,
    typeof t == `function`
      ? B.createElement(
          B.Fragment,
          null,
          t(a_(a_({}, Re), {}, { "aria-describedby": Le, ref: fe })),
          Be,
        )
      : B.createElement(je, N({}, Re, { ref: de, role: `presentation` }), t, Be),
    Me
      ? B.createElement(
          Ve,
          null,
          B.createElement(cg, { placement: oe, referenceElement: Ie(), strategy: O }, function (e) {
            var t = e.ref,
              n = e.style,
              r = e.update,
              i = e.placement,
              a = ae ? void 0 : c_[l_(i)];
            return B.createElement(
              Hp,
              { appear: !0 },
              Pe &&
                B.createElement(
                  Yp,
                  {
                    distance: `constant`,
                    entranceDirection: a,
                    exitDirection: a,
                    onFinish: Ae,
                    duration: R === `show-immediate` ? `none` : `medium`,
                  },
                  function (e) {
                    var i = e.className;
                    return B.createElement(
                      u,
                      {
                        ref: t,
                        className: `Tooltip ${i}`,
                        style: a_(a_({}, n), A && { pointerEvents: `none` }),
                        truncate: c,
                        placement: oe,
                        testId: Ie() ? m : m && `${m}--unresolved`,
                        onMouseOut: Te,
                        onMouseOver: De,
                        shortcut: ee,
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
var d_ = function (e) {
  var t = e.children;
  return B.createElement(Fg, { zIndex: o_ }, t);
};
w();
var f_ = [
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
function p_(e, t) {
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
function m_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? p_(Object(n), !0).forEach(function (t) {
          l(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : p_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var h_ = `--local-dynamic-table-text-color`,
  g_ = (0, B.forwardRef)(function (e, t) {
    var n = e.width,
      r = e.children;
    e.isSortable;
    var i = e.sortOrder,
      a = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var s = e.style,
      c = e.testId,
      u = g(e, f_),
      d = m_(
        m_(m_({}, s), n && re({ width: n })),
        {},
        l({}, h_, `var(--ds-text-subtlest, #6B6E76)`),
      ),
      f = i === `ASC`,
      p = i === y,
      m = function () {
        if (f) return `ascending`;
        if (p) return `descending`;
      },
      h = r ? `th` : `td`;
    return B.createElement(
      h,
      N({ "aria-sort": m(), style: d, onClick: void 0, ref: t, "data-testid": c }, u, {
        className: k([
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
w();
var __ = e(bp()),
  v_ = e(xp()),
  y_ = [
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
  b_ = {
    buttonWrapper: `_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke`,
    sortIconHiddenWrapper: `_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n`,
    sortIconVisibleWrapper: `_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66`,
    hideIconHeaderWrapper: `_tzy4idpf _18u010v4`,
    visibleHeaderWrapper: `_tzy4kb7n _u5f31b66`,
  },
  x_ = { headCellContainer: `_1e0c1txw _4cvr1h6o`, text: `_11c8wadc _syazazsu _k48pwu06` },
  S_ = function (e) {
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
      d = u === void 0 ? `Sort ascending` : u,
      p = e.descendingSortTooltip,
      m = p === void 0 ? `Sort descending` : p,
      h = e.buttonAriaRoleDescription,
      _ = h === void 0 ? `Sort button` : h,
      v = e.isIconOnlyHeader,
      y = g(e, y_),
      b = f((0, B.useState)(!1), 2),
      x = b[0],
      S = b[1],
      C = f((0, B.useState)(!1), 2),
      w = C[0],
      T = C[1],
      E = x || c === l || o !== void 0 || w,
      D = E && v,
      O = !v || E || (v && !w),
      A = (0, B.useCallback)(
        function () {
          T?.(!0);
        },
        [T],
      ),
      j = (0, B.useCallback)(
        function () {
          T?.(!1);
        },
        [T],
      ),
      M = (0, B.useCallback)(
        function () {
          S(!0);
        },
        [S],
      ),
      ee = (0, B.useCallback)(
        function () {
          S(!1);
        },
        [S],
      ),
      te = B.createElement(
        iu,
        { xcss: x_.headCellContainer, onMouseEnter: M, onMouseLeave: ee, onFocus: A, onBlur: j },
        B.createElement(
          u_,
          { content: o === `ASC` ? d : m },
          B.createElement(
            Hu,
            { onClick: s, xcss: b_.buttonWrapper, "aria-roledescription": _ },
            B.createElement(
              yu,
              { xcss: D ? b_.hideIconHeaderWrapper : b_.visibleHeaderWrapper },
              B.createElement(`span`, { className: k([x_.text]) }, t),
            ),
            O &&
              B.createElement(
                yu,
                { xcss: E ? b_.sortIconVisibleWrapper : b_.sortIconHiddenWrapper },
                o === `ASC`
                  ? B.createElement(v_.default, {
                      label: ``,
                      color: `var(--ds-text-subtle, #505258)`,
                      testId: r && `${r}--up--icon`,
                    })
                  : B.createElement(__.default, {
                      label: ``,
                      color: `var(--ds-text-subtle, #505258)`,
                      testId: r && `${r}--down--icon`,
                    }),
              ),
          ),
        ),
      );
    return B.createElement(
      g_,
      N({ style: n, testId: r && `${r}--head--cell`, ref: typeof i == `string` ? null : i }, y, {
        isSortable: a,
        sortOrder: o,
      }),
      a ? te : t,
    );
  },
  C_ = [`isRanking`, `refHeight`, `refWidth`];
function w_(e, t, n) {
  return ((t = _(t)), u(e, T_() ? Reflect.construct(t, n || [], _(e).constructor) : t.apply(e, n)));
}
function T_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (T_ = function () {
    return !!e;
  })();
}
var E_ = A(
    (function (e) {
      function t() {
        return (d(this, t), w_(this, t, arguments));
      }
      return (
        h(t, e),
        p(t, [
          {
            key: `render`,
            value: function () {
              var e = this.props,
                t = e.isRanking;
              e.refHeight;
              var n = e.refWidth,
                r = g(e, C_),
                i = ne(t, n);
              return B.createElement(S_, N({ inlineStyles: i }, r));
            },
          },
        ])
      );
    })(B.Component),
  ),
  D_ = [`cells`],
  O_ = [
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
function k_(e, t, n) {
  return ((t = _(t)), u(e, A_() ? Reflect.construct(t, n || [], _(e).constructor) : t.apply(e, n)));
}
function A_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (A_ = function () {
    return !!e;
  })();
}
var j_ = (function (e) {
  function t(e) {
    var n;
    return (d(this, t), (n = k_(this, t, [e])), (n.state = { activeSortButtonId: null }), n);
  }
  return (
    h(t, e),
    p(t, [
      {
        key: `UNSAFE_componentWillMount`,
        value: function () {
          E(this.props.sortKey, this.props.head);
        },
      },
      {
        key: `UNSAFE_componentWillReceiveProps`,
        value: function (e) {
          (this.props.sortKey !== e.sortKey || this.props.head !== e.head) && E(e.sortKey, e.head);
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
          var d = c ? E_ : S_,
            f = n.cells,
            p = g(n, D_);
          return B.createElement(
            yp,
            N({}, p, { isRanking: s, testId: l && `${l}--head` }),
            B.createElement(
              `tr`,
              null,
              f.map(function (t, n) {
                var c = t.ascendingSortTooltip,
                  f = t.buttonAriaRoleDescription,
                  p = t.colSpan,
                  m = t.content,
                  h = t.descendingSortTooltip,
                  _ = t.isIconOnlyHeader,
                  v = t.isSortable,
                  y = t.key,
                  b = t.shouldTruncate,
                  x = t.testId,
                  S = t.width,
                  C = g(t, O_),
                  w = `head-cell-${n}`;
                return B.createElement(
                  d,
                  N(
                    {
                      colSpan: p,
                      content: m,
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
                      descendingSortTooltip: h,
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
jt();
var M_ = [`isRankable`, `isRanking`, `onRankStart`, `onRankEnd`, `isRankingDisabled`];
function N_(e) {
  switch (e) {
    case y:
      return `ASC`;
    case `ASC`:
      return y;
    default:
      return e;
  }
}
var P_ = function (e) {
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
      b = y === void 0 ? Z : y,
      S = e.onSort,
      C = S === void 0 ? Z : S,
      w = e.page,
      D = w === void 0 ? 1 : w,
      O = e.emptyView,
      k = e.isRankable,
      A = k === void 0 ? !1 : k,
      j = e.isRankingDisabled,
      M = j === void 0 ? !1 : j,
      ee = e.onRankStart,
      te = ee === void 0 ? Z : ee,
      ne = e.onRankEnd,
      re = ne === void 0 ? Z : ne,
      N = e.loadingSpinnerSize,
      ae = e.paginationi18n,
      P =
        ae === void 0
          ? { prev: `Previous Page`, next: `Next Page`, label: `Pagination`, pageLabel: `Page` }
          : ae,
      oe = f((0, B.useState)(!1), 2),
      F = oe[0],
      I = oe[1],
      L = (0, B.useRef)(null),
      se = Kc({
        fn: C,
        action: `sorted`,
        componentName: `dynamicTable`,
        packageName: `@atlaskit/dynamic-table`,
        packageVersion: `0.0.0-development`,
      }),
      R = Kc({
        fn: re,
        action: `ranked`,
        componentName: `dynamicTable`,
        packageName: `@atlaskit/dynamic-table`,
        packageVersion: `0.0.0-development`,
      });
    (0, B.useEffect)(
      function () {
        (E(a, n), Xc(n));
      },
      [a, n],
    );
    var ce = function (e) {
        return function () {
          var t = e.key;
          if (t) {
            if (se && A && t === a && o === `DESC`) {
              se({ key: null, sortOrder: null, item: e });
              return;
            }
            var n = t === a ? N_(o) : `ASC`;
            se && se({ key: t, item: e, sortOrder: n });
          }
        };
      },
      le = function (e, t) {
        b(e, t);
      },
      ue = function (e) {
        (I(!0), te(e));
      },
      de = function (e) {
        (I(!1), R(e));
      },
      fe = function () {
        return N || (T(i || [], D, v).length > 2 ? ie : x);
      },
      pe = function () {
        return m ? B.createElement($c, { testId: l }) : O && B.createElement(Qc, { testId: l }, O);
      },
      me = i && i.length,
      z,
      he = !1;
    (u && Number.isInteger(u) && v && me && me <= u
      ? ((z = Math.ceil(u / v)), (he = !0))
      : (z = me && v ? Math.ceil(me / v) : 0),
      (z = z < 1 ? 1 : z));
    var V = D > z ? z : D,
      H = !!me,
      ge = fe(),
      _e = pe();
    return B.createElement(
      B.Fragment,
      null,
      B.createElement(
        Pl,
        {
          isLoading: m && H,
          spinnerSize: ge,
          targetRef: function () {
            return L.current;
          },
          testId: l,
          loadingLabel: s,
        },
        B.createElement(
          nl,
          { isFixedSize: g, "aria-label": d, hasDataRow: H, testId: l, isLoading: m },
          !!t && B.createElement(Zc, null, t),
          n &&
            B.createElement(j_, {
              head: n,
              onSort: ce,
              sortKey: a,
              sortOrder: o,
              isRanking: F,
              isRankable: A,
              testId: l,
            }),
          H &&
            B.createElement(I_, {
              ref: L,
              highlightedRowIndex: r,
              rows: i,
              head: n,
              sortKey: a,
              sortOrder: o,
              rowsPerPage: v,
              page: V,
              isFixedSize: g || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: he,
              testId: l,
              isRankable: A,
              isRanking: F,
              onRankStart: ue,
              onRankEnd: de,
              isRankingDisabled: M || m || !1,
            }),
        ),
      ),
      z <= 1
        ? null
        : B.createElement(
            el,
            { testId: l },
            B.createElement(_p, {
              value: V,
              onChange: le,
              total: z,
              i18n: P,
              isDisabled: m,
              testId: l,
            }),
          ),
      !H &&
        _e &&
        B.createElement(Dl, { isLoading: m, spinnerSize: `large`, testId: l, loadingLabel: s }, _e),
    );
  },
  F_ = (0, B.lazy)(function () {
    return At(
      () => import(`./body-TQwOOaQv.js`),
      __vite__mapDeps([6, 1, 7, 4, 8, 9, 10]),
      import.meta.url,
    );
  }),
  I_ = (0, B.forwardRef)(function (e, t) {
    var n = e.isRankable,
      r = n === void 0 ? !1 : n,
      i = e.isRanking,
      a = e.onRankStart,
      o = e.onRankEnd,
      s = e.isRankingDisabled,
      c = g(e, M_),
      l = r && !c.sortKey,
      u = f((0, B.useState)(!1), 2),
      d = u[0],
      p = u[1];
    (0, B.useEffect)(
      function () {
        l && p(!0);
      },
      [l],
    );
    var m = B.createElement(ll, N({ ref: t }, c));
    return l && d
      ? B.createElement(
          fl,
          { fallback: m },
          B.createElement(
            B.Suspense,
            { fallback: m },
            B.createElement(
              F_,
              N({ ref: t }, c, {
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
function L_(e, t, n) {
  return ((t = _(t)), u(e, R_() ? Reflect.construct(t, n || [], _(e).constructor) : t.apply(e, n)));
}
function R_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (R_ = function () {
    return !!e;
  })();
}
var z_ = (function (e) {
  function t() {
    var e;
    d(this, t);
    var n = [...arguments];
    return (
      (e = L_(this, t, [].concat(n))),
      l(e, `state`, {
        page: e.props.defaultPage,
        sortKey: e.props.defaultSortKey,
        sortOrder: e.props.defaultSortOrder,
        rows: e.props.rows,
      }),
      l(e, `onSetPageHandler`, function (t, n) {
        var r = e.props.onSetPage;
        r && (r(t, n), e.setState({ page: t }));
      }),
      l(e, `onSortHandler`, function (t, n) {
        var r = t.key,
          i = t.item,
          a = t.sortOrder,
          o = e.props.onSort;
        o && (o({ key: r, item: i, sortOrder: a }, n), e.setState({ sortKey: r, sortOrder: a }));
      }),
      l(e, `onRankEndIfExistsHandler`, function (t) {
        e.props.onRankEnd && e.props.onRankEnd(t);
      }),
      l(e, `onRankEndHandler`, function (t) {
        var n = t.destination,
          r = e.state,
          i = r.rows,
          a = r.page,
          o = e.props.rowsPerPage;
        if (!n || !i) {
          e.onRankEndIfExistsHandler(t);
          return;
        }
        var s = kc(t, i, a, o);
        (e.setState({ rows: s }), e.onRankEndIfExistsHandler(t));
      }),
      e
    );
  }
  return (
    h(t, e),
    p(t, [
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
          return B.createElement(P_, {
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
l(z_, `defaultProps`, {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Z,
  onSort: Z,
  rowsPerPage: 1 / 0,
});
var B_ = (e, t) => {
    let n = [];
    switch (t) {
      case `SLOW_QUERY`:
        (n.push({ key: `time`, content: `Time`, isSortable: !0, width: e ? 10 : void 0 }),
          n.push({ key: `query`, content: `QUERY`, isSortable: !0, width: e ? 10 : void 0 }),
          n.push({ key: `queryTime`, content: `TIME`, isSortable: !0, width: e ? 10 : void 0 }),
          n.push({ key: `resultRows`, content: `ROWS`, isSortable: !0, width: e ? 10 : void 0 }),
          n.push({ key: `plan`, content: `PLAN`, isSortable: !0, width: e ? 25 : void 0 }));
        break;
      case `HISTORY`:
        (n.push({
          key: `summaryBeginTime`,
          content: `summaryBeginTime`,
          isSortable: !0,
          width: e ? 10 : void 0,
        }),
          n.push({
            key: `summaryEndTime`,
            content: `summaryEndTime`,
            isSortable: !0,
            width: e ? 10 : void 0,
          }),
          n.push({ key: `stmtType`, content: `stmtType`, isSortable: !0, width: e ? 10 : void 0 }),
          n.push({
            key: `digestText`,
            content: `digestText`,
            isSortable: !0,
            width: e ? 10 : void 0,
          }),
          n.push({
            key: `tableNames`,
            content: `tableNames`,
            isSortable: !0,
            width: e ? 10 : void 0,
          }),
          n.push({ key: `planHint`, content: `planHint`, isSortable: !0, width: e ? 10 : void 0 }),
          n.push({ key: `plan`, content: `PLAN`, isSortable: !0, width: e ? 25 : void 0 }));
        break;
      case `PLAN`:
        (n.push({ key: `id`, content: `Id`, isSortable: !0, width: e ? 10 : void 0 }),
          n.push({ key: `estRows`, content: `estRows`, isSortable: !0, width: e ? 10 : void 0 }),
          n.push({ key: `estCost`, content: `estCost`, isSortable: !0, width: e ? 10 : void 0 }),
          n.push({ key: `actRows`, content: `actRows`, isSortable: !0, width: e ? 10 : void 0 }),
          n.push({ key: `task`, content: `task`, isSortable: !0, width: e ? 10 : void 0 }),
          n.push({
            key: `accessObject`,
            content: `accessObject`,
            isSortable: !0,
            width: e ? 10 : void 0,
          }),
          n.push({
            key: `executionInfo`,
            content: `executionInfo`,
            isSortable: !0,
            width: e ? 10 : void 0,
          }),
          n.push({
            key: `operatorInfo`,
            content: `operatorInfo`,
            isSortable: !0,
            width: e ? 10 : void 0,
          }),
          n.push({ key: `memory`, content: `memory`, isSortable: !0, width: e ? 10 : void 0 }),
          n.push({ key: `disk`, content: `disk`, isSortable: !0, width: e ? 10 : void 0 }));
    }
    return n;
  },
  V_ = (e, t) => ({ cells: B_(e, t) }),
  H_ = i((e) => {
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
    t.exports = H_();
  })(),
  U_ = mc(() => {
    let { usersStore: e } = Dc(),
      t = V_(!0, `SLOW_QUERY`),
      n = e.slowQueries;
    return !n || n.length === 0
      ? (0, $.jsx)(`div`, { children: `SlowQuery is EMPTY` })
      : (0, $.jsx)(`div`, {
          children: (0, $.jsxs)(`div`, {
            children: [
              (0, $.jsx)(z_, {
                head: t,
                rows: n.map((t, n) => {
                  let r = [
                    { key: `time`, content: t.time },
                    { key: `query`, content: t.query },
                    { key: `queryTime`, content: t.queryTime },
                    { key: `resultRows`, content: t.resultRows },
                    {
                      key: `plan`,
                      content: t.parsedPlan
                        ? (0, $.jsx)($.Fragment, {
                            children: (0, $.jsx)(`button`, {
                              onClick: () => {
                                t.parsedPlan &&
                                  (e.showPlan(t.parsedPlan, t.plan), wc.saveState(`PLAN`));
                              },
                              children: `Show Plan`,
                            }),
                          })
                        : (0, $.jsx)(`p`, {}),
                    },
                  ];
                  return { key: `row-${n}`, cells: r };
                }),
                rowsPerPage: 10,
                defaultPage: 1,
                loadingSpinnerSize: `large`,
                emptyView: (0, $.jsx)(`div`, { children: `Duplicate Table is EMPTY` }),
                isRankable: !0,
              }),
              (0, $.jsx)(`br`, {}),
              (0, $.jsx)(`br`, {}),
            ],
          }),
        });
  }),
  W_ = mc(() => {
    let { usersStore: e } = Dc(),
      t = V_(!0, `PLAN`),
      n = e.plan;
    return !n || n.length === 0
      ? (0, $.jsxs)(`div`, { children: [`$`, e.planString] })
      : (0, $.jsx)(`div`, {
          children: (0, $.jsxs)(`div`, {
            children: [
              (0, $.jsx)(z_, {
                head: t,
                rows: n.map((e, t) => {
                  let n = [
                    { key: `id`, content: e.id },
                    { key: `estRows`, content: e.estRows },
                    { key: `estCost`, content: e.estCost },
                    { key: `actRows`, content: e.actRows },
                    { key: `task`, content: e.task },
                    { key: `accessObject`, content: e.accessObject },
                    { key: `executionInfo`, content: e.executionInfo },
                    { key: `operatorInfo`, content: e.operatorInfo },
                    { key: `memory`, content: e.memory },
                    { key: `disk`, content: e.disk },
                  ];
                  return { key: `row-${t}`, cells: n };
                }),
                rowsPerPage: 200,
                defaultPage: 1,
                loadingSpinnerSize: `large`,
                emptyView: (0, $.jsx)(`div`, { children: `Duplicate Table is EMPTY` }),
                isRankable: !0,
              }),
              (0, $.jsx)(`br`, {}),
              (0, $.jsx)(`br`, {}),
            ],
          }),
        });
  }),
  G_ = mc(() => {
    let { usersStore: e } = Dc(),
      t = V_(!0, `HISTORY`),
      n = e.history;
    return !n || n.length === 0
      ? (0, $.jsx)(`div`, { children: `Query history is EMPTY` })
      : (0, $.jsx)(`div`, {
          children: (0, $.jsxs)(`div`, {
            children: [
              (0, $.jsx)(z_, {
                head: t,
                rows: n.map((t, n) => {
                  let r = [
                    { key: `summaryBeginTime`, content: t.summaryBeginTime },
                    { key: `summaryEndTime`, content: t.summaryEndTime },
                    { key: `digestText`, content: t.digestText },
                    { key: `stmtType`, content: t.stmtType },
                    { key: `tableNames`, content: t.tableNames },
                    { key: `planHint`, content: t.planHint },
                    {
                      key: `plan`,
                      content: t.parsedPlan
                        ? (0, $.jsx)($.Fragment, {
                            children: (0, $.jsx)(`button`, {
                              onClick: () => {
                                t.parsedPlan &&
                                  (e.showPlan(t.parsedPlan, t.plan), wc.saveState(`PLAN`));
                              },
                              children: `Show Plan`,
                            }),
                          })
                        : (0, $.jsx)(`p`, {}),
                    },
                  ];
                  return { key: `row-${n}`, cells: r };
                }),
                rowsPerPage: 10,
                defaultPage: 1,
                loadingSpinnerSize: `large`,
                emptyView: (0, $.jsx)(`div`, { children: `Duplicate Table is EMPTY` }),
                isRankable: !0,
              }),
              (0, $.jsx)(`br`, {}),
              (0, $.jsx)(`br`, {}),
            ],
          }),
        });
  }),
  K_ = (e, t) => {
    (0, Rn.showFlag)({
      id: `error-flag`,
      title: e,
      type: `error`,
      description: t,
      isAutoDismiss: !0,
    });
  };
function q_() {
  let { usersStore: e, stateStore: t } = Dc();
  if (e.isLoading) return `loading....`;
  let n = async () => {
      e.loading();
      try {
        let n = await (0, Rn.invoke)(`explain`);
        (e.showPlan(n, `Plan does not exists`), t.saveState(`PLAN`));
      } catch (e) {
        (console.error(e), K_(`explain error`, e.message));
      } finally {
        e.stopLoading();
      }
    },
    r = async () => {
      e.loading();
      try {
        let n = await (0, Rn.invoke)(`explainWith`);
        (e.showPlan(n, `Plan does not exists`), t.saveState(`PLAN`));
      } catch (e) {
        (console.error(e), K_(`explain error`, e.message));
      } finally {
        e.stopLoading();
      }
    },
    i = async () => {
      e.loading();
      try {
        let n = await (0, Rn.invoke)(`explainAnalyze`);
        (e.showPlan(n, `Plan does not exists`), t.saveState(`PLAN`));
      } catch (e) {
        (console.error(e), K_(`explain analyze error`, e.message));
      } finally {
        e.stopLoading();
      }
    },
    a = async () => {
      e.loading();
      try {
        let n = await (0, Rn.invoke)(`explainAnalyzeWith`);
        (e.showPlan(n, `Plan does not exists`), t.saveState(`PLAN`));
      } catch (e) {
        (console.error(e), K_(`explain analyze error`, e.message));
      } finally {
        e.stopLoading();
      }
    },
    o = async () => {
      e.loading();
      try {
        await (0, Rn.invoke)(`executeQuery`);
      } catch (e) {
        (console.error(e), K_(`execute query error`, e.message));
      } finally {
        e.stopLoading();
      }
    },
    s = async () => {
      e.loading();
      try {
        await (0, Rn.invoke)(`executeQueryWith`);
      } catch (e) {
        (console.error(e), K_(`execute query error`, e.message));
      } finally {
        e.stopLoading();
      }
    },
    c = async () => {
      e.loading();
      try {
        await (0, Rn.invoke)(`optimizeQuery`);
      } catch (e) {
        (console.error(e), K_(`Optimize error`, e.message));
      } finally {
        e.stopLoading();
      }
    },
    l = async () => {
      e.loading();
      try {
        await (0, Rn.invoke)(`optimizeQueryCTE`);
      } catch (e) {
        (console.error(e), K_(`Optimize error`, e.message));
      } finally {
        e.stopLoading();
      }
    },
    u = async () => {
      e.loading();
      try {
        await (0, Rn.invoke)(`dropStats`);
      } catch (e) {
        (console.error(e), K_(`dropStats error`, e.message));
      } finally {
        e.stopLoading();
      }
    },
    d = async () => {
      e.loading();
      try {
        await (0, Rn.invoke)(`deOptimizeQuery`);
      } catch (e) {
        (console.error(e), K_(`deoptimize error`, e.message));
      } finally {
        e.stopLoading();
      }
    },
    f = async () => {
      e.loading();
      try {
        let n = await (0, Rn.invoke)(`analyzeQueriesHistory`, {
          sql: "select `category`.`id` as `a_category_category_id`, `category`.`name` as `a_category_category_name`, `order_item`.`id` as `a_orderitem_order_item_id`, `order_item`.`product_id` as `a_orderitem_order_item_product_id`, `order_item`.`quantity` as `a_orderitem_order_item_quantity`, `product`.`id` as `a_product_product_id`, `product`.`name` as `a_product_product_name`, `product`.`category_id` as `a_product_product_category_id` from `category` left join `product` on `category`.`id` = `product`.`category_id` inner join `order_item` on `order_item`.`product_id` = `product`.`id`",
        });
        (e.saveHistory(n), t.saveState(`HISTORY`));
      } catch (e) {
        (console.error(e), K_(`History error`, e.message));
      } finally {
        e.stopLoading();
      }
    },
    p = async () => {
      e.loading();
      try {
        let n = await (0, Rn.invoke)(`analyzeSlowQueries`);
        (e.saveSlowQuery(n), t.saveState(`SLOW_QUERY`));
      } catch (e) {
        (console.error(e), K_(`Slowquery error`, e.message));
      } finally {
        e.stopLoading();
      }
    };
  switch (t.state) {
    case `ROOT`:
      return (0, $.jsxs)(`div`, {
        className: `query-analysis-container`,
        children: [
          (0, $.jsx)(`div`, { className: `section-spacer` }),
          (0, $.jsxs)(`section`, {
            className: `analysis-section`,
            children: [
              (0, $.jsx)(`h2`, { children: `Stage 1: Initial Query Analysis` }),
              (0, $.jsx)(`div`, {
                className: `query-example`,
                children: (0, $.jsx)(`pre`, {
                  children:
                    "SELECT `category`.`name` AS `a_categoryname_name`, `product`.`name` AS `a_productname_name`, `order_item`.`quantity` AS `a_orderitemquantity_quantity` FROM `order_item` LEFT JOIN `product` ON `order_item`.`product_id` = `product`.`id` LEFT JOIN `category` ON `product`.`category_id` = `category`.`id` ORDER BY `order_item`.`created_at` ASC LIMIT 10 OFFSET 50000;",
                }),
              }),
              (0, $.jsx)(`div`, {
                className: `button-group`,
                children: (0, $.jsxs)(`div`, {
                  className: `button-row`,
                  children: [
                    (0, $.jsx)(`button`, { onClick: o, children: `1. Execute SQL` }),
                    (0, $.jsx)(`button`, { onClick: n, children: `2. Explain (optional) ` }),
                    (0, $.jsx)(`button`, { onClick: i, children: `3. Explain Analyze` }),
                  ],
                }),
              }),
            ],
          }),
          (0, $.jsxs)(`section`, {
            className: `analysis-section`,
            children: [
              (0, $.jsx)(`h2`, { children: `Stage 2: Adding Indexes — Better but Not Yet Great` }),
              (0, $.jsx)(`div`, {
                className: `query-example`,
                children: (0, $.jsx)(`pre`, {
                  children:
                    "SELECT `category`.`name` AS `a_categoryname_name`, `product`.`name` AS `a_productname_name`, `order_item`.`quantity` AS `a_orderitemquantity_quantity` FROM `order_item` LEFT JOIN `product` ON `order_item`.`product_id` = `product`.`id` LEFT JOIN `category` ON `product`.`category_id` = `category`.`id` ORDER BY `order_item`.`created_at` ASC LIMIT 10 OFFSET 50000;",
                }),
              }),
              (0, $.jsx)(`div`, {
                className: `button-group`,
                children: (0, $.jsxs)(`div`, {
                  className: `button-row`,
                  children: [
                    (0, $.jsx)(`button`, { onClick: c, children: `4. Add optimization indexes` }),
                    (0, $.jsx)(`button`, { onClick: o, children: `5. Execute SQL` }),
                    (0, $.jsx)(`button`, { onClick: n, children: `6. Explain (optional) ` }),
                    (0, $.jsx)(`button`, { onClick: i, children: `7. Explain Analyze` }),
                  ],
                }),
              }),
            ],
          }),
          (0, $.jsxs)(`section`, {
            className: `analysis-section`,
            children: [
              (0, $.jsx)(`h2`, {
                children: `Stage 3: Optimizing with WITH Clause — Smarter Pagination`,
              }),
              (0, $.jsx)(`div`, {
                className: `query-example`,
                children: (0, $.jsx)(`pre`, {
                  children: `WITH withQuery AS ( SELECT id, product_id, product_name, quantity, created_at FROM order_item ORDER BY created_at ASC LIMIT 10 OFFSET 350000 ) SELECT category.name, withQuery.quantity, product.name FROM withQuery LEFT JOIN product ON withQuery.product_id = product.id LEFT JOIN category ON category.id = product.category_id;`,
                }),
              }),
              (0, $.jsx)(`div`, {
                className: `button-group`,
                children: (0, $.jsxs)(`div`, {
                  className: `button-row`,
                  children: [
                    (0, $.jsx)(`button`, { onClick: s, children: `8. Execute CTE` }),
                    (0, $.jsx)(`button`, { onClick: r, children: `9. Explain CTE (optional)` }),
                    (0, $.jsx)(`button`, { onClick: a, children: `10. Explain Analyze CTE` }),
                  ],
                }),
              }),
            ],
          }),
          (0, $.jsxs)(`section`, {
            className: `analysis-section`,
            children: [
              (0, $.jsx)(`h2`, {
                children: `Stage 4: Final Optimization — Goodbye Full Table Scans`,
              }),
              (0, $.jsx)(`div`, {
                className: `query-example`,
                children: (0, $.jsx)(`pre`, {
                  children: `WITH withQuery AS ( SELECT id, product_id, product_name, quantity, created_at FROM order_item ORDER BY created_at ASC LIMIT 10 OFFSET 350000 ) SELECT category.name, withQuery.quantity, product.name FROM withQuery LEFT JOIN product ON withQuery.product_id = product.id LEFT JOIN category ON category.id = product.category_id;`,
                }),
              }),
              (0, $.jsx)(`div`, {
                className: `button-group`,
                children: (0, $.jsxs)(`div`, {
                  className: `button-row`,
                  children: [
                    (0, $.jsx)(`button`, {
                      onClick: l,
                      children: `9. Add optimization indexes for CTE`,
                    }),
                    (0, $.jsx)(`button`, { onClick: s, children: `10. Execute CTE` }),
                    (0, $.jsx)(`button`, { onClick: r, children: `11. Explain CTE (optional)` }),
                    (0, $.jsx)(`button`, { onClick: a, children: `12. Explain Analyze CTE` }),
                  ],
                }),
              }),
            ],
          }),
          (0, $.jsxs)(`section`, {
            className: `analysis-section`,
            children: [
              (0, $.jsx)(`h2`, { children: `Additional action` }),
              (0, $.jsx)(`div`, {
                className: `button-group`,
                children: (0, $.jsxs)(`div`, {
                  className: `button-row`,
                  children: [
                    (0, $.jsx)(`button`, { onClick: d, children: `Drop indexes(back to Stage 1)` }),
                    (0, $.jsx)(`button`, { onClick: u, children: `DROP STATS from all tables` }),
                  ],
                }),
              }),
            ],
          }),
          (0, $.jsx)(`div`, { className: `section-spacer` }),
          (0, $.jsxs)(`section`, {
            className: `analysis-section`,
            children: [
              (0, $.jsx)(`h2`, { children: `Query History Analysis` }),
              (0, $.jsx)(`div`, {
                className: `button-group`,
                children: (0, $.jsx)(`button`, { onClick: f, children: `Show Query History` }),
              }),
            ],
          }),
          (0, $.jsx)(`div`, { className: `section-spacer` }),
          (0, $.jsxs)(`section`, {
            className: `analysis-section`,
            children: [
              (0, $.jsx)(`h2`, { children: `Slow Query Analysis` }),
              (0, $.jsx)(`div`, {
                className: `button-group`,
                children: (0, $.jsx)(`button`, { onClick: p, children: `Analyze Slow Queries` }),
              }),
            ],
          }),
        ],
      });
    case `SLOW_QUERY`:
      return (0, $.jsxs)(`div`, {
        className: `analysis-results`,
        children: [
          (0, $.jsx)(`button`, {
            className: `back-button`,
            onClick: () => t.saveState(`ROOT`),
            children: `Back to Analysis`,
          }),
          (0, $.jsx)(`div`, { className: `results-spacer` }),
          (0, $.jsx)(U_, {}),
        ],
      });
    case `HISTORY`:
      return (0, $.jsxs)(`div`, {
        className: `analysis-results`,
        children: [
          (0, $.jsx)(`button`, {
            className: `back-button`,
            onClick: () => t.saveState(`ROOT`),
            children: `Back to Analysis`,
          }),
          (0, $.jsx)(`div`, { className: `results-spacer` }),
          (0, $.jsx)(G_, {}),
        ],
      });
    case `PLAN`:
      return (0, $.jsxs)(`div`, {
        className: `analysis-results`,
        children: [
          (0, $.jsx)(`button`, {
            className: `back-button`,
            onClick: () => t.saveState(t.lastState),
            children: `Back to Analysis`,
          }),
          (0, $.jsx)(`div`, { className: `results-spacer` }),
          (0, $.jsx)(W_, {}),
        ],
      });
    default:
      return (0, $.jsxs)(`div`, { children: [`ERROR: unsupported state `, t.state] });
  }
}
var J_ = mc(q_),
  Y_ = (0, s().createRoot)(document.getElementById(`root`)),
  X_ = () => {
    Y_.render((0, $.jsx)(yc, { ...Tc, children: (0, $.jsx)(J_, {}) }));
  };
Rn.view.theme
  .enable()
  .then(() => {
    X_();
  })
  .catch((e) => {
    (console.error(e.message), X_());
  });
