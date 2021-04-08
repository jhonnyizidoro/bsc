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

interface GoalPredecessor extends DefaultResource {
	name: string
}

interface Goal extends DefaultResource {
	name: string
	prospect: Prospect
	predecessor?: GoalPredecessor
}
