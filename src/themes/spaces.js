import { system } from 'styled-system'

const SPACING_BASE = 4
const SPACING_TIMES = [0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12]

export const spaceGenerator = (base = SPACING_BASE) => ({
	space: SPACING_TIMES.map(times => times * base),
})

export const columns = system({
	columns: true,
	columnGap: {
		property: 'columnGap',
		scale: 'space',
	},
})

export const multiPadding = system({
	paddings: {
		property: 'padding',
		scale: 'space',
		transform: (value, scale) => {
			const paddings = value
				.split(' ')
				.map(padding => `${scale[padding]}px`)
				.join(' ')

			return paddings
		},
	},
})

const halfTransform = (value, scale) => {
	const half = value < 0 ? -0.5 : 0.5
	const index = Math.abs(value)

	return `${half * scale[index]}px`
}

export const halfMargin = system({
	halfMx: {
		properties: ['marginLeft', 'marginRight'],
		scale: 'space',
		transform: halfTransform,
	},
	halfMy: {
		properties: ['marginTop', 'marginBottom'],
		scale: 'space',
		transform: halfTransform,
	},
})

const spaces = spaceGenerator()

export default spaces
