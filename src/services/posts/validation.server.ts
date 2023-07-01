import { z } from 'zod'
import type { PostCreate } from '../../types'

const PostSchema = z.object({
	title: z.string().min(10).max(100).trim().nonempty(),
	body: z.string().min(40).max(300).trim().nonempty(),
	user_id: z.number()
})

export function validatePost(post: PostCreate) {
	return PostSchema.parse(post)
}
