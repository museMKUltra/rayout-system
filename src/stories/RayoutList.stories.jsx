import React from 'react'
import styled from 'styled-components'
import { layout } from 'styled-system'
import RayoutList from '../components/RayoutList.jsx'
import ThemeProviderContainer from '../hoc/ThemeProviderContainer.js'

export default {
	title: 'Example/RayoutList',
	component: RayoutList,
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
		gap: {
			control: { type: 'range', min: 0, max: 10, step: 1 },
		},
	},
}

const Div = styled.div`
  background: darkgray;
  ${layout}
`

const RayoutListDemo = styled(RayoutList)`
	background: lightgray;
`

const Template = args => (
	<ThemeProviderContainer component={RayoutListDemo} {...args}>
		<Div height={40}>one</Div>
		<Div height={40}>two</Div>
		<Div height={40}>three</Div>
	</ThemeProviderContainer>
)

export const ThreeElements = Template.bind({})
ThreeElements.args = {
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gap: 5,
	horizontalAlign: 'default',
}
