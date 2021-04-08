import { FC, MouseEvent } from 'react'

import { ButtonElement } from './Button.styles'

interface ButtonProps {
	icon: FC
	'aria-label': string
	type: 'button' | 'submit'
	backgroundColor: 'pink' | 'blue'
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<ButtonProps> = ({ icon: Icon, children, ...otherProps }) => (
	<ButtonElement {...otherProps} hasText={!!children}>
		{children}
		<Icon />
	</ButtonElement>
)

export default Button
