import styled, { ThemeProvider } from 'styled-components'
import { color, layout } from 'styled-system'
import breakpoints from '../themes/breakpoints.js'

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	${color}
`

const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
	${layout}
`

// Getting Started
function Example1() {
	return (
		<ThemeProvider theme={breakpoints}>
			<Wrapper
				width={{ _: '200px', sm: '300px', xl: '500px' }}
			>
				<Title
					color={{ _: 'palevioletred', sm: 'tomato', xl: 'rebeccapurple' }}
				>
					Hello World!
				</Title>
			</Wrapper>
			<Wrapper
				width={{ _: '300px', md: '400px', lg: '500px' }}
			>
				<Title color={{ _: 'white', md: 'gray', lg: 'black' }}>
					Hello World!
				</Title>
			</Wrapper>
		</ThemeProvider>
	)
}

export default Example1
