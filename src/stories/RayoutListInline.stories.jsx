import React from 'react'
import { RayoutListInlineDemo } from './RayoutListInlineDemo.jsx'

export default {
	title: 'Example/RayoutListInline',
	component: RayoutListInlineDemo,
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
		gapX: {
			control: { type: 'range', min: 0, max: 10, step: 1 },
		},
		gapY: {
			control: { type: 'range', min: 0, max: 10, step: 1 },
		},
	},
}

const Template = args => <RayoutListInlineDemo {...args} />

export const RayoutListInline = Template.bind({})
RayoutListInline.args = {
	base: 4,
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gapX: 5,
	gapY: 5,
	horizontalAlign: 'default',
	verticalAlign: 'default',
	wrap: 'true',
}
