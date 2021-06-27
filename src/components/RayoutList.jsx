import React from 'react'
import styled from 'styled-components'
import { layout, flexbox, grid, space, color } from 'styled-system'

const List = styled.div`
  ${flexbox}
  ${layout}
  ${grid}
  ${color}
  ${space}
`

const RayoutList = (props) => {
  return (
    <List {...props} display="grid" gridTemplateColumns="minmax(0, auto)">
      {props.children}
    </List>
  )
}

export default RayoutList
