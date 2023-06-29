import { z } from 'zod'
import type { PostCreate } from '../../types'

const PostSchema = z.object({
	title: z.string().min(1).max(2).trim().nonempty(),
	body: z.string().min(1).max(2).trim().nonempty(),
	user_id: z.number()
})

export function validatePost(post: PostCreate) {
	return PostSchema.parse(post)
}
