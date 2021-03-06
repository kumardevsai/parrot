(function (context, $) {
	var $demo = $pt.getService(context, '$demo');


	var painter = function () {
		var modelTemplate = {};
		var model = $pt.createModel(modelTemplate);
		var modelCode = $demo.convertModelCreatorToString({
			variable: 'model',
			template: modelTemplate
		});
		var compCode = $demo.convertComponentCreatorToString({
			tag: 'NDateTime',
			model: 'model',
			layout: 'layout'
		});

		var format = {
			year: function () {
				var layoutTemplate = {comp: {format: 'YYYY'}};
				var layoutCode = $demo.convertCellLayoutCreatorToString({
					variable: 'layout',
					cellKey: 'value',
					template: layoutTemplate
				});
				return {
					id: 'datetime-format-year',
					title: 'Year',
					desc: '',
					xml: <NDateTime model={model} layout={$pt.createCellLayout('value', layoutTemplate)}/>,
					code: [modelCode, layoutCode, compCode],
					index: 10
				};
			},
			yearMonth: function () {
				var layoutTemplate = {comp: {format: 'YYYY/MM'}};
				var layoutCode = $demo.convertCellLayoutCreatorToString({
					variable: 'layout',
					cellKey: 'value',
					template: layoutTemplate
				});
				return {
					id: 'datetime-format-yearmonth',
					title: 'Year & month',
					desc: '',
					xml: <NDateTime model={model} layout={$pt.createCellLayout('value', layoutTemplate)}/>,
					code: [modelCode, layoutCode, compCode],
					index: 20
				};
			},
			year: function () {
				var layoutTemplate = {comp: {format: 'YYYY'}};
				var layoutCode = $demo.convertCellLayoutCreatorToString({
					variable: 'layout',
					cellKey: 'value',
					template: layoutTemplate
				});
				return {
					id: 'datetime-format-year',
					title: 'Year',
					desc: '',
					xml: <NDateTime model={model} layout={$pt.createCellLayout('value', layoutTemplate)}/>,
					code: [modelCode, layoutCode, compCode],
					index: 30
				};
			},
			hms: function () {
				var layoutTemplate = {comp: {format: 'HH:mm:ss'}};
				var layoutCode = $demo.convertCellLayoutCreatorToString({
					variable: 'layout',
					cellKey: 'value',
					template: layoutTemplate
				});
				return {
					id: 'datetime-format-hms',
					title: 'Time',
					desc: '',
					xml: <NDateTime model={model} layout={$pt.createCellLayout('value', layoutTemplate)}/>,
					code: [modelCode, layoutCode, compCode],
					index: 50
				};
			},
			hm: function () {
				var layoutTemplate = {comp: {format: 'HH:mm'}};
				var layoutCode = $demo.convertCellLayoutCreatorToString({
					variable: 'layout',
					cellKey: 'value',
					template: layoutTemplate
				});
				return {
					id: 'datetime-format-hm',
					title: 'Hour & Minute',
					desc: '',
					xml: <NDateTime model={model} layout={$pt.createCellLayout('value', layoutTemplate)}/>,
					code: [modelCode, layoutCode, compCode],
					index: 60
				};
			},
			h: function () {
				var layoutTemplate = {comp: {format: 'HH'}};
				var layoutCode = $demo.convertCellLayoutCreatorToString({
					variable: 'layout',
					cellKey: 'value',
					template: layoutTemplate
				});
				return {
					id: 'datetime-format-h',
					title: 'Hour',
					desc: '',
					xml: <NDateTime model={model} layout={$pt.createCellLayout('value', layoutTemplate)}/>,
					code: [modelCode, layoutCode, compCode],
					index: 70
				};
			},
			hms12: function () {
				var layoutTemplate = {comp: {format: 'HH:mm:ss', hour: 12}};
				var layoutCode = $demo.convertCellLayoutCreatorToString({
					variable: 'layout',
					cellKey: 'value',
					template: layoutTemplate
				});
				return {
					id: 'datetime-format-hms12',
					title: 'Hour 12',
					desc: '',
					xml: <NDateTime model={model} layout={$pt.createCellLayout('value', layoutTemplate)}/>,
					code: [modelCode, layoutCode, compCode],
					index: 80
				};
			},
			all: function () {
				var layoutTemplate = {comp: {format: 'YYYY/MM/DD HH:mm:ss', hour: 12}};
				var layoutCode = $demo.convertCellLayoutCreatorToString({
					variable: 'layout',
					cellKey: 'value',
					template: layoutTemplate
				});
				return {
					id: 'datetime-format-all',
					title: 'All',
					desc: '',
					xml: <NDateTime model={model} layout={$pt.createCellLayout('value', layoutTemplate)}/>,
					code: [modelCode, layoutCode, compCode],
					index: 90
				};
			},
			other: function () {
				return {
					id: 'datetime-format-other',
					title: 'Other',
					desc: 'Other format support refers to MomentJS.',
					index: 999
				};
			}
		};

		var all = {
			defaultOptions: function () {
				var layoutTemplate = {};
				var layoutCode = $demo.convertCellLayoutCreatorToString({
					variable: 'layout',
					cellKey: 'value',
					template: layoutTemplate
				});
				return {
					id: 'datetime-default',
					title: 'Default',
					desc: 'A simple date time picker.',
					xml: <NDateTime model={model} layout={$pt.createCellLayout('value', layoutTemplate)}/>,
					code: [modelCode, layoutCode, compCode],
					index: 10
				};
			},
			valueFormat: function () {
				var layoutTemplate = {comp: {valueFormat: 'YYYY/MM/DD'}};
				var layoutCode = $demo.convertCellLayoutCreatorToString({
					variable: 'layout',
					cellKey: 'value',
					template: layoutTemplate
				});
				return {
					id: 'datetime-value-format',
					title: 'Value Format',
					desc: ['Date time picker with given value format.',
						<span>Default value format is <code>YYYY/MM/DD</code>, format pattern refers to MomentJS.</span>,
						'Value format only effects the value string in data model.'],
					xml: <NDateTime model={model} layout={$pt.createCellLayout('value', layoutTemplate)}/>,
					code: [modelCode, layoutCode, compCode],
					index: 20
				};
			},
			format: function () {
				return {
					id: 'datetime-format',
					title: 'Format',
					desc: ['Date time picker automatically switch the display mode by given format.'],
					index: 30,
					children: $demo.convertToExampleList(format)
				};
			},
			defaultTime: function() {
				return {
					id: 'datetime-defaultTime',
					title: 'Default Time',
					desc: [<span>Default time setting via <code>defaultTime</code>, a function with one parameter which is a moment object and returns a moment object as default time.</span>],
					index: 40
				};
			},
			clock: function() {
				return {
					id: 'datetime-clock',
					title: 'Clock',
					desc: [<span>Stop the clock via <code>runClock: false</code>, default is run.</span>],
					index: 41
				};
			},
			properties: function () {
				return {
					id: 'datetime-properties',
					title: 'Properties',
					desc: ['Available properties.'],
					index: 50,
					code: $demo.convertJSON({
						variable: 'layout',
						json: {
							comp: {
								format: NDateTime.FORMAT,
								valueFormat: NDateTime.VALUE_FORMAT,
								headerYearFormat: NDateTime.HEADER_YEAR_FORMAT,
								headerMonthFormat: NDateTime.HEADER_MONTH_FORMAT,
								bodyYearFormat: 'YYYY',
								locale: 'en',
								hour: 24,
								icons: {
									calendar: 'calendar',
									today: 'crosshairs',
									clear: 'trash-o',
									close: 'close'
								}
							}
						}
					})
				}
			},
			constants: function () {
				var statics = {
					POP_FIX_ON_BOTTOM: false,
					FORMAT: 'YYYY/MM/DD',
					HEADER_MONTH_FORMAT: 'MMMM',
					HEADER_YEAR_FORMAT: 'YYYY',
					VALUE_FORMAT: $pt.ComponentConstants.Default_Date_Format,
					FORMAT_TYPES: {
						// use binary
						ALL: 64 + 32 + 16 + 8 + 4 + 2,
						YMD: 64 + 32 + 16,
						YM: 64 + 32,
						HM: 8 + 4,
						HMS: 8 + 4 + 2,

						YEAR: 64,
						MONTH: 32,
						DAY: 16,
						HOUR: 8,
						MINUTE: 4,
						SECOND: 2,
						MILLSECOND: 1
					},
					CLOCK_RADIUS: 100,
					CLOCK_HOUR_PERCENTAGE: 0.6,
					CLOCK_BIG_ENGRAVE_LENGTH: 8,
					CLOCK_SMALL_ENGRAVE_LENGTH: 4,
					CLOCK_CHAR_POS: {
						TOP: {X: 100, Y: -2},
						LEFT: {X: -1, Y: 99},
						RIGHT: {X: 201, Y: 99},
						BOTTOM: {X: 100, Y: 203}
					},
					CLOCK_HAND_OFFSET: 10,
					CLOSE_TEXT: 'Close',
					TODAY_TEXT: 'Now',
					CLEAR_TEXT: 'Clear',
					DATE_SWITCH_TEXT: 'Date',
					TIME_SWITCH_TEXT: 'Time'
				};
				return {
					id: 'datetime-constants',
					title: 'Constants',
					desc: 'Available constants. Constants must be change before construct component.',
					index: 60,
					code: $demo.convertJSON({
						variable: 'NDateTime',
						json: {
							statics: statics
						}
					})
				};
			},
			css: function () {
				return $demo.convertCSSJSONToExample({
					id: 'datetime-css',
					index: 70,
					css: {
						comp: 'your-class-name',
						'normal-line': 'your-class-name',
						'focus-line': 'your-class-name'
					}
				});
			},
			i18n: function () {
				return {
					id: 'datetime-i18n',
					title: 'I18N',
					desc: 'I18N & L10N',
					index: 80,
					children: [
						{
							id: 'taiwan',
							title: 'Taiwan',
							desc: 'Include moment-taiwan to support Taiwan format.',
							index: 10
						}
					]
				}
			}
		};
		return $demo.convertToExampleList(all);
	};

	var renderer = $pt.getService($demo, 'renderer');
	renderer.formDateTime = function () {
		React.render(<ExampleList title='Form Date Time Picker'
		                          formType='$pt.ComponentConstants.Date'
		                          items={painter()}/>, document.getElementById('main'));
	};
}(this, jQuery));
