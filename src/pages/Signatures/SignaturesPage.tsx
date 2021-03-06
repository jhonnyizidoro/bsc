import { FC, useCallback, useEffect, useState } from 'react'
import { SelectOptions } from '../../util/select-options'
import { ResourceArray } from '../../util/resource-array'
import { useApi } from '../../hooks/api'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

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

const SignaturesPage: FC = () => {
	const [signatures, setSignatures] = useState<Signature[]>([])
	const [signature, setSignature] = useState<Signature | null>()
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
	const { get, post, put } = useApi()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<SignaturePayload>()

	useEffect(() => {
		get<Signature[]>('signatures').then(data => {
			if (data) {
				setSignatures(data)
			}
		})
	}, [get])

	const openModal = useCallback((signature: Signature | null) => {
		setSignature(signature)
		setModalIsOpen(true)
	}, [])

	const closeModal = useCallback(() => {
		setSignature(null)
		setModalIsOpen(false)
		reset()
	}, [reset])

	const insertSignature = handleSubmit(async payload => {
		const inserted = await post<Signature, SignaturePayload>('signatures', payload)
		if (inserted) {
			setSignatures(ResourceArray.add(inserted, signatures))
			closeModal()
		}
	})

	const updateSignature = handleSubmit(async payload => {
		const updated = await put<Signature, SignaturePayload>(
			`signatures/${signature?.id}`,
			payload
		)
		if (updated) {
			setSignatures(ResourceArray.update(updated, signatures))
			closeModal()
		}
	})

	return (
		<MainLayout>
			<Title title="R??bricas">
				<Button
					backgroundColor="blue"
					type="button"
					icon={PlusIcon}
					aria-label="Adicionar nova r??brica"
					onClick={() => openModal(null)}
				>
					Adicionar
				</Button>
			</Title>
			<Grid>
				{signatures.map(signature => (
					<Card
						key={signature.id}
						columns={2}
						onDelete={() => null}
						onEdit={() => openModal(signature)}
						title={signature.name}
					>
						<div>
							<strong>Periodicidade:</strong> {signature.frequency}
						</div>
						<div>
							<strong>Valores: </strong>
							<Link to={`/signature/${signature.id}`}>inserir valores</Link>
						</div>
					</Card>
				))}
			</Grid>

			{modalIsOpen && (
				<Modal title="Adicionar r??brica" onClose={closeModal} isOpen={modalIsOpen}>
					<form onSubmit={signature ? updateSignature : insertSignature}>
						<Input
							id="name"
							type="text"
							inputMode="text"
							autoComplete="on"
							label="Nome da r??brica"
							error={errors.name?.message}
							defaultValue={signature?.name}
							placeholder="Pedidos concluidos"
							{...register('name', { required: 'Preencha esse campo' })}
						/>
						<Select
							id="frequency"
							label="Frequ??ncia"
							error={errors.frequency?.message}
							defaultValue={signature?.frequency}
							options={SelectOptions.frequency()}
							placeholder="Selecione uma frequ??ncia"
							{...register('frequency', { required: 'Selecione um valor' })}
						/>
						<SubmitButton>Salvar</SubmitButton>
					</form>
				</Modal>
			)}
		</MainLayout>
	)
}

export default SignaturesPage
