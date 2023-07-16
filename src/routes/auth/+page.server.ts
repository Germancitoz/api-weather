import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from '../$types'

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.getSession()

	if (session) {
		throw redirect(303, '/')
	}

	const { data, error } = await locals.supabase.auth.signInWithOAuth({
		provider: 'github'
	})

	if (error) {
		throw error
	}

	throw redirect(303, data.url)
}

export const actions: Actions = {
	login: async ({ locals }) => {
		const { data, error } = await locals.supabase.auth.signInWithOAuth({
			provider: 'github'
		})

		if (error) {
			throw error
		}

		throw redirect(303, data.url)
	},

	logout: async ({ locals }) => {
		const { error } = await locals.supabase.auth.signOut()

		if (error) {
			throw error
		}

		throw redirect(303, '/')
	}
}
