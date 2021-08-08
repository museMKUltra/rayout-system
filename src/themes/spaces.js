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

export const negativeMargin = system({
	negativeMb: {
		property: 'marginBottom',
		scale: 'space',
		transform: (value, scale) => `-${(scale[value])}px`
	}
})

const spaces = spaceGenerator()

export default spaces
