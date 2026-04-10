import { t as e } from "./rolldown-runtime-Bhmf7a9N.js";
var t = e((e, t) => {
    t.exports = Array.isArray;
  }),
  n = e((e, t) => {
    t.exports = typeof global == `object` && global && global.Object === Object && global;
  }),
  r = e((e, t) => {
    var r = n(),
      i = typeof self == `object` && self && self.Object === Object && self;
    t.exports = r || i || Function(`return this`)();
  }),
  i = e((e, t) => {
    t.exports = r().Symbol;
  }),
  a = e((e, t) => {
    var n = i(),
      r = Object.prototype,
      a = r.hasOwnProperty,
      o = r.toString,
      s = n ? n.toStringTag : void 0;
    function c(e) {
      var t = a.call(e, s),
        n = e[s];
      try {
        e[s] = void 0;
        var r = !0;
      } catch {}
      var i = o.call(e);
      return (r && (t ? (e[s] = n) : delete e[s]), i);
    }
    t.exports = c;
  }),
  o = e((e, t) => {
    var n = Object.prototype.toString;
    function r(e) {
      return n.call(e);
    }
    t.exports = r;
  }),
  s = e((e, t) => {
    var n = i(),
      r = a(),
      s = o(),
      c = `[object Null]`,
      l = `[object Undefined]`,
      u = n ? n.toStringTag : void 0;
    function d(e) {
      return e == null ? (e === void 0 ? l : c) : u && u in Object(e) ? r(e) : s(e);
    }
    t.exports = d;
  }),
  c = e((e, t) => {
    function n(e) {
      return typeof e == `object` && !!e;
    }
    t.exports = n;
  }),
  l = e((e, t) => {
    var n = s(),
      r = c(),
      i = `[object Symbol]`;
    function a(e) {
      return typeof e == `symbol` || (r(e) && n(e) == i);
    }
    t.exports = a;
  }),
  u = e((e, n) => {
    var r = t(),
      i = l(),
      a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      o = /^\w*$/;
    function s(e, t) {
      if (r(e)) return !1;
      var n = typeof e;
      return n == `number` || n == `symbol` || n == `boolean` || e == null || i(e)
        ? !0
        : o.test(e) || !a.test(e) || (t != null && e in Object(t));
    }
    n.exports = s;
  }),
  d = e((e, t) => {
    function n(e) {
      var t = typeof e;
      return e != null && (t == `object` || t == `function`);
    }
    t.exports = n;
  }),
  f = e((e, t) => {
    var n = s(),
      r = d(),
      i = `[object AsyncFunction]`,
      a = `[object Function]`,
      o = `[object GeneratorFunction]`,
      c = `[object Proxy]`;
    function l(e) {
      if (!r(e)) return !1;
      var t = n(e);
      return t == a || t == o || t == i || t == c;
    }
    t.exports = l;
  }),
  p = e((e, t) => {
    t.exports = r()[`__core-js_shared__`];
  }),
  m = e((e, t) => {
    var n = p(),
      r = (function () {
        var e = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || ``);
        return e ? `Symbol(src)_1.` + e : ``;
      })();
    function i(e) {
      return !!r && r in e;
    }
    t.exports = i;
  }),
  h = e((e, t) => {
    var n = Function.prototype.toString;
    function r(e) {
      if (e != null) {
        try {
          return n.call(e);
        } catch {}
        try {
          return e + ``;
        } catch {}
      }
      return ``;
    }
    t.exports = r;
  }),
  g = e((e, t) => {
    var n = f(),
      r = m(),
      i = d(),
      a = h(),
      o = /[\\^$.*+?()[\]{}|]/g,
      s = /^\[object .+?Constructor\]$/,
      c = Function.prototype,
      l = Object.prototype,
      u = c.toString,
      p = l.hasOwnProperty,
      g = RegExp(
        `^` +
          u
            .call(p)
            .replace(o, `\\$&`)
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, `$1.*?`) +
          `$`,
      );
    function _(e) {
      return !i(e) || r(e) ? !1 : (n(e) ? g : s).test(a(e));
    }
    t.exports = _;
  }),
  _ = e((e, t) => {
    function n(e, t) {
      return e?.[t];
    }
    t.exports = n;
  }),
  v = e((e, t) => {
    var n = g(),
      r = _();
    function i(e, t) {
      var i = r(e, t);
      return n(i) ? i : void 0;
    }
    t.exports = i;
  }),
  y = e((e, t) => {
    t.exports = v()(Object, `create`);
  }),
  b = e((e, t) => {
    var n = y();
    function r() {
      ((this.__data__ = n ? n(null) : {}), (this.size = 0));
    }
    t.exports = r;
  }),
  x = e((e, t) => {
    function n(e) {
      var t = this.has(e) && delete this.__data__[e];
      return ((this.size -= +!!t), t);
    }
    t.exports = n;
  }),
  S = e((e, t) => {
    var n = y(),
      r = `__lodash_hash_undefined__`,
      i = Object.prototype.hasOwnProperty;
    function a(e) {
      var t = this.__data__;
      if (n) {
        var a = t[e];
        return a === r ? void 0 : a;
      }
      return i.call(t, e) ? t[e] : void 0;
    }
    t.exports = a;
  }),
  C = e((e, t) => {
    var n = y(),
      r = Object.prototype.hasOwnProperty;
    function i(e) {
      var t = this.__data__;
      return n ? t[e] !== void 0 : r.call(t, e);
    }
    t.exports = i;
  }),
  w = e((e, t) => {
    var n = y(),
      r = `__lodash_hash_undefined__`;
    function i(e, t) {
      var i = this.__data__;
      return ((this.size += +!this.has(e)), (i[e] = n && t === void 0 ? r : t), this);
    }
    t.exports = i;
  }),
  T = e((e, t) => {
    var n = b(),
      r = x(),
      i = S(),
      a = C(),
      o = w();
    function s(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    ((s.prototype.clear = n),
      (s.prototype.delete = r),
      (s.prototype.get = i),
      (s.prototype.has = a),
      (s.prototype.set = o),
      (t.exports = s));
  }),
  E = e((e, t) => {
    function n() {
      ((this.__data__ = []), (this.size = 0));
    }
    t.exports = n;
  }),
  D = e((e, t) => {
    function n(e, t) {
      return e === t || (e !== e && t !== t);
    }
    t.exports = n;
  }),
  O = e((e, t) => {
    var n = D();
    function r(e, t) {
      for (var r = e.length; r--; ) if (n(e[r][0], t)) return r;
      return -1;
    }
    t.exports = r;
  }),
  k = e((e, t) => {
    var n = O(),
      r = Array.prototype.splice;
    function i(e) {
      var t = this.__data__,
        i = n(t, e);
      return i < 0 ? !1 : (i == t.length - 1 ? t.pop() : r.call(t, i, 1), --this.size, !0);
    }
    t.exports = i;
  }),
  A = e((e, t) => {
    var n = O();
    function r(e) {
      var t = this.__data__,
        r = n(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    t.exports = r;
  }),
  j = e((e, t) => {
    var n = O();
    function r(e) {
      return n(this.__data__, e) > -1;
    }
    t.exports = r;
  }),
  M = e((e, t) => {
    var n = O();
    function r(e, t) {
      var r = this.__data__,
        i = n(r, e);
      return (i < 0 ? (++this.size, r.push([e, t])) : (r[i][1] = t), this);
    }
    t.exports = r;
  }),
  N = e((e, t) => {
    var n = E(),
      r = k(),
      i = A(),
      a = j(),
      o = M();
    function s(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    ((s.prototype.clear = n),
      (s.prototype.delete = r),
      (s.prototype.get = i),
      (s.prototype.has = a),
      (s.prototype.set = o),
      (t.exports = s));
  }),
  P = e((e, t) => {
    t.exports = v()(r(), `Map`);
  }),
  F = e((e, t) => {
    var n = T(),
      r = N(),
      i = P();
    function a() {
      ((this.size = 0), (this.__data__ = { hash: new n(), map: new (i || r)(), string: new n() }));
    }
    t.exports = a;
  }),
  I = e((e, t) => {
    function n(e) {
      var t = typeof e;
      return t == `string` || t == `number` || t == `symbol` || t == `boolean`
        ? e !== `__proto__`
        : e === null;
    }
    t.exports = n;
  }),
  L = e((e, t) => {
    var n = I();
    function r(e, t) {
      var r = e.__data__;
      return n(t) ? r[typeof t == `string` ? `string` : `hash`] : r.map;
    }
    t.exports = r;
  }),
  R = e((e, t) => {
    var n = L();
    function r(e) {
      var t = n(this, e).delete(e);
      return ((this.size -= +!!t), t);
    }
    t.exports = r;
  }),
  z = e((e, t) => {
    var n = L();
    function r(e) {
      return n(this, e).get(e);
    }
    t.exports = r;
  }),
  B = e((e, t) => {
    var n = L();
    function r(e) {
      return n(this, e).has(e);
    }
    t.exports = r;
  }),
  V = e((e, t) => {
    var n = L();
    function r(e, t) {
      var r = n(this, e),
        i = r.size;
      return (r.set(e, t), (this.size += r.size == i ? 0 : 1), this);
    }
    t.exports = r;
  }),
  H = e((e, t) => {
    var n = F(),
      r = R(),
      i = z(),
      a = B(),
      o = V();
    function s(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    ((s.prototype.clear = n),
      (s.prototype.delete = r),
      (s.prototype.get = i),
      (s.prototype.has = a),
      (s.prototype.set = o),
      (t.exports = s));
  }),
  U = e((e, t) => {
    var n = H(),
      r = `Expected a function`;
    function i(e, t) {
      if (typeof e != `function` || (t != null && typeof t != `function`)) throw TypeError(r);
      var a = function () {
        var n = arguments,
          r = t ? t.apply(this, n) : n[0],
          i = a.cache;
        if (i.has(r)) return i.get(r);
        var o = e.apply(this, n);
        return ((a.cache = i.set(r, o) || i), o);
      };
      return ((a.cache = new (i.Cache || n)()), a);
    }
    ((i.Cache = n), (t.exports = i));
  }),
  W = e((e, t) => {
    var n = U(),
      r = 500;
    function i(e) {
      var t = n(e, function (e) {
          return (i.size === r && i.clear(), e);
        }),
        i = t.cache;
      return t;
    }
    t.exports = i;
  }),
  G = e((e, t) => {
    var n = W(),
      r =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      i = /\\(\\)?/g;
    t.exports = n(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(``),
        e.replace(r, function (e, n, r, a) {
          t.push(r ? a.replace(i, `$1`) : n || e);
        }),
        t
      );
    });
  }),
  K = e((e, t) => {
    function n(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; ) i[n] = t(e[n], n, e);
      return i;
    }
    t.exports = n;
  }),
  q = e((e, n) => {
    var r = i(),
      a = K(),
      o = t(),
      s = l(),
      c = 1 / 0,
      u = r ? r.prototype : void 0,
      d = u ? u.toString : void 0;
    function f(e) {
      if (typeof e == `string`) return e;
      if (o(e)) return a(e, f) + ``;
      if (s(e)) return d ? d.call(e) : ``;
      var t = e + ``;
      return t == `0` && 1 / e == -c ? `-0` : t;
    }
    n.exports = f;
  }),
  J = e((e, t) => {
    var n = q();
    function r(e) {
      return e == null ? `` : n(e);
    }
    t.exports = r;
  }),
  Y = e((e, n) => {
    var r = t(),
      i = u(),
      a = G(),
      o = J();
    function s(e, t) {
      return r(e) ? e : i(e, t) ? [e] : a(o(e));
    }
    n.exports = s;
  }),
  X = e((e, t) => {
    var n = l(),
      r = 1 / 0;
    function i(e) {
      if (typeof e == `string` || n(e)) return e;
      var t = e + ``;
      return t == `0` && 1 / e == -r ? `-0` : t;
    }
    t.exports = i;
  }),
  Z = e((e, t) => {
    var n = Y(),
      r = X();
    function i(e, t) {
      t = n(t, e);
      for (var i = 0, a = t.length; e != null && i < a; ) e = e[r(t[i++])];
      return i && i == a ? e : void 0;
    }
    t.exports = i;
  }),
  Q = e((e, t) => {
    var n = Z();
    function r(e, t, r) {
      var i = e == null ? void 0 : n(e, t);
      return i === void 0 ? r : i;
    }
    t.exports = r;
  });
export { Q as t };
