"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _spaces = _interopRequireWildcard(require("../themes/spaces.js"));

var _aligns = _interopRequireWildcard(require("../themes/aligns.js"));

const _excluded = ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "gapX", "gapY", "contentMinWidth", "columnCount", "flowDirection", "verticalAlign", "children"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const SdColumns = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: hidden; // prevent showing area of negative margin\n\t", "\n"])), _styledSystem.space);

SdColumns.Row = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tdisplay: grid;\n\t", "\n\t", "\n"])), _styledSystem.grid, _aligns.gridAlign);
SdColumns.Column = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n\t", "\n"])), _spaces.columns, _styledSystem.space);
SdColumns.Item = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\tdisplay: inline-grid;\n\twidth: 100%;\n\tbreak-inside: avoid;\n\t", "\n"])), _styledSystem.space);

function RayoutColumns(_ref) {
  let {
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    gapX,
    gapY,
    contentMinWidth,
    columnCount,
    flowDirection,
    verticalAlign,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const isRowDirection = flowDirection === 'row'; // for row direction

  const repeat = columnCount || 'auto-fit';
  const minmax = contentMinWidth ? "".concat(contentMinWidth, "px") : 0; // for column direction

  const count = columnCount || 'auto';
  const width = contentMinWidth ? "".concat(contentMinWidth, "px") : 'auto';
  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _objectSpread(_objectSpread({}, _spaces.default), _aligns.default)
  }, /*#__PURE__*/_react.default.createElement(SdColumns, _extends({
    pt: paddingTop,
    pb: paddingBottom,
    pl: paddingLeft,
    pr: paddingRight
  }, rest), isRowDirection ? /*#__PURE__*/_react.default.createElement(SdColumns.Row, {
    gridRowGap: gapY,
    gridColumnGap: gapX,
    gridTemplateColumns: "repeat(".concat(repeat, ", minmax(").concat(minmax, ", 1fr))"),
    verticalAlign: verticalAlign
  }, children) : /*#__PURE__*/_react.default.createElement(SdColumns.Column, {
    columns: "".concat(width, " ").concat(count),
    columnGap: gapX,
    mb: -gapY
  }, _react.default.Children.map(children, child => /*#__PURE__*/_react.default.createElement(SdColumns.Item, {
    mb: gapY
  }, /*#__PURE__*/_react.default.cloneElement(child))))));
}

RayoutColumns.propTypes = {
  paddingTop: _propTypes.default.number,
  paddingBottom: _propTypes.default.number,
  paddingLeft: _propTypes.default.number,
  paddingRight: _propTypes.default.number,
  gapX: _propTypes.default.number,
  gapY: _propTypes.default.number,
  contentMinWidth: _propTypes.default.number,
  columnCount: _propTypes.default.number,
  flowDirection: _propTypes.default.oneOf(['row', 'column']),
  verticalAlign: _propTypes.default.oneOf(['default', 'top', 'center', 'bottom'])
};
RayoutColumns.defaultProps = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  gapX: 0,
  gapY: 0,
  contentMinWidth: 0,
  columnCount: 0,
  flowDirection: 'row',
  verticalAlign: 'default'
};
var _default = RayoutColumns;
exports.default = _default;