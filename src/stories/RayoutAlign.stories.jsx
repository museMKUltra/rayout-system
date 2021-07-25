import React from 'react'
import RayoutAlign from '../components/RayoutAlign.jsx'

export default {
	title: 'Example/RayoutAlign',
	component: RayoutAlign,
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
	},
}

const Template = args => (
	<RayoutAlign
		{...args}
		style={{ width: '600px', height: '400px', background: 'lightgray' }}
	>
		<div style={{ height: '80px', background: 'darkgray' }}>align</div>
	</RayoutAlign>
)

export const OneElement = Template.bind({})
OneElement.args = {
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	horizontalAlign: 'default',
	verticalAlign: 'default',
}
