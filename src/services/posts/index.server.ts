import type { Post, PostCreate } from '../../types'
import { supabase } from '../supabase.server'
import { validatePost } from './validation.server'

export async function getPosts() {
	return (await supabase.from('posts').select('*')).data as Post[]
}

export async function getPostById(id: Post['id']): Promise<Post | null> {
	const { data } = await supabase.from('posts').select('*').eq('id', id)
	return data?.[0] ?? null
}

export async function getPostsByUserId(user_id: Post['user_id'] | undefined, limit = 3) {
	return (await supabase.from('posts').select('*').limit(limit).eq('user_id', user_id))
		.data as Post[]
}

export async function createPost(post: PostCreate) {
	try {
		const validatedPost = validatePost(post)
		await supabase.from('posts').insert([validatedPost])
	} catch (error) {
		return error
	}
}
