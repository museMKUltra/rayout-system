import React from 'react'
import styled from 'styled-components'
import { layout, flexbox, grid, space, color } from 'styled-system'

const List = styled.div`
  display: grid;
  grid-template-columns: minmax(0, autot);
  ${flexbox}
  ${layout}
  ${grid}
  ${color}
  ${space}
`

const RayoutList = (props) => {
  return (
    <List {...props}>{props.children}</List>
  )
}

export default RayoutList
