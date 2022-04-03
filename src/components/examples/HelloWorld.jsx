import styled from 'styled-components'
import { color, layout } from 'styled-system'

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	${color}
`

const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
	${layout}
`

function HelloWorld({ children, width, color }) {
	return (
		<Wrapper width={width}>
			<Title color={color}>{children}</Title>
		</Wrapper>
	)
}

export default HelloWorld
