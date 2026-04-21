import { t as e } from "./rolldown-runtime-BYbx6iT9.js";
var t = e((e, t) => {
    (console.info(`
IFRAME-RESIZER

Iframe-Resizer 5 is now available via the following two packages:

 * @iframe-resizer/parent
 * @iframe-resizer/child

Additionally their are also new versions of iframe-resizer for React, Vue, and jQuery.

Version 5 of iframe-resizer has been extensively rewritten to use modern browser APIs, which has enabled significantly better performance and greater accuracy in the detection of content resizing events.

Please see https://iframe-resizer.com/upgrade for more details.
`),
      (function (e) {
        if (typeof window > `u`) return;
        var n = 0,
          r,
          i = !1,
          a = !1,
          o = 7,
          s = `[iFrameSizer]`,
          c = s.length,
          l = null,
          u = window.requestAnimationFrame,
          d = Object.freeze({ max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 }),
          f = {},
          p = null,
          m = Object.freeze({
            autoResize: !0,
            bodyBackground: null,
            bodyMargin: null,
            bodyMarginV1: 8,
            bodyPadding: null,
            checkOrigin: !0,
            inPageLinks: !1,
            enablePublicMethods: !0,
            heightCalculationMethod: `bodyOffset`,
            id: `iFrameResizer`,
            interval: 32,
            license: `1jqr0si6pnt`,
            log: !1,
            maxHeight: 1 / 0,
            maxWidth: 1 / 0,
            minHeight: 0,
            minWidth: 0,
            mouseEvents: !0,
            resizeFrom: `parent`,
            scrolling: !1,
            sizeHeight: !0,
            sizeWidth: !1,
            warningTimeout: 5e3,
            tolerance: 0,
            widthCalculationMethod: `scroll`,
            onClose: function () {
              return !0;
            },
            onClosed: function () {},
            onInit: function () {},
            onMessage: function () {
              C(`onMessage function not defined`);
            },
            onMouseEnter: function () {},
            onMouseLeave: function () {},
            onResized: function () {},
            onScroll: function () {
              return !0;
            },
          });
        function h() {
          return (
            window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
          );
        }
        function g(e, t, n) {
          e.addEventListener(t, n, !1);
        }
        function ee(e, t, n) {
          e.removeEventListener(t, n, !1);
        }
        function _() {
          var e = [`moz`, `webkit`, `o`, `ms`],
            t;
          for (t = 0; t < e.length && !u; t += 1) u = window[e[t] + `RequestAnimationFrame`];
          u ? (u = u.bind(window)) : x(`setup`, `RequestAnimationFrame not supported`);
        }
        function v(e) {
          var t = `Host page: ` + e;
          return (
            window.top !== window.self &&
              (t =
                window.parentIFrame && window.parentIFrame.getId
                  ? window.parentIFrame.getId() + `: ` + e
                  : `Nested host page: ` + e),
            t
          );
        }
        function y(e) {
          return s + `[` + v(e) + `]`;
        }
        function b(e) {
          return f[e] ? f[e].log : i;
        }
        function x(e, t) {
          w(`log`, e, t, b(e));
        }
        function S(e, t) {
          w(`info`, e, t, b(e));
        }
        function C(e, t) {
          w(`warn`, e, t, !0);
        }
        function w(e, t, n, r) {
          !0 === r && typeof window.console == `object` && console[e](y(t), n);
        }
        function T(e) {
          function t() {
            function e() {
              (M(G), A(K), R(`onResized`, G));
            }
            (a(`Height`), a(`Width`), N(e, G, `init`));
          }
          function n() {
            var e = W.slice(c).split(`:`),
              t = e[1] ? parseInt(e[1], 10) : 0,
              n = f[e[0]] && f[e[0]].iframe,
              a = getComputedStyle(n);
            return { iframe: n, id: e[0], height: t + r(a) + i(a), width: e[2], type: e[3] };
          }
          function r(e) {
            return e.boxSizing === `border-box`
              ? (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) +
                  (e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0)
              : 0;
          }
          function i(e) {
            return e.boxSizing === `border-box`
              ? (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) +
                  (e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0)
              : 0;
          }
          function a(e) {
            var t = Number(f[K][`max` + e]),
              n = Number(f[K][`min` + e]),
              r = e.toLowerCase(),
              i = Number(G[r]);
            (x(K, `Checking ` + r + ` is in range ` + n + `-` + t),
              i < n && ((i = n), x(K, `Set ` + r + ` to min value`)),
              i > t && ((i = t), x(K, `Set ` + r + ` to max value`)),
              (G[r] = `` + i));
          }
          function u() {
            function t() {
              function e() {
                var e = 0,
                  t = !1;
                for (
                  x(K, `Checking connection is from allowed list of origins: ` + r);
                  e < r.length;
                  e++
                )
                  if (r[e] === n) {
                    t = !0;
                    break;
                  }
                return t;
              }
              function t() {
                var e = f[K] && f[K].remoteHost;
                return (x(K, `Checking connection is from: ` + e), n === e);
              }
              return r.constructor === Array ? e() : t();
            }
            var n = e.origin,
              r = f[K] && f[K].checkOrigin;
            if (r && `` + n != `null` && !t())
              throw Error(
                `Unexpected message received from: ` +
                  n +
                  ` for ` +
                  G.iframe.id +
                  `. Message was: ` +
                  e.data +
                  `. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`,
              );
            return !0;
          }
          function d() {
            return s === (`` + W).slice(0, c) && W.slice(c).split(`:`)[0] in f;
          }
          function p() {
            var e = G.type in { true: 1, false: 1, undefined: 1 };
            return (e && x(K, `Ignoring init message from meta parent page`), e);
          }
          function m(e) {
            return W.slice(W.indexOf(`:`) + o + e);
          }
          function h(e) {
            (x(K, `onMessage passed: {iframe: ` + G.iframe.id + `, message: ` + e + `}`),
              R(`onMessage`, { iframe: G.iframe, message: JSON.parse(e) }),
              x(K, `--`));
          }
          function _() {
            var e = document.body.getBoundingClientRect(),
              t = G.iframe.getBoundingClientRect();
            return JSON.stringify({
              iframeHeight: t.height,
              iframeWidth: t.width,
              clientHeight: Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0,
              ),
              clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
              offsetTop: parseInt(t.top - e.top, 10),
              offsetLeft: parseInt(t.left - e.left, 10),
              scrollTop: window.pageYOffset,
              scrollLeft: window.pageXOffset,
              documentHeight: document.documentElement.clientHeight,
              documentWidth: document.documentElement.clientWidth,
              windowHeight: window.innerHeight,
              windowWidth: window.innerWidth,
            });
          }
          function v(e, t) {
            function n() {
              P(`Send Page Info`, `pageInfo:` + _(), e, t);
            }
            z(n, 32, t);
          }
          function y() {
            function e(e, n) {
              function i() {
                f[r] ? v(f[r].iframe, r) : t();
              }
              [`scroll`, `resize`].forEach(function (t) {
                (x(r, e + t + ` listener for sendPageInfo`), n(window, t, i));
              });
            }
            function t() {
              e(`Remove `, ee);
            }
            function n() {
              e(`Add `, g);
            }
            var r = K;
            (n(), f[r] && (f[r].stopPageInfo = t));
          }
          function b() {
            f[K] && f[K].stopPageInfo && (f[K].stopPageInfo(), delete f[K].stopPageInfo);
          }
          function w() {
            var e = !0;
            return (G.iframe === null && (C(K, `IFrame (` + G.id + `) not found`), (e = !1)), e);
          }
          function T(e) {
            var t = e.getBoundingClientRect();
            return (
              k(K),
              {
                x: Math.floor(Number(t.left) + Number(l.x)),
                y: Math.floor(Number(t.top) + Number(l.y)),
              }
            );
          }
          function D(e) {
            function t() {
              ((l = a), ne(), x(K, `--`));
            }
            function n() {
              return { x: Number(G.width) + i.x, y: Number(G.height) + i.y };
            }
            function r() {
              window.parentIFrame
                ? window.parentIFrame[`scrollTo` + (e ? `Offset` : ``)](a.x, a.y)
                : C(K, `Unable to scroll to requested position, window.parentIFrame not found`);
            }
            var i = e ? T(G.iframe) : { x: 0, y: 0 },
              a = n();
            (x(K, `Reposition requested from iFrame (offset x:` + i.x + ` y:` + i.y + `)`),
              window.top === window.self ? t() : r());
          }
          function ne() {
            !1 === R(`onScroll`, l) ? j() : A(K);
          }
          function I(e) {
            function t() {
              var e = T(a);
              (x(K, `Moving to in page link (#` + r + `) at x: ` + e.x + ` y: ` + e.y),
                (l = { x: e.x, y: e.y }),
                ne(),
                x(K, `--`));
            }
            function n() {
              window.parentIFrame
                ? window.parentIFrame.moveToAnchor(r)
                : x(K, `In page link #` + r + ` not found and window.parentIFrame not found`);
            }
            var r = e.split(`#`)[1] || ``,
              i = decodeURIComponent(r),
              a = document.getElementById(i) || document.getElementsByName(i)[0];
            a ? t() : window.top === window.self ? x(K, `In page link #` + r + ` not found`) : n();
          }
          function L(e) {
            var t = {};
            if (Number(G.width) === 0 && Number(G.height) === 0) {
              var n = m(9).split(`:`);
              t = { x: n[1], y: n[0] };
            } else t = { x: G.width, y: G.height };
            R(e, { iframe: G.iframe, screenX: Number(t.x), screenY: Number(t.y), type: G.type });
          }
          function R(e, t) {
            return E(K, e, t);
          }
          function B() {
            switch ((f[K] && f[K].firstRun && U(), G.type)) {
              case `close`:
                O(G.iframe);
                break;
              case `message`:
                h(m(6));
                break;
              case `mouseenter`:
                L(`onMouseEnter`);
                break;
              case `mouseleave`:
                L(`onMouseLeave`);
                break;
              case `autoResize`:
                f[K].autoResize = JSON.parse(m(9));
                break;
              case `scrollTo`:
                D(!1);
                break;
              case `scrollToOffset`:
                D(!0);
                break;
              case `pageInfo`:
                (v(f[K] && f[K].iframe, K), y());
                break;
              case `pageInfoStop`:
                b();
                break;
              case `inPageLink`:
                I(m(9));
                break;
              case `reset`:
                te(G);
                break;
              case `init`:
                (t(), R(`onInit`, G.iframe));
                break;
              default:
                Number(G.width) === 0 && Number(G.height) === 0
                  ? C(
                      `Unsupported message received (` +
                        G.type +
                        `), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`,
                    )
                  : t();
            }
          }
          function V(e) {
            var t = !0;
            return (
              f[e] || ((t = !1), C(G.type + ` No settings for ` + e + `. Message was: ` + W)),
              t
            );
          }
          function H() {
            for (var e in f) P(`iFrame requested init`, F(e), f[e].iframe, e);
          }
          function U() {
            f[K] && (f[K].firstRun = !1);
          }
          var W = e.data,
            G = {},
            K = null;
          W === `[iFrameResizerChild]Ready`
            ? H()
            : d()
              ? ((G = n()),
                (K = G.id),
                f[K] && (f[K].loaded = !0),
                !p() && V(K) && (x(K, `Received: ` + W), w() && u() && B()))
              : S(K, `Ignored: ` + W);
        }
        function E(e, t, n) {
          var r = null,
            i = null;
          if (f[e])
            if (((r = f[e][t]), typeof r == `function`)) i = r(n);
            else throw TypeError(t + ` on iFrame[` + e + `] is not a function`);
          return i;
        }
        function D(e) {
          var t = e.id;
          delete f[t];
        }
        function O(e) {
          var t = e.id;
          if (E(t, `onClose`, t) === !1) {
            x(t, `Close iframe cancelled by onClose event`);
            return;
          }
          x(t, `Removing iFrame: ` + t);
          try {
            e.parentNode && e.parentNode.removeChild(e);
          } catch (e) {
            C(e);
          }
          (E(t, `onClosed`, t), x(t, `--`), D(e), (r &&= (r.disconnect(), null)));
        }
        function k(t) {
          l === null &&
            ((l = {
              x:
                window.pageXOffset === e ? document.documentElement.scrollLeft : window.pageXOffset,
              y: window.pageYOffset === e ? document.documentElement.scrollTop : window.pageYOffset,
            }),
            x(t, `Get page position: ` + l.x + `,` + l.y));
        }
        function A(e) {
          l !== null &&
            (window.scrollTo(l.x, l.y), x(e, `Set page position: ` + l.x + `,` + l.y), j());
        }
        function j() {
          l = null;
        }
        function te(e) {
          function t() {
            (M(e), P(`reset`, `reset`, e.iframe, e.id));
          }
          (x(e.id, `Size reset requested by ` + (e.type === `init` ? `host page` : `iFrame`)),
            k(e.id),
            N(t, e, `reset`));
        }
        function M(e) {
          function t(t) {
            if (!e.id) {
              x(`undefined`, `messageData id not set`);
              return;
            }
            ((e.iframe.style[t] = e[t] + `px`),
              x(e.id, `IFrame (` + i + `) ` + t + ` set to ` + e[t] + `px`));
          }
          function n(t) {
            !a &&
              e[t] === `0` &&
              ((a = !0), x(i, `Hidden iFrame detected, creating visibility listener`), B());
          }
          function r(e) {
            (t(e), n(e));
          }
          var i = e.iframe.id;
          f[i] && (f[i].sizeHeight && r(`height`), f[i].sizeWidth && r(`width`));
        }
        function N(e, t, n) {
          n !== t.type && u && !window.jasmine
            ? (x(t.id, `Requesting animation frame`), u(e))
            : e();
        }
        function P(e, t, n, r, i) {
          function a() {
            var i = f[r] && f[r].targetOrigin;
            (x(r, `[` + e + `] Sending msg to iframe[` + r + `] (` + t + `) targetOrigin: ` + i),
              n.contentWindow.postMessage(s + t, i));
          }
          function o() {
            C(r, `[` + e + `] IFrame(` + r + `) not found`);
          }
          function c() {
            n && `contentWindow` in n && n.contentWindow !== null ? a() : o();
          }
          function l() {
            function e() {
              f[r] &&
                !f[r].loaded &&
                !u &&
                ((u = !0),
                C(
                  r,
                  `IFrame has not responded within ` +
                    f[r].warningTimeout / 1e3 +
                    ` seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning.`,
                ));
            }
            i &&
              f[r] &&
              f[r].warningTimeout &&
              (f[r].msgTimeout = setTimeout(e, f[r].warningTimeout));
          }
          var u = !1;
          ((r ||= n.id), f[r] && (c(), l()));
        }
        function F(e) {
          return (
            e +
            `:` +
            f[e].bodyMarginV1 +
            `:` +
            f[e].sizeWidth +
            `:` +
            f[e].log +
            `:` +
            f[e].interval +
            `:` +
            f[e].enablePublicMethods +
            `:` +
            f[e].autoResize +
            `:` +
            f[e].bodyMargin +
            `:` +
            f[e].heightCalculationMethod +
            `:` +
            f[e].bodyBackground +
            `:` +
            f[e].bodyPadding +
            `:` +
            f[e].tolerance +
            `:` +
            f[e].inPageLinks +
            `:` +
            f[e].resizeFrom +
            `:` +
            f[e].widthCalculationMethod +
            `:` +
            f[e].mouseEvents
          );
        }
        function ne(e) {
          return typeof e == `number`;
        }
        function I(t, a) {
          function o() {
            function e(e) {
              var n = f[E][e];
              n !== 1 / 0 &&
                n !== 0 &&
                ((t.style[e] = ne(n) ? n + `px` : n), x(E, `Set ` + e + ` = ` + t.style[e]));
            }
            function n(e) {
              if (f[E][`min` + e] > f[E][`max` + e])
                throw Error(`Value for min` + e + ` can not be greater than max` + e);
            }
            (n(`Height`), n(`Width`), e(`maxHeight`), e(`minHeight`), e(`maxWidth`), e(`minWidth`));
          }
          function s() {
            var e = (a && a.id) || m.id + n++;
            return (document.getElementById(e) !== null && (e += n++), e);
          }
          function c(e) {
            if (typeof e != `string`) throw TypeError(`Invaild id for iFrame. Expected String`);
            return (
              e === `` &&
                ((t.id = e = s()),
                (i = (a || {}).log),
                x(e, `Added missing iframe ID: ` + e + ` (` + t.src + `)`)),
              e
            );
          }
          function l() {
            switch (
              (x(
                E,
                `IFrame scrolling ` +
                  (f[E] && f[E].scrolling ? `enabled` : `disabled`) +
                  ` for ` +
                  E,
              ),
              (t.style.overflow = !1 === (f[E] && f[E].scrolling) ? `hidden` : `auto`),
              f[E] && f[E].scrolling)
            ) {
              case `omit`:
                break;
              case !0:
                t.scrolling = `yes`;
                break;
              case !1:
                t.scrolling = `no`;
                break;
              default:
                t.scrolling = f[E] ? f[E].scrolling : `no`;
            }
          }
          function u() {
            (typeof (f[E] && f[E].bodyMargin) == `number` || (f[E] && f[E].bodyMargin) === `0`) &&
              ((f[E].bodyMarginV1 = f[E].bodyMargin),
              (f[E].bodyMargin = `` + f[E].bodyMargin + `px`));
          }
          function p() {
            var e = f[E] && f[E].firstRun,
              n = f[E] && f[E].heightCalculationMethod in d;
            !e && n && te({ iframe: t, height: 0, width: 0, type: `init` });
          }
          function ee() {
            f[E] &&
              (f[E].iframe.iFrameResizer = {
                close: O.bind(null, f[E].iframe),
                removeListeners: D.bind(null, f[E].iframe),
                resize: P.bind(null, `Window resize`, `resize`, f[E].iframe),
                moveToAnchor: function (e) {
                  P(`Move to anchor`, `moveToAnchor:` + e, f[E].iframe, E);
                },
                sendMessage: function (e) {
                  ((e = JSON.stringify(e)), P(`Send Message`, `message:` + e, f[E].iframe, E));
                },
              });
          }
          function _(n) {
            function i() {
              (P(`iFrame.onload`, n, t, e, !0), p());
            }
            function a(e) {
              if (!t.parentNode) return null;
              var n = new e(function (e) {
                e.forEach(function (e) {
                  Array.prototype.slice.call(e.removedNodes).forEach(function (e) {
                    e === t && O(t);
                  });
                });
              });
              return (n.observe(t.parentNode, { childList: !0 }), n);
            }
            var o = h();
            (o && (r = a(o)), g(t, `load`, i), P(`init`, n, t, e, !0));
          }
          function v(e) {
            if (typeof e != `object`) throw TypeError(`Options is not an object`);
          }
          function y(e) {
            for (var t in m)
              Object.prototype.hasOwnProperty.call(m, t) &&
                (f[E][t] = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : m[t]);
          }
          function b(e) {
            return e === `` || e.match(/^(about:blank|javascript:|file:\/\/)/) !== null ? `*` : e;
          }
          function S(e) {
            var t = e.split(`Callback`);
            if (t.length === 2) {
              var n = `on` + t[0].charAt(0).toUpperCase() + t[0].slice(1);
              ((this[n] = this[e]),
                delete this[e],
                C(
                  E,
                  `Deprecated: '` +
                    e +
                    `' has been renamed '` +
                    n +
                    `'. The old method will be removed in the next major version.`,
                ));
            }
          }
          function w(e) {
            ((e ||= {}),
              (f[E] = Object.create(null)),
              (f[E].iframe = t),
              (f[E].firstRun = !0),
              (f[E].remoteHost = t.src && t.src.split(`/`).slice(0, 3).join(`/`)),
              v(e),
              Object.keys(e).forEach(S, e),
              y(e),
              f[E] && (f[E].targetOrigin = !0 === f[E].checkOrigin ? b(f[E].remoteHost) : `*`));
          }
          function T() {
            return E in f && `iFrameResizer` in t;
          }
          var E = c(t.id);
          T() ? C(E, `Ignored iFrame, already setup.`) : (w(a), l(), o(), u(), _(F(E)), ee());
        }
        function L(e, t) {
          p === null &&
            (p = setTimeout(function () {
              ((p = null), e());
            }, t));
        }
        var R = {};
        function z(e, t, n) {
          R[n] ||
            (R[n] = setTimeout(function () {
              ((R[n] = null), e());
            }, t));
        }
        function B() {
          function e() {
            function e(e) {
              function t(t) {
                return (f[e] && f[e].iframe.style[t]) === `0px`;
              }
              function n(e) {
                return e.offsetParent !== null;
              }
              f[e] &&
                n(f[e].iframe) &&
                (t(`height`) || t(`width`)) &&
                P(`Visibility change`, `resize`, f[e].iframe, e);
            }
            Object.keys(f).forEach(function (t) {
              e(t);
            });
          }
          function t(t) {
            (x(`window`, `Mutation observed: ` + t[0].target + ` ` + t[0].type), L(e, 16));
          }
          function n() {
            var e = document.querySelector(`body`);
            new r(t).observe(e, {
              attributes: !0,
              attributeOldValue: !1,
              characterData: !0,
              characterDataOldValue: !1,
              childList: !0,
              subtree: !0,
            });
          }
          var r = h();
          r && n();
        }
        function V(e) {
          function t() {
            U(`Window ` + e, `resize`);
          }
          (x(`window`, `Trigger event: ` + e), L(t, 16));
        }
        function H() {
          function e() {
            U(`Tab Visible`, `resize`);
          }
          document.visibilityState !== `hidden` &&
            (x(`document`, `Trigger event: Visibility change`), L(e, 16));
        }
        function U(e, t) {
          function n(e) {
            return f[e] && f[e].resizeFrom === `parent` && f[e].autoResize && !f[e].firstRun;
          }
          Object.keys(f).forEach(function (r) {
            n(r) && P(e, t, f[r].iframe, r);
          });
        }
        function W() {
          (g(window, `message`, T),
            g(window, `resize`, function () {
              V(`resize`);
            }),
            g(document, `visibilitychange`, H),
            g(document, `-webkit-visibilitychange`, H));
        }
        function G() {
          function t(e, t) {
            function n() {
              if (!t.tagName) throw TypeError(`Object is not a valid DOM element`);
              if (t.tagName.toUpperCase() !== `IFRAME`)
                throw TypeError(`Expected <IFRAME> tag, found <` + t.tagName + `>`);
            }
            t && (n(), I(t, e), r.push(t));
          }
          function n(e) {
            e &&
              e.enablePublicMethods &&
              C(
                `enablePublicMethods option has been removed, public methods are now always available in the iFrame`,
              );
          }
          var r;
          return (
            _(),
            W(),
            function (i, a) {
              switch (((r = []), n(i), typeof a)) {
                case `undefined`:
                case `string`:
                  Array.prototype.forEach.call(
                    document.querySelectorAll(a || `iframe`),
                    t.bind(e, i),
                  );
                  break;
                case `object`:
                  t(i, a);
                  break;
                default:
                  throw TypeError(`Unexpected data type (` + typeof a + `)`);
              }
              return r;
            }
          );
        }
        function K(e) {
          e.fn
            ? e.fn.iFrameResize ||
              (e.fn.iFrameResize = function (e) {
                function t(t, n) {
                  I(n, e);
                }
                return this.filter(`iframe`).each(t).end();
              })
            : S(``, `Unable to bind to jQuery, it is not fully loaded.`);
        }
        (window.jQuery !== e && K(window.jQuery),
          typeof define == `function` && define.amd
            ? define([], G)
            : typeof t == `object` && typeof t.exports == `object` && (t.exports = G()),
          (window.iFrameResize = window.iFrameResize || G()));
      })());
  }),
  n = e((e, t) => {
    (function (e) {
      if (typeof window > `u`) return;
      var n = !0,
        r = 10,
        i = ``,
        a = 0,
        o = ``,
        s = null,
        c = ``,
        l = !1,
        u = { resize: 1, click: 1 },
        d = 128,
        f = !0,
        p = 1,
        m = `bodyOffset`,
        h = m,
        g = !0,
        ee = ``,
        _ = {},
        v = 32,
        y = null,
        b = !1,
        x = !1,
        S = `[iFrameSizer]`,
        C = S.length,
        w = ``,
        T = { max: 1, min: 1, bodyScroll: 1, documentElementScroll: 1 },
        E = `child`,
        D = !0,
        O = window.parent,
        k = `*`,
        A = 0,
        j = !1,
        te = null,
        M = 16,
        N = 1,
        P = `scroll`,
        F = P,
        ne = window,
        I = function () {
          J(`onMessage function not defined`);
        },
        L = function () {},
        R = function () {},
        z = {
          height: function () {
            return (
              J(`Custom height calculation function not defined`),
              document.documentElement.offsetHeight
            );
          },
          width: function () {
            return (J(`Custom width calculation function not defined`), document.body.scrollWidth);
          },
        },
        B = {},
        V = !1;
      function H() {}
      try {
        var U = Object.create(
          {},
          {
            passive: {
              get: function () {
                V = !0;
              },
            },
          },
        );
        (window.addEventListener(`test`, H, U), window.removeEventListener(`test`, H, U));
      } catch {}
      function W(e, t, n, r) {
        e.addEventListener(t, n, V ? r || {} : !1);
      }
      function G(e, t, n) {
        e.removeEventListener(t, n, !1);
      }
      function K(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      function re(e) {
        var t,
          n,
          r,
          i = null,
          a = 0,
          o = function () {
            ((a = Date.now()), (i = null), (r = e.apply(t, n)), i || (t = n = null));
          };
        return function () {
          var s = Date.now();
          a ||= s;
          var c = M - (s - a);
          return (
            (t = this),
            (n = arguments),
            c <= 0 || c > M
              ? ((i &&= (clearTimeout(i), null)), (a = s), (r = e.apply(t, n)), i || (t = n = null))
              : (i ||= setTimeout(o, c)),
            r
          );
        };
      }
      function ie(e) {
        return S + `[` + w + `] ` + e;
      }
      function q(e) {
        b && typeof window.console == `object` && console.log(ie(e));
      }
      function J(e) {
        typeof window.console == `object` && console.warn(ie(e));
      }
      function ae() {
        (oe(),
          q(`Initialising iFrame (` + window.location.href + `)`),
          ce(),
          de(),
          ue(`background`, i),
          ue(`padding`, c),
          be(),
          he(),
          ge(),
          fe(),
          Ce(),
          Se(),
          _e(),
          (_ = xe()),
          Q(`init`, `Init message from host page`),
          L());
      }
      function oe() {
        function t(e) {
          return e === `true`;
        }
        var r = ee.slice(C).split(`:`);
        ((w = r[0]),
          (a = e === r[1] ? a : Number(r[1])),
          (l = e === r[2] ? l : t(r[2])),
          (b = e === r[3] ? b : t(r[3])),
          (v = e === r[4] ? v : Number(r[4])),
          (n = e === r[6] ? n : t(r[6])),
          (o = r[7]),
          (h = e === r[8] ? h : r[8]),
          (i = r[9]),
          (c = r[10]),
          (A = e === r[11] ? A : Number(r[11])),
          (_.enable = e === r[12] ? !1 : t(r[12])),
          (E = e === r[13] ? E : r[13]),
          (F = e === r[14] ? F : r[14]),
          (x = e === r[15] ? x : t(r[15])));
      }
      function se(e) {
        var t = e.split(`Callback`);
        if (t.length === 2) {
          var n = `on` + t[0].charAt(0).toUpperCase() + t[0].slice(1);
          ((this[n] = this[e]),
            delete this[e],
            J(
              `Deprecated: '` +
                e +
                `' has been renamed '` +
                n +
                `'. The old method will be removed in the next major version.`,
            ));
        }
      }
      function ce() {
        function e() {
          var e = window.iFrameResizer;
          (q(`Reading data from page: ` + JSON.stringify(e)),
            Object.keys(e).forEach(se, e),
            (I = `onMessage` in e ? e.onMessage : I),
            (L = `onReady` in e ? e.onReady : L),
            (k = `targetOrigin` in e ? e.targetOrigin : k),
            (h = `heightCalculationMethod` in e ? e.heightCalculationMethod : h),
            (F = `widthCalculationMethod` in e ? e.widthCalculationMethod : F));
        }
        function t(e, t) {
          return (
            typeof e == `function` &&
              (q(`Setup custom ` + t + `CalcMethod`), (z[t] = e), (e = `custom`)),
            e
          );
        }
        (`iFrameResizer` in window &&
          Object === window.iFrameResizer.constructor &&
          (e(), (h = t(h, `height`)), (F = t(F, `width`))),
          q(`TargetOrigin for parent set to: ` + k));
      }
      function le(e, t) {
        return (t.indexOf(`-`) !== -1 && (J(`Negative CSS value ignored for ` + e), (t = ``)), t);
      }
      function ue(t, n) {
        e !== n &&
          n !== `` &&
          n !== `null` &&
          ((document.body.style[t] = n), q(`Body ` + t + ` set to "` + n + `"`));
      }
      function de() {
        (e === o && (o = a + `px`), ue(`margin`, le(`margin`, o)));
      }
      function fe() {
        ((document.documentElement.style.height = ``),
          (document.body.style.height = ``),
          q(`HTML & body height set to "auto"`));
      }
      function Y(e) {
        var t = {
          add: function (t) {
            function n() {
              Q(e.eventName, e.eventType);
            }
            ((B[t] = n), W(window, t, n, { passive: !0 }));
          },
          remove: function (e) {
            var t = B[e];
            (delete B[e], G(window, e, t));
          },
        };
        (e.eventNames && Array.prototype.map
          ? ((e.eventName = e.eventNames[0]), e.eventNames.map(t[e.method]))
          : t[e.method](e.eventName),
          q(K(e.method) + ` event listener: ` + e.eventType));
      }
      function pe(e) {
        (Y({
          method: e,
          eventType: `Animation Start`,
          eventNames: [`animationstart`, `webkitAnimationStart`],
        }),
          Y({
            method: e,
            eventType: `Animation Iteration`,
            eventNames: [`animationiteration`, `webkitAnimationIteration`],
          }),
          Y({
            method: e,
            eventType: `Animation End`,
            eventNames: [`animationend`, `webkitAnimationEnd`],
          }),
          Y({ method: e, eventType: `Input`, eventName: `input` }),
          Y({ method: e, eventType: `Mouse Up`, eventName: `mouseup` }),
          Y({ method: e, eventType: `Mouse Down`, eventName: `mousedown` }),
          Y({ method: e, eventType: `Orientation Change`, eventName: `orientationchange` }),
          Y({ method: e, eventType: `Print`, eventNames: [`afterprint`, `beforeprint`] }),
          Y({ method: e, eventType: `Ready State Change`, eventName: `readystatechange` }),
          Y({ method: e, eventType: `Touch Start`, eventName: `touchstart` }),
          Y({ method: e, eventType: `Touch End`, eventName: `touchend` }),
          Y({ method: e, eventType: `Touch Cancel`, eventName: `touchcancel` }),
          Y({
            method: e,
            eventType: `Transition Start`,
            eventNames: [
              `transitionstart`,
              `webkitTransitionStart`,
              `MSTransitionStart`,
              `oTransitionStart`,
              `otransitionstart`,
            ],
          }),
          Y({
            method: e,
            eventType: `Transition Iteration`,
            eventNames: [
              `transitioniteration`,
              `webkitTransitionIteration`,
              `MSTransitionIteration`,
              `oTransitionIteration`,
              `otransitioniteration`,
            ],
          }),
          Y({
            method: e,
            eventType: `Transition End`,
            eventNames: [
              `transitionend`,
              `webkitTransitionEnd`,
              `MSTransitionEnd`,
              `oTransitionEnd`,
              `otransitionend`,
            ],
          }),
          E === `child` && Y({ method: e, eventType: `IFrame Resized`, eventName: `resize` }));
      }
      function me(e, t, n, r) {
        return (
          t !== e &&
            (e in n || (J(e + ` is not a valid option for ` + r + `CalculationMethod.`), (e = t)),
            q(r + ` calculation method set to "` + e + `"`)),
          e
        );
      }
      function he() {
        h = me(h, m, X, `height`);
      }
      function ge() {
        F = me(F, P, Z, `width`);
      }
      function _e() {
        !0 === n ? (pe(`add`), Ee()) : q(`Auto Resize disabled`);
      }
      function ve() {
        s !== null && s.disconnect();
      }
      function ye() {
        (pe(`remove`), ve(), clearInterval(y));
      }
      function be() {
        var e = document.createElement(`div`);
        ((e.style.clear = `both`),
          (e.style.display = `block`),
          (e.style.height = `0`),
          document.body.appendChild(e));
      }
      function xe() {
        function t() {
          return {
            x: window.pageXOffset === e ? document.documentElement.scrollLeft : window.pageXOffset,
            y: window.pageYOffset === e ? document.documentElement.scrollTop : window.pageYOffset,
          };
        }
        function n(e) {
          var n = e.getBoundingClientRect(),
            r = t();
          return {
            x: parseInt(n.left, 10) + parseInt(r.x, 10),
            y: parseInt(n.top, 10) + parseInt(r.y, 10),
          };
        }
        function r(t) {
          function r(e) {
            var t = n(e);
            (q(`Moving to in page link (#` + i + `) at x: ` + t.x + ` y: ` + t.y),
              $(t.y, t.x, `scrollToOffset`));
          }
          var i = t.split(`#`)[1] || t,
            a = decodeURIComponent(i),
            o = document.getElementById(a) || document.getElementsByName(a)[0];
          e === o
            ? (q(`In page link (#` + i + `) not found in iFrame, so sending to parent`),
              $(0, 0, `inPageLink`, `#` + i))
            : r(o);
        }
        function i() {
          var e = window.location.hash,
            t = window.location.href;
          e !== `` && e !== `#` && r(t);
        }
        function a() {
          function e(e) {
            function t(e) {
              (e.preventDefault(), r(this.getAttribute(`href`)));
            }
            e.getAttribute(`href`) !== `#` && W(e, `click`, t);
          }
          Array.prototype.forEach.call(document.querySelectorAll(`a[href^="#"]`), e);
        }
        function o() {
          W(window, `hashchange`, i);
        }
        function s() {
          setTimeout(i, d);
        }
        function c() {
          Array.prototype.forEach && document.querySelectorAll
            ? (q(`Setting up location.hash handlers`), a(), o(), s())
            : J(
                `In page linking not fully supported in this browser! (See README.md for IE8 workaround)`,
              );
        }
        return (_.enable ? c() : q(`In page linking not enabled`), { findTarget: r });
      }
      function Se() {
        if (x !== !0) return;
        function e(e) {
          $(0, 0, e.type, e.screenY + `:` + e.screenX);
        }
        function t(t, n) {
          (q(`Add event listener: ` + n), W(window.document, t, e));
        }
        (t(`mouseenter`, `Mouse Enter`), t(`mouseleave`, `Mouse Leave`));
      }
      function Ce() {
        (q(`Enable public methods`),
          (ne.parentIFrame = {
            autoResize: function (e) {
              return (
                !0 === e && !1 === n ? ((n = !0), _e()) : !1 === e && !0 === n && ((n = !1), ye()),
                $(0, 0, `autoResize`, JSON.stringify(n)),
                n
              );
            },
            close: function () {
              $(0, 0, `close`);
            },
            getId: function () {
              return w;
            },
            getPageInfo: function (e) {
              typeof e == `function`
                ? ((R = e), $(0, 0, `pageInfo`))
                : ((R = function () {}), $(0, 0, `pageInfoStop`));
            },
            moveToAnchor: function (e) {
              _.findTarget(e);
            },
            reset: function () {
              Le(`parentIFrame.reset`);
            },
            scrollTo: function (e, t) {
              $(t, e, `scrollTo`);
            },
            scrollToOffset: function (e, t) {
              $(t, e, `scrollToOffset`);
            },
            sendMessage: function (e, t) {
              $(0, 0, `message`, JSON.stringify(e), t);
            },
            setHeightCalculationMethod: function (e) {
              ((h = e), he());
            },
            setWidthCalculationMethod: function (e) {
              ((F = e), ge());
            },
            setTargetOrigin: function (e) {
              (q(`Set targetOrigin: ` + e), (k = e));
            },
            size: function (e, t) {
              Q(`size`, `parentIFrame.size(` + (`` + (e || ``) + (t ? `,` + t : ``)) + `)`, e, t);
            },
          }));
      }
      function we() {
        v !== 0 &&
          (q(`setInterval: ` + v + `ms`),
          (y = setInterval(function () {
            Q(`interval`, `setInterval: ` + v);
          }, Math.abs(v))));
      }
      function Te() {
        function e(e) {
          function t(e) {
            !1 === e.complete &&
              (q(`Attach listeners to ` + e.src),
              e.addEventListener(`load`, i, !1),
              e.addEventListener(`error`, a, !1),
              c.push(e));
          }
          e.type === `attributes` && e.attributeName === `src`
            ? t(e.target)
            : e.type === `childList` &&
              Array.prototype.forEach.call(e.target.querySelectorAll(`img`), t);
        }
        function t(e) {
          c.splice(c.indexOf(e), 1);
        }
        function n(e) {
          (q(`Remove listeners from ` + e.src),
            e.removeEventListener(`load`, i, !1),
            e.removeEventListener(`error`, a, !1),
            t(e));
        }
        function r(e, t, r) {
          (n(e.target), Q(t, r + `: ` + e.target.src));
        }
        function i(e) {
          r(e, `imageLoad`, `Image loaded`);
        }
        function a(e) {
          r(e, `imageLoadFailed`, `Image load failed`);
        }
        function o(t) {
          (Q(`mutationObserver`, `mutationObserver: ` + t[0].target + ` ` + t[0].type),
            t.forEach(e));
        }
        function s() {
          var e = document.querySelector(`body`);
          return (
            (u = new l(o)),
            q(`Create body MutationObserver`),
            u.observe(e, {
              attributes: !0,
              attributeOldValue: !1,
              characterData: !0,
              characterDataOldValue: !1,
              childList: !0,
              subtree: !0,
            }),
            u
          );
        }
        var c = [],
          l = window.MutationObserver || window.WebKitMutationObserver,
          u = s();
        return {
          disconnect: function () {
            `disconnect` in u &&
              (q(`Disconnect body MutationObserver`), u.disconnect(), c.forEach(n));
          },
        };
      }
      function Ee() {
        var e = 0 > v;
        window.MutationObserver || window.WebKitMutationObserver
          ? e
            ? we()
            : (s = Te())
          : (q(`MutationObserver not supported in this browser!`), we());
      }
      function De(e, t) {
        var n = 0;
        return (
          (t ||= document.body),
          (n = document.defaultView.getComputedStyle(t, null)),
          (n = n === null ? 0 : n[e]),
          parseInt(n, r)
        );
      }
      function Oe(e) {
        e > M / 2 && ((M = 2 * e), q(`Event throttle increased to ` + M + `ms`));
      }
      function ke(e, t) {
        for (var n = t.length, r = 0, i = 0, a = K(e), o = Date.now(), s = 0; s < n; s++)
          ((r = t[s].getBoundingClientRect()[e] + De(`margin` + a, t[s])), r > i && (i = r));
        return (
          (o = Date.now() - o),
          q(`Parsed ` + n + ` HTML elements`),
          q(`Element position calculated in ` + o + `ms`),
          Oe(o),
          i
        );
      }
      function Ae(e) {
        return [
          e.bodyOffset(),
          e.bodyScroll(),
          e.documentElementOffset(),
          e.documentElementScroll(),
        ];
      }
      function je(e, t) {
        function n() {
          return (
            J(`No tagged elements (` + t + `) found on page`),
            document.querySelectorAll(`body *`)
          );
        }
        var r = document.querySelectorAll(`[` + t + `]`);
        return (r.length === 0 && n(), ke(e, r));
      }
      function Me() {
        return document.querySelectorAll(`body *`);
      }
      var X = {
          bodyOffset: function () {
            return document.body.offsetHeight + De(`marginTop`) + De(`marginBottom`);
          },
          offset: function () {
            return X.bodyOffset();
          },
          bodyScroll: function () {
            return document.body.scrollHeight;
          },
          custom: function () {
            return z.height();
          },
          documentElementOffset: function () {
            return document.documentElement.offsetHeight;
          },
          documentElementScroll: function () {
            return document.documentElement.scrollHeight;
          },
          max: function () {
            return Math.max.apply(null, Ae(X));
          },
          min: function () {
            return Math.min.apply(null, Ae(X));
          },
          grow: function () {
            return X.max();
          },
          lowestElement: function () {
            return Math.max(X.bodyOffset() || X.documentElementOffset(), ke(`bottom`, Me()));
          },
          taggedElement: function () {
            return je(`bottom`, `data-iframe-height`);
          },
        },
        Z = {
          bodyScroll: function () {
            return document.body.scrollWidth;
          },
          bodyOffset: function () {
            return document.body.offsetWidth;
          },
          custom: function () {
            return z.width();
          },
          documentElementScroll: function () {
            return document.documentElement.scrollWidth;
          },
          documentElementOffset: function () {
            return document.documentElement.offsetWidth;
          },
          scroll: function () {
            return Math.max(Z.bodyScroll(), Z.documentElementScroll());
          },
          max: function () {
            return Math.max.apply(null, Ae(Z));
          },
          min: function () {
            return Math.min.apply(null, Ae(Z));
          },
          rightMostElement: function () {
            return ke(`right`, Me());
          },
          taggedElement: function () {
            return je(`right`, `data-iframe-width`);
          },
        };
      function Ne(t, n, r, i) {
        function a() {
          ((p = f), (N = m), $(p, N, t));
        }
        function o() {
          function t(e, t) {
            return !(Math.abs(e - t) <= A);
          }
          return (
            (f = e === r ? X[h]() : r),
            (m = e === i ? Z[F]() : i),
            t(p, f) || (l && t(N, m))
          );
        }
        function s() {
          return !(t in { init: 1, interval: 1, size: 1 });
        }
        function c() {
          return h in T || (l && F in T);
        }
        function u() {
          q(`No change in size detected`);
        }
        function d() {
          s() && c() ? Le(n) : t in { interval: 1 } || u();
        }
        var f, m;
        o() || t === `init` ? (Fe(), a()) : d();
      }
      var Pe = re(Ne);
      function Q(e, t, n, r) {
        function i() {
          e in { reset: 1, resetPage: 1, init: 1 } || q(`Trigger event: ` + t);
        }
        function a() {
          return j && e in u;
        }
        a()
          ? q(`Trigger event cancelled: ` + e)
          : (i(), e === `init` ? Ne(e, t, n, r) : Pe(e, t, n, r));
      }
      function Fe() {
        (j || ((j = !0), q(`Trigger event lock on`)),
          clearTimeout(te),
          (te = setTimeout(function () {
            ((j = !1), q(`Trigger event lock off`), q(`--`));
          }, d)));
      }
      function Ie(e) {
        ((p = X[h]()), (N = Z[F]()), $(p, N, e));
      }
      function Le(e) {
        var t = h;
        ((h = m), q(`Reset trigger event: ` + e), Fe(), Ie(`reset`), (h = t));
      }
      function $(t, n, r, i, a) {
        function o() {
          e === a ? (a = k) : q(`Message targetOrigin: ` + a);
        }
        function s() {
          var o = t + `:` + n,
            s = w + `:` + o + `:` + r + (e === i ? `` : `:` + i);
          (q(`Sending message to host page (` + s + `)`), O.postMessage(S + s, a));
        }
        !0 === D && (o(), s());
      }
      function Re(n) {
        var r = {
          init: function () {
            ((ee = n.data),
              (O = n.source),
              ae(),
              (f = !1),
              setTimeout(function () {
                g = !1;
              }, d));
          },
          reset: function () {
            g
              ? q(`Page reset ignored by init`)
              : (q(`Page size reset by host page`), Ie(`resetPage`));
          },
          resize: function () {
            Q(`resizeParent`, `Parent window requested size check`);
          },
          moveToAnchor: function () {
            _.findTarget(o());
          },
          inPageLink: function () {
            this.moveToAnchor();
          },
          pageInfo: function () {
            var e = o();
            (q(`PageInfoFromParent called from parent: ` + e), R(JSON.parse(e)), q(` --`));
          },
          message: function () {
            var e = o();
            (q(`onMessage called from parent: ` + e), I(JSON.parse(e)), q(` --`));
          },
        };
        function i() {
          return S === (`` + n.data).slice(0, C);
        }
        function a() {
          return n.data.split(`]`)[1].split(`:`)[0];
        }
        function o() {
          return n.data.slice(n.data.indexOf(`:`) + 1);
        }
        function s() {
          return (
            (!(t !== void 0 && t.exports) && `iFrameResize` in window) ||
            (window.jQuery !== e && `iFrameResize` in window.jQuery.prototype)
          );
        }
        function c() {
          return n.data.split(`:`)[2] in { true: 1, false: 1 };
        }
        function l() {
          var e = a();
          e in r ? r[e]() : !s() && !c() && J(`Unexpected message (` + n.data + `)`);
        }
        function u() {
          !1 === f
            ? l()
            : c()
              ? r.init()
              : q(`Ignored message of type "` + a() + `". Received before initialization.`);
        }
        i() && u();
      }
      function ze() {
        document.readyState !== `loading` &&
          window.parent.postMessage(`[iFrameResizerChild]Ready`, `*`);
      }
      `iframeResizer` in window ||
        ((window.iframeChildListener = function (e) {
          Re({ data: e, sameDomian: !0 });
        }),
        W(window, `message`, Re),
        W(window, `readystatechange`, ze),
        ze());
    })();
  }),
  r = e((e, r) => {
    var i = t();
    r.exports = { iframeResize: i, iframeResizer: i, contentWindow: n() };
  });
export default r();
