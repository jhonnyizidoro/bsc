import { FC, useCallback, useEffect, useState } from 'react'
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

import { ReactComponent as PlusIcon } from '../../assets/icons/plus-sign.svg'

const CompaniesPage: FC = () => {
	const [companies, setCompanies] = useState<Company[]>([])
	const [company, setCompany] = useState<Company | null>()
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
	const { get, post, put } = useApi()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<CompanyPayload>()

	useEffect(() => {
		get<Company[]>('companies').then(data => {
			if (data) {
				setCompanies(data)
			}
		})
	}, [get])

	const openModal = useCallback((company: Company | null) => {
		setCompany(company)
		setModalIsOpen(true)
	}, [])

	const closeModal = useCallback(() => {
		setCompany(null)
		setModalIsOpen(false)
		reset()
	}, [reset])

	const insertCompany = handleSubmit(async payload => {
		const inserted = await post<Company, CompanyPayload>('companies', payload)
		if (inserted) {
			setCompanies(ResourceArray.add(inserted, companies))
			setModalIsOpen(false)
			reset()
		}
	})

	const updateCompany = handleSubmit(async payload => {
		const updated = await put<Company, CompanyPayload>(
			`companies/${company?.id}`,
			payload
		)
		if (updated) {
			setCompanies(ResourceArray.update(updated, companies))
			setModalIsOpen(false)
			reset()
		}
	})

	return (
		<MainLayout>
			<Title title="Empresas">
				<Button
					backgroundColor="blue"
					type="button"
					icon={PlusIcon}
					aria-label="Adicionar nova empresa"
					onClick={() => openModal(null)}
				>
					Adicionar
				</Button>
			</Title>

			<Grid>
				{companies.map(company => (
					<Card
						key={company.id}
						columns={1}
						onDelete={() => null}
						onEdit={() => openModal(company)}
						title={company.name}
					>
						<div>
							<strong>Missão:</strong> {company.mission}
						</div>
						<div>
							<strong>Visão:</strong> {company.vision}
						</div>
						<div>
							<strong>Valores:</strong> {company.values}
						</div>
					</Card>
				))}
			</Grid>

			{modalIsOpen && (
				<Modal title="Adicionar missão" onClose={closeModal} isOpen={modalIsOpen}>
					<form onSubmit={company ? updateCompany : insertCompany}>
						<Input
							id="name"
							type="text"
							inputMode="text"
							autoComplete="on"
							placeholder="Euro Imports LTDA"
							label="Nome da empresa"
							defaultValue={company?.name}
							error={errors.name?.message}
							{...register('name', { required: 'Preencha esse campo' })}
						/>
						<Input
							id="mission"
							type="text"
							inputMode="text"
							autoComplete="on"
							label="Missão da empresa"
							defaultValue={company?.mission}
							error={errors.mission?.message}
							placeholder="Missão da empresa"
							{...register('mission', { required: 'Preencha esse campo' })}
						/>
						<Input
							id="vision"
							type="text"
							inputMode="text"
							autoComplete="on"
							label="Visão da empresa"
							defaultValue={company?.vision}
							error={errors.vision?.message}
							placeholder="Visão da empresa"
							{...register('vision', { required: 'Preencha esse campo' })}
						/>
						<Input
							id="values"
							type="text"
							inputMode="text"
							autoComplete="on"
							label="Valores da empresa"
							defaultValue={company?.values}
							error={errors.values?.message}
							placeholder="Valores da empresa"
							{...register('values', { required: 'Preencha esse campo' })}
						/>
						<SubmitButton>Salvar</SubmitButton>
					</form>
				</Modal>
			)}
		</MainLayout>
	)
}

export default CompaniesPage
