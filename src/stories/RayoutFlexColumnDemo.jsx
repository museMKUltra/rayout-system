import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { layout } from 'styled-system'
import { spaceGenerator } from '../libraries/space.js'
import RayoutFlexColumn from '../components/RayoutFlexColumn.jsx'

const horizontalAlignMapping = {
	default: '',
	left: 'flex-start',
	center: 'center',
	right: 'flex-end',
}

const Div = styled.div`
	background: darkgray;
	${layout}
`

export const RayoutFlexColumnDemo = ({
	base,
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	gap,
	horizontalAlign,
	isTopVisible,
	isRemainVisible,
	isBottomVisible,
}) => {
	const space = spaceGenerator(base)

	return (
		<ThemeProvider theme={space}>
			<RayoutFlexColumn
				bg="lightgray"
				pt={paddingTop}
				pb={paddingBottom}
				pl={paddingLeft}
				pr={paddingRight}
				gap={space.space[gap]}
				alignItems={horizontalAlignMapping[horizontalAlign]}
				width={160}
				height={400}
			>
				{isTopVisible && (
					<RayoutFlexColumn.Top>
						<Div width={80} height={40}>top</Div>
					</RayoutFlexColumn.Top>
				)}
				{isRemainVisible && (
					<RayoutFlexColumn.Remain>
						<Div>remain</Div>
					</RayoutFlexColumn.Remain>
				)}
				{isBottomVisible && (
					<RayoutFlexColumn.Bottom>
						<Div width={120} height={40}>bottom</Div>
					</RayoutFlexColumn.Bottom>
				)}
			</RayoutFlexColumn>
		</ThemeProvider>
	)
}

RayoutFlexColumnDemo.propTypes = {
	base: PropTypes.number,
	paddingTop: PropTypes.number,
	paddingBottom: PropTypes.number,
	paddingLeft: PropTypes.number,
	paddingRight: PropTypes.number,
	gap: PropTypes.number,
	horizontalAlign: PropTypes.oneOf(['default', 'left', 'center', 'right']),
	isTopVisible: PropTypes.bool,
	isRemainVisible: PropTypes.bool,
	isBottomVisible: PropTypes.bool,
}

RayoutFlexColumnDemo.defaultProps = {
	base: 4,
	paddingTop: 0,
	paddingBottom: 0,
	paddingLeft: 0,
	paddingRight: 0,
	gap: 0,
	horizontalAlign: 'default',
	isTopVisible: true,
	isRemainVisible: true,
	isBottomVisible: true,
}
