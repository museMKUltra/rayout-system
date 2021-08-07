import React from 'react'
import styled from 'styled-components'

const themeGetter = (key, style) => props => props.theme[key][props[key]][style]

// color: ${props => props.theme.variant[props.variant].color};

const SdButton = styled.button`
	border-radius: 4px;
	cursor: pointer;
	border: 0;
	color: ${themeGetter('variant', 'color')};
	background: ${themeGetter('variant', 'background')};
	font-size: ${themeGetter('size', 'fontSize')};
	padding: ${themeGetter('size', 'padding')};
`

function ExampleButton({ children, ...rest }) {
	return <SdButton {...rest}>{children}</SdButton>
}

export default ExampleButton
