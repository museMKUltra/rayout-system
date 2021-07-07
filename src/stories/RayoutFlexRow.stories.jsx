import React from 'react'
import '../App.css'
import { RayoutFlexRowDemo } from './RayoutFlexRowDemo.jsx'

export default {
	title: 'Example/RayoutFlexRow',
	component: RayoutFlexRowDemo,
	argTypes: {
		base: {
			control: { type: 'range', min: 2, max: 6, step: 2 },
		},
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

const Template = args => <RayoutFlexRowDemo {...args} />

export const RayoutFlexRow = Template.bind({})
RayoutFlexRow.args = {
	base: 4,
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gap: 5,
	verticalAlign: 'default',
}
