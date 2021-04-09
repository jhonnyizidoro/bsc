import { FC, useCallback, useEffect, useState } from 'react'
import { SelectOptions } from '../../util/select-options'
import { ResourceArray } from '../../util/resource-array'
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
import InlineFieldset from '../../components/InlineFieldset'
import Textarea from '../../components/Textarea/Textarea'

import { ReactComponent as PlusIcon } from '../../assets/icons/plus-sign.svg'
import SignatureList from '../../components/SignatureList'

const IndicatorsPage: FC = () => {
	const [signatures, setSignatures] = useState<Signature[]>([])
	const [goals, setGoals] = useState<Goal[]>([])
	const [indicators, setIndicators] = useState<Indicator[]>([])
	const [indicator, setIndicator] = useState<Indicator | null>()
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
	const [formulaModalIsOpen, setFormulaModalIsOpen] = useState<boolean>(false)
	const { get, post, put } = useApi()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		setValue,
		getValues,
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
		get<Signature[]>('signatures').then(data => {
			if (data) {
				setSignatures(data)
			}
		})
	}, [get])

	const openModal = useCallback((indicator: Indicator | null) => {
		setIndicator(indicator)
		setModalIsOpen(true)
	}, [])

	const openFormulaModal = useCallback((indicator: Indicator) => {
		setIndicator(indicator)
		setFormulaModalIsOpen(true)
	}, [])

	const closeModal = useCallback(() => {
		setIndicator(null)
		setModalIsOpen(false)
		reset()
	}, [reset])

	const closeFormulaModal = useCallback(() => {
		setIndicator(null)
		setFormulaModalIsOpen(false)
		reset()
	}, [reset])

	const insertIndicator = handleSubmit(async payload => {
		const inserted = await post<Indicator, IndicatorPayload>('indicators', payload)
		if (inserted) {
			setIndicators(ResourceArray.add(inserted, indicators))
			closeModal()
		}
	})

	const updateIndicator = handleSubmit(async payload => {
		const updated = await put<Indicator, IndicatorPayload>(
			`indicators/${indicator?.id}`,
			payload
		)
		if (updated) {
			setIndicators(ResourceArray.update(updated, indicators))
			closeModal()
		}
	})

	const updateIndicatorFormula = handleSubmit(async payload => {
		const updated = await put<Indicator, IndicatorPayload>(
			`indicators/formula/${indicator?.id}`,
			payload
		)
		if (updated) {
			setIndicators(ResourceArray.update(updated, indicators))
			closeFormulaModal()
		}
	})

	const insertSignatureIdInFormula = useCallback(
		id => {
			const currentFormula = getValues('formula')
			setValue('formula', `${currentFormula}$${id}`)
		},
		[getValues, setValue]
	)

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
					>
						<div>
							<strong>Formula:</strong>{' '}
							<span onClick={() => openFormulaModal(indicator)}>
								{indicator.formula ? 'editar fórmula' : 'inserir fórmula'}
							</span>
						</div>
						<div>
							<strong>Polaridade:</strong> {indicator.polarity}
						</div>
						<div>
							<strong>Meta:</strong> {indicator.target}
						</div>
					</Card>
				))}
			</Grid>

			{modalIsOpen && (
				<Modal title="Adicionar indicador" onClose={closeModal} isOpen={modalIsOpen}>
					<form onSubmit={indicator ? updateIndicator : insertIndicator}>
						<InlineFieldset>
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
								error={errors.goalId?.message}
								defaultValue={indicator?.goal.id}
								placeholder="Selecione um objetivo"
								options={SelectOptions.goal(goals)}
								{...register('goalId', { required: 'Selecione um valor' })}
							/>
						</InlineFieldset>
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
						<InlineFieldset>
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
						</InlineFieldset>
						<InlineFieldset>
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
								placeholder="Selecione uma frequência"
								{...register('frequency', { required: 'Selecione um valor' })}
							/>
						</InlineFieldset>
						<SubmitButton>Salvar</SubmitButton>
					</form>
				</Modal>
			)}

			{formulaModalIsOpen && (
				<Modal
					title="Inserir fórmula"
					isOpen={formulaModalIsOpen}
					onClose={closeFormulaModal}
				>
					<form onSubmit={updateIndicatorFormula}>
						<Textarea
							id="formula"
							label="Fórmula"
							placeholder="Fórmula"
							error={errors.formula?.message}
							defaultValue={indicator?.formula}
							{...register('formula', { required: 'Preencha esse campo' })}
						/>
						<SignatureList
							signatures={signatures}
							onItemSelect={insertSignatureIdInFormula}
						/>
						<SubmitButton>Salvar</SubmitButton>
					</form>
				</Modal>
			)}
		</MainLayout>
	)
}

export default IndicatorsPage
