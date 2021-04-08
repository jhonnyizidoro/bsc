import { FC } from 'react'

import Button from '../Button'

import { ReactComponent as MinusIcon } from '../../assets/icons/minus.svg'
import { ReactComponent as PencilIcon } from '../../assets/icons/pencil.svg'

import {
	CardWrapper,
	CardElement,
	CardContent,
	CardTitle,
	CardButtons,
	CardFooter,
	CardFooterBlock,
	CardFooterStrong,
} from './Card.styles'

interface CardFooterItem {
	label: string
	value: string
}

interface CardProps {
	title: string
	columns: number
	onEdit: <T>(data: T) => void
	onDelete: <T>(data: T) => void
	footerItems?: CardFooterItem[]
}

const Card: FC<CardProps> = ({ title, columns, onEdit, onDelete, footerItems }) => (
	<CardWrapper columns={columns}>
		<CardElement>
			<CardContent>
				<CardTitle>{title}</CardTitle>
				<CardButtons>
					<Button
						icon={MinusIcon}
						aria-label="Remover item"
						type="button"
						backgroundColor="blue"
						onClick={onDelete}
					/>
					<Button
						icon={PencilIcon}
						aria-label="Editar item"
						type="button"
						backgroundColor="pink"
						onClick={onEdit}
					/>
				</CardButtons>
			</CardContent>
			{footerItems && (
				<CardFooter>
					{footerItems.map(({ label, value }) => (
						<CardFooterBlock key={label}>
							<CardFooterStrong>{label}</CardFooterStrong>: {value}
						</CardFooterBlock>
					))}
				</CardFooter>
			)}
		</CardElement>
	</CardWrapper>
)

export default Card
