import type { Actions } from '@sveltejs/kit'
import { createPost, getPosts } from '../services/posts/index.server'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const posts = await getPosts()
	console.log('reload')
	return {
		posts
	}
}

export const actions: Actions = {
	create: async ({ request }) => {
		const form = await request.formData()

		await createPost({
			title: 'hola mundo',
			body: 'hola mundo',
			user_id: 2
		})
	}
}
