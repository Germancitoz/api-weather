import type { PageServerLoad } from '../$types'
import { getPostById, getPostsByUserId } from '../../../services/posts/index.server'

export const load: PageServerLoad = async ({ params }) => {
	const { id } = params

	const post = await getPostById(id)
	const otherPostsByUser = await getPostsByUserId(post?.user_id)
	const isAlreadyLiked = true

	return {
		post,
		otherPostsByUser,
		isAlreadyLiked
	}
}
