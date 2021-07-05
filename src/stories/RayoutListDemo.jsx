import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { spaceGenerator } from '../libraries/space.js'
import RayoutList from '../components/RayoutList.jsx'

const horizontalAlignMapping = {
	default: '',
	left: 'start',
	center: 'center',
	right: 'end',
}

const Div = styled.div`
	height: 40px;
	background: darkgray;
`

export const RayoutListDemo = ({
	base,
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	gap,
	horizontalAlign,
}) => {
	const space = spaceGenerator(base)

	return (
		<ThemeProvider theme={space}>
			<RayoutList
				bg="lightgray"
				gridGap={gap}
				pt={paddingTop}
				pb={paddingBottom}
				pl={paddingLeft}
				pr={paddingRight}
				justifyItems={horizontalAlignMapping[horizontalAlign]}
			>
				<Div>one</Div>
				<Div>two</Div>
				<Div>three</Div>
			</RayoutList>
		</ThemeProvider>
	)
}

RayoutListDemo.propTypes = {
	base: PropTypes.number,
	paddingTop: PropTypes.number,
	paddingBottom: PropTypes.number,
	paddingLeft: PropTypes.number,
	paddingRight: PropTypes.number,
	gap: PropTypes.number,
	horizontalAlign: PropTypes.oneOf(['default', 'left', 'center', 'right']),
}

RayoutListDemo.defaultProps = {
	base: 4,
	gap: 0,
	paddingTop: 0,
	paddingBottom: 0,
	paddingLeft: 0,
	paddingRight: 0,
	horizontalAlign: 'default',
}
