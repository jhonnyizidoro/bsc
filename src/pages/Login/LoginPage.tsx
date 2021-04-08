import { FC } from 'react'
import { useForm } from 'react-hook-form'

import CenteredCard from '../../components/CenteredCard'
import AuthLayout from '../../Layouts/Auth'
import Input from '../../components/Input/Input'
import SubmitButton from '../../components/SubmitButton/SubmitButton'

const LoginPage: FC = () => {
	const { register, handleSubmit } = useForm<LoginPayload>()

	const onSubmit = handleSubmit(async payload => {
		console.log(payload)
	})

	return (
		<AuthLayout>
			<CenteredCard>
				<form onSubmit={onSubmit}>
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
