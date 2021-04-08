import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginPage from './pages/Login'
import ProspectsPage from './pages/Prospects'
import GoalsPage from './pages/Goals'
import IndicatorsPage from './pages/Indicators'
import SignaturesPage from './pages/Signatures'

const App: FC = () => (
	<Switch>
		<Route component={LoginPage} exact path="/" />
		<Route component={ProspectsPage} exact path="/prospects" />
		<Route component={GoalsPage} exact path="/goals" />
		<Route component={IndicatorsPage} exact path="/indicators" />
		<Route component={SignaturesPage} exact path="/signatures" />
	</Switch>
)

export default App
