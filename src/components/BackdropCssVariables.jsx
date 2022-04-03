import styled, { createGlobalStyle } from 'styled-components'
import React from 'react'

const GlobalStyles = createGlobalStyle`
  :root {
    --backdrop-color: white;
    --backdrop-background-color: black;
    --backdrop-opacity: 1;
  }
`

const Wrapper = styled.div.attrs(props => ({
	style: {
		'--backdrop-color': props.theme.colors[props.color],
		'--backdrop-background-color': props.theme.colors[props.bg],
		'--backdrop-opacity': props.opacity,
	},
}))`
	color: var(--backdrop-color);
	background-color: var(--backdrop-background-color);
	opacity: var(--backdrop-opacity);
`

function Backdrop({ children, ...rest }) {
	return (
		<>
			<GlobalStyles />
			<Wrapper {...rest}>{children}</Wrapper>
		</>
	)
}

export default Backdrop
