import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
	width: 450px;
  padding: 4em;
  background: papayawhip;
`

// Getting Started
function Example1 () {
	return (
		<Wrapper>
			<Title>
      Hello World!
			</Title>
		</Wrapper>
	)
}

export default Example1