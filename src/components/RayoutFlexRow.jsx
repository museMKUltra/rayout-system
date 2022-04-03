import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, layout, flexbox } from 'styled-system'
import spaces from '../themes/spaces.js'
import aligns, { flexRowAlign } from '../themes/aligns.js'
import { contentFillHeight } from '../libraries/css.js'

const SdRow = styled.div`
	display: flex;
	${space}
	${flexRowAlign}
`

const Div = ({ className, children }) => (
	<div className={className}>{children}</div>
)

// https://stackoverflow.com/questions/49745637/if-statement-inside-styled-component/49745933
SdRow.Box = styled(Div)`
	${space}
	${layout}
  ${flexbox}
  ${props => props.isAligning || contentFillHeight}
`

const aligningProps = ['top', 'center', 'bottom']

const childMap = {
	left: 'Left',
	remain: 'Remain',
	right: 'Right',
}

Object.entries(childMap)
	.forEach(([_key, value]) => RayoutFlexRow[value] = value)


// https://medium.com/@srph/react-imitating-vue-slots-eab8393f96fd
function RayoutFlexRow({
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	gap,
	verticalAlign,
	children,
	...rest
}) {
	const childList = React.Children.toArray(children)
	const findChild = type =>
		childList.find(child => child.type === type)?.props.children

	const left = findChild(childMap.left)
	const remain = findChild(childMap.remain)
	const right = findChild(childMap.right)

	const isAligning = aligningProps.includes(verticalAlign)

	const margin = remain ? spaces.space[gap] : spaces.space[gap] / 2
	const marginRight = left ? margin : 0
	const marginLeft = right ? margin : 0

	return (
		<SdRow
			theme={{ ...spaces, ...aligns }}
			pt={paddingTop}
			pb={paddingBottom}
			pl={paddingLeft}
			pr={paddingRight}
			verticalAlign={verticalAlign}
			{...rest}
		>
			<SdRow.Box
				isAligning={isAligning}
				flex="0 0 auto"
				mr={`${marginRight}px`}
			>
				{left}
			</SdRow.Box>
			<SdRow.Box isAligning={isAligning} flex="1 1 auto" minWidth={0}>
				{remain}
			</SdRow.Box>
			<SdRow.Box isAligning={isAligning} flex="0 0 auto" ml={`${marginLeft}px`}>
				{right}
			</SdRow.Box>
		</SdRow>
	)
}

RayoutFlexRow.propTypes = {
	paddingTop: PropTypes.number,
	paddingBottom: PropTypes.number,
	paddingLeft: PropTypes.number,
	paddingRight: PropTypes.number,
	gap: PropTypes.number,
	verticalAlign: PropTypes.oneOf(['default', 'top', 'center', 'bottom']),
}

RayoutFlexRow.defaultProps = {
	paddingTop: 0,
	paddingBottom: 0,
	paddingLeft: 0,
	paddingRight: 0,
	gap: 0,
	verticalAlign: 'default',
}

export default RayoutFlexRow
