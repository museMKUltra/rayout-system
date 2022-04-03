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

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`

// "as" polymorphic prop
function Example4 () {
	return (
		<div>
			<Button>Normal Button</Button>
			<Button as="a" href="#">Link with Button styles</Button>
			<TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
		</div>
	)
}

export default Example4