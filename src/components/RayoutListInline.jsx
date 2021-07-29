import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { layout, flexbox, space } from 'styled-system'
import { spaceGenerator } from '../libraries/space.js'
import { ThemeProvider } from 'styled-components'

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

const List = styled.div`
	display: inline-block;
	${space}
`

List.Wrapper = styled.div`
	display: inline-flex;
	vertical-align: top;
	${layout}
	${flexbox}
  ${space}
`

List.Item = styled.div`
	${space}
`

// https://www.geeksforgeeks.org/how-to-use-react-cloneelement-function/
function RayoutListInline({
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
	children,
	...rest
}) {
	const theme = spaceGenerator(base)
	const spaceMultiplier = times => number => times * theme.space[number]
	const positiveMargin = spaceMultiplier(0.5)
	const negativeMargin = spaceMultiplier(-0.5)

	return (
		<ThemeProvider theme={theme}>
			<List
				pt={paddingTop}
				pb={paddingBottom}
				pl={paddingLeft}
				pr={paddingRight}
				{...rest}
			>
				<List.Wrapper
					justifyContent={horizontalAlignMapping[horizontalAlign]}
					alignItems={verticalAlignMapping[verticalAlign]}
					flexWrap={wrapMapping[wrap.toString()]}
					mx={`${negativeMargin(gapX)}px`}
					my={`${negativeMargin(gapY)}px`}
				>
					{React.Children.map(children, child => (
						<List.Item
							mx={`${positiveMargin(gapX)}px`}
							my={`${positiveMargin(gapY)}px`}
						>
							{React.cloneElement(child)}
						</List.Item>
					))}
				</List.Wrapper>
			</List>
		</ThemeProvider>
	)
}

RayoutListInline.propTypes = {
	base: PropTypes.number,
	paddingTop: PropTypes.number,
	paddingBottom: PropTypes.number,
	paddingLeft: PropTypes.number,
	paddingRight: PropTypes.number,
	gapX: PropTypes.number,
	gapY: PropTypes.number,
	horizontalAlign: PropTypes.oneOf(['default', 'left', 'center', 'right']),
	verticalAlign: PropTypes.oneOf(['default', 'top', 'center', 'bottom']),
	wrap: PropTypes.bool,
}

RayoutListInline.defaultProps = {
	base: 4,
	paddingTop: 0,
	paddingBottom: 0,
	paddingLeft: 0,
	paddingRight: 0,
	gapX: 0,
	gapY: 0,
	horizontalAlign: 'default',
	verticalAlign: 'default',
	wrap: true,
}

export default RayoutListInline
