import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, flexbox, space } from 'styled-system'
import theme, { space as themeSpace } from '../configs/theme.js'
import { ThemeProvider } from 'styled-components'
import { contentFillHeight } from '../libraries/css.js'

const Row = styled.div`
	display: flex;
	${flexbox}
	${color}
  ${space}
`

const Div = ({ className, children }) => (
	<div className={className}>{children}</div>
)

// https://stackoverflow.com/questions/49745637/if-statement-inside-styled-component/49745933
Row.Box = styled(Div)`
	${flexbox}
	${space}
  ${props => !props.isAligning && contentFillHeight}
`

const verticalAlignMapping = {
	default: '',
	top: 'flex-start',
	center: 'center',
	bottom: 'flex-end',
}

const alignItemsAttrs = ['flex-start', 'center', 'flex-end']

const childMap = {
	left: 'Left',
	remain: 'Remain',
	right: 'Right',
}

Object.keys(childMap).forEach(key => {
	const type = childMap[key]
	RayoutFlexRow[type] = type
})

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

	const alignItems = verticalAlignMapping[verticalAlign]
	const isAligning = alignItemsAttrs.includes(alignItems)

	const margin = remain ? themeSpace[gap] : themeSpace[gap] / 2
	const marginRight = left ? margin : 0
	const marginLeft = right ? margin : 0

	return (
		<ThemeProvider theme={theme}>
			<Row
				pt={paddingTop}
				pb={paddingBottom}
				pl={paddingLeft}
				pr={paddingRight}
				alignItems={verticalAlignMapping[verticalAlign]}
				{...rest}
			>
				<Row.Box
					isAligning={isAligning}
					flex="0 0 auto"
					mr={`${marginRight}px`}
				>
					{left}
				</Row.Box>
				<Row.Box isAligning={isAligning} flex="1 1 auto" minWidth={0}>
					{remain}
				</Row.Box>
				<Row.Box isAligning={isAligning} flex="0 0 auto" ml={`${marginLeft}px`}>
					{right}
				</Row.Box>
			</Row>
		</ThemeProvider>
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
