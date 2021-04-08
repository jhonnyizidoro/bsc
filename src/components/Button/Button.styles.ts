import styled, { css } from 'styled-components'
import { Colors, Fonts } from '../../assets/styles/variables'

interface ButtonStyles {
	backgroundColor: 'pink' | 'blue'
	hasText: boolean
}

const getButtonBackground = ({ backgroundColor }: ButtonStyles) => {
	if (backgroundColor === 'blue') {
		return css`
			background: ${Colors.BLUE};
		`
	} else {
		return css`
			background: ${Colors.PINK};
		`
	}
}

const getButtonStylesByContent = ({ hasText }: ButtonStyles) => {
	if (hasText) {
		return css`
			box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.06);
			color: ${Colors.WHITE};
			font-weight: ${Fonts.SEMI_BOLD};
			padding: 13px 30px;

			svg {
				margin-left: 20px;
			}
		`
	} else {
		return css`
			padding: 13px;
		`
	}
}

export const ButtonElement = styled.button<ButtonStyles>`
	${getButtonBackground};
	${getButtonStylesByContent};
	align-items: center;
	border: 0;
	border-radius: 8px;
	display: flex;
	outline: 0;

	svg {
		fill: ${Colors.WHITE};
		height: 15px;
		width: 15px;
	}
`
