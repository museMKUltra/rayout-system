import React from 'react'
import styled from 'styled-components'
import { color, layout, flexbox, space } from 'styled-system'

function margin(times) {
	return ({ gapY = 0, gapX = 0 }) => `${times * gapY}px ${times * gapX}px`
}

const InlineBlock = styled.div`
	display: inline-block;
  ${color}
`

const InlineFlex = styled.div`
	display: inline-flex;
	vertical-align: top;
	flex-wrap: wrap;
	margin: ${margin(-0.5)};
	${layout}
  ${flexbox}
  ${space}
  > * {
		margin: ${margin(0.5)};
	}
`

function RayoutListInline(props) {
	return (
		<InlineBlock {...props}>
			<InlineFlex {...props}>{props.children}</InlineFlex>
		</InlineBlock>
	)
}

export default RayoutListInline
