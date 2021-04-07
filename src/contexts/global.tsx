import { FC, createContext, useContext, useState, useCallback } from 'react'

interface GlobalContextValue {
	session: LoginResponse | null
	login: (session: LoginResponse) => void
	logout: () => void
}

export const GlobalContext = createContext<GlobalContextValue>({} as GlobalContextValue)

export const GlobalProvider: FC = ({ children }) => {
	const sessionJson = localStorage.getItem('session')
	const initialSession = sessionJson ? JSON.parse(sessionJson) : null

	const [session, setSession] = useState<LoginResponse | null>(initialSession)

	const login = useCallback((session: LoginResponse) => {
		localStorage.setItem('session', JSON.stringify(session))
		setSession(session)
	}, [])

	const logout = useCallback(() => {
		localStorage.removeItem('session')
		setSession(null)
	}, [])

	return (
		<GlobalContext.Provider value={{ session, login, logout }}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = (): GlobalContextValue => {
	return useContext<GlobalContextValue>(GlobalContext)
}
