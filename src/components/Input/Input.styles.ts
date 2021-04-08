import styled from 'styled-components'
import { Colors } from '../../assets/styles/variables'

export const InputElement = styled.input`
	border: 1px solid ${Colors.LIGHT_GRAY};
	border-radius: 8px;
	outline: 0;
	padding: 13px;
	width: 100%;

	&::placeholder {
		color: ${Colors.LIGHT_GRAY};
	}
`
