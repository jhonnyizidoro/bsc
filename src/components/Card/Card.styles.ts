import styled, { css } from 'styled-components'
import { Colors, Fonts } from '../../assets/styles/variables'

interface CardWrapperStyles {
	columns: number
}

const getCardWrapperStyles = ({ columns }: CardWrapperStyles) => css`
	padding: 15px;
	width: ${100 / columns}%;

	// Remove first column padding-left
	&:nth-child(${columns}n) {
		padding-right: 0;
	}

	// Remove last column padding-right
	&:nth-child(${columns}n - ${columns - 1}) {
		padding-left: 0;
	}

	// Remove first row padding-top
	&:nth-child(-n + ${columns}) {
		padding-top: 0;
	}

	// Remove last row padding-bottom
	// &:nth-last-child(-n + ${columns}) {
	// 	padding-bottom: 0;
	// }
`

export const CardWrapper = styled.div<CardWrapperStyles>`
	${getCardWrapperStyles};
`

export const CardElement = styled.div`
	background: ${Colors.WHITE};
	border-radius: 15px;
	box-shadow: 4px 10px 20px rgba(0, 0, 0, 0.05);
	height: 100%;
	padding: 20px;
`

export const CardContent = styled.div`
	align-items: center;
	display: flex;
`

export const CardTitle = styled.h2`
	color: ${Colors.DARK};
	flex-grow: 1;
	font-size: 1.2rem;
	font-weight: ${Fonts.SEMI_BOLD};
	line-height: 1.4;
	padding-right: 15px;
`

export const CardButtons = styled.h2`
	display: flex;
	flex-direction: column;

	button:nth-child(1) {
		margin-bottom: 10px;
	}
`

export const CardFooter = styled.div`
	border-top: 1px solid ${Colors.LIGHT_GRAY};
	margin-top: 20px;
	padding-top: 20px;

	div:not(:last-child) {
		margin-bottom: 5px;
	}

	strong {
		font-weight: ${Fonts.SEMI_BOLD};
	}

	span {
		cursor: pointer;
		text-decoration: underline;
	}
`
