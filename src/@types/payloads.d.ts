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
