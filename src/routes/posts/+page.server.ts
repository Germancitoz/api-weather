import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from '../$types'
import { getPostsByUserId } from '../../services/posts/index.server'

export const load: PageServerLoad = async ({ locals }) => {
	const hasSession = await locals.getSession()

	if (!hasSession) {
		throw redirect(308, '/auth')
	}

	const posts = await getPostsByUserId(hasSession.user.id)

	return {
		posts
	}
}
