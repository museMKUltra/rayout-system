import React from 'react'
import { RayoutFlexColumnDemo } from './RayoutFlexColumnDemo.jsx'

export default {
	title: 'Example/RayoutFlexColumn',
	component: RayoutFlexColumnDemo,
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

const Template = args => <RayoutFlexColumnDemo {...args} />

export const TopRemainBottom = Template.bind({})

TopRemainBottom.args = {
	base: 4,
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gap: 5,
	horizontalAlign: 'default',
}

export const TopRemain = Template.bind({})

TopRemain.args = {
	base: 4,
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gap: 5,
	horizontalAlign: 'default',
	isBottomVisible: false,
}

export const RemainBottom = Template.bind({})

RemainBottom.args = {
	base: 4,
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gap: 5,
	horizontalAlign: 'default',
	isTopVisible: false,
}

export const TopBottom = Template.bind({})

TopBottom.args = {
	base: 4,
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gap: 5,
	horizontalAlign: 'default',
	isRemainVisible: false,
}
