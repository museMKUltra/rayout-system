import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { layout } from 'styled-system'
import theme from './configs/theme.js'
import RayoutColumn from './components/RayoutColumn.jsx'

const Div = styled.div`
	background: lightgray;
	${layout}
`

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RayoutColumn
				contentMinWidth={''}
				columnCount={''}
				flowDirection={''}
				verticalAlign={''}
				gap={''}
				gapX={''}
				gapY={''}
			>
				<Div></Div>
			</RayoutColumn>
		</ThemeProvider>
	)
}

export default App
