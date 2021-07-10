import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { layout } from 'styled-system'
import theme from './configs/theme.js'

const Div = styled.div`
	background: lightgray;
	${layout}
`

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Div></Div>
		</ThemeProvider>
	)
}

export default App
