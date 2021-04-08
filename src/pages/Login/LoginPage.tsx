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
	const { saveSession } = useGlobalContext()
	const { post } = useApi()
	const { push } = useHistory()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginPayload>()

	const onSubmit = useCallback(
		async payload => {
			const session = await post<LoginResponse, LoginPayload>('login', payload)
			if (session) {
				saveSession(session)
				push('/prospects')
			}
		},
		[saveSession, post, push]
	)

	return (
		<AuthLayout>
			<CenteredCard>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						id="login"
						type="text"
						label="Login"
						inputMode="text"
						autoComplete="username"
						placeholder="joao.silva"
						error={errors.login?.message}
						{...register('login', { required: 'Preencha esse campo' })}
					/>
					<Input
						id="password"
						label="Senha"
						type="password"
						inputMode="text"
						placeholder="Sua senha"
						autoComplete="current-password"
						error={errors.password?.message}
						{...register('password', { required: 'Preencha esse campo' })}
					/>
					<SubmitButton>Login</SubmitButton>
				</form>
			</CenteredCard>
		</AuthLayout>
	)
}

export default LoginPage
