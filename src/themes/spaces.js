const SPACING_BASE = 4
const SPACING_TIMES = [0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12]

export const spaceGenerator = (base = SPACING_BASE) => ({
	space: SPACING_TIMES.map(times => times * base),
})

const spaces = spaceGenerator()

export default spaces
