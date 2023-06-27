import type { Post, PostCreate } from '../../types'
import { supabase } from '../supabase.server'

export async function getPosts() {
	return (await supabase.from('posts').select('*')).data as Post[]
}

export async function createPost(post: PostCreate) {
	const { title, body, user_id } = post

	await supabase.from('posts').insert([{ title, body, user_id }])
}
