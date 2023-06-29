import { fail, type Actions } from '@sveltejs/kit'
import { createPost, getPosts } from '../services/posts/index.server'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const posts = await getPosts()
	return {
		posts
	}
}

export const actions: Actions = {
	create: async ({ request }) => {
		const form = await request.formData()
		const title = form.get('title') as string
		const body = form.get('body') as string

		const post = await createPost({ title, body, user_id: 1 })

		if (post instanceof Error) {
			return fail(303, {
				success: false,
				errors: [post.message]
			})
		}

		return {
			success: true
		}
	}
}
