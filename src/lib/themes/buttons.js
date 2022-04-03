const colors = ['white', 'papayawhip', 'palevioletred', 'rebeccapurple']

colors.primary = colors[0]
colors.secondary = colors[3]

const variant = {
	primary: {
		color: colors.primary,
		background: colors[2],
	},
	secondary: {
		color: colors.secondary,
		background: colors[1],
	},
}

const size = {
	small: {
		fontSize: '1rem',
		padding: '0.5em 1em',
	},
	large: {
		fontSize: '1.4rem',
		padding: '0.75em 1.25em',
	},
}

export default {
	variant,
	size,
}
