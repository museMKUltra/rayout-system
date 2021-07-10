import React from 'react'
import theme from '../configs/theme.js'
import { ThemeProvider } from 'styled-components'

function ThemeProviderContainer({ component: Component, children, ...rest }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...rest}>{children}</Component>
		</ThemeProvider>
	)
}

export default ThemeProviderContainer
