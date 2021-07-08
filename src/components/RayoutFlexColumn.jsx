import React from 'react'
import styled from 'styled-components'
import { color, flexbox, layout, space } from 'styled-system'
import { contentFillHeight } from '../libraries/css.js'

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

const childMap = {
	top: 'Top',
	remain: 'Remain',
	bottom: 'Bottom',
}

Object.keys(childMap).forEach(key => {
	const type = childMap[key]
	RayoutFlexColumn[type] = type
})

function RayoutFlexColumn(props) {
	const { children, gap } = props
	const findChildren = type =>
		children.find(child => child.type === type)?.props.children

	const top = findChildren(childMap.top)
	const remain = findChildren(childMap.remain)
	const bottom = findChildren(childMap.bottom)

	const margin = remain ? gap : gap / 2
	const marginBottom = top ? margin : 0
	const marginTop = bottom ? margin : 0

	return (
		<Column {...props}>
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
	)
}

export default RayoutFlexColumn
