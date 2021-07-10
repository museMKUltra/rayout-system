import React from 'react'
import RayoutListInline from '../components/RayoutListInline.jsx'

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

const Template = args => (
	<RayoutListInline {...args} style={{ background: 'lightgray' }}>
		<div style={{ width: '120px', height: '80px', background: 'darkgray' }}>one</div>
		<div style={{ width: '40px', height: '20px', background: 'darkgray' }}>two</div>
		<div style={{ width: '120px', height: '80px', background: 'darkgray' }}>three</div>
		<div style={{ width: '50px', height: '30px', background: 'darkgray' }}>four</div>
		<div style={{ width: '120px', height: '80px', background: 'darkgray' }}>five</div>
		<div style={{ width: '60px', height: '40px', background: 'darkgray' }}>six</div>
	</RayoutListInline>
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
