import styled from 'styled-components'
import { Colors, Fonts } from '../../assets/styles/variables'

export const TableElement = styled.table`
	background: ${Colors.WHITE};
	border-radius: 8px;
	box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.06);
	overflow: hidden;
	width: 100%;
`

export const TableHead = styled.thead`
	text-align: left;
`

export const TableHeadRow = styled.tr``

export const TableHeadColumn = styled.th`
	font-weight: ${Fonts.SEMI_BOLD};
	padding: 17px;
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
	&:nth-child(odd) {
		background: ${Colors.BACKGROUND};
	}
`

export const TableColumn = styled.td`
	padding: 12px 17px;
`

export const TableColumnMobileLabel = styled.strong`
	display: none;
`
