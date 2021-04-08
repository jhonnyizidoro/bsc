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
