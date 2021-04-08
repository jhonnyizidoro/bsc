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

const IndicatorsPage: FC = () => {
	const [goals, setGoals] = useState<Goal[]>([])
	const [indicators, setIndicators] = useState<Indicator[]>([])
	const [indicator, setIndicator] = useState<Indicator | null>()
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
	const { get } = useApi()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IndicatorPayload>()

	useEffect(() => {
		get<Goal[]>('goals').then(data => {
			if (data) {
				setGoals(data)
			}
		})
		get<Indicator[]>('indicators').then(data => {
			if (data) {
				setIndicators(data)
			}
		})
	}, [get])

	const openModal = useCallback((indicator: Indicator | null) => {
		setIndicator(indicator)
		setModalIsOpen(true)
	}, [])

	const closeModal = useCallback(() => {
		setIndicator(null)
		setModalIsOpen(false)
		reset()
	}, [reset])

	const insertIndicator = handleSubmit(async payload => {
		console.log(payload)
	})

	const updateIndicator = handleSubmit(async payload => {
		console.log({
			...indicator,
			...payload,
		})
	})

	return (
		<MainLayout>
			<Title title="Indicadores">
				<Button
					backgroundColor="blue"
					type="button"
					icon={PlusIcon}
					aria-label="Adicionar novo indicador"
					onClick={() => openModal(null)}
				>
					Adicionar
				</Button>
			</Title>
			<Grid>
				{indicators.map(indicator => (
					<Card
						key={indicator.id}
						columns={2}
						onDelete={() => null}
						onEdit={() => openModal(indicator)}
						title={indicator.name}
						footerItems={[
							{ label: 'Polaridade', value: indicator.polarity },
							{ label: 'Meta', value: indicator.target },
						]}
					/>
				))}
			</Grid>

			{modalIsOpen && (
				<Modal title="Adicionar indicador" onClose={closeModal} isOpen={modalIsOpen}>
					<form onSubmit={indicator ? updateIndicator : insertIndicator}>
						<Input
							id="name"
							type="text"
							inputMode="text"
							autoComplete="on"
							placeholder="Pedidos cancelados"
							label="Nome do indicador"
							defaultValue={indicator?.name}
							error={errors.name?.message}
							{...register('name', { required: 'Preencha esse campo' })}
						/>
						<Select
							id="goalId"
							label="Objetivo"
							defaultValue={indicator?.goal.id}
							placeholder="Selecione um objetivo"
							options={SelectOptions.goal(goals)}
							{...register('goalId', { required: 'Selecione um valor' })}
						/>
						<Input
							type="text"
							id="description"
							inputMode="text"
							autoComplete="on"
							label="Descrição"
							error={errors.description?.message}
							defaultValue={indicator?.description}
							placeholder="Breve descrição do indicador"
							{...register('description', { required: 'Preencha esse campo' })}
						/>
						<Select
							id="polarity"
							label="Polaridade"
							error={errors.polarity?.message}
							options={SelectOptions.polarity()}
							defaultValue={indicator?.polarity}
							placeholder="Selecione uma polaridade"
							{...register('polarity', { required: 'Selecione um valor' })}
						/>
						<Select
							id="targetType"
							label="Tipo de meta"
							error={errors.targetType?.message}
							options={SelectOptions.targetType()}
							defaultValue={indicator?.targetType}
							placeholder="Selecione um tipo de meta"
							{...register('targetType', { required: 'Selecione um valor' })}
						/>
						<Input
							type="text"
							id="target"
							label="Meta"
							autoComplete="on"
							inputMode="numeric"
							placeholder="100.000"
							error={errors.target?.message}
							defaultValue={indicator?.target}
							{...register('target', { required: 'Preencha esse campo' })}
						/>
						<Select
							id="frequency"
							label="Frequência"
							error={errors.frequency?.message}
							defaultValue={indicator?.frequency}
							options={SelectOptions.frequency()}
							placeholder="Selecione uam frequência"
							{...register('frequency', { required: 'Selecione um valor' })}
						/>
						<SubmitButton>Adicionar</SubmitButton>
					</form>
				</Modal>
			)}
		</MainLayout>
	)
}

export default IndicatorsPage
