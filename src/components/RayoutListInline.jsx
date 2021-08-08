import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { layout, flexbox, space } from 'styled-system'
import { spaceGenerator, halfMargin } from '../themes/spaces.js'
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
	${halfMargin}
	${layout}
  ${flexbox}
  ${flexRowAlign}
`

SdList.Item = styled.div`
	${halfMargin}
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

	return (
		<ThemeProvider theme={{ ...spaces, ...aligns }}>
			<SdList
				pt={paddingTop}
				pb={paddingBottom}
				pl={paddingLeft}
				pr={paddingRight}
				{...rest}
			>
				<SdList.Wrapper
					horizontalAlign={horizontalAlign}
					verticalAlign={verticalAlign}
					flexWrap={wrapMapping[wrap.toString()]}
					halfMx={-gapX}
					halfMy={-gapY}
				>
					{React.Children.map(children, child => (
						<SdList.Item halfMx={gapX} halfMy={gapY}>
							{React.cloneElement(child)}
						</SdList.Item>
					))}
				</SdList.Wrapper>
			</SdList>
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
