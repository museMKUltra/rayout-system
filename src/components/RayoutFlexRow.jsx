import React from 'react'
import styled from 'styled-components'
import { color, flexbox, space } from 'styled-system'

const Row = styled.div`
	display: flex;
	${flexbox}
	${color}
  ${space}
`

const Div = ({ className, children }) => (
	<div className={className}>{children}</div>
)

Row.Box = styled(Div)`
	${flexbox}
	${space}
`

const getClassName = alignItems => {
	const validAttrs = ['flex-start', 'center', 'flex-end']
	const isDefault = !validAttrs.includes(alignItems)
	return isDefault ? 'content-fill-height' : null
}

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
function RayoutFlexRow(props) {
	const { children, alignItems, gap } = props
	const findChildren = type =>
		children.find(child => child.type === type)?.props.children

	const left = findChildren(childMap.left)
	const remain = findChildren(childMap.remain)
	const right = findChildren(childMap.right)

	const className = getClassName(alignItems)
	const margin = remain ? gap : gap / 2
	const marginRight = left ? margin : 0
	const marginLeft = right ? margin : 0

	return (
		<Row {...props}>
			<Row.Box className={className} flex="0 0 auto" mr={`${marginRight}px`}>
				{left}
			</Row.Box>
			<Row.Box className={className} flex="1 1 auto" minWidth={0}>
				{remain}
			</Row.Box>
			<Row.Box className={className} flex="0 0 auto" ml={`${marginLeft}px`}>
				{right}
			</Row.Box>
		</Row>
	)
}

export default RayoutFlexRow
