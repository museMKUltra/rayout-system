import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import ExampleButton from './ExampleButton.jsx'
import colorTheme from '../themes/colors.js'
import RayoutFlexRow from './RayoutFlexRow.jsx'
import RayoutAlign from './RayoutAlign.jsx'

const functionTheme = theme => {
	colorTheme.colors.font = '#eee'

	return { ...theme, ...colorTheme }
}

function DemoCssVariables({Component, children}) {
	const [isDefaultType, setIsDefaultType] = useState(false)
	const [colorIndex, setColorIndex] = useState(0)

	const changeOpacity = () => {
		setIsDefaultType(!isDefaultType)
	}

	const switchColor = () => {
		const range = colorTheme.colors.length
		const nextIndex = (colorIndex + 1) % range

		setColorIndex(nextIndex)
	}

	return (
		<ThemeProvider theme={functionTheme}>
			<RayoutFlexRow gapX={5}>
				<RayoutFlexRow.Left>
					<ExampleButton
						variant={'primary'}
						size={'small'}
						onClick={changeOpacity}
					>
						opacity
					</ExampleButton>
				</RayoutFlexRow.Left>
				<RayoutFlexRow.Remain>
					<RayoutAlign
						verticalAlign={'center'}
						horizontalAlign={'center'}
						paddings={'0 3'}
					>
						<Component
							color={'font'}
							opacity={isDefaultType ? 1 : 0.6}
							bg={colorIndex}
						>
							{children}
						</Component>
					</RayoutAlign>
				</RayoutFlexRow.Remain>
				<RayoutFlexRow.Right>
					<ExampleButton
						variant={'secondary'}
						size={'small'}
						onClick={switchColor}
					>
						color
					</ExampleButton>
				</RayoutFlexRow.Right>
			</RayoutFlexRow>
		</ThemeProvider>
	)
}

export default DemoCssVariables
