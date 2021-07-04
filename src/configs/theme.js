// examples
const fontSizes = [12, 14, 16, 20, 24, 32];
const space = [0, 2, 4, 8, 12, 16, 20, 24];
const colors = ['white', 'black', 'gray'];
const buttons = {
  size: {
    large: {
      height: 40,
      padding: '0 100px',
    }
  },
  primary: {
    color: colors.white,
    backgroundColor: colors.blue,
  },
  secondary: {
    color: colors.white,
    backgroundColor: colors.green,
  },
  danger: {
    color: colors.white,
    backgroundColor: colors.red,
  },
  }

// alias
space.s = space[1];
space.m = space[2];
space.l = space[3];

colors.w = colors[0];
colors.b = colors[1];
colors.g = colors[2];

export default {
  fontSizes,
  space,
  colors,
  buttons,
};