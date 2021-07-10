import React from 'react'
import styled from 'styled-components'
import { layout } from 'styled-system'
import RayoutListInline from '../components/RayoutListInline.jsx'
import ThemeProviderContainer from '../hoc/ThemeProviderContainer.js'

export default {
	title: 'Example/RayoutListInline',
	component: RayoutListInline,
	argTypes: {
		paddingTop: {
			control: { type: 'range', min: 0, max: 10, step: 1 },
		},
		paddingBottom: {
			control: { type: 'range', min: 0, max: 10, step: 1 },
		},
		paddingLeft: {
			control: { type: 'range', min: 0, max: 10, step: 1 },
		},
		paddingRight: {
			control: { type: 'range', min: 0, max: 10, step: 1 },
		},
		gapX: {
			control: { type: 'range', min: 0, max: 10, step: 1 },
		},
		gapY: {
			control: { type: 'range', min: 0, max: 10, step: 1 },
		},
	},
}

const Div = styled.div`
	background: darkgray;
	${layout}
`

const RayoutListInlineDemo = styled(RayoutListInline)`
	background: lightgray;
`

const Template = args => (
	<ThemeProviderContainer component={RayoutListInlineDemo} {...args}>
		<Div width={120} height={80}>
			one
		</Div>
		<Div width={40} height={20}>
			two
		</Div>
		<Div width={120} height={80}>
			three
		</Div>
		<Div width={50} height={30}>
			four
		</Div>
		<Div width={120} height={80}>
			five
		</Div>
		<Div width={60} height={40}>
			six
		</Div>
	</ThemeProviderContainer>
)

export const SixElements = Template.bind({})
SixElements.args = {
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gapX: 5,
	gapY: 5,
	horizontalAlign: 'default',
	verticalAlign: 'default',
	wrap: true,
}
