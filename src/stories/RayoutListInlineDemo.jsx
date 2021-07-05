import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { layout } from 'styled-system'
import { spaceGenerator } from '../libraries/space.js'
import RayoutListInline from '../components/RayoutListInline.jsx'

const horizontalAlignMapping = {
	default: '',
	left: 'flex-start',
	center: 'center',
	right: 'flex-end',
}

const verticalAlignMapping = {
	default: '',
	top: 'flex-start',
	center: 'center',
	bottom: 'flex-end',
}

const wrapMapping = {
	true: 'wrap',
	false: 'nowrap',
}

const Div = styled.div`
	background: darkgray;
	${layout}
`

export const RayoutListInlineDemo = ({
	base,
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	gapX,
	gapY,
	horizontalAlign,
	verticalAlign,
	wrap,
}) => {
	const space = spaceGenerator(base)

	return (
		<ThemeProvider theme={space}>
			<RayoutListInline
				bg="lightgray"
				pt={paddingTop}
				pb={paddingBottom}
				pl={paddingLeft}
				pr={paddingRight}
				gapX={space.space[gapX]}
				gapY={space.space[gapY]}
				justifyContent={horizontalAlignMapping[horizontalAlign]}
				alignItems={verticalAlignMapping[verticalAlign]}
				flexWrap={wrapMapping[wrap.toString()]}
			>
				<Div width={120} height={80}>one</Div>
				<Div width={40} height={20}>two</Div>
				<Div width={120} height={80}>three</Div>
				<Div width={50} height={30}>four</Div>
				<Div width={120} height={80}>five</Div>
				<Div width={60} height={40}>six</Div>
			</RayoutListInline>
		</ThemeProvider>
	)
}

RayoutListInlineDemo.propTypes = {
	base: PropTypes.number,
	paddingTop: PropTypes.number,
	paddingBottom: PropTypes.number,
	paddingLeft: PropTypes.number,
	paddingRight: PropTypes.number,
	gapX: PropTypes.number,
	gapY: PropTypes.number,
	horizontalAlign: PropTypes.oneOf(['default', 'left', 'center', 'right']),
	verticalAlign: PropTypes.oneOf(['default', 'top', 'center', 'bottom']),
	wrap: PropTypes.oneOf(['true', 'false']),
}

RayoutListInlineDemo.defaultProps = {
	base: 4,
	paddingTop: 0,
	paddingBottom: 0,
	paddingLeft: 0,
	paddingRight: 0,
	gapX: 0,
	gapY: 0,
	horizontalAlign: 'default',
	verticalAlign: 'default',
	wrap: 'true',
}
