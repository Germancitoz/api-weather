import type { Actions } from '@sveltejs/kit'
import type { PageServerLoad } from '../$types'
import { getPostById, getPostsByUserId } from '../../../services/posts/index.server'

export const load: PageServerLoad = async ({ params, locals }) => {
	const { id } = params

	const post = await getPostById(id)
	const otherPostsByUser = await getPostsByUserId(post?.user_id)
	const profile = await locals.getSession()
	const isAlreadyLiked = await locals.supabase
		.from('posts_ups')
		.select('id')
		.eq('post_id', id)
		.eq('user_id', profile?.user.id)

	console.log(isAlreadyLiked)

	return {
		post,
		otherPostsByUser,
		isAlreadyLiked
	}
}

export const actions: Actions = {
	default: async (event) => {
		const supabase = event.locals.supabase

		const profile = await event.locals.getSession()

		if (!profile) {
			console.log('no estas logueado')
			return {
				status: 401,
				body: {
					message: 'Unauthorized'
				}
			}
		}

		/* si el post es mio no lo puedo likear */
		/* 		console.log(event.params.id)
		const post = await getPostById(Number(event.params.id))
		if (post?.user_id === profile?.user.id) {
			console.log('no podes likear tu propio post')
			return {
				status: 401,
				body: {
					message: 'Unauthorized'
				}
			}
		} */

		const asx = await supabase.from('posts_ups').insert({
			post_id: event.params.id,
			user_id: profile?.user.id
		})
		console.log(asx)
	}
}
