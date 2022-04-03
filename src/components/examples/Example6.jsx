import styled from 'styled-components'

const Link = ({ className, children }) => (
	<a className={className}>{children}</a>
)

const StyledLink = styled(Link)`
	color: palevioletred;
	font-weight: bold;
  padding: 0.25em 1em;
`

const ReversedLink = ({ className, children }) => (
	<a className={className}>{children.split('').reverse()}</a>
)

const StyledReversedLink = styled(ReversedLink)`
	color: tomato;
  padding: 0.25em 1em 0.25em 0;
`

// Styling any component
function Example6() {
	return (
		<div>
			<Link>Unstyled, boring Link</Link>
			<StyledLink>Styled, exciting Link</StyledLink>
			<StyledReversedLink>Styled, reversed Link</StyledReversedLink>
		</div>
	)
}

export default Example6
