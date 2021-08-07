import styled from 'styled-components'
import { color, system } from 'styled-system'
import theme from '../configs/theme.js'

const filter = system({
	filter: true,
	hoverFilter: {
		property: 'filter'
	}
})

const Button = styled.button`
	background: ${props => (props.primary ? 'palevioletred' : 'white')};
	color: ${props => (props.primary ? 'white' : 'palevioletred')};
	${color};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;

	&:hover {
		${filter}
	}
`

// Adapting based on props
function Example2() {
	return (
		<div>
			<Button theme={theme} hoverFilter={'brightness(1.2)'}>
				Normal
			</Button>
			<Button primary filter={'brightness(1.2)'}>Primary</Button>
		</div>
	)
}

export default Example2
