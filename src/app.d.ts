// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session: boolean
		}
		// interface PageData {}
		// interface Platform {}
	}
}

interface Post {
	user: string
	id: string
	title: string
	body: string
	date: Date
	ups: number
}

export { Post }
