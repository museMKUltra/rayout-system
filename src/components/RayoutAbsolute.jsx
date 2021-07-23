import React from 'react'
import styled from 'styled-components'
import theme from '../configs/theme.js'
import { ThemeProvider } from 'styled-components'
import { space, flexbox } from 'styled-system'
import PropTypes from 'prop-types'

const Container = styled.div`
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

Object.keys(childMap).forEach(key => {
	const type = childMap[key]
	RayoutAbsolute[type] = type
})

function RayoutAbsolute({
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	children,
	...rest
}) {
	console.log(children)
	const findChildren = type =>
		children.find(child => child.type === type)?.props.children

	const top = findChildren(childMap.top)
	const left = findChildren(childMap.left)
	const right = findChildren(childMap.right)
	const bottom = findChildren(childMap.bottom)
	const center = findChildren(childMap.center)
	const topLeft = findChildren(childMap.topLeft)
	const topRight = findChildren(childMap.topRight)
	const bottomLeft = findChildren(childMap.bottomLeft)
	const bottomRight = findChildren(childMap.bottomRight)

	return (
		<ThemeProvider theme={theme}>
			<Container
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
			</Container>
		</ThemeProvider>
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
