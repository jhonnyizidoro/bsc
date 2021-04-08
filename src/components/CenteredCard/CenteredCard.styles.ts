import styled from 'styled-components'

import { Colors } from '../../assets/styles/variables'

export const CenteredCardElement = styled.div`
	background: ${Colors.WHITE};
	border-radius: 20px;
	box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.06);
	padding: 30px;
	width: 480px;

	fieldset {
		margin-bottom: 15px;
	}
`

export const CenteredCardImage = styled.img`
	display: block;
	margin: 0 auto 45px;
	width: 180px;
`
