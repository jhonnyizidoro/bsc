import styled from 'styled-components'
import { rgba } from '../../util/assets'
import { Colors, Fonts } from '../../assets/styles/variables'

export const ModalWrapper = styled.div`
	align-items: center;
	background: ${rgba(Colors.BLUE, 0.35)};
	display: flex;
	height: 100%;
	justify-content: center;
	position: fixed;
	right: 0;
	top: 0;
	width: 100%;
`

export const ModalElement = styled.div`
	background: ${Colors.WHITE};
	border-radius: 22px;
	box-shadow: 5px 10px 25px rgba(0, 0, 0, 0.15);
	min-width: 600px;
	padding: 30px;
	position: relative;

	fieldset {
		margin-bottom: 25px;
	}
`

export const ModalTitle = styled.div`
	color: ${Colors.DARK};
	font-size: 1.6rem;
	font-weight: ${Fonts.SEMI_BOLD};
	margin-bottom: 30px;
	text-align: center;
`

export const ModalClose = styled.div`
	cursor: pointer;
	padding: 15px;
	position: absolute;
	right: 0;
	top: 0;

	svg {
		fill: ${Colors.DIMGRAY};
		width: 15px;
	}
`
