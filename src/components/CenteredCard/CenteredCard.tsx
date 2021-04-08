import { FC } from 'react'

import Logo from '../../assets/images/logo.svg'

import { CenteredCardElement, CenteredCardImage } from './CenteredCard.styles'

const CenteredCard: FC = ({ children }) => (
	<CenteredCardElement>
		<CenteredCardImage src={Logo} alt="Logo BSC" />
		{children}
	</CenteredCardElement>
)

export default CenteredCard
