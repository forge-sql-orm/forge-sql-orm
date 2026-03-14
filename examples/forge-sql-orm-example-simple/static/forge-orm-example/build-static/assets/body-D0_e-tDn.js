import { a as e } from "./rolldown-runtime-COnpUsM8.js";
import { n as t, r as n } from "./react-dom-vendor-CmKAYmuF.js";
import {
  a as r,
  c as i,
  d as a,
  i as o,
  l as s,
  n as c,
  o as l,
  r as u,
  s as d,
  t as f,
} from "./wrapNativeSuper-CMD0Ca0W.js";
import {
  C as p,
  S as m,
  T as h,
  b as g,
  n as _,
  r as v,
  t as y,
  v as b,
  w as x,
  x as S,
  y as ee,
} from "./index-CfCWtknf.js";
function C(e, t, n) {
  return ((t = d(t)), i(e, w() ? Reflect.construct(t, n || [], d(e).constructor) : t.apply(e, n)));
}
function w() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (w = function () {
    return !!e;
  })();
}
var T = !0,
  E = `Invariant failed`,
  D = (function (e) {
    function t(e) {
      var n;
      return (a(this, t), (n = C(this, t)), (n.message = e), n);
    }
    return (
      l(t, e),
      s(t, [
        {
          key: `toString`,
          value: function () {
            return this.message;
          },
        },
      ])
    );
  })(f(Error));
function O(e, t) {
  if (!e) throw T ? new D(E) : new D(`${E}: ${t || ``}`);
}
var k = e(n()),
  A = (0, k.createContext)(null);
function j() {
  var e = (0, k.useContext)(A);
  return (O(e !== null, `Unable to find DragDropContext context`), e);
}
function M(e) {
  var t = e.children,
    n = e.contextId,
    r = e.getDragState,
    i = e.startKeyboardDrag,
    a = e.droppableRegistry,
    o = (0, k.useMemo)(
      function () {
        return { contextId: n, getDragState: r, startKeyboardDrag: i, droppableRegistry: a };
      },
      [n, r, i, a],
    );
  return k.createElement(A.Provider, { value: o }, t);
}
function te(e) {
  return { margin: window.getComputedStyle(e).margin, rect: e.getBoundingClientRect() };
}
function ne() {
  var e = j().getDragState,
    t = e();
  return t.isDragging ? t.draggableDimensions : null;
}
var N = function () {};
function P() {
  var e = N;
  return {
    setCleanupFn: function (t) {
      e = t;
    },
    runCleanupFn: function () {
      (e(), (e = N));
    },
  };
}
function re() {
  var e = o((0, k.useState)(P), 1)[0];
  return (
    (0, k.useEffect)(
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
  return (O(n !== null, `Expected '${t}' to be present`), n);
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
function R() {
  return [...arguments]
    .map(function (e) {
      var t = e.attribute,
        n = e.value;
      return n ? `[${t}="${CSS.escape(n)}"]` : `[${t}]`;
    })
    .join(``);
}
function z() {
  var e = R.apply(void 0, arguments);
  return document.querySelector(e);
}
function ae() {
  var e = R.apply(void 0, arguments);
  return Array.from(document.querySelectorAll(e));
}
function oe() {
  var e = z.apply(void 0, arguments);
  return (O(e, `There is a matching HTMLElement for selector ` + R.apply(void 0, arguments)), e);
}
function se(e) {
  var t = e.contextId,
    n = e.draggableId;
  return z(
    { attribute: F.dragHandle.contextId, value: t },
    { attribute: F.dragHandle.draggableId, value: n },
  );
}
function ce(e) {
  if (getComputedStyle(e).position === `absolute`) return e;
  var t = e.parentElement;
  return t instanceof HTMLElement ? ce(t) : null;
}
function B(e) {
  var t = e.element;
  return e.mode === `standard` ? t : (ce(t) ?? t);
}
function le() {
  window.dispatchEvent(new DragEvent(`dragend`));
}
function ue(e, t) {
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
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ue(Object(n), !0).forEach(function (t) {
          r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ue(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var fe = {
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
  pe = Symbol(`closestEdge`);
function me(e, t) {
  var n = t.element,
    i = t.input,
    a = t.allowedEdges,
    o = { x: i.clientX, y: i.clientY },
    s = n.getBoundingClientRect(),
    c =
      a
        .map(function (e) {
          return { edge: e, value: fe[e](s, o) };
        })
        .sort(function (e, t) {
          return e.value - t.value;
        })[0]?.edge ?? null;
  return de(de({}, e), {}, r({}, pe, c));
}
function he(e) {
  return e[pe] ?? null;
}
var ge = Symbol(`DraggableData`);
function V(e) {
  return e[ge] === !0;
}
function _e(e) {
  var t = e.draggableId,
    n = e.droppableId,
    i = e.getIndex,
    a = e.contextId,
    o = e.type;
  return (0, k.useMemo)(
    function () {
      return r(
        r(
          r(r(r(r({}, ge, !0), `draggableId`, t), `droppableId`, n), `getIndex`, i),
          `contextId`,
          a,
        ),
        `type`,
        o,
      );
    },
    [t, n, i, a, o],
  );
}
var ve = Symbol(`DroppableData`);
function ye(e) {
  return e[ve] === !0;
}
function be(e) {
  var t = e.contextId,
    n = e.droppableId,
    i = e.getIsDropDisabled;
  return (0, k.useMemo)(
    function () {
      return r(r(r(r({}, ve, !0), `contextId`, t), `droppableId`, n), `getIsDropDisabled`, i);
    },
    [t, n, i],
  );
}
function xe(e) {
  var t = e.droppableId,
    n = e.contextId;
  return ae(
    { attribute: F.draggable.contextId, value: n },
    { attribute: I.draggable.droppableId, value: t },
  );
}
var Se = [`droppableId`, `getIndex`],
  Ce = [`contextId`, `droppableId`];
function we(e) {
  var t = e.droppableId,
    n = e.getIndex,
    r = u(e, Se),
    i = n(),
    a = he(r);
  return ((a === `bottom` || a === `right`) && (i += 1), { droppableId: t, index: i });
}
function Te(e) {
  var t = e.contextId,
    n = e.droppableId,
    r = u(e, Ce),
    i = xe({ contextId: t, droppableId: n });
  if (i.length === 0) return { droppableId: n, index: 0 };
  var a = he(r);
  return a === `top` || a === `left`
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
function Ee(e) {
  var t = e.dropTargets;
  if (t.length === 0) return null;
  var n = t[0];
  return V(n.data) ? we(n.data) : ye(n.data) ? Te(n.data) : null;
}
function H(e, t) {
  return !(e?.droppableId !== t?.droppableId || e?.index !== t?.index);
}
function De() {
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
function Oe() {
  return o((0, k.useState)(De), 1)[0];
}
function U() {
  var e = [...arguments];
  return function () {
    e.forEach(function (e) {
      return e();
    });
  };
}
var ke = `data-pdnd-honey-pot`;
function Ae(e) {
  return e instanceof Element && e.hasAttribute(`data-pdnd-honey-pot`);
}
function je(e) {
  var t = o(document.elementsFromPoint(e.x, e.y), 2),
    n = t[0],
    r = t[1];
  return n ? (Ae(n) ? (r ?? null) : n) : null;
}
var Me = 2147483647,
  W = b();
function Ne(e, t) {
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
function Pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ne(Object(n), !0).forEach(function (t) {
          r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ne(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Fe = 2,
  Ie = Fe / 2;
function Le(e) {
  return { x: Math.floor(e.x), y: Math.floor(e.y) };
}
function Re(e) {
  return { x: e.x - Ie, y: e.y - Ie };
}
function ze(e) {
  return { x: Math.max(e.x, 0), y: Math.max(e.y, 0) };
}
function Be(e) {
  return { x: Math.min(e.x, window.innerWidth - Fe), y: Math.min(e.y, window.innerHeight - Fe) };
}
function Ve(e) {
  var t = e.client,
    n = Be(ze(Re(Le(t))));
  return DOMRect.fromRect({ x: n.x, y: n.y, width: Fe, height: Fe });
}
function He(e) {
  var t = e.clientRect;
  return { left: `${t.left}px`, top: `${t.top}px`, width: `${t.width}px`, height: `${t.height}px` };
}
function Ue(e) {
  var t = e.client,
    n = e.clientRect;
  return t.x >= n.x && t.x <= n.x + n.width && t.y >= n.y && t.y <= n.y + n.height;
}
function We(e) {
  var t = e.initial,
    n = document.createElement(`div`);
  n.setAttribute(ke, `true`);
  var r = Ve({ client: t });
  (Object.assign(
    n.style,
    Pe(
      Pe(
        {
          backgroundColor: `transparent`,
          position: `fixed`,
          padding: 0,
          margin: 0,
          boxSizing: `border-box`,
        },
        He({ clientRect: r }),
      ),
      {},
      { pointerEvents: `auto`, zIndex: Me },
    ),
  ),
    document.body.appendChild(n));
  var i = (0, W.bind)(window, {
    type: `pointermove`,
    listener: function (e) {
      ((r = Ve({ client: { x: e.clientX, y: e.clientY } })),
        Object.assign(n.style, He({ clientRect: r })));
    },
    options: { capture: !0 },
  });
  return function (e) {
    var t = e.current;
    if ((i(), Ue({ client: t, clientRect: r }))) {
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
function Ge() {
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
        t = We({ initial: e ?? { x: a.clientX, y: a.clientY } });
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
function G(e) {
  var t = null;
  return function () {
    if (!t) {
      var n = [...arguments];
      t = { result: e.apply(this, n) };
    }
    return t.result;
  };
}
var Ke = G(function () {
    return navigator.userAgent.includes(`Firefox`);
  }),
  qe = G(function () {
    var e = navigator.userAgent;
    return e.includes(`AppleWebKit`) && !e.includes(`Chrome`);
  }),
  Je = { isLeavingWindow: Symbol(`leaving`), isEnteringWindow: Symbol(`entering`) };
function Ye(e) {
  var t = e.dragLeave;
  return qe() ? t.hasOwnProperty(Je.isLeavingWindow) : !1;
}
(function () {
  if (typeof window > `u` || !qe()) return;
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
          (!t.isOverWindow && t.enterCount === 0 && (e[Je.isEnteringWindow] = !0),
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
              ((e[Je.isLeavingWindow] = !0), (t.isOverWindow = !1)));
        },
      },
    ],
    { capture: !0 },
  );
})();
function Xe(e) {
  return `nodeName` in e;
}
function Ze(e) {
  return Xe(e) && e.ownerDocument !== document;
}
function Qe(e) {
  var t = e.dragLeave,
    n = t.type,
    r = t.relatedTarget;
  return n === `dragleave`
    ? qe()
      ? Ye({ dragLeave: t })
      : r == null
        ? !0
        : Ke()
          ? Ze(r)
          : r instanceof HTMLIFrameElement
    : !1;
}
function $e(e) {
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
function et(e) {
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
var tt = (function (e) {
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
  nt = (function () {
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
function rt(e) {
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
        nt.schedule(function () {
          a({ eventName: `onDragStart`, payload: { source: t, location: o } });
        }));
    },
    dragUpdate: function (e) {
      var r = e.current;
      (nt.flush(),
        tt.cancel(),
        a({
          eventName: `onDropTargetChange`,
          payload: { source: t, location: { initial: n, previous: i, current: r } },
        }));
    },
    drag: function (e) {
      var r = e.current;
      tt(function () {
        (nt.flush(),
          a({
            eventName: `onDrag`,
            payload: { source: t, location: { initial: n, previous: i, current: r } },
          }));
      });
    },
    drop: function (e) {
      var r = e.current,
        o = e.updatedSourcePayload;
      (nt.flush(),
        tt.cancel(),
        a({
          eventName: `onDrop`,
          payload: { source: o ?? t, location: { current: r, previous: i, initial: n } },
        }));
    },
  };
}
var it = { isActive: !1 };
function at() {
  return !it.isActive;
}
function ot(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function st(e) {
  var t = e.current,
    n = e.next;
  if (t.length !== n.length) return !0;
  for (var r = 0; r < t.length; r++) if (t[r].element !== n[r].element) return !0;
  return !1;
}
function ct(e) {
  var t = e.event,
    n = e.dragType,
    r = e.getDropTargetsOver,
    i = e.dispatchEvent;
  if (!at()) return;
  var a = ut({ event: t, dragType: n, getDropTargetsOver: r });
  it.isActive = !0;
  var o = { current: a };
  lt({ event: t, current: a.dropTargets });
  var s = rt({ source: n.payload, dispatchEvent: i, initial: a });
  function l(e) {
    var t = st({ current: o.current.dropTargets, next: e.dropTargets });
    ((o.current = e), t && s.dragUpdate({ current: o.current }));
  }
  function u(e) {
    var t = et(e),
      i = r({
        target: Ae(e.target) ? je({ x: t.clientX, y: t.clientY }) : e.target,
        input: t,
        source: n.payload,
        current: o.current.dropTargets,
      });
    (i.length && (e.preventDefault(), lt({ event: e, current: i })),
      l({ dropTargets: i, input: t }));
  }
  function d() {
    (o.current.dropTargets.length && l({ dropTargets: [], input: o.current.input }),
      s.drop({ current: o.current, updatedSourcePayload: null }),
      f());
  }
  function f() {
    ((it.isActive = !1), p());
  }
  var p = (0, W.bindAll)(
    window,
    [
      {
        type: `dragover`,
        listener: function (e) {
          (u(e), s.drag({ current: o.current }));
        },
      },
      { type: `dragenter`, listener: u },
      {
        type: `dragleave`,
        listener: function (e) {
          Qe({ dragLeave: e }) &&
            (l({ input: o.current.input, dropTargets: [] }), n.startedFrom === `external` && d());
        },
      },
      {
        type: `drop`,
        listener: function (e) {
          if (
            ((o.current = { dropTargets: o.current.dropTargets, input: et(e) }),
            !o.current.dropTargets.length)
          ) {
            d();
            return;
          }
          (e.preventDefault(),
            lt({ event: e, current: o.current.dropTargets }),
            s.drop({
              current: o.current,
              updatedSourcePayload: n.type === `external` ? n.getDropPayload(e) : null,
            }),
            f());
        },
      },
      {
        type: `dragend`,
        listener: function (e) {
          ((o.current = { dropTargets: o.current.dropTargets, input: et(e) }), d());
        },
      },
    ].concat(c($e({ onDragEnd: d }))),
    { capture: !0 },
  );
  s.start({ nativeSetDragImage: ot(t) });
}
function lt(e) {
  var t = e.event,
    n = e.current[0]?.dropEffect;
  n != null && t.dataTransfer && (t.dataTransfer.dropEffect = n);
}
function ut(e) {
  var t = e.event,
    n = e.dragType,
    r = e.getDropTargetsOver,
    i = et(t);
  return n.startedFrom === `external`
    ? { input: i, dropTargets: [] }
    : { input: i, dropTargets: r({ input: i, source: n.payload, target: t.target, current: [] }) };
}
var dt = { canStart: at, start: ct },
  ft = new Map();
function pt(e) {
  var t = e.typeKey,
    n = e.mount,
    r = ft.get(t);
  if (r) return (r.usageCount++, r);
  var i = { typeKey: t, unmount: n(), usageCount: 1 };
  return (ft.set(t, i), i);
}
function mt(e) {
  var t = pt(e);
  return function () {
    (t.usageCount--, !(t.usageCount > 0) && (t.unmount(), ft.delete(e.typeKey)));
  };
}
function ht(e, t) {
  var n = t.attribute,
    r = t.value;
  return (
    e.setAttribute(n, r),
    function () {
      return e.removeAttribute(n);
    }
  );
}
function gt(e, t) {
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
      ? gt(Object(n), !0).forEach(function (t) {
          r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : gt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function _t(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = vt(e)) || (t && e && typeof e.length == `number`)) {
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
function vt(e, t) {
  if (e) {
    if (typeof e == `string`) return yt(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? yt(e, t)
          : void 0
    );
  }
}
function yt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function bt(e) {
  return e.slice(0).reverse();
}
function xt(e) {
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
    return G(U(ht(e.element, { attribute: i, value: `true` }), o(e)));
  }
  function l(e) {
    var t = e.source,
      i = e.target,
      o = e.input,
      s = e.result,
      u = s === void 0 ? [] : s;
    if (i == null) return u;
    if (!(i instanceof Element))
      return i instanceof Node ? l({ source: t, target: i.parentElement, input: o, result: u }) : u;
    var d = i.closest(a);
    if (d == null) return u;
    var f = r.get(d);
    if (f == null) return u;
    var p = { input: o, source: t, element: f.element };
    if (f.canDrop && !f.canDrop(p))
      return l({ source: t, target: f.element.parentElement, input: o, result: u });
    var m = f.getData?.call(f, p) ?? {},
      h = f.getDropEffect?.call(f, p) ?? n,
      g = { data: m, element: f.element, dropEffect: h, isActiveDueToStickiness: !1 };
    return l({
      source: t,
      target: f.element.parentElement,
      input: o,
      result: [].concat(c(u), [g]),
    });
  }
  function u(e) {
    var t = e.eventName,
      n = e.payload,
      i = _t(n.location.current.dropTargets),
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
        i = new Set(),
        a = _t(t.location.previous.dropTargets),
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
      var p = _t(t.location.current.dropTargets),
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
  function f(e) {
    d[e.eventName](e);
  }
  function p(e) {
    var t = e.source,
      n = e.target,
      i = e.input,
      a = e.current,
      o = l({ source: t, target: n, input: i });
    if (o.length >= a.length) return o;
    for (var s = bt(a), c = bt(o), u = [], d = 0; d < s.length; d++) {
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
      var _ = r.get(p.element);
      if (!_) break;
      var v = { input: i, source: t, element: _.element };
      if ((_.canDrop && !_.canDrop(v)) || !((f = _.getIsSticky) != null && f.call(_, v))) break;
      u.push(K(K({}, p), {}, { isActiveDueToStickiness: !0 }));
    }
    return bt(u);
  }
  return { dropTargetForConsumers: s, getIsOver: p, dispatchEvent: f };
}
function St(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = Ct(e)) || (t && e && typeof e.length == `number`)) {
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
function Ct(e, t) {
  if (e) {
    if (typeof e == `string`) return wt(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? wt(e, t)
          : void 0
    );
  }
}
function wt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Tt(e, t) {
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
function Et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Tt(Object(n), !0).forEach(function (t) {
          r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Tt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Dt() {
  var e = new Set(),
    t = null;
  function n(e) {
    t && (!e.canMonitor || e.canMonitor(t.canMonitorArgs)) && t.active.add(e);
  }
  function r(r) {
    var i = Et({}, r);
    (e.add(i), n(i));
    function a() {
      (e.delete(i), t && t.active.delete(i));
    }
    return G(a);
  }
  function i(r) {
    var i = r.eventName,
      a = r.payload;
    if (i === `onGenerateDragPreview`) {
      t = { canMonitorArgs: { initial: a.location.initial, source: a.source }, active: new Set() };
      var o = St(e),
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
function Ot(e) {
  var t = e.typeKey,
    n = e.mount,
    r = e.dispatchEventToSource,
    i = e.onPostDispatch,
    a = e.defaultDropEffect,
    o = Dt(),
    s = xt({ typeKey: t, defaultDropEffect: a });
  function c(e) {
    (r?.(e), s.dispatchEvent(e), o.dispatchEvent(e), i?.(e));
  }
  function l(e) {
    var t = e.event,
      n = e.dragType;
    dt.start({ event: t, dragType: n, getDropTargetsOver: s.getIsOver, dispatchEvent: c });
  }
  function u() {
    function e() {
      return n({ canStart: dt.canStart, start: l });
    }
    return mt({ typeKey: t, mount: e });
  }
  return { registerUsage: u, dropTarget: s.dropTargetForConsumers, monitor: o.monitorForConsumers };
}
var kt = G(function () {
    return navigator.userAgent.toLocaleLowerCase().includes(`android`);
  }),
  At = `pdnd:android-fallback`,
  jt = `text/plain`,
  Mt = `application/vnd.pdnd`,
  Nt = new WeakMap();
function Pt(e) {
  return (
    Nt.set(e.element, e),
    function () {
      Nt.delete(e.element);
    }
  );
}
var Ft = Ge(),
  It = Ot({
    typeKey: `element`,
    defaultDropEffect: `move`,
    mount: function (e) {
      return U(
        Ft.bindEvents(),
        (0, W.bind)(document, {
          type: `dragstart`,
          listener: function (t) {
            if (e.canStart(t) && !t.defaultPrevented && t.dataTransfer) {
              var n = t.target;
              if (n instanceof HTMLElement) {
                var r = Nt.get(n);
                if (r) {
                  var i = et(t),
                    a = { element: r.element, dragHandle: r.dragHandle ?? null, input: i };
                  if (r.canDrag && !r.canDrag(a)) {
                    t.preventDefault();
                    return;
                  }
                  if (r.dragHandle) {
                    var s = je({ x: i.clientX, y: i.clientY });
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
                  (kt() &&
                    !t.dataTransfer.types.includes(`text/plain`) &&
                    !t.dataTransfer.types.includes(`text/uri-list`) &&
                    t.dataTransfer.setData(jt, At),
                    t.dataTransfer.setData(Mt, ``));
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
      (t = Nt.get(i.source.element)) == null || (n = t[r]) == null || n.call(t, i);
    },
    onPostDispatch: Ft.getOnPostDispatch(),
  }),
  Lt = It.dropTarget,
  Rt = It.monitor;
function zt(e) {
  return G(U(It.registerUsage(), Pt(e), ht(e.element, { attribute: `draggable`, value: `true` })));
}
function Bt(e, t, n) {
  return ((t = d(t)), i(e, Vt() ? Reflect.construct(t, n || [], d(e).constructor) : t.apply(e, n)));
}
function Vt() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Vt = function () {
    return !!e;
  })();
}
function Ht(e) {
  var t = e.children,
    n = e.dragController,
    r = (0, k.useRef)(!1),
    i = (0, k.useCallback)(
      function (e) {
        var t = n.getDragState();
        t.isDragging &&
          (t.mode === `FLUID` && le(),
          t.mode === `SNAP` && n.stopDrag({ reason: `CANCEL` }),
          e.error instanceof D && e.preventDefault());
      },
      [n],
    );
  return (
    (0, k.useEffect)(
      function () {
        return U(
          Rt({
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
var Ut = (function (e) {
  function t() {
    return (a(this, t), Bt(this, t, arguments));
  }
  return (
    l(t, e),
    s(
      t,
      [
        {
          key: `componentDidCatch`,
          value: function (e) {
            if (!(e instanceof D)) throw e;
          },
        },
        {
          key: `render`,
          value: function () {
            return k.createElement(
              Ht,
              { contextId: this.props.contextId, dragController: this.props.dragController },
              this.props.children,
            );
          },
        },
      ],
      [{ key: `getDerivedStateFromError`, value: function () {} }],
    )
  );
})(k.Component);
function Wt(e, t) {
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
function Gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Wt(Object(n), !0).forEach(function (t) {
          r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Wt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Kt(e) {
  var t = e.start,
    n = e.target;
  if (n === null) return null;
  var r = t.droppableId === n.droppableId,
    i = n.index > t.index;
  return r && i ? Gt(Gt({}, n), {}, { index: n.index - 1 }) : Gt({}, n);
}
function qt(e) {
  return `rbd-lift-instruction-${e}`;
}
function Jt(e) {
  var t = e.contextId,
    n = e.text;
  (0, k.useEffect)(
    function () {
      var e = qt(t),
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
function Yt(e) {
  var t = getComputedStyle(e),
    n = t.overflowX,
    r = t.overflowY;
  if (n === `scroll` || n === `auto` || r === `scroll` || r === `auto`) return e;
  var i = e.parentElement;
  return i === null ? null : Yt(i);
}
function Xt(e) {
  var t = e.contextId,
    n = e.type;
  return ae(
    { attribute: F.droppable.contextId, value: t },
    { attribute: I.droppable.type, value: n },
  );
}
function Zt(e) {
  var t = e.droppableId,
    n = e.type,
    r = e.isMovingForward,
    i = e.contextId,
    a = e.droppableRegistry,
    o = Xt({ contextId: i, type: n }),
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
function Qt(e, t) {
  return t
    ? z(
        { attribute: F.draggable.contextId, value: e },
        { attribute: I.draggable.droppableId, value: t.droppableId },
        { attribute: I.draggable.index, value: String(t.index) },
      )
    : null;
}
function $t(e, t) {
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
      ? $t(Object(n), !0).forEach(function (t) {
          r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : $t(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function en(e) {
  var t = Yt(e);
  t && t.scrollTo(0, 0);
}
var J = {
  mainAxis: {
    prev: function (e, t) {
      var n = t.dragController;
      e.preventDefault();
      var r = n.getDragState();
      O(r.isDragging);
      var i = r.sourceLocation,
        a = r.targetLocation;
      if (a && a.index !== 0) {
        var o = q(q({}, a), {}, { index: a.index - 1 });
        (H(i, Kt({ start: i, target: o })) && (o.index = a.index - 2),
          n.updateDrag({ targetLocation: o }));
      }
    },
    next: function (e, t) {
      var n = t.dragController,
        r = t.contextId;
      e.preventDefault();
      var i = n.getDragState();
      O(i.isDragging);
      var a = i.sourceLocation,
        o = i.targetLocation;
      if (o) {
        var s = Qt(r, o);
        if (!(!H(a, o) && !s)) {
          var c = q(q({}, o), {}, { index: o.index + 1 });
          (H(a, Kt({ start: a, target: c })) && (c.index = o.index + 2),
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
      O(a.isDragging);
      var o = a.targetLocation,
        s = a.type;
      if (o) {
        var c = Zt({
          droppableId: o.droppableId,
          type: s,
          isMovingForward: !1,
          contextId: i,
          droppableRegistry: r,
        });
        if (c) {
          en(c);
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
      O(a.isDragging);
      var o = a.targetLocation,
        s = a.type;
      if (o) {
        var c = Zt({
          droppableId: o.droppableId,
          type: s,
          isMovingForward: !0,
          contextId: i,
          droppableRegistry: r,
        });
        if (c) {
          en(c);
          var l = { droppableId: L(c, F.droppable.id), index: 0 };
          n.updateDrag({ targetLocation: l });
        }
      }
    },
  },
};
function tn(e) {
  e.preventDefault();
}
var nn = { PageUp: tn, PageDown: tn, Home: tn, End: tn, Enter: tn, Tab: tn },
  rn = {
    vertical: q(
      q({}, nn),
      {},
      {
        ArrowUp: J.mainAxis.prev,
        ArrowDown: J.mainAxis.next,
        ArrowLeft: J.crossAxis.prev,
        ArrowRight: J.crossAxis.next,
      },
    ),
    horizontal: q(
      q({}, nn),
      {},
      {
        ArrowUp: J.crossAxis.prev,
        ArrowDown: J.crossAxis.next,
        ArrowLeft: J.mainAxis.prev,
        ArrowRight: J.mainAxis.next,
      },
    ),
  };
function an(e) {
  var t = e.dragController,
    n = e.droppableRegistry,
    r = e.contextId,
    i = e.setKeyboardCleanupFn;
  return {
    startKeyboardDrag: (0, k.useCallback)(
      function (e) {
        var a = e.event,
          o = e.draggableId,
          s = e.type,
          l = e.getSourceLocation,
          u = e.sourceElement;
        t.startDrag({
          draggableId: o,
          type: s,
          getSourceLocation: l,
          sourceElement: u,
          mode: `SNAP`,
        });
        var d = l(),
          f = L(oe({ attribute: F.droppable.id, value: d.droppableId }), I.droppable.direction);
        O(f === `vertical` || f === `horizontal`);
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
        i(
          (0, W.bindAll)(
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
                    (i = (o = rn[f])[e.key]) == null ||
                      i.call(o, e, { dragController: t, droppableRegistry: n, contextId: r });
                  }
                },
              },
            ].concat(c(m)),
          ),
        );
      },
      [r, t, n, i],
    ),
  };
}
var on = function (e) {
    return function (t) {
      return e === t;
    };
  },
  sn = on(`scroll`),
  cn = on(`auto`),
  ln = function (e, t) {
    return t(e.overflowX) || t(e.overflowY);
  },
  un = function (e) {
    var t = window.getComputedStyle(e),
      n = { overflowX: t.overflowX, overflowY: t.overflowY };
    return ln(n, sn) || ln(n, cn);
  },
  dn = function (e) {
    return !e || e === document.body || e === document.documentElement
      ? null
      : un(e)
        ? e
        : dn(e.parentElement);
  },
  fn = function (e) {
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
  pn = function (e) {
    var t = e.closestScrollable,
      n = t.getBoundingClientRect(),
      r = { x: t.scrollLeft, y: t.scrollTop };
    return {
      container: fn(n),
      scroll: {
        current: r,
        max: { x: t.scrollWidth - t.clientWidth, y: t.scrollHeight - t.clientHeight },
      },
    };
  },
  mn = { x: 0, y: 0 },
  hn = function (e) {
    return function (t) {
      return { x: e(t.x), y: e(t.y) };
    };
  },
  gn = function (e, t) {
    return e.x === t.x && e.y === t.y;
  },
  _n = function (e, t) {
    return { x: e.x + t.x, y: e.y + t.y };
  },
  vn = function (e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  },
  yn = hn(function (e) {
    return e === 0 ? 0 : e > 0 ? 1 : -1;
  }),
  bn = (function () {
    var e = function (e, t) {
      return e < 0 ? e : e > t ? e - t : 0;
    };
    return function (t) {
      var n = t.current,
        r = t.max,
        i = t.change,
        a = _n(n, i),
        o = { x: e(a.x, r.x), y: e(a.y, r.y) };
      return gn(o, mn) ? null : o;
    };
  })(),
  xn = function (e) {
    var t = e.max,
      n = e.current,
      r = e.change,
      i = { x: Math.max(n.x, t.x), y: Math.max(n.y, t.y) },
      a = yn(r),
      o = bn({ max: i, current: n, change: a });
    return !o || (a.x !== 0 && o.x === 0) || (a.y !== 0 && o.y === 0);
  },
  Sn = function (e, t) {
    return xn({ current: e.scroll.current, max: e.scroll.max, change: t });
  },
  Cn = function (e, t) {
    return xn({ current: e.scroll.current, max: e.scroll.max, change: t });
  },
  wn = {
    direction: `vertical`,
    start: `top`,
    end: `bottom`,
    size: `height`,
    scrollAxis: `scrollTop`,
  },
  Tn = {
    direction: `horizontal`,
    start: `left`,
    end: `right`,
    size: `width`,
    scrollAxis: `scrollLeft`,
  };
(Tn.direction, wn.direction);
var Y = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: function (e) {
      return e ** 2;
    },
    durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
  },
  En = function (e, t) {
    return {
      startScrollingFrom: e[t.size] * Y.startFromPercentage,
      maxScrollValueAt: e[t.size] * Y.maxScrollAtPercentage,
    };
  },
  Dn = function (e) {
    var t = e.startOfRange,
      n = e.endOfRange,
      r = e.current,
      i = n - t;
    return i === 0 ? 0 : (r - t) / i;
  },
  On = Y.durationDampening.accelerateAt,
  kn = Y.durationDampening.stopDampeningAt,
  An = function (e, t) {
    var n = t,
      r = kn,
      i = Date.now() - n;
    if (i >= kn) return e;
    if (i < On) return 1;
    var a = Dn({ startOfRange: On, endOfRange: r, current: i }),
      o = e * Y.ease(a);
    return Math.ceil(o);
  },
  jn = function (e, t) {
    if (e > t.startScrollingFrom) return 0;
    if (e <= t.maxScrollValueAt) return Y.maxPixelScroll;
    if (e === t.startScrollingFrom) return 1;
    var n =
        1 - Dn({ startOfRange: t.maxScrollValueAt, endOfRange: t.startScrollingFrom, current: e }),
      r = Y.maxPixelScroll * Y.ease(n);
    return Math.ceil(r);
  },
  Mn = function (e) {
    var t = e.distanceToEdge,
      n = e.thresholds,
      r = e.dragStartTime,
      i = e.shouldUseTimeDampening,
      a = jn(t, n);
    return a === 0 ? 0 : i ? Math.max(An(a, r), 1) : a;
  },
  Nn = function (e) {
    var t = e.container,
      n = e.distanceToEdges,
      r = e.dragStartTime,
      i = e.axis,
      a = e.shouldUseTimeDampening,
      o = En(t, i);
    return n[i.end] < n[i.start]
      ? Mn({ distanceToEdge: n[i.end], thresholds: o, dragStartTime: r, shouldUseTimeDampening: a })
      : -1 *
          Mn({
            distanceToEdge: n[i.start],
            thresholds: o,
            dragStartTime: r,
            shouldUseTimeDampening: a,
          });
  },
  Pn = hn(function (e) {
    return e === 0 ? 0 : e;
  }),
  Fn = function (e) {
    var t = e.dragStartTime,
      n = e.container,
      r = e.center,
      i = e.shouldUseTimeDampening,
      a = { top: r.y - n.top, right: n.right - r.x, bottom: n.bottom - r.y, left: r.x - n.left },
      o = Nn({
        container: n,
        distanceToEdges: a,
        dragStartTime: t,
        axis: wn,
        shouldUseTimeDampening: i,
      }),
      s = Pn({
        x: Nn({
          container: n,
          distanceToEdges: a,
          dragStartTime: t,
          axis: Tn,
          shouldUseTimeDampening: i,
        }),
        y: o,
      });
    return gn(s, mn) ? null : s;
  },
  In = function (e) {
    var t = e.scrollable,
      n = e.center,
      r = e.dragStartTime,
      i = e.shouldUseTimeDampening,
      a = Fn({ dragStartTime: r, container: t.container, center: n, shouldUseTimeDampening: i });
    return a && Cn(t, a) ? a : null;
  },
  Ln = function (e) {
    var t = e.viewport,
      n = e.center,
      r = e.dragStartTime,
      i = e.shouldUseTimeDampening,
      a = Fn({ dragStartTime: r, container: t.container, center: n, shouldUseTimeDampening: i });
    return a && Sn(t, a) ? a : null;
  },
  Rn = function (e) {
    var t = e.scrollHeight,
      n = e.scrollWidth,
      r = e.height,
      i = e.width,
      a = vn({ x: n, y: t }, { x: i, y: r });
    return { x: Math.max(0, a.x), y: Math.max(0, a.y) };
  },
  zn = function () {
    var e = document.documentElement;
    return Rn({
      scrollHeight: e.scrollHeight,
      scrollWidth: e.scrollWidth,
      width: e.clientWidth,
      height: e.clientHeight,
    });
  },
  Bn = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  Vn = function () {
    var e = Bn(),
      t = zn(),
      n = e.y,
      r = e.x,
      i = document.documentElement,
      a = i.clientWidth,
      o = i.clientHeight;
    return {
      container: fn({ top: n, left: r, right: r + a, bottom: n + o }),
      scroll: { current: e, max: t },
    };
  },
  Hn = function (e) {
    var t = e.input,
      n = e.dragStartTime,
      r = e.shouldUseTimeDampening,
      i = e.scrollElement,
      a = e.scrollWindow,
      o = e.behavior,
      s = function () {
        var e = Vn(),
          i = Ln({
            dragStartTime: n,
            viewport: e,
            center: { x: t.clientX + e.scroll.current.x, y: t.clientY + e.scroll.current.y },
            shouldUseTimeDampening: r,
          });
        return i ? (a(i), !0) : !1;
      },
      c = function () {
        var e = dn(je({ x: t.clientX, y: t.clientY }));
        if (!e) return !1;
        var a = In({
          dragStartTime: n,
          scrollable: pn({ closestScrollable: e }),
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
  Un = function (e, t) {
    e.scrollBy(t.x, t.y);
  },
  Wn = function (e) {
    window.scrollBy(e.x, e.y);
  },
  Gn = (function () {
    var e = null;
    function t(t) {
      e != null &&
        Hn({
          input: e.latestInput,
          dragStartTime: e.dragStartTime,
          shouldUseTimeDampening: e.shouldUseTimeDampening,
          behavior: e.behavior,
          scrollElement: t ?? Un,
          scrollWindow: t ?? Wn,
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
function Kn(e) {
  e.defaultPrevented ||
    (e.dataTransfer && (e.dataTransfer.dropEffect = `move`), e.preventDefault());
}
var qn = null;
function Jn() {
  (Yn(),
    (qn = (0, W.bindAll)(
      window,
      [
        { type: `dragover`, listener: Kn },
        { type: `dragenter`, listener: Kn },
        {
          type: `drop`,
          listener: function (e) {
            (e.preventDefault(), Yn());
          },
        },
        { type: `dragend`, listener: Yn },
      ].concat(c($e({ onDragEnd: Yn }))),
      { capture: !1 },
    )));
}
function Yn() {
  var e;
  ((e = qn) == null || e(), (qn = null));
}
function Xn() {
  if (window.event?.type === `drop`) {
    var e;
    (e = window.event) == null || e.preventDefault();
  }
  Yn();
}
var Zn = { start: Jn, stop: Xn };
function Qn(e) {
  var t = e.dragController,
    n = e.contextId,
    r = (0, k.useCallback)(
      function (e) {
        t.updateDrag({ targetLocation: Ee(e.current) });
      },
      [t],
    );
  (0, k.useEffect)(
    function () {
      return Rt({
        canMonitor: function (e) {
          var t = e.initial,
            r = e.source;
          if (!V(r.data) || r.data.contextId !== n) return !1;
          var i = t.dropTargets.find(function (e) {
            return ye(e.data);
          });
          return i ? i.data.contextId === n : !0;
        },
        onDragStart: function (e) {
          var n = e.location,
            r = e.source;
          (Gn.start({ input: n.current.input }), Zn.start());
          var i = r.data;
          O(V(i));
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
          (Gn.updateInput({ input: t.current.input }), r(t));
        },
        onDropTargetChange: function (e) {
          var t = e.location;
          r(t);
        },
        onDrop: function () {
          (Gn.stop(), Zn.stop(), t.stopDrag({ reason: `DROP` }));
        },
      });
    },
    [t, n, r],
  );
}
var $n = typeof window < `u` ? k.useLayoutEffect : k.useEffect,
  er = `data-rbd-style-context-id`;
function tr(e) {
  var t = e.selector,
    n = e.styles;
  return `${t} { ${Object.entries(n)
    .map(function (e) {
      var t = o(e, 2);
      return `${t[0]}: ${t[1]};`;
    })
    .join(` `)} }`;
}
function nr(e) {
  return tr({
    selector: `[${F.dragHandle.contextId}="${e}"]`,
    styles: { cursor: `grab`, "-webkit-touch-callout": `none` },
  });
}
function rr(e) {
  var t = e.contextId,
    n = e.nonce,
    r = document.createElement(`style`);
  return (n && r.setAttribute(`nonce`, n), r.setAttribute(er, t), document.head.appendChild(r), r);
}
function ir(e) {
  var t = e.contextId,
    n = e.nonce,
    r = rr({ contextId: t, nonce: n });
  return (
    (r.textContent = nr(t)),
    function () {
      r.remove();
    }
  );
}
function ar(e) {
  var t = e.contextId,
    n = e.nonce;
  $n(
    function () {
      return ir({ contextId: t, nonce: n });
    },
    [t, n],
  );
}
var X = e(t()),
  or = (function () {
    return typeof X.unstable_batchedUpdates == `function` &&
      (X.version === void 0 || X.version.startsWith(`16`))
      ? X.unstable_batchedUpdates
      : function (e) {
          return e();
        };
  })();
function sr(e) {
  or(e);
}
function cr(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = lr(e)) || (t && e && typeof e.length == `number`)) {
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
function lr(e, t) {
  if (e) {
    if (typeof e == `string`) return ur(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? ur(e, t)
          : void 0
    );
  }
}
function ur(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function dr() {
  return {
    onPendingDragStart: [],
    onPrePendingDragUpdate: [],
    onPendingDragUpdate: [],
    onBeforeDragEnd: [],
  };
}
function fr() {
  var e = dr();
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
      sr(function () {
        var r = cr(e[t]),
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
function pr() {
  return o((0, k.useState)(fr), 1)[0];
}
var mr = (0, k.createContext)(null);
function hr(e) {
  var t = e.children,
    n = e.lifecycle,
    r = (0, k.useCallback)(
      function (e) {
        for (var t = [], r = 0, i = Object.entries(e); r < i.length; r++) {
          var a = i[r],
            s = o(a, 2),
            c = s[0],
            l = s[1];
          t.push(n.addResponder(c, l));
        }
        return U.apply(void 0, t);
      },
      [n],
    );
  return k.createElement(mr.Provider, { value: r }, t);
}
function gr() {
  var e = (0, k.useContext)(mr);
  return (O(e !== null, `useLifecycle() should only be called inside of a <DragDropContext />`), e);
}
var _r = null,
  Z = `1px`,
  vr = {
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
function yr() {
  var e = document.createElement(`div`);
  return (e.setAttribute(`role`, `alert`), Object.assign(e.style, vr), document.body.append(e), e);
}
function br() {
  return (_r === null && (_r = yr()), _r);
}
function xr(e) {
  var t = br();
  t.textContent = e;
}
function Sr(e) {
  return e.index + 1;
}
var Cr = {
  onDragStart: function (e) {
    var t = e.source;
    return `You have lifted an item in position ${Sr(t)}.`;
  },
  onDragUpdate: function (e) {
    var t = e.source,
      n = e.destination;
    if (!n) return `You are currently not dragging over a droppable area.`;
    var r = Sr(t),
      i = Sr(n);
    return t.droppableId === n.droppableId
      ? `You have moved the item from position ${r} to position ${i}.`
      : `You have moved the item from position ${r} in list ${t.droppableId} to list ${n.droppableId} in position ${i}.`;
  },
  onDragEnd: function (e) {
    var t = e.source,
      n = e.destination,
      r = e.reason,
      i = Sr(t);
    if (r === `CANCEL`)
      return `Movement cancelled. The item has returned to its starting position of ${i}.`;
    if (!n)
      return `The item has been dropped while not over a droppable location. The item has returned to its starting position of ${i}.`;
    var a = Sr(n);
    return t.droppableId === n.droppableId
      ? `You have dropped the item. It has moved from position ${i} to ${a}.`
      : `You have dropped the item. It has moved from position ${i} in list ${t.droppableId} to position ${a} in list ${n.droppableId}.`;
  },
};
function wr(e, t) {
  return Cr[e](t);
}
function Tr(e, t) {
  var n = null,
    r = {
      announce: function (e) {
        n = e;
      },
    };
  function i() {
    return n ?? wr(e, t);
  }
  return { provided: r, getMessage: i };
}
var Er = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  Dr = { status: `idle` };
function Or() {
  var e = Dr,
    t = function (t) {
      (e.status === `idle` && (e = { status: `pending`, timeoutId: setTimeout(n, 0), items: [] }),
        e.items.push(t));
    },
    n = function () {
      if (e.status !== `idle`) {
        clearTimeout(e.timeoutId);
        var t = Array.from(e.items);
        ((e = Dr),
          sr(function () {
            t.forEach(function (e) {
              return e();
            });
          }));
      }
    };
  return { schedule: t, flush: n };
}
function kr() {
  return o((0, k.useState)(Or), 1)[0];
}
var Ar = 0;
function jr() {
  return `${Ar++}`;
}
function Mr(e) {
  var t = B(e);
  return { top: t.offsetTop, left: t.offsetLeft };
}
function Nr(e) {
  var t = e.children,
    n = e.dragHandleUsageInstructions,
    r = n === void 0 ? Er : n,
    i = e.nonce,
    a = e.onBeforeCapture,
    s = e.onBeforeDragStart,
    c = e.onDragStart,
    l = e.onDragUpdate,
    u = e.onDragEnd,
    d = o((0, k.useState)(jr), 1)[0];
  Jt({ contextId: d, text: r });
  var f = pr(),
    p = kr(),
    m = p.schedule,
    h = p.flush,
    g = (0, k.useRef)({ isDragging: !1 }),
    _ = (0, k.useCallback)(function () {
      return g.current;
    }, []),
    v = Oe(),
    y = (0, k.useCallback)(
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
  (0, k.useEffect)(
    function () {
      return function () {
        _().isDragging && le();
      };
    },
    [_],
  );
  var b = (0, k.useCallback)(
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
          u = Kt({ start: c, target: t });
        if (H(a, u)) return;
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
          var e = Tr(`onDragUpdate`, d),
            t = e.provided,
            n = e.getMessage;
          (l?.(d, t), xr(n()));
        }
        r ? h() : m(h);
      },
      [v, f, l, m],
    ),
    x = (0, k.useCallback)(
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
          (O(h, `should have entry for droppable '${p}'`),
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
              draggableInitialOffsetInSourceDroppable: Mr({ element: i, mode: h.mode }),
            }),
            s?.(l),
            f.dispatch(`onPendingDragStart`, { start: l, droppable: h }),
            m(function () {
              var e = { mode: o, draggableId: t, type: n, source: r() },
                i = Tr(`onDragStart`, e),
                a = i.provided,
                s = i.getMessage;
              (c?.(e, a),
                xr(s()),
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
    ee = (0, k.useCallback)(
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
          var l = Kt({ start: a, target: o }),
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
          var m = Tr(`onDragEnd`, p),
            _ = m.provided,
            v = m.getMessage;
          (u(p, _),
            xr(v()),
            i &&
              requestAnimationFrame(function () {
                var e = se({ contextId: d, draggableId: c });
                e && e.focus();
              }));
        }
      },
      [d, h, S, f, u, b],
    ),
    C = (0, k.useMemo)(
      function () {
        return { getDragState: _, startDrag: x, updateDrag: b, stopDrag: ee };
      },
      [_, x, ee, b],
    );
  Qn({ dragController: C, contextId: d });
  var w = an({
      dragController: C,
      droppableRegistry: v,
      contextId: d,
      setKeyboardCleanupFn: S.setCleanupFn,
    }).startKeyboardDrag,
    T = (0, k.useCallback)(
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
    ar({ contextId: d, nonce: i }),
    k.createElement(
      Ut,
      { contextId: d, dragController: C },
      k.createElement(
        hr,
        { lifecycle: f },
        k.createElement(
          M,
          { contextId: d, getDragState: _, startKeyboardDrag: w, droppableRegistry: v },
          t,
        ),
      ),
    )
  );
}
var Pr = (function () {
  if (typeof window > `u`) return null;
  var e = new Image();
  return (
    (e.src = `data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==`),
    e
  );
})();
function Fr(e) {
  var t = e.nativeSetDragImage;
  t && Pr && t(Pr, 0, 0);
}
var Ir = (0, k.createContext)(null),
  Lr = Ir.Provider;
function Rr() {
  var e = (0, k.useContext)(Ir);
  return (O(e, `Missing <Droppable /> parent`), e);
}
function zr() {
  var e = (0, k.useContext)(Ir);
  return e ? e.droppableId : null;
}
function Br(e) {
  var t = e.elementRef,
    n = e.data,
    r = e.direction,
    i = e.contextId,
    a = e.isDropDisabled,
    o = e.type;
  (0, k.useEffect)(
    function () {
      var e = t.current;
      return (
        O(e instanceof HTMLElement),
        Lt({
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
            return me(n, {
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
function Vr() {
  return { startKeyboardDrag: j().startKeyboardDrag };
}
function Hr() {
  return z({ attribute: I.dropIndicator });
}
function Ur(e) {
  return z({ attribute: F.placeholder.contextId, value: e });
}
function Wr(e) {
  var t = (0, k.useRef)(e);
  return (
    (0, k.useEffect)(
      function () {
        t.current = e;
      },
      [e],
    ),
    (0, k.useCallback)(function () {
      return t.current;
    }, [])
  );
}
var Gr = { dragging: 5e3 };
function Kr(e, t) {
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
function qr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Kr(Object(n), !0).forEach(function (t) {
          r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Kr(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Jr = { transform: void 0, transition: void 0 },
  Yr = {
    position: `fixed`,
    top: 0,
    left: 0,
    boxSizing: `border-box`,
    transition: `none`,
    zIndex: Gr.dragging,
    opacity: 0.75,
    pointerEvents: `none`,
  };
function Xr(e) {
  var t = e.draggableDimensions,
    n = e.previewOffset,
    r = t.rect,
    i = r.left + n.x,
    a = r.top + n.y,
    o = i === 0 && a === 0;
  return qr(
    qr({}, Yr),
    {},
    { transform: o ? void 0 : `translate(${i}px, ${a}px)`, width: r.width, height: r.height },
  );
}
function Zr(e) {
  var t = e.draggableDimensions,
    n = e.draggableState;
  return n.type !== `dragging` || !n.previewOffset || !t
    ? Jr
    : Xr({ draggableDimensions: t, previewOffset: n.previewOffset });
}
var Qr = {
  input: !0,
  button: !0,
  textarea: !0,
  select: !0,
  option: !0,
  optgroup: !0,
  video: !0,
  audio: !0,
};
function $r(e, t) {
  if (t == null) return !1;
  if (Qr[t.tagName.toLowerCase()]) return !0;
  var n = t.getAttribute(`contenteditable`);
  return n === `true` || n === `` ? !0 : t === e ? !1 : $r(e, t.parentElement);
}
function ei(e, t) {
  var n = t.target;
  return n instanceof HTMLElement ? $r(e, n) : !1;
}
function ti(e, t) {
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
function ni(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ti(Object(n), !0).forEach(function (t) {
          r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ti(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var ri = (0, k.memo)(
    (0, k.forwardRef)(function (e, t) {
      var n = e.style,
        i = ne(),
        a = j().contextId,
        o = r({}, F.placeholder.contextId, a),
        s = (0, k.useMemo)(
          function () {
            if (i) {
              var e = i.margin,
                t = i.rect;
              return ni(
                { boxSizing: `border-box`, width: t.width, height: t.height, margin: e },
                n,
              );
            }
          },
          [i, n],
        );
      return k.createElement(`div`, x({ ref: t, style: s }, o));
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
function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ii(Object(n), !0).forEach(function (t) {
          r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ii(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var ai = { type: `idle`, draggingOver: null };
function oi(e) {
  return { type: `hiding`, draggingOver: null, mode: e };
}
var si = {
  initial: function (e) {
    var t = Q[e.direction],
      n = t.mainAxis,
      i = t.crossAxis;
    return r(r({}, n.name, 0), i.name, 24);
  },
  home: function (e) {
    var t = e.droppable.direction,
      n = e.placeholderRect,
      i = e.draggableDimensions;
    O(n, `the placeholder should exist if in home position`);
    var a = { x: n.x - i.rect.x, y: n.y - i.rect.y },
      o = Q[t],
      s = o.mainAxis,
      c = o.crossAxis;
    return r(r({}, s.name, a[s.name]), c.name, a[c.name] + 24);
  },
  away: function (e) {
    var t = e.droppable.direction,
      n = e.dropIndicatorRect,
      i = e.draggableDimensions;
    O(n, `the drop indicator should exist if in away position`);
    var a = { x: n.x - i.rect.x, y: n.y - i.rect.y },
      o = Q[t],
      s = o.mainAxis,
      c = o.crossAxis;
    return r(r({}, s.name, a[s.name] - 0.5 * i.rect[s.style.length]), c.name, a[c.name] + 24);
  },
};
function ci(e, t) {
  var n = t.update,
    r = t.droppable,
    i = t.draggableDimensions,
    a = t.placeholderRect,
    o = t.dropIndicatorRect;
  if (!r || !i) return e;
  var s = { droppable: r, draggableDimensions: i, placeholderRect: a, dropIndicatorRect: o },
    c = H(n.source, n.destination ?? null) ? si.home(s) : si.away(s);
  return c ? $($({}, e), {}, { previewOffset: c }) : e;
}
function li(e, t) {
  var n = t.start,
    r = t.previewOffset;
  return (
    O(e.type === `idle`, `The draggable is idle.`),
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
function ui(e, t) {
  if (t.type === `START_POINTER_DRAG`)
    return li(e, $($({}, t.payload), {}, { previewOffset: { x: 0, y: 0 } }));
  if (t.type === `START_KEYBOARD_DRAG`) {
    var n = t.payload,
      r = n.draggableDimensions,
      i = n.droppable;
    return li(
      e,
      $(
        $({}, t.payload),
        {},
        { previewOffset: si.initial({ draggableDimensions: r, direction: i.direction }) },
      ),
    );
  }
  if (t.type === `UPDATE_DRAG`) {
    O(e.type === `dragging`, `The draggable is dragging.`);
    var a = t.payload.update,
      o = a.destination ? a.destination.droppableId : null;
    return o === e.draggingOver ? e : $($({}, e), {}, { draggingOver: o });
  }
  if (t.type === `UPDATE_POINTER_PREVIEW`) {
    O(e.type === `dragging`, `The draggable is dragging.`);
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
    ? (O(e.type === `dragging`, `The draggable is dragging.`),
      e.type === `dragging` ? ci(e, t.payload) : e)
    : t.type === `DROP`
      ? (O(e.type === `dragging`, `The draggable is dragging.`), ai)
      : t.type === `START_HIDING`
        ? (O(e.type === `idle` || e.type === `hiding`), oi(t.payload.mode))
        : t.type === `STOP_HIDING`
          ? (O(e.type === `hiding`), ai)
          : e;
}
function di(e) {
  var t = e.draggingOver,
    n = e.isClone,
    r = e.isDragging,
    i = e.mode;
  return (0, k.useMemo)(
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
var fi = function () {};
function pi(e) {
  var t = e.children,
    n = e.draggableId,
    i = e.index,
    a = e.isDragDisabled,
    s = a === void 0 ? !1 : a,
    c = e.disableInteractiveElementBlocking,
    l = c === void 0 ? !1 : c,
    u = Rr(),
    d = u.direction,
    f = u.droppableId,
    p = u.type,
    m = u.mode,
    h = j(),
    g = h.contextId,
    _ = h.getDragState,
    v = (0, k.useRef)(null),
    y = (0, k.useRef)(null),
    b = re(),
    x = b.setCleanupFn,
    S = b.runCleanupFn,
    C = (0, k.useCallback)(
      function (e) {
        (v.current && S(),
          e && x(ie(e, r(r({}, I.draggable.droppableId, f), I.draggable.index, String(i)))),
          (v.current = e),
          (y.current = se({ contextId: g, draggableId: n })));
      },
      [g, n, f, i, S, x],
    ),
    w = Wr(i),
    T = o((0, k.useReducer)(ui, ai), 2),
    E = T[0],
    D = T[1],
    A = _e({ draggableId: n, droppableId: f, getIndex: w, contextId: g, type: p }),
    M = E.type === `dragging`,
    te = E.type === `hiding`,
    N = Rr(),
    P = N.shouldRenderCloneWhileDragging,
    L = N.isDropDisabled,
    R = gr(),
    z = Vr().startKeyboardDrag;
  ((0, k.useEffect)(
    function () {
      if (E.type === `idle` && !s) {
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
                  if (t.defaultPrevented || (!l && ei(e, t))) return;
                  (t.preventDefault(),
                    z({
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
    [l, n, f, w, s, z, E.type, p],
  ),
    (0, k.useEffect)(
      function () {
        if (!te && !s) {
          var e = v.current;
          O(e instanceof HTMLElement);
          var t = y.current;
          return (
            O(t instanceof HTMLElement),
            zt({
              canDrag: function (e) {
                var n = e.input;
                return n.ctrlKey || n.metaKey || n.shiftKey || n.altKey
                  ? !1
                  : l
                    ? !M
                    : !$r(t, je({ x: n.clientX, y: n.clientY }));
              },
              element: e,
              dragHandle: t,
              getInitialData: function () {
                return A;
              },
              onGenerateDragPreview: Fr,
            })
          );
        }
      },
      [A, l, s, M, te],
    ));
  var ae = E.type !== `idle` && m === `standard`,
    oe = (0, k.useRef)(null);
  Br({ elementRef: ae ? oe : v, data: A, direction: d, contextId: g, isDropDisabled: L, type: p });
  var ce = (0, k.useRef)(!0);
  ((0, k.useEffect)(function () {
    return (
      (ce.current = !0),
      function () {
        ce.current = !1;
      }
    );
  }, []),
    (0, k.useEffect)(
      function () {
        var e = _();
        P &&
          e.isDragging &&
          e.draggableId === A.draggableId &&
          D({ type: `START_HIDING`, payload: { mode: e.mode } });
      },
      [A.draggableId, _, P],
    ));
  var B = ne();
  (0, k.useEffect)(
    function () {
      return P
        ? R({
            onPendingDragStart: function (e) {
              var t = e.start;
              A.draggableId === t.draggableId &&
                D({ type: `START_HIDING`, payload: { mode: t.mode } });
            },
            onBeforeDragEnd: function (e) {
              e.draggableId === A.draggableId && D({ type: `STOP_HIDING` });
            },
          })
        : U(
            R({
              onPendingDragStart: function (e) {
                var t = e.start,
                  n = e.droppable;
                if (A.draggableId === t.draggableId) {
                  if (t.mode === `FLUID`)
                    return D({ type: `START_POINTER_DRAG`, payload: { start: t } });
                  if (t.mode === `SNAP`) {
                    var r = _();
                    return (
                      O(r.isDragging && r.draggableDimensions),
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
                A.draggableId === t.draggableId &&
                  (D({ type: `UPDATE_DRAG`, payload: { update: t } }),
                  t.mode === `SNAP` &&
                    queueMicrotask(function () {
                      if (_().isDragging) {
                        var e = Ur(g),
                          r = e ? e.getBoundingClientRect() : null,
                          i = Hr();
                        D({
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
                e.draggableId === A.draggableId &&
                  (O(ce.current, `isMounted onBeforeDragEnd`), D({ type: `DROP` }));
              },
            }),
            Rt({
              canMonitor: function (e) {
                var t = e.source;
                return V(t.data)
                  ? t.data.contextId === A.contextId && t.data.draggableId === A.draggableId
                  : !1;
              },
              onDrag: function (e) {
                var t = e.location;
                D({ type: `UPDATE_POINTER_PREVIEW`, payload: { pointerLocation: t } });
              },
            }),
          );
    },
    [A.draggableId, A.contextId, R, P, d, g, B, _],
  );
  var le = (0, k.useMemo)(
      function () {
        return {
          draggableProps: r(
            r(r({}, F.draggable.contextId, g), F.draggable.id, n),
            `style`,
            Zr({ draggableDimensions: B, draggableState: E }),
          ),
          dragHandleProps: r(
            r(
              r(
                r(
                  r({ role: `button`, "aria-describedby": qt(g) }, F.dragHandle.contextId, g),
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
            fi,
          ),
          innerRef: C,
        };
      },
      [g, n, B, E, C],
    ),
    ue = di({ draggingOver: E.draggingOver, isClone: !1, isDragging: M, mode: M ? E.mode : null }),
    de = (0, k.useMemo)(
      function () {
        return { draggableId: n, type: p, source: { droppableId: f, index: i } };
      },
      [n, f, i, p],
    );
  return k.createElement(
    k.Fragment,
    null,
    te ? null : t(le, ue, de),
    ae && k.createElement(ri, { ref: oe }),
  );
}
function mi() {
  return document.body;
}
function hi(e) {
  var t = e.children,
    n = e.droppableId,
    i = e.type,
    a = e.draggableId,
    o = e.index,
    s = e.draggingOver,
    c = e.style,
    l = e.getContainerForClone,
    u = l === void 0 ? mi : l,
    d = e.mode,
    f = j().contextId,
    p = (0, k.useCallback)(
      function (e) {
        e && se({ contextId: f, draggableId: a })?.focus();
      },
      [f, a],
    );
  return (0, X.createPortal)(
    t(
      (0, k.useMemo)(
        function () {
          return {
            innerRef: p,
            draggableProps: r(r(r({}, F.draggable.contextId, f), F.draggable.id, a), `style`, c),
            dragHandleProps: r(
              r(
                r(
                  r(
                    r({ role: `button`, "aria-describedby": qt(f) }, F.dragHandle.contextId, f),
                    F.dragHandle.draggableId,
                    a,
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
        [f, a, p, c],
      ),
      di({ draggingOver: s, isClone: !0, isDragging: !0, mode: d }),
      (0, k.useMemo)(
        function () {
          return { draggableId: a, type: i, source: { droppableId: n, index: o } };
        },
        [a, n, o, i],
      ),
    ),
    u(),
  );
}
function gi(e) {
  var t = e.children,
    n = e.droppableId,
    r = e.type,
    i = e.getContainerForClone,
    a = j(),
    s = a.contextId,
    c = a.getDragState,
    l = ne(),
    u = o((0, k.useReducer)(ui, ai), 2),
    d = u[0],
    f = u[1],
    p = gr();
  if (
    ((0, k.useEffect)(
      function () {
        return U(
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
                    O(i.isDragging && i.draggableDimensions),
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
                      var e = Ur(s),
                        r = e ? e.getBoundingClientRect() : null,
                        i = Hr();
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
          Rt({
            canMonitor: function (e) {
              var t = e.source;
              return V(t.data) ? t.data.contextId === s && t.data.droppableId === n : !1;
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
  var m = Zr({ draggableDimensions: l, draggableState: d });
  return k.createElement(
    hi,
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
var _i = {
  horizontal: { rect: { start: `left`, end: `right` } },
  vertical: { rect: { start: `top`, end: `bottom` } },
};
function vi(e) {
  var t = e.a,
    n = e.b,
    r = _i[e.direction].rect;
  return Math.max(t[r.start], n[r.start]) - Math.min(t[r.end], n[r.end]);
}
function yi(e) {
  return L(e, I.draggable.droppableId);
}
function bi(e) {
  var t = L(e, I.draggable.index),
    n = parseInt(t);
  return (O(Number.isInteger(n), `invalid index: '${n}' is not an integer`), n);
}
function xi(e) {
  var t = e.element,
    n = e.where,
    r = e.direction,
    i = e.contextId,
    a = yi(t),
    o = bi(t),
    s = o - 1,
    c = o + 1,
    l = Qt(i, { droppableId: a, index: n === `before` ? s : c });
  if (l === null) {
    var u = getComputedStyle(t),
      d = u.marginTop,
      f = u.marginRight,
      p = u.marginBottom,
      m = u.marginLeft;
    return r === `horizontal` ? parseFloat(m) + parseFloat(f) : parseFloat(d) + parseFloat(p);
  }
  return vi({ direction: r, a: t.getBoundingClientRect(), b: l.getBoundingClientRect() });
}
function Si(e) {
  var t = e.element,
    n = e.where,
    r = e.direction,
    i = e.contextId,
    a = xi({ element: t, where: n, direction: r, contextId: i });
  return n === `before` ? -a / 2 : a / 2;
}
function Ci(e) {
  var t = e.element,
    n = e.isForwardEdge,
    r = e.mode,
    i = e.direction,
    a = e.contextId,
    o = Q[i],
    s = o.mainAxis,
    c = o.crossAxis,
    l = B({ element: t, mode: r }),
    u = Si({ element: t, where: n ? `after` : `before`, direction: i, contextId: a }),
    d = l[s.offset] - 1;
  return {
    mainAxis: { offset: (n ? d + t[s.length] : d) + u },
    crossAxis: { offset: l[c.offset], length: l[c.length] },
  };
}
function wi(e) {
  var t = e.element,
    n = Q[e.direction],
    r = n.mainAxis,
    i = n.crossAxis;
  return {
    mainAxis: { offset: t[r.offset] - 1 + t[r.length] / 2 },
    crossAxis: { offset: t[i.offset], length: t[i.length] },
  };
}
function Ti(e) {
  var t = e.element,
    n = Q[e.direction].mainAxis,
    r = Yt(t);
  return !r || getComputedStyle(r).position !== `static` ? 0 : r[n.offset];
}
function Ei(e) {
  var t = e.droppableId,
    n = e.direction;
  return {
    mainAxis: {
      offset: Ti({ element: oe({ attribute: F.droppable.id, value: t }), direction: n }),
    },
    crossAxis: { offset: 0, length: `100%` },
  };
}
function Di(e) {
  var t = e.targetLocation,
    n = e.isInHomeLocation,
    r = e.direction,
    i = e.mode,
    a = e.contextId;
  if (n) {
    var o = Ur(a);
    return o ? wi({ element: o, direction: r }) : null;
  }
  if (t.index === 0) {
    var s = Qt(a, t);
    return s
      ? Ci({ element: s, isForwardEdge: !1, mode: i, direction: r, contextId: a })
      : Ei({ droppableId: t.droppableId, direction: r });
  }
  var c = Qt(a, { droppableId: t.droppableId, index: t.index - 1 });
  return c ? Ci({ element: c, isForwardEdge: !0, mode: i, direction: r, contextId: a }) : null;
}
var Oi = 4,
  ki = _({
    background: `var(--ds-border-brand, #1868DB)`,
    scrollMarginTop: Oi,
    scrollMarginBottom: Oi + 1,
  }),
  Ai = _({ position: `absolute`, top: 0, left: 0 }),
  ji = _({ opacity: 0 }),
  Mi = {
    horizontal: _({ width: 2, height: `100%`, marginLeft: -2 }),
    vertical: _({ width: `100%`, height: 2, marginTop: -2 }),
  };
function Ni(e) {
  var t = e.direction,
    n = e.dimensions,
    i = e.indicatorOffset;
  if (n === null) return { opacity: 0 };
  var a = Q[t],
    o = a.mainAxis,
    s = a.crossAxis;
  return r(
    r(
      { transform: `${o.style.transform}(${n.mainAxis.offset - i}px)` },
      s.style.length,
      n.crossAxis.length,
    ),
    s.style.offset,
    n.crossAxis.offset,
  );
}
var Pi = r({}, I.dropIndicator, ``),
  Fi = function (e) {
    var t = e.direction,
      n = e.mode,
      r = j(),
      i = r.contextId,
      a = r.getDragState,
      s = (0, k.useRef)(null),
      c = o((0, k.useState)(null), 2),
      l = c[0],
      u = c[1],
      d = o((0, k.useState)(!1), 2),
      f = d[0],
      p = d[1],
      m = gr(),
      h = (0, k.useCallback)(
        function (e) {
          var r = e.targetLocation,
            a = e.source,
            o = e.destination;
          if (!r) return u(null);
          var s = H(a, o);
          return (
            p(s),
            u(Di({ targetLocation: r, isInHomeLocation: s, direction: t, mode: n, contextId: i }))
          );
        },
        [i, t, n],
      );
    ((0, k.useLayoutEffect)(
      function () {
        var e = a();
        if (e.isDragging) {
          var t = e.targetLocation,
            n = e.sourceLocation;
          return (
            h({ targetLocation: t, destination: Kt({ start: n, target: t }), source: n }),
            m({
              onPrePendingDragUpdate: function (e) {
                var t = e.update,
                  n = e.targetLocation,
                  r = t.destination,
                  i = r === void 0 ? null : r,
                  a = t.source;
                h({ targetLocation: n, source: a, destination: i });
              },
            })
          );
        }
      },
      [i, t, a, n, m, h],
    ),
      (0, k.useLayoutEffect)(
        function () {
          if (l !== null) {
            var e = a();
            if (!(!e.isDragging || e.mode !== `SNAP`)) {
              var t = s.current;
              (O(t instanceof HTMLElement), t.scrollIntoView({ block: `nearest` }));
            }
          }
        },
        [l, a],
      ));
    var g = Q[t].mainAxis,
      _ = Ni({ direction: t, dimensions: l, indicatorOffset: s.current ? s.current[g.offset] : 0 }),
      y = n === `virtual`;
    return v(`div`, x({ ref: s, css: [ki, Mi[t], y && Ai, f && ji], style: _ }, Pi));
  };
function Ii(e, t) {
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
function Li(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ii(Object(n), !0).forEach(function (t) {
          r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ii(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Ri = { draggingFromThisWith: null, draggingOverWith: null, isDraggingOver: !1 };
function zi(e, t) {
  if (t.type === `DRAG_START`) {
    var n = t.payload,
      r = n.droppableId,
      i = n.start,
      a = i.draggableId,
      o = i.source,
      s = o.droppableId === r,
      c = s ? a : null,
      l = o.droppableId === r ? a : null;
    return Li(Li({}, e), {}, { isDraggingOver: s, draggingFromThisWith: l, draggingOverWith: c });
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
    return Li(Li({}, e), {}, { isDraggingOver: _, draggingFromThisWith: y, draggingOverWith: v });
  }
  return t.type === `DRAG_CLEAR` ? Ri : e;
}
function Bi(e) {
  var t = e.draggableId,
    n = e.droppableId,
    r = e.type,
    i = e.direction,
    a = e.isDropDisabled,
    o = (0, k.useRef)(null),
    s = j(),
    c = s.contextId,
    l = s.getDragState,
    u = l();
  (O(u.isDragging, `The virtual placeholder should only be rendered during a drag`),
    Br({
      elementRef: o,
      data: _e({
        draggableId: t,
        droppableId: n,
        getIndex: (0, k.useCallback)(
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
  var d = (0, k.useMemo)(
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
  return k.createElement(ri, { ref: o, style: d });
}
function Vi(e) {
  var t = e.children,
    n = e.droppableId,
    i = e.type,
    a = i === void 0 ? `DEFAULT` : i,
    s = e.direction,
    c = s === void 0 ? `vertical` : s,
    l = e.mode,
    u = l === void 0 ? `standard` : l,
    d = e.renderClone,
    f = e.getContainerForClone,
    p = e.isDropDisabled,
    m = p === void 0 ? !1 : p,
    h = Wr(m),
    g = j(),
    _ = g.contextId,
    v = g.droppableRegistry,
    y = be({ contextId: _, droppableId: n, getIsDropDisabled: h }),
    b = (0, k.useRef)(null),
    x = (0, k.useCallback)(
      function (e) {
        (e &&
          ie(
            e,
            r(
              r(r(r({}, I.droppable.type, a), I.droppable.direction, c), F.droppable.id, n),
              F.droppable.contextId,
              _,
            ),
          ),
          (b.current = e));
      },
      [_, c, n, a],
    ),
    S = o((0, k.useReducer)(zi, Ri), 2),
    C = S[0],
    w = S[1],
    T = C.draggingFromThisWith,
    E = C.draggingOverWith,
    D = C.isDraggingOver,
    O = zr();
  (0, k.useEffect)(
    function () {
      var e = b.current;
      return (
        ee(e instanceof HTMLElement, "innerRef must provide an `HTMLElement`"),
        U(
          v.register({
            droppableId: n,
            type: a,
            isDropDisabled: m,
            parentDroppableId: O,
            element: e,
            direction: c,
            mode: u,
          }),
          Lt({
            element: e,
            getData: function (t) {
              var n = t.input;
              return me(y, {
                element: e,
                input: n,
                allowedEdges: c === `vertical` ? [`top`, `bottom`] : [`left`, `right`],
              });
            },
            canDrop: function (e) {
              var t = e.source;
              return !V(t.data) || m ? !1 : t.data.contextId === _ && t.data.type === a;
            },
            onDragLeave: function () {
              w({ type: `DRAG_CLEAR` });
            },
          }),
        )
      );
    },
    [y, n, _, m, a, v, O, c, u],
  );
  var A = gr();
  (0, k.useEffect)(
    function () {
      function e(e) {
        var t = e.type === a,
          r = e.destination?.droppableId === n;
        return t && ((!D && r) || (D && !r));
      }
      return A({
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
    [n, D, A, a],
  );
  var M = (0, k.useMemo)(
      function () {
        return D ? k.createElement(Fi, { direction: c, mode: u }) : null;
      },
      [c, D, u],
    ),
    te = (0, k.useMemo)(
      function () {
        return {
          innerRef: x,
          droppableProps: r(r({}, F.droppable.contextId, _), F.droppable.id, n),
          placeholder: u === `standard` ? M : null,
        };
      },
      [_, M, n, u, x],
    ),
    ne = (0, k.useMemo)(
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
    P = D && u === `virtual` && N;
  $n(
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
  var re = !!d,
    L = (0, k.useMemo)(
      function () {
        return {
          direction: c,
          droppableId: n,
          shouldRenderCloneWhileDragging: re,
          isDropDisabled: m,
          type: a,
          mode: u,
        };
      },
      [c, n, re, m, a, u],
    ),
    R = T && u === `virtual` && N;
  return k.createElement(
    Lr,
    { value: L },
    t(te, ne),
    P && (0, X.createPortal)(M, N),
    R &&
      (0, X.createPortal)(
        k.createElement(Bi, {
          droppableId: n,
          draggableId: T,
          type: a,
          direction: c,
          isDropDisabled: m,
        }),
        N,
      ),
    d && k.createElement(gi, { droppableId: n, type: a, getContainerForClone: f }, d),
  );
}
var Hi = [`isRanking`, `isRankingItem`, `testId`],
  Ui = (0, k.forwardRef)(function (e, t) {
    var n = e.isRanking,
      r = e.isRankingItem,
      i = e.testId,
      a = u(e, Hi);
    return k.createElement(
      g,
      x({ ref: t, testId: i }, a, {
        className: p([
          n && `_1e0c1ule`,
          r && `_2rkolb4i _bfhk1bhr _16qs130s`,
          `_12y3e4h9 _mizu1v1w _ra3xnqa1`,
        ]),
      }),
    );
  }),
  Wi = [`isRanking`, `innerRef`],
  Gi = function (e) {
    var t = e.isRanking,
      n = e.innerRef,
      r = u(e, Wi);
    return k.createElement(S, x({}, r, { innerRef: n, className: p([t && `_vchhusvi`]) }));
  },
  Ki = [`content`, `testId`];
function qi(e, t, n) {
  return ((t = d(t)), i(e, Ji() ? Reflect.construct(t, n || [], d(e).constructor) : t.apply(e, n)));
}
function Ji() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ji = function () {
    return !!e;
  })();
}
var Yi = y(
    (function (e) {
      function t() {
        return (a(this, t), qi(this, t, arguments));
      }
      return (
        l(t, e),
        s(t, [
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
                d = u(t, Ki),
                f = n || {},
                p = f.shouldTruncate,
                m = f.width,
                g = h(i, a);
              return k.createElement(
                Gi,
                x({}, d, {
                  isFixedSize: r,
                  shouldTruncate: p,
                  width: m,
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
    })(k.Component),
  ),
  Xi = [`cells`, `testId`, `key`, `isHighlighted`];
function Zi(e, t) {
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
function Qi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Zi(Object(n), !0).forEach(function (t) {
          r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Zi(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function $i(e, t, n) {
  return ((t = d(t)), i(e, ea() ? Reflect.construct(t, n || [], d(e).constructor) : t.apply(e, n)));
}
function ea() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ea = function () {
    return !!e;
  })();
}
var ta = y(
  (function (e) {
    function t() {
      var e;
      a(this, t);
      var n = [...arguments];
      return (
        (e = $i(this, t, [].concat(n))),
        r(e, `innerRef`, function (t) {
          return function (n) {
            (t(n), typeof e.props.innerRef == `function` && e.props.innerRef(n));
          };
        }),
        e
      );
    }
    return (
      l(t, e),
      s(t, [
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
              d = t.testId,
              f = n.cells,
              p = n.testId,
              m = n.key,
              g = n.isHighlighted,
              _ = u(n, Xi),
              v = h(a, o);
            if (typeof m != `string` && !c)
              throw Error(
                `dynamic-table: ranking is not possible because table row does not have a key. Add the key to the row or disable ranking.`,
              );
            return k.createElement(
              pi,
              { draggableId: m || s.toString(), index: s, isDragDisabled: c },
              function (t, n) {
                return k.createElement(
                  Ui,
                  x({}, _, t.dragHandleProps, t.draggableProps, {
                    role: void 0,
                    "aria-labelledby": void 0,
                    "aria-describedby": t.dragHandleProps?.[`aria-describedby`],
                    ref: e.innerRef(t.innerRef),
                    style: Qi(Qi({}, t.draggableProps.style), v),
                    isHighlighted: l || g,
                    isRanking: a,
                    isRankingItem: n.isDragging,
                    testId: p || (d && `${d}--rankable--table--body--row`),
                  }),
                  f.map(function (e, t) {
                    var n = (r || { cells: [] }).cells[t];
                    return k.createElement(Yi, {
                      head: n,
                      cell: e,
                      isRanking: a,
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
  })(k.Component),
);
function na(e, t, n) {
  return ((t = d(t)), i(e, ra() ? Reflect.construct(t, n || [], d(e).constructor) : t.apply(e, n)));
}
function ra() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ra = function () {
    return !!e;
  })();
}
var ia = function (e, t) {
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
  aa = (function (e) {
    function t() {
      var e;
      a(this, t);
      var n = [...arguments];
      return (
        (e = na(this, t, [].concat(n))),
        r(e, `onBeforeDragStart`, function (t) {
          var n = t.draggableId,
            r = { index: t.source.index, key: n };
          e.props.onRankStart(r);
        }),
        r(e, `onDragEnd`, function (t) {
          var n = e.props,
            r = n.pageRows,
            i = n.onRankEnd,
            a = t.draggableId;
          i({ sourceIndex: t.source.index, sourceKey: a, destination: ia(t, r) });
        }),
        e
      );
    }
    return (
      l(t, e),
      s(t, [
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
            return k.createElement(
              Nr,
              { onBeforeDragStart: this.onBeforeDragStart, onDragEnd: this.onDragEnd },
              k.createElement(
                Vi,
                { droppableId: `dynamic-table-droppable`, isDropDisabled: o },
                function (e) {
                  return k.createElement(
                    `tbody`,
                    x(
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
                      return k.createElement(ta, {
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
  })(k.Component),
  oa = m(
    k.forwardRef(function (e, t) {
      return k.createElement(aa, x({}, e, { forwardedRef: t }));
    }),
  );
export { aa as RankableBody, oa as default };
