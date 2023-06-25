import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.session = Math.floor(Math.random() * 1000) > 500 ? true : false
	return resolve(event)
}
