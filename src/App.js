import React from 'react'
import './App.css'
import styled from 'styled-components'
import { layout } from 'styled-system'
import RayoutColumns from './components/RayoutColumns.jsx'

const Div = styled.div`
	background: lightgray;
	${layout}
`

function App() {
	return (
		<RayoutColumns
			contentMinWidth={200}
			columnCount={10}
			flowDirection={'row'}
			verticalAlign={'center'}
			gapX={3}
			gapY={5}
		>
			<Div height={40}>one</Div>
			<Div height={20}>two</Div>
			<Div height={30}>three</Div>
		</RayoutColumns>
	)
}

export default App
