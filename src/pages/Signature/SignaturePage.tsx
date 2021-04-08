import { FC, useEffect, useState } from 'react'
import { SelectOptions } from '../../util/select-options'
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

interface SignaturePageParams {
	id: string
}

const SignaturePage: FC = () => {
	const [signature, setSignature] = useState<Signature>()
	const { id } = useParams<SignaturePageParams>()
	const { get } = useApi()

	const {
		register,
		handleSubmit,
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
		console.log(payload)
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
				<Select
					id="day"
					label="Dia"
					error={errors.day?.message}
					placeholder="Selecione uma dia"
					options={SelectOptions.frequency()}
					{...register('day', { required: 'Selecione um valor' })}
				/>
				<Select
					id="month"
					label="Mês"
					error={errors.month?.message}
					placeholder="Selecione um mes"
					options={SelectOptions.frequency()}
					{...register('month', { required: 'Selecione um valor' })}
				/>
				<Select
					id="year"
					label="Ano"
					error={errors.year?.message}
					placeholder="Selecione um ano"
					options={SelectOptions.frequency()}
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
			<Table heads={['Valor', 'Dia', 'Mês', 'Ano']}>
				{signature?.values.map(({ id, day, month, year, value }) => (
					<tr key={id}>
						<td>{value}</td>
						<td>{day}</td>
						<td>{month}</td>
						<td>{year}</td>
					</tr>
				))}
			</Table>
		</MainLayout>
	)
}

export default SignaturePage
