import {
  t as Q,
  a as q,
  c as N,
  g as U,
  u as E0,
  v as B0,
  x as _0,
  j as S0,
  f as X,
  y as V0,
  z as u0,
  A as z0,
  H as w0,
  B as P0,
  C as U0,
  D as s0,
  E as l0,
  F as v0,
  G as j0,
} from "./index-D00H8mu4.js";
import "./react-dom-vendor--YlRhZCI.js";
import "./lodash-vendor-Dv-o4pqD.js";
import "./client-core-vendor-ByVIiDxb.js";
var g0 = {
    "color.text.brand": "#669DF1",
    "elevation.surface.overlay": "#2B2C2F",
    "color.background.selected": "#1C2B42",
    "color.text.selected": "#669DF1",
    "color.border.brand": "#669DF1",
    "color.chart.brand": "#4688EC",
    "color.text.inverse": "#1F1F21",
  },
  q0 = {
    "color.text.brand": "#1868DB",
    "elevation.surface.sunken": "#F8F8F8",
    "color.background.selected": "#E9F2FE",
    "color.text.selected": "#1868DB",
    "color.border.brand": "#1868DB",
    "color.chart.brand": "#357DE8",
    "color.text.inverse": "#FFFFFF",
  },
  N0 = [
    {
      foreground: "color.text.brand",
      backgroundLight: "elevation.surface.sunken",
      backgroundDark: "elevation.surface.overlay",
      desiredContrast: 4.5,
      updatedTokens: [
        "color.text.brand",
        "color.text.selected",
        "color.link",
        "color.link.pressed",
        "color.icon.brand",
        "color.icon.selected",
      ],
    },
    {
      foreground: "color.text.brand",
      backgroundLight: "color.background.selected",
      backgroundDark: "color.background.selected",
      desiredContrast: 4.5,
      updatedTokens: ["color.text.brand", "color.link", "color.link.pressed"],
    },
    {
      foreground: "color.text.selected",
      backgroundLight: "color.background.selected",
      backgroundDark: "color.background.selected",
      desiredContrast: 4.5,
      updatedTokens: ["color.text.selected", "color.icon.selected"],
    },
    {
      foreground: "color.border.brand",
      backgroundLight: "elevation.surface.sunken",
      backgroundDark: "elevation.surface.overlay",
      desiredContrast: 3,
      updatedTokens: ["color.border.brand", "color.border.selected"],
    },
    {
      foreground: "color.chart.brand",
      backgroundLight: "elevation.surface.sunken",
      backgroundDark: "elevation.surface.overlay",
      desiredContrast: 3,
      updatedTokens: ["color.chart.brand", "color.chart.brand.hovered"],
    },
  ],
  h0 = function (t, r) {
    return r === "light" ? q0[t] : g0[t];
  },
  H0 = function (t) {
    var r = t.customThemeTokenMap,
      e = t.mode,
      o = t.themeRamp,
      n = {},
      s = Object.keys(r);
    return (
      N0.forEach(function (u) {
        var c = u.backgroundLight,
          l = u.backgroundDark,
          v = u.foreground,
          h = u.desiredContrast,
          d = u.updatedTokens,
          i = e === "light" ? c : l,
          k = r[v],
          f = r[i],
          b = s.includes(v) ? (typeof k == "string" ? k : o[k]) : h0(v, e),
          m = s.includes(i) ? (typeof f == "string" ? f : o[f]) : h0(i, e),
          F = Q(b, m);
        F <= h &&
          d.forEach(function (p) {
            var g = r[p];
            typeof g == "number" && (n[p] = e === "light" ? g + 1 : g - 1);
          });
      }),
      n
    );
  };
function R(a) {
  return a < 0 ? -1 : a === 0 ? 0 : 1;
}
function d0(a, t, r) {
  return (1 - r) * a + r * t;
}
function Y0(a, t, r) {
  return r < a ? a : r > t ? t : r;
}
function i0(a, t, r) {
  return r < a ? a : r > t ? t : r;
}
function x0(a) {
  return ((a = a % 360), a < 0 && (a = a + 360), a);
}
function r0(a, t) {
  var r = a[0] * t[0][0] + a[1] * t[0][1] + a[2] * t[0][2],
    e = a[0] * t[1][0] + a[1] * t[1][1] + a[2] * t[1][2],
    o = a[0] * t[2][0] + a[1] * t[2][1] + a[2] * t[2][2];
  return [r, e, o];
}
var G0 = [
    [0.41233895, 0.35762064, 0.18051042],
    [0.2126, 0.7152, 0.0722],
    [0.01932141, 0.11916382, 0.95034478],
  ],
  J0 = [
    [3.2413774792388685, -1.5376652402851851, -0.49885366846268053],
    [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061],
    [0.05562093689691305, -0.20395524564742123, 1.0571799111220335],
  ],
  W0 = [95.047, 100, 108.883];
function e0(a, t, r) {
  return ((255 << 24) | ((a & 255) << 16) | ((t & 255) << 8) | (r & 255)) >>> 0;
}
function f0(a) {
  var t = w(a[0]),
    r = w(a[1]),
    e = w(a[2]);
  return e0(t, r, e);
}
function X0(a) {
  return (a >> 24) & 255;
}
function I0(a) {
  return (a >> 16) & 255;
}
function y0(a) {
  return (a >> 8) & 255;
}
function T0(a) {
  return a & 255;
}
function Z0(a, t, r) {
  var e = J0,
    o = e[0][0] * a + e[0][1] * t + e[0][2] * r,
    n = e[1][0] * a + e[1][1] * t + e[1][2] * r,
    s = e[2][0] * a + e[2][1] * t + e[2][2] * r,
    u = w(o),
    c = w(n),
    l = w(s);
  return e0(u, c, l);
}
function $0(a) {
  var t = P(I0(a)),
    r = P(y0(a)),
    e = P(T0(a));
  return r0([t, r, e], G0);
}
function K0(a) {
  var t = S(a),
    r = w(t);
  return e0(r, r, r);
}
function b0(a) {
  var t = $0(a)[1];
  return 116 * F0(t / 100) - 16;
}
function S(a) {
  return 100 * er((a + 16) / 116);
}
function a0(a) {
  return F0(a / 100) * 116 - 16;
}
function P(a) {
  var t = a / 255;
  return t <= 0.040449936 ? (t / 12.92) * 100 : Math.pow((t + 0.055) / 1.055, 2.4) * 100;
}
function w(a) {
  var t = a / 100,
    r = 0;
  return (
    t <= 0.0031308 ? (r = t * 12.92) : (r = 1.055 * Math.pow(t, 1 / 2.4) - 0.055),
    Y0(0, 255, Math.round(r * 255))
  );
}
function Q0() {
  return W0;
}
function rr(a) {
  var t = I0(a),
    r = y0(a),
    e = T0(a),
    o = X0(a);
  return { r: t, g: r, b: e, a: o };
}
function ar(a) {
  var t = a.r,
    r = a.g,
    e = a.b,
    o = a.a,
    n = W(t),
    s = W(r),
    u = W(e),
    c = W(o);
  return (c << 24) | (n << 16) | (s << 8) | u;
}
function W(a) {
  return a < 0 ? 0 : a > 255 ? 255 : a;
}
function F0(a) {
  var t = 0.008856451679035631,
    r = 24389 / 27;
  return a > t ? Math.pow(a, 1 / 3) : (r * a + 16) / 116;
}
function er(a) {
  var t = 0.008856451679035631,
    r = 24389 / 27,
    e = a * a * a;
  return e > t ? e : (116 * a - 16) / r;
}
var C0,
  k0 = (function () {
    function a(t) {
      (N(this, a), (this.argb = t));
      var r = j.fromInt(t);
      ((this.internalHue = r.hue),
        (this.internalChroma = r.chroma),
        (this.internalTone = b0(t)),
        (this.argb = t));
    }
    return q(
      a,
      [
        {
          key: "toInt",
          value: function () {
            return this.argb;
          },
        },
        {
          key: "hue",
          get: function () {
            return this.internalHue;
          },
          set: function (r) {
            this.setInternalState(V.solveToInt(r, this.internalChroma, this.internalTone));
          },
        },
        {
          key: "chroma",
          get: function () {
            return this.internalChroma;
          },
          set: function (r) {
            this.setInternalState(V.solveToInt(this.internalHue, r, this.internalTone));
          },
        },
        {
          key: "tone",
          get: function () {
            return this.internalTone;
          },
          set: function (r) {
            this.setInternalState(V.solveToInt(this.internalHue, this.internalChroma, r));
          },
        },
        {
          key: "setInternalState",
          value: function (r) {
            var e = j.fromInt(r);
            ((this.internalHue = e.hue),
              (this.internalChroma = e.chroma),
              (this.internalTone = b0(r)),
              (this.argb = r));
          },
        },
        {
          key: "inViewingConditions",
          value: function (r) {
            var e = j.fromInt(this.toInt()),
              o = e.xyzInViewingConditions(r),
              n = j.fromXyzInViewingConditions(o[0], o[1], o[2], z.make()),
              s = a.from(n.hue, n.chroma, a0(o[1]));
            return s;
          },
        },
      ],
      [
        {
          key: "from",
          value: function (r, e, o) {
            return new a(V.solveToInt(r, e, o));
          },
        },
        {
          key: "fromInt",
          value: function (r) {
            return new a(r);
          },
        },
      ],
    );
  })(),
  j = (function () {
    function a(t, r, e, o, n, s, u, c, l) {
      (N(this, a),
        (this.hue = t),
        (this.chroma = r),
        (this.j = e),
        (this.q = o),
        (this.m = n),
        (this.s = s),
        (this.jstar = u),
        (this.astar = c),
        (this.bstar = l));
    }
    return q(
      a,
      [
        {
          key: "distance",
          value: function (r) {
            var e = this.jstar - r.jstar,
              o = this.astar - r.astar,
              n = this.bstar - r.bstar,
              s = Math.sqrt(e * e + o * o + n * n),
              u = 1.41 * Math.pow(s, 0.63);
            return u;
          },
        },
        {
          key: "toInt",
          value: function () {
            return this.viewed(z.DEFAULT);
          },
        },
        {
          key: "viewed",
          value: function (r) {
            var e = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100),
              o = Math.pow(e / Math.pow(1.64 - Math.pow(0.29, r.n), 0.73), 1 / 0.9),
              n = (this.hue * Math.PI) / 180,
              s = 0.25 * (Math.cos(n + 2) + 3.8),
              u = r.aw * Math.pow(this.j / 100, 1 / r.c / r.z),
              c = s * (5e4 / 13) * r.nc * r.ncb,
              l = u / r.nbb,
              v = Math.sin(n),
              h = Math.cos(n),
              d = (23 * (l + 0.305) * o) / (23 * c + 11 * o * h + 108 * o * v),
              i = d * h,
              k = d * v,
              f = (460 * l + 451 * i + 288 * k) / 1403,
              b = (460 * l - 891 * i - 261 * k) / 1403,
              m = (460 * l - 220 * i - 6300 * k) / 1403,
              F = Math.max(0, (27.13 * Math.abs(f)) / (400 - Math.abs(f))),
              p = R(f) * (100 / r.fl) * Math.pow(F, 1 / 0.42),
              g = Math.max(0, (27.13 * Math.abs(b)) / (400 - Math.abs(b))),
              D = R(b) * (100 / r.fl) * Math.pow(g, 1 / 0.42),
              C = Math.max(0, (27.13 * Math.abs(m)) / (400 - Math.abs(m))),
              T = R(m) * (100 / r.fl) * Math.pow(C, 1 / 0.42),
              M = p / r.rgbD[0],
              I = D / r.rgbD[1],
              A = T / r.rgbD[2],
              y = 1.86206786 * M - 1.01125463 * I + 0.14918677 * A,
              E = 0.38752654 * M + 0.62144744 * I - 0.00897398 * A,
              B = -0.0158415 * M - 0.03412294 * I + 1.04996444 * A,
              L = Z0(y, E, B);
            return L;
          },
        },
        {
          key: "xyzInViewingConditions",
          value: function (r) {
            var e = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100),
              o = Math.pow(e / Math.pow(1.64 - Math.pow(0.29, r.n), 0.73), 1 / 0.9),
              n = (this.hue * Math.PI) / 180,
              s = 0.25 * (Math.cos(n + 2) + 3.8),
              u = r.aw * Math.pow(this.j / 100, 1 / r.c / r.z),
              c = s * (5e4 / 13) * r.nc * r.ncb,
              l = u / r.nbb,
              v = Math.sin(n),
              h = Math.cos(n),
              d = (23 * (l + 0.305) * o) / (23 * c + 11 * o * h + 108 * o * v),
              i = d * h,
              k = d * v,
              f = (460 * l + 451 * i + 288 * k) / 1403,
              b = (460 * l - 891 * i - 261 * k) / 1403,
              m = (460 * l - 220 * i - 6300 * k) / 1403,
              F = Math.max(0, (27.13 * Math.abs(f)) / (400 - Math.abs(f))),
              p = R(f) * (100 / r.fl) * Math.pow(F, 1 / 0.42),
              g = Math.max(0, (27.13 * Math.abs(b)) / (400 - Math.abs(b))),
              D = R(b) * (100 / r.fl) * Math.pow(g, 1 / 0.42),
              C = Math.max(0, (27.13 * Math.abs(m)) / (400 - Math.abs(m))),
              T = R(m) * (100 / r.fl) * Math.pow(C, 1 / 0.42),
              M = p / r.rgbD[0],
              I = D / r.rgbD[1],
              A = T / r.rgbD[2],
              y = 1.86206786 * M - 1.01125463 * I + 0.14918677 * A,
              E = 0.38752654 * M + 0.62144744 * I - 0.00897398 * A,
              B = -0.0158415 * M - 0.03412294 * I + 1.04996444 * A;
            return [y, E, B];
          },
        },
      ],
      [
        {
          key: "fromInt",
          value: function (r) {
            return a.fromIntInViewingConditions(r, z.DEFAULT);
          },
        },
        {
          key: "fromIntInViewingConditions",
          value: function (r, e) {
            var o = (r & 16711680) >> 16,
              n = (r & 65280) >> 8,
              s = r & 255,
              u = P(o),
              c = P(n),
              l = P(s),
              v = 0.41233895 * u + 0.35762064 * c + 0.18051042 * l,
              h = 0.2126 * u + 0.7152 * c + 0.0722 * l,
              d = 0.01932141 * u + 0.11916382 * c + 0.95034478 * l,
              i = 0.401288 * v + 0.650173 * h - 0.051461 * d,
              k = -0.250268 * v + 1.204414 * h + 0.045854 * d,
              f = -0.002079 * v + 0.048952 * h + 0.953127 * d,
              b = e.rgbD[0] * i,
              m = e.rgbD[1] * k,
              F = e.rgbD[2] * f,
              p = Math.pow((e.fl * Math.abs(b)) / 100, 0.42),
              g = Math.pow((e.fl * Math.abs(m)) / 100, 0.42),
              D = Math.pow((e.fl * Math.abs(F)) / 100, 0.42),
              C = (R(b) * 400 * p) / (p + 27.13),
              T = (R(m) * 400 * g) / (g + 27.13),
              M = (R(F) * 400 * D) / (D + 27.13),
              I = (11 * C + -12 * T + M) / 11,
              A = (C + T - 2 * M) / 9,
              y = (20 * C + 20 * T + 21 * M) / 20,
              E = (40 * C + 20 * T + M) / 20,
              B = Math.atan2(A, I),
              L = (B * 180) / Math.PI,
              O = L < 0 ? L + 360 : L >= 360 ? L - 360 : L,
              H = (O * Math.PI) / 180,
              Y = E * e.nbb,
              _ = 100 * Math.pow(Y / e.aw, e.c * e.z),
              x = (4 / e.c) * Math.sqrt(_ / 100) * (e.aw + 4) * e.fLRoot,
              Z = O < 20.14 ? O + 360 : O,
              $ = 0.25 * (Math.cos((Z * Math.PI) / 180 + 2) + 3.8),
              G = (5e4 / 13) * $ * e.nc * e.ncb,
              K = (G * Math.sqrt(I * I + A * A)) / (y + 0.305),
              J = Math.pow(K, 0.9) * Math.pow(1.64 - Math.pow(0.29, e.n), 0.73),
              o0 = J * Math.sqrt(_ / 100),
              n0 = o0 * e.fLRoot,
              D0 = 50 * Math.sqrt((J * e.c) / (e.aw + 4)),
              R0 = ((1 + 100 * 0.007) * _) / (1 + 0.007 * _),
              c0 = (1 / 0.0228) * Math.log(1 + 0.0228 * n0),
              O0 = c0 * Math.cos(H),
              L0 = c0 * Math.sin(H);
            return new a(O, o0, _, x, n0, D0, R0, O0, L0);
          },
        },
        {
          key: "fromJch",
          value: function (r, e, o) {
            return a.fromJchInViewingConditions(r, e, o, z.DEFAULT);
          },
        },
        {
          key: "fromJchInViewingConditions",
          value: function (r, e, o, n) {
            var s = (4 / n.c) * Math.sqrt(r / 100) * (n.aw + 4) * n.fLRoot,
              u = e * n.fLRoot,
              c = e / Math.sqrt(r / 100),
              l = 50 * Math.sqrt((c * n.c) / (n.aw + 4)),
              v = (o * Math.PI) / 180,
              h = ((1 + 100 * 0.007) * r) / (1 + 0.007 * r),
              d = (1 / 0.0228) * Math.log(1 + 0.0228 * u),
              i = d * Math.cos(v),
              k = d * Math.sin(v);
            return new a(o, e, r, s, u, l, h, i, k);
          },
        },
        {
          key: "fromUcs",
          value: function (r, e, o) {
            return a.fromUcsInViewingConditions(r, e, o, z.DEFAULT);
          },
        },
        {
          key: "fromUcsInViewingConditions",
          value: function (r, e, o, n) {
            var s = e,
              u = o,
              c = Math.sqrt(s * s + u * u),
              l = (Math.exp(c * 0.0228) - 1) / 0.0228,
              v = l / n.fLRoot,
              h = Math.atan2(u, s) * (180 / Math.PI);
            h < 0 && (h += 360);
            var d = r / (1 - (r - 100) * 0.007);
            return a.fromJchInViewingConditions(d, v, h, n);
          },
        },
        {
          key: "fromXyzInViewingConditions",
          value: function (r, e, o, n) {
            var s = 0.401288 * r + 0.650173 * e - 0.051461 * o,
              u = -0.250268 * r + 1.204414 * e + 0.045854 * o,
              c = -0.002079 * r + 0.048952 * e + 0.953127 * o,
              l = n.rgbD[0] * s,
              v = n.rgbD[1] * u,
              h = n.rgbD[2] * c,
              d = Math.pow((n.fl * Math.abs(l)) / 100, 0.42),
              i = Math.pow((n.fl * Math.abs(v)) / 100, 0.42),
              k = Math.pow((n.fl * Math.abs(h)) / 100, 0.42),
              f = (R(l) * 400 * d) / (d + 27.13),
              b = (R(v) * 400 * i) / (i + 27.13),
              m = (R(h) * 400 * k) / (k + 27.13),
              F = (11 * f + -12 * b + m) / 11,
              p = (f + b - 2 * m) / 9,
              g = (20 * f + 20 * b + 21 * m) / 20,
              D = (40 * f + 20 * b + m) / 20,
              C = Math.atan2(p, F),
              T = (C * 180) / Math.PI,
              M = T < 0 ? T + 360 : T >= 360 ? T - 360 : T,
              I = (M * Math.PI) / 180,
              A = D * n.nbb,
              y = 100 * Math.pow(A / n.aw, n.c * n.z),
              E = (4 / n.c) * Math.sqrt(y / 100) * (n.aw + 4) * n.fLRoot,
              B = M < 20.14 ? M + 360 : M,
              L = (1 / 4) * (Math.cos((B * Math.PI) / 180 + 2) + 3.8),
              O = (5e4 / 13) * L * n.nc * n.ncb,
              H = (O * Math.sqrt(F * F + p * p)) / (g + 0.305),
              Y = Math.pow(H, 0.9) * Math.pow(1.64 - Math.pow(0.29, n.n), 0.73),
              _ = Y * Math.sqrt(y / 100),
              x = _ * n.fLRoot,
              Z = 50 * Math.sqrt((Y * n.c) / (n.aw + 4)),
              $ = ((1 + 100 * 0.007) * y) / (1 + 0.007 * y),
              G = Math.log(1 + 0.0228 * x) / 0.0228,
              K = G * Math.cos(I),
              J = G * Math.sin(I);
            return new a(M, _, y, E, x, Z, $, K, J);
          },
        },
      ],
    );
  })(),
  V = (function () {
    function a() {
      N(this, a);
    }
    return q(a, null, [
      {
        key: "sanitizeRadians",
        value: function (r) {
          return (r + Math.PI * 8) % (Math.PI * 2);
        },
      },
      {
        key: "trueDelinearized",
        value: function (r) {
          var e = r / 100,
            o = 0;
          return (
            e <= 0.0031308 ? (o = e * 12.92) : (o = 1.055 * Math.pow(e, 1 / 2.4) - 0.055),
            o * 255
          );
        },
      },
      {
        key: "chromaticAdaptation",
        value: function (r) {
          var e = Math.pow(Math.abs(r), 0.42);
          return (R(r) * 400 * e) / (e + 27.13);
        },
      },
      {
        key: "hueOf",
        value: function (r) {
          var e = r0(r, a.SCALED_DISCOUNT_FROM_LINRGB),
            o = a.chromaticAdaptation(e[0]),
            n = a.chromaticAdaptation(e[1]),
            s = a.chromaticAdaptation(e[2]),
            u = (11 * o + -12 * n + s) / 11,
            c = (o + n - 2 * s) / 9;
          return Math.atan2(c, u);
        },
      },
      {
        key: "areInCyclicOrder",
        value: function (r, e, o) {
          var n = a.sanitizeRadians(e - r),
            s = a.sanitizeRadians(o - r);
          return n < s;
        },
      },
      {
        key: "intercept",
        value: function (r, e, o) {
          return (e - r) / (o - r);
        },
      },
      {
        key: "lerpPoint",
        value: function (r, e, o) {
          return [r[0] + (o[0] - r[0]) * e, r[1] + (o[1] - r[1]) * e, r[2] + (o[2] - r[2]) * e];
        },
      },
      {
        key: "setCoordinate",
        value: function (r, e, o, n) {
          var s = a.intercept(r[n], e, o[n]);
          return a.lerpPoint(r, s, o);
        },
      },
      {
        key: "isBounded",
        value: function (r) {
          return 0 <= r && r <= 100;
        },
      },
      {
        key: "nthVertex",
        value: function (r, e) {
          var o = a.Y_FROM_LINRGB[0],
            n = a.Y_FROM_LINRGB[1],
            s = a.Y_FROM_LINRGB[2],
            u = e % 4 <= 1 ? 0 : 100,
            c = e % 2 === 0 ? 0 : 100;
          if (e < 4) {
            var l = u,
              v = c,
              h = (r - l * n - v * s) / o;
            return a.isBounded(h) ? [h, l, v] : [-1, -1, -1];
          } else if (e < 8) {
            var d = u,
              i = c,
              k = (r - i * o - d * s) / n;
            return a.isBounded(k) ? [i, k, d] : [-1, -1, -1];
          } else {
            var f = u,
              b = c,
              m = (r - f * o - b * n) / s;
            return a.isBounded(m) ? [f, b, m] : [-1, -1, -1];
          }
        },
      },
      {
        key: "bisectToSegment",
        value: function (r, e) {
          for (var o = [-1, -1, -1], n = o, s = 0, u = 0, c = !1, l = !0, v = 0; v < 12; v++) {
            var h = a.nthVertex(r, v);
            if (!(h[0] < 0)) {
              var d = a.hueOf(h);
              if (!c) {
                ((o = h), (n = h), (s = d), (u = d), (c = !0));
                continue;
              }
              (l || a.areInCyclicOrder(s, d, u)) &&
                ((l = !1), a.areInCyclicOrder(s, e, d) ? ((n = h), (u = d)) : ((o = h), (s = d)));
            }
          }
          return [o, n];
        },
      },
      {
        key: "midpoint",
        value: function (r, e) {
          return [(r[0] + e[0]) / 2, (r[1] + e[1]) / 2, (r[2] + e[2]) / 2];
        },
      },
      {
        key: "criticalPlaneBelow",
        value: function (r) {
          return Math.floor(r - 0.5);
        },
      },
      {
        key: "criticalPlaneAbove",
        value: function (r) {
          return Math.ceil(r - 0.5);
        },
      },
      {
        key: "bisectToLimit",
        value: function (r, e) {
          for (
            var o = a.bisectToSegment(r, e), n = o[0], s = a.hueOf(n), u = o[1], c = 0;
            c < 3;
            c++
          )
            if (n[c] !== u[c]) {
              var l = -1,
                v = 255;
              n[c] < u[c]
                ? ((l = a.criticalPlaneBelow(a.trueDelinearized(n[c]))),
                  (v = a.criticalPlaneAbove(a.trueDelinearized(u[c]))))
                : ((l = a.criticalPlaneAbove(a.trueDelinearized(n[c]))),
                  (v = a.criticalPlaneBelow(a.trueDelinearized(u[c]))));
              for (var h = 0; h < 8 && !(Math.abs(v - l) <= 1); h++) {
                var d = Math.floor((l + v) / 2),
                  i = a.CRITICAL_PLANES[d],
                  k = a.setCoordinate(n, i, u, c),
                  f = a.hueOf(k);
                a.areInCyclicOrder(s, e, f) ? ((u = k), (v = d)) : ((n = k), (s = f), (l = d));
              }
            }
          return a.midpoint(n, u);
        },
      },
      {
        key: "inverseChromaticAdaptation",
        value: function (r) {
          var e = Math.abs(r),
            o = Math.max(0, (27.13 * e) / (400 - e));
          return R(r) * Math.pow(o, 1 / 0.42);
        },
      },
      {
        key: "findResultByJ",
        value: function (r, e, o) {
          for (
            var n = Math.sqrt(o) * 11,
              s = z.DEFAULT,
              u = 1 / Math.pow(1.64 - Math.pow(0.29, s.n), 0.73),
              c = 0.25 * (Math.cos(r + 2) + 3.8),
              l = c * (5e4 / 13) * s.nc * s.ncb,
              v = Math.sin(r),
              h = Math.cos(r),
              d = 0;
            d < 5;
            d++
          ) {
            var i = n / 100,
              k = e === 0 || n === 0 ? 0 : e / Math.sqrt(i),
              f = Math.pow(k * u, 1 / 0.9),
              b = s.aw * Math.pow(i, 1 / s.c / s.z),
              m = b / s.nbb,
              F = (23 * (m + 0.305) * f) / (23 * l + 11 * f * h + 108 * f * v),
              p = F * h,
              g = F * v,
              D = (460 * m + 451 * p + 288 * g) / 1403,
              C = (460 * m - 891 * p - 261 * g) / 1403,
              T = (460 * m - 220 * p - 6300 * g) / 1403,
              M = a.inverseChromaticAdaptation(D),
              I = a.inverseChromaticAdaptation(C),
              A = a.inverseChromaticAdaptation(T),
              y = r0([M, I, A], a.LINRGB_FROM_SCALED_DISCOUNT);
            if (y[0] < 0 || y[1] < 0 || y[2] < 0) return 0;
            var E = a.Y_FROM_LINRGB[0],
              B = a.Y_FROM_LINRGB[1],
              L = a.Y_FROM_LINRGB[2],
              O = E * y[0] + B * y[1] + L * y[2];
            if (O <= 0) return 0;
            if (d === 4 || Math.abs(O - o) < 0.002)
              return y[0] > 100.01 || y[1] > 100.01 || y[2] > 100.01 ? 0 : f0(y);
            n = n - ((O - o) * n) / (2 * O);
          }
          return 0;
        },
      },
      {
        key: "solveToInt",
        value: function (r, e, o) {
          if (e < 1e-4 || o < 1e-4 || o > 99.9999) return K0(o);
          r = x0(r);
          var n = (r / 180) * Math.PI,
            s = S(o),
            u = a.findResultByJ(n, e, s);
          if (u !== 0) return u;
          var c = a.bisectToLimit(s, n);
          return f0(c);
        },
      },
      {
        key: "solveToCam",
        value: function (r, e, o) {
          return j.fromInt(a.solveToInt(r, e, o));
        },
      },
    ]);
  })();
U(V, "SCALED_DISCOUNT_FROM_LINRGB", [
  [0.001200833568784504, 0.002389694492170889, 0.0002795742885861124],
  [0.0005891086651375999, 0.0029785502573438758, 0.0003270666104008398],
  [0.00010146692491640572, 0.0005364214359186694, 0.0032979401770712076],
]);
U(V, "LINRGB_FROM_SCALED_DISCOUNT", [
  [1373.2198709594231, -1100.4251190754821, -7.278681089101213],
  [-271.815969077903, 559.6580465940733, -32.46047482791194],
  [1.9622899599665666, -57.173814538844006, 308.7233197812385],
]);
U(V, "Y_FROM_LINRGB", [0.2126, 0.7152, 0.0722]);
U(
  V,
  "CRITICAL_PLANES",
  [
    0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313,
    0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281,
    0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123,
    0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023,
    0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623,
    0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609,
    1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128,
    1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415,
    1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377,
    1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234,
    2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764,
    2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907,
    3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946,
    3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289,
    4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298,
    5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294,
    5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461,
    6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665,
    7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703,
    8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503,
    9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681,
    11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341,
    12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942,
    13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513,
    14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273,
    15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304,
    16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332,
    18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692,
    19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977,
    21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328,
    22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083,
    24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342,
    26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522,
    28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845,
    30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785,
    32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834,
    34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349,
    36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785,
    39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194,
    42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697,
    44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916,
    47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408,
    50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392,
    53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934,
    56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365,
    59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894,
    62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529,
    66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093,
    69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172,
    73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146,
    77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869,
    81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372,
    85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277,
    89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491,
    93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159,
    97.78421388448044, 98.6670533535366, 99.55452497210776,
  ],
);
var z = (function () {
  function a(t, r, e, o, n, s, u, c, l, v) {
    (N(this, a),
      (this.n = t),
      (this.aw = r),
      (this.nbb = e),
      (this.ncb = o),
      (this.c = n),
      (this.nc = s),
      (this.rgbD = u),
      (this.fl = c),
      (this.fLRoot = l),
      (this.z = v));
  }
  return q(a, null, [
    {
      key: "make",
      value: function () {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Q0(),
          e =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : ((200 / Math.PI) * S(50)) / 100,
          o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 50,
          n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 2,
          s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
          u = r,
          c = u[0] * 0.401288 + u[1] * 0.650173 + u[2] * -0.051461,
          l = u[0] * -0.250268 + u[1] * 1.204414 + u[2] * 0.045854,
          v = u[0] * -0.002079 + u[1] * 0.048952 + u[2] * 0.953127,
          h = 0.8 + n / 10,
          d = h >= 0.9 ? d0(0.59, 0.69, (h - 0.9) * 10) : d0(0.525, 0.59, (h - 0.8) * 10),
          i = s ? 1 : h * (1 - (1 / 3.6) * Math.exp((-e - 42) / 92));
        i = i > 1 ? 1 : i < 0 ? 0 : i;
        var k = h,
          f = [i * (100 / c) + 1 - i, i * (100 / l) + 1 - i, i * (100 / v) + 1 - i],
          b = 1 / (5 * e + 1),
          m = b * b * b * b,
          F = 1 - m,
          p = m * e + 0.1 * F * F * Math.cbrt(5 * e),
          g = S(o) / r[1],
          D = 1.48 + Math.sqrt(g),
          C = 0.725 / Math.pow(g, 0.2),
          T = C,
          M = [
            Math.pow((p * f[0] * c) / 100, 0.42),
            Math.pow((p * f[1] * l) / 100, 0.42),
            Math.pow((p * f[2] * v) / 100, 0.42),
          ],
          I = [
            (400 * M[0]) / (M[0] + 27.13),
            (400 * M[1]) / (M[1] + 27.13),
            (400 * M[2]) / (M[2] + 27.13),
          ],
          A = (2 * I[0] + I[1] + 0.05 * I[2]) * C;
        return new a(g, A, C, T, d, k, f, p, Math.pow(p, 0.25), D);
      },
    },
  ]);
})();
C0 = z;
U(z, "DEFAULT", C0.make());
var tr = (function () {
  function a() {
    N(this, a);
  }
  return q(a, null, [
    {
      key: "ratioOfTones",
      value: function (r, e) {
        return ((r = i0(0, 100, r)), (e = i0(0, 100, e)), a.ratioOfYs(S(r), S(e)));
      },
    },
    {
      key: "ratioOfYs",
      value: function (r, e) {
        var o = r > e ? r : e,
          n = o === e ? r : e;
        return (o + 5) / (n + 5);
      },
    },
    {
      key: "lighter",
      value: function (r, e) {
        if (r < 0 || r > 100) return -1;
        var o = S(r),
          n = e * (o + 5) - 5,
          s = a.ratioOfYs(n, o),
          u = Math.abs(s - e);
        if (s < e && u > 0.04) return -1;
        var c = a0(n) + 0.4;
        return c < 0 || c > 100 ? -1 : c;
      },
    },
    {
      key: "darker",
      value: function (r, e) {
        if (r < 0 || r > 100) return -1;
        var o = S(r),
          n = (o + 5) / e - 5,
          s = a.ratioOfYs(o, n),
          u = Math.abs(s - e);
        if (s < e && u > 0.04) return -1;
        var c = a0(n) - 0.4;
        return c < 0 || c > 100 ? -1 : c;
      },
    },
    {
      key: "lighterUnsafe",
      value: function (r, e) {
        var o = a.lighter(r, e);
        return o < 0 ? 100 : o;
      },
    },
    {
      key: "darkerUnsafe",
      value: function (r, e) {
        var o = a.darker(r, e);
        return o < 0 ? 0 : o;
      },
    },
  ]);
})();
function m0(a, t) {
  var r = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(a);
    (t &&
      (e = e.filter(function (o) {
        return Object.getOwnPropertyDescriptor(a, o).enumerable;
      })),
      r.push.apply(r, e));
  }
  return r;
}
function M0(a) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? m0(Object(r), !0).forEach(function (e) {
          U(a, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r))
        : m0(Object(r)).forEach(function (e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(r, e));
          });
  }
  return a;
}
var or = [1.12, 1.33, 2.03, 2.73, 3.33, 4.27, 5.2, 6.62, 12.46, 14.25],
  nr = [1.08, 1.24, 1.55, 1.99, 2.45, 3.34, 4.64, 6.1, 10.19, 12.6],
  A0 = function (t, r) {
    var e = 0,
      o = null;
    return (
      t.forEach(function (n, s) {
        var u = V0(u0(n), u0(r));
        (o === null || u < o) && ((e = s), (o = u));
      }),
      e
    );
  },
  t0 = function (t) {
    var r = E0(t)[0],
      e = w0(r, 100, 60),
      o = z0(e[0], e[1], e[2]) < 0.4,
      n = o ? or : nr,
      s = B0(t),
      u = k0.fromInt(ar({ r: s[0], g: s[1], b: s[2], a: s[3] })),
      c = n.map(function (h) {
        var d = rr(k0.from(u.hue, u.chroma, tr.darker(100, h) + 0.25).toInt());
        return _0(d.r, d.g, d.b);
      }),
      l = A0(c, t),
      v = S0(c);
    return ((v[l] = t), { ramp: v, replacedColor: c[l] });
  };
function p0(a, t, r) {
  for (var e = [], o = 1; o <= t; o++)
    a + o < r.length ? e.push(a + o) : e.push(a - (o - (r.length - 1 - a)));
  return e;
}
var cr = function (t, r, e) {
    var o = t0(t),
      n = o.ramp,
      s = o.replacedColor,
      u = e || n,
      c = A0(u, t),
      l = {},
      v = {},
      h = Q(t, "#FFFFFF");
    if (h >= 4.5) {
      var d = p0(c, 2, u),
        i = X(d, 2),
        k = i[0],
        f = i[1],
        b = c;
      h < 5.4 && h >= 4.8 && c === 6 && (b = c + 1);
      var m = p0(b, 1, u),
        F = X(m, 1),
        p = F[0];
      l = {
        "color.text.brand": b,
        "color.icon.brand": c,
        "color.background.brand.subtlest": 0,
        "color.background.brand.subtlest.hovered": 1,
        "color.background.brand.subtlest.pressed": 2,
        "color.background.brand.bold": c,
        "color.background.brand.bold.hovered": k,
        "color.background.brand.bold.pressed": f,
        "color.background.brand.boldest": 9,
        "color.background.brand.boldest.hovered": 8,
        "color.background.brand.boldest.pressed": 7,
        "color.border.brand": c,
        "color.text.selected": b,
        "color.icon.selected": c,
        "color.background.selected.bold": c,
        "color.background.selected.bold.hovered": k,
        "color.background.selected.bold.pressed": f,
        "color.border.selected": c,
        "color.link": b,
        "color.link.pressed": p,
        "color.chart.brand": 5,
        "color.chart.brand.hovered": 6,
        "color.background.selected": 0,
        "color.background.selected.hovered": 1,
        "color.background.selected.pressed": 2,
      };
    } else {
      var g = 6;
      (h < 4.5 && h >= 4 && c === 6 && (g = s),
        (l = {
          "color.background.brand.subtlest": 0,
          "color.background.brand.subtlest.hovered": 1,
          "color.background.brand.subtlest.pressed": 2,
          "color.background.brand.bold": g,
          "color.background.brand.bold.hovered": 7,
          "color.background.brand.bold.pressed": 8,
          "color.background.brand.boldest": 9,
          "color.background.brand.boldest.hovered": 8,
          "color.background.brand.boldest.pressed": 7,
          "color.border.brand": 6,
          "color.background.selected.bold": g,
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
    if (r === "light") return { light: l };
    if (
      (Object.entries(l).forEach(function (C) {
        var T = X(C, 2),
          M = T[0],
          I = T[1];
        v[M] = 9 - (typeof I == "string" ? c : I);
      }),
      h < 4.5)
    ) {
      var D = g0["color.text.inverse"];
      Q(D, t) >= 4.5 &&
        c >= 2 &&
        ((v["color.background.brand.bold"] = c),
        (v["color.background.brand.bold.hovered"] = c - 1),
        (v["color.background.brand.bold.pressed"] = c - 2));
    }
    return r === "dark" ? { dark: v } : { light: l, dark: v };
  },
  ur = function (t, r, e) {
    var o = e || t0(t).ramp,
      n = cr(t, r, o),
      s = {};
    return (
      Object.entries(n).forEach(function (u) {
        var c = X(u, 2),
          l = c[0],
          v = c[1];
        (l === "light" || l === "dark") &&
          (s[l] = M0(M0({}, v), H0({ customThemeTokenMap: v, mode: l, themeRamp: o })));
      }),
      s
    );
  },
  sr = 10;
function lr(a) {
  var t,
    r = a == null || (t = a.UNSAFE_themeOptions) === null || t === void 0 ? void 0 : t.brandColor,
    e = a?.colorMode || P0.colorMode,
    o = JSON.stringify(a?.UNSAFE_themeOptions),
    n = U0(o),
    s = t0(r).ramp,
    u = [],
    c = ur(r, e, s);
  return (
    (e === "light" || e === "auto") &&
      c.light &&
      u.push({
        id: "light",
        attrs: { "data-theme": "light", "data-custom-theme": n },
        css: `
html[`
          .concat(s0, '="')
          .concat(n, '"][')
          .concat(
            l0,
            `="light"][data-theme~="light:light"] {
  /* Branded tokens */
    `,
          )
          .concat(
            v0(c.light, s),
            `
}`,
          ),
      }),
    (e === "dark" || e === "auto") &&
      c.dark &&
      u.push({
        id: "dark",
        attrs: { "data-theme": "dark", "data-custom-theme": n },
        css: `
html[`
          .concat(s0, '="')
          .concat(n, '"][')
          .concat(
            l0,
            `="dark"][data-theme~="dark:dark"] {
  /* Branded tokens */
    `,
          )
          .concat(
            v0(c.dark, s),
            `
}`,
          ),
      }),
    u
  );
}
function fr(a) {
  var t = lr(a);
  (j0(sr),
    t.map(function (r) {
      var e = document.createElement("style");
      (document.head.appendChild(e),
        (e.dataset.theme = r.attrs["data-theme"]),
        (e.dataset.customTheme = r.attrs["data-custom-theme"]),
        (e.textContent = r.css));
    }));
}
export {
  sr as CUSTOM_STYLE_ELEMENTS_SIZE_THRESHOLD,
  lr as getCustomThemeStyles,
  fr as loadAndAppendCustomThemeCss,
};
