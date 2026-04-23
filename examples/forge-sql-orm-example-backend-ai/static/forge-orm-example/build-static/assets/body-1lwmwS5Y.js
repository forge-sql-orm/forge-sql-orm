import { a as e } from "./rolldown-runtime-BYbx6iT9.js";
import { n as t, r as n } from "./react-dom-vendor-BHIljUNy.js";
import {
  a as r,
  c as i,
  d as a,
  f as o,
  i as s,
  l as c,
  n as l,
  r as u,
  s as d,
  t as f,
} from "./wrapNativeSuper-C8aTj56-.js";
import {
  C as p,
  E as m,
  S as h,
  T as g,
  _,
  b as v,
  n as y,
  t as b,
  v as ee,
  w as x,
  x as S,
  y as C,
} from "./index-Bxr0XOVx.js";
function w(e, t, n) {
  return ((t = u(t)), s(e, T() ? Reflect.construct(t, n || [], u(e).constructor) : t.apply(e, n)));
}
function T() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (T = function () {
    return !!e;
  })();
}
var E = !0,
  D = `Invariant failed`,
  O = (function (e) {
    function t(e) {
      var n;
      return (c(this, t), (n = w(this, t)), (n.message = e), n);
    }
    return (
      l(t, e),
      i(t, [
        {
          key: `toString`,
          value: function () {
            return this.message;
          },
        },
      ])
    );
  })(f(Error));
function k(e, t) {
  if (!e) throw E ? new O(D) : new O(`${D}: ${t || ``}`);
}
var A = e(n()),
  j = (0, A.createContext)(null);
function M() {
  var e = (0, A.useContext)(j);
  return (k(e !== null, `Unable to find DragDropContext context`), e);
}
function te(e) {
  var t = e.children,
    n = e.contextId,
    r = e.getDragState,
    i = e.startKeyboardDrag,
    a = e.droppableRegistry,
    o = (0, A.useMemo)(
      function () {
        return { contextId: n, getDragState: r, startKeyboardDrag: i, droppableRegistry: a };
      },
      [n, r, i, a],
    );
  return A.createElement(j.Provider, { value: o }, t);
}
function ne(e) {
  return { margin: window.getComputedStyle(e).margin, rect: e.getBoundingClientRect() };
}
function N() {
  var e = M().getDragState,
    t = e();
  return t.isDragging ? t.draggableDimensions : null;
}
var P = function () {};
function re() {
  var e = P;
  return {
    setCleanupFn: function (t) {
      e = t;
    },
    runCleanupFn: function () {
      (e(), (e = P));
    },
  };
}
function ie() {
  var e = o((0, A.useState)(re), 1)[0];
  return (
    (0, A.useEffect)(
      function () {
        return e.runCleanupFn;
      },
      [e.runCleanupFn],
    ),
    e
  );
}
var F = {
    draggable: { contextId: `data-rbd-draggable-context-id`, id: `data-rbd-draggable-id` },
    dragHandle: {
      contextId: `data-rbd-drag-handle-context-id`,
      draggableId: `data-rbd-drag-handle-draggable-id`,
    },
    droppable: { contextId: `data-rbd-droppable-context-id`, id: `data-rbd-droppable-id` },
    placeholder: { contextId: `data-rbd-placeholder-context-id` },
  },
  I = {
    draggable: {
      droppableId: `data-rbd-draggable-droppable-id`,
      index: `data-rbd-draggable-index`,
    },
    dropIndicator: `data-rbd-drop-indicator`,
    droppable: { direction: `data-rbd-droppable-direction`, type: `data-rbd-droppable-type` },
  };
function L(e, t) {
  var n = e.getAttribute(t);
  return (k(n !== null, `Expected '${t}' to be present`), n);
}
function ae(e, t) {
  for (var n = 0, r = Object.entries(t); n < r.length; n++) {
    var i = o(r[n], 2),
      a = i[0],
      s = i[1];
    e.setAttribute(a, s);
  }
  return function () {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var i = r[n];
      e.removeAttribute(i);
    }
  };
}
function oe() {
  return [...arguments]
    .map(function (e) {
      var t = e.attribute,
        n = e.value;
      return n ? `[${t}="${CSS.escape(n)}"]` : `[${t}]`;
    })
    .join(``);
}
function R() {
  var e = oe.apply(void 0, arguments);
  return document.querySelector(e);
}
function se() {
  var e = oe.apply(void 0, arguments);
  return Array.from(document.querySelectorAll(e));
}
function ce() {
  var e = R.apply(void 0, arguments);
  return (k(e, `There is a matching HTMLElement for selector ` + oe.apply(void 0, arguments)), e);
}
function le(e) {
  var t = e.contextId,
    n = e.draggableId;
  return R(
    { attribute: F.dragHandle.contextId, value: t },
    { attribute: F.dragHandle.draggableId, value: n },
  );
}
function z(e) {
  if (getComputedStyle(e).position === `absolute`) return e;
  var t = e.parentElement;
  return t instanceof HTMLElement ? z(t) : null;
}
function ue(e) {
  var t = e.element;
  return e.mode === `standard` ? t : (z(t) ?? t);
}
function de() {
  window.dispatchEvent(new DragEvent(`dragend`));
}
function fe(e, t) {
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
function pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? fe(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : fe(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var me = {
    top: function (e, t) {
      return Math.abs(t.y - e.top);
    },
    right: function (e, t) {
      return Math.abs(e.right - t.x);
    },
    bottom: function (e, t) {
      return Math.abs(e.bottom - t.y);
    },
    left: function (e, t) {
      return Math.abs(t.x - e.left);
    },
  },
  he = Symbol(`closestEdge`);
function ge(e, t) {
  var n = t.element,
    r = t.input,
    i = t.allowedEdges,
    a = { x: r.clientX, y: r.clientY },
    o = n.getBoundingClientRect(),
    s =
      i
        .map(function (e) {
          return { edge: e, value: me[e](o, a) };
        })
        .sort(function (e, t) {
          return e.value - t.value;
        })[0]?.edge ?? null;
  return pe(pe({}, e), {}, d({}, he, s));
}
function _e(e) {
  return e[he] ?? null;
}
var ve = Symbol(`DraggableData`);
function B(e) {
  return e[ve] === !0;
}
function ye(e) {
  var t = e.draggableId,
    n = e.droppableId,
    r = e.getIndex,
    i = e.contextId,
    a = e.type;
  return (0, A.useMemo)(
    function () {
      return d(
        d(
          d(d(d(d({}, ve, !0), `draggableId`, t), `droppableId`, n), `getIndex`, r),
          `contextId`,
          i,
        ),
        `type`,
        a,
      );
    },
    [t, n, r, i, a],
  );
}
var be = Symbol(`DroppableData`);
function xe(e) {
  return e[be] === !0;
}
function Se(e) {
  var t = e.contextId,
    n = e.droppableId,
    r = e.getIsDropDisabled;
  return (0, A.useMemo)(
    function () {
      return d(d(d(d({}, be, !0), `contextId`, t), `droppableId`, n), `getIsDropDisabled`, r);
    },
    [t, n, r],
  );
}
function Ce(e) {
  var t = e.droppableId,
    n = e.contextId;
  return se(
    { attribute: F.draggable.contextId, value: n },
    { attribute: I.draggable.droppableId, value: t },
  );
}
var we = [`droppableId`, `getIndex`],
  Te = [`contextId`, `droppableId`];
function Ee(e) {
  var t = e.droppableId,
    n = e.getIndex,
    r = a(e, we),
    i = n(),
    o = _e(r);
  return ((o === `bottom` || o === `right`) && (i += 1), { droppableId: t, index: i });
}
function De(e) {
  var t = e.contextId,
    n = e.droppableId,
    r = a(e, Te),
    i = Ce({ contextId: t, droppableId: n });
  if (i.length === 0) return { droppableId: n, index: 0 };
  var o = _e(r);
  return o === `top` || o === `left`
    ? { droppableId: n, index: 0 }
    : {
        droppableId: n,
        index:
          i.reduce(function (e, t) {
            var n = parseInt(L(t, I.draggable.index), 10);
            return Math.max(e, n);
          }, 0) + 1,
      };
}
function Oe(e) {
  var t = e.dropTargets;
  if (t.length === 0) return null;
  var n = t[0];
  return B(n.data) ? Ee(n.data) : xe(n.data) ? De(n.data) : null;
}
function V(e, t) {
  return !(e?.droppableId !== t?.droppableId || e?.index !== t?.index);
}
function ke() {
  var e = new Map(),
    t = function (t) {
      var n = t.droppableId;
      return e.get(n) ?? null;
    },
    n = null;
  return {
    getEntry: t,
    register: function (t) {
      var r;
      return (
        e.set(t.droppableId, t),
        (r = n) == null || r(t),
        function () {
          e.delete(t.droppableId);
        }
      );
    },
    setUpdateListener: function (e) {
      n = e;
    },
  };
}
function Ae() {
  return o((0, A.useState)(ke), 1)[0];
}
function H() {
  var e = [...arguments];
  return function () {
    e.forEach(function (e) {
      return e();
    });
  };
}
var je = `data-pdnd-honey-pot`;
function Me(e) {
  return e instanceof Element && e.hasAttribute(`data-pdnd-honey-pot`);
}
function Ne(e) {
  var t = o(document.elementsFromPoint(e.x, e.y), 2),
    n = t[0],
    r = t[1];
  return n ? (Me(n) ? (r ?? null) : n) : null;
}
var Pe = 2147483647,
  Fe = {
    inset: `unset`,
    border: `none`,
    padding: 0,
    margin: 0,
    overflow: `visible`,
    color: `inherit`,
    background: `transparent`,
  };
function U(e) {
  var t = null;
  return function () {
    if (!t) {
      var n = [...arguments];
      t = { result: e.apply(this, n) };
    }
    return t.result;
  };
}
var Ie = U(function () {
    return typeof HTMLElement < `u` && typeof HTMLElement.prototype.showPopover == `function`;
  }),
  W = _();
function Le(e, t) {
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
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Le(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Le(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var ze = 2,
  Be = ze / 2;
function Ve(e) {
  return { x: Math.floor(e.x), y: Math.floor(e.y) };
}
function He(e) {
  return { x: e.x - Be, y: e.y - Be };
}
function Ue(e) {
  return { x: Math.max(e.x, 0), y: Math.max(e.y, 0) };
}
function We(e) {
  return { x: Math.min(e.x, window.innerWidth - ze), y: Math.min(e.y, window.innerHeight - ze) };
}
function Ge(e) {
  var t = e.client,
    n = We(Ue(He(Ve(t))));
  return DOMRect.fromRect({ x: n.x, y: n.y, width: ze, height: ze });
}
function Ke(e) {
  var t = e.clientRect;
  return { left: `${t.left}px`, top: `${t.top}px`, width: `${t.width}px`, height: `${t.height}px` };
}
function qe(e) {
  var t = e.client,
    n = e.clientRect;
  return t.x >= n.x && t.x <= n.x + n.width && t.y >= n.y && t.y <= n.y + n.height;
}
function Je(e) {
  var t = e.initial,
    n = document.createElement(`div`);
  (n.setAttribute(je, `true`), Ie() && n.setAttribute(`popover`, `manual`));
  var r = Ge({ client: t });
  (Object.assign(
    n.style,
    Re(
      Re({ position: `fixed` }, Ie() ? Fe : { zIndex: Pe }),
      {},
      {
        backgroundColor: `transparent`,
        padding: 0,
        margin: 0,
        boxSizing: `border-box`,
        pointerEvents: `auto`,
      },
      Ke({ clientRect: r }),
    ),
  ),
    document.body.appendChild(n),
    Ie() && n.showPopover());
  var i = (0, W.bind)(window, {
    type: `pointermove`,
    listener: function (e) {
      ((r = Ge({ client: { x: e.clientX, y: e.clientY } })),
        Object.assign(n.style, Ke({ clientRect: r })));
    },
    options: { capture: !0 },
  });
  return function (e) {
    var t = e.current;
    if ((i(), qe({ client: t, clientRect: r }))) {
      n.remove();
      return;
    }
    function a() {
      (o(), n.remove());
    }
    var o = (0, W.bindAll)(
      window,
      [
        { type: `pointerdown`, listener: a },
        { type: `pointermove`, listener: a },
        { type: `focusin`, listener: a },
        { type: `focusout`, listener: a },
        { type: `dragstart`, listener: a },
        { type: `dragenter`, listener: a },
        { type: `dragover`, listener: a },
      ],
      { capture: !0 },
    );
  };
}
function Ye() {
  var e = null;
  function t() {
    return (
      (e = null),
      (0, W.bind)(window, {
        type: `pointermove`,
        listener: function (t) {
          e = { x: t.clientX, y: t.clientY };
        },
        options: { capture: !0 },
      })
    );
  }
  function n() {
    var t = null;
    return function (n) {
      var r = n.eventName,
        i = n.payload;
      if (r === `onDragStart`) {
        var a = i.location.initial.input;
        t = Je({ initial: e ?? { x: a.clientX, y: a.clientY } });
      }
      if (r === `onDrop`) {
        var o,
          s = i.location.current.input;
        ((o = t) == null || o({ current: { x: s.clientX, y: s.clientY } }), (t = null), (e = null));
      }
    };
  }
  return { bindEvents: t, getOnPostDispatch: n };
}
var Xe = U(function () {
    return navigator.userAgent.includes(`Firefox`);
  }),
  Ze = U(function () {
    var e = navigator.userAgent;
    return e.includes(`AppleWebKit`) && !e.includes(`Chrome`);
  }),
  Qe = { isLeavingWindow: Symbol(`leaving`), isEnteringWindow: Symbol(`entering`) };
function $e(e) {
  var t = e.dragLeave;
  return Ze() ? t.hasOwnProperty(Qe.isLeavingWindow) : !1;
}
(function () {
  if (typeof window > `u` || !Ze()) return;
  function e() {
    return { enterCount: 0, isOverWindow: !1 };
  }
  var t = e();
  function n() {
    t = e();
  }
  (0, W.bindAll)(
    window,
    [
      {
        type: `dragstart`,
        listener: function () {
          ((t.enterCount = 0), (t.isOverWindow = !0));
        },
      },
      { type: `drop`, listener: n },
      { type: `dragend`, listener: n },
      {
        type: `dragenter`,
        listener: function (e) {
          (!t.isOverWindow && t.enterCount === 0 && (e[Qe.isEnteringWindow] = !0),
            (t.isOverWindow = !0),
            t.enterCount++);
        },
      },
      {
        type: `dragleave`,
        listener: function (e) {
          (t.enterCount--,
            t.isOverWindow &&
              t.enterCount === 0 &&
              ((e[Qe.isLeavingWindow] = !0), (t.isOverWindow = !1)));
        },
      },
    ],
    { capture: !0 },
  );
})();
function et(e) {
  return `nodeName` in e;
}
function tt(e) {
  return et(e) && e.ownerDocument !== document;
}
function nt(e) {
  var t = e.dragLeave,
    n = t.type,
    r = t.relatedTarget;
  return n === `dragleave`
    ? Ze()
      ? $e({ dragLeave: t })
      : r == null
        ? !0
        : Xe()
          ? tt(r)
          : r instanceof HTMLIFrameElement
    : !1;
}
function rt(e) {
  var t = e.onDragEnd;
  return [
    {
      type: `pointermove`,
      listener: (function () {
        var e = 0;
        return function () {
          if (e < 20) {
            e++;
            return;
          }
          t();
        };
      })(),
    },
    { type: `pointerdown`, listener: t },
  ];
}
function it(e) {
  return {
    altKey: e.altKey,
    button: e.button,
    buttons: e.buttons,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    shiftKey: e.shiftKey,
    clientX: e.clientX,
    clientY: e.clientY,
    pageX: e.pageX,
    pageY: e.pageY,
  };
}
var at = (function (e) {
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
  })(function (e) {
    return e();
  }),
  ot = (function () {
    var e = null;
    function t(t) {
      e = {
        frameId: requestAnimationFrame(function () {
          ((e = null), t());
        }),
        fn: t,
      };
    }
    function n() {
      e &&= (cancelAnimationFrame(e.frameId), e.fn(), null);
    }
    return { schedule: t, flush: n };
  })();
function st(e) {
  var t = e.source,
    n = e.initial,
    r = e.dispatchEvent,
    i = { dropTargets: [] };
  function a(e) {
    (r(e), (i = { dropTargets: e.payload.location.current.dropTargets }));
  }
  return {
    start: function (e) {
      var r = e.nativeSetDragImage,
        o = { current: n, previous: i, initial: n };
      (a({
        eventName: `onGenerateDragPreview`,
        payload: { source: t, location: o, nativeSetDragImage: r },
      }),
        ot.schedule(function () {
          a({ eventName: `onDragStart`, payload: { source: t, location: o } });
        }));
    },
    dragUpdate: function (e) {
      var r = e.current;
      (ot.flush(),
        at.cancel(),
        a({
          eventName: `onDropTargetChange`,
          payload: { source: t, location: { initial: n, previous: i, current: r } },
        }));
    },
    drag: function (e) {
      var r = e.current;
      at(function () {
        (ot.flush(),
          a({
            eventName: `onDrag`,
            payload: { source: t, location: { initial: n, previous: i, current: r } },
          }));
      });
    },
    drop: function (e) {
      var r = e.current,
        o = e.updatedSourcePayload;
      (ot.flush(),
        at.cancel(),
        a({
          eventName: `onDrop`,
          payload: { source: o ?? t, location: { current: r, previous: i, initial: n } },
        }));
    },
  };
}
var ct = { isActive: !1 };
function lt() {
  return !ct.isActive;
}
function ut(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function dt(e) {
  var t = e.current,
    n = e.next;
  if (t.length !== n.length) return !0;
  for (var r = 0; r < t.length; r++) if (t[r].element !== n[r].element) return !0;
  return !1;
}
function ft(e) {
  var t = e.event,
    n = e.dragType,
    i = e.getDropTargetsOver,
    a = e.dispatchEvent;
  if (!lt()) return;
  var o = mt({ event: t, dragType: n, getDropTargetsOver: i });
  ct.isActive = !0;
  var s = { current: o };
  pt({ event: t, current: o.dropTargets });
  var c = st({ source: n.payload, dispatchEvent: a, initial: o });
  function l(e) {
    var t = dt({ current: s.current.dropTargets, next: e.dropTargets });
    ((s.current = e), t && c.dragUpdate({ current: s.current }));
  }
  function u(e) {
    var t = it(e),
      r = i({
        target: Me(e.target) ? Ne({ x: t.clientX, y: t.clientY }) : e.target,
        input: t,
        source: n.payload,
        current: s.current.dropTargets,
      });
    (r.length && (e.preventDefault(), pt({ event: e, current: r })),
      l({ dropTargets: r, input: t }));
  }
  function d() {
    (s.current.dropTargets.length && l({ dropTargets: [], input: s.current.input }),
      c.drop({ current: s.current, updatedSourcePayload: null }),
      f());
  }
  function f() {
    ((ct.isActive = !1), p());
  }
  var p = (0, W.bindAll)(
    window,
    [
      {
        type: `dragover`,
        listener: function (e) {
          (u(e), c.drag({ current: s.current }));
        },
      },
      { type: `dragenter`, listener: u },
      {
        type: `dragleave`,
        listener: function (e) {
          nt({ dragLeave: e }) &&
            (l({ input: s.current.input, dropTargets: [] }), n.startedFrom === `external` && d());
        },
      },
      {
        type: `drop`,
        listener: function (e) {
          if (
            ((s.current = { dropTargets: s.current.dropTargets, input: it(e) }),
            !s.current.dropTargets.length)
          ) {
            d();
            return;
          }
          (e.preventDefault(),
            pt({ event: e, current: s.current.dropTargets }),
            c.drop({
              current: s.current,
              updatedSourcePayload: n.type === `external` ? n.getDropPayload(e) : null,
            }),
            f());
        },
      },
      {
        type: `dragend`,
        listener: function (e) {
          ((s.current = { dropTargets: s.current.dropTargets, input: it(e) }), d());
        },
      },
    ].concat(r(rt({ onDragEnd: d }))),
    { capture: !0 },
  );
  c.start({ nativeSetDragImage: ut(t) });
}
function pt(e) {
  var t = e.event,
    n = e.current[0]?.dropEffect;
  n != null && t.dataTransfer && (t.dataTransfer.dropEffect = n);
}
function mt(e) {
  var t = e.event,
    n = e.dragType,
    r = e.getDropTargetsOver,
    i = it(t);
  return n.startedFrom === `external`
    ? { input: i, dropTargets: [] }
    : { input: i, dropTargets: r({ input: i, source: n.payload, target: t.target, current: [] }) };
}
var ht = { canStart: lt, start: ft },
  gt = new Map();
function _t(e) {
  var t = e.typeKey,
    n = e.mount,
    r = gt.get(t);
  if (r) return (r.usageCount++, r);
  var i = { typeKey: t, unmount: n(), usageCount: 1 };
  return (gt.set(t, i), i);
}
function vt(e) {
  var t = _t(e);
  return function () {
    (t.usageCount--, !(t.usageCount > 0) && (t.unmount(), gt.delete(e.typeKey)));
  };
}
function yt(e, t) {
  var n = t.attribute,
    r = t.value;
  return (
    e.setAttribute(n, r),
    function () {
      return e.removeAttribute(n);
    }
  );
}
function bt(e, t) {
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
function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? bt(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : bt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function xt(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = St(e)) || (t && e && typeof e.length == `number`)) {
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
function St(e, t) {
  if (e) {
    if (typeof e == `string`) return Ct(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Ct(e, t)
          : void 0
    );
  }
}
function Ct(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function wt(e) {
  return e.slice(0).reverse();
}
function Tt(e) {
  var t = e.typeKey,
    n = e.defaultDropEffect,
    i = new WeakMap(),
    a = `data-drop-target-for-${t}`,
    o = `[${a}]`;
  function s(e) {
    return (
      i.set(e.element, e),
      function () {
        return i.delete(e.element);
      }
    );
  }
  function c(e) {
    return U(H(yt(e.element, { attribute: a, value: `true` }), s(e)));
  }
  function l(e) {
    var t = e.source,
      a = e.target,
      s = e.input,
      c = e.result,
      u = c === void 0 ? [] : c;
    if (a == null) return u;
    if (!(a instanceof Element))
      return a instanceof Node ? l({ source: t, target: a.parentElement, input: s, result: u }) : u;
    var d = a.closest(o);
    if (d == null) return u;
    var f = i.get(d);
    if (f == null) return u;
    var p = { input: s, source: t, element: f.element };
    if (f.canDrop && !f.canDrop(p))
      return l({ source: t, target: f.element.parentElement, input: s, result: u });
    var m = f.getData?.call(f, p) ?? {},
      h = f.getDropEffect?.call(f, p) ?? n,
      g = { data: m, element: f.element, dropEffect: h, isActiveDueToStickiness: !1 };
    return l({
      source: t,
      target: f.element.parentElement,
      input: s,
      result: [].concat(r(u), [g]),
    });
  }
  function u(e) {
    var t = e.eventName,
      n = e.payload,
      r = xt(n.location.current.dropTargets),
      a;
    try {
      for (r.s(); !(a = r.n()).done; ) {
        var o,
          s = a.value,
          c = i.get(s.element),
          l = G(G({}, n), {}, { self: s });
        c == null || (o = c[t]) == null || o.call(c, l);
      }
    } catch (e) {
      r.e(e);
    } finally {
      r.f();
    }
  }
  var d = {
    onGenerateDragPreview: u,
    onDrag: u,
    onDragStart: u,
    onDrop: u,
    onDropTargetChange: function (e) {
      var t = e.payload,
        n = new Set(
          t.location.current.dropTargets.map(function (e) {
            return e.element;
          }),
        ),
        r = new Set(),
        a = xt(t.location.previous.dropTargets),
        o;
      try {
        for (a.s(); !(o = a.n()).done; ) {
          var s,
            c = o.value;
          r.add(c.element);
          var l = i.get(c.element),
            u = n.has(c.element),
            d = G(G({}, t), {}, { self: c });
          if ((l == null || (s = l.onDropTargetChange) == null || s.call(l, d), !u)) {
            var f;
            l == null || (f = l.onDragLeave) == null || f.call(l, d);
          }
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
      var p = xt(t.location.current.dropTargets),
        m;
      try {
        for (p.s(); !(m = p.n()).done; ) {
          var h,
            g,
            _ = m.value;
          if (!r.has(_.element)) {
            var v = G(G({}, t), {}, { self: _ }),
              y = i.get(_.element);
            (y == null || (h = y.onDropTargetChange) == null || h.call(y, v),
              y == null || (g = y.onDragEnter) == null || g.call(y, v));
          }
        }
      } catch (e) {
        p.e(e);
      } finally {
        p.f();
      }
    },
  };
  function f(e) {
    d[e.eventName](e);
  }
  function p(e) {
    var t = e.source,
      n = e.target,
      r = e.input,
      a = e.current,
      o = l({ source: t, target: n, input: r });
    if (o.length >= a.length) return o;
    for (var s = wt(a), c = wt(o), u = [], d = 0; d < s.length; d++) {
      var f,
        p = s[d],
        m = c[d];
      if (m != null) {
        u.push(m);
        continue;
      }
      var h = u[d - 1],
        g = s[d - 1];
      if (h?.element !== g?.element) break;
      var _ = i.get(p.element);
      if (!_) break;
      var v = { input: r, source: t, element: _.element };
      if ((_.canDrop && !_.canDrop(v)) || !((f = _.getIsSticky) != null && f.call(_, v))) break;
      u.push(G(G({}, p), {}, { isActiveDueToStickiness: !0 }));
    }
    return wt(u);
  }
  return { dropTargetForConsumers: c, getIsOver: p, dispatchEvent: f };
}
function Et(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = Dt(e)) || (t && e && typeof e.length == `number`)) {
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
function Dt(e, t) {
  if (e) {
    if (typeof e == `string`) return Ot(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Ot(e, t)
          : void 0
    );
  }
}
function Ot(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function kt(e, t) {
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
function At(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? kt(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : kt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function jt() {
  var e = new Set(),
    t = null;
  function n(e) {
    t && (!e.canMonitor || e.canMonitor(t.canMonitorArgs)) && t.active.add(e);
  }
  function r(r) {
    var i = At({}, r);
    (e.add(i), n(i));
    function a() {
      (e.delete(i), t && t.active.delete(i));
    }
    return U(a);
  }
  function i(r) {
    var i = r.eventName,
      a = r.payload;
    if (i === `onGenerateDragPreview`) {
      t = { canMonitorArgs: { initial: a.location.initial, source: a.source }, active: new Set() };
      var o = Et(e),
        s;
      try {
        for (o.s(); !(s = o.n()).done; ) {
          var c = s.value;
          n(c);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    if (t) {
      for (var l = Array.from(t.active), u = 0, d = l; u < d.length; u++) {
        var f = d[u];
        if (t.active.has(f)) {
          var p;
          (p = f[i]) == null || p.call(f, a);
        }
      }
      i === `onDrop` && (t.active.clear(), (t = null));
    }
  }
  return { dispatchEvent: i, monitorForConsumers: r };
}
function Mt(e) {
  var t = e.typeKey,
    n = e.mount,
    r = e.dispatchEventToSource,
    i = e.onPostDispatch,
    a = e.defaultDropEffect,
    o = jt(),
    s = Tt({ typeKey: t, defaultDropEffect: a });
  function c(e) {
    (r?.(e), s.dispatchEvent(e), o.dispatchEvent(e), i?.(e));
  }
  function l(e) {
    var t = e.event,
      n = e.dragType;
    ht.start({ event: t, dragType: n, getDropTargetsOver: s.getIsOver, dispatchEvent: c });
  }
  function u() {
    function e() {
      return n({ canStart: ht.canStart, start: l });
    }
    return vt({ typeKey: t, mount: e });
  }
  return { registerUsage: u, dropTarget: s.dropTargetForConsumers, monitor: o.monitorForConsumers };
}
var Nt = U(function () {
    return navigator.userAgent.toLocaleLowerCase().includes(`android`);
  }),
  Pt = `pdnd:android-fallback`,
  Ft = `text/plain`,
  It = `application/vnd.pdnd`,
  Lt = new WeakMap();
function Rt(e) {
  return (
    Lt.set(e.element, e),
    function () {
      Lt.delete(e.element);
    }
  );
}
var zt = Ye(),
  Bt = Mt({
    typeKey: `element`,
    defaultDropEffect: `move`,
    mount: function (e) {
      return H(
        zt.bindEvents(),
        (0, W.bind)(document, {
          type: `dragstart`,
          listener: function (t) {
            if (e.canStart(t) && !t.defaultPrevented && t.dataTransfer) {
              var n = t.target;
              if (n instanceof HTMLElement) {
                var r = Lt.get(n);
                if (r) {
                  var i = it(t),
                    a = { element: r.element, dragHandle: r.dragHandle ?? null, input: i };
                  if (r.canDrag && !r.canDrag(a)) {
                    t.preventDefault();
                    return;
                  }
                  if (r.dragHandle) {
                    var s = Ne({ x: i.clientX, y: i.clientY });
                    if (!r.dragHandle.contains(s)) {
                      t.preventDefault();
                      return;
                    }
                  }
                  var c = r.getInitialDataForExternal?.call(r, a) ?? null;
                  if (c)
                    for (var l = 0, u = Object.entries(c); l < u.length; l++) {
                      var d = o(u[l], 2),
                        f = d[0],
                        p = d[1];
                      t.dataTransfer.setData(f, p ?? ``);
                    }
                  (Nt() &&
                    !t.dataTransfer.types.includes(`text/plain`) &&
                    !t.dataTransfer.types.includes(`text/uri-list`) &&
                    t.dataTransfer.setData(Ft, Pt),
                    t.dataTransfer.setData(It, ``));
                  var m = {
                    type: `element`,
                    payload: {
                      element: r.element,
                      dragHandle: r.dragHandle ?? null,
                      data: r.getInitialData?.call(r, a) ?? {},
                    },
                    startedFrom: `internal`,
                  };
                  e.start({ event: t, dragType: m });
                }
              }
            }
          },
        }),
      );
    },
    dispatchEventToSource: function (e) {
      var t,
        n,
        r = e.eventName,
        i = e.payload;
      (t = Lt.get(i.source.element)) == null || (n = t[r]) == null || n.call(t, i);
    },
    onPostDispatch: zt.getOnPostDispatch(),
  }),
  Vt = Bt.dropTarget,
  Ht = Bt.monitor;
function Ut(e) {
  return U(H(Bt.registerUsage(), Rt(e), yt(e.element, { attribute: `draggable`, value: `true` })));
}
function Wt(e, t, n) {
  return ((t = u(t)), s(e, Gt() ? Reflect.construct(t, n || [], u(e).constructor) : t.apply(e, n)));
}
function Gt() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Gt = function () {
    return !!e;
  })();
}
function Kt(e) {
  var t = e.children,
    n = e.dragController,
    r = (0, A.useRef)(!1),
    i = (0, A.useCallback)(
      function (e) {
        var t = n.getDragState();
        t.isDragging &&
          (t.mode === `FLUID` && de(),
          t.mode === `SNAP` && n.stopDrag({ reason: `CANCEL` }),
          e.error instanceof O && e.preventDefault());
      },
      [n],
    );
  return (
    (0, A.useEffect)(
      function () {
        return H(
          Ht({
            onDragStart: function () {
              r.current = !0;
            },
            onDrop: function () {
              r.current = !1;
            },
          }),
          (0, W.bind)(window, { type: `error`, listener: i }),
        );
      },
      [i],
    ),
    t
  );
}
var qt = (function (e) {
  function t() {
    return (c(this, t), Wt(this, t, arguments));
  }
  return (
    l(t, e),
    i(
      t,
      [
        {
          key: `componentDidCatch`,
          value: function (e) {
            if (!(e instanceof O)) throw e;
          },
        },
        {
          key: `render`,
          value: function () {
            return A.createElement(
              Kt,
              { contextId: this.props.contextId, dragController: this.props.dragController },
              this.props.children,
            );
          },
        },
      ],
      [{ key: `getDerivedStateFromError`, value: function () {} }],
    )
  );
})(A.Component);
function Jt(e, t) {
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
function Yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Jt(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Jt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Xt(e) {
  var t = e.start,
    n = e.target;
  if (n === null) return null;
  var r = t.droppableId === n.droppableId,
    i = n.index > t.index;
  return r && i ? Yt(Yt({}, n), {}, { index: n.index - 1 }) : Yt({}, n);
}
function Zt(e) {
  return `rbd-lift-instruction-${e}`;
}
function Qt(e) {
  var t = e.contextId,
    n = e.text;
  (0, A.useEffect)(
    function () {
      var e = Zt(t),
        r = document.createElement(`div`);
      return (
        (r.id = e),
        (r.textContent = n),
        Object.assign(r.style, { display: `none` }),
        document.body.appendChild(r),
        function () {
          r.remove();
        }
      );
    },
    [t, n],
  );
}
function $t(e) {
  var t = getComputedStyle(e),
    n = t.overflowX,
    r = t.overflowY;
  if (n === `scroll` || n === `auto` || r === `scroll` || r === `auto`) return e;
  var i = e.parentElement;
  return i === null ? null : $t(i);
}
function en(e) {
  var t = e.contextId,
    n = e.type;
  return se(
    { attribute: F.droppable.contextId, value: t },
    { attribute: I.droppable.type, value: n },
  );
}
function tn(e) {
  var t = e.droppableId,
    n = e.type,
    r = e.isMovingForward,
    i = e.contextId,
    a = e.droppableRegistry,
    o = en({ contextId: i, type: n }),
    s = o.findIndex(function (e) {
      return L(e, F.droppable.id) === t;
    }),
    c = o
      .filter(function (e, t) {
        return r ? t > s : t < s;
      })
      .filter(function (e) {
        var t = L(e, F.droppable.id),
          n = a.getEntry({ droppableId: t });
        return n && !n.isDropDisabled;
      });
  return (r ? c.at(0) : c.at(-1)) ?? null;
}
function nn(e, t) {
  return t
    ? R(
        { attribute: F.draggable.contextId, value: e },
        { attribute: I.draggable.droppableId, value: t.droppableId },
        { attribute: I.draggable.index, value: String(t.index) },
      )
    : null;
}
function rn(e, t) {
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
function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? rn(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : rn(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function an(e) {
  var t = $t(e);
  t && t.scrollTo(0, 0);
}
var q = {
  mainAxis: {
    prev: function (e, t) {
      var n = t.dragController;
      e.preventDefault();
      var r = n.getDragState();
      k(r.isDragging);
      var i = r.sourceLocation,
        a = r.targetLocation;
      if (a && a.index !== 0) {
        var o = K(K({}, a), {}, { index: a.index - 1 });
        (V(i, Xt({ start: i, target: o })) && (o.index = a.index - 2),
          n.updateDrag({ targetLocation: o }));
      }
    },
    next: function (e, t) {
      var n = t.dragController,
        r = t.contextId;
      e.preventDefault();
      var i = n.getDragState();
      k(i.isDragging);
      var a = i.sourceLocation,
        o = i.targetLocation;
      if (o) {
        var s = nn(r, o);
        if (!(!V(a, o) && !s)) {
          var c = K(K({}, o), {}, { index: o.index + 1 });
          (V(a, Xt({ start: a, target: c })) && (c.index = o.index + 2),
            n.updateDrag({ targetLocation: c }));
        }
      }
    },
  },
  crossAxis: {
    prev: function (e, t) {
      var n = t.dragController,
        r = t.droppableRegistry,
        i = t.contextId;
      e.preventDefault();
      var a = n.getDragState();
      k(a.isDragging);
      var o = a.targetLocation,
        s = a.type;
      if (o) {
        var c = tn({
          droppableId: o.droppableId,
          type: s,
          isMovingForward: !1,
          contextId: i,
          droppableRegistry: r,
        });
        if (c) {
          an(c);
          var l = { droppableId: L(c, F.droppable.id), index: 0 };
          n.updateDrag({ targetLocation: l });
        }
      }
    },
    next: function (e, t) {
      var n = t.dragController,
        r = t.droppableRegistry,
        i = t.contextId;
      e.preventDefault();
      var a = n.getDragState();
      k(a.isDragging);
      var o = a.targetLocation,
        s = a.type;
      if (o) {
        var c = tn({
          droppableId: o.droppableId,
          type: s,
          isMovingForward: !0,
          contextId: i,
          droppableRegistry: r,
        });
        if (c) {
          an(c);
          var l = { droppableId: L(c, F.droppable.id), index: 0 };
          n.updateDrag({ targetLocation: l });
        }
      }
    },
  },
};
function J(e) {
  e.preventDefault();
}
var on = { PageUp: J, PageDown: J, Home: J, End: J, Enter: J, Tab: J },
  sn = {
    vertical: K(
      K({}, on),
      {},
      {
        ArrowUp: q.mainAxis.prev,
        ArrowDown: q.mainAxis.next,
        ArrowLeft: q.crossAxis.prev,
        ArrowRight: q.crossAxis.next,
      },
    ),
    horizontal: K(
      K({}, on),
      {},
      {
        ArrowUp: q.crossAxis.prev,
        ArrowDown: q.crossAxis.next,
        ArrowLeft: q.mainAxis.prev,
        ArrowRight: q.mainAxis.next,
      },
    ),
  };
function cn(e) {
  var t = e.dragController,
    n = e.droppableRegistry,
    i = e.contextId,
    a = e.setKeyboardCleanupFn;
  return {
    startKeyboardDrag: (0, A.useCallback)(
      function (e) {
        var o = e.event,
          s = e.draggableId,
          c = e.type,
          l = e.getSourceLocation,
          u = e.sourceElement;
        t.startDrag({
          draggableId: s,
          type: c,
          getSourceLocation: l,
          sourceElement: u,
          mode: `SNAP`,
        });
        var d = l(),
          f = L(ce({ attribute: F.droppable.id, value: d.droppableId }), I.droppable.direction);
        k(f === `vertical` || f === `horizontal`);
        function p() {
          t.stopDrag({ reason: `CANCEL` });
        }
        var m = [
          `mousedown`,
          `mouseup`,
          `click`,
          `touchstart`,
          `resize`,
          `wheel`,
          `visibilitychange`,
        ].map(function (e) {
          return { type: e, listener: p };
        });
        a(
          (0, W.bindAll)(
            window,
            [
              {
                type: `keydown`,
                listener: function (e) {
                  var r, a;
                  if (e !== o && t.getDragState().isDragging) {
                    if (e.key === ` `) {
                      (e.preventDefault(), t.stopDrag({ reason: `DROP` }));
                      return;
                    }
                    if (e.key === `Escape`) {
                      (e.preventDefault(), t.stopDrag({ reason: `CANCEL` }));
                      return;
                    }
                    (r = (a = sn[f])[e.key]) == null ||
                      r.call(a, e, { dragController: t, droppableRegistry: n, contextId: i });
                  }
                },
              },
            ].concat(r(m)),
          ),
        );
      },
      [i, t, n, a],
    ),
  };
}
var ln = function (e) {
    return function (t) {
      return e === t;
    };
  },
  un = ln(`scroll`),
  dn = ln(`auto`),
  fn = function (e, t) {
    return t(e.overflowX) || t(e.overflowY);
  },
  pn = function (e) {
    var t = window.getComputedStyle(e),
      n = { overflowX: t.overflowX, overflowY: t.overflowY };
    return fn(n, un) || fn(n, dn);
  },
  mn = function (e) {
    return !e || e === document.body || e === document.documentElement
      ? null
      : pn(e)
        ? e
        : mn(e.parentElement);
  },
  hn = function (e) {
    var t = e.top,
      n = e.right,
      r = e.bottom,
      i = e.left;
    return {
      top: t,
      right: n,
      bottom: r,
      left: i,
      width: n - i,
      height: r - t,
      x: i,
      y: t,
      center: { x: (n + i) / 2, y: (r + t) / 2 },
    };
  },
  gn = function (e) {
    var t = e.closestScrollable,
      n = t.getBoundingClientRect(),
      r = { x: t.scrollLeft, y: t.scrollTop };
    return {
      container: hn(n),
      scroll: {
        current: r,
        max: { x: t.scrollWidth - t.clientWidth, y: t.scrollHeight - t.clientHeight },
      },
    };
  },
  _n = { x: 0, y: 0 },
  vn = function (e) {
    return function (t) {
      return { x: e(t.x), y: e(t.y) };
    };
  },
  yn = function (e, t) {
    return e.x === t.x && e.y === t.y;
  },
  bn = function (e, t) {
    return { x: e.x + t.x, y: e.y + t.y };
  },
  xn = function (e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  },
  Sn = vn(function (e) {
    return e === 0 ? 0 : e > 0 ? 1 : -1;
  }),
  Cn = (function () {
    var e = function (e, t) {
      return e < 0 ? e : e > t ? e - t : 0;
    };
    return function (t) {
      var n = t.current,
        r = t.max,
        i = t.change,
        a = bn(n, i),
        o = { x: e(a.x, r.x), y: e(a.y, r.y) };
      return yn(o, _n) ? null : o;
    };
  })(),
  wn = function (e) {
    var t = e.max,
      n = e.current,
      r = e.change,
      i = { x: Math.max(n.x, t.x), y: Math.max(n.y, t.y) },
      a = Sn(r),
      o = Cn({ max: i, current: n, change: a });
    return !o || (a.x !== 0 && o.x === 0) || (a.y !== 0 && o.y === 0);
  },
  Tn = function (e, t) {
    return wn({ current: e.scroll.current, max: e.scroll.max, change: t });
  },
  En = function (e, t) {
    return wn({ current: e.scroll.current, max: e.scroll.max, change: t });
  },
  Dn = {
    direction: `vertical`,
    start: `top`,
    end: `bottom`,
    size: `height`,
    scrollAxis: `scrollTop`,
  },
  On = {
    direction: `horizontal`,
    start: `left`,
    end: `right`,
    size: `width`,
    scrollAxis: `scrollLeft`,
  };
(On.direction, Dn.direction);
var Y = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: function (e) {
      return e ** 2;
    },
    durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
  },
  kn = function (e, t) {
    return {
      startScrollingFrom: e[t.size] * Y.startFromPercentage,
      maxScrollValueAt: e[t.size] * Y.maxScrollAtPercentage,
    };
  },
  An = function (e) {
    var t = e.startOfRange,
      n = e.endOfRange,
      r = e.current,
      i = n - t;
    return i === 0 ? 0 : (r - t) / i;
  },
  jn = Y.durationDampening.accelerateAt,
  Mn = Y.durationDampening.stopDampeningAt,
  Nn = function (e, t) {
    var n = t,
      r = Mn,
      i = Date.now() - n;
    if (i >= Mn) return e;
    if (i < jn) return 1;
    var a = An({ startOfRange: jn, endOfRange: r, current: i }),
      o = e * Y.ease(a);
    return Math.ceil(o);
  },
  Pn = function (e, t) {
    if (e > t.startScrollingFrom) return 0;
    if (e <= t.maxScrollValueAt) return Y.maxPixelScroll;
    if (e === t.startScrollingFrom) return 1;
    var n =
        1 - An({ startOfRange: t.maxScrollValueAt, endOfRange: t.startScrollingFrom, current: e }),
      r = Y.maxPixelScroll * Y.ease(n);
    return Math.ceil(r);
  },
  Fn = function (e) {
    var t = e.distanceToEdge,
      n = e.thresholds,
      r = e.dragStartTime,
      i = e.shouldUseTimeDampening,
      a = Pn(t, n);
    return a === 0 ? 0 : i ? Math.max(Nn(a, r), 1) : a;
  },
  In = function (e) {
    var t = e.container,
      n = e.distanceToEdges,
      r = e.dragStartTime,
      i = e.axis,
      a = e.shouldUseTimeDampening,
      o = kn(t, i);
    return n[i.end] < n[i.start]
      ? Fn({ distanceToEdge: n[i.end], thresholds: o, dragStartTime: r, shouldUseTimeDampening: a })
      : -1 *
          Fn({
            distanceToEdge: n[i.start],
            thresholds: o,
            dragStartTime: r,
            shouldUseTimeDampening: a,
          });
  },
  Ln = vn(function (e) {
    return e === 0 ? 0 : e;
  }),
  Rn = function (e) {
    var t = e.dragStartTime,
      n = e.container,
      r = e.center,
      i = e.shouldUseTimeDampening,
      a = { top: r.y - n.top, right: n.right - r.x, bottom: n.bottom - r.y, left: r.x - n.left },
      o = In({
        container: n,
        distanceToEdges: a,
        dragStartTime: t,
        axis: Dn,
        shouldUseTimeDampening: i,
      }),
      s = Ln({
        x: In({
          container: n,
          distanceToEdges: a,
          dragStartTime: t,
          axis: On,
          shouldUseTimeDampening: i,
        }),
        y: o,
      });
    return yn(s, _n) ? null : s;
  },
  zn = function (e) {
    var t = e.scrollable,
      n = e.center,
      r = e.dragStartTime,
      i = e.shouldUseTimeDampening,
      a = Rn({ dragStartTime: r, container: t.container, center: n, shouldUseTimeDampening: i });
    return a && En(t, a) ? a : null;
  },
  Bn = function (e) {
    var t = e.viewport,
      n = e.center,
      r = e.dragStartTime,
      i = e.shouldUseTimeDampening,
      a = Rn({ dragStartTime: r, container: t.container, center: n, shouldUseTimeDampening: i });
    return a && Tn(t, a) ? a : null;
  },
  Vn = function (e) {
    var t = e.scrollHeight,
      n = e.scrollWidth,
      r = e.height,
      i = e.width,
      a = xn({ x: n, y: t }, { x: i, y: r });
    return { x: Math.max(0, a.x), y: Math.max(0, a.y) };
  },
  Hn = function () {
    var e = document.documentElement;
    return Vn({
      scrollHeight: e.scrollHeight,
      scrollWidth: e.scrollWidth,
      width: e.clientWidth,
      height: e.clientHeight,
    });
  },
  Un = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  Wn = function () {
    var e = Un(),
      t = Hn(),
      n = e.y,
      r = e.x,
      i = document.documentElement,
      a = i.clientWidth,
      o = i.clientHeight;
    return {
      container: hn({ top: n, left: r, right: r + a, bottom: n + o }),
      scroll: { current: e, max: t },
    };
  },
  Gn = function (e) {
    var t = e.input,
      n = e.dragStartTime,
      r = e.shouldUseTimeDampening,
      i = e.scrollElement,
      a = e.scrollWindow,
      o = e.behavior,
      s = function () {
        var e = Wn(),
          i = Bn({
            dragStartTime: n,
            viewport: e,
            center: { x: t.clientX + e.scroll.current.x, y: t.clientY + e.scroll.current.y },
            shouldUseTimeDampening: r,
          });
        return i ? (a(i), !0) : !1;
      },
      c = function () {
        var e = mn(Ne({ x: t.clientX, y: t.clientY }));
        if (!e) return !1;
        var a = zn({
          dragStartTime: n,
          scrollable: gn({ closestScrollable: e }),
          center: { x: t.clientX, y: t.clientY },
          shouldUseTimeDampening: r,
        });
        return a ? (i(e, a), !0) : !1;
      };
    (o === `container-only` && c(),
      o === `window-only` && s(),
      o === `container-then-window` && (c() || s()),
      o === `window-then-container` && (s() || c()));
  },
  Kn = function (e, t) {
    e.scrollBy(t.x, t.y);
  },
  qn = function (e) {
    window.scrollBy(e.x, e.y);
  },
  Jn = (function () {
    var e = null;
    function t(t) {
      e != null &&
        Gn({
          input: e.latestInput,
          dragStartTime: e.dragStartTime,
          shouldUseTimeDampening: e.shouldUseTimeDampening,
          behavior: e.behavior,
          scrollElement: t ?? Kn,
          scrollWindow: t ?? qn,
        });
    }
    function n() {
      e &&
        (e.loopFrameId = requestAnimationFrame(function () {
          (t(), n());
        }));
    }
    var r = function (r) {
      var i = r.input,
        a = r.behavior,
        o = a === void 0 ? `window-then-container` : a;
      ((e = {
        dragStartTime: Date.now(),
        latestInput: i,
        loopFrameId: null,
        shouldUseTimeDampening: !1,
        behavior: o,
      }),
        t(function () {
          e && (e.shouldUseTimeDampening = !0);
        }),
        n());
    };
    function i(t) {
      var n = t.input;
      e && (e.latestInput = n);
    }
    return {
      start: r,
      updateInput: i,
      stop: function () {
        e &&= (e.loopFrameId && cancelAnimationFrame(e.loopFrameId), null);
      },
    };
  })();
function Yn(e) {
  e.defaultPrevented ||
    (e.dataTransfer && (e.dataTransfer.dropEffect = `move`), e.preventDefault());
}
var Xn = null;
function Zn() {
  (Qn(),
    (Xn = (0, W.bindAll)(
      window,
      [
        { type: `dragover`, listener: Yn },
        { type: `dragenter`, listener: Yn },
        {
          type: `drop`,
          listener: function (e) {
            (e.preventDefault(), Qn());
          },
        },
        { type: `dragend`, listener: Qn },
      ].concat(r(rt({ onDragEnd: Qn }))),
      { capture: !1 },
    )));
}
function Qn() {
  var e;
  ((e = Xn) == null || e(), (Xn = null));
}
function $n() {
  if (window.event?.type === `drop`) {
    var e;
    (e = window.event) == null || e.preventDefault();
  }
  Qn();
}
var er = { start: Zn, stop: $n };
function tr(e) {
  var t = e.dragController,
    n = e.contextId,
    r = (0, A.useCallback)(
      function (e) {
        t.updateDrag({ targetLocation: Oe(e.current) });
      },
      [t],
    );
  (0, A.useEffect)(
    function () {
      return Ht({
        canMonitor: function (e) {
          var t = e.initial,
            r = e.source;
          if (!B(r.data) || r.data.contextId !== n) return !1;
          var i = t.dropTargets.find(function (e) {
            return xe(e.data);
          });
          return i ? i.data.contextId === n : !0;
        },
        onDragStart: function (e) {
          var n = e.location,
            r = e.source;
          (Jn.start({ input: n.current.input }), er.start());
          var i = r.data;
          k(B(i));
          var a = i.draggableId,
            o = i.droppableId,
            s = i.getIndex,
            c = i.type;
          t.startDrag({
            draggableId: a,
            type: c,
            getSourceLocation: function () {
              return { droppableId: o, index: s() };
            },
            sourceElement: r.element,
            mode: `FLUID`,
          });
        },
        onDrag: function (e) {
          var t = e.location;
          (Jn.updateInput({ input: t.current.input }), r(t));
        },
        onDropTargetChange: function (e) {
          var t = e.location;
          r(t);
        },
        onDrop: function () {
          (Jn.stop(), er.stop(), t.stopDrag({ reason: `DROP` }));
        },
      });
    },
    [t, n, r],
  );
}
var nr = typeof window < `u` ? A.useLayoutEffect : A.useEffect,
  rr = `data-rbd-style-context-id`;
function ir(e) {
  var t = e.selector,
    n = e.styles;
  return `${t} { ${Object.entries(n)
    .map(function (e) {
      var t = o(e, 2);
      return `${t[0]}: ${t[1]};`;
    })
    .join(` `)} }`;
}
function ar(e) {
  return ir({
    selector: `[${F.dragHandle.contextId}="${e}"]`,
    styles: { cursor: `grab`, "-webkit-touch-callout": `none` },
  });
}
function or(e) {
  var t = e.contextId,
    n = e.nonce,
    r = document.createElement(`style`);
  return (n && r.setAttribute(`nonce`, n), r.setAttribute(rr, t), document.head.appendChild(r), r);
}
function sr(e) {
  var t = e.contextId,
    n = e.nonce,
    r = or({ contextId: t, nonce: n });
  return (
    (r.textContent = ar(t)),
    function () {
      r.remove();
    }
  );
}
function cr(e) {
  var t = e.contextId,
    n = e.nonce;
  nr(
    function () {
      return sr({ contextId: t, nonce: n });
    },
    [t, n],
  );
}
var X = e(t()),
  lr = (function () {
    return typeof X.unstable_batchedUpdates == `function` &&
      (X.version === void 0 || X.version.startsWith(`16`))
      ? X.unstable_batchedUpdates
      : function (e) {
          return e();
        };
  })();
function ur(e) {
  lr(e);
}
function dr(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = fr(e)) || (t && e && typeof e.length == `number`)) {
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
function fr(e, t) {
  if (e) {
    if (typeof e == `string`) return pr(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? pr(e, t)
          : void 0
    );
  }
}
function pr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function mr() {
  return {
    onPendingDragStart: [],
    onPrePendingDragUpdate: [],
    onPendingDragUpdate: [],
    onBeforeDragEnd: [],
  };
}
function hr() {
  var e = mr();
  return {
    addResponder: function (t, n) {
      return (
        e[t].push(n),
        function () {
          e[t] = e[t].filter(function (e) {
            return e !== n;
          });
        }
      );
    },
    dispatch: function (t, n) {
      ur(function () {
        var r = dr(e[t]),
          i;
        try {
          for (r.s(); !(i = r.n()).done; ) {
            var a = i.value;
            a(n);
          }
        } catch (e) {
          r.e(e);
        } finally {
          r.f();
        }
      });
    },
  };
}
function gr() {
  return o((0, A.useState)(hr), 1)[0];
}
var _r = (0, A.createContext)(null);
function vr(e) {
  var t = e.children,
    n = e.lifecycle,
    r = (0, A.useCallback)(
      function (e) {
        for (var t = [], r = 0, i = Object.entries(e); r < i.length; r++) {
          var a = i[r],
            s = o(a, 2),
            c = s[0],
            l = s[1];
          t.push(n.addResponder(c, l));
        }
        return H.apply(void 0, t);
      },
      [n],
    );
  return A.createElement(_r.Provider, { value: r }, t);
}
function yr() {
  var e = (0, A.useContext)(_r);
  return (k(e !== null, `useLifecycle() should only be called inside of a <DragDropContext />`), e);
}
var br = null,
  Z = `1px`,
  xr = {
    width: Z,
    height: Z,
    padding: `0`,
    position: `absolute`,
    border: `0`,
    clip: `rect(${Z}, ${Z}, ${Z}, ${Z})`,
    overflow: `hidden`,
    whiteSpace: `nowrap`,
    marginTop: `-${Z}`,
    pointerEvents: `none`,
  };
function Sr() {
  var e = document.createElement(`div`);
  return (e.setAttribute(`role`, `alert`), Object.assign(e.style, xr), document.body.append(e), e);
}
function Cr() {
  return (br === null && (br = Sr()), br);
}
function wr(e) {
  var t = Cr();
  t.textContent = e;
}
function Tr(e) {
  return e.index + 1;
}
var Er = {
  onDragStart: function (e) {
    var t = e.source;
    return `You have lifted an item in position ${Tr(t)}.`;
  },
  onDragUpdate: function (e) {
    var t = e.source,
      n = e.destination;
    if (!n) return `You are currently not dragging over a droppable area.`;
    var r = Tr(t),
      i = Tr(n);
    return t.droppableId === n.droppableId
      ? `You have moved the item from position ${r} to position ${i}.`
      : `You have moved the item from position ${r} in list ${t.droppableId} to list ${n.droppableId} in position ${i}.`;
  },
  onDragEnd: function (e) {
    var t = e.source,
      n = e.destination,
      r = e.reason,
      i = Tr(t);
    if (r === `CANCEL`)
      return `Movement cancelled. The item has returned to its starting position of ${i}.`;
    if (!n)
      return `The item has been dropped while not over a droppable location. The item has returned to its starting position of ${i}.`;
    var a = Tr(n);
    return t.droppableId === n.droppableId
      ? `You have dropped the item. It has moved from position ${i} to ${a}.`
      : `You have dropped the item. It has moved from position ${i} in list ${t.droppableId} to position ${a} in list ${n.droppableId}.`;
  },
};
function Dr(e, t) {
  return Er[e](t);
}
function Or(e, t) {
  var n = null,
    r = {
      announce: function (e) {
        n = e;
      },
    };
  function i() {
    return n ?? Dr(e, t);
  }
  return { provided: r, getMessage: i };
}
var kr = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  Ar = { status: `idle` };
function jr() {
  var e = Ar,
    t = function (t) {
      (e.status === `idle` && (e = { status: `pending`, timeoutId: setTimeout(n, 0), items: [] }),
        e.items.push(t));
    },
    n = function () {
      if (e.status !== `idle`) {
        clearTimeout(e.timeoutId);
        var t = Array.from(e.items);
        ((e = Ar),
          ur(function () {
            t.forEach(function (e) {
              return e();
            });
          }));
      }
    };
  return { schedule: t, flush: n };
}
function Mr() {
  return o((0, A.useState)(jr), 1)[0];
}
var Nr = 0;
function Pr() {
  return `${Nr++}`;
}
function Fr(e) {
  var t = ue(e);
  return { top: t.offsetTop, left: t.offsetLeft };
}
function Ir(e) {
  var t = e.children,
    n = e.dragHandleUsageInstructions,
    r = n === void 0 ? kr : n,
    i = e.nonce,
    a = e.onBeforeCapture,
    s = e.onBeforeDragStart,
    c = e.onDragStart,
    l = e.onDragUpdate,
    u = e.onDragEnd,
    d = o((0, A.useState)(Pr), 1)[0];
  Qt({ contextId: d, text: r });
  var f = gr(),
    p = Mr(),
    m = p.schedule,
    h = p.flush,
    g = (0, A.useRef)({ isDragging: !1 }),
    _ = (0, A.useCallback)(function () {
      return g.current;
    }, []),
    v = Ae(),
    y = (0, A.useCallback)(
      function (e) {
        for (
          var t = e.droppableId, n = v.getEntry({ droppableId: t });
          n !== null && n.isDropDisabled;
        ) {
          var r = n.parentDroppableId;
          n = r ? v.getEntry({ droppableId: r }) : null;
        }
        return n === null ? null : { droppableId: n.droppableId, index: 0 };
      },
      [v],
    );
  (0, A.useEffect)(
    function () {
      return function () {
        _().isDragging && de();
      };
    },
    [_],
  );
  var b = (0, A.useCallback)(
      function (e) {
        var t = e.targetLocation,
          n = e.isImmediate,
          r = n === void 0 ? !1 : n;
        if (!g.current.isDragging) return;
        var i = g.current,
          a = i.prevDestination,
          o = i.draggableId,
          s = i.type,
          c = i.sourceLocation,
          u = Xt({ start: c, target: t });
        if (V(a, u)) return;
        Object.assign(g.current, { prevDestination: u, sourceLocation: c, targetLocation: t });
        var d = {
            mode: g.current.mode,
            draggableId: o,
            type: s,
            source: c,
            destination: u,
            combine: null,
          },
          p = t ? v.getEntry({ droppableId: t.droppableId }) : null;
        (f.dispatch(`onPrePendingDragUpdate`, { update: d, targetLocation: t }),
          f.dispatch(`onPendingDragUpdate`, { update: d, targetLocation: t, droppable: p }));
        function h() {
          var e = Or(`onDragUpdate`, d),
            t = e.provided,
            n = e.getMessage;
          (l?.(d, t), wr(n()));
        }
        r ? h() : m(h);
      },
      [v, f, l, m],
    ),
    ee = (0, A.useCallback)(
      function (e) {
        var t = e.draggableId,
          n = e.type,
          r = e.getSourceLocation,
          i = e.sourceElement,
          o = e.mode;
        if (!g.current.isDragging) {
          a?.({ draggableId: t, mode: o });
          var l = { mode: o, draggableId: t, type: n, source: r() },
            u = document.activeElement,
            d =
              u instanceof HTMLElement && u.hasAttribute(F.dragHandle.draggableId)
                ? L(u, F.dragHandle.draggableId)
                : null,
            p = l.source.droppableId,
            h = v.getEntry({ droppableId: p });
          (k(h, `should have entry for droppable '${p}'`),
            (g.current = {
              isDragging: !0,
              mode: o,
              draggableDimensions: ne(i),
              restoreFocusTo: d,
              draggableId: t,
              type: n,
              prevDestination: l.source,
              sourceLocation: l.source,
              targetLocation: l.source,
              draggableInitialOffsetInSourceDroppable: Fr({ element: i, mode: h.mode }),
            }),
            s?.(l),
            f.dispatch(`onPendingDragStart`, { start: l, droppable: h }),
            m(function () {
              var e = { mode: o, draggableId: t, type: n, source: r() },
                i = Or(`onDragStart`, e),
                a = i.provided,
                s = i.getMessage;
              (c?.(e, a),
                wr(s()),
                m(function () {
                  var t = e.source.droppableId,
                    n = v.getEntry({ droppableId: t });
                  n != null &&
                    n.isDropDisabled &&
                    b({ targetLocation: y({ droppableId: t }), isImmediate: !0 });
                }));
            }));
        }
      },
      [v, y, f, a, s, c, m, b],
    ),
    x = ie(),
    S = (0, A.useCallback)(
      function (e) {
        var t = e.reason;
        if (g.current.isDragging) {
          (x.runCleanupFn(), t === `CANCEL` && b({ targetLocation: null }));
          var n = g.current,
            r = n.mode,
            i = n.restoreFocusTo,
            a = n.sourceLocation,
            o = n.targetLocation,
            s = n.type,
            c = n.draggableId;
          ((g.current = { isDragging: !1 }), h());
          var l = Xt({ start: a, target: o }),
            p = {
              reason: l === null ? `CANCEL` : `DROP`,
              type: s,
              source: a,
              destination: l,
              mode: r,
              draggableId: c,
              combine: null,
            };
          f.dispatch(`onBeforeDragEnd`, { draggableId: c });
          var m = Or(`onDragEnd`, p),
            _ = m.provided,
            v = m.getMessage;
          (u(p, _),
            wr(v()),
            i &&
              requestAnimationFrame(function () {
                var e = le({ contextId: d, draggableId: c });
                e && e.focus();
              }));
        }
      },
      [d, h, x, f, u, b],
    ),
    C = (0, A.useMemo)(
      function () {
        return { getDragState: _, startDrag: ee, updateDrag: b, stopDrag: S };
      },
      [_, ee, S, b],
    );
  tr({ dragController: C, contextId: d });
  var w = cn({
      dragController: C,
      droppableRegistry: v,
      contextId: d,
      setKeyboardCleanupFn: x.setCleanupFn,
    }).startKeyboardDrag,
    T = (0, A.useCallback)(
      function (e) {
        var t = g.current;
        t.isDragging &&
          e.isDropDisabled &&
          e.droppableId === t.targetLocation?.droppableId &&
          b({ targetLocation: y({ droppableId: e.droppableId }) });
      },
      [y, b],
    );
  return (
    v.setUpdateListener(T),
    cr({ contextId: d, nonce: i }),
    A.createElement(
      qt,
      { contextId: d, dragController: C },
      A.createElement(
        vr,
        { lifecycle: f },
        A.createElement(
          te,
          { contextId: d, getDragState: _, startKeyboardDrag: w, droppableRegistry: v },
          t,
        ),
      ),
    )
  );
}
var Lr = (function () {
  if (typeof window > `u`) return null;
  var e = new Image();
  return (
    (e.src = `data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==`),
    e
  );
})();
function Rr(e) {
  var t = e.nativeSetDragImage;
  t && Lr && t(Lr, 0, 0);
}
var zr = (0, A.createContext)(null),
  Br = zr.Provider;
function Vr() {
  var e = (0, A.useContext)(zr);
  return (k(e, `Missing <Droppable /> parent`), e);
}
function Hr() {
  var e = (0, A.useContext)(zr);
  return e ? e.droppableId : null;
}
function Ur(e) {
  var t = e.elementRef,
    n = e.data,
    r = e.direction,
    i = e.contextId,
    a = e.isDropDisabled,
    o = e.type;
  (0, A.useEffect)(
    function () {
      var e = t.current;
      return (
        k(e instanceof HTMLElement),
        Vt({
          element: e,
          getIsSticky: function () {
            return !0;
          },
          canDrop: function (e) {
            var t = e.source;
            return !B(t.data) || a ? !1 : t.data.type === o && t.data.contextId === i;
          },
          getData: function (t) {
            var i = t.input;
            return ge(n, {
              element: e,
              input: i,
              allowedEdges: r === `vertical` ? [`top`, `bottom`] : [`left`, `right`],
            });
          },
        })
      );
    },
    [n, r, i, a, o, t],
  );
}
function Wr() {
  return { startKeyboardDrag: M().startKeyboardDrag };
}
function Gr() {
  return R({ attribute: I.dropIndicator });
}
function Kr(e) {
  return R({ attribute: F.placeholder.contextId, value: e });
}
function qr(e) {
  var t = (0, A.useRef)(e);
  return (
    (0, A.useEffect)(
      function () {
        t.current = e;
      },
      [e],
    ),
    (0, A.useCallback)(function () {
      return t.current;
    }, [])
  );
}
var Jr = { dragging: 5e3 };
function Yr(e, t) {
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
function Xr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Yr(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Yr(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Zr = { transform: void 0, transition: void 0 },
  Qr = {
    position: `fixed`,
    top: 0,
    left: 0,
    boxSizing: `border-box`,
    transition: `none`,
    zIndex: Jr.dragging,
    opacity: 0.75,
    pointerEvents: `none`,
  };
function $r(e) {
  var t = e.draggableDimensions,
    n = e.previewOffset,
    r = t.rect,
    i = r.left + n.x,
    a = r.top + n.y,
    o = i === 0 && a === 0;
  return Xr(
    Xr({}, Qr),
    {},
    { transform: o ? void 0 : `translate(${i}px, ${a}px)`, width: r.width, height: r.height },
  );
}
function ei(e) {
  var t = e.draggableDimensions,
    n = e.draggableState;
  return n.type !== `dragging` || !n.previewOffset || !t
    ? Zr
    : $r({ draggableDimensions: t, previewOffset: n.previewOffset });
}
var ti = {
  input: !0,
  button: !0,
  textarea: !0,
  select: !0,
  option: !0,
  optgroup: !0,
  video: !0,
  audio: !0,
};
function ni(e, t) {
  if (t == null) return !1;
  if (ti[t.tagName.toLowerCase()]) return !0;
  var n = t.getAttribute(`contenteditable`);
  return n === `true` || n === `` ? !0 : t === e ? !1 : ni(e, t.parentElement);
}
function ri(e, t) {
  var n = t.target;
  return n instanceof HTMLElement ? ni(e, n) : !1;
}
function ii(e, t) {
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
function ai(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ii(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ii(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var oi = (0, A.memo)(
    (0, A.forwardRef)(function (e, t) {
      var n = e.style,
        r = N(),
        i = M().contextId,
        a = d({}, F.placeholder.contextId, i),
        o = (0, A.useMemo)(
          function () {
            if (r) {
              var e = r.margin,
                t = r.rect;
              return ai(
                { boxSizing: `border-box`, width: t.width, height: t.height, margin: e },
                n,
              );
            }
          },
          [r, n],
        );
      return A.createElement(`div`, m({ ref: t, style: o }, a));
    }),
  ),
  Q = {
    vertical: {
      mainAxis: {
        name: `y`,
        offset: `offsetTop`,
        length: `offsetHeight`,
        scrollOffset: `scrollTop`,
        forwardEdge: `bottom`,
        overflow: `overflowY`,
        style: { length: `height`, transform: `translateY` },
      },
      crossAxis: {
        name: `x`,
        offset: `offsetLeft`,
        length: `offsetWidth`,
        style: { length: `width`, offset: `left` },
      },
    },
    horizontal: {
      mainAxis: {
        name: `x`,
        offset: `offsetLeft`,
        length: `offsetWidth`,
        scrollOffset: `scrollLeft`,
        forwardEdge: `right`,
        overflow: `overflowX`,
        style: { length: `width`, transform: `translateX` },
      },
      crossAxis: {
        name: `y`,
        offset: `offsetTop`,
        length: `offsetHeight`,
        style: { length: `height`, offset: `top` },
      },
    },
  };
function si(e, t) {
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
function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? si(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : si(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var ci = { type: `idle`, draggingOver: null };
function li(e) {
  return { type: `hiding`, draggingOver: null, mode: e };
}
var ui = {
  initial: function (e) {
    var t = Q[e.direction],
      n = t.mainAxis,
      r = t.crossAxis;
    return d(d({}, n.name, 0), r.name, 24);
  },
  home: function (e) {
    var t = e.droppable.direction,
      n = e.placeholderRect,
      r = e.draggableDimensions;
    k(n, `the placeholder should exist if in home position`);
    var i = { x: n.x - r.rect.x, y: n.y - r.rect.y },
      a = Q[t],
      o = a.mainAxis,
      s = a.crossAxis;
    return d(d({}, o.name, i[o.name]), s.name, i[s.name] + 24);
  },
  away: function (e) {
    var t = e.droppable.direction,
      n = e.dropIndicatorRect,
      r = e.draggableDimensions;
    k(n, `the drop indicator should exist if in away position`);
    var i = { x: n.x - r.rect.x, y: n.y - r.rect.y },
      a = Q[t],
      o = a.mainAxis,
      s = a.crossAxis;
    return d(d({}, o.name, i[o.name] - 0.5 * r.rect[o.style.length]), s.name, i[s.name] + 24);
  },
};
function di(e, t) {
  var n = t.update,
    r = t.droppable,
    i = t.draggableDimensions,
    a = t.placeholderRect,
    o = t.dropIndicatorRect;
  if (!r || !i) return e;
  var s = { droppable: r, draggableDimensions: i, placeholderRect: a, dropIndicatorRect: o },
    c = V(n.source, n.destination ?? null) ? ui.home(s) : ui.away(s);
  return c ? $($({}, e), {}, { previewOffset: c }) : e;
}
function fi(e, t) {
  var n = t.start,
    r = t.previewOffset;
  return (
    k(e.type === `idle`, `The draggable is idle.`),
    {
      type: `dragging`,
      draggingOver: n.source.droppableId,
      location: null,
      start: n.source,
      draggableId: n.draggableId,
      mode: n.mode,
      previewOffset: r,
    }
  );
}
function pi(e, t) {
  if (t.type === `START_POINTER_DRAG`)
    return fi(e, $($({}, t.payload), {}, { previewOffset: { x: 0, y: 0 } }));
  if (t.type === `START_KEYBOARD_DRAG`) {
    var n = t.payload,
      r = n.draggableDimensions,
      i = n.droppable;
    return fi(
      e,
      $(
        $({}, t.payload),
        {},
        { previewOffset: ui.initial({ draggableDimensions: r, direction: i.direction }) },
      ),
    );
  }
  if (t.type === `UPDATE_DRAG`) {
    k(e.type === `dragging`, `The draggable is dragging.`);
    var a = t.payload.update,
      o = a.destination ? a.destination.droppableId : null;
    return o === e.draggingOver ? e : $($({}, e), {}, { draggingOver: o });
  }
  if (t.type === `UPDATE_POINTER_PREVIEW`) {
    k(e.type === `dragging`, `The draggable is dragging.`);
    var s = t.payload.pointerLocation;
    return $(
      $({}, e),
      {},
      {
        previewOffset: {
          x: s.current.input.clientX - s.initial.input.clientX,
          y: s.current.input.clientY - s.initial.input.clientY,
        },
      },
    );
  }
  return t.type === `UPDATE_KEYBOARD_PREVIEW`
    ? (k(e.type === `dragging`, `The draggable is dragging.`),
      e.type === `dragging` ? di(e, t.payload) : e)
    : t.type === `DROP`
      ? (k(e.type === `dragging`, `The draggable is dragging.`), ci)
      : t.type === `START_HIDING`
        ? (k(e.type === `idle` || e.type === `hiding`), li(t.payload.mode))
        : t.type === `STOP_HIDING`
          ? (k(e.type === `hiding`), ci)
          : e;
}
function mi(e) {
  var t = e.draggingOver,
    n = e.isClone,
    r = e.isDragging,
    i = e.mode;
  return (0, A.useMemo)(
    function () {
      return {
        isClone: n,
        isDragging: r,
        draggingOver: t,
        mode: i,
        isDropAnimating: !1,
        dropAnimation: null,
        combineWith: null,
        combineTargetFor: null,
      };
    },
    [t, n, r, i],
  );
}
var hi = function () {};
function gi(e) {
  var t = e.children,
    n = e.draggableId,
    r = e.index,
    i = e.isDragDisabled,
    a = i === void 0 ? !1 : i,
    s = e.disableInteractiveElementBlocking,
    c = s === void 0 ? !1 : s,
    l = Vr(),
    u = l.direction,
    f = l.droppableId,
    p = l.type,
    m = l.mode,
    h = M(),
    g = h.contextId,
    _ = h.getDragState,
    v = (0, A.useRef)(null),
    y = (0, A.useRef)(null),
    b = ie(),
    x = b.setCleanupFn,
    S = b.runCleanupFn,
    C = (0, A.useCallback)(
      function (e) {
        (v.current && S(),
          e && x(ae(e, d(d({}, I.draggable.droppableId, f), I.draggable.index, String(r)))),
          (v.current = e),
          (y.current = le({ contextId: g, draggableId: n })));
      },
      [g, n, f, r, S, x],
    ),
    w = qr(r),
    T = o((0, A.useReducer)(pi, ci), 2),
    E = T[0],
    D = T[1],
    O = ye({ draggableId: n, droppableId: f, getIndex: w, contextId: g, type: p }),
    j = E.type === `dragging`,
    te = E.type === `hiding`,
    ne = Vr(),
    P = ne.shouldRenderCloneWhileDragging,
    re = ne.isDropDisabled,
    L = yr(),
    oe = Wr().startKeyboardDrag;
  ((0, A.useEffect)(
    function () {
      if (E.type === `idle` && !a) {
        var e = v.current;
        ee(e instanceof HTMLElement);
        var t = y.current;
        return (
          ee(t instanceof HTMLElement),
          (0, W.bindAll)(t, [
            {
              type: `keydown`,
              listener: function (t) {
                if (t.key === ` `) {
                  if (t.defaultPrevented || (!c && ri(e, t))) return;
                  (t.preventDefault(),
                    oe({
                      event: t,
                      draggableId: n,
                      type: p,
                      getSourceLocation: function () {
                        return { droppableId: f, index: w() };
                      },
                      sourceElement: e,
                    }));
                }
              },
            },
          ])
        );
      }
    },
    [c, n, f, w, a, oe, E.type, p],
  ),
    (0, A.useEffect)(
      function () {
        if (!te && !a) {
          var e = v.current;
          k(e instanceof HTMLElement);
          var t = y.current;
          return (
            k(t instanceof HTMLElement),
            Ut({
              canDrag: function (e) {
                var n = e.input;
                return n.ctrlKey || n.metaKey || n.shiftKey || n.altKey
                  ? !1
                  : c
                    ? !j
                    : !ni(t, Ne({ x: n.clientX, y: n.clientY }));
              },
              element: e,
              dragHandle: t,
              getInitialData: function () {
                return O;
              },
              onGenerateDragPreview: Rr,
            })
          );
        }
      },
      [O, c, a, j, te],
    ));
  var R = E.type !== `idle` && m === `standard`,
    se = (0, A.useRef)(null);
  Ur({ elementRef: R ? se : v, data: O, direction: u, contextId: g, isDropDisabled: re, type: p });
  var ce = (0, A.useRef)(!0);
  ((0, A.useEffect)(function () {
    return (
      (ce.current = !0),
      function () {
        ce.current = !1;
      }
    );
  }, []),
    (0, A.useEffect)(
      function () {
        var e = _();
        P &&
          e.isDragging &&
          e.draggableId === O.draggableId &&
          D({ type: `START_HIDING`, payload: { mode: e.mode } });
      },
      [O.draggableId, _, P],
    ));
  var z = N();
  (0, A.useEffect)(
    function () {
      return P
        ? L({
            onPendingDragStart: function (e) {
              var t = e.start;
              O.draggableId === t.draggableId &&
                D({ type: `START_HIDING`, payload: { mode: t.mode } });
            },
            onBeforeDragEnd: function (e) {
              e.draggableId === O.draggableId && D({ type: `STOP_HIDING` });
            },
          })
        : H(
            L({
              onPendingDragStart: function (e) {
                var t = e.start,
                  n = e.droppable;
                if (O.draggableId === t.draggableId) {
                  if (t.mode === `FLUID`)
                    return D({ type: `START_POINTER_DRAG`, payload: { start: t } });
                  if (t.mode === `SNAP`) {
                    var r = _();
                    return (
                      k(r.isDragging && r.draggableDimensions),
                      D({
                        type: `START_KEYBOARD_DRAG`,
                        payload: {
                          start: t,
                          draggableDimensions: r.draggableDimensions,
                          droppable: n,
                        },
                      })
                    );
                  }
                }
              },
              onPendingDragUpdate: function (e) {
                var t = e.update,
                  n = e.droppable;
                O.draggableId === t.draggableId &&
                  (D({ type: `UPDATE_DRAG`, payload: { update: t } }),
                  t.mode === `SNAP` &&
                    queueMicrotask(function () {
                      if (_().isDragging) {
                        var e = Kr(g),
                          r = e ? e.getBoundingClientRect() : null,
                          i = Gr();
                        D({
                          type: `UPDATE_KEYBOARD_PREVIEW`,
                          payload: {
                            update: t,
                            draggableDimensions: z,
                            droppable: n,
                            placeholderRect: r,
                            dropIndicatorRect: i ? i.getBoundingClientRect() : null,
                          },
                        });
                      }
                    }));
              },
              onBeforeDragEnd: function (e) {
                e.draggableId === O.draggableId &&
                  (k(ce.current, `isMounted onBeforeDragEnd`), D({ type: `DROP` }));
              },
            }),
            Ht({
              canMonitor: function (e) {
                var t = e.source;
                return B(t.data)
                  ? t.data.contextId === O.contextId && t.data.draggableId === O.draggableId
                  : !1;
              },
              onDrag: function (e) {
                var t = e.location;
                D({ type: `UPDATE_POINTER_PREVIEW`, payload: { pointerLocation: t } });
              },
            }),
          );
    },
    [O.draggableId, O.contextId, L, P, u, g, z, _],
  );
  var ue = (0, A.useMemo)(
      function () {
        return {
          draggableProps: d(
            d(d({}, F.draggable.contextId, g), F.draggable.id, n),
            `style`,
            ei({ draggableDimensions: z, draggableState: E }),
          ),
          dragHandleProps: d(
            d(
              d(
                d(
                  d({ role: `button`, "aria-describedby": Zt(g) }, F.dragHandle.contextId, g),
                  F.dragHandle.draggableId,
                  n,
                ),
                `tabIndex`,
                0,
              ),
              `draggable`,
              !1,
            ),
            `onDragStart`,
            hi,
          ),
          innerRef: C,
        };
      },
      [g, n, z, E, C],
    ),
    de = mi({ draggingOver: E.draggingOver, isClone: !1, isDragging: j, mode: j ? E.mode : null }),
    fe = (0, A.useMemo)(
      function () {
        return { draggableId: n, type: p, source: { droppableId: f, index: r } };
      },
      [n, f, r, p],
    );
  return A.createElement(
    A.Fragment,
    null,
    te ? null : t(ue, de, fe),
    R && A.createElement(oi, { ref: se }),
  );
}
function _i() {
  return document.body;
}
function vi(e) {
  var t = e.children,
    n = e.droppableId,
    r = e.type,
    i = e.draggableId,
    a = e.index,
    o = e.draggingOver,
    s = e.style,
    c = e.getContainerForClone,
    l = c === void 0 ? _i : c,
    u = e.mode,
    f = M().contextId,
    p = (0, A.useCallback)(
      function (e) {
        e && le({ contextId: f, draggableId: i })?.focus();
      },
      [f, i],
    );
  return (0, X.createPortal)(
    t(
      (0, A.useMemo)(
        function () {
          return {
            innerRef: p,
            draggableProps: d(d(d({}, F.draggable.contextId, f), F.draggable.id, i), `style`, s),
            dragHandleProps: d(
              d(
                d(
                  d(
                    d({ role: `button`, "aria-describedby": Zt(f) }, F.dragHandle.contextId, f),
                    F.dragHandle.draggableId,
                    i,
                  ),
                  `tabIndex`,
                  0,
                ),
                `draggable`,
                !1,
              ),
              `onDragStart`,
              function () {},
            ),
          };
        },
        [f, i, p, s],
      ),
      mi({ draggingOver: o, isClone: !0, isDragging: !0, mode: u }),
      (0, A.useMemo)(
        function () {
          return { draggableId: i, type: r, source: { droppableId: n, index: a } };
        },
        [i, n, a, r],
      ),
    ),
    l(),
  );
}
function yi(e) {
  var t = e.children,
    n = e.droppableId,
    r = e.type,
    i = e.getContainerForClone,
    a = M(),
    s = a.contextId,
    c = a.getDragState,
    l = N(),
    u = o((0, A.useReducer)(pi, ci), 2),
    d = u[0],
    f = u[1],
    p = yr();
  if (
    ((0, A.useEffect)(
      function () {
        return H(
          p({
            onPendingDragStart: function (e) {
              var t = e.start,
                r = e.droppable;
              if (n === t.source.droppableId) {
                if (t.mode === `FLUID`)
                  return f({ type: `START_POINTER_DRAG`, payload: { start: t } });
                if (t.mode === `SNAP`) {
                  var i = c();
                  return (
                    k(i.isDragging && i.draggableDimensions),
                    f({
                      type: `START_KEYBOARD_DRAG`,
                      payload: {
                        start: t,
                        draggableDimensions: i.draggableDimensions,
                        droppable: r,
                      },
                    })
                  );
                }
              }
            },
            onPendingDragUpdate: function (e) {
              var t = e.update,
                n = e.droppable;
              d.type === `dragging` &&
                d.draggableId === t.draggableId &&
                (f({ type: `UPDATE_DRAG`, payload: { update: t } }),
                t.mode === `SNAP` &&
                  queueMicrotask(function () {
                    if (c().isDragging) {
                      var e = Kr(s),
                        r = e ? e.getBoundingClientRect() : null,
                        i = Gr();
                      f({
                        type: `UPDATE_KEYBOARD_PREVIEW`,
                        payload: {
                          update: t,
                          draggableDimensions: l,
                          droppable: n,
                          placeholderRect: r,
                          dropIndicatorRect: i ? i.getBoundingClientRect() : null,
                        },
                      });
                    }
                  }));
            },
            onBeforeDragEnd: function (e) {
              var t = e.draggableId;
              d.type === `dragging` && t === d.draggableId && f({ type: `DROP` });
            },
          }),
          Ht({
            canMonitor: function (e) {
              var t = e.source;
              return B(t.data) ? t.data.contextId === s && t.data.droppableId === n : !1;
            },
            onDrag: function (e) {
              var t = e.location;
              f({ type: `UPDATE_POINTER_PREVIEW`, payload: { pointerLocation: t } });
            },
          }),
        );
      },
      [n, s, p, d, l, c],
    ),
    d.type !== `dragging`)
  )
    return null;
  var m = ei({ draggableDimensions: l, draggableState: d });
  return A.createElement(
    vi,
    {
      droppableId: n,
      type: r,
      draggableId: d.draggableId,
      index: d.start.index,
      draggingOver: d.draggingOver,
      mode: d.mode,
      style: m,
      getContainerForClone: i,
    },
    t,
  );
}
var bi = {
  horizontal: { rect: { start: `left`, end: `right` } },
  vertical: { rect: { start: `top`, end: `bottom` } },
};
function xi(e) {
  var t = e.a,
    n = e.b,
    r = bi[e.direction].rect;
  return Math.max(t[r.start], n[r.start]) - Math.min(t[r.end], n[r.end]);
}
function Si(e) {
  return L(e, I.draggable.droppableId);
}
function Ci(e) {
  var t = L(e, I.draggable.index),
    n = parseInt(t);
  return (k(Number.isInteger(n), `invalid index: '${n}' is not an integer`), n);
}
function wi(e) {
  var t = e.element,
    n = e.where,
    r = e.direction,
    i = e.contextId,
    a = Si(t),
    o = Ci(t),
    s = o - 1,
    c = o + 1,
    l = nn(i, { droppableId: a, index: n === `before` ? s : c });
  if (l === null) {
    var u = getComputedStyle(t),
      d = u.marginTop,
      f = u.marginRight,
      p = u.marginBottom,
      m = u.marginLeft;
    return r === `horizontal` ? parseFloat(m) + parseFloat(f) : parseFloat(d) + parseFloat(p);
  }
  return xi({ direction: r, a: t.getBoundingClientRect(), b: l.getBoundingClientRect() });
}
function Ti(e) {
  var t = e.element,
    n = e.where,
    r = e.direction,
    i = e.contextId,
    a = wi({ element: t, where: n, direction: r, contextId: i });
  return n === `before` ? -a / 2 : a / 2;
}
function Ei(e) {
  var t = e.element,
    n = e.isForwardEdge,
    r = e.mode,
    i = e.direction,
    a = e.contextId,
    o = Q[i],
    s = o.mainAxis,
    c = o.crossAxis,
    l = ue({ element: t, mode: r }),
    u = Ti({ element: t, where: n ? `after` : `before`, direction: i, contextId: a }),
    d = l[s.offset] - 1;
  return {
    mainAxis: { offset: (n ? d + t[s.length] : d) + u },
    crossAxis: { offset: l[c.offset], length: l[c.length] },
  };
}
function Di(e) {
  var t = e.element,
    n = Q[e.direction],
    r = n.mainAxis,
    i = n.crossAxis;
  return {
    mainAxis: { offset: t[r.offset] - 1 + t[r.length] / 2 },
    crossAxis: { offset: t[i.offset], length: t[i.length] },
  };
}
function Oi(e) {
  var t = e.element,
    n = Q[e.direction].mainAxis,
    r = $t(t);
  return !r || getComputedStyle(r).position !== `static` ? 0 : r[n.offset];
}
function ki(e) {
  var t = e.droppableId,
    n = e.direction;
  return {
    mainAxis: {
      offset: Oi({ element: ce({ attribute: F.droppable.id, value: t }), direction: n }),
    },
    crossAxis: { offset: 0, length: `100%` },
  };
}
function Ai(e) {
  var t = e.targetLocation,
    n = e.isInHomeLocation,
    r = e.direction,
    i = e.mode,
    a = e.contextId;
  if (n) {
    var o = Kr(a);
    return o ? Di({ element: o, direction: r }) : null;
  }
  if (t.index === 0) {
    var s = nn(a, t);
    return s
      ? Ei({ element: s, isForwardEdge: !1, mode: i, direction: r, contextId: a })
      : ki({ droppableId: t.droppableId, direction: r });
  }
  var c = nn(a, { droppableId: t.droppableId, index: t.index - 1 });
  return c ? Ei({ element: c, isForwardEdge: !0, mode: i, direction: r, contextId: a }) : null;
}
var ji = 4,
  Mi = x({
    background: `var(--ds-border-brand, #1868DB)`,
    scrollMarginTop: ji,
    scrollMarginBottom: ji + 1,
  }),
  Ni = x({ position: `absolute`, top: 0, left: 0 }),
  Pi = x({ opacity: 0 }),
  Fi = {
    horizontal: x({ width: 2, height: `100%`, marginLeft: -2 }),
    vertical: x({ width: `100%`, height: 2, marginTop: -2 }),
  };
function Ii(e) {
  var t = e.direction,
    n = e.dimensions,
    r = e.indicatorOffset;
  if (n === null) return { opacity: 0 };
  var i = Q[t],
    a = i.mainAxis,
    o = i.crossAxis;
  return d(
    d(
      { transform: `${a.style.transform}(${n.mainAxis.offset - r}px)` },
      o.style.length,
      n.crossAxis.length,
    ),
    o.style.offset,
    n.crossAxis.offset,
  );
}
var Li = d({}, I.dropIndicator, ``),
  Ri = function (e) {
    var t = e.direction,
      n = e.mode,
      r = M(),
      i = r.contextId,
      a = r.getDragState,
      s = (0, A.useRef)(null),
      c = o((0, A.useState)(null), 2),
      l = c[0],
      u = c[1],
      d = o((0, A.useState)(!1), 2),
      f = d[0],
      p = d[1],
      h = yr(),
      _ = (0, A.useCallback)(
        function (e) {
          var r = e.targetLocation,
            a = e.source,
            o = e.destination;
          if (!r) return u(null);
          var s = V(a, o);
          return (
            p(s),
            u(Ai({ targetLocation: r, isInHomeLocation: s, direction: t, mode: n, contextId: i }))
          );
        },
        [i, t, n],
      );
    ((0, A.useLayoutEffect)(
      function () {
        var e = a();
        if (e.isDragging) {
          var t = e.targetLocation,
            n = e.sourceLocation;
          return (
            _({ targetLocation: t, destination: Xt({ start: n, target: t }), source: n }),
            h({
              onPrePendingDragUpdate: function (e) {
                var t = e.update,
                  n = e.targetLocation,
                  r = t.destination,
                  i = r === void 0 ? null : r,
                  a = t.source;
                _({ targetLocation: n, source: a, destination: i });
              },
            })
          );
        }
      },
      [i, t, a, n, h, _],
    ),
      (0, A.useLayoutEffect)(
        function () {
          if (l !== null) {
            var e = a();
            if (!(!e.isDragging || e.mode !== `SNAP`)) {
              var t = s.current;
              (k(t instanceof HTMLElement), t.scrollIntoView({ block: `nearest` }));
            }
          }
        },
        [l, a],
      ));
    var v = Q[t].mainAxis,
      y = Ii({ direction: t, dimensions: l, indicatorOffset: s.current ? s.current[v.offset] : 0 }),
      b = n === `virtual`;
    return g(`div`, m({ ref: s, css: [Mi, Fi[t], b && Ni, f && Pi], style: y }, Li));
  };
function zi(e, t) {
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
function Bi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? zi(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : zi(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Vi = { draggingFromThisWith: null, draggingOverWith: null, isDraggingOver: !1 };
function Hi(e, t) {
  if (t.type === `DRAG_START`) {
    var n = t.payload,
      r = n.droppableId,
      i = n.start,
      a = i.draggableId,
      o = i.source,
      s = o.droppableId === r,
      c = s ? a : null,
      l = o.droppableId === r ? a : null;
    return Bi(Bi({}, e), {}, { isDraggingOver: s, draggingFromThisWith: l, draggingOverWith: c });
  }
  if (t.type === `DRAG_UPDATE`) {
    var u = t.payload,
      d = u.droppableId,
      f = u.update,
      p = f.destination,
      m = p === void 0 ? null : p,
      h = f.draggableId,
      g = f.source,
      _ = m?.droppableId === d,
      v = _ ? h : null,
      y = g.droppableId === d ? h : null;
    return Bi(Bi({}, e), {}, { isDraggingOver: _, draggingFromThisWith: y, draggingOverWith: v });
  }
  return t.type === `DRAG_CLEAR` ? Vi : e;
}
function Ui(e) {
  var t = e.draggableId,
    n = e.droppableId,
    r = e.type,
    i = e.direction,
    a = e.isDropDisabled,
    o = (0, A.useRef)(null),
    s = M(),
    c = s.contextId,
    l = s.getDragState,
    u = l();
  (k(u.isDragging, `The virtual placeholder should only be rendered during a drag`),
    Ur({
      elementRef: o,
      data: ye({
        draggableId: t,
        droppableId: n,
        getIndex: (0, A.useCallback)(
          function () {
            return u.sourceLocation.index;
          },
          [u.sourceLocation.index],
        ),
        contextId: c,
        type: r,
      }),
      direction: i,
      contextId: c,
      isDropDisabled: a,
      type: r,
    }));
  var d = (0, A.useMemo)(
    function () {
      return {
        position: `absolute`,
        top: u.draggableInitialOffsetInSourceDroppable.top,
        left: u.draggableInitialOffsetInSourceDroppable.left,
        margin: 0,
      };
    },
    [u.draggableInitialOffsetInSourceDroppable.left, u.draggableInitialOffsetInSourceDroppable.top],
  );
  return A.createElement(oi, { ref: o, style: d });
}
function Wi(e) {
  var t = e.children,
    n = e.droppableId,
    r = e.type,
    i = r === void 0 ? `DEFAULT` : r,
    a = e.direction,
    s = a === void 0 ? `vertical` : a,
    c = e.mode,
    l = c === void 0 ? `standard` : c,
    u = e.renderClone,
    f = e.getContainerForClone,
    p = e.isDropDisabled,
    m = p === void 0 ? !1 : p,
    h = qr(m),
    g = M(),
    _ = g.contextId,
    v = g.droppableRegistry,
    y = Se({ contextId: _, droppableId: n, getIsDropDisabled: h }),
    b = (0, A.useRef)(null),
    x = (0, A.useCallback)(
      function (e) {
        (e &&
          ae(
            e,
            d(
              d(d(d({}, I.droppable.type, i), I.droppable.direction, s), F.droppable.id, n),
              F.droppable.contextId,
              _,
            ),
          ),
          (b.current = e));
      },
      [_, s, n, i],
    ),
    S = o((0, A.useReducer)(Hi, Vi), 2),
    C = S[0],
    w = S[1],
    T = C.draggingFromThisWith,
    E = C.draggingOverWith,
    D = C.isDraggingOver,
    O = Hr();
  (0, A.useEffect)(
    function () {
      var e = b.current;
      return (
        ee(e instanceof HTMLElement, "innerRef must provide an `HTMLElement`"),
        H(
          v.register({
            droppableId: n,
            type: i,
            isDropDisabled: m,
            parentDroppableId: O,
            element: e,
            direction: s,
            mode: l,
          }),
          Vt({
            element: e,
            getData: function (t) {
              var n = t.input;
              return ge(y, {
                element: e,
                input: n,
                allowedEdges: s === `vertical` ? [`top`, `bottom`] : [`left`, `right`],
              });
            },
            canDrop: function (e) {
              var t = e.source;
              return !B(t.data) || m ? !1 : t.data.contextId === _ && t.data.type === i;
            },
            onDragLeave: function () {
              w({ type: `DRAG_CLEAR` });
            },
          }),
        )
      );
    },
    [y, n, _, m, i, v, O, s, l],
  );
  var k = yr();
  (0, A.useEffect)(
    function () {
      function e(e) {
        var t = e.type === i,
          r = e.destination?.droppableId === n;
        return t && ((!D && r) || (D && !r));
      }
      return k({
        onPendingDragStart: function (t) {
          var r = t.start;
          e({ destination: r.source, type: r.type }) &&
            w({ type: `DRAG_START`, payload: { droppableId: n, start: r } });
        },
        onPendingDragUpdate: function (t) {
          var r = t.update;
          e(r) && w({ type: `DRAG_UPDATE`, payload: { droppableId: n, update: r } });
        },
        onBeforeDragEnd: function () {
          w({ type: `DRAG_CLEAR` });
        },
      });
    },
    [n, D, k, i],
  );
  var j = (0, A.useMemo)(
      function () {
        return D ? A.createElement(Ri, { direction: s, mode: l }) : null;
      },
      [s, D, l],
    ),
    te = (0, A.useMemo)(
      function () {
        return {
          innerRef: x,
          droppableProps: d(d({}, F.droppable.contextId, _), F.droppable.id, n),
          placeholder: l === `standard` ? j : null,
        };
      },
      [_, j, n, l, x],
    ),
    ne = (0, A.useMemo)(
      function () {
        return {
          draggingFromThisWith: T,
          draggingOverWith: E,
          isDraggingOver: D,
          isUsingPlaceholder: D,
        };
      },
      [T, E, D],
    ),
    N = b.current,
    P = D && l === `virtual` && N;
  nr(
    function () {
      if (P && window.getComputedStyle(N).position === `static`) {
        var e = N.style.position;
        return (
          (N.style.position = `relative`),
          function () {
            N.style.position = e;
          }
        );
      }
    },
    [N, P],
  );
  var re = !!u,
    ie = (0, A.useMemo)(
      function () {
        return {
          direction: s,
          droppableId: n,
          shouldRenderCloneWhileDragging: re,
          isDropDisabled: m,
          type: i,
          mode: l,
        };
      },
      [s, n, re, m, i, l],
    ),
    L = T && l === `virtual` && N;
  return A.createElement(
    Br,
    { value: ie },
    t(te, ne),
    P && (0, X.createPortal)(j, N),
    L &&
      (0, X.createPortal)(
        A.createElement(Ui, {
          droppableId: n,
          draggableId: T,
          type: i,
          direction: s,
          isDropDisabled: m,
        }),
        N,
      ),
    u && A.createElement(yi, { droppableId: n, type: i, getContainerForClone: f }, u),
  );
}
h();
var Gi = [`isRanking`, `isRankingItem`, `testId`],
  Ki = (0, A.forwardRef)(function (e, t) {
    var n = e.isRanking,
      r = e.isRankingItem,
      i = e.testId,
      o = a(e, Gi);
    return A.createElement(
      C,
      m({ ref: t, testId: i }, o, {
        className: p([
          n && `_1e0c1ule`,
          r && `_2rkolb4i _bfhk1bhr _16qs130s`,
          `_12y3e4h9 _mizu1v1w _ra3xnqa1`,
        ]),
      }),
    );
  });
h();
var qi = [`isRanking`, `innerRef`],
  Ji = function (e) {
    var t = e.isRanking,
      n = e.innerRef,
      r = a(e, qi);
    return A.createElement(v, m({}, r, { innerRef: n, className: p([t && `_vchhusvi`]) }));
  },
  Yi = [`content`, `testId`];
function Xi(e, t, n) {
  return ((t = u(t)), s(e, Zi() ? Reflect.construct(t, n || [], u(e).constructor) : t.apply(e, n)));
}
function Zi() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Zi = function () {
    return !!e;
  })();
}
var Qi = y(
    (function (e) {
      function t() {
        return (c(this, t), Xi(this, t, arguments));
      }
      return (
        l(t, e),
        i(t, [
          {
            key: `render`,
            value: function () {
              var e = this.props,
                t = e.cell,
                n = e.head,
                r = e.isFixedSize,
                i = e.isRanking,
                o = e.refWidth,
                s = e.innerRef,
                c = e.testId,
                l = t.content,
                u = t.testId,
                d = a(t, Yi),
                f = n || {},
                p = f.shouldTruncate,
                h = f.width,
                g = b(i, o);
              return A.createElement(
                Ji,
                m({}, d, {
                  isFixedSize: r,
                  shouldTruncate: p,
                  width: h,
                  isRanking: i,
                  style: g,
                  onKeyDown: function (e) {
                    return e.stopPropagation();
                  },
                  innerRef: s,
                  "data-testid": u || (c && `${c}--rankable--table--body--cell`),
                }),
                l,
              );
            },
          },
        ])
      );
    })(A.Component),
  ),
  $i = [`cells`, `testId`, `key`, `isHighlighted`];
function ea(e, t) {
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
function ta(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ea(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ea(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function na(e, t, n) {
  return ((t = u(t)), s(e, ra() ? Reflect.construct(t, n || [], u(e).constructor) : t.apply(e, n)));
}
function ra() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ra = function () {
    return !!e;
  })();
}
var ia = y(
  (function (e) {
    function t() {
      var e;
      c(this, t);
      var n = [...arguments];
      return (
        (e = na(this, t, [].concat(n))),
        d(e, `innerRef`, function (t) {
          return function (n) {
            (t(n), typeof e.props.innerRef == `function` && e.props.innerRef(n));
          };
        }),
        e
      );
    }
    return (
      l(t, e),
      i(t, [
        {
          key: `render`,
          value: function () {
            var e = this,
              t = this.props,
              n = t.row,
              r = t.head,
              i = t.isFixedSize,
              o = t.isRanking,
              s = t.refWidth,
              c = t.rowIndex,
              l = t.isRankingDisabled,
              u = t.isHighlighted,
              d = t.testId,
              f = n.cells,
              p = n.testId,
              h = n.key,
              g = n.isHighlighted,
              _ = a(n, $i),
              v = b(o, s);
            if (typeof h != `string` && !l)
              throw Error(
                `dynamic-table: ranking is not possible because table row does not have a key. Add the key to the row or disable ranking.`,
              );
            return A.createElement(
              gi,
              { draggableId: h || c.toString(), index: c, isDragDisabled: l },
              function (t, n) {
                return A.createElement(
                  Ki,
                  m({}, _, t.dragHandleProps, t.draggableProps, {
                    role: void 0,
                    "aria-labelledby": void 0,
                    "aria-describedby": t.dragHandleProps?.[`aria-describedby`],
                    ref: e.innerRef(t.innerRef),
                    style: ta(ta({}, t.draggableProps.style), v),
                    isHighlighted: u || g,
                    isRanking: o,
                    isRankingItem: n.isDragging,
                    testId: p || (d && `${d}--rankable--table--body--row`),
                  }),
                  f.map(function (e, t) {
                    var n = (r || { cells: [] }).cells[t];
                    return A.createElement(Qi, {
                      head: n,
                      cell: e,
                      isRanking: o,
                      key: e.key || t,
                      isFixedSize: i,
                      testId: d,
                    });
                  }),
                );
              },
            );
          },
        },
      ])
    );
  })(A.Component),
);
function aa(e, t, n) {
  return ((t = u(t)), s(e, oa() ? Reflect.construct(t, n || [], u(e).constructor) : t.apply(e, n)));
}
function oa() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (oa = function () {
    return !!e;
  })();
}
var sa = function (e, t) {
    var n = e.source.index,
      r = e.destination;
    if (r) {
      var i = r.index,
        a = i < n ? i - 1 : i,
        o = a === -1 ? void 0 : t[a].key,
        s = a === -1 ? 0 : a + 1;
      return { index: i, afterKey: o, beforeKey: s < t.length ? t[s].key : void 0 };
    }
  },
  ca = (function (e) {
    function t() {
      var e;
      c(this, t);
      var n = [...arguments];
      return (
        (e = aa(this, t, [].concat(n))),
        d(e, `onBeforeDragStart`, function (t) {
          var n = t.draggableId,
            r = { index: t.source.index, key: n };
          e.props.onRankStart(r);
        }),
        d(e, `onDragEnd`, function (t) {
          var n = e.props,
            r = n.pageRows,
            i = n.onRankEnd,
            a = t.draggableId;
          i({ sourceIndex: t.source.index, sourceKey: a, destination: sa(t, r) });
        }),
        e
      );
    }
    return (
      l(t, e),
      i(t, [
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = e.highlightedRowIndex,
              n = e.pageRows,
              r = e.head,
              i = e.isFixedSize,
              a = e.isRanking,
              o = e.isRankingDisabled,
              s = e.testId,
              c = e.forwardedRef;
            return A.createElement(
              Ir,
              { onBeforeDragStart: this.onBeforeDragStart, onDragEnd: this.onDragEnd },
              A.createElement(
                Wi,
                { droppableId: `dynamic-table-droppable`, isDropDisabled: o },
                function (e) {
                  return A.createElement(
                    `tbody`,
                    m(
                      {
                        "data-testid": s,
                        ref: function (t) {
                          (e && typeof e.innerRef == `function` && e.innerRef(t),
                            c && (c.current = t));
                        },
                      },
                      e.droppableProps,
                    ),
                    n.map(function (e, n) {
                      return A.createElement(ia, {
                        head: r,
                        isRanking: a,
                        isFixedSize: i,
                        key: e.key,
                        rowIndex: n,
                        row: e,
                        isRankingDisabled: o,
                        isHighlighted:
                          t !== void 0 && (typeof t == `number` ? t === n : t.indexOf(n) > -1),
                        testId: s && `${s}--${e.key}--rankable--table--row`,
                      });
                    }),
                    e.placeholder,
                  );
                },
              ),
            );
          },
        },
      ])
    );
  })(A.Component),
  la = S(
    A.forwardRef(function (e, t) {
      return A.createElement(ca, m({}, e, { forwardedRef: t }));
    }),
  );
export { la as default };
