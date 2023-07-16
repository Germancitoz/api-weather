import { fail, redirect, type Actions } from '@sveltejs/kit'
import { createPost, getPosts } from '../services/posts/index.server'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const posts = await getPosts()

	return {
		posts
	}
}

export const actions: Actions = {
	create: async ({ request, locals, fetch }) => {
		const session = await locals.getSession()

		if (!session) {
			throw redirect(303, '/auth')
		}

		const form = await request.formData()
		const title = form.get('title') as string
		const body = form.get('body') as string

		const post = await createPost({ title, body, user_id: session.user.id })

		if (!post.success) {
			return fail(303, {
				success: false,
				errors: post.error.flatten().fieldErrors
			})
		}

		return {
			success: true
		}
	}
}
