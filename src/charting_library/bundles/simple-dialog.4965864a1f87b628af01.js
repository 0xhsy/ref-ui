(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [8890],
  {
    67891: function (e, t) {
      var n, o, r;
      (o = [t]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (e) {
              'use strict';
              function t(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                  return n;
                }
                return Array.from(e);
              }
              Object.defineProperty(e, '__esModule', { value: !0 });
              var n = !1;
              if ('undefined' != typeof window) {
                var o = {
                  get passive() {
                    n = !0;
                  },
                };
                window.addEventListener('testPassive', null, o),
                  window.removeEventListener('testPassive', null, o);
              }
              var r =
                  'undefined' != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                a = [],
                l = !1,
                i = -1,
                s = void 0,
                c = void 0,
                u = function (e) {
                  return a.some(function (t) {
                    return !(
                      !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                    );
                  });
                },
                d = function (e) {
                  var t = e || window.event;
                  return (
                    !!u(t.target) ||
                    1 < t.touches.length ||
                    (t.preventDefault && t.preventDefault(), !1)
                  );
                },
                m = function () {
                  setTimeout(function () {
                    void 0 !== c &&
                      ((document.body.style.paddingRight = c), (c = void 0)),
                      void 0 !== s &&
                        ((document.body.style.overflow = s), (s = void 0));
                  });
                };
              (e.disableBodyScroll = function (e, o) {
                if (r) {
                  if (!e)
                    return void console.error(
                      'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
                    );
                  if (
                    e &&
                    !a.some(function (t) {
                      return t.targetElement === e;
                    })
                  ) {
                    var m = { targetElement: e, options: o || {} };
                    (a = [].concat(t(a), [m])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length &&
                          (i = e.targetTouches[0].clientY);
                      }),
                      (e.ontouchmove = function (t) {
                        var n, o, r, a;
                        1 === t.targetTouches.length &&
                          ((o = e),
                          (a = (n = t).targetTouches[0].clientY - i),
                          !u(n.target) &&
                            ((o && 0 === o.scrollTop && 0 < a) ||
                            ((r = o) &&
                              r.scrollHeight - r.scrollTop <= r.clientHeight &&
                              a < 0)
                              ? d(n)
                              : n.stopPropagation()));
                      }),
                      l ||
                        (document.addEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0
                        ),
                        (l = !0));
                  }
                } else {
                  (p = o),
                    setTimeout(function () {
                      if (void 0 === c) {
                        var e = !!p && !0 === p.reserveScrollBarGap,
                          t =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        e &&
                          0 < t &&
                          ((c = document.body.style.paddingRight),
                          (document.body.style.paddingRight = t + 'px'));
                      }
                      void 0 === s &&
                        ((s = document.body.style.overflow),
                        (document.body.style.overflow = 'hidden'));
                    });
                  var h = { targetElement: e, options: o || {} };
                  a = [].concat(t(a), [h]);
                }
                var p;
              }),
                (e.clearAllBodyScrollLocks = function () {
                  r
                    ? (a.forEach(function (e) {
                        (e.targetElement.ontouchstart = null),
                          (e.targetElement.ontouchmove = null);
                      }),
                      l &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0
                        ),
                        (l = !1)),
                      (a = []),
                      (i = -1))
                    : (m(), (a = []));
                }),
                (e.enableBodyScroll = function (e) {
                  if (r) {
                    if (!e)
                      return void console.error(
                        'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.'
                      );
                    (e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (a = a.filter(function (t) {
                        return t.targetElement !== e;
                      })),
                      l &&
                        0 === a.length &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0
                        ),
                        (l = !1));
                  } else
                    1 === a.length && a[0].targetElement === e
                      ? (m(), (a = []))
                      : (a = a.filter(function (t) {
                          return t.targetElement !== e;
                        }));
                });
            })
              ? n.apply(t, o)
              : n) || (e.exports = r);
    },
    43948: (e) => {
      e.exports = {
        button: 'button-xRobF0EE',
        content: 'content-xRobF0EE',
        'icon-only': 'icon-only-xRobF0EE',
        'color-brand': 'color-brand-xRobF0EE',
        'variant-primary': 'variant-primary-xRobF0EE',
        'variant-secondary': 'variant-secondary-xRobF0EE',
        'color-gray': 'color-gray-xRobF0EE',
        'color-green': 'color-green-xRobF0EE',
        'color-red': 'color-red-xRobF0EE',
        'size-xsmall': 'size-xsmall-xRobF0EE',
        'size-small': 'size-small-xRobF0EE',
        'size-medium': 'size-medium-xRobF0EE',
        'size-large': 'size-large-xRobF0EE',
        'size-xlarge': 'size-xlarge-xRobF0EE',
        'with-start-icon': 'with-start-icon-xRobF0EE',
        'with-end-icon': 'with-end-icon-xRobF0EE',
        'start-icon-wrap': 'start-icon-wrap-xRobF0EE',
        'end-icon-wrap': 'end-icon-wrap-xRobF0EE',
        animated: 'animated-xRobF0EE',
        stretch: 'stretch-xRobF0EE',
        grouped: 'grouped-xRobF0EE',
        'adjust-position': 'adjust-position-xRobF0EE',
        'first-row': 'first-row-xRobF0EE',
        'first-col': 'first-col-xRobF0EE',
        'no-corner-top-left': 'no-corner-top-left-xRobF0EE',
        'no-corner-top-right': 'no-corner-top-right-xRobF0EE',
        'no-corner-bottom-right': 'no-corner-bottom-right-xRobF0EE',
        'no-corner-bottom-left': 'no-corner-bottom-left-xRobF0EE',
      };
    },
    33214: (e) => {
      e.exports = {
        loader: 'loader-38qh0l_K',
        static: 'static-38qh0l_K',
        item: 'item-38qh0l_K',
        'tv-button-loader': 'tv-button-loader-38qh0l_K',
        black: 'black-38qh0l_K',
        white: 'white-38qh0l_K',
        gray: 'gray-38qh0l_K',
        primary: 'primary-38qh0l_K',
        'loader-initial': 'loader-initial-38qh0l_K',
        'loader-appear': 'loader-appear-38qh0l_K',
      };
    },
    32455: (e) => {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        'tablet-small-breakpoint': 'screen and (max-width: 428px)',
      };
    },
    39451: (e) => {
      e.exports = {
        actionButton: 'actionButton-3wPv1Zy2',
        small: 'small-3wPv1Zy2',
        hiddenTitle: 'hiddenTitle-3wPv1Zy2',
      };
    },
    59028: (e) => {
      e.exports = { label: 'label-32bOLbsS', input: 'input-32bOLbsS' };
    },
    46892: (e) => {
      e.exports = {
        popupDialog: 'popupDialog-35doN71j',
        wrap: 'wrap-35doN71j',
        main: 'main-35doN71j',
        small: 'small-35doN71j',
        title: 'title-35doN71j',
        content: 'content-35doN71j',
        html: 'html-35doN71j',
        footer: 'footer-35doN71j',
        close: 'close-35doN71j',
      };
    },
    80511: (e, t, n) => {
      'use strict';
      n.d(t, { Button: () => b });
      var o = n(67294),
        r = n(94184),
        a = n(48413),
        l = n(49775),
        i = n(43948),
        s = n.n(i);
      function c(e) {
        const {
            color: t = 'brand',
            size: n = 'medium',
            variant: o = 'primary',
            stretch: l = !1,
            icon: i,
            startIcon: c,
            endIcon: u,
            iconOnly: d = !1,
            className: m,
            isGrouped: h,
            cellState: p,
            disablePositionAdjustment: f = !1,
          } = e,
          g = (function (e) {
            let t = '';
            return (
              0 !== e &&
                (1 & e && (t = r(t, s()['no-corner-top-left'])),
                2 & e && (t = r(t, s()['no-corner-top-right'])),
                4 & e && (t = r(t, s()['no-corner-bottom-right'])),
                8 & e && (t = r(t, s()['no-corner-bottom-left']))),
              t
            );
          })((0, a.getGroupCellRemoveRoundBorders)(p));
        return r(
          m,
          s().button,
          s()['size-' + n],
          s()['color-' + t],
          s()['variant-' + o],
          l && s().stretch,
          (i || c) && s()['with-start-icon'],
          u && s()['with-end-icon'],
          d && s()['icon-only'],
          g,
          h && s().grouped,
          h && !f && s()['adjust-position'],
          h && p.isTop && s()['first-row'],
          h && p.isLeft && s()['first-col']
        );
      }
      function u(e) {
        const {
            size: t,
            startIcon: n,
            icon: r,
            iconOnly: a,
            children: i,
            endIcon: c,
          } = e,
          u = null != n ? n : r;
        return o.createElement(
          o.Fragment,
          null,
          u &&
            'xsmall' !== t &&
            o.createElement(l.Icon, {
              icon: u,
              className: s()['start-icon-wrap'],
            }),
          i && o.createElement('span', { className: s().content }, i),
          c &&
            !a &&
            'xsmall' !== t &&
            o.createElement(l.Icon, {
              icon: c,
              className: s()['end-icon-wrap'],
            })
        );
      }
      var d = n(94618),
        m = n(74818);
      function h(e) {
        const {
          className: t,
          color: n,
          variant: o,
          size: r,
          stretch: a,
          animated: l,
          icon: i,
          iconOnly: s,
          startIcon: c,
          endIcon: u,
          ...d
        } = e;
        return {
          ...d,
          ...(0, m.filterDataProps)(e),
          ...(0, m.filterAriaProps)(e),
        };
      }
      function p(e) {
        const { reference: t, ...n } = e,
          {
            isGrouped: r,
            cellState: a,
            disablePositionAdjustment: l,
          } = (0, o.useContext)(d.ControlGroupContext),
          i = c({
            ...n,
            isGrouped: r,
            cellState: a,
            disablePositionAdjustment: l,
          });
        return o.createElement(
          'button',
          { ...h(n), className: i, ref: t },
          o.createElement(u, { ...n })
        );
      }
      function f(e = 'default') {
        switch (e) {
          case 'default':
            return 'primary';
          case 'stroke':
            return 'secondary';
        }
      }
      function g(e = 'primary') {
        switch (e) {
          case 'primary':
            return 'brand';
          case 'success':
            return 'green';
          case 'default':
            return 'gray';
          case 'danger':
            return 'red';
        }
      }
      function v(e = 'm') {
        switch (e) {
          case 's':
            return 'xsmall';
          case 'm':
            return 'small';
          case 'l':
            return 'large';
        }
      }
      function E(e) {
        const {
          intent: t,
          size: n,
          appearance: o,
          useFullWidth: r,
          icon: a,
          ...l
        } = e;
        return {
          ...l,
          color: g(t),
          size: v(n),
          variant: f(o),
          stretch: r,
          startIcon: a,
        };
      }
      function b(e) {
        return o.createElement(p, { ...E(e) });
      }
    },
    37861: (e, t, n) => {
      'use strict';
      n.d(t, { useIsMounted: () => r });
      var o = n(67294);
      const r = () => {
        const e = (0, o.useRef)(!1);
        return (
          (0, o.useEffect)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      };
    },
    73226: (e, t, n) => {
      'use strict';
      n.d(t, { Loader: () => c });
      var o,
        r = n(67294),
        a = n(94184),
        l = n(8596),
        i = n(33214),
        s = n.n(i);
      !(function (e) {
        (e[(e.Initial = 0)] = 'Initial'),
          (e[(e.Appear = 1)] = 'Appear'),
          (e[(e.Active = 2)] = 'Active');
      })(o || (o = {}));
      class c extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._stateChangeTimeout = null),
            (this.state = { state: o.Initial });
        }
        render() {
          const {
              className: e,
              color: t = 'black',
              staticPosition: n,
            } = this.props,
            o = a(s().item, { [s()[t]]: Boolean(t) });
          return r.createElement(
            'span',
            {
              className: a(
                s().loader,
                n && s().static,
                e,
                this._getStateClass()
              ),
            },
            r.createElement('span', { className: o }),
            r.createElement('span', { className: o }),
            r.createElement('span', { className: o })
          );
        }
        componentDidMount() {
          this.setState({ state: o.Appear }),
            (this._stateChangeTimeout = setTimeout(() => {
              this.setState({ state: o.Active });
            }, 2 * l.dur));
        }
        componentWillUnmount() {
          this._stateChangeTimeout &&
            (clearTimeout(this._stateChangeTimeout),
            (this._stateChangeTimeout = null));
        }
        _getStateClass() {
          switch (this.state.state) {
            case o.Initial:
              return s()['loader-initial'];
            case o.Appear:
              return s()['loader-appear'];
            default:
              return '';
          }
        }
      }
    },
    74818: (e, t, n) => {
      'use strict';
      function o(e) {
        return a(e, l);
      }
      function r(e) {
        return a(e, i);
      }
      function a(e, t) {
        const n = Object.entries(e).filter(t),
          o = {};
        for (const [e, t] of n) o[e] = t;
        return o;
      }
      function l(e) {
        const [t, n] = e;
        return 0 === t.indexOf('data-') && 'string' == typeof n;
      }
      function i(e) {
        return 0 === e[0].indexOf('aria-');
      }
      n.d(t, {
        filterDataProps: () => o,
        filterAriaProps: () => r,
        filterProps: () => a,
        isDataAttribute: () => l,
        isAriaAttribute: () => i,
      });
    },
    59726: (e, t, n) => {
      'use strict';
      function o(e, t, n, o, r) {
        function a(r) {
          if (e > r.timeStamp) return;
          const a = r.target;
          void 0 !== n &&
            null !== t &&
            null !== a &&
            a.ownerDocument === o &&
            (t.contains(a) || n(r));
        }
        return (
          r.click && o.addEventListener('click', a, !1),
          r.mouseDown && o.addEventListener('mousedown', a, !1),
          r.touchEnd && o.addEventListener('touchend', a, !1),
          r.touchStart && o.addEventListener('touchstart', a, !1),
          () => {
            o.removeEventListener('click', a, !1),
              o.removeEventListener('mousedown', a, !1),
              o.removeEventListener('touchend', a, !1),
              o.removeEventListener('touchstart', a, !1);
          }
        );
      }
      n.d(t, { addOutsideEventListener: () => o });
    },
    72923: (e, t, n) => {
      'use strict';
      n.d(t, { DialogBreakpoints: () => r });
      var o = n(32455);
      const r = {
        SmallHeight: o['small-height-breakpoint'],
        TabletSmall: o['tablet-small-breakpoint'],
        TabletNormal: o['tablet-normal-breakpoint'],
      };
    },
    68442: (e, t, n) => {
      'use strict';
      n.r(t),
        n.d(t, {
          confirmModule: () => F,
          renameModule: () => M,
          showSimpleDialog: () => P,
          warningModule: () => A,
        });
      var o = n(67294),
        r = n(79881),
        a = n(94184),
        l = n(49775),
        i = n(18437),
        s = n(32402),
        c = n(42998),
        u = n(68521),
        d = n(28164),
        m = n(72923),
        h = n(73991),
        p = n(80511),
        f = n(73226),
        g = n(16282),
        v = n(37861),
        E = n(78106);
      const b = o.createContext({
        isSmallTablet: !1,
        dialogCloseHandler: () => {},
      });
      var w = n(39451);
      function x(e) {
        const {
            disabled: t,
            name: n,
            title: r,
            appearance: l,
            intent: i,
            handler: s,
            reference: c,
          } = e,
          { isSmallTablet: u, dialogCloseHandler: d } = (0, o.useContext)(b),
          m = (0, g.ensureNotNull)((0, o.useContext)(E.SlotContext)),
          h = (0, v.useIsMounted)(),
          [x, y] = (0, o.useState)(!1);
        return o.createElement(
          p.Button,
          {
            disabled: t,
            reference: c,
            className: a(w.actionButton, u && w.small),
            name: n,
            size: u ? 'l' : void 0,
            appearance: l,
            intent: i,
            onClick: function () {
              if (x) return;
              const e = s({ dialogClose: d, innerManager: m });
              e &&
                (y(!0),
                e.then(() => {
                  h.current && y(!1);
                }));
            },
          },
          o.createElement('span', { className: a(x && w.hiddenTitle) }, r),
          x && o.createElement(f.Loader, { color: 'white' })
        );
      }
      var y = n(83124),
        C = n(46892);
      function S(e) {
        const {
          title: t,
          onClose: n,
          actions: r,
          dataName: p,
          popupDialogClassName: f,
          backdrop: g,
          closeOnOutsideClick: v = !0,
        } = e;
        (0, o.useEffect)(
          () => (
            i.subscribe(d.CLOSE_POPUPS_AND_DIALOGS_COMMAND, n, null),
            () => {
              i.unsubscribe(d.CLOSE_POPUPS_AND_DIALOGS_COMMAND, n, null);
            }
          ),
          [n]
        );
        const [E, w] = (0, o.useState)(!0),
          S = (0, o.useRef)(null);
        return o.createElement(
          u.MatchMedia,
          { rule: m.DialogBreakpoints.TabletSmall },
          (i) =>
            o.createElement(
              b.Provider,
              { value: { isSmallTablet: i, dialogCloseHandler: n } },
              o.createElement(
                s.PopupDialog,
                {
                  className: a(C.popupDialog, f),
                  isOpened: E,
                  backdrop: g,
                  onClickBackdrop: _,
                  onClickOutside: v ? _ : void 0,
                  onKeyDown: N,
                  autofocus: !0,
                  fixedBody: !0,
                },
                o.createElement(
                  'div',
                  { className: C.wrap, 'data-name': p },
                  o.createElement(
                    'div',
                    { className: a(C.main, i && C.small) },
                    o.createElement(
                      'div',
                      { className: a(C.title, i && C.small) },
                      t
                    ),
                    (function (t) {
                      if ('html' in e)
                        return o.createElement(h.TouchScrollContainer, {
                          className: a(C.content, t && C.small, C.html),
                          dangerouslySetInnerHTML: { __html: e.html },
                        });
                      if ('content' in e)
                        return o.createElement(
                          h.TouchScrollContainer,
                          { className: a(C.content, t && C.small) },
                          e.content
                        );
                      return null;
                    })(i),
                    r &&
                      r.length > 0 &&
                      o.createElement(
                        'div',
                        { className: a(C.footer, i && C.small) },
                        r.map((e, t) =>
                          o.createElement(x, {
                            ...e,
                            key: e.name,
                            reference: 0 === t ? S : void 0,
                          })
                        )
                      )
                  ),
                  o.createElement(l.Icon, {
                    className: a(C.close, i && C.small),
                    icon: y,
                    onClick: _,
                    'data-name': 'close',
                    'data-role': 'button',
                  })
                )
              )
            )
        );
        function N(e) {
          switch ((0, c.hashFromEvent)(e)) {
            case 27:
              E && (e.preventDefault(), n());
              break;
            case 13:
              if (E && r && r.length) {
                e.preventDefault();
                const t = S.current;
                t && t.click();
              }
          }
        }
        function _() {
          w(!1), n();
        }
      }
      function N(e) {
        return 'html' in e ? { html: e.html } : { content: e.text };
      }
      var _ = n(81829),
        k = n(59028);
      function R(e) {
        const {
            maxLength: t,
            value: n,
            placeholder: r,
            onValueChange: a,
            nameInputRef: l,
          } = e,
          { isSmallTablet: i } = (0, o.useContext)(b),
          s = o.useRef(null);
        return (
          (0, o.useLayoutEffect)(() => {
            s.current && s.current.select();
          }, []),
          o.createElement(
            o.Fragment,
            null,
            (function () {
              if ('content' in e)
                return o.createElement(
                  'div',
                  { className: k.label },
                  e.content
                );
              if ('html' in e)
                return o.createElement('div', {
                  className: k.label,
                  dangerouslySetInnerHTML: { __html: e.html },
                });
              return null;
            })(),
            o.createElement(_.InputControl, {
              inputClassName: k.input,
              autoComplete: 'no',
              size: i ? 'large' : void 0,
              reference: function (e) {
                (s.current = e), l && (l.current = e);
              },
              value: n,
              placeholder: r,
              maxLength: t,
              onChange: function (e) {
                a(e.currentTarget.value);
              },
            })
          )
        );
      }
      function O(e) {
        return Boolean(e.trim());
      }
      function T(e) {
        const { buttonText: t, intentButton: n, actions: o } = e,
          a = [
            {
              name: 'ok',
              title: t || (0, r.t)('Ok'),
              intent: n,
              handler: ({ dialogClose: e }) => {
                e();
              },
            },
          ];
        return o && o.forEach((e) => a.push(e)), a;
      }
      var L = n(73935);
      const D = new (n(39518).DialogsOpenerManager)();
      const F = function (e) {
          const {
              title: t,
              onClose: n = () => {},
              mainButtonText: a,
              mainButtonIntent: l,
              cancelButtonText: i,
              closeOnOutsideClick: s,
              onConfirm: c,
              onCancel: u,
            } = e,
            d = N(e);
          return o.createElement(S, {
            ...d,
            title: t || (0, r.t)('Confirmation'),
            onClose: n,
            actions: [
              {
                name: 'yes',
                title: a || (0, r.t)('Yes'),
                intent: l || 'success',
                handler: c,
              },
              {
                name: 'no',
                title: i || (0, r.t)('No'),
                appearance: 'stroke',
                intent: 'default',
                handler: (e) => {
                  u ? u(e) : e.dialogClose();
                },
              },
            ],
            dataName: 'confirm-dialog',
            closeOnOutsideClick: s,
          });
        },
        M = function (e) {
          const {
              title: t,
              maxLength: n,
              initValue: a,
              placeholder: l,
              onClose: i = () => {},
              mainButtonText: s,
              mainButtonIntent: c,
              cancelButtonText: u,
              validator: d = O,
              onRename: m,
            } = e,
            h = (0, o.useRef)(null),
            [p, f] = (0, o.useState)(a || ''),
            [g, v] = (0, o.useState)(() => d(p)),
            E = N(e);
          return o.createElement(S, {
            title: t || (0, r.t)('Rename'),
            content: o.createElement(R, {
              ...E,
              nameInputRef: h,
              maxLength: n,
              placeholder: l,
              value: p,
              onValueChange: function (e) {
                f(e), v(d(e));
              },
            }),
            onClose: i,
            actions: [
              {
                disabled: !g,
                name: 'save',
                title: s || (0, r.t)('Save'),
                intent: c || 'primary',
                handler: ({ dialogClose: e, innerManager: t }) =>
                  m({
                    newValue: p,
                    focusInput: b,
                    dialogClose: e,
                    innerManager: t,
                  }),
              },
              {
                name: 'cancel',
                title: u || (0, r.t)('Cancel'),
                appearance: 'stroke',
                intent: 'default',
                handler: ({ dialogClose: e }) => {
                  e();
                },
              },
            ],
            dataName: 'rename-dialog',
          });
          function b() {
            h.current && h.current.focus();
          }
        },
        A = function (e) {
          const { title: t, closeOnOutsideClick: n, onClose: a = () => {} } = e,
            l = N(e);
          return o.createElement(S, {
            ...l,
            title: t || (0, r.t)('Warning'),
            onClose: a,
            actions: T(e),
            dataName: 'warning-dialog',
            closeOnOutsideClick: n,
          });
        },
        P = function (e, t, n) {
          const { title: r } = e,
            a = `${r}_${'text' in e ? e.text : e.html}`;
          if (D.isOpened(a))
            return (0, g.ensureDefined)(D.getDialogPayload(a)).closeHandler;
          const l = document.createElement('div'),
            i = () => {
              var t;
              null === (t = e.onClose) || void 0 === t || t.call(e),
                L.unmountComponentAtNode(l),
                D.setAsClosed(a);
            };
          return (
            L.render(
              o.createElement(
                E.SlotContext.Provider,
                { value: n || null },
                o.createElement(t, { ...e, onClose: i })
              ),
              l
            ),
            D.setAsOpened(a, { closeHandler: i }),
            i
          );
        };
    },
    39518: (e, t, n) => {
      'use strict';
      n.d(t, { DialogsOpenerManager: () => o, dialogsOpenerManager: () => r });
      class o {
        constructor() {
          this._storage = new Map();
        }
        setAsOpened(e, t) {
          this._storage.set(e, t);
        }
        setAsClosed(e) {
          this._storage.delete(e);
        }
        isOpened(e) {
          return this._storage.has(e);
        }
        getDialogPayload(e) {
          return this._storage.get(e);
        }
      }
      const r = new o();
    },
    68521: (e, t, n) => {
      'use strict';
      n.d(t, { MatchMedia: () => r });
      var o = n(67294);
      class r extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._handleChange = () => {
              this.forceUpdate();
            }),
            (this.state = { query: window.matchMedia(this.props.rule) });
        }
        componentDidMount() {
          this._subscribe(this.state.query);
        }
        componentDidUpdate(e, t) {
          this.state.query !== t.query &&
            (this._unsubscribe(t.query), this._subscribe(this.state.query));
        }
        componentWillUnmount() {
          this._unsubscribe(this.state.query);
        }
        render() {
          return this.props.children(this.state.query.matches);
        }
        static getDerivedStateFromProps(e, t) {
          return e.rule !== t.query.media
            ? { query: window.matchMedia(e.rule) }
            : null;
        }
        _subscribe(e) {
          e.addListener(this._handleChange);
        }
        _unsubscribe(e) {
          e.removeListener(this._handleChange);
        }
      }
    },
    73991: (e, t, n) => {
      'use strict';
      n.d(t, { TouchScrollContainer: () => i });
      var o = n(67294),
        r = n(67891),
        a = n(16282),
        l = n(43367);
      function i(e) {
        const { reference: t, children: n, ...a } = e,
          i = (0, o.useRef)(null),
          c = (0, o.useCallback)(
            (e) => {
              t && (t.current = e),
                l.CheckMobile.iOS() &&
                  (null !== i.current && (0, r.enableBodyScroll)(i.current),
                  (i.current = e),
                  null !== i.current &&
                    (0, r.disableBodyScroll)(i.current, {
                      allowTouchMove: s(i),
                    }));
            },
            [t]
          );
        return o.createElement('div', { ref: c, ...a }, n);
      }
      function s(e) {
        return (t) => {
          const n = (0, a.ensureNotNull)(e.current),
            o = document.activeElement;
          return (
            !n.contains(t) || (null !== o && n.contains(o) && o.contains(t))
          );
        };
      }
    },
    83124: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>';
    },
  },
]);
