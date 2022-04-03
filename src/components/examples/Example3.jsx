import styled from 'styled-components'

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
	background: white;
`

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`

// Extending Styles
function Example3 () {
	return (
		<div>
			<Button>Normal Button</Button>
			<TomatoButton>Tomato Button</TomatoButton>
		</div>
	)
}

export default Example3