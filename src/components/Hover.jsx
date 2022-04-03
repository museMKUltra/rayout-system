import styled from 'styled-components'
import { system } from 'styled-system'

const filterBrightness = system({
	hoverBrightness: {
		property: 'filter',
		transform: value => `brightness(${value})`,
	},
})

const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`

const Title = styled.h1`
	width: 100%;
	height: 20px;
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;

	${Wrapper}:hover & {
		 ${filterBrightness}
	}
`

function Hover({ hoverBrightness }) {
	return (
		<Wrapper>
			<Title hoverBrightness={hoverBrightness}>Hello World!1</Title>
		</Wrapper>
	)
}

export default Hover
