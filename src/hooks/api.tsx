import { useGlobalContext } from '../contexts/global'
import { useHistory } from 'react-router-dom'
import { useCallback } from 'react'

const ENDPOINT = 'http://localhost:2500/'

interface UseApi {
	get: <T>(route: string) => Promise<T | undefined>
	post: <T, U>(route: string, body: U) => Promise<T | undefined>
}

export const useApi = (): UseApi => {
	const { session } = useGlobalContext()
	const { push } = useHistory()

	const sendRequestToApi = useCallback(
		async <T, U>(method: 'GET' | 'POST' | 'PUT' | 'DELETE', route: string, body?: U) => {
			try {
				const init: RequestInit = {}
				init.headers = {}
				init.method = method

				if (body) {
					init.body = JSON.stringify(body)
					init.headers['Content-Type'] = 'application/json'
				}

				if (session) {
					init.headers.Authorization = `Bearer ${session.token}`
				}

				const response = await fetch(`${ENDPOINT}${route}`, init)

				if (response.status >= 200 && response.status < 300) {
					return (await response.json()) as T
				} else if (response.status === 401) {
					await push('/')
				}
			} catch (e) {
				console.log(e)
			}
		},
		[push, session]
	)

	const get = useCallback(
		async <T,>(route: string): Promise<T | undefined> => {
			return await sendRequestToApi<T, null>('GET', route)
		},
		[sendRequestToApi]
	)

	const post = useCallback(
		async <T, U>(route: string, body: U): Promise<T | undefined> => {
			return await sendRequestToApi<T, U>('POST', route, body)
		},
		[sendRequestToApi]
	)

	return { get, post }
}
