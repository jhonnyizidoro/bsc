type PolarityTypes = 'positive' | 'negative'

type TargetTypes = 'percentage' | 'currency' | 'value'

type FrequencyTypes = 'yearly' | 'monthly' | 'daily'

interface DefaultResource {
	id: string
	createdAt: string
	updatedAt: string
}

interface User extends DefaultResource {
	name: string
	login: string
	profile: 'admin' | 'user' | 'ghost'
}

interface Prospect extends DefaultResource {
	name: string
}

interface Goal extends DefaultResource {
	name: string
	prospect: Prospect
	predecessor?: Goal
}

interface Indicator extends DefaultResource {
	name: string
	description: string
	polarity: PolarityTypes
	target: number
	targetType: TargetTypes
	frequency: FrequencyTypes
	formula: string
	goal: Goal
}

interface SignatureValue extends DefaultResource {
	value: number
	date: string
}

interface Signature extends DefaultResource {
	name: string
	frequency: FrequencyTypes
	values: SignatureValue[]
}
