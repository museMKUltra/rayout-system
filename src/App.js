import React from 'react'
import './App.css'
import styled from 'styled-components'
import { position, layout } from 'styled-system'
import RayoutAbsolute from './components/RayoutAbsolute.jsx'
import RayoutList from './components/RayoutList.jsx'
import RayoutListInline from './components/RayoutListInline.jsx'

const Box = styled.div`
	background: darkgray;
	${position}
	${layout}
`

const Div = styled.div`
	height: 100px;
	width: 100px;
	background: lightgray;
	${layout}
`

function App() {
	return (
		<Box position={'relative'} height={'400px'}>
			<RayoutAbsolute paddingTop={10}>
				<RayoutAbsolute.TopLeft>
					<Div>top</Div>
				</RayoutAbsolute.TopLeft>
				<RayoutAbsolute.Left>
					<Div>left</Div>
				</RayoutAbsolute.Left>
				<RayoutAbsolute.Right>
					<Div>right</Div>
				</RayoutAbsolute.Right>
				<RayoutAbsolute.BottomRight>
					<Div>bottom</Div>
				</RayoutAbsolute.BottomRight>
			</RayoutAbsolute>
			<RayoutList>
				<div>list</div>
			</RayoutList>
			<RayoutListInline>
				<div>list inline</div>
			</RayoutListInline>
		</Box>
	)
}

export default App
