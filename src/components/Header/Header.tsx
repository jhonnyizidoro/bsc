import { FC } from 'react'

import Logo from '../../assets/images/logo.svg'
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg'

import { HeaderElement, HeaderLogo, HeaderLink } from './Header.styles'

const Header: FC = () => (
	<HeaderElement>
		<HeaderLogo src={Logo} alt="Logo BSC" />
		<HeaderLink>
			Sair
			<LogoutIcon />
		</HeaderLink>
	</HeaderElement>
)

export default Header
