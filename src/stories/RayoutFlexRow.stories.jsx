import React from 'react'
import RayoutFlexRow from '../components/RayoutFlexRow.jsx'

export default {
	title: 'Example/RayoutFlexRow',
	component: RayoutFlexRow,
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
	<RayoutFlexRow {...args} style={{ background: 'lightgray', width: '600px' }}>
		<RayoutFlexRow.Left>
			<div style={{ background: 'darkgray', width: '100px', height: '40px' }}>
				left
			</div>
		</RayoutFlexRow.Left>
		<RayoutFlexRow.Remain>
			<div style={{ background: 'darkgray' }}>remain</div>
		</RayoutFlexRow.Remain>
		<RayoutFlexRow.Right>
			<div style={{ background: 'darkgray', width: '100px', height: '60px' }}>
				right
			</div>
		</RayoutFlexRow.Right>
	</RayoutFlexRow>
)

export const LeftRemainRight = Template.bind({})
LeftRemainRight.args = {
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gap: 5,
	verticalAlign: 'default',
}

const TemplateLeftRemain = args => (
	<RayoutFlexRow {...args} style={{ background: 'lightgray', width: '600px' }}>
		<RayoutFlexRow.Left>
			<div style={{ background: 'darkgray', width: '100px', height: '40px' }}>
				left
			</div>
		</RayoutFlexRow.Left>
		<RayoutFlexRow.Remain>
			<div style={{ background: 'darkgray' }}>remain</div>
		</RayoutFlexRow.Remain>
	</RayoutFlexRow>
)

export const LeftRemain = TemplateLeftRemain.bind({})
LeftRemain.args = {
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gap: 5,
	verticalAlign: 'default',
}

const TemplateRemainRight = args => (
	<RayoutFlexRow {...args} style={{ background: 'lightgray', width: '600px' }}>
		<RayoutFlexRow.Remain>
			<div style={{ background: 'darkgray' }}>remain</div>
		</RayoutFlexRow.Remain>
		<RayoutFlexRow.Right>
			<div style={{ background: 'darkgray', width: '100px', height: '60px' }}>
				right
			</div>
		</RayoutFlexRow.Right>
	</RayoutFlexRow>
)

export const RemainRight = TemplateRemainRight.bind({})
RemainRight.args = {
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gap: 5,
	verticalAlign: 'default',
}

const TemplateLeftRight = args => (
	<RayoutFlexRow {...args} style={{ background: 'lightgray', width: '600px' }}>
		<RayoutFlexRow.Left>
			<div style={{ background: 'darkgray', width: '100px', height: '40px' }}>
				left
			</div>
		</RayoutFlexRow.Left>
		<RayoutFlexRow.Right>
			<div style={{ background: 'darkgray', width: '100px', height: '60px' }}>
				right
			</div>
		</RayoutFlexRow.Right>
	</RayoutFlexRow>
)

export const LeftRight = TemplateLeftRight.bind({})
LeftRight.args = {
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gap: 5,
	verticalAlign: 'default',
}
