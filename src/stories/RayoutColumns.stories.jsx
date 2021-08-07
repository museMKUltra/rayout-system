import React from 'react'
import RayoutColumns from '../components/RayoutColumns.jsx'

export default {
	title: 'Example/RayoutColumns',
	component: RayoutColumns,
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
		contentMinWidth: {
			control: { type: 'range', min: 0, max: 400, step: 50 },
		},
		columnCount: {
			control: { type: 'range', min: 0, max: 12, step: 1 },
		},
	},
}

const Template = args => (
	<RayoutColumns {...args} style={{ background: 'lightgray' }}>
		<div style={{ height: '40px', background: 'darkgray' }}>1</div>
		<div style={{ background: 'darkgray' }}>2</div>
		<div style={{ height: '40px', background: 'darkgray' }}>3</div>
		<div style={{ background: 'darkgray' }}>4</div>
		<div style={{ height: '40px', background: 'darkgray' }}>5</div>
		<div style={{ background: 'darkgray' }}>6</div>
		<div style={{ height: '40px', background: 'darkgray' }}>7</div>
		<div style={{ background: 'darkgray' }}>8</div>
		<div style={{ height: '40px', background: 'darkgray' }}>9</div>
		<div style={{ background: 'darkgray' }}>10</div>
		<div style={{ height: '40px', background: 'darkgray' }}>11</div>
		<div style={{ background: 'darkgray' }}>12</div>
		<div style={{ height: '40px', background: 'darkgray' }}>13</div>
		<div style={{ background: 'darkgray' }}>14</div>
		<div style={{ height: '40px', background: 'darkgray' }}>15</div>
		<div style={{ background: 'darkgray' }}>16</div>
		<div style={{ height: '40px', background: 'darkgray' }}>17</div>
		<div style={{ background: 'darkgray' }}>18</div>
		<div style={{ height: '40px', background: 'darkgray' }}>19</div>
		<div style={{ background: 'darkgray' }}>20</div>
	</RayoutColumns>
)

export const TwentyElements = Template.bind({})
TwentyElements.args = {
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 5,
	paddingRight: 5,
	gapX: 5,
	gapY: 5,
	contentMinWidth: 0,
	columnCount: 6,
	flowDirection: 'row',
	verticalAlign: 'default',
}
