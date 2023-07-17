import type { Post, PostCreate, PostWithUser } from '../../types'
import { supabase } from '../supabase.server'
import { validatePost } from './validation.server'

export async function getPosts() {
	return (
		await supabase
			.from('posts')
			.select('*, profiles (email, user_name, avatar_url)')
			.order('id', { ascending: false })
	).data as PostWithUser[]
}

export async function getPostById(id: Post['id']): Promise<PostWithUser | null> {
	const { data } = await supabase
		.from('posts')
		.select('*, profiles (email, user_name, avatar_url)')
		.eq('id', id)

	return data?.[0] ?? null
}

export async function getPostsByUserId(user_id: Post['user_id'] | undefined, limit = 3) {
	return (
		await supabase
			.from('posts')
			.select('*, profiles (email, user_name, avatar_url)')
			.limit(limit)
			.eq('user_id', user_id)
	).data as PostWithUser[]
}

export async function createPost(post: PostCreate) {
	const validatedPost = validatePost(post)

	if (!validatedPost.success) {
		return validatedPost
	}

	const { error } = await supabase.from('posts').insert([validatedPost.data])

	if (error) {
		return {
			success: false,
			error
		}
	}

	return validatedPost
}
