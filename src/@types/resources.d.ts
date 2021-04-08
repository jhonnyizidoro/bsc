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
