import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, flexbox, layout, space } from 'styled-system'
import { contentFillHeight } from '../libraries/css.js'
import theme, { space as themeSpace } from '../configs/theme.js'
import { ThemeProvider } from 'styled-components'

const Column = styled.div`
	display: flex;
	flex-direction: column;
	${layout}
	${flexbox}
  ${color}
  ${space}
`

const Div = ({ className, children }) => (
	<div className={className}>{children}</div>
)

Column.Box = styled(Div)`
	${flexbox}
	${space}
  ${() => contentFillHeight}
`

const horizontalAlignMapping = {
	default: '',
	left: 'flex-start',
	center: 'center',
	right: 'flex-end',
}

const childMap = {
	top: 'Top',
	remain: 'Remain',
	bottom: 'Bottom',
}

Object.keys(childMap).forEach(key => {
	const type = childMap[key]
	RayoutFlexColumn[type] = type
})

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

	const margin = remain ? themeSpace[gap] : themeSpace[gap] / 2
	const marginBottom = top ? margin : 0
	const marginTop = bottom ? margin : 0

	return (
		<ThemeProvider theme={theme}>
			<Column
				pt={paddingTop}
				pb={paddingBottom}
				pl={paddingLeft}
				pr={paddingRight}
				alignItems={horizontalAlignMapping[horizontalAlign]}
				{...rest}
			>
				<Column.Box flex="0 0 auto" mb={`${marginBottom}px`}>
					{top}
				</Column.Box>
				<Column.Box flex="1 1 auto" minHeight={0}>
					{remain}
				</Column.Box>
				<Column.Box flex="0 0 auto" mt={`${marginTop}px`}>
					{bottom}
				</Column.Box>
			</Column>
		</ThemeProvider>
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
