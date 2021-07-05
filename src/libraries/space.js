const RAYOUT_SPACING_BASE = 4
const RAYOUT_SPACING_TIMES = [0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12]

export const spaceGenerator = (base = RAYOUT_SPACING_BASE) => ({
	space: RAYOUT_SPACING_TIMES.map(times => times * base),
})
