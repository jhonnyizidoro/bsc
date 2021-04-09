import { FC, useCallback, useEffect, useState } from 'react'
import { ResourceArray } from '../../util/resource-array'
import { SelectOptions } from '../../util/select-options'
import { useApi } from '../../hooks/api'
import { useForm } from 'react-hook-form'

import MainLayout from '../../Layouts/Main'
import Title from '../../components/Title'
import Grid from '../../components/Grid'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
import Input from '../../components/Input/Input'
import Button from '../../components/Button'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import Select from '../../components/Select/Select'

import { ReactComponent as PlusIcon } from '../../assets/icons/plus-sign.svg'

const UsersPage: FC = () => {
	const [companies, setCompanies] = useState<Company[]>([])
	const [users, setUsers] = useState<User[]>([])
	const [user, setUser] = useState<User | null>()
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
	const { get, post, put } = useApi()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<UserPayload>()

	useEffect(() => {
		get<Company[]>('companies').then(data => {
			if (data) {
				setCompanies(data)
			}
		})
		get<User[]>('users').then(data => {
			if (data) {
				setUsers(data)
			}
		})
	}, [get])

	const openModal = useCallback((user: User | null) => {
		setUser(user)
		setModalIsOpen(true)
	}, [])

	const closeModal = useCallback(() => {
		setUser(null)
		setModalIsOpen(false)
		reset()
	}, [reset])

	const insertUser = handleSubmit(async payload => {
		const inserted = await post<User, UserPayload>('users', payload)
		if (inserted) {
			setUsers(ResourceArray.add(inserted, users))
			closeModal()
		}
	})

	const updateUser = handleSubmit(async payload => {
		const updated = await put<User, UserPayload>(`users/${user?.id}`, payload)
		if (updated) {
			setUsers(ResourceArray.update(updated, users))
			closeModal()
		}
	})

	return (
		<MainLayout>
			<Title title="Usuários">
				<Button
					backgroundColor="blue"
					type="button"
					icon={PlusIcon}
					aria-label="Adicionar novo usuário"
					onClick={() => openModal(null)}
				>
					Adicionar
				</Button>
			</Title>

			<Grid>
				{users.map(user => (
					<Card
						key={user.id}
						columns={2}
						onDelete={() => null}
						onEdit={() => openModal(user)}
						title={user.name}
					>
						<div>
							<strong>Empresa:</strong> {user.company.name}
						</div>
						<div>
							<strong>Perfil:</strong> {user.profile}
						</div>
					</Card>
				))}
			</Grid>

			{modalIsOpen && (
				<Modal title="Adicionar missão" onClose={closeModal} isOpen={modalIsOpen}>
					<form onSubmit={user ? updateUser : insertUser}>
						<Input
							id="name"
							type="text"
							label="Nome"
							inputMode="text"
							autoComplete="on"
							defaultValue={user?.name}
							placeholder="João da Silva"
							error={errors.name?.message}
							{...register('name', { required: 'Preencha esse campo' })}
						/>
						<Input
							id="login"
							type="text"
							label="Login"
							inputMode="text"
							autoComplete="on"
							placeholder="joao.silva"
							defaultValue={user?.login}
							error={errors.login?.message}
							{...register('login', { required: 'Preencha esse campo' })}
						/>
						<Input
							id="password"
							type="password"
							label="Senha"
							inputMode="text"
							autoComplete="new-password"
							placeholder="Senha de login"
							defaultValue={user?.password}
							error={errors.password?.message}
							{...register('password', { required: 'Preencha esse campo' })}
						/>
						<Select
							id="companyId"
							label="Empresa"
							defaultValue={user?.company.id}
							error={errors.companyId?.message}
							placeholder="Selecione uma empresa"
							options={SelectOptions.company(companies)}
							{...register('companyId', { required: 'Selecione um valor' })}
						/>
						<Select
							id="profile"
							label="Perfil"
							defaultValue={user?.profile}
							error={errors.profile?.message}
							placeholder="Selecione um perfil"
							options={SelectOptions.profile()}
							{...register('profile', { required: 'Selecione um valor' })}
						/>
						<SubmitButton>Salvar</SubmitButton>
					</form>
				</Modal>
			)}
		</MainLayout>
	)
}

export default UsersPage
