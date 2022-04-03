import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, flexbox } from 'styled-system'
import spaces from '../themes/spaces.js'

const SdContainer = styled.div`
	display: flex;
	box-sizing: border-box;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	${space}
`

const Wrapper = styled.div`
	display: grid;
	grid-template: 1fr / 1fr;
	flex: 1 1 auto;
	height: auto;
`

const Cell = styled.div`
	grid-row: 1 / 1;
	grid-column: 1 / 1;
	${flexbox}
`

const childMap = {
	top: 'Top',
	left: 'Left',
	right: 'Right',
	bottom: 'Bottom',
	center: 'Center',
	topLeft: 'TopLeft',
	topRight: 'TopRight',
	bottomLeft: 'BottomLeft',
	bottomRight: 'BottomRight',
}

Object.entries(childMap)
	.forEach(([_key, value]) => RayoutAbsolute[value] = value)


function RayoutAbsolute({
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	children,
	...rest
}) {
	const childList = React.Children.toArray(children)
	const findChild = type =>
		childList.find(child => child.type === type)?.props.children

	const top = findChild(childMap.top)
	const left = findChild(childMap.left)
	const right = findChild(childMap.right)
	const bottom = findChild(childMap.bottom)
	const center = findChild(childMap.center)
	const topLeft = findChild(childMap.topLeft)
	const topRight = findChild(childMap.topRight)
	const bottomLeft = findChild(childMap.bottomLeft)
	const bottomRight = findChild(childMap.bottomRight)

	return (
		<SdContainer
			theme={spaces}
			pt={paddingTop}
			pb={paddingBottom}
			pl={paddingLeft}
			pr={paddingRight}
			{...rest}
		>
			<Wrapper>
				<Cell justifySelf={'center'} alignSelf={'start'}>
					{top}
				</Cell>
				<Cell justifySelf={'start'} alignSelf={'center'}>
					{left}
				</Cell>
				<Cell justifySelf={'end'} alignSelf={'center'}>
					{right}
				</Cell>
				<Cell justifySelf={'center'} alignSelf={'end'}>
					{bottom}
				</Cell>
				<Cell justifySelf={'start'} alignSelf={'start'}>
					{topLeft}
				</Cell>
				<Cell justifySelf={'center'} alignSelf={'center'}>
					{center}
				</Cell>
				<Cell justifySelf={'end'} alignSelf={'start'}>
					{topRight}
				</Cell>
				<Cell justifySelf={'start'} alignSelf={'end'}>
					{bottomLeft}
				</Cell>
				<Cell justifySelf={'end'} alignSelf={'end'}>
					{bottomRight}
				</Cell>
			</Wrapper>
		</SdContainer>
	)
}

RayoutAbsolute.propTypes = {
	paddingTop: PropTypes.number,
	paddingBottom: PropTypes.number,
	paddingLeft: PropTypes.number,
	paddingRight: PropTypes.number,
}

RayoutAbsolute.defaultProps = {
	paddingTop: 0,
	paddingBottom: 0,
	paddingLeft: 0,
	paddingRight: 0,
}

export default RayoutAbsolute
