import { a as e, h as t, l as n, n as r, p as i } from "./wrapNativeSuper-DbbKRv4Y.js";
import {
  a,
  c as o,
  f as s,
  g as c,
  i as l,
  l as u,
  m as d,
  n as f,
  o as p,
  p as m,
  r as h,
  s as g,
  u as _,
  w as v,
} from "./custom-theme-loading-utils-DGx3xkD-.js";
var y = {
    "color.text.brand": `#669DF1`,
    "elevation.surface.overlay": `#2B2C2F`,
    "color.background.selected": `#1C2B42`,
    "color.text.selected": `#669DF1`,
    "color.border.brand": `#669DF1`,
    "color.chart.brand": `#4688EC`,
    "color.text.inverse": `#1F1F21`,
  },
  b = {
    "color.text.brand": `#1868DB`,
    "elevation.surface.sunken": `#F8F8F8`,
    "color.background.selected": `#E9F2FE`,
    "color.text.selected": `#1868DB`,
    "color.border.brand": `#1868DB`,
    "color.chart.brand": `#357DE8`,
    "color.text.inverse": `#FFFFFF`,
  },
  x = [
    {
      foreground: `color.text.brand`,
      backgroundLight: `elevation.surface.sunken`,
      backgroundDark: `elevation.surface.overlay`,
      desiredContrast: 4.5,
      updatedTokens: [
        `color.text.brand`,
        `color.text.selected`,
        `color.link`,
        `color.link.pressed`,
        `color.icon.brand`,
        `color.icon.selected`,
      ],
    },
    {
      foreground: `color.text.brand`,
      backgroundLight: `color.background.selected`,
      backgroundDark: `color.background.selected`,
      desiredContrast: 4.5,
      updatedTokens: [`color.text.brand`, `color.link`, `color.link.pressed`],
    },
    {
      foreground: `color.text.selected`,
      backgroundLight: `color.background.selected`,
      backgroundDark: `color.background.selected`,
      desiredContrast: 4.5,
      updatedTokens: [`color.text.selected`, `color.icon.selected`],
    },
    {
      foreground: `color.border.brand`,
      backgroundLight: `elevation.surface.sunken`,
      backgroundDark: `elevation.surface.overlay`,
      desiredContrast: 3,
      updatedTokens: [`color.border.brand`, `color.border.selected`],
    },
    {
      foreground: `color.chart.brand`,
      backgroundLight: `elevation.surface.sunken`,
      backgroundDark: `elevation.surface.overlay`,
      desiredContrast: 3,
      updatedTokens: [`color.chart.brand`, `color.chart.brand.hovered`],
    },
  ],
  S = function (e, t) {
    return t === `light` ? b[e] : y[e];
  },
  C = function (e) {
    var t = e.customThemeTokenMap,
      n = e.mode,
      r = e.themeRamp,
      i = {},
      a = Object.keys(t);
    return (
      x.forEach(function (e) {
        var o = e.backgroundLight,
          s = e.backgroundDark,
          c = e.foreground,
          l = e.desiredContrast,
          u = e.updatedTokens,
          d = n === `light` ? o : s,
          f = t[c],
          p = t[d];
        g(
          a.includes(c) ? (typeof f == `string` ? f : r[f]) : S(c, n),
          a.includes(d) ? (typeof p == `string` ? p : r[p]) : S(d, n),
        ) <= l &&
          u.forEach(function (e) {
            var r = t[e];
            typeof r == `number` && (i[e] = n === `light` ? r + 1 : r - 1);
          });
      }),
      i
    );
  };
function w(e) {
  return e < 0 ? -1 : e === 0 ? 0 : 1;
}
function T(e, t, n) {
  return (1 - n) * e + n * t;
}
function E(e, t, n) {
  return n < e ? e : n > t ? t : n;
}
function D(e, t, n) {
  return n < e ? e : n > t ? t : n;
}
function O(e) {
  return ((e %= 360), e < 0 && (e += 360), e);
}
function k(e, t) {
  return [
    e[0] * t[0][0] + e[1] * t[0][1] + e[2] * t[0][2],
    e[0] * t[1][0] + e[1] * t[1][1] + e[2] * t[1][2],
    e[0] * t[2][0] + e[1] * t[2][1] + e[2] * t[2][2],
  ];
}
var A = [
    [0.41233895, 0.35762064, 0.18051042],
    [0.2126, 0.7152, 0.0722],
    [0.01932141, 0.11916382, 0.95034478],
  ],
  j = [
    [3.2413774792388685, -1.5376652402851851, -0.49885366846268053],
    [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061],
    [0.05562093689691305, -0.20395524564742123, 1.0571799111220335],
  ],
  M = [95.047, 100, 108.883];
function N(e, t, n) {
  return ((255 << 24) | ((e & 255) << 16) | ((t & 255) << 8) | (n & 255)) >>> 0;
}
function P(e) {
  return N(G(e[0]), G(e[1]), G(e[2]));
}
function F(e) {
  return (e >> 24) & 255;
}
function I(e) {
  return (e >> 16) & 255;
}
function L(e) {
  return (e >> 8) & 255;
}
function R(e) {
  return e & 255;
}
function z(e, t, n) {
  var r = j,
    i = r[0][0] * e + r[0][1] * t + r[0][2] * n,
    a = r[1][0] * e + r[1][1] * t + r[1][2] * n,
    o = r[2][0] * e + r[2][1] * t + r[2][2] * n;
  return N(G(i), G(a), G(o));
}
function B(e) {
  return k([W(I(e)), W(L(e)), W(R(e))], A);
}
function ee(e) {
  var t = G(H(e));
  return N(t, t, t);
}
function V(e) {
  var t = B(e)[1];
  return 116 * q(t / 100) - 16;
}
function H(e) {
  return 100 * ie((e + 16) / 116);
}
function U(e) {
  return q(e / 100) * 116 - 16;
}
function W(e) {
  var t = e / 255;
  return t <= 0.040449936 ? (t / 12.92) * 100 : ((t + 0.055) / 1.055) ** 2.4 * 100;
}
function G(e) {
  var t = e / 100,
    n = 0;
  return (
    (n = t <= 0.0031308 ? t * 12.92 : 1.055 * t ** (1 / 2.4) - 0.055),
    E(0, 255, Math.round(n * 255))
  );
}
function te() {
  return M;
}
function ne(e) {
  return { r: I(e), g: L(e), b: R(e), a: F(e) };
}
function re(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    i = e.a,
    a = K(t),
    o = K(n),
    s = K(r);
  return (K(i) << 24) | (a << 16) | (o << 8) | s;
}
function K(e) {
  return e < 0 ? 0 : e > 255 ? 255 : e;
}
function q(e) {
  return e > 216 / 24389 ? e ** (1 / 3) : ((24389 / 27) * e + 16) / 116;
}
function ie(e) {
  var t = 216 / 24389,
    n = 24389 / 27,
    r = e * e * e;
  return r > t ? r : (116 * e - 16) / n;
}
var J,
  Y = (function () {
    function e(n) {
      (t(this, e), (this.argb = n));
      var r = X.fromInt(n);
      ((this.internalHue = r.hue),
        (this.internalChroma = r.chroma),
        (this.internalTone = V(n)),
        (this.argb = n));
    }
    return i(
      e,
      [
        {
          key: `toInt`,
          value: function () {
            return this.argb;
          },
        },
        {
          key: `hue`,
          get: function () {
            return this.internalHue;
          },
          set: function (e) {
            this.setInternalState(Z.solveToInt(e, this.internalChroma, this.internalTone));
          },
        },
        {
          key: `chroma`,
          get: function () {
            return this.internalChroma;
          },
          set: function (e) {
            this.setInternalState(Z.solveToInt(this.internalHue, e, this.internalTone));
          },
        },
        {
          key: `tone`,
          get: function () {
            return this.internalTone;
          },
          set: function (e) {
            this.setInternalState(Z.solveToInt(this.internalHue, this.internalChroma, e));
          },
        },
        {
          key: `setInternalState`,
          value: function (e) {
            var t = X.fromInt(e);
            ((this.internalHue = t.hue),
              (this.internalChroma = t.chroma),
              (this.internalTone = V(e)),
              (this.argb = e));
          },
        },
        {
          key: `inViewingConditions`,
          value: function (t) {
            var n = X.fromInt(this.toInt()).xyzInViewingConditions(t),
              r = X.fromXyzInViewingConditions(n[0], n[1], n[2], Q.make());
            return e.from(r.hue, r.chroma, U(n[1]));
          },
        },
      ],
      [
        {
          key: `from`,
          value: function (t, n, r) {
            return new e(Z.solveToInt(t, n, r));
          },
        },
        {
          key: `fromInt`,
          value: function (t) {
            return new e(t);
          },
        },
      ],
    );
  })(),
  X = (function () {
    function e(n, r, i, a, o, s, c, l, u) {
      (t(this, e),
        (this.hue = n),
        (this.chroma = r),
        (this.j = i),
        (this.q = a),
        (this.m = o),
        (this.s = s),
        (this.jstar = c),
        (this.astar = l),
        (this.bstar = u));
    }
    return i(
      e,
      [
        {
          key: `distance`,
          value: function (e) {
            var t = this.jstar - e.jstar,
              n = this.astar - e.astar,
              r = this.bstar - e.bstar;
            return 1.41 * Math.sqrt(t * t + n * n + r * r) ** 0.63;
          },
        },
        {
          key: `toInt`,
          value: function () {
            return this.viewed(Q.DEFAULT);
          },
        },
        {
          key: `viewed`,
          value: function (e) {
            var t =
                ((this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100)) /
                  (1.64 - 0.29 ** e.n) ** 0.73) **
                (1 / 0.9),
              n = (this.hue * Math.PI) / 180,
              r = 0.25 * (Math.cos(n + 2) + 3.8),
              i = e.aw * (this.j / 100) ** (1 / e.c / e.z),
              a = (5e4 / 13) * r * e.nc * e.ncb,
              o = i / e.nbb,
              s = Math.sin(n),
              c = Math.cos(n),
              l = (23 * (o + 0.305) * t) / (23 * a + 11 * t * c + 108 * t * s),
              u = l * c,
              d = l * s,
              f = (460 * o + 451 * u + 288 * d) / 1403,
              p = (460 * o - 891 * u - 261 * d) / 1403,
              m = (460 * o - 220 * u - 6300 * d) / 1403,
              h = Math.max(0, (27.13 * Math.abs(f)) / (400 - Math.abs(f))),
              g = w(f) * (100 / e.fl) * h ** (1 / 0.42),
              _ = Math.max(0, (27.13 * Math.abs(p)) / (400 - Math.abs(p))),
              v = w(p) * (100 / e.fl) * _ ** (1 / 0.42),
              y = Math.max(0, (27.13 * Math.abs(m)) / (400 - Math.abs(m))),
              b = w(m) * (100 / e.fl) * y ** (1 / 0.42),
              x = g / e.rgbD[0],
              S = v / e.rgbD[1],
              C = b / e.rgbD[2];
            return z(
              1.86206786 * x - 1.01125463 * S + 0.14918677 * C,
              0.38752654 * x + 0.62144744 * S - 0.00897398 * C,
              -0.0158415 * x - 0.03412294 * S + 1.04996444 * C,
            );
          },
        },
        {
          key: `xyzInViewingConditions`,
          value: function (e) {
            var t =
                ((this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100)) /
                  (1.64 - 0.29 ** e.n) ** 0.73) **
                (1 / 0.9),
              n = (this.hue * Math.PI) / 180,
              r = 0.25 * (Math.cos(n + 2) + 3.8),
              i = e.aw * (this.j / 100) ** (1 / e.c / e.z),
              a = (5e4 / 13) * r * e.nc * e.ncb,
              o = i / e.nbb,
              s = Math.sin(n),
              c = Math.cos(n),
              l = (23 * (o + 0.305) * t) / (23 * a + 11 * t * c + 108 * t * s),
              u = l * c,
              d = l * s,
              f = (460 * o + 451 * u + 288 * d) / 1403,
              p = (460 * o - 891 * u - 261 * d) / 1403,
              m = (460 * o - 220 * u - 6300 * d) / 1403,
              h = Math.max(0, (27.13 * Math.abs(f)) / (400 - Math.abs(f))),
              g = w(f) * (100 / e.fl) * h ** (1 / 0.42),
              _ = Math.max(0, (27.13 * Math.abs(p)) / (400 - Math.abs(p))),
              v = w(p) * (100 / e.fl) * _ ** (1 / 0.42),
              y = Math.max(0, (27.13 * Math.abs(m)) / (400 - Math.abs(m))),
              b = w(m) * (100 / e.fl) * y ** (1 / 0.42),
              x = g / e.rgbD[0],
              S = v / e.rgbD[1],
              C = b / e.rgbD[2];
            return [
              1.86206786 * x - 1.01125463 * S + 0.14918677 * C,
              0.38752654 * x + 0.62144744 * S - 0.00897398 * C,
              -0.0158415 * x - 0.03412294 * S + 1.04996444 * C,
            ];
          },
        },
      ],
      [
        {
          key: `fromInt`,
          value: function (t) {
            return e.fromIntInViewingConditions(t, Q.DEFAULT);
          },
        },
        {
          key: `fromIntInViewingConditions`,
          value: function (t, n) {
            var r = (t & 16711680) >> 16,
              i = (t & 65280) >> 8,
              a = t & 255,
              o = W(r),
              s = W(i),
              c = W(a),
              l = 0.41233895 * o + 0.35762064 * s + 0.18051042 * c,
              u = 0.2126 * o + 0.7152 * s + 0.0722 * c,
              d = 0.01932141 * o + 0.11916382 * s + 0.95034478 * c,
              f = 0.401288 * l + 0.650173 * u - 0.051461 * d,
              p = -0.250268 * l + 1.204414 * u + 0.045854 * d,
              m = -0.002079 * l + 0.048952 * u + 0.953127 * d,
              h = n.rgbD[0] * f,
              g = n.rgbD[1] * p,
              _ = n.rgbD[2] * m,
              v = ((n.fl * Math.abs(h)) / 100) ** 0.42,
              y = ((n.fl * Math.abs(g)) / 100) ** 0.42,
              b = ((n.fl * Math.abs(_)) / 100) ** 0.42,
              x = (w(h) * 400 * v) / (v + 27.13),
              S = (w(g) * 400 * y) / (y + 27.13),
              C = (w(_) * 400 * b) / (b + 27.13),
              T = (11 * x + -12 * S + C) / 11,
              E = (x + S - 2 * C) / 9,
              D = (20 * x + 20 * S + 21 * C) / 20,
              O = (40 * x + 20 * S + C) / 20,
              k = (Math.atan2(E, T) * 180) / Math.PI,
              A = k < 0 ? k + 360 : k >= 360 ? k - 360 : k,
              j = (A * Math.PI) / 180,
              M = 100 * ((O * n.nbb) / n.aw) ** +(n.c * n.z),
              N = (4 / n.c) * Math.sqrt(M / 100) * (n.aw + 4) * n.fLRoot,
              P = A < 20.14 ? A + 360 : A,
              F =
                (((5e4 / 13) *
                  (0.25 * (Math.cos((P * Math.PI) / 180 + 2) + 3.8)) *
                  n.nc *
                  n.ncb *
                  Math.sqrt(T * T + E * E)) /
                  (D + 0.305)) **
                  0.9 *
                (1.64 - 0.29 ** n.n) ** 0.73,
              I = F * Math.sqrt(M / 100),
              L = I * n.fLRoot,
              R = 50 * Math.sqrt((F * n.c) / (n.aw + 4)),
              z = (1.7000000000000002 * M) / (1 + 0.007 * M),
              B = (1 / 0.0228) * Math.log(1 + 0.0228 * L);
            return new e(A, I, M, N, L, R, z, B * Math.cos(j), B * Math.sin(j));
          },
        },
        {
          key: `fromJch`,
          value: function (t, n, r) {
            return e.fromJchInViewingConditions(t, n, r, Q.DEFAULT);
          },
        },
        {
          key: `fromJchInViewingConditions`,
          value: function (t, n, r, i) {
            var a = (4 / i.c) * Math.sqrt(t / 100) * (i.aw + 4) * i.fLRoot,
              o = n * i.fLRoot,
              s = n / Math.sqrt(t / 100),
              c = 50 * Math.sqrt((s * i.c) / (i.aw + 4)),
              l = (r * Math.PI) / 180,
              u = (1.7000000000000002 * t) / (1 + 0.007 * t),
              d = (1 / 0.0228) * Math.log(1 + 0.0228 * o);
            return new e(r, n, t, a, o, c, u, d * Math.cos(l), d * Math.sin(l));
          },
        },
        {
          key: `fromUcs`,
          value: function (t, n, r) {
            return e.fromUcsInViewingConditions(t, n, r, Q.DEFAULT);
          },
        },
        {
          key: `fromUcsInViewingConditions`,
          value: function (t, n, r, i) {
            var a = n,
              o = r,
              s = Math.sqrt(a * a + o * o),
              c = (Math.exp(s * 0.0228) - 1) / 0.0228 / i.fLRoot,
              l = (180 / Math.PI) * Math.atan2(o, a);
            l < 0 && (l += 360);
            var u = t / (1 - (t - 100) * 0.007);
            return e.fromJchInViewingConditions(u, c, l, i);
          },
        },
        {
          key: `fromXyzInViewingConditions`,
          value: function (t, n, r, i) {
            var a = 0.401288 * t + 0.650173 * n - 0.051461 * r,
              o = -0.250268 * t + 1.204414 * n + 0.045854 * r,
              s = -0.002079 * t + 0.048952 * n + 0.953127 * r,
              c = i.rgbD[0] * a,
              l = i.rgbD[1] * o,
              u = i.rgbD[2] * s,
              d = ((i.fl * Math.abs(c)) / 100) ** 0.42,
              f = ((i.fl * Math.abs(l)) / 100) ** 0.42,
              p = ((i.fl * Math.abs(u)) / 100) ** 0.42,
              m = (w(c) * 400 * d) / (d + 27.13),
              h = (w(l) * 400 * f) / (f + 27.13),
              g = (w(u) * 400 * p) / (p + 27.13),
              _ = (11 * m + -12 * h + g) / 11,
              v = (m + h - 2 * g) / 9,
              y = (20 * m + 20 * h + 21 * g) / 20,
              b = (40 * m + 20 * h + g) / 20,
              x = (Math.atan2(v, _) * 180) / Math.PI,
              S = x < 0 ? x + 360 : x >= 360 ? x - 360 : x,
              C = (S * Math.PI) / 180,
              T = 100 * ((b * i.nbb) / i.aw) ** +(i.c * i.z),
              E = (4 / i.c) * Math.sqrt(T / 100) * (i.aw + 4) * i.fLRoot,
              D = S < 20.14 ? S + 360 : S,
              O =
                (((5e4 / 13) *
                  ((1 / 4) * (Math.cos((D * Math.PI) / 180 + 2) + 3.8)) *
                  i.nc *
                  i.ncb *
                  Math.sqrt(_ * _ + v * v)) /
                  (y + 0.305)) **
                  0.9 *
                (1.64 - 0.29 ** i.n) ** 0.73,
              k = O * Math.sqrt(T / 100),
              A = k * i.fLRoot,
              j = 50 * Math.sqrt((O * i.c) / (i.aw + 4)),
              M = (1.7000000000000002 * T) / (1 + 0.007 * T),
              N = Math.log(1 + 0.0228 * A) / 0.0228;
            return new e(S, k, T, E, A, j, M, N * Math.cos(C), N * Math.sin(C));
          },
        },
      ],
    );
  })(),
  Z = (function () {
    function e() {
      t(this, e);
    }
    return i(e, null, [
      {
        key: `sanitizeRadians`,
        value: function (e) {
          return (e + Math.PI * 8) % (Math.PI * 2);
        },
      },
      {
        key: `trueDelinearized`,
        value: function (e) {
          var t = e / 100,
            n = 0;
          return ((n = t <= 0.0031308 ? t * 12.92 : 1.055 * t ** (1 / 2.4) - 0.055), n * 255);
        },
      },
      {
        key: `chromaticAdaptation`,
        value: function (e) {
          var t = Math.abs(e) ** 0.42;
          return (w(e) * 400 * t) / (t + 27.13);
        },
      },
      {
        key: `hueOf`,
        value: function (t) {
          var n = k(t, e.SCALED_DISCOUNT_FROM_LINRGB),
            r = e.chromaticAdaptation(n[0]),
            i = e.chromaticAdaptation(n[1]),
            a = e.chromaticAdaptation(n[2]),
            o = (11 * r + -12 * i + a) / 11,
            s = (r + i - 2 * a) / 9;
          return Math.atan2(s, o);
        },
      },
      {
        key: `areInCyclicOrder`,
        value: function (t, n, r) {
          return e.sanitizeRadians(n - t) < e.sanitizeRadians(r - t);
        },
      },
      {
        key: `intercept`,
        value: function (e, t, n) {
          return (t - e) / (n - e);
        },
      },
      {
        key: `lerpPoint`,
        value: function (e, t, n) {
          return [e[0] + (n[0] - e[0]) * t, e[1] + (n[1] - e[1]) * t, e[2] + (n[2] - e[2]) * t];
        },
      },
      {
        key: `setCoordinate`,
        value: function (t, n, r, i) {
          var a = e.intercept(t[i], n, r[i]);
          return e.lerpPoint(t, a, r);
        },
      },
      {
        key: `isBounded`,
        value: function (e) {
          return 0 <= e && e <= 100;
        },
      },
      {
        key: `nthVertex`,
        value: function (t, n) {
          var r = e.Y_FROM_LINRGB[0],
            i = e.Y_FROM_LINRGB[1],
            a = e.Y_FROM_LINRGB[2],
            o = n % 4 <= 1 ? 0 : 100,
            s = n % 2 == 0 ? 0 : 100;
          if (n < 4) {
            var c = o,
              l = s,
              u = (t - c * i - l * a) / r;
            return e.isBounded(u) ? [u, c, l] : [-1, -1, -1];
          } else if (n < 8) {
            var d = o,
              f = s,
              p = (t - f * r - d * a) / i;
            return e.isBounded(p) ? [f, p, d] : [-1, -1, -1];
          } else {
            var m = o,
              h = s,
              g = (t - m * r - h * i) / a;
            return e.isBounded(g) ? [m, h, g] : [-1, -1, -1];
          }
        },
      },
      {
        key: `bisectToSegment`,
        value: function (t, n) {
          for (var r = [-1, -1, -1], i = r, a = 0, o = 0, s = !1, c = !0, l = 0; l < 12; l++) {
            var u = e.nthVertex(t, l);
            if (!(u[0] < 0)) {
              var d = e.hueOf(u);
              if (!s) {
                ((r = u), (i = u), (a = d), (o = d), (s = !0));
                continue;
              }
              (c || e.areInCyclicOrder(a, d, o)) &&
                ((c = !1), e.areInCyclicOrder(a, n, d) ? ((i = u), (o = d)) : ((r = u), (a = d)));
            }
          }
          return [r, i];
        },
      },
      {
        key: `midpoint`,
        value: function (e, t) {
          return [(e[0] + t[0]) / 2, (e[1] + t[1]) / 2, (e[2] + t[2]) / 2];
        },
      },
      {
        key: `criticalPlaneBelow`,
        value: function (e) {
          return Math.floor(e - 0.5);
        },
      },
      {
        key: `criticalPlaneAbove`,
        value: function (e) {
          return Math.ceil(e - 0.5);
        },
      },
      {
        key: `bisectToLimit`,
        value: function (t, n) {
          for (
            var r = e.bisectToSegment(t, n), i = r[0], a = e.hueOf(i), o = r[1], s = 0;
            s < 3;
            s++
          )
            if (i[s] !== o[s]) {
              var c = -1,
                l = 255;
              i[s] < o[s]
                ? ((c = e.criticalPlaneBelow(e.trueDelinearized(i[s]))),
                  (l = e.criticalPlaneAbove(e.trueDelinearized(o[s]))))
                : ((c = e.criticalPlaneAbove(e.trueDelinearized(i[s]))),
                  (l = e.criticalPlaneBelow(e.trueDelinearized(o[s]))));
              for (var u = 0; u < 8 && !(Math.abs(l - c) <= 1); u++) {
                var d = Math.floor((c + l) / 2),
                  f = e.CRITICAL_PLANES[d],
                  p = e.setCoordinate(i, f, o, s),
                  m = e.hueOf(p);
                e.areInCyclicOrder(a, n, m) ? ((o = p), (l = d)) : ((i = p), (a = m), (c = d));
              }
            }
          return e.midpoint(i, o);
        },
      },
      {
        key: `inverseChromaticAdaptation`,
        value: function (e) {
          var t = Math.abs(e),
            n = Math.max(0, (27.13 * t) / (400 - t));
          return w(e) * n ** (1 / 0.42);
        },
      },
      {
        key: `findResultByJ`,
        value: function (t, n, r) {
          for (
            var i = Math.sqrt(r) * 11,
              a = Q.DEFAULT,
              o = 1 / (1.64 - 0.29 ** a.n) ** 0.73,
              s = 0.25 * (Math.cos(t + 2) + 3.8) * (5e4 / 13) * a.nc * a.ncb,
              c = Math.sin(t),
              l = Math.cos(t),
              u = 0;
            u < 5;
            u++
          ) {
            var d = i / 100,
              f = ((n === 0 || i === 0 ? 0 : n / Math.sqrt(d)) * o) ** (1 / 0.9),
              p = (a.aw * d ** (1 / a.c / a.z)) / a.nbb,
              m = (23 * (p + 0.305) * f) / (23 * s + 11 * f * l + 108 * f * c),
              h = m * l,
              g = m * c,
              _ = (460 * p + 451 * h + 288 * g) / 1403,
              v = (460 * p - 891 * h - 261 * g) / 1403,
              y = (460 * p - 220 * h - 6300 * g) / 1403,
              b = k(
                [
                  e.inverseChromaticAdaptation(_),
                  e.inverseChromaticAdaptation(v),
                  e.inverseChromaticAdaptation(y),
                ],
                e.LINRGB_FROM_SCALED_DISCOUNT,
              );
            if (b[0] < 0 || b[1] < 0 || b[2] < 0) return 0;
            var x = e.Y_FROM_LINRGB[0],
              S = e.Y_FROM_LINRGB[1],
              C = e.Y_FROM_LINRGB[2],
              w = x * b[0] + S * b[1] + C * b[2];
            if (w <= 0) return 0;
            if (u === 4 || Math.abs(w - r) < 0.002)
              return b[0] > 100.01 || b[1] > 100.01 || b[2] > 100.01 ? 0 : P(b);
            i -= ((w - r) * i) / (2 * w);
          }
          return 0;
        },
      },
      {
        key: `solveToInt`,
        value: function (t, n, r) {
          if (n < 1e-4 || r < 1e-4 || r > 99.9999) return ee(r);
          t = O(t);
          var i = (t / 180) * Math.PI,
            a = H(r),
            o = e.findResultByJ(i, n, a);
          return o === 0 ? P(e.bisectToLimit(a, i)) : o;
        },
      },
      {
        key: `solveToCam`,
        value: function (t, n, r) {
          return X.fromInt(e.solveToInt(t, n, r));
        },
      },
    ]);
  })();
(n(Z, `SCALED_DISCOUNT_FROM_LINRGB`, [
  [0.001200833568784504, 0.002389694492170889, 0.0002795742885861124],
  [0.0005891086651375999, 0.0029785502573438758, 0.0003270666104008398],
  [0.00010146692491640572, 0.0005364214359186694, 0.0032979401770712076],
]),
  n(Z, `LINRGB_FROM_SCALED_DISCOUNT`, [
    [1373.2198709594231, -1100.4251190754821, -7.278681089101213],
    [-271.815969077903, 559.6580465940733, -32.46047482791194],
    [1.9622899599665666, -57.173814538844006, 308.7233197812385],
  ]),
  n(Z, `Y_FROM_LINRGB`, [0.2126, 0.7152, 0.0722]),
  n(
    Z,
    `CRITICAL_PLANES`,
    [
      0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313,
      0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281,
      0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123,
      0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023,
      0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623,
      0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498,
      0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297,
      1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447,
      1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105,
      1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551,
      2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007,
      2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997,
      3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087,
      3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158,
      4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746,
      4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375,
      5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082,
      6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045,
      6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665,
      7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165,
      8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839,
      9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024,
      10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008,
      11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247,
      12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372,
      13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856,
      14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891,
      16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053,
      17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332,
      18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692,
      19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977,
      21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328,
      22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016,
      24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138,
      26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353,
      27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422,
      29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627,
      31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592,
      33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264,
      34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349,
      36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785,
      39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629,
      41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224,
      43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209,
      46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468,
      48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984,
      51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392,
      53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934,
      56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621,
      58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585,
      61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914,
      64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258,
      67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107,
      71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733,
      74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167,
      78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999,
      82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302,
      86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655,
      90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902,
      95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366,
      99.55452497210776,
    ],
  ));
var Q = (function () {
  function e(n, r, i, a, o, s, c, l, u, d) {
    (t(this, e),
      (this.n = n),
      (this.aw = r),
      (this.nbb = i),
      (this.ncb = a),
      (this.c = o),
      (this.nc = s),
      (this.rgbD = c),
      (this.fl = l),
      (this.fLRoot = u),
      (this.z = d));
  }
  return i(e, null, [
    {
      key: `make`,
      value: function () {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : te(),
          n =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : ((200 / Math.PI) * H(50)) / 100,
          r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 50,
          i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 2,
          a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
          o = t,
          s = o[0] * 0.401288 + o[1] * 0.650173 + o[2] * -0.051461,
          c = o[0] * -0.250268 + o[1] * 1.204414 + o[2] * 0.045854,
          l = o[0] * -0.002079 + o[1] * 0.048952 + o[2] * 0.953127,
          u = 0.8 + i / 10,
          d = u >= 0.9 ? T(0.59, 0.69, (u - 0.9) * 10) : T(0.525, 0.59, (u - 0.8) * 10),
          f = a ? 1 : u * (1 - (1 / 3.6) * Math.exp((-n - 42) / 92));
        f = f > 1 ? 1 : f < 0 ? 0 : f;
        var p = u,
          m = [(100 / s) * f + 1 - f, (100 / c) * f + 1 - f, (100 / l) * f + 1 - f],
          h = 1 / (5 * n + 1),
          g = h * h * h * h,
          _ = 1 - g,
          v = g * n + 0.1 * _ * _ * Math.cbrt(5 * n),
          y = H(r) / t[1],
          b = 1.48 + Math.sqrt(y),
          x = 0.725 / y ** 0.2,
          S = x,
          C = [
            ((v * m[0] * s) / 100) ** 0.42,
            ((v * m[1] * c) / 100) ** 0.42,
            ((v * m[2] * l) / 100) ** 0.42,
          ],
          w = [
            (400 * C[0]) / (C[0] + 27.13),
            (400 * C[1]) / (C[1] + 27.13),
            (400 * C[2]) / (C[2] + 27.13),
          ];
        return new e(y, (2 * w[0] + w[1] + 0.05 * w[2]) * x, x, S, d, p, m, v, v ** 0.25, b);
      },
    },
  ]);
})();
((J = Q), n(Q, `DEFAULT`, J.make()));
var ae = (function () {
  function e() {
    t(this, e);
  }
  return i(e, null, [
    {
      key: `ratioOfTones`,
      value: function (t, n) {
        return ((t = D(0, 100, t)), (n = D(0, 100, n)), e.ratioOfYs(H(t), H(n)));
      },
    },
    {
      key: `ratioOfYs`,
      value: function (e, t) {
        var n = e > t ? e : t,
          r = n === t ? e : t;
        return (n + 5) / (r + 5);
      },
    },
    {
      key: `lighter`,
      value: function (t, n) {
        if (t < 0 || t > 100) return -1;
        var r = H(t),
          i = n * (r + 5) - 5,
          a = e.ratioOfYs(i, r),
          o = Math.abs(a - n);
        if (a < n && o > 0.04) return -1;
        var s = U(i) + 0.4;
        return s < 0 || s > 100 ? -1 : s;
      },
    },
    {
      key: `darker`,
      value: function (t, n) {
        if (t < 0 || t > 100) return -1;
        var r = H(t),
          i = (r + 5) / n - 5,
          a = e.ratioOfYs(r, i),
          o = Math.abs(a - n);
        if (a < n && o > 0.04) return -1;
        var s = U(i) - 0.4;
        return s < 0 || s > 100 ? -1 : s;
      },
    },
    {
      key: `lighterUnsafe`,
      value: function (t, n) {
        var r = e.lighter(t, n);
        return r < 0 ? 100 : r;
      },
    },
    {
      key: `darkerUnsafe`,
      value: function (t, n) {
        var r = e.darker(t, n);
        return r < 0 ? 0 : r;
      },
    },
  ]);
})();
function oe(e, t) {
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
function se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? oe(Object(r), !0).forEach(function (t) {
          n(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : oe(Object(r)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
  }
  return e;
}
var ce = [1.12, 1.33, 2.03, 2.73, 3.33, 4.27, 5.2, 6.62, 12.46, 14.25],
  le = [1.08, 1.24, 1.55, 1.99, 2.45, 3.34, 4.64, 6.1, 10.19, 12.6],
  ue = function (e, t) {
    var n = 0,
      r = null;
    return (
      e.forEach(function (e, i) {
        var a = p(u(e), u(t));
        (r === null || a < r) && ((n = i), (r = a));
      }),
      n
    );
  },
  $ = function (e) {
    var t = o(e)[0],
      n = a(t, 100, 60),
      i = s(n[0], n[1], n[2]) < 0.4 ? ce : le,
      c = _(e),
      l = Y.fromInt(re({ r: c[0], g: c[1], b: c[2], a: c[3] })),
      u = i.map(function (e) {
        var t = ne(Y.from(l.hue, l.chroma, ae.darker(100, e) + 0.25).toInt());
        return m(t.r, t.g, t.b);
      }),
      d = ue(u, e),
      f = r(u);
    return ((f[d] = e), { ramp: f, replacedColor: u[d] });
  };
function de(e, t, n) {
  for (var r = [], i = 1; i <= t; i++)
    e + i < n.length ? r.push(e + i) : r.push(e - (i - (n.length - 1 - e)));
  return r;
}
var fe = function (t, n, r) {
    var i = $(t),
      a = i.ramp,
      o = i.replacedColor,
      s = r || a,
      c = ue(s, t),
      l = {},
      u = {},
      d = g(t, `#FFFFFF`);
    if (d >= 4.5) {
      var f = e(de(c, 2, s), 2),
        p = f[0],
        m = f[1],
        h = c;
      d < 5.4 && d >= 4.8 && c === 6 && (h = c + 1);
      var _ = e(de(h, 1, s), 1)[0];
      l = {
        "color.text.brand": h,
        "color.icon.brand": c,
        "color.background.brand.subtlest": 0,
        "color.background.brand.subtlest.hovered": 1,
        "color.background.brand.subtlest.pressed": 2,
        "color.background.brand.bold": c,
        "color.background.brand.bold.hovered": p,
        "color.background.brand.bold.pressed": m,
        "color.background.brand.boldest": 9,
        "color.background.brand.boldest.hovered": 8,
        "color.background.brand.boldest.pressed": 7,
        "color.border.brand": c,
        "color.text.selected": h,
        "color.icon.selected": c,
        "color.background.selected.bold": c,
        "color.background.selected.bold.hovered": p,
        "color.background.selected.bold.pressed": m,
        "color.border.selected": c,
        "color.link": h,
        "color.link.pressed": _,
        "color.chart.brand": 5,
        "color.chart.brand.hovered": 6,
        "color.background.selected": 0,
        "color.background.selected.hovered": 1,
        "color.background.selected.pressed": 2,
      };
    } else {
      var v = 6;
      (d < 4.5 && d >= 4 && c === 6 && (v = o),
        (l = {
          "color.background.brand.subtlest": 0,
          "color.background.brand.subtlest.hovered": 1,
          "color.background.brand.subtlest.pressed": 2,
          "color.background.brand.bold": v,
          "color.background.brand.bold.hovered": 7,
          "color.background.brand.bold.pressed": 8,
          "color.background.brand.boldest": 9,
          "color.background.brand.boldest.hovered": 8,
          "color.background.brand.boldest.pressed": 7,
          "color.border.brand": 6,
          "color.background.selected.bold": v,
          "color.background.selected.bold.hovered": 7,
          "color.background.selected.bold.pressed": 8,
          "color.text.brand": 6,
          "color.icon.brand": 6,
          "color.chart.brand": 5,
          "color.chart.brand.hovered": 6,
          "color.text.selected": 6,
          "color.icon.selected": 6,
          "color.border.selected": 6,
          "color.background.selected": 0,
          "color.background.selected.hovered": 1,
          "color.background.selected.pressed": 2,
          "color.link": 6,
          "color.link.pressed": 7,
        }));
    }
    if (n === `light`) return { light: l };
    if (
      (Object.entries(l).forEach(function (t) {
        var n = e(t, 2),
          r = n[0],
          i = n[1];
        u[r] = 9 - (typeof i == `string` ? c : i);
      }),
      d < 4.5)
    ) {
      var b = y[`color.text.inverse`];
      g(b, t) >= 4.5 &&
        c >= 2 &&
        ((u[`color.background.brand.bold`] = c),
        (u[`color.background.brand.bold.hovered`] = c - 1),
        (u[`color.background.brand.bold.pressed`] = c - 2));
    }
    return n === `dark` ? { dark: u } : { light: l, dark: u };
  },
  pe = function (t, n, r) {
    var i = r || $(t).ramp,
      a = fe(t, n, i),
      o = {};
    return (
      Object.entries(a).forEach(function (t) {
        var n = e(t, 2),
          r = n[0],
          a = n[1];
        (r === `light` || r === `dark`) &&
          (o[r] = se(se({}, a), C({ customThemeTokenMap: a, mode: r, themeRamp: i })));
      }),
      o
    );
  },
  me = 10;
function he(e) {
  var t,
    n = e == null || (t = e.UNSAFE_themeOptions) == null ? void 0 : t.brandColor,
    r = e?.colorMode || v.colorMode,
    i = l(JSON.stringify(e?.UNSAFE_themeOptions)),
    a = $(n).ramp,
    o = [],
    s = pe(n, r, a);
  return (
    (r === `light` || r === `auto`) &&
      s.light &&
      o.push({
        id: `light`,
        attrs: { "data-theme": `light`, "data-custom-theme": i },
        css: `
html[${c}="${i}"][${d}="light"][data-theme~="light:light"] {
  /* Branded tokens */
    ${h(s.light, a)}
}`,
      }),
    (r === `dark` || r === `auto`) &&
      s.dark &&
      o.push({
        id: `dark`,
        attrs: { "data-theme": `dark`, "data-custom-theme": i },
        css: `
html[${c}="${i}"][${d}="dark"][data-theme~="dark:dark"] {
  /* Branded tokens */
    ${h(s.dark, a)}
}`,
      }),
    o
  );
}
function ge(e) {
  var t = he(e);
  (f(10),
    t.map(function (e) {
      var t = document.createElement(`style`);
      (document.head.appendChild(t),
        (t.dataset.theme = e.attrs[`data-theme`]),
        (t.dataset.customTheme = e.attrs[`data-custom-theme`]),
        (t.textContent = e.css));
    }));
}
export {
  me as CUSTOM_STYLE_ELEMENTS_SIZE_THRESHOLD,
  he as getCustomThemeStyles,
  ge as loadAndAppendCustomThemeCss,
};
