import styled, { createGlobalStyle } from 'styled-components'

const Thing = styled.div`
	&& {
		color: blue;
	}
`

const GlobalStyle = createGlobalStyle`
  div${Thing} {
    color: red;
  }
`

function Example9() {
	return (
		<>
			<GlobalStyle />
			<Thing>Im blue, da ba dee da ba daa</Thing>
		</>
	)
}

export default Example9
