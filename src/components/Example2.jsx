import styled from 'styled-components'

const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: ${props => props.color};
`

function Example1() {
	return (
		<Wrapper>
			<Title color={'palevioletred'}>Hello World!2</Title>
		</Wrapper>
	)
}

export default Example1
