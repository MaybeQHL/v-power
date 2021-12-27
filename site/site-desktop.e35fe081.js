/*! For license information please see site-desktop.e35fe081.js.LICENSE.txt */
(() => {
  let e;
  const n = {
    7765: (e, n, t) => {
      const r = t(341);
      const o = t(8334);
      const a = t.n(o);
      const i = (t(7337), t(2002));
      const c = t(6616);
      const l = t(2738);
      const s = t(4264);
      const A = t(329);
      const u = t(5966);
      const d = t(4566);
      const p = t(5949);
      const h = t(1493);
      const f = t(7052);
      const m = t(2850);
      const v = t(6115);
      const g = t(4119);
      const C = t(9979);
      const b = t(5012);
      const y = t(8199);
      const w = t(191);
      const S = t(9299);
      const E = t(1441);
      const _ = t(684);
      const k = (0, E.n)(_.Z);
      const x = t(5044);
      const B = (0, E.n)(x.Z);
      const D = t(5080);
      const O = {
        install(e) {
          [k, B, D.g].forEach((n) => {
            n.install ? e.use(n) : n.name && e.component(n.name, n);
          });
        },
        version: '1.0.0-beta',
      };
      const I = {
        Changelog_en_US: i.Z,
        Changelog_zh_CN: c.Z,
        Contribution_en_US: l.Z,
        Contribution_zh_CN: s.Z,
        Faq_en_US: A.Z,
        Faq_zh_CN: u.Z,
        Home_en_US: d.Z,
        Home_zh_CN: p.Z,
        Quickstart_en_US: h.Z,
        Quickstart_zh_CN: f.Z,
        Container_zh_CN: m.Z,
        Lazyload_zh_CN: v.Z,
        List_zh_CN: g.Z,
        Locale_zh_CN: C.Z,
        Container_en_US: b.Z,
        Lazyload_en_US: y.Z,
        List_en_US: w.Z,
        Locale_en_US: S.Z,
      };
      const F = t(6229);
      const U = { class: 'app' };
      const j = { class: 'van-doc' };
      const T = t(2502);
      const P = { class: 'van-doc-nav__title' };
      const H = ['href', 'innerHTML'];
      const N = ['innerHTML'];
      const R = {
        name: 'VanDocNavLink',
        props: { base: String, item: Object },
        computed: {
          itemName() {
            const e = (this.item.title || this.item.name).split(' ');
            return ''
              .concat(e[0], ' <span>')
              .concat(e.slice(1).join(' '), '</span>');
          },
          path() {
            return ''.concat(this.base).concat(this.item.path);
          },
          active() {
            return (
              this.$route.path === this.path ||
              (this.item.path === 'home' && this.$route.path === this.base)
            );
          },
        },
        watch: {
          active() {
            this.scrollIntoView();
          },
        },
        mounted() {
          this.scrollIntoView();
        },
        methods: {
          scrollIntoView() {
            this.active &&
              this.$el &&
              this.$el.scrollIntoViewIfNeeded &&
              this.$el.scrollIntoViewIfNeeded();
          },
        },
        render(e, n, t, r, o, a) {
          const i = (0, F.up)('router-link');
          return t.item.path
            ? ((0, F.wg)(),
              (0, F.j4)(
                i,
                {
                  key: 0,
                  class: (0, T.C_)({ active: a.active }),
                  to: a.path,
                  innerHTML: a.itemName,
                },
                null,
                8,
                ['class', 'to', 'innerHTML']
              ))
            : t.item.link
            ? ((0, F.wg)(),
              (0, F.iD)(
                'a',
                { key: 1, href: t.item.link, innerHTML: a.itemName },
                null,
                8,
                H
              ))
            : ((0, F.wg)(),
              (0, F.iD)('a', { key: 2, innerHTML: a.itemName }, null, 8, N));
        },
      };
      const L = {
        name: 'VanDocNav',
        components: { [R.name]: R },
        props: { lang: String, navConfig: Array },
        data: () => ({ top: 64, bottom: 0 }),
        computed: {
          style() {
            return { top: this.top + 'px', bottom: this.bottom + 'px' };
          },
          base() {
            return this.lang ? '/'.concat(this.lang, '/') : '/';
          },
        },
        created() {
          window.addEventListener('scroll', this.onScroll), this.onScroll();
        },
        methods: {
          onScroll() {
            const { pageYOffset: e } = window;
            this.top = Math.max(0, 64 - e);
          },
        },
      };
      const M = t(3379);
      const V = t.n(M);
      const W = t(1654);
      V()(W.Z, { insert: 'head', singleton: !1 }),
        W.Z.locals,
        (L.render = function (e, n, t, r, o, a) {
          const i = (0, F.up)('van-doc-nav-link');
          return (
            (0, F.wg)(),
            (0, F.iD)(
              'div',
              { class: 'van-doc-nav', style: (0, T.j5)(a.style) },
              [
                ((0, F.wg)(!0),
                (0, F.iD)(
                  F.HY,
                  null,
                  (0, F.Ko)(
                    t.navConfig,
                    (e, n) => (
                      (0, F.wg)(),
                      (0, F.iD)(
                        'div',
                        { class: 'van-doc-nav__group', key: n },
                        [
                          (0, F._)('div', P, (0, T.zw)(e.title), 1),
                          e.items
                            ? ((0, F.wg)(!0),
                              (0, F.iD)(
                                F.HY,
                                { key: 0 },
                                (0, F.Ko)(
                                  e.items,
                                  (e, n) => (
                                    (0, F.wg)(),
                                    (0, F.iD)(
                                      'div',
                                      { key: n, class: 'van-doc-nav__item' },
                                      [
                                        (0, F.Wm)(
                                          i,
                                          { item: e, base: a.base },
                                          null,
                                          8,
                                          ['item', 'base']
                                        ),
                                      ]
                                    )
                                  )
                                ),
                                128
                              ))
                            : (0, F.kq)('v-if', !0),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ],
              4
            )
          );
        });
      const z = L;
      const q = { class: 'van-doc-header' };
      const G = { class: 'van-doc-row' };
      const Y = { class: 'van-doc-header__top' };
      const Z = { class: 'van-doc-header__logo' };
      const Q = ['src'];
      const J = { class: 'van-doc-header__top-nav' };
      const K = ['href'];
      const X = ['src'];
      const $ = { key: 1 };
      const ee = {
        key: 0,
        ref: 'version',
        class: 'van-doc-header__top-nav-item',
      };
      const ne = { key: 0, class: 'van-doc-header__version-pop' };
      const te = ['onClick'];
      const re = { key: 1, class: 'van-doc-header__top-nav-item' };
      const oe = ['href'];
      const ae = { id: 'docsearch' };
      const ie = t(3278);
      function ce(e) {
        return (ce =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol === 'function' &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function le(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function se() {
        return (se =
          Object.assign ||
          function (e) {
            for (let n = 1; n < arguments.length; n++) {
              const t = arguments[n];
              for (const r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Ae(e, n) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(
              (n) => Object.getOwnPropertyDescriptor(e, n).enumerable
            )),
            t.push.apply(t, r);
        }
        return t;
      }
      function ue(e) {
        for (let n = 1; n < arguments.length; n++) {
          var t = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? Ae(Object(t), !0).forEach((n) => {
                le(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Ae(Object(t)).forEach((n) => {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function de(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(e)) {
              const t = [];
              let r = !0;
              let o = !1;
              let a = void 0;
              try {
                for (
                  var i, c = e[Symbol.iterator]();
                  !(r = (i = c.next()).done) &&
                  (t.push(i.value), !n || t.length !== n);
                  r = !0
                );
              } catch (e) {
                (o = !0), (a = e);
              } finally {
                try {
                  r || c.return == null || c.return();
                } finally {
                  if (o) throw a;
                }
              }
              return t;
            }
          })(e, n) ||
          he(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function pe(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return fe(e);
          })(e) ||
          (function (e) {
            if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          he(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function he(e, n) {
        if (e) {
          if (typeof e === 'string') return fe(e, n);
          let t = Object.prototype.toString.call(e).slice(8, -1);
          return (
            t === 'Object' && e.constructor && (t = e.constructor.name),
            t === 'Map' || t === 'Set'
              ? Array.from(e)
              : t === 'Arguments' ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? fe(e, n)
              : void 0
          );
        }
      }
      function fe(e, n) {
        (n == null || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      V()(ie.Z, { insert: 'head', singleton: !1 }), ie.Z.locals;
      let me;
      let ve;
      let ge;
      let Ce;
      let be;
      let ye;
      const we = {};
      const Se = [];
      const Ee = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      function _e(e, n) {
        for (const t in n) e[t] = n[t];
        return e;
      }
      function ke(e) {
        const n = e.parentNode;
        n && n.removeChild(e);
      }
      function xe(e, n, t) {
        let r;
        let o;
        let a;
        const i = arguments;
        const c = {};
        for (a in n)
          a == 'key' ? (r = n[a]) : a == 'ref' ? (o = n[a]) : (c[a] = n[a]);
        if (arguments.length > 3)
          for (t = [t], a = 3; a < arguments.length; a++) t.push(i[a]);
        if (
          (t != null && (c.children = t),
          typeof e === 'function' && e.defaultProps != null)
        )
          for (a in e.defaultProps)
            void 0 === c[a] && (c[a] = e.defaultProps[a]);
        return Be(e, c, r, o, null);
      }
      function Be(e, n, t, r, o) {
        const a = {
          type: e,
          props: n,
          key: t,
          ref: r,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          __h: null,
          constructor: void 0,
          __v: o == null ? ++me.__v : o,
        };
        return me.vnode != null && me.vnode(a), a;
      }
      function De(e) {
        return e.children;
      }
      function Oe(e, n) {
        (this.props = e), (this.context = n);
      }
      function Ie(e, n) {
        if (n == null) return e.__ ? Ie(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var t; n < e.__k.length; n++)
          if ((t = e.__k[n]) != null && t.__e != null) return t.__e;
        return typeof e.type === 'function' ? Ie(e) : null;
      }
      function Fe(e) {
        let n;
        let t;
        if ((e = e.__) != null && e.__c != null) {
          for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
            if ((t = e.__k[n]) != null && t.__e != null) {
              e.__e = e.__c.base = t.__e;
              break;
            }
          return Fe(e);
        }
      }
      function Ue(e) {
        ((!e.__d && (e.__d = !0) && ve.push(e) && !je.__r++) ||
          Ce !== me.debounceRendering) &&
          ((Ce = me.debounceRendering) || ge)(je);
      }
      function je() {
        for (var e; (je.__r = ve.length); )
          (e = ve.sort((e, n) => e.__v.__b - n.__v.__b)),
            (ve = []),
            e.some((e) => {
              let n;
              let t;
              let r;
              let o;
              let a;
              let i;
              let c;
              e.__d &&
                ((i = (a = (n = e).__v).__e),
                (c = n.__P) &&
                  ((t = []),
                  ((r = _e({}, a)).__v = a.__v + 1),
                  (o = We(
                    c,
                    a,
                    r,
                    n.__n,
                    void 0 !== c.ownerSVGElement,
                    a.__h != null ? [i] : null,
                    t,
                    i == null ? Ie(a) : i,
                    a.__h
                  )),
                  ze(t, a),
                  o != i && Fe(a)));
            });
      }
      function Te(e, n, t, r, o, a, i, c, l, s) {
        let A;
        let u;
        let d;
        let p;
        let h;
        let f;
        let m;
        const v = (r && r.__k) || Se;
        const g = v.length;
        for (
          l == we && (l = i != null ? i[0] : g ? Ie(r, 0) : null),
            t.__k = [],
            A = 0;
          A < n.length;
          A++
        )
          if (
            (p = t.__k[A] =
              (p = n[A]) == null || typeof p === 'boolean'
                ? null
                : typeof p === 'string' || typeof p === 'number'
                ? Be(null, p, null, null, p)
                : Array.isArray(p)
                ? Be(De, { children: p }, null, null, null)
                : p.__e != null || p.__c != null
                ? Be(p.type, p.props, p.key, null, p.__v)
                : p) != null
          ) {
            if (
              ((p.__ = t),
              (p.__b = t.__b + 1),
              (d = v[A]) === null || (d && p.key == d.key && p.type === d.type))
            )
              v[A] = void 0;
            else
              for (u = 0; u < g; u++) {
                if ((d = v[u]) && p.key == d.key && p.type === d.type) {
                  v[u] = void 0;
                  break;
                }
                d = null;
              }
            (h = We(e, p, (d = d || we), o, a, i, c, l, s)),
              (u = p.ref) &&
                d.ref != u &&
                (m || (m = []),
                d.ref && m.push(d.ref, null, p),
                m.push(u, p.__c || h, p)),
              h != null
                ? (f == null && (f = h),
                  (l = He(e, p, d, v, i, h, l)),
                  s || t.type != 'option'
                    ? typeof t.type === 'function' && (t.__d = l)
                    : (e.value = ''))
                : l && d.__e == l && l.parentNode != e && (l = Ie(d));
          }
        if (((t.__e = f), i != null && typeof t.type !== 'function'))
          for (A = i.length; A--; ) i[A] != null && ke(i[A]);
        for (A = g; A--; ) v[A] != null && Ye(v[A], v[A]);
        if (m) for (A = 0; A < m.length; A++) Ge(m[A], m[++A], m[++A]);
      }
      function Pe(e, n) {
        return (
          (n = n || []),
          e == null ||
            typeof e === 'boolean' ||
            (Array.isArray(e)
              ? e.some((e) => {
                  Pe(e, n);
                })
              : n.push(e)),
          n
        );
      }
      function He(e, n, t, r, o, a, i) {
        let c;
        let l;
        let s;
        if (void 0 !== n.__d) (c = n.__d), (n.__d = void 0);
        else if (o == t || a != i || a.parentNode == null)
          e: if (i == null || i.parentNode !== e) e.appendChild(a), (c = null);
          else {
            for (l = i, s = 0; (l = l.nextSibling) && s < r.length; s += 2)
              if (l == a) break e;
            e.insertBefore(a, i), (c = i);
          }
        return void 0 !== c ? c : a.nextSibling;
      }
      function Ne(e, n, t) {
        n[0] === '-'
          ? e.setProperty(n, t)
          : (e[n] =
              t == null
                ? ''
                : typeof t !== 'number' || Ee.test(n)
                ? t
                : t + 'px');
      }
      function Re(e, n, t, r, o) {
        let a;
        let i;
        let c;
        if ((o && n == 'className' && (n = 'class'), n === 'style'))
          if (typeof t === 'string') e.style.cssText = t;
          else {
            if ((typeof r === 'string' && (e.style.cssText = r = ''), r))
              for (n in r) (t && n in t) || Ne(e.style, n, '');
            if (t) for (n in t) (r && t[n] === r[n]) || Ne(e.style, n, t[n]);
          }
        else
          n[0] === 'o' && n[1] === 'n'
            ? ((a = n !== (n = n.replace(/Capture$/, ''))),
              (i = n.toLowerCase()) in e && (n = i),
              (n = n.slice(2)),
              e.l || (e.l = {}),
              (e.l[n + a] = t),
              (c = a ? Me : Le),
              t
                ? r || e.addEventListener(n, c, a)
                : e.removeEventListener(n, c, a))
            : n !== 'list' &&
              n !== 'tagName' &&
              n !== 'form' &&
              n !== 'type' &&
              n !== 'size' &&
              n !== 'download' &&
              n !== 'href' &&
              !o &&
              n in e
            ? (e[n] = t == null ? '' : t)
            : typeof t !== 'function' &&
              n !== 'dangerouslySetInnerHTML' &&
              (n !== (n = n.replace(/xlink:?/, ''))
                ? t == null || !1 === t
                  ? e.removeAttributeNS(
                      'http://www.w3.org/1999/xlink',
                      n.toLowerCase()
                    )
                  : e.setAttributeNS(
                      'http://www.w3.org/1999/xlink',
                      n.toLowerCase(),
                      t
                    )
                : t == null || (!1 === t && !/^ar/.test(n))
                ? e.removeAttribute(n)
                : e.setAttribute(n, t));
      }
      function Le(e) {
        this.l[e.type + !1](me.event ? me.event(e) : e);
      }
      function Me(e) {
        this.l[e.type + !0](me.event ? me.event(e) : e);
      }
      function Ve(e, n, t) {
        let r;
        let o;
        for (r = 0; r < e.__k.length; r++)
          (o = e.__k[r]) &&
            ((o.__ = e),
            o.__e &&
              (typeof o.type === 'function' && o.__k.length > 1 && Ve(o, n, t),
              (n = He(t, o, o, e.__k, null, o.__e, n)),
              typeof e.type === 'function' && (e.__d = n)));
      }
      function We(e, n, t, r, o, a, i, c, l) {
        let s;
        let A;
        let u;
        let d;
        let p;
        let h;
        let f;
        let m;
        let v;
        let g;
        let C;
        const b = n.type;
        if (void 0 !== n.constructor) return null;
        t.__h != null &&
          ((l = t.__h), (c = n.__e = t.__e), (n.__h = null), (a = [c])),
          (s = me.__b) && s(n);
        try {
          e: if (typeof b === 'function') {
            if (
              ((m = n.props),
              (v = (s = b.contextType) && r[s.__c]),
              (g = s ? (v ? v.props.value : s.__) : r),
              t.__c
                ? (f = (A = n.__c = t.__c).__ = A.__E)
                : ('prototype' in b && b.prototype.render
                    ? (n.__c = A = new b(m, g))
                    : ((n.__c = A = new Oe(m, g)),
                      (A.constructor = b),
                      (A.render = Ze)),
                  v && v.sub(A),
                  (A.props = m),
                  A.state || (A.state = {}),
                  (A.context = g),
                  (A.__n = r),
                  (u = A.__d = !0),
                  (A.__h = [])),
              A.__s == null && (A.__s = A.state),
              b.getDerivedStateFromProps != null &&
                (A.__s == A.state && (A.__s = _e({}, A.__s)),
                _e(A.__s, b.getDerivedStateFromProps(m, A.__s))),
              (d = A.props),
              (p = A.state),
              u)
            )
              b.getDerivedStateFromProps == null &&
                A.componentWillMount != null &&
                A.componentWillMount(),
                A.componentDidMount != null && A.__h.push(A.componentDidMount);
            else {
              if (
                (b.getDerivedStateFromProps == null &&
                  m !== d &&
                  A.componentWillReceiveProps != null &&
                  A.componentWillReceiveProps(m, g),
                (!A.__e &&
                  A.shouldComponentUpdate != null &&
                  !1 === A.shouldComponentUpdate(m, A.__s, g)) ||
                  n.__v === t.__v)
              ) {
                (A.props = m),
                  (A.state = A.__s),
                  n.__v !== t.__v && (A.__d = !1),
                  (A.__v = n),
                  (n.__e = t.__e),
                  (n.__k = t.__k),
                  A.__h.length && i.push(A),
                  Ve(n, c, e);
                break e;
              }
              A.componentWillUpdate != null &&
                A.componentWillUpdate(m, A.__s, g),
                A.componentDidUpdate != null &&
                  A.__h.push(() => {
                    A.componentDidUpdate(d, p, h);
                  });
            }
            (A.context = g),
              (A.props = m),
              (A.state = A.__s),
              (s = me.__r) && s(n),
              (A.__d = !1),
              (A.__v = n),
              (A.__P = e),
              (s = A.render(A.props, A.state, A.context)),
              (A.state = A.__s),
              A.getChildContext != null &&
                (r = _e(_e({}, r), A.getChildContext())),
              u ||
                A.getSnapshotBeforeUpdate == null ||
                (h = A.getSnapshotBeforeUpdate(d, p)),
              (C =
                s != null && s.type == De && s.key == null
                  ? s.props.children
                  : s),
              Te(e, Array.isArray(C) ? C : [C], n, t, r, o, a, i, c, l),
              (A.base = n.__e),
              (n.__h = null),
              A.__h.length && i.push(A),
              f && (A.__E = A.__ = null),
              (A.__e = !1);
          } else
            a == null && n.__v === t.__v
              ? ((n.__k = t.__k), (n.__e = t.__e))
              : (n.__e = qe(t.__e, n, t, r, o, a, i, l));
          (s = me.diffed) && s(n);
        } catch (e) {
          (n.__v = null),
            (l || a != null) &&
              ((n.__e = c), (n.__h = !!l), (a[a.indexOf(c)] = null)),
            me.__e(e, n, t);
        }
        return n.__e;
      }
      function ze(e, n) {
        me.__c && me.__c(n, e),
          e.some((n) => {
            try {
              (e = n.__h),
                (n.__h = []),
                e.some((e) => {
                  e.call(n);
                });
            } catch (e) {
              me.__e(e, n.__v);
            }
          });
      }
      function qe(e, n, t, r, o, a, i, c) {
        let l;
        let s;
        let A;
        let u;
        let d;
        let p = t.props;
        const h = n.props;
        if (((o = n.type === 'svg' || o), a != null))
          for (l = 0; l < a.length; l++)
            if (
              (s = a[l]) != null &&
              ((n.type === null ? s.nodeType === 3 : s.localName === n.type) ||
                e == s)
            ) {
              (e = s), (a[l] = null);
              break;
            }
        if (e == null) {
          if (n.type === null) return document.createTextNode(h);
          (e = o
            ? document.createElementNS('http://www.w3.org/2000/svg', n.type)
            : document.createElement(n.type, h.is && { is: h.is })),
            (a = null),
            (c = !1);
        }
        if (n.type === null) p === h || (c && e.data === h) || (e.data = h);
        else {
          if (
            (a != null && (a = Se.slice.call(e.childNodes)),
            (A = (p = t.props || we).dangerouslySetInnerHTML),
            (u = h.dangerouslySetInnerHTML),
            !c)
          ) {
            if (a != null)
              for (p = {}, d = 0; d < e.attributes.length; d++)
                p[e.attributes[d].name] = e.attributes[d].value;
            (u || A) &&
              ((u &&
                ((A && u.__html == A.__html) || u.__html === e.innerHTML)) ||
                (e.innerHTML = (u && u.__html) || ''));
          }
          (function (e, n, t, r, o) {
            let a;
            for (a in t)
              a === 'children' ||
                a === 'key' ||
                a in n ||
                Re(e, a, null, t[a], r);
            for (a in n)
              (o && typeof n[a] !== 'function') ||
                a === 'children' ||
                a === 'key' ||
                a === 'value' ||
                a === 'checked' ||
                t[a] === n[a] ||
                Re(e, a, n[a], t[a], r);
          })(e, h, p, o, c),
            u
              ? (n.__k = [])
              : ((l = n.props.children),
                Te(
                  e,
                  Array.isArray(l) ? l : [l],
                  n,
                  t,
                  r,
                  n.type !== 'foreignObject' && o,
                  a,
                  i,
                  we,
                  c
                )),
            c ||
              ('value' in h &&
                void 0 !== (l = h.value) &&
                (l !== e.value || (n.type === 'progress' && !l)) &&
                Re(e, 'value', l, p.value, !1),
              'checked' in h &&
                void 0 !== (l = h.checked) &&
                l !== e.checked &&
                Re(e, 'checked', l, p.checked, !1));
        }
        return e;
      }
      function Ge(e, n, t) {
        try {
          typeof e === 'function' ? e(n) : (e.current = n);
        } catch (e) {
          me.__e(e, t);
        }
      }
      function Ye(e, n, t) {
        let r;
        let o;
        let a;
        if (
          (me.unmount && me.unmount(e),
          (r = e.ref) && ((r.current && r.current !== e.__e) || Ge(r, null, n)),
          t || typeof e.type === 'function' || (t = (o = e.__e) != null),
          (e.__e = e.__d = void 0),
          (r = e.__c) != null)
        ) {
          if (r.componentWillUnmount)
            try {
              r.componentWillUnmount();
            } catch (e) {
              me.__e(e, n);
            }
          r.base = r.__P = null;
        }
        if ((r = e.__k)) for (a = 0; a < r.length; a++) r[a] && Ye(r[a], n, t);
        o != null && ke(o);
      }
      function Ze(e, n, t) {
        return this.constructor(e, t);
      }
      function Qe(e, n, t) {
        let r;
        let o;
        let a;
        me.__ && me.__(e, n),
          (o = (r = t === be) ? null : (t && t.__k) || n.__k),
          (e = xe(De, null, [e])),
          (a = []),
          We(
            n,
            ((r ? n : t || n).__k = e),
            o || we,
            we,
            void 0 !== n.ownerSVGElement,
            t && !r
              ? [t]
              : o
              ? null
              : n.childNodes.length
              ? Se.slice.call(n.childNodes)
              : null,
            a,
            t || we,
            r
          ),
          ze(a, e);
      }
      function Je(e, n) {
        Qe(e, n, be);
      }
      function Ke(e, n, t) {
        let r;
        let o;
        let a;
        const i = arguments;
        const c = _e({}, e.props);
        for (a in n)
          a == 'key' ? (r = n[a]) : a == 'ref' ? (o = n[a]) : (c[a] = n[a]);
        if (arguments.length > 3)
          for (t = [t], a = 3; a < arguments.length; a++) t.push(i[a]);
        return (
          t != null && (c.children = t),
          Be(e.type, c, r || e.key, o || e.ref, null)
        );
      }
      (me = {
        __e(e, n) {
          for (var t, r, o, a = n.__h; (n = n.__); )
            if ((t = n.__c) && !t.__)
              try {
                if (
                  ((r = t.constructor) &&
                    r.getDerivedStateFromError != null &&
                    (t.setState(r.getDerivedStateFromError(e)), (o = t.__d)),
                  t.componentDidCatch != null &&
                    (t.componentDidCatch(e), (o = t.__d)),
                  o)
                )
                  return (n.__h = a), (t.__E = t);
              } catch (n) {
                e = n;
              }
          throw e;
        },
        __v: 0,
      }),
        (Oe.prototype.setState = function (e, n) {
          let t;
          (t =
            this.__s != null && this.__s !== this.state
              ? this.__s
              : (this.__s = _e({}, this.state))),
            typeof e === 'function' && (e = e(_e({}, t), this.props)),
            e && _e(t, e),
            e != null && this.__v && (n && this.__h.push(n), Ue(this));
        }),
        (Oe.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), Ue(this));
        }),
        (Oe.prototype.render = De),
        (ve = []),
        (ge =
          typeof Promise === 'function'
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (je.__r = 0),
        (be = we),
        (ye = 0);
      let Xe;
      let $e;
      let en;
      let nn = 0;
      let tn = [];
      const rn = me.__b;
      const on = me.__r;
      const an = me.diffed;
      const cn = me.__c;
      const ln = me.unmount;
      function sn(e, n) {
        me.__h && me.__h($e, e, nn || n), (nn = 0);
        const t = $e.__H || ($e.__H = { __: [], __h: [] });
        return e >= t.__.length && t.__.push({}), t.__[e];
      }
      function An(e) {
        return (nn = 1), un(bn, e);
      }
      function un(e, n, t) {
        const r = sn(Xe++, 2);
        return (
          (r.t = e),
          r.__c ||
            ((r.__ = [
              t ? t(n) : bn(void 0, n),
              function (e) {
                const n = r.t(r.__[0], e);
                r.__[0] !== n && ((r.__ = [n, r.__[1]]), r.__c.setState({}));
              },
            ]),
            (r.__c = $e)),
          r.__
        );
      }
      function dn(e, n) {
        const t = sn(Xe++, 3);
        !me.__s &&
          Cn(t.__H, n) &&
          ((t.__ = e), (t.__H = n), $e.__H.__h.push(t));
      }
      function pn(e, n) {
        const t = sn(Xe++, 4);
        !me.__s && Cn(t.__H, n) && ((t.__ = e), (t.__H = n), $e.__h.push(t));
      }
      function hn(e, n) {
        const t = sn(Xe++, 7);
        return Cn(t.__H, n) && ((t.__ = e()), (t.__H = n), (t.__h = e)), t.__;
      }
      function fn() {
        tn.forEach((e) => {
          if (e.__P)
            try {
              e.__H.__h.forEach(vn), e.__H.__h.forEach(gn), (e.__H.__h = []);
            } catch (n) {
              (e.__H.__h = []), me.__e(n, e.__v);
            }
        }),
          (tn = []);
      }
      (me.__b = function (e) {
        ($e = null), rn && rn(e);
      }),
        (me.__r = function (e) {
          on && on(e), (Xe = 0);
          const n = ($e = e.__c).__H;
          n && (n.__h.forEach(vn), n.__h.forEach(gn), (n.__h = []));
        }),
        (me.diffed = function (e) {
          an && an(e);
          const n = e.__c;
          n &&
            n.__H &&
            n.__H.__h.length &&
            ((tn.push(n) !== 1 && en === me.requestAnimationFrame) ||
              (
                (en = me.requestAnimationFrame) ||
                function (e) {
                  let n;
                  const t = function () {
                    clearTimeout(r),
                      mn && cancelAnimationFrame(n),
                      setTimeout(e);
                  };
                  var r = setTimeout(t, 100);
                  mn && (n = requestAnimationFrame(t));
                }
              )(fn)),
            ($e = void 0);
        }),
        (me.__c = function (e, n) {
          n.some((e) => {
            try {
              e.__h.forEach(vn), (e.__h = e.__h.filter((e) => !e.__ || gn(e)));
            } catch (t) {
              n.some((e) => {
                e.__h && (e.__h = []);
              }),
                (n = []),
                me.__e(t, e.__v);
            }
          }),
            cn && cn(e, n);
        }),
        (me.unmount = function (e) {
          ln && ln(e);
          const n = e.__c;
          if (n && n.__H)
            try {
              n.__H.__.forEach(vn);
            } catch (e) {
              me.__e(e, n.__v);
            }
        });
      var mn = typeof requestAnimationFrame === 'function';
      function vn(e) {
        const n = $e;
        typeof e.__c === 'function' && e.__c(), ($e = n);
      }
      function gn(e) {
        const n = $e;
        (e.__c = e.__()), ($e = n);
      }
      function Cn(e, n) {
        return !e || e.length !== n.length || n.some((n, t) => n !== e[t]);
      }
      function bn(e, n) {
        return typeof n === 'function' ? n(e) : n;
      }
      function yn(e, n) {
        for (const t in n) e[t] = n[t];
        return e;
      }
      function wn(e, n) {
        for (const t in e) if (t !== '__source' && !(t in n)) return !0;
        for (const r in n) if (r !== '__source' && e[r] !== n[r]) return !0;
        return !1;
      }
      function Sn(e) {
        this.props = e;
      }
      ((Sn.prototype = new Oe()).isPureReactComponent = !0),
        (Sn.prototype.shouldComponentUpdate = function (e, n) {
          return wn(this.props, e) || wn(this.state, n);
        });
      const En = me.__b;
      me.__b = function (e) {
        e.type &&
          e.type.__f &&
          e.ref &&
          ((e.props.ref = e.ref), (e.ref = null)),
          En && En(e);
      };
      const _n =
        (typeof Symbol !== 'undefined' &&
          Symbol.for &&
          Symbol.for('react.forward_ref')) ||
        3911;
      const kn = function (e, n) {
        return e == null ? null : Pe(Pe(e).map(n));
      };
      const xn = {
        map: kn,
        forEach: kn,
        count(e) {
          return e ? Pe(e).length : 0;
        },
        only(e) {
          const n = Pe(e);
          if (n.length !== 1) throw 'Children.only';
          return n[0];
        },
        toArray: Pe,
      };
      const Bn = me.__e;
      function Dn(e) {
        return (
          e &&
            (e.__c &&
              e.__c.__H &&
              (e.__c.__H.__.forEach((e) => {
                typeof e.__c === 'function' && e.__c();
              }),
              (e.__c.__H = null)),
            ((e = yn({}, e)).__c = null),
            (e.__k = e.__k && e.__k.map(Dn))),
          e
        );
      }
      function On(e) {
        return e && ((e.__v = null), (e.__k = e.__k && e.__k.map(On))), e;
      }
      function In() {
        (this.__u = 0), (this.t = null), (this.__b = null);
      }
      function Fn(e) {
        const n = e.__.__c;
        return n && n.__e && n.__e(e);
      }
      function Un() {
        (this.u = null), (this.o = null);
      }
      (me.__e = function (e, n, t) {
        if (e.then)
          for (var r, o = n; (o = o.__); )
            if ((r = o.__c) && r.__c)
              return (
                n.__e == null && ((n.__e = t.__e), (n.__k = t.__k)), r.__c(e, n)
              );
        Bn(e, n, t);
      }),
        ((In.prototype = new Oe()).__c = function (e, n) {
          const t = n.__c;
          const r = this;
          r.t == null && (r.t = []), r.t.push(t);
          const o = Fn(r.__v);
          let a = !1;
          const i = function () {
            a || ((a = !0), (t.componentWillUnmount = t.__c), o ? o(c) : c());
          };
          (t.__c = t.componentWillUnmount),
            (t.componentWillUnmount = function () {
              i(), t.__c && t.__c();
            });
          var c = function () {
            let e;
            if (!--r.__u)
              for (
                r.__v.__k[0] = On(r.state.__e),
                  r.setState({ __e: (r.__b = null) });
                (e = r.t.pop());

              )
                e.forceUpdate();
          };
          !0 === n.__h ||
            r.__u++ ||
            r.setState({ __e: (r.__b = r.__v.__k[0]) }),
            e.then(i, i);
        }),
        (In.prototype.componentWillUnmount = function () {
          this.t = [];
        }),
        (In.prototype.render = function (e, n) {
          this.__b &&
            (this.__v.__k && (this.__v.__k[0] = Dn(this.__b)),
            (this.__b = null));
          const t = n.__e && xe(De, null, e.fallback);
          return (
            t && (t.__h = null), [xe(De, null, n.__e ? null : e.children), t]
          );
        });
      const jn = function (e, n, t) {
        if (
          (++t[1] === t[0] && e.o.delete(n),
          e.props.revealOrder && (e.props.revealOrder[0] !== 't' || !e.o.size))
        )
          for (t = e.u; t; ) {
            for (; t.length > 3; ) t.pop()();
            if (t[1] < t[0]) break;
            e.u = t = t[2];
          }
      };
      function Tn(e) {
        return (
          (this.getChildContext = function () {
            return e.context;
          }),
          e.children
        );
      }
      function Pn(e) {
        const n = this;
        const t = e.i;
        const r = xe(Tn, { context: n.context }, e.__v);
        (n.componentWillUnmount = function () {
          const e = n.l.parentNode;
          e && e.removeChild(n.l), Ye(n.s);
        }),
          n.i && n.i !== t && (n.componentWillUnmount(), (n.h = !1)),
          e.__v
            ? n.h
              ? ((t.__k = n.__k), Qe(r, t), (n.__k = t.__k))
              : ((n.l = document.createTextNode('')),
                (n.__k = t.__k),
                Je('', t),
                t.appendChild(n.l),
                (n.h = !0),
                (n.i = t),
                Qe(r, t, n.l),
                (t.__k = n.__k),
                (n.__k = n.l.__k))
            : n.h && n.componentWillUnmount(),
          (n.s = r);
      }
      function Hn(e, n) {
        return xe(Pn, { __v: e, i: n });
      }
      ((Un.prototype = new Oe()).__e = function (e) {
        const n = this;
        const t = Fn(n.__v);
        const r = n.o.get(e);
        return (
          r[0]++,
          function (o) {
            const a = function () {
              n.props.revealOrder ? (r.push(o), jn(n, e, r)) : o();
            };
            t ? t(a) : a();
          }
        );
      }),
        (Un.prototype.render = function (e) {
          (this.u = null), (this.o = new Map());
          const n = Pe(e.children);
          e.revealOrder && e.revealOrder[0] === 'b' && n.reverse();
          for (let t = n.length; t--; )
            this.o.set(n[t], (this.u = [1, 0, this.u]));
          return e.children;
        }),
        (Un.prototype.componentDidUpdate = Un.prototype.componentDidMount = function () {
          const e = this;
          this.o.forEach((n, t) => {
            jn(e, t, n);
          });
        });
      const Nn =
        (typeof Symbol !== 'undefined' &&
          Symbol.for &&
          Symbol.for('react.element')) ||
        60103;
      const Rn = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      const Ln = typeof Symbol !== 'undefined' ? /fil|che|rad/i : /fil|che|ra/i;
      function Mn(e, n, t) {
        return (
          n.__k == null && (n.textContent = ''),
          Qe(e, n),
          typeof t === 'function' && t(),
          e ? e.__c : null
        );
      }
      (Oe.prototype.isReactComponent = {}),
        [
          'componentWillMount',
          'componentWillReceiveProps',
          'componentWillUpdate',
        ].forEach((e) => {
          Object.defineProperty(Oe.prototype, e, {
            configurable: !0,
            get() {
              return this['UNSAFE_' + e];
            },
            set(n) {
              Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: n,
              });
            },
          });
        });
      const Vn = me.event;
      function Wn() {}
      function zn() {
        return this.cancelBubble;
      }
      function qn() {
        return this.defaultPrevented;
      }
      me.event = function (e) {
        return (
          Vn && (e = Vn(e)),
          (e.persist = Wn),
          (e.isPropagationStopped = zn),
          (e.isDefaultPrevented = qn),
          (e.nativeEvent = e)
        );
      };
      let Gn;
      const Yn = {
        configurable: !0,
        get() {
          return this.class;
        },
      };
      const Zn = me.vnode;
      me.vnode = function (e) {
        const n = e.type;
        const t = e.props;
        let r = t;
        if (typeof n === 'string') {
          for (let o in ((r = {}), t)) {
            let a = t[o];
            o === 'defaultValue' && 'value' in t && t.value == null
              ? (o = 'value')
              : o === 'download' && !0 === a
              ? (a = '')
              : /ondoubleclick/i.test(o)
              ? (o = 'ondblclick')
              : /^onchange(textarea|input)/i.test(o + n) && !Ln.test(t.type)
              ? (o = 'oninput')
              : /^on(Ani|Tra|Tou|BeforeInp)/.test(o)
              ? (o = o.toLowerCase())
              : Rn.test(o)
              ? (o = o.replace(/[A-Z0-9]/, '-$&').toLowerCase())
              : a === null && (a = void 0),
              (r[o] = a);
          }
          n == 'select' &&
            r.multiple &&
            Array.isArray(r.value) &&
            (r.value = Pe(t.children).forEach((e) => {
              e.props.selected = r.value.indexOf(e.props.value) != -1;
            })),
            (e.props = r);
        }
        n &&
          t.class != t.className &&
          ((Yn.enumerable = 'className' in t),
          t.className != null && (r.class = t.className),
          Object.defineProperty(r, 'className', Yn)),
          (e.$$typeof = Nn),
          Zn && Zn(e);
      };
      const Qn = me.__r;
      function Jn(e) {
        return !!e && e.$$typeof === Nn;
      }
      me.__r = function (e) {
        Qn && Qn(e), (Gn = e.__c);
      };
      const Kn = {
        useState: An,
        useReducer: un,
        useEffect: dn,
        useLayoutEffect: pn,
        useRef(e) {
          return (nn = 5), hn(() => ({ current: e }), []);
        },
        useImperativeHandle(e, n, t) {
          (nn = 6),
            pn(
              () => {
                typeof e === 'function' ? e(n()) : e && (e.current = n());
              },
              t == null ? t : t.concat(e)
            );
        },
        useMemo: hn,
        useCallback(e, n) {
          return (nn = 8), hn(() => e, n);
        },
        useContext(e) {
          const n = $e.context[e.__c];
          const t = sn(Xe++, 9);
          return (
            (t.__c = e),
            n ? (t.__ == null && ((t.__ = !0), n.sub($e)), n.props.value) : e.__
          );
        },
        useDebugValue(e, n) {
          me.useDebugValue && me.useDebugValue(n ? n(e) : e);
        },
        version: '16.8.0',
        Children: xn,
        render: Mn,
        hydrate(e, n, t) {
          return Je(e, n), typeof t === 'function' && t(), e ? e.__c : null;
        },
        unmountComponentAtNode(e) {
          return !!e.__k && (Qe(null, e), !0);
        },
        createPortal: Hn,
        createElement: xe,
        createContext(e, n) {
          const t = {
            __c: (n = '__cC' + ye++),
            __: e,
            Consumer(e, n) {
              return e.children(n);
            },
            Provider(e, t, r) {
              return (
                this.getChildContext ||
                  ((t = []),
                  ((r = {})[n] = this),
                  (this.getChildContext = function () {
                    return r;
                  }),
                  (this.shouldComponentUpdate = function (e) {
                    this.props.value !== e.value && t.some(Ue);
                  }),
                  (this.sub = function (e) {
                    t.push(e);
                    const n = e.componentWillUnmount;
                    e.componentWillUnmount = function () {
                      t.splice(t.indexOf(e), 1), n && n.call(e);
                    };
                  })),
                e.children
              );
            },
          };
          return (t.Provider.__ = t.Consumer.contextType = t);
        },
        createFactory(e) {
          return xe.bind(null, e);
        },
        cloneElement(e) {
          return Jn(e) ? Ke.apply(null, arguments) : e;
        },
        createRef() {
          return { current: null };
        },
        Fragment: De,
        isValidElement: Jn,
        findDOMNode(e) {
          return (e && (e.base || (e.nodeType === 1 && e))) || null;
        },
        Component: Oe,
        PureComponent: Sn,
        memo(e, n) {
          function t(e) {
            const t = this.props.ref;
            const r = t == e.ref;
            return (
              !r && t && (t.call ? t(null) : (t.current = null)),
              n ? !n(this.props, e) || !r : wn(this.props, e)
            );
          }
          function r(n) {
            return (this.shouldComponentUpdate = t), xe(e, n);
          }
          return (
            (r.displayName = 'Memo(' + (e.displayName || e.name) + ')'),
            (r.prototype.isReactComponent = !0),
            (r.__f = !0),
            r
          );
        },
        forwardRef(e) {
          function n(n, t) {
            const r = yn({}, n);
            return (
              delete r.ref,
              e(
                r,
                (t = n.ref || t) && (ce(t) != 'object' || 'current' in t)
                  ? t
                  : null
              )
            );
          }
          return (
            (n.$$typeof = _n),
            (n.render = n),
            (n.prototype.isReactComponent = n.__f = !0),
            (n.displayName = 'ForwardRef(' + (e.displayName || e.name) + ')'),
            n
          );
        },
        unstable_batchedUpdates(e, n) {
          return e(n);
        },
        StrictMode: De,
        Suspense: In,
        SuspenseList: Un,
        lazy(e) {
          let n;
          let t;
          let r;
          function o(o) {
            if (
              (n ||
                (n = e()).then(
                  (e) => {
                    t = e.default || e;
                  },
                  (e) => {
                    r = e;
                  }
                ),
              r)
            )
              throw r;
            if (!t) throw n;
            return xe(t, o);
          }
          return (o.displayName = 'Lazy'), (o.__f = !0), o;
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentDispatcher: {
            current: {
              readContext(e) {
                return Gn.__n[e.__c].props.value;
              },
            },
          },
        },
      };
      function Xn() {
        return Kn.createElement(
          'svg',
          {
            width: '15',
            height: '15',
            className: 'DocSearch-Control-Key-Icon',
          },
          Kn.createElement('path', {
            d:
              'M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953',
            strokeWidth: '1.2',
            stroke: 'currentColor',
            fill: 'none',
            strokeLinecap: 'square',
          })
        );
      }
      function $n() {
        return Kn.createElement(
          'svg',
          {
            width: '20',
            height: '20',
            className: 'DocSearch-Search-Icon',
            viewBox: '0 0 20 20',
          },
          Kn.createElement('path', {
            d:
              'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
            stroke: 'currentColor',
            fill: 'none',
            fillRule: 'evenodd',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          })
        );
      }
      function et() {
        return (et =
          Object.assign ||
          function (e) {
            for (let n = 1; n < arguments.length; n++) {
              const t = arguments[n];
              for (const r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function nt(e, n) {
        (n == null || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      const tt = Kn.forwardRef((e, n) => {
        const t = e.translations;
        const r = void 0 === t ? {} : t;
        const o = (function (e, n) {
          if (e == null) return {};
          let t;
          let r;
          const o = (function (e, n) {
            if (e == null) return {};
            let t;
            let r;
            const o = {};
            const a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, n);
          if (Object.getOwnPropertySymbols) {
            const a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
              (t = a[r]),
                n.indexOf(t) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, t) &&
                    (o[t] = e[t]));
          }
          return o;
        })(e, ['translations']);
        const a = r.buttonText;
        const i = void 0 === a ? 'Search' : a;
        const c = r.buttonAriaLabel;
        const l = void 0 === c ? 'Search' : c;
        const s = (function (e, n) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, n) {
              if (
                typeof Symbol !== 'undefined' &&
                Symbol.iterator in Object(e)
              ) {
                const t = [];
                let r = !0;
                let o = !1;
                let a = void 0;
                try {
                  for (
                    var i, c = e[Symbol.iterator]();
                    !(r = (i = c.next()).done) &&
                    (t.push(i.value), t.length !== 2);
                    r = !0
                  );
                } catch (e) {
                  (o = !0), (a = e);
                } finally {
                  try {
                    r || c.return == null || c.return();
                  } finally {
                    if (o) throw a;
                  }
                }
                return t;
              }
            })(e) ||
            (function (e, n) {
              if (e) {
                if (typeof e === 'string') return nt(e, 2);
                let t = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  t === 'Object' && e.constructor && (t = e.constructor.name),
                  t === 'Map' || t === 'Set'
                    ? Array.from(e)
                    : t === 'Arguments' ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? nt(e, 2)
                    : void 0
                );
              }
            })(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        })(An(null));
        const A = s[0];
        const u = s[1];
        return (
          dn(() => {
            typeof navigator !== 'undefined' &&
              u(
                /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
                  ? '⌘'
                  : 'Ctrl'
              );
          }, []),
          Kn.createElement(
            'button',
            et(
              {
                type: 'button',
                className: 'DocSearch DocSearch-Button',
                'aria-label': l,
              },
              o,
              { ref: n }
            ),
            Kn.createElement(
              'span',
              { className: 'DocSearch-Button-Container' },
              Kn.createElement($n, null),
              Kn.createElement(
                'span',
                { className: 'DocSearch-Button-Placeholder' },
                i
              )
            ),
            A !== null &&
              Kn.createElement(
                'span',
                { className: 'DocSearch-Button-Keys' },
                Kn.createElement(
                  'span',
                  { className: 'DocSearch-Button-Key' },
                  A === 'Ctrl' ? Kn.createElement(Xn, null) : A
                ),
                Kn.createElement(
                  'span',
                  { className: 'DocSearch-Button-Key' },
                  'K'
                )
              )
          )
        );
      });
      function rt(e, n) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(
              (n) => Object.getOwnPropertyDescriptor(e, n).enumerable
            )),
            t.push.apply(t, r);
        }
        return t;
      }
      function ot(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function at(e) {
        return e.reduce((e, n) => e.concat(n), []);
      }
      let it = 0;
      function ct(e) {
        return e.collections.length === 0
          ? 0
          : e.collections.reduce((e, n) => e + n.items.length, 0);
      }
      function lt(e, n, t, r) {
        if (n === null && e < 0) return t - 1;
        if (r !== null && n === 0 && e < 0) return t - 1;
        const o = (n === null ? -1 : n) + e;
        return o <= -1 || o >= t ? (r === null ? null : 0) : o;
      }
      const st = function () {};
      function At(e, n) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(
              (n) => Object.getOwnPropertyDescriptor(e, n).enumerable
            )),
            t.push.apply(t, r);
        }
        return t;
      }
      function ut(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function dt(e) {
        const n = e.state;
        const t = (function (e) {
          const n = e.state;
          const t = n.collections
            .map((e) => e.items.length)
            .reduce((e, n, t) => {
              const r = (e[t - 1] || 0) + n;
              return e.push(r), e;
            }, [])
            .reduce((e, t) => (t <= n.selectedItemId ? e + 1 : e), 0);
          return n.collections[t];
        })({ state: n });
        if (!t) return null;
        const r =
          t.items[
            (function (e) {
              for (
                var n = e.state, t = e.collection, r = !1, o = 0, a = 0;
                !1 === r;

              ) {
                const i = n.collections[o];
                if (i === t) {
                  r = !0;
                  break;
                }
                (a += i.items.length), o++;
              }
              return n.selectedItemId - a;
            })({ state: n, collection: t })
          ];
        const o = t.source;
        return {
          item: r,
          itemInputValue: o.getItemInputValue({ item: r, state: n }),
          itemUrl: o.getItemUrl({ item: r, state: n }),
          source: o,
        };
      }
      function pt(e, n) {
        return e === n || (e.contains && e.contains(n));
      }
      function ht(e, n) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(
              (n) => Object.getOwnPropertyDescriptor(e, n).enumerable
            )),
            t.push.apply(t, r);
        }
        return t;
      }
      function ft(e) {
        for (let n = 1; n < arguments.length; n++) {
          var t = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? ht(Object(t), !0).forEach((n) => {
                mt(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ht(Object(t)).forEach((n) => {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function mt(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function vt(e) {
        const n = e.environment;
        return {
          navigate(e) {
            const t = e.itemUrl;
            n.location.assign(t);
          },
          navigateNewTab(e) {
            const t = e.itemUrl;
            const r = n.open(t, '_blank', 'noopener');
            r && r.focus();
          },
          navigateNewWindow(e) {
            const t = e.itemUrl;
            n.open(t, '_blank', 'noopener');
          },
        };
      }
      function gt(e, n) {
        (n == null || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function Ct(e, n) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(
              (n) => Object.getOwnPropertyDescriptor(e, n).enumerable
            )),
            t.push.apply(t, r);
        }
        return t;
      }
      function bt(e) {
        for (let n = 1; n < arguments.length; n++) {
          var t = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? Ct(Object(t), !0).forEach((n) => {
                yt(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Ct(Object(t)).forEach((n) => {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function yt(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function wt(e, n) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(
              (n) => Object.getOwnPropertyDescriptor(e, n).enumerable
            )),
            t.push.apply(t, r);
        }
        return t;
      }
      function St(e) {
        for (let n = 1; n < arguments.length; n++) {
          var t = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? wt(Object(t), !0).forEach((n) => {
                Et(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : wt(Object(t)).forEach((n) => {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function Et(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      let _t = null;
      function kt(e) {
        let n;
        const t = e.query;
        const r = e.event;
        const o = e.store;
        const a = e.props;
        const i = e.setSelectedItemId;
        const c = e.setQuery;
        const l = e.setCollections;
        const s = e.setIsOpen;
        const A = e.setStatus;
        const u = e.setContext;
        const d = e.nextState;
        const p = void 0 === d ? {} : d;
        const h = e.refresh;
        return a.onInput
          ? Promise.resolve(
              a.onInput({
                query: t,
                state: o.getState(),
                setSelectedItemId: i,
                setQuery: c,
                setCollections: l,
                setIsOpen: s,
                setStatus: A,
                setContext: u,
                refresh: h,
              })
            )
          : (_t && clearTimeout(_t),
            c(t),
            i(a.defaultSelectedItemId),
            t.length === 0 && !1 === a.openOnFocus
              ? (A('idle'),
                l(
                  o
                    .getState()
                    .collections.map((e) => St(St({}, e), {}, { items: [] }))
                ),
                s(
                  (n = p.isOpen) !== null && void 0 !== n
                    ? n
                    : a.shouldPanelShow({ state: o.getState() })
                ),
                Promise.resolve())
              : (A('loading'),
                (_t = a.environment.setTimeout(() => {
                  A('stalled');
                }, a.stallThreshold)),
                a
                  .getSources({
                    query: t,
                    state: o.getState(),
                    setSelectedItemId: i,
                    setQuery: c,
                    setCollections: l,
                    setIsOpen: s,
                    setStatus: A,
                    setContext: u,
                    refresh: h,
                  })
                  .then(
                    (e) => (
                      A('loading'),
                      Promise.all(
                        e.map((e) =>
                          Promise.resolve(
                            e.getItems({
                              query: t,
                              state: o.getState(),
                              setSelectedItemId: i,
                              setQuery: c,
                              setCollections: l,
                              setIsOpen: s,
                              setStatus: A,
                              setContext: u,
                              refresh: h,
                            })
                          ).then((n) => ({ source: e, items: n }))
                        )
                      )
                        .then((e) => {
                          let n;
                          A('idle'),
                            l(e),
                            s(
                              (n = p.isOpen) !== null && void 0 !== n
                                ? n
                                : (t.length === 0 && a.openOnFocus) ||
                                    a.shouldPanelShow({ state: o.getState() })
                            );
                          const d = dt({ state: o.getState() });
                          if (o.getState().selectedItemId !== null && d) {
                            const h = d.item;
                            const f = d.itemInputValue;
                            const m = d.itemUrl;
                            const v = d.source;
                            v.onHighlight({
                              item: h,
                              itemInputValue: f,
                              itemUrl: m,
                              source: v,
                              state: o.getState(),
                              setSelectedItemId: i,
                              setQuery: c,
                              setCollections: l,
                              setIsOpen: s,
                              setStatus: A,
                              setContext: u,
                              event: r,
                            });
                          }
                        })
                        .catch((e) => {
                          throw (A('error'), e);
                        })
                        .finally(() => {
                          _t && clearTimeout(_t);
                        })
                    )
                  )));
      }
      function xt(e, n) {
        if (e == null) return {};
        let t;
        let r;
        const o = (function (e, n) {
          if (e == null) return {};
          let t;
          let r;
          const o = {};
          const a = Object.keys(e);
          for (r = 0; r < a.length; r++)
            (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
          return o;
        })(e, n);
        if (Object.getOwnPropertySymbols) {
          const a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (t = a[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      function Bt(e, n) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(
              (n) => Object.getOwnPropertyDescriptor(e, n).enumerable
            )),
            t.push.apply(t, r);
        }
        return t;
      }
      function Dt(e) {
        for (let n = 1; n < arguments.length; n++) {
          var t = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? Bt(Object(t), !0).forEach((n) => {
                Ot(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Bt(Object(t)).forEach((n) => {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function Ot(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function It(e) {
        const n = e.state;
        return !1 === n.isOpen || n.selectedItemId === null
          ? null
          : dt({ state: n }).itemInputValue || null;
      }
      function Ft(e, n) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(
              (n) => Object.getOwnPropertyDescriptor(e, n).enumerable
            )),
            t.push.apply(t, r);
        }
        return t;
      }
      function Ut(e) {
        for (let n = 1; n < arguments.length; n++) {
          var t = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? Ft(Object(t), !0).forEach((n) => {
                jt(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Ft(Object(t)).forEach((n) => {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function jt(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      const Tt = function (e, n) {
        switch (n.type) {
          case 'setSelectedItemId':
          case 'mousemove':
            return Ut(Ut({}, e), {}, { selectedItemId: n.payload });
          case 'setQuery':
            return Ut(Ut({}, e), {}, { query: n.payload, completion: null });
          case 'setCollections':
            return Ut(Ut({}, e), {}, { collections: n.payload });
          case 'setIsOpen':
            return Ut(Ut({}, e), {}, { isOpen: n.payload });
          case 'setStatus':
            return Ut(Ut({}, e), {}, { status: n.payload });
          case 'setContext':
            return Ut(
              Ut({}, e),
              {},
              { context: Ut(Ut({}, e.context), n.payload) }
            );
          case 'ArrowDown':
            var t = Ut(
              Ut({}, e),
              {},
              {
                selectedItemId: lt(
                  1,
                  e.selectedItemId,
                  ct(e),
                  n.props.defaultSelectedItemId
                ),
              }
            );
            return Ut(Ut({}, t), {}, { completion: It({ state: t }) });
          case 'ArrowUp':
            var r = Ut(
              Ut({}, e),
              {},
              {
                selectedItemId: lt(
                  -1,
                  e.selectedItemId,
                  ct(e),
                  n.props.defaultSelectedItemId
                ),
              }
            );
            return Ut(Ut({}, r), {}, { completion: It({ state: r }) });
          case 'Escape':
            return e.isOpen
              ? Ut(Ut({}, e), {}, { isOpen: !1, completion: null })
              : Ut(
                  Ut({}, e),
                  {},
                  { query: '', status: 'idle', collections: [] }
                );
          case 'submit':
            return Ut(
              Ut({}, e),
              {},
              { selectedItemId: null, isOpen: !1, status: 'idle' }
            );
          case 'reset':
            return Ut(
              Ut({}, e),
              {},
              {
                selectedItemId:
                  !0 === n.props.openOnFocus
                    ? n.props.defaultSelectedItemId
                    : null,
                isOpen: n.props.openOnFocus,
                status: 'idle',
                query: '',
              }
            );
          case 'focus':
            return Ut(
              Ut({}, e),
              {},
              {
                selectedItemId: n.props.defaultSelectedItemId,
                isOpen: n.props.openOnFocus || e.query.length > 0,
              }
            );
          case 'blur':
            return n.props.debug
              ? e
              : Ut(Ut({}, e), {}, { isOpen: !1, selectedItemId: null });
          case 'mouseleave':
            return Ut(
              Ut({}, e),
              {},
              { selectedItemId: n.props.defaultSelectedItemId }
            );
          default:
            return e;
        }
      };
      function Pt(e) {
        const n = (function (e) {
          let n;
          const t = typeof window !== 'undefined' ? window : {};
          const r = e.plugins || [];
          return bt(
            bt(
              {
                debug: !1,
                openOnFocus: !1,
                placeholder: '',
                autoFocus: !1,
                defaultSelectedItemId: null,
                stallThreshold: 300,
                environment: t,
                shouldPanelShow(e) {
                  return ct(e.state) > 0;
                },
              },
              e
            ),
            {},
            {
              id:
                (n = e.id) !== null && void 0 !== n
                  ? n
                  : 'autocomplete-'.concat(it++),
              initialState: bt(
                {
                  selectedItemId: null,
                  query: '',
                  completion: null,
                  collections: [],
                  isOpen: !1,
                  status: 'idle',
                  context: {},
                },
                e.initialState
              ),
              plugins: r,
              onStateChange(n) {
                let t;
                (t = e.onStateChange) === null || void 0 === t || t.call(e, n),
                  r.forEach((e) => {
                    let t;
                    (t = e.onStateChange) === null ||
                      void 0 === t ||
                      t.call(e, n);
                  });
              },
              onSubmit(n) {
                let t;
                (t = e.onSubmit) === null || void 0 === t || t.call(e, n),
                  r.forEach((e) => {
                    let t;
                    (t = e.onSubmit) === null || void 0 === t || t.call(e, n);
                  });
              },
              getSources(n) {
                return Promise.all(
                  []
                    .concat(
                      (function (e) {
                        return (
                          (function (e) {
                            if (Array.isArray(e)) return gt(e);
                          })(e) ||
                          (function (e) {
                            if (
                              typeof Symbol !== 'undefined' &&
                              Symbol.iterator in Object(e)
                            )
                              return Array.from(e);
                          })(e) ||
                          (function (e, n) {
                            if (e) {
                              if (typeof e === 'string') return gt(e, n);
                              let t = Object.prototype.toString
                                .call(e)
                                .slice(8, -1);
                              return (
                                t === 'Object' &&
                                  e.constructor &&
                                  (t = e.constructor.name),
                                t === 'Map' || t === 'Set'
                                  ? Array.from(e)
                                  : t === 'Arguments' ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      t
                                    )
                                  ? gt(e, n)
                                  : void 0
                              );
                            }
                          })(e) ||
                          (function () {
                            throw new TypeError(
                              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                            );
                          })()
                        );
                      })(r.map((e) => e.getSources)),
                      [e.getSources]
                    )
                    .filter(Boolean)
                    .map((e) =>
                      (function (e, n) {
                        return Promise.resolve(e(n)).then((e) =>
                          Promise.all(
                            e.filter(Boolean).map((e) =>
                              Promise.resolve(
                                (function (e) {
                                  return (function (e) {
                                    for (let n = 1; n < arguments.length; n++) {
                                      var t =
                                        arguments[n] != null
                                          ? arguments[n]
                                          : {};
                                      n % 2
                                        ? At(Object(t), !0).forEach((n) => {
                                            ut(e, n, t[n]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                            e,
                                            Object.getOwnPropertyDescriptors(t)
                                          )
                                        : At(Object(t)).forEach((n) => {
                                            Object.defineProperty(
                                              e,
                                              n,
                                              Object.getOwnPropertyDescriptor(
                                                t,
                                                n
                                              )
                                            );
                                          });
                                    }
                                    return e;
                                  })(
                                    {
                                      getItemInputValue(e) {
                                        return e.state.query;
                                      },
                                      getItemUrl() {},
                                      onSelect(e) {
                                        (0, e.setIsOpen)(!1);
                                      },
                                      onHighlight: st,
                                    },
                                    e
                                  );
                                })(e)
                              )
                            )
                          )
                        );
                      })(e, n)
                    )
                )
                  .then((e) => at(e))
                  .then((e) =>
                    e.map((e) =>
                      bt(
                        bt({}, e),
                        {},
                        {
                          onSelect(n) {
                            e.onSelect(n),
                              r.forEach((e) => {
                                let t;
                                let r;
                                (t = e.subscribed) === null ||
                                  void 0 === t ||
                                  (r = t.onSelect) === null ||
                                  void 0 === r ||
                                  r.call(t, n);
                              });
                          },
                        }
                      )
                    )
                  );
              },
              navigator: bt(bt({}, vt({ environment: t })), e.navigator),
            }
          );
        })(e);
        const t = (function (e, n) {
          let t = n.initialState;
          return {
            getState() {
              return t;
            },
            send(r, o) {
              const a = (function (e) {
                for (let n = 1; n < arguments.length; n++) {
                  var t = arguments[n] != null ? arguments[n] : {};
                  n % 2
                    ? rt(Object(t), !0).forEach((n) => {
                        ot(e, n, t[n]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(t)
                      )
                    : rt(Object(t)).forEach((n) => {
                        Object.defineProperty(
                          e,
                          n,
                          Object.getOwnPropertyDescriptor(t, n)
                        );
                      });
                }
                return e;
              })({}, t);
              (t = e(t, { type: r, props: n, payload: o })),
                n.onStateChange({ state: t, prevState: a });
            },
          };
        })(Tt, n);
        const r = (function (e) {
          const n = e.store;
          return {
            setSelectedItemId(e) {
              n.send('setSelectedItemId', e);
            },
            setQuery(e) {
              n.send('setQuery', e);
            },
            setCollections(e) {
              let t = 0;
              const r = e.map((e) =>
                ft(
                  ft({}, e),
                  {},
                  {
                    items: at(e.items).map((e) =>
                      ft(ft({}, e), {}, { __autocomplete_id: t++ })
                    ),
                  }
                )
              );
              n.send('setCollections', r);
            },
            setIsOpen(e) {
              n.send('setIsOpen', e);
            },
            setStatus(e) {
              n.send('setStatus', e);
            },
            setContext(e) {
              n.send('setContext', e);
            },
          };
        })({ store: t });
        const o = r.setSelectedItemId;
        const a = r.setQuery;
        const i = r.setCollections;
        const c = r.setIsOpen;
        const l = r.setStatus;
        const s = r.setContext;
        const A = (function (e) {
          const n = e.store;
          const t = e.props;
          const r = e.setSelectedItemId;
          const o = e.setQuery;
          const a = e.setCollections;
          const i = e.setIsOpen;
          const c = e.setStatus;
          const l = e.setContext;
          const s = e.refresh;
          return {
            getEnvironmentProps(e) {
              return {
                onTouchStart(r) {
                  !1 !== n.getState().isOpen &&
                    r.target !== e.inputElement &&
                    !1 ===
                      [e.searchBoxElement, e.panelElement].some(
                        (e) =>
                          e &&
                          (pt(e, r.target) ||
                            pt(e, t.environment.document.activeElement))
                      ) &&
                    n.send('blur', null);
                },
                onTouchMove(r) {
                  !1 !== n.getState().isOpen &&
                    e.inputElement === t.environment.document.activeElement &&
                    r.target !== e.inputElement &&
                    e.inputElement.blur();
                },
              };
            },
            getRootProps(e) {
              return Dt(
                {
                  role: 'combobox',
                  'aria-expanded': n.getState().isOpen,
                  'aria-haspopup': 'listbox',
                  'aria-owns': n.getState().isOpen
                    ? ''.concat(t.id, '-list')
                    : void 0,
                  'aria-labelledby': ''.concat(t.id, '-label'),
                },
                e
              );
            },
            getFormProps(e) {
              return (
                e.inputElement,
                Dt(
                  {
                    action: '',
                    noValidate: !0,
                    role: 'search',
                    onSubmit(s) {
                      s.preventDefault(),
                        t.onSubmit({
                          state: n.getState(),
                          setSelectedItemId: r,
                          setQuery: o,
                          setCollections: a,
                          setIsOpen: i,
                          setStatus: c,
                          setContext: l,
                          event: s,
                        }),
                        n.send('submit', null),
                        e.inputElement && e.inputElement.blur();
                    },
                    onReset(A) {
                      A.preventDefault(),
                        t.openOnFocus &&
                          kt({
                            query: '',
                            event: A,
                            store: n,
                            props: t,
                            setSelectedItemId: r,
                            setQuery: o,
                            setCollections: a,
                            setIsOpen: i,
                            setStatus: c,
                            setContext: l,
                            refresh: s,
                          }),
                        n.send('reset', null),
                        e.inputElement && e.inputElement.focus();
                    },
                  },
                  xt(e, ['inputElement'])
                )
              );
            },
            getLabelProps(e) {
              return Dt(
                {
                  htmlFor: ''.concat(t.id, '-input'),
                  id: ''.concat(t.id, '-label'),
                },
                e
              );
            },
            getInputProps(e) {
              function A(e) {
                (t.openOnFocus || n.getState().query.length > 0) &&
                  kt({
                    query: n.getState().completion || n.getState().query,
                    event: e,
                    store: n,
                    props: t,
                    setSelectedItemId: r,
                    setQuery: o,
                    setCollections: a,
                    setIsOpen: i,
                    setStatus: c,
                    setContext: l,
                    refresh: s,
                  }),
                  n.send('focus', null);
              }
              const u = 'ontouchstart' in t.environment;
              const d = e || {};
              const p = (d.inputElement, d.maxLength);
              const h = void 0 === p ? 512 : p;
              const f = xt(d, ['inputElement', 'maxLength']);
              return Dt(
                {
                  'aria-autocomplete': 'both',
                  'aria-activedescendant':
                    n.getState().isOpen && n.getState().selectedItemId !== null
                      ? ''
                          .concat(t.id, '-item-')
                          .concat(n.getState().selectedItemId)
                      : void 0,
                  'aria-controls': n.getState().isOpen
                    ? ''.concat(t.id, '-list')
                    : void 0,
                  'aria-labelledby': ''.concat(t.id, '-label'),
                  value: n.getState().completion || n.getState().query,
                  id: ''.concat(t.id, '-input'),
                  autoComplete: 'off',
                  autoCorrect: 'off',
                  autoCapitalize: 'off',
                  spellCheck: 'false',
                  autoFocus: t.autoFocus,
                  placeholder: t.placeholder,
                  maxLength: h,
                  type: 'search',
                  onChange(e) {
                    kt({
                      query: e.currentTarget.value.slice(0, h),
                      event: e,
                      store: n,
                      props: t,
                      setSelectedItemId: r,
                      setQuery: o,
                      setCollections: a,
                      setIsOpen: i,
                      setStatus: c,
                      setContext: l,
                      refresh: s,
                    });
                  },
                  onKeyDown(e) {
                    !(function (e) {
                      const n = e.event;
                      const t = e.store;
                      const r = e.props;
                      const o = e.setSelectedItemId;
                      const a = e.setQuery;
                      const i = e.setCollections;
                      const c = e.setIsOpen;
                      const l = e.setStatus;
                      const s = e.setContext;
                      const A = e.refresh;
                      if (n.key === 'ArrowUp' || n.key === 'ArrowDown') {
                        n.preventDefault(), t.send(n.key, null);
                        const u = r.environment.document.getElementById(
                          ''
                            .concat(r.id, '-item-')
                            .concat(t.getState().selectedItemId)
                        );
                        u &&
                          (u.scrollIntoViewIfNeeded
                            ? u.scrollIntoViewIfNeeded(!1)
                            : u.scrollIntoView(!1));
                        const d = dt({ state: t.getState() });
                        if (t.getState().selectedItemId !== null && d) {
                          const p = d.item;
                          const h = d.itemInputValue;
                          const f = d.itemUrl;
                          const m = d.source;
                          m.onHighlight({
                            item: p,
                            itemInputValue: h,
                            itemUrl: f,
                            source: m,
                            state: t.getState(),
                            setSelectedItemId: o,
                            setQuery: a,
                            setCollections: i,
                            setIsOpen: c,
                            setStatus: l,
                            setContext: s,
                            event: n,
                          });
                        }
                      } else if (n.key === 'Escape')
                        n.preventDefault(), t.send(n.key, null);
                      else if (n.key === 'Enter') {
                        if (
                          t.getState().selectedItemId === null ||
                          t
                            .getState()
                            .collections.every((e) => e.items.length === 0)
                        )
                          return;
                        n.preventDefault();
                        const v = dt({ state: t.getState() });
                        const g = v.item;
                        const C = v.itemInputValue;
                        const b = v.itemUrl;
                        const y = v.source;
                        if (n.metaKey || n.ctrlKey)
                          void 0 !== b &&
                            (y.onSelect({
                              item: g,
                              itemInputValue: C,
                              itemUrl: b,
                              source: y,
                              state: t.getState(),
                              setSelectedItemId: o,
                              setQuery: a,
                              setCollections: i,
                              setIsOpen: c,
                              setStatus: l,
                              setContext: s,
                              event: n,
                            }),
                            r.navigator.navigateNewTab({
                              itemUrl: b,
                              item: g,
                              state: t.getState(),
                            }));
                        else if (n.shiftKey)
                          void 0 !== b &&
                            (y.onSelect({
                              item: g,
                              itemInputValue: C,
                              itemUrl: b,
                              source: y,
                              state: t.getState(),
                              setSelectedItemId: o,
                              setQuery: a,
                              setCollections: i,
                              setIsOpen: c,
                              setStatus: l,
                              setContext: s,
                              event: n,
                            }),
                            r.navigator.navigateNewWindow({
                              itemUrl: b,
                              item: g,
                              state: t.getState(),
                            }));
                        else if (n.altKey);
                        else {
                          if (void 0 !== b)
                            return (
                              y.onSelect({
                                item: g,
                                itemInputValue: C,
                                itemUrl: b,
                                source: y,
                                state: t.getState(),
                                setSelectedItemId: o,
                                setQuery: a,
                                setCollections: i,
                                setIsOpen: c,
                                setStatus: l,
                                setContext: s,
                                event: n,
                              }),
                              void r.navigator.navigate({
                                itemUrl: b,
                                item: g,
                                state: t.getState(),
                              })
                            );
                          kt({
                            query: C,
                            event: n,
                            store: t,
                            props: r,
                            setSelectedItemId: o,
                            setQuery: a,
                            setCollections: i,
                            setIsOpen: c,
                            setStatus: l,
                            setContext: s,
                            nextState: { isOpen: !1 },
                            refresh: A,
                          }).then(() => {
                            y.onSelect({
                              item: g,
                              itemInputValue: C,
                              itemUrl: b,
                              source: y,
                              state: t.getState(),
                              setSelectedItemId: o,
                              setQuery: a,
                              setCollections: i,
                              setIsOpen: c,
                              setStatus: l,
                              setContext: s,
                              event: n,
                            });
                          });
                        }
                      }
                    })({
                      event: e,
                      store: n,
                      props: t,
                      setSelectedItemId: r,
                      setQuery: o,
                      setCollections: a,
                      setIsOpen: i,
                      setStatus: c,
                      setContext: l,
                      refresh: s,
                    });
                  },
                  onFocus: A,
                  onBlur() {
                    u || n.send('blur', null);
                  },
                  onClick(r) {
                    e.inputElement !== t.environment.document.activeElement ||
                      n.getState().isOpen ||
                      A(r);
                  },
                },
                f
              );
            },
            getPanelProps(e) {
              return Dt(
                {
                  onMouseDown(e) {
                    e.preventDefault();
                  },
                  onMouseLeave() {
                    n.send('mouseleave', null);
                  },
                },
                e
              );
            },
            getListProps(e) {
              return Dt(
                {
                  role: 'listbox',
                  'aria-labelledby': ''.concat(t.id, '-label'),
                  id: ''.concat(t.id, '-list'),
                },
                e
              );
            },
            getItemProps(e) {
              const A = e.item;
              const u = e.source;
              const d = xt(e, ['item', 'source']);
              return Dt(
                {
                  id: ''.concat(t.id, '-item-').concat(A.__autocomplete_id),
                  role: 'option',
                  'aria-selected':
                    n.getState().selectedItemId === A.__autocomplete_id,
                  onMouseMove(e) {
                    if (A.__autocomplete_id !== n.getState().selectedItemId) {
                      n.send('mousemove', A.__autocomplete_id);
                      const t = dt({ state: n.getState() });
                      if (n.getState().selectedItemId !== null && t) {
                        const s = t.item;
                        const u = t.itemInputValue;
                        const d = t.itemUrl;
                        const p = t.source;
                        p.onHighlight({
                          item: s,
                          itemInputValue: u,
                          itemUrl: d,
                          source: p,
                          state: n.getState(),
                          setSelectedItemId: r,
                          setQuery: o,
                          setCollections: a,
                          setIsOpen: i,
                          setStatus: c,
                          setContext: l,
                          event: e,
                        });
                      }
                    }
                  },
                  onMouseDown(e) {
                    e.preventDefault();
                  },
                  onClick(e) {
                    const d = u.getItemInputValue({
                      item: A,
                      state: n.getState(),
                    });
                    const p = u.getItemUrl({ item: A, state: n.getState() });
                    (p
                      ? Promise.resolve()
                      : kt({
                          query: d,
                          event: e,
                          store: n,
                          props: t,
                          setSelectedItemId: r,
                          setQuery: o,
                          setCollections: a,
                          setIsOpen: i,
                          setStatus: c,
                          setContext: l,
                          refresh: s,
                          nextState: { isOpen: !1 },
                        })
                    ).then(() => {
                      u.onSelect({
                        item: A,
                        itemInputValue: d,
                        itemUrl: p,
                        source: u,
                        state: n.getState(),
                        setSelectedItemId: r,
                        setQuery: o,
                        setCollections: a,
                        setIsOpen: i,
                        setStatus: c,
                        setContext: l,
                        event: e,
                      });
                    });
                  },
                },
                d
              );
            },
          };
        })({
          store: t,
          props: n,
          setSelectedItemId: o,
          setQuery: a,
          setCollections: i,
          setIsOpen: c,
          setStatus: l,
          setContext: s,
          refresh: C,
        });
        const u = A.getEnvironmentProps;
        const d = A.getRootProps;
        const p = A.getFormProps;
        const h = A.getLabelProps;
        const f = A.getInputProps;
        const m = A.getPanelProps;
        const v = A.getListProps;
        const g = A.getItemProps;
        function C() {
          return kt({
            query: t.getState().query,
            event: new Event('input'),
            store: t,
            props: n,
            setSelectedItemId: o,
            setQuery: a,
            setCollections: i,
            setIsOpen: c,
            setStatus: l,
            setContext: s,
            nextState: { isOpen: t.getState().isOpen },
            refresh: C,
          });
        }
        return {
          setSelectedItemId: o,
          setQuery: a,
          setCollections: i,
          setIsOpen: c,
          setStatus: l,
          setContext: s,
          getEnvironmentProps: u,
          getRootProps: d,
          getFormProps: p,
          getInputProps: f,
          getLabelProps: h,
          getPanelProps: m,
          getListProps: v,
          getItemProps: g,
          refresh: C,
        };
      }
      function Ht(e, n) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(
              (n) => Object.getOwnPropertyDescriptor(e, n).enumerable
            )),
            t.push.apply(t, r);
        }
        return t;
      }
      function Nt(e) {
        for (let n = 1; n < arguments.length; n++) {
          var t = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? Ht(Object(t), !0).forEach((n) => {
                Rt(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Ht(Object(t)).forEach((n) => {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function Rt(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function Lt() {
        return Kn.createElement(
          'a',
          {
            href: 'https://www.algolia.com/docsearch',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          Kn.createElement(
            'span',
            { className: 'DocSearch-Label' },
            'Search by'
          ),
          Kn.createElement(
            'svg',
            { width: '77', height: '19' },
            Kn.createElement('path', {
              d:
                'M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z',
              fill: 'currentColor',
              fillRule: 'evenodd',
            })
          )
        );
      }
      function Mt() {
        return Kn.createElement(
          Kn.Fragment,
          null,
          Kn.createElement(
            'div',
            { className: 'DocSearch-Logo' },
            Kn.createElement(Lt, null)
          ),
          Kn.createElement(
            'ul',
            { className: 'DocSearch-Commands' },
            Kn.createElement(
              'li',
              null,
              Kn.createElement(
                'span',
                { className: 'DocSearch-Commands-Key' },
                Kn.createElement(
                  Vt,
                  null,
                  Kn.createElement('path', {
                    d: 'M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3',
                  })
                )
              ),
              Kn.createElement(
                'span',
                { className: 'DocSearch-Label' },
                'to select'
              )
            ),
            Kn.createElement(
              'li',
              null,
              Kn.createElement(
                'span',
                { className: 'DocSearch-Commands-Key' },
                Kn.createElement(
                  Vt,
                  null,
                  Kn.createElement('path', {
                    d: 'M7.5 3.5v8M10.5 8.5l-3 3-3-3',
                  })
                )
              ),
              Kn.createElement(
                'span',
                { className: 'DocSearch-Commands-Key' },
                Kn.createElement(
                  Vt,
                  null,
                  Kn.createElement('path', {
                    d: 'M7.5 11.5v-8M10.5 6.5l-3-3-3 3',
                  })
                )
              ),
              Kn.createElement(
                'span',
                { className: 'DocSearch-Label' },
                'to navigate'
              )
            ),
            Kn.createElement(
              'li',
              null,
              Kn.createElement(
                'span',
                { className: 'DocSearch-Commands-Key' },
                Kn.createElement(
                  Vt,
                  null,
                  Kn.createElement('path', {
                    d:
                      'M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956',
                  })
                )
              ),
              Kn.createElement(
                'span',
                { className: 'DocSearch-Label' },
                'to close'
              )
            )
          )
        );
      }
      function Vt(e) {
        return Kn.createElement(
          'svg',
          { width: '15', height: '15' },
          Kn.createElement(
            'g',
            {
              fill: 'none',
              stroke: 'currentColor',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '1.2',
            },
            e.children
          )
        );
      }
      function Wt(e) {
        const n = e.hit;
        const t = e.children;
        return Kn.createElement('a', { href: n.url }, t);
      }
      function zt() {
        return Kn.createElement(
          'svg',
          {
            viewBox: '0 0 38 38',
            stroke: 'currentColor',
            strokeOpacity: '.5',
          },
          Kn.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            Kn.createElement(
              'g',
              { transform: 'translate(1 1)', strokeWidth: '2' },
              Kn.createElement('circle', {
                strokeOpacity: '.3',
                cx: '18',
                cy: '18',
                r: '18',
              }),
              Kn.createElement(
                'path',
                { d: 'M36 18c0-9.94-8.06-18-18-18' },
                Kn.createElement('animateTransform', {
                  attributeName: 'transform',
                  type: 'rotate',
                  from: '0 18 18',
                  to: '360 18 18',
                  dur: '1s',
                  repeatCount: 'indefinite',
                })
              )
            )
          )
        );
      }
      function qt() {
        return Kn.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20' },
          Kn.createElement(
            'g',
            {
              stroke: 'currentColor',
              fill: 'none',
              fillRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            },
            Kn.createElement('path', {
              d: 'M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0',
            }),
            Kn.createElement('path', {
              d: 'M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13',
            })
          )
        );
      }
      function Gt() {
        return Kn.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20' },
          Kn.createElement('path', {
            d:
              'M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z',
            stroke: 'currentColor',
            fill: 'none',
            fillRule: 'evenodd',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          })
        );
      }
      function Yt() {
        return Kn.createElement(
          'svg',
          {
            className: 'DocSearch-Hit-Select-Icon',
            width: '20',
            height: '20',
            viewBox: '0 0 20 20',
          },
          Kn.createElement(
            'g',
            {
              stroke: 'currentColor',
              fill: 'none',
              fillRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            },
            Kn.createElement('path', { d: 'M18 3v4c0 2-2 4-4 4H2' }),
            Kn.createElement('path', { d: 'M8 17l-6-6 6-6' })
          )
        );
      }
      function Zt(e) {
        switch (e.type) {
          case 'lvl1':
            return Kn.createElement(Qt, null);
          case 'content':
            return Kn.createElement(Kt, null);
          default:
            return Kn.createElement(Jt, null);
        }
      }
      function Qt() {
        return Kn.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20' },
          Kn.createElement('path', {
            d:
              'M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4',
            stroke: 'currentColor',
            fill: 'none',
            fillRule: 'evenodd',
            strokeLinejoin: 'round',
          })
        );
      }
      function Jt() {
        return Kn.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20' },
          Kn.createElement('path', {
            d: 'M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z',
            stroke: 'currentColor',
            fill: 'none',
            fillRule: 'evenodd',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          })
        );
      }
      function Kt() {
        return Kn.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20' },
          Kn.createElement('path', {
            d: 'M17 5H3h14zm0 5H3h14zm0 5H3h14z',
            stroke: 'currentColor',
            fill: 'none',
            fillRule: 'evenodd',
            strokeLinejoin: 'round',
          })
        );
      }
      function Xt() {
        return Kn.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20' },
          Kn.createElement('path', {
            d: 'M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z',
            stroke: 'currentColor',
            fill: 'none',
            fillRule: 'evenodd',
            strokeLinejoin: 'round',
          })
        );
      }
      function $t() {
        return Kn.createElement(
          'svg',
          {
            width: '40',
            height: '40',
            viewBox: '0 0 20 20',
            fill: 'none',
            fillRule: 'evenodd',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          Kn.createElement('path', {
            d:
              'M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0',
          })
        );
      }
      function er() {
        return Kn.createElement(
          'svg',
          {
            width: '40',
            height: '40',
            viewBox: '0 0 20 20',
            fill: 'none',
            fillRule: 'evenodd',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          Kn.createElement('path', {
            d:
              'M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2',
          })
        );
      }
      function nr() {
        return Kn.createElement(
          'div',
          { className: 'DocSearch-ErrorScreen' },
          Kn.createElement(
            'div',
            { className: 'DocSearch-Screen-Icon' },
            Kn.createElement($t, null)
          ),
          Kn.createElement(
            'p',
            { className: 'DocSearch-Title' },
            'Unable to fetch results'
          ),
          Kn.createElement(
            'p',
            { className: 'DocSearch-Help' },
            'You might want to check your network connection.'
          )
        );
      }
      function tr(e, n) {
        (n == null || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function rr(e) {
        const n = e.state.context.searchSuggestions;
        return Kn.createElement(
          'div',
          { className: 'DocSearch-NoResults' },
          Kn.createElement(
            'div',
            { className: 'DocSearch-Screen-Icon' },
            Kn.createElement(er, null)
          ),
          Kn.createElement(
            'p',
            { className: 'DocSearch-Title' },
            'No results for "',
            Kn.createElement('strong', null, e.state.query),
            '"'
          ),
          n &&
            n.length > 0 &&
            Kn.createElement(
              'div',
              { className: 'DocSearch-NoResults-Prefill-List' },
              Kn.createElement(
                'p',
                { className: 'DocSearch-Help' },
                'Try searching for:'
              ),
              Kn.createElement(
                'ul',
                null,
                n.slice(0, 3).reduce(
                  (n, t) =>
                    [].concat(
                      (function (e) {
                        return (
                          (function (e) {
                            if (Array.isArray(e)) return tr(e);
                          })(e) ||
                          (function (e) {
                            if (
                              typeof Symbol !== 'undefined' &&
                              Symbol.iterator in Object(e)
                            )
                              return Array.from(e);
                          })(e) ||
                          (function (e, n) {
                            if (e) {
                              if (typeof e === 'string') return tr(e, n);
                              let t = Object.prototype.toString
                                .call(e)
                                .slice(8, -1);
                              return (
                                t === 'Object' &&
                                  e.constructor &&
                                  (t = e.constructor.name),
                                t === 'Map' || t === 'Set'
                                  ? Array.from(e)
                                  : t === 'Arguments' ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      t
                                    )
                                  ? tr(e, n)
                                  : void 0
                              );
                            }
                          })(e) ||
                          (function () {
                            throw new TypeError(
                              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                            );
                          })()
                        );
                      })(n),
                      [
                        Kn.createElement(
                          'li',
                          { key: t },
                          Kn.createElement(
                            'button',
                            {
                              className: 'DocSearch-Prefill',
                              key: t,
                              onClick() {
                                e.setQuery(t.toLowerCase() + ' '),
                                  e.refresh(),
                                  e.inputRef.current.focus();
                              },
                            },
                            t
                          )
                        ),
                      ]
                    ),
                  []
                )
              )
            ),
          Kn.createElement(
            'p',
            { className: 'DocSearch-Help' },
            'Believe this query should return results?',
            ' ',
            Kn.createElement(
              'a',
              {
                href: 'https://github.com/algolia/docsearch-configs/issues/new?template=Missing_results.md&title=['
                  .concat(e.indexName, ']+Missing+results+for+query+"')
                  .concat(e.state.query, '"'),
                target: '_blank',
                rel: 'noopener noreferrer',
              },
              'Let us know'
            ),
            '.'
          )
        );
      }
      function or(e, n) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(
              (n) => Object.getOwnPropertyDescriptor(e, n).enumerable
            )),
            t.push.apply(t, r);
        }
        return t;
      }
      function ar(e) {
        for (let n = 1; n < arguments.length; n++) {
          var t = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? or(Object(t), !0).forEach((n) => {
                ir(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : or(Object(t)).forEach((n) => {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function ir(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function cr(e, n) {
        return n.split('.').reduce((e, n) => e && e[n], e);
      }
      function lr(e) {
        const n = e.hit;
        const t = e.attribute;
        const r = e.tagName;
        return xe(
          void 0 === r ? 'span' : r,
          ar(
            ar(
              {},
              (function (e, n) {
                if (e == null) return {};
                let t;
                let r;
                const o = (function (e, n) {
                  if (e == null) return {};
                  let t;
                  let r;
                  const o = {};
                  const a = Object.keys(e);
                  for (r = 0; r < a.length; r++)
                    (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                  return o;
                })(e, n);
                if (Object.getOwnPropertySymbols) {
                  const a = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < a.length; r++)
                    (t = a[r]),
                      n.indexOf(t) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(e, t) &&
                          (o[t] = e[t]));
                }
                return o;
              })(e, ['hit', 'attribute', 'tagName'])
            ),
            {},
            {
              dangerouslySetInnerHTML: {
                __html:
                  cr(n, '_snippetResult.'.concat(t, '.value')) || cr(n, t),
              },
            }
          )
        );
      }
      function sr(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(e)) {
              const t = [];
              let r = !0;
              let o = !1;
              let a = void 0;
              try {
                for (
                  var i, c = e[Symbol.iterator]();
                  !(r = (i = c.next()).done) &&
                  (t.push(i.value), !n || t.length !== n);
                  r = !0
                );
              } catch (e) {
                (o = !0), (a = e);
              } finally {
                try {
                  r || c.return == null || c.return();
                } finally {
                  if (o) throw a;
                }
              }
              return t;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if (typeof e === 'string') return Ar(e, n);
              let t = Object.prototype.toString.call(e).slice(8, -1);
              return (
                t === 'Object' && e.constructor && (t = e.constructor.name),
                t === 'Map' || t === 'Set'
                  ? Array.from(e)
                  : t === 'Arguments' ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? Ar(e, n)
                  : void 0
              );
            }
          })(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Ar(e, n) {
        (n == null || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function ur() {
        return (ur =
          Object.assign ||
          function (e) {
            for (let n = 1; n < arguments.length; n++) {
              const t = arguments[n];
              for (const r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function dr(e) {
        return e.collection && e.collection.items.length !== 0
          ? Kn.createElement(
              'section',
              { className: 'DocSearch-Hits' },
              Kn.createElement(
                'div',
                { className: 'DocSearch-Hit-source' },
                e.title
              ),
              Kn.createElement(
                'ul',
                e.getListProps(),
                e.collection.items.map((n, t) =>
                  Kn.createElement(
                    pr,
                    ur(
                      {
                        key: [e.title, n.objectID].join(':'),
                        item: n,
                        index: t,
                      },
                      e
                    )
                  )
                )
              )
            )
          : null;
      }
      function pr(e) {
        const n = e.item;
        const t = e.index;
        const r = e.renderIcon;
        const o = e.renderAction;
        const a = e.getItemProps;
        const i = e.onItemClick;
        const c = e.collection;
        const l = e.hitComponent;
        const s = sr(Kn.useState(!1), 2);
        const A = s[0];
        const u = s[1];
        const d = sr(Kn.useState(!1), 2);
        const p = d[0];
        const h = d[1];
        const f = Kn.useRef(null);
        const m = l;
        return Kn.createElement(
          'li',
          ur(
            {
              className: [
                'DocSearch-Hit',
                n.__docsearch_parent && 'DocSearch-Hit--Child',
                A && 'DocSearch-Hit--deleting',
                p && 'DocSearch-Hit--favoriting',
              ]
                .filter(Boolean)
                .join(' '),
              onTransitionEnd() {
                f.current && f.current();
              },
            },
            a({
              item: n,
              source: c.source,
              onClick() {
                i(n);
              },
            })
          ),
          Kn.createElement(
            m,
            { hit: n },
            Kn.createElement(
              'div',
              { className: 'DocSearch-Hit-Container' },
              r({ item: n, index: t }),
              n.hierarchy[n.type] &&
                n.type === 'lvl1' &&
                Kn.createElement(
                  'div',
                  { className: 'DocSearch-Hit-content-wrapper' },
                  Kn.createElement(lr, {
                    className: 'DocSearch-Hit-title',
                    hit: n,
                    attribute: 'hierarchy.lvl1',
                  }),
                  n.content &&
                    Kn.createElement(lr, {
                      className: 'DocSearch-Hit-path',
                      hit: n,
                      attribute: 'content',
                    })
                ),
              n.hierarchy[n.type] &&
                (n.type === 'lvl2' ||
                  n.type === 'lvl3' ||
                  n.type === 'lvl4' ||
                  n.type === 'lvl5' ||
                  n.type === 'lvl6') &&
                Kn.createElement(
                  'div',
                  { className: 'DocSearch-Hit-content-wrapper' },
                  Kn.createElement(lr, {
                    className: 'DocSearch-Hit-title',
                    hit: n,
                    attribute: 'hierarchy.'.concat(n.type),
                  }),
                  Kn.createElement(lr, {
                    className: 'DocSearch-Hit-path',
                    hit: n,
                    attribute: 'hierarchy.lvl1',
                  })
                ),
              n.type === 'content' &&
                Kn.createElement(
                  'div',
                  { className: 'DocSearch-Hit-content-wrapper' },
                  Kn.createElement(lr, {
                    className: 'DocSearch-Hit-title',
                    hit: n,
                    attribute: 'content',
                  }),
                  Kn.createElement(lr, {
                    className: 'DocSearch-Hit-path',
                    hit: n,
                    attribute: 'hierarchy.lvl1',
                  })
                ),
              o({
                item: n,
                runDeleteTransition(e) {
                  u(!0), (f.current = e);
                },
                runFavoriteTransition(e) {
                  h(!0), (f.current = e);
                },
              })
            )
          )
        );
      }
      function hr() {
        return (hr =
          Object.assign ||
          function (e) {
            for (let n = 1; n < arguments.length; n++) {
              const t = arguments[n];
              for (const r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function fr(e) {
        return Kn.createElement(
          'div',
          { className: 'DocSearch-Dropdown-Container' },
          e.state.collections.map((n, t) => {
            if (n.items.length === 0) return null;
            const r = n.items[0].hierarchy.lvl0;
            return Kn.createElement(
              dr,
              hr({}, e, {
                key: t,
                title: r,
                collection: n,
                renderIcon(e) {
                  let t;
                  const r = e.item;
                  const o = e.index;
                  return Kn.createElement(
                    Kn.Fragment,
                    null,
                    r.__docsearch_parent &&
                      Kn.createElement(
                        'svg',
                        {
                          className: 'DocSearch-Hit-Tree',
                          viewBox: '0 0 24 54',
                        },
                        Kn.createElement(
                          'g',
                          {
                            stroke: 'currentColor',
                            fill: 'none',
                            fillRule: 'evenodd',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          },
                          r.__docsearch_parent !==
                            ((t = n.items[o + 1]) === null || void 0 === t
                              ? void 0
                              : t.__docsearch_parent)
                            ? Kn.createElement('path', {
                                d: 'M8 6v21M20 27H8.3',
                              })
                            : Kn.createElement('path', {
                                d: 'M8 6v42M20 27H8.3',
                              })
                        )
                      ),
                    Kn.createElement(
                      'div',
                      { className: 'DocSearch-Hit-icon' },
                      Kn.createElement(Zt, { type: r.type })
                    )
                  );
                },
                renderAction() {
                  return Kn.createElement(
                    'div',
                    { className: 'DocSearch-Hit-action' },
                    Kn.createElement(Yt, null)
                  );
                },
              })
            );
          }),
          e.resultsFooterComponent &&
            Kn.createElement(
              'section',
              { className: 'DocSearch-HitsFooter' },
              Kn.createElement(e.resultsFooterComponent, { state: e.state })
            )
        );
      }
      function mr() {
        return (mr =
          Object.assign ||
          function (e) {
            for (let n = 1; n < arguments.length; n++) {
              const t = arguments[n];
              for (const r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function vr(e) {
        return e.state.status === 'idle' && !1 === e.hasCollections
          ? e.disableUserPersonalization
            ? null
            : Kn.createElement(
                'div',
                { className: 'DocSearch-StartScreen' },
                Kn.createElement(
                  'p',
                  { className: 'DocSearch-Help' },
                  'No recent searches'
                )
              )
          : !1 === e.hasCollections
          ? null
          : Kn.createElement(
              'div',
              { className: 'DocSearch-Dropdown-Container' },
              Kn.createElement(
                dr,
                mr({}, e, {
                  title: 'Recent',
                  collection: e.state.collections[0],
                  renderIcon() {
                    return Kn.createElement(
                      'div',
                      { className: 'DocSearch-Hit-icon' },
                      Kn.createElement(qt, null)
                    );
                  },
                  renderAction(n) {
                    const t = n.item;
                    const r = n.runFavoriteTransition;
                    const o = n.runDeleteTransition;
                    return Kn.createElement(
                      Kn.Fragment,
                      null,
                      Kn.createElement(
                        'div',
                        { className: 'DocSearch-Hit-action' },
                        Kn.createElement(
                          'button',
                          {
                            className: 'DocSearch-Hit-action-button',
                            title: 'Save this search',
                            onClick(n) {
                              n.preventDefault(),
                                n.stopPropagation(),
                                r(() => {
                                  e.favoriteSearches.add(t),
                                    e.recentSearches.remove(t),
                                    e.refresh();
                                });
                            },
                          },
                          Kn.createElement(Xt, null)
                        )
                      ),
                      Kn.createElement(
                        'div',
                        { className: 'DocSearch-Hit-action' },
                        Kn.createElement(
                          'button',
                          {
                            className: 'DocSearch-Hit-action-button',
                            title: 'Remove this search from history',
                            onClick(n) {
                              n.preventDefault(),
                                n.stopPropagation(),
                                o(() => {
                                  e.recentSearches.remove(t), e.refresh();
                                });
                            },
                          },
                          Kn.createElement(Gt, null)
                        )
                      )
                    );
                  },
                })
              ),
              Kn.createElement(
                dr,
                mr({}, e, {
                  title: 'Favorites',
                  collection: e.state.collections[1],
                  renderIcon() {
                    return Kn.createElement(
                      'div',
                      { className: 'DocSearch-Hit-icon' },
                      Kn.createElement(Xt, null)
                    );
                  },
                  renderAction(n) {
                    const t = n.item;
                    const r = n.runDeleteTransition;
                    return Kn.createElement(
                      'div',
                      { className: 'DocSearch-Hit-action' },
                      Kn.createElement(
                        'button',
                        {
                          className: 'DocSearch-Hit-action-button',
                          title: 'Remove this search from favorites',
                          onClick(n) {
                            n.preventDefault(),
                              n.stopPropagation(),
                              r(() => {
                                e.favoriteSearches.remove(t), e.refresh();
                              });
                          },
                        },
                        Kn.createElement(Gt, null)
                      )
                    );
                  },
                })
              )
            );
      }
      function gr() {
        return (gr =
          Object.assign ||
          function (e) {
            for (let n = 1; n < arguments.length; n++) {
              const t = arguments[n];
              for (const r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      const Cr = Kn.memo(
        (e) => {
          if (e.state.status === 'error') return Kn.createElement(nr, null);
          const n = e.state.collections.some((e) => e.items.length > 0);
          return e.state.query
            ? !1 === n
              ? Kn.createElement(rr, e)
              : Kn.createElement(fr, e)
            : Kn.createElement(vr, gr({}, e, { hasCollections: n }));
        },
        (e, n) => n.state.status === 'loading' || n.state.status === 'stalled'
      );
      function br() {
        return (br =
          Object.assign ||
          function (e) {
            for (let n = 1; n < arguments.length; n++) {
              const t = arguments[n];
              for (const r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function yr(e) {
        const n = e.getFormProps({ inputElement: e.inputRef.current }).onReset;
        return (
          Kn.useEffect(() => {
            e.autoFocus && e.inputRef.current && e.inputRef.current.focus();
          }, [e.autoFocus, e.inputRef]),
          Kn.useEffect(() => {
            e.isFromSelection &&
              e.inputRef.current &&
              e.inputRef.current.select();
          }, [e.isFromSelection, e.inputRef]),
          Kn.createElement(
            Kn.Fragment,
            null,
            Kn.createElement(
              'form',
              {
                className: 'DocSearch-Form',
                onSubmit(e) {
                  e.preventDefault();
                },
                onReset: n,
              },
              Kn.createElement(
                'label',
                br(
                  { className: 'DocSearch-MagnifierLabel' },
                  e.getLabelProps()
                ),
                Kn.createElement($n, null)
              ),
              Kn.createElement(
                'div',
                { className: 'DocSearch-LoadingIndicator' },
                Kn.createElement(zt, null)
              ),
              Kn.createElement(
                'input',
                br(
                  { className: 'DocSearch-Input', ref: e.inputRef },
                  e.getInputProps({
                    inputElement: e.inputRef.current,
                    autoFocus: e.autoFocus,
                    maxLength: 64,
                    enterKeyHint: 'go',
                  })
                )
              ),
              Kn.createElement(
                'button',
                {
                  type: 'reset',
                  title: 'Clear the query',
                  className: 'DocSearch-Reset',
                  hidden: !e.state.query,
                },
                Kn.createElement(Gt, null)
              )
            ),
            Kn.createElement(
              'button',
              { className: 'DocSearch-Cancel', onClick: e.onClose },
              'Cancel'
            )
          )
        );
      }
      function wr(e) {
        const n = e.key;
        const t = e.limit;
        const r = void 0 === t ? 5 : t;
        const o = (function (e) {
          return !1 ===
            (function () {
              const e = '__TEST_KEY__';
              try {
                return (
                  localStorage.setItem(e, ''), localStorage.removeItem(e), !0
                );
              } catch (e) {
                return !1;
              }
            })()
            ? {
                setItem() {},
                getItem() {
                  return [];
                },
              }
            : {
                setItem(n) {
                  return window.localStorage.setItem(e, JSON.stringify(n));
                },
                getItem() {
                  const n = window.localStorage.getItem(e);
                  return n ? JSON.parse(n) : [];
                },
              };
        })(n);
        let a = o.getItem().slice(0, r);
        return {
          add(e) {
            const n = e;
            const t =
              (n._highlightResult,
              n._snippetResult,
              (function (e, n) {
                if (e == null) return {};
                let t;
                let r;
                const o = (function (e, n) {
                  if (e == null) return {};
                  let t;
                  let r;
                  const o = {};
                  const a = Object.keys(e);
                  for (r = 0; r < a.length; r++)
                    (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                  return o;
                })(e, n);
                if (Object.getOwnPropertySymbols) {
                  const a = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < a.length; r++)
                    (t = a[r]),
                      n.indexOf(t) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(e, t) &&
                          (o[t] = e[t]));
                }
                return o;
              })(n, ['_highlightResult', '_snippetResult']));
            const i = a.findIndex((e) => e.objectID === t.objectID);
            i > -1 && a.splice(i, 1),
              a.unshift(t),
              (a = a.slice(0, r)),
              o.setItem(a);
          },
          remove(e) {
            (a = a.filter((n) => n.objectID !== e.objectID)), o.setItem(a);
          },
          getAll() {
            return a;
          },
        };
      }
      function Sr(e) {
        let n;
        const t = 'algoliasearch-client-js-'.concat(e.key);
        const r = function () {
          return void 0 === n && (n = e.localStorage || window.localStorage), n;
        };
        const o = function () {
          return JSON.parse(r().getItem(t) || '{}');
        };
        return {
          get(e, n) {
            const t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                    miss() {
                      return Promise.resolve();
                    },
                  };
            return Promise.resolve()
              .then(() => {
                const t = JSON.stringify(e);
                const r = o()[t];
                return Promise.all([r || n(), void 0 !== r]);
              })
              .then((e) => {
                const n = de(e, 2);
                const r = n[0];
                const o = n[1];
                return Promise.all([r, o || t.miss(r)]);
              })
              .then((e) => de(e, 1)[0]);
          },
          set(e, n) {
            return Promise.resolve().then(() => {
              const a = o();
              return (
                (a[JSON.stringify(e)] = n), r().setItem(t, JSON.stringify(a)), n
              );
            });
          },
          delete(e) {
            return Promise.resolve().then(() => {
              const n = o();
              delete n[JSON.stringify(e)], r().setItem(t, JSON.stringify(n));
            });
          },
          clear() {
            return Promise.resolve().then(() => {
              r().removeItem(t);
            });
          },
        };
      }
      function Er(e) {
        const n = pe(e.caches);
        const t = n.shift();
        return void 0 === t
          ? {
              get(e, n) {
                const t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {
                        miss() {
                          return Promise.resolve();
                        },
                      };
                const r = n();
                return r
                  .then((e) => Promise.all([e, t.miss(e)]))
                  .then((e) => de(e, 1)[0]);
              },
              set(e, n) {
                return Promise.resolve(n);
              },
              delete(e) {
                return Promise.resolve();
              },
              clear() {
                return Promise.resolve();
              },
            }
          : {
              get(e, r) {
                const o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {
                        miss() {
                          return Promise.resolve();
                        },
                      };
                return t
                  .get(e, r, o)
                  .catch(() => Er({ caches: n }).get(e, r, o));
              },
              set(e, r) {
                return t.set(e, r).catch(() => Er({ caches: n }).set(e, r));
              },
              delete(e) {
                return t.delete(e).catch(() => Er({ caches: n }).delete(e));
              },
              clear() {
                return t.clear().catch(() => Er({ caches: n }).clear());
              },
            };
      }
      function _r() {
        const e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : { serializable: !0 };
        let n = {};
        return {
          get(t, r) {
            const o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                    miss() {
                      return Promise.resolve();
                    },
                  };
            const a = JSON.stringify(t);
            if (a in n)
              return Promise.resolve(e.serializable ? JSON.parse(n[a]) : n[a]);
            const i = r();
            const c =
              (o && o.miss) ||
              function () {
                return Promise.resolve();
              };
            return i.then((e) => c(e)).then(() => i);
          },
          set(t, r) {
            return (
              (n[JSON.stringify(t)] = e.serializable ? JSON.stringify(r) : r),
              Promise.resolve(r)
            );
          },
          delete(e) {
            return delete n[JSON.stringify(e)], Promise.resolve();
          },
          clear() {
            return (n = {}), Promise.resolve();
          },
        };
      }
      function kr(e) {
        for (let n = e.length - 1; n > 0; n--) {
          const t = Math.floor(Math.random() * (n + 1));
          const r = e[n];
          (e[n] = e[t]), (e[t] = r);
        }
        return e;
      }
      function xr(e, n) {
        return n
          ? (Object.keys(n).forEach((t) => {
              e[t] = n[t](e);
            }),
            e)
          : e;
      }
      function Br(e) {
        for (
          var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1;
          r < n;
          r++
        )
          t[r - 1] = arguments[r];
        let o = 0;
        return e.replace(/%s/g, () => encodeURIComponent(t[o++]));
      }
      function Dr(e, n) {
        const t = e || {};
        const r = t.data || {};
        return (
          Object.keys(t).forEach((e) => {
            [
              'timeout',
              'headers',
              'queryParameters',
              'data',
              'cacheable',
            ].indexOf(e) === -1 && (r[e] = t[e]);
          }),
          {
            data: Object.entries(r).length > 0 ? r : void 0,
            timeout: t.timeout || n,
            headers: t.headers || {},
            queryParameters: t.queryParameters || {},
            cacheable: t.cacheable,
          }
        );
      }
      const Or = { Read: 1, Write: 2, Any: 3 };
      function Ir(e) {
        const n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return ue(ue({}, e), {}, { status: n, lastUpdate: Date.now() });
      }
      function Fr(e) {
        return typeof e === 'string'
          ? { protocol: 'https', url: e, accept: Or.Any }
          : {
              protocol: e.protocol || 'https',
              url: e.url,
              accept: e.accept || Or.Any,
            };
      }
      const Ur = 'POST';
      function jr(e, n, t, r) {
        const o = [];
        const a = (function (e, n) {
          if (e.method !== 'GET' && (void 0 !== e.data || void 0 !== n.data)) {
            const t = Array.isArray(e.data)
              ? e.data
              : ue(ue({}, e.data), n.data);
            return JSON.stringify(t);
          }
        })(t, r);
        const i = (function (e, n) {
          const t = ue(ue({}, e.headers), n.headers);
          const r = {};
          return (
            Object.keys(t).forEach((e) => {
              const n = t[e];
              r[e.toLowerCase()] = n;
            }),
            r
          );
        })(e, r);
        const c = t.method;
        const l = t.method !== 'GET' ? {} : ue(ue({}, t.data), r.data);
        const s = ue(
          ue(
            ue({ 'x-algolia-agent': e.userAgent.value }, e.queryParameters),
            l
          ),
          r.queryParameters
        );
        let A = 0;
        const u = function n(l, u) {
          const d = l.pop();
          if (void 0 === d)
            throw {
              name: 'RetryError',
              message:
                'Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.',
              transporterStackTrace: Nr(o),
            };
          const p = {
            data: a,
            headers: i,
            method: c,
            url: Pr(d, t.path, s),
            connectTimeout: u(A, e.timeouts.connect),
            responseTimeout: u(A, r.timeout),
          };
          const h = function (e) {
            const n = {
              request: p,
              response: e,
              host: d,
              triesLeft: l.length,
            };
            return o.push(n), n;
          };
          const f = {
            onSucess(e) {
              return (function (e) {
                try {
                  return JSON.parse(e.content);
                } catch (n) {
                  throw (function (e, n) {
                    return {
                      name: 'DeserializationError',
                      message: e,
                      response: n,
                    };
                  })(n.message, e);
                }
              })(e);
            },
            onRetry(t) {
              const r = h(t);
              return (
                t.isTimedOut && A++,
                Promise.all([
                  e.logger.info('Retryable failure', Rr(r)),
                  e.hostsCache.set(d, Ir(d, t.isTimedOut ? 3 : 2)),
                ]).then(() => n(l, u))
              );
            },
            onFail(e) {
              throw (
                (h(e),
                (function (e, n) {
                  const t = e.content;
                  const r = e.status;
                  let o = t;
                  try {
                    o = JSON.parse(t).message;
                  } catch (e) {}
                  return (function (e, n, t) {
                    return {
                      name: 'ApiError',
                      message: e,
                      status: n,
                      transporterStackTrace: t,
                    };
                  })(o, r, n);
                })(e, Nr(o)))
              );
            },
          };
          return e.requester.send(p).then((e) =>
            (function (e, n) {
              return (function (e) {
                const n = e.status;
                return (
                  e.isTimedOut ||
                  (function (e) {
                    const n = e.isTimedOut;
                    const t = e.status;
                    return !n && ~~t == 0;
                  })(e) ||
                  (~~(n / 100) != 2 && ~~(n / 100) != 4)
                );
              })(e)
                ? n.onRetry(e)
                : ~~(e.status / 100) == 2
                ? n.onSucess(e)
                : n.onFail(e);
            })(e, f)
          );
        };
        return (function (e, n) {
          return Promise.all(
            n.map((n) => e.get(n, () => Promise.resolve(Ir(n))))
          ).then((e) => {
            const t = e.filter((e) =>
              (function (e) {
                return e.status === 1 || Date.now() - e.lastUpdate > 12e4;
              })(e)
            );
            const r = e.filter((e) =>
              (function (e) {
                return e.status === 3 && Date.now() - e.lastUpdate <= 12e4;
              })(e)
            );
            const o = [].concat(pe(t), pe(r));
            return {
              getTimeout(e, n) {
                return (r.length === 0 && e === 0 ? 1 : r.length + 3 + e) * n;
              },
              statelessHosts: o.length > 0 ? o.map((e) => Fr(e)) : n,
            };
          });
        })(e.hostsCache, n).then((e) =>
          u(pe(e.statelessHosts).reverse(), e.getTimeout)
        );
      }
      function Tr(e) {
        var n = {
          value: 'Algolia for JavaScript ('.concat(e, ')'),
          add(e) {
            const t = '; '
              .concat(e.segment)
              .concat(void 0 !== e.version ? ' ('.concat(e.version, ')') : '');
            return (
              n.value.indexOf(t) === -1 &&
                (n.value = ''.concat(n.value).concat(t)),
              n
            );
          },
        };
        return n;
      }
      function Pr(e, n, t) {
        const r = Hr(t);
        let o = ''
          .concat(e.protocol, '://')
          .concat(e.url, '/')
          .concat(n.charAt(0) === '/' ? n.substr(1) : n);
        return r.length && (o += '?'.concat(r)), o;
      }
      function Hr(e) {
        return Object.keys(e)
          .map((n) => {
            return Br(
              '%s=%s',
              n,
              ((t = e[n]),
              Object.prototype.toString.call(t) === '[object Object]' ||
              Object.prototype.toString.call(t) === '[object Array]'
                ? JSON.stringify(e[n])
                : e[n])
            );
            let t;
          })
          .join('&');
      }
      function Nr(e) {
        return e.map((e) => Rr(e));
      }
      function Rr(e) {
        const n = e.request.headers['x-algolia-api-key']
          ? { 'x-algolia-api-key': '*****' }
          : {};
        return ue(
          ue({}, e),
          {},
          {
            request: ue(
              ue({}, e.request),
              {},
              { headers: ue(ue({}, e.request.headers), n) }
            ),
          }
        );
      }
      const Lr = function (e) {
        return function (n) {
          const t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = {
            transporter: e.transporter,
            appId: e.appId,
            indexName: n,
          };
          return xr(r, t.methods);
        };
      };
      const Mr = function (e) {
        return function (n, t) {
          const r = n.map((e) =>
            ue(ue({}, e), {}, { params: Hr(e.params || {}) })
          );
          return e.transporter.read(
            {
              method: Ur,
              path: '1/indexes/*/queries',
              data: { requests: r },
              cacheable: !0,
            },
            t
          );
        };
      };
      const Vr = function (e) {
        return function (n, t) {
          return Promise.all(
            n.map((n) => {
              const r = n.params;
              const o = r.facetName;
              const a = r.facetQuery;
              const i = (function (e, n) {
                if (e == null) return {};
                let t;
                let r;
                const o = (function (e, n) {
                  if (e == null) return {};
                  let t;
                  let r;
                  const o = {};
                  const a = Object.keys(e);
                  for (r = 0; r < a.length; r++)
                    (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                  return o;
                })(e, n);
                if (Object.getOwnPropertySymbols) {
                  const a = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < a.length; r++)
                    (t = a[r]),
                      n.indexOf(t) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(e, t) &&
                          (o[t] = e[t]));
                }
                return o;
              })(r, ['facetName', 'facetQuery']);
              return Lr(e)(n.indexName, {
                methods: { searchForFacetValues: qr },
              }).searchForFacetValues(o, a, ue(ue({}, t), i));
            })
          );
        };
      };
      const Wr = function (e) {
        return function (n, t, r) {
          return e.transporter.read(
            {
              method: Ur,
              path: Br('1/answers/%s/prediction', e.indexName),
              data: { query: n, queryLanguages: t },
              cacheable: !0,
            },
            r
          );
        };
      };
      const zr = function (e) {
        return function (n, t) {
          return e.transporter.read(
            {
              method: Ur,
              path: Br('1/indexes/%s/query', e.indexName),
              data: { query: n },
              cacheable: !0,
            },
            t
          );
        };
      };
      var qr = function (e) {
        return function (n, t, r) {
          return e.transporter.read(
            {
              method: Ur,
              path: Br('1/indexes/%s/facets/%s/query', e.indexName, n),
              data: { facetQuery: t },
              cacheable: !0,
            },
            r
          );
        };
      };
      function Gr(e, n, t) {
        const r = {
          appId: e,
          apiKey: n,
          timeouts: { connect: 1, read: 2, write: 30 },
          requester: {
            send(e) {
              return new Promise((n) => {
                const t = new XMLHttpRequest();
                t.open(e.method, e.url, !0),
                  Object.keys(e.headers).forEach((n) =>
                    t.setRequestHeader(n, e.headers[n])
                  );
                let r;
                const o = function (e, r) {
                  return setTimeout(() => {
                    t.abort(), n({ status: 0, content: r, isTimedOut: !0 });
                  }, 1e3 * e);
                };
                const a = o(e.connectTimeout, 'Connection timeout');
                (t.onreadystatechange = function () {
                  t.readyState > t.OPENED &&
                    void 0 === r &&
                    (clearTimeout(a),
                    (r = o(e.responseTimeout, 'Socket timeout')));
                }),
                  (t.onerror = function () {
                    t.status === 0 &&
                      (clearTimeout(a),
                      clearTimeout(r),
                      n({
                        content: t.responseText || 'Network request failed',
                        status: t.status,
                        isTimedOut: !1,
                      }));
                  }),
                  (t.onload = function () {
                    clearTimeout(a),
                      clearTimeout(r),
                      n({
                        content: t.responseText,
                        status: t.status,
                        isTimedOut: !1,
                      });
                  }),
                  t.send(e.data);
              });
            },
          },
          logger: {
            debug(e, n) {
              return Promise.resolve();
            },
            info(e, n) {
              return Promise.resolve();
            },
            error(e, n) {
              return console.error(e, n), Promise.resolve();
            },
          },
          responsesCache: _r(),
          requestsCache: _r({ serializable: !1 }),
          hostsCache: Er({
            caches: [Sr({ key: ''.concat('4.8.1', '-').concat(e) }), _r()],
          }),
          userAgent: Tr('4.8.1').add({ segment: 'Browser', version: 'lite' }),
          authMode: 0,
        };
        return (function (e) {
          const n = e.appId;
          const t = (function (e, n, t) {
            const r = {
              'x-algolia-api-key': t,
              'x-algolia-application-id': n,
            };
            return {
              headers() {
                return e === 1 ? r : {};
              },
              queryParameters() {
                return e === 0 ? r : {};
              },
            };
          })(void 0 !== e.authMode ? e.authMode : 1, n, e.apiKey);
          const r = (function (e) {
            const n = e.hostsCache;
            const t = e.logger;
            const r = e.requester;
            const o = e.requestsCache;
            const a = e.responsesCache;
            const i = e.timeouts;
            const c = e.userAgent;
            const l = e.hosts;
            const s = e.queryParameters;
            var A = {
              hostsCache: n,
              logger: t,
              requester: r,
              requestsCache: o,
              responsesCache: a,
              timeouts: i,
              userAgent: c,
              headers: e.headers,
              queryParameters: s,
              hosts: l.map((e) => Fr(e)),
              read(e, n) {
                const t = Dr(n, A.timeouts.read);
                const r = function () {
                  return jr(
                    A,
                    A.hosts.filter((e) => (e.accept & Or.Read) != 0),
                    e,
                    t
                  );
                };
                if (!0 !== (void 0 !== t.cacheable ? t.cacheable : e.cacheable))
                  return r();
                const o = {
                  request: e,
                  mappedRequestOptions: t,
                  transporter: {
                    queryParameters: A.queryParameters,
                    headers: A.headers,
                  },
                };
                return A.responsesCache.get(
                  o,
                  () =>
                    A.requestsCache.get(o, () =>
                      A.requestsCache
                        .set(o, r())
                        .then(
                          (e) => Promise.all([A.requestsCache.delete(o), e]),
                          (e) =>
                            Promise.all([
                              A.requestsCache.delete(o),
                              Promise.reject(e),
                            ])
                        )
                        .then((e) => {
                          const n = de(e, 2);
                          return n[0], n[1];
                        })
                    ),
                  {
                    miss(e) {
                      return A.responsesCache.set(o, e);
                    },
                  }
                );
              },
              write(e, n) {
                return jr(
                  A,
                  A.hosts.filter((e) => (e.accept & Or.Write) != 0),
                  e,
                  Dr(n, A.timeouts.write)
                );
              },
            };
            return A;
          })(
            ue(
              ue(
                {
                  hosts: [
                    {
                      url: ''.concat(n, '-dsn.algolia.net'),
                      accept: Or.Read,
                    },
                    { url: ''.concat(n, '.algolia.net'), accept: Or.Write },
                  ].concat(
                    kr([
                      { url: ''.concat(n, '-1.algolianet.com') },
                      { url: ''.concat(n, '-2.algolianet.com') },
                      { url: ''.concat(n, '-3.algolianet.com') },
                    ])
                  ),
                },
                e
              ),
              {},
              {
                headers: ue(
                  ue(ue({}, t.headers()), {
                    'content-type': 'application/x-www-form-urlencoded',
                  }),
                  e.headers
                ),
                queryParameters: ue(
                  ue({}, t.queryParameters()),
                  e.queryParameters
                ),
              }
            )
          );
          return xr(
            {
              transporter: r,
              appId: n,
              addAlgoliaAgent(e, n) {
                r.userAgent.add({ segment: e, version: n });
              },
              clearCache() {
                return Promise.all([
                  r.requestsCache.clear(),
                  r.responsesCache.clear(),
                ]).then(() => {});
              },
            },
            e.methods
          );
        })(
          ue(
            ue(ue({}, r), t),
            {},
            {
              methods: {
                search: Mr,
                searchForFacetValues: Vr,
                multipleQueries: Mr,
                multipleSearchForFacetValues: Vr,
                initIndex(e) {
                  return function (n) {
                    return Lr(e)(n, {
                      methods: {
                        search: zr,
                        searchForFacetValues: qr,
                        findAnswers: Wr,
                      },
                    });
                  };
                },
              },
            }
          )
        );
      }
      function Yr(e, n) {
        return e.reduce((e, t) => {
          const r = n(t);
          return (
            e.hasOwnProperty(r) || (e[r] = []),
            e[r].length < 5 && e[r].push(t),
            e
          );
        }, {});
      }
      function Zr(e) {
        return e;
      }
      function Qr() {}
      function Jr() {
        return (Jr =
          Object.assign ||
          function (e) {
            for (let n = 1; n < arguments.length; n++) {
              const t = arguments[n];
              for (const r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Kr(e, n) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(
              (n) => Object.getOwnPropertyDescriptor(e, n).enumerable
            )),
            t.push.apply(t, r);
        }
        return t;
      }
      function Xr(e) {
        for (let n = 1; n < arguments.length; n++) {
          var t = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? Kr(Object(t), !0).forEach((n) => {
                $r(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Kr(Object(t)).forEach((n) => {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function $r(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function eo(e, n) {
        (n == null || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function no(e) {
        const n = e.appId;
        const t = void 0 === n ? 'BH4D9OD16A' : n;
        const r = e.apiKey;
        const o = e.indexName;
        const a = e.placeholder;
        const i = void 0 === a ? 'Search docs' : a;
        const c = e.searchParameters;
        const l = e.onClose;
        const s = void 0 === l ? Qr : l;
        const A = e.transformItems;
        const u = void 0 === A ? Zr : A;
        const d = e.hitComponent;
        const p = void 0 === d ? Wt : d;
        const h = e.resultsFooterComponent;
        const f =
          void 0 === h
            ? function () {
                return null;
              }
            : h;
        const m = e.navigator;
        const v = e.initialScrollY;
        const g = void 0 === v ? 0 : v;
        const C = e.transformSearchClient;
        const b = void 0 === C ? Zr : C;
        const y = e.disableUserPersonalization;
        const w = void 0 !== y && y;
        const S = e.initialQuery;
        const E = void 0 === S ? '' : S;
        const _ = (function (e, n) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, n) {
              if (
                typeof Symbol !== 'undefined' &&
                Symbol.iterator in Object(e)
              ) {
                const t = [];
                let r = !0;
                let o = !1;
                let a = void 0;
                try {
                  for (
                    var i, c = e[Symbol.iterator]();
                    !(r = (i = c.next()).done) &&
                    (t.push(i.value), t.length !== 2);
                    r = !0
                  );
                } catch (e) {
                  (o = !0), (a = e);
                } finally {
                  try {
                    r || c.return == null || c.return();
                  } finally {
                    if (o) throw a;
                  }
                }
                return t;
              }
            })(e) ||
            (function (e, n) {
              if (e) {
                if (typeof e === 'string') return eo(e, 2);
                let t = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  t === 'Object' && e.constructor && (t = e.constructor.name),
                  t === 'Map' || t === 'Set'
                    ? Array.from(e)
                    : t === 'Arguments' ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? eo(e, 2)
                    : void 0
                );
              }
            })(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        })(
          Kn.useState({
            query: '',
            collections: [],
            completion: null,
            context: {},
            isOpen: !1,
            selectedItemId: null,
            status: 'idle',
          })
        );
        const k = _[0];
        const x = _[1];
        const B = Kn.useRef(null);
        const D = Kn.useRef(null);
        const O = Kn.useRef(null);
        const I = Kn.useRef(null);
        const F = Kn.useRef(null);
        const U = Kn.useRef(10);
        const j = Kn.useRef(
          typeof window !== 'undefined'
            ? window.getSelection().toString().slice(0, 64)
            : ''
        ).current;
        const T = Kn.useRef(E || j).current;
        const P = (function (e, n, t) {
          return Kn.useMemo(() => {
            const r = Gr(e, n);
            return (
              r.addAlgoliaAgent('docsearch', '3.0.0-alpha.33'),
              !1 ===
                /docsearch.js \(.*\)/.test(r.transporter.userAgent.value) &&
                r.addAlgoliaAgent('docsearch-react', '3.0.0-alpha.33'),
              t(r)
            );
          }, [e, n, t]);
        })(t, r, b);
        const H = Kn.useRef(
          wr({
            key: '__DOCSEARCH_FAVORITE_SEARCHES__'.concat(o),
            limit: 10,
          })
        ).current;
        const N = Kn.useRef(
          wr({
            key: '__DOCSEARCH_RECENT_SEARCHES__'.concat(o),
            limit: H.getAll().length === 0 ? 7 : 4,
          })
        ).current;
        const R = Kn.useCallback(
          (e) => {
            if (!w) {
              const n = e.type === 'content' ? e.__docsearch_parent : e;
              n &&
                H.getAll().findIndex((e) => e.objectID === n.objectID) === -1 &&
                N.add(n);
            }
          },
          [H, N, w]
        );
        const L = Kn.useMemo(
          () =>
            Pt({
              id: 'docsearch',
              defaultSelectedItemId: 0,
              placeholder: i,
              openOnFocus: !0,
              initialState: {
                query: T,
                context: { searchSuggestions: [] },
              },
              navigator: m,
              onStateChange(e) {
                const n = e.state;
                x(n);
              },
              getSources(e) {
                const n = e.query;
                const t = e.state;
                const r = e.setContext;
                const a = e.setStatus;
                return n
                  ? (function (e) {
                      return (function (e) {
                        const n = e.searchClient;
                        const t = e.queries;
                        return (
                          typeof n.addAlgoliaAgent === 'function' &&
                            n.addAlgoliaAgent(
                              'autocomplete-core',
                              '1.0.0-alpha.35'
                            ),
                          n.search(
                            t.map((e) => ({
                              indexName: e.indexName,
                              query: e.query,
                              params: Nt(
                                {
                                  hitsPerPage: 5,
                                  highlightPreTag: '__aa-highlight__',
                                  highlightPostTag: '__/aa-highlight__',
                                },
                                e.params
                              ),
                            }))
                          )
                        );
                      })({
                        searchClient: e.searchClient,
                        queries: e.queries,
                      }).then((e) => e.results);
                    })({
                      searchClient: P,
                      queries: [
                        {
                          indexName: o,
                          query: n,
                          params: Xr(
                            {
                              attributesToRetrieve: [
                                'hierarchy.lvl0',
                                'hierarchy.lvl1',
                                'hierarchy.lvl2',
                                'hierarchy.lvl3',
                                'hierarchy.lvl4',
                                'hierarchy.lvl5',
                                'hierarchy.lvl6',
                                'content',
                                'type',
                                'url',
                              ],
                              attributesToSnippet: [
                                'hierarchy.lvl1:'.concat(U.current),
                                'hierarchy.lvl2:'.concat(U.current),
                                'hierarchy.lvl3:'.concat(U.current),
                                'hierarchy.lvl4:'.concat(U.current),
                                'hierarchy.lvl5:'.concat(U.current),
                                'hierarchy.lvl6:'.concat(U.current),
                                'content:'.concat(U.current),
                              ],
                              snippetEllipsisText: '…',
                              highlightPreTag: '<mark>',
                              highlightPostTag: '</mark>',
                              hitsPerPage: 20,
                            },
                            c
                          ),
                        },
                      ],
                    })
                      .catch((e) => {
                        throw (e.name === 'RetryError' && a('error'), e);
                      })
                      .then((e) => {
                        const n = e[0].hits;
                        const o = e[0].nbHits;
                        const a = Yr(n, (e) => e.hierarchy.lvl0);
                        return (
                          t.context.searchSuggestions.length <
                            Object.keys(a).length &&
                            r({ searchSuggestions: Object.keys(a) }),
                          r({ nbHits: o }),
                          Object.values(a).map((e) => ({
                            onSelect(e) {
                              const n = e.item;
                              const t = e.event;
                              R(n), t.shiftKey || t.ctrlKey || t.metaKey || s();
                            },
                            getItemUrl(e) {
                              return e.item.url;
                            },
                            getItems() {
                              return Object.values(
                                Yr(e, (e) => e.hierarchy.lvl1)
                              )
                                .map(u)
                                .map((e) =>
                                  e.map((n) => Xr(
                                      Xr({}, n),
                                      {},
                                      {
                                        __docsearch_parent:
                                          n.type !== 'lvl1' &&
                                          e.find((e) => (
                                              e.type === 'lvl1' &&
                                              e.hierarchy.lvl1 ===
                                                n.hierarchy.lvl1
                                            )),
                                      }
                                    ))
                                )
                                .flat();
                            },
                          }))
                        );
                      })
                  : w
                  ? []
                  : [
                      {
                        onSelect(e) {
                          const n = e.item;
                          const t = e.event;
                          R(n), t.shiftKey || t.ctrlKey || t.metaKey || s();
                        },
                        getItemUrl(e) {
                          return e.item.url;
                        },
                        getItems() {
                          return N.getAll();
                        },
                      },
                      {
                        onSelect(e) {
                          const n = e.item;
                          const t = e.event;
                          R(n), t.shiftKey || t.ctrlKey || t.metaKey || s();
                        },
                        getItemUrl(e) {
                          return e.item.url;
                        },
                        getItems() {
                          return H.getAll();
                        },
                      },
                    ];
              },
            }),
          [o, c, P, s, N, H, R, T, i, m, u, w]
        );
        const M = L.getEnvironmentProps;
        const V = L.getRootProps;
        const W = L.refresh;
        return (
          (function (e) {
            const n = e.getEnvironmentProps;
            const t = e.panelElement;
            const r = e.searchBoxElement;
            const o = e.inputElement;
            Kn.useEffect(() => {
              if (t && r && o) {
                const e = n({
                  panelElement: t,
                  searchBoxElement: r,
                  inputElement: o,
                });
                const a = e.onTouchStart;
                const i = e.onTouchMove;
                return (
                  window.addEventListener('touchstart', a),
                  window.addEventListener('touchmove', i),
                  function () {
                    window.removeEventListener('touchstart', a),
                      window.removeEventListener('touchmove', i);
                  }
                );
              }
            }, [n, t, r, o]);
          })({
            getEnvironmentProps: M,
            panelElement: I.current,
            searchBoxElement: O.current,
            inputElement: F.current,
          }),
          (function (e) {
            const n = e.container;
            Kn.useEffect(() => {
              if (n) {
                const e = n.querySelectorAll(
                  'a[href]:not([disabled]), button:not([disabled]), input:not([disabled])'
                );
                var t = e[0];
                var r = e[e.length - 1];
                return (
                  n.addEventListener('keydown', o),
                  function () {
                    n.removeEventListener('keydown', o);
                  }
                );
              }
              function o(e) {
                e.key === 'Tab' &&
                  (e.shiftKey
                    ? document.activeElement === t &&
                      (e.preventDefault(), r.focus())
                    : document.activeElement === r &&
                      (e.preventDefault(), t.focus()));
              }
            }, [n]);
          })({ container: B.current }),
          Kn.useEffect(
            () => (
              document.body.classList.add('DocSearch--active'),
              function () {
                let e;
                let n;
                document.body.classList.remove('DocSearch--active'),
                  (e = (n = window).scrollTo) === null ||
                    void 0 === e ||
                    e.call(n, 0, g);
              }
            ),
            []
          ),
          Kn.useEffect(() => {
            window.matchMedia('(max-width: 750px)').matches && (U.current = 5);
          }, []),
          Kn.useEffect(() => {
            I.current && (I.current.scrollTop = 0);
          }, [k.query]),
          Kn.useEffect(() => {
            T.length > 0 && (W(), F.current && F.current.focus());
          }, [T, W]),
          Kn.useEffect(() => {
            function e() {
              if (D.current) {
                const e = 0.01 * window.innerHeight;
                D.current.style.setProperty(
                  '--docsearch-vh',
                  ''.concat(e, 'px')
                );
              }
            }
            return (
              e(),
              window.addEventListener('resize', e),
              function () {
                window.removeEventListener('resize', e);
              }
            );
          }, []),
          Kn.createElement(
            'div',
            Jr({ ref: B }, V({ 'aria-expanded': !0 }), {
              className: [
                'DocSearch',
                'DocSearch-Container',
                k.status === 'stalled' && 'DocSearch-Container--Stalled',
                k.status === 'error' && 'DocSearch-Container--Errored',
              ]
                .filter(Boolean)
                .join(' '),
              onMouseDown(e) {
                e.target === e.currentTarget && s();
              },
            }),
            Kn.createElement(
              'div',
              { className: 'DocSearch-Modal', ref: D },
              Kn.createElement(
                'header',
                { className: 'DocSearch-SearchBar', ref: O },
                Kn.createElement(
                  yr,
                  Jr({}, L, {
                    state: k,
                    autoFocus: T.length === 0,
                    onClose: s,
                    inputRef: F,
                    isFromSelection: Boolean(T) && T === j,
                  })
                )
              ),
              Kn.createElement(
                'div',
                { className: 'DocSearch-Dropdown', ref: I },
                Kn.createElement(
                  Cr,
                  Jr({}, L, {
                    indexName: o,
                    state: k,
                    hitComponent: p,
                    resultsFooterComponent: f,
                    disableUserPersonalization: w,
                    recentSearches: N,
                    favoriteSearches: H,
                    onItemClick(e) {
                      R(e), s();
                    },
                    inputRef: F,
                  })
                )
              ),
              Kn.createElement(
                'footer',
                { className: 'DocSearch-Footer' },
                Kn.createElement(Mt, null)
              )
            )
          )
        );
      }
      function to() {
        return (to =
          Object.assign ||
          function (e) {
            for (let n = 1; n < arguments.length; n++) {
              const t = arguments[n];
              for (const r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function ro(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(e)) {
              const t = [];
              let r = !0;
              let o = !1;
              let a = void 0;
              try {
                for (
                  var i, c = e[Symbol.iterator]();
                  !(r = (i = c.next()).done) &&
                  (t.push(i.value), !n || t.length !== n);
                  r = !0
                );
              } catch (e) {
                (o = !0), (a = e);
              } finally {
                try {
                  r || c.return == null || c.return();
                } finally {
                  if (o) throw a;
                }
              }
              return t;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if (typeof e === 'string') return oo(e, n);
              let t = Object.prototype.toString.call(e).slice(8, -1);
              return (
                t === 'Object' && e.constructor && (t = e.constructor.name),
                t === 'Map' || t === 'Set'
                  ? Array.from(e)
                  : t === 'Arguments' ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? oo(e, n)
                  : void 0
              );
            }
          })(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function oo(e, n) {
        (n == null || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function ao(e) {
        const n = Kn.useRef(null);
        const t = ro(Kn.useState(!1), 2);
        const r = t[0];
        const o = t[1];
        const a = ro(Kn.useState(void 0), 2);
        const i = a[0];
        const c = a[1];
        const l = Kn.useCallback(() => {
          o(!0);
        }, [o]);
        const s = Kn.useCallback(() => {
          o(!1);
        }, [o]);
        return (
          (function (e) {
            const n = e.isOpen;
            const t = e.onOpen;
            const r = e.onClose;
            const o = e.onInput;
            const a = e.searchButtonRef;
            Kn.useEffect(() => {
              function e(e) {
                ((e.keyCode === 27 && n) ||
                  (e.key === 'k' && (e.metaKey || e.ctrlKey)) ||
                  (!(function (e) {
                    const n = e.target;
                    const t = n.tagName;
                    return (
                      n.isContentEditable ||
                      t === 'INPUT' ||
                      t === 'SELECT' ||
                      t === 'TEXTAREA'
                    );
                  })(e) &&
                    e.key === '/' &&
                    !n)) &&
                  (e.preventDefault(),
                  n
                    ? r()
                    : document.body.classList.contains('DocSearch--active') ||
                      document.body.classList.contains('DocSearch--active') ||
                      t()),
                  a &&
                    a.current === document.activeElement &&
                    o &&
                    /[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode)) &&
                    o(e);
              }
              return (
                window.addEventListener('keydown', e),
                function () {
                  window.removeEventListener('keydown', e);
                }
              );
            }, [n, t, r, o, a]);
          })({
            isOpen: r,
            onOpen: l,
            onClose: s,
            onInput: Kn.useCallback(
              (e) => {
                o(!0), c(e.key);
              },
              [o, c]
            ),
            searchButtonRef: n,
          }),
          Kn.createElement(
            Kn.Fragment,
            null,
            Kn.createElement(tt, { onClick: l, ref: n }),
            r &&
              Hn(
                Kn.createElement(
                  no,
                  to({}, e, {
                    initialScrollY: window.scrollY,
                    initialQuery: i,
                    onClose: s,
                  })
                ),
                document.body
              )
          )
        );
      }
      function io(e, n) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(
              (n) => Object.getOwnPropertyDescriptor(e, n).enumerable
            )),
            t.push.apply(t, r);
        }
        return t;
      }
      function co(e) {
        for (let n = 1; n < arguments.length; n++) {
          var t = arguments[n] != null ? arguments[n] : {};
          n % 2
            ? io(Object(t), !0).forEach((n) => {
                lo(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : io(Object(t)).forEach((n) => {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function lo(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      Gr.version = '4.8.1';
      const so = {
        name: 'VanDocSearch',
        props: { lang: String, searchConfig: Object },
        watch: {
          lang() {
            this.initDocsearch();
          },
        },
        mounted() {
          this.initDocsearch();
        },
        methods: {
          initDocsearch() {
            this.searchConfig &&
              (function (e) {
                Mn(
                  Kn.createElement(
                    ao,
                    se({}, e, {
                      transformSearchClient(n) {
                        return (
                          n.addAlgoliaAgent('docsearch.js', '3.0.0-alpha.33'),
                          e.transformSearchClient
                            ? e.transformSearchClient(n)
                            : n
                        );
                      },
                    })
                  ),
                  (function (e) {
                    const n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : window;
                    return typeof e === 'string'
                      ? n.document.querySelector(e)
                      : e;
                  })(e.container, e.environment)
                );
              })(
                co(co({}, this.searchConfig), {}, { container: '#docsearch' })
              );
          },
        },
      };
      const Ao = t(7361);
      V()(Ao.Z, { insert: 'head', singleton: !1 }),
        Ao.Z.locals,
        (so.render = function (e, n, t, r, o, a) {
          return (0, F.wg)(), (0, F.iD)('div', ae);
        });
      const uo = {
        name: 'VanDocHeader',
        components: { SearchInput: so },
        props: {
          lang: String,
          config: Object,
          versions: Array,
          langConfigs: Array,
        },
        data: () => ({ packageVersion: '1.0.0-beta', showVersionPop: !1 }),
        computed: {
          langLink() {
            return '#'.concat(
              this.$route.path.replace(this.lang, this.anotherLang.lang)
            );
          },
          langLabel() {
            return this.anotherLang.label;
          },
          anotherLang() {
            const e = this.langConfigs.filter((e) => e.lang !== this.lang);
            return e.length ? e[0] : {};
          },
          searchConfig() {
            return this.config.searchConfig;
          },
        },
        methods: {
          toggleVersionPop() {
            const e = !this.showVersionPop;
            const n = e ? 'add' : 'remove';
            document.body[''.concat(n, 'EventListener')](
              'click',
              this.checkHideVersionPop
            ),
              (this.showVersionPop = e);
          },
          checkHideVersionPop(e) {
            this.$refs.version.contains(e.target) || (this.showVersionPop = !1);
          },
          onSwitchLang(e) {
            this.$router.push(this.$route.path.replace(e.from, e.to));
          },
          onSwitchVersion(e) {
            e.link && (location.href = e.link);
          },
        },
      };
      const po = t(6399);
      V()(po.Z, { insert: 'head', singleton: !1 }),
        po.Z.locals,
        (uo.render = function (e, n, t, o, a, i) {
          const c = (0, F.up)('search-input');
          return (
            (0, F.wg)(),
            (0, F.iD)('div', q, [
              (0, F._)('div', G, [
                (0, F._)('div', Y, [
                  (0, F._)('a', Z, [
                    (0, F._)('img', { src: t.config.logo }, null, 8, Q),
                    (0, F._)('span', null, (0, T.zw)(t.config.title), 1),
                  ]),
                  (0, F._)('ul', J, [
                    ((0, F.wg)(!0),
                    (0, F.iD)(
                      F.HY,
                      null,
                      (0, F.Ko)(
                        t.config.links,
                        (e, n) => (
                          (0, F.wg)(),
                          (0, F.iD)(
                            'li',
                            { key: n, class: 'van-doc-header__top-nav-item' },
                            [
                              (0, F._)(
                                'a',
                                {
                                  class: 'van-doc-header__link',
                                  target: '_blank',
                                  href: e.url,
                                },
                                [
                                  e.logo
                                    ? ((0, F.wg)(),
                                      (0, F.iD)(
                                        'img',
                                        { key: 0, src: e.logo },
                                        null,
                                        8,
                                        X
                                      ))
                                    : e.text
                                    ? ((0, F.wg)(),
                                      (0, F.iD)(
                                        'span',
                                        $,
                                        (0, T.zw)(e.text),
                                        1
                                      ))
                                    : (0, F.kq)('v-if', !0),
                                ],
                                8,
                                K
                              ),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                    t.versions
                      ? ((0, F.wg)(),
                        (0, F.iD)(
                          'li',
                          ee,
                          [
                            (0, F._)(
                              'span',
                              {
                                class:
                                  'van-doc-header__cube van-doc-header__version',
                                onClick:
                                  n[0] ||
                                  (n[0] = function () {
                                    return (
                                      i.toggleVersionPop &&
                                      i.toggleVersionPop(...arguments)
                                    );
                                  }),
                              },
                              [
                                (0, F.Uk)((0, T.zw)(a.packageVersion) + ' ', 1),
                                (0, F.Wm)(
                                  r.uT,
                                  { name: 'van-doc-dropdown' },
                                  {
                                    default: (0, F.w5)(() => [
                                      a.showVersionPop
                                        ? ((0, F.wg)(),
                                          (0, F.iD)('div', ne, [
                                            ((0, F.wg)(!0),
                                            (0, F.iD)(
                                              F.HY,
                                              null,
                                              (0, F.Ko)(
                                                t.versions,
                                                (e, n) => (
                                                  (0, F.wg)(),
                                                  (0, F.iD)(
                                                    'div',
                                                    {
                                                      key: n,
                                                      class:
                                                        'van-doc-header__version-pop-item',
                                                      onClick: (n) =>
                                                        i.onSwitchVersion(e),
                                                    },
                                                    (0, T.zw)(e.label),
                                                    9,
                                                    te
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ]))
                                        : (0, F.kq)('v-if', !0),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]
                            ),
                          ],
                          512
                        ))
                      : (0, F.kq)('v-if', !0),
                    i.langLabel && i.langLink
                      ? ((0, F.wg)(),
                        (0, F.iD)('li', re, [
                          (0, F._)(
                            'a',
                            {
                              class: 'van-doc-header__cube',
                              href: i.langLink,
                            },
                            (0, T.zw)(i.langLabel),
                            9,
                            oe
                          ),
                        ]))
                      : (0, F.kq)('v-if', !0),
                    i.searchConfig
                      ? ((0, F.wg)(),
                        (0, F.j4)(
                          c,
                          {
                            key: 2,
                            lang: t.lang,
                            'search-config': i.searchConfig,
                          },
                          null,
                          8,
                          ['lang', 'search-config']
                        ))
                      : (0, F.kq)('v-if', !0),
                  ]),
                ]),
              ]),
            ])
          );
        });
      const ho = uo;
      const fo = {
        name: 'VanDocContent',
        computed: {
          currentPage() {
            const { path: e } = this.$route;
            return e ? e.split('/').slice(-1)[0] : this.$route.name;
          },
        },
      };
      const mo = t(8570);
      V()(mo.Z, { insert: 'head', singleton: !1 }),
        mo.Z.locals,
        (fo.render = function (e, n, t, r, o, a) {
          return (
            (0, F.wg)(),
            (0, F.iD)(
              'div',
              {
                class: (0, T.C_)([
                  'van-doc-content',
                  'van-doc-content--'.concat(a.currentPage),
                ]),
              },
              [(0, F.WI)(e.$slots, 'default')],
              2
            )
          );
        });
      const vo = fo;
      const go = { name: 'VanDocContainer', props: { hasSimulator: Boolean } };
      const Co = t(484);
      V()(Co.Z, { insert: 'head', singleton: !1 }),
        Co.Z.locals,
        (go.render = function (e, n, t, r, o, a) {
          return (
            (0, F.wg)(),
            (0, F.iD)(
              'div',
              {
                class: (0, T.C_)([
                  'van-doc-container van-doc-row',
                  { 'van-doc-container--with-simulator': t.hasSimulator },
                ]),
              },
              [(0, F.WI)(e.$slots, 'default')],
              2
            )
          );
        });
      const bo = go;
      const yo = ['src'];
      const wo = {
        name: 'VanDocSimulator',
        props: { src: String },
        data: () => ({
          scrollTop: window.scrollY,
          windowHeight: window.innerHeight,
        }),
        computed: {
          isFixed() {
            return this.scrollTop > 60;
          },
          simulatorStyle() {
            return { height: Math.min(640, this.windowHeight - 90) + 'px' };
          },
        },
        mounted() {
          window.addEventListener('scroll', () => {
            this.scrollTop = window.scrollY;
          }),
            window.addEventListener('resize', () => {
              this.windowHeight = window.innerHeight;
            });
        },
      };
      const So = t(7241);
      V()(So.Z, { insert: 'head', singleton: !1 }),
        So.Z.locals,
        (wo.render = function (e, n, t, r, o, a) {
          return (
            (0, F.wg)(),
            (0, F.iD)(
              'div',
              {
                class: (0, T.C_)([
                  'van-doc-simulator',
                  { 'van-doc-simulator-fixed': a.isFixed },
                ]),
              },
              [
                (0, F._)(
                  'iframe',
                  {
                    ref: 'iframe',
                    src: t.src,
                    style: (0, T.j5)(a.simulatorStyle),
                    frameborder: '0',
                  },
                  null,
                  12,
                  yo
                ),
              ],
              2
            )
          );
        });
      const Eo = {
        name: 'VanDoc',
        components: {
          DocNav: z,
          DocHeader: ho,
          DocContent: vo,
          DocContainer: bo,
          DocSimulator: wo,
        },
        props: {
          lang: String,
          versions: Array,
          simulator: String,
          hasSimulator: Boolean,
          langConfigs: Array,
          config: { type: Object, required: !0 },
          base: { type: String, default: '' },
        },
        emits: ['switch-version'],
        watch: {
          $route() {
            this.setNav();
          },
        },
        created() {
          this.setNav(), this.keyboardHandler();
        },
        methods: {
          setNav() {
            for (
              var e,
                { nav: n } = this.config,
                t = n.reduce((e, n) => e.concat(n.items), []),
                r = this.$route.path.split('/').pop(),
                o = 0,
                a = t.length;
              o < a;
              o++
            )
              if (t[o].path === r) {
                e = o;
                break;
              }
            (this.leftNav = t[e - 1]), (this.rightNav = t[e + 1]);
          },
          keyboardNav(e) {
            if (!/win(32|64)/.test(navigator.userAgent.toLocaleLowerCase())) {
              const n = e === 'prev' ? this.leftNav : this.rightNav;
              n.path && this.$router.push(this.base + n.path);
            }
          },
          keyboardHandler() {
            window.addEventListener('keyup', (e) => {
              switch (e.keyCode) {
                case 37:
                  this.keyboardNav('prev');
                  break;
                case 39:
                  this.keyboardNav('next');
              }
            });
          },
        },
      };
      const _o = t(4184);
      V()(_o.Z, { insert: 'head', singleton: !1 }),
        _o.Z.locals,
        (Eo.render = function (e, n, t, r, o, a) {
          const i = (0, F.up)('doc-header');
          const c = (0, F.up)('doc-nav');
          const l = (0, F.up)('doc-content');
          const s = (0, F.up)('doc-container');
          const A = (0, F.up)('doc-simulator');
          return (
            (0, F.wg)(),
            (0, F.iD)('div', j, [
              (0, F.Wm)(
                i,
                {
                  lang: t.lang,
                  config: t.config,
                  versions: t.versions,
                  'lang-configs': t.langConfigs,
                  onSwitchVersion:
                    n[0] || (n[0] = (n) => e.$emit('switch-version', n)),
                },
                null,
                8,
                ['lang', 'config', 'versions', 'lang-configs']
              ),
              (0, F.Wm)(
                c,
                { lang: t.lang, 'nav-config': t.config.nav },
                null,
                8,
                ['lang', 'nav-config']
              ),
              (0, F.Wm)(
                s,
                { 'has-simulator': t.hasSimulator },
                {
                  default: (0, F.w5)(() => [
                    (0, F.Wm)(l, null, {
                      default: (0, F.w5)(() => [
                        (0, F.WI)(e.$slots, 'default'),
                      ]),
                      _: 3,
                    }),
                  ]),
                  _: 3,
                },
                8,
                ['has-simulator']
              ),
              t.hasSimulator
                ? ((0, F.wg)(),
                  (0, F.j4)(A, { key: 0, src: t.simulator }, null, 8, ['src']))
                : (0, F.kq)('v-if', !0),
            ])
          );
        });
      const ko = 'zh-CN';
      const xo = 'vant-cli-lang';
      let Bo = ko;
      const Do = {
        components: { VanDoc: Eo },
        data: () => ({ hasSimulator: !0 }),
        computed: {
          simulator() {
            let e;
            let n;
            if ((e = a().site.simulator) !== null && void 0 !== e && e.url)
              return (n = a().site.simulator) === null || void 0 === n
                ? void 0
                : n.url;
            const t = location.pathname.replace(/\/index(\.html)?/, '/');
            return ''.concat(t, 'mobile.html').concat(location.hash);
          },
          lang() {
            const { lang: e } = this.$route.meta;
            return e || '';
          },
          langConfigs() {
            const { locales: e = {} } = a().site;
            return Object.keys(e).map((n) => ({
              lang: n,
              label: e[n].langLabel || '',
            }));
          },
          config() {
            const { locales: e } = a().site;
            return e ? e[this.lang] : a().site;
          },
          versions: () => a().site.versions || null,
        },
        watch: {
          '$route.path': function () {
            this.setTitleAndToogleSimulator();
          },
          lang(e) {
            let n;
            (Bo = n = e),
              localStorage.setItem(xo, n),
              this.setTitleAndToogleSimulator();
          },
          config: {
            handler(e) {
              e && this.setTitleAndToogleSimulator();
            },
            immediate: !0,
          },
        },
        mounted() {
          this.$route.hash &&
            this.$nextTick(() => {
              const e = document.querySelector(this.$route.hash);
              e && e.scrollIntoView();
            });
        },
        methods: {
          setTitleAndToogleSimulator() {
            let { title: e } = this.config;
            const n = this.config.nav
              .reduce((e, n) => [...e, ...n.items], [])
              .find((e) => e.path === this.$route.meta.name);
            n && n.title
              ? (e = n.title + ' - ' + e)
              : this.config.description &&
                (e += ' - '.concat(this.config.description)),
              (document.title = e),
              (this.hasSimulator = !(
                a().site.hideSimulator ||
                this.config.hideSimulator ||
                (n && n.hideSimulator)
              ));
          },
        },
      };
      const Oo = t(387);
      V()(Oo.Z, { insert: 'head', singleton: !1 }),
        Oo.Z.locals,
        (Do.render = function (e, n, t, r, o, a) {
          const i = (0, F.up)('router-view');
          const c = (0, F.up)('van-doc');
          return (
            (0, F.wg)(),
            (0, F.iD)('div', U, [
              a.config
                ? ((0, F.wg)(),
                  (0, F.j4)(
                    c,
                    {
                      key: 0,
                      lang: a.lang,
                      config: a.config,
                      versions: a.versions,
                      simulator: a.simulator,
                      'has-simulator': o.hasSimulator,
                      'lang-configs': a.langConfigs,
                    },
                    { default: (0, F.w5)(() => [(0, F.Wm)(i)]), _: 1 },
                    8,
                    [
                      'lang',
                      'config',
                      'versions',
                      'simulator',
                      'has-simulator',
                      'lang-configs',
                    ]
                  ))
                : (0, F.kq)('v-if', !0),
            ])
          );
        });
      const Io = Do;
      const Fo = (e) => (
        (0, F.dD)('data-v-41f5cf44'), (e = e()), (0, F.Cn)(), e
      );
      const Uo = { class: 'demo-playground--code' };
      const jo = { class: 'demo-playground--code--actions' };
      const To = Fo(() => (0, F._)('span', null, null, -1));
      const Po = ['data-status'];
      const Ho = ['innerHTML'];
      const No = {
        name: 'DemoPlayground',
        props: {
          originCode: String,
          codeSnippet: String,
          transform: Boolean,
          compact: Boolean,
          inline: Boolean,
        },
        data: () => ({ showSource: !1, copyStatus: 'ready' }),
        methods: {
          unescape,
          toogleSource() {
            this.showSource = !this.showSource;
          },
          copySourceCode() {
            !(function (e) {
              const n = document.createElement('textarea');
              (n.value = e),
                n.setAttribute('readonly', ''),
                (n.style.position = 'absolute'),
                (n.style.left = '-9999px'),
                document.body.appendChild(n);
              const t = document.getSelection();
              if (t) {
                const r = t.rangeCount > 0 && t.getRangeAt(0);
                n.select(),
                  document.execCommand('copy'),
                  document.body.removeChild(n),
                  r && (t.removeAllRanges(), t.addRange(r));
              }
            })(unescape(this.originCode)),
              (this.copyStatus = 'copied'),
              setTimeout(() => {
                this.copyStatus = 'ready';
              }, 2e3);
          },
        },
      };
      const Ro = t(8602);
      V()(Ro.Z, { insert: 'head', singleton: !1 }),
        Ro.Z.locals,
        (No.render = function (e, n, t, o, a, i) {
          return (
            (0, F.wg)(),
            (0, F.iD)(
              'div',
              {
                class: (0, T.C_)({
                  'demo-playground': !t.inline,
                  transform: t.transform,
                }),
              },
              [
                t.inline
                  ? (0, F.WI)(e.$slots, 'default', { key: 0 }, void 0, !0)
                  : ((0, F.wg)(),
                    (0, F.iD)(
                      F.HY,
                      { key: 1 },
                      [
                        (0, F._)(
                          'div',
                          {
                            class: (0, T.C_)([
                              'demo-playground--previewer',
                              { compact: t.compact },
                            ]),
                          },
                          [(0, F.WI)(e.$slots, 'default', {}, void 0, !0)],
                          2
                        ),
                        (0, F._)('div', Uo, [
                          (0, F._)('div', jo, [
                            To,
                            (0, F._)(
                              'button',
                              {
                                title: 'Copy source code',
                                class: 'action-icon',
                                role: 'copy',
                                'data-status': a.copyStatus,
                                onClick:
                                  n[0] ||
                                  (n[0] = function () {
                                    return (
                                      i.copySourceCode &&
                                      i.copySourceCode(...arguments)
                                    );
                                  }),
                              },
                              null,
                              8,
                              Po
                            ),
                            (0, F._)('button', {
                              title: 'Toggle source code panel',
                              class: 'action-icon',
                              role: 'source',
                              onClick:
                                n[1] ||
                                (n[1] = function () {
                                  return (
                                    i.toogleSource &&
                                    i.toogleSource(...arguments)
                                  );
                                }),
                            }),
                          ]),
                          (0, F.wy)(
                            (0, F._)(
                              'div',
                              {
                                innerHTML: i.unescape(t.codeSnippet),
                                class: 'demo-playground--code--content',
                              },
                              null,
                              8,
                              Ho
                            ),
                            [[r.F8, a.showSource]]
                          ),
                        ]),
                      ],
                      64
                    )),
              ],
              2
            )
          );
        }),
        (No.__scopeId = 'data-v-41f5cf44');
      const Lo = No;
      const Mo = t(1666);
      const Vo = navigator.userAgent.toLowerCase();
      const Wo = /ios|iphone|ipod|ipad|android/.test(Vo);
      function zo(e) {
        const n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '-';
        return e
          .replace(/([a-z\d])([A-Z])/g, '$1' + n + '$2')
          .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + n + '$2')
          .toLowerCase();
      }
      let qo;
      let Go = [];
      let Yo = !1;
      function Zo() {
        let e;
        let n;
        const t = window.vueRouter;
        const { path: r } = t.currentRoute.value;
        return (e = a().site.simulator) !== null &&
          void 0 !== e &&
          e.routeMapper
          ? (n = a().site.simulator) === null || void 0 === n
            ? void 0
            : n.routeMapper(r)
          : r;
      }
      function Qo() {
        let e;
        const n = document.querySelector('iframe');
        n &&
          ((e = () => {
            n.contentWindow.postMessage(
              { type: 'replacePath', value: Zo() },
              '*'
            );
          }),
          Yo ? e() : Go.push(e));
      }
      window.top === window
        ? window.addEventListener('message', (e) => {
            e.data.type === 'iframeReady' &&
              ((Yo = !0), Go.forEach((e) => e()), (Go = []));
          })
        : window.top.postMessage({ type: 'iframeReady' }, '*'),
        Wo && location.replace('mobile.html' + location.hash);
      let Jo;
      let Ko;
      const { locales: Xo, defaultLang: $o } = a().site;
      function ea(e) {
        const n = e.path.split('/')[1];
        return Object.keys(Xo).indexOf(n) !== -1 ? n : Bo;
      }
      (Jo = $o),
        (Ko = localStorage.getItem(xo)),
        (Bo =
          Ko ||
          (navigator.language && navigator.language.indexOf('zh-') !== -1
            ? ko
            : Jo || 'en-US'));
      let na;
      let ta;
      const ra = (0, Mo.p7)({
        history: (0, Mo.r5)(),
        routes:
          ((na = []),
          (ta = Object.keys(I)),
          Xo
            ? na.push({
                name: 'notFound',
                path: '/:path(.*)+',
                redirect: (e) => ({ name: ea(e) }),
              })
            : na.push({
                name: 'notFound',
                path: '/:path(.*)+',
                redirect: { name: 'home' },
              }),
          ta.forEach((e) => {
            const { component: n, lang: t } = (function (e) {
              if (e.indexOf('_') !== -1) {
                const n = e.split('_');
                const t = n.shift();
                return { component: ''.concat(zo(t)), lang: n.join('-') };
              }
              return { component: ''.concat(zo(e)), lang: '' };
            })(e);
            n === 'home' &&
              (function (e, n) {
                na.push({
                  name: n || 'home',
                  path: '/'.concat(n || ''),
                  component: e,
                  meta: { lang: n },
                });
              })(I[e], t),
              t
                ? na.push({
                    name: ''.concat(t, '/').concat(n),
                    path: '/'.concat(t, '/').concat(n),
                    component: I[e],
                    meta: { lang: t, name: n },
                  })
                : na.push({
                    name: ''.concat(n),
                    path: '/'.concat(n),
                    component: I[e],
                    meta: { name: n },
                  });
          }),
          na),
        scrollBehavior: (e) => (e.hash ? { el: e.hash } : { x: 0, y: 0 }),
      });
      ra.afterEach(() => {
        (0, F.Y3)(Qo);
      }),
        !1 !==
          ((qo = a().site.simulator) === null || void 0 === qo
            ? void 0
            : qo.syncPathFromSimulator) &&
          (function (e) {
            window.addEventListener('message', (n) => {
              let t;
              let r;
              if (
                ((t = n.data) === null || void 0 === t ? void 0 : t.type) ===
                'replacePath'
              ) {
                const o =
                  ((r = n.data) === null || void 0 === r ? void 0 : r.value) ||
                  '';
                e.currentRoute.value.path !== o && e.replace(o).catch(() => {});
              }
            });
          })(ra),
        (window.vueRouter = ra),
        (window.app = (0, r.ri)(Io).use(ra).use(O).component(Lo.name, Lo)),
        setTimeout(() => {
          window.app.mount('#app');
        }, 0);
    },
    4943: (e, n, t) => {
      t.d(n, {
        rP: () => m,
        _f: () => c,
        Ib: () => A,
        OR: () => u,
        EL: () => s,
        eo: () => v,
        iP: () => d,
      });
      let r;
      let o;
      const a = t(2343);
      const i = t(6229);
      var c = typeof window !== 'undefined';
      const l = (e, n) => ({
        top: 0,
        left: 0,
        right: e,
        bottom: n,
        width: e,
        height: n,
      });
      var s = (e) => {
        const n = (0, a.SU)(e);
        if (n === window) {
          const t = n.innerWidth;
          const r = n.innerHeight;
          return l(t, r);
        }
        return (n == null ? void 0 : n.getBoundingClientRect)
          ? n.getBoundingClientRect()
          : l(0, 0);
      };
      function A(e) {
        let n;
        (0, i.bv)(() => {
          e(),
            (0, i.Y3)(() => {
              n = !0;
            });
        }),
          (0, i.dl)(() => {
            n && e();
          });
      }
      function u(e, n) {
        const t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (c) {
          let r;
          const { target: o = window, passive: l = !1, capture: s = !1 } = t;
          const u = (t) => {
            const o = (0, a.SU)(t);
            o &&
              !r &&
              (o.addEventListener(e, n, { capture: s, passive: l }), (r = !0));
          };
          const d = (t) => {
            const o = (0, a.SU)(t);
            o && r && (o.removeEventListener(e, n, s), (r = !1));
          };
          (0, i.Ah)(() => d(o)),
            (0, i.se)(() => d(o)),
            A(() => u(o)),
            (0, a.dq)(o) &&
              (0, i.YP)(o, (e, n) => {
                d(n), u(e);
              });
        }
      }
      function d() {
        if (!r && ((r = (0, a.iH)(0)), (o = (0, a.iH)(0)), c)) {
          const e = () => {
            (r.value = window.innerWidth), (o.value = window.innerHeight);
          };
          e(),
            window.addEventListener('resize', e, { passive: !0 }),
            window.addEventListener('orientationchange', e, { passive: !0 });
        }
        return { width: r, height: o };
      }
      const p = /scroll|auto/i;
      const h = c ? window : void 0;
      function f(e) {
        return e.tagName !== 'HTML' && e.tagName !== 'BODY' && e.nodeType === 1;
      }
      function m(e) {
        for (
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : h,
            t = e;
          t && t !== n && f(t);

        ) {
          const { overflowY: r } = window.getComputedStyle(t);
          if (p.test(r)) return t;
          t = t.parentNode;
        }
        return n;
      }
      function v(e) {
        const n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
        const t = (0, a.iH)();
        return (
          (0, i.bv)(() => {
            e.value && (t.value = m(e.value, n));
          }),
          t
        );
      }
      Symbol('van-field');
    },
    6229: (e, n, t) => {
      t.d(n, {
        P$: () => S,
        HY: () => Re,
        lR: () => je,
        $d: () => Pn,
        j4: () => Je,
        kq: () => ln,
        iD: () => Qe,
        _: () => tn,
        Us: () => ke,
        Nv: () => fn,
        Uk: () => cn,
        Wm: () => rn,
        aZ: () => O,
        FN: () => En,
        Q6: () => D,
        h: () => pt,
        f3: () => b,
        dG: () => dn,
        Y3: () => Xn,
        dl: () => U,
        Jd: () => W,
        se: () => j,
        bv: () => L,
        Ah: () => z,
        ic: () => V,
        wg: () => qe,
        Cn: () => d,
        JJ: () => C,
        dD: () => u,
        Ko: () => hn,
        WI: () => mn,
        up: () => Pe,
        U2: () => _,
        nK: () => B,
        Y8: () => y,
        YP: () => lt,
        w5: () => p,
        wy: () => Ce,
      });
      const r = t(2343);
      const o = t(2502);
      function a(e, n) {
        for (
          var t = e.vnode.props || o.kT,
            r = arguments.length,
            a = new Array(r > 2 ? r - 2 : 0),
            i = 2;
          i < r;
          i++
        )
          a[i - 2] = arguments[i];
        let c;
        let l = a;
        const s = n.startsWith('update:');
        const A = s && n.slice(7);
        if (A && A in t) {
          const u = ''.concat(A === 'modelValue' ? 'model' : A, 'Modifiers');
          const { number: d, trim: p } = t[u] || o.kT;
          p ? (l = a.map((e) => e.trim())) : d && (l = a.map(o.He));
        }
        let h = t[(c = (0, o.hR)(n))] || t[(c = (0, o.hR)((0, o._A)(n)))];
        !h && s && (h = t[(c = (0, o.hR)((0, o.rs)(n)))]), h && Pn(h, e, 6, l);
        const f = t[c + 'Once'];
        if (f) {
          if (e.emitted) {
            if (e.emitted[c]) return;
          } else e.emitted = {};
          (e.emitted[c] = !0), Pn(f, e, 6, l);
        }
      }
      function i(e, n) {
        const t =
          arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const r = n.emitsCache;
        const a = r.get(e);
        if (void 0 !== a) return a;
        const c = e.emits;
        const l = {};
        let s = !1;
        if (!(0, o.mf)(e)) {
          const A = (e) => {
            const t = i(e, n, !0);
            t && ((s = !0), (0, o.l7)(l, t));
          };
          !t && n.mixins.length && n.mixins.forEach(A),
            e.extends && A(e.extends),
            e.mixins && e.mixins.forEach(A);
        }
        return c || s
          ? ((0, o.kJ)(c) ? c.forEach((e) => (l[e] = null)) : (0, o.l7)(l, c),
            r.set(e, l),
            l)
          : (r.set(e, null), null);
      }
      function c(e, n) {
        return (
          !(!e || !(0, o.F7)(n)) &&
          ((n = n.slice(2).replace(/Once$/, '')),
          (0, o.RI)(e, n[0].toLowerCase() + n.slice(1)) ||
            (0, o.RI)(e, (0, o.rs)(n)) ||
            (0, o.RI)(e, n))
        );
      }
      new Set(), new Map();
      let l = null;
      let s = null;
      function A(e) {
        const n = l;
        return (l = e), (s = (e && e.type.__scopeId) || null), n;
      }
      function u(e) {
        s = e;
      }
      function d() {
        s = null;
      }
      function p(e) {
        const n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
        if (!n) return e;
        if (e._n) return e;
        var t = function () {
          t._d && Ye(-1);
          const r = A(n);
          const o = e(...arguments);
          return A(r), t._d && Ye(1), o;
        };
        return (t._n = !0), (t._c = !0), (t._d = !0), t;
      }
      function h(e) {
        let n;
        let t;
        const {
          type: r,
          vnode: a,
          proxy: i,
          withProxy: c,
          props: l,
          propsOptions: [s],
          slots: u,
          attrs: d,
          emit: p,
          render: h,
          renderCache: v,
          data: g,
          setupState: C,
          ctx: b,
          inheritAttrs: y,
        } = e;
        const w = A(e);
        try {
          if (4 & a.shapeFlag) {
            const S = c || i;
            (n = sn(h.call(S, S, v, l, C, g, b))), (t = d);
          } else {
            const E = r;
            (n = sn(
              E.length > 1 ? E(l, { attrs: d, slots: u, emit: p }) : E(l, null)
            )),
              (t = r.props ? d : f(d));
          }
        } catch (t) {
          (We.length = 0), Hn(t, e, 1), (n = rn(Me));
        }
        let _ = n;
        if (t && !1 !== y) {
          const k = Object.keys(t);
          const { shapeFlag: x } = _;
          k.length &&
            7 & x &&
            (s && k.some(o.tR) && (t = m(t, s)), (_ = an(_, t)));
        }
        return (
          a.dirs && (_.dirs = _.dirs ? _.dirs.concat(a.dirs) : a.dirs),
          a.transition && (_.transition = a.transition),
          (n = _),
          A(w),
          n
        );
      }
      var f = (e) => {
        let n;
        for (const t in e)
          (t === 'class' || t === 'style' || (0, o.F7)(t)) &&
            ((n || (n = {}))[t] = e[t]);
        return n;
      };
      var m = (e, n) => {
        const t = {};
        for (const r in e) ((0, o.tR)(r) && r.slice(9) in n) || (t[r] = e[r]);
        return t;
      };
      function v(e, n, t) {
        const r = Object.keys(n);
        if (r.length !== Object.keys(e).length) return !0;
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          if (n[a] !== e[a] && !c(t, a)) return !0;
        }
        return !1;
      }
      const g = (e) => e.__isSuspense;
      function C(e, n) {
        if (Sn) {
          let t = Sn.provides;
          const r = Sn.parent && Sn.parent.provides;
          r === t && (t = Sn.provides = Object.create(r)), (t[e] = n);
        }
      }
      function b(e, n) {
        const t =
          arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const r = Sn || l;
        if (r) {
          const a =
            r.parent == null
              ? r.vnode.appContext && r.vnode.appContext.provides
              : r.parent.provides;
          if (a && e in a) return a[e];
          if (arguments.length > 1)
            return t && (0, o.mf)(n) ? n.call(r.proxy) : n;
        }
      }
      function y() {
        const e = {
          isMounted: !1,
          isLeaving: !1,
          isUnmounting: !1,
          leavingVNodes: new Map(),
        };
        return (
          L(() => {
            e.isMounted = !0;
          }),
          W(() => {
            e.isUnmounting = !0;
          }),
          e
        );
      }
      const w = [Function, Array];
      var S = {
        name: 'BaseTransition',
        props: {
          mode: String,
          appear: Boolean,
          persisted: Boolean,
          onBeforeEnter: w,
          onEnter: w,
          onAfterEnter: w,
          onEnterCancelled: w,
          onBeforeLeave: w,
          onLeave: w,
          onAfterLeave: w,
          onLeaveCancelled: w,
          onBeforeAppear: w,
          onAppear: w,
          onAfterAppear: w,
          onAppearCancelled: w,
        },
        setup(e, n) {
          let t;
          const { slots: o } = n;
          const a = En();
          const i = y();
          return () => {
            const n = o.default && D(o.default(), !0);
            if (n && n.length) {
              const c = (0, r.IU)(e);
              const { mode: l } = c;
              const s = n[0];
              if (i.isLeaving) return k(s);
              const A = x(s);
              if (!A) return k(s);
              const u = _(A, c, i, a);
              B(A, u);
              const d = a.subTree;
              const p = d && x(d);
              let h = !1;
              const { getTransitionKey: f } = A.type;
              if (f) {
                const m = f();
                void 0 === t ? (t = m) : m !== t && ((t = m), (h = !0));
              }
              if (p && p.type !== Me && (!Xe(A, p) || h)) {
                const v = _(p, c, i, a);
                if ((B(p, v), l === 'out-in'))
                  return (
                    (i.isLeaving = !0),
                    (v.afterLeave = () => {
                      (i.isLeaving = !1), a.update();
                    }),
                    k(s)
                  );
                l === 'in-out' &&
                  A.type !== Me &&
                  (v.delayLeave = (e, n, t) => {
                    (E(i, p)[String(p.key)] = p),
                      (e._leaveCb = () => {
                        n(), (e._leaveCb = void 0), delete u.delayedLeave;
                      }),
                      (u.delayedLeave = t);
                  });
              }
              return s;
            }
          };
        },
      };
      function E(e, n) {
        const { leavingVNodes: t } = e;
        let r = t.get(n.type);
        return r || ((r = Object.create(null)), t.set(n.type, r)), r;
      }
      function _(e, n, t, r) {
        const {
          appear: o,
          mode: a,
          persisted: i = !1,
          onBeforeEnter: c,
          onEnter: l,
          onAfterEnter: s,
          onEnterCancelled: A,
          onBeforeLeave: u,
          onLeave: d,
          onAfterLeave: p,
          onLeaveCancelled: h,
          onBeforeAppear: f,
          onAppear: m,
          onAfterAppear: v,
          onAppearCancelled: g,
        } = n;
        const C = String(e.key);
        const b = E(t, e);
        const y = (e, n) => {
          e && Pn(e, r, 9, n);
        };
        var w = {
          mode: a,
          persisted: i,
          beforeEnter(n) {
            let r = c;
            if (!t.isMounted) {
              if (!o) return;
              r = f || c;
            }
            n._leaveCb && n._leaveCb(!0);
            const a = b[C];
            a && Xe(e, a) && a.el._leaveCb && a.el._leaveCb(), y(r, [n]);
          },
          enter(e) {
            let n = l;
            let r = s;
            let a = A;
            if (!t.isMounted) {
              if (!o) return;
              (n = m || l), (r = v || s), (a = g || A);
            }
            let i = !1;
            const c = (e._enterCb = (n) => {
              i ||
                ((i = !0),
                y(n ? a : r, [e]),
                w.delayedLeave && w.delayedLeave(),
                (e._enterCb = void 0));
            });
            n ? (n(e, c), n.length <= 1 && c()) : c();
          },
          leave(n, r) {
            const o = String(e.key);
            if ((n._enterCb && n._enterCb(!0), t.isUnmounting)) return r();
            y(u, [n]);
            let a = !1;
            const i = (n._leaveCb = (t) => {
              a ||
                ((a = !0),
                r(),
                y(t ? h : p, [n]),
                (n._leaveCb = void 0),
                b[o] === e && delete b[o]);
            });
            (b[o] = e), d ? (d(n, i), d.length <= 1 && i()) : i();
          },
          clone: (e) => _(e, n, t, r),
        };
        return w;
      }
      function k(e) {
        if (F(e)) return ((e = an(e)).children = null), e;
      }
      function x(e) {
        return F(e) ? (e.children ? e.children[0] : void 0) : e;
      }
      function B(e, n) {
        6 & e.shapeFlag && e.component
          ? B(e.component.subTree, n)
          : 128 & e.shapeFlag
          ? ((e.ssContent.transition = n.clone(e.ssContent)),
            (e.ssFallback.transition = n.clone(e.ssFallback)))
          : (e.transition = n);
      }
      function D(e) {
        for (
          var n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = [],
            r = 0,
            o = 0;
          o < e.length;
          o++
        ) {
          const a = e[o];
          a.type === Re
            ? (128 & a.patchFlag && r++, (t = t.concat(D(a.children, n))))
            : (n || a.type !== Me) && t.push(a);
        }
        if (r > 1) for (let i = 0; i < t.length; i++) t[i].patchFlag = -2;
        return t;
      }
      function O(e) {
        return (0, o.mf)(e) ? { setup: e, name: e.name } : e;
      }
      const I = (e) => !!e.type.__asyncLoader;
      var F = (e) => e.type.__isKeepAlive;
      function U(e, n) {
        T(e, 'a', n);
      }
      function j(e, n) {
        T(e, 'da', n);
      }
      function T(e, n) {
        const t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sn;
        const r =
          e.__wdc ||
          (e.__wdc = () => {
            for (let n = t; n; ) {
              if (n.isDeactivated) return;
              n = n.parent;
            }
            return e();
          });
        if ((H(n, r, t), t))
          for (let o = t.parent; o && o.parent; )
            F(o.parent.vnode) && P(r, n, t, o), (o = o.parent);
      }
      function P(e, n, t, r) {
        const a = H(n, e, r, !0);
        z(() => {
          (0, o.Od)(r[n], a);
        }, t);
      }
      function H(e, n) {
        const t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sn;
        const o =
          arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (t) {
          const a = t[e] || (t[e] = []);
          const i =
            n.__weh ||
            (n.__weh = function () {
              if (!t.isUnmounted) {
                (0, r.Jd)(), _n(t);
                for (
                  var o = arguments.length, a = new Array(o), i = 0;
                  i < o;
                  i++
                )
                  a[i] = arguments[i];
                const c = Pn(n, t, e, a);
                return kn(), (0, r.lk)(), c;
              }
            });
          return o ? a.unshift(i) : a.push(i), i;
        }
      }
      RegExp, RegExp;
      const N = (e) =>
        function (n) {
          const t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sn;
          return (!Bn || e === 'sp') && H(e, n, t);
        };
      const R = N('bm');
      var L = N('m');
      const M = N('bu');
      var V = N('u');
      var W = N('bum');
      var z = N('um');
      const q = N('sp');
      const G = N('rtg');
      const Y = N('rtc');
      function Z(e) {
        const n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sn;
        H('ec', e, n);
      }
      let Q = !0;
      function J(e, n, t) {
        Pn(
          (0, o.kJ)(e) ? e.map((e) => e.bind(n.proxy)) : e.bind(n.proxy),
          n,
          t
        );
      }
      function K(e, n, t, r) {
        const a = r.includes('.') ? ut(t, r) : () => t[r];
        if ((0, o.HD)(e)) {
          const i = n[e];
          (0, o.mf)(i) && lt(a, i);
        } else if ((0, o.mf)(e)) lt(a, e.bind(t));
        else if ((0, o.Kn)(e))
          if ((0, o.kJ)(e)) e.forEach((e) => K(e, n, t, r));
          else {
            const c = (0, o.mf)(e.handler) ? e.handler.bind(t) : n[e.handler];
            (0, o.mf)(c) && lt(a, c, e);
          }
      }
      function X(e) {
        let n;
        const t = e.type;
        const { mixins: r, extends: o } = t;
        const {
          mixins: a,
          optionsCache: i,
          config: { optionMergeStrategies: c },
        } = e.appContext;
        const l = i.get(t);
        return (
          l
            ? (n = l)
            : a.length || r || o
            ? ((n = {}),
              a.length && a.forEach((e) => $(n, e, c, !0)),
              $(n, t, c))
            : (n = t),
          i.set(t, n),
          n
        );
      }
      function $(e, n, t) {
        const r =
          arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const { mixins: o, extends: a } = n;
        for (const i in (a && $(e, a, t, !0),
        o && o.forEach((n) => $(e, n, t, !0)),
        n))
          if (r && i === 'expose');
          else {
            const c = ee[i] || (t && t[i]);
            e[i] = c ? c(e[i], n[i]) : n[i];
          }
        return e;
      }
      var ee = {
        data: ne,
        props: oe,
        emits: oe,
        methods: oe,
        computed: oe,
        beforeCreate: re,
        created: re,
        beforeMount: re,
        mounted: re,
        beforeUpdate: re,
        updated: re,
        beforeDestroy: re,
        beforeUnmount: re,
        destroyed: re,
        unmounted: re,
        activated: re,
        deactivated: re,
        errorCaptured: re,
        serverPrefetch: re,
        components: oe,
        directives: oe,
        watch(e, n) {
          if (!e) return n;
          if (!n) return e;
          const t = (0, o.l7)(Object.create(null), e);
          for (const r in n) t[r] = re(e[r], n[r]);
          return t;
        },
        provide: ne,
        inject(e, n) {
          return oe(te(e), te(n));
        },
      };
      function ne(e, n) {
        return n
          ? e
            ? function () {
                return (0, o.l7)(
                  (0, o.mf)(e) ? e.call(this, this) : e,
                  (0, o.mf)(n) ? n.call(this, this) : n
                );
              }
            : n
          : e;
      }
      function te(e) {
        if ((0, o.kJ)(e)) {
          for (var n = {}, t = 0; t < e.length; t++) n[e[t]] = e[t];
          return n;
        }
        return e;
      }
      function re(e, n) {
        return e ? [...new Set([].concat(e, n))] : n;
      }
      function oe(e, n) {
        return e ? (0, o.l7)((0, o.l7)(Object.create(null), e), n) : n;
      }
      function ae(e, n, t) {
        const a =
          arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const i = {};
        const c = {};
        for (const l in ((0, o.Nj)(c, $e, 1),
        (e.propsDefaults = Object.create(null)),
        ie(e, n, i, c),
        e.propsOptions[0]))
          l in i || (i[l] = void 0);
        t
          ? (e.props = a ? i : (0, r.Um)(i))
          : e.type.props
          ? (e.props = i)
          : (e.props = c),
          (e.attrs = c);
      }
      function ie(e, n, t, a) {
        let i;
        const [l, s] = e.propsOptions;
        let A = !1;
        if (n)
          for (const u in n)
            if (!(0, o.Gg)(u)) {
              const d = n[u];
              let p = void 0;
              l && (0, o.RI)(l, (p = (0, o._A)(u)))
                ? s && s.includes(p)
                  ? ((i || (i = {}))[p] = d)
                  : (t[p] = d)
                : c(e.emitsOptions, u) ||
                  (u in a && d === a[u]) ||
                  ((a[u] = d), (A = !0));
            }
        if (s)
          for (let h = (0, r.IU)(t), f = i || o.kT, m = 0; m < s.length; m++) {
            const v = s[m];
            t[v] = ce(l, h, v, f[v], e, !(0, o.RI)(f, v));
          }
        return A;
      }
      function ce(e, n, t, r, a, i) {
        const c = e[t];
        if (c != null) {
          const l = (0, o.RI)(c, 'default');
          if (l && void 0 === r) {
            const s = c.default;
            if (c.type !== Function && (0, o.mf)(s)) {
              const { propsDefaults: A } = a;
              t in A ? (r = A[t]) : (_n(a), (r = A[t] = s.call(null, n)), kn());
            } else r = s;
          }
          c[0] &&
            (i && !l
              ? (r = !1)
              : !c[1] || (r !== '' && r !== (0, o.rs)(t)) || (r = !0));
        }
        return r;
      }
      function le(e, n) {
        const t =
          arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const r = n.propsCache;
        const a = r.get(e);
        if (a) return a;
        const i = e.props;
        const c = {};
        const l = [];
        let s = !1;
        if (!(0, o.mf)(e)) {
          const A = (e) => {
            s = !0;
            const [t, r] = le(e, n, !0);
            (0, o.l7)(c, t), r && l.push(...r);
          };
          !t && n.mixins.length && n.mixins.forEach(A),
            e.extends && A(e.extends),
            e.mixins && e.mixins.forEach(A);
        }
        if (!i && !s) return r.set(e, o.Z6), o.Z6;
        if ((0, o.kJ)(i))
          for (let u = 0; u < i.length; u++) {
            const d = (0, o._A)(i[u]);
            se(d) && (c[d] = o.kT);
          }
        else if (i)
          for (const p in i) {
            const h = (0, o._A)(p);
            if (se(h)) {
              const f = i[p];
              const m = (c[h] = (0, o.kJ)(f) || (0, o.mf)(f) ? { type: f } : f);
              if (m) {
                const v = de(Boolean, m.type);
                const g = de(String, m.type);
                (m[0] = v > -1),
                  (m[1] = g < 0 || v < g),
                  (v > -1 || (0, o.RI)(m, 'default')) && l.push(h);
              }
            }
          }
        const C = [c, l];
        return r.set(e, C), C;
      }
      function se(e) {
        return e[0] !== '$';
      }
      function Ae(e) {
        const n = e && e.toString().match(/^\s*function (\w+)/);
        return n ? n[1] : e === null ? 'null' : '';
      }
      function ue(e, n) {
        return Ae(e) === Ae(n);
      }
      function de(e, n) {
        return (0, o.kJ)(n)
          ? n.findIndex((n) => ue(n, e))
          : (0, o.mf)(n) && ue(n, e)
          ? 0
          : -1;
      }
      const pe = (e) => e[0] === '_' || e === '$stable';
      const he = (e) => ((0, o.kJ)(e) ? e.map(sn) : [sn(e)]);
      const fe = (e, n, t) => {
        const r = p(function () {
          return he(n(...arguments));
        }, t);
        return (r._c = !1), r;
      };
      const me = (e, n, t) => {
        const r = e._ctx;
        for (var a in e)
          if (!pe(a)) {
            var i = e[a];
            (0, o.mf)(i)
              ? (n[a] = fe(0, i, r))
              : i != null &&
                (function () {
                  const e = he(i);
                  n[a] = () => e;
                })();
          }
      };
      const ve = (e, n) => {
        const t = he(n);
        e.slots.default = () => t;
      };
      const ge = (e, n) => {
        if (32 & e.vnode.shapeFlag) {
          const t = n._;
          t
            ? ((e.slots = (0, r.IU)(n)), (0, o.Nj)(n, '_', t))
            : me(n, (e.slots = {}));
        } else (e.slots = {}), n && ve(e, n);
        (0, o.Nj)(e.slots, $e, 1);
      };
      function Ce(e, n) {
        if (l === null) return e;
        for (
          let t = l.proxy, r = e.dirs || (e.dirs = []), a = 0;
          a < n.length;
          a++
        ) {
          let [i, c, s, A = o.kT] = n[a];
          (0, o.mf)(i) && (i = { mounted: i, updated: i }),
            i.deep && dt(c),
            r.push({
              dir: i,
              instance: t,
              value: c,
              oldValue: void 0,
              arg: s,
              modifiers: A,
            });
        }
        return e;
      }
      function be(e, n, t, o) {
        for (let a = e.dirs, i = n && n.dirs, c = 0; c < a.length; c++) {
          const l = a[c];
          i && (l.oldValue = i[c].value);
          const s = l.dir[o];
          s && ((0, r.Jd)(), Pn(s, t, 8, [e.el, l, e, n]), (0, r.lk)());
        }
      }
      function ye() {
        return {
          app: null,
          config: {
            isNativeTag: o.NO,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {},
          },
          mixins: [],
          components: {},
          directives: {},
          provides: Object.create(null),
          optionsCache: new WeakMap(),
          propsCache: new WeakMap(),
          emitsCache: new WeakMap(),
        };
      }
      let we = 0;
      function Se(e, n) {
        return function (t) {
          let r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          r == null || (0, o.Kn)(r) || (r = null);
          const a = ye();
          const i = new Set();
          let c = !1;
          var l = (a.app = {
            _uid: we++,
            _component: t,
            _props: r,
            _container: null,
            _context: a,
            _instance: null,
            version: ht,
            get config() {
              return a.config;
            },
            set config(e) {},
            use(e) {
              for (
                var n = arguments.length,
                  t = new Array(n > 1 ? n - 1 : 0),
                  r = 1;
                r < n;
                r++
              )
                t[r - 1] = arguments[r];
              return (
                i.has(e) ||
                  (e && (0, o.mf)(e.install)
                    ? (i.add(e), e.install(l, ...t))
                    : (0, o.mf)(e) && (i.add(e), e(l, ...t))),
                l
              );
            },
            mixin: (e) => (a.mixins.includes(e) || a.mixins.push(e), l),
            component: (e, n) =>
              n ? ((a.components[e] = n), l) : a.components[e],
            directive: (e, n) =>
              n ? ((a.directives[e] = n), l) : a.directives[e],
            mount(o, i, s) {
              if (!c) {
                const A = rn(t, r);
                return (
                  (A.appContext = a),
                  i && n ? n(A, o) : e(A, o, s),
                  (c = !0),
                  (l._container = o),
                  (o.__vue_app__ = l),
                  Fn(A.component) || A.component.proxy
                );
              }
            },
            unmount() {
              c && (e(null, l._container), delete l._container.__vue_app__);
            },
            provide: (e, n) => ((a.provides[e] = n), l),
          });
          return l;
        };
      }
      function Ee(e, n, t, a) {
        const i =
          arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ((0, o.kJ)(e))
          e.forEach((e, r) => Ee(e, n && ((0, o.kJ)(n) ? n[r] : n), t, a, i));
        else if (!I(a) || i) {
          const c =
            4 & a.shapeFlag ? Fn(a.component) || a.component.proxy : a.el;
          const l = i ? null : c;
          const { i: s, r: A } = e;
          const u = n && n.r;
          const d = s.refs === o.kT ? (s.refs = {}) : s.refs;
          const p = s.setupState;
          if (
            (u != null &&
              u !== A &&
              ((0, o.HD)(u)
                ? ((d[u] = null), (0, o.RI)(p, u) && (p[u] = null))
                : (0, r.dq)(u) && (u.value = null)),
            (0, o.mf)(A))
          )
            Tn(A, s, 12, [l, d]);
          else {
            const h = (0, o.HD)(A);
            const f = (0, r.dq)(A);
            if (h || f) {
              const m = () => {
                if (e.f) {
                  const n = h ? d[A] : A.value;
                  i
                    ? (0, o.kJ)(n) && (0, o.Od)(n, c)
                    : (0, o.kJ)(n)
                    ? n.includes(c) || n.push(c)
                    : h
                    ? (d[A] = [c])
                    : ((A.value = [c]), e.k && (d[e.k] = A.value));
                } else
                  h
                    ? ((d[A] = l), (0, o.RI)(p, A) && (p[A] = l))
                    : (0, r.dq)(A) && ((A.value = l), e.k && (d[e.k] = l));
              };
              l ? ((m.id = -1), _e(m, t)) : m();
            }
          }
        }
      }
      var _e = function (e, n) {
        n && n.pendingBranch
          ? (0, o.kJ)(e)
            ? n.effects.push(...e)
            : n.effects.push(e)
          : nt(e, Yn, Gn, Zn);
      };
      function ke(e) {
        return (function (e, n) {
          (0, o.E9)().__VUE__ = !0;
          let t;
          let l;
          const {
            insert: s,
            remove: A,
            patchProp: u,
            createElement: d,
            createText: p,
            createComment: f,
            setText: m,
            setElementText: g,
            parentNode: C,
            nextSibling: b,
            setScopeId: y = o.dG,
            cloneNode: w,
            insertStaticContent: S,
          } = e;
          const E = function (e, n, t) {
            let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            const o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : null;
            const a =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : null;
            const i =
              arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            const c =
              arguments.length > 7 && void 0 !== arguments[7]
                ? arguments[7]
                : null;
            let l =
              arguments.length > 8 && void 0 !== arguments[8]
                ? arguments[8]
                : !!n.dynamicChildren;
            if (e !== n) {
              e && !Xe(e, n) && ((r = ee(e)), Q(e, o, a, !0), (e = null)),
                n.patchFlag === -2 && ((l = !1), (n.dynamicChildren = null));
              const { type: s, ref: A, shapeFlag: u } = n;
              switch (s) {
                case Le:
                  _(e, n, t, r);
                  break;
                case Me:
                  k(e, n, t, r);
                  break;
                case Ve:
                  e == null && x(n, t, r, i);
                  break;
                case Re:
                  R(e, n, t, r, o, a, i, c, l);
                  break;
                default:
                  1 & u
                    ? O(e, n, t, r, o, a, i, c, l)
                    : 6 & u
                    ? L(e, n, t, r, o, a, i, c, l)
                    : (64 & u || 128 & u) &&
                      s.process(e, n, t, r, o, a, i, c, l, te);
              }
              A != null && o && Ee(A, e && e.ref, a, n || e, !n);
            }
          };
          var _ = (e, n, t, r) => {
            if (e == null) s((n.el = p(n.children)), t, r);
            else {
              const o = (n.el = e.el);
              n.children !== e.children && m(o, n.children);
            }
          };
          var k = (e, n, t, r) => {
            e == null ? s((n.el = f(n.children || '')), t, r) : (n.el = e.el);
          };
          var x = (e, n, t, r) => {
            [e.el, e.anchor] = S(e.children, n, t, r);
          };
          const B = (e, n, t) => {
            for (var r, { el: o, anchor: a } = e; o && o !== a; )
              (r = b(o)), s(o, n, t), (o = r);
            s(a, n, t);
          };
          const D = (e) => {
            for (var n, { el: t, anchor: r } = e; t && t !== r; )
              (n = b(t)), A(t), (t = n);
            A(r);
          };
          var O = (e, n, t, r, o, a, i, c, l) => {
            (i = i || n.type === 'svg'),
              e == null ? U(n, t, r, o, a, i, c, l) : P(e, n, o, a, i, c, l);
          };
          var U = (e, n, t, r, a, i, c, l) => {
            let A;
            let p;
            const {
              type: h,
              props: f,
              shapeFlag: m,
              transition: v,
              patchFlag: C,
              dirs: b,
            } = e;
            if (e.el && void 0 !== w && C === -1) A = e.el = w(e.el);
            else {
              if (
                ((A = e.el = d(e.type, i, f && f.is, f)),
                8 & m
                  ? g(A, e.children)
                  : 16 & m &&
                    T(
                      e.children,
                      A,
                      null,
                      r,
                      a,
                      i && h !== 'foreignObject',
                      c,
                      l
                    ),
                b && be(e, null, r, 'created'),
                f)
              ) {
                for (const y in f)
                  y === 'value' ||
                    (0, o.Gg)(y) ||
                    u(A, y, null, f[y], i, e.children, r, a, $);
                'value' in f && u(A, 'value', null, f.value),
                  (p = f.onVnodeBeforeMount) && pn(p, r, e);
              }
              j(A, e, e.scopeId, c, r);
            }
            b && be(e, null, r, 'beforeMount');
            const S = (!a || (a && !a.pendingBranch)) && v && !v.persisted;
            S && v.beforeEnter(A),
              s(A, n, t),
              ((p = f && f.onVnodeMounted) || S || b) &&
                _e(() => {
                  p && pn(p, r, e),
                    S && v.enter(A),
                    b && be(e, null, r, 'mounted');
                }, a);
          };
          var j = (e, n, t, r, o) => {
            if ((t && y(e, t), r))
              for (let a = 0; a < r.length; a++) y(e, r[a]);
            if (o && n === o.subTree) {
              const i = o.vnode;
              j(e, i, i.scopeId, i.slotScopeIds, o.parent);
            }
          };
          var T = function (e, n, t, r, o, a, i, c) {
            for (
              let l =
                arguments.length > 8 && void 0 !== arguments[8]
                  ? arguments[8]
                  : 0;
              l < e.length;
              l++
            ) {
              const s = (e[l] = c ? An(e[l]) : sn(e[l]));
              E(null, s, n, t, r, o, a, i, c);
            }
          };
          var P = (e, n, t, r, a, i, c) => {
            const l = (n.el = e.el);
            let { patchFlag: s, dynamicChildren: A, dirs: d } = n;
            s |= 16 & e.patchFlag;
            let p;
            const h = e.props || o.kT;
            const f = n.props || o.kT;
            t && xe(t, !1),
              (p = f.onVnodeBeforeUpdate) && pn(p, t, n, e),
              d && be(n, e, t, 'beforeUpdate'),
              t && xe(t, !0);
            const m = a && n.type !== 'foreignObject';
            if (
              (A
                ? H(e.dynamicChildren, A, l, t, r, m, i)
                : c || q(e, n, l, null, t, r, m, i, !1),
              s > 0)
            ) {
              if (16 & s) N(l, n, h, f, t, r, a);
              else if (
                (2 & s &&
                  h.class !== f.class &&
                  u(l, 'class', null, f.class, a),
                4 & s && u(l, 'style', h.style, f.style, a),
                8 & s)
              )
                for (let v = n.dynamicProps, C = 0; C < v.length; C++) {
                  const b = v[C];
                  const y = h[b];
                  const w = f[b];
                  (w === y && b !== 'value') ||
                    u(l, b, y, w, a, e.children, t, r, $);
                }
              1 & s && e.children !== n.children && g(l, n.children);
            } else c || A != null || N(l, n, h, f, t, r, a);
            ((p = f.onVnodeUpdated) || d) &&
              _e(() => {
                p && pn(p, t, n, e), d && be(n, e, t, 'updated');
              }, r);
          };
          var H = (e, n, t, r, o, a, i) => {
            for (let c = 0; c < n.length; c++) {
              const l = e[c];
              const s = n[c];
              const A =
                l.el && (l.type === Re || !Xe(l, s) || 70 & l.shapeFlag)
                  ? C(l.el)
                  : t;
              E(l, s, A, null, r, o, a, i, !0);
            }
          };
          var N = (e, n, t, r, a, i, c) => {
            if (t !== r) {
              for (const l in r)
                if (!(0, o.Gg)(l)) {
                  const s = r[l];
                  const A = t[l];
                  s !== A &&
                    l !== 'value' &&
                    u(e, l, A, s, c, n.children, a, i, $);
                }
              if (t !== o.kT)
                for (const d in t)
                  (0, o.Gg)(d) ||
                    d in r ||
                    u(e, d, t[d], null, c, n.children, a, i, $);
              'value' in r && u(e, 'value', t.value, r.value);
            }
          };
          var R = (e, n, t, r, o, a, i, c, l) => {
            const A = (n.el = e ? e.el : p(''));
            const u = (n.anchor = e ? e.anchor : p(''));
            const { patchFlag: d, dynamicChildren: h, slotScopeIds: f } = n;
            f && (c = c ? c.concat(f) : f),
              e == null
                ? (s(A, t, r), s(u, t, r), T(n.children, t, u, o, a, i, c, l))
                : d > 0 && 64 & d && h && e.dynamicChildren
                ? (H(e.dynamicChildren, h, t, o, a, i, c),
                  (n.key != null || (o && n === o.subTree)) && Be(e, n, !0))
                : q(e, n, t, u, o, a, i, c, l);
          };
          var L = (e, n, t, r, o, a, i, c, l) => {
            (n.slotScopeIds = c),
              e == null
                ? 512 & n.shapeFlag
                  ? o.ctx.activate(n, t, r, i, l)
                  : M(n, t, r, o, a, i, l)
                : V(e, n, l);
          };
          var M = (e, n, t, c, l, s, A) => {
            const u = (e.component = (function (e, n, t) {
              const c = e.type;
              const l = (n ? n.appContext : e.appContext) || yn;
              const s = {
                uid: wn++,
                vnode: e,
                type: c,
                parent: n,
                appContext: l,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new r.Bj(!0),
                render: null,
                proxy: null,
                exposed: null,
                exposeProxy: null,
                withProxy: null,
                provides: n ? n.provides : Object.create(l.provides),
                accessCache: null,
                renderCache: [],
                components: null,
                directives: null,
                propsOptions: le(c, l),
                emitsOptions: i(c, l),
                emit: null,
                emitted: null,
                propsDefaults: o.kT,
                inheritAttrs: c.inheritAttrs,
                ctx: o.kT,
                data: o.kT,
                props: o.kT,
                attrs: o.kT,
                slots: o.kT,
                refs: o.kT,
                setupState: o.kT,
                setupContext: null,
                suspense: t,
                suspenseId: t ? t.pendingId : 0,
                asyncDep: null,
                asyncResolved: !1,
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
                sp: null,
              };
              return (
                (s.ctx = { _: s }),
                (s.root = n ? n.root : s),
                (s.emit = a.bind(null, s)),
                e.ce && e.ce(s),
                s
              );
            })(e, c, l));
            if (
              (F(e) && (u.ctx.renderer = te),
              (function (e) {
                const n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                Bn = n;
                const { props: t, children: r } = e.vnode;
                const o = xn(e);
                ae(e, t, o, n), ge(e, r);
                const a = o ? Dn(e, n) : void 0;
                Bn = !1;
              })(u),
              u.asyncDep)
            ) {
              if ((l && l.registerDep(u, W), !e.el)) {
                const d = (u.subTree = rn(Me));
                k(null, d, n, t);
              }
            } else W(u, e, n, t, l, s, A);
          };
          var V = (e, n, t) => {
            let r;
            let o;
            const a = (n.component = e.component);
            if (
              (function (e, n, t) {
                const { props: r, children: o, component: a } = e;
                const { props: i, children: l, patchFlag: s } = n;
                const A = a.emitsOptions;
                if (n.dirs || n.transition) return !0;
                if (!(t && s >= 0))
                  return (
                    !((!o && !l) || (l && l.$stable)) ||
                    (r !== i && (r ? !i || v(r, i, A) : !!i))
                  );
                if (1024 & s) return !0;
                if (16 & s) return r ? v(r, i, A) : !!i;
                if (8 & s)
                  for (let u = n.dynamicProps, d = 0; d < u.length; d++) {
                    const p = u[d];
                    if (i[p] !== r[p] && !c(A, p)) return !0;
                  }
                return !1;
              })(e, n, t)
            ) {
              if (a.asyncDep && !a.asyncResolved) return void z(a, n, t);
              (a.next = n),
                (r = a.update),
                (o = Mn.indexOf(r)) > Vn && Mn.splice(o, 1),
                a.update();
            } else (n.component = e.component), (n.el = e.el), (a.vnode = n);
          };
          var W = (e, n, t, a, i, c, s) => {
            const A = (e.effect = new r.qq(
              () => {
                if (e.isMounted) {
                  let r;
                  let { next: A, bu: u, u: d, parent: p, vnode: f } = e;
                  const m = A;
                  xe(e, !1),
                    A ? ((A.el = f.el), z(e, A, s)) : (A = f),
                    u && (0, o.ir)(u),
                    (r = A.props && A.props.onVnodeBeforeUpdate) &&
                      pn(r, p, A, f),
                    xe(e, !0);
                  const v = h(e);
                  const g = e.subTree;
                  (e.subTree = v),
                    E(g, v, C(g.el), ee(g), e, i, c),
                    (A.el = v.el),
                    m === null &&
                      (function (e, n) {
                        for (
                          let { vnode: t, parent: r } = e;
                          r && r.subTree === t;

                        )
                          ((t = r.vnode).el = n), (r = r.parent);
                      })(e, v.el),
                    d && _e(d, i),
                    (r = A.props && A.props.onVnodeUpdated) &&
                      _e(() => pn(r, p, A, f), i);
                } else {
                  let b;
                  const { el: y, props: w } = n;
                  const { bm: S, m: _, parent: k } = e;
                  const x = I(n);
                  if (
                    (xe(e, !1),
                    S && (0, o.ir)(S),
                    !x && (b = w && w.onVnodeBeforeMount) && pn(b, k, n),
                    xe(e, !0),
                    y && l)
                  ) {
                    const B = () => {
                      (e.subTree = h(e)), l(y, e.subTree, e, i, null);
                    };
                    x
                      ? n.type.__asyncLoader().then(() => !e.isUnmounted && B())
                      : B();
                  } else {
                    const D = (e.subTree = h(e));
                    E(null, D, t, a, e, i, c), (n.el = D.el);
                  }
                  if ((_ && _e(_, i), !x && (b = w && w.onVnodeMounted))) {
                    const O = n;
                    _e(() => pn(b, k, O), i);
                  }
                  256 & n.shapeFlag && e.a && _e(e.a, i),
                    (e.isMounted = !0),
                    (n = t = a = null);
                }
              },
              () => $n(e.update),
              e.scope
            ));
            const u = (e.update = A.run.bind(A));
            (u.id = e.uid), xe(e, !0), u();
          };
          var z = (e, n, t) => {
            n.component = e;
            const a = e.vnode.props;
            (e.vnode = n),
              (e.next = null),
              (function (e, n, t, a) {
                const {
                  props: i,
                  attrs: c,
                  vnode: { patchFlag: l },
                } = e;
                const s = (0, r.IU)(i);
                const [A] = e.propsOptions;
                let u = !1;
                if (!(a || l > 0) || 16 & l) {
                  let d;
                  for (const p in (ie(e, n, i, c) && (u = !0), s))
                    (n &&
                      ((0, o.RI)(n, p) ||
                        ((d = (0, o.rs)(p)) !== p && (0, o.RI)(n, d)))) ||
                      (A
                        ? !t ||
                          (void 0 === t[p] && void 0 === t[d]) ||
                          (i[p] = ce(A, s, p, void 0, e, !0))
                        : delete i[p]);
                  if (c !== s)
                    for (const h in c)
                      (n && (0, o.RI)(n, h)) || (delete c[h], (u = !0));
                } else if (8 & l)
                  for (let f = e.vnode.dynamicProps, m = 0; m < f.length; m++) {
                    const v = f[m];
                    const g = n[v];
                    if (A)
                      if ((0, o.RI)(c, v)) g !== c[v] && ((c[v] = g), (u = !0));
                      else {
                        const C = (0, o._A)(v);
                        i[C] = ce(A, s, C, g, e, !1);
                      }
                    else g !== c[v] && ((c[v] = g), (u = !0));
                  }
                u && (0, r.X$)(e, 'set', '$attrs');
              })(e, n.props, a, t),
              ((e, n, t) => {
                const { vnode: r, slots: a } = e;
                let i = !0;
                let c = o.kT;
                if (32 & r.shapeFlag) {
                  const l = n._;
                  l
                    ? t && l === 1
                      ? (i = !1)
                      : ((0, o.l7)(a, n), t || l !== 1 || delete a._)
                    : ((i = !n.$stable), me(n, a)),
                    (c = n);
                } else n && (ve(e, n), (c = { default: 1 }));
                if (i) for (const s in a) pe(s) || s in c || delete a[s];
              })(e, n.children, t),
              (0, r.Jd)(),
              rt(void 0, e.update),
              (0, r.lk)();
          };
          var q = function (e, n, t, r, o, a, i, c) {
            const l =
              arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
            const s = e && e.children;
            const A = e ? e.shapeFlag : 0;
            const u = n.children;
            const { patchFlag: d, shapeFlag: p } = n;
            if (d > 0) {
              if (128 & d) return void Y(s, u, t, r, o, a, i, c, l);
              if (256 & d) return void G(s, u, t, r, o, a, i, c, l);
            }
            8 & p
              ? (16 & A && $(s, o, a), u !== s && g(t, u))
              : 16 & A
              ? 16 & p
                ? Y(s, u, t, r, o, a, i, c, l)
                : $(s, o, a, !0)
              : (8 & A && g(t, ''), 16 & p && T(u, t, r, o, a, i, c, l));
          };
          var G = (e, n, t, r, a, i, c, l, s) => {
            (e = e || o.Z6), (n = n || o.Z6);
            let A;
            const u = e.length;
            const d = n.length;
            const p = Math.min(u, d);
            for (A = 0; A < p; A++) {
              const h = (n[A] = s ? An(n[A]) : sn(n[A]));
              E(e[A], h, t, null, a, i, c, l, s);
            }
            u > d ? $(e, a, i, !0, !1, p) : T(n, t, r, a, i, c, l, s, p);
          };
          var Y = (e, n, t, r, a, i, c, l, s) => {
            for (
              var A = 0, u = n.length, d = e.length - 1, p = u - 1;
              A <= d && A <= p;

            ) {
              const h = e[A];
              const f = (n[A] = s ? An(n[A]) : sn(n[A]));
              if (!Xe(h, f)) break;
              E(h, f, t, null, a, i, c, l, s), A++;
            }
            for (; A <= d && A <= p; ) {
              const m = e[d];
              const v = (n[p] = s ? An(n[p]) : sn(n[p]));
              if (!Xe(m, v)) break;
              E(m, v, t, null, a, i, c, l, s), d--, p--;
            }
            if (A > d) {
              if (A <= p)
                for (let g = p + 1, C = g < u ? n[g].el : r; A <= p; )
                  E(
                    null,
                    (n[A] = s ? An(n[A]) : sn(n[A])),
                    t,
                    C,
                    a,
                    i,
                    c,
                    l,
                    s
                  ),
                    A++;
            } else if (A > p) for (; A <= d; ) Q(e[A], a, i, !0), A++;
            else {
              let b;
              const y = A;
              const w = A;
              const S = new Map();
              for (A = w; A <= p; A++) {
                const _ = (n[A] = s ? An(n[A]) : sn(n[A]));
                _.key != null && S.set(_.key, A);
              }
              let k = 0;
              const x = p - w + 1;
              let B = !1;
              let D = 0;
              const O = new Array(x);
              for (A = 0; A < x; A++) O[A] = 0;
              for (A = y; A <= d; A++) {
                const I = e[A];
                if (k >= x) Q(I, a, i, !0);
                else {
                  let F = void 0;
                  if (I.key != null) F = S.get(I.key);
                  else
                    for (b = w; b <= p; b++)
                      if (O[b - w] === 0 && Xe(I, n[b])) {
                        F = b;
                        break;
                      }
                  void 0 === F
                    ? Q(I, a, i, !0)
                    : ((O[F - w] = A + 1),
                      F >= D ? (D = F) : (B = !0),
                      E(I, n[F], t, null, a, i, c, l, s),
                      k++);
                }
              }
              const U = B
                ? (function (e) {
                    let n;
                    let t;
                    let r;
                    let o;
                    let a;
                    const i = e.slice();
                    const c = [0];
                    const l = e.length;
                    for (n = 0; n < l; n++) {
                      const s = e[n];
                      if (s !== 0) {
                        if (e[(t = c[c.length - 1])] < s) {
                          (i[n] = t), c.push(n);
                          continue;
                        }
                        for (r = 0, o = c.length - 1; r < o; )
                          e[c[(a = (r + o) >> 1)]] < s ? (r = a + 1) : (o = a);
                        s < e[c[r]] && (r > 0 && (i[n] = c[r - 1]), (c[r] = n));
                      }
                    }
                    for (o = c[(r = c.length) - 1]; r-- > 0; )
                      (c[r] = o), (o = i[o]);
                    return c;
                  })(O)
                : o.Z6;
              for (b = U.length - 1, A = x - 1; A >= 0; A--) {
                const j = w + A;
                const T = n[j];
                const P = j + 1 < u ? n[j + 1].el : r;
                O[A] === 0
                  ? E(null, T, t, P, a, i, c, l, s)
                  : B && (b < 0 || A !== U[b] ? Z(T, t, P, 2) : b--);
              }
            }
          };
          var Z = function (e, n, t, r) {
            const o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : null;
            const {
              el: a,
              type: i,
              transition: c,
              children: l,
              shapeFlag: A,
            } = e;
            if (6 & A) Z(e.component.subTree, n, t, r);
            else if (128 & A) e.suspense.move(n, t, r);
            else if (64 & A) i.move(e, n, t, te);
            else if (i !== Re)
              if (i !== Ve) {
                if (r !== 2 && 1 & A && c)
                  if (r === 0)
                    c.beforeEnter(a), s(a, n, t), _e(() => c.enter(a), o);
                  else {
                    const { leave: u, delayLeave: d, afterLeave: p } = c;
                    const h = () => s(a, n, t);
                    const f = () => {
                      u(a, () => {
                        h(), p && p();
                      });
                    };
                    d ? d(a, h, f) : f();
                  }
                else s(a, n, t);
              } else B(e, n, t);
            else {
              s(a, n, t);
              for (let m = 0; m < l.length; m++) Z(l[m], n, t, r);
              s(e.anchor, n, t);
            }
          };
          var Q = function (e, n, t) {
            const r =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const o =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            const {
              type: a,
              props: i,
              ref: c,
              children: l,
              dynamicChildren: s,
              shapeFlag: A,
              patchFlag: u,
              dirs: d,
            } = e;
            if ((c != null && Ee(c, null, t, e, !0), 256 & A))
              n.ctx.deactivate(e);
            else {
              let p;
              const h = 1 & A && d;
              const f = !I(e);
              if (
                (f && (p = i && i.onVnodeBeforeUnmount) && pn(p, n, e), 6 & A)
              )
                X(e.component, t, r);
              else {
                if (128 & A) return void e.suspense.unmount(t, r);
                h && be(e, null, n, 'beforeUnmount'),
                  64 & A
                    ? e.type.remove(e, n, t, o, te, r)
                    : s && (a !== Re || (u > 0 && 64 & u))
                    ? $(s, n, t, !1, !0)
                    : ((a === Re && 384 & u) || (!o && 16 & A)) && $(l, n, t),
                  r && J(e);
              }
              ((f && (p = i && i.onVnodeUnmounted)) || h) &&
                _e(() => {
                  p && pn(p, n, e), h && be(e, null, n, 'unmounted');
                }, t);
            }
          };
          var J = (e) => {
            const { type: n, el: t, anchor: r, transition: o } = e;
            if (n !== Re)
              if (n !== Ve) {
                const a = () => {
                  A(t), o && !o.persisted && o.afterLeave && o.afterLeave();
                };
                if (1 & e.shapeFlag && o && !o.persisted) {
                  const { leave: i, delayLeave: c } = o;
                  const l = () => i(t, a);
                  c ? c(e.el, a, l) : l();
                } else a();
              } else D(e);
            else K(t, r);
          };
          var K = (e, n) => {
            for (var t; e !== n; ) (t = b(e)), A(e), (e = t);
            A(n);
          };
          var X = (e, n, t) => {
            const { bum: r, scope: a, update: i, subTree: c, um: l } = e;
            r && (0, o.ir)(r),
              a.stop(),
              i && ((i.active = !1), Q(c, e, n, t)),
              l && _e(l, n),
              _e(() => {
                e.isUnmounted = !0;
              }, n),
              n &&
                n.pendingBranch &&
                !n.isUnmounted &&
                e.asyncDep &&
                !e.asyncResolved &&
                e.suspenseId === n.pendingId &&
                (n.deps--, n.deps === 0 && n.resolve());
          };
          var $ = function (e, n, t) {
            for (
              let r =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                o =
                  arguments.length > 4 &&
                  void 0 !== arguments[4] &&
                  arguments[4],
                a =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : 0;
              a < e.length;
              a++
            )
              Q(e[a], n, t, r, o);
          };
          var ee = (e) =>
            6 & e.shapeFlag
              ? ee(e.component.subTree)
              : 128 & e.shapeFlag
              ? e.suspense.next()
              : b(e.anchor || e.el);
          const ne = (e, n, t) => {
            e == null
              ? n._vnode && Q(n._vnode, null, null, !0)
              : E(n._vnode || null, e, n, null, null, null, t),
              ot(),
              (n._vnode = e);
          };
          var te = {
            p: E,
            um: Q,
            m: Z,
            r: J,
            mt: M,
            mc: T,
            pc: q,
            pbc: H,
            n: ee,
            o: e,
          };
          return (
            n && ([t, l] = n(te)),
            { render: ne, hydrate: t, createApp: Se(ne, t) }
          );
        })(e);
      }
      function xe(e, n) {
        const { effect: t, update: r } = e;
        t.allowRecurse = r.allowRecurse = n;
      }
      function Be(e, n) {
        const t =
          arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const r = e.children;
        const a = n.children;
        if ((0, o.kJ)(r) && (0, o.kJ)(a))
          for (let i = 0; i < r.length; i++) {
            const c = r[i];
            let l = a[i];
            1 & l.shapeFlag &&
              !l.dynamicChildren &&
              ((l.patchFlag <= 0 || l.patchFlag === 32) &&
                ((l = a[i] = An(a[i])).el = c.el),
              t || Be(c, l));
          }
      }
      const De = (e) => e.__isTeleport;
      const Oe = (e) => e && (e.disabled || e.disabled === '');
      const Ie = (e) =>
        typeof SVGElement !== 'undefined' && e instanceof SVGElement;
      const Fe = (e, n) => {
        const t = e && e.to;
        return (0, o.HD)(t) ? (n ? n(t) : null) : t;
      };
      function Ue(e, n, t, r) {
        const {
          o: { insert: o },
          m: a,
        } = r;
        const i =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2;
        i === 0 && o(e.targetAnchor, n, t);
        const { el: c, anchor: l, shapeFlag: s, children: A, props: u } = e;
        const d = i === 2;
        if ((d && o(c, n, t), (!d || Oe(u)) && 16 & s))
          for (let p = 0; p < A.length; p++) a(A[p], n, t, 2);
        d && o(l, n, t);
      }
      var je = {
        __isTeleport: !0,
        process(e, n, t, r, o, a, i, c, l, s) {
          const {
            mc: A,
            pc: u,
            pbc: d,
            o: { insert: p, querySelector: h, createText: f, createComment: m },
          } = s;
          const v = Oe(n.props);
          const { shapeFlag: g, children: C, dynamicChildren: b } = n;
          if (e == null) {
            const y = (n.el = f(''));
            const w = (n.anchor = f(''));
            p(y, t, r), p(w, t, r);
            const S = (n.target = Fe(n.props, h));
            const E = (n.targetAnchor = f(''));
            S && (p(E, S), (i = i || Ie(S)));
            const _ = (e, n) => {
              16 & g && A(C, e, n, o, a, i, c, l);
            };
            v ? _(t, w) : S && _(S, E);
          } else {
            n.el = e.el;
            const k = (n.anchor = e.anchor);
            const x = (n.target = e.target);
            const B = (n.targetAnchor = e.targetAnchor);
            const D = Oe(e.props);
            const O = D ? t : x;
            const I = D ? k : B;
            if (
              ((i = i || Ie(x)),
              b
                ? (d(e.dynamicChildren, b, O, o, a, i, c), Be(e, n, !0))
                : l || u(e, n, O, I, o, a, i, c, !1),
              v)
            )
              D || Ue(n, t, k, s, 1);
            else if ((n.props && n.props.to) !== (e.props && e.props.to)) {
              const F = (n.target = Fe(n.props, h));
              F && Ue(n, F, null, s, 0);
            } else D && Ue(n, x, B, s, 1);
          }
        },
        remove(e, n, t, r, o, a) {
          const {
            um: i,
            o: { remove: c },
          } = o;
          const {
            shapeFlag: l,
            children: s,
            anchor: A,
            targetAnchor: u,
            target: d,
            props: p,
          } = e;
          if ((d && c(u), (a || !Oe(p)) && (c(A), 16 & l)))
            for (let h = 0; h < s.length; h++) {
              const f = s[h];
              i(f, n, t, !0, !!f.dynamicChildren);
            }
        },
        move: Ue,
        hydrate(e, n, t, r, o, a, i, c) {
          const {
            o: { nextSibling: l, parentNode: s, querySelector: A },
          } = i;
          const u = (n.target = Fe(n.props, A));
          if (u) {
            const d = u._lpa || u.firstChild;
            16 & n.shapeFlag &&
              (Oe(n.props)
                ? ((n.anchor = c(l(e), n, s(e), t, r, o, a)),
                  (n.targetAnchor = d))
                : ((n.anchor = l(e)),
                  (n.targetAnchor = c(d, n, u, t, r, o, a))),
              (u._lpa = n.targetAnchor && l(n.targetAnchor)));
          }
          return n.anchor && l(n.anchor);
        },
      };
      const Te = 'components';
      function Pe(e, n) {
        return (
          (function (e, n) {
            const t =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const r = l || Sn;
            if (r) {
              const a = r.type;
              if (e === Te) {
                const i = Un(a);
                if (
                  i &&
                  (i === n ||
                    i === (0, o._A)(n) ||
                    i === (0, o.kC)((0, o._A)(n)))
                )
                  return a;
              }
              const c = Ne(r[e] || a[e], n) || Ne(r.appContext[e], n);
              return !c && t ? a : c;
            }
          })(Te, e, !0, n) || e
        );
      }
      const He = Symbol();
      function Ne(e, n) {
        return e && (e[n] || e[(0, o._A)(n)] || e[(0, o.kC)((0, o._A)(n))]);
      }
      var Re = Symbol(void 0);
      var Le = Symbol(void 0);
      var Me = Symbol(void 0);
      var Ve = Symbol(void 0);
      var We = [];
      let ze = null;
      function qe() {
        const e =
          arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        We.push((ze = e ? null : []));
      }
      let Ge = 1;
      function Ye(e) {
        Ge += e;
      }
      function Ze(e) {
        return (
          (e.dynamicChildren = Ge > 0 ? ze || o.Z6 : null),
          We.pop(),
          (ze = We[We.length - 1] || null),
          Ge > 0 && ze && ze.push(e),
          e
        );
      }
      function Qe(e, n, t, r, o, a) {
        return Ze(tn(e, n, t, r, o, a, !0));
      }
      function Je(e, n, t, r, o) {
        return Ze(rn(e, n, t, r, o, !0));
      }
      function Ke(e) {
        return !!e && !0 === e.__v_isVNode;
      }
      function Xe(e, n) {
        return e.type === n.type && e.key === n.key;
      }
      var $e = '__vInternal';
      const en = (e) => {
        const { key: n } = e;
        return n != null ? n : null;
      };
      const nn = (e) => {
        const { ref: n, ref_key: t, ref_for: a } = e;
        return n != null
          ? (0, o.HD)(n) || (0, r.dq)(n) || (0, o.mf)(n)
            ? { i: l, r: n, k: t, f: !!a }
            : n
          : null;
      };
      function tn(e) {
        const n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const a =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const i =
          arguments.length > 5 && void 0 !== arguments[5]
            ? arguments[5]
            : e === Re
            ? 0
            : 1;
        const c =
          arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const l =
          arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const A = {
          __v_isVNode: !0,
          __v_skip: !0,
          type: e,
          props: n,
          key: n && en(n),
          ref: n && nn(n),
          scopeId: s,
          slotScopeIds: null,
          children: t,
          component: null,
          suspense: null,
          ssContent: null,
          ssFallback: null,
          dirs: null,
          transition: null,
          el: null,
          anchor: null,
          target: null,
          targetAnchor: null,
          staticCount: 0,
          shapeFlag: i,
          patchFlag: r,
          dynamicProps: a,
          dynamicChildren: null,
          appContext: null,
        };
        return (
          l
            ? (un(A, t), 128 & i && e.normalize(A))
            : t && (A.shapeFlag |= (0, o.HD)(t) ? 8 : 16),
          Ge > 0 &&
            !c &&
            ze &&
            (A.patchFlag > 0 || 6 & i) &&
            A.patchFlag !== 32 &&
            ze.push(A),
          A
        );
      }
      var rn = function (e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const a =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const i =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const c =
          arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (((e && e !== He) || (e = Me), Ke(e))) {
          const l = an(e, n, !0);
          return t && un(l, t), l;
        }
        if ((jn(e) && (e = e.__vccOpts), n)) {
          n = on(n);
          let { class: s, style: A } = n;
          s && !(0, o.HD)(s) && (n.class = (0, o.C_)(s)),
            (0, o.Kn)(A) &&
              ((0, r.X3)(A) && !(0, o.kJ)(A) && (A = (0, o.l7)({}, A)),
              (n.style = (0, o.j5)(A)));
        }
        const u = (0, o.HD)(e)
          ? 1
          : g(e)
          ? 128
          : De(e)
          ? 64
          : (0, o.Kn)(e)
          ? 4
          : (0, o.mf)(e)
          ? 2
          : 0;
        return tn(e, n, t, a, i, u, c, !0);
      };
      function on(e) {
        return e ? ((0, r.X3)(e) || $e in e ? (0, o.l7)({}, e) : e) : null;
      }
      function an(e, n) {
        const t =
          arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const { props: r, ref: a, patchFlag: i, children: c } = e;
        const l = n ? dn(r || {}, n) : r;
        const s = {
          __v_isVNode: !0,
          __v_skip: !0,
          type: e.type,
          props: l,
          key: l && en(l),
          ref:
            n && n.ref
              ? t && a
                ? (0, o.kJ)(a)
                  ? a.concat(nn(n))
                  : [a, nn(n)]
                : nn(n)
              : a,
          scopeId: e.scopeId,
          slotScopeIds: e.slotScopeIds,
          children: c,
          target: e.target,
          targetAnchor: e.targetAnchor,
          staticCount: e.staticCount,
          shapeFlag: e.shapeFlag,
          patchFlag: n && e.type !== Re ? (i === -1 ? 16 : 16 | i) : i,
          dynamicProps: e.dynamicProps,
          dynamicChildren: e.dynamicChildren,
          appContext: e.appContext,
          dirs: e.dirs,
          transition: e.transition,
          component: e.component,
          suspense: e.suspense,
          ssContent: e.ssContent && an(e.ssContent),
          ssFallback: e.ssFallback && an(e.ssFallback),
          el: e.el,
          anchor: e.anchor,
        };
        return s;
      }
      function cn() {
        const e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ' ';
        const n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return rn(Le, null, e, n);
      }
      function ln() {
        const e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
        const n =
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return n ? (qe(), Je(Me, null, e)) : rn(Me, null, e);
      }
      function sn(e) {
        return e == null || typeof e === 'boolean'
          ? rn(Me)
          : (0, o.kJ)(e)
          ? rn(Re, null, e.slice())
          : typeof e === 'object'
          ? An(e)
          : rn(Le, null, String(e));
      }
      function An(e) {
        return e.el === null || e.memo ? e : an(e);
      }
      function un(e, n) {
        let t = 0;
        const { shapeFlag: r } = e;
        if (n == null) n = null;
        else if ((0, o.kJ)(n)) t = 16;
        else if (typeof n === 'object') {
          if (65 & r) {
            const a = n.default;
            return void (
              a && (a._c && (a._d = !1), un(e, a()), a._c && (a._d = !0))
            );
          }
          t = 32;
          const i = n._;
          i || $e in n
            ? i === 3 &&
              l &&
              (l.slots._ === 1 ? (n._ = 1) : ((n._ = 2), (e.patchFlag |= 1024)))
            : (n._ctx = l);
        } else
          (0, o.mf)(n)
            ? ((n = { default: n, _ctx: l }), (t = 32))
            : ((n = String(n)), 64 & r ? ((t = 16), (n = [cn(n)])) : (t = 8));
        (e.children = n), (e.shapeFlag |= t);
      }
      function dn() {
        for (var e = {}, n = 0; n < arguments.length; n++) {
          const t = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          for (const r in t)
            if (r === 'class')
              e.class !== t.class && (e.class = (0, o.C_)([e.class, t.class]));
            else if (r === 'style') e.style = (0, o.j5)([e.style, t.style]);
            else if ((0, o.F7)(r)) {
              const a = e[r];
              const i = t[r];
              a === i ||
                ((0, o.kJ)(a) && a.includes(i)) ||
                (e[r] = a ? [].concat(a, i) : i);
            } else r !== '' && (e[r] = t[r]);
        }
        return e;
      }
      function pn(e, n, t) {
        const r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        Pn(e, n, 7, [t, r]);
      }
      function hn(e, n, t, r) {
        let a;
        const i = t && t[r];
        if ((0, o.kJ)(e) || (0, o.HD)(e)) {
          a = new Array(e.length);
          for (let c = 0, l = e.length; c < l; c++)
            a[c] = n(e[c], c, void 0, i && i[c]);
        } else if (typeof e === 'number') {
          a = new Array(e);
          for (let s = 0; s < e; s++) a[s] = n(s + 1, s, void 0, i && i[s]);
        } else if ((0, o.Kn)(e))
          if (e[Symbol.iterator])
            a = Array.from(e, (e, t) => n(e, t, void 0, i && i[t]));
          else {
            const A = Object.keys(e);
            a = new Array(A.length);
            for (let u = 0, d = A.length; u < d; u++) {
              const p = A[u];
              a[u] = n(e[p], p, u, i && i[u]);
            }
          }
        else a = [];
        return t && (t[r] = a), a;
      }
      function fn(e, n) {
        for (let t = 0; t < n.length; t++) {
          const r = n[t];
          if ((0, o.kJ)(r))
            for (let a = 0; a < r.length; a++) e[r[a].name] = r[a].fn;
          else r && (e[r.name] = r.fn);
        }
        return e;
      }
      function mn(e, n) {
        const t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const r = arguments.length > 3 ? arguments[3] : void 0;
        const o = arguments.length > 4 ? arguments[4] : void 0;
        if (l.isCE)
          return rn('slot', n === 'default' ? null : { name: n }, r && r());
        const a = e[n];
        a && a._c && (a._d = !1), qe();
        const i = a && vn(a(t));
        const c = Je(
          Re,
          { key: t.key || '_'.concat(n) },
          i || (r ? r() : []),
          i && e._ === 1 ? 64 : -2
        );
        return (
          !o && c.scopeId && (c.slotScopeIds = [c.scopeId + '-s']),
          a && a._c && (a._d = !0),
          c
        );
      }
      function vn(e) {
        return e.some(
          (e) =>
            !Ke(e) || (e.type !== Me && !(e.type === Re && !vn(e.children)))
        )
          ? e
          : null;
      }
      var gn = (e) => (e ? (xn(e) ? Fn(e) || e.proxy : gn(e.parent)) : null);
      const Cn = (0, o.l7)(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => gn(e.parent),
        $root: (e) => gn(e.root),
        $emit: (e) => e.emit,
        $options: (e) => X(e),
        $forceUpdate: (e) => () => $n(e.update),
        $nextTick: (e) => Xn.bind(e.proxy),
        $watch: (e) => At.bind(e),
      });
      const bn = {
        get(e, n) {
          let t;
          const { _: a } = e;
          const {
            ctx: i,
            setupState: c,
            data: l,
            props: s,
            accessCache: A,
            type: u,
            appContext: d,
          } = a;
          if (n[0] !== '$') {
            const p = A[n];
            if (void 0 !== p)
              switch (p) {
                case 1:
                  return c[n];
                case 2:
                  return l[n];
                case 4:
                  return i[n];
                case 3:
                  return s[n];
              }
            else {
              if (c !== o.kT && (0, o.RI)(c, n)) return (A[n] = 1), c[n];
              if (l !== o.kT && (0, o.RI)(l, n)) return (A[n] = 2), l[n];
              if ((t = a.propsOptions[0]) && (0, o.RI)(t, n))
                return (A[n] = 3), s[n];
              if (i !== o.kT && (0, o.RI)(i, n)) return (A[n] = 4), i[n];
              Q && (A[n] = 0);
            }
          }
          let h;
          let f;
          const m = Cn[n];
          return m
            ? (n === '$attrs' && (0, r.j)(a, 'get', n), m(a))
            : (h = u.__cssModules) && (h = h[n])
            ? h
            : i !== o.kT && (0, o.RI)(i, n)
            ? ((A[n] = 4), i[n])
            : ((f = d.config.globalProperties),
              (0, o.RI)(f, n) ? f[n] : void 0);
        },
        set(e, n, t) {
          const { _: r } = e;
          const { data: a, setupState: i, ctx: c } = r;
          if (i !== o.kT && (0, o.RI)(i, n)) i[n] = t;
          else if (a !== o.kT && (0, o.RI)(a, n)) a[n] = t;
          else if ((0, o.RI)(r.props, n)) return !1;
          return !((n[0] === '$' && n.slice(1) in r) || ((c[n] = t), 0));
        },
        has(e, n) {
          let t;
          const {
            _: {
              data: r,
              setupState: a,
              accessCache: i,
              ctx: c,
              appContext: l,
              propsOptions: s,
            },
          } = e;
          return (
            !!i[n] ||
            (r !== o.kT && (0, o.RI)(r, n)) ||
            (a !== o.kT && (0, o.RI)(a, n)) ||
            ((t = s[0]) && (0, o.RI)(t, n)) ||
            (0, o.RI)(c, n) ||
            (0, o.RI)(Cn, n) ||
            (0, o.RI)(l.config.globalProperties, n)
          );
        },
      };
      var yn = ye();
      var wn = 0;
      var Sn = null;
      var En = () => Sn || l;
      var _n = (e) => {
        (Sn = e), e.scope.on();
      };
      var kn = () => {
        Sn && Sn.scope.off(), (Sn = null);
      };
      function xn(e) {
        return 4 & e.vnode.shapeFlag;
      }
      var Bn = !1;
      function Dn(e, n) {
        const t = e.type;
        (e.accessCache = Object.create(null)),
          (e.proxy = (0, r.Xl)(new Proxy(e.ctx, bn)));
        const { setup: a } = t;
        if (a) {
          const i = (e.setupContext =
            a.length > 1
              ? (function (e) {
                  let n;
                  return {
                    get attrs() {
                      return (
                        n ||
                        (n = (function (e) {
                          return new Proxy(e.attrs, {
                            get: (n, t) => ((0, r.j)(e, 'get', '$attrs'), n[t]),
                          });
                        })(e))
                      );
                    },
                    slots: e.slots,
                    emit: e.emit,
                    expose: (n) => {
                      e.exposed = n || {};
                    },
                  };
                })(e)
              : null);
          _n(e), (0, r.Jd)();
          const c = Tn(a, e, 0, [e.props, i]);
          if (((0, r.lk)(), kn(), (0, o.tI)(c))) {
            if ((c.then(kn, kn), n))
              return c
                .then((t) => {
                  On(e, t, n);
                })
                .catch((n) => {
                  Hn(n, e, 0);
                });
            e.asyncDep = c;
          } else On(e, c, n);
        } else In(e, n);
      }
      function On(e, n, t) {
        (0, o.mf)(n)
          ? e.type.__ssrInlineRender
            ? (e.ssrRender = n)
            : (e.render = n)
          : (0, o.Kn)(n) && (e.setupState = (0, r.WL)(n)),
          In(e, t);
      }
      function In(e, n, t) {
        const a = e.type;
        e.render || (e.render = a.render || o.dG);
        _n(e),
          (0, r.Jd)(),
          (function (e) {
            const n = X(e);
            const t = e.proxy;
            const a = e.ctx;
            (Q = !1), n.beforeCreate && J(n.beforeCreate, e, 'bc');
            let i;
            const {
              data: c,
              computed: l,
              methods: s,
              watch: A,
              provide: u,
              inject: d,
              created: p,
              beforeMount: h,
              mounted: f,
              beforeUpdate: m,
              updated: v,
              activated: g,
              deactivated: y,
              beforeDestroy: w,
              beforeUnmount: S,
              destroyed: E,
              unmounted: _,
              render: k,
              renderTracked: x,
              renderTriggered: B,
              errorCaptured: D,
              serverPrefetch: O,
              expose: I,
              inheritAttrs: F,
              components: T,
              directives: P,
              filters: H,
            } = n;
            if (
              (d &&
                (function (e, n) {
                  (arguments.length > 2 && void 0 !== arguments[2]) || o.dG;
                  const t =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  (0, o.kJ)(e) && (e = te(e));
                  const a = function (a) {
                    const i = e[a];
                    let c = void 0;
                    (c = (0, o.Kn)(i)
                      ? 'default' in i
                        ? b(i.from || a, i.default, !0)
                        : b(i.from || a)
                      : b(i)),
                      (0, r.dq)(c) && t
                        ? Object.defineProperty(n, a, {
                            enumerable: !0,
                            configurable: !0,
                            get: () => c.value,
                            set: (e) => (c.value = e),
                          })
                        : (n[a] = c);
                  };
                  for (const i in e) a(i);
                })(d, a, null, e.appContext.config.unwrapInjectedRef),
              s)
            )
              for (const N in s) {
                const $ = s[N];
                (0, o.mf)($) && (a[N] = $.bind(t));
              }
            if (
              (c &&
                ((i = c.call(t, t)), (0, o.Kn)(i) && (e.data = (0, r.qj)(i))),
              (Q = !0),
              l)
            ) {
              const ee = function (e) {
                const n = l[e];
                const i = (0, o.mf)(n)
                  ? n.bind(t, t)
                  : (0, o.mf)(n.get)
                  ? n.get.bind(t, t)
                  : o.dG;
                const c =
                  !(0, o.mf)(n) && (0, o.mf)(n.set) ? n.set.bind(t) : o.dG;
                const s = (0, r.Fl)({ get: i, set: c });
                Object.defineProperty(a, e, {
                  enumerable: !0,
                  configurable: !0,
                  get: () => s.value,
                  set: (e) => (s.value = e),
                });
              };
              for (const ne in l) ee(ne);
            }
            if (A) for (const re in A) K(A[re], a, t, re);
            if (u) {
              const oe = (0, o.mf)(u) ? u.call(t) : u;
              Reflect.ownKeys(oe).forEach((e) => {
                C(e, oe[e]);
              });
            }
            function ae(e, n) {
              (0, o.kJ)(n) ? n.forEach((n) => e(n.bind(t))) : n && e(n.bind(t));
            }
            if (
              (p && J(p, e, 'c'),
              ae(R, h),
              ae(L, f),
              ae(M, m),
              ae(V, v),
              ae(U, g),
              ae(j, y),
              ae(Z, D),
              ae(Y, x),
              ae(G, B),
              ae(W, S),
              ae(z, _),
              ae(q, O),
              (0, o.kJ)(I))
            )
              if (I.length) {
                const ie = e.exposed || (e.exposed = {});
                I.forEach((e) => {
                  Object.defineProperty(ie, e, {
                    get: () => t[e],
                    set: (n) => (t[e] = n),
                  });
                });
              } else e.exposed || (e.exposed = {});
            k && e.render === o.dG && (e.render = k),
              F != null && (e.inheritAttrs = F),
              T && (e.components = T),
              P && (e.directives = P);
          })(e),
          (0, r.lk)(),
          kn();
      }
      function Fn(e) {
        if (e.exposed)
          return (
            e.exposeProxy ||
            (e.exposeProxy = new Proxy((0, r.WL)((0, r.Xl)(e.exposed)), {
              get: (n, t) => (t in n ? n[t] : t in Cn ? Cn[t](e) : void 0),
            }))
          );
      }
      function Un(e) {
        return ((0, o.mf)(e) && e.displayName) || e.name;
      }
      function jn(e) {
        return (0, o.mf)(e) && '__vccOpts' in e;
      }
      function Tn(e, n, t, r) {
        let o;
        try {
          o = r ? e(...r) : e();
        } catch (e) {
          Hn(e, n, t);
        }
        return o;
      }
      function Pn(e, n, t, r) {
        if ((0, o.mf)(e)) {
          const a = Tn(e, n, t, r);
          return (
            a &&
              (0, o.tI)(a) &&
              a.catch((e) => {
                Hn(e, n, t);
              }),
            a
          );
        }
        for (var i = [], c = 0; c < e.length; c++) i.push(Pn(e[c], n, t, r));
        return i;
      }
      function Hn(e, n, t) {
        const r = n ? n.vnode : null;
        if (n) {
          for (var o = n.parent, a = n.proxy, i = t; o; ) {
            const c = o.ec;
            if (c)
              for (let l = 0; l < c.length; l++)
                if (!1 === c[l](e, a, i)) return;
            o = o.parent;
          }
          const s = n.appContext.config.errorHandler;
          if (s) return void Tn(s, null, 10, [e, a, i]);
        }
        Nn(e, t, r);
      }
      function Nn(e, n, t) {
        console.error(e);
      }
      let Rn = !1;
      let Ln = !1;
      var Mn = [];
      var Vn = 0;
      const Wn = [];
      let zn = null;
      let qn = 0;
      var Gn = [];
      var Yn = null;
      var Zn = 0;
      const Qn = Promise.resolve();
      let Jn = null;
      let Kn = null;
      function Xn(e) {
        const n = Jn || Qn;
        return e ? n.then(this ? e.bind(this) : e) : n;
      }
      function $n(e) {
        (Mn.length && Mn.includes(e, Rn && e.allowRecurse ? Vn + 1 : Vn)) ||
          e === Kn ||
          (e.id == null
            ? Mn.push(e)
            : Mn.splice(
                (function (e) {
                  for (var n = Vn + 1, t = Mn.length; n < t; ) {
                    const r = (n + t) >>> 1;
                    at(Mn[r]) < e ? (n = r + 1) : (t = r);
                  }
                  return n;
                })(e.id),
                0,
                e
              ),
          et());
      }
      function et() {
        Rn || Ln || ((Ln = !0), (Jn = Qn.then(it)));
      }
      function nt(e, n, t, r) {
        (0, o.kJ)(e)
          ? t.push(...e)
          : (n && n.includes(e, e.allowRecurse ? r + 1 : r)) || t.push(e),
          et();
      }
      function tt(e) {
        nt(e, zn, Wn, qn);
      }
      function rt(e) {
        const n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (Wn.length) {
          for (
            Kn = n, zn = [...new Set(Wn)], Wn.length = 0, qn = 0;
            qn < zn.length;
            qn++
          )
            zn[qn]();
          (zn = null), (qn = 0), (Kn = null), rt(e, n);
        }
      }
      function ot(e) {
        if (Gn.length) {
          const n = [...new Set(Gn)];
          if (((Gn.length = 0), Yn)) return void Yn.push(...n);
          for (
            (Yn = n).sort((e, n) => at(e) - at(n)), Zn = 0;
            Zn < Yn.length;
            Zn++
          )
            Yn[Zn]();
          (Yn = null), (Zn = 0);
        }
      }
      var at = (e) => (e.id == null ? 1 / 0 : e.id);
      function it(e) {
        (Ln = !1), (Rn = !0), rt(e), Mn.sort((e, n) => at(e) - at(n)), o.dG;
        try {
          for (Vn = 0; Vn < Mn.length; Vn++) {
            const n = Mn[Vn];
            n && !1 !== n.active && Tn(n, null, 14);
          }
        } finally {
          (Vn = 0),
            (Mn.length = 0),
            ot(),
            (Rn = !1),
            (Jn = null),
            (Mn.length || Wn.length || Gn.length) && it(e);
        }
      }
      const ct = {};
      function lt(e, n, t) {
        return st(e, n, t);
      }
      function st(e, n) {
        let t;
        let a;
        let { immediate: i, deep: c, flush: l, onTrack: s, onTrigger: A } =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.kT;
        const u = Sn;
        let d = !1;
        let p = !1;
        if (
          ((0, r.dq)(e)
            ? ((t = () => e.value), (d = !!e._shallow))
            : (0, r.PG)(e)
            ? ((t = () => e), (c = !0))
            : (0, o.kJ)(e)
            ? ((p = !0),
              (d = e.some(r.PG)),
              (t = () =>
                e.map((e) =>
                  (0, r.dq)(e)
                    ? e.value
                    : (0, r.PG)(e)
                    ? dt(e)
                    : (0, o.mf)(e)
                    ? Tn(e, u, 2)
                    : void 0
                )))
            : (t = (0, o.mf)(e)
                ? n
                  ? () => Tn(e, u, 2)
                  : () => {
                      if (!u || !u.isUnmounted)
                        return a && a(), Pn(e, u, 3, [f]);
                    }
                : o.dG),
          n && c)
        ) {
          const h = t;
          t = () => dt(h());
        }
        var f = (e) => {
          a = C.onStop = () => {
            Tn(e, u, 4);
          };
        };
        if (Bn)
          return (
            (f = o.dG),
            n ? i && Pn(n, u, 3, [t(), p ? [] : void 0, f]) : t(),
            o.dG
          );
        let m;
        let v = p ? [] : ct;
        const g = () => {
          if (C.active)
            if (n) {
              const e = C.run();
              (c ||
                d ||
                (p ? e.some((e, n) => (0, o.aU)(e, v[n])) : (0, o.aU)(e, v))) &&
                (a && a(), Pn(n, u, 3, [e, v === ct ? void 0 : v, f]), (v = e));
            } else C.run();
        };
        (g.allowRecurse = !!n),
          (m =
            l === 'sync'
              ? g
              : l === 'post'
              ? () => _e(g, u && u.suspense)
              : () => {
                  !u || u.isMounted ? tt(g) : g();
                });
        var C = new r.qq(t, m);
        return (
          n
            ? i
              ? g()
              : (v = C.run())
            : l === 'post'
            ? _e(C.run.bind(C), u && u.suspense)
            : C.run(),
          () => {
            C.stop(), u && u.scope && (0, o.Od)(u.scope.effects, C);
          }
        );
      }
      function At(e, n, t) {
        let r;
        const a = this.proxy;
        const i = (0, o.HD)(e)
          ? e.includes('.')
            ? ut(a, e)
            : () => a[e]
          : e.bind(a, a);
        (0, o.mf)(n) ? (r = n) : ((r = n.handler), (t = n));
        const c = Sn;
        _n(this);
        const l = st(i, r.bind(a), t);
        return c ? _n(c) : kn(), l;
      }
      function ut(e, n) {
        const t = n.split('.');
        return () => {
          for (var n = e, r = 0; r < t.length && n; r++) n = n[t[r]];
          return n;
        };
      }
      function dt(e, n) {
        if (!(0, o.Kn)(e) || e.__v_skip) return e;
        if ((n = n || new Set()).has(e)) return e;
        if ((n.add(e), (0, r.dq)(e))) dt(e.value, n);
        else if ((0, o.kJ)(e)) for (let t = 0; t < e.length; t++) dt(e[t], n);
        else if ((0, o.DM)(e) || (0, o._N)(e))
          e.forEach((e) => {
            dt(e, n);
          });
        else if ((0, o.PO)(e)) for (const a in e) dt(e[a], n);
        return e;
      }
      function pt(e, n, t) {
        const r = arguments.length;
        return r === 2
          ? (0, o.Kn)(n) && !(0, o.kJ)(n)
            ? Ke(n)
              ? rn(e, null, [n])
              : rn(e, n)
            : rn(e, null, n)
          : (r > 3
              ? (t = Array.prototype.slice.call(arguments, 2))
              : r === 3 && Ke(t) && (t = [t]),
            rn(e, n, t));
      }
      Symbol('');
      var ht = '3.2.26';
    },
    8023: (e, n, t) => {
      t.d(n, { xe: () => r, e9: () => o });
      var r = 'van-hairline--bottom';
      var o = 'van-haptics-feedback';
      Symbol('van-form');
    },
    5030: (e, n, t) => {
      t.d(n, { cx: () => a, PF: () => i, xj: () => c });
      const r = t(4943);
      const o = t(2343);
      function a(e) {
        const n = 'scrollTop' in e ? e.scrollTop : e.pageYOffset;
        return Math.max(n, 0);
      }
      function i(e, n) {
        (typeof e.cancelable !== 'boolean' || e.cancelable) &&
          e.preventDefault(),
          n &&
            ((e) => {
              e.stopPropagation();
            })(e);
      }
      function c(e) {
        const n = (0, o.SU)(e);
        if (!n) return !1;
        const t = window.getComputedStyle(n);
        const r = t.display === 'none';
        const a = n.offsetParent === null && t.position !== 'fixed';
        return r || a;
      }
      (0, t(3784).gn)();
      const { width: l, height: s } = (0, r.iP)();
    },
    1437: (e, n, t) => {
      t.d(n, {
        Nn: () => o,
        Xn: () => a,
        As: () => i,
        _A: () => l,
        GL: () => s,
      });
      const r = t(3784);
      function o(e) {
        if ((0, r.Xq)(e)) return (0, r.kE)(e) ? e + 'px' : String(e);
      }
      function a(e) {
        if ((0, r.Xq)(e)) {
          const n = o(e);
          return { width: n, height: n };
        }
      }
      function i(e) {
        const n = {};
        return void 0 !== e && (n.zIndex = +e), n;
      }
      const c = /-(\w)/g;
      var l = (e) => e.replace(c, (e, n) => n.toUpperCase());
      var s = (e) =>
        e
          .replace(/([A-Z])/g, '-$1')
          .toLowerCase()
          .replace(/^-/, '');
    },
    3278: (e, n, t) => {
      const r = t(7705);
      const o = t.n(r)()(!0);
      o.push([
        e.id,
        '/*! @docsearch/css 3.0.0-alpha.33 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */\n:root{--docsearch-primary-color:#5468ff;--docsearch-text-color:#1c1e21;--docsearch-spacing:1.6vw;--docsearch-icon-stroke-width:1.4;--docsearch-highlight-color:var(--docsearch-primary-color);--docsearch-muted-color:#969faf;--docsearch-container-background:rgba(101,108,133,0.8);--docsearch-logo-color:#5468ff;--docsearch-modal-width:74.66667vw;--docsearch-modal-height:80vw;--docsearch-modal-background:#f5f6f7;--docsearch-modal-shadow:inset 1px 1px 0 0 hsla(0,0%,100%,0.5),0 0.4vw 1.06667vw 0 #555a64;--docsearch-searchbox-height:7.46667vw;--docsearch-searchbox-background:#ebedf0;--docsearch-searchbox-focus-background:#fff;--docsearch-searchbox-shadow:inset 0 0 0 0.26667vw var(--docsearch-primary-color);--docsearch-hit-height:7.46667vw;--docsearch-hit-color:#444950;--docsearch-hit-active-color:#fff;--docsearch-hit-background:#fff;--docsearch-hit-shadow:0 1px 0.4vw 0 #d4d9e1;--docsearch-key-gradient:linear-gradient(-225deg,#d5dbe4,#f8f8f8);--docsearch-key-shadow:inset 0 -0.26667vw 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 0.26667vw 1px rgba(30,35,90,0.4);--docsearch-footer-height:5.86667vw;--docsearch-footer-background:#fff;--docsearch-footer-shadow:0 -1px 0 0 #e0e3e8,0 -0.4vw 0.8vw 0 rgba(69,98,155,0.12)}html[data-theme=dark]{--docsearch-text-color:#f5f6f7;--docsearch-container-background:rgba(9,10,17,0.8);--docsearch-modal-background:#15172a;--docsearch-modal-shadow:inset 1px 1px 0 0 #2c2e40,0 0.4vw 1.06667vw 0 #000309;--docsearch-searchbox-background:#090a11;--docsearch-searchbox-focus-background:#000;--docsearch-hit-color:#bec3c9;--docsearch-hit-shadow:none;--docsearch-hit-background:#090a11;--docsearch-key-gradient:linear-gradient(-26.5deg,#565872,#31355b);--docsearch-key-shadow:inset 0 -0.26667vw 0 0 #282d55,inset 0 0 1px 1px #51577d,0 0.26667vw 0.26667vw 0 rgba(3,4,9,0.3);--docsearch-footer-background:#1e2136;--docsearch-footer-shadow:inset 0 1px 0 0 rgba(73,76,106,0.5),0 -0.53333vw 1.06667vw 0 rgba(0,0,0,0.2);--docsearch-logo-color:#fff;--docsearch-muted-color:#7f8497}.DocSearch-Button{align-items:center;background:var(--docsearch-searchbox-background);border:0;border-radius:5.33333vw;color:var(--docsearch-muted-color);cursor:pointer;display:flex;font-weight:500;height:4.8vw;justify-content:space-between;margin:0 0 0 2.13333vw;padding:0 1.06667vw;-webkit-user-select:none;user-select:none}.DocSearch-Button:active,.DocSearch-Button:focus,.DocSearch-Button:hover{background:var(--docsearch-searchbox-focus-background);box-shadow:var(--docsearch-searchbox-shadow);color:var(--docsearch-text-color);outline:none}.DocSearch-Button-Container{align-items:center;display:flex}.DocSearch-Search-Icon{stroke-width:1.6}.DocSearch-Button .DocSearch-Search-Icon{color:var(--docsearch-text-color)}.DocSearch-Button-Placeholder{font-size:1rem;padding:0 1.6vw 0 0.8vw}.DocSearch-Button-Keys{display:flex}.DocSearch-Button-Key{align-items:center;background:var(--docsearch-key-gradient);border-radius:0.4vw;box-shadow:var(--docsearch-key-shadow);color:var(--docsearch-muted-color);display:flex;height:2.4vw;justify-content:center;margin-right:.4em;padding-bottom:0.26667vw;position:relative;top:-1px;width:2.66667vw}@media (max-width:750px){.DocSearch-Button-Key,.DocSearch-Button-KeySeparator,.DocSearch-Button-Placeholder{display:none}}.DocSearch--active{overflow:hidden!important}.DocSearch-Container,.DocSearch-Container *{box-sizing:border-box}.DocSearch-Container{background-color:var(--docsearch-container-background);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:200}.DocSearch-Container a{text-decoration:none}.DocSearch-Link{-webkit-appearance:none;appearance:none;background:none;border:0;color:var(--docsearch-highlight-color);cursor:pointer;font:inherit;margin:0;padding:0}.DocSearch-Modal{background:var(--docsearch-modal-background);border-radius:0.8vw;box-shadow:var(--docsearch-modal-shadow);flex-direction:column;margin:8vw auto auto;max-width:var(--docsearch-modal-width);position:relative}.DocSearch-SearchBar{display:flex;padding:var(--docsearch-spacing) var(--docsearch-spacing) 0}.DocSearch-Form{align-items:center;background:var(--docsearch-searchbox-focus-background);border-radius:0.53333vw;box-shadow:var(--docsearch-searchbox-shadow);display:flex;height:var(--docsearch-searchbox-height);margin:0;padding:0 var(--docsearch-spacing);position:relative;width:100%}.DocSearch-Input{-webkit-appearance:none;appearance:none;background:transparent;border:0;color:var(--docsearch-text-color);flex:1;font:inherit;font-size:1.2em;height:100%;outline:none;padding:0 0 0 1.06667vw;width:80%}.DocSearch-Input::-webkit-input-placeholder{color:var(--docsearch-muted-color);opacity:1}.DocSearch-Input::placeholder{color:var(--docsearch-muted-color);opacity:1}.DocSearch-Input::-webkit-search-cancel-button,.DocSearch-Input::-webkit-search-decoration,.DocSearch-Input::-webkit-search-results-button,.DocSearch-Input::-webkit-search-results-decoration{display:none}.DocSearch-LoadingIndicator,.DocSearch-MagnifierLabel,.DocSearch-Reset{margin:0;padding:0}.DocSearch-MagnifierLabel,.DocSearch-Reset{align-items:center;color:var(--docsearch-highlight-color);display:flex;justify-content:center}.DocSearch-Container--Stalled .DocSearch-MagnifierLabel,.DocSearch-LoadingIndicator{display:none}.DocSearch-Container--Stalled .DocSearch-LoadingIndicator{align-items:center;color:var(--docsearch-highlight-color);display:flex;justify-content:center}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Reset{animation:none;-webkit-appearance:none;appearance:none;background:none;border:0;border-radius:50%;color:var(--docsearch-icon-color);cursor:pointer;right:0;stroke-width:var(--docsearch-icon-stroke-width)}}.DocSearch-Reset{animation:fade-in .1s ease-in forwards;-webkit-appearance:none;appearance:none;background:none;border:0;border-radius:50%;color:var(--docsearch-icon-color);cursor:pointer;padding:0.26667vw;right:0;stroke-width:var(--docsearch-icon-stroke-width)}.DocSearch-Reset[hidden]{display:none}.DocSearch-Reset:focus{outline:none}.DocSearch-Reset:hover{color:var(--docsearch-highlight-color)}.DocSearch-LoadingIndicator svg,.DocSearch-MagnifierLabel svg{height:3.2vw;width:3.2vw}.DocSearch-Cancel{display:none}.DocSearch-Dropdown{max-height:calc(var(--docsearch-modal-height) - var(--docsearch-searchbox-height) - var(--docsearch-spacing) - var(--docsearch-footer-height));min-height:var(--docsearch-spacing);overflow-y:auto;overflow-y:overlay;padding:0 var(--docsearch-spacing);scrollbar-color:var(--docsearch-muted-color) var(--docsearch-modal-background);scrollbar-width:thin}.DocSearch-Dropdown::-webkit-scrollbar{width:1.6vw}.DocSearch-Dropdown::-webkit-scrollbar-track{background:transparent}.DocSearch-Dropdown::-webkit-scrollbar-thumb{background-color:var(--docsearch-muted-color);border:0.4vw solid var(--docsearch-modal-background);border-radius:2.66667vw}.DocSearch-Dropdown ul{list-style:none;margin:0;padding:0}.DocSearch-Label{font-size:.75em;line-height:1.6em}.DocSearch-Help,.DocSearch-Label{color:var(--docsearch-muted-color)}.DocSearch-Help{font-size:.9em;margin:0;-webkit-user-select:none;user-select:none}.DocSearch-Title{font-size:1.2em}.DocSearch-Logo a{display:flex}.DocSearch-Logo svg{color:var(--docsearch-logo-color);margin-left:1.06667vw}.DocSearch-Hits:last-of-type{margin-bottom:3.2vw}.DocSearch-Hits mark{background:none;color:var(--docsearch-highlight-color)}.DocSearch-HitsFooter{color:var(--docsearch-muted-color);display:flex;font-size:.85em;justify-content:center;margin-bottom:var(--docsearch-spacing);padding:var(--docsearch-spacing)}.DocSearch-HitsFooter a{border-bottom:1px solid;color:inherit}.DocSearch-Hit{border-radius:0.53333vw;display:flex;padding-bottom:0.53333vw;position:relative}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit--deleting{transition:none}}.DocSearch-Hit--deleting{opacity:0;transition:all .25s linear}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit--favoriting{transition:none}}.DocSearch-Hit--favoriting{transform:scale(0);transform-origin:top center;transition:all .25s linear;transition-delay:.25s}.DocSearch-Hit a{background:var(--docsearch-hit-background);border-radius:0.53333vw;box-shadow:var(--docsearch-hit-shadow);display:block;padding-left:var(--docsearch-spacing);width:100%}.DocSearch-Hit-source{background:var(--docsearch-modal-background);color:var(--docsearch-highlight-color);font-size:.85em;font-weight:600;line-height:4.26667vw;margin:0 -0.53333vw;padding:1.06667vw 0.53333vw 0;position:-webkit-sticky;position:sticky;top:0;z-index:10}.DocSearch-Hit-Tree{color:var(--docsearch-muted-color);height:var(--docsearch-hit-height);opacity:.5;stroke-width:var(--docsearch-icon-stroke-width);width:3.2vw}.DocSearch-Hit[aria-selected=true] a{background-color:var(--docsearch-highlight-color)}.DocSearch-Hit[aria-selected=true] mark{text-decoration:underline}.DocSearch-Hit-Container{align-items:center;color:var(--docsearch-hit-color);display:flex;flex-direction:row;height:var(--docsearch-hit-height);padding:0 var(--docsearch-spacing) 0 0}.DocSearch-Hit-icon{height:2.66667vw;width:2.66667vw}.DocSearch-Hit-action,.DocSearch-Hit-icon{color:var(--docsearch-muted-color);stroke-width:var(--docsearch-icon-stroke-width)}.DocSearch-Hit-action{align-items:center;display:flex;height:2.93333vw;width:2.93333vw}.DocSearch-Hit-action svg{display:block;height:2.4vw;width:2.4vw}.DocSearch-Hit-action+.DocSearch-Hit-action{margin-left:0.8vw}.DocSearch-Hit-action-button{-webkit-appearance:none;appearance:none;background:none;border:0;border-radius:50%;color:inherit;cursor:pointer;padding:0.26667vw}svg.DocSearch-Hit-Select-Icon{display:none}.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-Select-Icon{display:block}.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{background:rgba(0,0,0,.2);transition:background-color .1s ease-in}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{transition:none}}.DocSearch-Hit-action-button:focus path,.DocSearch-Hit-action-button:hover path{fill:#fff}.DocSearch-Hit-content-wrapper{display:flex;flex:1 1 auto;flex-direction:column;font-weight:500;justify-content:center;line-height:1.2em;margin:0 1.06667vw;overflow-x:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap;width:80%}.DocSearch-Hit-title{font-size:.9em}.DocSearch-Hit-path{color:var(--docsearch-muted-color);font-size:.75em}.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-action,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-icon,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-path,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-text,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-title,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-Tree,.DocSearch-Hit[aria-selected=true] mark{color:var(--docsearch-hit-active-color)!important}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{background:rgba(0,0,0,.2);transition:none}}.DocSearch-ErrorScreen,.DocSearch-NoResults,.DocSearch-StartScreen{font-size:.9em;margin:0 auto;padding:4.8vw 0;text-align:center;width:80%}.DocSearch-Screen-Icon{color:var(--docsearch-muted-color);padding-bottom:1.6vw}.DocSearch-NoResults-Prefill-List{display:inline-block;padding-bottom:3.2vw;text-align:left}.DocSearch-NoResults-Prefill-List ul{display:inline-block;padding:1.06667vw 0 0}.DocSearch-NoResults-Prefill-List li{list-style-position:inside;list-style-type:"» "}.DocSearch-Prefill{-webkit-appearance:none;appearance:none;background:none;border:0;border-radius:1em;color:var(--docsearch-highlight-color);cursor:pointer;display:inline-block;font-size:1em;font-weight:700;padding:0}.DocSearch-Prefill:focus,.DocSearch-Prefill:hover{outline:none;text-decoration:underline}.DocSearch-Footer{align-items:center;background:var(--docsearch-footer-background);border-radius:0 0 1.06667vw 1.06667vw;box-shadow:var(--docsearch-footer-shadow);display:flex;flex-direction:row-reverse;flex-shrink:0;height:var(--docsearch-footer-height);justify-content:space-between;padding:0 var(--docsearch-spacing);position:relative;-webkit-user-select:none;user-select:none;width:100%;z-index:300}.DocSearch-Commands{color:var(--docsearch-muted-color);display:flex;list-style:none;margin:0;padding:0}.DocSearch-Commands li{align-items:center;display:flex}.DocSearch-Commands li:not(:last-of-type){margin-right:.8em}.DocSearch-Commands-Key{align-items:center;background:var(--docsearch-key-gradient);border-radius:0.26667vw;box-shadow:var(--docsearch-key-shadow);display:flex;height:2.4vw;justify-content:center;margin-right:.4em;padding-bottom:1px;width:2.66667vw}@media (max-width:750px){:root{--docsearch-spacing:10px;--docsearch-footer-height:40px}.DocSearch-Dropdown{height:100%}.DocSearch-Container{height:100vh;height:-webkit-fill-available;height:calc(var(--docsearch-vh, 1vh)*100);position:absolute}.DocSearch-Footer{border-radius:0;bottom:0;position:absolute}.DocSearch-Hit-content-wrapper{display:flex;position:relative;width:80%}.DocSearch-Modal{border-radius:0;box-shadow:none;height:100vh;height:-webkit-fill-available;height:calc(var(--docsearch-vh, 1vh)*100);margin:0;max-width:100%;width:100%}.DocSearch-Dropdown{max-height:calc(var(--docsearch-vh, 1vh)*100 - var(--docsearch-searchbox-height) - var(--docsearch-spacing) - var(--docsearch-footer-height))}.DocSearch-Cancel{-webkit-appearance:none;appearance:none;background:none;border:0;color:var(--docsearch-highlight-color);cursor:pointer;display:inline-block;flex:none;font:inherit;font-size:1em;font-weight:500;margin-left:var(--docsearch-spacing);outline:none;overflow:hidden;padding:0;-webkit-user-select:none;user-select:none;white-space:nowrap}.DocSearch-Commands,.DocSearch-Hit-Tree{display:none}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}',
        '',
        {
          version: 3,
          sources: ['webpack://node_modules/@docsearch/css/dist/style.css'],
          names: [],
          mappings:
            'AAAA,oHAAoH;AACpH,MAAM,iCAAiC,CAAC,8BAA8B,CAAC,yBAAwB,CAAC,iCAAiC,CAAC,0DAA0D,CAAC,+BAA+B,CAAC,sDAAsD,CAAC,8BAA8B,CAAC,kCAA6B,CAAC,6BAA8B,CAAC,oCAAoC,CAAC,0FAAkF,CAAC,sCAAiC,CAAC,wCAAwC,CAAC,2CAA2C,CAAC,iFAA2E,CAAC,gCAA2B,CAAC,6BAA6B,CAAC,iCAAiC,CAAC,+BAA+B,CAAC,4CAA0C,CAAC,iEAAiE,CAAC,mHAAuG,CAAC,mCAA8B,CAAC,kCAAkC,CAAC,kFAA8E,CAAC,sBAAsB,8BAA8B,CAAC,kDAAkD,CAAC,oCAAoC,CAAC,8EAAsE,CAAC,wCAAwC,CAAC,2CAA2C,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,kCAAkC,CAAC,kEAAkE,CAAC,uHAAqG,CAAC,qCAAqC,CAAC,sGAA0F,CAAC,2BAA2B,CAAC,+BAA+B,CAAC,kBAAkB,kBAAkB,CAAC,gDAAgD,CAAC,QAAQ,CAAC,uBAAkB,CAAC,kCAAkC,CAAC,cAAc,CAAC,YAAY,CAAC,eAAe,CAAC,YAAW,CAAC,6BAA6B,CAAC,sBAAiB,CAAC,mBAAa,CAAC,wBAAe,CAAf,gBAAgB,CAAC,yEAAyE,sDAAsD,CAAC,4CAA4C,CAAC,iCAAiC,CAAC,YAAY,CAAC,4BAA4B,kBAAkB,CAAC,YAAY,CAAC,uBAAuB,gBAAgB,CAAC,yCAAyC,iCAAiC,CAAC,8BAA8B,cAAc,CAAC,uBAAoB,CAAC,uBAAuB,YAAY,CAAC,sBAAsB,kBAAkB,CAAC,wCAAwC,CAAC,mBAAiB,CAAC,sCAAsC,CAAC,kCAAkC,CAAC,YAAY,CAAC,YAAW,CAAC,sBAAsB,CAAC,iBAAiB,CAAC,wBAAkB,CAAC,iBAAiB,CAAC,QAAQ,CAAC,eAAU,CAAC,yBAAyB,mFAAmF,YAAY,CAAC,CAAC,mBAAmB,yBAAyB,CAAC,4CAA4C,qBAAqB,CAAC,qBAAqB,sDAAsD,CAAC,YAAY,CAAC,MAAM,CAAC,cAAc,CAAC,KAAK,CAAC,WAAW,CAAC,WAAW,CAAC,uBAAuB,oBAAoB,CAAC,gBAAgB,uBAAe,CAAf,eAAe,CAAC,eAAe,CAAC,QAAQ,CAAC,sCAAsC,CAAC,cAAc,CAAC,YAAY,CAAC,QAAQ,CAAC,SAAS,CAAC,iBAAiB,4CAA4C,CAAC,mBAAiB,CAAC,wCAAwC,CAAC,qBAAqB,CAAC,oBAAqB,CAAC,sCAAsC,CAAC,iBAAiB,CAAC,qBAAqB,YAAY,CAAC,2DAA2D,CAAC,gBAAgB,kBAAkB,CAAC,sDAAsD,CAAC,uBAAiB,CAAC,4CAA4C,CAAC,YAAY,CAAC,wCAAwC,CAAC,QAAQ,CAAC,kCAAkC,CAAC,iBAAiB,CAAC,UAAU,CAAC,iBAAiB,uBAAe,CAAf,eAAe,CAAC,sBAAsB,CAAC,QAAQ,CAAC,iCAAiC,CAAC,MAAM,CAAC,YAAY,CAAC,eAAe,CAAC,WAAW,CAAC,YAAY,CAAC,uBAAiB,CAAC,SAAS,CAAC,4CAA8B,kCAAkC,CAAC,SAAS,CAA1E,8BAA8B,kCAAkC,CAAC,SAAS,CAAC,+LAA+L,YAAY,CAAC,uEAAuE,QAAQ,CAAC,SAAS,CAAC,2CAA2C,kBAAkB,CAAC,sCAAsC,CAAC,YAAY,CAAC,sBAAsB,CAAC,oFAAoF,YAAY,CAAC,0DAA0D,kBAAkB,CAAC,sCAAsC,CAAC,YAAY,CAAC,sBAAsB,CAAC,kDAAkD,iBAAiB,cAAc,CAAC,uBAAe,CAAf,eAAe,CAAC,eAAe,CAAC,QAAQ,CAAC,iBAAiB,CAAC,iCAAiC,CAAC,cAAc,CAAC,OAAO,CAAC,+CAA+C,CAAC,CAAC,iBAAiB,sCAAsC,CAAC,uBAAe,CAAf,eAAe,CAAC,eAAe,CAAC,QAAQ,CAAC,iBAAiB,CAAC,iCAAiC,CAAC,cAAc,CAAC,iBAAW,CAAC,OAAO,CAAC,+CAA+C,CAAC,yBAAyB,YAAY,CAAC,uBAAuB,YAAY,CAAC,uBAAuB,sCAAsC,CAAC,8DAA8D,YAAW,CAAC,WAAU,CAAC,kBAAkB,YAAY,CAAC,oBAAoB,8IAA8I,CAAC,mCAAmC,CAAC,eAAe,CAAC,kBAAkB,CAAC,kCAAkC,CAAC,8EAA8E,CAAC,oBAAoB,CAAC,uCAAuC,WAAU,CAAC,6CAA6C,sBAAsB,CAAC,6CAA6C,6CAA6C,CAAC,oDAAkD,CAAC,uBAAkB,CAAC,uBAAuB,eAAe,CAAC,QAAQ,CAAC,SAAS,CAAC,iBAAiB,eAAe,CAAC,iBAAiB,CAAC,iCAAiC,kCAAkC,CAAC,gBAAgB,cAAc,CAAC,QAAQ,CAAC,wBAAe,CAAf,gBAAgB,CAAC,iBAAiB,eAAe,CAAC,kBAAkB,YAAY,CAAC,oBAAoB,iCAAiC,CAAC,qBAAe,CAAC,6BAA6B,mBAAkB,CAAC,qBAAqB,eAAe,CAAC,sCAAsC,CAAC,sBAAsB,kCAAkC,CAAC,YAAY,CAAC,eAAe,CAAC,sBAAsB,CAAC,sCAAsC,CAAC,gCAAgC,CAAC,wBAAwB,uBAAuB,CAAC,aAAa,CAAC,eAAe,uBAAiB,CAAC,YAAY,CAAC,wBAAkB,CAAC,iBAAiB,CAAC,kDAAkD,yBAAyB,eAAe,CAAC,CAAC,yBAAyB,SAAS,CAAC,0BAA0B,CAAC,kDAAkD,2BAA2B,eAAe,CAAC,CAAC,2BAA2B,kBAAkB,CAAC,2BAA2B,CAAC,0BAA0B,CAAC,qBAAqB,CAAC,iBAAiB,0CAA0C,CAAC,uBAAiB,CAAC,sCAAsC,CAAC,aAAa,CAAC,qCAAqC,CAAC,UAAU,CAAC,sBAAsB,4CAA4C,CAAC,sCAAsC,CAAC,eAAe,CAAC,eAAe,CAAC,qBAAgB,CAAC,mBAAa,CAAC,6BAAiB,CAAC,uBAAe,CAAf,eAAe,CAAC,KAAK,CAAC,UAAU,CAAC,oBAAoB,kCAAkC,CAAC,kCAAkC,CAAC,UAAU,CAAC,+CAA+C,CAAC,WAAU,CAAC,qCAAqC,iDAAiD,CAAC,wCAAwC,yBAAyB,CAAC,yBAAyB,kBAAkB,CAAC,gCAAgC,CAAC,YAAY,CAAC,kBAAkB,CAAC,kCAAkC,CAAC,sCAAsC,CAAC,oBAAoB,gBAAW,CAAC,eAAU,CAAC,0CAA0C,kCAAkC,CAAC,+CAA+C,CAAC,sBAAsB,kBAAkB,CAAC,YAAY,CAAC,gBAAW,CAAC,eAAU,CAAC,0BAA0B,aAAa,CAAC,YAAW,CAAC,WAAU,CAAC,4CAA4C,iBAAe,CAAC,6BAA6B,uBAAe,CAAf,eAAe,CAAC,eAAe,CAAC,QAAQ,CAAC,iBAAiB,CAAC,aAAa,CAAC,cAAc,CAAC,iBAAW,CAAC,8BAA8B,YAAY,CAAC,8DAA8D,aAAa,CAAC,sEAAsE,yBAAyB,CAAC,uCAAuC,CAAC,kDAAkD,sEAAsE,eAAe,CAAC,CAAC,gFAAgF,SAAS,CAAC,+BAA+B,YAAY,CAAC,aAAa,CAAC,qBAAqB,CAAC,eAAe,CAAC,sBAAsB,CAAC,iBAAiB,CAAC,kBAAY,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,SAAS,CAAC,qBAAqB,cAAc,CAAC,oBAAoB,kCAAkC,CAAC,eAAe,CAAC,qXAAqX,iDAAiD,CAAC,kDAAkD,sEAAsE,yBAAyB,CAAC,eAAe,CAAC,CAAC,mEAAmE,cAAc,CAAC,aAAa,CAAC,eAAc,CAAC,iBAAiB,CAAC,SAAS,CAAC,uBAAuB,kCAAkC,CAAC,oBAAmB,CAAC,kCAAkC,oBAAoB,CAAC,oBAAmB,CAAC,eAAe,CAAC,qCAAqC,oBAAoB,CAAC,qBAAe,CAAC,qCAAqC,0BAA0B,CAAC,oBAAoB,CAAC,mBAAmB,uBAAe,CAAf,eAAe,CAAC,eAAe,CAAC,QAAQ,CAAC,iBAAiB,CAAC,sCAAsC,CAAC,cAAc,CAAC,oBAAoB,CAAC,aAAa,CAAC,eAAe,CAAC,SAAS,CAAC,kDAAkD,YAAY,CAAC,yBAAyB,CAAC,kBAAkB,kBAAkB,CAAC,6CAA6C,CAAC,qCAAyB,CAAC,yCAAyC,CAAC,YAAY,CAAC,0BAA0B,CAAC,aAAa,CAAC,qCAAqC,CAAC,6BAA6B,CAAC,kCAAkC,CAAC,iBAAiB,CAAC,wBAAgB,CAAhB,gBAAgB,CAAC,UAAU,CAAC,WAAW,CAAC,oBAAoB,kCAAkC,CAAC,YAAY,CAAC,eAAe,CAAC,QAAQ,CAAC,SAAS,CAAC,uBAAuB,kBAAkB,CAAC,YAAY,CAAC,0CAA0C,iBAAiB,CAAC,wBAAwB,kBAAkB,CAAC,wCAAwC,CAAC,uBAAiB,CAAC,sCAAsC,CAAC,YAAY,CAAC,YAAW,CAAC,sBAAsB,CAAC,iBAAiB,CAAC,kBAAkB,CAAC,eAAU,CAAC,yBAAyB,MAAM,wBAAwB,CAAC,8BAA8B,CAAC,oBAAoB,WAAW,CAAC,qBAAqB,YAAY,CAAC,6BAA6B,CAAC,yCAAyC,CAAC,iBAAiB,CAAC,kBAAkB,eAAe,CAAC,QAAQ,CAAC,iBAAiB,CAAC,+BAA+B,YAAY,CAAC,iBAAiB,CAAC,SAAS,CAAC,iBAAiB,eAAe,CAAC,eAAe,CAAC,YAAY,CAAC,6BAA6B,CAAC,yCAAyC,CAAC,QAAQ,CAAC,cAAc,CAAC,UAAU,CAAC,oBAAoB,6IAA6I,CAAC,kBAAkB,uBAAe,CAAf,eAAe,CAAC,eAAe,CAAC,QAAQ,CAAC,sCAAsC,CAAC,cAAc,CAAC,oBAAoB,CAAC,SAAS,CAAC,YAAY,CAAC,aAAa,CAAC,eAAe,CAAC,oCAAoC,CAAC,YAAY,CAAC,eAAe,CAAC,SAAS,CAAC,wBAAgB,CAAhB,gBAAgB,CAAC,kBAAkB,CAAC,wCAAwC,YAAY,CAAC,CAAC,mBAAmB,GAAG,SAAS,CAAC,GAAG,SAAS,CAAC',
          sourcesContent: [
            '/*! @docsearch/css 3.0.0-alpha.33 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */\n:root{--docsearch-primary-color:#5468ff;--docsearch-text-color:#1c1e21;--docsearch-spacing:12px;--docsearch-icon-stroke-width:1.4;--docsearch-highlight-color:var(--docsearch-primary-color);--docsearch-muted-color:#969faf;--docsearch-container-background:rgba(101,108,133,0.8);--docsearch-logo-color:#5468ff;--docsearch-modal-width:560px;--docsearch-modal-height:600px;--docsearch-modal-background:#f5f6f7;--docsearch-modal-shadow:inset 1px 1px 0 0 hsla(0,0%,100%,0.5),0 3px 8px 0 #555a64;--docsearch-searchbox-height:56px;--docsearch-searchbox-background:#ebedf0;--docsearch-searchbox-focus-background:#fff;--docsearch-searchbox-shadow:inset 0 0 0 2px var(--docsearch-primary-color);--docsearch-hit-height:56px;--docsearch-hit-color:#444950;--docsearch-hit-active-color:#fff;--docsearch-hit-background:#fff;--docsearch-hit-shadow:0 1px 3px 0 #d4d9e1;--docsearch-key-gradient:linear-gradient(-225deg,#d5dbe4,#f8f8f8);--docsearch-key-shadow:inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,0.4);--docsearch-footer-height:44px;--docsearch-footer-background:#fff;--docsearch-footer-shadow:0 -1px 0 0 #e0e3e8,0 -3px 6px 0 rgba(69,98,155,0.12)}html[data-theme=dark]{--docsearch-text-color:#f5f6f7;--docsearch-container-background:rgba(9,10,17,0.8);--docsearch-modal-background:#15172a;--docsearch-modal-shadow:inset 1px 1px 0 0 #2c2e40,0 3px 8px 0 #000309;--docsearch-searchbox-background:#090a11;--docsearch-searchbox-focus-background:#000;--docsearch-hit-color:#bec3c9;--docsearch-hit-shadow:none;--docsearch-hit-background:#090a11;--docsearch-key-gradient:linear-gradient(-26.5deg,#565872,#31355b);--docsearch-key-shadow:inset 0 -2px 0 0 #282d55,inset 0 0 1px 1px #51577d,0 2px 2px 0 rgba(3,4,9,0.3);--docsearch-footer-background:#1e2136;--docsearch-footer-shadow:inset 0 1px 0 0 rgba(73,76,106,0.5),0 -4px 8px 0 rgba(0,0,0,0.2);--docsearch-logo-color:#fff;--docsearch-muted-color:#7f8497}.DocSearch-Button{align-items:center;background:var(--docsearch-searchbox-background);border:0;border-radius:40px;color:var(--docsearch-muted-color);cursor:pointer;display:flex;font-weight:500;height:36px;justify-content:space-between;margin:0 0 0 16px;padding:0 8px;user-select:none}.DocSearch-Button:active,.DocSearch-Button:focus,.DocSearch-Button:hover{background:var(--docsearch-searchbox-focus-background);box-shadow:var(--docsearch-searchbox-shadow);color:var(--docsearch-text-color);outline:none}.DocSearch-Button-Container{align-items:center;display:flex}.DocSearch-Search-Icon{stroke-width:1.6}.DocSearch-Button .DocSearch-Search-Icon{color:var(--docsearch-text-color)}.DocSearch-Button-Placeholder{font-size:1rem;padding:0 12px 0 6px}.DocSearch-Button-Keys{display:flex}.DocSearch-Button-Key{align-items:center;background:var(--docsearch-key-gradient);border-radius:3px;box-shadow:var(--docsearch-key-shadow);color:var(--docsearch-muted-color);display:flex;height:18px;justify-content:center;margin-right:.4em;padding-bottom:2px;position:relative;top:-1px;width:20px}@media (max-width:750px){.DocSearch-Button-Key,.DocSearch-Button-KeySeparator,.DocSearch-Button-Placeholder{display:none}}.DocSearch--active{overflow:hidden!important}.DocSearch-Container,.DocSearch-Container *{box-sizing:border-box}.DocSearch-Container{background-color:var(--docsearch-container-background);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:200}.DocSearch-Container a{text-decoration:none}.DocSearch-Link{appearance:none;background:none;border:0;color:var(--docsearch-highlight-color);cursor:pointer;font:inherit;margin:0;padding:0}.DocSearch-Modal{background:var(--docsearch-modal-background);border-radius:6px;box-shadow:var(--docsearch-modal-shadow);flex-direction:column;margin:60px auto auto;max-width:var(--docsearch-modal-width);position:relative}.DocSearch-SearchBar{display:flex;padding:var(--docsearch-spacing) var(--docsearch-spacing) 0}.DocSearch-Form{align-items:center;background:var(--docsearch-searchbox-focus-background);border-radius:4px;box-shadow:var(--docsearch-searchbox-shadow);display:flex;height:var(--docsearch-searchbox-height);margin:0;padding:0 var(--docsearch-spacing);position:relative;width:100%}.DocSearch-Input{appearance:none;background:transparent;border:0;color:var(--docsearch-text-color);flex:1;font:inherit;font-size:1.2em;height:100%;outline:none;padding:0 0 0 8px;width:80%}.DocSearch-Input::placeholder{color:var(--docsearch-muted-color);opacity:1}.DocSearch-Input::-webkit-search-cancel-button,.DocSearch-Input::-webkit-search-decoration,.DocSearch-Input::-webkit-search-results-button,.DocSearch-Input::-webkit-search-results-decoration{display:none}.DocSearch-LoadingIndicator,.DocSearch-MagnifierLabel,.DocSearch-Reset{margin:0;padding:0}.DocSearch-MagnifierLabel,.DocSearch-Reset{align-items:center;color:var(--docsearch-highlight-color);display:flex;justify-content:center}.DocSearch-Container--Stalled .DocSearch-MagnifierLabel,.DocSearch-LoadingIndicator{display:none}.DocSearch-Container--Stalled .DocSearch-LoadingIndicator{align-items:center;color:var(--docsearch-highlight-color);display:flex;justify-content:center}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Reset{animation:none;appearance:none;background:none;border:0;border-radius:50%;color:var(--docsearch-icon-color);cursor:pointer;right:0;stroke-width:var(--docsearch-icon-stroke-width)}}.DocSearch-Reset{animation:fade-in .1s ease-in forwards;appearance:none;background:none;border:0;border-radius:50%;color:var(--docsearch-icon-color);cursor:pointer;padding:2px;right:0;stroke-width:var(--docsearch-icon-stroke-width)}.DocSearch-Reset[hidden]{display:none}.DocSearch-Reset:focus{outline:none}.DocSearch-Reset:hover{color:var(--docsearch-highlight-color)}.DocSearch-LoadingIndicator svg,.DocSearch-MagnifierLabel svg{height:24px;width:24px}.DocSearch-Cancel{display:none}.DocSearch-Dropdown{max-height:calc(var(--docsearch-modal-height) - var(--docsearch-searchbox-height) - var(--docsearch-spacing) - var(--docsearch-footer-height));min-height:var(--docsearch-spacing);overflow-y:auto;overflow-y:overlay;padding:0 var(--docsearch-spacing);scrollbar-color:var(--docsearch-muted-color) var(--docsearch-modal-background);scrollbar-width:thin}.DocSearch-Dropdown::-webkit-scrollbar{width:12px}.DocSearch-Dropdown::-webkit-scrollbar-track{background:transparent}.DocSearch-Dropdown::-webkit-scrollbar-thumb{background-color:var(--docsearch-muted-color);border:3px solid var(--docsearch-modal-background);border-radius:20px}.DocSearch-Dropdown ul{list-style:none;margin:0;padding:0}.DocSearch-Label{font-size:.75em;line-height:1.6em}.DocSearch-Help,.DocSearch-Label{color:var(--docsearch-muted-color)}.DocSearch-Help{font-size:.9em;margin:0;user-select:none}.DocSearch-Title{font-size:1.2em}.DocSearch-Logo a{display:flex}.DocSearch-Logo svg{color:var(--docsearch-logo-color);margin-left:8px}.DocSearch-Hits:last-of-type{margin-bottom:24px}.DocSearch-Hits mark{background:none;color:var(--docsearch-highlight-color)}.DocSearch-HitsFooter{color:var(--docsearch-muted-color);display:flex;font-size:.85em;justify-content:center;margin-bottom:var(--docsearch-spacing);padding:var(--docsearch-spacing)}.DocSearch-HitsFooter a{border-bottom:1px solid;color:inherit}.DocSearch-Hit{border-radius:4px;display:flex;padding-bottom:4px;position:relative}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit--deleting{transition:none}}.DocSearch-Hit--deleting{opacity:0;transition:all .25s linear}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit--favoriting{transition:none}}.DocSearch-Hit--favoriting{transform:scale(0);transform-origin:top center;transition:all .25s linear;transition-delay:.25s}.DocSearch-Hit a{background:var(--docsearch-hit-background);border-radius:4px;box-shadow:var(--docsearch-hit-shadow);display:block;padding-left:var(--docsearch-spacing);width:100%}.DocSearch-Hit-source{background:var(--docsearch-modal-background);color:var(--docsearch-highlight-color);font-size:.85em;font-weight:600;line-height:32px;margin:0 -4px;padding:8px 4px 0;position:sticky;top:0;z-index:10}.DocSearch-Hit-Tree{color:var(--docsearch-muted-color);height:var(--docsearch-hit-height);opacity:.5;stroke-width:var(--docsearch-icon-stroke-width);width:24px}.DocSearch-Hit[aria-selected=true] a{background-color:var(--docsearch-highlight-color)}.DocSearch-Hit[aria-selected=true] mark{text-decoration:underline}.DocSearch-Hit-Container{align-items:center;color:var(--docsearch-hit-color);display:flex;flex-direction:row;height:var(--docsearch-hit-height);padding:0 var(--docsearch-spacing) 0 0}.DocSearch-Hit-icon{height:20px;width:20px}.DocSearch-Hit-action,.DocSearch-Hit-icon{color:var(--docsearch-muted-color);stroke-width:var(--docsearch-icon-stroke-width)}.DocSearch-Hit-action{align-items:center;display:flex;height:22px;width:22px}.DocSearch-Hit-action svg{display:block;height:18px;width:18px}.DocSearch-Hit-action+.DocSearch-Hit-action{margin-left:6px}.DocSearch-Hit-action-button{appearance:none;background:none;border:0;border-radius:50%;color:inherit;cursor:pointer;padding:2px}svg.DocSearch-Hit-Select-Icon{display:none}.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-Select-Icon{display:block}.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{background:rgba(0,0,0,.2);transition:background-color .1s ease-in}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{transition:none}}.DocSearch-Hit-action-button:focus path,.DocSearch-Hit-action-button:hover path{fill:#fff}.DocSearch-Hit-content-wrapper{display:flex;flex:1 1 auto;flex-direction:column;font-weight:500;justify-content:center;line-height:1.2em;margin:0 8px;overflow-x:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap;width:80%}.DocSearch-Hit-title{font-size:.9em}.DocSearch-Hit-path{color:var(--docsearch-muted-color);font-size:.75em}.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-action,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-icon,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-path,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-text,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-title,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-Tree,.DocSearch-Hit[aria-selected=true] mark{color:var(--docsearch-hit-active-color)!important}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{background:rgba(0,0,0,.2);transition:none}}.DocSearch-ErrorScreen,.DocSearch-NoResults,.DocSearch-StartScreen{font-size:.9em;margin:0 auto;padding:36px 0;text-align:center;width:80%}.DocSearch-Screen-Icon{color:var(--docsearch-muted-color);padding-bottom:12px}.DocSearch-NoResults-Prefill-List{display:inline-block;padding-bottom:24px;text-align:left}.DocSearch-NoResults-Prefill-List ul{display:inline-block;padding:8px 0 0}.DocSearch-NoResults-Prefill-List li{list-style-position:inside;list-style-type:"» "}.DocSearch-Prefill{appearance:none;background:none;border:0;border-radius:1em;color:var(--docsearch-highlight-color);cursor:pointer;display:inline-block;font-size:1em;font-weight:700;padding:0}.DocSearch-Prefill:focus,.DocSearch-Prefill:hover{outline:none;text-decoration:underline}.DocSearch-Footer{align-items:center;background:var(--docsearch-footer-background);border-radius:0 0 8px 8px;box-shadow:var(--docsearch-footer-shadow);display:flex;flex-direction:row-reverse;flex-shrink:0;height:var(--docsearch-footer-height);justify-content:space-between;padding:0 var(--docsearch-spacing);position:relative;user-select:none;width:100%;z-index:300}.DocSearch-Commands{color:var(--docsearch-muted-color);display:flex;list-style:none;margin:0;padding:0}.DocSearch-Commands li{align-items:center;display:flex}.DocSearch-Commands li:not(:last-of-type){margin-right:.8em}.DocSearch-Commands-Key{align-items:center;background:var(--docsearch-key-gradient);border-radius:2px;box-shadow:var(--docsearch-key-shadow);display:flex;height:18px;justify-content:center;margin-right:.4em;padding-bottom:1px;width:20px}@media (max-width:750px){:root{--docsearch-spacing:10px;--docsearch-footer-height:40px}.DocSearch-Dropdown{height:100%}.DocSearch-Container{height:100vh;height:-webkit-fill-available;height:calc(var(--docsearch-vh, 1vh)*100);position:absolute}.DocSearch-Footer{border-radius:0;bottom:0;position:absolute}.DocSearch-Hit-content-wrapper{display:flex;position:relative;width:80%}.DocSearch-Modal{border-radius:0;box-shadow:none;height:100vh;height:-webkit-fill-available;height:calc(var(--docsearch-vh, 1vh)*100);margin:0;max-width:100%;width:100%}.DocSearch-Dropdown{max-height:calc(var(--docsearch-vh, 1vh)*100 - var(--docsearch-searchbox-height) - var(--docsearch-spacing) - var(--docsearch-footer-height))}.DocSearch-Cancel{appearance:none;background:none;border:0;color:var(--docsearch-highlight-color);cursor:pointer;display:inline-block;flex:none;font:inherit;font-size:1em;font-weight:500;margin-left:var(--docsearch-spacing);outline:none;overflow:hidden;padding:0;user-select:none;white-space:nowrap}.DocSearch-Commands,.DocSearch-Hit-Tree{display:none}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}',
          ],
          sourceRoot: '',
        },
      ]),
        (n.Z = o);
    },
    387: (e, n, t) => {
      const r = t(7705);
      const o = t.n(r)()(!0);
      o.push([
        e.id,
        "/* cyrillic-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOX-hpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOVuhpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXuhpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOUehpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXehpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXOhpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\nbody {\n  min-width: 1100px;\n  margin: 0;\n  overflow-x: auto;\n  color: #323233;\n  font-size: 16px;\n  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;\n  background-color: #f7f8fa;\n  -webkit-font-smoothing: antialiased;\n}\np {\n  margin: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  font-size: inherit;\n}\nul,\nol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\n.van-doc-row {\n  width: 100%;\n}\n@media (min-width: 1680px) {\n.van-doc-row {\n    width: 1680px;\n    margin: 0 auto;\n}\n}\ncode {\n  position: relative;\n  display: block;\n  padding: 16px 20px;\n  overflow-x: auto;\n  color: #58727e;\n  font-weight: 400;\n  font-size: 14px;\n  font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;\n  line-height: 26px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  -webkit-font-smoothing: auto;\n  background-color: #f8f8f8;\n  border-radius: 20px;\n}\npre {\n  margin: 20px 0 0;\n}\npre + p {\n  margin-top: 20px;\n}\n.hljs {\n  display: block;\n  padding: 0.5em;\n  overflow-x: auto;\n  background: #fff;\n}\n.hljs-subst {\n  color: #58727e;\n}\n.hljs-string,\n.hljs-meta,\n.hljs-symbol,\n.hljs-template-tag,\n.hljs-template-variable,\n.hljs-addition {\n  color: #4fc08d;\n}\n.hljs-comment,\n.hljs-quote {\n  color: #999;\n}\n.hljs-params,\n.hljs-keyword,\n.hljs-attribute {\n  color: #8080ff;\n}\n.hljs-deletion,\n.hljs-variable,\n.hljs-number,\n.hljs-regexp,\n.hljs-literal,\n.hljs-bullet,\n.hljs-link {\n  color: #eb6f6f;\n}\n.hljs-attr,\n.hljs-selector-tag,\n.hljs-title,\n.hljs-section,\n.hljs-built_in,\n.hljs-doctag,\n.hljs-type,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-strong {\n  color: #4994df;\n}\n.hljs-emphasis {\n  font-style: italic;\n}\n.van-doc-intro {\n  padding-top: 20px;\n  text-align: center;\n}\n.van-doc-intro p {\n  margin-bottom: 20px;\n}\n",
        '',
        {
          version: 3,
          sources: [
            'webpack://node_modules/@vant/cli/site/desktop/App.vue',
            'webpack://node_modules/@vant/cli/site/common/style/font.less',
            'webpack://node_modules/@vant/cli/site/common/style/base.less',
            'webpack://node_modules/@vant/cli/site/common/style/highlight.less',
          ],
          names: [],
          mappings:
            'AAAA,iBAAiB;ACCjB;EACE,gBAAA;EACA,wBAAA;EACA,kBAAA;EACA,+IAAA;EAGA,sFAAA;ADDF;AACA,aAAa;ACKb;EACE,gBAAA;EACA,wBAAA;EACA,kBAAA;EACA,+IAAA;EAGA,4DAAA;ADLF;AACA,cAAc;ACQd;EACE,gBAAA;EACA,wBAAA;EACA,kBAAA;EACA,+IAAA;EAGA,0BAAA;ADRF;AACA,UAAU;ACWV;EACE,gBAAA;EACA,wBAAA;EACA,kBAAA;EACA,+IAAA;EAGA,0BAAA;ADXF;AACA,eAAe;ACcf;EACE,gBAAA;EACA,wBAAA;EACA,kBAAA;EACA,+IAAA;EAGA,gHAAA;ADdF;AACA,cAAc;ACkBd;EACE,gBAAA;EACA,wBAAA;EACA,kBAAA;EACA,+IAAA;EAGA,mHAAA;ADlBF;AACA,UAAU;ACsBV;EACE,gBAAA;EACA,wBAAA;EACA,kBAAA;EACA,6IAAA;EAGA,yKAAA;ADtBF;AACA,iBAAiB;AC2BjB;EACE,gBAAA;EACA,wBAAA;EACA,kBAAA;EACA,qJAAA;EAGA,sFAAA;AD3BF;AACA,aAAa;AC+Bb;EACE,gBAAA;EACA,wBAAA;EACA,kBAAA;EACA,qJAAA;EAGA,4DAAA;AD/BF;AACA,cAAc;ACkCd;EACE,gBAAA;EACA,wBAAA;EACA,kBAAA;EACA,qJAAA;EAGA,0BAAA;ADlCF;AACA,UAAU;ACqCV;EACE,gBAAA;EACA,wBAAA;EACA,kBAAA;EACA,qJAAA;EAGA,0BAAA;ADrCF;AACA,eAAe;ACwCf;EACE,gBAAA;EACA,wBAAA;EACA,kBAAA;EACA,qJAAA;EAGA,gHAAA;ADxCF;AACA,cAAc;AC4Cd;EACE,gBAAA;EACA,wBAAA;EACA,kBAAA;EACA,qJAAA;EAGA,mHAAA;AD5CF;AACA,UAAU;ACgDV;EACE,gBAAA;EACA,wBAAA;EACA,kBAAA;EACA,mJAAA;EAGA,yKAAA;ADhDF;AE5GA;EACE,iBAAA;EACA,SAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;EACA,2LAAA;EAGA,yBAAA;EACA,mCAAA;AF4GF;AEzGA;EACE,SAAA;AF2GF;AExGA;;;;;;EAME,SAAA;EACA,kBAAA;AF0GF;AEvGA;;EAEE,SAAA;EACA,UAAA;EACA,gBAAA;AFyGF;AEtGA;EACE,qBAAA;AFwGF;AErGA;EACE,WAAA;AFuGF;AErGE;AAAA;IACE,aAAA;IACA,cAAA;AFwGF;AACF;AGrJA;EACE,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,kEAAA;EACA,iBAAA;EACA,qBAAA;EACA,qBAAA;EACA,4BAAA;EACA,yBAAA;EACA,mBAAA;AHuJF;AGpJA;EACE,gBAAA;AHsJF;AGvJA;EAII,gBAAA;AHsJJ;AGlJA;EACE,cAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;AHoJF;AGjJA;EACE,cAAA;AHmJF;AGhJA;;;;;;EAME,cAAA;AHkJF;AG/IA;;EAEE,WAAA;AHiJF;AG9IA;;;EAGE,cAAA;AHgJF;AG7IA;;;;;;;EAOE,cAAA;AH+IF;AG5IA;;;;;;;;;;;EAWE,cAAA;AH8IF;AG3IA;EACE,kBAAA;AH6IF;AA5NA;EACE,iBAAA;EACA,kBAAA;AA8NF;AAhOA;EAKI,mBAAA;AA8NJ',
          sourcesContent: [
            "\n@import '../common/style/base';\n@import '../common/style/highlight';\n\n.van-doc-intro {\n  padding-top: 20px;\n  text-align: center;\n\n  p {\n    margin-bottom: 20px;\n  }\n}\n",
            "/* cyrillic-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'),\n    url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2)\n      format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,\n    U+FE2E-FE2F;\n}\n\n/* cyrillic */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'),\n    url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2)\n      format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n\n/* greek-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'),\n    url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2)\n      format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n\n/* greek */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'),\n    url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2)\n      format('woff2');\n  unicode-range: U+0370-03FF;\n}\n\n/* vietnamese */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'),\n    url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2)\n      format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,\n    U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n\n/* latin-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'),\n    url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2)\n      format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,\n    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n\n/* latin */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'),\n    url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2)\n      format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\n    U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),\n    url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOX-hpKKSTj5PW.woff2)\n      format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,\n    U+FE2E-FE2F;\n}\n\n/* cyrillic */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),\n    url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOVuhpKKSTj5PW.woff2)\n      format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n\n/* greek-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),\n    url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXuhpKKSTj5PW.woff2)\n      format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n\n/* greek */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),\n    url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOUehpKKSTj5PW.woff2)\n      format('woff2');\n  unicode-range: U+0370-03FF;\n}\n\n/* vietnamese */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),\n    url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXehpKKSTj5PW.woff2)\n      format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,\n    U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n\n/* latin-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),\n    url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXOhpKKSTj5PW.woff2)\n      format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,\n    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n\n/* latin */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),\n    url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2)\n      format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\n    U+FEFF, U+FFFD;\n}\n",
            "@import './var';\n@import './font.less';\n\nbody {\n  min-width: 1100px;\n  margin: 0;\n  overflow-x: auto;\n  color: @van-doc-black;\n  font-size: 16px;\n  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue',\n    Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui',\n    'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;\n  background-color: @van-doc-background-color;\n  -webkit-font-smoothing: antialiased;\n}\n\np {\n  margin: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  font-size: inherit;\n}\n\nul,\nol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n.van-doc-row {\n  width: 100%;\n\n  @media (min-width: @van-doc-row-max-width) {\n    width: @van-doc-row-max-width;\n    margin: 0 auto;\n  }\n}\n",
            "@import './var';\n\ncode {\n  position: relative;\n  display: block;\n  padding: 16px 20px;\n  overflow-x: auto;\n  color: @van-doc-code-color;\n  font-weight: 400;\n  font-size: 14px;\n  font-family: @van-doc-code-font-family;\n  line-height: 26px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  -webkit-font-smoothing: auto;\n  background-color: #f8f8f8;\n  border-radius: @van-doc-border-radius;\n}\n\npre {\n  margin: 20px 0 0;\n\n  + p {\n    margin-top: 20px;\n  }\n}\n\n.hljs {\n  display: block;\n  padding: 0.5em;\n  overflow-x: auto;\n  background: #fff;\n}\n\n.hljs-subst {\n  color: @van-doc-code-color;\n}\n\n.hljs-string,\n.hljs-meta,\n.hljs-symbol,\n.hljs-template-tag,\n.hljs-template-variable,\n.hljs-addition {\n  color: @van-doc-green;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #999;\n}\n\n.hljs-params,\n.hljs-keyword,\n.hljs-attribute {\n  color: @van-doc-purple;\n}\n\n.hljs-deletion,\n.hljs-variable,\n.hljs-number,\n.hljs-regexp,\n.hljs-literal,\n.hljs-bullet,\n.hljs-link {\n  color: #eb6f6f;\n}\n\n.hljs-attr,\n.hljs-selector-tag,\n.hljs-title,\n.hljs-section,\n.hljs-built_in,\n.hljs-doctag,\n.hljs-type,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-strong {\n  color: #4994df;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n",
          ],
          sourceRoot: '',
        },
      ]),
        (n.Z = o);
    },
    484: (e, n, t) => {
      const r = t(7705);
      const o = t.n(r)()(!0);
      o.push([
        e.id,
        '.van-doc-container {\n  box-sizing: border-box;\n  padding-left: 220px;\n  overflow: hidden;\n}\n.van-doc-container--with-simulator {\n  padding-right: 384px;\n}\n',
        '',
        {
          version: 3,
          sources: [
            'webpack://node_modules/@vant/cli/site/desktop/components/Container.vue',
          ],
          names: [],
          mappings:
            'AAGA;EACE,sBAAA;EACA,mBAAA;EACA,gBAAA;AAFF;AAIE;EACE,oBAAA;AAFJ',
          sourcesContent: [
            "\n@import '../../common/style/var';\n\n.van-doc-container {\n  box-sizing: border-box;\n  padding-left: @van-doc-nav-width;\n  overflow: hidden;\n\n  &--with-simulator {\n    padding-right: @van-doc-simulator-width + @van-doc-padding;\n  }\n}\n",
          ],
          sourceRoot: '',
        },
      ]),
        (n.Z = o);
    },
    8570: (e, n, t) => {
      const r = t(7705);
      const o = t.n(r)()(!0);
      o.push([
        e.id,
        ".card {\n  margin-bottom: 24px;\n  padding: 24px;\n  background-color: #fff;\n  border-radius: 20px;\n  box-shadow: 0 8px 12px #ebedf0;\n}\n.card > p a,\n.card > ul a,\n.card > table a,\n.card > blockquote a {\n  margin: 0 1px;\n  color: #1989fa;\n  -webkit-font-smoothing: auto;\n}\n.card > p a:hover,\n.card > ul a:hover,\n.card > table a:hover,\n.card > blockquote a:hover {\n  color: #0570db;\n}\n.card > p a:active,\n.card > ul a:active,\n.card > table a:active,\n.card > blockquote a:active {\n  color: #0456a9;\n}\n.card > h3,\n.card > h4,\n.card > h5,\n.card > h6 {\n  color: #323233;\n  font-weight: normal;\n  line-height: 1.5;\n}\n.card > h3[id],\n.card > h4[id],\n.card > h5[id],\n.card > h6[id] {\n  cursor: pointer;\n}\n.card > h3 {\n  margin-bottom: 16px;\n  font-weight: 600;\n  font-size: 19px;\n}\n.card > h4 {\n  margin: 24px 0 12px;\n  font-weight: 600;\n  font-size: 16px;\n}\n.card > h5 {\n  margin: 24px 0 12px;\n  font-weight: 600;\n  font-size: 15px;\n}\n.card > p,\n.card > blockquote p {\n  color: #34495e;\n  font-size: 15px;\n  line-height: 26px;\n}\n.card > p strong,\n.card > blockquote p strong {\n  color: black;\n}\n.card > table {\n  width: 100%;\n  margin-top: 12px;\n  color: #34495e;\n  font-size: 14px;\n  line-height: 1.5;\n  border-collapse: collapse;\n}\n.card > table th {\n  padding: 8px 10px;\n  font-weight: 600;\n  text-align: left;\n}\n.card > table th:first-child {\n  padding-left: 0;\n}\n.card > table th:last-child {\n  padding-right: 0;\n}\n.card > table td {\n  padding: 8px;\n  border-top: 1px solid #f1f4f8;\n}\n.card > table td:first-child {\n  padding-left: 0;\n}\n.card > table td:first-child code {\n  margin: 0;\n  padding: 2px 6px;\n  color: #1989fa;\n  font-weight: 600;\n  font-size: 11px;\n  background-color: rgba(25, 137, 250, 0.1);\n  border-radius: 20px;\n}\n.card > table td:last-child {\n  padding-right: 0;\n}\n.card > table em {\n  display: inline-block;\n  color: #4fc08d;\n  font-size: 14px;\n  font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;\n  font-style: normal;\n  max-width: 300px;\n  -webkit-font-smoothing: auto;\n}\n.card > ul li,\n.card > ol li {\n  position: relative;\n  margin: 5px 0 5px 10px;\n  padding-left: 15px;\n  color: #34495e;\n  font-size: 15px;\n  line-height: 26px;\n}\n.card > ul li::before,\n.card > ol li::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 6px;\n  height: 6px;\n  margin-top: 10px;\n  border: 1px solid #666;\n  border-radius: 50%;\n  content: '';\n}\n.card > hr {\n  margin: 30px 0;\n  border: 0 none;\n  border-top: 1px solid #eee;\n}\n.card > p code,\n.card > ul code,\n.card > ol code,\n.card > table code {\n  display: inline;\n  margin: 0 2px;\n  padding: 2px 5px;\n  font-size: 14px;\n  font-family: inherit;\n  font-weight: 600;\n  word-break: keep-all;\n  background-color: #f7f8fa;\n  border-radius: 4px;\n  -webkit-font-smoothing: antialiased;\n}\n.card > blockquote {\n  margin: 16px 0 0;\n  padding: 16px;\n  background-color: #ecf9ff;\n  border-radius: 20px;\n}\n.card > img,\n.card > p img {\n  width: 100%;\n  margin: 16px 0;\n  border-radius: 20px;\n}\n.van-doc-content {\n  position: relative;\n  flex: 1;\n  padding: 0 0 75px;\n}\n.van-doc-content > section {\n  padding: 24px;\n  overflow: hidden;\n}\n.van-doc-content > section h1,\n.van-doc-content > section h2 {\n  color: #323233;\n  font-weight: normal;\n  line-height: 1.5;\n}\n.van-doc-content > section h1[id],\n.van-doc-content > section h2[id] {\n  cursor: pointer;\n}\n.van-doc-content > section h1 {\n  margin: 0 0 30px;\n  font-size: 30px;\n  cursor: default;\n}\n.van-doc-content > section h2 {\n  margin: 45px 0 20px;\n  font-size: 25px;\n}\n.van-doc-content--changelog strong {\n  display: block;\n  margin: 24px 0 12px;\n  font-weight: 600;\n  font-size: 15px;\n}\n.van-doc-content--changelog h3 + p code {\n  margin: 0;\n}\n.van-doc-content--changelog h3 a {\n  color: inherit;\n  font-size: 20px;\n}\n",
        '',
        {
          version: 3,
          sources: [
            'webpack://node_modules/@vant/cli/site/desktop/components/Content.vue',
          ],
          names: [],
          mappings:
            'AAGA;EACE,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;AAFF;AAHA;;;;EAWI,aAAA;EACA,cAAA;EACA,4BAAA;AAFJ;AAII;;;;EACE,cAAA;AACN;AAEI;;;;EACE,cAAA;AAGN;AAvBA;;;;EA4BI,cAAA;EACA,mBAAA;EACA,gBAAA;AACJ;AACI;;;;EACE,eAAA;AAIN;AArCA;EAsCI,mBAAA;EACA,gBAAA;EACA,eAAA;AAEJ;AA1CA;EA4CI,mBAAA;EACA,gBAAA;EACA,eAAA;AACJ;AA/CA;EAkDI,mBAAA;EACA,gBAAA;EACA,eAAA;AAAJ;AApDA;;EAyDI,cAAA;EACA,eAAA;EACA,iBAAA;AADJ;AA1DA;;EA8DM,YAAA;AAAN;AA9DA;EAmEI,WAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;AAFJ;AAtEA;EA2EM,iBAAA;EACA,gBAAA;EACA,gBAAA;AAFN;AAIM;EACE,eAAA;AAFR;AAKM;EACE,gBAAA;AAHR;AAjFA;EAyFM,YAAA;EACA,6BAAA;AALN;AAOM;EACE,eAAA;AALR;AAIM;EAKI,SAAA;EACA,gBAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,yCAAA;EACA,mBAAA;AANV;AAUM;EACE,gBAAA;AARR;AApGA;EAiHM,qBAAA;EACA,cAAA;EACA,eAAA;EACA,kEAAA;EACA,kBAAA;EACA,gBAAA;EACA,4BAAA;AAVN;AA7GA;;EA6HI,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;AAZJ;AAcI;;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,sBAAA;EACA,UAAA;EACA,WAAA;EACA,gBAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;AAXN;AAnIA;EAmJI,cAAA;EACA,cAAA;EACA,0BAAA;AAbJ;AAxIA;;;;EA4JI,eAAA;EACA,aAAA;EACA,gBAAA;EACA,eAAA;EACA,oBAAA;EACA,gBAAA;EACA,oBAAA;EACA,yBAAA;EACA,kBAAA;EACA,mCAAA;AAdJ;AAvJA;EAyKI,gBAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;AAfJ;AA7JA;;EAiLI,WAAA;EACA,cAAA;EACA,mBAAA;AAhBJ;AAoBA;EACE,kBAAA;EACA,OAAA;EACA,iBAAA;AAlBF;AAeA;EAMI,aAAA;EACA,gBAAA;AAlBJ;AAWA;;EAWM,cAAA;EACA,mBAAA;EACA,gBAAA;AAlBN;AAoBM;;EACE,eAAA;AAjBR;AACA;EAqBM,gBAAA;EACA,eAAA;EACA,eAAA;AAnBN;AAJA;EA2BM,mBAAA;EACA,eAAA;AApBN;AAwBE;EAEI,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;AAvBN;AAkBE;EAUM,SAAA;AAzBR;AAeE;EAcM,cAAA;EACA,eAAA;AA1BR',
          sourcesContent: [
            "\n@import '../../common/style/var';\n\n.card {\n  margin-bottom: 24px;\n  padding: 24px;\n  background-color: #fff;\n  border-radius: @van-doc-border-radius;\n  box-shadow: 0 8px 12px #ebedf0;\n\n  > p a,\n  > ul a,\n  > table a,\n  > blockquote a {\n    margin: 0 1px;\n    color: @van-doc-blue;\n    -webkit-font-smoothing: auto;\n\n    &:hover {\n      color: darken(@van-doc-blue, 10%);\n    }\n\n    &:active {\n      color: darken(@van-doc-blue, 20%);\n    }\n  }\n\n  > h3,\n  > h4,\n  > h5,\n  > h6 {\n    color: @van-doc-black;\n    font-weight: normal;\n    line-height: 1.5;\n\n    &[id] {\n      cursor: pointer;\n    }\n  }\n\n  > h3 {\n    margin-bottom: 16px;\n    font-weight: 600;\n    font-size: 19px;\n  }\n\n  > h4 {\n    margin: 24px 0 12px;\n    font-weight: 600;\n    font-size: 16px;\n  }\n\n  > h5 {\n    margin: 24px 0 12px;\n    font-weight: 600;\n    font-size: 15px;\n  }\n\n  > p,\n  > blockquote p {\n    color: @van-doc-text-color;\n    font-size: 15px;\n    line-height: 26px;\n\n    strong {\n      color: black;\n    }\n  }\n\n  > table {\n    width: 100%;\n    margin-top: 12px;\n    color: @van-doc-text-color;\n    font-size: 14px;\n    line-height: 1.5;\n    border-collapse: collapse;\n\n    th {\n      padding: 8px 10px;\n      font-weight: 600;\n      text-align: left;\n\n      &:first-child {\n        padding-left: 0;\n      }\n\n      &:last-child {\n        padding-right: 0;\n      }\n    }\n\n    td {\n      padding: 8px;\n      border-top: 1px solid @van-doc-code-background-color;\n\n      &:first-child {\n        padding-left: 0;\n\n        // version tag\n        code {\n          margin: 0;\n          padding: 2px 6px;\n          color: @van-doc-blue;\n          font-weight: 600;\n          font-size: 11px;\n          background-color: fade(@van-doc-blue, 10%);\n          border-radius: 20px;\n        }\n      }\n\n      &:last-child {\n        padding-right: 0;\n      }\n    }\n\n    em {\n      display: inline-block;\n      color: @van-doc-green;\n      font-size: 14px;\n      font-family: @van-doc-code-font-family;\n      font-style: normal;\n      max-width: 300px;\n      -webkit-font-smoothing: auto;\n    }\n  }\n\n  > ul li,\n  > ol li {\n    position: relative;\n    margin: 5px 0 5px 10px;\n    padding-left: 15px;\n    color: @van-doc-text-color;\n    font-size: 15px;\n    line-height: 26px;\n\n    &::before {\n      position: absolute;\n      top: 0;\n      left: 0;\n      box-sizing: border-box;\n      width: 6px;\n      height: 6px;\n      margin-top: 10px;\n      border: 1px solid @van-doc-dark-grey;\n      border-radius: 50%;\n      content: '';\n    }\n  }\n\n  > hr {\n    margin: 30px 0;\n    border: 0 none;\n    border-top: 1px solid #eee;\n  }\n\n  > p code,\n  > ul code,\n  > ol code,\n  > table code {\n    display: inline;\n    margin: 0 2px;\n    padding: 2px 5px;\n    font-size: 14px;\n    font-family: inherit;\n    font-weight: 600;\n    word-break: keep-all;\n    background-color: @van-doc-background-color;\n    border-radius: 4px;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  > blockquote {\n    margin: 16px 0 0;\n    padding: 16px;\n    background-color: #ecf9ff;\n    border-radius: @van-doc-border-radius;\n  }\n\n  > img,\n  > p img {\n    width: 100%;\n    margin: 16px 0;\n    border-radius: @van-doc-border-radius;\n  }\n}\n\n.van-doc-content {\n  position: relative;\n  flex: 1;\n  padding: 0 0 75px;\n\n  > section {\n    padding: 24px;\n    overflow: hidden;\n\n    h1,\n    h2 {\n      color: @van-doc-black;\n      font-weight: normal;\n      line-height: 1.5;\n\n      &[id] {\n        cursor: pointer;\n      }\n    }\n\n    h1 {\n      margin: 0 0 30px;\n      font-size: 30px;\n      cursor: default;\n    }\n\n    h2 {\n      margin: 45px 0 20px;\n      font-size: 25px;\n    }\n  }\n\n  &--changelog {\n    strong {\n      display: block;\n      margin: 24px 0 12px;\n      font-weight: 600;\n      font-size: 15px;\n    }\n\n    h3 {\n      + p code {\n        margin: 0;\n      }\n\n      a {\n        color: inherit;\n        font-size: 20px;\n      }\n    }\n  }\n}\n",
          ],
          sourceRoot: '',
        },
      ]),
        (n.Z = o);
    },
    8602: (e, n, t) => {
      const r = t(7705);
      const o = t.n(r)()(!0);
      o.push([
        e.id,
        ".demo-playground[data-v-41f5cf44] {\n  background-color: #fff;\n  border: 1px solid #ebedf1;\n  border-radius: 1px;\n  margin: 24px 0;\n}\n.demo-playground.transform[data-v-41f5cf44] {\n  transform: translate(0, 0);\n}\n.demo-playground--previewer[data-v-41f5cf44] {\n  padding: 40px 24px;\n  border-bottom: 1px solid #ebedf1;\n}\n.demo-playground--previewer.compact[data-v-41f5cf44] {\n  padding: 0;\n}\n.demo-playground--code--actions[data-v-41f5cf44] {\n  display: flex;\n  height: 40px;\n  padding: 0 1em;\n  align-items: center;\n}\n.demo-playground--code--actions > a[data-v-41f5cf44]:not(:last-child),\n.demo-playground--code--actions > button[data-v-41f5cf44]:not(:last-child) {\n  margin-right: 8px;\n}\n.demo-playground--code--actions > a[data-v-41f5cf44] {\n  display: flex;\n}\n.demo-playground--code--actions button[data-v-41f5cf44] {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  opacity: 0.6;\n  outline: none;\n  transition: opacity 0.2s, background 0.2s;\n}\n.demo-playground--code--actions button[data-v-41f5cf44]::after {\n  content: '';\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  right: -8px;\n  bottom: -8px;\n}\n.demo-playground--code--actions button[data-v-41f5cf44]:hover {\n  opacity: 0.8;\n}\n.demo-playground--code--actions button[data-v-41f5cf44]:active {\n  opacity: 0.9;\n}\n.demo-playground--code--actions button[data-v-41f5cf44]:disabled {\n  opacity: 0.2;\n  cursor: not-allowed;\n}\n.demo-playground--code--actions button[role='codesandbox'][data-v-41f5cf44] {\n  background-position: -18px 0;\n}\n.demo-playground--code--actions button[role='codepen'][data-v-41f5cf44] {\n  background-position: -36px 0;\n}\n.demo-playground--code--actions button[role='source'][data-v-41f5cf44] {\n  background-position: -72px 0;\n}\n.demo-playground--code--actions button[role='change-jsx'][data-v-41f5cf44] {\n  background-position: -90px 0;\n}\n.demo-playground--code--actions button[role='change-tsx'][data-v-41f5cf44] {\n  background-position: -108px 0;\n}\n.demo-playground--code--actions button[role='open-demo'][data-v-41f5cf44] {\n  background-position: -126px 0;\n}\n.demo-playground--code--actions button[role='motions'][data-v-41f5cf44] {\n  background-position: -162px 0;\n}\n.demo-playground--code--actions button[role='sketch-component'][data-v-41f5cf44] {\n  background-position: -182px 0;\n}\n.demo-playground--code--actions button[role='sketch-group'][data-v-41f5cf44] {\n  background-position: -200px 0;\n}\n.demo-playground--code--actions button[role='copy'][data-status='ready'][data-v-41f5cf44] {\n  background-position: -54px 0;\n}\n.demo-playground--code--actions button[role='copy'][data-status='copied'][data-v-41f5cf44] {\n  pointer-events: none;\n  background-position: -54px -16px;\n}\n.demo-playground--code--actions button[role='refresh'][data-v-41f5cf44] {\n  background-position-x: -144px;\n}\n.demo-playground--code--actions > span[data-v-41f5cf44] {\n  flex: 1;\n  display: inline-block;\n}\n.demo-playground--code--content[data-v-41f5cf44] {\n  border-top: 1px dashed #ebedf1;\n}\n.demo-playground--code--content[data-v-41f5cf44] pre {\n  margin: 0;\n}\n.demo-playground--code--content[data-v-41f5cf44] .language-html {\n  border-radius: 0;\n}\n.action-icon[data-v-41f5cf44] {\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAAA8CAMAAADc4HoZAAABFFBMVEUAAABGT2VGTmZaYXpCvGtIUGg3tGBGTmU3s2A/tmFKUGxFTmRFTWVQWmxFTWRJUGZFTWRGTmRLWWpFTWRGTmVGTmVLVG1FTmRGTWVHTmVFTWRHUGdFTWRGT2ZFTWVGTmU6t2I7xHA3tF9GTWRIT2dFTmRGTmVFTWQ3s2BFTWRGTmVGTmZKUmVFTWRFTWRGTWRGTmVcXHxFTmVFTmVGTmVFTWRIUGdGTWVNU3FGT2ZGTmVHTmVFTWRFTWVFTmVITWRHUGZFTWVFTmRGTmZGTmVFTWVLU2g4tF83tGBFTWQ3s1/LzdT09faoq7Zwdoieoq58gpLj5OeCh5fq6+2/wsmTmKWQlKJfZnpIUGfU1tu0t8BOVWynlyFSAAAASXRSTlMAkoAHEkDQ/dgYFuf0C8gj+KQQmm1oEuyNWNg53kSXfCYI5tEtzq7ivbOgTBy924R1BfHUibcpYw1JcU7v+7E3Nav6XVPDGraPqQuKawAACh1JREFUeNrsm2lT6kgUhg9QFFUkgWDYZfnAVsi+KQJeQdGqt1xm7jZ3lv//PyYdhe7QWQw1zP0w83xQsY9Um4fTp7vToeBczmaX5MN5rXZO/+NGJzGuLejnkw3dADehLHkQyceAWD5C/0my9XqWPLlCK9WHQScirUMk18g7J9ZosYLFajFyT8siLIpuyQkHKBDw4NgYsnDr0Xybaii60rjYzsmdbrqnw0TvpbvkhjYuzinygDXJXLewR2/O/f73w1cWCUj0LkmiU8SeYsc9LXMZIJNjyXkqmbWQCzV8ICawzLO8jh3q4IyciYfugMnMMGYT4C4UJ2fOEbbSc0EyrVp4T/7u4kiZs6jANjwBxkupWMLG7NIlLZvxM+As3nRLTsD/N5xtekmHIEQuhBAoBuREtmaXWVgB41Smc97JbMZA7pqcKKgopbu7FC1BLUgD22MyeVnPWD0bonLLeCQRhIkzQNnz6gHiK0HmxeF4qkKPSsVygh2x2q50SmlZIGIyiQo8OY+XGVExOLVM2WVRbAkDSma0609aQaxKMgOo6YjQ77Tc8d3laxPRxS7R564yI8WSFkymgUNuJqlbomQLisblpnNAf0nrB1j06rTsA7n0SE5L2skkh+Qcm2CP3vGV2QHWp5Ypu4wDosumRpyzNrBwcFmqk4166dBmrFgJ5aeDKhvSklWLBLokgBhcaF3bFL59lV45EQsR3QLVfV0uAuNFhEy2JaC/fcveMVC8ltKSy3RITtjRl34yDSj0r8rMNkyXQksByJOdCmIdslNAKS7V0BIKdpmGQ1+S9slA2IVa60My89HoRKyZ5XTD8rhBX1DwEN85Gw53drIsT6W0FGTKyYmYtgcI427rI1NB5bQyZZeTuNCSXaEpBX2Cotm9qWqdJOqqajN85y8zTC6E8SGZGalmjja4uaQC0OUy0UzSAckNTKS0FGTKyYmYbfQP42brcFGr/X5+N/XDNVG+36+eXCZ3Kbbkbd644cHBW6bpnTlx0vZO6PL0NI/LE8uksxtUqQ7sUgpoAfp0TgLzqQ4oAFkkeFqadCwFxJMz4SKTwogVpIsaBtrv+qdQzZ8ibSB8cpncJW+Z68iQTBq5EXG6N6UIvTHVr2hPpHTX9ZY5Rf0ImfIEyEMmFWHQmk89gHKhBShCP68UoHVfFtZnqV0yahWYVLTdJyMFwE0ms8l+cnFJfWyIuM2TyuQuecsW4xFJMMcd0S1PzBRQGdkaOKosc4DKYn1amSM2rb4H5lwmaVUVqEXJItoA1LBGokwoHWKUS0AqBZTKxOgocJXJl74uLi+Be+I2TyuTu+SkkCInmrZS3kNXkMnnF9RFT5Qpv1cVJkYwmRzxlavMIRClmTgBYmIeU1bpfC+WqS6RKPOKOTxjaWlZXSpWcp4xq1dBZIaBTxH+v95kySLyCQifSCZ3WYuTnYbDKNvpnVMVPUpulvSGPiFRJlq39M5E95bZNYZXD1icTOaoHophQ1EgLcpkrBOsdLJimbglsstMzpnGxZtSE0vjwlKalGVyuEzZJSXQIxJs2kVVDJOLC6NKVK/0jLWrzEzPYB/G6SxV9pJZq2XlyXSHDqlAjW5XjaSCzfsfom2XiX3hbEN4y3G/r64agy7ZifRrXOa6wmMkmT7YZfbwTuPsUoGi2WUyWOlkxZJIkskGWD7YkpWcb4NtAJlVm8tHYEF2m6KofW/pXLe2INxkTs0QeszB5N5rmJVckg55RzI+gTpEToFySRZ1GAcy94lg8AmOtmtSh2QnNebrTCnmWJlzHRatYeRegbomWSZpU2Cq0UdkdgLKlBMzA2EZNpJkmnmZQ9EwqtSDMijqGU+ZeeSqD/pCkikhZ6ZsU8cNc+kuc3EoU0tgT4hE5q3ELgZCTIBh1nECVAWm0fMs3daA8bV4wUN7f0nhAkdCgkztnx9mZ5iQ+zDLSLxdx5bZFK+Tp8wZDNLqFEAmr5myzRh36TfM8obXX01eAeyaqT4LhYvouMccLzNSRIlZmwGzLnGskVWWWWhBmgBZlXPpOwHieEyA5joGsktZJvumXBN5yzSQW/puGhy2XGBDTjZbWDGXLhMgRZ4ArQF8f375+vnP5y/gFawKYHzlEuOzNPGRSVFgSkT37LcCYDSidpnnCUCQaTmUlyaW1QAyxaVJAVjLLmWZViQSUW+Z9RsWE1DmFuMIOZAddIMtTSrA69PTy/dfXr798QMo7GVmzjXyijleJqVwV7d6t4rL2+NlUeY5GE6bBnNp0yCQTG4zBYVIWGa6y6SMCmDoKZOuFQDVYDI1FWlyJtimQR8/vv76/O319enrl89/wdjLZEnsFeO/nee6NImv8MAW6zpSssylKLMMxrHbebJM2eZohYrkUpL5HhKfqohdesokbZED1oFk0gC5M/Kje+e7nafi9fnl8y8mn1+ef6AtyXSNOV4mZd4q7wAo+8s8fqOdA7httJd3Hwlpo12WeUZUv0PaVWaCuTSVqxgGkznPYTYiP/w32lfAr0+/fAF+++2PV6ApyvSK8ZcpL034LbAWclm2kEU/4i8z8C0wf5mcENQIcTxkJnuTOMV1ZBxkniceqYkmnRmtR4ooQWVSJwbD16b/LbAGTEffnvD705NpC3lZphxzrEwbYVZg2Dd+c9pZZpCb08FltrChj8nsAGpiDD0py9RWUIvAkFWOuwcFuA0ok4bALCuKswQFvTk9gMnL85fvz99h0ttsmp8+tdt9LlOKuXC5OS1fOa42c3jUUrW6sIGetB8bwVCUuUCgYyPBZa6B+w/KpHsVgOq4adBhTQ8RonIOwE3ACRBjGMNquJ/ODcc9YgQ8NtJVYfLn568vMImtVrmcoiitVmLuFON6bMRfpiOPY/QOD3T16juZ9V6AA10+MhkkE0Ys6yuzXFgTY35fzTw6L03iV8MOMbTt8CpJwWVa02C9PSyUt8NPKtBK0hEHuoYAzAH0G0z0c+IEjIGALDMfdeYCuD88ahmrxJnMuBE77qilLHPkKnOZlhLz9CcNnFu06hg7lLBGRx21DMHkr9+ZJ6HFKya4TC9atIOf6woBIX6SK8AhaM8D0D//ELR3ryLXlV4xV0qElhEiz0PQbcNoOx+CvlJgIT6H4xUTHCMGd1LE4aVTKpa+jyf4y/z5jycE7lXwxxO0gtFu5svECRrz/4NDf7dvxjYQwzAMdGEE8RaWq2ySh/cf6OGoyQCRANLkBHenWqnzxyGU6aVP0zRN0zTtmzUru64ZWZ923kC0n6tT9WnnnL+y5R51pj6L9ahlx7k6UR8kVt2Sh1W35GHVLXlYdUseVt2Sh1W3fK8aDmuSOmyfelyGwpqkjtvnnvMyENYcdeA+fSxaDNYUdeg+TovBmqAO3sdpMVjD1eH7OC0Ga7A6QR+nxWANVafo47QYrIHqJH0eWhDWMHWaPosWhTVInahPHzisIepUffrAYQ1QJ+vTgVgD1IP6/AHM0QJdY511NAAAAABJRU5ErkJggg==') no-repeat 0 0/230px auto;\n}\n",
        '',
        {
          version: 3,
          sources: [
            'webpack://node_modules/@vant/cli/site/desktop/components/DemoPlayground.vue',
          ],
          names: [],
          mappings:
            'AACA;EACE,sBAAA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;AAAF;AACE;EACE,0BAAA;AACJ;AACE;EACE,kBAAA;EACA,gCAAA;AACJ;AAAI;EACE,UAAA;AAEN;AAEI;EACE,aAAA;EACA,YAAA;EACA,cAAA;EACA,mBAAA;AAAN;AAJI;;EAOI,iBAAA;AACR;AARI;EAWI,aAAA;AAAR;AAXI;EAeI,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,SAAA;EACA,sBAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,yCAAA;AADR;AAIQ;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;AAFV;AAKQ;EACE,YAAA;AAHV;AAMQ;EACE,YAAA;AAJV;AAOQ;EACE,YAAA;EACA,mBAAA;AALV;AAQQ;EACE,4BAAA;AANV;AASQ;EACE,4BAAA;AAPV;AAUQ;EACE,4BAAA;AARV;AAWQ;EACE,4BAAA;AATV;AAYQ;EACE,6BAAA;AAVV;AAaQ;EACE,6BAAA;AAXV;AAcQ;EACE,6BAAA;AAZV;AAeQ;EACE,6BAAA;AAbV;AAgBQ;EACE,6BAAA;AAdV;AAiBQ;EACE,4BAAA;AAfV;AAkBQ;EACE,oBAAA;EACA,gCAAA;AAhBV;AAmBQ;EACE,6BAAA;AAjBV;AA/EI;EAsGI,OAAA;EACA,qBAAA;AApBR;AAuBI;EACE,8BAAA;AArBN;AAoBI;EAGI,SAAA;AApBR;AAiBI;EAMI,gBAAA;AApBR;AA0BA;EACE,8/HAAA;AAxBF',
          sourcesContent: [
            "\n.demo-playground {\n  background-color: #fff;\n  border: 1px solid #ebedf1;\n  border-radius: 1px;\n  margin: 24px 0;\n  &.transform {\n    transform: translate(0, 0);\n  }\n  &--previewer {\n    padding: 40px 24px;\n    border-bottom: 1px solid #ebedf1;\n    &.compact {\n      padding: 0;\n    }\n  }\n  &--code {\n    &--actions {\n      display: flex;\n      height: 40px;\n      padding: 0 1em;\n      align-items: center;\n      > a:not(:last-child),\n      > button:not(:last-child) {\n        margin-right: 8px;\n      }\n\n      > a {\n        display: flex;\n      }\n\n      button {\n        position: relative;\n        display: inline-block;\n        width: 16px;\n        height: 16px;\n        padding: 0;\n        border: 0;\n        box-sizing: border-box;\n        cursor: pointer;\n        opacity: 0.6;\n        outline: none;\n        transition: opacity 0.2s, background 0.2s;\n\n        // expand click area\n        &::after {\n          content: '';\n          position: absolute;\n          top: -8px;\n          left: -8px;\n          right: -8px;\n          bottom: -8px;\n        }\n\n        &:hover {\n          opacity: 0.8;\n        }\n\n        &:active {\n          opacity: 0.9;\n        }\n\n        &:disabled {\n          opacity: 0.2;\n          cursor: not-allowed;\n        }\n\n        &[role='codesandbox'] {\n          background-position: -18px 0;\n        }\n\n        &[role='codepen'] {\n          background-position: -36px 0;\n        }\n\n        &[role='source'] {\n          background-position: -72px 0;\n        }\n\n        &[role='change-jsx'] {\n          background-position: -90px 0;\n        }\n\n        &[role='change-tsx'] {\n          background-position: -108px 0;\n        }\n\n        &[role='open-demo'] {\n          background-position: -126px 0;\n        }\n\n        &[role='motions'] {\n          background-position: -162px 0;\n        }\n\n        &[role='sketch-component'] {\n          background-position: -182px 0;\n        }\n\n        &[role='sketch-group'] {\n          background-position: -200px 0;\n        }\n\n        &[role='copy'][data-status='ready'] {\n          background-position: -54px 0;\n        }\n\n        &[role='copy'][data-status='copied'] {\n          pointer-events: none;\n          background-position: -54px -16px;\n        }\n\n        &[role='refresh'] {\n          background-position-x: -144px;\n        }\n      }\n\n      // split action buttons by a blank node\n      > span {\n        flex: 1;\n        display: inline-block;\n      }\n    }\n    &--content {\n      border-top: 1px dashed #ebedf1;\n      :deep(pre) {\n        margin: 0;\n      }\n      :deep(.language-html) {\n        border-radius: 0;\n      }\n    }\n  }\n}\n\n.action-icon {\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAAA8CAMAAADc4HoZAAABFFBMVEUAAABGT2VGTmZaYXpCvGtIUGg3tGBGTmU3s2A/tmFKUGxFTmRFTWVQWmxFTWRJUGZFTWRGTmRLWWpFTWRGTmVGTmVLVG1FTmRGTWVHTmVFTWRHUGdFTWRGT2ZFTWVGTmU6t2I7xHA3tF9GTWRIT2dFTmRGTmVFTWQ3s2BFTWRGTmVGTmZKUmVFTWRFTWRGTWRGTmVcXHxFTmVFTmVGTmVFTWRIUGdGTWVNU3FGT2ZGTmVHTmVFTWRFTWVFTmVITWRHUGZFTWVFTmRGTmZGTmVFTWVLU2g4tF83tGBFTWQ3s1/LzdT09faoq7Zwdoieoq58gpLj5OeCh5fq6+2/wsmTmKWQlKJfZnpIUGfU1tu0t8BOVWynlyFSAAAASXRSTlMAkoAHEkDQ/dgYFuf0C8gj+KQQmm1oEuyNWNg53kSXfCYI5tEtzq7ivbOgTBy924R1BfHUibcpYw1JcU7v+7E3Nav6XVPDGraPqQuKawAACh1JREFUeNrsm2lT6kgUhg9QFFUkgWDYZfnAVsi+KQJeQdGqt1xm7jZ3lv//PyYdhe7QWQw1zP0w83xQsY9Um4fTp7vToeBczmaX5MN5rXZO/+NGJzGuLejnkw3dADehLHkQyceAWD5C/0my9XqWPLlCK9WHQScirUMk18g7J9ZosYLFajFyT8siLIpuyQkHKBDw4NgYsnDr0Xybaii60rjYzsmdbrqnw0TvpbvkhjYuzinygDXJXLewR2/O/f73w1cWCUj0LkmiU8SeYsc9LXMZIJNjyXkqmbWQCzV8ICawzLO8jh3q4IyciYfugMnMMGYT4C4UJ2fOEbbSc0EyrVp4T/7u4kiZs6jANjwBxkupWMLG7NIlLZvxM+As3nRLTsD/N5xtekmHIEQuhBAoBuREtmaXWVgB41Smc97JbMZA7pqcKKgopbu7FC1BLUgD22MyeVnPWD0bonLLeCQRhIkzQNnz6gHiK0HmxeF4qkKPSsVygh2x2q50SmlZIGIyiQo8OY+XGVExOLVM2WVRbAkDSma0609aQaxKMgOo6YjQ77Tc8d3laxPRxS7R564yI8WSFkymgUNuJqlbomQLisblpnNAf0nrB1j06rTsA7n0SE5L2skkh+Qcm2CP3vGV2QHWp5Ypu4wDosumRpyzNrBwcFmqk4166dBmrFgJ5aeDKhvSklWLBLokgBhcaF3bFL59lV45EQsR3QLVfV0uAuNFhEy2JaC/fcveMVC8ltKSy3RITtjRl34yDSj0r8rMNkyXQksByJOdCmIdslNAKS7V0BIKdpmGQ1+S9slA2IVa60My89HoRKyZ5XTD8rhBX1DwEN85Gw53drIsT6W0FGTKyYmYtgcI427rI1NB5bQyZZeTuNCSXaEpBX2Cotm9qWqdJOqqajN85y8zTC6E8SGZGalmjja4uaQC0OUy0UzSAckNTKS0FGTKyYmYbfQP42brcFGr/X5+N/XDNVG+36+eXCZ3Kbbkbd644cHBW6bpnTlx0vZO6PL0NI/LE8uksxtUqQ7sUgpoAfp0TgLzqQ4oAFkkeFqadCwFxJMz4SKTwogVpIsaBtrv+qdQzZ8ibSB8cpncJW+Z68iQTBq5EXG6N6UIvTHVr2hPpHTX9ZY5Rf0ImfIEyEMmFWHQmk89gHKhBShCP68UoHVfFtZnqV0yahWYVLTdJyMFwE0ms8l+cnFJfWyIuM2TyuQuecsW4xFJMMcd0S1PzBRQGdkaOKosc4DKYn1amSM2rb4H5lwmaVUVqEXJItoA1LBGokwoHWKUS0AqBZTKxOgocJXJl74uLi+Be+I2TyuTu+SkkCInmrZS3kNXkMnnF9RFT5Qpv1cVJkYwmRzxlavMIRClmTgBYmIeU1bpfC+WqS6RKPOKOTxjaWlZXSpWcp4xq1dBZIaBTxH+v95kySLyCQifSCZ3WYuTnYbDKNvpnVMVPUpulvSGPiFRJlq39M5E95bZNYZXD1icTOaoHophQ1EgLcpkrBOsdLJimbglsstMzpnGxZtSE0vjwlKalGVyuEzZJSXQIxJs2kVVDJOLC6NKVK/0jLWrzEzPYB/G6SxV9pJZq2XlyXSHDqlAjW5XjaSCzfsfom2XiX3hbEN4y3G/r64agy7ZifRrXOa6wmMkmT7YZfbwTuPsUoGi2WUyWOlkxZJIkskGWD7YkpWcb4NtAJlVm8tHYEF2m6KofW/pXLe2INxkTs0QeszB5N5rmJVckg55RzI+gTpEToFySRZ1GAcy94lg8AmOtmtSh2QnNebrTCnmWJlzHRatYeRegbomWSZpU2Cq0UdkdgLKlBMzA2EZNpJkmnmZQ9EwqtSDMijqGU+ZeeSqD/pCkikhZ6ZsU8cNc+kuc3EoU0tgT4hE5q3ELgZCTIBh1nECVAWm0fMs3daA8bV4wUN7f0nhAkdCgkztnx9mZ5iQ+zDLSLxdx5bZFK+Tp8wZDNLqFEAmr5myzRh36TfM8obXX01eAeyaqT4LhYvouMccLzNSRIlZmwGzLnGskVWWWWhBmgBZlXPpOwHieEyA5joGsktZJvumXBN5yzSQW/puGhy2XGBDTjZbWDGXLhMgRZ4ArQF8f375+vnP5y/gFawKYHzlEuOzNPGRSVFgSkT37LcCYDSidpnnCUCQaTmUlyaW1QAyxaVJAVjLLmWZViQSUW+Z9RsWE1DmFuMIOZAddIMtTSrA69PTy/dfXr798QMo7GVmzjXyijleJqVwV7d6t4rL2+NlUeY5GE6bBnNp0yCQTG4zBYVIWGa6y6SMCmDoKZOuFQDVYDI1FWlyJtimQR8/vv76/O319enrl89/wdjLZEnsFeO/nee6NImv8MAW6zpSssylKLMMxrHbebJM2eZohYrkUpL5HhKfqohdesokbZED1oFk0gC5M/Kje+e7nafi9fnl8y8mn1+ef6AtyXSNOV4mZd4q7wAo+8s8fqOdA7httJd3Hwlpo12WeUZUv0PaVWaCuTSVqxgGkznPYTYiP/w32lfAr0+/fAF+++2PV6ApyvSK8ZcpL034LbAWclm2kEU/4i8z8C0wf5mcENQIcTxkJnuTOMV1ZBxkniceqYkmnRmtR4ooQWVSJwbD16b/LbAGTEffnvD705NpC3lZphxzrEwbYVZg2Dd+c9pZZpCb08FltrChj8nsAGpiDD0py9RWUIvAkFWOuwcFuA0ok4bALCuKswQFvTk9gMnL85fvz99h0ttsmp8+tdt9LlOKuXC5OS1fOa42c3jUUrW6sIGetB8bwVCUuUCgYyPBZa6B+w/KpHsVgOq4adBhTQ8RonIOwE3ACRBjGMNquJ/ODcc9YgQ8NtJVYfLn568vMImtVrmcoiitVmLuFON6bMRfpiOPY/QOD3T16juZ9V6AA10+MhkkE0Ys6yuzXFgTY35fzTw6L03iV8MOMbTt8CpJwWVa02C9PSyUt8NPKtBK0hEHuoYAzAH0G0z0c+IEjIGALDMfdeYCuD88ahmrxJnMuBE77qilLHPkKnOZlhLz9CcNnFu06hg7lLBGRx21DMHkr9+ZJ6HFKya4TC9atIOf6woBIX6SK8AhaM8D0D//ELR3ryLXlV4xV0qElhEiz0PQbcNoOx+CvlJgIT6H4xUTHCMGd1LE4aVTKpa+jyf4y/z5jycE7lXwxxO0gtFu5svECRrz/4NDf7dvxjYQwzAMdGEE8RaWq2ySh/cf6OGoyQCRANLkBHenWqnzxyGU6aVP0zRN0zTtmzUru64ZWZ923kC0n6tT9WnnnL+y5R51pj6L9ahlx7k6UR8kVt2Sh1W35GHVLXlYdUseVt2Sh1W3fK8aDmuSOmyfelyGwpqkjtvnnvMyENYcdeA+fSxaDNYUdeg+TovBmqAO3sdpMVjD1eH7OC0Ga7A6QR+nxWANVafo47QYrIHqJH0eWhDWMHWaPosWhTVInahPHzisIepUffrAYQ1QJ+vTgVgD1IP6/AHM0QJdY511NAAAAABJRU5ErkJggg==')\n    no-repeat 0 0/230px auto;\n}\n",
          ],
          sourceRoot: '',
        },
      ]),
        (n.Z = o);
    },
    6399: (e, n, t) => {
      const r = t(7705);
      const o = t.n(r)()(!0);
      o.push([
        e.id,
        ".van-doc-header {\n  width: 100%;\n  background-color: #001938;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.van-doc-header__top {\n  display: flex;\n  align-items: center;\n  height: 64px;\n  padding: 0 24px;\n}\n.van-doc-header__top-nav {\n  flex: 1;\n  font-size: 0;\n  text-align: right;\n}\n.van-doc-header__top-nav > li {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.van-doc-header__top-nav-item {\n  margin-left: 16px;\n}\n.van-doc-header__top-nav-title {\n  display: block;\n  font-size: 15px;\n}\n.van-doc-header__cube {\n  position: relative;\n  display: block;\n  padding: 0 12px;\n  color: #001938;\n  background: #f7f8fa;\n  font-size: 14px;\n  line-height: 30px;\n  text-align: center;\n  border: 1px solid rgba(255, 255, 255, 0.7);\n  border-radius: 20px;\n  cursor: pointer;\n  transition: 0.3s ease-in-out;\n}\n.van-doc-header__version {\n  padding-right: 20px;\n}\n.van-doc-header__version::after {\n  position: absolute;\n  top: 10px;\n  right: 9px;\n  width: 5px;\n  height: 5px;\n  color: #001938;\n  border: 1px solid;\n  border-color: transparent transparent currentColor currentColor;\n  transform: rotate(-45deg);\n  content: '';\n}\n.van-doc-header__version-pop {\n  position: absolute;\n  top: 34px;\n  left: 0;\n  width: 100%;\n  z-index: 99;\n  color: #333;\n  line-height: 36px;\n  text-align: left;\n  overflow: hidden;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px #ebedf0;\n  transform-origin: top;\n  transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.van-doc-header__version-pop-item {\n  padding-left: 12px;\n  transition: 0.2s;\n}\n.van-doc-header__version-pop-item:hover {\n  color: #1989fa;\n  background-color: #f7f8fa;\n}\n.van-doc-header__logo {\n  display: block;\n}\n.van-doc-header__logo img,\n.van-doc-header__logo span {\n  display: inline-block;\n  vertical-align: middle;\n}\n.van-doc-header__logo img {\n  width: 28px;\n  margin-right: 12px;\n}\n.van-doc-header__logo span {\n  color: #fff;\n  font-size: 22px;\n}\n.van-doc-header__link span {\n  color: #fff;\n  font-size: 16px;\n}\n.van-doc-header__link img {\n  display: block;\n  width: 30px;\n  height: 30px;\n  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.van-doc-header__link img:hover {\n  transform: scale(1.2);\n}\n.van-doc-dropdown-enter,\n.van-doc-dropdown-leave-active {\n  transform: scaleY(0);\n  opacity: 0;\n}\n",
        '',
        {
          version: 3,
          sources: [
            'webpack://node_modules/@vant/cli/site/desktop/components/Header.vue',
          ],
          names: [],
          mappings:
            'AAGA;EACE,WAAA;EACA,yBAAA;EACA,yBAAA;UAAA,iBAAA;AAFF;AAIE;EACE,aAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;AAFJ;AAII;EACE,OAAA;EACA,YAAA;EACA,iBAAA;AAFN;AADI;EAMI,kBAAA;EACA,qBAAA;EACA,sBAAA;AAFR;AAKM;EACE,iBAAA;AAHR;AAMM;EACE,cAAA;EACA,eAAA;AAJR;AASE;EACE,kBAAA;EACA,cAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,0CAAA;EACA,mBAAA;EACA,eAAA;EACA,4BAAA;AAPJ;AAUE;EACE,mBAAA;AARJ;AAUI;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,UAAA;EACA,WAAA;EACA,cAAA;EACA,iBAAA;EACA,+DAAA;EACA,yBAAA;EACA,WAAA;AARN;AAWI;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;EACA,sBAAA;EACA,kBAAA;EACA,8BAAA;EACA,qBAAA;EACA,oDAAA;AATN;AAWM;EACE,kBAAA;EACA,gBAAA;AATR;AAWQ;EACE,cAAA;EACA,yBAAA;AATV;AAeE;EACE,cAAA;AAbJ;AAYE;;EAKI,qBAAA;EACA,sBAAA;AAbN;AAOE;EAUI,WAAA;EACA,kBAAA;AAdN;AAGE;EAeI,WAAA;EACA,eAAA;AAfN;AAmBE;EAEI,WAAA;EACA,eAAA;AAlBN;AAeE;EAOI,cAAA;EACA,WAAA;EACA,YAAA;EACA,wDAAA;AAnBN;AAqBM;EACE,qBAAA;AAnBR;AA0BE;;EAEE,oBAAA;EACA,UAAA;AAxBJ',
          sourcesContent: [
            "\n@import '../../common/style/var';\n\n.van-doc-header {\n  width: 100%;\n  background-color: #001938;\n  user-select: none;\n\n  &__top {\n    display: flex;\n    align-items: center;\n    height: @van-doc-header-top-height;\n    padding: 0 @van-doc-padding;\n\n    &-nav {\n      flex: 1;\n      font-size: 0;\n      text-align: right;\n\n      > li {\n        position: relative;\n        display: inline-block;\n        vertical-align: middle;\n      }\n\n      &-item {\n        margin-left: 16px;\n      }\n\n      &-title {\n        display: block;\n        font-size: 15px;\n      }\n    }\n  }\n\n  &__cube {\n    position: relative;\n    display: block;\n    padding: 0 12px;\n    color: #001938;\n    background: #f7f8fa;\n    font-size: 14px;\n    line-height: 30px;\n    text-align: center;\n    border: 1px solid rgba(255, 255, 255, 0.7);\n    border-radius: 20px;\n    cursor: pointer;\n    transition: 0.3s ease-in-out;\n  }\n\n  &__version {\n    padding-right: 20px;\n\n    &::after {\n      position: absolute;\n      top: 10px;\n      right: 9px;\n      width: 5px;\n      height: 5px;\n      color: #001938;\n      border: 1px solid;\n      border-color: transparent transparent currentColor currentColor;\n      transform: rotate(-45deg);\n      content: '';\n    }\n\n    &-pop {\n      position: absolute;\n      top: 34px;\n      left: 0;\n      width: 100%;\n      z-index: 99;\n      color: #333;\n      line-height: 36px;\n      text-align: left;\n      overflow: hidden;\n      background-color: #fff;\n      border-radius: 8px;\n      box-shadow: 0 4px 12px #ebedf0;\n      transform-origin: top;\n      transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);\n\n      &-item {\n        padding-left: 12px;\n        transition: 0.2s;\n\n        &:hover {\n          color: @van-doc-blue;\n          background-color: #f7f8fa;\n        }\n      }\n    }\n  }\n\n  &__logo {\n    display: block;\n\n    img,\n    span {\n      display: inline-block;\n      vertical-align: middle;\n    }\n\n    img {\n      width: 28px;\n      margin-right: 12px;\n    }\n\n    span {\n      color: #fff;\n      font-size: 22px;\n    }\n  }\n\n  &__link {\n    span {\n      color: #fff;\n      font-size: 16px;\n    }\n\n    img {\n      display: block;\n      width: 30px;\n      height: 30px;\n      transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n\n      &:hover {\n        transform: scale(1.2);\n      }\n    }\n  }\n}\n\n.van-doc-dropdown {\n  &-enter,\n  &-leave-active {\n    transform: scaleY(0);\n    opacity: 0;\n  }\n}\n",
          ],
          sourceRoot: '',
        },
      ]),
        (n.Z = o);
    },
    1654: (e, n, t) => {
      const r = t(7705);
      const o = t.n(r)()(!0);
      o.push([
        e.id,
        '.van-doc-nav {\n  position: fixed;\n  left: 0;\n  z-index: 1;\n  min-width: 220px;\n  max-width: 220px;\n  padding: 24px 0;\n  overflow-y: scroll;\n  background-color: #fff;\n  box-shadow: 0 8px 12px #ebedf0;\n}\n@media (min-width: 1680px) {\n.van-doc-nav {\n    left: 50%;\n    margin-left: -840px;\n}\n}\n.van-doc-nav::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background-color: transparent;\n}\n.van-doc-nav::-webkit-scrollbar-thumb {\n  background-color: transparent;\n  border-radius: 6px;\n}\n.van-doc-nav:hover::-webkit-scrollbar-thumb {\n  background-color: rgba(69, 90, 100, 0.2);\n}\n.van-doc-nav__group {\n  margin-bottom: 16px;\n  padding-left: 6px;\n}\n.van-doc-nav__title {\n  padding: 8px 0 8px 24px;\n  color: #455a64;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 28px;\n}\n.van-doc-nav__item a {\n  display: block;\n  margin: 8px 0;\n  padding: 8px 0 8px 24px;\n  color: #455a64;\n  font-size: 14px;\n  line-height: 20px;\n  transition: color 0.2s;\n}\n.van-doc-nav__item a:hover,\n.van-doc-nav__item a.active {\n  color: #4fc08d;\n}\n.van-doc-nav__item a.active {\n  font-weight: 600;\n  background-color: #ebfff0;\n  border-radius: 999px;\n}\n.van-doc-nav__item a span {\n  font-size: 13px;\n}\n@media (max-width: 1300px) {\n.van-doc-nav__item a {\n    font-size: 13px;\n}\n.van-doc-nav__item:active {\n    font-size: 14px;\n}\n}\n',
        '',
        {
          version: 3,
          sources: [
            'webpack://node_modules/@vant/cli/site/desktop/components/Nav.vue',
          ],
          names: [],
          mappings:
            'AAGA;EACE,eAAA;EACA,OAAA;EACA,UAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,sBAAA;EACA,8BAAA;AAFF;AAIE;AAAA;IACE,SAAA;IACA,mBAAA;AADF;AACF;AAGE;EACE,UAAA;EACA,WAAA;EACA,6BAAA;AADJ;AAIE;EACE,6BAAA;EACA,kBAAA;AAFJ;AAKE;EACE,wCAAA;AAHJ;AAME;EACE,mBAAA;EACA,iBAAA;AAJJ;AAOE;EACE,uBAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AALJ;AAQE;EAEI,cAAA;EACA,aAAA;EACA,uBAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,sBAAA;AAPN;AASM;;EAEE,cAAA;AAPR;AAUM;EACE,gBAAA;EACA,yBAAA;EACA,oBAAA;AARR;AAVE;EAsBM,eAAA;AATR;AAcE;AACE;IAEI,eAAA;AAbN;AAgBI;IACE,eAAA;AAdN;AACF',
          sourcesContent: [
            "\n@import '../../common/style/var';\n\n.van-doc-nav {\n  position: fixed;\n  left: 0;\n  z-index: 1;\n  min-width: @van-doc-nav-width;\n  max-width: @van-doc-nav-width;\n  padding: @van-doc-padding 0;\n  overflow-y: scroll;\n  background-color: #fff;\n  box-shadow: 0 8px 12px #ebedf0;\n\n  @media (min-width: @van-doc-row-max-width) {\n    left: 50%;\n    margin-left: -(@van-doc-row-max-width / 2);\n  }\n\n  &::-webkit-scrollbar {\n    width: 6px;\n    height: 6px;\n    background-color: transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: transparent;\n    border-radius: 6px;\n  }\n\n  &:hover::-webkit-scrollbar-thumb {\n    background-color: rgba(69, 90, 100, 0.2);\n  }\n\n  &__group {\n    margin-bottom: 16px;\n    padding-left: 6px;\n  }\n\n  &__title {\n    padding: 8px 0 8px @van-doc-padding;\n    color: #455a64;\n    font-weight: 600;\n    font-size: 15px;\n    line-height: 28px;\n  }\n\n  &__item {\n    a {\n      display: block;\n      margin: 8px 0;\n      padding: 8px 0 8px @van-doc-padding;\n      color: #455a64;\n      font-size: 14px;\n      line-height: 20px;\n      transition: color 0.2s;\n\n      &:hover,\n      &.active {\n        color: @van-doc-green;\n      }\n\n      &.active {\n        font-weight: 600;\n        background-color: #ebfff0;\n        border-radius: 999px;\n      }\n\n      span {\n        font-size: 13px;\n      }\n    }\n  }\n\n  @media (max-width: 1300px) {\n    &__item {\n      a {\n        font-size: 13px;\n      }\n\n      &:active {\n        font-size: 14px;\n      }\n    }\n  }\n}\n",
          ],
          sourceRoot: '',
        },
      ]),
        (n.Z = o);
    },
    7361: (e, n, t) => {
      const r = t(7705);
      const o = t.n(r)()(!0);
      o.push([
        e.id,
        '#docsearch {\n  display: inline-block;\n  vertical-align: middle;\n}\n.DocSearch-Button {\n  height: 32px;\n  background: #f7f8fa;\n}\n.DocSearch-Button:hover {\n  box-shadow: none;\n}\n.DocSearch-Search-Icon {\n  width: 18px;\n  height: 18px;\n}\n.DocSearch-Button-Key {\n  font-size: 12px;\n}\n',
        '',
        {
          version: 3,
          sources: [
            'webpack://node_modules/@vant/cli/site/desktop/components/SearchInput.vue',
          ],
          names: [],
          mappings:
            'AAGA;EACE,qBAAA;EACA,sBAAA;AAFF;AAKA;EACE,YAAA;EACA,mBAAA;AAHF;AAKE;EACE,gBAAA;AAHJ;AAOA;EACE,WAAA;EACA,YAAA;AALF;AAQA;EACE,eAAA;AANF',
          sourcesContent: [
            "\n@import '../../common/style/var';\n\n#docsearch {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.DocSearch-Button {\n  height: 32px;\n  background: #f7f8fa;\n\n  &:hover {\n    box-shadow: none;\n  }\n}\n\n.DocSearch-Search-Icon {\n  width: 18px;\n  height: 18px;\n}\n\n.DocSearch-Button-Key {\n  font-size: 12px;\n}\n",
          ],
          sourceRoot: '',
        },
      ]),
        (n.Z = o);
    },
    7241: (e, n, t) => {
      const r = t(7705);
      const o = t.n(r)()(!0);
      o.push([
        e.id,
        '.van-doc-simulator {\n  position: absolute;\n  top: 88px;\n  right: 24px;\n  z-index: 1;\n  box-sizing: border-box;\n  width: 360px;\n  min-width: 360px;\n  overflow: hidden;\n  background: #fafafa;\n  border-radius: 20px;\n  box-shadow: 0 8px 12px #ebedf0;\n}\n@media (max-width: 1100px) {\n.van-doc-simulator {\n    right: auto;\n    left: 750px;\n}\n}\n@media (min-width: 1680px) {\n.van-doc-simulator {\n    right: 50%;\n    margin-right: -816px;\n}\n}\n.van-doc-simulator-fixed {\n  position: fixed;\n  top: 24px;\n}\n.van-doc-simulator iframe {\n  display: block;\n  width: 100%;\n}\n',
        '',
        {
          version: 3,
          sources: [
            'webpack://node_modules/@vant/cli/site/desktop/components/Simulator.vue',
          ],
          names: [],
          mappings:
            'AAGA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;EACA,sBAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;AAFF;AAIE;AAAA;IACE,WAAA;IACA,WAAA;AADF;AACF;AAGE;AAAA;IACE,UAAA;IACA,oBAAA;AAAF;AACF;AAEE;EACE,eAAA;EACA,SAAA;AAAJ;AAzBA;EA6BI,cAAA;EACA,WAAA;AADJ',
          sourcesContent: [
            "\n@import '../../common/style/var';\n\n.van-doc-simulator {\n  position: absolute;\n  top: @van-doc-padding + @van-doc-header-top-height;\n  right: @van-doc-padding;\n  z-index: 1;\n  box-sizing: border-box;\n  width: @van-doc-simulator-width;\n  min-width: @van-doc-simulator-width;\n  overflow: hidden;\n  background: #fafafa;\n  border-radius: @van-doc-border-radius;\n  box-shadow: 0 8px 12px #ebedf0;\n\n  @media (max-width: 1100px) {\n    right: auto;\n    left: 750px;\n  }\n\n  @media (min-width: @van-doc-row-max-width) {\n    right: 50%;\n    margin-right: -(@van-doc-row-max-width / 2) + 24px;\n  }\n\n  &-fixed {\n    position: fixed;\n    top: @van-doc-padding;\n  }\n\n  iframe {\n    display: block;\n    width: 100%;\n  }\n}\n",
          ],
          sourceRoot: '',
        },
      ]),
        (n.Z = o);
    },
    4184: (e, n, t) => {
      const r = t(7705);
      const o = t.n(r)()(!0);
      o.push([
        e.id,
        '',
        '',
        { version: 3, sources: [], names: [], mappings: '', sourceRoot: '' },
      ]),
        (n.Z = o);
    },
  };
  const t = {};
  function r(e) {
    const o = t[e];
    if (void 0 !== o) return o.exports;
    const a = (t[e] = { id: e, exports: {} });
    return n[e](a, a.exports, r), a.exports;
  }
  (r.m = n),
    (e = []),
    (r.O = (n, t, o, a) => {
      if (!t) {
        let i = 1 / 0;
        for (A = 0; A < e.length; A++) {
          for (var [t, o, a] = e[A], c = !0, l = 0; l < t.length; l++)
            (!1 & a || i >= a) && Object.keys(r.O).every((e) => r.O[e](t[l]))
              ? t.splice(l--, 1)
              : ((c = !1), a < i && (i = a));
          if (c) {
            e.splice(A--, 1);
            const s = o();
            void 0 !== s && (n = s);
          }
        }
        return n;
      }
      a = a || 0;
      for (var A = e.length; A > 0 && e[A - 1][2] > a; A--) e[A] = e[A - 1];
      e[A] = [t, o, a];
    }),
    (r.n = (e) => {
      const n = e && e.__esModule ? () => e.default : () => e;
      return r.d(n, { a: n }), n;
    }),
    (r.d = (e, n) => {
      for (const t in n)
        r.o(n, t) &&
          !r.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (r.g = (function () {
      if (typeof globalThis === 'object') return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if (typeof window === 'object') return window;
      }
    })()),
    (r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      const e = { 87: 0 };
      r.O.j = (n) => e[n] === 0;
      const n = (n, t) => {
        let o;
        let a;
        const [i, c, l] = t;
        let s = 0;
        if (i.some((n) => e[n] !== 0)) {
          for (o in c) r.o(c, o) && (r.m[o] = c[o]);
          if (l) var A = l(r);
        }
        for (n && n(t); s < i.length; s++)
          (a = i[s]), r.o(e, a) && e[a] && e[a][0](), (e[i[s]] = 0);
        return r.O(A);
      };
      const t = (self.webpackChunk_maybecode_v_power =
        self.webpackChunk_maybecode_v_power || []);
      t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
    })(),
    r.O(void 0, [962], () => r(7765));
  let o = r.O(void 0, [962], () => r(1177));
  o = r.O(o);
})();
