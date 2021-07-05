import React from 'react'
import { RayoutListDemo } from './RayoutListDemo.jsx'


export default {
	title: 'Example/RayoutList',
	component: RayoutListDemo,
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

const Template = args => <RayoutListDemo {...args} />

export const RayoutList = Template.bind({})
RayoutList.args = {
	base: 4,
	gap: 5,
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	horizontalAlign: 'default',
}
