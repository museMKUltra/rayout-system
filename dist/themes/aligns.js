"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gridAlign = exports.flexRowAlign = exports.flexColumnAlign = exports.default = void 0;

var _styledSystem = require("styled-system");

const aligns = {
  flexAlign: ['', 'flex-start', 'center', 'flex-end'],
  gridAlign: ['', 'start', 'center', 'end']
};

const aliasSetter = key => (prop, index) => aligns[key][prop] = aligns[key][index];

const flexAlignAlias = aliasSetter('flexAlign');
aligns.flexAlign.default = aligns.flexAlign[0];
flexAlignAlias('default', 0);
flexAlignAlias('top', 1);
flexAlignAlias('left', 1);
flexAlignAlias('center', 2);
flexAlignAlias('right', 3);
flexAlignAlias('bottom', 3);
const gridAlignAlias = aliasSetter('gridAlign');
gridAlignAlias('default', 0);
gridAlignAlias('top', 1);
gridAlignAlias('left', 1);
gridAlignAlias('center', 2);
gridAlignAlias('right', 3);
gridAlignAlias('bottom', 3);
const flexRowAlign = (0, _styledSystem.system)({
  horizontalAlign: {
    property: 'justifyContent',
    scale: 'flexAlign'
  },
  verticalAlign: {
    property: 'alignItems',
    scale: 'flexAlign'
  }
});
exports.flexRowAlign = flexRowAlign;
const flexColumnAlign = (0, _styledSystem.system)({
  horizontalAlign: {
    property: 'alignItems',
    scale: 'flexAlign'
  },
  verticalAlign: {
    property: 'justifyContent',
    scale: 'flexAlign'
  }
});
exports.flexColumnAlign = flexColumnAlign;
const gridAlign = (0, _styledSystem.system)({
  horizontalAlign: {
    property: 'justifyItems',
    scale: 'gridAlign'
  },
  verticalAlign: {
    property: 'alignItems',
    scale: 'gridAlign'
  }
});
exports.gridAlign = gridAlign;
var _default = aligns;
exports.default = _default;