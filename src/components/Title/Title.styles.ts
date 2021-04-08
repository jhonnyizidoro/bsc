import styled from 'styled-components'
import { Colors, Fonts } from '../../assets/styles/variables'

export const TitleWrapper = styled.div`
	align-items: center;
	border-bottom: 1px solid ${Colors.LIGHT_GRAY};
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
	padding-bottom: 30px;
`

export const TitleElement = styled.h1`
	color: ${Colors.DARK};
	font-size: 1.6rem;
	font-weight: ${Fonts.SEMI_BOLD};
`

export const TitleContent = styled.div``
