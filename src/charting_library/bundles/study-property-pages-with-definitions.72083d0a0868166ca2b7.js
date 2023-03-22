'use strict';
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [607],
  {
    34954: (e, t, i) => {
      i.d(t, {
        getCoordinateYMetaInfo: () => u,
        getCoordinateXMetaInfo: () => h,
        getCoordinatesPropertiesDefinitions: () => d,
      });
      var r = i(79881),
        o = i(90963),
        n = i(68680),
        s = i(32856),
        l = i.n(s),
        a = i(5225);
      const p = new o.TranslatedString(
          'change price Y coordinate',
          (0, r.t)('change price Y coordinate')
        ),
        c = new o.TranslatedString(
          'change bar X coordinate',
          (0, r.t)('change bar X coordinate')
        );
      function u(e, t, i) {
        return {
          property: (0, n.convertToDefinitionProperty)(e, t.price, p),
          info: { typeY: 1, stepY: i },
        };
      }
      function h(e, t) {
        return {
          property: (0, n.convertToDefinitionProperty)(e, t.bar, c),
          info: {
            typeX: 0,
            minX: new (l())(-5e4),
            maxX: new (l())(15e3),
            stepX: new (l())(1),
          },
        };
      }
      function d(e, t, i, r, o, s) {
        const l = h(e, t),
          p = u(e, t, r);
        return (0, n.createCoordinatesPropertyDefinition)(
          { x: l.property, y: p.property },
          {
            id: (0, a.removeSpaces)(`${s}Coordinates${o}`),
            title: o,
            ...l.info,
            ...p.info,
          }
        );
      }
    },
    39884: (e, t, i) => {
      i.d(t, { getInputsPropertiesDefinitions: () => y });
      var r = i(16282),
        o = i(79881),
        n = i(90963),
        s = i(68680),
        l = i(32856),
        a = i.n(l),
        p = i(5225);
      const c = new n.TranslatedString(
        'change {inputName} property',
        (0, o.t)('change {inputName} property')
      );
      function u(e, t) {
        const i = e.id;
        return (
          'first_visible_bar_time' !== i &&
          'last_visible_bar_time' !== i &&
          'time' !== e.type &&
          !e.isHidden &&
          !(t && !e.confirm) &&
          void 0 === e.groupId
        );
      }
      function h(e) {
        return e.name || (0, p.capitalizeFirstLetterInWord)(e.id.toLowerCase());
      }
      function d(e) {
        return (0, o.t)(e, { context: 'input' });
      }
      function y(e, t, i, l, p) {
        const y = [];
        for (const _ of t) {
          if (!u(_, l)) continue;
          const t = h(_),
            f = d(t),
            g = new n.TranslatedString(t, f);
          let P = null;
          if ('resolution' === _.type)
            P = (0, s.createOptionsPropertyDefinition)(
              {
                option: (0, s.convertToDefinitionProperty)(
                  e,
                  i[_.id],
                  c.format({ inputName: g })
                ),
              },
              {
                id: 'StudyInput' + t,
                title: f,
                options: new (a())(p.resolutionItems),
              }
            );
          else if ('source' === _.type) {
            const o = (0, r.ensure)(p.sourcesItems);
            P = (0, s.createOptionsPropertyDefinition)(
              {
                option: (0, s.convertToDefinitionProperty)(
                  e,
                  i[_.id],
                  c.format({ inputName: g })
                ),
              },
              { id: 'StudyInput' + t, title: f, options: o }
            );
          } else if ('options' in _ && void 0 !== _.options) {
            const r = [];
            for (const e of _.options) {
              const t = (_.optionsTitles && _.optionsTitles[e]) || e,
                i = (0, o.t)(t);
              r.push({ value: e, title: i });
            }
            P = (0, s.createOptionsPropertyDefinition)(
              {
                option: (0, s.convertToDefinitionProperty)(
                  e,
                  i[_.id],
                  c.format({ inputName: g })
                ),
              },
              { id: 'StudyInput' + t, title: f, options: new (a())(r) }
            );
          } else if ('symbol' === _.type) {
            const o = i[_.id],
              n = (0, r.ensure)(p.getSymbolInfoBySymbol),
              l = (0, r.ensure)(p.onSymbolsInfosChanged);
            P = (0, s.createSymbolPropertyDefinition)(
              {
                symbol: (0, s.getSymbolDefinitionProperty)(
                  e,
                  o,
                  n,
                  l,
                  c.format({ inputName: g }),
                  p.customSymbolInputSetter
                ),
              },
              { id: 'StudyInput' + t, title: f }
            );
          } else if ('session' === _.type)
            P = (0, s.createSessionPropertyDefinition)(
              {
                session: (0, s.convertToDefinitionProperty)(
                  e,
                  i[_.id],
                  c.format({ inputName: g })
                ),
              },
              { id: 'StudyInput' + t, title: f }
            );
          else if ('bool' === _.type)
            P = (0, s.createCheckablePropertyDefinition)(
              {
                checked: (0, s.convertToDefinitionProperty)(
                  e,
                  i[_.id],
                  c.format({ inputName: g })
                ),
              },
              { id: 'StudyInput' + t, title: f }
            );
          else if (
            'integer' === _.type ||
            'float' === _.type ||
            'price' === _.type
          ) {
            const r = {
              id: 'StudyInput' + t,
              title: f,
              type: 'float' === _.type || 'price' === _.type ? 1 : 0,
              defval: _.defval,
            };
            void 0 !== _.min && (r.min = new (a())(_.min)),
              void 0 !== _.max && (r.max = new (a())(_.max)),
              void 0 !== _.step &&
                isFinite(_.step) &&
                _.step > 0 &&
                (r.step = new (a())(_.step)),
              (P = (0, s.createNumberPropertyDefinition)(
                {
                  value: (0, s.convertToDefinitionProperty)(
                    e,
                    i[_.id],
                    c.format({ inputName: g })
                  ),
                },
                r
              ));
          } else
            P = (0, s.createTextPropertyDefinition)(
              {
                text: (0, s.convertToDefinitionProperty)(
                  e,
                  i[_.id],
                  c.format({ inputName: g })
                ),
              },
              {
                id: 'StudyInput' + t,
                title: f,
                isEditable: !0,
                isMultiLine: !1,
              }
            );
          y.push(P);
        }
        return 0 === y.length ? null : y;
      }
    },
    3619: (e, t, i) => {
      i.d(t, { LineDataSourceDefinitionsViewModel: () => v });
      var r = i(16282),
        o = i(79881),
        n = i(90963),
        s = (i(95068), i(68680)),
        l = i(97806),
        a = i(32856),
        p = i.n(a),
        c = i(63725),
        u = i(34954),
        h = i(80538),
        d = i(85103);
      const y = (0, o.t)('Visibility'),
        _ = (0, o.t)('Coordinates'),
        f = (0, o.t)('Style'),
        g = (0, o.t)('Text'),
        P = (0, o.t)('Inputs'),
        S = (0, o.t)('#{count} (price, bar)', { context: 'linetool point' });
      class v {
        constructor(e, t) {
          (this._yCoordinateStepWV = null),
            (this._propertyPages = []),
            (this._lineToolsDoNotAffectChartInvalidation =
              new d.FeatureToggleWatchedValue(
                'do_not_invalidate_chart_on_changing_line_tools',
                !1
              )),
            (this._source = t),
            (this._undoModel = e),
            (this._ownerSource = (0, r.ensureNotNull)(
              this._source.ownerSource()
            )),
            (this._propertyApplier = new h.PropertyApplierWithoutSavingChart(
              () => e,
              this._lineToolsDoNotAffectChartInvalidation
            )),
            this._createPropertyRages();
        }
        destroy() {
          null !== this._yCoordinateStepWV &&
            (this._source.ownerSourceChanged().unsubscribeAll(this),
            this._ownerSource.priceStepChanged().unsubscribeAll(this)),
            this._propertyPages.forEach((e) => {
              (0, s.destroyDefinitions)(e.definitions.value());
            }),
            this._lineToolsDoNotAffectChartInvalidation.destroy();
        }
        propertyPages() {
          return Promise.resolve(this._propertyPages);
        }
        _createPropertyRages() {
          this._propertyPages = [];
          const e = this._createInputsPropertyPage();
          null !== e && this._propertyPages.push(e);
          const t = this._createStylePropertyPage();
          null !== t && this._propertyPages.push(t);
          const i = this._createTextPropertyPage();
          if (
            (null !== i && this._propertyPages.push(i),
            this._source.hasEditableCoordinates())
          ) {
            const e = this._createCoordinatesPropertyPage();
            null !== e && this._propertyPages.push(e);
          }
          const r = this._createVisibilitiesPropertyPage();
          this._propertyPages.push(r);
        }
        _createVisibilitiesPropertyPage() {
          const e = this._source
            .properties()
            .childs()
            .intervalsVisibilities.childs();
          return (0, l.createPropertyPage)(
            (0, c.getIntervalsVisibilitiesPropertiesDefinitions)(
              this._undoModel,
              e,
              new n.TranslatedString(
                this._source.name(),
                this._source.title(!0)
              )
            ),
            'visibility',
            y
          );
        }
        _createCoordinatesPropertyPage() {
          const e = this._coordinatesPropertyDefinitions();
          return null !== e
            ? (0, l.createPropertyPage)(e, 'coordinates', _)
            : null;
        }
        _getYCoordinateStepWV() {
          return (
            null === this._yCoordinateStepWV &&
              ((this._yCoordinateStepWV = new (p())(
                (function (e) {
                  if (null !== e) {
                    const t = e.priceStep();
                    if (null !== t) return t;
                  }
                  return 1;
                })(this._source.ownerSource())
              )),
              this._ownerSource
                .priceStepChanged()
                .subscribe(this, () => this._updateYCoordinateStep()),
              this._source.ownerSourceChanged().subscribe(this, () => {
                this._ownerSource.priceStepChanged().unsubscribeAll(this),
                  (this._ownerSource = (0, r.ensureNotNull)(
                    this._source.ownerSource()
                  )),
                  this._ownerSource
                    .priceStepChanged()
                    .subscribe(this, () => this._updateYCoordinateStep());
              })),
            this._yCoordinateStepWV
          );
        }
        _coordinatesPropertyDefinitions() {
          const e = this._source.points(),
            t = this._source.pointsProperty().childs().points,
            i = [],
            r = this._getYCoordinateStepWV();
          return (
            e.forEach((e, o) => {
              const n = t[o].childs();
              n &&
                i.push(
                  (0, u.getCoordinatesPropertiesDefinitions)(
                    this._propertyApplier,
                    n,
                    e,
                    r,
                    S.format({ count: (o + 1).toString() }),
                    this._source.name()
                  )
                );
            }),
            i
          );
        }
        _createStylePropertyPage() {
          const e = this._stylePropertyDefinitions();
          return null !== e ? (0, l.createPropertyPage)(e, 'style', f) : null;
        }
        _stylePropertyDefinitions() {
          return null;
        }
        _createTextPropertyPage() {
          const e = this._textPropertyDefinitions();
          return null !== e ? (0, l.createPropertyPage)(e, 'text', g) : null;
        }
        _textPropertyDefinitions() {
          return null;
        }
        _createInputsPropertyPage() {
          const e = this._inputsPropertyDefinitions();
          return null !== e ? (0, l.createPropertyPage)(e, 'inputs', P) : null;
        }
        _inputsPropertyDefinitions() {
          return null;
        }
        _updateYCoordinateStep() {
          const e = this._ownerSource.priceStep();
          this._getYCoordinateStepWV().setValue(e || 1);
        }
      }
    },
    30042: (e, t, i) => {
      i.r(t), i.d(t, { RegressionTrendDefinitionsViewModel: () => C });
      var r = i(79881),
        o = i(90963),
        n = (i(95068), i(68680)),
        s = i(27051),
        l = i(5225);
      const a = new o.TranslatedString(
          'change {title} base line visibility',
          (0, r.t)('change {title} base line visibility')
        ),
        p = new o.TranslatedString(
          'change {title} base line color',
          (0, r.t)('change {title} base line color')
        ),
        c = new o.TranslatedString(
          'change {title} base line width',
          (0, r.t)('change {title} base line width')
        ),
        u = new o.TranslatedString(
          'change {title} base line style',
          (0, r.t)('change {title} base line style')
        ),
        h = new o.TranslatedString(
          'change {title} up line visibility',
          (0, r.t)('change {title} up line visibility')
        ),
        d = new o.TranslatedString(
          'change {title} up line color',
          (0, r.t)('change {title} up line color')
        ),
        y = new o.TranslatedString(
          'change {title} up line width',
          (0, r.t)('change {title} up line width')
        ),
        _ = new o.TranslatedString(
          'change {title} up line style',
          (0, r.t)('change {title} up line style')
        ),
        f = new o.TranslatedString(
          'change {title} down line visibility',
          (0, r.t)('change {title} down line visibility')
        ),
        g = new o.TranslatedString(
          'change {title} down line color',
          (0, r.t)('change {title} down line color')
        ),
        P = new o.TranslatedString(
          'change {title} down line width',
          (0, r.t)('change {title} down line width')
        ),
        S = new o.TranslatedString(
          'change {title} down line style',
          (0, r.t)('change {title} down line style')
        ),
        v = new o.TranslatedString(
          'change {title} extend lines',
          (0, r.t)('change {title} extend lines')
        ),
        b = new o.TranslatedString(
          "change {title} show pearson's r",
          (0, r.t)("change {title} show pearson's r")
        ),
        m = (0, r.t)('Base'),
        D = (0, r.t)('Up'),
        w = (0, r.t)('Down'),
        I = (0, r.t)("Pearson's R"),
        T = (0, r.t)('Extend lines');
      class C extends s.StudyLineDataSourceDefinitionsViewModel {
        constructor(e, t) {
          super(e, t);
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs().styles.childs(),
            t = this._source.name(),
            i = (0, l.removeSpaces)(t),
            r = new o.TranslatedString(t, this._source.title()),
            s = e.baseLine.childs(),
            C = (0, n.createLinePropertyDefinition)(
              {
                checked: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  s.visible,
                  a.format({ title: r })
                ),
                color: (0, n.getColorDefinitionProperty)(
                  this._propertyApplier,
                  s.color,
                  e.transparency,
                  p.format({ title: r })
                ),
                width: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  s.linewidth,
                  c.format({ title: r })
                ),
                style: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  s.linestyle,
                  u.format({ title: r })
                ),
              },
              { id: i + 'BaseLine', title: m }
            ),
            V = e.upLine.childs(),
            M = (0, n.createLinePropertyDefinition)(
              {
                checked: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  V.visible,
                  h.format({ title: r })
                ),
                color: (0, n.getColorDefinitionProperty)(
                  this._propertyApplier,
                  V.color,
                  e.transparency,
                  d.format({ title: r })
                ),
                width: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  V.linewidth,
                  y.format({ title: r })
                ),
                style: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  V.linestyle,
                  _.format({ title: r })
                ),
              },
              { id: i + 'UpLine', title: D }
            ),
            A = e.downLine.childs();
          return [
            C,
            M,
            (0, n.createLinePropertyDefinition)(
              {
                checked: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  A.visible,
                  f.format({ title: r })
                ),
                color: (0, n.getColorDefinitionProperty)(
                  this._propertyApplier,
                  A.color,
                  e.transparency,
                  g.format({ title: r })
                ),
                width: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  A.linewidth,
                  P.format({ title: r })
                ),
                style: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  A.linestyle,
                  S.format({ title: r })
                ),
              },
              { id: i + 'DownLine', title: w }
            ),
            (0, n.createCheckablePropertyDefinition)(
              {
                checked: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.extendLines,
                  v.format({ title: r })
                ),
              },
              { id: i + 'ExtendLines', title: T }
            ),
            (0, n.createCheckablePropertyDefinition)(
              {
                checked: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.showPearsons,
                  b.format({ title: r })
                ),
              },
              { id: i + 'Pearsons', title: I }
            ),
          ];
        }
      }
    },
    27051: (e, t, i) => {
      i.r(t), i.d(t, { StudyLineDataSourceDefinitionsViewModel: () => h });
      var r = i(79881),
        o = (i(95068), i(68680)),
        n = i(3619),
        s = i(32856),
        l = i.n(s),
        a = i(25019),
        p = i(39884),
        c = i(34954),
        u = i(5225);
      class h extends n.LineDataSourceDefinitionsViewModel {
        constructor(e, t) {
          super(e, t);
        }
        _inputsPropertyDefinitions() {
          const e = this._undoModel
            .model()
            .studyMetaInfoRepository()
            .findByIdSync({ type: 'java', studyId: this._source.studyId() });
          return null === e
            ? null
            : (0, p.getInputsPropertiesDefinitions)(
                this._propertyApplier,
                e.inputs,
                this._source.properties().childs().inputs.childs(),
                !1,
                { sourcesItems: new (l())(a.basePriceSources) }
              );
        }
        _coordinatesPropertyDefinitions() {
          const e = this._source.points(),
            t = this._source.pointsProperty().childs().points,
            i = [];
          return (
            e.forEach((e, n) => {
              const s = t[n].childs();
              if (!s) return;
              const l = (0, c.getCoordinateXMetaInfo)(this._propertyApplier, s);
              i.push(
                (0, o.createCoordinatesPropertyDefinition)(
                  { x: l.property },
                  {
                    id: (0, u.removeSpaces)(`${this._source.name()}Point${n}`),
                    title: (0, r.t)('#{count} (bar)', {
                      context: 'linetool point',
                    }).format({ count: (n + 1).toString() }),
                    ...l.info,
                  }
                )
              );
            }),
            i
          );
        }
      }
    },
    28603: (e, t, i) => {
      i.r(t), i.d(t, { StudyOverlayDefinitionsViewModel: () => O });
      var r = i(79881),
        o = i(90963),
        n = i(16282),
        s = (i(95068), i(27490)),
        l = i(68680),
        a = i(97806),
        p = i(39884),
        c = i(25019),
        u = i(32856),
        h = i.n(u),
        d = i(85062),
        y = i.n(d),
        _ = i(1467),
        f = i(63725);
      const g = (0, r.t)('Style'),
        P = (0, r.t)('Inputs'),
        S = (0, r.t)('Visibility'),
        v = [
          '1',
          '3',
          '5',
          '15',
          '30',
          '45',
          '60',
          '120',
          '180',
          '240',
          '1D',
          '1W',
          '1M',
        ].map((e) => ({
          value: e,
          title: (0, _.getTranslatedResolutionModel)(e).hint,
        }));
      var b = i(85842),
        m = i(5225),
        D = i(25436);
      const w = new o.TranslatedString(
          'change study overlay style',
          (0, r.t)('change study overlay style')
        ),
        I = new o.TranslatedString(
          'change price line visibility',
          (0, r.t)('change price line visibility')
        ),
        T = new o.TranslatedString(
          'change study overlay min tick',
          (0, r.t)('change study overlay min tick')
        ),
        C = (0, r.t)('Bars'),
        V = (0, r.t)('Candles'),
        M = (0, r.t)('Hollow candles'),
        A = (0, r.t)('Line'),
        x = (0, r.t)('Area'),
        k = (0, r.t)('Baseline'),
        W = (0, r.t)('Style'),
        L = (0, r.t)('Price line'),
        N = (0, r.t)('Override min tick'),
        B = [
          { title: C, value: 0 },
          { title: V, value: 1 },
          { title: M, value: 9 },
          { title: A, value: 2 },
          { title: x, value: 3 },
          { title: k, value: 10 },
        ];
      class O extends class {
        constructor(e, t) {
          (this._inputSourceItems = null),
            (this._propertyPages = []),
            (this._sourceInput = null),
            (this._source = t),
            (this._undoModel = e);
          const i = this._sortInputs(this._source.metaInfo().inputs);
          for (const e of i) 'source' === e.type && (this._sourceInput = e);
          this._createPropertyRages(),
            null !== this._inputSourceItems &&
              this._undoModel
                .model()
                .dataSourceCollectionChanged()
                .subscribe(this, () => {
                  null !== this._inputSourceItems &&
                    this._inputSourceItems.setValue(
                      this._getInputSourceItems()
                    );
                });
        }
        destroy() {
          null !== this._inputSourceItems &&
            this._undoModel
              .model()
              .dataSourceCollectionChanged()
              .unsubscribeAll(this),
            this._propertyPages.forEach((e) => {
              (0, l.destroyDefinitions)(e.definitions.value());
            });
        }
        propertyPages() {
          return Promise.resolve(this._propertyPages);
        }
        _createPropertyRages() {
          this._propertyPages = [];
          const e = this._createInputsPropertyPage();
          null !== e && this._propertyPages.push(e);
          const t = this._createStylePropertyPage();
          null !== t && this._propertyPages.push(t),
            this._propertyPages.push(this._createVisibilitiesPropertyPage());
        }
        _createStylePropertyPage() {
          const e = this._stylePropertyDefinitions();
          return null !== e ? (0, a.createPropertyPage)(e, 'style', g) : null;
        }
        _createVisibilitiesPropertyPage() {
          const e = this._source
            .properties()
            .childs()
            .intervalsVisibilities.childs();
          return (0, a.createPropertyPage)(
            (0, f.getIntervalsVisibilitiesPropertiesDefinitions)(
              this._undoModel,
              e,
              new o.TranslatedString(
                this._source.name(!0),
                this._source.title(!0)
              )
            ),
            'visibility',
            S
          );
        }
        _stylePropertyDefinitions() {
          return null;
        }
        _createInputsPropertyPage() {
          const e = this._inputsPropertyDefinitions();
          return null !== e ? (0, a.createPropertyPage)(e, 'inputs', P) : null;
        }
        _inputsPropertyDefinitions() {
          const e = this._sortInputs(this._source.metaInfo().inputs),
            t = this._source.properties().childs().inputs.childs();
          return (
            null !== this._sourceInput &&
              (this._inputSourceItems = new (h())(this._getInputSourceItems())),
            (0, p.getInputsPropertiesDefinitions)(this._undoModel, e, t, !1, {
              resolutionItems: v,
              customSymbolInputSetter: this._customSymbolInputSetter(),
              getSymbolInfoBySymbol: this._getSymbolInfoBySymbol.bind(this),
              onSymbolsInfosChanged: this._source.symbolsResolved(),
              sourcesItems: this._inputSourceItems,
            })
          );
        }
        _sortInputs(e) {
          return e;
        }
        _getInputSourceItems() {
          const e = c.basePriceSources.slice(),
            t = (0, n.ensureNotNull)(this._sourceInput);
          if (this._source && this._source.isChildStudy()) {
            const i = this._source.parentSource(),
              r = i.title(),
              o = y().getChildSourceInputTitles(t, i.metaInfo(), r);
            for (const t of Object.keys(o))
              e.push({ id: t, value: t, title: o[t] });
          }
          if (
            s.enabled('study_on_study') &&
            this._source &&
            (this._source.isChildStudy() ||
              y().canBeChild(this._source.metaInfo()))
          ) {
            const t = new Set([this._source, ...this._source.getAllChildren()]);
            this._undoModel
              .model()
              .allStudies()
              .filter((e) => e.canHaveChildren() && !t.has(e))
              .forEach((t) => {
                const i = t.title(!0, void 0, !0),
                  r = t.sourceId() || '#' + t.id(),
                  o = t.metaInfo(),
                  s = o.styles,
                  l = o.plots || [];
                if (1 === l.length) e.push({ id: r, value: r, title: i });
                else if (l.length > 1) {
                  const t = l.reduce((e, t, o) => {
                    if (!y().canPlotBeSourceOfChildStudy(t.type)) return e;
                    let l;
                    try {
                      l = (0, n.ensureDefined)(
                        (0, n.ensureDefined)(s)[t.id]
                      ).title;
                    } catch (e) {
                      l = t.id;
                    }
                    return { ...e, [`${r}$${o}`]: `${i}: ${l}` };
                  }, {});
                  for (const i of Object.keys(t))
                    e.push({ id: i, value: i, title: t[i] });
                }
              });
          }
          return e;
        }
        _customSymbolInputSetter() {}
        _getSymbolInfoBySymbol(e) {
          return this._source.resolvedSymbolInfoBySymbol(e.value());
        }
      } {
        constructor(e, t) {
          super(e, t),
            (this._stylesPropertyPage = null),
            this.propertyPages().then((e) => {
              this._stylesPropertyPage = e.filter((e) => 'style' === e.id)[0];
            }),
            this._source
              .properties()
              .childs()
              .style.subscribe(this, (e) => {
                var t;
                null !== this._stylesPropertyPage &&
                  ((0, l.destroyDefinitions)(
                    this._stylesPropertyPage.definitions.value()
                  ),
                  this._stylesPropertyPage.definitions.setValue(
                    this._stylePropertyDefinitions()
                  )),
                  null === (t = this._availableStylesWV) ||
                    void 0 === t ||
                    t.setValue(this._availableStyles());
              });
        }
        destroy() {
          this._source.properties().childs().style.unsubscribeAll(this),
            this._source.symbolResolved().unsubscribeAll(this),
            super.destroy();
        }
        _customSymbolInputSetter() {
          return (e) => {
            this._undoModel.setSymbol(this._source, e);
          };
        }
        _stylePropertyDefinitions() {
          void 0 === this._availableStylesWV &&
            ((this._availableStylesWV = new (h())(this._availableStyles())),
            this._source.symbolResolved().subscribe(this, () => {
              var e;
              null === (e = this._availableStylesWV) ||
                void 0 === e ||
                e.setValue(this._availableStyles());
            }));
          const e = this._source.properties().childs(),
            t = (0, l.createOptionsPropertyDefinition)(
              {
                option: (0, l.convertToDefinitionProperty)(
                  this._undoModel,
                  e.style,
                  w
                ),
              },
              {
                id: 'StudyOverlayStyle',
                title: W,
                options: this._availableStylesWV,
              }
            ),
            i = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._undoModel,
                  e.showPriceLine,
                  I
                ),
              },
              { id: 'StudyOverlayPriceLine', title: L }
            ),
            r = (0, l.createOptionsPropertyDefinition)(
              {
                option: (0, l.convertToDefinitionProperty)(
                  this._undoModel,
                  e.minTick,
                  T
                ),
              },
              {
                id: 'StudyOverlayMinTick',
                title: N,
                options: new (h())((0, c.seriesPrecisionValues)()),
              }
            ),
            o = (0, m.removeSpaces)(this._source.title());
          return [
            (0, l.createPropertyDefinitionsGeneralGroup)(
              [t, ...this._getSeriesStylesDefinitions()],
              'SeriesStyleGroup' + o
            ),
            i,
            r,
          ];
        }
        _getSeriesStylesDefinitions() {
          const e = this._source.properties().childs();
          return (0, b.getSeriesStylePropertiesDefinitions)(
            this._undoModel,
            e,
            e.style.value(),
            {
              seriesPriceSources: c.basePriceSources,
              lineStyleTypes: c.lineStyleTypes,
              isJapaneseChartsAvailable: !1,
            },
            'mainSeries'
          );
        }
        _availableStyles() {
          const e = this._source.symbolInfo();
          return B.map((t) =>
            t.readonly
              ? t
              : {
                  readonly: !1,
                  value: t.value,
                  title: t.title,
                  disabled:
                    (0, D.isCloseBasedSymbol)(e) &&
                    !(0, D.isSingleValueBasedStyle)(t.value),
                }
          );
        }
      }
    },
    80538: (e, t, i) => {
      i.d(t, { PropertyApplierWithoutSavingChart: () => r });
      class r {
        constructor(e, t) {
          (this._undoModelSupplier = e), (this._featureToggle = t);
        }
        setProperty(e, t, i) {
          this._undoModelSupplier().setProperty(
            e,
            t,
            i,
            this._featureToggle.value()
          );
        }
        beginUndoMacro(e) {
          return this._undoModelSupplier().beginUndoMacro(
            e,
            this._shouldWeKeepChartValidated()
          );
        }
        endUndoMacro() {
          this._undoModelSupplier().endUndoMacro();
        }
        setWatchedValue(e, t, i) {
          this._undoModelSupplier().undoHistory().setWatchedValue(e, t, i, !0);
        }
        _shouldWeKeepChartValidated() {
          const e = this._undoModelSupplier()
            .model()
            .isAutoSaveEnabled()
            .value();
          return this._featureToggle.value() && e;
        }
      }
    },
  },
]);
