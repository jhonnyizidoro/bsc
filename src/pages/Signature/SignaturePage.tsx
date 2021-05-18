import { FC, useEffect, useState } from 'react'
import { SelectOptions } from '../../util/select-options'
import { ResourceArray } from '../../util/resource-array'
import { useApi } from '../../hooks/api'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import MainLayout from '../../Layouts/Main'
import Title from '../../components/Title'
import Input from '../../components/Input/Input'
import Button from '../../components/Button'
import Select from '../../components/Select/Select'
import Table from '../../components/Table'

import { ReactComponent as PlusIcon } from '../../assets/icons/plus-sign.svg'

import { SignaturePageForm } from './SignaturePage.styles'
import { ReactComponent as MinusIcon } from '../../assets/icons/minus.svg'

interface SignaturePageParams {
	id: string
}

const SignaturePage: FC = () => {
	const [signature, setSignature] = useState<Signature>()
	const { id } = useParams<SignaturePageParams>()
	const { get, post } = useApi()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<SignatureValuePayload>()

	useEffect(() => {
		get<Signature>(`signatures/${id}`).then(data => {
			if (data) {
				setSignature(data)
			}
		})
	}, [get, id])

	const insertSignatureValue = handleSubmit(async payload => {
		const inserted = await post<SignatureValue, SignatureValuePayload>(
			'signature-values',
			{
				...payload,
				signatureId: signature?.id as string,
			}
		)
		if (inserted) {
			const values = ResourceArray.add(inserted, signature?.values || [])
			setSignature({ ...(signature as Signature), values })
			reset()
		}
	})

	return (
		<MainLayout>
			<Title title={`Valores da rúbrica "${signature?.name}"`} />
			<SignaturePageForm onSubmit={insertSignatureValue}>
				<Input
					id="name"
					type="text"
					autoComplete="on"
					inputMode="numeric"
					placeholder="150.000"
					label="Valor da rúbrica"
					error={errors.value?.message}
					{...register('value', { required: 'Preencha esse campo' })}
				/>
				{signature?.frequency === 'daily' && (
					<Select
						id="day"
						label="Dia"
						error={errors.day?.message}
						placeholder="Selecione uma dia"
						options={SelectOptions.day()}
						{...register('day', { required: 'Selecione um valor' })}
					/>
				)}
				{signature?.frequency.match(/monthly|daily/) && (
					<Select
						id="month"
						label="Mês"
						error={errors.month?.message}
						placeholder="Selecione um mes"
						options={SelectOptions.month()}
						{...register('month', { required: 'Selecione um valor' })}
					/>
				)}
				<Select
					id="year"
					label="Ano"
					error={errors.year?.message}
					placeholder="Selecione um ano"
					options={SelectOptions.year()}
					{...register('year', { required: 'Selecione um valor' })}
				/>
				<Button
					backgroundColor="blue"
					type="submit"
					icon={PlusIcon}
					aria-label="Adicionar nova rúbrica"
				>
					Adicionar
				</Button>
			</SignaturePageForm>
			<Table heads={['Valor', 'Dia', 'Mês', 'Ano', 'Ações']}>
				{signature?.values.map(({ id, day, month, year, value }) => (
					<tr key={id}>
						<td>{value}</td>
						<td>{day}</td>
						<td>{month || '-'}</td>
						<td>{year || '-'}</td>
						<td>
							<Button
								icon={MinusIcon}
								aria-label="Remover item"
								type="button"
								backgroundColor="blue"
							/>
						</td>
					</tr>
				))}
			</Table>
		</MainLayout>
	)
}

export default SignaturePage
