import { FC } from 'react'

import Button from '../Button'

import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg'

import { SubmitButtonWrapper } from './SubmitButton.styles'

const SubmitButton: FC = ({ children }) => (
	<SubmitButtonWrapper>
		<Button
			icon={CheckIcon}
			aria-label="Enviar formulário"
			type="submit"
			backgroundColor="pink"
		>
			{children}
		</Button>
	</SubmitButtonWrapper>
)

export default SubmitButton
