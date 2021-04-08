import { FC, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useApi } from '../../hooks/api'
import { useGlobalContext } from '../../contexts/global'
import { useHistory } from 'react-router-dom'

import CenteredCard from '../../components/CenteredCard'
import AuthLayout from '../../Layouts/Auth'
import Input from '../../components/Input/Input'
import SubmitButton from '../../components/SubmitButton/SubmitButton'

const LoginPage: FC = () => {
	const { register, handleSubmit } = useForm<LoginPayload>()
	const { login } = useGlobalContext()
	const { post } = useApi()
	const { push } = useHistory()

	const onSubmit = useCallback(
		async payload => {
			const session = await post<LoginResponse, LoginPayload>('login', payload)
			if (session) {
				login(session)
				push('/prospects')
			}
		},
		[login, post, push]
	)

	return (
		<AuthLayout>
			<CenteredCard>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						id="login"
						label="Login"
						type="text"
						inputMode="text"
						placeholder="joao.silva"
						autoComplete="username"
						{...register('login')}
					/>
					<Input
						id="password"
						label="Senha"
						type="password"
						inputMode="text"
						placeholder="Sua senha"
						autoComplete="current-password"
						{...register('password')}
					/>
					<SubmitButton>Login</SubmitButton>
				</form>
			</CenteredCard>
		</AuthLayout>
	)
}

export default LoginPage
