import React from 'react'
import PropTypes from 'prop-types'
import { flexbox, grid, layout, space } from 'styled-system'
import styled, { ThemeProvider } from 'styled-components'
import theme, { space as themeSpace } from '../configs/theme.js'

const verticalAlignMapping = {
	default: 'stretch',
	top: 'start',
	center: 'center',
	bottom: 'end',
}

const Columns = styled.div`
	${space}
`

Columns.Row = styled.div`
	display: grid;
	${layout}
	${grid}
  ${flexbox}
`

Columns.Column = styled.div`
	columns: ${props => props.columns};
	column-gap: ${props => props.columnGap};
	${space}
`

Columns.Item = styled.div`
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
		<ThemeProvider theme={theme}>
			<Columns
				pt={paddingTop}
				pb={paddingBottom}
				pl={paddingLeft}
				pr={paddingRight}
				{...rest}
			>
				{isRowDirection ? (
					<Columns.Row
						gridRowGap={gapX}
						gridColumnGap={gapY}
						gridTemplateColumns={`repeat(${repeat}, minmax(${minmax}, 1fr))`}
						alignItems={verticalAlignMapping[verticalAlign]}
					>
						{children}
					</Columns.Row>
				) : (
					<Columns.Column
						columns={`${width} ${count}`}
						columnGap={`${themeSpace[gapX]}px`}
						mb={`-${themeSpace[gapY]}px`}
					>
						{React.Children.map(children, child => (
							<Columns.Item mb={gapY}>
								{React.cloneElement(child)}
							</Columns.Item>
						))}
					</Columns.Column>
				)}
			</Columns>
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
