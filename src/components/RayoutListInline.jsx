import React from 'react'
import styled from 'styled-components'
import { color, layout, flexbox, space } from 'styled-system'

function multiplier(times) {
	return ({ gapY = 0, gapX = 0 }) => `${times * gapY}px ${times * gapX}px`
}

const List = styled.div`
	display: inline-block;
	${color}
`

List.Inline = styled.div`
	display: inline-flex;
	vertical-align: top;
	flex-wrap: wrap;
	margin: ${multiplier(-0.5)};

	${layout}
	${flexbox}
  ${space}
  > * {
		margin: ${multiplier(0.5)};
	}
`

function RayoutListInline(props) {
	return (
		<List {...props}>
			<List.Inline {...props}>{props.children}</List.Inline>
		</List>
	)
}

export default RayoutListInline
