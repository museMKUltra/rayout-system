"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.to-string.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _spaces = require("../themes/spaces.js");

var _aligns = _interopRequireWildcard(require("../themes/aligns.js"));

const _excluded = ["base", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "gapX", "gapY", "horizontalAlign", "verticalAlign", "wrap", "children"];

var _templateObject, _templateObject2, _templateObject3;

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

const wrapMapping = {
  true: 'wrap',
  false: 'nowrap'
};

const SdList = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: inline-block;\n\t", "\n"])), _styledSystem.space);

SdList.Wrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tdisplay: inline-flex;\n\tvertical-align: top;\n\t", "\n\t", "\n  ", "\n  ", "\n"])), _spaces.halfMargin, _styledSystem.layout, _styledSystem.flexbox, _aligns.flexRowAlign);
SdList.Item = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t", "\n"])), _spaces.halfMargin); // https://www.geeksforgeeks.org/how-to-use-react-cloneelement-function/

function RayoutListInline(_ref) {
  let {
    base,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    gapX,
    gapY,
    horizontalAlign,
    verticalAlign,
    wrap,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const spaces = (0, _spaces.spaceGenerator)(base);
  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _objectSpread(_objectSpread({}, spaces), _aligns.default)
  }, /*#__PURE__*/_react.default.createElement(SdList, _extends({
    pt: paddingTop,
    pb: paddingBottom,
    pl: paddingLeft,
    pr: paddingRight
  }, rest), /*#__PURE__*/_react.default.createElement(SdList.Wrapper, {
    horizontalAlign: horizontalAlign,
    verticalAlign: verticalAlign,
    flexWrap: wrapMapping[wrap.toString()],
    halfMx: -gapX,
    halfMy: -gapY
  }, _react.default.Children.map(children, child => /*#__PURE__*/_react.default.createElement(SdList.Item, {
    halfMx: gapX,
    halfMy: gapY
  }, /*#__PURE__*/_react.default.cloneElement(child))))));
}

RayoutListInline.propTypes = {
  base: _propTypes.default.number,
  paddingTop: _propTypes.default.number,
  paddingBottom: _propTypes.default.number,
  paddingLeft: _propTypes.default.number,
  paddingRight: _propTypes.default.number,
  gapX: _propTypes.default.number,
  gapY: _propTypes.default.number,
  horizontalAlign: _propTypes.default.oneOf(['default', 'left', 'center', 'right']),
  verticalAlign: _propTypes.default.oneOf(['default', 'top', 'center', 'bottom']),
  wrap: _propTypes.default.bool
};
RayoutListInline.defaultProps = {
  base: 4,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  gapX: 0,
  gapY: 0,
  horizontalAlign: 'default',
  verticalAlign: 'default',
  wrap: true
};
var _default = RayoutListInline;
exports.default = _default;