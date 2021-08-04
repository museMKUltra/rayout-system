import React from 'react'
import styled from 'styled-components'
import theme from '../configs/theme.js'
import { space, flexbox } from 'styled-system'
import PropTypes from 'prop-types'

const horizontalAlignMapping = {
	default: '',
	left: 'start',
	center: 'center',
	right: 'end',
}

const verticalAlignMapping = {
	default: '',
	top: 'start',
	center: 'center',
	bottom: 'end',
}

const Container = styled.div`
	display: grid;
	grid-template-columns: minmax(0, auto);
	box-sizing: border-box;
	${space}
  ${flexbox}
`

function RayoutAlign({
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	horizontalAlign,
	verticalAlign,
	children,
	...rest
}) {
	return (
		<Container
			theme={theme}
			pt={paddingTop}
			pb={paddingBottom}
			pl={paddingLeft}
			pr={paddingRight}
			justifyContent={horizontalAlignMapping[horizontalAlign]}
			alignContent={verticalAlignMapping[verticalAlign]}
			{...rest}
		>
			{children}
		</Container>
	)
}

RayoutAlign.propTypes = {
	paddingTop: PropTypes.number,
	paddingBottom: PropTypes.number,
	paddingLeft: PropTypes.number,
	paddingRight: PropTypes.number,
	horizontalAlign: PropTypes.oneOf(['default', 'left', 'center', 'right']),
	verticalAlign: PropTypes.oneOf(['default', 'top', 'center', 'bottom']),
}

RayoutAlign.defaultProps = {
	paddingTop: 0,
	paddingBottom: 0,
	paddingLeft: 0,
	paddingRight: 0,
	horizontalAlign: 'default',
	verticalAlign: 'default',
}

export default RayoutAlign
