"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _spaces = _interopRequireDefault(require("../themes/spaces.js"));

var _aligns = _interopRequireWildcard(require("../themes/aligns.js"));

var _css = require("../styles/css.js");

const _excluded = ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "gap", "verticalAlign", "children"];

var _templateObject, _templateObject2;

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

const SdRow = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\t", "\n\t", "\n"])), _styledSystem.space, _aligns.flexRowAlign);

const Div = _ref => {
  let {
    className,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children);
}; // https://stackoverflow.com/questions/49745637/if-statement-inside-styled-component/49745933


SdRow.Box = (0, _styledComponents.default)(Div)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t", "\n\t", "\n  ", "\n  ", "\n"])), _styledSystem.space, _styledSystem.layout, _styledSystem.flexbox, props => props.isAligning || _css.contentFillHeight);
const aligningProps = ['top', 'center', 'bottom'];
const childMap = {
  left: 'Left',
  remain: 'Remain',
  right: 'Right'
};
Object.entries(childMap).forEach(_ref2 => {
  let [_key, value] = _ref2;
  return RayoutFlexRow[value] = value;
}); // https://medium.com/@srph/react-imitating-vue-slots-eab8393f96fd

function RayoutFlexRow(_ref3) {
  let {
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    gap,
    verticalAlign,
    children
  } = _ref3,
      rest = _objectWithoutProperties(_ref3, _excluded);

  const childList = _react.default.Children.toArray(children);

  const findChild = type => {
    var _childList$find;

    return (_childList$find = childList.find(child => child.type === type)) === null || _childList$find === void 0 ? void 0 : _childList$find.props.children;
  };

  const left = findChild(childMap.left);
  const remain = findChild(childMap.remain);
  const right = findChild(childMap.right);
  const isAligning = aligningProps.includes(verticalAlign);
  const margin = remain ? _spaces.default.space[gap] : _spaces.default.space[gap] / 2;
  const marginRight = left ? margin : 0;
  const marginLeft = right ? margin : 0;
  return /*#__PURE__*/_react.default.createElement(SdRow, _extends({
    theme: _objectSpread(_objectSpread({}, _spaces.default), _aligns.default),
    pt: paddingTop,
    pb: paddingBottom,
    pl: paddingLeft,
    pr: paddingRight,
    verticalAlign: verticalAlign
  }, rest), /*#__PURE__*/_react.default.createElement(SdRow.Box, {
    isAligning: isAligning,
    flex: "0 0 auto",
    mr: "".concat(marginRight, "px")
  }, left), /*#__PURE__*/_react.default.createElement(SdRow.Box, {
    isAligning: isAligning,
    flex: "1 1 auto",
    minWidth: 0
  }, remain), /*#__PURE__*/_react.default.createElement(SdRow.Box, {
    isAligning: isAligning,
    flex: "0 0 auto",
    ml: "".concat(marginLeft, "px")
  }, right));
}

RayoutFlexRow.propTypes = {
  paddingTop: _propTypes.default.number,
  paddingBottom: _propTypes.default.number,
  paddingLeft: _propTypes.default.number,
  paddingRight: _propTypes.default.number,
  gap: _propTypes.default.number,
  verticalAlign: _propTypes.default.oneOf(['default', 'top', 'center', 'bottom'])
};
RayoutFlexRow.defaultProps = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  gap: 0,
  verticalAlign: 'default'
};
var _default = RayoutFlexRow;
exports.default = _default;