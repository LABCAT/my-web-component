/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Le(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const B = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, gt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], z = () => {
}, Mr = () => !1, Ut = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), cn = (e) => e.startsWith("onUpdate:"), q = Object.assign, rs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Fr = Object.prototype.hasOwnProperty, j = (e, t) => Fr.call(e, t), S = Array.isArray, rt = (e) => vn(e) === "[object Map]", mo = (e) => vn(e) === "[object Set]", P = (e) => typeof e == "function", G = (e) => typeof e == "string", et = (e) => typeof e == "symbol", k = (e) => e !== null && typeof e == "object", is = (e) => (k(e) || P(e)) && P(e.then) && P(e.catch), Eo = Object.prototype.toString, vn = (e) => Eo.call(e), cs = (e) => vn(e).slice(8, -1), bn = (e) => vn(e) === "[object Object]", ls = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Pt = /* @__PURE__ */ Le(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jr = /* @__PURE__ */ Le(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Nn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hr = /-(\w)/g, le = Nn(
  (e) => e.replace(Hr, (t, n) => n ? n.toUpperCase() : "")
), Lr = /\B([A-Z])/g, he = Nn(
  (e) => e.replace(Lr, "-$1").toLowerCase()
), yn = Nn((e) => e.charAt(0).toUpperCase() + e.slice(1)), st = Nn(
  (e) => e ? `on${yn(e)}` : ""
), it = (e, t) => !Object.is(e, t), wt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ln = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Ur = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, As = (e) => {
  const t = G(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let $s;
const Bt = () => $s || ($s = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fs(e) {
  if (S(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = G(s) ? kr(s) : fs(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (G(e) || k(e))
    return e;
}
const Br = /;(?![^(]*\))/g, Wr = /:([^]+)/, Kr = /\/\*[^]*?\*\//g;
function kr(e) {
  const t = {};
  return e.replace(Kr, "").split(Br).forEach((n) => {
    if (n) {
      const s = n.split(Wr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function us(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (S(e))
    for (let n = 0; n < e.length; n++) {
      const s = us(e[n]);
      s && (t += s + " ");
    }
  else if (k(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const qr = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Gr = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Jr = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Yr = /* @__PURE__ */ Le(qr), zr = /* @__PURE__ */ Le(Gr), Xr = /* @__PURE__ */ Le(Jr), Zr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qr = /* @__PURE__ */ Le(Zr);
function vo(e) {
  return !!e || e === "";
}
const bo = (e) => !!(e && e.__v_isRef === !0), No = (e) => G(e) ? e : e == null ? "" : S(e) || k(e) && (e.toString === Eo || !P(e.toString)) ? bo(e) ? No(e.value) : JSON.stringify(e, yo, 2) : String(e), yo = (e, t) => bo(t) ? yo(e, t.value) : rt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[$n(s, r) + " =>"] = o, n),
    {}
  )
} : mo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => $n(n))
} : et(t) ? $n(t) : k(t) && !S(t) && !bn(t) ? String(t) : t, $n = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    et(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ie(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let pe;
class ei {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = pe, !t && pe && (this.index = (pe.scopes || (pe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = pe;
      try {
        return pe = this, t();
      } finally {
        pe = n;
      }
    } else process.env.NODE_ENV !== "production" && Ie("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    pe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    pe = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ti() {
  return pe;
}
let H;
const Rn = /* @__PURE__ */ new WeakSet();
class Oo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, pe && pe.active && pe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Rn.has(this) && (Rn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Rs(this), xo(this);
    const t = H, n = Oe;
    H = this, Oe = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && H !== this && Ie(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Vo(this), H = t, Oe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ds(t);
      this.deps = this.depsTail = void 0, Rs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Rn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Kn(this) && this.run();
  }
  get dirty() {
    return Kn(this);
  }
}
let Do = 0, At, $t;
function wo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = $t, $t = e;
    return;
  }
  e.next = At, At = e;
}
function as() {
  Do++;
}
function ps() {
  if (--Do > 0)
    return;
  if ($t) {
    let t = $t;
    for ($t = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; At; ) {
    let t = At;
    for (At = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function xo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Vo(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), ds(s), ni(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Kn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (So(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function So(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Mt))
    return;
  e.globalVersion = Mt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Kn(e)) {
    e.flags &= -3;
    return;
  }
  const n = H, s = Oe;
  H = e, Oe = !0;
  try {
    xo(e);
    const o = e.fn(e._value);
    (t.version === 0 || it(o, e._value)) && (e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    H = n, Oe = s, Vo(e), e.flags &= -3;
  }
}
function ds(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      ds(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ni(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Oe = !0;
const Co = [];
function Ue() {
  Co.push(Oe), Oe = !1;
}
function Be() {
  const e = Co.pop();
  Oe = e === void 0 ? !0 : e;
}
function Rs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = H;
    H = void 0;
    try {
      t();
    } finally {
      H = n;
    }
  }
}
let Mt = 0;
class si {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class To {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!H || !Oe || H === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== H)
      n = this.activeLink = new si(H, this), H.deps ? (n.prevDep = H.depsTail, H.depsTail.nextDep = n, H.depsTail = n) : H.deps = H.depsTail = n, Po(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = H.depsTail, n.nextDep = void 0, H.depsTail.nextDep = n, H.depsTail = n, H.deps === n && (H.deps = s);
    }
    return process.env.NODE_ENV !== "production" && H.onTrack && H.onTrack(
      q(
        {
          effect: H
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Mt++, this.notify(t);
  }
  notify(t) {
    as();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            q(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ps();
    }
  }
}
function Po(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Po(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const kn = /* @__PURE__ */ new WeakMap(), ct = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), qn = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Ft = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Y(e, t, n) {
  if (Oe && H) {
    let s = kn.get(e);
    s || kn.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new To()), o.map = s, o.key = n), process.env.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function Ae(e, t, n, s, o, r) {
  const i = kn.get(e);
  if (!i) {
    Mt++;
    return;
  }
  const c = (u) => {
    u && (process.env.NODE_ENV !== "production" ? u.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: r
    }) : u.trigger());
  };
  if (as(), t === "clear")
    i.forEach(c);
  else {
    const u = S(e), d = u && ls(n);
    if (u && n === "length") {
      const p = Number(s);
      i.forEach((a, _) => {
        (_ === "length" || _ === Ft || !et(_) && _ >= p) && c(a);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && c(i.get(n)), d && c(i.get(Ft)), t) {
        case "add":
          u ? d && c(i.get("length")) : (c(i.get(ct)), rt(e) && c(i.get(qn)));
          break;
        case "delete":
          u || (c(i.get(ct)), rt(e) && c(i.get(qn)));
          break;
        case "set":
          rt(e) && c(i.get(ct));
          break;
      }
  }
  ps();
}
function pt(e) {
  const t = R(e);
  return t === e ? t : (Y(t, "iterate", Ft), me(e) ? t : t.map(de));
}
function hs(e) {
  return Y(e = R(e), "iterate", Ft), e;
}
const oi = {
  __proto__: null,
  [Symbol.iterator]() {
    return In(this, Symbol.iterator, de);
  },
  concat(...e) {
    return pt(this).concat(
      ...e.map((t) => S(t) ? pt(t) : t)
    );
  },
  entries() {
    return In(this, "entries", (e) => (e[1] = de(e[1]), e));
  },
  every(e, t) {
    return je(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return je(this, "filter", e, t, (n) => n.map(de), arguments);
  },
  find(e, t) {
    return je(this, "find", e, t, de, arguments);
  },
  findIndex(e, t) {
    return je(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return je(this, "findLast", e, t, de, arguments);
  },
  findLastIndex(e, t) {
    return je(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return je(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Mn(this, "includes", e);
  },
  indexOf(...e) {
    return Mn(this, "indexOf", e);
  },
  join(e) {
    return pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Mn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return xt(this, "pop");
  },
  push(...e) {
    return xt(this, "push", e);
  },
  reduce(e, ...t) {
    return Is(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Is(this, "reduceRight", e, t);
  },
  shift() {
    return xt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return xt(this, "splice", e);
  },
  toReversed() {
    return pt(this).toReversed();
  },
  toSorted(e) {
    return pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return xt(this, "unshift", e);
  },
  values() {
    return In(this, "values", de);
  }
};
function In(e, t, n) {
  const s = hs(e), o = s[t]();
  return s !== e && !me(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const ri = Array.prototype;
function je(e, t, n, s, o, r) {
  const i = hs(e), c = i !== e && !me(e), u = i[t];
  if (u !== ri[t]) {
    const a = u.apply(e, r);
    return c ? de(a) : a;
  }
  let d = n;
  i !== e && (c ? d = function(a, _) {
    return n.call(this, de(a), _, e);
  } : n.length > 2 && (d = function(a, _) {
    return n.call(this, a, _, e);
  }));
  const p = u.call(i, d, s);
  return c && o ? o(p) : p;
}
function Is(e, t, n, s) {
  const o = hs(e);
  let r = n;
  return o !== e && (me(e) ? n.length > 3 && (r = function(i, c, u) {
    return n.call(this, i, c, u, e);
  }) : r = function(i, c, u) {
    return n.call(this, i, de(c), u, e);
  }), o[t](r, ...s);
}
function Mn(e, t, n) {
  const s = R(e);
  Y(s, "iterate", Ft);
  const o = s[t](...n);
  return (o === -1 || o === !1) && fn(n[0]) ? (n[0] = R(n[0]), s[t](...n)) : o;
}
function xt(e, t, n = []) {
  Ue(), as();
  const s = R(e)[t].apply(e, n);
  return ps(), Be(), s;
}
const ii = /* @__PURE__ */ Le("__proto__,__v_isRef,__isVue"), Ao = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(et)
);
function ci(e) {
  et(e) || (e = String(e));
  const t = R(this);
  return Y(t, "has", e), t.hasOwnProperty(e);
}
class $o {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (o ? r ? Ho : jo : r ? Fo : Mo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = S(t);
    if (!o) {
      let u;
      if (i && (u = oi[n]))
        return u;
      if (n === "hasOwnProperty")
        return ci;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      X(t) ? t : s
    );
    return (et(n) ? Ao.has(n) : ii(n)) || (o || Y(t, "get", n), r) ? c : X(c) ? i && ls(n) ? c : c.value : k(c) ? o ? Lo(c) : _s(c) : c;
  }
}
class Ro extends $o {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const u = Ze(r);
      if (!me(s) && !Ze(s) && (r = R(r), s = R(s)), !S(t) && X(r) && !X(s))
        return u ? !1 : (r.value = s, !0);
    }
    const i = S(t) && ls(n) ? Number(n) < t.length : j(t, n), c = Reflect.set(
      t,
      n,
      s,
      X(t) ? t : o
    );
    return t === R(o) && (i ? it(s, r) && Ae(t, "set", n, s, r) : Ae(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = j(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && Ae(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!et(n) || !Ao.has(n)) && Y(t, "has", n), s;
  }
  ownKeys(t) {
    return Y(
      t,
      "iterate",
      S(t) ? "length" : ct
    ), Reflect.ownKeys(t);
  }
}
class Io extends $o {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Ie(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Ie(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const li = /* @__PURE__ */ new Ro(), fi = /* @__PURE__ */ new Io(), ui = /* @__PURE__ */ new Ro(!0), ai = /* @__PURE__ */ new Io(!0), Gn = (e) => e, Yt = (e) => Reflect.getPrototypeOf(e);
function pi(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = R(o), i = rt(r), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, d = o[e](...s), p = n ? Gn : t ? Jn : de;
    return !t && Y(
      r,
      "iterate",
      u ? qn : ct
    ), {
      // iterator protocol
      next() {
        const { value: a, done: _ } = d.next();
        return _ ? { value: a, done: _ } : {
          value: c ? [p(a[0]), p(a[1])] : p(a),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function zt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ie(
        `${yn(e)} operation ${n}failed: target is readonly.`,
        R(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function di(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = R(r), c = R(o);
      e || (it(o, c) && Y(i, "get", o), Y(i, "get", c));
      const { has: u } = Yt(i), d = t ? Gn : e ? Jn : de;
      if (u.call(i, o))
        return d(r.get(o));
      if (u.call(i, c))
        return d(r.get(c));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Y(R(o), "iterate", ct), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = R(r), c = R(o);
      return e || (it(o, c) && Y(i, "has", o), Y(i, "has", c)), o === c ? r.has(o) : r.has(o) || r.has(c);
    },
    forEach(o, r) {
      const i = this, c = i.__v_raw, u = R(c), d = t ? Gn : e ? Jn : de;
      return !e && Y(u, "iterate", ct), c.forEach((p, a) => o.call(r, d(p), d(a), i));
    }
  };
  return q(
    n,
    e ? {
      add: zt("add"),
      set: zt("set"),
      delete: zt("delete"),
      clear: zt("clear")
    } : {
      add(o) {
        !t && !me(o) && !Ze(o) && (o = R(o));
        const r = R(this);
        return Yt(r).has.call(r, o) || (r.add(o), Ae(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !me(r) && !Ze(r) && (r = R(r));
        const i = R(this), { has: c, get: u } = Yt(i);
        let d = c.call(i, o);
        d ? process.env.NODE_ENV !== "production" && Ms(i, c, o) : (o = R(o), d = c.call(i, o));
        const p = u.call(i, o);
        return i.set(o, r), d ? it(r, p) && Ae(i, "set", o, r, p) : Ae(i, "add", o, r), this;
      },
      delete(o) {
        const r = R(this), { has: i, get: c } = Yt(r);
        let u = i.call(r, o);
        u ? process.env.NODE_ENV !== "production" && Ms(r, i, o) : (o = R(o), u = i.call(r, o));
        const d = c ? c.call(r, o) : void 0, p = r.delete(o);
        return u && Ae(r, "delete", o, void 0, d), p;
      },
      clear() {
        const o = R(this), r = o.size !== 0, i = process.env.NODE_ENV !== "production" ? rt(o) ? new Map(o) : new Set(o) : void 0, c = o.clear();
        return r && Ae(
          o,
          "clear",
          void 0,
          void 0,
          i
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = pi(o, e, t);
  }), n;
}
function On(e, t) {
  const n = di(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    j(n, o) && o in s ? n : s,
    o,
    r
  );
}
const hi = {
  get: /* @__PURE__ */ On(!1, !1)
}, _i = {
  get: /* @__PURE__ */ On(!1, !0)
}, gi = {
  get: /* @__PURE__ */ On(!0, !1)
}, mi = {
  get: /* @__PURE__ */ On(!0, !0)
};
function Ms(e, t, n) {
  const s = R(n);
  if (s !== n && t.call(e, s)) {
    const o = cs(e);
    Ie(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Mo = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), jo = /* @__PURE__ */ new WeakMap(), Ho = /* @__PURE__ */ new WeakMap();
function Ei(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function vi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ei(cs(e));
}
function _s(e) {
  return Ze(e) ? e : Dn(
    e,
    !1,
    li,
    hi,
    Mo
  );
}
function bi(e) {
  return Dn(
    e,
    !1,
    ui,
    _i,
    Fo
  );
}
function Lo(e) {
  return Dn(
    e,
    !0,
    fi,
    gi,
    jo
  );
}
function $e(e) {
  return Dn(
    e,
    !0,
    ai,
    mi,
    Ho
  );
}
function Dn(e, t, n, s, o) {
  if (!k(e))
    return process.env.NODE_ENV !== "production" && Ie(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const i = vi(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, c), c;
}
function mt(e) {
  return Ze(e) ? mt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
function me(e) {
  return !!(e && e.__v_isShallow);
}
function fn(e) {
  return e ? !!e.__v_raw : !1;
}
function R(e) {
  const t = e && e.__v_raw;
  return t ? R(t) : e;
}
function Ni(e) {
  return !j(e, "__v_skip") && Object.isExtensible(e) && ln(e, "__v_skip", !0), e;
}
const de = (e) => k(e) ? _s(e) : e, Jn = (e) => k(e) ? Lo(e) : e;
function X(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Uo(e) {
  return X(e) ? e.value : e;
}
const yi = {
  get: (e, t, n) => t === "__v_raw" ? e : Uo(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return X(o) && !X(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Bo(e) {
  return mt(e) ? e : new Proxy(e, yi);
}
class Oi {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new To(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Mt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    H !== this)
      return wo(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return So(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Ie("Write operation failed: computed value is readonly");
  }
}
function Di(e, t, n = !1) {
  let s, o;
  P(e) ? s = e : (s = e.get, o = e.set);
  const r = new Oi(s, o, n);
  return process.env.NODE_ENV, r;
}
const Xt = {}, un = /* @__PURE__ */ new WeakMap();
let ot;
function wi(e, t = !1, n = ot) {
  if (n) {
    let s = un.get(n);
    s || un.set(n, s = []), s.push(e);
  } else process.env.NODE_ENV !== "production" && !t && Ie(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function xi(e, t, n = B) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: c, call: u } = n, d = (V) => {
    (n.onWarn || Ie)(
      "Invalid watch source: ",
      V,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (V) => o ? V : me(V) || o === !1 || o === 0 ? Ye(V, 1) : Ye(V);
  let a, _, D, C, $ = !1, ee = !1;
  if (X(e) ? (_ = () => e.value, $ = me(e)) : mt(e) ? (_ = () => p(e), $ = !0) : S(e) ? (ee = !0, $ = e.some((V) => mt(V) || me(V)), _ = () => e.map((V) => {
    if (X(V))
      return V.value;
    if (mt(V))
      return p(V);
    if (P(V))
      return u ? u(V, 2) : V();
    process.env.NODE_ENV !== "production" && d(V);
  })) : P(e) ? t ? _ = u ? () => u(e, 2) : e : _ = () => {
    if (D) {
      Ue();
      try {
        D();
      } finally {
        Be();
      }
    }
    const V = ot;
    ot = a;
    try {
      return u ? u(e, 3, [C]) : e(C);
    } finally {
      ot = V;
    }
  } : (_ = z, process.env.NODE_ENV !== "production" && d(e)), t && o) {
    const V = _, Z = o === !0 ? 1 / 0 : o;
    _ = () => Ye(V(), Z);
  }
  const W = ti(), J = () => {
    a.stop(), W && W.active && rs(W.effects, a);
  };
  if (r && t) {
    const V = t;
    t = (...Z) => {
      V(...Z), J();
    };
  }
  let L = ee ? new Array(e.length).fill(Xt) : Xt;
  const fe = (V) => {
    if (!(!(a.flags & 1) || !a.dirty && !V))
      if (t) {
        const Z = a.run();
        if (o || $ || (ee ? Z.some((Ee, te) => it(Ee, L[te])) : it(Z, L))) {
          D && D();
          const Ee = ot;
          ot = a;
          try {
            const te = [
              Z,
              // pass undefined as the old value when it's changed for the first time
              L === Xt ? void 0 : ee && L[0] === Xt ? [] : L,
              C
            ];
            u ? u(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            ), L = Z;
          } finally {
            ot = Ee;
          }
        }
      } else
        a.run();
  };
  return c && c(fe), a = new Oo(_), a.scheduler = i ? () => i(fe, !1) : fe, C = (V) => wi(V, !1, a), D = a.onStop = () => {
    const V = un.get(a);
    if (V) {
      if (u)
        u(V, 4);
      else
        for (const Z of V) Z();
      un.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? s ? fe(!0) : L = a.run() : i ? i(fe.bind(null, !0), !0) : a.run(), J.pause = a.pause.bind(a), J.resume = a.resume.bind(a), J.stop = J, J;
}
function Ye(e, t = 1 / 0, n) {
  if (t <= 0 || !k(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, X(e))
    Ye(e.value, t, n);
  else if (S(e))
    for (let s = 0; s < e.length; s++)
      Ye(e[s], t, n);
  else if (mo(e) || rt(e))
    e.forEach((s) => {
      Ye(s, t, n);
    });
  else if (bn(e)) {
    for (const s in e)
      Ye(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ye(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const lt = [];
function Zt(e) {
  lt.push(e);
}
function Qt() {
  lt.pop();
}
let Fn = !1;
function y(e, ...t) {
  if (Fn) return;
  Fn = !0, Ue();
  const n = lt.length ? lt[lt.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Vi();
  if (s)
    bt(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, c;
          return (c = (i = r.toString) == null ? void 0 : i.call(r)) != null ? c : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: r }) => `at <${Cn(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Si(o)), console.warn(...r);
  }
  Be(), Fn = !1;
}
function Vi() {
  let e = lt[lt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Si(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Ci(n));
  }), t;
}
function Ci({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Cn(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Ti(e.props), r] : [o + r];
}
function Ti(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Wo(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Wo(e, t, n) {
  return G(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : X(t) ? (t = Wo(e, R(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : P(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = R(t), n ? t : [`${e}=`, t]);
}
const gs = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function bt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Wt(o, t, n);
  }
}
function Me(e, t, n, s) {
  if (P(e)) {
    const o = bt(e, t, n, s);
    return o && is(o) && o.catch((r) => {
      Wt(r, t, n);
    }), o;
  }
  if (S(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(Me(e[r], t, n, s));
    return o;
  } else process.env.NODE_ENV !== "production" && y(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Wt(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || B;
  if (t) {
    let c = t.parent;
    const u = t.proxy, d = process.env.NODE_ENV !== "production" ? gs[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const p = c.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, u, d) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      Ue(), bt(r, null, 10, [
        e,
        u,
        d
      ]), Be();
      return;
    }
  }
  Pi(e, n, o, s, i);
}
function Pi(e, t, n, s = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = gs[t];
    if (n && Zt(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Qt(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const oe = [];
let Te = -1;
const Et = [];
let Ge = null, _t = 0;
const Ko = /* @__PURE__ */ Promise.resolve();
let an = null;
const Ai = 100;
function ko(e) {
  const t = an || Ko;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function $i(e) {
  let t = Te + 1, n = oe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = oe[s], r = jt(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function wn(e) {
  if (!(e.flags & 1)) {
    const t = jt(e), n = oe[oe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jt(n) ? oe.push(e) : oe.splice($i(t), 0, e), e.flags |= 1, qo();
  }
}
function qo() {
  an || (an = Ko.then(Yo));
}
function Go(e) {
  S(e) ? Et.push(...e) : Ge && e.id === -1 ? Ge.splice(_t + 1, 0, e) : e.flags & 1 || (Et.push(e), e.flags |= 1), qo();
}
function Fs(e, t, n = Te + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < oe.length; n++) {
    const s = oe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || process.env.NODE_ENV !== "production" && ms(t, s))
        continue;
      oe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Jo(e) {
  if (Et.length) {
    const t = [...new Set(Et)].sort(
      (n, s) => jt(n) - jt(s)
    );
    if (Et.length = 0, Ge) {
      Ge.push(...t);
      return;
    }
    for (Ge = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), _t = 0; _t < Ge.length; _t++) {
      const n = Ge[_t];
      process.env.NODE_ENV !== "production" && ms(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Ge = null, _t = 0;
  }
}
const jt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Yo(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => ms(e, n) : z;
  try {
    for (Te = 0; Te < oe.length; Te++) {
      const n = oe[Te];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), bt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Te < oe.length; Te++) {
      const n = oe[Te];
      n && (n.flags &= -2);
    }
    Te = -1, oe.length = 0, Jo(e), an = null, (oe.length || Et.length) && Yo(e);
  }
}
function ms(e, t) {
  const n = e.get(t) || 0;
  if (n > Ai) {
    const s = t.i, o = s && Tr(s.type);
    return Wt(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Re = !1;
const en = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Bt().__VUE_HMR_RUNTIME__ = {
  createRecord: jn(zo),
  rerender: jn(Mi),
  reload: jn(Fi)
});
const ut = /* @__PURE__ */ new Map();
function Ri(e) {
  const t = e.type.__hmrId;
  let n = ut.get(t);
  n || (zo(t, e.type), n = ut.get(t)), n.instances.add(e);
}
function Ii(e) {
  ut.get(e.type.__hmrId).instances.delete(e);
}
function zo(e, t) {
  return ut.has(e) ? !1 : (ut.set(e, {
    initialDef: pn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function pn(e) {
  return Pr(e) ? e.__vccOpts : e;
}
function Mi(e, t) {
  const n = ut.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, pn(s.type).render = t), s.renderCache = [], Re = !0, s.update(), Re = !1;
  }));
}
function Fi(e, t) {
  const n = ut.get(e);
  if (!n) return;
  t = pn(t), js(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = pn(r.type);
    let c = en.get(i);
    c || (i !== n.initialDef && js(i, t), en.set(i, c = /* @__PURE__ */ new Set())), c.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (c.add(r), r.ceReload(t.styles), c.delete(r)) : r.parent ? wn(() => {
      Re = !0, r.parent.update(), Re = !1, c.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Go(() => {
    en.clear();
  });
}
function js(e, t) {
  q(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function jn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ye, Ct = [], Yn = !1;
function Kt(e, ...t) {
  ye ? ye.emit(e, ...t) : Yn || Ct.push({ event: e, args: t });
}
function Es(e, t) {
  var n, s;
  ye = e, ye ? (ye.enabled = !0, Ct.forEach(({ event: o, args: r }) => ye.emit(o, ...r)), Ct = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Es(r, t);
  }), setTimeout(() => {
    ye || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Yn = !0, Ct = []);
  }, 3e3)) : (Yn = !0, Ct = []);
}
function ji(e, t) {
  Kt("app:init", e, t, {
    Fragment: Pe,
    Text: kt,
    Comment: De,
    Static: sn
  });
}
function Hi(e) {
  Kt("app:unmount", e);
}
const Li = /* @__PURE__ */ vs(
  "component:added"
  /* COMPONENT_ADDED */
), Xo = /* @__PURE__ */ vs(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ui = /* @__PURE__ */ vs(
  "component:removed"
  /* COMPONENT_REMOVED */
), Bi = (e) => {
  ye && typeof ye.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ye.cleanupBuffer(e) && Ui(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vs(e) {
  return (t) => {
    Kt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Wi = /* @__PURE__ */ Zo(
  "perf:start"
  /* PERFORMANCE_START */
), Ki = /* @__PURE__ */ Zo(
  "perf:end"
  /* PERFORMANCE_END */
);
function Zo(e) {
  return (t, n, s) => {
    Kt(e, t.appContext.app, t.uid, t, n, s);
  };
}
function ki(e, t, n) {
  Kt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let _e = null, Qo = null;
function dn(e) {
  const t = _e;
  return _e = e, Qo = e && e.type.__scopeId || null, t;
}
function qi(e, t = _e, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && zs(-1);
    const r = dn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      dn(r), s._d && zs(1);
    }
    return process.env.NODE_ENV !== "production" && Xo(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function er(e) {
  jr(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function tt(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const c = o[i];
    r && (c.oldValue = r[i].value);
    let u = c.dir[s];
    u && (Ue(), Me(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Be());
  }
}
const Gi = Symbol("_vte"), Ji = (e) => e.__isTeleport;
function bs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, bs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Yi(e, t) {
  return P(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    q({ name: e.name }, t, { setup: e })
  ) : e;
}
function tr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const zi = /* @__PURE__ */ new WeakSet();
function hn(e, t, n, s, o = !1) {
  if (S(e)) {
    e.forEach(
      (C, $) => hn(
        C,
        t && (S(t) ? t[$] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (Rt(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && hn(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? xs(s.component) : s.el, i = o ? null : r, { i: c, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, p = c.refs === B ? c.refs = {} : c.refs, a = c.setupState, _ = R(a), D = a === B ? () => !1 : (C) => process.env.NODE_ENV !== "production" && (j(_, C) && !X(_[C]) && y(
    `Template ref "${C}" used on a non-ref value. It will not work in the production build.`
  ), zi.has(_[C])) ? !1 : j(_, C);
  if (d != null && d !== u && (G(d) ? (p[d] = null, D(d) && (a[d] = null)) : X(d) && (d.value = null)), P(u))
    bt(u, c, 12, [i, p]);
  else {
    const C = G(u), $ = X(u);
    if (C || $) {
      const ee = () => {
        if (e.f) {
          const W = C ? D(u) ? a[u] : p[u] : u.value;
          o ? S(W) && rs(W, r) : S(W) ? W.includes(r) || W.push(r) : C ? (p[u] = [r], D(u) && (a[u] = p[u])) : (u.value = [r], e.k && (p[e.k] = u.value));
        } else C ? (p[u] = i, D(u) && (a[u] = i)) : $ ? (u.value = i, e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
      };
      i ? (ee.id = -1, ae(ee, n)) : ee();
    } else process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
  }
}
Bt().requestIdleCallback;
Bt().cancelIdleCallback;
const Rt = (e) => !!e.type.__asyncLoader, Ns = (e) => e.type.__isKeepAlive;
function Xi(e, t) {
  nr(e, "a", t);
}
function Zi(e, t) {
  nr(e, "da", t);
}
function nr(e, t, n = Q) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (xn(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Ns(o.parent.vnode) && Qi(s, t, n, o), o = o.parent;
  }
}
function Qi(e, t, n, s) {
  const o = xn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  or(() => {
    rs(s[t], o);
  }, n);
}
function xn(e, t, n = Q, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Ue();
      const c = qt(n), u = Me(t, n, e, i);
      return c(), Be(), u;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const o = st(gs[e].replace(/ hook$/, ""));
    y(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const We = (e) => (t, n = Q) => {
  (!Lt || e === "sp") && xn(e, (...s) => t(...s), n);
}, ec = We("bm"), sr = We("m"), tc = We(
  "bu"
), nc = We("u"), sc = We(
  "bum"
), or = We("um"), oc = We(
  "sp"
), rc = We("rtg"), ic = We("rtc");
function cc(e, t = Q) {
  xn("ec", e, t);
}
const lc = Symbol.for("v-ndc"), zn = (e) => e ? Sr(e) ? xs(e) : zn(e.parent) : null, ft = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ q(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? $e(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? $e(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? $e(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? $e(e.refs) : e.refs,
    $parent: (e) => zn(e.parent),
    $root: (e) => zn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => cr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      wn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ko.bind(e.proxy)),
    $watch: (e) => Uc.bind(e)
  })
), ys = (e) => e === "_" || e === "$", Hn = (e, t) => e !== B && !e.__isScriptSetup && j(e, t), rr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const D = i[t];
      if (D !== void 0)
        switch (D) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Hn(s, t))
          return i[t] = 1, s[t];
        if (o !== B && j(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && j(d, t)
        )
          return i[t] = 3, r[t];
        if (n !== B && j(n, t))
          return i[t] = 4, n[t];
        Xn && (i[t] = 0);
      }
    }
    const p = ft[t];
    let a, _;
    if (p)
      return t === "$attrs" ? (Y(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && mn()) : process.env.NODE_ENV !== "production" && t === "$slots" && Y(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (a = c.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== B && j(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      _ = u.config.globalProperties, j(_, t)
    )
      return _[t];
    process.env.NODE_ENV !== "production" && _e && (!G(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== B && ys(t[0]) && j(o, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === _e && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return Hn(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && j(o, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== B && j(s, t) ? (s[t] = n, !0) : j(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r }
  }, i) {
    let c;
    return !!n[i] || e !== B && j(e, i) || Hn(t, i) || (c = r[0]) && j(c, i) || j(s, i) || j(ft, i) || j(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : j(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (rr.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function fc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ft).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ft[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: z
    });
  }), t;
}
function uc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: z
    });
  });
}
function ac(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(R(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (ys(s[0])) {
        y(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: z
      });
    }
  });
}
function Hs(e) {
  return S(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function pc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Xn = !0;
function dc(e) {
  const t = cr(e), n = e.proxy, s = e.ctx;
  Xn = !1, t.beforeCreate && Ls(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: c,
    provide: u,
    inject: d,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: _,
    beforeUpdate: D,
    updated: C,
    activated: $,
    deactivated: ee,
    beforeDestroy: W,
    beforeUnmount: J,
    destroyed: L,
    unmounted: fe,
    render: V,
    renderTracked: Z,
    renderTriggered: Ee,
    errorCaptured: te,
    serverPrefetch: re,
    // public API
    expose: Fe,
    inheritAttrs: Ke,
    // assets
    components: be,
    directives: Gt,
    filters: Ss
  } = t, ke = process.env.NODE_ENV !== "production" ? pc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [M] = e.propsOptions;
    if (M)
      for (const I in M)
        ke("Props", I);
  }
  if (d && hc(d, s, ke), i)
    for (const M in i) {
      const I = i[M];
      P(I) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(s, M, {
        value: I.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[M] = I.bind(n), process.env.NODE_ENV !== "production" && ke("Methods", M)) : process.env.NODE_ENV !== "production" && y(
        `Method "${M}" has type "${typeof I}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !P(o) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const M = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && is(M) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !k(M))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = _s(M), process.env.NODE_ENV !== "production")
      for (const I in M)
        ke("Data", I), ys(I[0]) || Object.defineProperty(s, I, {
          configurable: !0,
          enumerable: !0,
          get: () => M[I],
          set: z
        });
  }
  if (Xn = !0, r)
    for (const M in r) {
      const I = r[M], we = P(I) ? I.bind(n, n) : P(I.get) ? I.get.bind(n, n) : z;
      process.env.NODE_ENV !== "production" && we === z && y(`Computed property "${M}" has no getter.`);
      const Tn = !P(I) && P(I.set) ? I.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${M}" is readonly.`
        );
      } : z, Nt = _l({
        get: we,
        set: Tn
      });
      Object.defineProperty(s, M, {
        enumerable: !0,
        configurable: !0,
        get: () => Nt.value,
        set: (at) => Nt.value = at
      }), process.env.NODE_ENV !== "production" && ke("Computed", M);
    }
  if (c)
    for (const M in c)
      ir(c[M], s, n, M);
  if (u) {
    const M = P(u) ? u.call(n) : u;
    Reflect.ownKeys(M).forEach((I) => {
      bc(I, M[I]);
    });
  }
  p && Ls(p, e, "c");
  function ie(M, I) {
    S(I) ? I.forEach((we) => M(we.bind(n))) : I && M(I.bind(n));
  }
  if (ie(ec, a), ie(sr, _), ie(tc, D), ie(nc, C), ie(Xi, $), ie(Zi, ee), ie(cc, te), ie(ic, Z), ie(rc, Ee), ie(sc, J), ie(or, fe), ie(oc, re), S(Fe))
    if (Fe.length) {
      const M = e.exposed || (e.exposed = {});
      Fe.forEach((I) => {
        Object.defineProperty(M, I, {
          get: () => n[I],
          set: (we) => n[I] = we
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === z && (e.render = V), Ke != null && (e.inheritAttrs = Ke), be && (e.components = be), Gt && (e.directives = Gt), re && tr(e);
}
function hc(e, t, n = z) {
  S(e) && (e = Zn(e));
  for (const s in e) {
    const o = e[s];
    let r;
    k(o) ? "default" in o ? r = tn(
      o.from || s,
      o.default,
      !0
    ) : r = tn(o.from || s) : r = tn(o), X(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, process.env.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Ls(e, t, n) {
  Me(
    S(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ir(e, t, n, s) {
  let o = s.includes(".") ? br(n, s) : () => n[s];
  if (G(e)) {
    const r = t[e];
    P(r) ? Un(o, r) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, r);
  } else if (P(e))
    Un(o, e.bind(n));
  else if (k(e))
    if (S(e))
      e.forEach((r) => ir(r, t, n, s));
    else {
      const r = P(e.handler) ? e.handler.bind(n) : t[e.handler];
      P(r) ? Un(o, r, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${s}"`, e);
}
function cr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !o.length && !n && !s ? u = t : (u = {}, o.length && o.forEach(
    (d) => _n(u, d, i, !0)
  ), _n(u, t, i)), k(t) && r.set(t, u), u;
}
function _n(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && _n(e, r, n, !0), o && o.forEach(
    (i) => _n(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      process.env.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = _c[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const _c = {
  data: Us,
  props: Bs,
  emits: Bs,
  // objects
  methods: Tt,
  computed: Tt,
  // lifecycle
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  // assets
  components: Tt,
  directives: Tt,
  // watch
  watch: mc,
  // provide / inject
  provide: Us,
  inject: gc
};
function Us(e, t) {
  return t ? e ? function() {
    return q(
      P(e) ? e.call(this, this) : e,
      P(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function gc(e, t) {
  return Tt(Zn(e), Zn(t));
}
function Zn(e) {
  if (S(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Tt(e, t) {
  return e ? q(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Bs(e, t) {
  return e ? S(e) && S(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : q(
    /* @__PURE__ */ Object.create(null),
    Hs(e),
    Hs(t ?? {})
  ) : t;
}
function mc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = q(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = se(e[s], t[s]);
  return n;
}
function lr() {
  return {
    app: null,
    config: {
      isNativeTag: Mr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ec = 0;
function vc(e, t) {
  return function(s, o = null) {
    P(s) || (s = q({}, s)), o != null && !k(o) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), o = null);
    const r = lr(), i = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const d = r.app = {
      _uid: Ec++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: eo,
      get config() {
        return r.config;
      },
      set config(p) {
        process.env.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return i.has(p) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : p && P(p.install) ? (i.add(p), p.install(d, ...a)) : P(p) ? (i.add(p), p(d, ...a)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(p) {
        return r.mixins.includes(p) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), d;
      },
      component(p, a) {
        return process.env.NODE_ENV !== "production" && ss(p, r.config), a ? (process.env.NODE_ENV !== "production" && r.components[p] && y(`Component "${p}" has already been registered in target app.`), r.components[p] = a, d) : r.components[p];
      },
      directive(p, a) {
        return process.env.NODE_ENV !== "production" && er(p), a ? (process.env.NODE_ENV !== "production" && r.directives[p] && y(`Directive "${p}" has already been registered in target app.`), r.directives[p] = a, d) : r.directives[p];
      },
      mount(p, a, _) {
        if (u)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const D = d._ceVNode || Xe(s, o);
          return D.appContext = r, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            e(
              Qe(D),
              p,
              _
            );
          }), e(D, p, _), u = !0, d._container = p, p.__vue_app__ = d, process.env.NODE_ENV !== "production" && (d._instance = D.component, ji(d, eo)), xs(D.component);
        }
      },
      onUnmount(p) {
        process.env.NODE_ENV !== "production" && typeof p != "function" && y(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), c.push(p);
      },
      unmount() {
        u ? (Me(
          c,
          d._instance,
          16
        ), e(null, d._container), process.env.NODE_ENV !== "production" && (d._instance = null, Hi(d)), delete d._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return process.env.NODE_ENV !== "production" && p in r.provides && y(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ), r.provides[p] = a, d;
      },
      runWithContext(p) {
        const a = vt;
        vt = d;
        try {
          return p();
        } finally {
          vt = a;
        }
      }
    };
    return d;
  };
}
let vt = null;
function bc(e, t) {
  if (!Q)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = Q.provides;
    const s = Q.parent && Q.parent.provides;
    s === n && (n = Q.provides = Object.create(s)), n[e] = t;
  }
}
function tn(e, t, n = !1) {
  const s = Q || _e;
  if (s || vt) {
    const o = vt ? vt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && P(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const fr = {}, ur = () => Object.create(fr), ar = (e) => Object.getPrototypeOf(e) === fr;
function Nc(e, t, n, s = !1) {
  const o = {}, r = ur();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), pr(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  process.env.NODE_ENV !== "production" && hr(t || {}, o, e), n ? e.props = s ? o : bi(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function yc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Oc(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, c = R(o), [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && yc(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let _ = p[a];
        if (Vn(e.emitsOptions, _))
          continue;
        const D = t[_];
        if (u)
          if (j(r, _))
            D !== r[_] && (r[_] = D, d = !0);
          else {
            const C = le(_);
            o[C] = Qn(
              u,
              c,
              C,
              D,
              e,
              !1
            );
          }
        else
          D !== r[_] && (r[_] = D, d = !0);
      }
    }
  } else {
    pr(e, t, o, r) && (d = !0);
    let p;
    for (const a in c)
      (!t || // for camelCase
      !j(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = he(a)) === a || !j(t, p))) && (u ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (o[a] = Qn(
        u,
        c,
        a,
        void 0,
        e,
        !0
      )) : delete o[a]);
    if (r !== c)
      for (const a in r)
        (!t || !j(t, a)) && (delete r[a], d = !0);
  }
  d && Ae(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && hr(t || {}, o, e);
}
function pr(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (Pt(u))
        continue;
      const d = t[u];
      let p;
      o && j(o, p = le(u)) ? !r || !r.includes(p) ? n[p] = d : (c || (c = {}))[p] = d : Vn(e.emitsOptions, u) || (!(u in s) || d !== s[u]) && (s[u] = d, i = !0);
    }
  if (r) {
    const u = R(n), d = c || B;
    for (let p = 0; p < r.length; p++) {
      const a = r[p];
      n[a] = Qn(
        o,
        u,
        a,
        d[a],
        e,
        !j(d, a)
      );
    }
  }
  return i;
}
function Qn(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const c = j(i, "default");
    if (c && s === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && P(u)) {
        const { propsDefaults: d } = o;
        if (n in d)
          s = d[n];
        else {
          const p = qt(o);
          s = d[n] = u.call(
            null,
            t
          ), p();
        }
      } else
        s = u;
      o.ce && o.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !c ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === he(n)) && (s = !0));
  }
  return s;
}
const Dc = /* @__PURE__ */ new WeakMap();
function dr(e, t, n = !1) {
  const s = n ? Dc : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, c = [];
  let u = !1;
  if (!P(e)) {
    const p = (a) => {
      u = !0;
      const [_, D] = dr(a, t, !0);
      q(i, _), D && c.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !u)
    return k(e) && s.set(e, gt), gt;
  if (S(r))
    for (let p = 0; p < r.length; p++) {
      process.env.NODE_ENV !== "production" && !G(r[p]) && y("props must be strings when using array syntax.", r[p]);
      const a = le(r[p]);
      Ws(a) && (i[a] = B);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !k(r) && y("invalid props options", r);
    for (const p in r) {
      const a = le(p);
      if (Ws(a)) {
        const _ = r[p], D = i[a] = S(_) || P(_) ? { type: _ } : q({}, _), C = D.type;
        let $ = !1, ee = !0;
        if (S(C))
          for (let W = 0; W < C.length; ++W) {
            const J = C[W], L = P(J) && J.name;
            if (L === "Boolean") {
              $ = !0;
              break;
            } else L === "String" && (ee = !1);
          }
        else
          $ = P(C) && C.name === "Boolean";
        D[
          0
          /* shouldCast */
        ] = $, D[
          1
          /* shouldCastTrue */
        ] = ee, ($ || j(D, "default")) && c.push(a);
      }
    }
  }
  const d = [i, c];
  return k(e) && s.set(e, d), d;
}
function Ws(e) {
  return e[0] !== "$" && !Pt(e) ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function wc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function hr(e, t, n) {
  const s = R(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => le(i));
  for (const i in o) {
    let c = o[i];
    c != null && xc(
      i,
      s[i],
      c,
      process.env.NODE_ENV !== "production" ? $e(s) : s,
      !r.includes(i)
    );
  }
}
function xc(e, t, n, s, o) {
  const { type: r, required: i, validator: c, skipCheck: u } = n;
  if (i && o) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !u) {
      let d = !1;
      const p = S(r) ? r : [r], a = [];
      for (let _ = 0; _ < p.length && !d; _++) {
        const { valid: D, expectedType: C } = Sc(t, p[_]);
        a.push(C || ""), d = D;
      }
      if (!d) {
        y(Cc(e, t, a));
        return;
      }
    }
    c && !c(t, s) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Vc = /* @__PURE__ */ Le(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Sc(e, t) {
  let n;
  const s = wc(t);
  if (s === "null")
    n = e === null;
  else if (Vc(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = k(e) : s === "Array" ? n = S(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Cc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(yn).join(" | ")}`;
  const o = n[0], r = cs(t), i = Ks(t, o), c = Ks(t, r);
  return n.length === 1 && ks(o) && !Tc(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, ks(r) && (s += `with value ${c}.`), s;
}
function Ks(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ks(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Tc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const _r = (e) => e[0] === "_" || e === "$stable", Os = (e) => S(e) ? e.map(Ne) : [Ne(e)], Pc = (e, t, n) => {
  if (t._n)
    return t;
  const s = qi((...o) => (process.env.NODE_ENV !== "production" && Q && (!n || n.root === Q.root) && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Os(t(...o))), n);
  return s._c = !1, s;
}, gr = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (_r(o)) continue;
    const r = e[o];
    if (P(r))
      t[o] = Pc(o, r, s);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Os(r);
      t[o] = () => i;
    }
  }
}, mr = (e, t) => {
  process.env.NODE_ENV !== "production" && !Ns(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Os(t);
  e.slots.default = () => n;
}, es = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, Ac = (e, t, n) => {
  const s = e.slots = ur();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (es(s, t, n), n && ln(s, "_", o, !0)) : gr(t, s);
  } else t && mr(e, t);
}, $c = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = B;
  if (s.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && Re ? (es(o, t, n), Ae(e, "set", "$slots")) : n && c === 1 ? r = !1 : es(o, t, n) : (r = !t.$stable, gr(t, o)), i = t;
  } else t && (mr(e, t), i = { default: 1 });
  if (r)
    for (const c in o)
      !_r(c) && i[c] == null && delete o[c];
};
let Vt, ze;
function dt(e, t) {
  e.appContext.config.performance && gn() && ze.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Wi(e, t, gn() ? ze.now() : Date.now());
}
function ht(e, t) {
  if (e.appContext.config.performance && gn()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    ze.mark(s), ze.measure(
      `<${Cn(e, e.type)}> ${t}`,
      n,
      s
    ), ze.clearMarks(n), ze.clearMarks(s);
  }
  process.env.NODE_ENV !== "production" && Ki(e, t, gn() ? ze.now() : Date.now());
}
function gn() {
  return Vt !== void 0 || (typeof window < "u" && window.performance ? (Vt = !0, ze = window.performance) : Vt = !1), Vt;
}
function Rc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ae = Jc;
function Ic(e) {
  return Mc(e);
}
function Mc(e, t) {
  Rc();
  const n = Bt();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Es(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: c,
    createComment: u,
    setText: d,
    setElementText: p,
    parentNode: a,
    nextSibling: _,
    setScopeId: D = z,
    insertStaticContent: C
  } = e, $ = (l, f, h, E = null, g = null, m = null, O = void 0, N = null, b = process.env.NODE_ENV !== "production" && Re ? !1 : !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !St(l, f) && (E = Jt(l), qe(l, g, m, !0), l = null), f.patchFlag === -2 && (b = !1, f.dynamicChildren = null);
    const { type: v, ref: T, shapeFlag: w } = f;
    switch (v) {
      case kt:
        ee(l, f, h, E);
        break;
      case De:
        W(l, f, h, E);
        break;
      case sn:
        l == null ? J(f, h, E, O) : process.env.NODE_ENV !== "production" && L(l, f, h, O);
        break;
      case Pe:
        Gt(
          l,
          f,
          h,
          E,
          g,
          m,
          O,
          N,
          b
        );
        break;
      default:
        w & 1 ? Z(
          l,
          f,
          h,
          E,
          g,
          m,
          O,
          N,
          b
        ) : w & 6 ? Ss(
          l,
          f,
          h,
          E,
          g,
          m,
          O,
          N,
          b
        ) : w & 64 || w & 128 ? v.process(
          l,
          f,
          h,
          E,
          g,
          m,
          O,
          N,
          b,
          Ot
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", v, `(${typeof v})`);
    }
    T != null && g && hn(T, l && l.ref, m, f || l, !f);
  }, ee = (l, f, h, E) => {
    if (l == null)
      s(
        f.el = c(f.children),
        h,
        E
      );
    else {
      const g = f.el = l.el;
      f.children !== l.children && d(g, f.children);
    }
  }, W = (l, f, h, E) => {
    l == null ? s(
      f.el = u(f.children || ""),
      h,
      E
    ) : f.el = l.el;
  }, J = (l, f, h, E) => {
    [l.el, l.anchor] = C(
      l.children,
      f,
      h,
      E,
      l.el,
      l.anchor
    );
  }, L = (l, f, h, E) => {
    if (f.children !== l.children) {
      const g = _(l.anchor);
      V(l), [f.el, f.anchor] = C(
        f.children,
        h,
        g,
        E
      );
    } else
      f.el = l.el, f.anchor = l.anchor;
  }, fe = ({ el: l, anchor: f }, h, E) => {
    let g;
    for (; l && l !== f; )
      g = _(l), s(l, h, E), l = g;
    s(f, h, E);
  }, V = ({ el: l, anchor: f }) => {
    let h;
    for (; l && l !== f; )
      h = _(l), o(l), l = h;
    o(f);
  }, Z = (l, f, h, E, g, m, O, N, b) => {
    f.type === "svg" ? O = "svg" : f.type === "math" && (O = "mathml"), l == null ? Ee(
      f,
      h,
      E,
      g,
      m,
      O,
      N,
      b
    ) : Fe(
      l,
      f,
      g,
      m,
      O,
      N,
      b
    );
  }, Ee = (l, f, h, E, g, m, O, N) => {
    let b, v;
    const { props: T, shapeFlag: w, transition: x, dirs: A } = l;
    if (b = l.el = i(
      l.type,
      m,
      T && T.is,
      T
    ), w & 8 ? p(b, l.children) : w & 16 && re(
      l.children,
      b,
      null,
      E,
      g,
      Ln(l, m),
      O,
      N
    ), A && tt(l, null, E, "created"), te(b, l, l.scopeId, O, E), T) {
      for (const K in T)
        K !== "value" && !Pt(K) && r(b, K, null, T[K], m, E);
      "value" in T && r(b, "value", null, T.value, m), (v = T.onVnodeBeforeMount) && Ce(v, E, l);
    }
    process.env.NODE_ENV !== "production" && (ln(b, "__vnode", l, !0), ln(b, "__vueParentComponent", E, !0)), A && tt(l, null, E, "beforeMount");
    const F = Fc(g, x);
    F && x.beforeEnter(b), s(b, f, h), ((v = T && T.onVnodeMounted) || F || A) && ae(() => {
      v && Ce(v, E, l), F && x.enter(b), A && tt(l, null, E, "mounted");
    }, g);
  }, te = (l, f, h, E, g) => {
    if (h && D(l, h), E)
      for (let m = 0; m < E.length; m++)
        D(l, E[m]);
    if (g) {
      let m = g.subTree;
      if (process.env.NODE_ENV !== "production" && m.patchFlag > 0 && m.patchFlag & 2048 && (m = Ds(m.children) || m), f === m || Or(m.type) && (m.ssContent === f || m.ssFallback === f)) {
        const O = g.vnode;
        te(
          l,
          O,
          O.scopeId,
          O.slotScopeIds,
          g.parent
        );
      }
    }
  }, re = (l, f, h, E, g, m, O, N, b = 0) => {
    for (let v = b; v < l.length; v++) {
      const T = l[v] = N ? Je(l[v]) : Ne(l[v]);
      $(
        null,
        T,
        f,
        h,
        E,
        g,
        m,
        O,
        N
      );
    }
  }, Fe = (l, f, h, E, g, m, O) => {
    const N = f.el = l.el;
    process.env.NODE_ENV !== "production" && (N.__vnode = f);
    let { patchFlag: b, dynamicChildren: v, dirs: T } = f;
    b |= l.patchFlag & 16;
    const w = l.props || B, x = f.props || B;
    let A;
    if (h && nt(h, !1), (A = x.onVnodeBeforeUpdate) && Ce(A, h, f, l), T && tt(f, l, h, "beforeUpdate"), h && nt(h, !0), process.env.NODE_ENV !== "production" && Re && (b = 0, O = !1, v = null), (w.innerHTML && x.innerHTML == null || w.textContent && x.textContent == null) && p(N, ""), v ? (Ke(
      l.dynamicChildren,
      v,
      N,
      h,
      E,
      Ln(f, g),
      m
    ), process.env.NODE_ENV !== "production" && nn(l, f)) : O || we(
      l,
      f,
      N,
      null,
      h,
      E,
      Ln(f, g),
      m,
      !1
    ), b > 0) {
      if (b & 16)
        be(N, w, x, h, g);
      else if (b & 2 && w.class !== x.class && r(N, "class", null, x.class, g), b & 4 && r(N, "style", w.style, x.style, g), b & 8) {
        const F = f.dynamicProps;
        for (let K = 0; K < F.length; K++) {
          const U = F[K], ue = w[U], ce = x[U];
          (ce !== ue || U === "value") && r(N, U, ue, ce, g, h);
        }
      }
      b & 1 && l.children !== f.children && p(N, f.children);
    } else !O && v == null && be(N, w, x, h, g);
    ((A = x.onVnodeUpdated) || T) && ae(() => {
      A && Ce(A, h, f, l), T && tt(f, l, h, "updated");
    }, E);
  }, Ke = (l, f, h, E, g, m, O) => {
    for (let N = 0; N < f.length; N++) {
      const b = l[N], v = f[N], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === Pe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !St(b, v) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 70) ? a(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      $(
        b,
        v,
        T,
        null,
        E,
        g,
        m,
        O,
        !0
      );
    }
  }, be = (l, f, h, E, g) => {
    if (f !== h) {
      if (f !== B)
        for (const m in f)
          !Pt(m) && !(m in h) && r(
            l,
            m,
            f[m],
            null,
            g,
            E
          );
      for (const m in h) {
        if (Pt(m)) continue;
        const O = h[m], N = f[m];
        O !== N && m !== "value" && r(l, m, N, O, g, E);
      }
      "value" in h && r(l, "value", f.value, h.value, g);
    }
  }, Gt = (l, f, h, E, g, m, O, N, b) => {
    const v = f.el = l ? l.el : c(""), T = f.anchor = l ? l.anchor : c("");
    let { patchFlag: w, dynamicChildren: x, slotScopeIds: A } = f;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Re || w & 2048) && (w = 0, b = !1, x = null), A && (N = N ? N.concat(A) : A), l == null ? (s(v, h, E), s(T, h, E), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      h,
      T,
      g,
      m,
      O,
      N,
      b
    )) : w > 0 && w & 64 && x && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Ke(
      l.dynamicChildren,
      x,
      h,
      g,
      m,
      O,
      N
    ), process.env.NODE_ENV !== "production" ? nn(l, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || g && f === g.subTree) && nn(
        l,
        f,
        !0
        /* shallow */
      )
    )) : we(
      l,
      f,
      h,
      T,
      g,
      m,
      O,
      N,
      b
    );
  }, Ss = (l, f, h, E, g, m, O, N, b) => {
    f.slotScopeIds = N, l == null ? f.shapeFlag & 512 ? g.ctx.activate(
      f,
      h,
      E,
      O,
      b
    ) : ke(
      f,
      h,
      E,
      g,
      m,
      O,
      b
    ) : ie(l, f, b);
  }, ke = (l, f, h, E, g, m, O) => {
    const N = l.component = rl(
      l,
      E,
      g
    );
    if (process.env.NODE_ENV !== "production" && N.type.__hmrId && Ri(N), process.env.NODE_ENV !== "production" && (Zt(l), dt(N, "mount")), Ns(l) && (N.ctx.renderer = Ot), process.env.NODE_ENV !== "production" && dt(N, "init"), ll(N, !1, O), process.env.NODE_ENV !== "production" && ht(N, "init"), N.asyncDep) {
      if (process.env.NODE_ENV !== "production" && Re && (l.el = null), g && g.registerDep(N, M, O), !l.el) {
        const b = N.subTree = Xe(De);
        W(null, b, f, h);
      }
    } else
      M(
        N,
        l,
        f,
        h,
        g,
        m,
        O
      );
    process.env.NODE_ENV !== "production" && (Qt(), ht(N, "mount"));
  }, ie = (l, f, h) => {
    const E = f.component = l.component;
    if (qc(l, f, h))
      if (E.asyncDep && !E.asyncResolved) {
        process.env.NODE_ENV !== "production" && Zt(f), I(E, f, h), process.env.NODE_ENV !== "production" && Qt();
        return;
      } else
        E.next = f, E.update();
    else
      f.el = l.el, E.vnode = f;
  }, M = (l, f, h, E, g, m, O) => {
    const N = () => {
      if (l.isMounted) {
        let { next: w, bu: x, u: A, parent: F, vnode: K } = l;
        {
          const Ve = Er(l);
          if (Ve) {
            w && (w.el = K.el, I(l, w, O)), Ve.asyncDep.then(() => {
              l.isUnmounted || N();
            });
            return;
          }
        }
        let U = w, ue;
        process.env.NODE_ENV !== "production" && Zt(w || l.vnode), nt(l, !1), w ? (w.el = K.el, I(l, w, O)) : w = K, x && wt(x), (ue = w.props && w.props.onVnodeBeforeUpdate) && Ce(ue, F, w, K), nt(l, !0), process.env.NODE_ENV !== "production" && dt(l, "render");
        const ce = Gs(l);
        process.env.NODE_ENV !== "production" && ht(l, "render");
        const xe = l.subTree;
        l.subTree = ce, process.env.NODE_ENV !== "production" && dt(l, "patch"), $(
          xe,
          ce,
          // parent may have changed if it's in a teleport
          a(xe.el),
          // anchor may have changed if it's in a fragment
          Jt(xe),
          l,
          g,
          m
        ), process.env.NODE_ENV !== "production" && ht(l, "patch"), w.el = ce.el, U === null && Gc(l, ce.el), A && ae(A, g), (ue = w.props && w.props.onVnodeUpdated) && ae(
          () => Ce(ue, F, w, K),
          g
        ), process.env.NODE_ENV !== "production" && Xo(l), process.env.NODE_ENV !== "production" && Qt();
      } else {
        let w;
        const { el: x, props: A } = f, { bm: F, m: K, parent: U, root: ue, type: ce } = l, xe = Rt(f);
        nt(l, !1), F && wt(F), !xe && (w = A && A.onVnodeBeforeMount) && Ce(w, U, f), nt(l, !0);
        {
          ue.ce && ue.ce._injectChildStyle(ce), process.env.NODE_ENV !== "production" && dt(l, "render");
          const Ve = l.subTree = Gs(l);
          process.env.NODE_ENV !== "production" && ht(l, "render"), process.env.NODE_ENV !== "production" && dt(l, "patch"), $(
            null,
            Ve,
            h,
            E,
            l,
            g,
            m
          ), process.env.NODE_ENV !== "production" && ht(l, "patch"), f.el = Ve.el;
        }
        if (K && ae(K, g), !xe && (w = A && A.onVnodeMounted)) {
          const Ve = f;
          ae(
            () => Ce(w, U, Ve),
            g
          );
        }
        (f.shapeFlag & 256 || U && Rt(U.vnode) && U.vnode.shapeFlag & 256) && l.a && ae(l.a, g), l.isMounted = !0, process.env.NODE_ENV !== "production" && Li(l), f = h = E = null;
      }
    };
    l.scope.on();
    const b = l.effect = new Oo(N);
    l.scope.off();
    const v = l.update = b.run.bind(b), T = l.job = b.runIfDirty.bind(b);
    T.i = l, T.id = l.uid, b.scheduler = () => wn(T), nt(l, !0), process.env.NODE_ENV !== "production" && (b.onTrack = l.rtc ? (w) => wt(l.rtc, w) : void 0, b.onTrigger = l.rtg ? (w) => wt(l.rtg, w) : void 0), v();
  }, I = (l, f, h) => {
    f.component = l;
    const E = l.vnode.props;
    l.vnode = f, l.next = null, Oc(l, f.props, E, h), $c(l, f.children, h), Ue(), Fs(l), Be();
  }, we = (l, f, h, E, g, m, O, N, b = !1) => {
    const v = l && l.children, T = l ? l.shapeFlag : 0, w = f.children, { patchFlag: x, shapeFlag: A } = f;
    if (x > 0) {
      if (x & 128) {
        Nt(
          v,
          w,
          h,
          E,
          g,
          m,
          O,
          N,
          b
        );
        return;
      } else if (x & 256) {
        Tn(
          v,
          w,
          h,
          E,
          g,
          m,
          O,
          N,
          b
        );
        return;
      }
    }
    A & 8 ? (T & 16 && yt(v, g, m), w !== v && p(h, w)) : T & 16 ? A & 16 ? Nt(
      v,
      w,
      h,
      E,
      g,
      m,
      O,
      N,
      b
    ) : yt(v, g, m, !0) : (T & 8 && p(h, ""), A & 16 && re(
      w,
      h,
      E,
      g,
      m,
      O,
      N,
      b
    ));
  }, Tn = (l, f, h, E, g, m, O, N, b) => {
    l = l || gt, f = f || gt;
    const v = l.length, T = f.length, w = Math.min(v, T);
    let x;
    for (x = 0; x < w; x++) {
      const A = f[x] = b ? Je(f[x]) : Ne(f[x]);
      $(
        l[x],
        A,
        h,
        null,
        g,
        m,
        O,
        N,
        b
      );
    }
    v > T ? yt(
      l,
      g,
      m,
      !0,
      !1,
      w
    ) : re(
      f,
      h,
      E,
      g,
      m,
      O,
      N,
      b,
      w
    );
  }, Nt = (l, f, h, E, g, m, O, N, b) => {
    let v = 0;
    const T = f.length;
    let w = l.length - 1, x = T - 1;
    for (; v <= w && v <= x; ) {
      const A = l[v], F = f[v] = b ? Je(f[v]) : Ne(f[v]);
      if (St(A, F))
        $(
          A,
          F,
          h,
          null,
          g,
          m,
          O,
          N,
          b
        );
      else
        break;
      v++;
    }
    for (; v <= w && v <= x; ) {
      const A = l[w], F = f[x] = b ? Je(f[x]) : Ne(f[x]);
      if (St(A, F))
        $(
          A,
          F,
          h,
          null,
          g,
          m,
          O,
          N,
          b
        );
      else
        break;
      w--, x--;
    }
    if (v > w) {
      if (v <= x) {
        const A = x + 1, F = A < T ? f[A].el : E;
        for (; v <= x; )
          $(
            null,
            f[v] = b ? Je(f[v]) : Ne(f[v]),
            h,
            F,
            g,
            m,
            O,
            N,
            b
          ), v++;
      }
    } else if (v > x)
      for (; v <= w; )
        qe(l[v], g, m, !0), v++;
    else {
      const A = v, F = v, K = /* @__PURE__ */ new Map();
      for (v = F; v <= x; v++) {
        const ne = f[v] = b ? Je(f[v]) : Ne(f[v]);
        ne.key != null && (process.env.NODE_ENV !== "production" && K.has(ne.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(ne.key),
          "Make sure keys are unique."
        ), K.set(ne.key, v));
      }
      let U, ue = 0;
      const ce = x - F + 1;
      let xe = !1, Ve = 0;
      const Dt = new Array(ce);
      for (v = 0; v < ce; v++) Dt[v] = 0;
      for (v = A; v <= w; v++) {
        const ne = l[v];
        if (ue >= ce) {
          qe(ne, g, m, !0);
          continue;
        }
        let Se;
        if (ne.key != null)
          Se = K.get(ne.key);
        else
          for (U = F; U <= x; U++)
            if (Dt[U - F] === 0 && St(ne, f[U])) {
              Se = U;
              break;
            }
        Se === void 0 ? qe(ne, g, m, !0) : (Dt[Se - F] = v + 1, Se >= Ve ? Ve = Se : xe = !0, $(
          ne,
          f[Se],
          h,
          null,
          g,
          m,
          O,
          N,
          b
        ), ue++);
      }
      const Ts = xe ? jc(Dt) : gt;
      for (U = Ts.length - 1, v = ce - 1; v >= 0; v--) {
        const ne = F + v, Se = f[ne], Ps = ne + 1 < T ? f[ne + 1].el : E;
        Dt[v] === 0 ? $(
          null,
          Se,
          h,
          Ps,
          g,
          m,
          O,
          N,
          b
        ) : xe && (U < 0 || v !== Ts[U] ? at(Se, h, Ps, 2) : U--);
      }
    }
  }, at = (l, f, h, E, g = null) => {
    const { el: m, type: O, transition: N, children: b, shapeFlag: v } = l;
    if (v & 6) {
      at(l.component.subTree, f, h, E);
      return;
    }
    if (v & 128) {
      l.suspense.move(f, h, E);
      return;
    }
    if (v & 64) {
      O.move(l, f, h, Ot);
      return;
    }
    if (O === Pe) {
      s(m, f, h);
      for (let w = 0; w < b.length; w++)
        at(b[w], f, h, E);
      s(l.anchor, f, h);
      return;
    }
    if (O === sn) {
      fe(l, f, h);
      return;
    }
    if (E !== 2 && v & 1 && N)
      if (E === 0)
        N.beforeEnter(m), s(m, f, h), ae(() => N.enter(m), g);
      else {
        const { leave: w, delayLeave: x, afterLeave: A } = N, F = () => s(m, f, h), K = () => {
          w(m, () => {
            F(), A && A();
          });
        };
        x ? x(m, F, K) : K();
      }
    else
      s(m, f, h);
  }, qe = (l, f, h, E = !1, g = !1) => {
    const {
      type: m,
      props: O,
      ref: N,
      children: b,
      dynamicChildren: v,
      shapeFlag: T,
      patchFlag: w,
      dirs: x,
      cacheIndex: A
    } = l;
    if (w === -2 && (g = !1), N != null && hn(N, null, h, l, !0), A != null && (f.renderCache[A] = void 0), T & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const F = T & 1 && x, K = !Rt(l);
    let U;
    if (K && (U = O && O.onVnodeBeforeUnmount) && Ce(U, f, l), T & 6)
      Ir(l.component, h, E);
    else {
      if (T & 128) {
        l.suspense.unmount(h, E);
        return;
      }
      F && tt(l, null, f, "beforeUnmount"), T & 64 ? l.type.remove(
        l,
        f,
        h,
        Ot,
        E
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== Pe || w > 0 && w & 64) ? yt(
        v,
        f,
        h,
        !1,
        !0
      ) : (m === Pe && w & 384 || !g && T & 16) && yt(b, f, h), E && Pn(l);
    }
    (K && (U = O && O.onVnodeUnmounted) || F) && ae(() => {
      U && Ce(U, f, l), F && tt(l, null, f, "unmounted");
    }, h);
  }, Pn = (l) => {
    const { type: f, el: h, anchor: E, transition: g } = l;
    if (f === Pe) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && g && !g.persisted ? l.children.forEach((O) => {
        O.type === De ? o(O.el) : Pn(O);
      }) : Rr(h, E);
      return;
    }
    if (f === sn) {
      V(l);
      return;
    }
    const m = () => {
      o(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (l.shapeFlag & 1 && g && !g.persisted) {
      const { leave: O, delayLeave: N } = g, b = () => O(h, m);
      N ? N(l.el, m, b) : b();
    } else
      m();
  }, Rr = (l, f) => {
    let h;
    for (; l !== f; )
      h = _(l), o(l), l = h;
    o(f);
  }, Ir = (l, f, h) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Ii(l);
    const { bum: E, scope: g, job: m, subTree: O, um: N, m: b, a: v } = l;
    qs(b), qs(v), E && wt(E), g.stop(), m && (m.flags |= 8, qe(O, l, f, h)), N && ae(N, f), ae(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Bi(l);
  }, yt = (l, f, h, E = !1, g = !1, m = 0) => {
    for (let O = m; O < l.length; O++)
      qe(l[O], f, h, E, g);
  }, Jt = (l) => {
    if (l.shapeFlag & 6)
      return Jt(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const f = _(l.anchor || l.el), h = f && f[Gi];
    return h ? _(h) : f;
  };
  let An = !1;
  const Cs = (l, f, h) => {
    l == null ? f._vnode && qe(f._vnode, null, null, !0) : $(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      h
    ), f._vnode = l, An || (An = !0, Fs(), Jo(), An = !1);
  }, Ot = {
    p: $,
    um: qe,
    m: at,
    r: Pn,
    mt: ke,
    mc: re,
    pc: we,
    pbc: Ke,
    n: Jt,
    o: e
  };
  return {
    render: Cs,
    hydrate: void 0,
    createApp: vc(Cs)
  };
}
function Ln({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function nt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Fc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function nn(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (S(s) && S(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let c = o[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = o[r] = Je(o[r]), c.el = i.el), !n && c.patchFlag !== -2 && nn(i, c)), c.type === kt && (c.el = i.el), process.env.NODE_ENV !== "production" && c.type === De && !c.el && (c.el = i.el);
    }
}
function jc(e) {
  const t = e.slice(), n = [0];
  let s, o, r, i, c;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const d = e[s];
    if (d !== 0) {
      if (o = n[n.length - 1], e[o] < d) {
        t[s] = o, n.push(s);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        c = r + i >> 1, e[n[c]] < d ? r = c + 1 : i = c;
      d < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function Er(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Er(t);
}
function qs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Hc = Symbol.for("v-scx"), Lc = () => {
  {
    const e = tn(Hc);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Un(e, t, n) {
  return process.env.NODE_ENV !== "production" && !P(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), vr(e, t, n);
}
function vr(e, t, n = B) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (s !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = q({}, n);
  process.env.NODE_ENV !== "production" && (c.onWarn = y);
  const u = t && s || !t && r !== "post";
  let d;
  if (Lt) {
    if (r === "sync") {
      const D = Lc();
      d = D.__watcherHandles || (D.__watcherHandles = []);
    } else if (!u) {
      const D = () => {
      };
      return D.stop = z, D.resume = z, D.pause = z, D;
    }
  }
  const p = Q;
  c.call = (D, C, $) => Me(D, p, C, $);
  let a = !1;
  r === "post" ? c.scheduler = (D) => {
    ae(D, p && p.suspense);
  } : r !== "sync" && (a = !0, c.scheduler = (D, C) => {
    C ? D() : wn(D);
  }), c.augmentJob = (D) => {
    t && (D.flags |= 4), a && (D.flags |= 2, p && (D.id = p.uid, D.i = p));
  };
  const _ = xi(e, t, c);
  return Lt && (d ? d.push(_) : u && _()), _;
}
function Uc(e, t, n) {
  const s = this.proxy, o = G(e) ? e.includes(".") ? br(s, e) : () => s[e] : e.bind(s, s);
  let r;
  P(t) ? r = t : (r = t.handler, n = t);
  const i = qt(this), c = vr(o, r.bind(s), n);
  return i(), c;
}
function br(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Bc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${le(t)}Modifiers`] || e[`${he(t)}Modifiers`];
function Wc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || B;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(st(le(t)) in a)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${st(le(t))}" prop.`
        );
      else {
        const _ = p[t];
        P(_) && (_(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && Bc(s, t.slice(7));
  if (i && (i.trim && (o = n.map((p) => G(p) ? p.trim() : p)), i.number && (o = n.map(Ur))), process.env.NODE_ENV !== "production" && ki(e, t, o), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && s[st(p)] && y(
      `Event "${p}" is emitted in component ${Cn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${he(
        t
      )}" instead of "${t}".`
    );
  }
  let c, u = s[c = st(t)] || // also try camelCase event handler (#2249)
  s[c = st(le(t))];
  !u && r && (u = s[c = st(he(t))]), u && Me(
    u,
    e,
    6,
    o
  );
  const d = s[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Me(
      d,
      e,
      6,
      o
    );
  }
}
function Nr(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, c = !1;
  if (!P(e)) {
    const u = (d) => {
      const p = Nr(d, t, !0);
      p && (c = !0, q(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (k(e) && s.set(e, null), null) : (S(r) ? r.forEach((u) => i[u] = null) : q(i, r), k(e) && s.set(e, i), i);
}
function Vn(e, t) {
  return !e || !Ut(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, he(t)) || j(e, t));
}
let ts = !1;
function mn() {
  ts = !0;
}
function Gs(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [r],
    slots: i,
    attrs: c,
    emit: u,
    render: d,
    renderCache: p,
    props: a,
    data: _,
    setupState: D,
    ctx: C,
    inheritAttrs: $
  } = e, ee = dn(e);
  let W, J;
  process.env.NODE_ENV !== "production" && (ts = !1);
  try {
    if (n.shapeFlag & 4) {
      const V = o || s, Z = process.env.NODE_ENV !== "production" && D.__isScriptSetup ? new Proxy(V, {
        get(Ee, te, re) {
          return y(
            `Property '${String(
              te
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Ee, te, re);
        }
      }) : V;
      W = Ne(
        d.call(
          Z,
          V,
          p,
          process.env.NODE_ENV !== "production" ? $e(a) : a,
          D,
          _,
          C
        )
      ), J = c;
    } else {
      const V = t;
      process.env.NODE_ENV !== "production" && c === a && mn(), W = Ne(
        V.length > 1 ? V(
          process.env.NODE_ENV !== "production" ? $e(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return mn(), $e(c);
            },
            slots: i,
            emit: u
          } : { attrs: c, slots: i, emit: u }
        ) : V(
          process.env.NODE_ENV !== "production" ? $e(a) : a,
          null
        )
      ), J = t.props ? c : Kc(c);
    }
  } catch (V) {
    It.length = 0, Wt(V, e, 1), W = Xe(De);
  }
  let L = W, fe;
  if (process.env.NODE_ENV !== "production" && W.patchFlag > 0 && W.patchFlag & 2048 && ([L, fe] = yr(W)), J && $ !== !1) {
    const V = Object.keys(J), { shapeFlag: Z } = L;
    if (V.length) {
      if (Z & 7)
        r && V.some(cn) && (J = kc(
          J,
          r
        )), L = Qe(L, J, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !ts && L.type !== De) {
        const Ee = Object.keys(c), te = [], re = [];
        for (let Fe = 0, Ke = Ee.length; Fe < Ke; Fe++) {
          const be = Ee[Fe];
          Ut(be) ? cn(be) || te.push(be[2].toLowerCase() + be.slice(3)) : re.push(be);
        }
        re.length && y(
          `Extraneous non-props attributes (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), te.length && y(
          `Extraneous non-emits event listeners (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Js(L) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = Qe(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Js(L) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), bs(L, n.transition)), process.env.NODE_ENV !== "production" && fe ? fe(L) : W = L, dn(ee), W;
}
const yr = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Ds(t, !1);
  if (s) {
    if (process.env.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return yr(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (c) => {
    t[o] = c, n && (r > -1 ? n[r] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [Ne(s), i];
};
function Ds(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (Sn(o)) {
      if (o.type !== De || o.children === "v-if") {
        if (n)
          return;
        if (n = o, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ds(n.children);
      }
    } else
      return;
  }
  return n;
}
const Kc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ut(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, kc = (e, t) => {
  const n = {};
  for (const s in e)
    (!cn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Js = (e) => e.shapeFlag & 7 || e.type === De;
function qc(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: c, patchFlag: u } = t, d = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || c) && Re || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? Ys(s, i, d) : !!i;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const _ = p[a];
        if (i[_] !== s[_] && !Vn(d, _))
          return !0;
      }
    }
  } else
    return (o || c) && (!c || !c.$stable) ? !0 : s === i ? !1 : s ? i ? Ys(s, i, d) : !0 : !!i;
  return !1;
}
function Ys(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !Vn(n, r))
      return !0;
  }
  return !1;
}
function Gc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Or = (e) => e.__isSuspense;
function Jc(e, t) {
  t && t.pendingBranch ? S(e) ? t.effects.push(...e) : t.effects.push(e) : Go(e);
}
const Pe = Symbol.for("v-fgt"), kt = Symbol.for("v-txt"), De = Symbol.for("v-cmt"), sn = Symbol.for("v-stc"), It = [];
let ge = null;
function Yc(e = !1) {
  It.push(ge = e ? null : []);
}
function zc() {
  It.pop(), ge = It[It.length - 1] || null;
}
let Ht = 1;
function zs(e, t = !1) {
  Ht += e, e < 0 && ge && t && (ge.hasOnce = !0);
}
function Xc(e) {
  return e.dynamicChildren = Ht > 0 ? ge || gt : null, zc(), Ht > 0 && ge && ge.push(e), e;
}
function Zc(e, t, n, s, o, r) {
  return Xc(
    wr(
      e,
      t,
      n,
      s,
      o,
      r,
      !0
    )
  );
}
function Sn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function St(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = en.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Qc = (...e) => xr(
  ...e
), Dr = ({ key: e }) => e ?? null, on = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || X(e) || P(e) ? { i: _e, r: e, k: t, f: !!n } : e : null);
function wr(e, t = null, n = null, s = 0, o = null, r = e === Pe ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Dr(t),
    ref: t && on(t),
    scopeId: Qo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: _e
  };
  return c ? (ws(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= G(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && y("VNode created with invalid key (NaN). VNode type:", u.type), Ht > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ge.push(u), u;
}
const Xe = process.env.NODE_ENV !== "production" ? Qc : xr;
function xr(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === lc) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = De), Sn(e)) {
    const c = Qe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ws(c, n), Ht > 0 && !r && ge && (c.shapeFlag & 6 ? ge[ge.indexOf(e)] = c : ge.push(c)), c.patchFlag = -2, c;
  }
  if (Pr(e) && (e = e.__vccOpts), t) {
    t = el(t);
    let { class: c, style: u } = t;
    c && !G(c) && (t.class = us(c)), k(u) && (fn(u) && !S(u) && (u = q({}, u)), t.style = fs(u));
  }
  const i = G(e) ? 1 : Or(e) ? 128 : Ji(e) ? 64 : k(e) ? 4 : P(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && fn(e) && (e = R(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), wr(
    e,
    t,
    n,
    s,
    o,
    i,
    r,
    !0
  );
}
function el(e) {
  return e ? fn(e) || ar(e) ? q({}, e) : e : null;
}
function Qe(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: c, transition: u } = e, d = t ? nl(o || {}, t) : o, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Dr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? S(r) ? r.concat(on(t)) : [r, on(t)] : on(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && S(c) ? c.map(Vr) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Pe ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Qe(e.ssContent),
    ssFallback: e.ssFallback && Qe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && s && bs(
    p,
    u.clone(p)
  ), p;
}
function Vr(e) {
  const t = Qe(e);
  return S(e.children) && (t.children = e.children.map(Vr)), t;
}
function tl(e = " ", t = 0) {
  return Xe(kt, null, e, t);
}
function Ne(e) {
  return e == null || typeof e == "boolean" ? Xe(De) : S(e) ? Xe(
    Pe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Sn(e) ? Je(e) : Xe(kt, null, String(e));
}
function Je(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qe(e);
}
function ws(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (S(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ws(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !ar(t) ? t._ctx = _e : o === 3 && _e && (_e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else P(t) ? (t = { default: t, _ctx: _e }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [tl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function nl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = us([t.class, s.class]));
      else if (o === "style")
        t.style = fs([t.style, s.style]);
      else if (Ut(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(S(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Ce(e, t, n, s = null) {
  Me(e, t, 7, [
    n,
    s
  ]);
}
const sl = lr();
let ol = 0;
function rl(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || sl, r = {
    uid: ol++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ei(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: dr(s, o),
    emitsOptions: Nr(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? r.ctx = fc(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Wc.bind(null, r), e.ce && e.ce(r), r;
}
let Q = null;
const il = () => Q || _e;
let En, ns;
{
  const e = Bt(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  En = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Q = n
  ), ns = t(
    "__VUE_SSR_SETTERS__",
    (n) => Lt = n
  );
}
const qt = (e) => {
  const t = Q;
  return En(e), e.scope.on(), () => {
    e.scope.off(), En(t);
  };
}, Xs = () => {
  Q && Q.scope.off(), En(null);
}, cl = /* @__PURE__ */ Le("slot,component");
function ss(e, { isNativeTag: t }) {
  (cl(e) || t(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Sr(e) {
  return e.vnode.shapeFlag & 4;
}
let Lt = !1;
function ll(e, t = !1, n = !1) {
  t && ns(t);
  const { props: s, children: o } = e.vnode, r = Sr(e);
  Nc(e, s, r, t), Ac(e, o, n);
  const i = r ? fl(e, t) : void 0;
  return t && ns(!1), i;
}
function fl(e, t) {
  var n;
  const s = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (s.name && ss(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        ss(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        er(r[i]);
    }
    s.compilerOptions && ul() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, rr), process.env.NODE_ENV !== "production" && uc(e);
  const { setup: o } = s;
  if (o) {
    Ue();
    const r = e.setupContext = o.length > 1 ? pl(e) : null, i = qt(e), c = bt(
      o,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? $e(e.props) : e.props,
        r
      ]
    ), u = is(c);
    if (Be(), i(), (u || e.sp) && !Rt(e) && tr(e), u) {
      if (c.then(Xs, Xs), t)
        return c.then((d) => {
          Zs(e, d, t);
        }).catch((d) => {
          Wt(d, e, 0);
        });
      if (e.asyncDep = c, process.env.NODE_ENV !== "production" && !e.suspense) {
        const d = (n = s.name) != null ? n : "Anonymous";
        y(
          `Component <${d}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Zs(e, c, t);
  } else
    Cr(e, t);
}
function Zs(e, t, n) {
  P(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : k(t) ? (process.env.NODE_ENV !== "production" && Sn(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Bo(t), process.env.NODE_ENV !== "production" && ac(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Cr(e, n);
}
const ul = () => !0;
function Cr(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || z);
  {
    const o = qt(e);
    Ue();
    try {
      dc(e);
    } finally {
      Be(), o();
    }
  }
  process.env.NODE_ENV !== "production" && !s.render && e.render === z && !t && (s.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : y("Component is missing template or render function: ", s));
}
const Qs = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return mn(), Y(e, "get", ""), e[t];
  },
  set() {
    return y("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return y("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Y(e, "get", ""), e[t];
  }
};
function al(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Y(e, "get", "$slots"), t[n];
    }
  });
}
function pl(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (S(n) ? s = "array" : X(n) && (s = "ref")), s !== "object" && y(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Qs));
      },
      get slots() {
        return s || (s = al(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Qs),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function xs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Bo(Ni(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ft)
        return ft[n](e);
    },
    has(t, n) {
      return n in t || n in ft;
    }
  })) : e.proxy;
}
const dl = /(?:^|[-_])(\w)/g, hl = (e) => e.replace(dl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Tr(e, t = !0) {
  return P(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Cn(e, t, n = !1) {
  let s = Tr(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e && e.parent) {
    const o = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    s = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return s ? hl(s) : n ? "App" : "Anonymous";
}
function Pr(e) {
  return P(e) && "__vccOpts" in e;
}
const _l = (e, t) => {
  const n = Di(e, t, Lt);
  if (process.env.NODE_ENV !== "production") {
    const s = il();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function gl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(a) {
      return k(a) ? a.__isVue ? ["div", e, "VueInstance"] : X(a) ? [
        "div",
        {},
        ["span", e, p(a)],
        "<",
        // avoid debugger accessing value affecting behavior
        c("_value" in a ? a._value : a),
        ">"
      ] : mt(a) ? [
        "div",
        {},
        ["span", e, me(a) ? "ShallowReactive" : "Reactive"],
        "<",
        c(a),
        `>${Ze(a) ? " (readonly)" : ""}`
      ] : Ze(a) ? [
        "div",
        {},
        ["span", e, me(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const _ = [];
    a.type.props && a.props && _.push(i("props", R(a.props))), a.setupState !== B && _.push(i("setup", a.setupState)), a.data !== B && _.push(i("data", R(a.data)));
    const D = u(a, "computed");
    D && _.push(i("computed", D));
    const C = u(a, "inject");
    return C && _.push(i("injected", C)), _.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), _;
  }
  function i(a, _) {
    return _ = q({}, _), Object.keys(_).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(_).map((D) => [
          "div",
          {},
          ["span", s, D + ": "],
          c(_[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(a, _ = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", s, a] : k(a) ? ["object", { object: _ ? R(a) : a }] : ["span", n, String(a)];
  }
  function u(a, _) {
    const D = a.type;
    if (P(D))
      return;
    const C = {};
    for (const $ in a.ctx)
      d(D, $, _) && (C[$] = a.ctx[$]);
    return C;
  }
  function d(a, _, D) {
    const C = a[D];
    if (S(C) && C.includes(_) || k(C) && _ in C || a.extends && d(a.extends, _, D) || a.mixins && a.mixins.some(($) => d($, _, D)))
      return !0;
  }
  function p(a) {
    return me(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const eo = "3.5.13", ve = process.env.NODE_ENV !== "production" ? y : z;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let os;
const to = typeof window < "u" && window.trustedTypes;
if (to)
  try {
    os = /* @__PURE__ */ to.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && ve(`Error creating trusted types policy: ${e}`);
  }
const Ar = os ? (e) => os.createHTML(e) : (e) => e, ml = "http://www.w3.org/2000/svg", El = "http://www.w3.org/1998/Math/MathML", He = typeof document < "u" ? document : null, no = He && /* @__PURE__ */ He.createElement("template"), vl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? He.createElementNS(ml, e) : t === "mathml" ? He.createElementNS(El, e) : n ? He.createElement(e, { is: n }) : He.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => He.createTextNode(e),
  createComment: (e) => He.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => He.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === r || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === r || !(o = o.nextSibling)); )
        ;
    else {
      no.innerHTML = Ar(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const c = no.content;
      if (s === "svg" || s === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, bl = Symbol("_vtc");
function Nl(e, t, n) {
  const s = e[bl];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const so = Symbol("_vod"), yl = Symbol("_vsh");
process.env.NODE_ENV;
const Ol = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Dl = /(^|;)\s*display\s*:/;
function wl(e, t, n) {
  const s = e.style, o = G(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (G(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          n[c] == null && rn(s, c, "");
        }
      else
        for (const i in t)
          n[i] == null && rn(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), rn(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[Ol];
      i && (n += ";" + i), s.cssText = n, r = Dl.test(n);
    }
  } else t && e.removeAttribute("style");
  so in e && (e[so] = r ? s.display : "", e[yl] && (s.display = "none"));
}
const xl = /[^\\];\s*$/, oo = /\s*!important$/;
function rn(e, t, n) {
  if (S(n))
    n.forEach((s) => rn(e, t, s));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && xl.test(n) && ve(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Vl(e, t);
    oo.test(n) ? e.setProperty(
      he(s),
      n.replace(oo, ""),
      "important"
    ) : e[s] = n;
  }
}
const ro = ["Webkit", "Moz", "ms"], Bn = {};
function Vl(e, t) {
  const n = Bn[t];
  if (n)
    return n;
  let s = le(t);
  if (s !== "filter" && s in e)
    return Bn[t] = s;
  s = yn(s);
  for (let o = 0; o < ro.length; o++) {
    const r = ro[o] + s;
    if (r in e)
      return Bn[t] = r;
  }
  return t;
}
const io = "http://www.w3.org/1999/xlink";
function co(e, t, n, s, o, r = Qr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(io, t.slice(6, t.length)) : e.setAttributeNS(io, t, n) : n == null || r && !vo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : et(n) ? String(n) : n
  );
}
function lo(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ar(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = vo(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (c) {
    process.env.NODE_ENV !== "production" && !i && ve(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      c
    );
  }
  i && e.removeAttribute(o || t);
}
function Sl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Cl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const fo = Symbol("_vei");
function Tl(e, t, n, s, o = null) {
  const r = e[fo] || (e[fo] = {}), i = r[t];
  if (s && i)
    i.value = process.env.NODE_ENV !== "production" ? ao(s, t) : s;
  else {
    const [c, u] = Pl(t);
    if (s) {
      const d = r[t] = Rl(
        process.env.NODE_ENV !== "production" ? ao(s, t) : s,
        o
      );
      Sl(e, c, d, u);
    } else i && (Cl(e, c, i, u), r[t] = void 0);
  }
}
const uo = /(?:Once|Passive|Capture)$/;
function Pl(e) {
  let t;
  if (uo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(uo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : he(e.slice(2)), t];
}
let Wn = 0;
const Al = /* @__PURE__ */ Promise.resolve(), $l = () => Wn || (Al.then(() => Wn = 0), Wn = Date.now());
function Rl(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Me(
      Il(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = $l(), n;
}
function ao(e, t) {
  return P(e) || S(e) ? e : (ve(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), z);
}
function Il(e, t) {
  if (S(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const po = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ml = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? Nl(e, s, i) : t === "style" ? wl(e, n, s) : Ut(t) ? cn(t) || Tl(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Fl(e, t, s, i)) ? (lo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && co(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !G(s)) ? lo(e, le(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), co(e, t, s, i));
};
function Fl(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && po(t) && P(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return po(t) && G(n) ? !1 : t in e;
}
const ho = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function jl(e, t, n) {
  const s = /* @__PURE__ */ Yi(e, t);
  bn(s) && q(s, t);
  class o extends Vs {
    constructor(i) {
      super(s, i, n);
    }
  }
  return o.def = s, o;
}
const Hl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Vs extends Hl {
  constructor(t, n = {}, s = go) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== go ? this._root = this.shadowRoot : (process.env.NODE_ENV !== "production" && this.shadowRoot && ve(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this), this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Vs) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, ko(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver((s) => {
      for (const o of s)
        this._setAttr(o.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (s, o = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: i } = s;
      let c;
      if (r && !S(r))
        for (const u in r) {
          const d = r[u];
          (d === Number || d && d.type === Number) && (u in this._props && (this._props[u] = As(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[le(u)] = !0);
        }
      this._numberProps = c, o && this._resolveProps(s), this.shadowRoot ? this._applyStyles(i) : process.env.NODE_ENV !== "production" && i && ve(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(s);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then(
      (s) => t(this._def = s, !0)
    ) : t(this._def);
  }
  _mount(t) {
    process.env.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const s in n)
        j(this, s) ? process.env.NODE_ENV !== "production" && ve(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Uo(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = S(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && s.includes(o) && this._setProp(o, this[o]);
    for (const o of s.map(le))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(r) {
          this._setProp(o, r, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : ho;
    const o = le(t);
    n && this._numberProps && this._numberProps[o] && (s = As(s)), this._setProp(o, s, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, o = !1) {
    if (n !== this._props[t] && (n === ho ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), s)) {
      const r = this._ob;
      r && r.disconnect(), n === !0 ? this.setAttribute(he(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(he(t), n + "") : n || this.removeAttribute(he(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    Ul(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Xe(this._def, q(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0, process.env.NODE_ENV !== "production" && (s.ceReload = (r) => {
        this._styles && (this._styles.forEach((i) => this._root.removeChild(i)), this._styles.length = 0), this._applyStyles(r), this._instance = null, this._update();
      });
      const o = (r, i) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            bn(i[0]) ? q({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      s.emit = (r, ...i) => {
        o(r, i), he(r) !== r && o(he(r), i);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const s = this._nonce;
    for (let o = t.length - 1; o >= 0; o--) {
      const r = document.createElement("style");
      if (s && r.setAttribute("nonce", s), r.textContent = t[o], this.shadowRoot.prepend(r), process.env.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let i = this._childStyles.get(n.__hmrId);
            i || this._childStyles.set(n.__hmrId, i = []), i.push(r);
          }
        } else
          (this._styles || (this._styles = [])).push(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const s = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[s] || (t[s] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), n = this._instance.type.__scopeId;
    for (let s = 0; s < t.length; s++) {
      const o = t[s], r = o.getAttribute("name") || "default", i = this._slots[r], c = o.parentNode;
      if (i)
        for (const u of i) {
          if (n && u.nodeType === 1) {
            const d = n + "-s", p = document.createTreeWalker(u, 1);
            u.setAttribute(d, "");
            let a;
            for (; a = p.nextNode(); )
              a.setAttribute(d, "");
          }
          c.insertBefore(u, o);
        }
      else
        for (; o.firstChild; ) c.insertBefore(o.firstChild, o);
      c.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (process.env.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((s) => this._root.removeChild(s)), n.length = 0);
    }
  }
}
const Ll = /* @__PURE__ */ q({ patchProp: Ml }, vl);
let _o;
function $r() {
  return _o || (_o = Ic(Ll));
}
const Ul = (...e) => {
  $r().render(...e);
}, go = (...e) => {
  const t = $r().createApp(...e);
  process.env.NODE_ENV !== "production" && (Wl(t), Kl(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = kl(s);
    if (!o) return;
    const r = t._component;
    !P(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, Bl(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function Bl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Wl(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Yr(t) || zr(t) || Xr(t),
    writable: !1
  });
}
function Kl(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        ve(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return ve(s), n;
      },
      set() {
        ve(s);
      }
    });
  }
}
function kl(e) {
  if (G(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && ve(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ve(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ql() {
  gl();
}
process.env.NODE_ENV !== "production" && ql();
const Gl = { class: "my-component" }, Jl = {
  __name: "MyComponent",
  props: {
    message: {
      type: String,
      default: "Hello from Web Component!"
    }
  },
  setup(e) {
    return sr(() => {
      const t = window.getComputedStyle(document.body).getPropertyValue("accent-color") || "blue";
      document.documentElement.style.setProperty("--browser-accent-color", t);
    }), (t, n) => (Yc(), Zc("div", Gl, No(e.message), 1));
  }
}, Yl = /* @__PURE__ */ jl(Jl);
customElements.define("my-component", Yl);
