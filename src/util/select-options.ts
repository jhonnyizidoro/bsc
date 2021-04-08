import { SelectOption } from '../components/Select/Select'

const prospectOptions = (prospects: Prospect[]): SelectOption[] =>
	prospects.map(({ id, name }) => ({ value: id, label: name }))

const goalOptions = (goals: Goal[]): SelectOption[] =>
	goals.map(({ id, name }) => ({ value: id, label: name }))

const indicatorOptions = (indicators: Indicator[]): SelectOption[] =>
	indicators.map(({ id, name }) => ({ value: id, label: name }))

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

export const SelectOptions = {
	prospect: prospectOptions,
	goal: goalOptions,
	indicator: indicatorOptions,
	polarity: polarityOptions,
	targetType: targetTypeOptions,
	frequency: frequencyOptions,
}
