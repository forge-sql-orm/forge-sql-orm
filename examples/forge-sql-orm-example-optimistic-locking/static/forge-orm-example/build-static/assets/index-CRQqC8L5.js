const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./iframe-resizer-BMg8MKLf.js",
      "./rolldown-runtime-BYbx6iT9.js",
      "./body-aNIiuZWg.js",
      "./react-dom-vendor-BHIljUNy.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { a as e, i as t, n, r, t as i } from "./rolldown-runtime-BYbx6iT9.js";
import { n as a, r as o, t as s } from "./react-dom-vendor-BHIljUNy.js";
import { t as c } from "./lodash-vendor-CY-a7-Db.js";
import { t as l } from "./client-core-vendor-C5fkS-7z.js";
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
var u = e(o()),
  d = r({
    __addDisposableResource: () => le,
    __assign: () => fe,
    __asyncDelegator: () => k,
    __asyncGenerator: () => te,
    __asyncValues: () => ne,
    __await: () => O,
    __awaiter: () => x,
    __classPrivateFieldGet: () => oe,
    __classPrivateFieldIn: () => ce,
    __classPrivateFieldSet: () => se,
    __createBinding: () => pe,
    __decorate: () => m,
    __disposeResources: () => ue,
    __esDecorate: () => g,
    __exportStar: () => C,
    __extends: () => f,
    __generator: () => S,
    __importDefault: () => ae,
    __importStar: () => ie,
    __makeTemplateObject: () => re,
    __metadata: () => b,
    __param: () => h,
    __propKey: () => v,
    __read: () => T,
    __rest: () => p,
    __rewriteRelativeImportExtension: () => de,
    __runInitializers: () => _,
    __setFunctionName: () => y,
    __spread: () => E,
    __spreadArray: () => ee,
    __spreadArrays: () => D,
    __values: () => w,
    default: () => _e,
  });
function f(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Class extends value ` + String(t) + ` is not a constructor or null`);
  A(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function p(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function m(e, t, n, r) {
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
function h(e, t) {
  return function (n, r) {
    t(n, r, e);
  };
}
function g(e, t, n, r, i, a) {
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
function _(e, t, n) {
  for (var r = arguments.length > 2, i = 0; i < t.length; i++)
    n = r ? t[i].call(e, n) : t[i].call(e);
  return r ? n : void 0;
}
function v(e) {
  return typeof e == `symbol` ? e : `${e}`;
}
function y(e, t, n) {
  return (
    typeof t == `symbol` && (t = t.description ? `[${t.description}]` : ``),
    Object.defineProperty(e, `name`, { configurable: !0, value: n ? `${n} ${t}` : t })
  );
}
function b(e, t) {
  if (typeof Reflect == `object` && typeof Reflect.metadata == `function`)
    return Reflect.metadata(e, t);
}
function x(e, t, n, r) {
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
function S(e, t) {
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
function C(e, t) {
  for (var n in e) n !== `default` && !Object.prototype.hasOwnProperty.call(t, n) && pe(t, e, n);
}
function w(e) {
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
function T(e, t) {
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
function E() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(T(arguments[t]));
  return e;
}
function D() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
  return r;
}
function ee(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
function O(e) {
  return this instanceof O ? ((this.v = e), this) : new O(e);
}
function te(e, t, n) {
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
    e.value instanceof O ? Promise.resolve(e.value.v).then(u, d) : f(a[0][2], e);
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
function k(e) {
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
          return (n = !n) ? { value: O(e[r](t)), done: !1 } : i ? i(t) : t;
        }
      : i;
  }
}
function ne(e) {
  if (!Symbol.asyncIterator) throw TypeError(`Symbol.asyncIterator is not defined.`);
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof w == `function` ? w(e) : e[Symbol.iterator]()),
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
function re(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, `raw`, { value: t }) : (e.raw = t), e);
}
function ie(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n = he(e), r = 0; r < n.length; r++) n[r] !== `default` && pe(t, e, n[r]);
  return (me(t, e), t);
}
function ae(e) {
  return e && e.__esModule ? e : { default: e };
}
function oe(e, t, n, r) {
  if (n === `a` && !r) throw TypeError(`Private accessor was defined without a getter`);
  if (typeof t == `function` ? e !== t || !r : !t.has(e))
    throw TypeError(`Cannot read private member from an object whose class did not declare it`);
  return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e);
}
function se(e, t, n, r, i) {
  if (r === `m`) throw TypeError(`Private method is not writable`);
  if (r === `a` && !i) throw TypeError(`Private accessor was defined without a setter`);
  if (typeof t == `function` ? e !== t || !i : !t.has(e))
    throw TypeError(`Cannot write private member to an object whose class did not declare it`);
  return (r === `a` ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n);
}
function ce(e, t) {
  if (t === null || (typeof t != `object` && typeof t != `function`))
    throw TypeError(`Cannot use 'in' operator on non-object`);
  return typeof e == `function` ? t === e : e.has(t);
}
function le(e, t, n) {
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
function ue(e) {
  function t(t) {
    ((e.error = e.hasError ? new ge(t, e.error, `An error was suppressed during disposal.`) : t),
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
function de(e, t) {
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
var A,
  fe,
  pe,
  me,
  he,
  ge,
  _e,
  ve = n(() => {
    ((A = function (e, t) {
      return (
        (A =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }),
        A(e, t)
      );
    }),
      (fe = function () {
        return (
          (fe =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          fe.apply(this, arguments)
        );
      }),
      (pe = Object.create
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
      (me = Object.create
        ? function (e, t) {
            Object.defineProperty(e, `default`, { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
      (he = function (e) {
        return (
          (he =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
              return t;
            }),
          he(e)
        );
      }),
      (ge =
        typeof SuppressedError == `function`
          ? SuppressedError
          : function (e, t, n) {
              var r = Error(n);
              return ((r.name = `SuppressedError`), (r.error = e), (r.suppressed = t), r);
            }),
      (_e = {
        __extends: f,
        __assign: fe,
        __rest: p,
        __decorate: m,
        __param: h,
        __esDecorate: g,
        __runInitializers: _,
        __propKey: v,
        __setFunctionName: y,
        __metadata: b,
        __awaiter: x,
        __generator: S,
        __createBinding: pe,
        __exportStar: C,
        __values: w,
        __read: T,
        __spread: E,
        __spreadArrays: D,
        __spreadArray: ee,
        __await: O,
        __asyncGenerator: te,
        __asyncDelegator: k,
        __asyncValues: ne,
        __makeTemplateObject: re,
        __importStar: ie,
        __importDefault: ae,
        __classPrivateFieldGet: oe,
        __classPrivateFieldSet: se,
        __classPrivateFieldIn: ce,
        __addDisposableResource: le,
        __disposeResources: ue,
        __rewriteRelativeImportExtension: de,
      }));
  }),
  ye = i((e) => {
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
  j = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.BridgeAPIError = void 0),
      (e.BridgeAPIError = class extends Error {}));
  }),
  M = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getCallBridge = void 0));
    var t = j();
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
  be = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.withRateLimiter = void 0));
    var t = j();
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
  xe = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.makeInvoke = e.invoke = void 0));
    var t = M(),
      n = j(),
      r = be(),
      i = (0, t.getCallBridge)(),
      a = (e) => {
        if (e && Object.values(e).some((e) => typeof e == `function`))
          throw new n.BridgeAPIError(`Passing functions as part of the payload is not supported!`);
      },
      o = (0, r.withRateLimiter)(
        (e, t) => {
          if (typeof e != `string`) throw new n.BridgeAPIError(`functionKey must be a string!`);
          return (a(t), i(`invoke`, { functionKey: e, payload: t }));
        },
        500,
        1e3 * 25,
        `Resolver calls are rate limited at 500req/25s`,
      );
    function s(e, t) {
      return o(e, t);
    }
    e.invoke = s;
    function c() {
      return s;
    }
    e.makeInvoke = c;
  }),
  Se = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (ve(), t(d)).__exportStar(xe(), e));
  }),
  Ce = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._invokeEndpointFn = e.InvokeType = void 0));
    var t = M(),
      n = j(),
      r = be(),
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
  we = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.invokeRemote = void 0));
    var t = Ce();
    e.invokeRemote = (e) => (0, t._invokeEndpointFn)(t.InvokeType.REMOTE)(e);
  }),
  Te = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.invokeService = void 0));
    var t = Ce();
    e.invokeService = (e) => (0, t._invokeEndpointFn)(t.InvokeType.SERVICE)(e);
  }),
  Ee = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (ve(), t(d));
    (n.__exportStar(we(), e), n.__exportStar(Te(), e));
  }),
  De = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.submit = void 0));
    var t = M(),
      n = j(),
      r = (0, t.getCallBridge)();
    e.submit = async (e) => {
      if ((await r(`submit`, e)) === !1)
        throw new n.BridgeAPIError(`this resource's view is not submittable.`);
    };
  }),
  Oe = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.close = void 0));
    var t = M(),
      n = j(),
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
  ke = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.open = void 0));
    var t = M(),
      n = j(),
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
  Ae = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.refresh = void 0));
    var t = M(),
      n = j(),
      r = (0, t.getCallBridge)();
    e.refresh = async (e) => {
      if ((await r(`refresh`, e)) === !1)
        throw new n.BridgeAPIError(`this resource's view is not refreshable.`);
    };
  }),
  je = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.createHistory = void 0));
    var t = (0, M().getCallBridge)();
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
  Me = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.FORGE_SUPPORTED_LOCALE_CODES = e.I18N_BUNDLE_FOLDER_NAME = e.I18N_INFO_FILE_NAME = void 0),
      (e.I18N_INFO_FILE_NAME = `i18n-info.json`),
      (e.I18N_BUNDLE_FOLDER_NAME = `__LOCALES__`),
      (e.FORGE_SUPPORTED_LOCALE_CODES =
        `zh-CN.zh-TW.cs-CZ.da-DK.nl-NL.en-US.en-GB.et-EE.fi-FI.fr-FR.de-DE.hu-HU.is-IS.it-IT.ja-JP.ko-KR.no-NO.pl-PL.pt-BR.pt-PT.ro-RO.ru-RU.sk-SK.tr-TR.es-ES.sv-SE`.split(
          `.`,
        )));
  }),
  Ne = i((e) => {
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
  Pe = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
    var n = (ve(), t(d)).__importDefault(c());
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
  Fe = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Translator = void 0));
    var t = Pe();
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
  Ie = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.ensureLocale = void 0));
    var t = Me(),
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
  Le = i((e) => {
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
  Re = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
  }),
  ze = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getI18nSupportedModuleEntries =
        e.extractI18nPropertiesFromModules =
        e.extractI18nKeysFromModules =
        e.getTranslationValue =
          void 0));
    var n = (ve(), t(d));
    (n.__exportStar(Me(), e),
      n.__exportStar(Ne(), e),
      n.__exportStar(Fe(), e),
      n.__exportStar(Ie(), e));
    var r = Pe();
    Object.defineProperty(e, `getTranslationValue`, {
      enumerable: !0,
      get: function () {
        return r.getTranslationValue;
      },
    });
    var i = Le();
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
      n.__exportStar(Re(), e));
  }),
  Be = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getContext = void 0));
    var t = M(),
      n = ze(),
      r = (0, t.getCallBridge)();
    e.getContext = async () => {
      let e = await r(`getContext`),
        t = e?.locale;
      return (t && (e.locale = (0, n.ensureLocale)(t) ?? t), e);
    };
  }),
  Ve = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.changeWindowTitle = void 0));
    var t = M(),
      n = j(),
      r = (0, t.getCallBridge)();
    e.changeWindowTitle = async (e) => {
      try {
        await r(`changeWindowTitle`, e);
      } catch {
        throw new n.BridgeAPIError(`the window title wasn't changed due to error.`);
      }
    };
  }),
  He = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.theme = void 0));
    var t = (0, M().getCallBridge)();
    e.theme = { enable: () => t(`enableTheming`) };
  }),
  Ue = i((e) => {
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
  We = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.containsSerialisedBlobs =
        e.containsBlobs =
        e.deserialiseBlobsInPayload =
        e.serialiseBlobsInPayload =
          void 0));
    var t = Ue(),
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
  Ge = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.events = void 0));
    var t = M(),
      n = We(),
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
  Ke = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.emitReadyEvent = void 0));
    var t = Ge(),
      n = gt(),
      r = (0, M().getCallBridge)(),
      i = `EXTENSION_READY`;
    e.emitReadyEvent = async () => {
      let e = await n.view.getContext();
      await t.events.emit(i, { localId: e.localId });
      try {
        await r(`emitReadyEvent`);
      } catch {}
    };
  }),
  qe,
  Je,
  Ye,
  Xe,
  Ze = n(() => {
    ((qe = `modulepreload`),
      (Je = function (e, t) {
        return new URL(e, t).href;
      }),
      (Ye = {}),
      (Xe = function (e, t, n) {
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
              if (((t = Je(t, n)), t in Ye)) return;
              Ye[t] = !0;
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
                ((o.rel = r ? `stylesheet` : qe),
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
  Qe = i((e) => {
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
  $e = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i));
  }),
  et = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n($e());
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e) {
      return typeof e == `string` && t.default.test(e);
    }
    e.default = r;
  }),
  tt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.unsafeStringify = i));
    var t = n(et());
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
  nt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(Qe()),
      n = tt();
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
  rt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(et());
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
  it = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.URL = e.DNS = void 0),
      (e.default = s));
    var t = tt(),
      n = r(rt());
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
  at = i((e) => {
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
  ot = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(it()),
      n = r(at());
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    e.default = (0, t.default)(`v3`, 48, n.default);
  }),
  st = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default = {
        randomUUID: typeof crypto < `u` && crypto.randomUUID && crypto.randomUUID.bind(crypto),
      }));
  }),
  ct = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = i(st()),
      n = i(Qe()),
      r = tt();
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
  lt = i((e) => {
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
  ut = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(it()),
      n = r(lt());
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    e.default = (0, t.default)(`v5`, 80, n.default);
  }),
  dt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default = `00000000-0000-0000-0000-000000000000`));
  }),
  ft = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(et());
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e) {
      if (!(0, t.default)(e)) throw TypeError(`Invalid UUID`);
      return parseInt(e.slice(14, 15), 16);
    }
    e.default = r;
  }),
  pt = i((e) => {
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
    var t = u(nt()),
      n = u(ot()),
      r = u(ct()),
      i = u(ut()),
      a = u(dt()),
      o = u(ft()),
      s = u(et()),
      c = u(tt()),
      l = u(rt());
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
  }),
  mt = i((t) => {
    (Ze(),
      Object.defineProperty(t, `__esModule`, { value: !0 }),
      (t.createAdfRendererIframeProps = void 0));
    var n = pt();
    t.createAdfRendererIframeProps = async (t, r) => {
      let i = await Xe(
          () => import(`./iframe-resizer-BMg8MKLf.js`).then((t) => e(t.default)),
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
  ht = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.onClose = void 0));
    var t = M(),
      n = j(),
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
  gt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.view = void 0));
    var t = De(),
      n = Oe(),
      r = ke(),
      i = Ae(),
      a = je(),
      o = Be(),
      s = Ve(),
      c = He(),
      l = Ke(),
      u = mt(),
      d = ht();
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
  _t = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (ve(), t(d)).__exportStar(gt(), e));
  }),
  vt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.router = void 0));
    var t = (0, M().getCallBridge)();
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
  yt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (ve(), t(d)).__exportStar(vt(), e));
  }),
  bt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Modal = void 0));
    var t = M(),
      n = j(),
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
  xt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (ve(), t(d)).__exportStar(bt(), e));
  }),
  St = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.productFetchApi = e.remoteFetchApi = void 0));
    var t = Ue(),
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
  Ct = i((e) => {
    var t;
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.requestRemote = e.requestBitbucket = e.requestJira = e.requestConfluence = void 0));
    var n = M(),
      r = St();
    ((t = (0, r.productFetchApi)((0, n.getCallBridge)())),
      (e.requestConfluence = t.requestConfluence),
      (e.requestJira = t.requestJira),
      (e.requestBitbucket = t.requestBitbucket),
      (e.requestRemote = (0, r.remoteFetchApi)((0, n.getCallBridge)()).requestRemote));
  }),
  wt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.showFlag = void 0));
    var t = M(),
      n = j(),
      r = (0, t.getCallBridge)();
    e.showFlag = (e) => {
      if (!e.id) throw new n.BridgeAPIError(`"id" must be defined in flag options`);
      let t = r(`showFlag`, { ...e, type: e.type ?? `info` });
      return { close: async () => (await t, r(`closeFlag`, { id: e.id })) };
    };
  }),
  Tt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.showFlag = void 0));
    var t = wt();
    Object.defineProperty(e, `showFlag`, {
      enumerable: !0,
      get: function () {
        return t.showFlag;
      },
    });
  }),
  Et = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (ve(), t(d)).__exportStar(Ge(), e));
  }),
  Dt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.realtime = void 0));
    var t = (0, M().getCallBridge)();
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
  Ot = i((e) => {
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
  kt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
    var t = Dt();
    Object.defineProperty(e, `realtime`, {
      enumerable: !0,
      get: function () {
        return t.realtime;
      },
    });
    var n = Ot();
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
  At = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
    var t = M(),
      n = j(),
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
  jt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.isEnabled = void 0));
    var t = (0, M().getCallBridge)();
    e.isEnabled = () => t(`isRovoEnabled`);
  }),
  Mt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.rovo = void 0));
    var t = At(),
      n = jt();
    e.rovo = { open: t.open, isEnabled: n.isEnabled };
  }),
  Nt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (ve(), t(d)).__exportStar(Mt(), e));
  }),
  Pt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.createTranslationFunction = e.getTranslations = e.resetTranslationsCache = void 0));
    var t = ze(),
      n = _t(),
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
  Ft = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.permissions = void 0));
    var t = (0, M().getCallBridge)();
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
  It = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.parseUrl = void 0));
    function t(e) {
      let t = e.match(/^(.*?:)/)?.[0] ?? `https:`,
        n = e.replace(t, ``).replace(/^\/*/, ``).replace(/^\\*/, ``).split(`?`)[0].split(`#`)[0],
        r = n.split(`/`)[0];
      return { protocol: t, hostname: r, pathname: n.slice(r.length) || `/` };
    }
    e.parseUrl = t;
  }),
  Lt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getEgressesBasedOnToggles =
        e.sortAndGroupEgressPermissionsByDomain =
        e.EgressCategory =
        e.EgressType =
        e.globToRegex =
          void 0));
    var t = It();
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
  Rt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.EgressFilteringService = void 0));
    var t = It(),
      n = Lt();
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
  zt = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (ve(), t(d));
    (n.__exportStar(Rt(), e), n.__exportStar(It(), e), n.__exportStar(Lt(), e));
  }),
  Bt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (ve(), t(d)).__exportStar(zt(), e));
  }),
  Vt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.checkPermissions = e.createPermissionUtils = void 0));
    var t = Bt(),
      n = _t();
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
  Ht = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (ve(), t(d));
    (n.__exportStar(Ft(), e), n.__exportStar(Vt(), e));
  }),
  Ut = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (e.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = `Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.`));
  }),
  Wt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.checkRestrictedEnvironment = void 0));
    var t = j(),
      n = _t(),
      r = Ut();
    e.checkRestrictedEnvironment = async () => {
      let { environmentType: e } = await n.view.getContext();
      if (e === `PRODUCTION`)
        throw new t.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  }),
  Gt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.upload = e.createUploadPromises = void 0));
    var t = Se(),
      n = j(),
      r = Wt(),
      i = (0, M().getCallBridge)(),
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
  Kt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.deleteObjects = void 0));
    var t = Se(),
      n = j(),
      r = Wt(),
      i = (0, M().getCallBridge)();
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
  qt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.download = void 0));
    var t = Se(),
      n = j(),
      r = Wt(),
      i = (0, M().getCallBridge)();
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
  Jt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getMetadata = void 0));
    var t = Se(),
      n = j(),
      r = Wt(),
      i = (0, M().getCallBridge)();
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
  Yt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.createUploadPromises = e.objectStore = void 0));
    var t = Gt();
    Object.defineProperty(e, `createUploadPromises`, {
      enumerable: !0,
      get: function () {
        return t.createUploadPromises;
      },
    });
    var n = Kt(),
      r = qt(),
      i = Jt();
    e.objectStore = {
      upload: t.upload,
      download: r.download,
      getMetadata: i.getMetadata,
      delete: n.deleteObjects,
    };
  }),
  Xt = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (ve(), t(d));
    (n.__exportStar(Yt(), e), n.__exportStar(Ut(), e));
  }),
  Zt = i((e) => {
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
  Qt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.FeatureFlagEventType = void 0),
      (function (e) {
        e.CHECKFLAG = `checkFlag`;
      })((e.FeatureFlagEventType ||= {})));
  }),
  $t = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.trackFeatureFlagEvent = void 0));
    var t = M(),
      n = j(),
      r = be(),
      i = Qt(),
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
  en = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.initFeatureFlags = void 0));
    var t = M(),
      n = j(),
      r = be(),
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
  tn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.FeatureFlags = void 0));
    var t = Zt(),
      n = $t(),
      r = en(),
      i = Qt();
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
  nn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.FeatureFlags = void 0));
    var t = tn();
    Object.defineProperty(e, `FeatureFlags`, {
      enumerable: !0,
      get: function () {
        return t.FeatureFlags;
      },
    });
  }),
  rn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.i18n = e.NavigationTarget = void 0));
    var n = (ve(), t(d)),
      r = ye();
    (Object.defineProperty(e, `NavigationTarget`, {
      enumerable: !0,
      get: function () {
        return r.NavigationTarget;
      },
    }),
      n.__exportStar(Se(), e),
      n.__exportStar(Ee(), e),
      n.__exportStar(_t(), e),
      n.__exportStar(yt(), e),
      n.__exportStar(xt(), e),
      n.__exportStar(Ct(), e),
      n.__exportStar(Tt(), e),
      n.__exportStar(Et(), e),
      n.__exportStar(kt(), e),
      n.__exportStar(Nt(), e),
      (e.i18n = n.__importStar(Pt())),
      n.__exportStar(Ht(), e),
      n.__exportStar(Xt(), e),
      n.__exportStar(nn(), e));
  })();
function N(e) {
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
var an = {};
function on() {
  return typeof globalThis < `u`
    ? globalThis
    : typeof window < `u`
      ? window
      : typeof global < `u`
        ? global
        : typeof self < `u`
          ? self
          : an;
}
var sn = Object.assign,
  cn = Object.getOwnPropertyDescriptor,
  ln = Object.defineProperty,
  un = Object.prototype,
  dn = [];
Object.freeze(dn);
var fn = {};
Object.freeze(fn);
var pn = typeof Proxy < `u`,
  mn = Object.toString();
function hn() {
  pn || N(`Proxy not available`);
}
function gn(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var _n = function () {};
function vn(e) {
  return typeof e == `function`;
}
function yn(e) {
  switch (typeof e) {
    case `string`:
    case `symbol`:
    case `number`:
      return !0;
  }
  return !1;
}
function bn(e) {
  return typeof e == `object` && !!e;
}
function xn(e) {
  if (!bn(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var n = Object.hasOwnProperty.call(t, `constructor`) && t.constructor;
  return typeof n == `function` && n.toString() === mn;
}
function Sn(e) {
  var t = e?.constructor;
  return t ? t.name === `GeneratorFunction` || t.displayName === `GeneratorFunction` : !1;
}
function Cn(e, t, n) {
  ln(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function wn(e, t, n) {
  ln(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function Tn(e, t) {
  var n = `isMobX` + e;
  return (
    (t.prototype[n] = !0),
    function (e) {
      return bn(e) && e[n] === !0;
    }
  );
}
function En(e) {
  return e != null && Object.prototype.toString.call(e) === `[object Map]`;
}
function Dn(e) {
  return Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(e))) === null;
}
function On(e) {
  return e != null && Object.prototype.toString.call(e) === `[object Set]`;
}
var kn = Object.getOwnPropertySymbols !== void 0;
function An(e) {
  var t = Object.keys(e);
  if (!kn) return t;
  var n = Object.getOwnPropertySymbols(e);
  return n.length
    ? [].concat(
        t,
        n.filter(function (t) {
          return un.propertyIsEnumerable.call(e, t);
        }),
      )
    : t;
}
var jn =
  typeof Reflect < `u` && Reflect.ownKeys
    ? Reflect.ownKeys
    : kn
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Mn(e) {
  return e === null ? null : typeof e == `object` ? `` + e : e;
}
function Nn(e, t) {
  return un.hasOwnProperty.call(e, t);
}
var Pn =
  Object.getOwnPropertyDescriptors ||
  function (e) {
    var t = {};
    return (
      jn(e).forEach(function (n) {
        t[n] = cn(e, n);
      }),
      t
    );
  };
function Fn(e, t) {
  return !!(e & t);
}
function In(e, t, n) {
  return (n ? (e |= t) : (e &= ~t), e);
}
function Ln(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Rn(e, t, n) {
  if (Kn()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var i = new (e.bind.apply(e, r))();
  return (n && qn(i, n.prototype), i);
}
function zn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, Yn(r.key), r));
  }
}
function Bn(e, t, n) {
  return (
    t && zn(e.prototype, t),
    n && zn(e, n),
    Object.defineProperty(e, `prototype`, { writable: !1 }),
    e
  );
}
function Vn(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n) return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Xn(e)) || (t && e && typeof e.length == `number`)) {
    n && (e = n);
    var r = 0;
    return function () {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hn() {
  return (
    (Hn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Hn.apply(null, arguments)
  );
}
function Un(e) {
  return (
    (Un = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    Un(e)
  );
}
function Wn(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), qn(e, t));
}
function Gn(e) {
  try {
    return Function.toString.call(e).indexOf(`[native code]`) !== -1;
  } catch {
    return typeof e == `function`;
  }
}
function Kn() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Kn = function () {
    return !!e;
  })();
}
function qn(e, t) {
  return (
    (qn = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    qn(e, t)
  );
}
function Jn(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Yn(e) {
  var t = Jn(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Xn(e, t) {
  if (e) {
    if (typeof e == `string`) return Ln(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Ln(e, t)
          : void 0
    );
  }
}
function Zn(e) {
  var t = typeof Map == `function` ? new Map() : void 0;
  return (
    (Zn = function (e) {
      if (e === null || !Gn(e)) return e;
      if (typeof e != `function`)
        throw TypeError(`Super expression must either be null or a function`);
      if (t !== void 0) {
        if (t.has(e)) return t.get(e);
        t.set(e, n);
      }
      function n() {
        return Rn(e, arguments, Un(this).constructor);
      }
      return (
        (n.prototype = Object.create(e.prototype, {
          constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
        })),
        qn(n, e)
      );
    }),
    Zn(e)
  );
}
var Qn = Symbol(`mobx-stored-annotations`);
function $n(e) {
  function t(t, n) {
    if (nr(n)) return e.decorate_20223_(t, n);
    er(t, n, e);
  }
  return Object.assign(t, e);
}
function er(e, t, n) {
  (Nn(e, Qn) || Cn(e, Qn, Hn({}, e[Qn])), gr(n) || (e[Qn][t] = n));
}
function tr(e) {
  return (Nn(e, Qn) || Cn(e, Qn, Hn({}, e[Qn])), e[Qn]);
}
function nr(e) {
  return typeof e == `object` && typeof e.kind == `string`;
}
var P = Symbol(`mobx administration`),
  rr = (function () {
    function e(e) {
      (e === void 0 && (e = `Atom`),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = I.NOT_TRACKING_),
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
        return qi(this);
      }),
      (t.reportChanged = function () {
        (Gi(), Ji(this), Ki());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Bn(e, [
        {
          key: `isBeingObserved`,
          get: function () {
            return Fn(this.flags_, e.isBeingObservedMask_);
          },
          set: function (t) {
            this.flags_ = In(this.flags_, e.isBeingObservedMask_, t);
          },
        },
        {
          key: `isPendingUnobservation`,
          get: function () {
            return Fn(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (t) {
            this.flags_ = In(this.flags_, e.isPendingUnobservationMask_, t);
          },
        },
        {
          key: `diffValue`,
          get: function () {
            return +!!Fn(this.flags_, e.diffValueMask_);
          },
          set: function (t) {
            this.flags_ = In(this.flags_, e.diffValueMask_, t === 1);
          },
        },
      ])
    );
  })();
((rr.isBeingObservedMask_ = 1), (rr.isPendingUnobservationMask_ = 2), (rr.diffValueMask_ = 4));
var ir = Tn(`Atom`, rr);
function ar(e, t, n) {
  (t === void 0 && (t = _n), n === void 0 && (n = _n));
  var r = new rr(e);
  return (t !== _n && wa(r, t), n !== _n && Ta(r, n), r);
}
function or(e, t) {
  return e === t;
}
function sr(e, t) {
  return Yo(e, t);
}
function cr(e, t) {
  return Yo(e, t, 1);
}
function lr(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var ur = { identity: or, structural: sr, default: lr, shallow: cr };
function dr(e, t, n) {
  return Ua(e)
    ? e
    : Array.isArray(e)
      ? F.array(e, { name: n })
      : xn(e)
        ? F.object(e, void 0, { name: n })
        : En(e)
          ? F.map(e, { name: n })
          : On(e)
            ? F.set(e, { name: n })
            : typeof e == `function` && !va(e) && !Va(e)
              ? Sn(e)
                ? za(e)
                : _a(n, e)
              : e;
}
function fr(e, t, n) {
  if (e == null || Mo(e) || mo(e) || yo(e) || wo(e)) return e;
  if (Array.isArray(e)) return F.array(e, { name: n, deep: !1 });
  if (xn(e)) return F.object(e, void 0, { name: n, deep: !1 });
  if (En(e)) return F.map(e, { name: n, deep: !1 });
  if (On(e)) return F.set(e, { name: n, deep: !1 });
}
function pr(e) {
  return e;
}
function mr(e, t) {
  return Yo(e, t) ? t : e;
}
var hr = `override`;
function gr(e) {
  return e.annotationType_ === hr;
}
function _r(e, t) {
  return { annotationType_: e, options_: t, make_: vr, extend_: yr, decorate_20223_: br };
}
function vr(e, t, n, r) {
  var i;
  return (i = this.options_) != null && i.bound
    ? this.extend_(e, t, n, !1) === null
      ? 0
      : 1
    : r === e.target_
      ? this.extend_(e, t, n, !1) === null
        ? 0
        : 2
      : va(n.value)
        ? 1
        : (ln(r, t, Sr(e, this, t, n, !1)), 2);
}
function yr(e, t, n, r) {
  var i = Sr(e, this, t, n);
  return e.defineProperty_(t, i, r);
}
function br(e, t) {
  var n = t.kind,
    r = t.name,
    i = t.addInitializer,
    a = this,
    o = function (e) {
      return hi(a.options_?.name ?? r.toString(), e, a.options_?.autoAction ?? !1);
    };
  if (n == `field`)
    return function (e) {
      var t,
        n = e;
      return (
        va(n) || (n = o(n)),
        (t = a.options_) != null && t.bound && ((n = n.bind(this)), (n.isMobxAction = !0)),
        n
      );
    };
  if (n == `method`) {
    var s;
    return (
      va(e) || (e = o(e)),
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
  N(
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
function xr(e, t, n, r) {
  (t.annotationType_, r.value);
}
function Sr(e, t, n, r, i) {
  var a, o;
  (i === void 0 && (i = L.safeDescriptors), xr(e, t, n, r));
  var s = r.value;
  return (
    (a = t.options_) != null && a.bound && (s = s.bind(e.proxy_ ?? e.target_)),
    {
      value: hi(
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
function Cr(e, t) {
  return { annotationType_: e, options_: t, make_: wr, extend_: Tr, decorate_20223_: Er };
}
function wr(e, t, n, r) {
  var i;
  return r === e.target_
    ? this.extend_(e, t, n, !1) === null
      ? 0
      : 2
    : (i = this.options_) != null &&
        i.bound &&
        (!Nn(e.target_, t) || !Va(e.target_[t])) &&
        this.extend_(e, t, n, !1) === null
      ? 0
      : Va(n.value)
        ? 1
        : (ln(r, t, Or(e, this, t, n, !1, !1)), 2);
}
function Tr(e, t, n, r) {
  var i = Or(e, this, t, n, this.options_?.bound);
  return e.defineProperty_(t, i, r);
}
function Er(e, t) {
  var n,
    r = t.name,
    i = t.addInitializer;
  return (
    Va(e) || (e = za(e)),
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
function Dr(e, t, n, r) {
  (t.annotationType_, r.value);
}
function Or(e, t, n, r, i, a) {
  (a === void 0 && (a = L.safeDescriptors), Dr(e, t, n, r));
  var o = r.value;
  return (
    Va(o) || (o = za(o)),
    i && ((o = o.bind(e.proxy_ ?? e.target_)), (o.isMobXFlow = !0)),
    { value: o, configurable: a ? e.isPlainObject_ : !0, enumerable: !1, writable: !a }
  );
}
function kr(e, t) {
  return { annotationType_: e, options_: t, make_: Ar, extend_: jr, decorate_20223_: Mr };
}
function Ar(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function jr(e, t, n, r) {
  return (
    Nr(e, this, t, n),
    e.defineComputedProperty_(t, Hn({}, this.options_, { get: n.get, set: n.set }), r)
  );
}
function Mr(e, t) {
  var n = this,
    r = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var t = ko(this)[P],
        i = Hn({}, n.options_, { get: e, context: this });
      ((i.name ||= `ObservableObject.` + r.toString()), t.values_.set(r, new Ci(i)));
    }),
    function () {
      return this[P].getObservablePropValue_(r);
    }
  );
}
function Nr(e, t, n, r) {
  (t.annotationType_, r.get);
}
function Pr(e, t) {
  return { annotationType_: e, options_: t, make_: Fr, extend_: Ir, decorate_20223_: Lr };
}
function Fr(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function Ir(e, t, n, r) {
  return (
    Rr(e, this, t, n),
    e.defineObservableProperty_(t, n.value, this.options_?.enhancer ?? dr, r)
  );
}
function Lr(e, t) {
  var n = this,
    r = t.kind,
    i = t.name,
    a = new WeakSet();
  function o(e, t) {
    var r = ko(e)[P],
      o = new Si(t, n.options_?.enhancer ?? dr, `ObservableObject.` + i.toString(), !1);
    (r.values_.set(i, o), a.add(e));
  }
  if (r == `accessor`)
    return {
      get: function () {
        return (a.has(this) || o(this, e.get.call(this)), this[P].getObservablePropValue_(i));
      },
      set: function (e) {
        return (a.has(this) || o(this, e), this[P].setObservablePropValue_(i, e));
      },
      init: function (e) {
        return (a.has(this) || o(this, e), e);
      },
    };
}
function Rr(e, t, n, r) {
  t.annotationType_;
}
var zr = `true`,
  Br = Vr();
function Vr(e) {
  return { annotationType_: zr, options_: e, make_: Hr, extend_: Ur, decorate_20223_: Wr };
}
function Hr(e, t, n, r) {
  var i;
  if (n.get) return ui.make_(e, t, n, r);
  if (n.set) {
    var a = va(n.set) ? n.set : hi(t.toString(), n.set);
    return r === e.target_
      ? e.defineProperty_(t, {
          configurable: L.safeDescriptors ? e.isPlainObject_ : !0,
          set: a,
        }) === null
        ? 0
        : 2
      : (ln(r, t, { configurable: !0, set: a }), 2);
  }
  if (r !== e.target_ && typeof n.value == `function`) {
    var o;
    if (Sn(n.value)) {
      var s;
      return ((s = this.options_) != null && s.autoBind ? za.bound : za).make_(e, t, n, r);
    }
    return ((o = this.options_) != null && o.autoBind ? _a.bound : _a).make_(e, t, n, r);
  }
  var c = this.options_?.deep === !1 ? F.ref : F;
  return (
    typeof n.value == `function` &&
      (i = this.options_) != null &&
      i.autoBind &&
      (n.value = n.value.bind(e.proxy_ ?? e.target_)),
    c.make_(e, t, n, r)
  );
}
function Ur(e, t, n, r) {
  var i;
  return n.get
    ? ui.extend_(e, t, n, r)
    : n.set
      ? e.defineProperty_(
          t,
          { configurable: L.safeDescriptors ? e.isPlainObject_ : !0, set: hi(t.toString(), n.set) },
          r,
        )
      : (typeof n.value == `function` &&
          (i = this.options_) != null &&
          i.autoBind &&
          (n.value = n.value.bind(e.proxy_ ?? e.target_)),
        (this.options_?.deep === !1 ? F.ref : F).extend_(e, t, n, r));
}
function Wr(e, t) {
  N(`'` + this.annotationType_ + `' cannot be used as a decorator`);
}
var Gr = `observable`,
  Kr = `observable.ref`,
  qr = `observable.shallow`,
  Jr = `observable.struct`,
  Yr = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Yr);
function Xr(e) {
  return e || Yr;
}
var Zr = Pr(Gr),
  Qr = Pr(Kr, { enhancer: pr }),
  $r = Pr(qr, { enhancer: fr }),
  ei = Pr(Jr, { enhancer: mr }),
  ti = $n(Zr);
function ni(e) {
  return e.deep === !0 ? dr : e.deep === !1 ? pr : ii(e.defaultDecorator);
}
function ri(e) {
  return e ? (e.defaultDecorator ?? Vr(e)) : void 0;
}
function ii(e) {
  return e ? (e.options_?.enhancer ?? dr) : dr;
}
function ai(e, t, n) {
  if (nr(t)) return Zr.decorate_20223_(e, t);
  if (yn(t)) {
    er(e, t, Zr);
    return;
  }
  return Ua(e)
    ? e
    : xn(e)
      ? F.object(e, t, n)
      : Array.isArray(e)
        ? F.array(e, t)
        : En(e)
          ? F.map(e, t)
          : On(e)
            ? F.set(e, t)
            : typeof e == `object` && e
              ? e
              : F.box(e, t);
}
sn(ai, ti);
var F = sn(ai, {
    box: function (e, t) {
      var n = Xr(t);
      return new Si(e, ni(n), n.name, !0, n.equals);
    },
    array: function (e, t) {
      var n = Xr(t);
      return (L.useProxies === !1 || n.proxy === !1 ? Uo : oo)(e, ni(n), n.name);
    },
    map: function (e, t) {
      var n = Xr(t);
      return new vo(e, ni(n), n.name);
    },
    set: function (e, t) {
      var n = Xr(t);
      return new Co(e, ni(n), n.name);
    },
    object: function (e, t, n) {
      return qo(function () {
        return ja(L.useProxies === !1 || n?.proxy === !1 ? ko({}, n) : qa({}, n), e, t);
      });
    },
    ref: $n(Qr),
    shallow: $n($r),
    deep: ti,
    struct: $n(ei),
  }),
  oi = `computed`,
  si = `computed.struct`,
  ci = kr(oi),
  li = kr(si, { equals: ur.structural }),
  ui = function (e, t) {
    if (nr(t)) return ci.decorate_20223_(e, t);
    if (yn(t)) return er(e, t, ci);
    if (xn(e)) return $n(kr(oi, e));
    var n = xn(t) ? t : {};
    return ((n.get = e), (n.name ||= e.name || ``), new Ci(n));
  };
(Object.assign(ui, ci), (ui.struct = $n(li)));
var di = 0,
  fi = 1,
  pi = cn(function () {}, `name`)?.configurable ?? !1,
  mi = { value: `action`, configurable: !0, writable: !1, enumerable: !1 };
function hi(e, t, n, r) {
  n === void 0 && (n = !1);
  function i() {
    return gi(e, n, t, r || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    pi && ((mi.value = e), ln(i, `name`, mi)),
    i
  );
}
function gi(e, t, n, r, i) {
  var a = _i(e, t, r, i);
  try {
    return n.apply(r, i);
  } catch (e) {
    throw ((a.error_ = e), e);
  } finally {
    vi(a);
  }
}
function _i(e, t, n, r) {
  var i = !1,
    a = 0,
    o = L.trackingDerivation,
    s = !t || !o;
  Gi();
  var c = L.allowStateChanges;
  s && (Ni(), (c = bi(!0)));
  var l = Fi(!0),
    u = {
      runAsAction_: s,
      prevDerivation_: o,
      prevAllowStateChanges_: c,
      prevAllowStateReads_: l,
      notifySpy_: i,
      startTime_: a,
      actionId_: fi++,
      parentActionId_: di,
    };
  return ((di = u.actionId_), u);
}
function vi(e) {
  (di !== e.actionId_ && N(30),
    (di = e.parentActionId_),
    e.error_ !== void 0 && (L.suppressReactionErrors = !0),
    xi(e.prevAllowStateChanges_),
    Ii(e.prevAllowStateReads_),
    Ki(),
    e.runAsAction_ && Pi(e.prevDerivation_),
    (L.suppressReactionErrors = !1));
}
function yi(e, t) {
  var n = bi(e);
  try {
    return t();
  } finally {
    xi(n);
  }
}
function bi(e) {
  var t = L.allowStateChanges;
  return ((L.allowStateChanges = e), t);
}
function xi(e) {
  L.allowStateChanges = e;
}
var Si = (function (e) {
    function t(t, n, r, i, a) {
      var o;
      return (
        r === void 0 && (r = `ObservableValue`),
        i === void 0 && (i = !0),
        a === void 0 && (a = ur.default),
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
    Wn(t, e);
    var n = t.prototype;
    return (
      (n.dehanceValue = function (e) {
        return this.dehancer === void 0 ? e : this.dehancer(e);
      }),
      (n.set = function (e) {
        (this.value_, (e = this.prepareNewValue_(e)), e !== L.UNCHANGED && this.setNewValue_(e));
      }),
      (n.prepareNewValue_ = function (e) {
        if (Ja(this)) {
          var t = Xa(this, { object: this, type: no, newValue: e });
          if (!t) return L.UNCHANGED;
          e = t.newValue;
        }
        return (
          (e = this.enhancer(e, this.value_, this.name_)),
          this.equals(this.value_, e) ? L.UNCHANGED : e
        );
      }),
      (n.setNewValue_ = function (e) {
        var t = this.value_;
        ((this.value_ = e),
          this.reportChanged(),
          Za(this) && $a(this, { type: no, object: this, newValue: e, oldValue: t }));
      }),
      (n.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (n.intercept_ = function (e) {
        return Ya(this, e);
      }),
      (n.observe_ = function (e, t) {
        return (
          t &&
            e({
              observableKind: `value`,
              debugObjectName: this.name_,
              object: this,
              type: no,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Qa(this, e)
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
        return Mn(this.get());
      }),
      (n[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(rr),
  Ci = (function () {
    function e(e) {
      ((this.dependenciesState_ = I.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = I.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new Ei(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Ti.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        e.get || N(31),
        (this.derivation = e.get),
        (this.name_ = e.name || `ComputedValue`),
        e.set && (this.setter_ = hi(`ComputedValue-setter`, e.set)),
        (this.equals_ = e.equals || (e.compareStructural || e.struct ? ur.structural : ur.default)),
        (this.scope_ = e.context),
        (this.requiresReaction_ = e.requiresReaction),
        (this.keepAlive_ = !!e.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Xi(this);
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
          (this.isComputing && N(32, this.name_, this.derivation),
          L.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          Oi(this) &&
            (this.warnAboutUntrackedRead_(), Gi(), (this.value_ = this.computeValue_(!1)), Ki());
        else if ((qi(this), Oi(this))) {
          var e = L.trackingContext;
          (this.keepAlive_ && !e && (L.trackingContext = this),
            this.trackAndCompute() && Yi(this),
            (L.trackingContext = e));
        }
        var t = this.value_;
        if (Di(t)) throw t.cause;
        return t;
      }),
      (t.set = function (e) {
        if (this.setter_) {
          (this.isRunningSetter && N(33, this.name_), (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, e);
          } finally {
            this.isRunningSetter = !1;
          }
        } else N(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var e = this.value_,
          t = this.dependenciesState_ === I.NOT_TRACKING_,
          n = this.computeValue_(!0),
          r = t || Di(e) || Di(n) || !this.equals_(e, n);
        return (r && (this.value_ = n), r);
      }),
      (t.computeValue_ = function (e) {
        this.isComputing = !0;
        var t = bi(!1),
          n;
        if (e) n = ki(this, this.derivation, this.scope_);
        else if (L.disableErrorBoundaries === !0) n = this.derivation.call(this.scope_);
        else
          try {
            n = this.derivation.call(this.scope_);
          } catch (e) {
            n = new Ei(e);
          }
        return (xi(t), (this.isComputing = !1), n);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (ji(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (e, t) {
        var n = this,
          r = !0,
          i = void 0;
        return ya(function () {
          var a = n.get();
          if (!r || t) {
            var o = Ni();
            (e({
              observableKind: `computed`,
              debugObjectName: n.name_,
              type: no,
              object: n,
              newValue: a,
              oldValue: i,
            }),
              Pi(o));
          }
          ((r = !1), (i = a));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + `[` + this.derivation.toString() + `]`;
      }),
      (t.valueOf = function () {
        return Mn(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      Bn(e, [
        {
          key: `isComputing`,
          get: function () {
            return Fn(this.flags_, e.isComputingMask_);
          },
          set: function (t) {
            this.flags_ = In(this.flags_, e.isComputingMask_, t);
          },
        },
        {
          key: `isRunningSetter`,
          get: function () {
            return Fn(this.flags_, e.isRunningSetterMask_);
          },
          set: function (t) {
            this.flags_ = In(this.flags_, e.isRunningSetterMask_, t);
          },
        },
        {
          key: `isBeingObserved`,
          get: function () {
            return Fn(this.flags_, e.isBeingObservedMask_);
          },
          set: function (t) {
            this.flags_ = In(this.flags_, e.isBeingObservedMask_, t);
          },
        },
        {
          key: `isPendingUnobservation`,
          get: function () {
            return Fn(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (t) {
            this.flags_ = In(this.flags_, e.isPendingUnobservationMask_, t);
          },
        },
        {
          key: `diffValue`,
          get: function () {
            return +!!Fn(this.flags_, e.diffValueMask_);
          },
          set: function (t) {
            this.flags_ = In(this.flags_, e.diffValueMask_, t === 1);
          },
        },
      ])
    );
  })();
((Ci.isComputingMask_ = 1),
  (Ci.isRunningSetterMask_ = 2),
  (Ci.isBeingObservedMask_ = 4),
  (Ci.isPendingUnobservationMask_ = 8),
  (Ci.diffValueMask_ = 16));
var wi = Tn(`ComputedValue`, Ci),
  I;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = `NOT_TRACKING_`),
    (e[(e.UP_TO_DATE_ = 0)] = `UP_TO_DATE_`),
    (e[(e.POSSIBLY_STALE_ = 1)] = `POSSIBLY_STALE_`),
    (e[(e.STALE_ = 2)] = `STALE_`));
})((I ||= {}));
var Ti;
(function (e) {
  ((e[(e.NONE = 0)] = `NONE`), (e[(e.LOG = 1)] = `LOG`), (e[(e.BREAK = 2)] = `BREAK`));
})((Ti ||= {}));
var Ei = function (e) {
  ((this.cause = void 0), (this.cause = e));
};
function Di(e) {
  return e instanceof Ei;
}
function Oi(e) {
  switch (e.dependenciesState_) {
    case I.UP_TO_DATE_:
      return !1;
    case I.NOT_TRACKING_:
    case I.STALE_:
      return !0;
    case I.POSSIBLY_STALE_:
      for (var t = Fi(!0), n = Ni(), r = e.observing_, i = r.length, a = 0; a < i; a++) {
        var o = r[a];
        if (wi(o)) {
          if (L.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Pi(n), Ii(t), !0);
            }
          if (e.dependenciesState_ === I.STALE_) return (Pi(n), Ii(t), !0);
        }
      }
      return (Li(e), Pi(n), Ii(t), !1);
  }
}
function ki(e, t, n) {
  var r = Fi(!0);
  (Li(e),
    (e.newObserving_ = Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++L.runId));
  var i = L.trackingDerivation;
  ((L.trackingDerivation = e), L.inBatch++);
  var a;
  if (L.disableErrorBoundaries === !0) a = t.call(n);
  else
    try {
      a = t.call(n);
    } catch (e) {
      a = new Ei(e);
    }
  return (L.inBatch--, (L.trackingDerivation = i), Ai(e), Ii(r), a);
}
function Ai(e) {
  for (
    var t = e.observing_,
      n = (e.observing_ = e.newObserving_),
      r = I.UP_TO_DATE_,
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
    (c.diffValue === 0 && Ui(c, e), (c.diffValue = 0));
  }
  for (; i--; ) {
    var l = n[i];
    l.diffValue === 1 && ((l.diffValue = 0), Hi(l, e));
  }
  r !== I.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
}
function ji(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var n = t.length; n--; ) Ui(t[n], e);
  e.dependenciesState_ = I.NOT_TRACKING_;
}
function Mi(e) {
  var t = Ni();
  try {
    return e();
  } finally {
    Pi(t);
  }
}
function Ni() {
  var e = L.trackingDerivation;
  return ((L.trackingDerivation = null), e);
}
function Pi(e) {
  L.trackingDerivation = e;
}
function Fi(e) {
  var t = L.allowStateReads;
  return ((L.allowStateReads = e), t);
}
function Ii(e) {
  L.allowStateReads = e;
}
function Li(e) {
  if (e.dependenciesState_ !== I.UP_TO_DATE_) {
    e.dependenciesState_ = I.UP_TO_DATE_;
    for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = I.UP_TO_DATE_;
  }
}
var Ri = function () {
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
  zi = !0,
  Bi = !1,
  L = (function () {
    var e = on();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (zi = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new Ri().version && (zi = !1),
      zi
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Ri()))
        : (setTimeout(function () {
            Bi || N(35);
          }, 1),
          new Ri())
    );
  })();
function Vi() {
  if (((L.pendingReactions.length || L.inBatch || L.isRunningReactions) && N(36), (Bi = !0), zi)) {
    var e = on();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (L = new Ri()));
  }
}
function Hi(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Ui(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Wi(e));
}
function Wi(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), L.pendingUnobservations.push(e));
}
function Gi() {
  L.inBatch++;
}
function Ki() {
  if (--L.inBatch === 0) {
    ea();
    for (var e = L.pendingUnobservations, t = 0; t < e.length; t++) {
      var n = e[t];
      ((n.isPendingUnobservation = !1),
        n.observers_.size === 0 &&
          (n.isBeingObserved && ((n.isBeingObserved = !1), n.onBUO()),
          n instanceof Ci && n.suspend_()));
    }
    L.pendingUnobservations = [];
  }
}
function qi(e) {
  var t = L.trackingDerivation;
  return t === null
    ? (e.observers_.size === 0 && L.inBatch > 0 && Wi(e), !1)
    : (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && L.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved);
}
function Ji(e) {
  e.lowestObserverState_ !== I.STALE_ &&
    ((e.lowestObserverState_ = I.STALE_),
    e.observers_.forEach(function (e) {
      (e.dependenciesState_ === I.UP_TO_DATE_ && e.onBecomeStale_(),
        (e.dependenciesState_ = I.STALE_));
    }));
}
function Yi(e) {
  e.lowestObserverState_ !== I.STALE_ &&
    ((e.lowestObserverState_ = I.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === I.POSSIBLY_STALE_
        ? (t.dependenciesState_ = I.STALE_)
        : t.dependenciesState_ === I.UP_TO_DATE_ && (e.lowestObserverState_ = I.UP_TO_DATE_);
    }));
}
function Xi(e) {
  e.lowestObserverState_ === I.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = I.POSSIBLY_STALE_),
    e.observers_.forEach(function (e) {
      e.dependenciesState_ === I.UP_TO_DATE_ &&
        ((e.dependenciesState_ = I.POSSIBLY_STALE_), e.onBecomeStale_());
    }));
}
var Zi = (function () {
  function e(e, t, n, r) {
    (e === void 0 && (e = `Reaction`),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = I.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = Ti.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), L.pendingReactions.push(this), ea());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Gi(), (this.isScheduled = !1));
        var e = L.trackingContext;
        if (((L.trackingContext = this), Oi(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (e) {
            this.reportExceptionInDerivation_(e);
          }
        }
        ((L.trackingContext = e), Ki());
      }
    }),
    (t.track = function (e) {
      if (!this.isDisposed) {
        (Gi(), (this.isRunning = !0));
        var t = L.trackingContext;
        L.trackingContext = this;
        var n = ki(this, e, void 0);
        ((L.trackingContext = t),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && ji(this),
          Di(n) && this.reportExceptionInDerivation_(n.cause),
          Ki());
      }
    }),
    (t.reportExceptionInDerivation_ = function (e) {
      var t = this;
      if (this.errorHandler_) {
        this.errorHandler_(e, this);
        return;
      }
      if (L.disableErrorBoundaries) throw e;
      var n = `[mobx] uncaught error in '` + this + `'`;
      (L.suppressReactionErrors || console.error(n, e),
        L.globalReactionErrorHandlers.forEach(function (n) {
          return n(e, t);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Gi(), ji(this), Ki()));
    }),
    (t.getDisposer_ = function (e) {
      var t = this,
        n = function n() {
          (t.dispose(),
            e == null || e.removeEventListener == null || e.removeEventListener(`abort`, n));
        };
      return (
        e == null || e.addEventListener == null || e.addEventListener(`abort`, n),
        (n[P] = this),
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
    Bn(e, [
      {
        key: `isDisposed`,
        get: function () {
          return Fn(this.flags_, e.isDisposedMask_);
        },
        set: function (t) {
          this.flags_ = In(this.flags_, e.isDisposedMask_, t);
        },
      },
      {
        key: `isScheduled`,
        get: function () {
          return Fn(this.flags_, e.isScheduledMask_);
        },
        set: function (t) {
          this.flags_ = In(this.flags_, e.isScheduledMask_, t);
        },
      },
      {
        key: `isTrackPending`,
        get: function () {
          return Fn(this.flags_, e.isTrackPendingMask_);
        },
        set: function (t) {
          this.flags_ = In(this.flags_, e.isTrackPendingMask_, t);
        },
      },
      {
        key: `isRunning`,
        get: function () {
          return Fn(this.flags_, e.isRunningMask_);
        },
        set: function (t) {
          this.flags_ = In(this.flags_, e.isRunningMask_, t);
        },
      },
      {
        key: `diffValue`,
        get: function () {
          return +!!Fn(this.flags_, e.diffValueMask_);
        },
        set: function (t) {
          this.flags_ = In(this.flags_, e.diffValueMask_, t === 1);
        },
      },
    ])
  );
})();
((Zi.isDisposedMask_ = 1),
  (Zi.isScheduledMask_ = 2),
  (Zi.isTrackPendingMask_ = 4),
  (Zi.isRunningMask_ = 8),
  (Zi.diffValueMask_ = 16));
var Qi = 100,
  $i = function (e) {
    return e();
  };
function ea() {
  L.inBatch > 0 || L.isRunningReactions || $i(ta);
}
function ta() {
  L.isRunningReactions = !0;
  for (var e = L.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Qi && (console.error(`[mobx] cycle in reaction: ` + e[0]), e.splice(0));
    for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
  }
  L.isRunningReactions = !1;
}
var na = Tn(`Reaction`, Zi);
function ra(e) {
  var t = $i;
  $i = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function ia() {
  return !1;
}
function aa(e) {
  return (console.warn(`[mobx.spy] Is a no-op in production builds`), function () {});
}
var oa = `action`,
  sa = `action.bound`,
  ca = `autoAction`,
  la = `autoAction.bound`,
  ua = `<unnamed action>`,
  da = _r(oa),
  fa = _r(sa, { bound: !0 }),
  pa = _r(ca, { autoAction: !0 }),
  ma = _r(la, { autoAction: !0, bound: !0 });
function ha(e) {
  return function (t, n) {
    if (vn(t)) return hi(t.name || ua, t, e);
    if (vn(n)) return hi(t, n, e);
    if (nr(n)) return (e ? pa : da).decorate_20223_(t, n);
    if (yn(n)) return er(t, n, e ? pa : da);
    if (yn(t)) return $n(_r(e ? ca : oa, { name: t, autoAction: e }));
  };
}
var ga = ha(!1);
Object.assign(ga, da);
var _a = ha(!0);
(Object.assign(_a, pa), (ga.bound = $n(fa)), (_a.bound = $n(ma)));
function va(e) {
  return vn(e) && e.isMobxAction === !0;
}
function ya(e, t) {
  var n;
  t === void 0 && (t = fn);
  var r = t?.name ?? `Autorun`,
    i = !t.scheduler && !t.delay,
    a;
  if (i)
    a = new Zi(
      r,
      function () {
        this.track(c);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var o = xa(t),
      s = !1;
    a = new Zi(
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
var ba = function (e) {
  return e();
};
function xa(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : ba;
}
var Sa = `onBO`,
  Ca = `onBUO`;
function wa(e, t, n) {
  return Ea(Sa, e, t, n);
}
function Ta(e, t, n) {
  return Ea(Ca, e, t, n);
}
function Ea(e, t, n, r) {
  var i = typeof r == `function` ? Wo(t, n) : Wo(t),
    a = vn(r) ? r : n,
    o = e + `L`;
  return (
    i[o] ? i[o].add(a) : (i[o] = new Set([a])),
    function () {
      var e = i[o];
      e && (e.delete(a), e.size === 0 && delete i[o]);
    }
  );
}
var Da = `never`,
  Oa = `always`,
  ka = `observed`;
function Aa(e) {
  e.isolateGlobalState === !0 && Vi();
  var t = e.useProxies,
    n = e.enforceActions;
  if (
    (t !== void 0 && (L.useProxies = t === Oa ? !0 : t === Da ? !1 : typeof Proxy < `u`),
    t === `ifavailable` && (L.verifyProxies = !0),
    n !== void 0)
  ) {
    var r = n === Oa ? Oa : n === ka;
    ((L.enforceActions = r), (L.allowStateChanges = !(r === !0 || r === Oa)));
  }
  ([
    `computedRequiresReaction`,
    `reactionRequiresObservable`,
    `observableRequiresReaction`,
    `disableErrorBoundaries`,
    `safeDescriptors`,
  ].forEach(function (t) {
    t in e && (L[t] = !!e[t]);
  }),
    (L.allowStateReads = !L.observableRequiresReaction),
    e.reactionScheduler && ra(e.reactionScheduler));
}
function ja(e, t, n, r) {
  var i = Pn(t);
  return (
    qo(function () {
      var t = ko(e, r)[P];
      jn(i).forEach(function (e) {
        t.extend_(e, i[e], n && e in n ? n[e] : !0);
      });
    }),
    e
  );
}
function Ma(e, t) {
  return Na(Wo(e, t));
}
function Na(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = Pa(e.observing_).map(Na)),
    t
  );
}
function Pa(e) {
  return Array.from(new Set(e));
}
var Fa = 0,
  Ia = (function (e) {
    function t() {
      var n = e.call(this, `FLOW_CANCELLED`) || this;
      return (
        Object.setPrototypeOf(n, (this instanceof t ? this.constructor : void 0).prototype),
        (n.name = `FlowCancellationError`),
        n
      );
    }
    Wn(t, e);
    var n = t.prototype;
    return (
      (n.toString = function () {
        return `Error: ` + this.message;
      }),
      t
    );
  })(Zn(Error)),
  La = Cr(`flow`),
  Ra = Cr(`flow.bound`, { bound: !0 }),
  za = Object.assign(function (e, t) {
    if (nr(t)) return La.decorate_20223_(e, t);
    if (yn(t)) return er(e, t, La);
    var n = e,
      r = n.name || `<unnamed flow>`,
      i = function () {
        var e = this,
          t = arguments,
          i = ++Fa,
          a = ga(r + ` - runid: ` + i + ` - init`, n).apply(e, t),
          o,
          s = void 0,
          c = new Promise(function (e, t) {
            var n = 0;
            o = t;
            function c(e) {
              s = void 0;
              var o;
              try {
                o = ga(r + ` - runid: ` + i + ` - yield ` + n++, a.next).call(a, e);
              } catch (e) {
                return t(e);
              }
              u(o);
            }
            function l(e) {
              s = void 0;
              var o;
              try {
                o = ga(r + ` - runid: ` + i + ` - yield ` + n++, a.throw).call(a, e);
              } catch (e) {
                return t(e);
              }
              u(o);
            }
            function u(n) {
              if (vn(n?.then)) {
                n.then(u, t);
                return;
              }
              return n.done ? e(n.value) : ((s = Promise.resolve(n.value)), s.then(c, l));
            }
            c(void 0);
          });
        return (
          (c.cancel = ga(r + ` - runid: ` + i + ` - cancel`, function () {
            try {
              s && Ba(s);
              var e = a.return(void 0),
                t = Promise.resolve(e.value);
              (t.then(_n, _n), Ba(t), o(new Ia()));
            } catch (e) {
              o(e);
            }
          })),
          c
        );
      };
    return ((i.isMobXFlow = !0), i);
  }, La);
za.bound = $n(Ra);
function Ba(e) {
  vn(e.cancel) && e.cancel();
}
function Va(e) {
  return e?.isMobXFlow === !0;
}
function Ha(e, t) {
  return e
    ? t === void 0
      ? Mo(e) || !!e[P] || ir(e) || na(e) || wi(e)
      : Mo(e)
        ? e[P].values_.has(t)
        : !1
    : !1;
}
function Ua(e) {
  return Ha(e);
}
function Wa(e, t) {
  (t === void 0 && (t = void 0), Gi());
  try {
    return e.apply(t);
  } finally {
    Ki();
  }
}
function Ga(e) {
  return e[P];
}
var Ka = {
  has: function (e, t) {
    return Ga(e).has_(t);
  },
  get: function (e, t) {
    return Ga(e).get_(t);
  },
  set: function (e, t, n) {
    return yn(t) ? (Ga(e).set_(t, n, !0) ?? !0) : !1;
  },
  deleteProperty: function (e, t) {
    return yn(t) ? (Ga(e).delete_(t, !0) ?? !0) : !1;
  },
  defineProperty: function (e, t, n) {
    return Ga(e).defineProperty_(t, n) ?? !0;
  },
  ownKeys: function (e) {
    return Ga(e).ownKeys_();
  },
  preventExtensions: function (e) {
    N(13);
  },
};
function qa(e, t) {
  var n;
  return (hn(), (e = ko(e, t)), (n = e[P]).proxy_ ?? (n.proxy_ = new Proxy(e, Ka)));
}
function Ja(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Ya(e, t) {
  var n = (e.interceptors_ ||= []);
  return (
    n.push(t),
    gn(function () {
      var e = n.indexOf(t);
      e !== -1 && n.splice(e, 1);
    })
  );
}
function Xa(e, t) {
  var n = Ni();
  try {
    for (
      var r = [].concat(e.interceptors_ || []), i = 0, a = r.length;
      i < a && ((t = r[i](t)), t && !t.type && N(14), t);
      i++
    );
    return t;
  } finally {
    Pi(n);
  }
}
function Za(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Qa(e, t) {
  var n = (e.changeListeners_ ||= []);
  return (
    n.push(t),
    gn(function () {
      var e = n.indexOf(t);
      e !== -1 && n.splice(e, 1);
    })
  );
}
function $a(e, t) {
  var n = Ni(),
    r = e.changeListeners_;
  if (r) {
    r = r.slice();
    for (var i = 0, a = r.length; i < a; i++) r[i](t);
    Pi(n);
  }
}
function eo(e, t, n) {
  return (
    qo(function () {
      var r = ko(e, n)[P];
      ((t ??= tr(e)),
        jn(t).forEach(function (e) {
          return r.make_(e, t[e]);
        }));
    }),
    e
  );
}
var to = `splice`,
  no = `update`,
  ro = 1e4,
  io = {
    get: function (e, t) {
      var n = e[P];
      return t === P
        ? n
        : t === `length`
          ? n.getArrayLength_()
          : typeof t == `string` && !isNaN(t)
            ? n.get_(parseInt(t))
            : Nn(so, t)
              ? so[t]
              : e[t];
    },
    set: function (e, t, n) {
      var r = e[P];
      return (
        t === `length` && r.setArrayLength_(n),
        typeof t == `symbol` || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
        !0
      );
    },
    preventExtensions: function () {
      N(15);
    },
  },
  ao = (function () {
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
        (this.atom_ = new rr(e)),
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
        return Ya(this, e);
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
          Qa(this, e)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (e) {
        (typeof e != `number` || isNaN(e) || e < 0) && N(`Out of range: ` + e);
        var t = this.values_.length;
        if (e !== t)
          if (e > t) {
            for (var n = Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
            this.spliceWithArray_(t, 0, n);
          } else this.spliceWithArray_(e, t - e);
      }),
      (t.updateArrayLength_ = function (e, t) {
        (e !== this.lastKnownLength_ && N(16),
          (this.lastKnownLength_ += t),
          this.legacyMode_ && t > 0 && Ho(e + t + 1));
      }),
      (t.spliceWithArray_ = function (e, t, n) {
        var r = this;
        this.atom_;
        var i = this.values_.length;
        if (
          (e === void 0 ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
          (t = arguments.length === 1 ? i - e : t == null ? 0 : Math.max(0, Math.min(t, i - e))),
          n === void 0 && (n = dn),
          Ja(this))
        ) {
          var a = Xa(this, { object: this.proxy_, type: to, index: e, removedCount: t, added: n });
          if (!a) return dn;
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
        if (n.length < ro) {
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
        var r = !this.owned_ && ia(),
          i = Za(this),
          a =
            i || r
              ? {
                  observableKind: `array`,
                  object: this.proxy_,
                  type: no,
                  debugObjectName: this.atom_.name_,
                  index: e,
                  newValue: t,
                  oldValue: n,
                }
              : null;
        (this.atom_.reportChanged(), i && $a(this, a));
      }),
      (t.notifyArraySplice_ = function (e, t, n) {
        var r = !this.owned_ && ia(),
          i = Za(this),
          a =
            i || r
              ? {
                  observableKind: `array`,
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: to,
                  index: e,
                  removed: n,
                  added: t,
                  removedCount: n.length,
                  addedCount: t.length,
                }
              : null;
        (this.atom_.reportChanged(), i && $a(this, a));
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
        if ((this.legacyMode_ && e > n.length && N(17, e, n.length), e < n.length)) {
          this.atom_;
          var r = n[e];
          if (Ja(this)) {
            var i = Xa(this, { type: no, object: this.proxy_, index: e, newValue: t });
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
function oo(e, t, n, r) {
  return (
    n === void 0 && (n = `ObservableArray`),
    r === void 0 && (r = !1),
    hn(),
    qo(function () {
      var i = new ao(n, t, r, !1);
      wn(i.values_, P, i);
      var a = new Proxy(i.values_, io);
      return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
    })
  );
}
var so = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (e) {
    var t = this[P];
    return t.spliceWithArray_(0, t.values_.length, e);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (e, t) {
    var n = [...arguments].slice(2),
      r = this[P];
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
    return this[P].spliceWithArray_(e, t, n);
  },
  push: function () {
    var e = this[P],
      t = [...arguments];
    return (e.spliceWithArray_(e.values_.length, 0, t), e.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[P].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    var e = this[P],
      t = [...arguments];
    return (e.spliceWithArray_(0, 0, t), e.values_.length);
  },
  reverse: function () {
    return (L.trackingDerivation && N(37, `reverse`), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    L.trackingDerivation && N(37, `sort`);
    var e = this.slice();
    return (e.sort.apply(e, arguments), this.replace(e), this);
  },
  remove: function (e) {
    var t = this[P],
      n = t.dehanceValues_(t.values_).indexOf(e);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
(co(`at`, lo),
  co(`concat`, lo),
  co(`flat`, lo),
  co(`includes`, lo),
  co(`indexOf`, lo),
  co(`join`, lo),
  co(`lastIndexOf`, lo),
  co(`slice`, lo),
  co(`toString`, lo),
  co(`toLocaleString`, lo),
  co(`toSorted`, lo),
  co(`toSpliced`, lo),
  co(`with`, lo),
  co(`every`, uo),
  co(`filter`, uo),
  co(`find`, uo),
  co(`findIndex`, uo),
  co(`findLast`, uo),
  co(`findLastIndex`, uo),
  co(`flatMap`, uo),
  co(`forEach`, uo),
  co(`map`, uo),
  co(`some`, uo),
  co(`toReversed`, uo),
  co(`reduce`, fo),
  co(`reduceRight`, fo));
function co(e, t) {
  typeof Array.prototype[e] == `function` && (so[e] = t(e));
}
function lo(e) {
  return function () {
    var t = this[P];
    t.atom_.reportObserved();
    var n = t.dehanceValues_(t.values_);
    return n[e].apply(n, arguments);
  };
}
function uo(e) {
  return function (t, n) {
    var r = this,
      i = this[P];
    return (
      i.atom_.reportObserved(),
      i.dehanceValues_(i.values_)[e](function (e, i) {
        return t.call(n, e, i, r);
      })
    );
  };
}
function fo(e) {
  return function () {
    var t = this,
      n = this[P];
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
var po = Tn(`ObservableArrayAdministration`, ao);
function mo(e) {
  return bn(e) && po(e[P]);
}
var ho = {},
  go = `add`,
  _o = `delete`,
  vo = (function () {
    function e(e, t, n) {
      var r = this;
      (t === void 0 && (t = dr),
        n === void 0 && (n = `ObservableMap`),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[P] = ho),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = t),
        (this.name_ = n),
        vn(Map) || N(18),
        qo(function () {
          ((r.keysAtom_ = ar(`ObservableMap.keys()`)),
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
        if (!L.trackingDerivation) return this.has_(e);
        var n = this.hasMap_.get(e);
        if (!n) {
          var r = (n = new Si(this.has_(e), pr, `ObservableMap.key?`, !1));
          (this.hasMap_.set(e, r),
            Ta(r, function () {
              return t.hasMap_.delete(e);
            }));
        }
        return n.get();
      }),
      (t.set = function (e, t) {
        var n = this.has_(e);
        if (Ja(this)) {
          var r = Xa(this, { type: n ? no : go, object: this, newValue: t, name: e });
          if (!r) return this;
          t = r.newValue;
        }
        return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
      }),
      (t.delete = function (e) {
        var t = this;
        if ((this.keysAtom_, Ja(this) && !Xa(this, { type: _o, object: this, name: e }))) return !1;
        if (this.has_(e)) {
          var n = ia(),
            r = Za(this),
            i =
              r || n
                ? {
                    observableKind: `map`,
                    debugObjectName: this.name_,
                    type: _o,
                    object: this,
                    oldValue: this.data_.get(e).value_,
                    name: e,
                  }
                : null;
          return (
            Wa(function () {
              var n;
              (t.keysAtom_.reportChanged(),
                (n = t.hasMap_.get(e)) == null || n.setNewValue_(!1),
                t.data_.get(e).setNewValue_(void 0),
                t.data_.delete(e));
            }),
            r && $a(this, i),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (e, t) {
        var n = this.data_.get(e);
        if (((t = n.prepareNewValue_(t)), t !== L.UNCHANGED)) {
          var r = ia(),
            i = Za(this),
            a =
              i || r
                ? {
                    observableKind: `map`,
                    debugObjectName: this.name_,
                    type: no,
                    object: this,
                    oldValue: n.value_,
                    name: e,
                    newValue: t,
                  }
                : null;
          (n.setNewValue_(t), i && $a(this, a));
        }
      }),
      (t.addValue_ = function (e, t) {
        var n = this;
        (this.keysAtom_,
          Wa(function () {
            var r,
              i = new Si(t, n.enhancer_, `ObservableMap.key`, !1);
            (n.data_.set(e, i),
              (t = i.value_),
              (r = n.hasMap_.get(e)) == null || r.setNewValue_(!0),
              n.keysAtom_.reportChanged());
          }));
        var r = ia(),
          i = Za(this),
          a =
            i || r
              ? {
                  observableKind: `map`,
                  debugObjectName: this.name_,
                  type: go,
                  object: this,
                  name: e,
                  newValue: t,
                }
              : null;
        i && $a(this, a);
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
        return bo({
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
        return bo({
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
        for (var n = Vn(this), r; !(r = n()).done; ) {
          var i = r.value,
            a = i[0],
            o = i[1];
          e.call(t, o, a, this);
        }
      }),
      (t.merge = function (e) {
        var t = this;
        return (
          yo(e) && (e = new Map(e)),
          Wa(function () {
            xn(e)
              ? An(e).forEach(function (n) {
                  return t.set(n, e[n]);
                })
              : Array.isArray(e)
                ? e.forEach(function (e) {
                    var n = e[0],
                      r = e[1];
                    return t.set(n, r);
                  })
                : En(e)
                  ? (Dn(e) || N(19, e),
                    e.forEach(function (e, n) {
                      return t.set(n, e);
                    }))
                  : e != null && N(20, e);
          }),
          this
        );
      }),
      (t.clear = function () {
        var e = this;
        Wa(function () {
          Mi(function () {
            for (var t = Vn(e.keys()), n; !(n = t()).done; ) {
              var r = n.value;
              e.delete(r);
            }
          });
        });
      }),
      (t.replace = function (e) {
        var t = this;
        return (
          Wa(function () {
            for (
              var n = xo(e), r = new Map(), i = !1, a = Vn(t.data_.keys()), o;
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
            for (var l = Vn(n.entries()), u; !(u = l()).done; ) {
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
        return Qa(this, e);
      }),
      (t.intercept_ = function (e) {
        return Ya(this, e);
      }),
      Bn(e, [
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
  yo = Tn(`ObservableMap`, vo);
function bo(e) {
  return ((e[Symbol.toStringTag] = `MapIterator`), $o(e));
}
function xo(e) {
  if (En(e) || yo(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (xn(e)) {
    var t = new Map();
    for (var n in e) t.set(n, e[n]);
    return t;
  } else return N(21, e);
}
var So = {},
  Co = (function () {
    function e(e, t, n) {
      var r = this;
      (t === void 0 && (t = dr),
        n === void 0 && (n = `ObservableSet`),
        (this.name_ = void 0),
        (this[P] = So),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = n),
        vn(Set) || N(22),
        (this.enhancer_ = function (e, r) {
          return t(e, r, n);
        }),
        qo(function () {
          ((r.atom_ = ar(r.name_)), e && r.replace(e));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (e) {
        return this.dehancer === void 0 ? e : this.dehancer(e);
      }),
      (t.clear = function () {
        var e = this;
        Wa(function () {
          Mi(function () {
            for (var t = Vn(e.data_.values()), n; !(n = t()).done; ) {
              var r = n.value;
              e.delete(r);
            }
          });
        });
      }),
      (t.forEach = function (e, t) {
        for (var n = Vn(this), r; !(r = n()).done; ) {
          var i = r.value;
          e.call(t, i, i, this);
        }
      }),
      (t.add = function (e) {
        var t = this;
        if ((this.atom_, Ja(this))) {
          var n = Xa(this, { type: go, object: this, newValue: e });
          if (!n) return this;
          e = n.newValue;
        }
        if (!this.has(e)) {
          Wa(function () {
            (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
          });
          var r = !1,
            i = Za(this),
            a =
              i || r
                ? {
                    observableKind: `set`,
                    debugObjectName: this.name_,
                    type: go,
                    object: this,
                    newValue: e,
                  }
                : null;
          i && $a(this, a);
        }
        return this;
      }),
      (t.delete = function (e) {
        var t = this;
        if (Ja(this) && !Xa(this, { type: _o, object: this, oldValue: e })) return !1;
        if (this.has(e)) {
          var n = !1,
            r = Za(this),
            i =
              r || n
                ? {
                    observableKind: `set`,
                    debugObjectName: this.name_,
                    type: _o,
                    object: this,
                    oldValue: e,
                  }
                : null;
          return (
            Wa(function () {
              (t.atom_.reportChanged(), t.data_.delete(e));
            }),
            r && $a(this, i),
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
        return To({
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
        return To({
          next: function () {
            var n = t.next(),
              r = n.value,
              i = n.done;
            return i ? { value: void 0, done: i } : { value: e.dehanceValue_(r), done: i };
          },
        });
      }),
      (t.intersection = function (e) {
        return On(e) && !wo(e) ? e.intersection(this) : new Set(this).intersection(e);
      }),
      (t.union = function (e) {
        return On(e) && !wo(e) ? e.union(this) : new Set(this).union(e);
      }),
      (t.difference = function (e) {
        return new Set(this).difference(e);
      }),
      (t.symmetricDifference = function (e) {
        return On(e) && !wo(e) ? e.symmetricDifference(this) : new Set(this).symmetricDifference(e);
      }),
      (t.isSubsetOf = function (e) {
        return new Set(this).isSubsetOf(e);
      }),
      (t.isSupersetOf = function (e) {
        return new Set(this).isSupersetOf(e);
      }),
      (t.isDisjointFrom = function (e) {
        return On(e) && !wo(e) ? e.isDisjointFrom(this) : new Set(this).isDisjointFrom(e);
      }),
      (t.replace = function (e) {
        var t = this;
        return (
          wo(e) && (e = new Set(e)),
          Wa(function () {
            Array.isArray(e) || On(e)
              ? (t.clear(),
                e.forEach(function (e) {
                  return t.add(e);
                }))
              : e != null && N(`Cannot initialize set from ` + e);
          }),
          this
        );
      }),
      (t.observe_ = function (e, t) {
        return Qa(this, e);
      }),
      (t.intercept_ = function (e) {
        return Ya(this, e);
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
      Bn(e, [
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
  wo = Tn(`ObservableSet`, Co);
function To(e) {
  return ((e[Symbol.toStringTag] = `SetIterator`), $o(e));
}
var Eo = Object.create(null),
  Do = `remove`,
  Oo = (function () {
    function e(e, t, n, r) {
      (t === void 0 && (t = new Map()),
        r === void 0 && (r = Br),
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
        (this.keysAtom_ = new rr(`ObservableObject.keys`)),
        (this.isPlainObject_ = xn(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (e) {
        return this.values_.get(e).get();
      }),
      (t.setObservablePropValue_ = function (e, t) {
        var n = this.values_.get(e);
        if (n instanceof Ci) return (n.set(t), !0);
        if (Ja(this)) {
          var r = Xa(this, { type: no, object: this.proxy_ || this.target_, name: e, newValue: t });
          if (!r) return null;
          t = r.newValue;
        }
        if (((t = n.prepareNewValue_(t)), t !== L.UNCHANGED)) {
          var i = Za(this),
            a = i
              ? {
                  type: no,
                  observableKind: `object`,
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  oldValue: n.value_,
                  name: e,
                  newValue: t,
                }
              : null;
          (n.setNewValue_(t), i && $a(this, a));
        }
        return !0;
      }),
      (t.get_ = function (e) {
        return (L.trackingDerivation && !Nn(this.target_, e) && this.has_(e), this.target_[e]);
      }),
      (t.set_ = function (e, t, n) {
        return (
          n === void 0 && (n = !1),
          Nn(this.target_, e)
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
        if (!L.trackingDerivation) return e in this.target_;
        this.pendingKeys_ ||= new Map();
        var t = this.pendingKeys_.get(e);
        return (
          t ||
            ((t = new Si(e in this.target_, pr, `ObservableObject.key?`, !1)),
            this.pendingKeys_.set(e, t)),
          t.get()
        );
      }),
      (t.make_ = function (e, t) {
        if ((t === !0 && (t = this.defaultAnnotation_), t !== !1)) {
          if (!(e in this.target_)) {
            var n;
            if ((n = this.target_[Qn]) != null && n[e]) return;
            N(1, t.annotationType_, this.name_ + `.` + e.toString());
          }
          for (var r = this.target_; r && r !== un; ) {
            var i = cn(r, e);
            if (i) {
              var a = t.make_(this, e, i, r);
              if (a === 0) return;
              if (a === 1) break;
            }
            r = Object.getPrototypeOf(r);
          }
          No(this, t, e);
        }
      }),
      (t.extend_ = function (e, t, n, r) {
        if ((r === void 0 && (r = !1), n === !0 && (n = this.defaultAnnotation_), n === !1))
          return this.defineProperty_(e, t, r);
        var i = n.extend_(this, e, t, r);
        return (i && No(this, n, e), i);
      }),
      (t.defineProperty_ = function (e, t, n) {
        (n === void 0 && (n = !1), this.keysAtom_);
        try {
          Gi();
          var r = this.delete_(e);
          if (!r) return r;
          if (Ja(this)) {
            var i = Xa(this, {
              object: this.proxy_ || this.target_,
              name: e,
              type: go,
              newValue: t.value,
            });
            if (!i) return null;
            var a = i.newValue;
            t.value !== a && (t = Hn({}, t, { value: a }));
          }
          if (n) {
            if (!Reflect.defineProperty(this.target_, e, t)) return !1;
          } else ln(this.target_, e, t);
          this.notifyPropertyAddition_(e, t.value);
        } finally {
          Ki();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (e, t, n, r) {
        (r === void 0 && (r = !1), this.keysAtom_);
        try {
          Gi();
          var i = this.delete_(e);
          if (!i) return i;
          if (Ja(this)) {
            var a = Xa(this, {
              object: this.proxy_ || this.target_,
              name: e,
              type: go,
              newValue: t,
            });
            if (!a) return null;
            t = a.newValue;
          }
          var o = jo(e),
            s = {
              configurable: L.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: o.get,
              set: o.set,
            };
          if (r) {
            if (!Reflect.defineProperty(this.target_, e, s)) return !1;
          } else ln(this.target_, e, s);
          var c = new Si(t, n, `ObservableObject.key`, !1);
          (this.values_.set(e, c), this.notifyPropertyAddition_(e, c.value_));
        } finally {
          Ki();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (e, t, n) {
        (n === void 0 && (n = !1), this.keysAtom_);
        try {
          Gi();
          var r = this.delete_(e);
          if (!r) return r;
          if (
            Ja(this) &&
            !Xa(this, { object: this.proxy_ || this.target_, name: e, type: go, newValue: void 0 })
          )
            return null;
          ((t.name ||= `ObservableObject.key`), (t.context = this.proxy_ || this.target_));
          var i = jo(e),
            a = {
              configurable: L.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: i.get,
              set: i.set,
            };
          if (n) {
            if (!Reflect.defineProperty(this.target_, e, a)) return !1;
          } else ln(this.target_, e, a);
          (this.values_.set(e, new Ci(t)), this.notifyPropertyAddition_(e, void 0));
        } finally {
          Ki();
        }
        return !0;
      }),
      (t.delete_ = function (e, t) {
        if ((t === void 0 && (t = !1), this.keysAtom_, !Nn(this.target_, e))) return !0;
        if (Ja(this) && !Xa(this, { object: this.proxy_ || this.target_, name: e, type: Do }))
          return null;
        try {
          var n;
          Gi();
          var r = Za(this),
            i = !1,
            a = this.values_.get(e),
            o = void 0;
          if ((!a && (r || i) && (o = cn(this.target_, e)?.value), t)) {
            if (!Reflect.deleteProperty(this.target_, e)) return !1;
          } else delete this.target_[e];
          if (
            (a && (this.values_.delete(e), a instanceof Si && (o = a.value_), Ji(a)),
            this.keysAtom_.reportChanged(),
            (n = this.pendingKeys_) == null || (n = n.get(e)) == null || n.set(e in this.target_),
            r || i)
          ) {
            var s = {
              type: Do,
              observableKind: `object`,
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: o,
              name: e,
            };
            r && $a(this, s);
          }
        } finally {
          Ki();
        }
        return !0;
      }),
      (t.observe_ = function (e, t) {
        return Qa(this, e);
      }),
      (t.intercept_ = function (e) {
        return Ya(this, e);
      }),
      (t.notifyPropertyAddition_ = function (e, t) {
        var n,
          r = Za(this),
          i = !1;
        if (r || i) {
          var a =
            r || i
              ? {
                  type: go,
                  observableKind: `object`,
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: e,
                  newValue: t,
                }
              : null;
          r && $a(this, a);
        }
        ((n = this.pendingKeys_) == null || (n = n.get(e)) == null || n.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), jn(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function ko(e, t) {
  if (Nn(e, P)) return e;
  var n = t?.name ?? `ObservableObject`;
  return (Cn(e, P, new Oo(e, new Map(), String(n), ri(t))), e);
}
var Ao = Tn(`ObservableObjectAdministration`, Oo);
function jo(e) {
  return (
    Eo[e] ||
    (Eo[e] = {
      get: function () {
        return this[P].getObservablePropValue_(e);
      },
      set: function (t) {
        return this[P].setObservablePropValue_(e, t);
      },
    })
  );
}
function Mo(e) {
  return bn(e) ? Ao(e[P]) : !1;
}
function No(e, t, n) {
  var r;
  (r = e.target_[Qn]) == null || delete r[n];
}
var Po = Bo(0),
  Fo = (function () {
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
  Io = 0,
  Lo = function () {};
function Ro(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ === void 0
      ? (e.prototype = t)
      : (e.prototype.__proto__ = t);
}
Ro(Lo, Array.prototype);
var zo = (function (e) {
  function t(t, n, r, i) {
    var a;
    return (
      r === void 0 && (r = `ObservableArray`),
      i === void 0 && (i = !1),
      (a = e.call(this) || this),
      qo(function () {
        var e = new ao(r, n, i, !0);
        ((e.proxy_ = a),
          wn(a, P, e),
          t && t.length && a.spliceWithArray(0, 0, t),
          Fo && Object.defineProperty(a, `0`, Po));
      }),
      a
    );
  }
  Wn(t, e);
  var n = t.prototype;
  return (
    (n.concat = function () {
      this[P].atom_.reportObserved();
      var e = [...arguments];
      return Array.prototype.concat.apply(
        this.slice(),
        e.map(function (e) {
          return mo(e) ? e.slice() : e;
        }),
      );
    }),
    (n[Symbol.iterator] = function () {
      var e = this,
        t = 0;
      return $o({
        next: function () {
          return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    Bn(t, [
      {
        key: `length`,
        get: function () {
          return this[P].getArrayLength_();
        },
        set: function (e) {
          this[P].setArrayLength_(e);
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
})(Lo);
Object.entries(so).forEach(function (e) {
  var t = e[0],
    n = e[1];
  t !== `concat` && Cn(zo.prototype, t, n);
});
function Bo(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[P].get_(e);
    },
    set: function (t) {
      this[P].set_(e, t);
    },
  };
}
function Vo(e) {
  ln(zo.prototype, `` + e, Bo(e));
}
function Ho(e) {
  if (e > Io) {
    for (var t = Io; t < e + 100; t++) Vo(t);
    Io = e;
  }
}
Ho(1e3);
function Uo(e, t, n) {
  return new zo(e, t, n);
}
function Wo(e, t) {
  if (typeof e == `object` && e) {
    if (mo(e)) return (t !== void 0 && N(23), e[P].atom_);
    if (wo(e)) return e.atom_;
    if (yo(e)) {
      if (t === void 0) return e.keysAtom_;
      var n = e.data_.get(t) || e.hasMap_.get(t);
      return (n || N(25, t, Ko(e)), n);
    }
    if (Mo(e)) {
      if (!t) return N(26);
      var r = e[P].values_.get(t);
      return (r || N(27, t, Ko(e)), r);
    }
    if (ir(e) || wi(e) || na(e)) return e;
  } else if (vn(e) && na(e[P])) return e[P];
  N(28);
}
function Go(e, t) {
  if ((e || N(29), t !== void 0)) return Go(Wo(e, t));
  if (ir(e) || wi(e) || na(e) || yo(e) || wo(e)) return e;
  if (e[P]) return e[P];
  N(24, e);
}
function Ko(e, t) {
  var n;
  if (t !== void 0) n = Wo(e, t);
  else if (va(e)) return e.name;
  else n = Mo(e) || yo(e) || wo(e) ? Go(e) : Wo(e);
  return n.name_;
}
function qo(e) {
  var t = Ni(),
    n = bi(!0);
  Gi();
  try {
    return e();
  } finally {
    (Ki(), xi(n), Pi(t));
  }
}
var Jo = un.toString;
function Yo(e, t, n) {
  return (n === void 0 && (n = -1), Xo(e, t, n));
}
function Xo(e, t, n, r, i) {
  if (e === t) return e !== 0 || 1 / e == 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var a = typeof e;
  if (a !== `function` && a !== `object` && typeof t != `object`) return !1;
  var o = Jo.call(e);
  if (o !== Jo.call(t)) return !1;
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
  ((e = Zo(e)), (t = Zo(t)));
  var s = o === `[object Array]`;
  if (!s) {
    if (typeof e != `object` || typeof t != `object`) return !1;
    var c = e.constructor,
      l = t.constructor;
    if (
      c !== l &&
      !(vn(c) && c instanceof c && vn(l) && l instanceof l) &&
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
    for (; u--; ) if (!Xo(e[u], t[u], n - 1, r, i)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var m = d[p];
      if (!(Nn(t, m) && Xo(e[m], t[m], n - 1, r, i))) return !1;
    }
  }
  return (r.pop(), i.pop(), !0);
}
function Zo(e) {
  return mo(e) ? e.slice() : En(e) || yo(e) || On(e) || wo(e) ? Array.from(e.entries()) : e;
}
var Qo = on().Iterator?.prototype || {};
function $o(e) {
  return ((e[Symbol.iterator] = es), Object.assign(Object.create(Qo), e));
}
function es() {
  return this;
}
if (
  ([`Symbol`, `Map`, `Set`].forEach(function (e) {
    on()[e] === void 0 && N(`MobX requires global '` + e + `' to be available or polyfilled`);
  }),
  typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == `object` &&
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: aa, extras: { getDebugName: Ko }, $mobx: P }),
  !u.useState)
)
  throw Error(`mobx-react-lite requires React with Hooks support`);
if (!eo) throw Error(`mobx-react-lite@3 requires mobx at least version 6 to be available`);
var ts = e(a());
function ns(e) {
  e();
}
function rs(e) {
  ((e ||= ns), Aa({ reactionScheduler: e }));
}
function is(e) {
  return Ma(e);
}
var as = !1;
function os() {
  return as;
}
var ss = 1e4,
  cs = 1e4,
  ls = (function () {
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
            (e === void 0 && (e = ss), clearTimeout(t.sweepTimeout), (t.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, cs));
        },
      }),
      e
    );
  })(),
  us = new (typeof FinalizationRegistry < `u` ? FinalizationRegistry : ls)(function (e) {
    var t;
    ((t = e.reaction) == null || t.dispose(), (e.reaction = null));
  }),
  ds = i((e) => {
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
  fs = i((e, t) => {
    t.exports = ds();
  })();
function ps(e) {
  e.reaction = new Zi(`observer${e.name}`, function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) == null || t.call(e));
  });
}
function ms(e, t) {
  if ((t === void 0 && (t = `observed`), os())) return e();
  var n = u.useRef(null);
  if (!n.current) {
    var r = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (e) {
        return (
          us.unregister(r),
          (r.onStoreChange = e),
          r.reaction || (ps(r), (r.stateVersion = Symbol())),
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
  (i.reaction || (ps(i), us.register(n, i, i)),
    u.useDebugValue(i.reaction, is),
    (0, fs.useSyncExternalStore)(i.subscribe, i.getSnapshot, i.getSnapshot));
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
var hs = typeof Symbol == `function` && Symbol.for,
  gs = Object.getOwnPropertyDescriptor(function () {}, `name`)?.configurable ?? !1,
  _s = hs
    ? Symbol.for(`react.forward_ref`)
    : typeof u.forwardRef == `function` &&
      (0, u.forwardRef)(function (e) {
        return null;
      }).$$typeof,
  vs = hs
    ? Symbol.for(`react.memo`)
    : typeof u.memo == `function` &&
      (0, u.memo)(function (e) {
        return null;
      }).$$typeof;
function ys(e, t) {
  if (vs && e.$$typeof === vs)
    throw Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (os()) return e;
  var n = t?.forwardRef ?? !1,
    r = e,
    i = e.displayName || e.name;
  if (_s && e.$$typeof === _s && ((n = !0), (r = e.render), typeof r != `function`))
    throw Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var a = function (e, t) {
    return ms(function () {
      return r(e, t);
    }, i);
  };
  return (
    (a.displayName = e.displayName),
    gs && Object.defineProperty(a, `name`, { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (a.contextTypes = e.contextTypes),
    n && (a = (0, u.forwardRef)(a)),
    (a = (0, u.memo)(a)),
    xs(e, a),
    a
  );
}
var bs = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function xs(e, t) {
  Object.keys(e).forEach(function (n) {
    bs[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  });
}
function Ss(e) {
  var t = e.children,
    n = e.render;
  t &&
    n &&
    console.error("MobX Observer: Do not use children and render in the same time in `Observer`");
  var r = t || n;
  return typeof r == `function` ? ms(r) : null;
}
((Ss.displayName = `Observer`), rs(ts.unstable_batchedUpdates), us.finalizeAllImmediately);
function Cs(e, t) {
  if (ws(e, t)) return !0;
  if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (var i = 0; i < n.length; i++)
    if (!Object.hasOwnProperty.call(t, n[i]) || !ws(e[n[i]], t[n[i]])) return !1;
  return !0;
}
function ws(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var Ts = Symbol(`patchMixins`),
  Es = Symbol(`patchedDefinition`);
function Ds(e, t) {
  var n = (e[Ts] = e[Ts] || {}),
    r = (n[t] = n[t] || {});
  return ((r.locks = r.locks || 0), (r.methods = r.methods || []), r);
}
function Os(e, t) {
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
function ks(e, t) {
  return function () {
    var n = [...arguments];
    Os.call.apply(Os, [this, e, t].concat(n));
  };
}
function As(e, t, n) {
  var r = Ds(e, t);
  r.methods.indexOf(n) < 0 && r.methods.push(n);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (!(i && i[Es])) {
    var a = e[t],
      o = js(e, t, i ? i.enumerable : void 0, r, a);
    Object.defineProperty(e, t, o);
  }
}
function js(e, t, n, r, i) {
  var a,
    o = ks(i, r);
  return (
    (a = {}),
    (a[Es] = !0),
    (a.get = function () {
      return o;
    }),
    (a.set = function (i) {
      if (this === e) o = ks(i, r);
      else {
        var a = js(this, t, n, r, i);
        Object.defineProperty(this, t, a);
      }
    }),
    (a.configurable = !0),
    (a.enumerable = n),
    a
  );
}
var Ms = Symbol(`ObserverAdministration`),
  Ns = Symbol(`isMobXReactObserver`);
function Ps(e) {
  return (
    e[Ms] ??
    (e[Ms] = {
      reaction: null,
      mounted: !1,
      reactionInvalidatedBeforeMount: !1,
      forceUpdate: null,
      name: Is(e.constructor),
      state: void 0,
      props: void 0,
      context: void 0,
    })
  );
}
function Fs(e) {
  var t = e.prototype;
  if (e[Ns]) {
    var n = Is(e);
    throw Error(
      `The provided component class (` +
        n +
        `) has already been declared as an observer component.`,
    );
  } else e[Ns] = !0;
  if (t.componentWillReact)
    throw Error(`The componentWillReact life-cycle event is no longer supported`);
  if (e.__proto__ !== u.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = zs;
    else if (t.shouldComponentUpdate !== zs)
      throw Error(`It is not allowed to use shouldComponentUpdate in observer based components.`);
  }
  var r = t.render;
  if (typeof r != `function`) {
    var i = Is(e);
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
        value: os() ? r : Ls.call(this, r),
      }),
      this.render()
    );
  };
  var a = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var e = this,
        t = Ps(this);
      return (
        (t.mounted = !0),
        us.unregister(this),
        (t.forceUpdate = function () {
          return e.forceUpdate();
        }),
        (!t.reaction || t.reactionInvalidatedBeforeMount) && t.forceUpdate(),
        a?.apply(this, arguments)
      );
    }),
    As(t, `componentWillUnmount`, function () {
      var e;
      if (!os()) {
        var t = Ps(this);
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
function Is(e) {
  return e.displayName || e.name || `<component>`;
}
function Ls(e) {
  var t = e.bind(this),
    n = Ps(this);
  function r() {
    n.reaction || ((n.reaction = Rs(n)), n.mounted || us.register(this, n, this));
    var e = void 0,
      r = void 0;
    if (
      (n.reaction.track(function () {
        try {
          r = yi(!1, t);
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
function Rs(e) {
  return new Zi(e.name + `.render()`, function () {
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
function zs(e, t) {
  return (
    os() &&
      console.warn(
        `[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.`,
      ),
    this.state === t ? !Cs(this.props, e) : !0
  );
}
function Bs(e, t) {
  if (t && t.kind !== `class`) throw Error(`The @observer decorator can be used on classes only`);
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(u.Component, e) ||
    Object.prototype.isPrototypeOf.call(u.PureComponent, e)
      ? Fs(e)
      : ys(e)
  );
}
function Vs() {
  return (
    (Vs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vs.apply(null, arguments)
  );
}
function Hs(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var Us = [`children`],
  Ws = u.createContext({});
function Gs(e) {
  var t = e.children,
    n = Hs(e, Us),
    r = u.useContext(Ws),
    i = u.useRef(Vs({}, r, n)).current;
  return u.createElement(Ws.Provider, { value: i }, t);
}
if (((Gs.displayName = `MobXProvider`), `18.3.1`.split(`.`)[0], !u.Component))
  throw Error(`mobx-react requires React to be available`);
if (!F) throw Error(`mobx-react requires mobx to be available`);
function Ks(e, t, n, r) {
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
var qs = `Loading ...`,
  Js = class {
    constructor() {
      ((this.state = `ROOT`),
        (this.isLoading = !0),
        (this.message = qs),
        (this.testNonVersioningData = ``),
        (this.testNumberVersioningData = ``),
        (this.testDateVersioningData = ``),
        (this.testTimestampVersioningData = ``),
        eo(this));
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
      ((this.isLoading = !0), (this.message = e ?? qs));
    }
    stopLoading() {
      ((this.isLoading = !1), (this.message = qs));
    }
  };
(Ks([F], Js.prototype, `state`, void 0),
  Ks([F], Js.prototype, `isLoading`, void 0),
  Ks([F], Js.prototype, `message`, void 0),
  Ks([F], Js.prototype, `testData`, void 0),
  Ks([F], Js.prototype, `testDataOptimisticNumber`, void 0),
  Ks([F], Js.prototype, `testDataOptimisticDateId`, void 0),
  Ks([F], Js.prototype, `testDataOptimisticTimeStampId`, void 0),
  Ks([F], Js.prototype, `testNonVersioningData`, void 0),
  Ks([F], Js.prototype, `testNumberVersioningData`, void 0),
  Ks([F], Js.prototype, `testDateVersioningData`, void 0),
  Ks([F], Js.prototype, `testTimestampVersioningData`, void 0),
  Ks([ga.bound], Js.prototype, `saveState`, null),
  Ks([ga.bound], Js.prototype, `saveResponse`, null),
  Ks([ga.bound], Js.prototype, `saveUpdateResponse`, null),
  Ks([ga.bound], Js.prototype, `clearStates`, null),
  Ks([ga], Js.prototype, `loading`, null),
  Ks([ga], Js.prototype, `stopLoading`, null));
var Ys = new Js(),
  Xs = new (class {
    constructor() {
      this.stateStore = Ys;
    }
  })(),
  Zs = (0, u.createContext)(Xs),
  Qs = () => (0, u.useContext)(Zs);
function R(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function $s(e) {
  "@babel/helpers - typeof";
  return (
    ($s =
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
    $s(e)
  );
}
function ec(e, t) {
  if ($s(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if ($s(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function tc(e) {
  var t = ec(e, `string`);
  return $s(t) == `symbol` ? t : t + ``;
}
function nc(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, tc(r.key), r));
  }
}
function rc(e, t, n) {
  return (
    t && nc(e.prototype, t),
    n && nc(e, n),
    Object.defineProperty(e, `prototype`, { writable: !1 }),
    e
  );
}
function ic(e) {
  if (e === void 0)
    throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
  return e;
}
function ac(e, t) {
  if (t && ($s(t) == `object` || typeof t == `function`)) return t;
  if (t !== void 0) throw TypeError(`Derived constructors may only return object or undefined`);
  return ic(e);
}
function z(e) {
  return (
    (z = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    z(e)
  );
}
function oc(e, t) {
  return (
    (oc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    oc(e, t)
  );
}
function sc(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, `prototype`, { writable: !1 }),
    t && oc(e, t));
}
function B(e, t, n) {
  return (
    (t = tc(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function cc() {}
function lc(e) {
  if (Array.isArray(e)) return e;
}
function uc(e, t) {
  var n = e == null ? null : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o)) return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function dc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function fc(e, t) {
  if (e) {
    if (typeof e == `string`) return dc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? dc(e, t)
          : void 0
    );
  }
}
function pc() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function V(e, t) {
  return lc(e) || uc(e, t) || fc(e, t) || pc();
}
var mc = function (e, t, n) {
    return e + (n && isFinite(n) ? (t - 1) * n : 0);
  },
  hc = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      r = arguments.length > 3 ? arguments[3] : void 0,
      i = e.destination,
      a = e.sourceIndex;
    if (!i) return t;
    var o = mc(a, n, r),
      s = mc(i.index, n, r),
      c = t.slice(),
      l = V(c.splice(o, 1), 1)[0];
    return (c.splice(s, 0, l), c);
  };
function H() {
  return (
    (H = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    H.apply(null, arguments)
  );
}
function gc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function U(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = gc(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function _c(e, t) {
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
function vc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? _c(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : _c(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var yc = (function () {
  function e(t) {
    var n = this;
    (R(this, e),
      B(this, `_isAnalyticsEvent`, !0),
      B(this, `clone`, function () {
        return new e({ payload: vc({}, n.payload) });
      }),
      (this.payload = t.payload));
  }
  return rc(e, [
    {
      key: `update`,
      value: function (e) {
        return (
          typeof e == `function` && (this.payload = e(this.payload)),
          $s(e) === `object` && (this.payload = vc(vc({}, this.payload), e)),
          this
        );
      },
    },
  ]);
})();
function bc(e) {
  if (Array.isArray(e)) return dc(e);
}
function xc(e) {
  if ((typeof Symbol < `u` && e[Symbol.iterator] != null) || e[`@@iterator`] != null)
    return Array.from(e);
}
function Sc() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cc(e) {
  return bc(e) || xc(e) || fc(e) || Sc();
}
function wc(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = z(e)) !== null; );
  return e;
}
function Tc() {
  return (
    (Tc =
      typeof Reflect < `u` && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, n) {
            var r = wc(e, t);
            if (r) {
              var i = Object.getOwnPropertyDescriptor(r, t);
              return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value;
            }
          }),
    Tc.apply(null, arguments)
  );
}
function Ec(e, t, n) {
  return (
    (t = z(t)),
    ac(e, Dc() ? Reflect.construct(t, n || [], z(e).constructor) : t.apply(e, n))
  );
}
function Dc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Dc = function () {
    return !!e;
  })();
}
function Oc(e, t, n, r) {
  var i = Tc(z(1 & r ? e.prototype : e), t, n);
  return 2 & r && typeof i == `function`
    ? function (e) {
        return i.apply(n, e);
      }
    : i;
}
var kc = (function (e) {
  function t(e) {
    var n;
    return (
      R(this, t),
      (n = Ec(this, t, [e])),
      B(n, `_isUIAnalyticsEvent`, !0),
      B(n, `clone`, function () {
        return n.hasFired
          ? null
          : new t({
              context: Cc(n.context),
              handlers: Cc(n.handlers),
              payload: JSON.parse(JSON.stringify(n.payload)),
            });
      }),
      B(n, `fire`, function (e) {
        n.hasFired ||
          (n.handlers.forEach(function (t) {
            try {
              t(n, e);
            } catch {}
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
    sc(t, e),
    rc(t, [
      {
        key: `update`,
        value: function (e) {
          return this.hasFired ? this : Oc(t, `update`, this, 3)([e]);
        },
      },
    ])
  );
})(yc);
function Ac(e, t, n, r, i, a, o) {
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
        Ac(a, r, i, o, s, `next`, e);
      }
      function s(e) {
        Ac(a, r, i, o, s, `throw`, e);
      }
      o(void 0);
    });
  };
}
var jc = i((e, t) => {
    function n(e, t) {
      ((this.v = e), (this.k = t));
    }
    ((t.exports = n), (t.exports.__esModule = !0), (t.exports.default = t.exports));
  }),
  Mc = i((e, t) => {
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
  Nc = i((e, t) => {
    var n = Mc();
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
  Pc = i((e, t) => {
    var n = jc(),
      r = Mc();
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
  Fc = i((e, t) => {
    var n = Nc(),
      r = Pc();
    function i(e, t, i, a, o) {
      return new r(n().w(e, t, i, a), o || Promise);
    }
    ((t.exports = i), (t.exports.__esModule = !0), (t.exports.default = t.exports));
  }),
  Ic = i((e, t) => {
    var n = Fc();
    function r(e, t, r, i, a) {
      var o = n(e, t, r, i, a);
      return o.next().then(function (e) {
        return e.done ? e.value : o.next();
      });
    }
    ((t.exports = r), (t.exports.__esModule = !0), (t.exports.default = t.exports));
  }),
  Lc = i((e, t) => {
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
  Rc = i((e, t) => {
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
  zc = i((e, t) => {
    var n = Rc().default;
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
  Bc = i((e, t) => {
    var n = jc(),
      r = Nc(),
      i = Ic(),
      a = Fc(),
      o = Pc(),
      s = Lc(),
      c = zc();
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
  Vc = i((e, t) => {
    var n = Bc()();
    t.exports = n;
    try {
      regeneratorRuntime = n;
    } catch {
      typeof globalThis == `object`
        ? (globalThis.regeneratorRuntime = n)
        : Function(`r`, `regeneratorRuntime = r`)(n);
    }
  }),
  Hc = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.V1InitializeContainer = void 0));
    var t = l();
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
  Uc = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.V2InitializeContainer = void 0));
    var t = l();
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
  Wc = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var t = l(),
      n = Hc(),
      r = Uc();
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
  Gc = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e._resolveDeltasResponse = void 0));
    var t = l(),
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
  Kc = i((e) => {
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
    var n = l(),
      r = Gc();
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
  qc = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e._makeParamStoreGetter = void 0));
    var t = l(),
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
    function u(e, t, a, o) {
      let s = e.getLayer(t.layer_name, r(o) ? void 0 : n).get(t.param_name);
      return i(s, a) ? a : s;
    }
    function d(e, n, r) {
      return (i, l) => {
        if (n == null) return l;
        let d = n[i];
        if (d == null || (l != null && (0, t._typeOf)(l) !== d.param_type)) return l;
        switch (d.ref_type) {
          case `static`:
            return a(d, r);
          case `gate`:
            return o(e, d, r);
          case `dynamic_config`:
            return s(e, d, l, r);
          case `experiment`:
            return c(e, d, l, r);
          case `layer`:
            return u(e, d, l, r);
          default:
            return l;
        }
      };
    }
    e._makeParamStoreGetter = d;
  }),
  Jc = i((e) => {
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
    var n = l(),
      r = Kc();
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
  Yc = i((e) => {
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
    var n = l(),
      r = Wc(),
      i = Kc(),
      a = qc(),
      o = Jc();
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
  Xc = i((e) => {
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
    var r = l(),
      i = Yc();
    ((e.StatsigClient = i.default),
      n(l(), e),
      (e.default = Object.assign((0, r._getStatsigGlobal)(), { StatsigClient: i.default })));
  }),
  Zc = e(
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
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Qc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var el = `@all-features`,
  tl = (function () {
    function e() {
      (R(this, e), B(this, `eventToValue`, new Map()), (this.emitter = new Zc.default()));
    }
    return rc(e, [
      {
        key: `onGateUpdated`,
        value: function (e, t, n, r) {
          var i = this,
            a = n(e, $c($c({}, r), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(t) === void 0 && this.eventToValue.set(t, a);
          var o = function () {
            var a = n(e, $c($c({}, r), {}, { fireGateExposure: !1 }));
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
            c = i(e, t, n, $c($c({}, a), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(r) === void 0 && this.eventToValue.set(r, c);
          var l = function () {
            var s = i(e, t, n, $c($c({}, a), {}, { fireExperimentExposure: !1 }));
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
            this.emitter.on(el, e),
            function () {
              t.emitter.off(el, e);
            }
          );
        },
      },
      {
        key: `anyUpdated`,
        value: function () {
          var e = this;
          (this.emitter.emit(el),
            this.emitter
              .eventNames()
              .filter(function (e) {
                return e !== el;
              })
              .forEach(function (t) {
                e.emitter.emit(t);
              }));
        },
      },
    ]);
  })(),
  nl = `fedramp-moderate`;
function rl() {
  var e,
    t = globalThis,
    n = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (n) return n === nl;
  var r =
    (e = t.location) == null || (e = e.hostname) == null
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return r ? r.length > 0 : !1;
}
var il = {
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
  al = { Development: `development`, Staging: `staging`, Production: `production` },
  ol = { COMMERCIAL: `commercial`, FEDRAMP_MODERATE: `fedramp-moderate` },
  sl = [
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
function cl(e, t) {
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
function ll(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? cl(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : cl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var ul = function (e) {
    return ll({ perimeter: rl() ? ol.FEDRAMP_MODERATE : ol.COMMERCIAL }, e);
  },
  dl = function (e, t) {
    if (!e && !t) return !0;
    if (!e || !t) return !1;
    var n = Object.entries(e),
      r = Object.entries(t);
    if (n.length !== r.length) return !1;
    var i = function (e, t) {
      var n = V(e, 1)[0],
        r = V(t, 1)[0];
      return n.localeCompare(r);
    };
    (n.sort(i), r.sort(i));
    for (var a = 0; a < n.length; a++) if (V(n[a], 2)[1] !== V(r[a], 2)[1]) return !1;
    return !0;
  },
  fl = function (e, t) {
    var n = { customIDs: e, custom: t };
    return (e.atlassianAccountId && (n.userID = e.atlassianAccountId), n);
  };
function pl(e) {
  var t = [...arguments].slice(1);
  if (!t.length) return e;
  var n = t.shift();
  if (n == null) return pl.apply(void 0, [e].concat(Cc(t)));
  for (var r = 0, i = Object.entries(n); r < i.length; r++) {
    var a = V(i[r], 2),
      o = a[0],
      s = a[1],
      c = e[o],
      l = s && $s(s) === `object` && !Array.isArray(s),
      u = c && $s(c) === `object` && !Array.isArray(c);
    l && u ? (e[o] = pl(c, s)) : (e[o] = s);
  }
  return pl.apply(void 0, [e].concat(Cc(t)));
}
var ml = function (e) {
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
      ll(
        ll({}, U(e, sl)),
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
  hl = Object.entries(il).map(function (e) {
    var t = V(e, 2),
      n = t[0],
      r = t[1];
    return [n.toLowerCase(), r];
  }),
  gl = function (e) {
    var t = e.reason.toLowerCase();
    return {
      reason:
        hl.find(function (e) {
          var n = V(e, 1)[0];
          return t.includes(n);
        })?.[1] ?? il.Unknown,
      time: e.receivedAt ?? Date.now(),
    };
  },
  _l = function (e) {
    return e.map(function (e) {
      return typeof e == `string` ? { gate: e } : e;
    });
  },
  vl = (function () {
    function e(t, n, r, i) {
      var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : ``,
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (R(this, e),
        (this.value = n),
        (this._name = t),
        (this._ruleID = r),
        (this._secondaryExposures = a),
        (this._allocatedExperimentName = o),
        (this._evaluationDetails = i),
        (this._onDefaultValueFallback = s));
    }
    return rc(
      e,
      [
        {
          key: `get`,
          value: function (e, t, n) {
            var r,
              i = this.getValue(e, t);
            if (i == null) return t;
            var a = Array.isArray(t) ? `array` : $s(t),
              o = Array.isArray(i) ? `array` : $s(i);
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
              gl(t.details),
              _l(t.__evaluation?.secondary_exposures ?? []),
              t.groupName ?? void 0,
            );
            return ((n.experiment = t), n);
          },
        },
      ],
    );
  })(),
  yl = (function () {
    function e(t, n, r, i) {
      var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : ``,
        l = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (R(this, e),
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
    return rc(
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
              : t == null || ($s(i) === $s(t) && Array.isArray(t) === Array.isArray(i))
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
              gl(t.details),
              function (e, n) {
                return t.get(n);
              },
              _l(t.__evaluation?.secondary_exposures ?? []),
              _l(t.__evaluation?.undelegated_secondary_exposures ?? []),
              t.__evaluation?.allocated_experiment_name,
              t.__evaluation?.explicit_parameters,
            );
          },
        },
      ],
    );
  })(),
  bl = `0.0.0-development`;
function xl(e) {
  try {
    return Function.toString.call(e).indexOf(`[native code]`) !== -1;
  } catch {
    return typeof e == `function`;
  }
}
function Sl() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Sl = function () {
    return !!e;
  })();
}
function Cl(e, t, n) {
  if (Sl()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var i = new (e.bind.apply(e, r))();
  return (n && oc(i, n.prototype), i);
}
function wl(e) {
  var t = typeof Map == `function` ? new Map() : void 0;
  return (
    (wl = function (e) {
      if (e === null || !xl(e)) return e;
      if (typeof e != `function`)
        throw TypeError(`Super expression must either be null or a function`);
      if (t !== void 0) {
        if (t.has(e)) return t.get(e);
        t.set(e, n);
      }
      function n() {
        return Cl(e, arguments, z(this).constructor);
      }
      return (
        (n.prototype = Object.create(e.prototype, {
          constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
        })),
        oc(n, e)
      );
    }),
    wl(e)
  );
}
function Tl(e, t, n) {
  return (
    (t = z(t)),
    ac(e, El() ? Reflect.construct(t, n || [], z(e).constructor) : t.apply(e, n))
  );
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
    function t(e) {
      return (R(this, t), Tl(this, t, [e]));
    }
    return (sc(t, e), rc(t));
  })(wl(Error)),
  G = e(Vc());
function Ol(e, t) {
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
function kl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ol(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ol(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Al = 5e3,
  jl = `https://api.atlassian.com/flags`,
  Ml = `https://api.stg.atlassian.com/flags`,
  Nl = `https://api.dev.atlassian.com/flags`,
  Pl = `https://api.stg.atlassian-us-gov-mod.com/flags`,
  Fl = `https://api.atlassian-us-gov-mod.com/flags`,
  Il = `https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net`,
  Ll = `oasis-stg.com/flags`,
  Rl = `atlassian-isolated.net/flags`,
  zl = `/gateway/api/flags`,
  Bl = (function () {
    function e() {
      R(this, e);
    }
    return rc(e, null, [
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
                        new Dl(
                          `Non 2xx response status received, status: ${t.status}, body: ${JSON.stringify(n)}`,
                        )
                      );
                    case 5:
                      if (t.status !== 204) {
                        e.next = 7;
                        break;
                      }
                      throw new Dl(`Unexpected 204 response`);
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
          if (t) return zl;
          if (n === ol.FEDRAMP_MODERATE)
            switch (e) {
              case al.Production:
                return Fl;
              case al.Staging:
                return Pl;
              default:
                throw Error(`Invalid environment "${e}" for "${n}" perimeter`);
            }
          else if (n === ol.COMMERCIAL)
            switch (e) {
              case al.Development:
                return Nl;
              case al.Staging:
                var i = this.getApiUrl(r);
                return i === null ? Ml : i;
              default:
                var a = this.getApiUrl(r);
                return a === null ? jl : a;
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
                          (s = i.fetchTimeoutMs || Al),
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
                            kl(
                              {
                                method: r,
                                headers: {
                                  "Content-Type": `application/json`,
                                  "X-Client-Name": `feature-gate-js-client`,
                                  "X-Client-Version": bl,
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
          if (t === void 0) return e ? Il.replace(`%s`, e) : null;
          var n = t.protocol,
            r = t.hostname,
            i = r.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return `${n}//api.${i[1]}.${Ll}`;
          var a = r.match(/([^.]+)\.atlassian-isolated\.net$/);
          return a ? `${n}//api.${a[1]}.${Rl}` : null;
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
  Vl = Xc();
function Hl(e, t) {
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
function Ul(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Hl(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Hl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Wl(e, t, n) {
  return (
    (t = z(t)),
    ac(e, Gl() ? Reflect.construct(t, n || [], z(e).constructor) : t.apply(e, n))
  );
}
function Gl() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Gl = function () {
    return !!e;
  })();
}
function Kl(e, t, n, r) {
  var i = Tc(z(1 & r ? e.prototype : e), t, n);
  return 2 & r && typeof i == `function`
    ? function (e) {
        return i.apply(n, e);
      }
    : i;
}
var ql = (function (e) {
    function t() {
      var e;
      return (
        R(this, t),
        (e = Wl(this, t, [`NoFetchDataAdapter`, `nofetch`])),
        B(e, `bootstrapResult`, null),
        e
      );
    }
    return (
      sc(t, e),
      rc(t, [
        {
          key: `setBootstrapData`,
          value: function (e) {
            this.bootstrapResult = e
              ? {
                  source: `Bootstrap`,
                  data: JSON.stringify(e),
                  receivedAt: Date.now(),
                  stableID: Vl.StableID.get(this._getSdkKey()),
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
                              Ul(
                                Ul({}, this.bootstrapResult),
                                {},
                                { fullUserHash: (0, Vl._getFullUserHash)(n) },
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
              Ul(Ul({}, this.bootstrapResult), {}, { fullUserHash: (0, Vl._getFullUserHash)(e) })
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
            var t = (0, Vl._getStorageKey)(this._getSdkKey(), e);
            return `${Vl.DataAdapterCachePrefix}.${this._cacheSuffix}.${t}`;
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
            Kl(t, `setData`, this, 3)([e, n]);
          },
        },
        {
          key: `toJSON`,
          value: function () {
            var e = Ul({}, this);
            return (delete e._options, delete e._inMemoryCache, delete e.bootstrapResult, e);
          },
        },
      ])
    );
  })(Vl.DataAdapterCore),
  Jl = l();
function Yl(e, t) {
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
function Xl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Yl(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Yl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Zl(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = Ql(e)) || (t && e && typeof e.length == `number`)) {
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
function Ql(e, t) {
  if (e) {
    if (typeof e == `string`) return $l(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? $l(e, t)
          : void 0
    );
  }
}
function $l(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var eu = `LocalOverride:Recognized`,
  tu = `STATSIG_OVERRIDES`,
  nu = `STATSIG_JS_LITE_LOCAL_OVERRIDES`,
  ru = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  iu = function (e, t) {
    return t + `:` + e;
  },
  au = (function () {
    function e(t) {
      (R(this, e),
        (this._overrides = ru()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return rc(e, [
      {
        key: `parseStoredOverrides`,
        value: function (e) {
          try {
            var t = window.localStorage.getItem(e);
            return t ? JSON.parse(t) : ru();
          } catch {
            return ru();
          }
        },
      },
      {
        key: `mergeOverrides`,
        value: function () {
          for (var e = ru(), t = [...arguments], n = 0, r = t; n < r.length; n++) {
            for (var i = r[n], a = 0, o = Object.entries((s = i.gates) ?? {}); a < o.length; a++) {
              var s,
                c = V(o[a], 2),
                l = c[0],
                u = c[1];
              e.gates[l] = u;
            }
            for (var d = 0, f = Object.entries((p = i.configs) ?? {}); d < f.length; d++) {
              var p,
                m = V(f[d], 2),
                h = m[0],
                g = m[1];
              e.configs[h] = g;
            }
            for (var _ = 0, v = Object.entries((y = i.layers) ?? {}); _ < v.length; _++) {
              var y,
                b = V(v[_], 2),
                x = b[0],
                S = b[1];
              e.layers[x] = S;
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
            this.parseStoredOverrides(nu),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(nu);
          } catch {}
          for (var t = 0, n = Object.values(e); t < n.length; t++) {
            var r = n[t],
              i = new Set(Object.keys(r)),
              a = Zl(i),
              o;
            try {
              for (a.s(); !(o = a.n()).done; ) {
                var s = o.value,
                  c = (0, Jl._DJB2)(s);
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
          var t = Xl(Xl({}, ru()), e);
          this._djb2Map.clear();
          for (var n = 0, r = Object.entries(t); n < r.length; n++)
            for (
              var i = V(r[n], 2), a = i[0], o = i[1], s = 0, c = Object.entries(o);
              s < c.length;
              s++
            ) {
              var l = V(c[s], 2),
                u = l[0],
                d = l[1];
              this._djb2Map.set(iu((0, Jl._DJB2)(u), a), d);
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
            this._djb2Map.set(iu((0, Jl._DJB2)(e), `gates`), t),
            this.saveOverrides());
        },
      },
      {
        key: `removeGateOverride`,
        value: function (e) {
          (delete this._overrides.gates[e],
            this._djb2Map.delete(iu((0, Jl._DJB2)(e), `gates`)),
            this.saveOverrides());
        },
      },
      {
        key: `getGateOverride`,
        value: function (e, t) {
          var n = this._overrides.gates[e.name] ?? this._djb2Map.get(iu(e.name, `gates`));
          return n == null
            ? null
            : Xl(Xl({}, e), {}, { value: n, details: Xl(Xl({}, e.details), {}, { reason: eu }) });
        },
      },
      {
        key: `overrideDynamicConfig`,
        value: function (e, t) {
          ((this._overrides.configs[e] = t),
            this._djb2Map.set(iu((0, Jl._DJB2)(e), `configs`), t),
            this.saveOverrides());
        },
      },
      {
        key: `removeDynamicConfigOverride`,
        value: function (e) {
          (delete this._overrides.configs[e],
            this._djb2Map.delete(iu((0, Jl._DJB2)(e), `configs`)),
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
            this._djb2Map.set(iu((0, Jl._DJB2)(e), `configs`), t),
            this.saveOverrides());
        },
      },
      {
        key: `removeExperimentOverride`,
        value: function (e) {
          (delete this._overrides.configs[e],
            this._djb2Map.delete(iu((0, Jl._DJB2)(e), `configs`)),
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
            this._djb2Map.set(iu((0, Jl._DJB2)(e), `layers`), t),
            this.saveOverrides());
        },
      },
      {
        key: `removeLayerOverride`,
        value: function (e) {
          (delete this._overrides.layers[e],
            this._djb2Map.delete(iu((0, Jl._DJB2)(e), `layers`)),
            this.saveOverrides());
        },
      },
      {
        key: `removeAllOverrides`,
        value: function () {
          this._overrides = ru();
          try {
            window.localStorage.removeItem(this._localStorageKey);
          } catch {}
        },
      },
      {
        key: `getLayerOverride`,
        value: function (e, t) {
          var n = this._overrides.layers[e.name] ?? this._djb2Map.get(iu(e.name, `layers`));
          return n == null
            ? null
            : Xl(
                Xl({}, e),
                {},
                {
                  __value: n,
                  get: (0, Jl._makeTypedGet)(e.name, n),
                  details: Xl(Xl({}, e.details), {}, { reason: eu }),
                },
              );
        },
      },
      {
        key: `_getConfigOverride`,
        value: function (e, t) {
          var n = t[e.name] ?? this._djb2Map.get(iu(e.name, `configs`));
          return n == null
            ? null
            : Xl(
                Xl({}, e),
                {},
                {
                  value: n,
                  get: (0, Jl._makeTypedGet)(e.name, n),
                  details: Xl(Xl({}, e.details), {}, { reason: eu }),
                },
              );
        },
      },
    ]);
  })(),
  ou = [`sdkKey`, `environment`, `updateUserCompletionCallback`, `perimeter`];
function su(e, t) {
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
function cu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? su(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : su(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var lu = `client-default-key`,
  uu = `https://xp.atlassian.com/v1/rgstr`,
  du = (function () {
    function e() {
      var t = this,
        n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        r = n.localStorageKey,
        i = r === void 0 ? tu : r,
        a = n.overrideAdapter;
      (R(this, e),
        B(this, `initPromise`, null),
        B(this, `initCompleted`, !1),
        B(this, `initWithDefaults`, !1),
        B(this, `hasCheckGateErrorOccurred`, !1),
        B(this, `hasGetExperimentErrorOccurred`, !1),
        B(this, `hasGetExperimentValueErrorOccurred`, !1),
        B(this, `hasGetLayerErrorOccurred`, !1),
        B(this, `hasGetLayerValueErrorOccurred`, !1),
        B(this, `subscriptions`, new tl()),
        B(this, `dataAdapter`, new ql()),
        B(this, `statsigValuesUpdated`, function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = a || new au(i)));
    }
    return rc(e, [
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
                        if (((a = ul(t)), !this.initPromise)) {
                          e.next = 4;
                          break;
                        }
                        return (
                          dl(a, this.initOptions) ||
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
                        if (((o = ul(t)), !this.initPromise)) {
                          e.next = 4;
                          break;
                        }
                        return (
                          dl(o, this.initOptions) ||
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
                          this.provider.setClientVersion(bl),
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
                var s = cu(
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
                a.initOptions.environment !== al.Production &&
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
                          (o = ul(t)),
                          !this.initPromise)
                        ) {
                          e.next = 5;
                          break;
                        }
                        return (
                          dl(o, this.initOptions) ||
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
                          (i = ul(t)),
                          (a = function () {
                            return Bl.fetchExperimentValues(i, n, r).then(function (e) {
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
            return vl.fromExperiment(
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
              new vl(e, {}, ``, { time: Date.now(), reason: il.Error })
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
          return dl(this.currentIdentifiers, e) && dl(this.currentAttributes, t);
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
                        if (((i = cu({}, t)), !t.localMode)) {
                          e.next = 5;
                          break;
                        }
                        return ((e.next = 4), this.initFromValues(i, n, r));
                      case 4:
                        return e.abrupt(`return`);
                      case 5:
                        return (
                          (e.prev = 5),
                          (s = Bl.fetchClientSdk(t).then(function (e) {
                            return (i.sdkKey = e.clientSdkKey);
                          })),
                          (c = Bl.fetchExperimentValues(t, n, r)),
                          (e.next = 10),
                          Promise.all([s, c])
                        );
                      case 10:
                        ((l = e.sent),
                          (u = V(l, 2)),
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
              var a, o, s, c, l, u, d, f;
              return G.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = cu(cu({}, t), {}, { disableCurrentPageLogging: !0 })),
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
                          (d = V(u, 2)),
                          (f = d[1]),
                          (o = f.experimentValues),
                          (s = f.customAttributesFromFetch),
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
                d,
                f = arguments;
              return G.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = f.length > 3 && f[3] !== void 0 ? f[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = n),
                          (this.currentAttributes = r),
                          (o = ml(t)),
                          (o.sdkKey ||= lu),
                          ((i = o.networkConfig) != null && i.logEventUrl) ||
                            (o.networkConfig = cu(
                              cu({}, o.networkConfig),
                              {},
                              { logEventUrl: uu },
                            )),
                          o.perimeter === ol.FEDRAMP_MODERATE && (o.disableLogging = !0),
                          (s = o.sdkKey),
                          (c = o.environment),
                          o.updateUserCompletionCallback,
                          o.perimeter,
                          (l = U(o, ou)),
                          (u = fl(n, r)),
                          (this.user = pl({}, a.user, u)),
                          (d = cu(
                            cu({}, l),
                            {},
                            {
                              environment: { tier: c },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: Vl.LogEventCompressionMode.Forced,
                            },
                          )),
                          n.stableId
                            ? Vl.StableID.setOverride(n.stableId, s)
                            : (d.disableStableID = !0),
                          (e.prev = 13),
                          (this.statsigClient = new Vl.StatsigClient(s, this.user, d)),
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
                          (this.statsigClient = new Vl.StatsigClient(lu, this.user, d)),
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
                          (c = fl(n, o.customAttributesFromFetch)),
                          (s = pl({}, o.experimentValues.user, c)),
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
          return bl;
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
            return yl.fromLayer(this.statsigClient.getLayer(e, { disableExposureLog: !r }));
          } catch (t) {
            return (
              (this.hasGetLayerErrorOccurred ||=
                (console.warn({
                  msg: `An error has occurred getting the layer. Only the first occurrence of this error is logged.`,
                  layerName: e,
                  error: t,
                }),
                !0)),
              yl.fromLayer((0, Vl._makeLayer)(e, { reason: `Error` }, null))
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
      R(this, e);
    }
    return rc(e, null, [
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
  B(q, `client`, new du()),
  B(q, `hasCheckGateErrorOccurred`, !1),
  B(q, `hasGetExperimentValueErrorOccurred`, !1),
  B(q, `checkGate`, function (e, t) {
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
  B(q, `getExperimentValue`, function (e, t, n, r) {
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
  B(q, `initializeCalled`, K.client.initializeCalled.bind(K.client)),
  B(q, `initializeCompleted`, K.client.initializeCompleted.bind(K.client)),
  B(q, `waitUntilInitializeCompleted`, K.client.waitUntilInitializeCompleted.bind(K.client)),
  B(q, `initialize`, K.client.initialize.bind(K.client)),
  B(q, `initializeWithProvider`, K.client.initializeWithProvider.bind(K.client)),
  B(q, `initializeFromValues`, K.client.initializeFromValues.bind(K.client)),
  B(q, `manuallyLogGateExposure`, K.client.manuallyLogGateExposure.bind(K.client)),
  B(q, `getExperiment`, K.client.getExperiment.bind(K.client)),
  B(q, `manuallyLogExperimentExposure`, K.client.manuallyLogExperimentExposure.bind(K.client)),
  B(q, `manuallyLogLayerExposure`, K.client.manuallyLogLayerExposure.bind(K.client)),
  B(q, `shutdownStatsig`, K.client.shutdownStatsig.bind(K.client)),
  B(q, `overrideGate`, K.client.overrideGate.bind(K.client)),
  B(q, `clearGateOverride`, K.client.clearGateOverride.bind(K.client)),
  B(q, `overrideConfig`, K.client.overrideConfig.bind(K.client)),
  B(q, `clearConfigOverride`, K.client.clearConfigOverride.bind(K.client)),
  B(q, `setOverrides`, K.client.setOverrides.bind(K.client)),
  B(q, `getOverrides`, K.client.getOverrides.bind(K.client)),
  B(q, `clearAllOverrides`, K.client.clearAllOverrides.bind(K.client)),
  B(q, `isCurrentUser`, K.client.isCurrentUser.bind(K.client)),
  B(q, `onGateUpdated`, K.client.onGateUpdated.bind(K.client)),
  B(q, `onExperimentValueUpdated`, K.client.onExperimentValueUpdated.bind(K.client)),
  B(q, `onAnyUpdated`, K.client.onAnyUpdated.bind(K.client)),
  B(q, `updateUser`, K.client.updateUser.bind(K.client)),
  B(q, `updateUserWithProvider`, K.client.updateUserWithProvider.bind(K.client)),
  B(q, `updateUserWithValues`, K.client.updateUserWithValues.bind(K.client)),
  B(q, `getPackageVersion`, K.client.getPackageVersion.bind(K.client)),
  B(q, `getLayer`, K.client.getLayer.bind(K.client)),
  B(q, `getLayerValue`, K.client.getLayerValue.bind(K.client)));
var fu = q;
if (typeof window < `u`)
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = q;
  else {
    var pu, mu;
    fu = window.__FEATUREGATES_JS__;
    var hu =
      ((pu = fu) == null || (mu = pu.getPackageVersion) == null ? void 0 : mu.call(pu)) ||
      `4.10.0 or earlier`;
    if (hu !== `0.0.0-development`) {
      var gu = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is ${hu} when module version ${bl} was loading.`;
      console.warn(gu);
    }
  }
var _u = fu,
  vu,
  yu,
  bu =
    (globalThis == null || (vu = globalThis.process) == null || (vu = vu.env) == null
      ? void 0
      : vu.JEST_WORKER_ID) === void 0 &&
    (globalThis == null || (yu = globalThis.process) == null || (yu = yu.env) == null
      ? void 0
      : yu.NODE_ENV) !== `production`,
  xu = function () {
    var e;
    bu && (e = console).debug.apply(e, arguments);
  },
  Su = `@atlaskit/platform-feature-flags`,
  Cu = `__PLATFORM_FEATURE_FLAGS__`,
  wu = typeof process < `u` && !0,
  Tu = wu ? {}.ENABLE_PLATFORM_FF === `true` : !1,
  Eu = wu ? {}.STORYBOOK_ENABLE_PLATFORM_FF === `true` : !1,
  Du = Tu || Eu,
  Ou = { booleanResolver: void 0 },
  ku = typeof window < `u` ? window : globalThis;
ku[Cu] = ku.__PLATFORM_FEATURE_FLAGS__ || Ou;
function Au(e) {
  if (Du)
    return (
      xu(
        `[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.`,
        Su,
        e,
      ),
      !0
    );
  try {
    if (
      ku.__PLATFORM_FEATURE_FLAGS__?.booleanResolver === void 0 ||
      ku.__PLATFORM_FEATURE_FLAGS__?.booleanResolver === null
    )
      return _u.checkGate(e);
    var t = ku.__PLATFORM_FEATURE_FLAGS__?.booleanResolver(e);
    return typeof t == `boolean`
      ? t
      : (console.warn(`${e} resolved to a non-boolean value, returning false for safety`), !1);
  } catch {
    return !1;
  }
}
function J(e) {
  return Au(e);
}
var ju = (0, u.createContext)({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Mu = function () {
    return (0, u.useContext)(ju);
  },
  Nu = function (e) {
    var t = (0, u.useRef)(e);
    return ((t.current = e), t);
  };
function Pu(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function Fu(e, t) {
  var n = (0, u.useState)(function () {
      return { inputs: t, result: e() };
    })[0],
    r = (0, u.useRef)(!0),
    i = (0, u.useRef)(n),
    a =
      r.current || (t && i.current.inputs && Pu(t, i.current.inputs))
        ? i.current
        : { inputs: t, result: e() };
  return (
    (0, u.useEffect)(
      function () {
        ((r.current = !1), (i.current = a));
      },
      [a],
    ),
    a.result
  );
}
function Iu(e, t) {
  return Fu(function () {
    return e;
  }, t);
}
function Lu() {
  var e = Mu();
  return {
    createAnalyticsEvent: Iu(
      function (t) {
        return new kc({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: t,
        });
      },
      [e],
    ),
  };
}
function Ru(e, t) {
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
function zu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ru(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ru(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Bu(e) {
  var t = e.fn,
    n = e.action,
    r = e.componentName,
    i = e.actionSubject,
    a = e.packageName,
    o = e.packageVersion,
    s = e.analyticsData,
    c = Lu().createAnalyticsEvent,
    l = Nu(s),
    d = Nu(t);
  return (0, u.useCallback)(
    function (e) {
      var t = c({
          action: n,
          actionSubject: i || r,
          attributes: { componentName: r, packageName: a, packageVersion: o },
        }),
        s = zu({ componentName: r, packageName: a, packageVersion: o }, l.current);
      t.context.push(s);
      var u = t.clone();
      (u && u.fire(`atlaskit`), d.current(e, t));
    },
    [n, r, i, a, o, c, l, d],
  );
}
function Vu(e, t) {
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
function Hu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Vu(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Vu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Uu(e) {
  var t = e.fn,
    n = e.action,
    r = e.componentName,
    i = e.packageName,
    a = e.packageVersion,
    o = e.analyticsData,
    s = Lu().createAnalyticsEvent,
    c = Nu(o),
    l = Nu(t);
  return (0, u.useCallback)(
    function () {
      var e = s({
          action: n,
          actionSubject: r,
          attributes: { componentName: r, packageName: i, packageVersion: a },
        }),
        t = Hu({ componentName: r, packageName: i, packageVersion: a }, c.current);
      e.context.push(t);
      var o = e.clone();
      (o && o.fire(`atlaskit`), l.current(e));
    },
    [n, r, i, a, s, c, l],
  );
}
var Wu = function (e) {
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
  Gu = function (e, t, n) {
    return !t || !n || !e.length ? [] : e.slice((t - 1) * n, t * n);
  },
  Ku = function (e, t) {
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
function Y(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(` `)) return e[0];
  let t = {};
  for (let n of e) {
    if (!n) continue;
    let e = n.split(` `);
    for (let n of e) {
      let e = n.startsWith(`_`) ? n.slice(0, qu) : n;
      t[e] = n;
    }
  }
  let n = ``;
  for (let e in t) n += t[e] + ` `;
  if (n) return n.trimEnd();
}
var qu,
  Ju = n(() => {
    qu = 5;
  });
function Yu(e, t, n) {
  return e == null ? `var(--c-, )` : t ? (n ? n + e + t : e + t) : e;
}
var Xu = n(() => {}),
  Zu = n(() => {
    (Ju(), Xu());
  }),
  X = n(() => {
    Zu();
  });
X();
var Qu = function (e) {
  var t = e.children;
  return u.createElement(
    `caption`,
    { className: Y([`_11c81af2 _6rthu2gc _1pfh1ejb _m6k41e03`]) },
    t,
  );
};
X();
var $u = function (e) {
  var t = e.children,
    n = e.testId;
  return u.createElement(
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
var ed = function (e) {
  var t = e.children,
    n = e.testId;
  return u.createElement(
    `div`,
    { "data-testid": n && `${n}--empty-view-with-fixed-height`, className: Y([`_4t3i1jdh`]) },
    t,
  );
};
X();
var td = function (e) {
  var t = e.children,
    n = e.testId;
  return u.createElement(
    `div`,
    { "data-testid": n && `${n}--pagination--container`, className: Y([`_1e0c1txw _1bah1h6o`]) },
    t,
  );
};
X();
var nd = [`isFixedSize`, `hasDataRow`, `children`, `testId`, `isLoading`],
  rd = (0, u.forwardRef)(function (e, t) {
    var n = e.isFixedSize,
      r = e.hasDataRow,
      i = e.children,
      a = e.testId,
      o = e.isLoading,
      s = U(e, nd);
    return u.createElement(
      `table`,
      H(
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
  id = [`rows`, `head`, `sortKey`, `sortOrder`, `rowsPerPage`, `page`, `forwardedRef`];
function ad(e, t) {
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
function od(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ad(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ad(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function sd(e, t, n) {
  return (
    (t = z(t)),
    ac(e, cd() ? Reflect.construct(t, n || [], z(e).constructor) : t.apply(e, n))
  );
}
function cd() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (cd = function () {
    return !!e;
  })();
}
var ld = function (e, t, n) {
    for (var r = 0; r < e.length; r++) if (t.cells[r] && t.cells[r]?.key === n) return e[r]?.key;
  },
  ud = function (e, t, n, r) {
    if (!n || !e) return t;
    if (!t) return [];
    var i = r === `ASC` ? 1 : -1,
      a = new Intl.Collator(void 0, { numeric: !0, sensitivity: `accent` });
    return Array.from(t).sort(function (t, r) {
      var o = ld(t.cells, e, n),
        s = ld(r.cells, e, n);
      if (o === void 0 || s === void 0) return i;
      if ($s(o) !== $s(s)) {
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
function dd(e) {
  var t = (function (t) {
    function n() {
      var e;
      R(this, n);
      var t = [...arguments];
      return ((e = sd(this, n, [].concat(t))), B(e, `state`, { pageRows: [] }), e);
    }
    return (
      sc(n, t),
      rc(
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
                i = U(t, id);
              return u.createElement(
                e,
                H({ pageRows: this.state.pageRows, head: n }, i, { ref: r }),
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
              Ku(i, r);
              var l, u;
              return (
                c ? ((l = n), (u = n)) : ((l = ud(r, n, i, a) || []), (u = Gu(l, o, s))),
                od(od({}, t), {}, { pageRows: u })
              );
            },
          },
        ],
      )
    );
  })(u.Component);
  return u.forwardRef(function (e, n) {
    return u.createElement(t, H({}, e, { forwardedRef: n }));
  });
}
var fd = `--local-dynamic-table-width`,
  pd = function (e) {
    var t = e.width;
    return t === void 0 ? void 0 : B({}, fd, `${t}%`);
  };
X();
var md = [`width`, `isFixedSize`, `shouldTruncate`, `innerRef`],
  hd = function (e) {
    var t = e.width,
      n = e.isFixedSize,
      r = e.shouldTruncate,
      i = e.innerRef,
      a = U(e, md);
    return u.createElement(
      `td`,
      H(
        {
          style: pd({ width: t }),
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
var gd = [`isHighlighted`, `children`, `style`, `testId`, `className`],
  _d = (0, u.forwardRef)(function (e, t) {
    var n = e.isHighlighted,
      r = e.children,
      i = e.style,
      a = e.testId,
      o = e.className,
      s = U(e, gd);
    return u.createElement(
      `tr`,
      H(
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
  vd = [`cells`],
  yd = [`content`, `testId`],
  bd = function (e) {
    var t = e.row,
      n = e.head,
      r = e.testId,
      i = e.isFixedSize,
      a = e.isHighlighted,
      o = t.cells,
      s = U(t, vd);
    return u.createElement(
      _d,
      H(
        {},
        s,
        { isHighlighted: a },
        a ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: t.testId || (r && `${r}--row-${s.key}`) },
      ),
      o.map(function (e, t) {
        var a = e.content,
          o = e.testId,
          s = U(e, yd),
          c = (n || { cells: [] }).cells[t] || {},
          l = c.shouldTruncate,
          d = c.width;
        return u.createElement(
          hd,
          H({ "data-testid": o || (r && `${r}--cell-${t}`) }, s, {
            isFixedSize: i,
            key: t,
            shouldTruncate: l,
            width: d,
          }),
          a,
        );
      }),
    );
  };
function xd(e, t, n) {
  return (
    (t = z(t)),
    ac(e, Sd() ? Reflect.construct(t, n || [], z(e).constructor) : t.apply(e, n))
  );
}
function Sd() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Sd = function () {
    return !!e;
  })();
}
var Cd = (function (e) {
    function t() {
      return (R(this, t), xd(this, t, arguments));
    }
    return (
      sc(t, e),
      rc(t, [
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
            return u.createElement(
              `tbody`,
              { "data-testid": a && `${a}--body`, ref: o },
              t.map(function (e, t) {
                return u.createElement(bd, {
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
  })(u.Component),
  wd = dd(
    u.forwardRef(function (e, t) {
      return u.createElement(Cd, H({}, e, { forwardedRef: t }));
    }),
  );
function Td(e, t, n) {
  return (
    (t = z(t)),
    ac(e, Ed() ? Reflect.construct(t, n || [], z(e).constructor) : t.apply(e, n))
  );
}
function Ed() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ed = function () {
    return !!e;
  })();
}
var Dd = (function (e) {
    function t(e) {
      var n;
      return (R(this, t), (n = Td(this, t, [e])), (n.state = { hasError: !1 }), n);
    }
    return (
      sc(t, e),
      rc(
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
  })(u.Component),
  Od = (0, u.createContext)(null),
  kd = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
X();
function Ad(e) {
  return e === `inherit` ? `var(--ds-icon-subtle, #505258)` : `var(--ds-icon-inverse, #FFFFFF)`;
}
var jd = {
    rotateStyles: `_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o`,
    loadInStyles: `_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw`,
    wrapperStyles: `_1e0c116y _s7n4nkob`,
    circleStyles: `_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz`,
  },
  Md = typeof window > `u` ? u.useEffect : u.useLayoutEffect,
  Nd = u.memo(
    u.forwardRef(function (e, t) {
      var n = e.appearance,
        r = n === void 0 ? `inherit` : n,
        i = e.delay,
        a = i === void 0 ? 0 : i,
        o = e.interactionName,
        s = e.label,
        c = e.size,
        l = c === void 0 ? `medium` : c,
        d = e.testId,
        f = typeof l == `number` ? l : kd[l],
        p = `${a}ms`,
        m = Ad(r),
        h = (0, u.useContext)(Od);
      return (
        Md(
          function () {
            if (h != null) return h.hold(o);
          },
          [h, o],
        ),
        u.createElement(
          `span`,
          {
            "data-testid": d ? `${d}-wrapper` : `spinner-wrapper`,
            style: { animationDelay: p, width: f, height: f },
            className: Y([jd.wrapperStyles, jd.rotateStyles]),
          },
          u.createElement(
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
              className: Y([jd.loadInStyles]),
            },
            u.createElement(`circle`, {
              cx: `8`,
              cy: `8`,
              r: `7`,
              style: { stroke: m },
              className: Y([jd.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
X();
var Pd = function (e) {
  var t = e.children,
    n = e.testId;
  return u.createElement(
    `div`,
    { "data-testid": n && `${n}--container`, className: Y([`_kqswh2mm`]) },
    t,
  );
};
X();
function Fd(e, t) {
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
function Id(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Fd(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Fd(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Ld = `--contents-opacity`,
  Rd = function (e) {
    var t = e.children,
      n = e.contentsOpacity,
      r = e.testId;
    return u.createElement(
      `div`,
      {
        "data-testid": r && `${r}--contents--container`,
        className: Y([`_tzy47hfw _lcxvglyw`]),
        style: Id(Id({}, B({}, Ld, n)), {}, { "--_cnddr8": Yu(`var(${Ld})`) }),
      },
      t,
    );
  };
X();
var zd = function (e) {
  var t = e.children,
    n = e.testId;
  return u.createElement(
    `div`,
    {
      "data-testid": n && `${n}--spinner--container`,
      className: Y([`_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o`]),
    },
    t,
  );
};
function Bd(e, t, n) {
  return (
    (t = z(t)),
    ac(e, Vd() ? Reflect.construct(t, n || [], z(e).constructor) : t.apply(e, n))
  );
}
function Vd() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Vd = function () {
    return !!e;
  })();
}
var Hd = (function (e) {
  function t() {
    return (R(this, t), Bd(this, t, arguments));
  }
  return (
    sc(t, e),
    rc(t, [
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
          return u.createElement(
            Pd,
            { testId: a },
            n ? u.createElement(Rd, { contentsOpacity: i, testId: a }, t) : t,
            n &&
              u.createElement(
                zd,
                { testId: a },
                u.createElement(Nd, { size: r, testId: a && `${a}--loadingSpinner`, label: o }),
              ),
          );
        },
      },
    ])
  );
})(u.Component);
(B(Hd, `defaultProps`, {
  isLoading: !0,
  spinnerSize: `large`,
  contentsOpacity: 0.22,
  loadingLabel: `Loading table`,
}),
  X());
var Ud = [`children`, `testId`];
function Wd(e, t, n) {
  return (
    (t = z(t)),
    ac(e, Gd() ? Reflect.construct(t, n || [], z(e).constructor) : t.apply(e, n))
  );
}
function Gd() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Gd = function () {
    return !!e;
  })();
}
var Kd = (0, u.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.testId,
      i = U(e, Ud);
    return u.createElement(
      `div`,
      H({}, i, { "data-testid": r, ref: t, className: Y([`_kqswh2mm _6rth1ejb`]) }),
      n,
    );
  }),
  qd = function (e) {
    var t = e.children,
      n = e.testId;
    return u.createElement(
      `div`,
      {
        "data-testid": n && `${n}--spinner-backdrop`,
        className: Y([`_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw`]),
      },
      t,
    );
  },
  Jd = (0, u.forwardRef)(function (e, t) {
    var n = e.children;
    return u.createElement(`div`, { ref: t, className: Y([`_kqswh2mm _152tidpf`]) }, n);
  }),
  Yd = (function (e) {
    function t() {
      var e;
      R(this, t);
      var n = [...arguments];
      return (
        (e = Wd(this, t, [].concat(n))),
        B(e, `spinnerRef`, u.createRef()),
        B(e, `containerRef`, u.createRef()),
        B(e, `componentDidMount`, function () {
          e.props.isLoading &&
            e.hasTargetNode() &&
            (e.attachListeners(), e.updateTargetAppearance(), e.updateSpinnerPosition());
        }),
        B(e, `UNSAFE_componentWillReceiveProps`, function (t) {
          !t.isLoading || !e.hasTargetNode(t)
            ? e.detachListeners()
            : e.props.isLoading || e.attachListeners();
        }),
        B(e, `componentDidUpdate`, function () {
          e.hasTargetNode() &&
            (e.updateTargetAppearance(), e.props.isLoading && e.updateSpinnerPosition());
        }),
        B(e, `componentWillUnmount`, function () {
          e.detachListeners();
        }),
        B(e, `getTargetNode`, function () {
          var t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.props)
            .targetRef;
          return t?.() || e.containerRef.current;
        }),
        B(e, `hasTargetNode`, function (t) {
          return !!e.getTargetNode(t);
        }),
        B(e, `isVerticallyVisible`, function (e, t) {
          var n = e.top;
          return e.bottom <= 0 ? !1 : n < t;
        }),
        B(e, `isFullyVerticallyVisible`, function (e, t) {
          var n = e.top,
            r = e.bottom;
          return n >= 0 && r <= t;
        }),
        B(e, `handleResize`, function () {
          e.updateSpinnerPosition();
        }),
        B(e, `handleScroll`, function () {
          e.updateSpinnerPosition();
        }),
        B(e, `translateSpinner`, function (e, t, n) {
          ((e.style.position = n ? `fixed` : ``),
            (e.style.transform = t === 0 ? `` : `translate3d(0, ${t}px, 0)`));
        }),
        B(e, `updateTargetAppearance`, function () {
          var t = e.getTargetNode(),
            n = e.props,
            r = n.isLoading,
            i = n.contentsOpacity;
          t &&
            t.style &&
            $s(t.style) === `object` &&
            ((t.style.pointerEvents = r ? `none` : ``), (t.style.opacity = r ? i.toString() : ``));
        }),
        e
      );
    }
    return (
      sc(t, e),
      rc(t, [
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
            return u.createElement(
              Kd,
              { testId: i && `${i}--loading--container--advanced`, ref: this.containerRef },
              t,
              n &&
                u.createElement(
                  qd,
                  { testId: i },
                  u.createElement(
                    Jd,
                    { ref: this.spinnerRef },
                    u.createElement(Nd, { size: r, testId: i && `${i}--loadingSpinner`, label: a }),
                  ),
                ),
            );
          },
        },
      ])
    );
  })(u.Component);
B(Yd, `defaultProps`, {
  isLoading: !0,
  spinnerSize: `large`,
  contentsOpacity: `var(--ds-opacity-loading, 0.2)`,
  loadingLabel: `Loading table`,
});
function Xd(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    n = e !== void 0,
    r = V((0, u.useState)(t), 2),
    i = r[0],
    a = r[1],
    o = (0, u.useRef)(n);
  return (
    (0, u.useEffect)(
      function () {
        o.current = n;
      },
      [n],
    ),
    [
      n ? e : i,
      (0, u.useCallback)(function (e) {
        o.current || a(e);
      }, []),
    ]
  );
}
var Zd = n(() => {}),
  Qd,
  $d,
  ef,
  tf,
  nf,
  rf,
  af = n(() => {
    (Zd(),
      (Qd = e(o())),
      X(),
      ($d = e(o())),
      (ef = {
        none: `_1bsbpxbi _4t3ipxbi`,
        compact: `_1bsb1ejb _4t3i1ejb`,
        spacious: `_1bsb1ejb _4t3i1ejb`,
      }),
      (tf = {
        none: `_1bsbutpp _4t3iutpp`,
        compact: `_1bsbpxbi _4t3ipxbi`,
        spacious: `_1bsb1ejb _4t3i1ejb`,
      }),
      (nf = {
        medium: { none: 0, compact: 4, spacious: 4 },
        small: { none: 0, compact: 2.66, spacious: 8 },
      }),
      (rf = (0, $d.memo)(function (e) {
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
          h = nf[f][l],
          g = m + 2 * h;
        return Qd.createElement(
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
          Qd.createElement(`svg`, {
            fill: `none`,
            viewBox: `${0 - h} ${0 - h} ${g} ${g}`,
            role: `presentation`,
            dangerouslySetInnerHTML: d,
            className: Y([
              `_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31`,
              s ? `_1bsb1kw7 _4t3i1kw7` : f === `small` ? tf[l] : ef[l],
            ]),
          }),
        );
      })));
  }),
  of = r({ Icon: () => rf, default: () => rf }),
  sf = n(() => {
    af();
  }),
  cf = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((sf(), t(of)));
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
  lf = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((sf(), t(of)));
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
  uf = (0, u.createContext)(`elevation.surface`);
X();
var df = [
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
  ff = [`className`],
  pf = {
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
  mf = {
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
  hf = {
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
  gf = {
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
  _f = {
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
  vf = {
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
  yf = (0, u.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `div` : n,
      i = e.children,
      a = e.backgroundColor,
      o = e.padding,
      s = e.paddingBlock,
      c = s === void 0 ? o : s,
      l = e.paddingBlockStart,
      d = l === void 0 ? c : l,
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
      C = U(e, df);
    C.className;
    var w = U(C, ff),
      T = u.createElement(
        r,
        H(
          {
            style: b,
            ref: t,
            className: Y([
              `_19itglyw _vchhusvi _r06hglyw`,
              a && pf[a],
              a && bf(a) && mf[a],
              d && hf[d],
              p && gf[p],
              _ && _f[_],
              y && vf[y],
              S,
            ]),
          },
          w,
          { "data-testid": x },
        ),
        i,
      );
    return a ? u.createElement(uf.Provider, { value: a }, T) : T;
  });
function bf(e) {
  return e in mf;
}
var xf = () =>
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
var Sf = (...e) => Y(e);
function Cf() {
  return {
    css() {
      throw xf();
    },
    cssMap() {
      throw xf();
    },
    cx: Sf,
    XCSSProp() {
      throw xf();
    },
  };
}
var wf = Cf();
(wf.css, wf.cssMap, wf.cssMap);
var Tf = wf.cx;
(wf.XCSSProp, X());
var Ef = [
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
  Df = {
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
  Of = {
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
  kf = {
    start: `_1bahv2br`,
    center: `_1bah1h6o`,
    end: `_1bahh9n0`,
    "space-between": `_1bah1yb4`,
    "space-around": `_1bah1b1v`,
    "space-evenly": `_1bahitcz`,
    stretch: `_1bah1fhb`,
  },
  Af = { column: `_2lx21bp4`, row: `_2lx2vrvc` },
  jf = { wrap: `_1n261g80`, nowrap: `_1n261q9c` },
  Mf = {
    start: `_4cvrv2br`,
    center: `_4cvr1h6o`,
    baseline: `_4cvr1q9y`,
    end: `_4cvrh9n0`,
    stretch: `_4cvr1fhb`,
  },
  Nf = { root: `_1e0c1txw _vchhusvi` },
  Pf = (0, u.memo)(
    (0, u.forwardRef)(function (e, t) {
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
        g = U(e, Ef);
      return u.createElement(
        r,
        H({}, g, {
          role: i,
          className: Y([
            Nf.root,
            s && Of[s],
            c && Of[c],
            s && Df[s],
            l && Df[l],
            a && Mf[a],
            p && Af[p],
            o && kf[o],
            m && jf[m],
            h,
          ]),
          "data-testid": f,
          ref: t,
        }),
        d,
      );
    }),
  );
((Pf.displayName = `Flex`), X());
var Ff = [
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
  If = {
    separator: `_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw`,
    hug: `_16jlidpf`,
    fill: `_1bsb1osq _16jlkb7n`,
  },
  Lf = function (e) {
    var t = e.children;
    return u.createElement(`span`, { className: Y([If.separator]) }, t);
  },
  Rf = (0, u.memo)(
    (0, u.forwardRef)(function (e, t) {
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
        _ = e.children,
        v = U(e, Ff),
        y = typeof p == `string` ? u.createElement(Lf, null, p) : p,
        b = y
          ? u.Children.toArray(_)
              .filter(Boolean)
              .map(function (e, t) {
                return u.createElement(u.Fragment, { key: t }, p && t > 0 ? y : null, e);
              })
          : _;
      return u.createElement(
        Pf,
        H({}, v, {
          as: n,
          role: g,
          alignItems: a,
          justifyContent: c || r,
          direction: `row`,
          gap: d,
          rowGap: f,
          wrap: s ? `wrap` : void 0,
          xcss: Tf(l === `hug` && If.hug, l === `fill` && If.fill, m),
          testId: h,
          ref: t,
        }),
        b,
      );
    }),
  );
Rf.displayName = `Inline`;
var zf = !0,
  Bf = `Invariant failed`;
function Vf(e, t) {
  if (!e) {
    if (zf) throw Error(Bf);
    var n = typeof t == `function` ? t() : t,
      r = n ? `${Bf}: ${n}` : Bf;
    throw Error(r);
  }
}
var Hf = (0, u.createContext)(!1),
  Uf = function () {
    return (0, u.useContext)(Hf);
  },
  Wf = Hf.Provider,
  Gf = function () {
    return (0, u.useContext)(uf);
  };
((uf.displayName = `SurfaceProvider`), X());
var Kf = [`span`, `p`, `strong`, `em`],
  qf = function (e, t) {
    var n = Gf();
    if (e !== `inherit`) {
      if (e) return e;
      if (!t) return Qf.hasOwnProperty(n) ? Qf[n] : `color.text`;
    }
  },
  Jf = {
    root: `_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65`,
    "as.strong": `_k48pwu06`,
    "as.em": `_zg8l1m30`,
    "textAlign.center": `_y3gn1h6o`,
    "textAlign.end": `_y3gnh9n0`,
    "textAlign.start": `_y3gnv2br`,
    truncation: `_1reo15vq _18m915vq _1e0ccj1k _sudp1e54`,
    breakAll: `_1nmz9jpi`,
  },
  Yf = { medium: `_11c8fhey`, large: `_11c81d4k`, small: `_11c8wadc` },
  Xf = { bold: `_k48pwu06`, medium: `_k48p1wq8`, regular: `_k48pi7a9`, semibold: `_k48p1pd9` },
  Zf = {
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
  Qf = {
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
  $f = (0, u.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `span` : n,
      i = e.color,
      a = e.align,
      o = e.testId,
      s = e.id,
      c = e.size,
      l = e.weight,
      d = e.maxLines,
      f = e.xcss,
      p = e.children;
    Vf(Kf.includes(r), `@atlaskit/primitives: Text received an invalid "as" value of "${r}"`);
    var m = Uf(),
      h = qf(i, m);
    !c && !m && (c = `medium`);
    var g = u.createElement(
      r,
      {
        id: s,
        className: Y([
          Jf.root,
          c && Yf[c],
          h && Zf[h],
          d && Jf.truncation,
          d === 1 && Jf.breakAll,
          a && Jf[`textAlign.${a}`],
          l && Xf[l],
          r === `em` && Jf[`as.em`],
          r === `strong` && Jf[`as.strong`],
          f,
        ]),
        style: { WebkitLineClamp: d },
        "data-testid": o,
        ref: t,
      },
      p,
    );
    return m ? g : u.createElement(Wf, { value: !0 }, g);
  });
function ep() {
  if (typeof window < `u` && window.navigator != null) {
    var e = window.navigator.userAgent?.toLowerCase();
    return e ? e.includes(`safari`) && !e.includes(`chrome`) : !1;
  }
  return !1;
}
X();
var tp = [`as`, `children`, `isInset`, `testId`, `style`, `xcss`],
  np = [`className`],
  rp = (0, u.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `button` : n,
      i = e.children,
      a = e.isInset,
      o = e.testId,
      s = e.style,
      c = e.xcss,
      l = U(e, tp);
    l.className;
    var d = U(l, np);
    return u.createElement(
      r,
      H({}, d, {
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
  ip = [
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
  ap = [`className`],
  op = { root: `_19itglyw _vchhusvi _r06hglyw _80omtlke`, disabled: `_80om13gf` },
  sp = (0, u.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.isDisabled,
      i = e.type,
      a = i === void 0 ? `button` : i,
      o = e.onClick,
      s = o === void 0 ? cc : o,
      c = e.interactionName,
      l = e.componentName,
      d = e.analyticsContext,
      f = e.style,
      p = e.testId,
      m = e.xcss,
      h = e.tabIndex,
      g = U(e, ip),
      _ = (0, u.useContext)(Od),
      v = Bu({
        fn: (0, u.useCallback)(
          function (e, t) {
            (_ && _.tracePress(c, e.timeStamp), s(e, t));
          },
          [s, _, c],
        ),
        action: `clicked`,
        componentName: l || `Pressable`,
        packageName: `@atlaskit/primitives`,
        packageVersion: `0.0.0-development`,
        analyticsData: d,
        actionSubject: `button`,
      });
    g.className;
    var y = U(g, ap);
    return u.createElement(
      rp,
      H({ as: `button`, tabIndex: h ?? (ep() && !r ? 0 : void 0), style: f }, y, {
        type: a,
        onClick: v,
        disabled: r,
        xcss: Sf(op.root, r && op.disabled, m),
        testId: p,
        ref: t,
      }),
      n,
    );
  }),
  cp = (0, u.createContext)(!1),
  lp = (0, u.createContext)(!1),
  up = function () {
    return (0, u.useContext)(lp);
  },
  dp = function () {
    return (0, u.useContext)(cp);
  },
  fp = i((e) => {
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
  pp = i((e) => {
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
    var n = fp();
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
  mp = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.bindAll = e.bind = void 0));
    var t = fp();
    Object.defineProperty(e, `bind`, {
      enumerable: !0,
      get: function () {
        return t.bind;
      },
    });
    var n = pp();
    Object.defineProperty(e, `bindAll`, {
      enumerable: !0,
      get: function () {
        return n.bindAll;
      },
    });
  }),
  hp = [
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
  ],
  gp = [`light`, `dark`, `auto`];
[].concat(Cc(hp), []);
var _p = {
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
function vp() {
  if (J(`platform-dst-shape-theme-default`)) return `shape`;
}
function yp() {
  if (J(`platform-dst-motion-theme-default`)) return `motion`;
}
var bp = {
    colorMode: `auto`,
    contrastMode: `auto`,
    dark: `dark`,
    light: `light`,
    shape: vp,
    spacing: `spacing`,
    typography: `typography`,
    motion: yp,
    UNSAFE_themeOptions: void 0,
  },
  xp = {
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
  Sp = `data-theme`,
  Cp = `data-subtree-theme`,
  wp = `data-color-mode`,
  Tp = `data-contrast-mode`,
  Ep = `data-custom-theme`,
  Dp = `--ds-token-not-found`;
function Op(e, t) {
  var n = xp[e];
  return ((n ||= Dp), t ? `var(${n}, ${t})` : `var(${n})`);
}
var kp = [`light`, `dark`, `spacing`, `typography`, `shape`, `motion`],
  Ap = `UNSAFE_themeOptions`,
  jp = function (e) {
    return (
      kp.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  Mp = function (e) {
    return (
      hp.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  Np = function (e) {
    return [`light`, `dark`, `auto`].includes(e);
  },
  Pp = function (e) {
    return e
      .split(` `)
      .map(function (e) {
        return e.split(/:([^]*)/);
      })
      .reduce(function (e, t) {
        var n = V(t, 2),
          r = n[0],
          i = n[1];
        if ((r === `colorMode` && Np(i) && (e[r] = i), jp(r) && Mp(i) && (e[r] = i), r === Ap))
          try {
            e[Ap] = JSON.parse(i);
          } catch {}
        return e;
      }, {});
  },
  Fp = function (e) {
    return Object.entries(e).reduce(function (e, t) {
      var n = V(t, 2),
        r = n[0],
        i = n[1];
      return (r === `colorMode` && typeof i == `string` && Np(i)) ||
        (r === Ap && $s(i) === `object`) ||
        (jp(r) && typeof i == `string` && Mp(i))
        ? e + `${e ? ` ` : ``}${r}:${$s(i) === `object` ? JSON.stringify(i) : i}`
        : e;
    }, ``);
  };
function Ip(e, t) {
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
function Lp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ip(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ip(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Rp = function (e) {
    return (
      gp.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  zp = function () {
    if (typeof document > `u`) return {};
    var e = document.documentElement,
      t = e.getAttribute(`data-color-mode`) || ``;
    return Lp(Lp({}, Pp(e.getAttribute(`data-theme`) || ``)), Rp(t) && { colorMode: t });
  },
  Bp = function (e) {
    for (var t = 0, n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);
      ((t = (t << 5) - t + r), (t &= t));
    }
    return new Uint32Array([t])[0].toString(36);
  },
  Vp = function (e) {
    return /^#[0-9A-F]{6}$/i.test(e);
  };
function Hp(e, t) {
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
function Up(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Hp(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Hp(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Wp = `light`,
  Gp = `no-preference`,
  Kp = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.colorMode,
      n = t === void 0 ? bp.colorMode : t,
      r = e.dark,
      i = r === void 0 ? bp.dark : r,
      a = e.light,
      o = a === void 0 ? bp.light : a,
      s = e.contrastMode,
      c = s === void 0 ? bp.contrastMode : s,
      l = e.motion,
      u = l === void 0 ? bp.motion() : l,
      d = e.shape,
      f = d === void 0 ? bp.shape() : d,
      p = e.spacing,
      m = p === void 0 ? bp.spacing : p,
      h = e.typography,
      g = h === void 0 ? bp.typography : h,
      _ = e.UNSAFE_themeOptions,
      v = _ === void 0 ? bp.UNSAFE_themeOptions : _,
      y = B(
        B({}, Sp, Fp({ dark: i, light: o, motion: u, shape: f, spacing: m, typography: g })),
        wp,
        n === `auto` ? Wp : n,
      );
    if (
      (J(`platform_increased-contrast-themes`) &&
        (y = Up(Up({}, y), {}, B({}, Tp, c === `auto` ? Gp : c))),
      v && Vp(v.brandColor))
    ) {
      var b = Bp(JSON.stringify(v));
      y[Ep] = b;
    }
    return y;
  };
Ze();
var qp = {
    light: function () {
      return Xe(() => import(`./atlassian-light-B1KF1953.js`), [], import.meta.url);
    },
    "light-future": function () {
      return Xe(() => import(`./atlassian-light-future-C13ltG2F.js`), [], import.meta.url);
    },
    "light-increased-contrast": function () {
      return Xe(
        () => import(`./atlassian-light-increased-contrast-BNTVMd1W.js`),
        [],
        import.meta.url,
      );
    },
    dark: function () {
      return Xe(() => import(`./atlassian-dark-BFXzfqbZ.js`), [], import.meta.url);
    },
    "dark-future": function () {
      return Xe(() => import(`./atlassian-dark-future-Bw1KUvV8.js`), [], import.meta.url);
    },
    "dark-increased-contrast": function () {
      return Xe(
        () => import(`./atlassian-dark-increased-contrast-DEdiqvAK.js`),
        [],
        import.meta.url,
      );
    },
    spacing: function () {
      return Xe(() => import(`./atlassian-spacing-DK5WAAmW.js`), [], import.meta.url);
    },
    typography: function () {
      return Xe(() => import(`./atlassian-typography-DzIF28hO.js`), [], import.meta.url);
    },
    shape: function () {
      return Xe(() => import(`./atlassian-shape-D1_1hnIs.js`), [], import.meta.url);
    },
    motion: function () {
      return Xe(() => import(`./atlassian-motion-DzDytpqf.js`), [], import.meta.url);
    },
  },
  Jp = (function () {
    var e = W(
      G.default.mark(function e(t) {
        var n, r;
        return G.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), qp[t]());
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
  Yp = (function () {
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
                return ((e.next = 6), Jp(t));
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
  Xp = mp(),
  Zp = typeof window < `u` && `matchMedia` in window;
function Qp(e) {
  document.documentElement.setAttribute(wp, e.matches ? `dark` : `light`);
}
var $p = Zp && window.matchMedia(`(prefers-color-scheme: dark)`),
  em = new ((function () {
    function e() {
      (R(this, e), B(this, `unbindThemeChangeListener`, null));
    }
    return rc(e, [
      {
        key: `getColorMode`,
        value: function () {
          return $p && $p != null && $p.matches ? `dark` : `light`;
        },
      },
      {
        key: `bind`,
        value: function () {
          $p &&
            this.unbindThemeChangeListener === null &&
            (this.unbindThemeChangeListener = (0, Xp.bind)($p, { type: `change`, listener: Qp }));
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
  tm = typeof window < `u` && `matchMedia` in window;
function nm(e) {
  document.documentElement.setAttribute(Tp, e.matches ? `more` : `no-preference`);
}
var rm = tm && window.matchMedia(`(prefers-contrast: more)`),
  im = new ((function () {
    function e() {
      (R(this, e), B(this, `unbindContrastChangeListener`, null));
    }
    return rc(e, [
      {
        key: `getContrastMode`,
        value: function () {
          return rm && rm != null && rm.matches ? `more` : `no-preference`;
        },
      },
      {
        key: `bind`,
        value: function () {
          rm &&
            this.unbindContrastChangeListener === null &&
            (this.unbindContrastChangeListener = (0, Xp.bind)(rm, {
              type: `change`,
              listener: nm,
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
function am(e) {
  (e.colorMode === `auto` ? ((e.colorMode = em.getColorMode()), em.bind()) : em.unbind(),
    J(`platform_increased-contrast-themes`) &&
      (e.contrastMode === `auto`
        ? ((e.contrastMode = im.getContrastMode()), im.bind())
        : im.unbind()));
  var t = Kp(e);
  return (
    Object.entries(t).forEach(function (e) {
      var t = V(e, 2),
        n = t[0],
        r = t[1];
      document.documentElement.setAttribute(n, r);
    }),
    function () {
      (em.unbind(), J(`platform_increased-contrast-themes`) && im.unbind());
    }
  );
}
function om(e) {
  var t = Array.from(document.head.querySelectorAll(`style[${Ep}][${Sp}]`));
  t.length < e ||
    t.slice(0, t.length - (e - 1)).forEach(function (e) {
      return e.remove();
    });
}
function sm(e, t) {
  var n = Bp(JSON.stringify(e)),
    r = [];
  return (
    (t === `auto` ? [`light`, `dark`] : [t]).forEach(function (e) {
      var t = document.head.querySelector(`style[${Ep}="${n}"][${Sp}="${e}"]`);
      t ? document.head.appendChild(t) : r.push(e);
    }),
    r
  );
}
function cm(e, t) {
  return Object.entries(e).reduce(function (e, n) {
    var r = V(n, 2),
      i = r[0],
      a = r[1],
      o = xp[i];
    return o
      ? `${e}
  ${o}: ${typeof a == `string` ? a : t[a]};`
      : e;
  }, ``);
}
var lm = function (e) {
  return Cc(new Set([]));
};
function um(e) {
  return Object.entries(_p).find(function (t) {
    return V(t, 2)[1].increasesContrastFor === e;
  })?.[1].id;
}
var dm = function (e) {
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
      J(`platform_increased-contrast-themes`) &&
      l.forEach(function (e) {
        var t = um(e);
        t && l.push(t);
      }),
      u.push.apply(u, l));
  else if ((u.push(e[t]), n !== `no-preference` && J(`platform_increased-contrast-themes`))) {
    var d = um(e[t]);
    d && u.push(d);
  }
  return (
    [a, o, s, c].forEach(function (e) {
      e && u.push(e);
    }),
    Cc(new Set(u))
  );
};
Ze();
function fm(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = pm(e)) || (t && e && typeof e.length == `number`)) {
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
function pm(e, t) {
  if (e) {
    if (typeof e == `string`) return mm(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? mm(e, t)
          : void 0
    );
  }
}
function mm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function hm(e, t) {
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
function gm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? hm(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : hm(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var _m = (function () {
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
          ee,
          O,
          te,
          k,
          ne,
          re = arguments;
        return G.default.wrap(
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
                            gm(
                              gm({}, bp),
                              {},
                              { typography: bp.typography, shape: bp.shape(), motion: bp.motion() },
                              zp(),
                            ),
                          )
                        : t),
                    (i = r.colorMode),
                    (a = i === void 0 ? bp.colorMode : i),
                    (o = r.contrastMode),
                    (s = o === void 0 ? bp.contrastMode : o),
                    (c = r.dark),
                    (l = c === void 0 ? bp.dark : c),
                    (u = r.light),
                    (d = u === void 0 ? bp.light : u),
                    (f = r.shape),
                    (p = f === void 0 ? bp.shape() : f),
                    (m = r.spacing),
                    (h = m === void 0 ? bp.spacing : m),
                    (g = r.typography),
                    (_ = g === void 0 ? bp.typography : g),
                    (v = r.motion),
                    (y = v === void 0 ? bp.motion() : v),
                    (b = r.UNSAFE_themeOptions),
                    (x = b === void 0 ? bp.UNSAFE_themeOptions : b),
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
                    (C = dm(S)),
                    (w = n || Yp),
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
                      Vp(x?.brandColor) &&
                      ((E = a || bp.colorMode),
                      (D = sm(x, E)),
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
                                        Xe(
                                          () => import(`./custom-theme-BG702zh9.js`),
                                          [],
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
                  ((ee = lm(S)), (O = fm(ee)), (e.prev = 13), O.s());
                case 15:
                  if ((te = O.n()).done) {
                    e.next = 21;
                    break;
                  }
                  return ((k = te.value), (e.next = 19), w(k));
                case 19:
                  e.next = 15;
                  break;
                case 21:
                  e.next = 26;
                  break;
                case 23:
                  ((e.prev = 23), (e.t0 = e.catch(13)), O.e(e.t0));
                case 26:
                  return ((e.prev = 26), O.f(), e.finish(26));
                case 29:
                  return ((ne = am(S)), e.abrupt(`return`, ne));
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
  vm = (function () {
    function e(t) {
      (R(this, e), B(this, `legacyObserver`, null), (this.callback = t), e.callbacks.add(t));
    }
    return rc(e, [
      {
        key: `observe`,
        value: function () {
          e.observer ||
            ((e.observer = new MutationObserver(function () {
              var t = zp();
              e.callbacks.forEach(function (e) {
                return e(t);
              });
            })),
            e.observer.observe(document.documentElement, { attributeFilter: [Sp, wp] }));
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
(B(vm, `observer`, null), B(vm, `callbacks`, new Set()));
var ym = (0, u.createContext)(void 0),
  bm = (0, u.createContext)(!1),
  xm = (0, u.createContext)(void 0),
  Sm = (0, u.createContext)(void 0),
  Cm = (0, u.createContext)(void 0),
  wm = function () {
    return (0, u.useContext)(bm) ?? !1;
  },
  Tm = function () {
    return typeof document < `u` ? document : null;
  };
function Em(e) {
  var t = Tm();
  return t ? t.head.querySelector(`style[${Sp}="${e}"]`) : !1;
}
var Dm = (function () {
    var e = W(
      G.default.mark(function e(t) {
        var n, r;
        return G.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (!Em(t)) {
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
                return ((e.next = 6), qp[t]());
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
  Om = (function () {
    var e = W(
      G.default.mark(function e(t, n) {
        var r, i;
        return G.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((r = Tm()), r)) {
                  e.next = 3;
                  break;
                }
                return e.abrupt(`return`);
              case 3:
                if (
                  ((i = r.createElement(`style`)),
                  (i.textContent = t),
                  (i.dataset.theme = n),
                  !Em(n))
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
  km = (function () {
    var e = W(
      G.default.mark(function e(t) {
        var n;
        return G.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), Dm(t));
              case 2:
                if (((n = e.sent), n)) {
                  e.next = 5;
                  break;
                }
                return e.abrupt(`return`);
              case 5:
                Om(n, t);
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
  Am = (function () {
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
                  n.forEach(km));
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
function jm(e, t) {
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
function Mm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? jm(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : jm(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Nm = { dark: `dark`, light: `light`, spacing: `spacing`, typography: `typography` },
  Pm =
    typeof window < `u` && `matchMedia` in window
      ? window.matchMedia(`(prefers-color-scheme: dark)`)
      : void 0;
function Fm(e) {
  return e === `auto` ? (Pm != null && Pm.matches ? `dark` : `light`) : e;
}
var Im = { body: `_1e0c1bgi` };
function Lm(e) {
  var t = e.children,
    n = e.defaultColorMode,
    r = n === void 0 ? `auto` : n,
    i = e.defaultTheme,
    a = V((0, u.useState)(r), 2),
    o = a[0],
    s = a[1],
    c = V((0, u.useState)(Fm(r)), 2),
    l = c[0],
    d = c[1],
    f = V(
      (0, u.useState)(function () {
        return Mm(Mm({}, Nm), i);
      }),
      2,
    ),
    p = f[0],
    m = f[1],
    h = (0, u.useCallback)(function (e) {
      (s(e), d(Fm(e)));
    }, []),
    g = (0, u.useCallback)(function (e) {
      m(function (t) {
        return Mm(Mm({}, t), e);
      });
    }, []),
    _ = (0, u.useRef)(null),
    v = up(),
    y = dp(),
    b = wm(),
    x = v && !b && y;
  ((0, u.useEffect)(
    function () {
      if (x) {
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
                        ((n = _m(Mm(Mm({}, p), {}, { colorMode: l }))), (_.current = n));
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
      } else Am(p);
    },
    [v, b, x, l, p],
  ),
    (0, u.useEffect)(
      function () {
        if (Pm)
          return (0, Xp.bind)(Pm, {
            type: `change`,
            listener: function (e) {
              o === `auto` && d(e.matches ? `dark` : `light`);
            },
          });
      },
      [o],
    ));
  var S = Mm(Mm({}, Kp(Mm(Mm({}, p), {}, { colorMode: l }))), {}, B({}, Cp, !0));
  return u.createElement(
    bm.Provider,
    { value: !0 },
    u.createElement(
      ym.Provider,
      { value: l },
      u.createElement(
        xm.Provider,
        { value: h },
        u.createElement(
          Sm.Provider,
          { value: p },
          u.createElement(
            Cm.Provider,
            { value: g },
            x ? t : u.createElement(`div`, H({}, S, { className: Y([Im.body]) }), t),
          ),
        ),
      ),
    ),
  );
}
function Rm() {
  var e = (0, u.useContext)(ym),
    t = zp(),
    n = V((0, u.useState)(t?.colorMode || `light`), 2),
    r = n[0],
    i = n[1];
  return (
    (0, u.useEffect)(
      function () {
        if (!e) {
          var t = new vm(function (e) {
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
function zm() {
  return u.useId().replace(/[:«»]/g, `_`);
}
X();
var Bm = function (e) {
  var t = e.children,
    n = e.testId,
    r = e.role,
    i = e.id;
  return u.createElement(
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
Bm.displayName = `VisuallyHidden`;
var Vm = !1;
function Hm(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Um(e) {
  var t = document.createElement(`style`);
  return (
    t.setAttribute(`data-emotion`, e.key),
    e.nonce !== void 0 && t.setAttribute(`nonce`, e.nonce),
    t.appendChild(document.createTextNode(``)),
    t.setAttribute(`data-s`, ``),
    t
  );
}
var Wm = (function () {
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
        (this.isSpeedy = e.speedy === void 0 ? !Vm : e.speedy),
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(Um(this));
        var t = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var n = Hm(t);
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
  Gm = `-ms-`,
  Km = `-moz-`,
  Z = `-webkit-`,
  qm = `comm`,
  Jm = `rule`,
  Ym = `decl`,
  Xm = `@import`,
  Zm = `@keyframes`,
  Qm = `@layer`,
  $m = Math.abs,
  eh = String.fromCharCode,
  th = Object.assign;
function nh(e, t) {
  return oh(e, 0) ^ 45
    ? (((((((t << 2) ^ oh(e, 0)) << 2) ^ oh(e, 1)) << 2) ^ oh(e, 2)) << 2) ^ oh(e, 3)
    : 0;
}
function rh(e) {
  return e.trim();
}
function ih(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, n) {
  return e.replace(t, n);
}
function ah(e, t) {
  return e.indexOf(t);
}
function oh(e, t) {
  return e.charCodeAt(t) | 0;
}
function sh(e, t, n) {
  return e.slice(t, n);
}
function ch(e) {
  return e.length;
}
function lh(e) {
  return e.length;
}
function uh(e, t) {
  return (t.push(e), e);
}
function dh(e, t) {
  return e.map(t).join(``);
}
var fh = 1,
  ph = 1,
  mh = 0,
  hh = 0,
  gh = 0,
  _h = ``;
function vh(e, t, n, r, i, a, o) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: a,
    line: fh,
    column: ph,
    length: o,
    return: ``,
  };
}
function yh(e, t) {
  return th(vh(``, null, null, ``, null, null, 0), e, { length: -e.length }, t);
}
function bh() {
  return gh;
}
function xh() {
  return ((gh = hh > 0 ? oh(_h, --hh) : 0), ph--, gh === 10 && ((ph = 1), fh--), gh);
}
function Sh() {
  return ((gh = hh < mh ? oh(_h, hh++) : 0), ph++, gh === 10 && ((ph = 1), fh++), gh);
}
function Ch() {
  return oh(_h, hh);
}
function wh() {
  return hh;
}
function Th(e, t) {
  return sh(_h, e, t);
}
function Eh(e) {
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
function Dh(e) {
  return ((fh = ph = 1), (mh = ch((_h = e))), (hh = 0), []);
}
function Oh(e) {
  return ((_h = ``), e);
}
function kh(e) {
  return rh(Th(hh - 1, Mh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ah(e) {
  for (; (gh = Ch()) && gh < 33; ) Sh();
  return Eh(e) > 2 || Eh(gh) > 3 ? `` : ` `;
}
function jh(e, t) {
  for (; --t && Sh() && !(gh < 48 || gh > 102 || (gh > 57 && gh < 65) || (gh > 70 && gh < 97)); );
  return Th(e, wh() + (t < 6 && Ch() == 32 && Sh() == 32));
}
function Mh(e) {
  for (; Sh(); )
    switch (gh) {
      case e:
        return hh;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Mh(gh);
        break;
      case 40:
        e === 41 && Mh(e);
        break;
      case 92:
        Sh();
        break;
    }
  return hh;
}
function Nh(e, t) {
  for (; Sh() && e + gh !== 57 && !(e + gh === 84 && Ch() === 47); );
  return `/*` + Th(t, hh - 1) + `*` + eh(e === 47 ? e : Sh());
}
function Ph(e) {
  for (; !Eh(Ch()); ) Sh();
  return Th(e, hh);
}
function Fh(e) {
  return Oh(Ih(``, null, null, null, [``], (e = Dh(e)), 0, [0], e));
}
function Ih(e, t, n, r, i, a, o, s, c) {
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
    switch (((m = v), (v = Sh()))) {
      case 40:
        if (m != 108 && oh(C, d - 1) == 58) {
          ah((C += Q(kh(v), `&`, `&\f`)), `&\f`) != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += kh(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Ah(m);
        break;
      case 92:
        C += jh(wh() - 1, 7);
        continue;
      case 47:
        switch (Ch()) {
          case 42:
          case 47:
            uh(Rh(Nh(Sh(), wh()), t, n), c);
            break;
          default:
            C += `/`;
        }
        break;
      case 123 * h:
        s[l++] = ch(C) * _;
      case 125 * h:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            (_ == -1 && (C = Q(C, /\f/g, ``)),
              p > 0 &&
                ch(C) - d &&
                uh(p > 32 ? zh(C + `;`, r, n, d - 1) : zh(Q(C, ` `, ``) + `;`, r, n, d - 2), c));
            break;
          case 59:
            C += `;`;
          default:
            if ((uh((S = Lh(C, t, n, l, u, i, s, y, (b = []), (x = []), d)), a), v === 123))
              if (u === 0) Ih(C, t, S, S, b, a, d, s, x);
              else
                switch (f === 99 && oh(C, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ih(
                      e,
                      S,
                      S,
                      r && uh(Lh(e, S, S, 0, 0, i, s, y, i, (b = []), d), x),
                      i,
                      x,
                      d,
                      s,
                      r ? b : x,
                    );
                    break;
                  default:
                    Ih(C, S, S, S, [``], x, 0, s, x);
                }
        }
        ((l = u = p = 0), (h = _ = 1), (y = C = ``), (d = o));
        break;
      case 58:
        ((d = 1 + ch(C)), (p = m));
      default:
        if (h < 1) {
          if (v == 123) --h;
          else if (v == 125 && h++ == 0 && xh() == 125) continue;
        }
        switch (((C += eh(v)), v * h)) {
          case 38:
            _ = u > 0 ? 1 : ((C += `\f`), -1);
            break;
          case 44:
            ((s[l++] = (ch(C) - 1) * _), (_ = 1));
            break;
          case 64:
            (Ch() === 45 && (C += kh(Sh())), (f = Ch()), (u = d = ch((y = C += Ph(wh())))), v++);
            break;
          case 45:
            m === 45 && ch(C) == 2 && (h = 0);
        }
    }
  return a;
}
function Lh(e, t, n, r, i, a, o, s, c, l, u) {
  for (var d = i - 1, f = i === 0 ? a : [``], p = lh(f), m = 0, h = 0, g = 0; m < r; ++m)
    for (var _ = 0, v = sh(e, d + 1, (d = $m((h = o[m])))), y = e; _ < p; ++_)
      (y = rh(h > 0 ? f[_] + ` ` + v : Q(v, /&\f/g, f[_]))) && (c[g++] = y);
  return vh(e, t, n, i === 0 ? Jm : s, c, l, u);
}
function Rh(e, t, n) {
  return vh(e, t, n, qm, eh(bh()), sh(e, 2, -2), 0);
}
function zh(e, t, n, r) {
  return vh(e, t, n, Ym, sh(e, 0, r), sh(e, r + 1, -1), r);
}
function Bh(e, t) {
  for (var n = ``, r = lh(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || ``;
  return n;
}
function Vh(e, t, n, r) {
  switch (e.type) {
    case Qm:
      if (e.children.length) break;
    case Xm:
    case Ym:
      return (e.return = e.return || e.value);
    case qm:
      return ``;
    case Zm:
      return (e.return = e.value + `{` + Bh(e.children, r) + `}`);
    case Jm:
      e.value = e.props.join(`,`);
  }
  return ch((n = Bh(e.children, r))) ? (e.return = e.value + `{` + n + `}`) : ``;
}
function Hh(e) {
  var t = lh(e);
  return function (n, r, i, a) {
    for (var o = ``, s = 0; s < t; s++) o += e[s](n, r, i, a) || ``;
    return o;
  };
}
function Uh(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Wh(e) {
  var t = Object.create(null);
  return function (n) {
    return (t[n] === void 0 && (t[n] = e(n)), t[n]);
  };
}
var Gh = function (e, t, n) {
    for (var r = 0, i = 0; (r = i), (i = Ch()), r === 38 && i === 12 && (t[n] = 1), !Eh(i); ) Sh();
    return Th(e, hh);
  },
  Kh = function (e, t) {
    var n = -1,
      r = 44;
    do
      switch (Eh(r)) {
        case 0:
          (r === 38 && Ch() === 12 && (t[n] = 1), (e[n] += Gh(hh - 1, t, n)));
          break;
        case 2:
          e[n] += kh(r);
          break;
        case 4:
          if (r === 44) {
            ((e[++n] = Ch() === 58 ? `&\f` : ``), (t[n] = e[n].length));
            break;
          }
        default:
          e[n] += eh(r);
      }
    while ((r = Sh()));
    return e;
  },
  qh = function (e, t) {
    return Oh(Kh(Dh(e), t));
  },
  Jh = new WeakMap(),
  Yh = function (e) {
    if (!(e.type !== `rule` || !e.parent || e.length < 1)) {
      for (
        var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
        n.type !== `rule`;
      )
        if (((n = n.parent), !n)) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Jh.get(n)) && !r) {
        Jh.set(e, !0);
        for (var i = [], a = qh(t, i), o = n.props, s = 0, c = 0; s < a.length; s++)
          for (var l = 0; l < o.length; l++, c++)
            e.props[c] = i[s] ? a[s].replace(/&\f/g, o[l]) : o[l] + ` ` + a[s];
      }
    }
  },
  Xh = function (e) {
    if (e.type === `decl`) {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && ((e.return = ``), (e.value = ``));
    }
  };
function Zh(e, t) {
  switch (nh(e, t)) {
    case 5103:
      return Z + `print-` + e + e;
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
      return Z + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Z + e + Km + e + Gm + e + e;
    case 6828:
    case 4268:
      return Z + e + Gm + e + e;
    case 6165:
      return Z + e + Gm + `flex-` + e + e;
    case 5187:
      return Z + e + Q(e, /(\w+).+(:[^]+)/, Z + `box-$1$2` + Gm + `flex-$1$2`) + e;
    case 5443:
      return Z + e + Gm + `flex-item-` + Q(e, /flex-|-self/, ``) + e;
    case 4675:
      return Z + e + Gm + `flex-line-pack` + Q(e, /align-content|flex-|-self/, ``) + e;
    case 5548:
      return Z + e + Gm + Q(e, `shrink`, `negative`) + e;
    case 5292:
      return Z + e + Gm + Q(e, `basis`, `preferred-size`) + e;
    case 6060:
      return Z + `box-` + Q(e, `-grow`, ``) + Z + e + Gm + Q(e, `grow`, `positive`) + e;
    case 4554:
      return Z + Q(e, /([^-])(transform)/g, `$1` + Z + `$2`) + e;
    case 6187:
      return Q(Q(Q(e, /(zoom-|grab)/, Z + `$1`), /(image-set)/, Z + `$1`), e, ``) + e;
    case 5495:
    case 3959:
      return Q(e, /(image-set\([^]*)/, Z + "$1$`$1");
    case 4968:
      return (
        Q(
          Q(e, /(.+:)(flex-)?(.*)/, Z + `box-pack:$3` + Gm + `flex-pack:$3`),
          /s.+-b[^;]+/,
          `justify`,
        ) +
        Z +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Q(e, /(.+)-inline(.+)/, Z + `$1$2`) + e;
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
      if (ch(e) - 1 - t > 6)
        switch (oh(e, t + 1)) {
          case 109:
            if (oh(e, t + 4) !== 45) break;
          case 102:
            return (
              Q(
                e,
                /(.+:)(.+)-([^]+)/,
                `$1` + Z + `$2-$3$1` + Km + (oh(e, t + 3) == 108 ? `$3` : `$2-$3`),
              ) + e
            );
          case 115:
            return ~ah(e, `stretch`) ? Zh(Q(e, `stretch`, `fill-available`), t) + e : e;
        }
      break;
    case 4949:
      if (oh(e, t + 1) !== 115) break;
    case 6444:
      switch (oh(e, ch(e) - 3 - (~ah(e, `!important`) && 10))) {
        case 107:
          return Q(e, `:`, `:` + Z) + e;
        case 101:
          return (
            Q(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              `$1` +
                Z +
                (oh(e, 14) === 45 ? `inline-` : ``) +
                `box$3$1` +
                Z +
                `$2$3$1` +
                Gm +
                `$2box$3`,
            ) + e
          );
      }
      break;
    case 5936:
      switch (oh(e, t + 11)) {
        case 114:
          return Z + e + Gm + Q(e, /[svh]\w+-[tblr]{2}/, `tb`) + e;
        case 108:
          return Z + e + Gm + Q(e, /[svh]\w+-[tblr]{2}/, `tb-rl`) + e;
        case 45:
          return Z + e + Gm + Q(e, /[svh]\w+-[tblr]{2}/, `lr`) + e;
      }
      return Z + e + Gm + e + e;
  }
  return e;
}
var Qh = [
    function (e, t, n, r) {
      if (e.length > -1 && !e.return)
        switch (e.type) {
          case Ym:
            e.return = Zh(e.value, e.length);
            break;
          case Zm:
            return Bh([yh(e, { value: Q(e.value, `@`, `@` + Z) })], r);
          case Jm:
            if (e.length)
              return dh(e.props, function (t) {
                switch (ih(t, /(::plac\w+|:read-\w+)/)) {
                  case `:read-only`:
                  case `:read-write`:
                    return Bh([yh(e, { props: [Q(t, /:(read-\w+)/, `:` + Km + `$1`)] })], r);
                  case `::placeholder`:
                    return Bh(
                      [
                        yh(e, { props: [Q(t, /:(plac\w+)/, `:` + Z + `input-$1`)] }),
                        yh(e, { props: [Q(t, /:(plac\w+)/, `:` + Km + `$1`)] }),
                        yh(e, { props: [Q(t, /:(plac\w+)/, Gm + `input-$1`)] }),
                      ],
                      r,
                    );
                }
                return ``;
              });
        }
    },
  ],
  $h = function (e) {
    var t = e.key;
    if (t === `css`) {
      var n = document.querySelectorAll(`style[data-emotion]:not([data-s])`);
      Array.prototype.forEach.call(n, function (e) {
        e.getAttribute(`data-emotion`).indexOf(` `) !== -1 &&
          (document.head.appendChild(e), e.setAttribute(`data-s`, ``));
      });
    }
    var r = e.stylisPlugins || Qh,
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
      c = [Yh, Xh],
      l,
      u = [
        Vh,
        Uh(function (e) {
          l.insert(e);
        }),
      ],
      d = Hh(c.concat(r, u)),
      f = function (e) {
        return Bh(Fh(e), d);
      };
    s = function (e, t, n, r) {
      ((l = n), f(e ? e + `{` + t.styles + `}` : t.styles), r && (p.inserted[t.name] = !0));
    };
    var p = {
      key: t,
      sheet: new Wm({
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
  eg = i((e) => {
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
  tg = i((e, t) => {
    t.exports = eg();
  }),
  ng = i((e, t) => {
    var n = tg(),
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
  rg = !0;
function ig(e, t, n) {
  var r = ``;
  return (
    n.split(` `).forEach(function (n) {
      e[n] === void 0 ? n && (r += n + ` `) : t.push(e[n] + `;`);
    }),
    r
  );
}
var ag = function (e, t, n) {
    var r = e.key + `-` + t.name;
    (n === !1 || rg === !1) && e.registered[r] === void 0 && (e.registered[r] = t.styles);
  },
  og = function (e, t, n) {
    ag(e, t, n);
    var r = e.key + `-` + t.name;
    if (e.inserted[t.name] === void 0) {
      var i = t;
      do (e.insert(t === i ? `.` + r : ``, i, e.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function sg(e) {
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
var cg = {
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
  lg = !1,
  ug = /[A-Z]|^ms/g,
  dg = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  fg = function (e) {
    return e.charCodeAt(1) === 45;
  },
  pg = function (e) {
    return e != null && typeof e != `boolean`;
  },
  mg = Wh(function (e) {
    return fg(e) ? e : e.replace(ug, `-$&`).toLowerCase();
  }),
  hg = function (e, t) {
    switch (e) {
      case `animation`:
      case `animationName`:
        if (typeof t == `string`)
          return t.replace(dg, function (e, t, n) {
            return ((bg = { name: t, styles: n, next: bg }), t);
          });
    }
    return cg[e] !== 1 && !fg(e) && typeof t == `number` && t !== 0 ? t + `px` : t;
  },
  gg = `Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;
function _g(e, t, n) {
  if (n == null) return ``;
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case `boolean`:
      return ``;
    case `object`:
      var i = n;
      if (i.anim === 1) return ((bg = { name: i.name, styles: i.styles, next: bg }), i.name);
      var a = n;
      if (a.styles !== void 0) {
        var o = a.next;
        if (o !== void 0)
          for (; o !== void 0; )
            ((bg = { name: o.name, styles: o.styles, next: bg }), (o = o.next));
        return a.styles + `;`;
      }
      return vg(e, t, n);
    case `function`:
      if (e !== void 0) {
        var s = bg,
          c = n(e);
        return ((bg = s), _g(e, t, c));
      }
      break;
  }
  var l = n;
  if (t == null) return l;
  var u = t[l];
  return u === void 0 ? l : u;
}
function vg(e, t, n) {
  var r = ``;
  if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += _g(e, t, n[i]) + `;`;
  else
    for (var a in n) {
      var o = n[a];
      if (typeof o != `object`) {
        var s = o;
        t != null && t[s] !== void 0
          ? (r += a + `{` + t[s] + `}`)
          : pg(s) && (r += mg(a) + `:` + hg(a, s) + `;`);
      } else {
        if (a === `NO_COMPONENT_SELECTOR` && lg) throw Error(gg);
        if (Array.isArray(o) && typeof o[0] == `string` && (t == null || t[o[0]] === void 0))
          for (var c = 0; c < o.length; c++) pg(o[c]) && (r += mg(a) + `:` + hg(a, o[c]) + `;`);
        else {
          var l = _g(e, t, o);
          switch (a) {
            case `animation`:
            case `animationName`:
              r += mg(a) + `:` + l + `;`;
              break;
            default:
              r += a + `{` + l + `}`;
          }
        }
      }
    }
  return r;
}
var yg = /label:\s*([^\s;{]+)\s*(;|$)/g,
  bg;
function xg(e, t, n) {
  if (e.length === 1 && typeof e[0] == `object` && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0,
    i = ``;
  bg = void 0;
  var a = e[0];
  a == null || a.raw === void 0 ? ((r = !1), (i += _g(n, t, a))) : (i += a[0]);
  for (var o = 1; o < e.length; o++) ((i += _g(n, t, e[o])), r && (i += a[o]));
  yg.lastIndex = 0;
  for (var s = ``, c; (c = yg.exec(i)) !== null; ) s += `-` + c[1];
  return { name: sg(i) + s, styles: i, next: bg };
}
var Sg = function (e) {
    return e();
  },
  Cg = u.useInsertionEffect ? u.useInsertionEffect : !1,
  wg = Cg || Sg;
Cg || u.useLayoutEffect;
var Tg = u.createContext(typeof HTMLElement < `u` ? $h({ key: `css` }) : null);
Tg.Provider;
var Eg = function (e) {
    return (0, u.forwardRef)(function (t, n) {
      return e(t, (0, u.useContext)(Tg), n);
    });
  },
  Dg = u.createContext({}),
  Og = {}.hasOwnProperty,
  kg = `__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,
  Ag = function (e, t) {
    var n = {};
    for (var r in t) Og.call(t, r) && (n[r] = t[r]);
    return ((n[kg] = e), n);
  },
  jg = function (e) {
    var t = e.cache,
      n = e.serialized,
      r = e.isStringTag;
    return (
      ag(t, n, r),
      wg(function () {
        return og(t, n, r);
      }),
      null
    );
  },
  Mg = Eg(function (e, t, n) {
    var r = e.css;
    typeof r == `string` && t.registered[r] !== void 0 && (r = t.registered[r]);
    var i = e[kg],
      a = [r],
      o = ``;
    typeof e.className == `string`
      ? (o = ig(t.registered, a, e.className))
      : e.className != null && (o = e.className + ` `);
    var s = xg(a, void 0, u.useContext(Dg));
    o += t.key + `-` + s.name;
    var c = {};
    for (var l in e) Og.call(e, l) && l !== `css` && l !== kg && (c[l] = e[l]);
    return (
      (c.className = o),
      n && (c.ref = n),
      u.createElement(
        u.Fragment,
        null,
        u.createElement(jg, { cache: t, serialized: s, isStringTag: typeof i == `string` }),
        u.createElement(i, c),
      )
    );
  });
ng();
var Ng = function (e, t) {
  var n = arguments;
  if (t == null || !Og.call(t, `css`)) return u.createElement.apply(void 0, n);
  var r = n.length,
    i = Array(r);
  ((i[0] = Mg), (i[1] = Ag(e, t)));
  for (var a = 2; a < r; a++) i[a] = n[a];
  return u.createElement.apply(null, i);
};
(function (e) {
  var t;
  (function (e) {})((t ||= e.JSX ||= {}));
})((Ng ||= {}));
function Pg() {
  return xg([...arguments]);
}
var Fg = function e(t) {
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
function Ig(e, t, n) {
  var r = [],
    i = ig(e, r, n);
  return r.length < 2 ? n : i + t(r);
}
var Lg = function (e) {
    var t = e.cache,
      n = e.serializedArr;
    return (
      wg(function () {
        for (var e = 0; e < n.length; e++) og(t, n[e], !1);
      }),
      null
    );
  },
  Rg = Eg(function (e, t) {
    var n = [],
      r = function () {
        var e = xg([...arguments], t.registered);
        return (n.push(e), ag(t, e, !1), t.key + `-` + e.name);
      },
      i = {
        css: r,
        cx: function () {
          var e = [...arguments];
          return Ig(t.registered, r, Fg(e));
        },
        theme: u.useContext(Dg),
      },
      a = e.children(i);
    return u.createElement(
      u.Fragment,
      null,
      u.createElement(Lg, { cache: t, serializedArr: n }),
      a,
    );
  });
function zg(e, t) {
  var n = (0, u.useRef)(!0);
  (0, u.useEffect)(
    function () {
      (e && n.current && t && e.current && e.current.focus(), (n.current = !1));
    },
    [t, e],
  );
}
var Bg = 2,
  Vg = Pg({
    outline: `var(--ds-border-width-focused, 2px) solid var(--ds-border-focused, #4688EC)`,
    outlineOffset: Bg,
  }),
  Hg = Pg({
    outlineColor: `var(--ds-border-focused, #4688EC)`,
    outlineOffset: -Bg,
    outlineStyle: `solid`,
    outlineWidth: `var(--ds-border-width-focused, 2px)`,
  }),
  Ug = Pg({
    "&:focus": Vg,
    "&:focus-visible": Vg,
    "&:focus:not(:focus-visible)": { outline: `none` },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: `var(--ds-border-width, 1px) solid` },
    },
  }),
  Wg = Pg({
    "&:focus": Hg,
    "&:focus-visible": Hg,
    "&:focus:not(:focus-visible)": { outline: `none` },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: `var(--ds-border-width, 1px) solid`, outlineOffset: `-1px` },
    },
  }),
  Gg = (0, u.memo)(function (e) {
    var t = e.children,
      n = e.isInset,
      r = e.focus,
      i = r === void 0 ? (n ? Wg : Ug) : r === `on` && (n ? Hg : Vg);
    return Ng(Rg, null, function (e) {
      var n = e.css,
        r = e.cx;
      return u.Children.only(
        i ? (0, u.cloneElement)(t, { className: r([n(i), t.props.className]) }) : t,
      );
    });
  });
Gg.displayName = `FocusRing`;
function Kg(e) {
  (e.preventDefault(), e.stopPropagation());
}
var qg = 9;
function Jg(e) {
  e.keyCode !== qg && Kg(e);
}
var Yg = {
    onMouseDownCapture: Kg,
    onMouseUpCapture: Kg,
    onKeyDownCapture: Jg,
    onKeyUpCapture: Jg,
    onTouchStartCapture: Kg,
    onTouchEndCapture: Kg,
    onPointerDownCapture: Kg,
    onPointerUpCapture: Kg,
    onClickCapture: Kg,
    onClick: Kg,
  },
  Xg = {};
function Zg(e) {
  return e.isInteractive ? Xg : Yg;
}
function Qg(e) {
  var t = e.spacing;
  return Pg({
    margin: t === `none` ? 0 : `0 2px`,
    flexGrow: 1,
    flexShrink: 1,
    overflow: `hidden`,
    textOverflow: `ellipsis`,
    whiteSpace: `nowrap`,
  });
}
function $g(e) {
  var t = e.hasOverlay;
  return Pg({ opacity: +!t, transition: `opacity 0.3s` });
}
function e_(e) {
  var t = e.spacing;
  return Pg({
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
var t_ = function (e) {
    return e && (0, u.isValidElement)(e) && e.type === Bm;
  },
  n_ = {
    position: `absolute`,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  r_ = [
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
  i_ = { "> *": { pointerEvents: `none` } },
  a_ = Pg({
    "--ds--button--new-icon-padding-end": `var(--ds-space-025, 2px)`,
    "--ds--button--new-icon-padding-start": `var(--ds-space-050, 4px)`,
    marginInlineStart: `var(--ds-space-negative-025, -2px)`,
  }),
  o_ = Pg({
    "--ds--button--new-icon-padding-end": `var(--ds-space-050, 4px)`,
    "--ds--button--new-icon-padding-start": `var(--ds-space-025, 2px)`,
    marginInlineEnd: `var(--ds-space-negative-025, -2px)`,
  }),
  s_ = function (e, t) {
    return !e || t_(e) ? null : t;
  },
  c_ = function (e, t) {
    return t_(e) ? e : e ? Ng(`span`, { css: t }, e) : null;
  },
  l_ = u.forwardRef(function (e, t) {
    var n = e.analyticsContext,
      r = e.appearance,
      i = r === void 0 ? `default` : r,
      a = e.autoFocus,
      o = a === void 0 ? !1 : a,
      s = e.buttonCss,
      c = e.children,
      l = e.className,
      d = e.href,
      f = e.component,
      p = f === void 0 ? (d ? `a` : `button`) : f,
      m = e.iconAfter,
      h = e.iconBefore,
      g = e.interactionName,
      _ = e.isDisabled,
      v = _ === void 0 ? !1 : _,
      y = e.isSelected,
      b = y === void 0 ? !1 : y,
      x = e.onBlur,
      S = e.onClick,
      C = S === void 0 ? cc : S,
      w = e.onFocus,
      T = e.onMouseDown,
      E = T === void 0 ? cc : T,
      D = e.overlay;
    e.shouldFitContainer;
    var ee = e.spacing,
      O = ee === void 0 ? `default` : ee,
      te = e.tabIndex,
      k = te === void 0 ? 0 : te,
      ne = e.type,
      re = ne === void 0 ? (d ? void 0 : `button`) : ne,
      ie = e.testId,
      ae = U(e, r_),
      oe = (0, u.useRef)(),
      se = (0, u.useCallback)(
        function (e) {
          if (((oe.current = e), t != null)) {
            if (typeof t == `function`) {
              t(e);
              return;
            }
            t.current = e;
          }
        },
        [oe, t],
      );
    zg(oe, o);
    var ce = (0, u.useContext)(Od),
      le = Bu({
        fn: (0, u.useCallback)(
          function (e, t) {
            (ce && ce.tracePress(g, e.timeStamp), C(e, t));
          },
          [C, ce, g],
        ),
        action: `clicked`,
        componentName: `button`,
        packageName: `@atlaskit/button`,
        packageVersion: `0.0.0-development`,
        analyticsData: n,
      }),
      ue = (0, u.useCallback)(
        function (e) {
          (e.preventDefault(), E(e));
        },
        [E],
      );
    (0, u.useEffect)(
      function () {
        var e = oe.current;
        v && e && e === document.activeElement && e.blur();
      },
      [v],
    );
    var de = !!D,
      A = Pg($g({ hasOverlay: de })),
      fe = !v && !de,
      pe = {};
    return (
      (b || v || i === `warning`) &&
        (pe = {
          "[data-theme] & circle": {
            stroke: `${b || v ? `var(--ds-icon-subtle, #505258)` : `var(--ds-icon-warning-inverse, #292A2E)`} !important`,
          },
        }),
      Ng(
        Gg,
        null,
        Ng(
          p,
          H(
            {},
            ae,
            {
              ref: se,
              className: l,
              css: [s, fe ? null : i_],
              "data-has-overlay": de ? !0 : void 0,
              "data-testid": ie,
              disabled: v,
              href: fe ? d : void 0,
              onBlur: x,
              onClick: le,
              onFocus: w,
              onMouseDown: ue,
              tabIndex: v ? -1 : k,
              type: re,
            },
            Zg({ isInteractive: fe }),
          ),
          h ? Ng(`span`, { css: [A, e_({ spacing: O }), s_(c, a_)] }, h) : null,
          c_(c, [A, Qg({ spacing: O })]),
          m ? Ng(`span`, { css: [A, e_({ spacing: O }), s_(c, o_)] }, m) : null,
          D ? Ng(`span`, { css: [n_, pe] }, D) : null,
        ),
      )
    );
  });
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
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : u_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var f_ = 8,
  p_ = [`default`, `primary`, `danger`, `warning`],
  m_ = { default: `${32 / 14}em`, compact: `${24 / 14}em`, none: `auto` },
  h_ = { default: m_.default, compact: m_.compact, none: `inherit` },
  g_ = { default: `0 ${f_ + f_ / 4}px`, compact: `0 ${f_ + f_ / 4}px`, none: `0` },
  __ = { compact: `0 ${f_ / 4}px`, default: `0 ${f_ / 4}px`, none: `0` },
  v_ = { default: `middle`, compact: `middle`, none: `baseline` },
  y_ = {
    borderRadius: `inherit`,
    inset: `var(--ds-space-0, 0px)`,
    borderStyle: `solid`,
    borderWidth: `var(--ds-border-width, 1px)`,
    pointerEvents: `none`,
    position: `absolute`,
  },
  b_ = {
    background: `var(--ds-background-neutral-subtle, #00000000)`,
    color: `var(--ds-text, #292A2E)`,
    "&::after": d_(d_({}, y_), {}, { content: `""`, borderColor: `var(--ds-border, #0B120E24)` }),
    "&:hover": { background: `var(--ds-background-neutral-hovered, #0B120E24)` },
    "&:active": { background: `var(--ds-background-neutral-pressed, #080F214A)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-neutral-subtle, #00000000)`,
    },
    "&:disabled[disabled]": { background: `var(--ds-background-neutral-subtle, #00000000)` },
    "&:disabled[disabled]:hover": { background: `var(--ds-background-neutral-subtle, #00000000)` },
    "&:disabled[disabled]:active": { background: `var(--ds-background-neutral-subtle, #00000000)` },
  },
  x_ = {
    background: `var(--ds-background-brand-bold, #1868DB)`,
    color: `var(--ds-text-inverse, #FFFFFF)`,
    "&:hover": { background: `var(--ds-background-brand-bold-hovered, #1558BC)` },
    "&:active": { background: `var(--ds-background-brand-bold-pressed, #144794)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-brand-bold, #1868DB)`,
    },
  },
  S_ = {
    background: `transparent`,
    color: `var(--ds-link, #1868DB)`,
    "&:hover": { color: `var(--ds-link, #1868DB)`, textDecoration: `underline` },
    "&:active": { color: `var(--ds-link-pressed, #1558BC)`, textDecoration: `underline` },
  },
  C_ = {
    background: `transparent`,
    color: `var(--ds-text-subtle, #505258)`,
    "&:hover": { background: `var(--ds-background-neutral-subtle-hovered, #0515240F)` },
    "&:active": { background: `var(--ds-background-neutral-subtle-pressed, #0B120E24)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: `transparent` },
  },
  w_ = {
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
  T_ = {
    background: `var(--ds-background-warning-bold, #FBC828)`,
    color: `var(--ds-text-warning-inverse, #292A2E)`,
    "&:hover": { background: `var(--ds-background-warning-bold-hovered, #FCA700)` },
    "&:active": { background: `var(--ds-background-warning-bold-pressed, #F68909)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-warning-bold, #FBC828)`,
    },
  },
  E_ = {
    background: `var(--ds-background-danger-bold, #C9372C)`,
    color: `var(--ds-text-inverse, #FFFFFF)`,
    "&:hover": { background: `var(--ds-background-danger-bold-hovered, #AE2E24)` },
    "&:active": { background: `var(--ds-background-danger-bold-pressed, #872821)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-danger-bold, #C9372C)`,
    },
  },
  D_ = {
    background: `var(--ds-background-selected, #E9F2FE)`,
    color: `var(--ds-text-selected, #1868DB)`,
    "&:not([disabled])::after": d_(
      d_({}, y_),
      {},
      { content: `""`, borderColor: `var(--ds-border-selected, #1868DB)` },
    ),
  },
  O_ = { '&[data-has-overlay="true"]': { cursor: `default`, textDecoration: `none` } };
function k_(e) {
  var t = e.appearance,
    n = e.spacing,
    r = e.isSelected,
    i = e.shouldFitContainer,
    a = e.isOnlySingleIcon;
  return d_(
    d_(
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
        height: m_[n],
        lineHeight: h_[n],
        padding: a ? __[n] : g_[n],
        verticalAlign: v_[n],
        width: i ? `100%` : `auto`,
        justifyContent: `center`,
      },
      r
        ? D_
        : d_(
            d_(
              d_(
                d_(
                  d_(
                    d_(
                      d_(d_({}, t === `default` && b_), t === `primary` && x_),
                      t === `link` && S_,
                    ),
                    t === `subtle` && C_,
                  ),
                  t === `subtle-link` && w_,
                ),
                t === `warning` && T_,
              ),
              t === `danger` && E_,
            ),
            {},
            {
              "&[disabled]": {
                color: `var(--ds-text-disabled, #080F214A)`,
                backgroundColor: p_.includes(t)
                  ? `var(--ds-background-disabled, #17171708)`
                  : `transparent`,
                cursor: `not-allowed`,
                textDecoration: `none`,
                "&:hovered": {
                  backgroundColor: p_.includes(t)
                    ? `var(--ds-background-disabled, #17171708)`
                    : `transparent`,
                },
                "&:active": {
                  backgroundColor: p_.includes(t)
                    ? `var(--ds-background-disabled, #17171708)`
                    : `transparent`,
                },
              },
            },
            O_,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function A_(e) {
  var t = e.children,
    n = e.iconBefore,
    r = e.iconAfter;
  return t_(t) ? !0 : t ? !1 : !!((n && !r) || (!n && r));
}
var j_ = [
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
  M_ = typeof navigator < `u` && navigator.userAgent.toLowerCase().indexOf(`firefox`) > -1,
  N_ = u.memo(
    u.forwardRef(function (e, t) {
      var n = e.appearance,
        r = n === void 0 ? `default` : n,
        i = e.children,
        a = e.iconBefore,
        o = e.iconAfter,
        s = e.isSelected,
        c = s === void 0 ? !1 : s,
        l = e.onMouseDown,
        d = l === void 0 ? cc : l,
        f = e.onMouseUp,
        p = f === void 0 ? cc : f,
        m = e.shouldFitContainer,
        h = m === void 0 ? !1 : m,
        g = e.spacing,
        _ = g === void 0 ? `default` : g,
        v = U(e, j_),
        y = A_({ children: i, iconBefore: a, iconAfter: o }),
        b = V((0, u.useState)(!1), 2),
        x = b[0],
        S = b[1],
        C = (0, u.useCallback)(
          function (e) {
            (d(e), M_ && S(!0));
          },
          [d, S],
        ),
        w = (0, u.useCallback)(
          function (e) {
            (p(e), M_ && S(!1));
          },
          [p, S],
        ),
        T = (0, u.useMemo)(
          function () {
            return k_({
              appearance: r,
              spacing: _,
              isSelected: c,
              shouldFitContainer: h,
              isOnlySingleIcon: y,
            });
          },
          [r, _, c, h, y],
        );
      return u.createElement(
        l_,
        H({}, v, {
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
N_.displayName = `Button`;
function P_(e) {
  return u.createElement(N_, {
    "aria-label": e[`aria-label`],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: `subtle`,
  });
}
function F_(e) {
  return u.createElement(N_, H({}, e, { appearance: `subtle` }));
}
var I_ = { container: `_1e0c1txw _kqswh2mm` };
function L_(e) {
  var t = e.key,
    n = e.testId,
    r = e.from,
    i = e.to;
  return u.createElement(
    yf,
    { as: `li`, testId: n, key: t, xcss: I_.container, paddingInline: `space.100` },
    u.createElement(
      $f,
      { testId: n && `${n}-text` },
      u.createElement(Bm, null, `Skipped pages from `, r, ` to `, i),
      `…`,
    ),
  );
}
var R_ = {},
  z_ =
    Number.isNaN ||
    function (e) {
      return typeof e == `number` && e !== e;
    };
function B_(e, t) {
  return !!(e === t || (z_(e) && z_(t)));
}
function V_(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!B_(e[n], t[n])) return !1;
  return !0;
}
function H_(e, t) {
  t === void 0 && (t = V_);
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
var U_ = function (e, t, n, r) {
    var i = n.max,
      a = n.ellipsis,
      o = n.transform,
      s = e.length,
      c = s > i,
      l = c && i - 4 < t,
      u = c && t < s - i + 3,
      d = H_(function () {
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
        Cc(d(0, 1)),
        [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: 2, to: s - f })],
        Cc(d(s - f)),
      );
    }
    if (!l && u) {
      var p = i - 2;
      return [].concat(
        Cc(d(0, p)),
        [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: p + 1, to: s - 1 })],
        Cc(d(s - 1)),
      );
    }
    var m = i - 4;
    return [].concat(
      Cc(d(0, 1)),
      [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: 2, to: t - Math.floor(m / 2) })],
      Cc(d(t - Math.floor(m / 2), t + m - 1)),
      [a({ key: `ellipsis-2`, testId: r && `${r}-ellipsis`, from: t + 3, to: s - 1 })],
      Cc(d(s - 1)),
    );
  },
  W_ = e(cf()),
  G_ = e(lf());
function K_(e, t) {
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
function q_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? K_(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : K_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var J_ = {
    paginationMenu: `_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t`,
    paginationMenuItem: `_1pfhze3t _ect4ttxp`,
    navigatorIconWrapper: `_18zr12x7`,
  },
  Y_ = {
    componentName: `pagination`,
    packageName: `@atlaskit/pagination`,
    packageVersion: `16.3.0`,
  };
function X_(e) {
  var t = e.chevronDirection === `left` ? W_.default : G_.default;
  return u.createElement(
    yf,
    { as: `span`, xcss: J_.navigatorIconWrapper },
    u.createElement(t, { label: ``, color: `currentColor`, size: `small` }),
  );
}
function Z_(e, t) {
  var n = e.components,
    r = n === void 0 ? R_ : n,
    i = e.defaultSelectedIndex,
    a = i === void 0 ? 0 : i,
    o = e.selectedIndex,
    s = e.label,
    c = s === void 0 ? `pagination` : s,
    l = e.pageLabel,
    d = l === void 0 ? `page` : l,
    f = e.previousLabel,
    p = f === void 0 ? `previous` : f,
    m = e.nextLabel,
    h = m === void 0 ? `next` : m,
    g = e.style,
    _ = g === void 0 ? R_ : g,
    v = e.max,
    y = v === void 0 ? 7 : v,
    b = e.onChange,
    x = b === void 0 ? cc : b,
    S = e.pages,
    C = e.getPageLabel,
    w = e.renderEllipsis,
    T = w === void 0 ? L_ : w,
    E = e.analyticsContext,
    D = e.testId,
    ee = e.isDisabled,
    O = V(
      Xd(o, function () {
        return a || 0;
      }),
      2,
    ),
    te = O[0],
    k = O[1],
    ne = Bu(
      q_(
        {
          fn: function (e, t) {
            var n = e.event,
              r = e.selectedPageIndex;
            (o === void 0 && k(r), x && x(n, S[r], t));
          },
          action: `changed`,
          actionSubject: `pageNumber`,
          analyticsData: E,
        },
        Y_,
      ),
    );
  return u.createElement(
    yf,
    { testId: D, style: _, ref: t, "aria-label": c, as: `nav` },
    u.createElement(
      Rf,
      { space: `space.0`, alignBlock: `center` },
      u.createElement(P_, {
        key: `left-navigator`,
        component: r.Previous,
        onClick: function (e) {
          return ne({ event: e, selectedPageIndex: te - 1 });
        },
        isDisabled: ee || te === 0,
        iconBefore: u.createElement(X_, { chevronDirection: `left` }),
        "aria-label": p,
        testId: D && `${D}--left-navigator`,
      }),
      u.createElement(
        Rf,
        { space: `space.0`, alignBlock: `baseline`, as: `ul`, xcss: J_.paginationMenu },
        U_(
          S,
          te,
          {
            max: y,
            ellipsis: T,
            transform: function (e, t, n) {
              var i = S[te],
                a = `${d} ${C ? C(e, t) : e}`,
                o = e === i;
              return u.createElement(
                Rf,
                { as: `li`, xcss: J_.paginationMenuItem, key: `page-${C ? C(e, t) : t}` },
                u.createElement(
                  F_,
                  {
                    component: r.Page,
                    onClick: function (e) {
                      return ne({ event: e, selectedPageIndex: t });
                    },
                    "aria-current": o ? `page` : void 0,
                    "aria-label": a,
                    isSelected: o,
                    isDisabled: ee,
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
      u.createElement(P_, {
        key: `right-navigator`,
        component: r.Next,
        onClick: function (e) {
          return ne({ event: e, selectedPageIndex: te + 1 });
        },
        isDisabled: ee || te === S.length - 1,
        iconBefore: u.createElement(X_, { chevronDirection: `right` }),
        "aria-label": h,
        testId: D && `${D}--right-navigator`,
      }),
    ),
  );
}
var Q_ = (0, u.memo)((0, u.forwardRef)(Z_));
function $_(e, t, n) {
  return (
    (t = z(t)),
    ac(e, ev() ? Reflect.construct(t, n || [], z(e).constructor) : t.apply(e, n))
  );
}
function ev() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ev = function () {
    return !!e;
  })();
}
var tv = (function (e) {
  function t() {
    var e;
    R(this, t);
    var n = [...arguments];
    return (
      (e = $_(this, t, [].concat(n))),
      B(e, `onChange`, function (t, n, r) {
        e.props.onChange(n, r);
      }),
      e
    );
  }
  return (
    sc(t, e),
    rc(t, [
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
            s = Cc(Array(t)).map(function (e, t) {
              return t + 1;
            }),
            c = r - 1;
          return u.createElement(Q_, {
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
})(u.Component);
X();
var nv = [`isRanking`, `testId`],
  rv = function (e) {
    var t = e.isRanking,
      n = e.testId,
      r = U(e, nv);
    return u.createElement(
      `thead`,
      H({ "data-testid": n }, r, { className: Y([`_179rglyw`, t && `_1e0c1ule`]) }),
    );
  };
function iv(e, t, n) {
  return (
    (t = z(t)),
    ac(e, av() ? Reflect.construct(t, n || [], z(e).constructor) : t.apply(e, n))
  );
}
function av() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (av = function () {
    return !!e;
  })();
}
function ov(e) {
  return (function (t) {
    function n() {
      var e;
      R(this, n);
      var t = [...arguments];
      return (
        (e = iv(this, n, [].concat(t))),
        B(e, `state`, { refWidth: 0, refHeight: 0 }),
        B(e, `innerRef`, function (t) {
          t && !e.props.isRanking && (e.ref = t);
        }),
        B(e, `updateDimensions`, function () {
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
      sc(n, t),
      rc(n, [
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
            return u.createElement(
              e,
              H({ refWidth: n, refHeight: r, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(u.Component);
}
var sv = function (e, t, n) {
    return e ? (n ? { width: t, height: n } : { width: t }) : {};
  },
  cv = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((sf(), t(of)));
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
  lv = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((sf(), t(of)));
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
function uv(e) {
  var t = e.onClose,
    n = e.isDisabled,
    r = (0, u.useRef)(!1),
    i = (0, u.useCallback)(
      function (e) {
        n || r.current || e.key !== `Escape` || ((r.current = !0), t(e));
      },
      [t, n],
    ),
    a = (0, u.useCallback)(function () {
      r.current = !1;
    }, []);
  (0, u.useEffect)(
    function () {
      if (!n)
        return (0, Xp.bindAll)(
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
function dv(e) {
  var t = (0, u.useRef)(e);
  return (
    (0, u.useEffect)(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
var fv = (0, u.createContext)(null),
  pv = (0, u.createContext)(null);
function mv() {
  return (0, u.useContext)(pv);
}
function hv(e) {
  var t = e.isOpen,
    n = e.type,
    r = e.onClose,
    i = (0, u.useContext)(fv),
    a = mv();
  (0, u.useEffect)(
    function () {
      if (i !== null && t) return i.onClose(r, { namespace: a, type: n });
    },
    [i, t, a, r, n],
  );
}
var gv = { none: 0, small: 100, medium: 350, large: 700 },
  _v = 0.5,
  vv = { none: gv.none, small: gv.small * _v, medium: gv.medium * _v, large: gv.large * _v },
  yv = function () {
    return typeof window < `u` && `matchMedia` in window;
  },
  bv = function () {
    return yv() ? window.matchMedia(`(prefers-reduced-motion: reduce)`).matches : !1;
  },
  xv = function (e) {
    switch (e.cleanup) {
      case `next-effect`:
        return;
      default:
        return [];
    }
  },
  Sv = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { cleanup: `unmount` },
      t = (0, u.useRef)([]);
    return (
      (0, u.useEffect)(function () {
        return function () {
          t.current.length &&
            (t.current.forEach(function (e) {
              return clearTimeout(e);
            }),
            (t.current = []));
        };
      }, xv(e)),
      (0, u.useCallback)(function (e, n) {
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
  Cv = { appear: !0, isExiting: !1 },
  wv = (0, u.createContext)(Cv),
  Tv = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cv;
    return u.createElement(wv.Provider, { key: `${e.key}-provider`, value: t }, e);
  },
  Ev = function (e) {
    var t = [];
    return (
      u.Children.toArray(e).forEach(function (e) {
        typeof e != `boolean` && e && t.push(e);
      }),
      t
    );
  },
  Dv = function (e, t) {
    for (var n = t.concat([]), r = Ov(t), i = 0; i < e.length; i++) {
      var a = e[i];
      r[a.key] || n.splice(i + 1, 0, a);
    }
    return n;
  },
  Ov = function (e) {
    return e.reduce(function (e, t) {
      return ((e[t.key] = t), e);
    }, {});
  },
  kv = function (e, t) {
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
  Av = (0, u.memo)(function (e) {
    var t = e.appear,
      n = t === void 0 ? !1 : t,
      r = e.children,
      i = e.exitThenEnter,
      a = V((0, u.useState)([null, r]), 2),
      o = a[0],
      s = a[1],
      c = V((0, u.useState)([]), 2),
      l = c[0],
      d = c[1],
      f = V(
        (0, u.useState)(function () {
          return { appear: n, isExiting: !1 };
        }),
        2,
      ),
      p = f[0],
      m = f[1];
    if (
      ((0, u.useEffect)(function () {
        p.appear || m({ appear: !0, isExiting: !1 });
      }, []),
      typeof o == `boolean`)
    )
      return r;
    var h = V(o, 2),
      g = h[0],
      _ = h[1],
      v = Ev(g),
      y = Ev(_);
    _ !== r && s([_, r]);
    var b = kv(y, v),
      x = !!b.size,
      S = y;
    if ((x && (S = Dv(y, v)), i))
      if (l.length) S = J(`platform-dst-motion-uplift`) ? v : l;
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
            return Tv(e, {
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
            return Tv(e, p);
          })),
      S
    );
  }),
  jv = function () {
    return (0, u.useContext)(wv);
  };
Av.displayName = `ExitingPersistence`;
function Mv() {
  var e = (0, u.useRef)(``);
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
var Nv = (0, u.createContext)(function () {
    return { isReady: !0, delay: 0, ref: cc };
  }),
  Pv = function () {
    var e = Mv();
    return (0, u.useContext)(Nv)(e);
  };
X();
var Fv = function (e) {
    var t = e.children,
      n = e.animationTimingFunction,
      r = e.animationTimingFunctionExiting,
      i = r === void 0 ? n : r,
      a = e.enteringAnimation,
      o = e.exitingAnimation,
      s = o === void 0 ? a : o,
      c = e.isPaused,
      l = e.onFinish,
      d = e.duration,
      f = d === void 0 ? `large` : d,
      p = Pv(),
      m = jv(),
      h = m.isExiting,
      g = m.onFinish,
      _ = m.appear,
      v = Sv(),
      y = c || !p.isReady,
      b = h ? 0 : p.delay,
      x = h ? `exiting` : `entering`,
      S = V((0, u.useState)(_), 2),
      C = S[0],
      w = S[1];
    return (
      (0, u.useEffect)(
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
            if (bv()) {
              t();
              return;
            }
            return (
              w(!0),
              v(t, h ? vv[f] : gv[f] + b),
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
            ? Y([
                Y([`_1o51eoah _1y0co91m _1bumglyw _sedtglyw`]),
                y && Y([`_1y0ctrqk`]),
                f === `small` && Y([`_5sag1yx9`]),
                f === `medium` && Y([`_5sag1ttt`]),
                f === `large` && Y([`_5sagpwmj`]),
                h && f === `small` && Y([`_5sag14ed`]),
                h && f === `medium` && Y([`_5sagluct`]),
                h && f === `large` && Y([`_5sag1ttt`]),
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
  Iv = { top: `bottom`, bottom: `top`, left: `right`, right: `left` },
  Lv = function (e) {
    var t = e.children,
      n = e.duration,
      r = n === void 0 ? `large` : n,
      i = e.entranceDirection,
      a = e.exitDirection,
      o = e.distance,
      s = o === void 0 ? `proportional` : o,
      c = e.onFinish,
      l = e.isPaused,
      d = i === void 0 ? void 0 : Iv[i],
      f = a || d ? `fade-out-from-${a || d}${s === `proportional` ? `` : `-constant`}` : `fade-out`;
    return u.createElement(
      Fv,
      {
        duration: r,
        enteringAnimation: i
          ? `fade-in-from-${i}${s === `proportional` ? `` : `-constant`}`
          : `fade-in`,
        exitingAnimation: f,
        animationTimingFunction: `ease-in-out`,
        onFinish: c,
        isPaused: l,
      },
      t,
    );
  };
function Rv(e) {
  return function (t) {
    e.forEach(function (e) {
      typeof e == `function` ? e(t) : e !== null && $s(e) === `object` && (e.current = t);
    });
  };
}
var zv = u.createContext();
u.createContext();
var Bv = function (e) {
    return Array.isArray(e) ? e[0] : e;
  },
  Vv = function (e) {
    if (typeof e == `function`) {
      var t = [...arguments].slice(1);
      return e.apply(void 0, t);
    }
  },
  Hv = function (e, t) {
    if (typeof e == `function`) return Vv(e, t);
    e != null && (e.current = t);
  },
  Uv = function (e) {
    return e.reduce(function (e, t) {
      var n = t[0];
      return ((e[n] = t[1]), e);
    }, {});
  },
  Wv =
    typeof window < `u` && window.document && window.document.createElement
      ? u.useLayoutEffect
      : u.useEffect,
  Gv = `bottom`,
  Kv = `right`,
  qv = `left`,
  Jv = `auto`,
  Yv = [`top`, Gv, Kv, qv],
  Xv = `start`,
  Zv = `clippingParents`,
  Qv = `viewport`,
  $v = `popper`,
  ey = `reference`,
  ty = Yv.reduce(function (e, t) {
    return e.concat([t + `-` + Xv, t + `-end`]);
  }, []),
  ny = [].concat(Yv, [Jv]).reduce(function (e, t) {
    return e.concat([t, t + `-` + Xv, t + `-end`]);
  }, []),
  ry = [
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
function iy(e) {
  return e ? (e.nodeName || ``).toLowerCase() : null;
}
function ay(e) {
  if (e == null) return window;
  if (e.toString() !== `[object Window]`) {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function oy(e) {
  return e instanceof ay(e).Element || e instanceof Element;
}
function sy(e) {
  return e instanceof ay(e).HTMLElement || e instanceof HTMLElement;
}
function cy(e) {
  return typeof ShadowRoot > `u` ? !1 : e instanceof ay(e).ShadowRoot || e instanceof ShadowRoot;
}
function ly(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (e) {
    var n = t.styles[e] || {},
      r = t.attributes[e] || {},
      i = t.elements[e];
    !sy(i) ||
      !iy(i) ||
      (Object.assign(i.style, n),
      Object.keys(r).forEach(function (e) {
        var t = r[e];
        t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? `` : t);
      }));
  });
}
function uy(e) {
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
        !sy(r) ||
          !iy(r) ||
          (Object.assign(r.style, a),
          Object.keys(i).forEach(function (e) {
            r.removeAttribute(e);
          }));
      });
    }
  );
}
var dy = {
  name: `applyStyles`,
  enabled: !0,
  phase: `write`,
  fn: ly,
  effect: uy,
  requires: [`computeStyles`],
};
function fy(e) {
  return e.split(`-`)[0];
}
var py = Math.max,
  my = Math.min,
  hy = Math.round;
function gy() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (e) {
          return e.brand + `/` + e.version;
        })
        .join(` `)
    : navigator.userAgent;
}
function _y() {
  return !/^((?!chrome|android).)*safari/i.test(gy());
}
function vy(e, t, n) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  var r = e.getBoundingClientRect(),
    i = 1,
    a = 1;
  t &&
    sy(e) &&
    ((i = (e.offsetWidth > 0 && hy(r.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && hy(r.height) / e.offsetHeight) || 1));
  var o = (oy(e) ? ay(e) : window).visualViewport,
    s = !_y() && n,
    c = (r.left + (s && o ? o.offsetLeft : 0)) / i,
    l = (r.top + (s && o ? o.offsetTop : 0)) / a,
    u = r.width / i,
    d = r.height / a;
  return { width: u, height: d, top: l, right: c + u, bottom: l + d, left: c, x: c, y: l };
}
function yy(e) {
  var t = vy(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function by(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && cy(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function xy(e) {
  return ay(e).getComputedStyle(e);
}
function Sy(e) {
  return [`table`, `td`, `th`].indexOf(iy(e)) >= 0;
}
function Cy(e) {
  return ((oy(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function wy(e) {
  return iy(e) === `html` ? e : e.assignedSlot || e.parentNode || (cy(e) ? e.host : null) || Cy(e);
}
function Ty(e) {
  return !sy(e) || xy(e).position === `fixed` ? null : e.offsetParent;
}
function Ey(e) {
  var t = /firefox/i.test(gy());
  if (/Trident/i.test(gy()) && sy(e) && xy(e).position === `fixed`) return null;
  var n = wy(e);
  for (cy(n) && (n = n.host); sy(n) && [`html`, `body`].indexOf(iy(n)) < 0; ) {
    var r = xy(n);
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
function Dy(e) {
  for (var t = ay(e), n = Ty(e); n && Sy(n) && xy(n).position === `static`; ) n = Ty(n);
  return n && (iy(n) === `html` || (iy(n) === `body` && xy(n).position === `static`))
    ? t
    : n || Ey(e) || t;
}
function Oy(e) {
  return [`top`, `bottom`].indexOf(e) >= 0 ? `x` : `y`;
}
function ky(e, t, n) {
  return py(e, my(t, n));
}
function Ay(e, t, n) {
  var r = ky(e, t, n);
  return r > n ? n : r;
}
function jy() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function My(e) {
  return Object.assign({}, jy(), e);
}
function Ny(e, t) {
  return t.reduce(function (t, n) {
    return ((t[n] = e), t);
  }, {});
}
var Py = function (e, t) {
  return (
    (e = typeof e == `function` ? e(Object.assign({}, t.rects, { placement: t.placement })) : e),
    My(typeof e == `number` ? Ny(e, Yv) : e)
  );
};
function Fy(e) {
  var t,
    n = e.state,
    r = e.name,
    i = e.options,
    a = n.elements.arrow,
    o = n.modifiersData.popperOffsets,
    s = fy(n.placement),
    c = Oy(s),
    l = [`left`, `right`].indexOf(s) >= 0 ? `height` : `width`;
  if (!(!a || !o)) {
    var u = Py(i.padding, n),
      d = yy(a),
      f = c === `y` ? `top` : qv,
      p = c === `y` ? Gv : Kv,
      m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l],
      h = o[c] - n.rects.reference[c],
      g = Dy(a),
      _ = g ? (c === `y` ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
      v = m / 2 - h / 2,
      y = u[f],
      b = _ - d[l] - u[p],
      x = _ / 2 - d[l] / 2 + v,
      S = ky(y, x, b),
      C = c;
    n.modifiersData[r] = ((t = {}), (t[C] = S), (t.centerOffset = S - x), t);
  }
}
function Iy(e) {
  var t = e.state,
    n = e.options.element,
    r = n === void 0 ? `[data-popper-arrow]` : n;
  r != null &&
    ((typeof r == `string` && ((r = t.elements.popper.querySelector(r)), !r)) ||
      (by(t.elements.popper, r) && (t.elements.arrow = r)));
}
var Ly = {
  name: `arrow`,
  enabled: !0,
  phase: `main`,
  fn: Fy,
  effect: Iy,
  requires: [`popperOffsets`],
  requiresIfExists: [`preventOverflow`],
};
function Ry(e) {
  return e.split(`-`)[1];
}
var zy = { top: `auto`, right: `auto`, bottom: `auto`, left: `auto` };
function By(e, t) {
  var n = e.x,
    r = e.y,
    i = t.devicePixelRatio || 1;
  return { x: hy(n * i) / i || 0, y: hy(r * i) / i || 0 };
}
function Vy(e) {
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
    y = qv,
    b = `top`,
    x = window;
  if (l) {
    var S = Dy(n),
      C = `clientHeight`,
      w = `clientWidth`;
    if (
      (S === ay(n) &&
        ((S = Cy(n)),
        xy(S).position !== `static` &&
          s === `absolute` &&
          ((C = `scrollHeight`), (w = `scrollWidth`))),
      (S = S),
      i === `top` || ((i === `left` || i === `right`) && a === `end`))
    ) {
      b = Gv;
      var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
      ((h -= T - r.height), (h *= c ? 1 : -1));
    }
    if (i === `left` || ((i === `top` || i === `bottom`) && a === `end`)) {
      y = Kv;
      var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
      ((p -= E - r.width), (p *= c ? 1 : -1));
    }
  }
  var D = Object.assign({ position: s }, l && zy),
    ee = u === !0 ? By({ x: p, y: h }, ay(n)) : { x: p, y: h };
  if (((p = ee.x), (h = ee.y), c)) {
    var O;
    return Object.assign(
      {},
      D,
      ((O = {}),
      (O[b] = v ? `0` : ``),
      (O[y] = _ ? `0` : ``),
      (O.transform =
        (x.devicePixelRatio || 1) <= 1
          ? `translate(` + p + `px, ` + h + `px)`
          : `translate3d(` + p + `px, ` + h + `px, 0)`),
      O),
    );
  }
  return Object.assign(
    {},
    D,
    ((t = {}), (t[b] = v ? h + `px` : ``), (t[y] = _ ? p + `px` : ``), (t.transform = ``), t),
  );
}
function Hy(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    i = r === void 0 ? !0 : r,
    a = n.adaptive,
    o = a === void 0 ? !0 : a,
    s = n.roundOffsets,
    c = s === void 0 ? !0 : s,
    l = {
      placement: fy(t.placement),
      variation: Ry(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === `fixed`,
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Vy(
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
        Vy(
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
var Uy = { name: `computeStyles`, enabled: !0, phase: `beforeWrite`, fn: Hy, data: {} },
  Wy = { passive: !0 };
function Gy(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    i = r.scroll,
    a = i === void 0 ? !0 : i,
    o = r.resize,
    s = o === void 0 ? !0 : o,
    c = ay(t.elements.popper),
    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    a &&
      l.forEach(function (e) {
        e.addEventListener(`scroll`, n.update, Wy);
      }),
    s && c.addEventListener(`resize`, n.update, Wy),
    function () {
      (a &&
        l.forEach(function (e) {
          e.removeEventListener(`scroll`, n.update, Wy);
        }),
        s && c.removeEventListener(`resize`, n.update, Wy));
    }
  );
}
var Ky = {
    name: `eventListeners`,
    enabled: !0,
    phase: `write`,
    fn: function () {},
    effect: Gy,
    data: {},
  },
  qy = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function Jy(e) {
  return e.replace(/left|right|bottom|top/g, function (e) {
    return qy[e];
  });
}
var Yy = { start: `end`, end: `start` };
function Xy(e) {
  return e.replace(/start|end/g, function (e) {
    return Yy[e];
  });
}
function Zy(e) {
  var t = ay(e);
  return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Qy(e) {
  return vy(Cy(e)).left + Zy(e).scrollLeft;
}
function $y(e, t) {
  var n = ay(e),
    r = Cy(e),
    i = n.visualViewport,
    a = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    c = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    var l = _y();
    (l || (!l && t === `fixed`)) && ((s = i.offsetLeft), (c = i.offsetTop));
  }
  return { width: a, height: o, x: s + Qy(e), y: c };
}
function eb(e) {
  var t = Cy(e),
    n = Zy(e),
    r = e.ownerDocument?.body,
    i = py(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
    a = py(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
    o = -n.scrollLeft + Qy(e),
    s = -n.scrollTop;
  return (
    xy(r || t).direction === `rtl` && (o += py(t.clientWidth, r ? r.clientWidth : 0) - i),
    { width: i, height: a, x: o, y: s }
  );
}
function tb(e) {
  var t = xy(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function nb(e) {
  return [`html`, `body`, `#document`].indexOf(iy(e)) >= 0
    ? e.ownerDocument.body
    : sy(e) && tb(e)
      ? e
      : nb(wy(e));
}
function rb(e, t) {
  t === void 0 && (t = []);
  var n = nb(e),
    r = n === e.ownerDocument?.body,
    i = ay(n),
    a = r ? [i].concat(i.visualViewport || [], tb(n) ? n : []) : n,
    o = t.concat(a);
  return r ? o : o.concat(rb(wy(a)));
}
function ib(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function ab(e, t) {
  var n = vy(e, !1, t === `fixed`);
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
function ob(e, t, n) {
  return t === `viewport` ? ib($y(e, n)) : oy(t) ? ab(t, n) : ib(eb(Cy(e)));
}
function sb(e) {
  var t = rb(wy(e)),
    n = [`absolute`, `fixed`].indexOf(xy(e).position) >= 0 && sy(e) ? Dy(e) : e;
  return oy(n)
    ? t.filter(function (e) {
        return oy(e) && by(e, n) && iy(e) !== `body`;
      })
    : [];
}
function cb(e, t, n, r) {
  var i = t === `clippingParents` ? sb(e) : [].concat(t),
    a = [].concat(i, [n]),
    o = a[0],
    s = a.reduce(
      function (t, n) {
        var i = ob(e, n, r);
        return (
          (t.top = py(i.top, t.top)),
          (t.right = my(i.right, t.right)),
          (t.bottom = my(i.bottom, t.bottom)),
          (t.left = py(i.left, t.left)),
          t
        );
      },
      ob(e, o, r),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function lb(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    i = r ? fy(r) : null,
    a = r ? Ry(r) : null,
    o = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    c;
  switch (i) {
    case `top`:
      c = { x: o, y: t.y - n.height };
      break;
    case Gv:
      c = { x: o, y: t.y + t.height };
      break;
    case Kv:
      c = { x: t.x + t.width, y: s };
      break;
    case qv:
      c = { x: t.x - n.width, y: s };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var l = i ? Oy(i) : null;
  if (l != null) {
    var u = l === `y` ? `height` : `width`;
    switch (a) {
      case Xv:
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
function ub(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = r === void 0 ? e.placement : r,
    a = n.strategy,
    o = a === void 0 ? e.strategy : a,
    s = n.boundary,
    c = s === void 0 ? Zv : s,
    l = n.rootBoundary,
    u = l === void 0 ? Qv : l,
    d = n.elementContext,
    f = d === void 0 ? $v : d,
    p = n.altBoundary,
    m = p === void 0 ? !1 : p,
    h = n.padding,
    g = h === void 0 ? 0 : h,
    _ = My(typeof g == `number` ? Ny(g, Yv) : g),
    v = f === `popper` ? ey : $v,
    y = e.rects.popper,
    b = e.elements[m ? v : f],
    x = cb(oy(b) ? b : b.contextElement || Cy(e.elements.popper), c, u, o),
    S = vy(e.elements.reference),
    C = lb({ reference: S, element: y, strategy: `absolute`, placement: i }),
    w = ib(Object.assign({}, y, C)),
    T = f === `popper` ? w : S,
    E = {
      top: x.top - T.top + _.top,
      bottom: T.bottom - x.bottom + _.bottom,
      left: x.left - T.left + _.left,
      right: T.right - x.right + _.right,
    },
    D = e.modifiersData.offset;
  if (f === `popper` && D) {
    var ee = D[i];
    Object.keys(E).forEach(function (e) {
      var t = [`right`, `bottom`].indexOf(e) >= 0 ? 1 : -1,
        n = [`top`, `bottom`].indexOf(e) >= 0 ? `y` : `x`;
      E[e] += ee[n] * t;
    });
  }
  return E;
}
function db(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = n.boundary,
    a = n.rootBoundary,
    o = n.padding,
    s = n.flipVariations,
    c = n.allowedAutoPlacements,
    l = c === void 0 ? ny : c,
    u = Ry(r),
    d = u
      ? s
        ? ty
        : ty.filter(function (e) {
            return Ry(e) === u;
          })
      : Yv,
    f = d.filter(function (e) {
      return l.indexOf(e) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (t, n) {
    return ((t[n] = ub(e, { placement: n, boundary: i, rootBoundary: a, padding: o })[fy(n)]), t);
  }, {});
  return Object.keys(p).sort(function (e, t) {
    return p[e] - p[t];
  });
}
function fb(e) {
  if (fy(e) === `auto`) return [];
  var t = Jy(e);
  return [Xy(e), t, Xy(t)];
}
function pb(e) {
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
        _ = fy(g) === g,
        v = c || (_ || !m ? [Jy(g)] : fb(g)),
        y = [g].concat(v).reduce(function (e, n) {
          return e.concat(
            fy(n) === `auto`
              ? db(t, {
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
        D = fy(E),
        ee = Ry(E) === Xv,
        O = [`top`, Gv].indexOf(D) >= 0,
        te = O ? `width` : `height`,
        k = ub(t, { placement: E, boundary: u, rootBoundary: d, altBoundary: f, padding: l }),
        ne = O ? (ee ? Kv : qv) : ee ? Gv : `top`;
      b[te] > x[te] && (ne = Jy(ne));
      var re = Jy(ne),
        ie = [];
      if (
        (a && ie.push(k[D] <= 0),
        s && ie.push(k[ne] <= 0, k[re] <= 0),
        ie.every(function (e) {
          return e;
        }))
      ) {
        ((w = E), (C = !1));
        break;
      }
      S.set(E, ie);
    }
    if (C)
      for (
        var ae = m ? 3 : 1,
          oe = function (e) {
            var t = y.find(function (t) {
              var n = S.get(t);
              if (n)
                return n.slice(0, e).every(function (e) {
                  return e;
                });
            });
            if (t) return ((w = t), `break`);
          },
          se = ae;
        se > 0 && oe(se) !== `break`;
        se--
      );
    t.placement !== w && ((t.modifiersData[r]._skip = !0), (t.placement = w), (t.reset = !0));
  }
}
var mb = {
  name: `flip`,
  enabled: !0,
  phase: `main`,
  fn: pb,
  requiresIfExists: [`offset`],
  data: { _skip: !1 },
};
function hb(e, t, n) {
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
function gb(e) {
  return [`top`, Kv, Gv, qv].some(function (t) {
    return e[t] >= 0;
  });
}
function _b(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    i = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    o = ub(t, { elementContext: `reference` }),
    s = ub(t, { altBoundary: !0 }),
    c = hb(o, r),
    l = hb(s, i, a),
    u = gb(c),
    d = gb(l);
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
var vb = {
  name: `hide`,
  enabled: !0,
  phase: `main`,
  requiresIfExists: [`preventOverflow`],
  fn: _b,
};
function yb(e, t, n) {
  var r = fy(e),
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
function bb(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.offset,
    a = i === void 0 ? [0, 0] : i,
    o = ny.reduce(function (e, n) {
      return ((e[n] = yb(n, t.rects, a)), e);
    }, {}),
    s = o[t.placement],
    c = s.x,
    l = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[r] = o));
}
var xb = { name: `offset`, enabled: !0, phase: `main`, requires: [`popperOffsets`], fn: bb };
function Sb(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = lb({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: `absolute`,
    placement: t.placement,
  });
}
var Cb = { name: `popperOffsets`, enabled: !0, phase: `read`, fn: Sb, data: {} };
function wb(e) {
  return e === `x` ? `y` : `x`;
}
function Tb(e) {
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
    g = ub(t, { boundary: c, rootBoundary: l, padding: d, altBoundary: u }),
    _ = fy(t.placement),
    v = Ry(t.placement),
    y = !v,
    b = Oy(_),
    x = wb(b),
    S = t.modifiersData.popperOffsets,
    C = t.rects.reference,
    w = t.rects.popper,
    T = typeof h == `function` ? h(Object.assign({}, t.rects, { placement: t.placement })) : h,
    E =
      typeof T == `number`
        ? { mainAxis: T, altAxis: T }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
    D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    ee = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var O = b === `y` ? `top` : qv,
        te = b === `y` ? Gv : Kv,
        k = b === `y` ? `height` : `width`,
        ne = S[b],
        re = ne + g[O],
        ie = ne - g[te],
        ae = p ? -w[k] / 2 : 0,
        oe = v === `start` ? C[k] : w[k],
        se = v === `start` ? -w[k] : -C[k],
        ce = t.elements.arrow,
        le = p && ce ? yy(ce) : { width: 0, height: 0 },
        ue = t.modifiersData[`arrow#persistent`]
          ? t.modifiersData[`arrow#persistent`].padding
          : jy(),
        de = ue[O],
        A = ue[te],
        fe = ky(0, C[k], le[k]),
        pe = y ? C[k] / 2 - ae - fe - de - E.mainAxis : oe - fe - de - E.mainAxis,
        me = y ? -C[k] / 2 + ae + fe + A + E.mainAxis : se + fe + A + E.mainAxis,
        he = t.elements.arrow && Dy(t.elements.arrow),
        ge = he ? (b === `y` ? he.clientTop || 0 : he.clientLeft || 0) : 0,
        _e = D?.[b] ?? 0,
        ve = ne + pe - _e - ge,
        ye = ne + me - _e,
        j = ky(p ? my(re, ve) : re, ne, p ? py(ie, ye) : ie);
      ((S[b] = j), (ee[b] = j - ne));
    }
    if (s) {
      var M = b === `x` ? `top` : qv,
        be = b === `x` ? Gv : Kv,
        xe = S[x],
        Se = x === `y` ? `height` : `width`,
        Ce = xe + g[M],
        we = xe - g[be],
        Te = [`top`, qv].indexOf(_) !== -1,
        Ee = D?.[x] ?? 0,
        De = Te ? Ce : xe - C[Se] - w[Se] - Ee + E.altAxis,
        Oe = Te ? xe + C[Se] + w[Se] - Ee - E.altAxis : we,
        ke = p && Te ? Ay(De, xe, Oe) : ky(p ? De : Ce, xe, p ? Oe : we);
      ((S[x] = ke), (ee[x] = ke - xe));
    }
    t.modifiersData[r] = ee;
  }
}
var Eb = {
  name: `preventOverflow`,
  enabled: !0,
  phase: `main`,
  fn: Tb,
  requiresIfExists: [`offset`],
};
function Db(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Ob(e) {
  return e === ay(e) || !sy(e) ? Zy(e) : Db(e);
}
function kb(e) {
  var t = e.getBoundingClientRect(),
    n = hy(t.width) / e.offsetWidth || 1,
    r = hy(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Ab(e, t, n) {
  n === void 0 && (n = !1);
  var r = sy(t),
    i = sy(t) && kb(t),
    a = Cy(t),
    o = vy(e, i, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((iy(t) !== `body` || tb(a)) && (s = Ob(t)),
      sy(t) ? ((c = vy(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : a && (c.x = Qy(a))),
    {
      x: o.left + s.scrollLeft - c.x,
      y: o.top + s.scrollTop - c.y,
      width: o.width,
      height: o.height,
    }
  );
}
function jb(e) {
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
function Mb(e) {
  var t = jb(e);
  return ry.reduce(function (e, n) {
    return e.concat(
      t.filter(function (e) {
        return e.phase === n;
      }),
    );
  }, []);
}
function Nb(e) {
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
function Pb(e) {
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
var Fb = { placement: `bottom`, modifiers: [], strategy: `absolute` };
function Ib() {
  return ![...arguments].some(function (e) {
    return !(e && typeof e.getBoundingClientRect == `function`);
  });
}
function Lb(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = t.defaultOptions,
    a = i === void 0 ? Fb : i;
  return function (e, t, n) {
    n === void 0 && (n = a);
    var i = {
        placement: `bottom`,
        orderedModifiers: [],
        options: Object.assign({}, Fb, a),
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
              reference: oy(e) ? rb(e) : e.contextElement ? rb(e.contextElement) : [],
              popper: rb(t),
            }));
          var s = Mb(Pb([].concat(r, i.options.modifiers)));
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
            if (Ib(t, n)) {
              ((i.rects = {
                reference: Ab(t, Dy(n), i.options.strategy === `fixed`),
                popper: yy(n),
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
        update: Nb(function () {
          return new Promise(function (e) {
            (c.forceUpdate(), e(i));
          });
        }),
        destroy: function () {
          (u(), (s = !0));
        },
      };
    if (!Ib(e, t)) return c;
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
var Rb = Lb({ defaultModifiers: [Ky, Cb, Uy, dy, xb, mb, Eb, Ly, vb] }),
  zb = e(
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
  Bb = [],
  Vb = function (e, t, n) {
    n === void 0 && (n = {});
    var r = u.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || `bottom`,
        strategy: n.strategy || `absolute`,
        modifiers: n.modifiers || Bb,
      },
      a = u.useState({
        styles: {
          popper: { position: i.strategy, left: `0`, top: `0` },
          arrow: { position: `absolute` },
        },
        attributes: {},
      }),
      o = a[0],
      s = a[1],
      c = u.useMemo(function () {
        return {
          name: `updateState`,
          enabled: !0,
          phase: `write`,
          fn: function (e) {
            var t = e.state,
              n = Object.keys(t.elements);
            ts.flushSync(function () {
              s({
                styles: Uv(
                  n.map(function (e) {
                    return [e, t.styles[e] || {}];
                  }),
                ),
                attributes: Uv(
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
      l = u.useMemo(
        function () {
          var e = {
            onFirstUpdate: i.onFirstUpdate,
            placement: i.placement,
            strategy: i.strategy,
            modifiers: [].concat(i.modifiers, [c, { name: `applyStyles`, enabled: !1 }]),
          };
          return (0, zb.default)(r.current, e) ? r.current || e : ((r.current = e), e);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c],
      ),
      d = u.useRef();
    return (
      Wv(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      Wv(
        function () {
          if (!(e == null || t == null)) {
            var r = (n.createPopper || Rb)(e, t, l);
            return (
              (d.current = r),
              function () {
                (r.destroy(), (d.current = null));
              }
            );
          }
        },
        [e, t, n.createPopper],
      ),
      {
        state: d.current ? d.current.state : null,
        styles: o.styles,
        attributes: o.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  },
  Hb = function () {},
  Ub = function () {
    return Promise.resolve(null);
  },
  Wb = [];
function Gb(e) {
  var t = e.placement,
    n = t === void 0 ? `bottom` : t,
    r = e.strategy,
    i = r === void 0 ? `absolute` : r,
    a = e.modifiers,
    o = a === void 0 ? Wb : a,
    s = e.referenceElement,
    c = e.onFirstUpdate,
    l = e.innerRef,
    d = e.children,
    f = u.useContext(zv),
    p = u.useState(null),
    m = p[0],
    h = p[1],
    g = u.useState(null),
    _ = g[0],
    v = g[1];
  u.useEffect(
    function () {
      Hv(l, m);
    },
    [l, m],
  );
  var y = u.useMemo(
      function () {
        return {
          placement: n,
          strategy: i,
          onFirstUpdate: c,
          modifiers: [].concat(o, [{ name: `arrow`, enabled: _ != null, options: { element: _ } }]),
        };
      },
      [n, i, c, o, _],
    ),
    b = Vb(s || f, m, y),
    x = b.state,
    S = b.styles,
    C = b.forceUpdate,
    w = b.update,
    T = u.useMemo(
      function () {
        return {
          ref: h,
          style: S.popper,
          placement: x ? x.placement : n,
          hasPopperEscaped:
            x && x.modifiersData.hide ? x.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            x && x.modifiersData.hide ? x.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: S.arrow, ref: v },
          forceUpdate: C || Hb,
          update: w || Ub,
        };
      },
      [h, v, n, x, S, w, C],
    );
  return Bv(d)(T);
}
function Kb(e) {
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
            u = V(a.placement.split(`-`), 1)[0],
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
var qb = 5,
  Jb = [
    {
      name: `flip`,
      options: {
        flipVariations: !1,
        padding: qb,
        boundary: `clippingParents`,
        rootBoundary: `viewport`,
      },
    },
  ];
function Yb() {
  return null;
}
var Xb = [0, 8];
function Zb(e) {
  var t = e.children,
    n = t === void 0 ? Yb : t,
    r = e.offset,
    i = r === void 0 ? Xb : r,
    a = e.placement,
    o = a === void 0 ? `bottom-start` : a,
    s = e.referenceElement,
    c = s === void 0 ? void 0 : s,
    l = e.modifiers,
    d = e.strategy,
    f = d === void 0 ? `fixed` : d,
    p = e.shouldFitViewport,
    m = p === void 0 ? !1 : p,
    h = V(i, 2),
    g = h[0],
    _ = h[1],
    v = (0, u.useMemo)(
      function () {
        var e = {
            name: `preventOverflow`,
            options: { padding: qb, rootBoundary: m ? `viewport` : `document` },
          },
          t = { name: `offset`, options: { offset: [g, _] } },
          n = m ? Kb({ viewportPadding: qb }) : [];
        return [].concat(Jb, [e, t], Cc(n));
      },
      [g, _, m],
    ),
    y = (0, u.useMemo)(
      function () {
        return l == null ? v : [].concat(Cc(v), Cc(l));
      },
      [v, l],
    );
  return u.createElement(Gb, { modifiers: y, placement: o, strategy: f, referenceElement: c }, n);
}
var Qb = `atlaskit-portal-container`,
  $b = `body > .atlaskit-portal-container`,
  ex = `atlaskit-portal`,
  tx = function () {
    return document.body;
  },
  nx = function () {
    var e = document.querySelector($b);
    if (!e) {
      var t,
        n = document.createElement(`div`);
      return (
        (n.className = Qb),
        (n.style.display = `flex`),
        (t = tx()) == null || t.appendChild(n),
        n
      );
    }
    return e;
  },
  rx = function (e) {
    e.parentElement || nx().appendChild(e);
  },
  ix = function (e) {
    var t = document.createElement(`div`);
    return ((t.className = ex), (t.style.zIndex = `${e}`), t);
  },
  ax = function () {
    var e = document.querySelector($b);
    if (!e) {
      var t,
        n = document.createElement(`div`);
      return (
        (n.className = Qb),
        (n.style.display = `flex`),
        (t = tx()) == null || t.appendChild(n),
        n
      );
    }
    return e;
  },
  ox = function (e) {
    var t = ax();
    t.contains(e) && t.removeChild(e);
  };
function sx(e) {
  var t = e.zIndex,
    n = e.children,
    r = e.isClosed,
    i = r === void 0 ? !1 : r,
    a = (0, u.useMemo)(
      function () {
        return ix(t);
      },
      [t],
    ),
    o = Rm(),
    s = wm();
  return (
    rx(a),
    (0, u.useEffect)(
      function () {
        J(`import_into_jsm_in_template_gallery_killswitch`) && i && ox(a);
      },
      [i, a],
    ),
    (0, u.useEffect)(
      function () {
        return function () {
          ox(a);
        };
      },
      [a],
    ),
    (0, ts.createPortal)(
      (J(`platform-dst-portal-conditial-theme-provider`) ? s : o)
        ? u.createElement(Lm, { defaultColorMode: o }, n)
        : n,
      a,
    )
  );
}
var cx = typeof window < `u` ? u.useLayoutEffect : u.useEffect,
  lx = function () {
    return document !== void 0;
  },
  ux = function (e) {
    if (lx()) {
      var t = document.createElement(`div`);
      return ((t.className = ex), (t.style.zIndex = `${e}`), t);
    }
  },
  dx = function () {
    return document !== void 0;
  },
  fx = function () {
    if (dx()) {
      var e = document.querySelector($b);
      if (!e) {
        var t,
          n = document.createElement(`div`);
        return (
          (n.className = Qb),
          (n.style.display = `flex`),
          (t = tx()) == null || t.appendChild(n),
          n
        );
      }
      return e;
    }
  },
  px = function () {
    return document !== void 0;
  },
  mx = function (e) {
    if (px() && e) {
      var t;
      (t = tx()) == null || t.removeChild(e);
    }
  };
function hx(e) {
  var t = e.zIndex,
    n = e.children,
    r = e.isClosed,
    i = V((0, u.useState)(null), 2),
    a = i[0],
    o = i[1],
    s = Rm(),
    c = wm();
  cx(
    function () {
      if (J(`import_into_jsm_in_template_gallery_killswitch`)) {
        if (!r) {
          var e = ux(t);
          o(e);
          var n = fx();
          return !e || !n
            ? void 0
            : (n.appendChild(e),
              function () {
                (n && (n.removeChild(e), !n.hasChildNodes() && mx(n)), o(null));
              });
        }
      } else {
        var i = ux(t);
        o(i);
        var a = fx();
        return !i || !a
          ? void 0
          : (a.appendChild(i),
            function () {
              (i && a.removeChild(i), o(null));
            });
      }
    },
    [t, r, J],
  );
  var l = u.createElement(
    u.Suspense,
    { fallback: null },
    (J(`platform-dst-portal-conditial-theme-provider`) ? c : s)
      ? u.createElement(Lm, { defaultColorMode: s }, n)
      : n,
  );
  return a ? (0, ts.createPortal)(l, a) : null;
}
var gx = function (e) {
    var t = V((0, u.useState)(!1), 2),
      n = t[0],
      r = t[1],
      i = V(
        (0, u.useState)(function () {
          return e === `layoutEffect` ? cx : u.useEffect;
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
  _x = `akPortalMount`,
  vx = `akPortalUnmount`,
  yx = {
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
  bx = function (e) {
    return yx.hasOwnProperty(e) ? yx[e] : null;
  },
  xx = function (e, t) {
    var n = { layer: bx(Number(t)), zIndex: t };
    return new CustomEvent(e, { detail: n });
  };
function Sx(e, t) {
  var n = xx(e, t);
  window.dispatchEvent(n);
}
var Cx = function (e) {
  var t = Number(e);
  (0, u.useEffect)(
    function () {
      return (
        Sx(_x, t),
        function () {
          Sx(vx, t);
        }
      );
    },
    [t],
  );
};
function wx(e) {
  var t = e.zIndex,
    n = t === void 0 ? 0 : t,
    r = e.children,
    i = e.mountStrategy,
    a = i === void 0 ? `effect` : i,
    o = e.isClosed,
    s = o === void 0 ? !1 : o,
    c = gx(a);
  return (
    Cx(n),
    J(`platform_design_system_team_portal_logic_r18_fix`)
      ? u.createElement(hx, { zIndex: n, isClosed: s }, r)
      : c
        ? u.createElement(sx, { zIndex: n, isClosed: s }, r)
        : null
  );
}
var Tx = {
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
  Ex = function (e) {
    var t = [],
      n = null,
      r = function () {
        ((t = [...arguments]),
          !n &&
            (n = requestAnimationFrame(function () {
              ((n = null), e.apply(void 0, t));
            })));
      };
    return (
      (r.cancel = function () {
        n &&= (cancelAnimationFrame(n), null);
      }),
      r
    );
  };
function Dx(e) {
  var t = null;
  return function () {
    if (!t) {
      var n = [...arguments];
      t = { value: e.call.apply(e, [this].concat(n)) };
    }
    return t.value;
  };
}
function Ox(e, t) {
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
function kx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ox(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ox(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ax(e) {
  var t = e.axis,
    n = e.edge,
    r = e.triggerRect,
    i = e.popoverWidth,
    a = e.popoverHeight,
    o = e.viewport,
    s = e.gap;
  if (t === `block` && n === `end`) {
    var c = o.height - r.bottom,
      l = r.top;
    return {
      top: c >= a + s || c >= l ? r.bottom + s : r.top - a - s,
      left: r.left + r.width / 2 - i / 2,
    };
  }
  if (t === `block` && n === `start`) {
    var u = r.top,
      d = o.height - r.bottom;
    return {
      top: u >= a + s || u >= d ? r.top - a - s : r.bottom + s,
      left: r.left + r.width / 2 - i / 2,
    };
  }
  if (t === `inline` && n === `end`) {
    var f = o.width - r.right,
      p = r.left,
      m = f >= i + s || f >= p;
    return { top: r.top + r.height / 2 - a / 2, left: m ? r.right + s : r.left - i - s };
  }
  if (t === `inline` && n === `start`) {
    var h = r.left,
      g = o.width - r.right,
      _ = h >= i + s || h >= g;
    return { top: r.top + r.height / 2 - a / 2, left: _ ? r.left - i - s : r.right + s };
  }
  return { top: r.bottom + s, left: r.left + r.width / 2 - i / 2 };
}
function jx(e) {
  var t = e.position,
    n = e.axis,
    r = e.align,
    i = e.triggerRect,
    a = e.popoverWidth,
    o = e.popoverHeight;
  return r === `center`
    ? t
    : n === `block`
      ? r === `start`
        ? kx(kx({}, t), {}, { left: i.left })
        : kx(kx({}, t), {}, { left: i.right - a })
      : r === `start`
        ? kx(kx({}, t), {}, { top: i.top })
        : kx(kx({}, t), {}, { top: i.bottom - o });
}
function Mx(e) {
  var t = e.position,
    n = e.axis,
    r = e.align,
    i = e.crossAxisShift;
  if (i.value === 0) return t;
  var a = i.direction === `forwards` ? 1 : -1,
    o = r === `end` ? -1 : 1,
    s = i.value * a * o;
  return n === `block`
    ? kx(kx({}, t), {}, { left: t.left + s })
    : kx(kx({}, t), {}, { top: t.top + s });
}
function Nx(e) {
  var t = e.triggerRect,
    n = e.popoverEl,
    r = e.placement,
    i = e.viewport,
    a = e.gap,
    o = e.crossAxisShift,
    s = r.axis,
    c = r.edge,
    l = r.align,
    u = n.offsetWidth,
    d = n.offsetHeight,
    f = Mx({
      position: jx({
        position: Ax({
          axis: s,
          edge: c,
          triggerRect: t,
          popoverWidth: u,
          popoverHeight: d,
          viewport: i,
          gap: a,
        }),
        axis: s,
        align: l,
        triggerRect: t,
        popoverWidth: u,
        popoverHeight: d,
      }),
      axis: s,
      align: l,
      crossAxisShift: o,
    });
  return {
    top: Math.max(0, Math.min(f.top, i.height - d)),
    left: Math.max(0, Math.min(f.left, i.width - u)),
  };
}
function Px() {
  var e = [...arguments];
  return function () {
    e.forEach(function (e) {
      return e?.();
    });
  };
}
function Fx(e) {
  var t = e.value,
    n = e.container;
  if (typeof t == `number`) return t;
  var r = t.match(/^(-?\d+(?:\.\d+)?)px$/);
  if (r) return Number(r[1]);
  var i = n.ownerDocument.createElement(`div`);
  ((i.style.position = `absolute`),
    (i.style.visibility = `hidden`),
    (i.style.pointerEvents = `none`),
    (i.style.height = `0`),
    (i.style.padding = `0`),
    (i.style.border = `0`),
    (i.style.marginLeft = t),
    n.appendChild(i));
  var a = parseFloat(getComputedStyle(i).marginLeft);
  return (n.removeChild(i), Number.isFinite(a) ? a : 0);
}
function Ix(e) {
  var t = e.value;
  return typeof t == `number` ? `${t}px` : t;
}
var Lx = `var(--ds-space-100, 8px)`;
function Rx(e) {
  var t,
    n,
    r = e.placement,
    i = r.offset?.gap;
  return {
    axis: r.axis ?? `block`,
    edge: r.edge ?? `end`,
    align: r.align ?? `center`,
    offset: {
      gap: i === void 0 ? Lx : Ix({ value: i }),
      crossAxisShift: {
        value: Ix({
          value: ((t = r.offset) == null || (t = t.crossAxisShift) == null ? void 0 : t.value) ?? 0,
        }),
        direction:
          ((n = r.offset) == null || (n = n.crossAxisShift) == null ? void 0 : n.direction) ??
          `forwards`,
      },
    },
  };
}
function zx(e) {
  var t = e.el,
    n = e.styles;
  return (
    n.forEach(function (e) {
      var n = e.property,
        r = e.value;
      t.style.setProperty(n, r);
    }),
    function () {
      n.forEach(function (e) {
        var n = e.property;
        t.style.removeProperty(n);
      });
    }
  );
}
function Bx(e) {
  var t = e.placement,
    n = Rx({ placement: t }),
    r = n.axis,
    i = n.edge,
    a = n.align,
    o = `${r}-${i}`;
  return a === `center`
    ? o
    : `${o} span-${r === `block` ? `inline` : `block`}-${a === `start` ? `end` : `start`}`;
}
function Vx(e) {
  var t = e.placement,
    n = Rx({ placement: t }),
    r = n.axis,
    i = n.edge,
    a = n.align,
    o = r === `block` ? `inline` : `block`,
    s = i === `start` ? `end` : `start`;
  if (a !== `center`) {
    var c = `${r}-${i}`,
      l = `${r}-${s}`,
      u = r === `block` ? `flip-block` : `flip-inline`,
      d = r === `block` ? `flip-inline` : `flip-block`;
    return [
      `${c} span-${o}-${a === `start` ? `end` : `start`}`,
      c,
      `${c} span-${o}-${a === `start` ? `start` : `end`}`,
      u,
      `${u} ${d}`,
      `${l} span-${o}-${a === `start` ? `end` : `start`}`,
      l,
      `${l} span-${o}-${a === `start` ? `start` : `end`}`,
    ].join(`, `);
  }
  var f = `${r}-${i}`,
    p = `${r}-${s}`,
    m = r === `block` ? `flip-block` : `flip-inline`;
  return [
    `${f} span-${o}-end`,
    `${f} span-${o}-start`,
    m,
    `${p} span-${o}-end`,
    `${p} span-${o}-start`,
  ].join(`, `);
}
function Hx(e) {
  try {
    return e.matches(`:popover-open`);
  } catch {
    return !1;
  }
}
var Ux = Dx(function () {
  return typeof window > `u` || typeof CSS > `u` || typeof CSS.supports != `function`
    ? !1
    : CSS.supports(`anchor-name`, `--a`);
});
function Wx(e) {
  var t = e.placement,
    n = e.offset,
    r = t.axis,
    i = t.edge,
    a = n;
  return r === `block` && i === `end`
    ? { property: `margin-block-start`, value: a }
    : r === `block` && i === `start`
      ? { property: `margin-block-end`, value: a }
      : r === `inline` && i === `end`
        ? { property: `margin-inline-start`, value: a }
        : r === `inline` && i === `start`
          ? { property: `margin-inline-end`, value: a }
          : { property: `margin-block-start`, value: a };
}
function Gx(e) {
  var t = e.placement,
    n = e.crossAxisShiftCssValue,
    r = e.direction,
    i = t.axis,
    a = t.align,
    o = r === `forwards` ? 1 : -1,
    s = i === `block` ? `inline` : `block`,
    c = a === `end`,
    l = c ? `end` : `start`,
    u = o * (c ? -1 : 1) == 1 ? n : `calc(-1 * ${n})`;
  return { property: `margin-${s}-${l}`, value: u };
}
function Kx(e) {
  var t = Rx({ placement: e }),
    n = (0, u.useRef)(t);
  return (qx(n.current, t) || (n.current = t), n.current);
}
function qx(e, t) {
  return (
    e.axis === t.axis &&
    e.edge === t.edge &&
    e.align === t.align &&
    e.offset.gap === t.offset.gap &&
    e.offset.crossAxisShift.value === t.offset.crossAxisShift.value &&
    e.offset.crossAxisShift.direction === t.offset.crossAxisShift.direction
  );
}
function Jx(e) {
  var t = e.anchorRef,
    n = e.popoverRef,
    r = e.placement,
    i = r === void 0 ? {} : r,
    a = e.forceFallbackPositioning,
    o = a === void 0 ? !1 : a,
    s = e.arrow,
    c = (0, u.useId)(),
    l = Kx(i);
  (0, u.useLayoutEffect)(
    function () {
      var e = t.current,
        r = n.current;
      if (!e || !r) return;
      var i = l.offset.gap,
        a = l.offset.crossAxisShift.value,
        u = !!o;
      if (Ux() && !u) {
        var d = e.style.getPropertyValue(`anchor-name`) || `--anchor-${c.replace(/:/g, ``)}`,
          f = Wx({ placement: l, offset: i }),
          p = Gx({
            placement: l,
            crossAxisShiftCssValue: a,
            direction: l.offset.crossAxisShift.direction,
          }),
          m = [
            { property: `position-anchor`, value: d },
            { property: `position-area`, value: Bx({ placement: l }) },
            {
              property: `position-try-fallbacks`,
              value: s ? s.getTryFallbacks({ placement: l }) : Vx({ placement: l }),
            },
            { property: `margin`, value: `0` },
            { property: `inset`, value: `auto` },
            { property: `min-inline-size`, value: `max-content` },
            { property: f.property, value: f.value },
            { property: p.property, value: p.value },
          ];
        (m.push({ property: `--ds-cross-axis-shift-margin-start`, value: `0px` }),
          m.push({ property: `--ds-cross-axis-shift-margin-end`, value: `0px` }),
          m.push({ property: `--ds-cross-axis-shift-margin-block-start`, value: `0px` }),
          m.push({ property: `--ds-cross-axis-shift-margin-block-end`, value: `0px` }));
        var h = Gx({
            placement: l,
            crossAxisShiftCssValue: a,
            direction: l.offset.crossAxisShift.direction,
          }),
          g = {
            "margin-inline-start": `--ds-cross-axis-shift-margin-start`,
            "margin-inline-end": `--ds-cross-axis-shift-margin-end`,
            "margin-block-start": `--ds-cross-axis-shift-margin-block-start`,
            "margin-block-end": `--ds-cross-axis-shift-margin-block-end`,
          }[h.property];
        return (
          g && m.push({ property: g, value: h.value }),
          s &&
            (m.push({ property: `--ds-arrow-size`, value: i }),
            r.setAttribute(`data-ds-popover-arrow`, ``)),
          e.style.setProperty(`anchor-name`, d),
          Px(
            zx({ el: r, styles: m }),
            s
              ? function () {
                  return r.removeAttribute(`data-ds-popover-arrow`);
                }
              : function () {},
          )
        );
      }
      var _ = zx({
        el: r,
        styles: [
          { property: `margin`, value: `0` },
          { property: `inset`, value: `auto` },
        ],
      });
      function v() {
        if (!(!e || !r)) {
          var t = e.getBoundingClientRect(),
            n = { width: window.innerWidth, height: window.innerHeight },
            o = r.parentElement ?? r,
            s = Nx({
              triggerRect: t,
              popoverEl: r,
              placement: l,
              viewport: n,
              gap: Fx({ value: i, container: o }),
              crossAxisShift: {
                value: Fx({ value: a, container: o }),
                direction: l.offset.crossAxisShift.direction,
              },
            }),
            c = s.top,
            u = s.left;
          (r.style.setProperty(`top`, `${c}px`),
            r.style.setProperty(`left`, `${u}px`),
            r.style.removeProperty(`opacity`));
        }
      }
      var y = Ex(v),
        b = new (
          typeof ResizeObserver < `u`
            ? ResizeObserver
            : (function () {
                function e() {
                  R(this, e);
                }
                return rc(e, [
                  { key: `observe`, value: function () {} },
                  { key: `unobserve`, value: function () {} },
                  { key: `disconnect`, value: function () {} },
                ]);
              })()
        )(function () {
          r.offsetWidth > 0 && r.offsetHeight > 0 && (v(), b.disconnect());
        });
      return (
        Hx(r) && (r.style.setProperty(`opacity`, `0`), b.observe(r)),
        Px(
          _,
          (0, Xp.bind)(r, {
            type: `toggle`,
            listener: function (e) {
              e.newState === `open` && (r.style.setProperty(`opacity`, `0`), b.observe(r));
            },
          }),
          function () {
            return b.disconnect();
          },
          (0, Xp.bind)(window, {
            type: `scroll`,
            listener: y,
            options: { capture: !0, passive: !0 },
          }),
          (0, Xp.bind)(window, { type: `resize`, listener: y, options: { passive: !0 } }),
          function () {
            (y.cancel(),
              r.style.removeProperty(`top`),
              r.style.removeProperty(`left`),
              r.style.removeProperty(`opacity`));
          },
        )
      );
    },
    [t, n, l, o, s, c],
  );
}
function Yx(e) {
  var t = e.placement,
    n = e.distance,
    r = `${n}px`,
    i = `-${n}px`,
    a = Rx({ placement: t }),
    o = a.axis,
    s = a.edge;
  return o === `block` && s === `start`
    ? { "--ds-popover-tx": `0`, "--ds-popover-ty": r }
    : o === `block` && s === `end`
      ? { "--ds-popover-tx": `0`, "--ds-popover-ty": i }
      : o === `inline` && s === `start`
        ? { "--ds-popover-tx": r, "--ds-popover-ty": `0` }
        : o === `inline` && s === `end`
          ? { "--ds-popover-tx": i, "--ds-popover-ty": `0` }
          : { "--ds-popover-tx": `0`, "--ds-popover-ty": i };
}
var Xx = `
[data-ds-popover-slide-and-fade] {
  opacity: 0;
  transform: translate3d(var(--ds-popover-tx, 0), var(--ds-popover-ty, 0), 0);
  transition:
    opacity 175ms cubic-bezier(0.15, 1, 0.3, 1),
    transform 175ms cubic-bezier(0.15, 1, 0.3, 1),
    overlay 175ms allow-discrete,
    display 175ms allow-discrete;
}

[data-ds-popover-slide-and-fade]:popover-open {
  opacity: 1;
  transform: none;
  transition-duration: 350ms;
}

@starting-style {
  [data-ds-popover-slide-and-fade]:popover-open {
    opacity: 0;
    transform: translate3d(var(--ds-popover-tx, 0), var(--ds-popover-ty, 0), 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  [data-ds-popover-slide-and-fade],
  [data-ds-popover-slide-and-fade]:popover-open {
    transition-duration: 0s;
  }
}
`;
function Zx(e) {
  var t = e?.distance ?? 4;
  return {
    name: `slide-and-fade`,
    css: Xx,
    getProperties: function (e) {
      var n = e.placement;
      return Yx({ placement: n, distance: t });
    },
    exitDurationMs: 175,
  };
}
function Qx(e, t) {
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
function $x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Qx(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Qx(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var eS = {
  top: { axis: `block`, edge: `start`, align: `center` },
  "top-start": { axis: `block`, edge: `start`, align: `start` },
  "top-center": { axis: `block`, edge: `start`, align: `center` },
  "top-end": { axis: `block`, edge: `start`, align: `end` },
  bottom: { axis: `block`, edge: `end`, align: `center` },
  "bottom-start": { axis: `block`, edge: `end`, align: `start` },
  "bottom-center": { axis: `block`, edge: `end`, align: `center` },
  "bottom-end": { axis: `block`, edge: `end`, align: `end` },
  right: { axis: `inline`, edge: `end`, align: `center` },
  "right-start": { axis: `inline`, edge: `end`, align: `start` },
  "right-end": { axis: `inline`, edge: `end`, align: `end` },
  left: { axis: `inline`, edge: `start`, align: `center` },
  "left-start": { axis: `inline`, edge: `start`, align: `start` },
  "left-end": { axis: `inline`, edge: `start`, align: `end` },
  auto: { axis: `block`, edge: `end`, align: `center` },
  "auto-start": { axis: `block`, edge: `end`, align: `start` },
  "auto-end": { axis: `block`, edge: `end`, align: `end` },
};
function tS(e) {
  var t = e.legacy,
    n = e.offset,
    r = eS[t];
  if (!n) return r;
  var i = V(n, 2),
    a = i[0],
    o = i[1];
  return $x(
    $x({}, r),
    {},
    {
      offset: {
        gap: o,
        crossAxisShift: { value: Math.abs(a), direction: a >= 0 ? `forwards` : `backwards` },
      },
    },
  );
}
var nS = Dx(function () {
    return typeof window > `u` || !(`matchMedia` in window)
      ? !1
      : window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
  }),
  rS = new Set();
function iS(e) {
  var t = e.preset;
  if (!(rS.has(t.name) || typeof document > `u`)) {
    rS.add(t.name);
    var n = document.createElement(`style`);
    ((n.textContent = t.css), document.head.appendChild(n));
  }
}
function aS(e) {
  var t = e.preset,
    n = t != null && t !== !1 ? t : null;
  return (
    (0, u.useInsertionEffect)(
      function () {
        n && iS({ preset: n });
      },
      [n],
    ),
    n
  );
}
function oS(e) {
  var t = e.isOpen,
    n = e.animate,
    r = e.elementRef,
    i = e.onExitFinish,
    a = aS({ preset: n }),
    o = !!n && !nS(),
    s = V((0, u.useState)(t), 2),
    c = s[0],
    l = s[1];
  (t && !c && l(!0), !t && c && !o && l(!1));
  var d = (0, u.useRef)(i);
  ((d.current = i),
    (0, u.useEffect)(
      function () {
        if (t || !c || !o) return;
        var e = r.current;
        if (!e) return;
        function n() {
          var e;
          (clearTimeout(i), l(!1), (e = d.current) == null || e.call(d));
        }
        var i = setTimeout(n, (a?.exitDurationMs ?? 0) + 50),
          s = (0, Xp.bind)(e, { type: `transitionend`, listener: n, options: { once: !0 } });
        return function () {
          (clearTimeout(i), s());
        };
      },
      [t, c, o, a?.exitDurationMs, r],
    ));
  var f = (0, u.useRef)(t);
  return (
    (0, u.useEffect)(
      function () {
        var e = f.current;
        if (((f.current = t), e && !t && !o)) {
          var n;
          (n = d.current) == null || n.call(d);
        }
      },
      [t, o],
    ),
    { showChildren: c, preset: a }
  );
}
var sS = (function () {
  var e = `:not([tabindex="-1"]):not([aria-disabled="true"]):not([aria-hidden="true"])`,
    t = `:not([disabled])${e}`,
    n = [
      `a[href]${e}`,
      `area[href]${e}`,
      `input${t}:not([type="hidden"])`,
      `select${t}`,
      `textarea${t}`,
      `button${t}`,
      `iframe${e}`,
      `audio[controls]${e}`,
      `video[controls]${e}`,
      `[contenteditable]:not([contenteditable="false"])${e}`,
      `[tabindex]${t}${e}`,
    ];
  return { focusable: n.join(`,`), focused: n.join(`:focus,`) + `:focus` };
})();
function cS(e) {
  var t = e.container,
    n = e.filter;
  return Array.from(t.querySelectorAll(sS.focusable))
    .filter(function (e) {
      return e instanceof HTMLElement;
    })
    .filter(function (e) {
      return !n || n(e, t);
    });
}
function lS(e) {
  var t = e.container,
    n = e.filter,
    r = cS({ container: t, filter: n });
  return r.length > 0 ? r[0] : null;
}
function uS(e) {
  var t = e.container,
    n = e.filter,
    r = cS({ container: t, filter: n });
  return r.length > 0 ? r[r.length - 1] : null;
}
function dS(e) {
  var t = e.container,
    n = e.direction,
    r = e.filter,
    i = cS({ container: t, filter: r }),
    a = t.querySelector(sS.focused);
  if (!(a instanceof HTMLElement)) return null;
  var o = i.indexOf(a);
  return o === -1
    ? null
    : (i[
        (function () {
          if (n === `forwards`) return (o + 1) % i.length;
          var e = o - 1;
          return e < 0 ? i.length - 1 : e;
        })()
      ] ?? null);
}
function fS(e) {
  return e === `dialog` || e === `alertdialog`;
}
function pS(e) {
  var t = e.elementRef,
    n = e.role;
  (0, u.useEffect)(
    function () {
      var e = t.current;
      if (!(!e || !fS(n)))
        return (0, Xp.bind)(e, {
          type: `keydown`,
          listener: function (t) {
            if (t.key === `Tab`) {
              t.preventDefault();
              var n = t.shiftKey ? `backwards` : `forwards`,
                r = dS({ container: e, direction: n });
              if (r) {
                r.focus();
                return;
              }
              var i = n === `forwards` ? lS({ container: e }) : uS({ container: e });
              i && i.focus();
            }
          },
          options: { capture: !0 },
        });
    },
    [t, n],
  );
}
function mS(e) {
  var t = e.container,
    n = t.getAttribute(`role`);
  return n === `dialog` || n === `alertdialog`
    ? t.querySelector(`[autofocus]`) || lS({ container: t })
    : n === `menu`
      ? lS({ container: t })
      : n === `listbox`
        ? t.querySelector(`[role="option"][aria-selected="true"]`) || lS({ container: t })
        : null;
}
function hS(e) {
  var t = e.elementRef,
    n = e.isOpen,
    r = e.role;
  (0, u.useEffect)(
    function () {
      if (n) {
        var e = t.current;
        if (e) {
          var r = requestAnimationFrame(function () {
            var t;
            (t = mS({ container: e })) == null || t.focus();
          });
          return function () {
            cancelAnimationFrame(r);
          };
        }
      }
    },
    [t, n, r],
  );
}
X();
var gS = Dx(function () {
    if (typeof document > `u`) return !1;
    var e = document.createElement(`div`);
    return (e.setAttribute(`popover`, `hint`), e.popover === `hint`);
  }),
  _S = {
    root: `_19itglyw _ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19pkidpf _2hwxidpf _otyridpf _18u0idpf _1r041wug _1reoewfl _18m9ewfl _bfhk1j28`,
  },
  vS = (0, u.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.mode,
      i = r === void 0 ? `auto` : r,
      a = e.onClose,
      o = a === void 0 ? cc : a,
      s = e.onOpenChange,
      c = e.onExitFinish,
      l = e.animate,
      d = e.placement,
      f = e.testId,
      p = e.isOpen,
      m = e.xcss,
      h = e.role,
      g = e.label,
      _ = e.labelledBy,
      v = e.id,
      y = (0, u.useId)(),
      b = (0, u.useRef)(null),
      x = Rv([b, t].filter(Boolean)),
      S = v ?? `popover-${y.replace(/:/g, ``)}`,
      C = oS({ isOpen: p, animate: l, elementRef: b, onExitFinish: c }),
      w = C.showChildren,
      T = C.preset;
    (pS({ elementRef: b, role: h }), hS({ elementRef: b, isOpen: p, role: h }));
    var E = i === `hint` && !gS() ? `auto` : i,
      D = (0, u.useRef)(!1),
      ee = (0, u.useRef)(`light-dismiss`),
      O = (0, u.useCallback)(
        function (e) {
          var t = b.current;
          if (e.newState === `open`) {
            t && s?.({ isOpen: !0, element: t });
            return;
          }
          if (e.newState === `closed`) {
            if ((t && s?.({ isOpen: !1, element: t }), D.current)) return;
            var n = ee.current;
            ((ee.current = `light-dismiss`), o({ reason: n }));
          }
        },
        [o, s],
      );
    return (
      (0, u.useEffect)(
        function () {
          var e = b.current;
          if (e) {
            var t = (0, Xp.bind)(e, {
                type: `keydown`,
                listener: function (e) {
                  e.key === `Escape` && (ee.current = `escape`);
                },
                options: { capture: !0 },
              }),
              n = (0, Xp.bind)(e, { type: `toggle`, listener: O });
            return function () {
              (t(), n());
            };
          }
        },
        [O],
      ),
      (0, u.useLayoutEffect)(
        function () {
          var e = b.current;
          if (!(!e || !(T != null && T.getProperties) || !d)) {
            var t = T.getProperties({ placement: d });
            Object.entries(t).forEach(function (t) {
              var n = V(t, 2),
                r = n[0],
                i = n[1];
              e.style.setProperty(r, String(i));
            });
          }
        },
        [T, d],
      ),
      (0, u.useLayoutEffect)(
        function () {
          var e = b.current;
          if (e) {
            if (p) {
              D.current = !1;
              try {
                e.showPopover();
              } catch {}
              return function () {
                D.current = !0;
                try {
                  e.hidePopover();
                } catch {}
              };
            }
            D.current = !0;
            try {
              e.hidePopover();
            } catch {}
          }
        },
        [p],
      ),
      u.createElement(
        `div`,
        H(
          {
            ref: x,
            id: S,
            popover: E,
            role: h,
            "aria-label": g,
            "aria-labelledby": _,
            "data-testid": f,
          },
          T ? B({}, `data-ds-popover-${T.name}`, ``) : void 0,
          { className: Y([_S.root, m]) },
        ),
        w ? n : null,
      )
    );
  }),
  yS = new Set(),
  bS = null;
function xS() {
  bS ||
    ((bS = (0, Xp.bindAll)(window, [
      { type: `dragend`, listener: SS },
      { type: `pointerdown`, listener: SS },
      {
        type: `pointermove`,
        listener: (function () {
          var e = 0;
          return function () {
            if (e < 20) {
              e++;
              return;
            }
            SS();
          };
        })(),
      },
    ])),
    Array.from(yS).forEach(function (e) {
      e.onDragStart();
    }));
}
function SS() {
  var e;
  ((e = bS) == null || e(),
    (bS = null),
    Array.from(yS).forEach(function (e) {
      e.onDragEnd();
    }));
}
function CS() {
  return (0, Xp.bindAll)(window, [
    { type: `dragstart`, listener: xS },
    { type: `dragenter`, listener: xS },
  ]);
}
var wS = null;
function TS(e) {
  return (
    (wS ||= CS()),
    yS.add(e),
    e.onRegister({ isDragging: bS !== null }),
    function () {
      if ((yS.delete(e), yS.size === 0)) {
        var t;
        ((t = wS) == null || t(), (wS = null));
      }
    }
  );
}
function ES(e, t) {
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
var DS = null;
function OS() {
  DS != null && (window.clearTimeout(DS), (DS = null));
}
function kS(e, t) {
  (OS(),
    (DS = window.setTimeout(function () {
      ((DS = null), e());
    }, t)));
}
var AS = null;
function jS(e) {
  var t = `waiting-to-show`;
  function n() {
    return !!(AS && AS.entry === e);
  }
  function r() {
    n() && (OS(), (AS = null));
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
        ((t = `shown`), OS());
        return;
      }
      if (t === `hide-animating`) {
        ((t = `shown`), OS(), e.show({ isImmediate: !1 }));
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
      if (t === `waiting-to-hide`) {
        i && J(`platform-dst-top-layer`) && a();
        return;
      }
      if (i) {
        a();
        return;
      }
      ((t = `waiting-to-hide`),
        kS(function () {
          ((t = `hide-animating`), e.hide({ isImmediate: !1 }));
        }, e.delay));
    }
  }
  function c() {
    n() && t === `hide-animating` && i();
  }
  function l() {
    return t === `shown` || t === `waiting-to-hide` || t === `hide-animating`;
  }
  function u() {
    var n = e.shouldAlwaysFadeIn,
      r = !!(AS && AS.isVisible()) && !n;
    ((AS &&= (OS(), AS.entry.hide({ isImmediate: !0 }), AS.entry.done(), null)),
      (AS = { entry: e, isVisible: l }));
    function i() {
      ((t = `shown`), e.show({ isImmediate: r }));
    }
    if (r) {
      i();
      return;
    }
    ((t = `waiting-to-show`), kS(i, e.delay));
  }
  return (
    u(),
    {
      keep: o,
      abort: r,
      isActive: n,
      requestHide: s,
      finishHideAnimation: c,
      mousePos:
        e.source.type === `mouse` ? { clientX: e.source.clientX, clientY: e.source.clientY } : null,
    }
  );
}
function MS() {
  var e = zm();
  return function (t) {
    return `${e}-${t.toString()}`;
  };
}
function NS(e, t) {
  var n = MS();
  return t ? `${n(e)}` : void 0;
}
X();
var PS = {
    shortcutSegmentsContainer: `_zulpv77o _1e0c1txw _1q511b66 _85i5v77o`,
    shortcutSegment: `_11c8wadc _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p`,
  },
  FS = function (e) {
    var t = e.shortcut;
    return u.createElement(
      `div`,
      { className: Y([PS.shortcutSegmentsContainer]) },
      t.map(function (e, t) {
        return u.createElement(`kbd`, { key: `${e}-${t}`, className: Y([PS.shortcutSegment]) }, e);
      }),
    );
  };
X();
var IS = (0, u.forwardRef)(function (e, t) {
  var n = e.style,
    r = e.className,
    i = e.children,
    a = e.placement,
    o = e.testId,
    s = e.onMouseOut,
    c = e.onMouseOver,
    l = e.id,
    d = e.shortcut,
    f = e.role,
    p = f === void 0 ? `tooltip` : f;
  return u.createElement(
    `div`,
    { ref: t, style: n, "data-testid": o ? `${o}--wrapper` : void 0 },
    u.createElement(
      `div`,
      {
        role: p,
        className: Y([`_80om73ad`, r]),
        onMouseOut: s,
        onMouseOver: c,
        "data-placement": a,
        "data-testid": o,
        id: l,
      },
      i,
      d && u.createElement(FS, { shortcut: d }),
    ),
  );
});
((IS.displayName = `TooltipPrimitive`), X());
var LS = {
    base: `_2rkofajl _11c8wadc _vchhusvi _p12fp3fh _bfhk1aqn _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna`,
    truncate: `_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c`,
  },
  RS = (0, u.forwardRef)(function (e, t) {
    var n = e.style,
      r = e.className,
      i = e.children,
      a = e.truncate,
      o = e.placement,
      s = e.testId,
      c = e.onMouseOut,
      l = e.onMouseOver,
      d = e.id,
      f = e.shortcut,
      p = e.role;
    return u.createElement(
      IS,
      {
        ref: t,
        style: n,
        className: Y([LS.base, a && LS.truncate, r]),
        placement: o,
        testId: s,
        id: d,
        onMouseOut: c,
        onMouseOver: l,
        shortcut: f,
        role: p,
      },
      i,
    );
  });
RS.displayName = `TooltipContainer`;
function zS(e, t) {
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
function BS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? zS(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : zS(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var VS = Tx.tooltip(),
  HS = { componentName: `tooltip`, packageName: `@atlaskit/tooltip`, packageVersion: `22.1.0` },
  US = { top: `bottom`, bottom: `top`, left: `right`, right: `left` },
  WS = function (e) {
    return e.split(`-`)[0];
  };
function GS(e) {
  var t = e.children,
    n = e.position,
    r = n === void 0 ? `bottom` : n,
    i = e.mousePosition,
    a = i === void 0 ? `bottom` : i,
    o = e.content,
    s = e.truncate,
    c = s === void 0 ? !1 : s,
    l = e.component,
    d = l === void 0 ? RS : l,
    f = e.tag,
    p = f === void 0 ? `div` : f,
    m = e.testId,
    h = e.delay,
    g = h === void 0 ? 300 : h,
    _ = e.onShow,
    v = _ === void 0 ? cc : _,
    y = e.onHide,
    b = y === void 0 ? cc : y,
    x = e.canAppear,
    S = e.hideTooltipOnClick,
    C = S === void 0 ? !1 : S,
    w = e.hideTooltipOnMouseDown,
    T = w === void 0 ? !1 : w,
    E = e.analyticsContext,
    D = e.strategy,
    ee = D === void 0 ? `fixed` : D,
    O = e.ignoreTooltipPointerEvents,
    te = O === void 0 ? !1 : O,
    k = e.isScreenReaderAnnouncementDisabled,
    ne = k === void 0 ? !1 : k,
    re = e.shortcut,
    ie = e.shouldAlwaysFadeIn,
    ae = ie === void 0 ? !1 : ie,
    oe = e.shouldRenderToParent,
    se = oe === void 0 ? !1 : oe,
    ce = r === `mouse` || r === `mouse-y` || r === `mouse-x`,
    le = ce ? a : r,
    ue = Uu(BS({ fn: v, action: `displayed`, analyticsData: E }, HS)),
    de = Uu(BS({ fn: b, action: `hidden`, analyticsData: E }, HS)),
    A = (0, u.useRef)(null),
    fe = V((0, u.useState)(`hide`), 2),
    pe = fe[0],
    me = fe[1],
    he = (0, u.useRef)(null),
    ge = (0, u.useRef)(null),
    _e = function (e) {
      ((ge.current = e), (he.current = e ? e.firstElementChild : null));
    },
    ve = (0, u.useCallback)(function (e) {
      he.current = e;
    }, []),
    ye = dv(pe),
    j = dv(ue),
    M = dv(de),
    be = dv(g),
    xe = dv(x),
    Se = (0, u.useRef)(!1),
    Ce = dv(ae),
    we = (0, u.useCallback)(function (e) {
      ((A.current = e), (Se.current = !1));
    }, []),
    Te = (0, u.useCallback)(
      function () {
        A.current && (Se.current && M.current(), (A.current = null), (Se.current = !1), me(`hide`));
      },
      [M],
    ),
    Ee = (0, u.useCallback)(
      function () {
        A.current &&= (A.current.abort(), Se.current && M.current(), null);
      },
      [M],
    );
  (0, u.useEffect)(
    function () {
      return function () {
        A.current && Ee();
      };
    },
    [Ee],
  );
  var De = (0, u.useRef)(!1);
  (0, u.useEffect)(function () {
    return TS({
      onRegister: function (e) {
        De.current = e.isDragging;
      },
      onDragStart: function () {
        var e;
        ((e = A.current) == null || e.requestHide({ isImmediate: !0 }), (De.current = !0));
      },
      onDragEnd: function () {
        De.current = !1;
      },
    });
  }, []);
  var Oe = (0, u.useCallback)(
    function (e) {
      var t;
      if (!De.current) {
        if ((A.current && !A.current.isActive() && Ee(), A.current && A.current.isActive())) {
          A.current.keep();
          return;
        }
        (xe.current && !((t = xe.current) != null && t.call(xe))) ||
          we(
            jS({
              source: e,
              delay: be.current,
              show: function (e) {
                var t = e.isImmediate;
                (Se.current || ((Se.current = !0), j.current()),
                  me(t ? `show-immediate` : `fade-in`));
              },
              hide: function (e) {
                e.isImmediate
                  ? me(`hide`)
                  : J(`platform-dst-top-layer`)
                    ? me(`top-layer-exit`)
                    : me(`before-fade-out`);
              },
              done: Te,
              shouldAlwaysFadeIn: Ce.current,
            }),
          );
      }
    },
    [xe, be, Te, we, Ee, j, Ce],
  );
  uv({
    onClose: (0, u.useCallback)(
      function () {
        var e;
        (e = A.current) == null || e.requestHide({ isImmediate: !0 });
      },
      [A],
    ),
    isDisabled:
      pe === `hide` || pe === `fade-out` || pe === `top-layer-exit` || J(`platform-dst-top-layer`),
  });
  var ke = (0, u.useCallback)(function () {
    var e;
    (e = A.current) == null || e.finishHideAnimation();
  }, []);
  (0, u.useEffect)(
    function () {
      return pe === `hide`
        ? cc
        : (pe === `before-fade-out` && me(`fade-out`),
          (0, Xp.bind)(window, {
            type: `scroll`,
            listener: function () {
              A.current && A.current.requestHide({ isImmediate: !0 });
            },
            options: { capture: !0, passive: !0, once: !0 },
          }));
    },
    [pe],
  );
  var Ae = (0, u.useCallback)(
      function () {
        T && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [T],
    ),
    je = (0, u.useCallback)(
      function () {
        C && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [C],
    ),
    Me = (0, u.useCallback)(
      function (e) {
        (ge.current && e.target === ge.current) ||
          e.defaultPrevented ||
          (e.preventDefault(),
          Oe(
            ce ? { type: `mouse`, clientX: e.clientX, clientY: e.clientY } : { type: `keyboard` },
          ));
      },
      [ce, Oe],
    ),
    Ne = (0, u.useCallback)(function (e) {
      (ge.current && e.target === ge.current) ||
        e.defaultPrevented ||
        (e.preventDefault(), A.current && A.current.requestHide({ isImmediate: !1 }));
    }, []),
    Pe = ce
      ? function (e) {
          var t;
          (t = A.current) != null &&
            t.isActive() &&
            (A.current.mousePos = { clientX: e.clientX, clientY: e.clientY });
        }
      : void 0,
    Fe = (0, u.useCallback)(function () {
      if (A.current && A.current.isActive()) {
        A.current.keep();
        return;
      }
    }, []),
    Ie = (0, u.useCallback)(
      function (e) {
        try {
          if (!e.target.matches(`:focus-visible`)) return;
        } catch {}
        Oe({ type: `keyboard` });
      },
      [Oe],
    ),
    Le = (0, u.useCallback)(function () {
      A.current && A.current.requestHide({ isImmediate: !1 });
    }, []),
    Re = (0, u.useCallback)(
      function (e) {
        e === `exiting` &&
          ye.current === `fade-out` &&
          A.current &&
          A.current.finishHideAnimation();
      },
      [ye],
    ),
    ze = p,
    Be = pe !== `hide` && !!o,
    Ve = !ne && Be,
    He = pe !== `hide` && pe !== `fade-out` && pe !== `top-layer-exit`,
    Ue = (0, u.useCallback)(function () {
      var e;
      (e = A.current) == null || e.requestHide({ isImmediate: !0 });
    }, []);
  hv({ isOpen: Be && He, onClose: Ue });
  var We = function () {
      var e;
      return ce && (e = A.current) != null && e.mousePos && he.current
        ? ES(A.current.mousePos, { targetElement: he.current, tooltipPosition: r })
        : he.current || void 0;
    },
    Ge = NS(`tooltip`, Ve),
    Ke = {
      onMouseOver: Me,
      onMouseOut: Ne,
      onMouseMove: Pe,
      onMouseDown: Ae,
      onClick: je,
      onFocus: Ie,
      onBlur: Le,
    },
    qe = typeof t == `function`;
  (0, u.useEffect)(
    function () {
      if (!qe) {
        var e = he.current;
        if (!(!e || !Ge))
          return (
            e.setAttribute(`aria-describedby`, Ge),
            function () {
              return e.removeAttribute(`aria-describedby`);
            }
          );
      }
    },
    [qe, Ge],
  );
  var Je = Ve
      ? u.createElement(
          `span`,
          { "data-testid": m ? `${m}-hidden` : void 0, hidden: !0, id: Ge },
          typeof o == `function` ? o({}) : o,
        )
      : null,
    Ye = se ? u.Fragment : KS,
    Xe =
      typeof t == `function`
        ? u.createElement(
            u.Fragment,
            null,
            t(
              BS(
                BS(BS({}, Ke), m ? { testId: `${m}--container` } : {}),
                {},
                { "aria-describedby": Ge, ref: ve },
              ),
            ),
            Je,
          )
        : u.createElement(
            ze,
            H({}, Ke, m ? { "data-testid": `${m}--container` } : void 0, {
              ref: _e,
              role: `presentation`,
            }),
            t,
            Je,
          );
  return J(`platform-dst-top-layer`)
    ? u.createElement(
        u.Fragment,
        null,
        Xe,
        Be
          ? u.createElement(YS, {
              targetRef: he,
              tooltipPosition: le,
              isMousePosition: ce,
              mousePos: A.current?.mousePos ?? void 0,
              position: r,
              onMouseOut: Ne,
              onMouseOverTooltip: Fe,
              ignoreTooltipPointerEvents: te,
              truncate: c,
              testId: m,
              shortcut: re,
              content: o,
              Container: d,
              onClose: function () {
                return A.current?.requestHide({ isImmediate: !0 });
              },
              onExitFinish: ke,
              isOpen: pe !== `hide` && pe !== `top-layer-exit`,
            })
          : null,
      )
    : u.createElement(
        u.Fragment,
        null,
        Xe,
        Be
          ? u.createElement(
              Ye,
              null,
              u.createElement(
                Zb,
                { placement: le, referenceElement: We(), strategy: ee },
                function (e) {
                  var t = e.ref,
                    n = e.style,
                    r = e.update,
                    i = e.placement,
                    a = ce ? void 0 : US[WS(i)];
                  return u.createElement(
                    Av,
                    { appear: !0 },
                    He &&
                      u.createElement(
                        Lv,
                        {
                          distance: `constant`,
                          entranceDirection: a,
                          exitDirection: a,
                          onFinish: Re,
                          duration: pe === `show-immediate` ? `none` : `medium`,
                        },
                        function (e) {
                          var i = e.className;
                          return u.createElement(
                            d,
                            {
                              ref: t,
                              className: `Tooltip ${i}`,
                              style: BS(BS({}, n), te && { pointerEvents: `none` }),
                              truncate: c,
                              placement: le,
                              testId: We() ? m : m && `${m}--unresolved`,
                              onMouseOut: Ne,
                              onMouseOver: Fe,
                              shortcut: re,
                            },
                            typeof o == `function` ? o({ update: r }) : o,
                          );
                        },
                      ),
                  );
                },
              ),
            )
          : null,
      );
}
var KS = function (e) {
    var t = e.children;
    return u.createElement(wx, { zIndex: VS }, t);
  },
  qS = Zx();
function JS(e) {
  var t = e.mousePos,
    n = e.position,
    r = e.popoverRect,
    i = e.viewport;
  return n === `mouse-x`
    ? {
        top: Math.max(0, Math.min(t.clientY - r.height / 2, i.height - r.height)),
        left: Math.max(0, Math.min(t.clientX + 16, i.width - r.width)),
      }
    : {
        top: Math.max(0, Math.min(t.clientY + 16, i.height - r.height)),
        left: Math.max(0, Math.min(t.clientX, i.width - r.width)),
      };
}
function YS(e) {
  var t = e.targetRef,
    n = e.tooltipPosition,
    r = e.isMousePosition,
    i = e.mousePos,
    a = e.position,
    o = e.onMouseOut,
    s = e.onMouseOverTooltip,
    c = e.ignoreTooltipPointerEvents,
    l = e.truncate,
    d = e.testId,
    f = e.shortcut,
    p = e.content,
    m = e.Container,
    h = e.onClose,
    g = e.onExitFinish,
    _ = e.isOpen,
    v = (0, u.useRef)(null);
  (Jx({
    anchorRef: r ? { current: null } : t,
    popoverRef: v,
    placement: tS({ legacy: n, offset: [0, 4] }),
  }),
    (0, u.useLayoutEffect)(
      function () {
        var e = v.current;
        if (!(!e || !r || !i)) {
          (e.style.setProperty(`--ds-popover-tx`, `0`),
            e.style.setProperty(`--ds-popover-ty`, `0`),
            (e.style.margin = `0`));
          var t = JS({
              mousePos: i,
              position: a,
              popoverRect: e.getBoundingClientRect(),
              viewport: { width: window.innerWidth, height: window.innerHeight },
            }),
            n = t.top,
            o = t.left;
          ((e.style.top = `${n}px`), (e.style.left = `${o}px`));
        }
      },
      [r, i, a],
    ));
  var y = (0, u.useCallback)(cc, []);
  return u.createElement(
    vS,
    {
      ref: v,
      role: `tooltip`,
      mode: `hint`,
      isOpen: _,
      onClose: h,
      onExitFinish: g,
      testId: d ? `${d}--popover` : void 0,
      animate: qS,
      placement: tS({ legacy: n }),
    },
    u.createElement(
      m,
      {
        className: `Tooltip`,
        style: c ? { pointerEvents: `none` } : void 0,
        truncate: l,
        placement: n,
        testId: d,
        onMouseOut: o,
        onMouseOver: s,
        shortcut: f,
        role: `presentation`,
      },
      typeof p == `function` ? p({ update: y }) : p,
    ),
  );
}
X();
var XS = [
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
function ZS(e, t) {
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
function QS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ZS(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ZS(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var $S = `--local-dynamic-table-text-color`,
  eC = (0, u.forwardRef)(function (e, t) {
    var n = e.width,
      r = e.children;
    e.isSortable;
    var i = e.sortOrder,
      a = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var s = e.style,
      c = e.testId,
      l = U(e, XS),
      d = QS(
        QS(QS({}, s), n && pd({ width: n })),
        {},
        B({}, $S, `var(--ds-text-subtlest, #6B6E76)`),
      ),
      f = i === `ASC`,
      p = i === `DESC`,
      m = function () {
        if (f) return `ascending`;
        if (p) return `descending`;
      },
      h = r ? `th` : `td`;
    return u.createElement(
      h,
      H({ "aria-sort": m(), style: d, onClick: void 0, ref: t, "data-testid": c }, l, {
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
var tC = e(cv()),
  nC = e(lv()),
  rC = [
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
  iC = {
    buttonWrapper: `_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke`,
    sortIconHiddenWrapper: `_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n`,
    sortIconVisibleWrapper: `_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66`,
    hideIconHeaderWrapper: `_tzy4idpf _18u010v4`,
    visibleHeaderWrapper: `_tzy4kb7n _u5f31b66`,
  },
  aC = { headCellContainer: `_1e0c1txw _4cvr1h6o`, text: `_11c8wadc _syazazsu _k48pwu06` },
  oC = function (e) {
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
      d = e.ascendingSortTooltip,
      f = d === void 0 ? `Sort ascending` : d,
      p = e.descendingSortTooltip,
      m = p === void 0 ? `Sort descending` : p,
      h = e.buttonAriaRoleDescription,
      g = h === void 0 ? `Sort button` : h,
      _ = e.isIconOnlyHeader,
      v = U(e, rC),
      y = V((0, u.useState)(!1), 2),
      b = y[0],
      x = y[1],
      S = V((0, u.useState)(!1), 2),
      C = S[0],
      w = S[1],
      T = b || c === l || o !== void 0 || C,
      E = T && _,
      D = !_ || T || (_ && !C),
      ee = (0, u.useCallback)(
        function () {
          w?.(!0);
        },
        [w],
      ),
      O = (0, u.useCallback)(
        function () {
          w?.(!1);
        },
        [w],
      ),
      te = (0, u.useCallback)(
        function () {
          x(!0);
        },
        [x],
      ),
      k = (0, u.useCallback)(
        function () {
          x(!1);
        },
        [x],
      ),
      ne = u.createElement(
        yf,
        { xcss: aC.headCellContainer, onMouseEnter: te, onMouseLeave: k, onFocus: ee, onBlur: O },
        u.createElement(
          GS,
          { content: o === `ASC` ? f : m },
          u.createElement(
            sp,
            { onClick: s, xcss: iC.buttonWrapper, "aria-roledescription": g },
            u.createElement(
              Pf,
              { xcss: E ? iC.hideIconHeaderWrapper : iC.visibleHeaderWrapper },
              u.createElement(`span`, { className: Y([aC.text]) }, t),
            ),
            D &&
              u.createElement(
                Pf,
                { xcss: T ? iC.sortIconVisibleWrapper : iC.sortIconHiddenWrapper },
                o === `ASC`
                  ? u.createElement(nC.default, {
                      label: ``,
                      color: `var(--ds-text-subtle, #505258)`,
                      testId: r && `${r}--up--icon`,
                    })
                  : u.createElement(tC.default, {
                      label: ``,
                      color: `var(--ds-text-subtle, #505258)`,
                      testId: r && `${r}--down--icon`,
                    }),
              ),
          ),
        ),
      );
    return u.createElement(
      eC,
      H({ style: n, testId: r && `${r}--head--cell`, ref: typeof i == `string` ? null : i }, v, {
        isSortable: a,
        sortOrder: o,
      }),
      a ? ne : t,
    );
  },
  sC = [`isRanking`, `refHeight`, `refWidth`];
function cC(e, t, n) {
  return (
    (t = z(t)),
    ac(e, lC() ? Reflect.construct(t, n || [], z(e).constructor) : t.apply(e, n))
  );
}
function lC() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (lC = function () {
    return !!e;
  })();
}
var uC = ov(
    (function (e) {
      function t() {
        return (R(this, t), cC(this, t, arguments));
      }
      return (
        sc(t, e),
        rc(t, [
          {
            key: `render`,
            value: function () {
              var e = this.props,
                t = e.isRanking;
              e.refHeight;
              var n = e.refWidth,
                r = U(e, sC),
                i = sv(t, n);
              return u.createElement(oC, H({ inlineStyles: i }, r));
            },
          },
        ])
      );
    })(u.Component),
  ),
  dC = [`cells`],
  fC = [
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
function pC(e, t, n) {
  return (
    (t = z(t)),
    ac(e, mC() ? Reflect.construct(t, n || [], z(e).constructor) : t.apply(e, n))
  );
}
function mC() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (mC = function () {
    return !!e;
  })();
}
var hC = (function (e) {
  function t(e) {
    var n;
    return (R(this, t), (n = pC(this, t, [e])), (n.state = { activeSortButtonId: null }), n);
  }
  return (
    sc(t, e),
    rc(t, [
      {
        key: `UNSAFE_componentWillMount`,
        value: function () {
          Ku(this.props.sortKey, this.props.head);
        },
      },
      {
        key: `UNSAFE_componentWillReceiveProps`,
        value: function (e) {
          (this.props.sortKey !== e.sortKey || this.props.head !== e.head) && Ku(e.sortKey, e.head);
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
            d = this.state.activeSortButtonId;
          if (!n) return null;
          var f = c ? uC : oC,
            p = n.cells,
            m = U(n, dC);
          return u.createElement(
            rv,
            H({}, m, { isRanking: s, testId: l && `${l}--head` }),
            u.createElement(
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
                  C = U(t, fC),
                  w = `head-cell-${n}`;
                return u.createElement(
                  f,
                  H(
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
})(u.Component);
Ze();
var gC = [`isRankable`, `isRanking`, `onRankStart`, `onRankEnd`, `isRankingDisabled`];
function _C(e) {
  switch (e) {
    case `DESC`:
      return `ASC`;
    case `ASC`:
      return `DESC`;
    default:
      return e;
  }
}
var vC = function (e) {
    var t = e.caption,
      n = e.head,
      r = e.highlightedRowIndex,
      i = e.rows,
      a = e.sortKey,
      o = e.sortOrder,
      s = e.loadingLabel,
      c = e.onPageRowsUpdate,
      l = e.testId,
      d = e.totalRows,
      f = e.label,
      p = e.isLoading,
      m = p === void 0 ? !1 : p,
      h = e.isFixedSize,
      g = h === void 0 ? !1 : h,
      _ = e.rowsPerPage,
      v = _ === void 0 ? 1 / 0 : _,
      y = e.onSetPage,
      b = y === void 0 ? cc : y,
      x = e.onSort,
      S = x === void 0 ? cc : x,
      C = e.page,
      w = C === void 0 ? 1 : C,
      T = e.emptyView,
      E = e.isRankable,
      D = E === void 0 ? !1 : E,
      ee = e.isRankingDisabled,
      O = ee === void 0 ? !1 : ee,
      te = e.onRankStart,
      k = te === void 0 ? cc : te,
      ne = e.onRankEnd,
      re = ne === void 0 ? cc : ne,
      ie = e.loadingSpinnerSize,
      ae = e.paginationi18n,
      oe =
        ae === void 0
          ? { prev: `Previous Page`, next: `Next Page`, label: `Pagination`, pageLabel: `Page` }
          : ae,
      se = V((0, u.useState)(!1), 2),
      ce = se[0],
      le = se[1],
      ue = (0, u.useRef)(null),
      de = Bu({
        fn: S,
        action: `sorted`,
        componentName: `dynamicTable`,
        packageName: `@atlaskit/dynamic-table`,
        packageVersion: `0.0.0-development`,
      }),
      A = Bu({
        fn: re,
        action: `ranked`,
        componentName: `dynamicTable`,
        packageName: `@atlaskit/dynamic-table`,
        packageVersion: `0.0.0-development`,
      });
    (0, u.useEffect)(
      function () {
        (Ku(a, n), Wu(n));
      },
      [a, n],
    );
    var fe = function (e) {
        return function () {
          var t = e.key;
          if (t) {
            if (de && D && t === a && o === `DESC`) {
              de({ key: null, sortOrder: null, item: e });
              return;
            }
            var n = t === a ? _C(o) : `ASC`;
            de && de({ key: t, item: e, sortOrder: n });
          }
        };
      },
      pe = function (e, t) {
        b(e, t);
      },
      me = function (e) {
        (le(!0), k(e));
      },
      he = function (e) {
        (le(!1), A(e));
      },
      ge = function () {
        return ie || (Gu(i || [], w, v).length > 2 ? `large` : `small`);
      },
      _e = function () {
        return m ? u.createElement(ed, { testId: l }) : T && u.createElement($u, { testId: l }, T);
      },
      ve = i && i.length,
      ye,
      j = !1;
    (d && Number.isInteger(d) && v && ve && ve <= d
      ? ((ye = Math.ceil(d / v)), (j = !0))
      : (ye = ve && v ? Math.ceil(ve / v) : 0),
      (ye = ye < 1 ? 1 : ye));
    var M = w > ye ? ye : w,
      be = !!ve,
      xe = ge(),
      Se = _e();
    return u.createElement(
      u.Fragment,
      null,
      u.createElement(
        Yd,
        {
          isLoading: m && be,
          spinnerSize: xe,
          targetRef: function () {
            return ue.current;
          },
          testId: l,
          loadingLabel: s,
        },
        u.createElement(
          rd,
          { isFixedSize: g, "aria-label": f, hasDataRow: be, testId: l, isLoading: m },
          !!t && u.createElement(Qu, null, t),
          n &&
            u.createElement(hC, {
              head: n,
              onSort: fe,
              sortKey: a,
              sortOrder: o,
              isRanking: ce,
              isRankable: D,
              testId: l,
            }),
          be &&
            u.createElement(bC, {
              ref: ue,
              highlightedRowIndex: r,
              rows: i,
              head: n,
              sortKey: a,
              sortOrder: o,
              rowsPerPage: v,
              page: M,
              isFixedSize: g || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: j,
              testId: l,
              isRankable: D,
              isRanking: ce,
              onRankStart: me,
              onRankEnd: he,
              isRankingDisabled: O || m || !1,
            }),
        ),
      ),
      ye <= 1
        ? null
        : u.createElement(
            td,
            { testId: l },
            u.createElement(tv, {
              value: M,
              onChange: pe,
              total: ye,
              i18n: oe,
              isDisabled: m,
              testId: l,
            }),
          ),
      !be &&
        Se &&
        u.createElement(Hd, { isLoading: m, spinnerSize: `large`, testId: l, loadingLabel: s }, Se),
    );
  },
  yC = (0, u.lazy)(function () {
    return Xe(() => import(`./body-aNIiuZWg.js`), __vite__mapDeps([2, 1, 3, 4]), import.meta.url);
  }),
  bC = (0, u.forwardRef)(function (e, t) {
    var n = e.isRankable,
      r = n === void 0 ? !1 : n,
      i = e.isRanking,
      a = e.onRankStart,
      o = e.onRankEnd,
      s = e.isRankingDisabled,
      c = U(e, gC),
      l = r && !c.sortKey,
      d = V((0, u.useState)(!1), 2),
      f = d[0],
      p = d[1];
    (0, u.useEffect)(
      function () {
        l && p(!0);
      },
      [l],
    );
    var m = u.createElement(wd, H({ ref: t }, c));
    return l && f
      ? u.createElement(
          Dd,
          { fallback: m },
          u.createElement(
            u.Suspense,
            { fallback: m },
            u.createElement(
              yC,
              H({ ref: t }, c, {
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
function xC(e, t, n) {
  return (
    (t = z(t)),
    ac(e, SC() ? Reflect.construct(t, n || [], z(e).constructor) : t.apply(e, n))
  );
}
function SC() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (SC = function () {
    return !!e;
  })();
}
var CC = (function (e) {
  function t() {
    var e;
    R(this, t);
    var n = [...arguments];
    return (
      (e = xC(this, t, [].concat(n))),
      B(e, `state`, {
        page: e.props.defaultPage,
        sortKey: e.props.defaultSortKey,
        sortOrder: e.props.defaultSortOrder,
        rows: e.props.rows,
      }),
      B(e, `onSetPageHandler`, function (t, n) {
        var r = e.props.onSetPage;
        r && (r(t, n), e.setState({ page: t }));
      }),
      B(e, `onSortHandler`, function (t, n) {
        var r = t.key,
          i = t.item,
          a = t.sortOrder,
          o = e.props.onSort;
        o && (o({ key: r, item: i, sortOrder: a }, n), e.setState({ sortKey: r, sortOrder: a }));
      }),
      B(e, `onRankEndIfExistsHandler`, function (t) {
        e.props.onRankEnd && e.props.onRankEnd(t);
      }),
      B(e, `onRankEndHandler`, function (t) {
        var n = t.destination,
          r = e.state,
          i = r.rows,
          a = r.page,
          o = e.props.rowsPerPage;
        if (!n || !i) {
          e.onRankEndIfExistsHandler(t);
          return;
        }
        var s = hc(t, i, a, o);
        (e.setState({ rows: s }), e.onRankEndIfExistsHandler(t));
      }),
      e
    );
  }
  return (
    sc(t, e),
    rc(t, [
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
            d = a.loadingSpinnerSize,
            f = a.isLoading,
            p = a.loadingLabel,
            m = a.isFixedSize,
            h = a.isRankable,
            g = a.isRankingDisabled,
            _ = a.rowsPerPage,
            v = a.paginationi18n,
            y = a.onRankStart,
            b = a.onPageRowsUpdate,
            x = a.testId,
            S = a.label;
          return u.createElement(vC, {
            paginationi18n: v,
            caption: o,
            emptyView: s,
            head: c,
            highlightedRowIndex: l,
            loadingSpinnerSize: d,
            isLoading: f,
            loadingLabel: p,
            isFixedSize: m,
            onSetPage: this.onSetPageHandler,
            onSort: this.onSortHandler,
            page: t,
            rows: i,
            rowsPerPage: _,
            sortKey: n,
            sortOrder: r,
            isRankable: h,
            isRankingDisabled: g,
            onRankEnd: this.onRankEndHandler,
            onRankStart: y,
            onPageRowsUpdate: b,
            testId: x,
            label: S,
          });
        },
      },
    ])
  );
})(u.Component);
B(CC, `defaultProps`, {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: cc,
  onSort: cc,
  rowsPerPage: 1 / 0,
});
var wC = (e) => {
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
  TC = (e) => ({ cells: wC(e) }),
  EC = (0, u.createContext)(void 0),
  DC = function () {
    var e = (0, u.useContext)(EC);
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
function OC(e) {
  (e.preventDefault(), e.stopPropagation());
}
var kC = 9;
function AC(e) {
  e.keyCode !== kC && OC(e);
}
function jC(e, t) {
  return e
    ? {
        onMouseDownCapture: OC,
        onMouseUpCapture: OC,
        onKeyDownCapture: AC,
        onKeyUpCapture: AC,
        onTouchStartCapture: OC,
        onTouchEndCapture: OC,
        onPointerDownCapture: OC,
        onPointerUpCapture: OC,
        onClickCapture: OC,
        onClick: OC,
      }
    : t;
}
function MC(e) {
  switch (e) {
    case `compact`:
      return `small`;
    default:
      return `medium`;
  }
}
function NC(e) {
  var t = e.appearance,
    n = e.isDisabled,
    r = e.isSelected;
  return n || r
    ? `inherit`
    : t === `primary` || t === `danger` || t === `discovery`
      ? `invert`
      : `inherit`;
}
function PC(e) {
  var t = e.appearance,
    n = e.spacing,
    r = e.isDisabled,
    i = e.isSelected,
    a = e.testId;
  return u.createElement(Nd, {
    size: MC(n),
    appearance: NC({ appearance: t, isDisabled: r, isSelected: i }),
    testId: a ? `${a}--loading-spinner` : void 0,
  });
}
X();
var FC =
    `appearance.autoFocus.isDisabled.isLoading.isSelected.isIconButton.isCircle.hasIconBefore.hasIconAfter.shouldFitContainer.spacing.ariaLabel.ariaLabelledBy.children.interactionName.onClick.onMouseDown.onMouseDownCapture.onMouseUp.onMouseUpCapture.onKeyDown.onKeyDownCapture.onKeyUp.onKeyUpCapture.onTouchStart.onTouchStartCapture.onTouchEnd.onTouchEndCapture.onPointerDown.onPointerDownCapture.onPointerUp.onPointerUpCapture.onClickCapture.testId.analyticsContext.componentName.role.onMouseOver.onMouseOut.onFocus.onBlur.onMouseMove.type`.split(
      `.`,
    ),
  IC = [`className`, `css`, `as`, `style`],
  LC = `, Loading`,
  RC = {
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
  zC = {
    root: `_bfhksm61 _syazazsu _8l3m1l7x _aetrb3bt _1053azsu _f8pjazsu _30l3azsu _9h8hazsu`,
    interactive: `_irr31dpa _30l3azsu _1di6fcek _9h8hazsu`,
    disabled: `_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28`,
  },
  BC = {
    root: `_bfhk1856 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3hf2y _9h8h15cr _1di6g6ey`,
  },
  VC = {
    root: `_bfhk1kmu _syaz1yd3 _10531yd3 _f8pj1yd3 _30l31yd3 _9h8h1yd3`,
    interactive: `_30l31yd3 _irr31spp _9h8h1yd3 _1di64m4m`,
  },
  HC = {
    root: `_bfhkybec _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3s9hg _9h8h15cr _1di613a9`,
  },
  UC = {
    root: `_bfhku5tj _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3fqeg _9h8h15cr _1di61f1m`,
  },
  WC = {
    root: `_bfhksm61 _syazazsu _1053azsu _f8pjazsu _30l3azsu _9h8hazsu`,
    interactive: `_irr31dpa _30l3azsu _1di6fcek _9h8hazsu`,
    disabled: `_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28`,
  },
  GC = {
    root: `_bfhk15s3 _syaz6x5g _8l3mq98m _aetrb3bt _10536x5g _f8pj6x5g _30l36x5g _9h8h6x5g`,
    insideSplitButton: `_1pbycs5v`,
    interactive: `_irr3ufnl _30l36x5g _1di6nozp _9h8h6x5g`,
    warning: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
    danger: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
    discovery: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
  },
  KC = u.forwardRef(function (e, t) {
    var n = e.appearance,
      r = e.autoFocus,
      i = r === void 0 ? !1 : r,
      a = e.isDisabled,
      o = a === void 0 ? !1 : a,
      s = e.isLoading,
      c = s === void 0 ? !1 : s,
      l = e.isSelected,
      d = l === void 0 ? !1 : l,
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
      ee = e.onClick,
      O = e.onMouseDown,
      te = e.onMouseDownCapture,
      k = e.onMouseUp,
      ne = e.onMouseUpCapture,
      re = e.onKeyDown,
      ie = e.onKeyDownCapture,
      ae = e.onKeyUp,
      oe = e.onKeyUpCapture,
      se = e.onTouchStart,
      ce = e.onTouchStartCapture,
      le = e.onTouchEnd,
      ue = e.onTouchEndCapture,
      de = e.onPointerDown,
      A = e.onPointerDownCapture,
      fe = e.onPointerUp,
      pe = e.onPointerUpCapture,
      me = e.onClickCapture,
      he = e.testId,
      ge = e.analyticsContext,
      _e = e.componentName,
      ve = e.role,
      ye = e.onMouseOver,
      j = e.onMouseOut,
      M = e.onFocus,
      be = e.onBlur,
      xe = e.onMouseMove,
      Se = e.type,
      Ce = U(e, FC),
      we = (0, u.useRef)(null),
      Te = DC(),
      Ee = zm(),
      De = !!Te,
      Oe = Te?.isNavigationSplitButton || !1,
      ke = Te?.appearance === `default` ? `subtle` : n || Te?.appearance || `default`,
      Ae = Te?.spacing || C,
      je = Te?.isDisabled || o,
      Me = !je && !c,
      Ne = je || c,
      Pe = d && !je;
    (zg(we, i), Ce.className, Ce.css, Ce.as, Ce.style);
    var Fe = U(Ce, IC);
    return u.createElement(
      sp,
      H(
        {},
        Fe,
        {
          componentName: _e || `button`,
          analyticsContext: ge,
          role: ve,
          ref: Rv([we, t]),
          xcss: Tf(
            RC.base,
            J(`platform-dst-shape-theme-default`) && RC.baseT26Shape,
            ke === `default` && zC.root,
            ke === `default` && Me && zC.interactive,
            ke === `primary` && BC.root,
            ke === `primary` && Me && BC.interactive,
            ke === `warning` && VC.root,
            ke === `warning` && Me && VC.interactive,
            ke === `danger` && HC.root,
            ke === `danger` && Me && HC.interactive,
            ke === `discovery` && UC.root,
            ke === `discovery` && Me && UC.interactive,
            ke === `subtle` && WC.root,
            ke === `subtle` && Me && WC.interactive,
            RC.linkDecorationUnset,
            Pe && GC.root,
            Pe && De && GC.insideSplitButton,
            Pe && Me && GC.interactive,
            Pe && ke === `danger` && GC.danger,
            Pe && ke === `warning` && GC.warning,
            Pe && ke === `discovery` && GC.discovery,
            je && RC.disabled,
            je && ke !== `default` && ke !== `subtle` && RC.sharedDisabled,
            je && ke === `default` && zC.disabled,
            h && !De && RC.circle,
            Ae === `compact` && RC.spacingCompact,
            Ae === `compact` && J(`platform-dst-shape-theme-default`) && RC.spacingCompactT26Shape,
            x && RC.fullWidth,
            _ && RC.buttonIconBefore,
            y && RC.buttonIconAfter,
            p && RC.iconButton,
            p && Ae === `compact` && RC.iconButtonCompact,
            c && RC.loading,
            De && RC.splitButton,
            Oe && RC.navigationSplitButton,
          ),
          isDisabled: J(`platform-dst_fix_not_focusable_loading_button`) ? je : Ne,
        },
        J(`platform-dst_fix_not_focusable_loading_button`) && { "aria-live": `polite` },
        c && J(`platform-dst_fix_not_focusable_loading_button`) && { "aria-disabled": !0 },
        {
          "aria-label": c && w && !T ? `${w} ${LC}` : w,
          "aria-labelledby": c && T ? `${T} ${Ee}` : T,
          onClick: ee,
        },
        jC(Ne, {
          onMouseDownCapture: te,
          onMouseUpCapture: ne,
          onKeyDownCapture: ie,
          onKeyUpCapture: oe,
          onTouchStartCapture: ce,
          onTouchEndCapture: ue,
          onPointerDownCapture: A,
          onPointerUpCapture: pe,
          onClickCapture: me,
        }),
        {
          testId: he,
          onMouseOver: ye,
          onFocus: M,
          onMouseMove: xe,
          onBlur: be,
          type: Se,
          interactionName: D,
          onMouseDown: O,
          onMouseUp: k,
          onKeyDown: re,
          onMouseOut: j,
          onKeyUp: ae,
          onTouchStart: se,
          onTouchEnd: le,
          onPointerDown: de,
          onPointerUp: fe,
        },
      ),
      u.createElement(
        EC.Provider,
        { value: void 0 },
        E,
        c &&
          u.createElement(
            `span`,
            { className: Y([RC.loadingOverlay]) },
            PC({ spacing: Ae, appearance: ke, isDisabled: je, isSelected: Pe, testId: he }),
          ),
        c && (T || !w) && u.createElement(Bm, { id: Ee }, LC),
      ),
    );
  });
X();
var qC = {
    text: `_1reo15vq _18m915vq _16jlkb7n _1o9zkb7n _1bto1l2s _o5721q9c`,
    icon: `_1e0c1txw _16jlidpf _1o9zidpf _1wpz1h6o _1wybidpf _vwz4idpf _uiztglyw`,
    common: `_v564g17y`,
    fade: `_tzy4idpf`,
  },
  JC = function (e) {
    var t = e.children,
      n = e.type,
      r = n === void 0 ? `text` : n,
      i = e.isLoading;
    return u.createElement(
      `span`,
      { className: Y([qC.common, r === `text` && qC.text, r === `icon` && qC.icon, i && qC.fade]) },
      t,
    );
  };
function YC(e) {
  return !e.displayName && !e.render && typeof e == `function`;
}
var XC = function (e) {
    var t = e.icon,
      n = YC(t),
      r = {
        label: ``,
        color: `currentColor`,
        size: J(`platform_dst_button_chevron_sizing`)
          ? function (e) {
              return e.startsWith(`Chevron`) ? `small` : `medium`;
            }
          : void 0,
      };
    return u.createElement(u.Fragment, null, n ? t(r) : u.createElement(t, r));
  },
  ZC =
    `analyticsContext.appearance.aria-label.aria-labelledby.autoFocus.children.iconAfter.iconBefore.interactionName.isDisabled.isLoading.isSelected.onClick.onClickCapture.onKeyDownCapture.onKeyUpCapture.onMouseDownCapture.onMouseUpCapture.onPointerDownCapture.onPointerUpCapture.onTouchEndCapture.onTouchStartCapture.shouldFitContainer.spacing.testId.type`.split(
      `.`,
    ),
  QC = [`className`, `css`, `as`, `style`],
  $C = u.memo(
    u.forwardRef(function (e, t) {
      var n = e.analyticsContext,
        r = e.appearance,
        i = e[`aria-label`],
        a = e[`aria-labelledby`],
        o = e.autoFocus,
        s = e.children,
        c = e.iconAfter,
        l = e.iconBefore,
        d = e.interactionName,
        f = e.isDisabled,
        p = e.isLoading,
        m = p === void 0 ? !1 : p,
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
        ee = e.testId,
        O = e.type,
        te = O === void 0 ? `button` : O,
        k = U(e, ZC);
      (k.className, k.css, k.as, k.style);
      var ne = U(k, QC);
      return u.createElement(
        KC,
        H(
          {
            analyticsContext: n,
            ref: t,
            appearance: r,
            autoFocus: o,
            isDisabled: f,
            isLoading: m,
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
            testId: ee,
            componentName: `Button`,
            type: te,
            interactionName: d,
          },
          ne,
        ),
        l &&
          u.createElement(
            JC,
            { type: `icon`, position: `before`, isLoading: m },
            u.createElement(XC, { icon: l }),
          ),
        s && u.createElement(JC, { isLoading: m }, s),
        c &&
          u.createElement(
            JC,
            { type: `icon`, position: `after`, isLoading: m },
            u.createElement(XC, { icon: c }),
          ),
      );
    }),
  );
$C.displayName = `Button`;
var ew = i((e) => {
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
    t.exports = ew();
  })(),
  tw = Bs((e) => {
    let { stateStore: t } = Qs(),
      n = TC(!0),
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
              (0, $.jsx)(CC, {
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
                        children: (0, $.jsx)($C, {
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
function nw(e) {
  return lc(e) || xc(e) || fc(e) || pc();
}
var rw = (0, u.createContext)(null),
  iw = (0, u.createContext)(null);
X();
function aw(e, t) {
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
function ow(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? aw(Object(n), !0).forEach(function (t) {
          B(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : aw(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var sw = {
    componentName: `tabs`,
    packageName: `@atlaskit/tabs`,
    packageVersion: `0.0.0-development`,
  },
  cw = function (e) {
    var t = e.tabPanel,
      n = e.index,
      r = e.isSelected,
      i = e.tabsId;
    return (
      t &&
      u.createElement(
        iw.Provider,
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
  lw = function (e) {
    var t = e.shouldUnmountTabPanelOnChange,
      n = t === void 0 ? !1 : t,
      r = e.selected,
      i = e.defaultSelected,
      a = e.onChange,
      o = e.id,
      s = e.analyticsContext,
      c = e.children,
      l = e.testId,
      d = V((0, u.useState)(r || i || 0), 2),
      f = d[0],
      p = d[1],
      m = r === void 0 ? f : r,
      h = nw(
        u.Children.toArray(c).filter(function (e) {
          return !!e;
        }),
      ),
      g = h[0],
      _ = h.slice(1),
      v = (0, u.useRef)(new Set([m]));
    v.current.has(m) || v.current.add(m);
    var y = Bu(
        ow(
          {
            fn: (0, u.useCallback)(
              function (e, t) {
                (a && a(e, t), p(e));
              },
              [a],
            ),
            action: `clicked`,
            analyticsData: s,
          },
          sw,
        ),
      ),
      b = n
        ? cw({ tabPanel: _[m], index: m, isSelected: !0, tabsId: o })
        : Array.from(v.current).map(function (e) {
            return cw({ tabPanel: _[e], index: e, isSelected: e === m, tabsId: o });
          });
    return u.createElement(
      `div`,
      {
        "data-testid": l,
        className: Y([
          `_1e0c1txw _p12f1osq _1tkeidpf _i0dl1osq _2lx21bp4 _16jlkb7n`,
          `_1c3y1txw _ftfaidpf _18i0kb7n _185bglyw`,
        ]),
      },
      u.createElement(rw.Provider, { value: { selected: m, onChange: y, tabsId: o } }, g),
      u.createElement(u.Fragment, null, b),
    );
  };
function uw() {
  var e = (0, u.useContext)(iw);
  if (e == null) throw Error(`@atlaskit/tabs:  A TabPanel must have a Tabs parent.`);
  return e;
}
var dw = function (e) {
    var t = e.children,
      n = e.testId,
      r = uw(),
      i = r.role,
      a = r.id,
      o = r.hidden,
      s = r[`aria-labelledby`],
      c = r.tabIndex;
    return u.createElement(
      rp,
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
      u.createElement(u.Fragment, null, t),
    );
  },
  fw = (0, u.createContext)(null);
function pw() {
  var e = (0, u.useContext)(fw);
  if (e == null || e === void 0) throw Error(`@atlaskit/tabs: A Tab must have a TabList parent.`);
  return e;
}
var mw = (0, u.forwardRef)(function (e, t) {
  var n = e.children,
    r = e.testId,
    i = pw(),
    a = i.onClick,
    o = i.id,
    s = i[`aria-controls`],
    c = i[`aria-posinset`],
    l = i[`aria-selected`],
    d = i[`aria-setsize`],
    f = i.onKeyDown,
    p = i.role,
    m = i.tabIndex;
  return u.createElement(
    rp,
    {
      as: `div`,
      isInset: !0,
      testId: r,
      onClick: a,
      id: o,
      "aria-controls": s,
      "aria-posinset": c,
      "aria-selected": l,
      "aria-setsize": d,
      onKeyDown: f,
      role: p,
      tabIndex: m,
      ref: t,
    },
    u.createElement($f, { weight: `medium`, color: `inherit`, maxLines: 1 }, n),
  );
});
function hw() {
  var e = (0, u.useContext)(rw);
  if (e == null) throw Error(`@atlaskit/tabs: A TabList must have a Tabs parent.`);
  return e;
}
X();
var gw = function (e) {
    var t = e.children,
      n = hw(),
      r = n.tabsId,
      i = n.selected,
      a = n.onChange,
      o = (0, u.createRef)(),
      s = u.Children.toArray(t).filter(Boolean),
      c = s.length,
      l = (0, u.useCallback)(
        function (e) {
          var t = o.current?.querySelector(`[id='${r}-${e}']`);
          (t && t.focus(), a(e));
        },
        [r, o, a],
      ),
      d = (0, u.useCallback)(
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
      f = (0, u.useCallback)(
        function (e) {
          var t = e.tab,
            n = e.isSelected,
            i = e.index;
          return u.createElement(
            fw.Provider,
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
    return u.createElement(
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
        return f({ tab: e, index: t, isSelected: t === i });
      }),
    );
  },
  _w = Object.keys(
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
  vw = ({ children: e, testId: t }) =>
    (0, $.jsx)(`div`, {
      style: {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: `column`,
        flexGrow: 1,
        backgroundColor: Op(`color.background.neutral`),
        borderRadius: `3px`,
        color: Op(`color.text.subtlest`),
        font: Op(`font.heading.xxlarge`),
        marginBlockEnd: Op(`space.100`, `8px`),
        marginBlockStart: Op(`space.200`, `16px`),
        paddingBlockEnd: Op(`space.400`, `32px`),
        paddingBlockStart: Op(`space.400`, `32px`),
        paddingInlineEnd: Op(`space.400`, `32px`),
        paddingInlineStart: Op(`space.400`, `32px`),
      },
      "data-testid": t,
      children: e,
    });
function yw() {
  let { stateStore: e } = Qs();
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
              (0, $.jsxs)($C, {
                appearance: `danger`,
                onClick: async () => {
                  try {
                    (e.loading(`Clear ...`),
                      await (0, rn.invoke)(`clearAll`, {
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
          (0, $.jsxs)(lw, {
            onChange: (e) => console.log(`Selected Tab`, e + 1),
            defaultSelected: 1,
            id: `default`,
            children: [
              (0, $.jsxs)(gw, {
                children: [
                  ` `,
                  _w.map((e) => {
                    switch (e) {
                      case `WITHOUT_VERSIONING`:
                        return (0, $.jsx)(
                          mw,
                          { children: `Entity Without Version Column (No Locking)` },
                          e,
                        );
                      case `OPTIMISTIC_NUMBER`:
                        return (0, $.jsx)(
                          mw,
                          { children: `Entity with Numeric Version Column` },
                          e,
                        );
                      case `OPTIMISTIC_DATE`:
                        return (0, $.jsx)(
                          mw,
                          { children: `Entity with Datetime-Based Version Column` },
                          e,
                        );
                      case `OPTIMISTIC_TIMESTAMP`:
                        return (0, $.jsx)(
                          mw,
                          { children: `Entity with Timestamp-BasedVersion Column` },
                          e,
                        );
                    }
                  }),
                ],
              }),
              (0, $.jsx)(dw, { children: (0, $.jsx)($.Fragment, {}) }),
              (0, $.jsx)(dw, {
                children: (0, $.jsx)(vw, {
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
                      (0, $.jsx)(tw, { type: `WITHOUT_VERSIONING` }),
                    ],
                  }),
                }),
              }),
              (0, $.jsx)(dw, {
                children: (0, $.jsx)(vw, {
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
                      (0, $.jsx)(tw, { type: `OPTIMISTIC_NUMBER` }),
                    ],
                  }),
                }),
              }),
              (0, $.jsx)(dw, {
                children: (0, $.jsx)(vw, {
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
                      (0, $.jsx)(tw, { type: `OPTIMISTIC_DATE` }),
                    ],
                  }),
                }),
              }),
              (0, $.jsx)(dw, {
                children: (0, $.jsx)(vw, {
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
                      (0, $.jsx)(tw, { type: `OPTIMISTIC_TIMESTAMP` }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
}
var bw = Bs(yw),
  xw = Bs((e) => {
    let { stateStore: t } = Qs(),
      [n, r] = (0, u.useState)(``),
      [i, a] = (0, u.useState)({}),
      o = (e) => {
        let { name: t, value: n, type: r } = e.target;
        a((e) => ({ ...e, [t]: r === `number` ? Number(n) : n }));
      },
      s = async (t) => {
        t.preventDefault();
        let n = { ...c };
        (i.testNameColumn && (n.testNameColumn = i.testNameColumn),
          i.testDateColumn && (n.testDateColumn = new Date(i.testDateColumn)),
          r(await (0, rn.invoke)(`update`, { data: n, objectName: e.type })));
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
                let e = await (0, rn.invoke)(`fetchOrCreateIfNotExists`);
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
function Sw() {
  let { stateStore: e } = Qs();
  if (
    ((0, u.useEffect)(() => {
      (async () => {
        try {
          e.loading();
          let t = await (0, rn.invoke)(`fetchOrCreateIfNotExists`);
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
      return (0, $.jsx)(bw, {});
    case `WITHOUT_VERSIONING`:
    case `OPTIMISTIC_TIMESTAMP`:
    case `OPTIMISTIC_DATE`:
    case `OPTIMISTIC_NUMBER`:
      return (0, $.jsx)(xw, { type: e.state });
    default:
      return (0, $.jsxs)(`div`, { children: [`ERROR: unsupprted state $`, e.state] });
  }
}
var Cw = Bs(Sw),
  ww = (0, s().createRoot)(document.getElementById(`root`)),
  Tw = () => {
    ww.render((0, $.jsx)(Gs, { ...Xs, children: (0, $.jsx)(Cw, {}) }));
  };
rn.view.theme
  .enable()
  .then(() => {
    Tw();
  })
  .catch((e) => {
    (console.error(e.message), Tw());
  });
export {
  V as C,
  ac as D,
  z as E,
  rc as O,
  H as S,
  sc as T,
  X as _,
  Ng as a,
  Cc as b,
  Bp as c,
  bp as d,
  mp as f,
  dd as g,
  hd as h,
  Pg as i,
  R as k,
  wp as l,
  _d as m,
  sv as n,
  cm as o,
  Vf as p,
  ov as r,
  om as s,
  Ex as t,
  Ep as u,
  Y as v,
  B as w,
  U as x,
  wl as y,
};
