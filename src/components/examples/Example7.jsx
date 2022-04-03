import styled from 'styled-components'

const Input = styled.input`
	padding: 0.5em;
	margin: 1.5em;
	color: ${props => props.inputColor || 'palevioletred'};
	background: papayawhip;
	border: none;
	border-radius: 3px;
`

// Passed props
function Example7() {
	return (
		<div>
			<Input defaultValue="@probablyup" type="text" />
			<Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
		</div>
	)
}

export default Example7
