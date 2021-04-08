import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginPage from './pages/Login'
import ProspectsPage from './pages/Prospects'

const App: FC = () => (
	<Switch>
		<Route component={LoginPage} exact path="/" />
		<Route component={ProspectsPage} exact path="/prospects" />
	</Switch>
)

export default App
