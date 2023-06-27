export interface Post {
	id: number
	title: string
	body: string
	ups: number
	user_id: number
	date: Date
}

export type PostCreate = Pick<Post, 'title' | 'body' | 'user_id'>
