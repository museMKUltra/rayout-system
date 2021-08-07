import React from 'react'
import PropTypes from 'prop-types'
import { grid, space } from 'styled-system'
import styled, { ThemeProvider } from 'styled-components'
import spaces from '../themes/spaces.js'
import aligns, { gridAlign } from '../themes/aligns.js'

const SdColumns = styled.div`
	${space}
`

SdColumns.Row = styled.div`
	display: grid;
	${grid}
	${gridAlign}
`

SdColumns.Column = styled.div`
	columns: ${props => props.columns};
	column-gap: ${props => props.columnGap};
	${space}
`

SdColumns.Item = styled.div`
	display: inline-grid;
	width: 100%;
	break-inside: avoid;
	${space}
`

function RayoutColumns({
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	gapX,
	gapY,
	contentMinWidth,
	columnCount,
	flowDirection,
	verticalAlign,
	children,
	...rest
}) {
	const isRowDirection = flowDirection === 'row'

	// for row direction
	const repeat = columnCount || 'auto-fit'
	const minmax = contentMinWidth ? `${contentMinWidth}px` : 0

	// for column direction
	const count = columnCount || 'auto'
	const width = contentMinWidth ? `${contentMinWidth}px` : 'auto'

	return (
		<ThemeProvider theme={{ ...spaces, ...aligns }}>
			<SdColumns
				pt={paddingTop}
				pb={paddingBottom}
				pl={paddingLeft}
				pr={paddingRight}
				{...rest}
			>
				{isRowDirection ? (
					<SdColumns.Row
						gridRowGap={gapX}
						gridColumnGap={gapY}
						gridTemplateColumns={`repeat(${repeat}, minmax(${minmax}, 1fr))`}
						verticalAlign={verticalAlign}
					>
						{children}
					</SdColumns.Row>
				) : (
					<SdColumns.Column
						columns={`${width} ${count}`}
						columnGap={`${spaces.space[gapX]}px`}
						mb={`-${spaces.space[gapY]}px`}
					>
						{React.Children.map(children, child => (
							<SdColumns.Item mb={gapY}>
								{React.cloneElement(child)}
							</SdColumns.Item>
						))}
					</SdColumns.Column>
				)}
			</SdColumns>
		</ThemeProvider>
	)
}

RayoutColumns.propTypes = {
	paddingTop: PropTypes.number,
	paddingBottom: PropTypes.number,
	paddingLeft: PropTypes.number,
	paddingRight: PropTypes.number,
	gapX: PropTypes.number,
	gapY: PropTypes.number,
	contentMinWidth: PropTypes.number,
	columnCount: PropTypes.number,
	flowDirection: PropTypes.oneOf(['row', 'column']),
	verticalAlign: PropTypes.oneOf(['default', 'top', 'center', 'bottom']),
}

RayoutColumns.defaultProps = {
	paddingTop: 0,
	paddingBottom: 0,
	paddingLeft: 0,
	paddingRight: 0,
	gapX: 0,
	gapY: 0,
	contentMinWidth: 0,
	columnCount: 0,
	flowDirection: 'row',
	verticalAlign: 'default',
}

export default RayoutColumns
