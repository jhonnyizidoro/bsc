import styled from 'styled-components'
import { Colors } from '../../assets/styles/variables'

export const MainLayoutWrapper = styled.div`
	display: flex;
	min-height: calc(100vh - 80px);
`

export const MainLayoutContent = styled.main`
	background: ${Colors.BACKGROUND};
	border-radius: 20px 0 0;
	box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.06);
	flex-grow: 1;
	padding: 30px;
`
