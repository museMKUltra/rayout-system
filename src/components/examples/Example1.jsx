import { ThemeProvider } from 'styled-components'
import breakpoints from '../../themes/breakpoints.js'
import HelloWorld from './HelloWorld.jsx'

function Example1() {
	return (
		<ThemeProvider theme={breakpoints}>
			<HelloWorld
				width={['200px', '300px', null, '500px']}
				color={['palevioletred', 'tomato', null, 'rebeccapurple']}
			>
				Hello World No.1
			</HelloWorld>
			<HelloWorld
				width={{ _: '300px', md: '400px', lg: '500px' }}
				color={{ _: 'white', md: 'gray', lg: 'black' }}
			>
				Hello World No.2
			</HelloWorld>
		</ThemeProvider>
	)
}

export default Example1
