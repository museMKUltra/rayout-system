import React from 'react'
import RayoutAbsolute from '../components/RayoutAbsolute.jsx'

export default {
	title: 'Example/RayoutAbsolute',
	component: RayoutAbsolute,
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
	<div
		style={{ position: 'relative', width: '600px', height: '400px', background: 'lightgray' }}
	>
		<RayoutAbsolute {...args}>
			<RayoutAbsolute.Top>
				<div style={{ width: '120px', height: '80px', background: 'darkgray' }}>
					top
				</div>
			</RayoutAbsolute.Top>
			<RayoutAbsolute.Left>
				<div style={{ width: '120px', height: '80px', background: 'darkgray' }}>
					left
				</div>
			</RayoutAbsolute.Left>
			<RayoutAbsolute.Right>
				<div style={{ width: '120px', height: '80px', background: 'darkgray' }}>
					right
				</div>
			</RayoutAbsolute.Right>
			<RayoutAbsolute.Bottom>
				<div style={{ width: '120px', height: '80px', background: 'darkgray' }}>
					bottom
				</div>
			</RayoutAbsolute.Bottom>
			<RayoutAbsolute.Center>
				<div style={{ width: '120px', height: '80px', background: 'darkgray' }}>
					center
				</div>
			</RayoutAbsolute.Center>
			<RayoutAbsolute.TopLeft>
				<div style={{ width: '120px', height: '80px', background: 'darkgray' }}>
					topLeft
				</div>
			</RayoutAbsolute.TopLeft>
			<RayoutAbsolute.TopRight>
				<div style={{ width: '120px', height: '80px', background: 'darkgray' }}>
					topRight
				</div>
			</RayoutAbsolute.TopRight>
			<RayoutAbsolute.BottomLeft>
				<div style={{ width: '120px', height: '80px', background: 'darkgray' }}>
					bottomLeft
				</div>
			</RayoutAbsolute.BottomLeft>
			<RayoutAbsolute.BottomRight>
				<div style={{ width: '120px', height: '80px', background: 'darkgray' }}>
					bottomRight
				</div>
			</RayoutAbsolute.BottomRight>
		</RayoutAbsolute>
	</div>
)

export const NineElements = Template.bind({})
NineElements.args = {
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
}
