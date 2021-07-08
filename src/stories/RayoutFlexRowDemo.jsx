import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { layout } from 'styled-system'
import { spaceGenerator } from '../libraries/space.js'
import RayoutFlexRow from '../components/RayoutFlexRow.jsx'

const verticalAlignMapping = {
	default: '',
	top: 'flex-start',
	center: 'center',
	bottom: 'flex-end',
}

const Div = styled.div`
	background: darkgray;
	${layout}
`

export const RayoutFlexRowDemo = ({
	base,
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	gap,
	verticalAlign,
	doesLeftShow,
	doesRemainShow,
	doesRightShow,
}) => {
	const space = spaceGenerator(base)

	return (
		<ThemeProvider theme={space}>
			<RayoutFlexRow
				bg="lightgray"
				pt={paddingTop}
				pb={paddingBottom}
				pl={paddingLeft}
				pr={paddingRight}
				gap={space.space[gap]}
				alignItems={verticalAlignMapping[verticalAlign]}
			>
				{doesLeftShow && (
					<RayoutFlexRow.Left>
						<Div width={100} height={40}>
							left
						</Div>
					</RayoutFlexRow.Left>
				)}
				{doesRemainShow && (
					<RayoutFlexRow.Remain>
						<Div height={20}>remain</Div>
					</RayoutFlexRow.Remain>
				)}
				{doesRightShow && (
					<RayoutFlexRow.Right>
						<Div width={100} height={60}>
							right
						</Div>
					</RayoutFlexRow.Right>
				)}
			</RayoutFlexRow>
		</ThemeProvider>
	)
}

RayoutFlexRowDemo.propTypes = {
	base: PropTypes.number,
	paddingTop: PropTypes.number,
	paddingBottom: PropTypes.number,
	paddingLeft: PropTypes.number,
	paddingRight: PropTypes.number,
	gap: PropTypes.number,
	verticalAlign: PropTypes.oneOf(['default', 'top', 'center', 'bottom']),
	doesLeftShow: PropTypes.bool,
	doesRemainShow: PropTypes.bool,
	doesRightShow: PropTypes.bool,
}

RayoutFlexRowDemo.defaultProps = {
	base: 4,
	paddingTop: 0,
	paddingBottom: 0,
	paddingLeft: 0,
	paddingRight: 0,
	gap: 0,
	verticalAlign: 'default',
	doesLeftShow: true,
	doesRemainShow: true,
	doesRightShow: true,
}
