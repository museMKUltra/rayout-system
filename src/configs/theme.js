const RAYOUT_SPACING_BASE = 4
const RAYOUT_SPACING_TIMES = [0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12]

// examples
const fontSizes = [12, 14, 16, 20, 24, 32]
const space = RAYOUT_SPACING_TIMES.map(times => times * RAYOUT_SPACING_BASE)
// 0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48

const colors = ['white', 'black', 'gray']
const buttons = {
	size: {
		large: {
			height: 40,
			padding: '0 100px',
		},
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
space.s = space[1]
space.m = space[2]
space.l = space[3]

colors.w = colors[0]
colors.b = colors[1]
colors.g = colors[2]

export default {
	fontSizes,
	space,
	colors,
	buttons,
}
