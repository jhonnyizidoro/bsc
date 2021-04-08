import { Children, ReactElement, FC } from 'react'

import {
	TableElement,
	TableHead,
	TableHeadRow,
	TableHeadColumn,
	TableBody,
	TableRow,
	TableColumn,
	TableColumnMobileLabel,
} from './Table.styles'

interface TableProps {
	heads: string[]
}

const Table: FC<TableProps> = ({ children, heads }) => (
	<TableElement>
		<TableHead>
			<TableHeadRow>
				{heads.map((head, index) => (
					<TableHeadColumn key={index}>{head}</TableHeadColumn>
				))}
			</TableHeadRow>
		</TableHead>
		<TableBody>
			{/* LOOP TROUGH TRS */}
			{Children.map(children, tr => (
				<TableRow>
					{/* LOOP TROUGH TDS */}
					{Children.map((tr as ReactElement).props.children, (td, index) => (
						<TableColumn>
							<TableColumnMobileLabel>{heads[index]}</TableColumnMobileLabel>
							{td.props.children}
						</TableColumn>
					))}
				</TableRow>
			))}
		</TableBody>
	</TableElement>
)

export default Table
