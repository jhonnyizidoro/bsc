import { FC, useCallback } from 'react'
import { useGlobalContext } from '../../contexts/global'
import { useHistory } from 'react-router-dom'

import Logo from '../../assets/images/logo.svg'
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg'

import { HeaderElement, HeaderLogo, HeaderLink } from './Header.styles'

const Header: FC = () => {
	const { clearSession } = useGlobalContext()
	const { push } = useHistory()

	const logout = useCallback(() => {
		clearSession()
		push('/')
	}, [clearSession, push])

	return (
		<HeaderElement>
			<HeaderLogo src={Logo} alt="Logo BSC" />
			<HeaderLink onClick={logout}>
				Sair
				<LogoutIcon />
			</HeaderLink>
		</HeaderElement>
	)
}

export default Header
