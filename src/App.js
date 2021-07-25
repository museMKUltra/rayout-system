import React from 'react'
import './App.css'
import styled from 'styled-components'
import { layout } from 'styled-system'
import RayoutAlign from './components/RayoutAlign.jsx'

const Box = styled(RayoutAlign)`
	background: darkgray;
	${layout}
`

const Div = styled.div`
	height: 80px;
	background: lightgray;
`

function App() {
	return (
		<Box paddingTop={10} height={'400px'}>
			<Div>align</Div>
		</Box>
	)
}

export default App
