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

const _excluded = ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "children"];

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const SdContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\t", "\n"])), _styledSystem.space);

const Wrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tdisplay: grid;\n\tgrid-template: 1fr / 1fr;\n\tflex: 1 1 auto;\n\theight: auto;\n"])));

const Cell = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tgrid-row: 1 / 1;\n\tgrid-column: 1 / 1;\n\t", "\n"])), _styledSystem.flexbox);

const childMap = {
  top: 'Top',
  left: 'Left',
  right: 'Right',
  bottom: 'Bottom',
  center: 'Center',
  topLeft: 'TopLeft',
  topRight: 'TopRight',
  bottomLeft: 'BottomLeft',
  bottomRight: 'BottomRight'
};
Object.entries(childMap).forEach(_ref => {
  let [_key, value] = _ref;
  return RayoutAbsolute[value] = value;
});

function RayoutAbsolute(_ref2) {
  let {
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    children
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded);

  const childList = _react.default.Children.toArray(children);

  const findChild = type => {
    var _childList$find;

    return (_childList$find = childList.find(child => child.type === type)) === null || _childList$find === void 0 ? void 0 : _childList$find.props.children;
  };

  const top = findChild(childMap.top);
  const left = findChild(childMap.left);
  const right = findChild(childMap.right);
  const bottom = findChild(childMap.bottom);
  const center = findChild(childMap.center);
  const topLeft = findChild(childMap.topLeft);
  const topRight = findChild(childMap.topRight);
  const bottomLeft = findChild(childMap.bottomLeft);
  const bottomRight = findChild(childMap.bottomRight);
  return /*#__PURE__*/_react.default.createElement(SdContainer, _extends({
    theme: _spaces.default,
    pt: paddingTop,
    pb: paddingBottom,
    pl: paddingLeft,
    pr: paddingRight
  }, rest), /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(Cell, {
    justifySelf: 'center',
    alignSelf: 'start'
  }, top), /*#__PURE__*/_react.default.createElement(Cell, {
    justifySelf: 'start',
    alignSelf: 'center'
  }, left), /*#__PURE__*/_react.default.createElement(Cell, {
    justifySelf: 'end',
    alignSelf: 'center'
  }, right), /*#__PURE__*/_react.default.createElement(Cell, {
    justifySelf: 'center',
    alignSelf: 'end'
  }, bottom), /*#__PURE__*/_react.default.createElement(Cell, {
    justifySelf: 'start',
    alignSelf: 'start'
  }, topLeft), /*#__PURE__*/_react.default.createElement(Cell, {
    justifySelf: 'center',
    alignSelf: 'center'
  }, center), /*#__PURE__*/_react.default.createElement(Cell, {
    justifySelf: 'end',
    alignSelf: 'start'
  }, topRight), /*#__PURE__*/_react.default.createElement(Cell, {
    justifySelf: 'start',
    alignSelf: 'end'
  }, bottomLeft), /*#__PURE__*/_react.default.createElement(Cell, {
    justifySelf: 'end',
    alignSelf: 'end'
  }, bottomRight)));
}

RayoutAbsolute.propTypes = {
  paddingTop: _propTypes.default.number,
  paddingBottom: _propTypes.default.number,
  paddingLeft: _propTypes.default.number,
  paddingRight: _propTypes.default.number
};
RayoutAbsolute.defaultProps = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
};
var _default = RayoutAbsolute;
exports.default = _default;