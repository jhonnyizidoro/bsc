import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginPage from './pages/Login'

const App: FC = () => (
	<Switch>
		<Route component={LoginPage} exact path="/" />
	</Switch>
)

export default App
