"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contentFillHeight = void 0;

var _styledComponents = require("styled-components");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const contentFillHeight = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t> * {\n\t\tflex: 1 1 auto;\n\t\theight: auto;\n\t}\n"])));
exports.contentFillHeight = contentFillHeight;