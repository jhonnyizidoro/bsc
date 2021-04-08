export const addToResourceArray = <T extends DefaultResource>(
	resource: T,
	resources: T[]
): T[] => {
	return [...resources, resource]
}

export const removeFromResourceArray = <T extends DefaultResource>(
	resource: T,
	resources: T[]
): T[] => {
	return resources.filter(({ id }) => id !== resource.id)
}

export const updateInResourceArray = <T extends DefaultResource>(
	resource: T,
	resources: T[]
): T[] => {
	return resources.map(oldResource =>
		oldResource.id === resource.id ? resource : oldResource
	)
}

export const ResourceArray = {
	add: addToResourceArray,
	remove: removeFromResourceArray,
	update: updateInResourceArray,
}
