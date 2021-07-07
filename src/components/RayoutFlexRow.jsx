import React from 'react'
import styled from 'styled-components'
import { flexbox, space } from 'styled-system'

const Row = styled.div`
	display: flex;
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
	return isDefault ? 'content-fill-height' : ''
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
	const findChild = type => children.find(child => child.type === type)

	const left = findChild(childMap.left)
	const remain = findChild(childMap.remain)
	const right = findChild(childMap.right)

	const className = getClassName(alignItems)
	const margin = remain ? gap : gap / 2

	return (
		<Row>
			{left && (
				<Row.Box className={className} flex="0 0 auto" mr={`${margin}px`}>
					{left.props.children}
				</Row.Box>
			)}
			{remain && (
				<Row.Box className={className} flex="1 1 auto" minWidth={0}>
					{remain.props.children}
				</Row.Box>
			)}
			{right && (
				<Row.Box className={className} flex="0 0 auto" ml={`${margin}px`}>
					{right.props.children}
				</Row.Box>
			)}
		</Row>
	)
}

export default RayoutFlexRow
