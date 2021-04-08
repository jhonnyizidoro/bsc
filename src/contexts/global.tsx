import { FC, createContext, useContext, useState, useCallback } from 'react'

interface GlobalContextValue {
	session: LoginResponse | null
	saveSession: (session: LoginResponse) => void
	clearSession: () => void
}

export const GlobalContext = createContext<GlobalContextValue>({} as GlobalContextValue)

export const GlobalProvider: FC = ({ children }) => {
	const sessionJson = localStorage.getItem('session')
	const initialSession = sessionJson ? JSON.parse(sessionJson) : null

	const [session, setSession] = useState<LoginResponse | null>(initialSession)

	const saveSession = useCallback((session: LoginResponse) => {
		localStorage.setItem('session', JSON.stringify(session))
		setSession(session)
	}, [])

	const clearSession = useCallback(() => {
		localStorage.removeItem('session')
		setSession(null)
	}, [])

	return (
		<GlobalContext.Provider value={{ session, saveSession, clearSession }}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = (): GlobalContextValue => {
	return useContext<GlobalContextValue>(GlobalContext)
}
