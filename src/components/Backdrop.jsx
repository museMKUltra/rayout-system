import styled from 'styled-components'
import { color } from 'styled-system'

const Wrapper = styled.div`
	${color}
`

function Backdrop({ children, ...rest }) {
	return (
		<Wrapper {...rest}>
			{children}
		</Wrapper>
	)
}

export default Backdrop
