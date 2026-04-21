function e(e) {
  if (Array.isArray(e)) return e;
}
function t(e, t) {
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
function n(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function r(e, t) {
  if (e) {
    if (typeof e == `string`) return n(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === `Object` && e.constructor && (r = e.constructor.name),
      r === `Map` || r === `Set`
        ? Array.from(e)
        : r === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? n(e, t)
          : void 0
    );
  }
}
function i() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a(n, a) {
  return e(n) || t(n, a) || r(n, a) || i();
}
function o(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function s(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = o(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function c(e) {
  "@babel/helpers - typeof";
  return (
    (c =
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
    c(e)
  );
}
function l(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function u(e, t) {
  if (c(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (c(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function d(e) {
  var t = u(e, `string`);
  return c(t) == `symbol` ? t : t + ``;
}
function f(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, d(r.key), r));
  }
}
function p(e, t, n) {
  return (
    t && f(e.prototype, t),
    n && f(e, n),
    Object.defineProperty(e, `prototype`, { writable: !1 }),
    e
  );
}
function m(e, t, n) {
  return (
    (t = d(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function h(e) {
  if (Array.isArray(e)) return n(e);
}
function g(e) {
  if ((typeof Symbol < `u` && e[Symbol.iterator] != null) || e[`@@iterator`] != null)
    return Array.from(e);
}
function _() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function v(e) {
  return h(e) || g(e) || r(e) || _();
}
function y(e) {
  if (e === void 0)
    throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
  return e;
}
function b(e, t) {
  if (t && (c(t) == `object` || typeof t == `function`)) return t;
  if (t !== void 0) throw TypeError(`Derived constructors may only return object or undefined`);
  return y(e);
}
function x(e) {
  return (
    (x = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    x(e)
  );
}
function S(e, t) {
  return (
    (S = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    S(e, t)
  );
}
function C(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, `prototype`, { writable: !1 }),
    t && S(e, t));
}
function w(e) {
  try {
    return Function.toString.call(e).indexOf(`[native code]`) !== -1;
  } catch {
    return typeof e == `function`;
  }
}
function T() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (T = function () {
    return !!e;
  })();
}
function E(e, t, n) {
  if (T()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var i = new (e.bind.apply(e, r))();
  return (n && S(i, n.prototype), i);
}
function D(e) {
  var t = typeof Map == `function` ? new Map() : void 0;
  return (
    (D = function (e) {
      if (e === null || !w(e)) return e;
      if (typeof e != `function`)
        throw TypeError(`Super expression must either be null or a function`);
      if (t !== void 0) {
        if (t.has(e)) return t.get(e);
        t.set(e, n);
      }
      function n() {
        return E(e, arguments, x(this).constructor);
      }
      return (
        (n.prototype = Object.create(e.prototype, {
          constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
        })),
        S(n, e)
      );
    }),
    D(e)
  );
}
export {
  v as a,
  p as c,
  s as d,
  a as f,
  e as h,
  b as i,
  l,
  r as m,
  C as n,
  g as o,
  i as p,
  x as r,
  m as s,
  D as t,
  c as u,
};
