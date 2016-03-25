'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactSimpleDatepicker = require('react-simple-datepicker');

var _reactSimpleDatepicker2 = _interopRequireDefault(_reactSimpleDatepicker);

require('react-simple-datepicker/dist/index.css');

var DatePickerDemo = function DatePickerDemo() {
  return _react2['default'].createElement(
    'ul',
    { className: 'demos' },
    _react2['default'].createElement(
      'li',
      null,
      _react2['default'].createElement(
        'h3',
        null,
        'Default'
      ),
      _react2['default'].createElement(_reactSimpleDatepicker2['default'], null)
    ),
    _react2['default'].createElement(
      'li',
      null,
      _react2['default'].createElement(
        'h3',
        null,
        'Custom onClick'
      ),
      _react2['default'].createElement(_reactSimpleDatepicker2['default'], { clickOnDate: function (date) {
          return alert(date);
        } })
    ),
    _react2['default'].createElement(
      'li',
      null,
      _react2['default'].createElement(
        'h3',
        null,
        'Date Range'
      ),
      _react2['default'].createElement(_reactSimpleDatepicker2['default'], { date: new Date('03.15.16'), minDate: new Date('03.10.16'), maxDate: new Date('03.20.16') })
    ),
    _react2['default'].createElement(
      'li',
      null,
      _react2['default'].createElement(
        'h3',
        null,
        'Custom classNames'
      ),
      _react2['default'].createElement(_reactSimpleDatepicker2['default'], { monthClassName: 'month', prevMonthClassName: 'prev', nextMonthClassName: 'next' })
    )
  );
};

_reactDom2['default'].render(_react2['default'].createElement(DatePickerDemo, null), document.getElementById('example'));

module.exports = DatePickerDemo;