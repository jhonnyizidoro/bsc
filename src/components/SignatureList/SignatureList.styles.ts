import styled from 'styled-components'
import { Colors } from '../../assets/styles/variables'

export const SignatureListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 15px;
`

export const SignatureListItemWrapper = styled.div`
	width: 50%;

	&:nth-child(odd) {
		padding: 0 10px 5px 0;
	}

	&:nth-child(even) {
		padding: 0 0 10px 5px;
	}
`

export const SignatureListItem = styled.div`
	align-items: center;
	border: 1px solid ${Colors.LIGHT_GRAY};
	border-radius: 5px;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	padding: 5px;
`

export const SignatureListIcon = styled.div`
	align-items: center;
	background: ${Colors.DIMGRAY};
	border-radius: 50%;
	display: flex;
	justify-content: space-between;
	padding: 7px;

	svg {
		fill: ${Colors.WHITE};
		width: 10px;
	}
`
