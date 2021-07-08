import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { layout } from 'styled-system'
import theme from './configs/theme.js'
import RayoutFlexRow from './components/RayoutFlexRow.jsx'
import RayoutFlexColumn from './components/RayoutFlexColumn.jsx'

const Div = styled.div`
	background: lightgray;
	${layout}
`

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<RayoutFlexRow gap={10}>
					<RayoutFlexRow.Left>
						<Div height={30}>one</Div>
					</RayoutFlexRow.Left>
					<RayoutFlexRow.Remain>
						<Div height={40}>two</Div>
					</RayoutFlexRow.Remain>
					<RayoutFlexRow.Right>
						<Div height={50}>three</Div>
					</RayoutFlexRow.Right>
				</RayoutFlexRow>
				<RayoutFlexColumn gap={10} height={200}>
					<RayoutFlexColumn.Top>
						<Div height={30}>one</Div>
					</RayoutFlexColumn.Top>
					<RayoutFlexColumn.Remain>
						<Div>two</Div>
					</RayoutFlexColumn.Remain>
					<RayoutFlexColumn.Bottom>
						<Div height={50}>three</Div>
					</RayoutFlexColumn.Bottom>
				</RayoutFlexColumn>
			</div>
		</ThemeProvider>
	)
}

export default App
