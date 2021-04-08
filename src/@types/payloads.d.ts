interface LoginPayload {
	login: string
	password: string
}

interface ProspectPayload {
	name: string
}

interface GoalPayload {
	name: string
	prospectId: string
	predecessorId: string
}

interface IndicatorPayload {
	name: string
	description: string
	polarity: PolarityTypes
	target: number
	targetType: TargetTypes
	frequency: FrequencyTypes
	formula: string
	goalId: number
}

interface SignaturePayload {
	name: string
	frequency: FrequencyTypes
}

interface SignatureValuePayload {
	value: number
	day: string
	month: string
	year: string
	signatureId: string
}

interface CompanyPayload {
	name: string
	mission: string
	vision: string
	values: string
}

interface UserPayload {
	name: string
	login: string
	password: string
	profile: ProfileTypes
	companyId: string
}
