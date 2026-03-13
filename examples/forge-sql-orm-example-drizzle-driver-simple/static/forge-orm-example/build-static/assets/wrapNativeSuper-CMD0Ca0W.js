function e(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function t(e) {
  "@babel/helpers - typeof";
  return (
    (t =
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
    t(e)
  );
}
function n(e, n) {
  if (t(e) != `object` || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(e, n || `default`);
    if (t(i) != `object`) return i;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (n === `string` ? String : Number)(e);
}
function r(e) {
  var r = n(e, `string`);
  return t(r) == `symbol` ? r : r + ``;
}
function i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    ((i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      `value` in i && (i.writable = !0),
      Object.defineProperty(e, r(i.key), i));
  }
}
function a(e, t, n) {
  return (
    t && i(e.prototype, t),
    n && i(e, n),
    Object.defineProperty(e, `prototype`, { writable: !1 }),
    e
  );
}
function o(e) {
  if (e === void 0)
    throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
  return e;
}
function s(e, n) {
  if (n && (t(n) == `object` || typeof n == `function`)) return n;
  if (n !== void 0) throw TypeError(`Derived constructors may only return object or undefined`);
  return o(e);
}
function c(e) {
  return (
    (c = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    c(e)
  );
}
function l(e, t) {
  return (
    (l = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    l(e, t)
  );
}
function u(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, `prototype`, { writable: !1 }),
    t && l(e, t));
}
function d(e, t, n) {
  return (
    (t = r(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function f(e) {
  if (Array.isArray(e)) return e;
}
function p(e, t) {
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
function m(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function h(e, t) {
  if (e) {
    if (typeof e == `string`) return m(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? m(e, t)
          : void 0
    );
  }
}
function g() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _(e, t) {
  return f(e) || p(e, t) || h(e, t) || g();
}
function v(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function y(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function b(e) {
  if (Array.isArray(e)) return m(e);
}
function x(e) {
  if ((typeof Symbol < `u` && e[Symbol.iterator] != null) || e[`@@iterator`] != null)
    return Array.from(e);
}
function S() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function C(e) {
  return b(e) || x(e) || h(e) || S();
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
  return (n && l(i, n.prototype), i);
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
        return E(e, arguments, c(this).constructor);
      }
      return (
        (n.prototype = Object.create(e.prototype, {
          constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
        })),
        l(n, e)
      );
    }),
    D(e)
  );
}
export { d as a, s as c, e as d, _ as i, a as l, C as n, u as o, y as r, c as s, D as t, t as u };
