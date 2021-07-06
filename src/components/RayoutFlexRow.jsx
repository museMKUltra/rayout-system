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

// https://medium.com/@srph/react-imitating-vue-slots-eab8393f96fd
function RayoutFlexRow(props) {
	const validAlignItemsAttrs = ['flex-start', 'center', 'flex-end']
	const isDefault = !validAlignItemsAttrs.includes(props.alignItems)
	const className = isDefault && 'content-fill-height'

	const { children } = props
	const left = children.find(child => child.type === 'Left')
	const remain = children.find(child => child.type === 'Remain')
	const right = children.find(child => child.type === 'Right')

	const gap = 10
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

RayoutFlexRow.Left = 'Left'
RayoutFlexRow.Remain = 'Remain'
RayoutFlexRow.Right = 'Right'

export default RayoutFlexRow
