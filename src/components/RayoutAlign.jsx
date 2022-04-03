import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import spaces, { multiPadding } from '../themes/spaces.js'
import aligns, { gridAlign } from '../themes/aligns.js'

const SdContainer = styled.div`
	display: grid;
	grid-template-columns: minmax(0, auto);
	box-sizing: border-box;
	${space}
	${multiPadding}
  ${gridAlign}
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
		<SdContainer
			theme={{ ...spaces, ...aligns }}
			pt={paddingTop}
			pb={paddingBottom}
			pl={paddingLeft}
			pr={paddingRight}
			horizontalAlign={horizontalAlign}
			verticalAlign={verticalAlign}
			{...rest}
		>
			{children}
		</SdContainer>
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
