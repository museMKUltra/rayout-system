import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { layout, flexbox, space } from 'styled-system'
import { spaceGenerator } from '../themes/spaces.js'
import aligns, { flexRowAlign } from '../themes/aligns.js'

const wrapMapping = {
	true: 'wrap',
	false: 'nowrap',
}

const SdList = styled.div`
	display: inline-block;
	${space}
`

SdList.Wrapper = styled.div`
	display: inline-flex;
	vertical-align: top;
  ${space}
	${layout}
	${flexbox}
  ${flexRowAlign}
`

SdList.Item = styled.div`
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
	const spaces = spaceGenerator(base)
	const spaceMultiplier = times => number => times * spaces.space[number]
	const positiveMargin = spaceMultiplier(0.5)
	const negativeMargin = spaceMultiplier(-0.5)

	return (
		<SdList
			theme={spaces}
			pt={paddingTop}
			pb={paddingBottom}
			pl={paddingLeft}
			pr={paddingRight}
			{...rest}
		>
			<SdList.Wrapper
				theme={aligns}
				horizontalAlign={horizontalAlign}
				verticalAlign={verticalAlign}
				flexWrap={wrapMapping[wrap.toString()]}
				mx={`${negativeMargin(gapX)}px`}
				my={`${negativeMargin(gapY)}px`}
			>
				{React.Children.map(children, child => (
					<SdList.Item
						mx={`${positiveMargin(gapX)}px`}
						my={`${positiveMargin(gapY)}px`}
					>
						{React.cloneElement(child)}
					</SdList.Item>
				))}
			</SdList.Wrapper>
		</SdList>
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
