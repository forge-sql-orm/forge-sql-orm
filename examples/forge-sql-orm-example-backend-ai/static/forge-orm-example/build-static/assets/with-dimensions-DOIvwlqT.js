import { a as e, n as t, t as n } from "./rolldown-runtime-COnpUsM8.js";
import { r } from "./react-dom-vendor-DD8-Uyz5.js";
import {
  c as i,
  d as a,
  f as o,
  i as s,
  l as c,
  n as l,
  r as u,
  s as d,
  u as f,
} from "./wrapNativeSuper-CcHGmOvu.js";
var p = e(r());
function m() {
  return (
    (m = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    m.apply(null, arguments)
  );
}
var h = !1;
function g(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function _(e) {
  var t = document.createElement(`style`);
  return (
    t.setAttribute(`data-emotion`, e.key),
    e.nonce !== void 0 && t.setAttribute(`nonce`, e.nonce),
    t.appendChild(document.createTextNode(``)),
    t.setAttribute(`data-s`, ``),
    t
  );
}
var v = (function () {
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
        (this.isSpeedy = e.speedy === void 0 ? !h : e.speedy),
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(_(this));
        var t = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var n = g(t);
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
  y = `-ms-`,
  b = `-moz-`,
  x = `-webkit-`,
  S = `comm`,
  C = `rule`,
  w = `decl`,
  ee = `@import`,
  te = `@keyframes`,
  ne = `@layer`,
  re = Math.abs,
  T = String.fromCharCode,
  ie = Object.assign;
function ae(e, t) {
  return O(e, 0) ^ 45
    ? (((((((t << 2) ^ O(e, 0)) << 2) ^ O(e, 1)) << 2) ^ O(e, 2)) << 2) ^ O(e, 3)
    : 0;
}
function oe(e) {
  return e.trim();
}
function se(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function E(e, t, n) {
  return e.replace(t, n);
}
function D(e, t) {
  return e.indexOf(t);
}
function O(e, t) {
  return e.charCodeAt(t) | 0;
}
function k(e, t, n) {
  return e.slice(t, n);
}
function A(e) {
  return e.length;
}
function j(e) {
  return e.length;
}
function M(e, t) {
  return (t.push(e), e);
}
function ce(e, t) {
  return e.map(t).join(``);
}
var N = 1,
  P = 1,
  le = 0,
  F = 0,
  I = 0,
  L = ``;
function R(e, t, n, r, i, a, o) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: a,
    line: N,
    column: P,
    length: o,
    return: ``,
  };
}
function z(e, t) {
  return ie(R(``, null, null, ``, null, null, 0), e, { length: -e.length }, t);
}
function ue() {
  return I;
}
function de() {
  return ((I = F > 0 ? O(L, --F) : 0), P--, I === 10 && ((P = 1), N--), I);
}
function B() {
  return ((I = F < le ? O(L, F++) : 0), P++, I === 10 && ((P = 1), N++), I);
}
function V() {
  return O(L, F);
}
function H() {
  return F;
}
function U(e, t) {
  return k(L, e, t);
}
function W(e) {
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
function fe(e) {
  return ((N = P = 1), (le = A((L = e))), (F = 0), []);
}
function pe(e) {
  return ((L = ``), e);
}
function G(e) {
  return oe(U(F - 1, K(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function me(e) {
  for (; (I = V()) && I < 33; ) B();
  return W(e) > 2 || W(I) > 3 ? `` : ` `;
}
function he(e, t) {
  for (; --t && B() && !(I < 48 || I > 102 || (I > 57 && I < 65) || (I > 70 && I < 97)); );
  return U(e, H() + (t < 6 && V() == 32 && B() == 32));
}
function K(e) {
  for (; B(); )
    switch (I) {
      case e:
        return F;
      case 34:
      case 39:
        e !== 34 && e !== 39 && K(I);
        break;
      case 40:
        e === 41 && K(e);
        break;
      case 92:
        B();
        break;
    }
  return F;
}
function ge(e, t) {
  for (; B() && e + I !== 57 && !(e + I === 84 && V() === 47); );
  return `/*` + U(t, F - 1) + `*` + T(e === 47 ? e : B());
}
function _e(e) {
  for (; !W(V()); ) B();
  return U(e, F);
}
function ve(e) {
  return pe(q(``, null, null, null, [``], (e = fe(e)), 0, [0], e));
}
function q(e, t, n, r, i, a, o, s, c) {
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
    switch (((m = v), (v = B()))) {
      case 40:
        if (m != 108 && O(C, d - 1) == 58) {
          D((C += E(G(v), `&`, `&\f`)), `&\f`) != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += G(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += me(m);
        break;
      case 92:
        C += he(H() - 1, 7);
        continue;
      case 47:
        switch (V()) {
          case 42:
          case 47:
            M(be(ge(B(), H()), t, n), c);
            break;
          default:
            C += `/`;
        }
        break;
      case 123 * h:
        s[l++] = A(C) * _;
      case 125 * h:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            (_ == -1 && (C = E(C, /\f/g, ``)),
              p > 0 &&
                A(C) - d &&
                M(p > 32 ? xe(C + `;`, r, n, d - 1) : xe(E(C, ` `, ``) + `;`, r, n, d - 2), c));
            break;
          case 59:
            C += `;`;
          default:
            if ((M((S = ye(C, t, n, l, u, i, s, y, (b = []), (x = []), d)), a), v === 123))
              if (u === 0) q(C, t, S, S, b, a, d, s, x);
              else
                switch (f === 99 && O(C, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    q(
                      e,
                      S,
                      S,
                      r && M(ye(e, S, S, 0, 0, i, s, y, i, (b = []), d), x),
                      i,
                      x,
                      d,
                      s,
                      r ? b : x,
                    );
                    break;
                  default:
                    q(C, S, S, S, [``], x, 0, s, x);
                }
        }
        ((l = u = p = 0), (h = _ = 1), (y = C = ``), (d = o));
        break;
      case 58:
        ((d = 1 + A(C)), (p = m));
      default:
        if (h < 1) {
          if (v == 123) --h;
          else if (v == 125 && h++ == 0 && de() == 125) continue;
        }
        switch (((C += T(v)), v * h)) {
          case 38:
            _ = u > 0 ? 1 : ((C += `\f`), -1);
            break;
          case 44:
            ((s[l++] = (A(C) - 1) * _), (_ = 1));
            break;
          case 64:
            (V() === 45 && (C += G(B())), (f = V()), (u = d = A((y = C += _e(H())))), v++);
            break;
          case 45:
            m === 45 && A(C) == 2 && (h = 0);
        }
    }
  return a;
}
function ye(e, t, n, r, i, a, o, s, c, l, u) {
  for (var d = i - 1, f = i === 0 ? a : [``], p = j(f), m = 0, h = 0, g = 0; m < r; ++m)
    for (var _ = 0, v = k(e, d + 1, (d = re((h = o[m])))), y = e; _ < p; ++_)
      (y = oe(h > 0 ? f[_] + ` ` + v : E(v, /&\f/g, f[_]))) && (c[g++] = y);
  return R(e, t, n, i === 0 ? C : s, c, l, u);
}
function be(e, t, n) {
  return R(e, t, n, S, T(ue()), k(e, 2, -2), 0);
}
function xe(e, t, n, r) {
  return R(e, t, n, w, k(e, 0, r), k(e, r + 1, -1), r);
}
function J(e, t) {
  for (var n = ``, r = j(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || ``;
  return n;
}
function Se(e, t, n, r) {
  switch (e.type) {
    case ne:
      if (e.children.length) break;
    case ee:
    case w:
      return (e.return = e.return || e.value);
    case S:
      return ``;
    case te:
      return (e.return = e.value + `{` + J(e.children, r) + `}`);
    case C:
      e.value = e.props.join(`,`);
  }
  return A((n = J(e.children, r))) ? (e.return = e.value + `{` + n + `}`) : ``;
}
function Ce(e) {
  var t = j(e);
  return function (n, r, i, a) {
    for (var o = ``, s = 0; s < t; s++) o += e[s](n, r, i, a) || ``;
    return o;
  };
}
function we(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Te(e) {
  var t = Object.create(null);
  return function (n) {
    return (t[n] === void 0 && (t[n] = e(n)), t[n]);
  };
}
var Ee = function (e, t, n) {
    for (var r = 0, i = 0; (r = i), (i = V()), r === 38 && i === 12 && (t[n] = 1), !W(i); ) B();
    return U(e, F);
  },
  De = function (e, t) {
    var n = -1,
      r = 44;
    do
      switch (W(r)) {
        case 0:
          (r === 38 && V() === 12 && (t[n] = 1), (e[n] += Ee(F - 1, t, n)));
          break;
        case 2:
          e[n] += G(r);
          break;
        case 4:
          if (r === 44) {
            ((e[++n] = V() === 58 ? `&\f` : ``), (t[n] = e[n].length));
            break;
          }
        default:
          e[n] += T(r);
      }
    while ((r = B()));
    return e;
  },
  Oe = function (e, t) {
    return pe(De(fe(e), t));
  },
  ke = new WeakMap(),
  Ae = function (e) {
    if (!(e.type !== `rule` || !e.parent || e.length < 1)) {
      for (
        var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
        n.type !== `rule`;
      )
        if (((n = n.parent), !n)) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !ke.get(n)) && !r) {
        ke.set(e, !0);
        for (var i = [], a = Oe(t, i), o = n.props, s = 0, c = 0; s < a.length; s++)
          for (var l = 0; l < o.length; l++, c++)
            e.props[c] = i[s] ? a[s].replace(/&\f/g, o[l]) : o[l] + ` ` + a[s];
      }
    }
  },
  je = function (e) {
    if (e.type === `decl`) {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && ((e.return = ``), (e.value = ``));
    }
  };
function Me(e, t) {
  switch (ae(e, t)) {
    case 5103:
      return x + `print-` + e + e;
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
      return x + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return x + e + b + e + y + e + e;
    case 6828:
    case 4268:
      return x + e + y + e + e;
    case 6165:
      return x + e + y + `flex-` + e + e;
    case 5187:
      return x + e + E(e, /(\w+).+(:[^]+)/, x + `box-$1$2` + y + `flex-$1$2`) + e;
    case 5443:
      return x + e + y + `flex-item-` + E(e, /flex-|-self/, ``) + e;
    case 4675:
      return x + e + y + `flex-line-pack` + E(e, /align-content|flex-|-self/, ``) + e;
    case 5548:
      return x + e + y + E(e, `shrink`, `negative`) + e;
    case 5292:
      return x + e + y + E(e, `basis`, `preferred-size`) + e;
    case 6060:
      return x + `box-` + E(e, `-grow`, ``) + x + e + y + E(e, `grow`, `positive`) + e;
    case 4554:
      return x + E(e, /([^-])(transform)/g, `$1` + x + `$2`) + e;
    case 6187:
      return E(E(E(e, /(zoom-|grab)/, x + `$1`), /(image-set)/, x + `$1`), e, ``) + e;
    case 5495:
    case 3959:
      return E(e, /(image-set\([^]*)/, x + "$1$`$1");
    case 4968:
      return (
        E(
          E(e, /(.+:)(flex-)?(.*)/, x + `box-pack:$3` + y + `flex-pack:$3`),
          /s.+-b[^;]+/,
          `justify`,
        ) +
        x +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return E(e, /(.+)-inline(.+)/, x + `$1$2`) + e;
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
      if (A(e) - 1 - t > 6)
        switch (O(e, t + 1)) {
          case 109:
            if (O(e, t + 4) !== 45) break;
          case 102:
            return (
              E(
                e,
                /(.+:)(.+)-([^]+)/,
                `$1` + x + `$2-$3$1` + b + (O(e, t + 3) == 108 ? `$3` : `$2-$3`),
              ) + e
            );
          case 115:
            return ~D(e, `stretch`) ? Me(E(e, `stretch`, `fill-available`), t) + e : e;
        }
      break;
    case 4949:
      if (O(e, t + 1) !== 115) break;
    case 6444:
      switch (O(e, A(e) - 3 - (~D(e, `!important`) && 10))) {
        case 107:
          return E(e, `:`, `:` + x) + e;
        case 101:
          return (
            E(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              `$1` +
                x +
                (O(e, 14) === 45 ? `inline-` : ``) +
                `box$3$1` +
                x +
                `$2$3$1` +
                y +
                `$2box$3`,
            ) + e
          );
      }
      break;
    case 5936:
      switch (O(e, t + 11)) {
        case 114:
          return x + e + y + E(e, /[svh]\w+-[tblr]{2}/, `tb`) + e;
        case 108:
          return x + e + y + E(e, /[svh]\w+-[tblr]{2}/, `tb-rl`) + e;
        case 45:
          return x + e + y + E(e, /[svh]\w+-[tblr]{2}/, `lr`) + e;
      }
      return x + e + y + e + e;
  }
  return e;
}
var Ne = [
    function (e, t, n, r) {
      if (e.length > -1 && !e.return)
        switch (e.type) {
          case w:
            e.return = Me(e.value, e.length);
            break;
          case te:
            return J([z(e, { value: E(e.value, `@`, `@` + x) })], r);
          case C:
            if (e.length)
              return ce(e.props, function (t) {
                switch (se(t, /(::plac\w+|:read-\w+)/)) {
                  case `:read-only`:
                  case `:read-write`:
                    return J([z(e, { props: [E(t, /:(read-\w+)/, `:` + b + `$1`)] })], r);
                  case `::placeholder`:
                    return J(
                      [
                        z(e, { props: [E(t, /:(plac\w+)/, `:` + x + `input-$1`)] }),
                        z(e, { props: [E(t, /:(plac\w+)/, `:` + b + `$1`)] }),
                        z(e, { props: [E(t, /:(plac\w+)/, y + `input-$1`)] }),
                      ],
                      r,
                    );
                }
                return ``;
              });
        }
    },
  ],
  Pe = function (e) {
    var t = e.key;
    if (t === `css`) {
      var n = document.querySelectorAll(`style[data-emotion]:not([data-s])`);
      Array.prototype.forEach.call(n, function (e) {
        e.getAttribute(`data-emotion`).indexOf(` `) !== -1 &&
          (document.head.appendChild(e), e.setAttribute(`data-s`, ``));
      });
    }
    var r = e.stylisPlugins || Ne,
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
      c = [Ae, je],
      l,
      u = [
        Se,
        we(function (e) {
          l.insert(e);
        }),
      ],
      d = Ce(c.concat(r, u)),
      f = function (e) {
        return J(ve(e), d);
      };
    s = function (e, t, n, r) {
      ((l = n), f(e ? e + `{` + t.styles + `}` : t.styles), r && (p.inserted[t.name] = !0));
    };
    var p = {
      key: t,
      sheet: new v({
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
  Fe = n((e) => {
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
  Ie = n((e, t) => {
    t.exports = Fe();
  }),
  Le = n((e, t) => {
    var n = Ie(),
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
  Re = !0;
function ze(e, t, n) {
  var r = ``;
  return (
    n.split(` `).forEach(function (n) {
      e[n] === void 0 ? n && (r += n + ` `) : t.push(e[n] + `;`);
    }),
    r
  );
}
var Y = function (e, t, n) {
    var r = e.key + `-` + t.name;
    (n === !1 || Re === !1) && e.registered[r] === void 0 && (e.registered[r] = t.styles);
  },
  Be = function (e, t, n) {
    Y(e, t, n);
    var r = e.key + `-` + t.name;
    if (e.inserted[t.name] === void 0) {
      var i = t;
      do (e.insert(t === i ? `.` + r : ``, i, e.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function Ve(e) {
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
var He = {
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
  Ue = !1,
  We = /[A-Z]|^ms/g,
  Ge = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Ke = function (e) {
    return e.charCodeAt(1) === 45;
  },
  qe = function (e) {
    return e != null && typeof e != `boolean`;
  },
  X = Te(function (e) {
    return Ke(e) ? e : e.replace(We, `-$&`).toLowerCase();
  }),
  Je = function (e, t) {
    switch (e) {
      case `animation`:
      case `animationName`:
        if (typeof t == `string`)
          return t.replace(Ge, function (e, t, n) {
            return ((Q = { name: t, styles: n, next: Q }), t);
          });
    }
    return He[e] !== 1 && !Ke(e) && typeof t == `number` && t !== 0 ? t + `px` : t;
  },
  Ye = `Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;
function Z(e, t, n) {
  if (n == null) return ``;
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case `boolean`:
      return ``;
    case `object`:
      var i = n;
      if (i.anim === 1) return ((Q = { name: i.name, styles: i.styles, next: Q }), i.name);
      var a = n;
      if (a.styles !== void 0) {
        var o = a.next;
        if (o !== void 0)
          for (; o !== void 0; ) ((Q = { name: o.name, styles: o.styles, next: Q }), (o = o.next));
        return a.styles + `;`;
      }
      return Xe(e, t, n);
    case `function`:
      if (e !== void 0) {
        var s = Q,
          c = n(e);
        return ((Q = s), Z(e, t, c));
      }
      break;
  }
  var l = n;
  if (t == null) return l;
  var u = t[l];
  return u === void 0 ? l : u;
}
function Xe(e, t, n) {
  var r = ``;
  if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += Z(e, t, n[i]) + `;`;
  else
    for (var a in n) {
      var o = n[a];
      if (typeof o != `object`) {
        var s = o;
        t != null && t[s] !== void 0
          ? (r += a + `{` + t[s] + `}`)
          : qe(s) && (r += X(a) + `:` + Je(a, s) + `;`);
      } else {
        if (a === `NO_COMPONENT_SELECTOR` && Ue) throw Error(Ye);
        if (Array.isArray(o) && typeof o[0] == `string` && (t == null || t[o[0]] === void 0))
          for (var c = 0; c < o.length; c++) qe(o[c]) && (r += X(a) + `:` + Je(a, o[c]) + `;`);
        else {
          var l = Z(e, t, o);
          switch (a) {
            case `animation`:
            case `animationName`:
              r += X(a) + `:` + l + `;`;
              break;
            default:
              r += a + `{` + l + `}`;
          }
        }
      }
    }
  return r;
}
var Ze = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Q;
function $(e, t, n) {
  if (e.length === 1 && typeof e[0] == `object` && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0,
    i = ``;
  Q = void 0;
  var a = e[0];
  a == null || a.raw === void 0 ? ((r = !1), (i += Z(n, t, a))) : (i += a[0]);
  for (var o = 1; o < e.length; o++) ((i += Z(n, t, e[o])), r && (i += a[o]));
  Ze.lastIndex = 0;
  for (var s = ``, c; (c = Ze.exec(i)) !== null; ) s += `-` + c[1];
  return { name: Ve(i) + s, styles: i, next: Q };
}
var Qe = function (e) {
    return e();
  },
  $e = p.useInsertionEffect ? p.useInsertionEffect : !1,
  et = $e || Qe;
$e || p.useLayoutEffect;
var tt = p.createContext(typeof HTMLElement < `u` ? Pe({ key: `css` }) : null);
tt.Provider;
var nt = function (e) {
    return (0, p.forwardRef)(function (t, n) {
      return e(t, (0, p.useContext)(tt), n);
    });
  },
  rt = p.createContext({}),
  it = {}.hasOwnProperty,
  at = `__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,
  ot = function (e, t) {
    var n = {};
    for (var r in t) it.call(t, r) && (n[r] = t[r]);
    return ((n[at] = e), n);
  },
  st = function (e) {
    var t = e.cache,
      n = e.serialized,
      r = e.isStringTag;
    return (
      Y(t, n, r),
      et(function () {
        return Be(t, n, r);
      }),
      null
    );
  },
  ct = nt(function (e, t, n) {
    var r = e.css;
    typeof r == `string` && t.registered[r] !== void 0 && (r = t.registered[r]);
    var i = e[at],
      a = [r],
      o = ``;
    typeof e.className == `string`
      ? (o = ze(t.registered, a, e.className))
      : e.className != null && (o = e.className + ` `);
    var s = $(a, void 0, p.useContext(rt));
    o += t.key + `-` + s.name;
    var c = {};
    for (var l in e) it.call(e, l) && l !== `css` && l !== at && (c[l] = e[l]);
    return (
      (c.className = o),
      n && (c.ref = n),
      p.createElement(
        p.Fragment,
        null,
        p.createElement(st, { cache: t, serialized: s, isStringTag: typeof i == `string` }),
        p.createElement(i, c),
      )
    );
  });
Le();
var lt = function (e, t) {
  var n = arguments;
  if (t == null || !it.call(t, `css`)) return p.createElement.apply(void 0, n);
  var r = n.length,
    i = Array(r);
  ((i[0] = ct), (i[1] = ot(e, t)));
  for (var a = 2; a < r; a++) i[a] = n[a];
  return p.createElement.apply(null, i);
};
(function (e) {
  var t;
  (function (e) {})((t ||= e.JSX ||= {}));
})((lt ||= {}));
function ut() {
  return $([...arguments]);
}
var dt = function e(t) {
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
function ft(e, t, n) {
  var r = [],
    i = ze(e, r, n);
  return r.length < 2 ? n : i + t(r);
}
var pt = function (e) {
    var t = e.cache,
      n = e.serializedArr;
    return (
      et(function () {
        for (var e = 0; e < n.length; e++) Be(t, n[e], !1);
      }),
      null
    );
  },
  mt = nt(function (e, t) {
    var n = [],
      r = function () {
        var e = $([...arguments], t.registered);
        return (n.push(e), Y(t, e, !1), t.key + `-` + e.name);
      },
      i = {
        css: r,
        cx: function () {
          var e = [...arguments];
          return ft(t.registered, r, dt(e));
        },
        theme: p.useContext(rt),
      },
      a = e.children(i);
    return p.createElement(
      p.Fragment,
      null,
      p.createElement(pt, { cache: t, serializedArr: n }),
      a,
    );
  });
function ht(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(` `)) return e[0];
  let t = {};
  for (let n of e) {
    if (!n) continue;
    let e = n.split(` `);
    for (let n of e) {
      let e = n.startsWith(`_`) ? n.slice(0, gt) : n;
      t[e] = n;
    }
  }
  let n = ``;
  for (let e in t) n += t[e] + ` `;
  if (n) return n.trimEnd();
}
var gt,
  _t = t(() => {
    gt = 5;
  });
function vt(e, t, n) {
  return e == null ? `var(--c-, )` : t ? (n ? n + e + t : e + t) : e;
}
var yt = t(() => {}),
  bt = t(() => {
    (_t(), yt());
  }),
  xt = t(() => {
    bt();
  }),
  St = function (e, t, n) {
    return !t || !n || !e.length ? [] : e.slice((t - 1) * n, t * n);
  },
  Ct = function (e) {
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
  wt = function (e, t) {
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
  Tt = function (e, t, n) {
    return e ? (n ? { width: t, height: n } : { width: t }) : {};
  },
  Et = function (e, t, n) {
    return e + (n && isFinite(n) ? (t - 1) * n : 0);
  },
  Dt = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      r = arguments.length > 3 ? arguments[3] : void 0,
      i = e.destination,
      a = e.sourceIndex;
    if (!i) return t;
    var s = Et(a, n, r),
      c = Et(i.index, n, r),
      l = t.slice(),
      u = o(l.splice(s, 1), 1)[0];
    return (l.splice(c, 0, u), l);
  },
  Ot = `DESC`,
  kt = `small`,
  At = `large`,
  jt = 0.22,
  Mt = [`rows`, `head`, `sortKey`, `sortOrder`, `rowsPerPage`, `page`, `forwardedRef`];
function Nt(e, t) {
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
function Pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Nt(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Nt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ft(e, t, n) {
  return ((t = u(t)), s(e, It() ? Reflect.construct(t, n || [], u(e).constructor) : t.apply(e, n)));
}
function It() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (It = function () {
    return !!e;
  })();
}
var Lt = function (e, t, n) {
    for (var r = 0; r < e.length; r++) if (t.cells[r] && t.cells[r]?.key === n) return e[r]?.key;
  },
  Rt = function (e, t, n, r) {
    if (!n || !e) return t;
    if (!t) return [];
    var i = r === `ASC` ? 1 : -1,
      a = new Intl.Collator(void 0, { numeric: !0, sensitivity: `accent` });
    return Array.from(t).sort(function (t, r) {
      var o = Lt(t.cells, e, n),
        s = Lt(r.cells, e, n);
      if (o === void 0 || s === void 0) return i;
      if (f(o) !== f(s)) {
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
function zt(e) {
  var t = (function (t) {
    function n() {
      var e;
      c(this, n);
      var t = [...arguments];
      return ((e = Ft(this, n, [].concat(t))), d(e, `state`, { pageRows: [] }), e);
    }
    return (
      l(n, t),
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
                i = a(t, Mt);
              return p.createElement(
                e,
                m({ pageRows: this.state.pageRows, head: n }, i, { ref: r }),
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
              wt(i, r);
              var l, u;
              return (
                c ? ((l = n), (u = n)) : ((l = Rt(r, n, i, a) || []), (u = St(l, o, s))),
                Pt(Pt({}, t), {}, { pageRows: u })
              );
            },
          },
        ],
      )
    );
  })(p.Component);
  return p.forwardRef(function (e, n) {
    return p.createElement(t, m({}, e, { forwardedRef: n }));
  });
}
xt();
var Bt = `--local-dynamic-table-width`,
  Vt = function (e) {
    var t = e.width;
    return t === void 0 ? void 0 : d({}, Bt, `${t}%`);
  },
  Ht = [`width`, `isFixedSize`, `shouldTruncate`, `innerRef`],
  Ut = function (e) {
    var t = e.width,
      n = e.isFixedSize,
      r = e.shouldTruncate,
      i = e.innerRef,
      o = a(e, Ht);
    return p.createElement(
      `td`,
      m(
        {
          style: Vt({ width: t }),
          ref: i,
          className: ht([
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
xt();
var Wt = [`isHighlighted`, `children`, `style`, `testId`, `className`],
  Gt = (0, p.forwardRef)(function (e, t) {
    var n = e.isHighlighted,
      r = e.children,
      i = e.style,
      o = e.testId,
      s = e.className,
      c = a(e, Wt);
    return p.createElement(
      `tr`,
      m(
        {
          style: i,
          className: ht([
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
  Kt = !0,
  qt = `Invariant failed`;
function Jt(e, t) {
  if (!e) {
    if (Kt) throw Error(qt);
    var n = typeof t == `function` ? t() : t,
      r = n ? `${qt}: ${n}` : qt;
    throw Error(r);
  }
}
var Yt = n((e) => {
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
  Xt = n((e) => {
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
    var n = Yt();
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
  Zt = n((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.bindAll = e.bind = void 0));
    var t = Yt();
    Object.defineProperty(e, `bind`, {
      enumerable: !0,
      get: function () {
        return t.bind;
      },
    });
    var n = Xt();
    Object.defineProperty(e, `bindAll`, {
      enumerable: !0,
      get: function () {
        return n.bindAll;
      },
    });
  });
function Qt(e, t, n) {
  return ((t = u(t)), s(e, $t() ? Reflect.construct(t, n || [], u(e).constructor) : t.apply(e, n)));
}
function $t() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return ($t = function () {
    return !!e;
  })();
}
function en(e) {
  return (function (t) {
    function n() {
      var e;
      c(this, n);
      var t = [...arguments];
      return (
        (e = Qt(this, n, [].concat(t))),
        d(e, `state`, { refWidth: 0, refHeight: 0 }),
        d(e, `innerRef`, function (t) {
          t && !e.props.isRanking && (e.ref = t);
        }),
        d(e, `updateDimensions`, function () {
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
      l(n, t),
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
            return p.createElement(
              e,
              m({ refWidth: n, refHeight: r, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(p.Component);
}
export {
  m as C,
  lt as S,
  xt as _,
  Ut as a,
  mt as b,
  Ot as c,
  kt as d,
  Ct as f,
  wt as g,
  Dt as h,
  Gt as i,
  At as l,
  Tt as m,
  Zt as n,
  Vt as o,
  St as p,
  Jt as r,
  zt as s,
  en as t,
  jt as u,
  vt as v,
  ut as x,
  ht as y,
};
