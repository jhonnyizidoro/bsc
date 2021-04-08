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
} from './Card.styles'

interface CardProps {
	title: string
	columns: number
	onEdit: <T>(data: T) => void
	onDelete: <T>(data: T) => void
}

const Card: FC<CardProps> = ({ title, columns, onEdit, onDelete, children }) => (
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
			{children && <CardFooter>{children}</CardFooter>}
		</CardElement>
	</CardWrapper>
)

export default Card
