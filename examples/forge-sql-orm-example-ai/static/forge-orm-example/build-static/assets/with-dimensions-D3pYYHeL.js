import { n as e, o as t, t as n } from "./rolldown-runtime-Bhmf7a9N.js";
import { r } from "./react-dom-vendor-Bd5mlCjg.js";
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
} from "./wrapNativeSuper-BmCJ3c35.js";
function p(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(` `)) return e[0];
  let t = {};
  for (let n of e) {
    if (!n) continue;
    let e = n.split(` `);
    for (let n of e) {
      let e = n.startsWith(`_`) ? n.slice(0, m) : n;
      t[e] = n;
    }
  }
  let n = ``;
  for (let e in t) n += t[e] + ` `;
  if (n) return n.trimEnd();
}
var m,
  h = e(() => {
    m = 5;
  });
function g(e, t, n) {
  return e == null ? `var(--c-, )` : t ? (n ? n + e + t : e + t) : e;
}
var _ = e(() => {}),
  v = e(() => {
    (h(), _());
  }),
  y = e(() => {
    v();
  }),
  b = t(r());
function x() {
  return (
    (x = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    x.apply(null, arguments)
  );
}
var S = !0,
  C = `Invariant failed`;
function ee(e, t) {
  if (!e) {
    if (S) throw Error(C);
    var n = typeof t == `function` ? t() : t,
      r = n ? `${C}: ${n}` : C;
    throw Error(r);
  }
}
var te = n((e) => {
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
  ne = n((e) => {
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
    var n = te();
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
  re = n((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.bindAll = e.bind = void 0));
    var t = te();
    Object.defineProperty(e, `bind`, {
      enumerable: !0,
      get: function () {
        return t.bind;
      },
    });
    var n = ne();
    Object.defineProperty(e, `bindAll`, {
      enumerable: !0,
      get: function () {
        return n.bindAll;
      },
    });
  }),
  ie = !1;
function ae(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function oe(e) {
  var t = document.createElement(`style`);
  return (
    t.setAttribute(`data-emotion`, e.key),
    e.nonce !== void 0 && t.setAttribute(`nonce`, e.nonce),
    t.appendChild(document.createTextNode(``)),
    t.setAttribute(`data-s`, ``),
    t
  );
}
var se = (function () {
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
        (this.isSpeedy = e.speedy === void 0 ? !ie : e.speedy),
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(oe(this));
        var t = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var n = ae(t);
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
  w = `-ms-`,
  T = `-moz-`,
  E = `-webkit-`,
  ce = `comm`,
  le = `rule`,
  D = `decl`,
  ue = `@import`,
  de = `@keyframes`,
  fe = `@layer`,
  pe = Math.abs,
  O = String.fromCharCode,
  me = Object.assign;
function he(e, t) {
  return j(e, 0) ^ 45
    ? (((((((t << 2) ^ j(e, 0)) << 2) ^ j(e, 1)) << 2) ^ j(e, 2)) << 2) ^ j(e, 3)
    : 0;
}
function ge(e) {
  return e.trim();
}
function _e(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function k(e, t, n) {
  return e.replace(t, n);
}
function A(e, t) {
  return e.indexOf(t);
}
function j(e, t) {
  return e.charCodeAt(t) | 0;
}
function M(e, t, n) {
  return e.slice(t, n);
}
function N(e) {
  return e.length;
}
function ve(e) {
  return e.length;
}
function P(e, t) {
  return (t.push(e), e);
}
function ye(e, t) {
  return e.map(t).join(``);
}
var F = 1,
  I = 1,
  be = 0,
  L = 0,
  R = 0,
  z = ``;
function B(e, t, n, r, i, a, o) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: a,
    line: F,
    column: I,
    length: o,
    return: ``,
  };
}
function V(e, t) {
  return me(B(``, null, null, ``, null, null, 0), e, { length: -e.length }, t);
}
function xe() {
  return R;
}
function Se() {
  return ((R = L > 0 ? j(z, --L) : 0), I--, R === 10 && ((I = 1), F--), R);
}
function H() {
  return ((R = L < be ? j(z, L++) : 0), I++, R === 10 && ((I = 1), F++), R);
}
function U() {
  return j(z, L);
}
function W() {
  return L;
}
function G(e, t) {
  return M(z, e, t);
}
function K(e) {
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
function Ce(e) {
  return ((F = I = 1), (be = N((z = e))), (L = 0), []);
}
function we(e) {
  return ((z = ``), e);
}
function q(e) {
  return ge(G(L - 1, J(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Te(e) {
  for (; (R = U()) && R < 33; ) H();
  return K(e) > 2 || K(R) > 3 ? `` : ` `;
}
function Ee(e, t) {
  for (; --t && H() && !(R < 48 || R > 102 || (R > 57 && R < 65) || (R > 70 && R < 97)); );
  return G(e, W() + (t < 6 && U() == 32 && H() == 32));
}
function J(e) {
  for (; H(); )
    switch (R) {
      case e:
        return L;
      case 34:
      case 39:
        e !== 34 && e !== 39 && J(R);
        break;
      case 40:
        e === 41 && J(e);
        break;
      case 92:
        H();
        break;
    }
  return L;
}
function De(e, t) {
  for (; H() && e + R !== 57 && !(e + R === 84 && U() === 47); );
  return `/*` + G(t, L - 1) + `*` + O(e === 47 ? e : H());
}
function Oe(e) {
  for (; !K(U()); ) H();
  return G(e, L);
}
function ke(e) {
  return we(Y(``, null, null, null, [``], (e = Ce(e)), 0, [0], e));
}
function Y(e, t, n, r, i, a, o, s, c) {
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
    switch (((m = v), (v = H()))) {
      case 40:
        if (m != 108 && j(C, d - 1) == 58) {
          A((C += k(q(v), `&`, `&\f`)), `&\f`) != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += q(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Te(m);
        break;
      case 92:
        C += Ee(W() - 1, 7);
        continue;
      case 47:
        switch (U()) {
          case 42:
          case 47:
            P(je(De(H(), W()), t, n), c);
            break;
          default:
            C += `/`;
        }
        break;
      case 123 * h:
        s[l++] = N(C) * _;
      case 125 * h:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            (_ == -1 && (C = k(C, /\f/g, ``)),
              p > 0 &&
                N(C) - d &&
                P(p > 32 ? Me(C + `;`, r, n, d - 1) : Me(k(C, ` `, ``) + `;`, r, n, d - 2), c));
            break;
          case 59:
            C += `;`;
          default:
            if ((P((S = Ae(C, t, n, l, u, i, s, y, (b = []), (x = []), d)), a), v === 123))
              if (u === 0) Y(C, t, S, S, b, a, d, s, x);
              else
                switch (f === 99 && j(C, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Y(
                      e,
                      S,
                      S,
                      r && P(Ae(e, S, S, 0, 0, i, s, y, i, (b = []), d), x),
                      i,
                      x,
                      d,
                      s,
                      r ? b : x,
                    );
                    break;
                  default:
                    Y(C, S, S, S, [``], x, 0, s, x);
                }
        }
        ((l = u = p = 0), (h = _ = 1), (y = C = ``), (d = o));
        break;
      case 58:
        ((d = 1 + N(C)), (p = m));
      default:
        if (h < 1) {
          if (v == 123) --h;
          else if (v == 125 && h++ == 0 && Se() == 125) continue;
        }
        switch (((C += O(v)), v * h)) {
          case 38:
            _ = u > 0 ? 1 : ((C += `\f`), -1);
            break;
          case 44:
            ((s[l++] = (N(C) - 1) * _), (_ = 1));
            break;
          case 64:
            (U() === 45 && (C += q(H())), (f = U()), (u = d = N((y = C += Oe(W())))), v++);
            break;
          case 45:
            m === 45 && N(C) == 2 && (h = 0);
        }
    }
  return a;
}
function Ae(e, t, n, r, i, a, o, s, c, l, u) {
  for (var d = i - 1, f = i === 0 ? a : [``], p = ve(f), m = 0, h = 0, g = 0; m < r; ++m)
    for (var _ = 0, v = M(e, d + 1, (d = pe((h = o[m])))), y = e; _ < p; ++_)
      (y = ge(h > 0 ? f[_] + ` ` + v : k(v, /&\f/g, f[_]))) && (c[g++] = y);
  return B(e, t, n, i === 0 ? le : s, c, l, u);
}
function je(e, t, n) {
  return B(e, t, n, ce, O(xe()), M(e, 2, -2), 0);
}
function Me(e, t, n, r) {
  return B(e, t, n, D, M(e, 0, r), M(e, r + 1, -1), r);
}
function X(e, t) {
  for (var n = ``, r = ve(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || ``;
  return n;
}
function Ne(e, t, n, r) {
  switch (e.type) {
    case fe:
      if (e.children.length) break;
    case ue:
    case D:
      return (e.return = e.return || e.value);
    case ce:
      return ``;
    case de:
      return (e.return = e.value + `{` + X(e.children, r) + `}`);
    case le:
      e.value = e.props.join(`,`);
  }
  return N((n = X(e.children, r))) ? (e.return = e.value + `{` + n + `}`) : ``;
}
function Pe(e) {
  var t = ve(e);
  return function (n, r, i, a) {
    for (var o = ``, s = 0; s < t; s++) o += e[s](n, r, i, a) || ``;
    return o;
  };
}
function Fe(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Ie(e) {
  var t = Object.create(null);
  return function (n) {
    return (t[n] === void 0 && (t[n] = e(n)), t[n]);
  };
}
var Le = function (e, t, n) {
    for (var r = 0, i = 0; (r = i), (i = U()), r === 38 && i === 12 && (t[n] = 1), !K(i); ) H();
    return G(e, L);
  },
  Re = function (e, t) {
    var n = -1,
      r = 44;
    do
      switch (K(r)) {
        case 0:
          (r === 38 && U() === 12 && (t[n] = 1), (e[n] += Le(L - 1, t, n)));
          break;
        case 2:
          e[n] += q(r);
          break;
        case 4:
          if (r === 44) {
            ((e[++n] = U() === 58 ? `&\f` : ``), (t[n] = e[n].length));
            break;
          }
        default:
          e[n] += O(r);
      }
    while ((r = H()));
    return e;
  },
  ze = function (e, t) {
    return we(Re(Ce(e), t));
  },
  Be = new WeakMap(),
  Ve = function (e) {
    if (!(e.type !== `rule` || !e.parent || e.length < 1)) {
      for (
        var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
        n.type !== `rule`;
      )
        if (((n = n.parent), !n)) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Be.get(n)) && !r) {
        Be.set(e, !0);
        for (var i = [], a = ze(t, i), o = n.props, s = 0, c = 0; s < a.length; s++)
          for (var l = 0; l < o.length; l++, c++)
            e.props[c] = i[s] ? a[s].replace(/&\f/g, o[l]) : o[l] + ` ` + a[s];
      }
    }
  },
  He = function (e) {
    if (e.type === `decl`) {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && ((e.return = ``), (e.value = ``));
    }
  };
function Ue(e, t) {
  switch (he(e, t)) {
    case 5103:
      return E + `print-` + e + e;
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
      return E + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return E + e + T + e + w + e + e;
    case 6828:
    case 4268:
      return E + e + w + e + e;
    case 6165:
      return E + e + w + `flex-` + e + e;
    case 5187:
      return E + e + k(e, /(\w+).+(:[^]+)/, E + `box-$1$2` + w + `flex-$1$2`) + e;
    case 5443:
      return E + e + w + `flex-item-` + k(e, /flex-|-self/, ``) + e;
    case 4675:
      return E + e + w + `flex-line-pack` + k(e, /align-content|flex-|-self/, ``) + e;
    case 5548:
      return E + e + w + k(e, `shrink`, `negative`) + e;
    case 5292:
      return E + e + w + k(e, `basis`, `preferred-size`) + e;
    case 6060:
      return E + `box-` + k(e, `-grow`, ``) + E + e + w + k(e, `grow`, `positive`) + e;
    case 4554:
      return E + k(e, /([^-])(transform)/g, `$1` + E + `$2`) + e;
    case 6187:
      return k(k(k(e, /(zoom-|grab)/, E + `$1`), /(image-set)/, E + `$1`), e, ``) + e;
    case 5495:
    case 3959:
      return k(e, /(image-set\([^]*)/, E + "$1$`$1");
    case 4968:
      return (
        k(
          k(e, /(.+:)(flex-)?(.*)/, E + `box-pack:$3` + w + `flex-pack:$3`),
          /s.+-b[^;]+/,
          `justify`,
        ) +
        E +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return k(e, /(.+)-inline(.+)/, E + `$1$2`) + e;
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
      if (N(e) - 1 - t > 6)
        switch (j(e, t + 1)) {
          case 109:
            if (j(e, t + 4) !== 45) break;
          case 102:
            return (
              k(
                e,
                /(.+:)(.+)-([^]+)/,
                `$1` + E + `$2-$3$1` + T + (j(e, t + 3) == 108 ? `$3` : `$2-$3`),
              ) + e
            );
          case 115:
            return ~A(e, `stretch`) ? Ue(k(e, `stretch`, `fill-available`), t) + e : e;
        }
      break;
    case 4949:
      if (j(e, t + 1) !== 115) break;
    case 6444:
      switch (j(e, N(e) - 3 - (~A(e, `!important`) && 10))) {
        case 107:
          return k(e, `:`, `:` + E) + e;
        case 101:
          return (
            k(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              `$1` +
                E +
                (j(e, 14) === 45 ? `inline-` : ``) +
                `box$3$1` +
                E +
                `$2$3$1` +
                w +
                `$2box$3`,
            ) + e
          );
      }
      break;
    case 5936:
      switch (j(e, t + 11)) {
        case 114:
          return E + e + w + k(e, /[svh]\w+-[tblr]{2}/, `tb`) + e;
        case 108:
          return E + e + w + k(e, /[svh]\w+-[tblr]{2}/, `tb-rl`) + e;
        case 45:
          return E + e + w + k(e, /[svh]\w+-[tblr]{2}/, `lr`) + e;
      }
      return E + e + w + e + e;
  }
  return e;
}
var We = [
    function (e, t, n, r) {
      if (e.length > -1 && !e.return)
        switch (e.type) {
          case D:
            e.return = Ue(e.value, e.length);
            break;
          case de:
            return X([V(e, { value: k(e.value, `@`, `@` + E) })], r);
          case le:
            if (e.length)
              return ye(e.props, function (t) {
                switch (_e(t, /(::plac\w+|:read-\w+)/)) {
                  case `:read-only`:
                  case `:read-write`:
                    return X([V(e, { props: [k(t, /:(read-\w+)/, `:` + T + `$1`)] })], r);
                  case `::placeholder`:
                    return X(
                      [
                        V(e, { props: [k(t, /:(plac\w+)/, `:` + E + `input-$1`)] }),
                        V(e, { props: [k(t, /:(plac\w+)/, `:` + T + `$1`)] }),
                        V(e, { props: [k(t, /:(plac\w+)/, w + `input-$1`)] }),
                      ],
                      r,
                    );
                }
                return ``;
              });
        }
    },
  ],
  Ge = function (e) {
    var t = e.key;
    if (t === `css`) {
      var n = document.querySelectorAll(`style[data-emotion]:not([data-s])`);
      Array.prototype.forEach.call(n, function (e) {
        e.getAttribute(`data-emotion`).indexOf(` `) !== -1 &&
          (document.head.appendChild(e), e.setAttribute(`data-s`, ``));
      });
    }
    var r = e.stylisPlugins || We,
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
      c = [Ve, He],
      l,
      u = [
        Ne,
        Fe(function (e) {
          l.insert(e);
        }),
      ],
      d = Pe(c.concat(r, u)),
      f = function (e) {
        return X(ke(e), d);
      };
    s = function (e, t, n, r) {
      ((l = n), f(e ? e + `{` + t.styles + `}` : t.styles), r && (p.inserted[t.name] = !0));
    };
    var p = {
      key: t,
      sheet: new se({
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
  Ke = n((e) => {
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
  qe = n((e, t) => {
    t.exports = Ke();
  }),
  Je = n((e, t) => {
    var n = qe(),
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
  Ye = !0;
function Xe(e, t, n) {
  var r = ``;
  return (
    n.split(` `).forEach(function (n) {
      e[n] === void 0 ? n && (r += n + ` `) : t.push(e[n] + `;`);
    }),
    r
  );
}
var Z = function (e, t, n) {
    var r = e.key + `-` + t.name;
    (n === !1 || Ye === !1) && e.registered[r] === void 0 && (e.registered[r] = t.styles);
  },
  Ze = function (e, t, n) {
    Z(e, t, n);
    var r = e.key + `-` + t.name;
    if (e.inserted[t.name] === void 0) {
      var i = t;
      do (e.insert(t === i ? `.` + r : ``, i, e.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function Qe(e) {
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
var $e = {
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
  et = !1,
  tt = /[A-Z]|^ms/g,
  nt = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  rt = function (e) {
    return e.charCodeAt(1) === 45;
  },
  it = function (e) {
    return e != null && typeof e != `boolean`;
  },
  at = Ie(function (e) {
    return rt(e) ? e : e.replace(tt, `-$&`).toLowerCase();
  }),
  ot = function (e, t) {
    switch (e) {
      case `animation`:
      case `animationName`:
        if (typeof t == `string`)
          return t.replace(nt, function (e, t, n) {
            return (($ = { name: t, styles: n, next: $ }), t);
          });
    }
    return $e[e] !== 1 && !rt(e) && typeof t == `number` && t !== 0 ? t + `px` : t;
  },
  st = `Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;
function Q(e, t, n) {
  if (n == null) return ``;
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case `boolean`:
      return ``;
    case `object`:
      var i = n;
      if (i.anim === 1) return (($ = { name: i.name, styles: i.styles, next: $ }), i.name);
      var a = n;
      if (a.styles !== void 0) {
        var o = a.next;
        if (o !== void 0)
          for (; o !== void 0; ) (($ = { name: o.name, styles: o.styles, next: $ }), (o = o.next));
        return a.styles + `;`;
      }
      return ct(e, t, n);
    case `function`:
      if (e !== void 0) {
        var s = $,
          c = n(e);
        return (($ = s), Q(e, t, c));
      }
      break;
  }
  var l = n;
  if (t == null) return l;
  var u = t[l];
  return u === void 0 ? l : u;
}
function ct(e, t, n) {
  var r = ``;
  if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += Q(e, t, n[i]) + `;`;
  else
    for (var a in n) {
      var o = n[a];
      if (typeof o != `object`) {
        var s = o;
        t != null && t[s] !== void 0
          ? (r += a + `{` + t[s] + `}`)
          : it(s) && (r += at(a) + `:` + ot(a, s) + `;`);
      } else {
        if (a === `NO_COMPONENT_SELECTOR` && et) throw Error(st);
        if (Array.isArray(o) && typeof o[0] == `string` && (t == null || t[o[0]] === void 0))
          for (var c = 0; c < o.length; c++) it(o[c]) && (r += at(a) + `:` + ot(a, o[c]) + `;`);
        else {
          var l = Q(e, t, o);
          switch (a) {
            case `animation`:
            case `animationName`:
              r += at(a) + `:` + l + `;`;
              break;
            default:
              r += a + `{` + l + `}`;
          }
        }
      }
    }
  return r;
}
var lt = /label:\s*([^\s;{]+)\s*(;|$)/g,
  $;
function ut(e, t, n) {
  if (e.length === 1 && typeof e[0] == `object` && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0,
    i = ``;
  $ = void 0;
  var a = e[0];
  a == null || a.raw === void 0 ? ((r = !1), (i += Q(n, t, a))) : (i += a[0]);
  for (var o = 1; o < e.length; o++) ((i += Q(n, t, e[o])), r && (i += a[o]));
  lt.lastIndex = 0;
  for (var s = ``, c; (c = lt.exec(i)) !== null; ) s += `-` + c[1];
  return { name: Qe(i) + s, styles: i, next: $ };
}
var dt = function (e) {
    return e();
  },
  ft = b.useInsertionEffect ? b.useInsertionEffect : !1,
  pt = ft || dt;
ft || b.useLayoutEffect;
var mt = b.createContext(typeof HTMLElement < `u` ? Ge({ key: `css` }) : null);
mt.Provider;
var ht = function (e) {
    return (0, b.forwardRef)(function (t, n) {
      return e(t, (0, b.useContext)(mt), n);
    });
  },
  gt = b.createContext({}),
  _t = {}.hasOwnProperty,
  vt = `__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,
  yt = function (e, t) {
    var n = {};
    for (var r in t) _t.call(t, r) && (n[r] = t[r]);
    return ((n[vt] = e), n);
  },
  bt = function (e) {
    var t = e.cache,
      n = e.serialized,
      r = e.isStringTag;
    return (
      Z(t, n, r),
      pt(function () {
        return Ze(t, n, r);
      }),
      null
    );
  },
  xt = ht(function (e, t, n) {
    var r = e.css;
    typeof r == `string` && t.registered[r] !== void 0 && (r = t.registered[r]);
    var i = e[vt],
      a = [r],
      o = ``;
    typeof e.className == `string`
      ? (o = Xe(t.registered, a, e.className))
      : e.className != null && (o = e.className + ` `);
    var s = ut(a, void 0, b.useContext(gt));
    o += t.key + `-` + s.name;
    var c = {};
    for (var l in e) _t.call(e, l) && l !== `css` && l !== vt && (c[l] = e[l]);
    return (
      (c.className = o),
      n && (c.ref = n),
      b.createElement(
        b.Fragment,
        null,
        b.createElement(bt, { cache: t, serialized: s, isStringTag: typeof i == `string` }),
        b.createElement(i, c),
      )
    );
  });
Je();
var St = function (e, t) {
  var n = arguments;
  if (t == null || !_t.call(t, `css`)) return b.createElement.apply(void 0, n);
  var r = n.length,
    i = Array(r);
  ((i[0] = xt), (i[1] = yt(e, t)));
  for (var a = 2; a < r; a++) i[a] = n[a];
  return b.createElement.apply(null, i);
};
(function (e) {
  var t;
  (function (e) {})((t ||= e.JSX ||= {}));
})((St ||= {}));
function Ct() {
  return ut([...arguments]);
}
var wt = function e(t) {
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
function Tt(e, t, n) {
  var r = [],
    i = Xe(e, r, n);
  return r.length < 2 ? n : i + t(r);
}
var Et = function (e) {
    var t = e.cache,
      n = e.serializedArr;
    return (
      pt(function () {
        for (var e = 0; e < n.length; e++) Ze(t, n[e], !1);
      }),
      null
    );
  },
  Dt = ht(function (e, t) {
    var n = [],
      r = function () {
        var e = ut([...arguments], t.registered);
        return (n.push(e), Z(t, e, !1), t.key + `-` + e.name);
      },
      i = {
        css: r,
        cx: function () {
          var e = [...arguments];
          return Tt(t.registered, r, wt(e));
        },
        theme: b.useContext(gt),
      },
      a = e.children(i);
    return b.createElement(
      b.Fragment,
      null,
      b.createElement(Et, { cache: t, serializedArr: n }),
      a,
    );
  }),
  Ot = function (e, t, n) {
    return !t || !n || !e.length ? [] : e.slice((t - 1) * n, t * n);
  },
  kt = function (e) {
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
  At = function (e, t) {
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
  jt = function (e, t, n) {
    return e ? (n ? { width: t, height: n } : { width: t }) : {};
  },
  Mt = function (e, t, n) {
    return e + (n && isFinite(n) ? (t - 1) * n : 0);
  },
  Nt = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      r = arguments.length > 3 ? arguments[3] : void 0,
      i = e.destination,
      a = e.sourceIndex;
    if (!i) return t;
    var s = Mt(a, n, r),
      c = Mt(i.index, n, r),
      l = t.slice(),
      u = o(l.splice(s, 1), 1)[0];
    return (l.splice(c, 0, u), l);
  },
  Pt = `DESC`,
  Ft = `small`,
  It = `large`,
  Lt = 0.22,
  Rt = [`rows`, `head`, `sortKey`, `sortOrder`, `rowsPerPage`, `page`, `forwardedRef`];
function zt(e, t) {
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
function Bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? zt(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : zt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Vt(e, t, n) {
  return ((t = u(t)), s(e, Ht() ? Reflect.construct(t, n || [], u(e).constructor) : t.apply(e, n)));
}
function Ht() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ht = function () {
    return !!e;
  })();
}
var Ut = function (e, t, n) {
    for (var r = 0; r < e.length; r++) if (t.cells[r] && t.cells[r]?.key === n) return e[r]?.key;
  },
  Wt = function (e, t, n, r) {
    if (!n || !e) return t;
    if (!t) return [];
    var i = r === `ASC` ? 1 : -1,
      a = new Intl.Collator(void 0, { numeric: !0, sensitivity: `accent` });
    return Array.from(t).sort(function (t, r) {
      var o = Ut(t.cells, e, n),
        s = Ut(r.cells, e, n);
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
function Gt(e) {
  var t = (function (t) {
    function n() {
      var e;
      c(this, n);
      var t = [...arguments];
      return ((e = Vt(this, n, [].concat(t))), d(e, `state`, { pageRows: [] }), e);
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
                i = a(t, Rt);
              return b.createElement(
                e,
                x({ pageRows: this.state.pageRows, head: n }, i, { ref: r }),
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
              At(i, r);
              var l, u;
              return (
                c ? ((l = n), (u = n)) : ((l = Wt(r, n, i, a) || []), (u = Ot(l, o, s))),
                Bt(Bt({}, t), {}, { pageRows: u })
              );
            },
          },
        ],
      )
    );
  })(b.Component);
  return b.forwardRef(function (e, n) {
    return b.createElement(t, x({}, e, { forwardedRef: n }));
  });
}
y();
var Kt = `--local-dynamic-table-width`,
  qt = function (e) {
    var t = e.width;
    return t === void 0 ? void 0 : d({}, Kt, `${t}%`);
  },
  Jt = [`width`, `isFixedSize`, `shouldTruncate`, `innerRef`],
  Yt = function (e) {
    var t = e.width,
      n = e.isFixedSize,
      r = e.shouldTruncate,
      i = e.innerRef,
      o = a(e, Jt);
    return b.createElement(
      `td`,
      x(
        {
          style: qt({ width: t }),
          ref: i,
          className: p([
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
y();
var Xt = [`isHighlighted`, `children`, `style`, `testId`, `className`],
  Zt = (0, b.forwardRef)(function (e, t) {
    var n = e.isHighlighted,
      r = e.children,
      i = e.style,
      o = e.testId,
      s = e.className,
      c = a(e, Xt);
    return b.createElement(
      `tr`,
      x(
        {
          style: i,
          className: p([
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
            return b.createElement(
              e,
              x({ refWidth: n, refHeight: r, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(b.Component);
}
export {
  p as C,
  g as S,
  St as _,
  Gt as a,
  x as b,
  Lt as c,
  Ot as d,
  jt as f,
  Ct as g,
  Dt as h,
  qt as i,
  Ft as l,
  At as m,
  Zt as n,
  Pt as o,
  Nt as p,
  Yt as r,
  It as s,
  en as t,
  kt as u,
  re as v,
  y as x,
  ee as y,
};
