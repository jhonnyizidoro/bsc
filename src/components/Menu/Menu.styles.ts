import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Colors, Fonts } from '../../assets/styles/variables'

export const MenuElement = styled.nav`
	padding-top: 50px;
`

export const MenuLink = styled(NavLink)`
	align-items: center;
	display: flex;
	font-size: 1.1rem;
	font-weight: ${Fonts.SEMI_BOLD};
	padding: 10px 30px;
	white-space: nowrap;

	svg {
		fill: ${Colors.DARK};
		height: 30px;
		margin-right: 15px;
		width: 30px;
	}

	&.is-active {
		color: ${Colors.BLUE};
		svg {
			fill: ${Colors.BLUE};
		}
	}
`
