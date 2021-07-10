import React from 'react'
import RayoutList from '../components/RayoutList.jsx'

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

const Template = args => (
	<RayoutList {...args} style={{ background: 'lightgray' }}>
		<div style={{ height: '40px', background: 'darkgray' }}>one</div>
		<div style={{ height: '40px', background: 'darkgray' }}>two</div>
		<div style={{ height: '40px', background: 'darkgray' }}>three</div>
	</RayoutList>
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
