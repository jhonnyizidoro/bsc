import { FC, useCallback, useEffect, useState } from 'react'
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

const GoalsPage: FC = () => {
	const [prospects, setProspects] = useState<Prospect[]>([])
	const [goals, setGoals] = useState<Goal[]>([])
	const [goal, setGoal] = useState<Goal | null>()
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
	const { get } = useApi()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<GoalPayload>()

	useEffect(() => {
		get<Prospect[]>('prospects').then(data => {
			if (data) {
				setProspects(data)
			}
		})
		get<Goal[]>('goals').then(data => {
			if (data) {
				setGoals(data)
			}
		})
	}, [get])

	const openModal = useCallback((goal: Goal | null) => {
		setGoal(goal)
		setModalIsOpen(true)
	}, [])

	const closeModal = useCallback(() => {
		setGoal(null)
		setModalIsOpen(false)
		reset()
	}, [reset])

	const insertGoal = handleSubmit(async payload => {
		console.log(payload)
	})

	const updateGoal = handleSubmit(async payload => {
		console.log({
			...goal,
			...payload,
		})
	})

	return (
		<MainLayout>
			<Title title="Objetivos">
				<Button
					backgroundColor="blue"
					type="button"
					icon={PlusIcon}
					aria-label="Adicionar novo objetivo"
					onClick={() => openModal(null)}
				>
					Adicionar
				</Button>
			</Title>
			<Grid>
				{goals.map(goal => (
					<Card
						key={goal.id}
						columns={2}
						onDelete={() => null}
						onEdit={() => openModal(goal)}
						title={goal.name}
					>
						<div>
							<strong>Predecessor:</strong> {goal.predecessor?.name || 'Não tem'}
						</div>
						<div>
							<strong>Perspectiva:</strong> {goal.prospect.name}
						</div>
					</Card>
				))}
			</Grid>

			{modalIsOpen && (
				<Modal title="Adicionar objetivo" onClose={closeModal} isOpen={modalIsOpen}>
					<form onSubmit={goal ? updateGoal : insertGoal}>
						<Input
							id="name"
							type="text"
							inputMode="text"
							autoComplete="on"
							placeholder="Cliente"
							label="Nome do objetivo"
							defaultValue={goal?.name}
							error={errors.name?.message}
							{...register('name', { required: 'Preencha esse campo' })}
						/>
						<Select
							id="prospectId"
							label="Perspectiva"
							defaultValue={goal?.prospect.id}
							error={errors.prospectId?.message}
							placeholder="Selecione uma perspectiva"
							options={SelectOptions.prospect(prospects)}
							{...register('prospectId', { required: 'Selecione um valor' })}
						/>
						<Select
							id="predecessorId"
							label="Predecessor"
							options={SelectOptions.goal(goals)}
							defaultValue={goal?.predecessor?.id}
							{...register('predecessorId')}
							placeholder="Selecione um objetivo predecessor"
						/>
						<SubmitButton>Adicionar</SubmitButton>
					</form>
				</Modal>
			)}
		</MainLayout>
	)
}

export default GoalsPage
