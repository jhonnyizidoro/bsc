import { FC } from 'react'

import Header from '../../components/Header'
import Menu from '../../components/Menu'

import { MainLayoutWrapper, MainLayoutContent } from './MainLayout.styles'

const MainLayout: FC = ({ children }) => (
	<>
		<Header />
		<MainLayoutWrapper>
			<Menu />
			<MainLayoutContent>{children}</MainLayoutContent>
		</MainLayoutWrapper>
	</>
)

export default MainLayout
