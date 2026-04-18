import { a as e } from "./rolldown-runtime-COnpUsM8.js";
import { n as t, r as n } from "./react-dom-vendor-DD8-Uyz5.js";
import {
  _ as r,
  a as i,
  b as a,
  c as o,
  h as s,
  i as c,
  n as l,
  o as u,
  r as d,
  t as f,
  x as p,
  y as m,
} from "./inline-styles-if-ranking-DsmzJ8E-.js";
import {
  a as h,
  c as g,
  d as _,
  f as v,
  i as y,
  l as b,
  n as x,
  r as S,
  s as C,
  t as w,
} from "./wrapNativeSuper-CcHGmOvu.js";
function T(e, t, n) {
  return ((t = S(t)), y(e, E() ? Reflect.construct(t, n || [], S(e).constructor) : t.apply(e, n)));
}
function E() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (E = function () {
    return !!e;
  })();
}
var D = !0,
  O = `Invariant failed`,
  k = (function (e) {
    function t(e) {
      var n;
      return (b(this, t), (n = T(this, t)), (n.message = e), n);
    }
    return (
      x(t, e),
      g(t, [
        {
          key: `toString`,
          value: function () {
            return this.message;
          },
        },
      ])
    );
  })(w(Error));
function A(e, t) {
  if (!e) throw D ? new k(O) : new k(`${O}: ${t || ``}`);
}
var j = e(n()),
  M = (0, j.createContext)(null);
function N() {
  var e = (0, j.useContext)(M);
  return (A(e !== null, `Unable to find DragDropContext context`), e);
}
function ee(e) {
  var t = e.children,
    n = e.contextId,
    r = e.getDragState,
    i = e.startKeyboardDrag,
    a = e.droppableRegistry,
    o = (0, j.useMemo)(
      function () {
        return { contextId: n, getDragState: r, startKeyboardDrag: i, droppableRegistry: a };
      },
      [n, r, i, a],
    );
  return j.createElement(M.Provider, { value: o }, t);
}
function te(e) {
  return { margin: window.getComputedStyle(e).margin, rect: e.getBoundingClientRect() };
}
function P() {
  var e = N().getDragState,
    t = e();
  return t.isDragging ? t.draggableDimensions : null;
}
var F = function () {};
function ne() {
  var e = F;
  return {
    setCleanupFn: function (t) {
      e = t;
    },
    runCleanupFn: function () {
      (e(), (e = F));
    },
  };
}
function re() {
  var e = v((0, j.useState)(ne), 1)[0];
  return (
    (0, j.useEffect)(
      function () {
        return e.runCleanupFn;
      },
      [e.runCleanupFn],
    ),
    e
  );
}
var I = {
    draggable: { contextId: `data-rbd-draggable-context-id`, id: `data-rbd-draggable-id` },
    dragHandle: {
      contextId: `data-rbd-drag-handle-context-id`,
      draggableId: `data-rbd-drag-handle-draggable-id`,
    },
    droppable: { contextId: `data-rbd-droppable-context-id`, id: `data-rbd-droppable-id` },
    placeholder: { contextId: `data-rbd-placeholder-context-id` },
  },
  L = {
    draggable: {
      droppableId: `data-rbd-draggable-droppable-id`,
      index: `data-rbd-draggable-index`,
    },
    dropIndicator: `data-rbd-drop-indicator`,
    droppable: { direction: `data-rbd-droppable-direction`, type: `data-rbd-droppable-type` },
  };
function R(e, t) {
  var n = e.getAttribute(t);
  return (A(n !== null, `Expected '${t}' to be present`), n);
}
function ie(e, t) {
  for (var n = 0, r = Object.entries(t); n < r.length; n++) {
    var i = v(r[n], 2),
      a = i[0],
      o = i[1];
    e.setAttribute(a, o);
  }
  return function () {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var i = r[n];
      e.removeAttribute(i);
    }
  };
}
function ae() {
  return [...arguments]
    .map(function (e) {
      var t = e.attribute,
        n = e.value;
      return n ? `[${t}="${CSS.escape(n)}"]` : `[${t}]`;
    })
    .join(``);
}
function z() {
  var e = ae.apply(void 0, arguments);
  return document.querySelector(e);
}
function oe() {
  var e = ae.apply(void 0, arguments);
  return Array.from(document.querySelectorAll(e));
}
function se() {
  var e = z.apply(void 0, arguments);
  return (A(e, `There is a matching HTMLElement for selector ` + ae.apply(void 0, arguments)), e);
}
function ce(e) {
  var t = e.contextId,
    n = e.draggableId;
  return z(
    { attribute: I.dragHandle.contextId, value: t },
    { attribute: I.dragHandle.draggableId, value: n },
  );
}
function B(e) {
  if (getComputedStyle(e).position === `absolute`) return e;
  var t = e.parentElement;
  return t instanceof HTMLElement ? B(t) : null;
}
function le(e) {
  var t = e.element;
  return e.mode === `standard` ? t : (B(t) ?? t);
}
function ue() {
  window.dispatchEvent(new DragEvent(`dragend`));
}
function de(e, t) {
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
function fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? de(Object(n), !0).forEach(function (t) {
          C(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : de(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var pe = {
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
  me = Symbol(`closestEdge`);
function he(e, t) {
  var n = t.element,
    r = t.input,
    i = t.allowedEdges,
    a = { x: r.clientX, y: r.clientY },
    o = n.getBoundingClientRect(),
    s =
      i
        .map(function (e) {
          return { edge: e, value: pe[e](o, a) };
        })
        .sort(function (e, t) {
          return e.value - t.value;
        })[0]?.edge ?? null;
  return fe(fe({}, e), {}, C({}, me, s));
}
function ge(e) {
  return e[me] ?? null;
}
var _e = Symbol(`DraggableData`);
function V(e) {
  return e[_e] === !0;
}
function ve(e) {
  var t = e.draggableId,
    n = e.droppableId,
    r = e.getIndex,
    i = e.contextId,
    a = e.type;
  return (0, j.useMemo)(
    function () {
      return C(
        C(
          C(C(C(C({}, _e, !0), `draggableId`, t), `droppableId`, n), `getIndex`, r),
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
var ye = Symbol(`DroppableData`);
function be(e) {
  return e[ye] === !0;
}
function xe(e) {
  var t = e.contextId,
    n = e.droppableId,
    r = e.getIsDropDisabled;
  return (0, j.useMemo)(
    function () {
      return C(C(C(C({}, ye, !0), `contextId`, t), `droppableId`, n), `getIsDropDisabled`, r);
    },
    [t, n, r],
  );
}
function Se(e) {
  var t = e.droppableId,
    n = e.contextId;
  return oe(
    { attribute: I.draggable.contextId, value: n },
    { attribute: L.draggable.droppableId, value: t },
  );
}
var Ce = [`droppableId`, `getIndex`],
  we = [`contextId`, `droppableId`];
function Te(e) {
  var t = e.droppableId,
    n = e.getIndex,
    r = _(e, Ce),
    i = n(),
    a = ge(r);
  return ((a === `bottom` || a === `right`) && (i += 1), { droppableId: t, index: i });
}
function Ee(e) {
  var t = e.contextId,
    n = e.droppableId,
    r = _(e, we),
    i = Se({ contextId: t, droppableId: n });
  if (i.length === 0) return { droppableId: n, index: 0 };
  var a = ge(r);
  return a === `top` || a === `left`
    ? { droppableId: n, index: 0 }
    : {
        droppableId: n,
        index:
          i.reduce(function (e, t) {
            var n = parseInt(R(t, L.draggable.index), 10);
            return Math.max(e, n);
          }, 0) + 1,
      };
}
function De(e) {
  var t = e.dropTargets;
  if (t.length === 0) return null;
  var n = t[0];
  return V(n.data) ? Te(n.data) : be(n.data) ? Ee(n.data) : null;
}
function H(e, t) {
  return !(e?.droppableId !== t?.droppableId || e?.index !== t?.index);
}
function Oe() {
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
function ke() {
  return v((0, j.useState)(Oe), 1)[0];
}
function U() {
  var e = [...arguments];
  return function () {
    e.forEach(function (e) {
      return e();
    });
  };
}
var Ae = `data-pdnd-honey-pot`;
function je(e) {
  return e instanceof Element && e.hasAttribute(`data-pdnd-honey-pot`);
}
function Me(e) {
  var t = v(document.elementsFromPoint(e.x, e.y), 2),
    n = t[0],
    r = t[1];
  return n ? (je(n) ? (r ?? null) : n) : null;
}
var Ne = 2147483647,
  Pe = {
    inset: `unset`,
    border: `none`,
    padding: 0,
    margin: 0,
    overflow: `visible`,
    color: `inherit`,
    background: `transparent`,
  };
function W(e) {
  var t = null;
  return function () {
    if (!t) {
      var n = [...arguments];
      t = { result: e.apply(this, n) };
    }
    return t.result;
  };
}
var Fe = W(function () {
    return typeof HTMLElement < `u` && typeof HTMLElement.prototype.showPopover == `function`;
  }),
  G = d();
function Ie(e, t) {
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
function Le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ie(Object(n), !0).forEach(function (t) {
          C(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ie(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Re = 2,
  ze = Re / 2;
function Be(e) {
  return { x: Math.floor(e.x), y: Math.floor(e.y) };
}
function Ve(e) {
  return { x: e.x - ze, y: e.y - ze };
}
function He(e) {
  return { x: Math.max(e.x, 0), y: Math.max(e.y, 0) };
}
function Ue(e) {
  return { x: Math.min(e.x, window.innerWidth - Re), y: Math.min(e.y, window.innerHeight - Re) };
}
function We(e) {
  var t = e.client,
    n = Ue(He(Ve(Be(t))));
  return DOMRect.fromRect({ x: n.x, y: n.y, width: Re, height: Re });
}
function Ge(e) {
  var t = e.clientRect;
  return { left: `${t.left}px`, top: `${t.top}px`, width: `${t.width}px`, height: `${t.height}px` };
}
function Ke(e) {
  var t = e.client,
    n = e.clientRect;
  return t.x >= n.x && t.x <= n.x + n.width && t.y >= n.y && t.y <= n.y + n.height;
}
function qe(e) {
  var t = e.initial,
    n = document.createElement(`div`);
  (n.setAttribute(Ae, `true`), Fe() && n.setAttribute(`popover`, `manual`));
  var r = We({ client: t });
  (Object.assign(
    n.style,
    Le(
      Le({ position: `fixed` }, Fe() ? Pe : { zIndex: Ne }),
      {},
      {
        backgroundColor: `transparent`,
        padding: 0,
        margin: 0,
        boxSizing: `border-box`,
        pointerEvents: `auto`,
      },
      Ge({ clientRect: r }),
    ),
  ),
    document.body.appendChild(n),
    Fe() && n.showPopover());
  var i = (0, G.bind)(window, {
    type: `pointermove`,
    listener: function (e) {
      ((r = We({ client: { x: e.clientX, y: e.clientY } })),
        Object.assign(n.style, Ge({ clientRect: r })));
    },
    options: { capture: !0 },
  });
  return function (e) {
    var t = e.current;
    if ((i(), Ke({ client: t, clientRect: r }))) {
      n.remove();
      return;
    }
    function a() {
      (o(), n.remove());
    }
    var o = (0, G.bindAll)(
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
function Je() {
  var e = null;
  function t() {
    return (
      (e = null),
      (0, G.bind)(window, {
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
        t = qe({ initial: e ?? { x: a.clientX, y: a.clientY } });
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
var Ye = W(function () {
    return navigator.userAgent.includes(`Firefox`);
  }),
  Xe = W(function () {
    var e = navigator.userAgent;
    return e.includes(`AppleWebKit`) && !e.includes(`Chrome`);
  }),
  Ze = { isLeavingWindow: Symbol(`leaving`), isEnteringWindow: Symbol(`entering`) };
function Qe(e) {
  var t = e.dragLeave;
  return Xe() ? t.hasOwnProperty(Ze.isLeavingWindow) : !1;
}
(function () {
  if (typeof window > `u` || !Xe()) return;
  function e() {
    return { enterCount: 0, isOverWindow: !1 };
  }
  var t = e();
  function n() {
    t = e();
  }
  (0, G.bindAll)(
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
          (!t.isOverWindow && t.enterCount === 0 && (e[Ze.isEnteringWindow] = !0),
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
              ((e[Ze.isLeavingWindow] = !0), (t.isOverWindow = !1)));
        },
      },
    ],
    { capture: !0 },
  );
})();
function $e(e) {
  return `nodeName` in e;
}
function et(e) {
  return $e(e) && e.ownerDocument !== document;
}
function tt(e) {
  var t = e.dragLeave,
    n = t.type,
    r = t.relatedTarget;
  return n === `dragleave`
    ? Xe()
      ? Qe({ dragLeave: t })
      : r == null
        ? !0
        : Ye()
          ? et(r)
          : r instanceof HTMLIFrameElement
    : !1;
}
function nt(e) {
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
function rt(e) {
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
var it = (function (e) {
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
  at = (function () {
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
function ot(e) {
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
        at.schedule(function () {
          a({ eventName: `onDragStart`, payload: { source: t, location: o } });
        }));
    },
    dragUpdate: function (e) {
      var r = e.current;
      (at.flush(),
        it.cancel(),
        a({
          eventName: `onDropTargetChange`,
          payload: { source: t, location: { initial: n, previous: i, current: r } },
        }));
    },
    drag: function (e) {
      var r = e.current;
      it(function () {
        (at.flush(),
          a({
            eventName: `onDrag`,
            payload: { source: t, location: { initial: n, previous: i, current: r } },
          }));
      });
    },
    drop: function (e) {
      var r = e.current,
        o = e.updatedSourcePayload;
      (at.flush(),
        it.cancel(),
        a({
          eventName: `onDrop`,
          payload: { source: o ?? t, location: { current: r, previous: i, initial: n } },
        }));
    },
  };
}
var st = { isActive: !1 };
function ct() {
  return !st.isActive;
}
function lt(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function ut(e) {
  var t = e.current,
    n = e.next;
  if (t.length !== n.length) return !0;
  for (var r = 0; r < t.length; r++) if (t[r].element !== n[r].element) return !0;
  return !1;
}
function dt(e) {
  var t = e.event,
    n = e.dragType,
    r = e.getDropTargetsOver,
    i = e.dispatchEvent;
  if (!ct()) return;
  var a = pt({ event: t, dragType: n, getDropTargetsOver: r });
  st.isActive = !0;
  var o = { current: a };
  ft({ event: t, current: a.dropTargets });
  var s = ot({ source: n.payload, dispatchEvent: i, initial: a });
  function c(e) {
    var t = ut({ current: o.current.dropTargets, next: e.dropTargets });
    ((o.current = e), t && s.dragUpdate({ current: o.current }));
  }
  function l(e) {
    var t = rt(e),
      i = r({
        target: je(e.target) ? Me({ x: t.clientX, y: t.clientY }) : e.target,
        input: t,
        source: n.payload,
        current: o.current.dropTargets,
      });
    (i.length && (e.preventDefault(), ft({ event: e, current: i })),
      c({ dropTargets: i, input: t }));
  }
  function u() {
    (o.current.dropTargets.length && c({ dropTargets: [], input: o.current.input }),
      s.drop({ current: o.current, updatedSourcePayload: null }),
      d());
  }
  function d() {
    ((st.isActive = !1), f());
  }
  var f = (0, G.bindAll)(
    window,
    [
      {
        type: `dragover`,
        listener: function (e) {
          (l(e), s.drag({ current: o.current }));
        },
      },
      { type: `dragenter`, listener: l },
      {
        type: `dragleave`,
        listener: function (e) {
          tt({ dragLeave: e }) &&
            (c({ input: o.current.input, dropTargets: [] }), n.startedFrom === `external` && u());
        },
      },
      {
        type: `drop`,
        listener: function (e) {
          if (
            ((o.current = { dropTargets: o.current.dropTargets, input: rt(e) }),
            !o.current.dropTargets.length)
          ) {
            u();
            return;
          }
          (e.preventDefault(),
            ft({ event: e, current: o.current.dropTargets }),
            s.drop({
              current: o.current,
              updatedSourcePayload: n.type === `external` ? n.getDropPayload(e) : null,
            }),
            d());
        },
      },
      {
        type: `dragend`,
        listener: function (e) {
          ((o.current = { dropTargets: o.current.dropTargets, input: rt(e) }), u());
        },
      },
    ].concat(h(nt({ onDragEnd: u }))),
    { capture: !0 },
  );
  s.start({ nativeSetDragImage: lt(t) });
}
function ft(e) {
  var t = e.event,
    n = e.current[0]?.dropEffect;
  n != null && t.dataTransfer && (t.dataTransfer.dropEffect = n);
}
function pt(e) {
  var t = e.event,
    n = e.dragType,
    r = e.getDropTargetsOver,
    i = rt(t);
  return n.startedFrom === `external`
    ? { input: i, dropTargets: [] }
    : { input: i, dropTargets: r({ input: i, source: n.payload, target: t.target, current: [] }) };
}
var mt = { canStart: ct, start: dt },
  ht = new Map();
function gt(e) {
  var t = e.typeKey,
    n = e.mount,
    r = ht.get(t);
  if (r) return (r.usageCount++, r);
  var i = { typeKey: t, unmount: n(), usageCount: 1 };
  return (ht.set(t, i), i);
}
function _t(e) {
  var t = gt(e);
  return function () {
    (t.usageCount--, !(t.usageCount > 0) && (t.unmount(), ht.delete(e.typeKey)));
  };
}
function vt(e, t) {
  var n = t.attribute,
    r = t.value;
  return (
    e.setAttribute(n, r),
    function () {
      return e.removeAttribute(n);
    }
  );
}
function yt(e, t) {
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
      ? yt(Object(n), !0).forEach(function (t) {
          C(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : yt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function bt(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = xt(e)) || (t && e && typeof e.length == `number`)) {
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
function xt(e, t) {
  if (e) {
    if (typeof e == `string`) return St(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? St(e, t)
          : void 0
    );
  }
}
function St(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ct(e) {
  return e.slice(0).reverse();
}
function wt(e) {
  var t = e.typeKey,
    n = e.defaultDropEffect,
    r = new WeakMap(),
    i = `data-drop-target-for-${t}`,
    a = `[${i}]`;
  function o(e) {
    return (
      r.set(e.element, e),
      function () {
        return r.delete(e.element);
      }
    );
  }
  function s(e) {
    return W(U(vt(e.element, { attribute: i, value: `true` }), o(e)));
  }
  function c(e) {
    var t = e.source,
      i = e.target,
      o = e.input,
      s = e.result,
      l = s === void 0 ? [] : s;
    if (i == null) return l;
    if (!(i instanceof Element))
      return i instanceof Node ? c({ source: t, target: i.parentElement, input: o, result: l }) : l;
    var u = i.closest(a);
    if (u == null) return l;
    var d = r.get(u);
    if (d == null) return l;
    var f = { input: o, source: t, element: d.element };
    if (d.canDrop && !d.canDrop(f))
      return c({ source: t, target: d.element.parentElement, input: o, result: l });
    var p = d.getData?.call(d, f) ?? {},
      m = d.getDropEffect?.call(d, f) ?? n,
      g = { data: p, element: d.element, dropEffect: m, isActiveDueToStickiness: !1 };
    return c({
      source: t,
      target: d.element.parentElement,
      input: o,
      result: [].concat(h(l), [g]),
    });
  }
  function l(e) {
    var t = e.eventName,
      n = e.payload,
      i = bt(n.location.current.dropTargets),
      a;
    try {
      for (i.s(); !(a = i.n()).done; ) {
        var o,
          s = a.value,
          c = r.get(s.element),
          l = K(K({}, n), {}, { self: s });
        c == null || (o = c[t]) == null || o.call(c, l);
      }
    } catch (e) {
      i.e(e);
    } finally {
      i.f();
    }
  }
  var u = {
    onGenerateDragPreview: l,
    onDrag: l,
    onDragStart: l,
    onDrop: l,
    onDropTargetChange: function (e) {
      var t = e.payload,
        n = new Set(
          t.location.current.dropTargets.map(function (e) {
            return e.element;
          }),
        ),
        i = new Set(),
        a = bt(t.location.previous.dropTargets),
        o;
      try {
        for (a.s(); !(o = a.n()).done; ) {
          var s,
            c = o.value;
          i.add(c.element);
          var l = r.get(c.element),
            u = n.has(c.element),
            d = K(K({}, t), {}, { self: c });
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
      var p = bt(t.location.current.dropTargets),
        m;
      try {
        for (p.s(); !(m = p.n()).done; ) {
          var h,
            g,
            _ = m.value;
          if (!i.has(_.element)) {
            var v = K(K({}, t), {}, { self: _ }),
              y = r.get(_.element);
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
  function d(e) {
    u[e.eventName](e);
  }
  function f(e) {
    var t = e.source,
      n = e.target,
      i = e.input,
      a = e.current,
      o = c({ source: t, target: n, input: i });
    if (o.length >= a.length) return o;
    for (var s = Ct(a), l = Ct(o), u = [], d = 0; d < s.length; d++) {
      var f,
        p = s[d],
        m = l[d];
      if (m != null) {
        u.push(m);
        continue;
      }
      var h = u[d - 1],
        g = s[d - 1];
      if (h?.element !== g?.element) break;
      var _ = r.get(p.element);
      if (!_) break;
      var v = { input: i, source: t, element: _.element };
      if ((_.canDrop && !_.canDrop(v)) || !((f = _.getIsSticky) != null && f.call(_, v))) break;
      u.push(K(K({}, p), {}, { isActiveDueToStickiness: !0 }));
    }
    return Ct(u);
  }
  return { dropTargetForConsumers: s, getIsOver: f, dispatchEvent: d };
}
function Tt(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = Et(e)) || (t && e && typeof e.length == `number`)) {
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
function Et(e, t) {
  if (e) {
    if (typeof e == `string`) return Dt(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Dt(e, t)
          : void 0
    );
  }
}
function Dt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
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
          C(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ot(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function At() {
  var e = new Set(),
    t = null;
  function n(e) {
    t && (!e.canMonitor || e.canMonitor(t.canMonitorArgs)) && t.active.add(e);
  }
  function r(r) {
    var i = kt({}, r);
    (e.add(i), n(i));
    function a() {
      (e.delete(i), t && t.active.delete(i));
    }
    return W(a);
  }
  function i(r) {
    var i = r.eventName,
      a = r.payload;
    if (i === `onGenerateDragPreview`) {
      t = { canMonitorArgs: { initial: a.location.initial, source: a.source }, active: new Set() };
      var o = Tt(e),
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
function jt(e) {
  var t = e.typeKey,
    n = e.mount,
    r = e.dispatchEventToSource,
    i = e.onPostDispatch,
    a = e.defaultDropEffect,
    o = At(),
    s = wt({ typeKey: t, defaultDropEffect: a });
  function c(e) {
    (r?.(e), s.dispatchEvent(e), o.dispatchEvent(e), i?.(e));
  }
  function l(e) {
    var t = e.event,
      n = e.dragType;
    mt.start({ event: t, dragType: n, getDropTargetsOver: s.getIsOver, dispatchEvent: c });
  }
  function u() {
    function e() {
      return n({ canStart: mt.canStart, start: l });
    }
    return _t({ typeKey: t, mount: e });
  }
  return { registerUsage: u, dropTarget: s.dropTargetForConsumers, monitor: o.monitorForConsumers };
}
var Mt = W(function () {
    return navigator.userAgent.toLocaleLowerCase().includes(`android`);
  }),
  Nt = `pdnd:android-fallback`,
  Pt = `text/plain`,
  Ft = `application/vnd.pdnd`,
  It = new WeakMap();
function Lt(e) {
  return (
    It.set(e.element, e),
    function () {
      It.delete(e.element);
    }
  );
}
var Rt = Je(),
  zt = jt({
    typeKey: `element`,
    defaultDropEffect: `move`,
    mount: function (e) {
      return U(
        Rt.bindEvents(),
        (0, G.bind)(document, {
          type: `dragstart`,
          listener: function (t) {
            if (e.canStart(t) && !t.defaultPrevented && t.dataTransfer) {
              var n = t.target;
              if (n instanceof HTMLElement) {
                var r = It.get(n);
                if (r) {
                  var i = rt(t),
                    a = { element: r.element, dragHandle: r.dragHandle ?? null, input: i };
                  if (r.canDrag && !r.canDrag(a)) {
                    t.preventDefault();
                    return;
                  }
                  if (r.dragHandle) {
                    var o = Me({ x: i.clientX, y: i.clientY });
                    if (!r.dragHandle.contains(o)) {
                      t.preventDefault();
                      return;
                    }
                  }
                  var s = r.getInitialDataForExternal?.call(r, a) ?? null;
                  if (s)
                    for (var c = 0, l = Object.entries(s); c < l.length; c++) {
                      var u = v(l[c], 2),
                        d = u[0],
                        f = u[1];
                      t.dataTransfer.setData(d, f ?? ``);
                    }
                  (Mt() &&
                    !t.dataTransfer.types.includes(`text/plain`) &&
                    !t.dataTransfer.types.includes(`text/uri-list`) &&
                    t.dataTransfer.setData(Pt, Nt),
                    t.dataTransfer.setData(Ft, ``));
                  var p = {
                    type: `element`,
                    payload: {
                      element: r.element,
                      dragHandle: r.dragHandle ?? null,
                      data: r.getInitialData?.call(r, a) ?? {},
                    },
                    startedFrom: `internal`,
                  };
                  e.start({ event: t, dragType: p });
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
      (t = It.get(i.source.element)) == null || (n = t[r]) == null || n.call(t, i);
    },
    onPostDispatch: Rt.getOnPostDispatch(),
  }),
  Bt = zt.dropTarget,
  Vt = zt.monitor;
function Ht(e) {
  return W(U(zt.registerUsage(), Lt(e), vt(e.element, { attribute: `draggable`, value: `true` })));
}
function Ut(e, t, n) {
  return ((t = S(t)), y(e, Wt() ? Reflect.construct(t, n || [], S(e).constructor) : t.apply(e, n)));
}
function Wt() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Wt = function () {
    return !!e;
  })();
}
function Gt(e) {
  var t = e.children,
    n = e.dragController,
    r = (0, j.useRef)(!1),
    i = (0, j.useCallback)(
      function (e) {
        var t = n.getDragState();
        t.isDragging &&
          (t.mode === `FLUID` && ue(),
          t.mode === `SNAP` && n.stopDrag({ reason: `CANCEL` }),
          e.error instanceof k && e.preventDefault());
      },
      [n],
    );
  return (
    (0, j.useEffect)(
      function () {
        return U(
          Vt({
            onDragStart: function () {
              r.current = !0;
            },
            onDrop: function () {
              r.current = !1;
            },
          }),
          (0, G.bind)(window, { type: `error`, listener: i }),
        );
      },
      [i],
    ),
    t
  );
}
var Kt = (function (e) {
  function t() {
    return (b(this, t), Ut(this, t, arguments));
  }
  return (
    x(t, e),
    g(
      t,
      [
        {
          key: `componentDidCatch`,
          value: function (e) {
            if (!(e instanceof k)) throw e;
          },
        },
        {
          key: `render`,
          value: function () {
            return j.createElement(
              Gt,
              { contextId: this.props.contextId, dragController: this.props.dragController },
              this.props.children,
            );
          },
        },
      ],
      [{ key: `getDerivedStateFromError`, value: function () {} }],
    )
  );
})(j.Component);
function qt(e, t) {
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
function Jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? qt(Object(n), !0).forEach(function (t) {
          C(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : qt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Yt(e) {
  var t = e.start,
    n = e.target;
  if (n === null) return null;
  var r = t.droppableId === n.droppableId,
    i = n.index > t.index;
  return r && i ? Jt(Jt({}, n), {}, { index: n.index - 1 }) : Jt({}, n);
}
function Xt(e) {
  return `rbd-lift-instruction-${e}`;
}
function Zt(e) {
  var t = e.contextId,
    n = e.text;
  (0, j.useEffect)(
    function () {
      var e = Xt(t),
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
function Qt(e) {
  var t = getComputedStyle(e),
    n = t.overflowX,
    r = t.overflowY;
  if (n === `scroll` || n === `auto` || r === `scroll` || r === `auto`) return e;
  var i = e.parentElement;
  return i === null ? null : Qt(i);
}
function $t(e) {
  var t = e.contextId,
    n = e.type;
  return oe(
    { attribute: I.droppable.contextId, value: t },
    { attribute: L.droppable.type, value: n },
  );
}
function en(e) {
  var t = e.droppableId,
    n = e.type,
    r = e.isMovingForward,
    i = e.contextId,
    a = e.droppableRegistry,
    o = $t({ contextId: i, type: n }),
    s = o.findIndex(function (e) {
      return R(e, I.droppable.id) === t;
    }),
    c = o
      .filter(function (e, t) {
        return r ? t > s : t < s;
      })
      .filter(function (e) {
        var t = R(e, I.droppable.id),
          n = a.getEntry({ droppableId: t });
        return n && !n.isDropDisabled;
      });
  return (r ? c.at(0) : c.at(-1)) ?? null;
}
function tn(e, t) {
  return t
    ? z(
        { attribute: I.draggable.contextId, value: e },
        { attribute: L.draggable.droppableId, value: t.droppableId },
        { attribute: L.draggable.index, value: String(t.index) },
      )
    : null;
}
function nn(e, t) {
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
function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? nn(Object(n), !0).forEach(function (t) {
          C(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : nn(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function rn(e) {
  var t = Qt(e);
  t && t.scrollTo(0, 0);
}
var J = {
  mainAxis: {
    prev: function (e, t) {
      var n = t.dragController;
      e.preventDefault();
      var r = n.getDragState();
      A(r.isDragging);
      var i = r.sourceLocation,
        a = r.targetLocation;
      if (a && a.index !== 0) {
        var o = q(q({}, a), {}, { index: a.index - 1 });
        (H(i, Yt({ start: i, target: o })) && (o.index = a.index - 2),
          n.updateDrag({ targetLocation: o }));
      }
    },
    next: function (e, t) {
      var n = t.dragController,
        r = t.contextId;
      e.preventDefault();
      var i = n.getDragState();
      A(i.isDragging);
      var a = i.sourceLocation,
        o = i.targetLocation;
      if (o) {
        var s = tn(r, o);
        if (!(!H(a, o) && !s)) {
          var c = q(q({}, o), {}, { index: o.index + 1 });
          (H(a, Yt({ start: a, target: c })) && (c.index = o.index + 2),
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
      A(a.isDragging);
      var o = a.targetLocation,
        s = a.type;
      if (o) {
        var c = en({
          droppableId: o.droppableId,
          type: s,
          isMovingForward: !1,
          contextId: i,
          droppableRegistry: r,
        });
        if (c) {
          rn(c);
          var l = { droppableId: R(c, I.droppable.id), index: 0 };
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
      A(a.isDragging);
      var o = a.targetLocation,
        s = a.type;
      if (o) {
        var c = en({
          droppableId: o.droppableId,
          type: s,
          isMovingForward: !0,
          contextId: i,
          droppableRegistry: r,
        });
        if (c) {
          rn(c);
          var l = { droppableId: R(c, I.droppable.id), index: 0 };
          n.updateDrag({ targetLocation: l });
        }
      }
    },
  },
};
function an(e) {
  e.preventDefault();
}
var on = { PageUp: an, PageDown: an, Home: an, End: an, Enter: an, Tab: an },
  sn = {
    vertical: q(
      q({}, on),
      {},
      {
        ArrowUp: J.mainAxis.prev,
        ArrowDown: J.mainAxis.next,
        ArrowLeft: J.crossAxis.prev,
        ArrowRight: J.crossAxis.next,
      },
    ),
    horizontal: q(
      q({}, on),
      {},
      {
        ArrowUp: J.crossAxis.prev,
        ArrowDown: J.crossAxis.next,
        ArrowLeft: J.mainAxis.prev,
        ArrowRight: J.mainAxis.next,
      },
    ),
  };
function cn(e) {
  var t = e.dragController,
    n = e.droppableRegistry,
    r = e.contextId,
    i = e.setKeyboardCleanupFn;
  return {
    startKeyboardDrag: (0, j.useCallback)(
      function (e) {
        var a = e.event,
          o = e.draggableId,
          s = e.type,
          c = e.getSourceLocation,
          l = e.sourceElement;
        t.startDrag({
          draggableId: o,
          type: s,
          getSourceLocation: c,
          sourceElement: l,
          mode: `SNAP`,
        });
        var u = c(),
          d = R(se({ attribute: I.droppable.id, value: u.droppableId }), L.droppable.direction);
        A(d === `vertical` || d === `horizontal`);
        function f() {
          t.stopDrag({ reason: `CANCEL` });
        }
        var p = [
          `mousedown`,
          `mouseup`,
          `click`,
          `touchstart`,
          `resize`,
          `wheel`,
          `visibilitychange`,
        ].map(function (e) {
          return { type: e, listener: f };
        });
        i(
          (0, G.bindAll)(
            window,
            [
              {
                type: `keydown`,
                listener: function (e) {
                  var i, o;
                  if (e !== a && t.getDragState().isDragging) {
                    if (e.key === ` `) {
                      (e.preventDefault(), t.stopDrag({ reason: `DROP` }));
                      return;
                    }
                    if (e.key === `Escape`) {
                      (e.preventDefault(), t.stopDrag({ reason: `CANCEL` }));
                      return;
                    }
                    (i = (o = sn[d])[e.key]) == null ||
                      i.call(o, e, { dragController: t, droppableRegistry: n, contextId: r });
                  }
                },
              },
            ].concat(h(p)),
          ),
        );
      },
      [r, t, n, i],
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
        var e = mn(Me({ x: t.clientX, y: t.clientY }));
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
    (Xn = (0, G.bindAll)(
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
      ].concat(h(nt({ onDragEnd: Qn }))),
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
    r = (0, j.useCallback)(
      function (e) {
        t.updateDrag({ targetLocation: De(e.current) });
      },
      [t],
    );
  (0, j.useEffect)(
    function () {
      return Vt({
        canMonitor: function (e) {
          var t = e.initial,
            r = e.source;
          if (!V(r.data) || r.data.contextId !== n) return !1;
          var i = t.dropTargets.find(function (e) {
            return be(e.data);
          });
          return i ? i.data.contextId === n : !0;
        },
        onDragStart: function (e) {
          var n = e.location,
            r = e.source;
          (Jn.start({ input: n.current.input }), er.start());
          var i = r.data;
          A(V(i));
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
var nr = typeof window < `u` ? j.useLayoutEffect : j.useEffect,
  rr = `data-rbd-style-context-id`;
function ir(e) {
  var t = e.selector,
    n = e.styles;
  return `${t} { ${Object.entries(n)
    .map(function (e) {
      var t = v(e, 2);
      return `${t[0]}: ${t[1]};`;
    })
    .join(` `)} }`;
}
function ar(e) {
  return ir({
    selector: `[${I.dragHandle.contextId}="${e}"]`,
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
  return v((0, j.useState)(hr), 1)[0];
}
var _r = (0, j.createContext)(null);
function vr(e) {
  var t = e.children,
    n = e.lifecycle,
    r = (0, j.useCallback)(
      function (e) {
        for (var t = [], r = 0, i = Object.entries(e); r < i.length; r++) {
          var a = i[r],
            o = v(a, 2),
            s = o[0],
            c = o[1];
          t.push(n.addResponder(s, c));
        }
        return U.apply(void 0, t);
      },
      [n],
    );
  return j.createElement(_r.Provider, { value: r }, t);
}
function yr() {
  var e = (0, j.useContext)(_r);
  return (A(e !== null, `useLifecycle() should only be called inside of a <DragDropContext />`), e);
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
  return v((0, j.useState)(jr), 1)[0];
}
var Nr = 0;
function Pr() {
  return `${Nr++}`;
}
function Fr(e) {
  var t = le(e);
  return { top: t.offsetTop, left: t.offsetLeft };
}
function Ir(e) {
  var t = e.children,
    n = e.dragHandleUsageInstructions,
    r = n === void 0 ? kr : n,
    i = e.nonce,
    a = e.onBeforeCapture,
    o = e.onBeforeDragStart,
    s = e.onDragStart,
    c = e.onDragUpdate,
    l = e.onDragEnd,
    u = v((0, j.useState)(Pr), 1)[0];
  Zt({ contextId: u, text: r });
  var d = gr(),
    f = Mr(),
    p = f.schedule,
    m = f.flush,
    h = (0, j.useRef)({ isDragging: !1 }),
    g = (0, j.useCallback)(function () {
      return h.current;
    }, []),
    _ = ke(),
    y = (0, j.useCallback)(
      function (e) {
        for (
          var t = e.droppableId, n = _.getEntry({ droppableId: t });
          n !== null && n.isDropDisabled;
        ) {
          var r = n.parentDroppableId;
          n = r ? _.getEntry({ droppableId: r }) : null;
        }
        return n === null ? null : { droppableId: n.droppableId, index: 0 };
      },
      [_],
    );
  (0, j.useEffect)(
    function () {
      return function () {
        g().isDragging && ue();
      };
    },
    [g],
  );
  var b = (0, j.useCallback)(
      function (e) {
        var t = e.targetLocation,
          n = e.isImmediate,
          r = n === void 0 ? !1 : n;
        if (!h.current.isDragging) return;
        var i = h.current,
          a = i.prevDestination,
          o = i.draggableId,
          s = i.type,
          l = i.sourceLocation,
          u = Yt({ start: l, target: t });
        if (H(a, u)) return;
        Object.assign(h.current, { prevDestination: u, sourceLocation: l, targetLocation: t });
        var f = {
            mode: h.current.mode,
            draggableId: o,
            type: s,
            source: l,
            destination: u,
            combine: null,
          },
          m = t ? _.getEntry({ droppableId: t.droppableId }) : null;
        (d.dispatch(`onPrePendingDragUpdate`, { update: f, targetLocation: t }),
          d.dispatch(`onPendingDragUpdate`, { update: f, targetLocation: t, droppable: m }));
        function g() {
          var e = Or(`onDragUpdate`, f),
            t = e.provided,
            n = e.getMessage;
          (c?.(f, t), wr(n()));
        }
        r ? g() : p(g);
      },
      [_, d, c, p],
    ),
    x = (0, j.useCallback)(
      function (e) {
        var t = e.draggableId,
          n = e.type,
          r = e.getSourceLocation,
          i = e.sourceElement,
          c = e.mode;
        if (!h.current.isDragging) {
          a?.({ draggableId: t, mode: c });
          var l = { mode: c, draggableId: t, type: n, source: r() },
            u = document.activeElement,
            f =
              u instanceof HTMLElement && u.hasAttribute(I.dragHandle.draggableId)
                ? R(u, I.dragHandle.draggableId)
                : null,
            m = l.source.droppableId,
            g = _.getEntry({ droppableId: m });
          (A(g, `should have entry for droppable '${m}'`),
            (h.current = {
              isDragging: !0,
              mode: c,
              draggableDimensions: te(i),
              restoreFocusTo: f,
              draggableId: t,
              type: n,
              prevDestination: l.source,
              sourceLocation: l.source,
              targetLocation: l.source,
              draggableInitialOffsetInSourceDroppable: Fr({ element: i, mode: g.mode }),
            }),
            o?.(l),
            d.dispatch(`onPendingDragStart`, { start: l, droppable: g }),
            p(function () {
              var e = { mode: c, draggableId: t, type: n, source: r() },
                i = Or(`onDragStart`, e),
                a = i.provided,
                o = i.getMessage;
              (s?.(e, a),
                wr(o()),
                p(function () {
                  var t = e.source.droppableId,
                    n = _.getEntry({ droppableId: t });
                  n != null &&
                    n.isDropDisabled &&
                    b({ targetLocation: y({ droppableId: t }), isImmediate: !0 });
                }));
            }));
        }
      },
      [_, y, d, a, o, s, p, b],
    ),
    S = re(),
    C = (0, j.useCallback)(
      function (e) {
        var t = e.reason;
        if (h.current.isDragging) {
          (S.runCleanupFn(), t === `CANCEL` && b({ targetLocation: null }));
          var n = h.current,
            r = n.mode,
            i = n.restoreFocusTo,
            a = n.sourceLocation,
            o = n.targetLocation,
            s = n.type,
            c = n.draggableId;
          ((h.current = { isDragging: !1 }), m());
          var f = Yt({ start: a, target: o }),
            p = {
              reason: f === null ? `CANCEL` : `DROP`,
              type: s,
              source: a,
              destination: f,
              mode: r,
              draggableId: c,
              combine: null,
            };
          d.dispatch(`onBeforeDragEnd`, { draggableId: c });
          var g = Or(`onDragEnd`, p),
            _ = g.provided,
            v = g.getMessage;
          (l(p, _),
            wr(v()),
            i &&
              requestAnimationFrame(function () {
                var e = ce({ contextId: u, draggableId: c });
                e && e.focus();
              }));
        }
      },
      [u, m, S, d, l, b],
    ),
    w = (0, j.useMemo)(
      function () {
        return { getDragState: g, startDrag: x, updateDrag: b, stopDrag: C };
      },
      [g, x, C, b],
    );
  tr({ dragController: w, contextId: u });
  var T = cn({
      dragController: w,
      droppableRegistry: _,
      contextId: u,
      setKeyboardCleanupFn: S.setCleanupFn,
    }).startKeyboardDrag,
    E = (0, j.useCallback)(
      function (e) {
        var t = h.current;
        t.isDragging &&
          e.isDropDisabled &&
          e.droppableId === t.targetLocation?.droppableId &&
          b({ targetLocation: y({ droppableId: e.droppableId }) });
      },
      [y, b],
    );
  return (
    _.setUpdateListener(E),
    cr({ contextId: u, nonce: i }),
    j.createElement(
      Kt,
      { contextId: u, dragController: w },
      j.createElement(
        vr,
        { lifecycle: d },
        j.createElement(
          ee,
          { contextId: u, getDragState: g, startKeyboardDrag: T, droppableRegistry: _ },
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
var zr = (0, j.createContext)(null),
  Br = zr.Provider;
function Vr() {
  var e = (0, j.useContext)(zr);
  return (A(e, `Missing <Droppable /> parent`), e);
}
function Hr() {
  var e = (0, j.useContext)(zr);
  return e ? e.droppableId : null;
}
function Ur(e) {
  var t = e.elementRef,
    n = e.data,
    r = e.direction,
    i = e.contextId,
    a = e.isDropDisabled,
    o = e.type;
  (0, j.useEffect)(
    function () {
      var e = t.current;
      return (
        A(e instanceof HTMLElement),
        Bt({
          element: e,
          getIsSticky: function () {
            return !0;
          },
          canDrop: function (e) {
            var t = e.source;
            return !V(t.data) || a ? !1 : t.data.type === o && t.data.contextId === i;
          },
          getData: function (t) {
            var i = t.input;
            return he(n, {
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
  return { startKeyboardDrag: N().startKeyboardDrag };
}
function Gr() {
  return z({ attribute: L.dropIndicator });
}
function Kr(e) {
  return z({ attribute: I.placeholder.contextId, value: e });
}
function qr(e) {
  var t = (0, j.useRef)(e);
  return (
    (0, j.useEffect)(
      function () {
        t.current = e;
      },
      [e],
    ),
    (0, j.useCallback)(function () {
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
          C(e, t, n[t]);
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
          C(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ii(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var oi = (0, j.memo)(
    (0, j.forwardRef)(function (e, t) {
      var n = e.style,
        r = P(),
        i = N().contextId,
        a = C({}, I.placeholder.contextId, i),
        o = (0, j.useMemo)(
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
      return j.createElement(`div`, p({ ref: t, style: o }, a));
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
          C(e, t, n[t]);
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
    return C(C({}, n.name, 0), r.name, 24);
  },
  home: function (e) {
    var t = e.droppable.direction,
      n = e.placeholderRect,
      r = e.draggableDimensions;
    A(n, `the placeholder should exist if in home position`);
    var i = { x: n.x - r.rect.x, y: n.y - r.rect.y },
      a = Q[t],
      o = a.mainAxis,
      s = a.crossAxis;
    return C(C({}, o.name, i[o.name]), s.name, i[s.name] + 24);
  },
  away: function (e) {
    var t = e.droppable.direction,
      n = e.dropIndicatorRect,
      r = e.draggableDimensions;
    A(n, `the drop indicator should exist if in away position`);
    var i = { x: n.x - r.rect.x, y: n.y - r.rect.y },
      a = Q[t],
      o = a.mainAxis,
      s = a.crossAxis;
    return C(C({}, o.name, i[o.name] - 0.5 * r.rect[o.style.length]), s.name, i[s.name] + 24);
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
    c = H(n.source, n.destination ?? null) ? ui.home(s) : ui.away(s);
  return c ? $($({}, e), {}, { previewOffset: c }) : e;
}
function fi(e, t) {
  var n = t.start,
    r = t.previewOffset;
  return (
    A(e.type === `idle`, `The draggable is idle.`),
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
    A(e.type === `dragging`, `The draggable is dragging.`);
    var a = t.payload.update,
      o = a.destination ? a.destination.droppableId : null;
    return o === e.draggingOver ? e : $($({}, e), {}, { draggingOver: o });
  }
  if (t.type === `UPDATE_POINTER_PREVIEW`) {
    A(e.type === `dragging`, `The draggable is dragging.`);
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
    ? (A(e.type === `dragging`, `The draggable is dragging.`),
      e.type === `dragging` ? di(e, t.payload) : e)
    : t.type === `DROP`
      ? (A(e.type === `dragging`, `The draggable is dragging.`), ci)
      : t.type === `START_HIDING`
        ? (A(e.type === `idle` || e.type === `hiding`), li(t.payload.mode))
        : t.type === `STOP_HIDING`
          ? (A(e.type === `hiding`), ci)
          : e;
}
function mi(e) {
  var t = e.draggingOver,
    n = e.isClone,
    r = e.isDragging,
    i = e.mode;
  return (0, j.useMemo)(
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
    o = e.disableInteractiveElementBlocking,
    s = o === void 0 ? !1 : o,
    l = Vr(),
    u = l.direction,
    d = l.droppableId,
    f = l.type,
    p = l.mode,
    m = N(),
    h = m.contextId,
    g = m.getDragState,
    _ = (0, j.useRef)(null),
    y = (0, j.useRef)(null),
    b = re(),
    x = b.setCleanupFn,
    S = b.runCleanupFn,
    w = (0, j.useCallback)(
      function (e) {
        (_.current && S(),
          e && x(ie(e, C(C({}, L.draggable.droppableId, d), L.draggable.index, String(r)))),
          (_.current = e),
          (y.current = ce({ contextId: h, draggableId: n })));
      },
      [h, n, d, r, S, x],
    ),
    T = qr(r),
    E = v((0, j.useReducer)(pi, ci), 2),
    D = E[0],
    O = E[1],
    k = ve({ draggableId: n, droppableId: d, getIndex: T, contextId: h, type: f }),
    M = D.type === `dragging`,
    ee = D.type === `hiding`,
    te = Vr(),
    F = te.shouldRenderCloneWhileDragging,
    ne = te.isDropDisabled,
    R = yr(),
    ae = Wr().startKeyboardDrag;
  ((0, j.useEffect)(
    function () {
      if (D.type === `idle` && !a) {
        var e = _.current;
        c(e instanceof HTMLElement);
        var t = y.current;
        return (
          c(t instanceof HTMLElement),
          (0, G.bindAll)(t, [
            {
              type: `keydown`,
              listener: function (t) {
                if (t.key === ` `) {
                  if (t.defaultPrevented || (!s && ri(e, t))) return;
                  (t.preventDefault(),
                    ae({
                      event: t,
                      draggableId: n,
                      type: f,
                      getSourceLocation: function () {
                        return { droppableId: d, index: T() };
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
    [s, n, d, T, a, ae, D.type, f],
  ),
    (0, j.useEffect)(
      function () {
        if (!ee && !a) {
          var e = _.current;
          A(e instanceof HTMLElement);
          var t = y.current;
          return (
            A(t instanceof HTMLElement),
            Ht({
              canDrag: function (e) {
                var n = e.input;
                return n.ctrlKey || n.metaKey || n.shiftKey || n.altKey
                  ? !1
                  : s
                    ? !M
                    : !ni(t, Me({ x: n.clientX, y: n.clientY }));
              },
              element: e,
              dragHandle: t,
              getInitialData: function () {
                return k;
              },
              onGenerateDragPreview: Rr,
            })
          );
        }
      },
      [k, s, a, M, ee],
    ));
  var z = D.type !== `idle` && p === `standard`,
    oe = (0, j.useRef)(null);
  Ur({ elementRef: z ? oe : _, data: k, direction: u, contextId: h, isDropDisabled: ne, type: f });
  var se = (0, j.useRef)(!0);
  ((0, j.useEffect)(function () {
    return (
      (se.current = !0),
      function () {
        se.current = !1;
      }
    );
  }, []),
    (0, j.useEffect)(
      function () {
        var e = g();
        F &&
          e.isDragging &&
          e.draggableId === k.draggableId &&
          O({ type: `START_HIDING`, payload: { mode: e.mode } });
      },
      [k.draggableId, g, F],
    ));
  var B = P();
  (0, j.useEffect)(
    function () {
      return F
        ? R({
            onPendingDragStart: function (e) {
              var t = e.start;
              k.draggableId === t.draggableId &&
                O({ type: `START_HIDING`, payload: { mode: t.mode } });
            },
            onBeforeDragEnd: function (e) {
              e.draggableId === k.draggableId && O({ type: `STOP_HIDING` });
            },
          })
        : U(
            R({
              onPendingDragStart: function (e) {
                var t = e.start,
                  n = e.droppable;
                if (k.draggableId === t.draggableId) {
                  if (t.mode === `FLUID`)
                    return O({ type: `START_POINTER_DRAG`, payload: { start: t } });
                  if (t.mode === `SNAP`) {
                    var r = g();
                    return (
                      A(r.isDragging && r.draggableDimensions),
                      O({
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
                k.draggableId === t.draggableId &&
                  (O({ type: `UPDATE_DRAG`, payload: { update: t } }),
                  t.mode === `SNAP` &&
                    queueMicrotask(function () {
                      if (g().isDragging) {
                        var e = Kr(h),
                          r = e ? e.getBoundingClientRect() : null,
                          i = Gr();
                        O({
                          type: `UPDATE_KEYBOARD_PREVIEW`,
                          payload: {
                            update: t,
                            draggableDimensions: B,
                            droppable: n,
                            placeholderRect: r,
                            dropIndicatorRect: i ? i.getBoundingClientRect() : null,
                          },
                        });
                      }
                    }));
              },
              onBeforeDragEnd: function (e) {
                e.draggableId === k.draggableId &&
                  (A(se.current, `isMounted onBeforeDragEnd`), O({ type: `DROP` }));
              },
            }),
            Vt({
              canMonitor: function (e) {
                var t = e.source;
                return V(t.data)
                  ? t.data.contextId === k.contextId && t.data.draggableId === k.draggableId
                  : !1;
              },
              onDrag: function (e) {
                var t = e.location;
                O({ type: `UPDATE_POINTER_PREVIEW`, payload: { pointerLocation: t } });
              },
            }),
          );
    },
    [k.draggableId, k.contextId, R, F, u, h, B, g],
  );
  var le = (0, j.useMemo)(
      function () {
        return {
          draggableProps: C(
            C(C({}, I.draggable.contextId, h), I.draggable.id, n),
            `style`,
            ei({ draggableDimensions: B, draggableState: D }),
          ),
          dragHandleProps: C(
            C(
              C(
                C(
                  C({ role: `button`, "aria-describedby": Xt(h) }, I.dragHandle.contextId, h),
                  I.dragHandle.draggableId,
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
          innerRef: w,
        };
      },
      [h, n, B, D, w],
    ),
    ue = mi({ draggingOver: D.draggingOver, isClone: !1, isDragging: M, mode: M ? D.mode : null }),
    de = (0, j.useMemo)(
      function () {
        return { draggableId: n, type: f, source: { droppableId: d, index: r } };
      },
      [n, d, r, f],
    );
  return j.createElement(
    j.Fragment,
    null,
    ee ? null : t(le, ue, de),
    z && j.createElement(oi, { ref: oe }),
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
    d = N().contextId,
    f = (0, j.useCallback)(
      function (e) {
        e && ce({ contextId: d, draggableId: i })?.focus();
      },
      [d, i],
    );
  return (0, X.createPortal)(
    t(
      (0, j.useMemo)(
        function () {
          return {
            innerRef: f,
            draggableProps: C(C(C({}, I.draggable.contextId, d), I.draggable.id, i), `style`, s),
            dragHandleProps: C(
              C(
                C(
                  C(
                    C({ role: `button`, "aria-describedby": Xt(d) }, I.dragHandle.contextId, d),
                    I.dragHandle.draggableId,
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
        [d, i, f, s],
      ),
      mi({ draggingOver: o, isClone: !0, isDragging: !0, mode: u }),
      (0, j.useMemo)(
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
    a = N(),
    o = a.contextId,
    s = a.getDragState,
    c = P(),
    l = v((0, j.useReducer)(pi, ci), 2),
    u = l[0],
    d = l[1],
    f = yr();
  if (
    ((0, j.useEffect)(
      function () {
        return U(
          f({
            onPendingDragStart: function (e) {
              var t = e.start,
                r = e.droppable;
              if (n === t.source.droppableId) {
                if (t.mode === `FLUID`)
                  return d({ type: `START_POINTER_DRAG`, payload: { start: t } });
                if (t.mode === `SNAP`) {
                  var i = s();
                  return (
                    A(i.isDragging && i.draggableDimensions),
                    d({
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
              u.type === `dragging` &&
                u.draggableId === t.draggableId &&
                (d({ type: `UPDATE_DRAG`, payload: { update: t } }),
                t.mode === `SNAP` &&
                  queueMicrotask(function () {
                    if (s().isDragging) {
                      var e = Kr(o),
                        r = e ? e.getBoundingClientRect() : null,
                        i = Gr();
                      d({
                        type: `UPDATE_KEYBOARD_PREVIEW`,
                        payload: {
                          update: t,
                          draggableDimensions: c,
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
              u.type === `dragging` && t === u.draggableId && d({ type: `DROP` });
            },
          }),
          Vt({
            canMonitor: function (e) {
              var t = e.source;
              return V(t.data) ? t.data.contextId === o && t.data.droppableId === n : !1;
            },
            onDrag: function (e) {
              var t = e.location;
              d({ type: `UPDATE_POINTER_PREVIEW`, payload: { pointerLocation: t } });
            },
          }),
        );
      },
      [n, o, f, u, c, s],
    ),
    u.type !== `dragging`)
  )
    return null;
  var p = ei({ draggableDimensions: c, draggableState: u });
  return j.createElement(
    vi,
    {
      droppableId: n,
      type: r,
      draggableId: u.draggableId,
      index: u.start.index,
      draggingOver: u.draggingOver,
      mode: u.mode,
      style: p,
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
  return R(e, L.draggable.droppableId);
}
function Ci(e) {
  var t = R(e, L.draggable.index),
    n = parseInt(t);
  return (A(Number.isInteger(n), `invalid index: '${n}' is not an integer`), n);
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
    l = tn(i, { droppableId: a, index: n === `before` ? s : c });
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
    l = le({ element: t, mode: r }),
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
    r = Qt(t);
  return !r || getComputedStyle(r).position !== `static` ? 0 : r[n.offset];
}
function ki(e) {
  var t = e.droppableId,
    n = e.direction;
  return {
    mainAxis: {
      offset: Oi({ element: se({ attribute: I.droppable.id, value: t }), direction: n }),
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
    var s = tn(a, t);
    return s
      ? Ei({ element: s, isForwardEdge: !1, mode: i, direction: r, contextId: a })
      : ki({ droppableId: t.droppableId, direction: r });
  }
  var c = tn(a, { droppableId: t.droppableId, index: t.index - 1 });
  return c ? Ei({ element: c, isForwardEdge: !0, mode: i, direction: r, contextId: a }) : null;
}
var ji = 4,
  Mi = m({
    background: `var(--ds-border-brand, #1868DB)`,
    scrollMarginTop: ji,
    scrollMarginBottom: ji + 1,
  }),
  Ni = m({ position: `absolute`, top: 0, left: 0 }),
  Pi = m({ opacity: 0 }),
  Fi = {
    horizontal: m({ width: 2, height: `100%`, marginLeft: -2 }),
    vertical: m({ width: `100%`, height: 2, marginTop: -2 }),
  };
function Ii(e) {
  var t = e.direction,
    n = e.dimensions,
    r = e.indicatorOffset;
  if (n === null) return { opacity: 0 };
  var i = Q[t],
    a = i.mainAxis,
    o = i.crossAxis;
  return C(
    C(
      { transform: `${a.style.transform}(${n.mainAxis.offset - r}px)` },
      o.style.length,
      n.crossAxis.length,
    ),
    o.style.offset,
    n.crossAxis.offset,
  );
}
var Li = C({}, L.dropIndicator, ``),
  Ri = function (e) {
    var t = e.direction,
      n = e.mode,
      r = N(),
      i = r.contextId,
      o = r.getDragState,
      s = (0, j.useRef)(null),
      c = v((0, j.useState)(null), 2),
      l = c[0],
      u = c[1],
      d = v((0, j.useState)(!1), 2),
      f = d[0],
      m = d[1],
      h = yr(),
      g = (0, j.useCallback)(
        function (e) {
          var r = e.targetLocation,
            a = e.source,
            o = e.destination;
          if (!r) return u(null);
          var s = H(a, o);
          return (
            m(s),
            u(Ai({ targetLocation: r, isInHomeLocation: s, direction: t, mode: n, contextId: i }))
          );
        },
        [i, t, n],
      );
    ((0, j.useLayoutEffect)(
      function () {
        var e = o();
        if (e.isDragging) {
          var t = e.targetLocation,
            n = e.sourceLocation;
          return (
            g({ targetLocation: t, destination: Yt({ start: n, target: t }), source: n }),
            h({
              onPrePendingDragUpdate: function (e) {
                var t = e.update,
                  n = e.targetLocation,
                  r = t.destination,
                  i = r === void 0 ? null : r,
                  a = t.source;
                g({ targetLocation: n, source: a, destination: i });
              },
            })
          );
        }
      },
      [i, t, o, n, h, g],
    ),
      (0, j.useLayoutEffect)(
        function () {
          if (l !== null) {
            var e = o();
            if (!(!e.isDragging || e.mode !== `SNAP`)) {
              var t = s.current;
              (A(t instanceof HTMLElement), t.scrollIntoView({ block: `nearest` }));
            }
          }
        },
        [l, o],
      ));
    var _ = Q[t].mainAxis,
      y = Ii({ direction: t, dimensions: l, indicatorOffset: s.current ? s.current[_.offset] : 0 }),
      b = n === `virtual`;
    return a(`div`, p({ ref: s, css: [Mi, Fi[t], b && Ni, f && Pi], style: y }, Li));
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
          C(e, t, n[t]);
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
    o = (0, j.useRef)(null),
    s = N(),
    c = s.contextId,
    l = s.getDragState,
    u = l();
  (A(u.isDragging, `The virtual placeholder should only be rendered during a drag`),
    Ur({
      elementRef: o,
      data: ve({
        draggableId: t,
        droppableId: n,
        getIndex: (0, j.useCallback)(
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
  var d = (0, j.useMemo)(
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
  return j.createElement(oi, { ref: o, style: d });
}
function Wi(e) {
  var t = e.children,
    n = e.droppableId,
    r = e.type,
    i = r === void 0 ? `DEFAULT` : r,
    a = e.direction,
    o = a === void 0 ? `vertical` : a,
    s = e.mode,
    l = s === void 0 ? `standard` : s,
    u = e.renderClone,
    d = e.getContainerForClone,
    f = e.isDropDisabled,
    p = f === void 0 ? !1 : f,
    m = qr(p),
    h = N(),
    g = h.contextId,
    _ = h.droppableRegistry,
    y = xe({ contextId: g, droppableId: n, getIsDropDisabled: m }),
    b = (0, j.useRef)(null),
    x = (0, j.useCallback)(
      function (e) {
        (e &&
          ie(
            e,
            C(
              C(C(C({}, L.droppable.type, i), L.droppable.direction, o), I.droppable.id, n),
              I.droppable.contextId,
              g,
            ),
          ),
          (b.current = e));
      },
      [g, o, n, i],
    ),
    S = v((0, j.useReducer)(Hi, Vi), 2),
    w = S[0],
    T = S[1],
    E = w.draggingFromThisWith,
    D = w.draggingOverWith,
    O = w.isDraggingOver,
    k = Hr();
  (0, j.useEffect)(
    function () {
      var e = b.current;
      return (
        c(e instanceof HTMLElement, "innerRef must provide an `HTMLElement`"),
        U(
          _.register({
            droppableId: n,
            type: i,
            isDropDisabled: p,
            parentDroppableId: k,
            element: e,
            direction: o,
            mode: l,
          }),
          Bt({
            element: e,
            getData: function (t) {
              var n = t.input;
              return he(y, {
                element: e,
                input: n,
                allowedEdges: o === `vertical` ? [`top`, `bottom`] : [`left`, `right`],
              });
            },
            canDrop: function (e) {
              var t = e.source;
              return !V(t.data) || p ? !1 : t.data.contextId === g && t.data.type === i;
            },
            onDragLeave: function () {
              T({ type: `DRAG_CLEAR` });
            },
          }),
        )
      );
    },
    [y, n, g, p, i, _, k, o, l],
  );
  var A = yr();
  (0, j.useEffect)(
    function () {
      function e(e) {
        var t = e.type === i,
          r = e.destination?.droppableId === n;
        return t && ((!O && r) || (O && !r));
      }
      return A({
        onPendingDragStart: function (t) {
          var r = t.start;
          e({ destination: r.source, type: r.type }) &&
            T({ type: `DRAG_START`, payload: { droppableId: n, start: r } });
        },
        onPendingDragUpdate: function (t) {
          var r = t.update;
          e(r) && T({ type: `DRAG_UPDATE`, payload: { droppableId: n, update: r } });
        },
        onBeforeDragEnd: function () {
          T({ type: `DRAG_CLEAR` });
        },
      });
    },
    [n, O, A, i],
  );
  var M = (0, j.useMemo)(
      function () {
        return O ? j.createElement(Ri, { direction: o, mode: l }) : null;
      },
      [o, O, l],
    ),
    ee = (0, j.useMemo)(
      function () {
        return {
          innerRef: x,
          droppableProps: C(C({}, I.droppable.contextId, g), I.droppable.id, n),
          placeholder: l === `standard` ? M : null,
        };
      },
      [g, M, n, l, x],
    ),
    te = (0, j.useMemo)(
      function () {
        return {
          draggingFromThisWith: E,
          draggingOverWith: D,
          isDraggingOver: O,
          isUsingPlaceholder: O,
        };
      },
      [E, D, O],
    ),
    P = b.current,
    F = O && l === `virtual` && P;
  nr(
    function () {
      if (F && window.getComputedStyle(P).position === `static`) {
        var e = P.style.position;
        return (
          (P.style.position = `relative`),
          function () {
            P.style.position = e;
          }
        );
      }
    },
    [P, F],
  );
  var ne = !!u,
    re = (0, j.useMemo)(
      function () {
        return {
          direction: o,
          droppableId: n,
          shouldRenderCloneWhileDragging: ne,
          isDropDisabled: p,
          type: i,
          mode: l,
        };
      },
      [o, n, ne, p, i, l],
    ),
    R = E && l === `virtual` && P;
  return j.createElement(
    Br,
    { value: re },
    t(ee, te),
    F && (0, X.createPortal)(M, P),
    R &&
      (0, X.createPortal)(
        j.createElement(Ui, {
          droppableId: n,
          draggableId: E,
          type: i,
          direction: o,
          isDropDisabled: p,
        }),
        P,
      ),
    u && j.createElement(yi, { droppableId: n, type: i, getContainerForClone: d }, u),
  );
}
s();
var Gi = [`isRanking`, `isRankingItem`, `testId`],
  Ki = (0, j.forwardRef)(function (e, t) {
    var n = e.isRanking,
      a = e.isRankingItem,
      o = e.testId,
      s = _(e, Gi);
    return j.createElement(
      i,
      p({ ref: t, testId: o }, s, {
        className: r([
          n && `_1e0c1ule`,
          a && `_2rkolb4i _bfhk1bhr _16qs130s`,
          `_12y3e4h9 _mizu1v1w _ra3xnqa1`,
        ]),
      }),
    );
  });
s();
var qi = [`isRanking`, `innerRef`],
  Ji = function (e) {
    var t = e.isRanking,
      n = e.innerRef,
      i = _(e, qi);
    return j.createElement(u, p({}, i, { innerRef: n, className: r([t && `_vchhusvi`]) }));
  },
  Yi = [`content`, `testId`];
function Xi(e, t, n) {
  return ((t = S(t)), y(e, Zi() ? Reflect.construct(t, n || [], S(e).constructor) : t.apply(e, n)));
}
function Zi() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Zi = function () {
    return !!e;
  })();
}
var Qi = l(
    (function (e) {
      function t() {
        return (b(this, t), Xi(this, t, arguments));
      }
      return (
        x(t, e),
        g(t, [
          {
            key: `render`,
            value: function () {
              var e = this.props,
                t = e.cell,
                n = e.head,
                r = e.isFixedSize,
                i = e.isRanking,
                a = e.refWidth,
                o = e.innerRef,
                s = e.testId,
                c = t.content,
                l = t.testId,
                u = _(t, Yi),
                d = n || {},
                m = d.shouldTruncate,
                h = d.width,
                g = f(i, a);
              return j.createElement(
                Ji,
                p({}, u, {
                  isFixedSize: r,
                  shouldTruncate: m,
                  width: h,
                  isRanking: i,
                  style: g,
                  onKeyDown: function (e) {
                    return e.stopPropagation();
                  },
                  innerRef: o,
                  "data-testid": l || (s && `${s}--rankable--table--body--cell`),
                }),
                c,
              );
            },
          },
        ])
      );
    })(j.Component),
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
          C(e, t, n[t]);
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
  return ((t = S(t)), y(e, ra() ? Reflect.construct(t, n || [], S(e).constructor) : t.apply(e, n)));
}
function ra() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ra = function () {
    return !!e;
  })();
}
var ia = l(
  (function (e) {
    function t() {
      var e;
      b(this, t);
      var n = [...arguments];
      return (
        (e = na(this, t, [].concat(n))),
        C(e, `innerRef`, function (t) {
          return function (n) {
            (t(n), typeof e.props.innerRef == `function` && e.props.innerRef(n));
          };
        }),
        e
      );
    }
    return (
      x(t, e),
      g(t, [
        {
          key: `render`,
          value: function () {
            var e = this,
              t = this.props,
              n = t.row,
              r = t.head,
              i = t.isFixedSize,
              a = t.isRanking,
              o = t.refWidth,
              s = t.rowIndex,
              c = t.isRankingDisabled,
              l = t.isHighlighted,
              u = t.testId,
              d = n.cells,
              m = n.testId,
              h = n.key,
              g = n.isHighlighted,
              v = _(n, $i),
              y = f(a, o);
            if (typeof h != `string` && !c)
              throw Error(
                `dynamic-table: ranking is not possible because table row does not have a key. Add the key to the row or disable ranking.`,
              );
            return j.createElement(
              gi,
              { draggableId: h || s.toString(), index: s, isDragDisabled: c },
              function (t, n) {
                return j.createElement(
                  Ki,
                  p({}, v, t.dragHandleProps, t.draggableProps, {
                    role: void 0,
                    "aria-labelledby": void 0,
                    "aria-describedby": t.dragHandleProps?.[`aria-describedby`],
                    ref: e.innerRef(t.innerRef),
                    style: ta(ta({}, t.draggableProps.style), y),
                    isHighlighted: l || g,
                    isRanking: a,
                    isRankingItem: n.isDragging,
                    testId: m || (u && `${u}--rankable--table--body--row`),
                  }),
                  d.map(function (e, t) {
                    var n = (r || { cells: [] }).cells[t];
                    return j.createElement(Qi, {
                      head: n,
                      cell: e,
                      isRanking: a,
                      key: e.key || t,
                      isFixedSize: i,
                      testId: u,
                    });
                  }),
                );
              },
            );
          },
        },
      ])
    );
  })(j.Component),
);
function aa(e, t, n) {
  return ((t = S(t)), y(e, oa() ? Reflect.construct(t, n || [], S(e).constructor) : t.apply(e, n)));
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
      b(this, t);
      var n = [...arguments];
      return (
        (e = aa(this, t, [].concat(n))),
        C(e, `onBeforeDragStart`, function (t) {
          var n = t.draggableId,
            r = { index: t.source.index, key: n };
          e.props.onRankStart(r);
        }),
        C(e, `onDragEnd`, function (t) {
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
      x(t, e),
      g(t, [
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
            return j.createElement(
              Ir,
              { onBeforeDragStart: this.onBeforeDragStart, onDragEnd: this.onDragEnd },
              j.createElement(
                Wi,
                { droppableId: `dynamic-table-droppable`, isDropDisabled: o },
                function (e) {
                  return j.createElement(
                    `tbody`,
                    p(
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
                      return j.createElement(ia, {
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
  })(j.Component),
  la = o(
    j.forwardRef(function (e, t) {
      return j.createElement(ca, p({}, e, { forwardedRef: t }));
    }),
  );
export { la as default };
