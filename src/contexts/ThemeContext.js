import React, { useContext } from 'react'

const ThemeContext = React.createContext(undefined)

export function useTheme() {
	return useContext(ThemeContext)
}

function ThemeProvider({ theme, children }) {
	return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
