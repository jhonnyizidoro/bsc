import styled from 'styled-components'
import { Colors, Fonts } from '../../assets/styles/variables'

export const LabelElement = styled.label`
	display: block;
	font-size: 0.9rem;
	font-weight: ${Fonts.SEMI_BOLD};
	margin: 0 0 5px 8px;
`

export const LabelError = styled.span`
	color: ${Colors.DANGER};
`
