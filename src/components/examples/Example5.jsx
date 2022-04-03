import styled from 'styled-components'

const Button = styled.button`
	display: inline-block;
	color: palevioletred;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	background: white;
`

const ReversedButton = props => (
	<Button {...props}>{props.children.split('').reverse()}</Button>
)

function Example5() {
	return (
		<div>
			<Button>Normal Button</Button>
			<Button as={ReversedButton}>
				Custom Button with Normal Button styles
			</Button>
		</div>
	)
}

export default Example5
