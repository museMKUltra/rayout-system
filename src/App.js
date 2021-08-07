import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import ExampleButton from './components/ExampleButton.jsx'
import buttonTheme from './configs/button.js'
import RayoutListInline from './components/RayoutListInline.jsx'
import Example2 from './components/Example2.jsx'

function App() {
	return (
		<ThemeProvider theme={buttonTheme}>
			<Example2 />
			<RayoutListInline
				paddingTop={10}
				paddingLeft={10}
				gapX={4}
				verticalAlign={'center'}
			>
				<ExampleButton variant={'primary'} size={'small'}>
					button1
				</ExampleButton>
				<ExampleButton variant={'secondary'} size={'large'}>
					button2
				</ExampleButton>
			</RayoutListInline>
		</ThemeProvider>
	)
}

export default App
