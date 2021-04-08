import { SelectOption } from '../components/Select/Select'

const prospectOptions = (prospects: Prospect[]): SelectOption[] =>
	prospects.map(({ id, name }) => ({ value: id, label: name }))

const goalOptions = (goals: Goal[]): SelectOption[] =>
	goals.map(({ id, name }) => ({ value: id, label: name }))

const indicatorOptions = (indicators: Indicator[]): SelectOption[] =>
	indicators.map(({ id, name }) => ({ value: id, label: name }))

const companyOptions = (companies: Company[]): SelectOption[] =>
	companies.map(({ id, name }) => ({ value: id, label: name }))

const polarityOptions = (): SelectOption[] => [
	{ value: 'positive', label: 'Positiva' },
	{ value: 'negative', label: 'Negativa' },
]

const targetTypeOptions = (): SelectOption[] => [
	{ value: 'percentage', label: 'Percentual' },
	{ value: 'currency', label: 'Real' },
	{ value: 'valor', label: 'Valor' },
]

const frequencyOptions = (): SelectOption[] => [
	{ value: 'yearly', label: 'Anual' },
	{ value: 'monthly', label: 'Mensal' },
	{ value: 'daily', label: 'Diária' },
]

const profileOptions = (): SelectOption[] => [
	{ value: 'admin', label: 'Administrador' },
	{ value: 'user', label: 'Usuário' },
	{ value: 'ghost', label: 'Visualização' },
]

const dayOptions = (): SelectOption[] => {
	const options = []
	for (let i = 1; i < 32; i++) {
		options.push({ value: String(i), label: String(i) })
	}
	return options
}

const monthOptions = (): SelectOption[] => {
	const options = []
	for (let i = 1; i < 13; i++) {
		options.push({ value: String(i), label: String(i) })
	}
	return options
}

const yearOptions = (): SelectOption[] => {
	const options = []
	for (let i = new Date().getFullYear() + 1; i > 1930; i--) {
		options.push({ value: String(i), label: String(i) })
	}
	return options
}

export const SelectOptions = {
	prospect: prospectOptions,
	goal: goalOptions,
	indicator: indicatorOptions,
	company: companyOptions,
	polarity: polarityOptions,
	targetType: targetTypeOptions,
	frequency: frequencyOptions,
	profile: profileOptions,
	day: dayOptions,
	month: monthOptions,
	year: yearOptions,
}
