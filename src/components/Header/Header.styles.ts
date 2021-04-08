import styled from 'styled-components'
import { Colors } from '../../assets/styles/variables'

export const HeaderElement = styled.header`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 15px 30px;
`

export const HeaderLogo = styled.img`
	width: 120px;
`

export const HeaderLink = styled.div`
	align-items: center;
	color: ${Colors.DARK};
	cursor: pointer;
	display: flex;

	svg {
		fill: ${Colors.DARK};
		margin-left: 5px;
		width: 20px;
	}
`
