<script lang="ts">
	import { enhance } from '$app/forms'
	import type { PageData } from '../../routes/$types'
	import NavLink from './NavLink.svelte'

	export let data: PageData
</script>

<div class="mx-auto mt-8 flex max-w-md items-stretch justify-center gap-2">
	<nav
		class="w-full rounded-xl bg-neutral-950 p-2 font-medium text-neutral-400 shadow-lg shadow-neutral-700/10 ring-1 ring-white/10"
	>
		<ul class="flex justify-around gap-4">
			<NavLink href="/">Home</NavLink>
			<NavLink href="/posts">Posts</NavLink>
			<NavLink href="/project">Project</NavLink>
		</ul>
	</nav>

	{#if data?.session}
		<a href="/posts">
			<img
				class="flex h-10 w-12 items-center justify-center rounded-xl bg-neutral-950 py-2 pl-2 pr-1 font-medium text-neutral-400 shadow-lg shadow-neutral-700/10 ring-1 ring-white/10 transition-all hover:ring-white"
				src={data.session.user_metadata.avatar_url}
				alt="Avatar of {data.session.user_metadata.full_name}"
			/>
		</a>
	{/if}

	<form
		method="POST"
		use:enhance
		class="flex items-center justify-center rounded-xl bg-neutral-950 py-2 pl-2 pr-1 font-medium text-neutral-400 shadow-lg shadow-neutral-700/10 ring-1 ring-white/10 transition-all hover:ring-white"
	>
		{#if data?.session}
			<button formaction="/auth?/logout">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M13 12v.01" />
					<path d="M3 21h18" />
					<path d="M5 21v-16a2 2 0 0 1 2 -2h6m4 10.5v7.5" />
					<path d="M21 7h-7m3 -3l-3 3l3 3" />
				</svg>
			</button>
		{:else}
			<button formaction="/auth?/login">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="m-0 p-0"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
					/>
					<path d="M20 12h-13l3 -3m0 6l-3 -3" />
				</svg>
			</button>
		{/if}
	</form>
</div>
