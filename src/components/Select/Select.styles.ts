import styled from 'styled-components'
import { Colors } from '../../assets/styles/variables'

export const SelectElement = styled.select`
	appearance: none;
	border: 1px solid ${Colors.LIGHT_GRAY};
	border-radius: 8px;
	outline: 0;
	padding: 14px;
	width: 100%;
`

export const SelectIcon = styled.div`
	position: absolute;
	right: 13px;
	top: 32px;

	svg {
		fill: ${Colors.DIMGRAY};
		width: 10px;
	}
`
