import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './assets/styles/global'

import App from './App'
import { GlobalProvider } from './contexts/global'

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<GlobalProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</GlobalProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
