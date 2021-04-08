import { FC, useCallback, useEffect, useState } from 'react'
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

import { ReactComponent as PlusIcon } from '../../assets/icons/plus-sign.svg'

const ProspectsPage: FC = () => {
	const [prospects, setProspects] = useState<Prospect[]>([])
	const [prospect, setProspect] = useState<Prospect | null>()
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
	const { get } = useApi()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Prospect>()

	useEffect(() => {
		get<Prospect[]>('prospects').then(data => {
			if (data) {
				setProspects(data)
			}
		})
	}, [get])

	const openModal = useCallback((prospect: Prospect | null) => {
		setProspect(prospect)
		setModalIsOpen(true)
	}, [])

	const closeModal = useCallback(() => {
		setProspect(null)
		setModalIsOpen(false)
		reset()
	}, [reset])

	const insertProspect = handleSubmit(async payload => {
		console.log(payload)
	})

	const updateProspect = handleSubmit(async payload => {
		console.log({
			...prospect,
			...payload,
		})
	})

	return (
		<MainLayout>
			<Title title="Perspectivas">
				<Button
					backgroundColor="blue"
					type="button"
					icon={PlusIcon}
					aria-label="Adicionar nova perspectiva"
					onClick={() => openModal(null)}
				>
					Adicionar
				</Button>
			</Title>
			<Grid>
				{prospects.map(prospect => (
					<Card
						key={prospect.id}
						columns={3}
						onDelete={() => null}
						onEdit={() => openModal(prospect)}
						title={prospect.name}
					/>
				))}
			</Grid>

			{modalIsOpen && (
				<Modal title="Adicionar perspectiva" onClose={closeModal} isOpen={modalIsOpen}>
					<form onSubmit={prospect ? updateProspect : insertProspect}>
						<Input
							id="name"
							type="text"
							inputMode="text"
							autoComplete="on"
							placeholder="Cliente"
							label="Nome da perspectiva"
							error={errors.name?.message}
							defaultValue={prospect?.name}
							{...register('name', { required: 'Preencha esse campo' })}
						/>
						<SubmitButton>Adicionar</SubmitButton>
					</form>
				</Modal>
			)}
		</MainLayout>
	)
}

export default ProspectsPage
