import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { grid, space } from 'styled-system'
import spaces from '../themes/spaces.js'
import aligns, { gridAlign } from '../themes/aligns.js'

const SdList = styled.div`
	display: grid;
	grid-template-columns: minmax(0, auto);
  ${grid}
  ${space}
  ${gridAlign}
`

const RayoutList = ({
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	gap,
	horizontalAlign,
	children,
	...rest
}) => {
	return (
		<SdList
			theme={{ ...spaces, ...aligns}}
			pt={paddingTop}
			pb={paddingBottom}
			pl={paddingLeft}
			pr={paddingRight}
			gridGap={gap}
			horizontalAlign={horizontalAlign}
			{...rest}
		>
			{children}
		</SdList>
	)
}

RayoutList.propTypes = {
	paddingTop: PropTypes.number,
	paddingBottom: PropTypes.number,
	paddingLeft: PropTypes.number,
	paddingRight: PropTypes.number,
	gap: PropTypes.number,
	horizontalAlign: PropTypes.oneOf(['default', 'left', 'center', 'right']),
}

RayoutList.defaultProps = {
	paddingTop: 0,
	paddingBottom: 0,
	paddingLeft: 0,
	paddingRight: 0,
	gap: 0,
	horizontalAlign: 'default',
}

export default RayoutList
