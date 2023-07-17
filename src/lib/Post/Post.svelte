<script lang="ts">
	import { formatRelativeDate } from '$lib/date'
	import { createEventDispatcher } from 'svelte'
	import type { PostWithUser } from '../../types'

	import IconNewPage from '$lib/Icons/IconNewPage.svelte'

	export let focus = false
	export let post: PostWithUser

	const dispatch = createEventDispatcher()
	async function onHover() {
		dispatch('focus', post.id)
	}
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<a
	href="/posts/{post.id}"
	class:opacity-40={!focus}
	on:mouseenter={onHover}
	class="
		group
		relative
		rounded-lg bg-neutral-950
	 	p-4 ring-1 ring-white/10 transition-all duration-300 hover:ring-white"
>
	<header class="flex items-center justify-between">
		<h3 class="overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-normal">
			{post.title}
			<IconNewPage />
		</h3>
		<img
			src={post.profiles.avatar_url}
			alt="Avatar of {post.profiles.user_name}"
			class="h-8 w-8 rounded-full"
		/>
	</header>
	<p class="text-sm text-neutral-500">
		by <span class="text-neutral-400">{post.profiles.user_name}</span>
	</p>
	<p class="mt-4 line-clamp-3 text-neutral-300">
		{post.body}
	</p>
	<footer class="mt-8 flex items-center justify-start gap-2">
		<div class="h-5 w-[2px] bg-neutral-700" />
		<p class="text-sm">{formatRelativeDate(post.date)}</p>
	</footer>
</a>
