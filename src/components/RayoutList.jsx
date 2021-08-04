import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, layout, flexbox, grid, space } from 'styled-system'
import theme from '../configs/theme.js'

const List = styled.div`
	display: grid;
	gridtemplatecolumns: minmax(0, auto);
	${color}
	${layout}
  ${flexbox}
  ${grid}
  ${space}
`

const horizontalAlignMapping = {
	default: '',
	left: 'start',
	center: 'center',
	right: 'end',
}

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
		<List
			theme={theme}
			pt={paddingTop}
			pb={paddingBottom}
			pl={paddingLeft}
			pr={paddingRight}
			gridGap={gap}
			justifyItems={horizontalAlignMapping[horizontalAlign]}
			{...rest}
		>
			{children}
		</List>
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
