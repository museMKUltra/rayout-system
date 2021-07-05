import React from 'react'
import styled from 'styled-components'
import { color, layout, flexbox, grid, space } from 'styled-system'

const List = styled.div`
	display: grid;
	grid-template-columns: minmax(0, auto);
	${color}
	${layout}
  ${flexbox}
  ${grid}
  ${space}
`

const RayoutList = props => {
	return <List {...props}>{props.children}</List>
}

export default RayoutList
