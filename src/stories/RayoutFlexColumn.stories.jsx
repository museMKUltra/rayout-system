import React from 'react'
import RayoutFlexColumn from '../components/RayoutFlexColumn.jsx'

export default {
	title: 'Example/RayoutFlexColumn',
	component: RayoutFlexColumn,
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
	<RayoutFlexColumn
		{...args}
		style={{ width: '160px', height: '400px', background: 'lightgray' }}
	>
		<RayoutFlexColumn.Top>
			<div style={{ width: '80px', height: '40px', background: 'darkgray' }}>
				top
			</div>
		</RayoutFlexColumn.Top>
		<RayoutFlexColumn.Remain>
			<div style={{ background: 'darkgray' }}>remain</div>
		</RayoutFlexColumn.Remain>
		<RayoutFlexColumn.Bottom>
			<div style={{ width: '120px', height: '60px', background: 'darkgray' }}>
				bottom
			</div>
		</RayoutFlexColumn.Bottom>
	</RayoutFlexColumn>
)

export const TopRemainBottom = Template.bind({})
TopRemainBottom.args = {
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gap: 5,
	horizontalAlign: 'default',
}

const TemplateTopRemain = args => (
	<RayoutFlexColumn
		{...args}
		style={{ width: '160px', height: '400px', background: 'lightgray' }}
	>
		<RayoutFlexColumn.Top>
			<div style={{ width: '80px', height: '40px', background: 'darkgray' }}>
				top
			</div>
		</RayoutFlexColumn.Top>
		<RayoutFlexColumn.Remain>
			<div style={{ background: 'darkgray' }}>remain</div>
		</RayoutFlexColumn.Remain>
	</RayoutFlexColumn>
)

export const TopRemain = TemplateTopRemain.bind({})
TopRemain.args = {
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gap: 5,
	horizontalAlign: 'default',
}

const TemplateRemainBottom = args => (
	<RayoutFlexColumn
		{...args}
		style={{ width: '160px', height: '400px', background: 'lightgray' }}
	>
		<RayoutFlexColumn.Remain>
			<div style={{ background: 'darkgray' }}>remain</div>
		</RayoutFlexColumn.Remain>
		<RayoutFlexColumn.Bottom>
			<div style={{ width: '120px', height: '60px', background: 'darkgray' }}>
				bottom
			</div>
		</RayoutFlexColumn.Bottom>
	</RayoutFlexColumn>
)

export const RemainBottom = TemplateRemainBottom.bind({})
RemainBottom.args = {
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gap: 5,
	horizontalAlign: 'default',
}

const TemplateTopBottom = args => (
	<RayoutFlexColumn
		{...args}
		style={{ width: '160px', height: '400px', background: 'lightgray' }}
	>
		<RayoutFlexColumn.Top>
			<div style={{ width: '80px', height: '40px', background: 'darkgray' }}>
				top
			</div>
		</RayoutFlexColumn.Top>
		<RayoutFlexColumn.Bottom>
			<div style={{ width: '120px', height: '60px', background: 'darkgray' }}>
				bottom
			</div>
		</RayoutFlexColumn.Bottom>
	</RayoutFlexColumn>
)

export const TopBottom = TemplateTopBottom.bind({})
TopBottom.args = {
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gap: 5,
	horizontalAlign: 'default',
}
