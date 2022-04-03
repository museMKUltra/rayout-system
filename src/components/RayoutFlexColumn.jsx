import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, layout, flexbox } from 'styled-system'
import spaces from '../themes/spaces.js'
import aligns, { flexColumnAlign } from '../themes/aligns.js'
import { contentFillHeight } from '../libraries/css.js'

const SdColumn = styled.div`
	display: flex;
	flex-direction: column;
	${space}
	${flexColumnAlign}
`

const Div = ({ className, children }) => (
	<div className={className}>{children}</div>
)

SdColumn.Box = styled(Div)`
	${space}
	${layout}
  ${flexbox}
  ${props => props.isRemain && contentFillHeight}
`

const childMap = {
	top: 'Top',
	remain: 'Remain',
	bottom: 'Bottom',
}

Object.entries(childMap)
	.forEach(([_key, value]) => RayoutFlexColumn[value] = value)

function RayoutFlexColumn({
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	gap,
	horizontalAlign,
	children,
	...rest
}) {
	const childList = React.Children.toArray(children)
	const findChild = type =>
		childList.find(child => child.type === type)?.props.children

	const top = findChild(childMap.top)
	const remain = findChild(childMap.remain)
	const bottom = findChild(childMap.bottom)

	const margin = remain ? spaces.space[gap] : spaces.space[gap] / 2
	const marginBottom = top ? margin : 0
	const marginTop = bottom ? margin : 0

	return (
		<SdColumn
			theme={{ ...spaces, ...aligns }}
			pt={paddingTop}
			pb={paddingBottom}
			pl={paddingLeft}
			pr={paddingRight}
			horizontalAlign={horizontalAlign}
			{...rest}
		>
			<SdColumn.Box flex="0 0 auto" mb={`${marginBottom}px`}>
				{top}
			</SdColumn.Box>
			<SdColumn.Box flex="1 1 auto" minHeight={0} isRemain>
				{remain}
			</SdColumn.Box>
			<SdColumn.Box flex="0 0 auto" mt={`${marginTop}px`}>
				{bottom}
			</SdColumn.Box>
		</SdColumn>
	)
}

RayoutFlexColumn.propTypes = {
	paddingTop: PropTypes.number,
	paddingBottom: PropTypes.number,
	paddingLeft: PropTypes.number,
	paddingRight: PropTypes.number,
	gap: PropTypes.number,
	horizontalAlign: PropTypes.oneOf(['default', 'left', 'center', 'right']),
}

RayoutFlexColumn.defaultProps = {
	paddingTop: 0,
	paddingBottom: 0,
	paddingLeft: 0,
	paddingRight: 0,
	gap: 0,
	horizontalAlign: 'default',
}

export default RayoutFlexColumn
