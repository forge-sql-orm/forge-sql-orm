import { a as e, n as t, t as n } from "./rolldown-runtime-COnpUsM8.js";
import { r } from "./react-dom-vendor-DD8-Uyz5.js";
import {
  c as i,
  d as a,
  i as o,
  l as s,
  n as c,
  r as l,
  s as u,
  u as d,
} from "./wrapNativeSuper-CcHGmOvu.js";
var f = e(r());
function p() {
  return (
    (p = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    p.apply(null, arguments)
  );
}
var m = !1;
function h(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function g(e) {
  var t = document.createElement(`style`);
  return (
    t.setAttribute(`data-emotion`, e.key),
    e.nonce !== void 0 && t.setAttribute(`nonce`, e.nonce),
    t.appendChild(document.createTextNode(``)),
    t.setAttribute(`data-s`, ``),
    t
  );
}
var _ = (function () {
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
        (this.isSpeedy = e.speedy === void 0 ? !m : e.speedy),
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(g(this));
        var t = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var n = h(t);
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
  v = `-ms-`,
  y = `-moz-`,
  b = `-webkit-`,
  x = `comm`,
  S = `rule`,
  C = `decl`,
  ee = `@import`,
  te = `@keyframes`,
  ne = `@layer`,
  re = Math.abs,
  w = String.fromCharCode,
  ie = Object.assign;
function ae(e, t) {
  return D(e, 0) ^ 45
    ? (((((((t << 2) ^ D(e, 0)) << 2) ^ D(e, 1)) << 2) ^ D(e, 2)) << 2) ^ D(e, 3)
    : 0;
}
function oe(e) {
  return e.trim();
}
function se(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function T(e, t, n) {
  return e.replace(t, n);
}
function E(e, t) {
  return e.indexOf(t);
}
function D(e, t) {
  return e.charCodeAt(t) | 0;
}
function O(e, t, n) {
  return e.slice(t, n);
}
function k(e) {
  return e.length;
}
function ce(e) {
  return e.length;
}
function A(e, t) {
  return (t.push(e), e);
}
function le(e, t) {
  return e.map(t).join(``);
}
var j = 1,
  M = 1,
  ue = 0,
  N = 0,
  P = 0,
  F = ``;
function I(e, t, n, r, i, a, o) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: a,
    line: j,
    column: M,
    length: o,
    return: ``,
  };
}
function L(e, t) {
  return ie(I(``, null, null, ``, null, null, 0), e, { length: -e.length }, t);
}
function de() {
  return P;
}
function fe() {
  return ((P = N > 0 ? D(F, --N) : 0), M--, P === 10 && ((M = 1), j--), P);
}
function R() {
  return ((P = N < ue ? D(F, N++) : 0), M++, P === 10 && ((M = 1), j++), P);
}
function z() {
  return D(F, N);
}
function B() {
  return N;
}
function V(e, t) {
  return O(F, e, t);
}
function H(e) {
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
function pe(e) {
  return ((j = M = 1), (ue = k((F = e))), (N = 0), []);
}
function me(e) {
  return ((F = ``), e);
}
function U(e) {
  return oe(V(N - 1, W(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function he(e) {
  for (; (P = z()) && P < 33; ) R();
  return H(e) > 2 || H(P) > 3 ? `` : ` `;
}
function ge(e, t) {
  for (; --t && R() && !(P < 48 || P > 102 || (P > 57 && P < 65) || (P > 70 && P < 97)); );
  return V(e, B() + (t < 6 && z() == 32 && R() == 32));
}
function W(e) {
  for (; R(); )
    switch (P) {
      case e:
        return N;
      case 34:
      case 39:
        e !== 34 && e !== 39 && W(P);
        break;
      case 40:
        e === 41 && W(e);
        break;
      case 92:
        R();
        break;
    }
  return N;
}
function _e(e, t) {
  for (; R() && e + P !== 57 && !(e + P === 84 && z() === 47); );
  return `/*` + V(t, N - 1) + `*` + w(e === 47 ? e : R());
}
function ve(e) {
  for (; !H(z()); ) R();
  return V(e, N);
}
function ye(e) {
  return me(G(``, null, null, null, [``], (e = pe(e)), 0, [0], e));
}
function G(e, t, n, r, i, a, o, s, c) {
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
    switch (((m = v), (v = R()))) {
      case 40:
        if (m != 108 && D(C, d - 1) == 58) {
          E((C += T(U(v), `&`, `&\f`)), `&\f`) != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += U(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += he(m);
        break;
      case 92:
        C += ge(B() - 1, 7);
        continue;
      case 47:
        switch (z()) {
          case 42:
          case 47:
            A(xe(_e(R(), B()), t, n), c);
            break;
          default:
            C += `/`;
        }
        break;
      case 123 * h:
        s[l++] = k(C) * _;
      case 125 * h:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            (_ == -1 && (C = T(C, /\f/g, ``)),
              p > 0 &&
                k(C) - d &&
                A(p > 32 ? Se(C + `;`, r, n, d - 1) : Se(T(C, ` `, ``) + `;`, r, n, d - 2), c));
            break;
          case 59:
            C += `;`;
          default:
            if ((A((S = be(C, t, n, l, u, i, s, y, (b = []), (x = []), d)), a), v === 123))
              if (u === 0) G(C, t, S, S, b, a, d, s, x);
              else
                switch (f === 99 && D(C, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    G(
                      e,
                      S,
                      S,
                      r && A(be(e, S, S, 0, 0, i, s, y, i, (b = []), d), x),
                      i,
                      x,
                      d,
                      s,
                      r ? b : x,
                    );
                    break;
                  default:
                    G(C, S, S, S, [``], x, 0, s, x);
                }
        }
        ((l = u = p = 0), (h = _ = 1), (y = C = ``), (d = o));
        break;
      case 58:
        ((d = 1 + k(C)), (p = m));
      default:
        if (h < 1) {
          if (v == 123) --h;
          else if (v == 125 && h++ == 0 && fe() == 125) continue;
        }
        switch (((C += w(v)), v * h)) {
          case 38:
            _ = u > 0 ? 1 : ((C += `\f`), -1);
            break;
          case 44:
            ((s[l++] = (k(C) - 1) * _), (_ = 1));
            break;
          case 64:
            (z() === 45 && (C += U(R())), (f = z()), (u = d = k((y = C += ve(B())))), v++);
            break;
          case 45:
            m === 45 && k(C) == 2 && (h = 0);
        }
    }
  return a;
}
function be(e, t, n, r, i, a, o, s, c, l, u) {
  for (var d = i - 1, f = i === 0 ? a : [``], p = ce(f), m = 0, h = 0, g = 0; m < r; ++m)
    for (var _ = 0, v = O(e, d + 1, (d = re((h = o[m])))), y = e; _ < p; ++_)
      (y = oe(h > 0 ? f[_] + ` ` + v : T(v, /&\f/g, f[_]))) && (c[g++] = y);
  return I(e, t, n, i === 0 ? S : s, c, l, u);
}
function xe(e, t, n) {
  return I(e, t, n, x, w(de()), O(e, 2, -2), 0);
}
function Se(e, t, n, r) {
  return I(e, t, n, C, O(e, 0, r), O(e, r + 1, -1), r);
}
function K(e, t) {
  for (var n = ``, r = ce(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || ``;
  return n;
}
function Ce(e, t, n, r) {
  switch (e.type) {
    case ne:
      if (e.children.length) break;
    case ee:
    case C:
      return (e.return = e.return || e.value);
    case x:
      return ``;
    case te:
      return (e.return = e.value + `{` + K(e.children, r) + `}`);
    case S:
      e.value = e.props.join(`,`);
  }
  return k((n = K(e.children, r))) ? (e.return = e.value + `{` + n + `}`) : ``;
}
function we(e) {
  var t = ce(e);
  return function (n, r, i, a) {
    for (var o = ``, s = 0; s < t; s++) o += e[s](n, r, i, a) || ``;
    return o;
  };
}
function Te(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Ee(e) {
  var t = Object.create(null);
  return function (n) {
    return (t[n] === void 0 && (t[n] = e(n)), t[n]);
  };
}
var De = function (e, t, n) {
    for (var r = 0, i = 0; (r = i), (i = z()), r === 38 && i === 12 && (t[n] = 1), !H(i); ) R();
    return V(e, N);
  },
  Oe = function (e, t) {
    var n = -1,
      r = 44;
    do
      switch (H(r)) {
        case 0:
          (r === 38 && z() === 12 && (t[n] = 1), (e[n] += De(N - 1, t, n)));
          break;
        case 2:
          e[n] += U(r);
          break;
        case 4:
          if (r === 44) {
            ((e[++n] = z() === 58 ? `&\f` : ``), (t[n] = e[n].length));
            break;
          }
        default:
          e[n] += w(r);
      }
    while ((r = R()));
    return e;
  },
  ke = function (e, t) {
    return me(Oe(pe(e), t));
  },
  Ae = new WeakMap(),
  je = function (e) {
    if (!(e.type !== `rule` || !e.parent || e.length < 1)) {
      for (
        var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
        n.type !== `rule`;
      )
        if (((n = n.parent), !n)) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Ae.get(n)) && !r) {
        Ae.set(e, !0);
        for (var i = [], a = ke(t, i), o = n.props, s = 0, c = 0; s < a.length; s++)
          for (var l = 0; l < o.length; l++, c++)
            e.props[c] = i[s] ? a[s].replace(/&\f/g, o[l]) : o[l] + ` ` + a[s];
      }
    }
  },
  Me = function (e) {
    if (e.type === `decl`) {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && ((e.return = ``), (e.value = ``));
    }
  };
function Ne(e, t) {
  switch (ae(e, t)) {
    case 5103:
      return b + `print-` + e + e;
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
      return b + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return b + e + y + e + v + e + e;
    case 6828:
    case 4268:
      return b + e + v + e + e;
    case 6165:
      return b + e + v + `flex-` + e + e;
    case 5187:
      return b + e + T(e, /(\w+).+(:[^]+)/, b + `box-$1$2` + v + `flex-$1$2`) + e;
    case 5443:
      return b + e + v + `flex-item-` + T(e, /flex-|-self/, ``) + e;
    case 4675:
      return b + e + v + `flex-line-pack` + T(e, /align-content|flex-|-self/, ``) + e;
    case 5548:
      return b + e + v + T(e, `shrink`, `negative`) + e;
    case 5292:
      return b + e + v + T(e, `basis`, `preferred-size`) + e;
    case 6060:
      return b + `box-` + T(e, `-grow`, ``) + b + e + v + T(e, `grow`, `positive`) + e;
    case 4554:
      return b + T(e, /([^-])(transform)/g, `$1` + b + `$2`) + e;
    case 6187:
      return T(T(T(e, /(zoom-|grab)/, b + `$1`), /(image-set)/, b + `$1`), e, ``) + e;
    case 5495:
    case 3959:
      return T(e, /(image-set\([^]*)/, b + "$1$`$1");
    case 4968:
      return (
        T(
          T(e, /(.+:)(flex-)?(.*)/, b + `box-pack:$3` + v + `flex-pack:$3`),
          /s.+-b[^;]+/,
          `justify`,
        ) +
        b +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return T(e, /(.+)-inline(.+)/, b + `$1$2`) + e;
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
      if (k(e) - 1 - t > 6)
        switch (D(e, t + 1)) {
          case 109:
            if (D(e, t + 4) !== 45) break;
          case 102:
            return (
              T(
                e,
                /(.+:)(.+)-([^]+)/,
                `$1` + b + `$2-$3$1` + y + (D(e, t + 3) == 108 ? `$3` : `$2-$3`),
              ) + e
            );
          case 115:
            return ~E(e, `stretch`) ? Ne(T(e, `stretch`, `fill-available`), t) + e : e;
        }
      break;
    case 4949:
      if (D(e, t + 1) !== 115) break;
    case 6444:
      switch (D(e, k(e) - 3 - (~E(e, `!important`) && 10))) {
        case 107:
          return T(e, `:`, `:` + b) + e;
        case 101:
          return (
            T(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              `$1` +
                b +
                (D(e, 14) === 45 ? `inline-` : ``) +
                `box$3$1` +
                b +
                `$2$3$1` +
                v +
                `$2box$3`,
            ) + e
          );
      }
      break;
    case 5936:
      switch (D(e, t + 11)) {
        case 114:
          return b + e + v + T(e, /[svh]\w+-[tblr]{2}/, `tb`) + e;
        case 108:
          return b + e + v + T(e, /[svh]\w+-[tblr]{2}/, `tb-rl`) + e;
        case 45:
          return b + e + v + T(e, /[svh]\w+-[tblr]{2}/, `lr`) + e;
      }
      return b + e + v + e + e;
  }
  return e;
}
var Pe = [
    function (e, t, n, r) {
      if (e.length > -1 && !e.return)
        switch (e.type) {
          case C:
            e.return = Ne(e.value, e.length);
            break;
          case te:
            return K([L(e, { value: T(e.value, `@`, `@` + b) })], r);
          case S:
            if (e.length)
              return le(e.props, function (t) {
                switch (se(t, /(::plac\w+|:read-\w+)/)) {
                  case `:read-only`:
                  case `:read-write`:
                    return K([L(e, { props: [T(t, /:(read-\w+)/, `:` + y + `$1`)] })], r);
                  case `::placeholder`:
                    return K(
                      [
                        L(e, { props: [T(t, /:(plac\w+)/, `:` + b + `input-$1`)] }),
                        L(e, { props: [T(t, /:(plac\w+)/, `:` + y + `$1`)] }),
                        L(e, { props: [T(t, /:(plac\w+)/, v + `input-$1`)] }),
                      ],
                      r,
                    );
                }
                return ``;
              });
        }
    },
  ],
  Fe = function (e) {
    var t = e.key;
    if (t === `css`) {
      var n = document.querySelectorAll(`style[data-emotion]:not([data-s])`);
      Array.prototype.forEach.call(n, function (e) {
        e.getAttribute(`data-emotion`).indexOf(` `) !== -1 &&
          (document.head.appendChild(e), e.setAttribute(`data-s`, ``));
      });
    }
    var r = e.stylisPlugins || Pe,
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
      c = [je, Me],
      l,
      u = [
        Ce,
        Te(function (e) {
          l.insert(e);
        }),
      ],
      d = we(c.concat(r, u)),
      f = function (e) {
        return K(ye(e), d);
      };
    s = function (e, t, n, r) {
      ((l = n), f(e ? e + `{` + t.styles + `}` : t.styles), r && (p.inserted[t.name] = !0));
    };
    var p = {
      key: t,
      sheet: new _({
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
  Ie = n((e) => {
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
  Le = n((e, t) => {
    t.exports = Ie();
  }),
  Re = n((e, t) => {
    var n = Le(),
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
  ze = !0;
function Be(e, t, n) {
  var r = ``;
  return (
    n.split(` `).forEach(function (n) {
      e[n] === void 0 ? n && (r += n + ` `) : t.push(e[n] + `;`);
    }),
    r
  );
}
var q = function (e, t, n) {
    var r = e.key + `-` + t.name;
    (n === !1 || ze === !1) && e.registered[r] === void 0 && (e.registered[r] = t.styles);
  },
  Ve = function (e, t, n) {
    q(e, t, n);
    var r = e.key + `-` + t.name;
    if (e.inserted[t.name] === void 0) {
      var i = t;
      do (e.insert(t === i ? `.` + r : ``, i, e.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function He(e) {
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
var Ue = {
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
  We = !1,
  Ge = /[A-Z]|^ms/g,
  Ke = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  qe = function (e) {
    return e.charCodeAt(1) === 45;
  },
  Je = function (e) {
    return e != null && typeof e != `boolean`;
  },
  J = Ee(function (e) {
    return qe(e) ? e : e.replace(Ge, `-$&`).toLowerCase();
  }),
  Ye = function (e, t) {
    switch (e) {
      case `animation`:
      case `animationName`:
        if (typeof t == `string`)
          return t.replace(Ke, function (e, t, n) {
            return ((X = { name: t, styles: n, next: X }), t);
          });
    }
    return Ue[e] !== 1 && !qe(e) && typeof t == `number` && t !== 0 ? t + `px` : t;
  },
  Xe = `Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;
function Y(e, t, n) {
  if (n == null) return ``;
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case `boolean`:
      return ``;
    case `object`:
      var i = n;
      if (i.anim === 1) return ((X = { name: i.name, styles: i.styles, next: X }), i.name);
      var a = n;
      if (a.styles !== void 0) {
        var o = a.next;
        if (o !== void 0)
          for (; o !== void 0; ) ((X = { name: o.name, styles: o.styles, next: X }), (o = o.next));
        return a.styles + `;`;
      }
      return Ze(e, t, n);
    case `function`:
      if (e !== void 0) {
        var s = X,
          c = n(e);
        return ((X = s), Y(e, t, c));
      }
      break;
  }
  var l = n;
  if (t == null) return l;
  var u = t[l];
  return u === void 0 ? l : u;
}
function Ze(e, t, n) {
  var r = ``;
  if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += Y(e, t, n[i]) + `;`;
  else
    for (var a in n) {
      var o = n[a];
      if (typeof o != `object`) {
        var s = o;
        t != null && t[s] !== void 0
          ? (r += a + `{` + t[s] + `}`)
          : Je(s) && (r += J(a) + `:` + Ye(a, s) + `;`);
      } else {
        if (a === `NO_COMPONENT_SELECTOR` && We) throw Error(Xe);
        if (Array.isArray(o) && typeof o[0] == `string` && (t == null || t[o[0]] === void 0))
          for (var c = 0; c < o.length; c++) Je(o[c]) && (r += J(a) + `:` + Ye(a, o[c]) + `;`);
        else {
          var l = Y(e, t, o);
          switch (a) {
            case `animation`:
            case `animationName`:
              r += J(a) + `:` + l + `;`;
              break;
            default:
              r += a + `{` + l + `}`;
          }
        }
      }
    }
  return r;
}
var Qe = /label:\s*([^\s;{]+)\s*(;|$)/g,
  X;
function Z(e, t, n) {
  if (e.length === 1 && typeof e[0] == `object` && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0,
    i = ``;
  X = void 0;
  var a = e[0];
  a == null || a.raw === void 0 ? ((r = !1), (i += Y(n, t, a))) : (i += a[0]);
  for (var o = 1; o < e.length; o++) ((i += Y(n, t, e[o])), r && (i += a[o]));
  Qe.lastIndex = 0;
  for (var s = ``, c; (c = Qe.exec(i)) !== null; ) s += `-` + c[1];
  return { name: He(i) + s, styles: i, next: X };
}
var $e = function (e) {
    return e();
  },
  et = f.useInsertionEffect ? f.useInsertionEffect : !1,
  tt = et || $e;
et || f.useLayoutEffect;
var nt = f.createContext(typeof HTMLElement < `u` ? Fe({ key: `css` }) : null);
nt.Provider;
var rt = function (e) {
    return (0, f.forwardRef)(function (t, n) {
      return e(t, (0, f.useContext)(nt), n);
    });
  },
  it = f.createContext({}),
  Q = {}.hasOwnProperty,
  $ = `__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,
  at = function (e, t) {
    var n = {};
    for (var r in t) Q.call(t, r) && (n[r] = t[r]);
    return ((n[$] = e), n);
  },
  ot = function (e) {
    var t = e.cache,
      n = e.serialized,
      r = e.isStringTag;
    return (
      q(t, n, r),
      tt(function () {
        return Ve(t, n, r);
      }),
      null
    );
  },
  st = rt(function (e, t, n) {
    var r = e.css;
    typeof r == `string` && t.registered[r] !== void 0 && (r = t.registered[r]);
    var i = e[$],
      a = [r],
      o = ``;
    typeof e.className == `string`
      ? (o = Be(t.registered, a, e.className))
      : e.className != null && (o = e.className + ` `);
    var s = Z(a, void 0, f.useContext(it));
    o += t.key + `-` + s.name;
    var c = {};
    for (var l in e) Q.call(e, l) && l !== `css` && l !== $ && (c[l] = e[l]);
    return (
      (c.className = o),
      n && (c.ref = n),
      f.createElement(
        f.Fragment,
        null,
        f.createElement(ot, { cache: t, serialized: s, isStringTag: typeof i == `string` }),
        f.createElement(i, c),
      )
    );
  });
Re();
var ct = function (e, t) {
  var n = arguments;
  if (t == null || !Q.call(t, `css`)) return f.createElement.apply(void 0, n);
  var r = n.length,
    i = Array(r);
  ((i[0] = st), (i[1] = at(e, t)));
  for (var a = 2; a < r; a++) i[a] = n[a];
  return f.createElement.apply(null, i);
};
(function (e) {
  var t;
  (function (e) {})((t ||= e.JSX ||= {}));
})((ct ||= {}));
function lt() {
  return Z([...arguments]);
}
var ut = function e(t) {
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
function dt(e, t, n) {
  var r = [],
    i = Be(e, r, n);
  return r.length < 2 ? n : i + t(r);
}
var ft = function (e) {
    var t = e.cache,
      n = e.serializedArr;
    return (
      tt(function () {
        for (var e = 0; e < n.length; e++) Ve(t, n[e], !1);
      }),
      null
    );
  },
  pt = rt(function (e, t) {
    var n = [],
      r = function () {
        var e = Z([...arguments], t.registered);
        return (n.push(e), q(t, e, !1), t.key + `-` + e.name);
      },
      i = {
        css: r,
        cx: function () {
          var e = [...arguments];
          return dt(t.registered, r, ut(e));
        },
        theme: f.useContext(it),
      },
      a = e.children(i);
    return f.createElement(
      f.Fragment,
      null,
      f.createElement(ft, { cache: t, serializedArr: n }),
      a,
    );
  });
function mt(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(` `)) return e[0];
  let t = {};
  for (let n of e) {
    if (!n) continue;
    let e = n.split(` `);
    for (let n of e) {
      let e = n.startsWith(`_`) ? n.slice(0, ht) : n;
      t[e] = n;
    }
  }
  let n = ``;
  for (let e in t) n += t[e] + ` `;
  if (n) return n.trimEnd();
}
var ht,
  gt = t(() => {
    ht = 5;
  });
function _t(e, t, n) {
  return e == null ? `var(--c-, )` : t ? (n ? n + e + t : e + t) : e;
}
var vt = t(() => {}),
  yt = t(() => {
    (gt(), vt());
  }),
  bt = t(() => {
    yt();
  }),
  xt = `DESC`,
  St = `small`,
  Ct = `large`,
  wt = 0.22,
  Tt = function (e, t, n) {
    return !t || !n || !e.length ? [] : e.slice((t - 1) * n, t * n);
  },
  Et = function (e, t) {
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
  },
  Dt = [`rows`, `head`, `sortKey`, `sortOrder`, `rowsPerPage`, `page`, `forwardedRef`];
function Ot(e, t) {
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
function kt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ot(Object(n), !0).forEach(function (t) {
          u(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ot(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function At(e, t, n) {
  return ((t = l(t)), o(e, jt() ? Reflect.construct(t, n || [], l(e).constructor) : t.apply(e, n)));
}
function jt() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (jt = function () {
    return !!e;
  })();
}
var Mt = function (e, t, n) {
    for (var r = 0; r < e.length; r++) if (t.cells[r] && t.cells[r]?.key === n) return e[r]?.key;
  },
  Nt = function (e, t, n, r) {
    if (!n || !e) return t;
    if (!t) return [];
    var i = r === `ASC` ? 1 : -1,
      a = new Intl.Collator(void 0, { numeric: !0, sensitivity: `accent` });
    return Array.from(t).sort(function (t, r) {
      var o = Mt(t.cells, e, n),
        s = Mt(r.cells, e, n);
      if (o === void 0 || s === void 0) return i;
      if (d(o) !== d(s)) {
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
function Pt(e) {
  var t = (function (t) {
    function n() {
      var e;
      s(this, n);
      var t = [...arguments];
      return ((e = At(this, n, [].concat(t))), u(e, `state`, { pageRows: [] }), e);
    }
    return (
      c(n, t),
      i(
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
                i = a(t, Dt);
              return f.createElement(
                e,
                p({ pageRows: this.state.pageRows, head: n }, i, { ref: r }),
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
              Et(i, r);
              var l, u;
              return (
                c ? ((l = n), (u = n)) : ((l = Nt(r, n, i, a) || []), (u = Tt(l, o, s))),
                kt(kt({}, t), {}, { pageRows: u })
              );
            },
          },
        ],
      )
    );
  })(f.Component);
  return f.forwardRef(function (e, n) {
    return f.createElement(t, p({}, e, { forwardedRef: n }));
  });
}
bt();
var Ft = `--local-dynamic-table-width`,
  It = function (e) {
    var t = e.width;
    return t === void 0 ? void 0 : u({}, Ft, `${t}%`);
  },
  Lt = [`width`, `isFixedSize`, `shouldTruncate`, `innerRef`],
  Rt = function (e) {
    var t = e.width,
      n = e.isFixedSize,
      r = e.shouldTruncate,
      i = e.innerRef,
      o = a(e, Lt);
    return f.createElement(
      `td`,
      p(
        {
          style: It({ width: t }),
          ref: i,
          className: mt([
            `_1bsb8a2a`,
            n && r && `_1bto1l2s _o5721q9c`,
            n && `_1reo15vq _18m915vq`,
            `_19itglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t`,
            o.className,
          ]),
        },
        o,
      ),
    );
  };
bt();
var zt = [`isHighlighted`, `children`, `style`, `testId`, `className`],
  Bt = (0, f.forwardRef)(function (e, t) {
    var n = e.isHighlighted,
      r = e.children,
      i = e.style,
      o = e.testId,
      s = e.className,
      c = a(e, zt);
    return f.createElement(
      `tr`,
      p(
        {
          style: i,
          className: mt([
            `_bfhksm61 _1ygbdfik _1ah312gs`,
            n ? `_bfhk15s3 _irr3ufnl` : `_irr31dpa`,
            s,
          ]),
        },
        c,
        { ref: t, "data-testid": o },
      ),
      r,
    );
  }),
  Vt = !0,
  Ht = `Invariant failed`;
function Ut(e, t) {
  if (!e) {
    if (Vt) throw Error(Ht);
    var n = typeof t == `function` ? t() : t,
      r = n ? `${Ht}: ${n}` : Ht;
    throw Error(r);
  }
}
var Wt = n((e) => {
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
  Gt = n((e) => {
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
    var n = Wt();
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
  Kt = n((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.bindAll = e.bind = void 0));
    var t = Wt();
    Object.defineProperty(e, `bind`, {
      enumerable: !0,
      get: function () {
        return t.bind;
      },
    });
    var n = Gt();
    Object.defineProperty(e, `bindAll`, {
      enumerable: !0,
      get: function () {
        return n.bindAll;
      },
    });
  });
function qt(e, t, n) {
  return ((t = l(t)), o(e, Jt() ? Reflect.construct(t, n || [], l(e).constructor) : t.apply(e, n)));
}
function Jt() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Jt = function () {
    return !!e;
  })();
}
function Yt(e) {
  return (function (t) {
    function n() {
      var e;
      s(this, n);
      var t = [...arguments];
      return (
        (e = qt(this, n, [].concat(t))),
        u(e, `state`, { refWidth: 0, refHeight: 0 }),
        u(e, `innerRef`, function (t) {
          t && !e.props.isRanking && (e.ref = t);
        }),
        u(e, `updateDimensions`, function () {
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
      c(n, t),
      i(n, [
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
            return f.createElement(
              e,
              p({ refWidth: n, refHeight: r, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(f.Component);
}
var Xt = function (e, t, n) {
  return e ? (n ? { width: t, height: n } : { width: t }) : {};
};
export {
  mt as _,
  Bt as a,
  ct as b,
  Pt as c,
  xt as d,
  Ct as f,
  _t as g,
  bt as h,
  Ut as i,
  Et as l,
  St as m,
  Yt as n,
  Rt as o,
  wt as p,
  Kt as r,
  It as s,
  Xt as t,
  Tt as u,
  pt as v,
  p as x,
  lt as y,
};
