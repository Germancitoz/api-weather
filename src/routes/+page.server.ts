import type { Actions } from '@sveltejs/kit'
import type { Post } from '../app'
import type { PageServerLoad } from './$types'

function getPosts(): Post[] {
	const arrayFrom40 = Array.from(Array(40).keys())

	const posts: Post[] = arrayFrom40.map((i) => ({
		user: 'user',
		id: String(i),
		title: `Post ${i}`,
		body: 'asdadad',
		date: new Date(),
		ups: 0
	}))

	return posts
}

export const load: PageServerLoad = async () => {
	const posts = getPosts()

	return {
		posts
	}
}

export const actions: Actions = {
	create: async ({ request }) => {
		const form = await request.formData()

		const title = form.get('title')
		const body = form.get('body')

		console.log('creating', title, body)
	}
}
