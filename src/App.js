import React from 'react'
import './App.css'
import RayoutList from './components/RayoutList.jsx'
import styled, { ThemeProvider } from 'styled-components'
import theme from './configs/theme.js'
import Button from './components/Button.jsx'
import RayoutListInline from './components/RayoutListInline.jsx'

const Div = styled.span`
	height: 40px;
`

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<RayoutListInline
					gapX={400}
					gapY={20}
				>
					<Div>test</Div>
					<Div>test2</Div>
					<Div>test3</Div>
				</RayoutListInline>
				<RayoutList
					p="4"
					pt="10px"
					pl="20px"
					gridGap="40px"
					justifyItems="start"
				>
					<div>ok</div>
					<div>ok</div>
					<div>ok</div>
					<div>ok</div>
				</RayoutList>
				<Button color="black" bg="white" p="4px">
					small
				</Button>
				<Button color="blue" bg="red" p="8px">
					medium
				</Button>
				<Button color="brown" bg="yellow" p="12px">
					large
				</Button>
				<Button color="w" bg="b" p="s">
					s
				</Button>
				<Button color="w" bg="b" p="m">
					m
				</Button>
				<Button color="w" bg="b" p="l">
					l
				</Button>
				<Button color="w" bg="b" size="large">
					large100
				</Button>
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, auto)' }}>
				<div>one</div>
				<div>two</div>
				<div>three</div>
				<div>four</div>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<div>one</div>
				<div>two</div>
				<div>three</div>
				<div>four</div>
			</div>
		</ThemeProvider>
	)
}

export default App
