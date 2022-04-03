import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import buttons from './themes/buttons.js'
import ExampleButton from './components/ExampleButton.jsx'
import RayoutAlign from './components/RayoutAlign.jsx'
import RayoutList from './components/RayoutList.jsx'
import RayoutListInline from './components/RayoutListInline.jsx'
import Hover from './components/Hover.jsx'
import DemoCssVariables from './components/DemoCssVariables.jsx'
import Backdrop from './components/Backdrop.jsx'
import BackdropCssVariables from './components/BackdropCssVariables.jsx'

const SdRayoutAlign = styled(RayoutAlign)`
	height: 100vh;
`

function App() {
	return (
		<ThemeProvider theme={buttons}>
			<SdRayoutAlign
				verticalAlign={'center'}
				horizontalAlign={'center'}
				paddings={'5 3'}
			>
				<RayoutList horizontalAlign={'center'} gap={5}>
					<RayoutListInline verticalAlign={'center'} gapX={5}>
						<ExampleButton variant={'primary'} size={'small'}>
							primary
						</ExampleButton>
						<ExampleButton variant={'secondary'} size={'large'}>
							secondary
						</ExampleButton>
					</RayoutListInline>
					{/*<Example1></Example1>*/}
					<Hover hoverBrightness={1.2} />
					<DemoCssVariables Component={Backdrop}>
						styled system
					</DemoCssVariables>
					<DemoCssVariables Component={BackdropCssVariables}>
						css variables
					</DemoCssVariables>
				</RayoutList>
			</SdRayoutAlign>
		</ThemeProvider>
	)
}

export default App
