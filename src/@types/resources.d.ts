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
	polarity: 'positive' | 'negative'
	target: number
	targetType: 'percentage' | 'currency' | 'value'
	frequency: 'yearly' | 'monthly' | 'daily'
	formula: string
	goal: Goal
}
