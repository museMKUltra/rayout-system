import React from 'react'
import styled from 'styled-components'
import { space, color, variant } from 'styled-system'

const buttonSizeStyle = variant({
  prop: 'size',
  key: 'buttons.size',
})

const Btn = styled.button`
  ${color}
  ${space}
  ${buttonSizeStyle}
`

function Button (props) {
  return <Btn {...props}>{props.children}</Btn>;
}

export default Button