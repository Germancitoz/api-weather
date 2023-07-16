export interface Post {
	id: number
	title: string
	body: string
	ups: number
	user_id: string
	date: Date
}

export interface PostWithUser extends Post {
	profiles: {
		email: string
		user_name: string
		avatar_url: string
	}
}

export type PostCreate = Pick<Post, 'title' | 'body' | 'user_id'>
