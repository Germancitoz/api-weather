import type { Post, PostCreate } from '../../types'
import { supabase } from '../supabase.server'
import { validatePost } from './validation.server'

export async function getPosts() {
	return (await supabase.from('posts').select('*')).data as Post[]
}

export async function createPost(post: PostCreate) {
	try {
		const validatedPost = validatePost(post)
		await supabase.from('posts').insert([validatedPost])
	} catch (error) {
		return error
	}
}
