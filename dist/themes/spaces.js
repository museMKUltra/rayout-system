"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spaceGenerator = exports.multiPadding = exports.halfMargin = exports.default = exports.columns = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

var _styledSystem = require("styled-system");

const SPACING_BASE = 4;
const SPACING_TIMES = [0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12];

const spaceGenerator = function spaceGenerator() {
  let base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SPACING_BASE;
  return {
    space: SPACING_TIMES.map(times => times * base)
  };
};

exports.spaceGenerator = spaceGenerator;
const columns = (0, _styledSystem.system)({
  columns: true,
  columnGap: {
    property: 'columnGap',
    scale: 'space'
  }
});
exports.columns = columns;
const multiPadding = (0, _styledSystem.system)({
  paddings: {
    property: 'padding',
    scale: 'space',
    transform: (value, scale) => {
      const paddings = value.split(' ').map(padding => "".concat(scale[padding], "px")).join(' ');
      return paddings;
    }
  }
});
exports.multiPadding = multiPadding;

const halfTransform = (value, scale) => {
  const half = value < 0 ? -0.5 : 0.5;
  const index = Math.abs(value);
  return "".concat(half * scale[index], "px");
};

const halfMargin = (0, _styledSystem.system)({
  halfMx: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: halfTransform
  },
  halfMy: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: halfTransform
  }
});
exports.halfMargin = halfMargin;
const spaces = spaceGenerator();
var _default = spaces;
exports.default = _default;