import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginPage from './pages/Login'
import ProspectsPage from './pages/Prospects'
import GoalsPage from './pages/Goals'
import IndicatorsPage from './pages/Indicators'

const App: FC = () => (
	<Switch>
		<Route component={LoginPage} exact path="/" />
		<Route component={ProspectsPage} exact path="/prospects" />
		<Route component={GoalsPage} exact path="/goals" />
		<Route component={IndicatorsPage} exact path="/indicators" />
	</Switch>
)

export default App
