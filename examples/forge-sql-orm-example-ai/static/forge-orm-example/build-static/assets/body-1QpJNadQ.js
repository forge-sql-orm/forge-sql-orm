import { o as e } from "./rolldown-runtime-Bhmf7a9N.js";
import { n as t, r as n } from "./react-dom-vendor-Bd5mlCjg.js";
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
} from "./wrapNativeSuper-BmCJ3c35.js";
import {
  _ as p,
  g as m,
  h,
  i as g,
  m as _,
  n as v,
  o as y,
  r as b,
  t as x,
  v as S,
  x as C,
  y as w,
} from "./inline-styles-if-ranking-B3n6Evfn.js";
function T(e, t, n) {
  return ((t = u(t)), s(e, E() ? Reflect.construct(t, n || [], u(e).constructor) : t.apply(e, n)));
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
      return (c(this, t), (n = T(this, t)), (n.message = e), n);
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
  var e = o((0, j.useState)(ne), 1)[0];
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
function le(e) {
  if (getComputedStyle(e).position === `absolute`) return e;
  var t = e.parentElement;
  return t instanceof HTMLElement ? le(t) : null;
}
function ue(e) {
  var t = e.element;
  return e.mode === `standard` ? t : (le(t) ?? t);
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
  return (0, j.useMemo)(
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
  return (0, j.useMemo)(
    function () {
      return d(d(d(d({}, be, !0), `contextId`, t), `droppableId`, n), `getIsDropDisabled`, r);
    },
    [t, n, r],
  );
}
function Ce(e) {
  var t = e.droppableId,
    n = e.contextId;
  return oe(
    { attribute: I.draggable.contextId, value: n },
    { attribute: L.draggable.droppableId, value: t },
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
            var n = parseInt(R(t, L.draggable.index), 10);
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
  return o((0, j.useState)(ke), 1)[0];
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
  U = m();
function Fe(e, t) {
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
function Ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Fe(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Fe(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Le = 2,
  Re = Le / 2;
function ze(e) {
  return { x: Math.floor(e.x), y: Math.floor(e.y) };
}
function Be(e) {
  return { x: e.x - Re, y: e.y - Re };
}
function Ve(e) {
  return { x: Math.max(e.x, 0), y: Math.max(e.y, 0) };
}
function He(e) {
  return { x: Math.min(e.x, window.innerWidth - Le), y: Math.min(e.y, window.innerHeight - Le) };
}
function Ue(e) {
  var t = e.client,
    n = He(Ve(Be(ze(t))));
  return DOMRect.fromRect({ x: n.x, y: n.y, width: Le, height: Le });
}
function We(e) {
  var t = e.clientRect;
  return { left: `${t.left}px`, top: `${t.top}px`, width: `${t.width}px`, height: `${t.height}px` };
}
function Ge(e) {
  var t = e.client,
    n = e.clientRect;
  return t.x >= n.x && t.x <= n.x + n.width && t.y >= n.y && t.y <= n.y + n.height;
}
function Ke(e) {
  var t = e.initial,
    n = document.createElement(`div`);
  n.setAttribute(je, `true`);
  var r = Ue({ client: t });
  (Object.assign(
    n.style,
    Ie(
      Ie(
        {
          backgroundColor: `transparent`,
          position: `fixed`,
          padding: 0,
          margin: 0,
          boxSizing: `border-box`,
        },
        We({ clientRect: r }),
      ),
      {},
      { pointerEvents: `auto`, zIndex: Pe },
    ),
  ),
    document.body.appendChild(n));
  var i = (0, U.bind)(window, {
    type: `pointermove`,
    listener: function (e) {
      ((r = Ue({ client: { x: e.clientX, y: e.clientY } })),
        Object.assign(n.style, We({ clientRect: r })));
    },
    options: { capture: !0 },
  });
  return function (e) {
    var t = e.current;
    if ((i(), Ge({ client: t, clientRect: r }))) {
      n.remove();
      return;
    }
    function a() {
      (o(), n.remove());
    }
    var o = (0, U.bindAll)(
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
function qe() {
  var e = null;
  function t() {
    return (
      (e = null),
      (0, U.bind)(window, {
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
        t = Ke({ initial: e ?? { x: a.clientX, y: a.clientY } });
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
var Je = W(function () {
    return navigator.userAgent.includes(`Firefox`);
  }),
  Ye = W(function () {
    var e = navigator.userAgent;
    return e.includes(`AppleWebKit`) && !e.includes(`Chrome`);
  }),
  Xe = { isLeavingWindow: Symbol(`leaving`), isEnteringWindow: Symbol(`entering`) };
function Ze(e) {
  var t = e.dragLeave;
  return Ye() ? t.hasOwnProperty(Xe.isLeavingWindow) : !1;
}
(function () {
  if (typeof window > `u` || !Ye()) return;
  function e() {
    return { enterCount: 0, isOverWindow: !1 };
  }
  var t = e();
  function n() {
    t = e();
  }
  (0, U.bindAll)(
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
          (!t.isOverWindow && t.enterCount === 0 && (e[Xe.isEnteringWindow] = !0),
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
              ((e[Xe.isLeavingWindow] = !0), (t.isOverWindow = !1)));
        },
      },
    ],
    { capture: !0 },
  );
})();
function Qe(e) {
  return `nodeName` in e;
}
function $e(e) {
  return Qe(e) && e.ownerDocument !== document;
}
function et(e) {
  var t = e.dragLeave,
    n = t.type,
    r = t.relatedTarget;
  return n === `dragleave`
    ? Ye()
      ? Ze({ dragLeave: t })
      : r == null
        ? !0
        : Je()
          ? $e(r)
          : r instanceof HTMLIFrameElement
    : !1;
}
function tt(e) {
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
function nt(e) {
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
var rt = (function (e) {
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
  it = (function () {
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
function at(e) {
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
        it.schedule(function () {
          a({ eventName: `onDragStart`, payload: { source: t, location: o } });
        }));
    },
    dragUpdate: function (e) {
      var r = e.current;
      (it.flush(),
        rt.cancel(),
        a({
          eventName: `onDropTargetChange`,
          payload: { source: t, location: { initial: n, previous: i, current: r } },
        }));
    },
    drag: function (e) {
      var r = e.current;
      rt(function () {
        (it.flush(),
          a({
            eventName: `onDrag`,
            payload: { source: t, location: { initial: n, previous: i, current: r } },
          }));
      });
    },
    drop: function (e) {
      var r = e.current,
        o = e.updatedSourcePayload;
      (it.flush(),
        rt.cancel(),
        a({
          eventName: `onDrop`,
          payload: { source: o ?? t, location: { current: r, previous: i, initial: n } },
        }));
    },
  };
}
var ot = { isActive: !1 };
function st() {
  return !ot.isActive;
}
function ct(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function lt(e) {
  var t = e.current,
    n = e.next;
  if (t.length !== n.length) return !0;
  for (var r = 0; r < t.length; r++) if (t[r].element !== n[r].element) return !0;
  return !1;
}
function ut(e) {
  var t = e.event,
    n = e.dragType,
    i = e.getDropTargetsOver,
    a = e.dispatchEvent;
  if (!st()) return;
  var o = ft({ event: t, dragType: n, getDropTargetsOver: i });
  ot.isActive = !0;
  var s = { current: o };
  dt({ event: t, current: o.dropTargets });
  var c = at({ source: n.payload, dispatchEvent: a, initial: o });
  function l(e) {
    var t = lt({ current: s.current.dropTargets, next: e.dropTargets });
    ((s.current = e), t && c.dragUpdate({ current: s.current }));
  }
  function u(e) {
    var t = nt(e),
      r = i({
        target: Me(e.target) ? Ne({ x: t.clientX, y: t.clientY }) : e.target,
        input: t,
        source: n.payload,
        current: s.current.dropTargets,
      });
    (r.length && (e.preventDefault(), dt({ event: e, current: r })),
      l({ dropTargets: r, input: t }));
  }
  function d() {
    (s.current.dropTargets.length && l({ dropTargets: [], input: s.current.input }),
      c.drop({ current: s.current, updatedSourcePayload: null }),
      f());
  }
  function f() {
    ((ot.isActive = !1), p());
  }
  var p = (0, U.bindAll)(
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
          et({ dragLeave: e }) &&
            (l({ input: s.current.input, dropTargets: [] }), n.startedFrom === `external` && d());
        },
      },
      {
        type: `drop`,
        listener: function (e) {
          if (
            ((s.current = { dropTargets: s.current.dropTargets, input: nt(e) }),
            !s.current.dropTargets.length)
          ) {
            d();
            return;
          }
          (e.preventDefault(),
            dt({ event: e, current: s.current.dropTargets }),
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
          ((s.current = { dropTargets: s.current.dropTargets, input: nt(e) }), d());
        },
      },
    ].concat(r(tt({ onDragEnd: d }))),
    { capture: !0 },
  );
  c.start({ nativeSetDragImage: ct(t) });
}
function dt(e) {
  var t = e.event,
    n = e.current[0]?.dropEffect;
  n != null && t.dataTransfer && (t.dataTransfer.dropEffect = n);
}
function ft(e) {
  var t = e.event,
    n = e.dragType,
    r = e.getDropTargetsOver,
    i = nt(t);
  return n.startedFrom === `external`
    ? { input: i, dropTargets: [] }
    : { input: i, dropTargets: r({ input: i, source: n.payload, target: t.target, current: [] }) };
}
var pt = { canStart: st, start: ut },
  mt = new Map();
function ht(e) {
  var t = e.typeKey,
    n = e.mount,
    r = mt.get(t);
  if (r) return (r.usageCount++, r);
  var i = { typeKey: t, unmount: n(), usageCount: 1 };
  return (mt.set(t, i), i);
}
function gt(e) {
  var t = ht(e);
  return function () {
    (t.usageCount--, !(t.usageCount > 0) && (t.unmount(), mt.delete(e.typeKey)));
  };
}
function _t(e, t) {
  var n = t.attribute,
    r = t.value;
  return (
    e.setAttribute(n, r),
    function () {
      return e.removeAttribute(n);
    }
  );
}
function vt(e, t) {
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
      ? vt(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function yt(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = bt(e)) || (t && e && typeof e.length == `number`)) {
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
function bt(e, t) {
  if (e) {
    if (typeof e == `string`) return xt(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? xt(e, t)
          : void 0
    );
  }
}
function xt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function St(e) {
  return e.slice(0).reverse();
}
function Ct(e) {
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
    return W(H(_t(e.element, { attribute: a, value: `true` }), s(e)));
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
      r = yt(n.location.current.dropTargets),
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
        a = yt(t.location.previous.dropTargets),
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
      var p = yt(t.location.current.dropTargets),
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
    for (var s = St(a), c = St(o), u = [], d = 0; d < s.length; d++) {
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
    return St(u);
  }
  return { dropTargetForConsumers: c, getIsOver: p, dispatchEvent: f };
}
function wt(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = Tt(e)) || (t && e && typeof e.length == `number`)) {
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
function Tt(e, t) {
  if (e) {
    if (typeof e == `string`) return Et(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Et(e, t)
          : void 0
    );
  }
}
function Et(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Dt(e, t) {
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
function Ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Dt(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Dt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function kt() {
  var e = new Set(),
    t = null;
  function n(e) {
    t && (!e.canMonitor || e.canMonitor(t.canMonitorArgs)) && t.active.add(e);
  }
  function r(r) {
    var i = Ot({}, r);
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
      var o = wt(e),
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
function At(e) {
  var t = e.typeKey,
    n = e.mount,
    r = e.dispatchEventToSource,
    i = e.onPostDispatch,
    a = e.defaultDropEffect,
    o = kt(),
    s = Ct({ typeKey: t, defaultDropEffect: a });
  function c(e) {
    (r?.(e), s.dispatchEvent(e), o.dispatchEvent(e), i?.(e));
  }
  function l(e) {
    var t = e.event,
      n = e.dragType;
    pt.start({ event: t, dragType: n, getDropTargetsOver: s.getIsOver, dispatchEvent: c });
  }
  function u() {
    function e() {
      return n({ canStart: pt.canStart, start: l });
    }
    return gt({ typeKey: t, mount: e });
  }
  return { registerUsage: u, dropTarget: s.dropTargetForConsumers, monitor: o.monitorForConsumers };
}
var jt = W(function () {
    return navigator.userAgent.toLocaleLowerCase().includes(`android`);
  }),
  Mt = `pdnd:android-fallback`,
  Nt = `text/plain`,
  Pt = `application/vnd.pdnd`,
  Ft = new WeakMap();
function It(e) {
  return (
    Ft.set(e.element, e),
    function () {
      Ft.delete(e.element);
    }
  );
}
var Lt = qe(),
  Rt = At({
    typeKey: `element`,
    defaultDropEffect: `move`,
    mount: function (e) {
      return H(
        Lt.bindEvents(),
        (0, U.bind)(document, {
          type: `dragstart`,
          listener: function (t) {
            if (e.canStart(t) && !t.defaultPrevented && t.dataTransfer) {
              var n = t.target;
              if (n instanceof HTMLElement) {
                var r = Ft.get(n);
                if (r) {
                  var i = nt(t),
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
                  (jt() &&
                    !t.dataTransfer.types.includes(`text/plain`) &&
                    !t.dataTransfer.types.includes(`text/uri-list`) &&
                    t.dataTransfer.setData(Nt, Mt),
                    t.dataTransfer.setData(Pt, ``));
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
      (t = Ft.get(i.source.element)) == null || (n = t[r]) == null || n.call(t, i);
    },
    onPostDispatch: Lt.getOnPostDispatch(),
  }),
  zt = Rt.dropTarget,
  Bt = Rt.monitor;
function Vt(e) {
  return W(H(Rt.registerUsage(), It(e), _t(e.element, { attribute: `draggable`, value: `true` })));
}
function Ht(e, t, n) {
  return ((t = u(t)), s(e, Ut() ? Reflect.construct(t, n || [], u(e).constructor) : t.apply(e, n)));
}
function Ut() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ut = function () {
    return !!e;
  })();
}
function Wt(e) {
  var t = e.children,
    n = e.dragController,
    r = (0, j.useRef)(!1),
    i = (0, j.useCallback)(
      function (e) {
        var t = n.getDragState();
        t.isDragging &&
          (t.mode === `FLUID` && de(),
          t.mode === `SNAP` && n.stopDrag({ reason: `CANCEL` }),
          e.error instanceof k && e.preventDefault());
      },
      [n],
    );
  return (
    (0, j.useEffect)(
      function () {
        return H(
          Bt({
            onDragStart: function () {
              r.current = !0;
            },
            onDrop: function () {
              r.current = !1;
            },
          }),
          (0, U.bind)(window, { type: `error`, listener: i }),
        );
      },
      [i],
    ),
    t
  );
}
var Gt = (function (e) {
  function t() {
    return (c(this, t), Ht(this, t, arguments));
  }
  return (
    l(t, e),
    i(
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
              Wt,
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
function Kt(e, t) {
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
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Kt(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Kt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Jt(e) {
  var t = e.start,
    n = e.target;
  if (n === null) return null;
  var r = t.droppableId === n.droppableId,
    i = n.index > t.index;
  return r && i ? qt(qt({}, n), {}, { index: n.index - 1 }) : qt({}, n);
}
function Yt(e) {
  return `rbd-lift-instruction-${e}`;
}
function Xt(e) {
  var t = e.contextId,
    n = e.text;
  (0, j.useEffect)(
    function () {
      var e = Yt(t),
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
function Zt(e) {
  var t = getComputedStyle(e),
    n = t.overflowX,
    r = t.overflowY;
  if (n === `scroll` || n === `auto` || r === `scroll` || r === `auto`) return e;
  var i = e.parentElement;
  return i === null ? null : Zt(i);
}
function Qt(e) {
  var t = e.contextId,
    n = e.type;
  return oe(
    { attribute: I.droppable.contextId, value: t },
    { attribute: L.droppable.type, value: n },
  );
}
function $t(e) {
  var t = e.droppableId,
    n = e.type,
    r = e.isMovingForward,
    i = e.contextId,
    a = e.droppableRegistry,
    o = Qt({ contextId: i, type: n }),
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
function en(e, t) {
  return t
    ? z(
        { attribute: I.draggable.contextId, value: e },
        { attribute: L.draggable.droppableId, value: t.droppableId },
        { attribute: L.draggable.index, value: String(t.index) },
      )
    : null;
}
function tn(e, t) {
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
      ? tn(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : tn(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function nn(e) {
  var t = Zt(e);
  t && t.scrollTo(0, 0);
}
var q = {
  mainAxis: {
    prev: function (e, t) {
      var n = t.dragController;
      e.preventDefault();
      var r = n.getDragState();
      A(r.isDragging);
      var i = r.sourceLocation,
        a = r.targetLocation;
      if (a && a.index !== 0) {
        var o = K(K({}, a), {}, { index: a.index - 1 });
        (V(i, Jt({ start: i, target: o })) && (o.index = a.index - 2),
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
        var s = en(r, o);
        if (!(!V(a, o) && !s)) {
          var c = K(K({}, o), {}, { index: o.index + 1 });
          (V(a, Jt({ start: a, target: c })) && (c.index = o.index + 2),
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
        var c = $t({
          droppableId: o.droppableId,
          type: s,
          isMovingForward: !1,
          contextId: i,
          droppableRegistry: r,
        });
        if (c) {
          nn(c);
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
        var c = $t({
          droppableId: o.droppableId,
          type: s,
          isMovingForward: !0,
          contextId: i,
          droppableRegistry: r,
        });
        if (c) {
          nn(c);
          var l = { droppableId: R(c, I.droppable.id), index: 0 };
          n.updateDrag({ targetLocation: l });
        }
      }
    },
  },
};
function J(e) {
  e.preventDefault();
}
var rn = { PageUp: J, PageDown: J, Home: J, End: J, Enter: J, Tab: J },
  an = {
    vertical: K(
      K({}, rn),
      {},
      {
        ArrowUp: q.mainAxis.prev,
        ArrowDown: q.mainAxis.next,
        ArrowLeft: q.crossAxis.prev,
        ArrowRight: q.crossAxis.next,
      },
    ),
    horizontal: K(
      K({}, rn),
      {},
      {
        ArrowUp: q.crossAxis.prev,
        ArrowDown: q.crossAxis.next,
        ArrowLeft: q.mainAxis.prev,
        ArrowRight: q.mainAxis.next,
      },
    ),
  };
function on(e) {
  var t = e.dragController,
    n = e.droppableRegistry,
    i = e.contextId,
    a = e.setKeyboardCleanupFn;
  return {
    startKeyboardDrag: (0, j.useCallback)(
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
          f = R(se({ attribute: I.droppable.id, value: d.droppableId }), L.droppable.direction);
        A(f === `vertical` || f === `horizontal`);
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
          (0, U.bindAll)(
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
                    (r = (a = an[f])[e.key]) == null ||
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
var sn = function (e) {
    return function (t) {
      return e === t;
    };
  },
  cn = sn(`scroll`),
  ln = sn(`auto`),
  un = function (e, t) {
    return t(e.overflowX) || t(e.overflowY);
  },
  dn = function (e) {
    var t = window.getComputedStyle(e),
      n = { overflowX: t.overflowX, overflowY: t.overflowY };
    return un(n, cn) || un(n, ln);
  },
  fn = function (e) {
    return !e || e === document.body || e === document.documentElement
      ? null
      : dn(e)
        ? e
        : fn(e.parentElement);
  },
  pn = function (e) {
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
  mn = function (e) {
    var t = e.closestScrollable,
      n = t.getBoundingClientRect(),
      r = { x: t.scrollLeft, y: t.scrollTop };
    return {
      container: pn(n),
      scroll: {
        current: r,
        max: { x: t.scrollWidth - t.clientWidth, y: t.scrollHeight - t.clientHeight },
      },
    };
  },
  hn = { x: 0, y: 0 },
  gn = function (e) {
    return function (t) {
      return { x: e(t.x), y: e(t.y) };
    };
  },
  _n = function (e, t) {
    return e.x === t.x && e.y === t.y;
  },
  vn = function (e, t) {
    return { x: e.x + t.x, y: e.y + t.y };
  },
  yn = function (e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  },
  bn = gn(function (e) {
    return e === 0 ? 0 : e > 0 ? 1 : -1;
  }),
  xn = (function () {
    var e = function (e, t) {
      return e < 0 ? e : e > t ? e - t : 0;
    };
    return function (t) {
      var n = t.current,
        r = t.max,
        i = t.change,
        a = vn(n, i),
        o = { x: e(a.x, r.x), y: e(a.y, r.y) };
      return _n(o, hn) ? null : o;
    };
  })(),
  Sn = function (e) {
    var t = e.max,
      n = e.current,
      r = e.change,
      i = { x: Math.max(n.x, t.x), y: Math.max(n.y, t.y) },
      a = bn(r),
      o = xn({ max: i, current: n, change: a });
    return !o || (a.x !== 0 && o.x === 0) || (a.y !== 0 && o.y === 0);
  },
  Cn = function (e, t) {
    return Sn({ current: e.scroll.current, max: e.scroll.max, change: t });
  },
  wn = function (e, t) {
    return Sn({ current: e.scroll.current, max: e.scroll.max, change: t });
  },
  Tn = {
    direction: `vertical`,
    start: `top`,
    end: `bottom`,
    size: `height`,
    scrollAxis: `scrollTop`,
  },
  En = {
    direction: `horizontal`,
    start: `left`,
    end: `right`,
    size: `width`,
    scrollAxis: `scrollLeft`,
  };
(En.direction, Tn.direction);
var Y = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: function (e) {
      return e ** 2;
    },
    durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
  },
  Dn = function (e, t) {
    return {
      startScrollingFrom: e[t.size] * Y.startFromPercentage,
      maxScrollValueAt: e[t.size] * Y.maxScrollAtPercentage,
    };
  },
  On = function (e) {
    var t = e.startOfRange,
      n = e.endOfRange,
      r = e.current,
      i = n - t;
    return i === 0 ? 0 : (r - t) / i;
  },
  kn = Y.durationDampening.accelerateAt,
  An = Y.durationDampening.stopDampeningAt,
  jn = function (e, t) {
    var n = t,
      r = An,
      i = Date.now() - n;
    if (i >= An) return e;
    if (i < kn) return 1;
    var a = On({ startOfRange: kn, endOfRange: r, current: i }),
      o = e * Y.ease(a);
    return Math.ceil(o);
  },
  Mn = function (e, t) {
    if (e > t.startScrollingFrom) return 0;
    if (e <= t.maxScrollValueAt) return Y.maxPixelScroll;
    if (e === t.startScrollingFrom) return 1;
    var n =
        1 - On({ startOfRange: t.maxScrollValueAt, endOfRange: t.startScrollingFrom, current: e }),
      r = Y.maxPixelScroll * Y.ease(n);
    return Math.ceil(r);
  },
  Nn = function (e) {
    var t = e.distanceToEdge,
      n = e.thresholds,
      r = e.dragStartTime,
      i = e.shouldUseTimeDampening,
      a = Mn(t, n);
    return a === 0 ? 0 : i ? Math.max(jn(a, r), 1) : a;
  },
  Pn = function (e) {
    var t = e.container,
      n = e.distanceToEdges,
      r = e.dragStartTime,
      i = e.axis,
      a = e.shouldUseTimeDampening,
      o = Dn(t, i);
    return n[i.end] < n[i.start]
      ? Nn({ distanceToEdge: n[i.end], thresholds: o, dragStartTime: r, shouldUseTimeDampening: a })
      : -1 *
          Nn({
            distanceToEdge: n[i.start],
            thresholds: o,
            dragStartTime: r,
            shouldUseTimeDampening: a,
          });
  },
  Fn = gn(function (e) {
    return e === 0 ? 0 : e;
  }),
  In = function (e) {
    var t = e.dragStartTime,
      n = e.container,
      r = e.center,
      i = e.shouldUseTimeDampening,
      a = { top: r.y - n.top, right: n.right - r.x, bottom: n.bottom - r.y, left: r.x - n.left },
      o = Pn({
        container: n,
        distanceToEdges: a,
        dragStartTime: t,
        axis: Tn,
        shouldUseTimeDampening: i,
      }),
      s = Fn({
        x: Pn({
          container: n,
          distanceToEdges: a,
          dragStartTime: t,
          axis: En,
          shouldUseTimeDampening: i,
        }),
        y: o,
      });
    return _n(s, hn) ? null : s;
  },
  Ln = function (e) {
    var t = e.scrollable,
      n = e.center,
      r = e.dragStartTime,
      i = e.shouldUseTimeDampening,
      a = In({ dragStartTime: r, container: t.container, center: n, shouldUseTimeDampening: i });
    return a && wn(t, a) ? a : null;
  },
  Rn = function (e) {
    var t = e.viewport,
      n = e.center,
      r = e.dragStartTime,
      i = e.shouldUseTimeDampening,
      a = In({ dragStartTime: r, container: t.container, center: n, shouldUseTimeDampening: i });
    return a && Cn(t, a) ? a : null;
  },
  zn = function (e) {
    var t = e.scrollHeight,
      n = e.scrollWidth,
      r = e.height,
      i = e.width,
      a = yn({ x: n, y: t }, { x: i, y: r });
    return { x: Math.max(0, a.x), y: Math.max(0, a.y) };
  },
  Bn = function () {
    var e = document.documentElement;
    return zn({
      scrollHeight: e.scrollHeight,
      scrollWidth: e.scrollWidth,
      width: e.clientWidth,
      height: e.clientHeight,
    });
  },
  Vn = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  Hn = function () {
    var e = Vn(),
      t = Bn(),
      n = e.y,
      r = e.x,
      i = document.documentElement,
      a = i.clientWidth,
      o = i.clientHeight;
    return {
      container: pn({ top: n, left: r, right: r + a, bottom: n + o }),
      scroll: { current: e, max: t },
    };
  },
  Un = function (e) {
    var t = e.input,
      n = e.dragStartTime,
      r = e.shouldUseTimeDampening,
      i = e.scrollElement,
      a = e.scrollWindow,
      o = e.behavior,
      s = function () {
        var e = Hn(),
          i = Rn({
            dragStartTime: n,
            viewport: e,
            center: { x: t.clientX + e.scroll.current.x, y: t.clientY + e.scroll.current.y },
            shouldUseTimeDampening: r,
          });
        return i ? (a(i), !0) : !1;
      },
      c = function () {
        var e = fn(Ne({ x: t.clientX, y: t.clientY }));
        if (!e) return !1;
        var a = Ln({
          dragStartTime: n,
          scrollable: mn({ closestScrollable: e }),
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
  Wn = function (e, t) {
    e.scrollBy(t.x, t.y);
  },
  Gn = function (e) {
    window.scrollBy(e.x, e.y);
  },
  Kn = (function () {
    var e = null;
    function t(t) {
      e != null &&
        Un({
          input: e.latestInput,
          dragStartTime: e.dragStartTime,
          shouldUseTimeDampening: e.shouldUseTimeDampening,
          behavior: e.behavior,
          scrollElement: t ?? Wn,
          scrollWindow: t ?? Gn,
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
function qn(e) {
  e.defaultPrevented ||
    (e.dataTransfer && (e.dataTransfer.dropEffect = `move`), e.preventDefault());
}
var Jn = null;
function Yn() {
  (Xn(),
    (Jn = (0, U.bindAll)(
      window,
      [
        { type: `dragover`, listener: qn },
        { type: `dragenter`, listener: qn },
        {
          type: `drop`,
          listener: function (e) {
            (e.preventDefault(), Xn());
          },
        },
        { type: `dragend`, listener: Xn },
      ].concat(r(tt({ onDragEnd: Xn }))),
      { capture: !1 },
    )));
}
function Xn() {
  var e;
  ((e = Jn) == null || e(), (Jn = null));
}
function Zn() {
  if (window.event?.type === `drop`) {
    var e;
    (e = window.event) == null || e.preventDefault();
  }
  Xn();
}
var Qn = { start: Yn, stop: Zn };
function $n(e) {
  var t = e.dragController,
    n = e.contextId,
    r = (0, j.useCallback)(
      function (e) {
        t.updateDrag({ targetLocation: Oe(e.current) });
      },
      [t],
    );
  (0, j.useEffect)(
    function () {
      return Bt({
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
          (Kn.start({ input: n.current.input }), Qn.start());
          var i = r.data;
          A(B(i));
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
          (Kn.updateInput({ input: t.current.input }), r(t));
        },
        onDropTargetChange: function (e) {
          var t = e.location;
          r(t);
        },
        onDrop: function () {
          (Kn.stop(), Qn.stop(), t.stopDrag({ reason: `DROP` }));
        },
      });
    },
    [t, n, r],
  );
}
var er = typeof window < `u` ? j.useLayoutEffect : j.useEffect,
  tr = `data-rbd-style-context-id`;
function nr(e) {
  var t = e.selector,
    n = e.styles;
  return `${t} { ${Object.entries(n)
    .map(function (e) {
      var t = o(e, 2);
      return `${t[0]}: ${t[1]};`;
    })
    .join(` `)} }`;
}
function rr(e) {
  return nr({
    selector: `[${I.dragHandle.contextId}="${e}"]`,
    styles: { cursor: `grab`, "-webkit-touch-callout": `none` },
  });
}
function ir(e) {
  var t = e.contextId,
    n = e.nonce,
    r = document.createElement(`style`);
  return (n && r.setAttribute(`nonce`, n), r.setAttribute(tr, t), document.head.appendChild(r), r);
}
function ar(e) {
  var t = e.contextId,
    n = e.nonce,
    r = ir({ contextId: t, nonce: n });
  return (
    (r.textContent = rr(t)),
    function () {
      r.remove();
    }
  );
}
function or(e) {
  var t = e.contextId,
    n = e.nonce;
  er(
    function () {
      return ar({ contextId: t, nonce: n });
    },
    [t, n],
  );
}
var X = e(t()),
  sr = (function () {
    return typeof X.unstable_batchedUpdates == `function` &&
      (X.version === void 0 || X.version.startsWith(`16`))
      ? X.unstable_batchedUpdates
      : function (e) {
          return e();
        };
  })();
function cr(e) {
  sr(e);
}
function lr(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = ur(e)) || (t && e && typeof e.length == `number`)) {
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
function ur(e, t) {
  if (e) {
    if (typeof e == `string`) return dr(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? dr(e, t)
          : void 0
    );
  }
}
function dr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function fr() {
  return {
    onPendingDragStart: [],
    onPrePendingDragUpdate: [],
    onPendingDragUpdate: [],
    onBeforeDragEnd: [],
  };
}
function pr() {
  var e = fr();
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
      cr(function () {
        var r = lr(e[t]),
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
function mr() {
  return o((0, j.useState)(pr), 1)[0];
}
var hr = (0, j.createContext)(null);
function gr(e) {
  var t = e.children,
    n = e.lifecycle,
    r = (0, j.useCallback)(
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
  return j.createElement(hr.Provider, { value: r }, t);
}
function _r() {
  var e = (0, j.useContext)(hr);
  return (A(e !== null, `useLifecycle() should only be called inside of a <DragDropContext />`), e);
}
var vr = null,
  Z = `1px`,
  yr = {
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
function br() {
  var e = document.createElement(`div`);
  return (e.setAttribute(`role`, `alert`), Object.assign(e.style, yr), document.body.append(e), e);
}
function xr() {
  return (vr === null && (vr = br()), vr);
}
function Sr(e) {
  var t = xr();
  t.textContent = e;
}
function Cr(e) {
  return e.index + 1;
}
var wr = {
  onDragStart: function (e) {
    var t = e.source;
    return `You have lifted an item in position ${Cr(t)}.`;
  },
  onDragUpdate: function (e) {
    var t = e.source,
      n = e.destination;
    if (!n) return `You are currently not dragging over a droppable area.`;
    var r = Cr(t),
      i = Cr(n);
    return t.droppableId === n.droppableId
      ? `You have moved the item from position ${r} to position ${i}.`
      : `You have moved the item from position ${r} in list ${t.droppableId} to list ${n.droppableId} in position ${i}.`;
  },
  onDragEnd: function (e) {
    var t = e.source,
      n = e.destination,
      r = e.reason,
      i = Cr(t);
    if (r === `CANCEL`)
      return `Movement cancelled. The item has returned to its starting position of ${i}.`;
    if (!n)
      return `The item has been dropped while not over a droppable location. The item has returned to its starting position of ${i}.`;
    var a = Cr(n);
    return t.droppableId === n.droppableId
      ? `You have dropped the item. It has moved from position ${i} to ${a}.`
      : `You have dropped the item. It has moved from position ${i} in list ${t.droppableId} to position ${a} in list ${n.droppableId}.`;
  },
};
function Tr(e, t) {
  return wr[e](t);
}
function Er(e, t) {
  var n = null,
    r = {
      announce: function (e) {
        n = e;
      },
    };
  function i() {
    return n ?? Tr(e, t);
  }
  return { provided: r, getMessage: i };
}
var Dr = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  Or = { status: `idle` };
function kr() {
  var e = Or,
    t = function (t) {
      (e.status === `idle` && (e = { status: `pending`, timeoutId: setTimeout(n, 0), items: [] }),
        e.items.push(t));
    },
    n = function () {
      if (e.status !== `idle`) {
        clearTimeout(e.timeoutId);
        var t = Array.from(e.items);
        ((e = Or),
          cr(function () {
            t.forEach(function (e) {
              return e();
            });
          }));
      }
    };
  return { schedule: t, flush: n };
}
function Ar() {
  return o((0, j.useState)(kr), 1)[0];
}
var jr = 0;
function Mr() {
  return `${jr++}`;
}
function Nr(e) {
  var t = ue(e);
  return { top: t.offsetTop, left: t.offsetLeft };
}
function Pr(e) {
  var t = e.children,
    n = e.dragHandleUsageInstructions,
    r = n === void 0 ? Dr : n,
    i = e.nonce,
    a = e.onBeforeCapture,
    s = e.onBeforeDragStart,
    c = e.onDragStart,
    l = e.onDragUpdate,
    u = e.onDragEnd,
    d = o((0, j.useState)(Mr), 1)[0];
  Xt({ contextId: d, text: r });
  var f = mr(),
    p = Ar(),
    m = p.schedule,
    h = p.flush,
    g = (0, j.useRef)({ isDragging: !1 }),
    _ = (0, j.useCallback)(function () {
      return g.current;
    }, []),
    v = Ae(),
    y = (0, j.useCallback)(
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
  (0, j.useEffect)(
    function () {
      return function () {
        _().isDragging && de();
      };
    },
    [_],
  );
  var b = (0, j.useCallback)(
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
          u = Jt({ start: c, target: t });
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
          var e = Er(`onDragUpdate`, d),
            t = e.provided,
            n = e.getMessage;
          (l?.(d, t), Sr(n()));
        }
        r ? h() : m(h);
      },
      [v, f, l, m],
    ),
    x = (0, j.useCallback)(
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
              u instanceof HTMLElement && u.hasAttribute(I.dragHandle.draggableId)
                ? R(u, I.dragHandle.draggableId)
                : null,
            p = l.source.droppableId,
            h = v.getEntry({ droppableId: p });
          (A(h, `should have entry for droppable '${p}'`),
            (g.current = {
              isDragging: !0,
              mode: o,
              draggableDimensions: te(i),
              restoreFocusTo: d,
              draggableId: t,
              type: n,
              prevDestination: l.source,
              sourceLocation: l.source,
              targetLocation: l.source,
              draggableInitialOffsetInSourceDroppable: Nr({ element: i, mode: h.mode }),
            }),
            s?.(l),
            f.dispatch(`onPendingDragStart`, { start: l, droppable: h }),
            m(function () {
              var e = { mode: o, draggableId: t, type: n, source: r() },
                i = Er(`onDragStart`, e),
                a = i.provided,
                s = i.getMessage;
              (c?.(e, a),
                Sr(s()),
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
    S = re(),
    C = (0, j.useCallback)(
      function (e) {
        var t = e.reason;
        if (g.current.isDragging) {
          (S.runCleanupFn(), t === `CANCEL` && b({ targetLocation: null }));
          var n = g.current,
            r = n.mode,
            i = n.restoreFocusTo,
            a = n.sourceLocation,
            o = n.targetLocation,
            s = n.type,
            c = n.draggableId;
          ((g.current = { isDragging: !1 }), h());
          var l = Jt({ start: a, target: o }),
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
          var m = Er(`onDragEnd`, p),
            _ = m.provided,
            v = m.getMessage;
          (u(p, _),
            Sr(v()),
            i &&
              requestAnimationFrame(function () {
                var e = ce({ contextId: d, draggableId: c });
                e && e.focus();
              }));
        }
      },
      [d, h, S, f, u, b],
    ),
    w = (0, j.useMemo)(
      function () {
        return { getDragState: _, startDrag: x, updateDrag: b, stopDrag: C };
      },
      [_, x, C, b],
    );
  $n({ dragController: w, contextId: d });
  var T = on({
      dragController: w,
      droppableRegistry: v,
      contextId: d,
      setKeyboardCleanupFn: S.setCleanupFn,
    }).startKeyboardDrag,
    E = (0, j.useCallback)(
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
    v.setUpdateListener(E),
    or({ contextId: d, nonce: i }),
    j.createElement(
      Gt,
      { contextId: d, dragController: w },
      j.createElement(
        gr,
        { lifecycle: f },
        j.createElement(
          ee,
          { contextId: d, getDragState: _, startKeyboardDrag: T, droppableRegistry: v },
          t,
        ),
      ),
    )
  );
}
var Fr = (function () {
  if (typeof window > `u`) return null;
  var e = new Image();
  return (
    (e.src = `data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==`),
    e
  );
})();
function Ir(e) {
  var t = e.nativeSetDragImage;
  t && Fr && t(Fr, 0, 0);
}
var Lr = (0, j.createContext)(null),
  Rr = Lr.Provider;
function zr() {
  var e = (0, j.useContext)(Lr);
  return (A(e, `Missing <Droppable /> parent`), e);
}
function Br() {
  var e = (0, j.useContext)(Lr);
  return e ? e.droppableId : null;
}
function Vr(e) {
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
        zt({
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
function Hr() {
  return { startKeyboardDrag: N().startKeyboardDrag };
}
function Ur() {
  return z({ attribute: L.dropIndicator });
}
function Wr(e) {
  return z({ attribute: I.placeholder.contextId, value: e });
}
function Gr(e) {
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
var Kr = { dragging: 5e3 };
function qr(e, t) {
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
function Jr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? qr(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : qr(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Yr = { transform: void 0, transition: void 0 },
  Xr = {
    position: `fixed`,
    top: 0,
    left: 0,
    boxSizing: `border-box`,
    transition: `none`,
    zIndex: Kr.dragging,
    opacity: 0.75,
    pointerEvents: `none`,
  };
function Zr(e) {
  var t = e.draggableDimensions,
    n = e.previewOffset,
    r = t.rect,
    i = r.left + n.x,
    a = r.top + n.y,
    o = i === 0 && a === 0;
  return Jr(
    Jr({}, Xr),
    {},
    { transform: o ? void 0 : `translate(${i}px, ${a}px)`, width: r.width, height: r.height },
  );
}
function Qr(e) {
  var t = e.draggableDimensions,
    n = e.draggableState;
  return n.type !== `dragging` || !n.previewOffset || !t
    ? Yr
    : Zr({ draggableDimensions: t, previewOffset: n.previewOffset });
}
var $r = {
  input: !0,
  button: !0,
  textarea: !0,
  select: !0,
  option: !0,
  optgroup: !0,
  video: !0,
  audio: !0,
};
function ei(e, t) {
  if (t == null) return !1;
  if ($r[t.tagName.toLowerCase()]) return !0;
  var n = t.getAttribute(`contenteditable`);
  return n === `true` || n === `` ? !0 : t === e ? !1 : ei(e, t.parentElement);
}
function ti(e, t) {
  var n = t.target;
  return n instanceof HTMLElement ? ei(e, n) : !1;
}
function ni(e, t) {
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
function ri(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ni(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ni(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var ii = (0, j.memo)(
    (0, j.forwardRef)(function (e, t) {
      var n = e.style,
        r = P(),
        i = N().contextId,
        a = d({}, I.placeholder.contextId, i),
        o = (0, j.useMemo)(
          function () {
            if (r) {
              var e = r.margin,
                t = r.rect;
              return ri(
                { boxSizing: `border-box`, width: t.width, height: t.height, margin: e },
                n,
              );
            }
          },
          [r, n],
        );
      return j.createElement(`div`, S({ ref: t, style: o }, a));
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
function ai(e, t) {
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
      ? ai(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ai(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var oi = { type: `idle`, draggingOver: null };
function si(e) {
  return { type: `hiding`, draggingOver: null, mode: e };
}
var ci = {
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
    A(n, `the placeholder should exist if in home position`);
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
    A(n, `the drop indicator should exist if in away position`);
    var i = { x: n.x - r.rect.x, y: n.y - r.rect.y },
      a = Q[t],
      o = a.mainAxis,
      s = a.crossAxis;
    return d(d({}, o.name, i[o.name] - 0.5 * r.rect[o.style.length]), s.name, i[s.name] + 24);
  },
};
function li(e, t) {
  var n = t.update,
    r = t.droppable,
    i = t.draggableDimensions,
    a = t.placeholderRect,
    o = t.dropIndicatorRect;
  if (!r || !i) return e;
  var s = { droppable: r, draggableDimensions: i, placeholderRect: a, dropIndicatorRect: o },
    c = V(n.source, n.destination ?? null) ? ci.home(s) : ci.away(s);
  return c ? $($({}, e), {}, { previewOffset: c }) : e;
}
function ui(e, t) {
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
function di(e, t) {
  if (t.type === `START_POINTER_DRAG`)
    return ui(e, $($({}, t.payload), {}, { previewOffset: { x: 0, y: 0 } }));
  if (t.type === `START_KEYBOARD_DRAG`) {
    var n = t.payload,
      r = n.draggableDimensions,
      i = n.droppable;
    return ui(
      e,
      $(
        $({}, t.payload),
        {},
        { previewOffset: ci.initial({ draggableDimensions: r, direction: i.direction }) },
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
      e.type === `dragging` ? li(e, t.payload) : e)
    : t.type === `DROP`
      ? (A(e.type === `dragging`, `The draggable is dragging.`), oi)
      : t.type === `START_HIDING`
        ? (A(e.type === `idle` || e.type === `hiding`), si(t.payload.mode))
        : t.type === `STOP_HIDING`
          ? (A(e.type === `hiding`), oi)
          : e;
}
function fi(e) {
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
var pi = function () {};
function mi(e) {
  var t = e.children,
    n = e.draggableId,
    r = e.index,
    i = e.isDragDisabled,
    a = i === void 0 ? !1 : i,
    s = e.disableInteractiveElementBlocking,
    c = s === void 0 ? !1 : s,
    l = zr(),
    u = l.direction,
    f = l.droppableId,
    m = l.type,
    h = l.mode,
    g = N(),
    _ = g.contextId,
    v = g.getDragState,
    y = (0, j.useRef)(null),
    b = (0, j.useRef)(null),
    x = re(),
    S = x.setCleanupFn,
    C = x.runCleanupFn,
    w = (0, j.useCallback)(
      function (e) {
        (y.current && C(),
          e && S(ie(e, d(d({}, L.draggable.droppableId, f), L.draggable.index, String(r)))),
          (y.current = e),
          (b.current = ce({ contextId: _, draggableId: n })));
      },
      [_, n, f, r, C, S],
    ),
    T = Gr(r),
    E = o((0, j.useReducer)(di, oi), 2),
    D = E[0],
    O = E[1],
    k = ye({ draggableId: n, droppableId: f, getIndex: T, contextId: _, type: m }),
    M = D.type === `dragging`,
    ee = D.type === `hiding`,
    te = zr(),
    F = te.shouldRenderCloneWhileDragging,
    ne = te.isDropDisabled,
    R = _r(),
    ae = Hr().startKeyboardDrag;
  ((0, j.useEffect)(
    function () {
      if (D.type === `idle` && !a) {
        var e = y.current;
        p(e instanceof HTMLElement);
        var t = b.current;
        return (
          p(t instanceof HTMLElement),
          (0, U.bindAll)(t, [
            {
              type: `keydown`,
              listener: function (t) {
                if (t.key === ` `) {
                  if (t.defaultPrevented || (!c && ti(e, t))) return;
                  (t.preventDefault(),
                    ae({
                      event: t,
                      draggableId: n,
                      type: m,
                      getSourceLocation: function () {
                        return { droppableId: f, index: T() };
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
    [c, n, f, T, a, ae, D.type, m],
  ),
    (0, j.useEffect)(
      function () {
        if (!ee && !a) {
          var e = y.current;
          A(e instanceof HTMLElement);
          var t = b.current;
          return (
            A(t instanceof HTMLElement),
            Vt({
              canDrag: function (e) {
                var n = e.input;
                return n.ctrlKey || n.metaKey || n.shiftKey || n.altKey
                  ? !1
                  : c
                    ? !M
                    : !ei(t, Ne({ x: n.clientX, y: n.clientY }));
              },
              element: e,
              dragHandle: t,
              getInitialData: function () {
                return k;
              },
              onGenerateDragPreview: Ir,
            })
          );
        }
      },
      [k, c, a, M, ee],
    ));
  var z = D.type !== `idle` && h === `standard`,
    oe = (0, j.useRef)(null);
  Vr({ elementRef: z ? oe : y, data: k, direction: u, contextId: _, isDropDisabled: ne, type: m });
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
        var e = v();
        F &&
          e.isDragging &&
          e.draggableId === k.draggableId &&
          O({ type: `START_HIDING`, payload: { mode: e.mode } });
      },
      [k.draggableId, v, F],
    ));
  var le = P();
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
        : H(
            R({
              onPendingDragStart: function (e) {
                var t = e.start,
                  n = e.droppable;
                if (k.draggableId === t.draggableId) {
                  if (t.mode === `FLUID`)
                    return O({ type: `START_POINTER_DRAG`, payload: { start: t } });
                  if (t.mode === `SNAP`) {
                    var r = v();
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
                      if (v().isDragging) {
                        var e = Wr(_),
                          r = e ? e.getBoundingClientRect() : null,
                          i = Ur();
                        O({
                          type: `UPDATE_KEYBOARD_PREVIEW`,
                          payload: {
                            update: t,
                            draggableDimensions: le,
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
            Bt({
              canMonitor: function (e) {
                var t = e.source;
                return B(t.data)
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
    [k.draggableId, k.contextId, R, F, u, _, le, v],
  );
  var ue = (0, j.useMemo)(
      function () {
        return {
          draggableProps: d(
            d(d({}, I.draggable.contextId, _), I.draggable.id, n),
            `style`,
            Qr({ draggableDimensions: le, draggableState: D }),
          ),
          dragHandleProps: d(
            d(
              d(
                d(
                  d({ role: `button`, "aria-describedby": Yt(_) }, I.dragHandle.contextId, _),
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
            pi,
          ),
          innerRef: w,
        };
      },
      [_, n, le, D, w],
    ),
    de = fi({ draggingOver: D.draggingOver, isClone: !1, isDragging: M, mode: M ? D.mode : null }),
    fe = (0, j.useMemo)(
      function () {
        return { draggableId: n, type: m, source: { droppableId: f, index: r } };
      },
      [n, f, r, m],
    );
  return j.createElement(
    j.Fragment,
    null,
    ee ? null : t(ue, de, fe),
    z && j.createElement(ii, { ref: oe }),
  );
}
function hi() {
  return document.body;
}
function gi(e) {
  var t = e.children,
    n = e.droppableId,
    r = e.type,
    i = e.draggableId,
    a = e.index,
    o = e.draggingOver,
    s = e.style,
    c = e.getContainerForClone,
    l = c === void 0 ? hi : c,
    u = e.mode,
    f = N().contextId,
    p = (0, j.useCallback)(
      function (e) {
        e && ce({ contextId: f, draggableId: i })?.focus();
      },
      [f, i],
    );
  return (0, X.createPortal)(
    t(
      (0, j.useMemo)(
        function () {
          return {
            innerRef: p,
            draggableProps: d(d(d({}, I.draggable.contextId, f), I.draggable.id, i), `style`, s),
            dragHandleProps: d(
              d(
                d(
                  d(
                    d({ role: `button`, "aria-describedby": Yt(f) }, I.dragHandle.contextId, f),
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
        [f, i, p, s],
      ),
      fi({ draggingOver: o, isClone: !0, isDragging: !0, mode: u }),
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
function _i(e) {
  var t = e.children,
    n = e.droppableId,
    r = e.type,
    i = e.getContainerForClone,
    a = N(),
    s = a.contextId,
    c = a.getDragState,
    l = P(),
    u = o((0, j.useReducer)(di, oi), 2),
    d = u[0],
    f = u[1],
    p = _r();
  if (
    ((0, j.useEffect)(
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
                    A(i.isDragging && i.draggableDimensions),
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
                      var e = Wr(s),
                        r = e ? e.getBoundingClientRect() : null,
                        i = Ur();
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
          Bt({
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
  var m = Qr({ draggableDimensions: l, draggableState: d });
  return j.createElement(
    gi,
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
var vi = {
  horizontal: { rect: { start: `left`, end: `right` } },
  vertical: { rect: { start: `top`, end: `bottom` } },
};
function yi(e) {
  var t = e.a,
    n = e.b,
    r = vi[e.direction].rect;
  return Math.max(t[r.start], n[r.start]) - Math.min(t[r.end], n[r.end]);
}
function bi(e) {
  return R(e, L.draggable.droppableId);
}
function xi(e) {
  var t = R(e, L.draggable.index),
    n = parseInt(t);
  return (A(Number.isInteger(n), `invalid index: '${n}' is not an integer`), n);
}
function Si(e) {
  var t = e.element,
    n = e.where,
    r = e.direction,
    i = e.contextId,
    a = bi(t),
    o = xi(t),
    s = o - 1,
    c = o + 1,
    l = en(i, { droppableId: a, index: n === `before` ? s : c });
  if (l === null) {
    var u = getComputedStyle(t),
      d = u.marginTop,
      f = u.marginRight,
      p = u.marginBottom,
      m = u.marginLeft;
    return r === `horizontal` ? parseFloat(m) + parseFloat(f) : parseFloat(d) + parseFloat(p);
  }
  return yi({ direction: r, a: t.getBoundingClientRect(), b: l.getBoundingClientRect() });
}
function Ci(e) {
  var t = e.element,
    n = e.where,
    r = e.direction,
    i = e.contextId,
    a = Si({ element: t, where: n, direction: r, contextId: i });
  return n === `before` ? -a / 2 : a / 2;
}
function wi(e) {
  var t = e.element,
    n = e.isForwardEdge,
    r = e.mode,
    i = e.direction,
    a = e.contextId,
    o = Q[i],
    s = o.mainAxis,
    c = o.crossAxis,
    l = ue({ element: t, mode: r }),
    u = Ci({ element: t, where: n ? `after` : `before`, direction: i, contextId: a }),
    d = l[s.offset] - 1;
  return {
    mainAxis: { offset: (n ? d + t[s.length] : d) + u },
    crossAxis: { offset: l[c.offset], length: l[c.length] },
  };
}
function Ti(e) {
  var t = e.element,
    n = Q[e.direction],
    r = n.mainAxis,
    i = n.crossAxis;
  return {
    mainAxis: { offset: t[r.offset] - 1 + t[r.length] / 2 },
    crossAxis: { offset: t[i.offset], length: t[i.length] },
  };
}
function Ei(e) {
  var t = e.element,
    n = Q[e.direction].mainAxis,
    r = Zt(t);
  return !r || getComputedStyle(r).position !== `static` ? 0 : r[n.offset];
}
function Di(e) {
  var t = e.droppableId,
    n = e.direction;
  return {
    mainAxis: {
      offset: Ei({ element: se({ attribute: I.droppable.id, value: t }), direction: n }),
    },
    crossAxis: { offset: 0, length: `100%` },
  };
}
function Oi(e) {
  var t = e.targetLocation,
    n = e.isInHomeLocation,
    r = e.direction,
    i = e.mode,
    a = e.contextId;
  if (n) {
    var o = Wr(a);
    return o ? Ti({ element: o, direction: r }) : null;
  }
  if (t.index === 0) {
    var s = en(a, t);
    return s
      ? wi({ element: s, isForwardEdge: !1, mode: i, direction: r, contextId: a })
      : Di({ droppableId: t.droppableId, direction: r });
  }
  var c = en(a, { droppableId: t.droppableId, index: t.index - 1 });
  return c ? wi({ element: c, isForwardEdge: !0, mode: i, direction: r, contextId: a }) : null;
}
var ki = 4,
  Ai = _({
    background: `var(--ds-border-brand, #1868DB)`,
    scrollMarginTop: ki,
    scrollMarginBottom: ki + 1,
  }),
  ji = _({ position: `absolute`, top: 0, left: 0 }),
  Mi = _({ opacity: 0 }),
  Ni = {
    horizontal: _({ width: 2, height: `100%`, marginLeft: -2 }),
    vertical: _({ width: `100%`, height: 2, marginTop: -2 }),
  };
function Pi(e) {
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
var Fi = d({}, L.dropIndicator, ``),
  Ii = function (e) {
    var t = e.direction,
      n = e.mode,
      r = N(),
      i = r.contextId,
      a = r.getDragState,
      s = (0, j.useRef)(null),
      c = o((0, j.useState)(null), 2),
      l = c[0],
      u = c[1],
      d = o((0, j.useState)(!1), 2),
      f = d[0],
      p = d[1],
      m = _r(),
      g = (0, j.useCallback)(
        function (e) {
          var r = e.targetLocation,
            a = e.source,
            o = e.destination;
          if (!r) return u(null);
          var s = V(a, o);
          return (
            p(s),
            u(Oi({ targetLocation: r, isInHomeLocation: s, direction: t, mode: n, contextId: i }))
          );
        },
        [i, t, n],
      );
    ((0, j.useLayoutEffect)(
      function () {
        var e = a();
        if (e.isDragging) {
          var t = e.targetLocation,
            n = e.sourceLocation;
          return (
            g({ targetLocation: t, destination: Jt({ start: n, target: t }), source: n }),
            m({
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
      [i, t, a, n, m, g],
    ),
      (0, j.useLayoutEffect)(
        function () {
          if (l !== null) {
            var e = a();
            if (!(!e.isDragging || e.mode !== `SNAP`)) {
              var t = s.current;
              (A(t instanceof HTMLElement), t.scrollIntoView({ block: `nearest` }));
            }
          }
        },
        [l, a],
      ));
    var _ = Q[t].mainAxis,
      v = Pi({ direction: t, dimensions: l, indicatorOffset: s.current ? s.current[_.offset] : 0 }),
      y = n === `virtual`;
    return h(`div`, S({ ref: s, css: [Ai, Ni[t], y && ji, f && Mi], style: v }, Fi));
  };
function Li(e, t) {
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
function Ri(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Li(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Li(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var zi = { draggingFromThisWith: null, draggingOverWith: null, isDraggingOver: !1 };
function Bi(e, t) {
  if (t.type === `DRAG_START`) {
    var n = t.payload,
      r = n.droppableId,
      i = n.start,
      a = i.draggableId,
      o = i.source,
      s = o.droppableId === r,
      c = s ? a : null,
      l = o.droppableId === r ? a : null;
    return Ri(Ri({}, e), {}, { isDraggingOver: s, draggingFromThisWith: l, draggingOverWith: c });
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
    return Ri(Ri({}, e), {}, { isDraggingOver: _, draggingFromThisWith: y, draggingOverWith: v });
  }
  return t.type === `DRAG_CLEAR` ? zi : e;
}
function Vi(e) {
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
    Vr({
      elementRef: o,
      data: ye({
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
  return j.createElement(ii, { ref: o, style: d });
}
function Hi(e) {
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
    m = e.isDropDisabled,
    h = m === void 0 ? !1 : m,
    g = Gr(h),
    _ = N(),
    v = _.contextId,
    y = _.droppableRegistry,
    b = Se({ contextId: v, droppableId: n, getIsDropDisabled: g }),
    x = (0, j.useRef)(null),
    S = (0, j.useCallback)(
      function (e) {
        (e &&
          ie(
            e,
            d(
              d(d(d({}, L.droppable.type, i), L.droppable.direction, s), I.droppable.id, n),
              I.droppable.contextId,
              v,
            ),
          ),
          (x.current = e));
      },
      [v, s, n, i],
    ),
    C = o((0, j.useReducer)(Bi, zi), 2),
    w = C[0],
    T = C[1],
    E = w.draggingFromThisWith,
    D = w.draggingOverWith,
    O = w.isDraggingOver,
    k = Br();
  (0, j.useEffect)(
    function () {
      var e = x.current;
      return (
        p(e instanceof HTMLElement, "innerRef must provide an `HTMLElement`"),
        H(
          y.register({
            droppableId: n,
            type: i,
            isDropDisabled: h,
            parentDroppableId: k,
            element: e,
            direction: s,
            mode: l,
          }),
          zt({
            element: e,
            getData: function (t) {
              var n = t.input;
              return ge(b, {
                element: e,
                input: n,
                allowedEdges: s === `vertical` ? [`top`, `bottom`] : [`left`, `right`],
              });
            },
            canDrop: function (e) {
              var t = e.source;
              return !B(t.data) || h ? !1 : t.data.contextId === v && t.data.type === i;
            },
            onDragLeave: function () {
              T({ type: `DRAG_CLEAR` });
            },
          }),
        )
      );
    },
    [b, n, v, h, i, y, k, s, l],
  );
  var A = _r();
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
        return O ? j.createElement(Ii, { direction: s, mode: l }) : null;
      },
      [s, O, l],
    ),
    ee = (0, j.useMemo)(
      function () {
        return {
          innerRef: S,
          droppableProps: d(d({}, I.droppable.contextId, v), I.droppable.id, n),
          placeholder: l === `standard` ? M : null,
        };
      },
      [v, M, n, l, S],
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
    P = x.current,
    F = O && l === `virtual` && P;
  er(
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
          direction: s,
          droppableId: n,
          shouldRenderCloneWhileDragging: ne,
          isDropDisabled: h,
          type: i,
          mode: l,
        };
      },
      [s, n, ne, h, i, l],
    ),
    R = E && l === `virtual` && P;
  return j.createElement(
    Rr,
    { value: re },
    t(ee, te),
    F && (0, X.createPortal)(M, P),
    R &&
      (0, X.createPortal)(
        j.createElement(Vi, {
          droppableId: n,
          draggableId: E,
          type: i,
          direction: s,
          isDropDisabled: h,
        }),
        P,
      ),
    u && j.createElement(_i, { droppableId: n, type: i, getContainerForClone: f }, u),
  );
}
w();
var Ui = [`isRanking`, `isRankingItem`, `testId`],
  Wi = (0, j.forwardRef)(function (e, t) {
    var n = e.isRanking,
      r = e.isRankingItem,
      i = e.testId,
      o = a(e, Ui);
    return j.createElement(
      b,
      S({ ref: t, testId: i }, o, {
        className: C([
          n && `_1e0c1ule`,
          r && `_2rkolb4i _bfhk1bhr _16qs130s`,
          `_12y3e4h9 _mizu1v1w _ra3xnqa1`,
        ]),
      }),
    );
  });
w();
var Gi = [`isRanking`, `innerRef`],
  Ki = function (e) {
    var t = e.isRanking,
      n = e.innerRef,
      r = a(e, Gi);
    return j.createElement(g, S({}, r, { innerRef: n, className: C([t && `_vchhusvi`]) }));
  },
  qi = [`content`, `testId`];
function Ji(e, t, n) {
  return ((t = u(t)), s(e, Yi() ? Reflect.construct(t, n || [], u(e).constructor) : t.apply(e, n)));
}
function Yi() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Yi = function () {
    return !!e;
  })();
}
var Xi = v(
    (function (e) {
      function t() {
        return (c(this, t), Ji(this, t, arguments));
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
                d = a(t, qi),
                f = n || {},
                p = f.shouldTruncate,
                m = f.width,
                h = x(i, o);
              return j.createElement(
                Ki,
                S({}, d, {
                  isFixedSize: r,
                  shouldTruncate: p,
                  width: m,
                  isRanking: i,
                  style: h,
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
    })(j.Component),
  ),
  Zi = [`cells`, `testId`, `key`, `isHighlighted`];
function Qi(e, t) {
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
function $i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Qi(Object(n), !0).forEach(function (t) {
          d(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Qi(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ea(e, t, n) {
  return ((t = u(t)), s(e, ta() ? Reflect.construct(t, n || [], u(e).constructor) : t.apply(e, n)));
}
function ta() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ta = function () {
    return !!e;
  })();
}
var na = v(
  (function (e) {
    function t() {
      var e;
      c(this, t);
      var n = [...arguments];
      return (
        (e = ea(this, t, [].concat(n))),
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
              m = n.key,
              h = n.isHighlighted,
              g = a(n, Zi),
              _ = x(o, s);
            if (typeof m != `string` && !l)
              throw Error(
                `dynamic-table: ranking is not possible because table row does not have a key. Add the key to the row or disable ranking.`,
              );
            return j.createElement(
              mi,
              { draggableId: m || c.toString(), index: c, isDragDisabled: l },
              function (t, n) {
                return j.createElement(
                  Wi,
                  S({}, g, t.dragHandleProps, t.draggableProps, {
                    role: void 0,
                    "aria-labelledby": void 0,
                    "aria-describedby": t.dragHandleProps?.[`aria-describedby`],
                    ref: e.innerRef(t.innerRef),
                    style: $i($i({}, t.draggableProps.style), _),
                    isHighlighted: u || h,
                    isRanking: o,
                    isRankingItem: n.isDragging,
                    testId: p || (d && `${d}--rankable--table--body--row`),
                  }),
                  f.map(function (e, t) {
                    var n = (r || { cells: [] }).cells[t];
                    return j.createElement(Xi, {
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
  })(j.Component),
);
function ra(e, t, n) {
  return ((t = u(t)), s(e, ia() ? Reflect.construct(t, n || [], u(e).constructor) : t.apply(e, n)));
}
function ia() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ia = function () {
    return !!e;
  })();
}
var aa = function (e, t) {
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
  oa = (function (e) {
    function t() {
      var e;
      c(this, t);
      var n = [...arguments];
      return (
        (e = ra(this, t, [].concat(n))),
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
          i({ sourceIndex: t.source.index, sourceKey: a, destination: aa(t, r) });
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
            return j.createElement(
              Pr,
              { onBeforeDragStart: this.onBeforeDragStart, onDragEnd: this.onDragEnd },
              j.createElement(
                Hi,
                { droppableId: `dynamic-table-droppable`, isDropDisabled: o },
                function (e) {
                  return j.createElement(
                    `tbody`,
                    S(
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
                      return j.createElement(na, {
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
  sa = y(
    j.forwardRef(function (e, t) {
      return j.createElement(oa, S({}, e, { forwardedRef: t }));
    }),
  );
export { sa as default };
