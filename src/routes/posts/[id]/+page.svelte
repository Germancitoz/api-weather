<script lang="ts">
	import { formatRelativeDate } from '$lib/date'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<svelte:head>
	<title>{data?.post?.title ?? 'Post not found'}</title>
</svelte:head>

{#if data.post}
	<main class="mt-12 rounded-xl bg-neutral-950 p-6">
		<header class="flex items-center gap-4">
			<img
				class="h-12 w-12 rounded-lg"
				src={data.post.profiles.avatar_url}
				alt="Avatar of {data.post.profiles.user_name}"
			/>
			<aside>
				<h1 class="text-xl">{data.post.profiles.user_name}</h1>
				<h1 class="text-sm text-neutral-400">{formatRelativeDate(data.post.date)}</h1>
			</aside>
		</header>

		<h1 class="mt-8 break-all text-5xl font-bold">{data.post.title}</h1>
		<p class="mt-4 break-words text-lg">
			{data.post.body}
		</p>
<!-- 		<form use:enhance method="POST">
			<button
				class="mt-5 flex gap-2 rounded-lg transition-all hover:scale-105 {data.isAlreadyLiked
					? 'ring-cyan-400'
					: 'ring-white'} bg-neutral-900 px-4 py-2 font-bold ring-2"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class={data.isAlreadyLiked ? 'fill-cyan-900' : 'fill-white'}
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
						d="M10.586 3l-6.586 6.586a2 2 0 0 0 -.434 2.18l.068 .145a2 2 0 0 0 1.78 1.089h2.586v7a2 2 0 0 0 2 2h4l.15 -.005a2 2 0 0 0 1.85 -1.995l-.001 -7h2.587a2 2 0 0 0 1.414 -3.414l-6.586 -6.586a2 2 0 0 0 -2.828 0z"
						stroke-width="0"
						fill="currentColor"
					/>
				</svg>{data.post.ups}</button
			>
		</form> -->
	</main>

	<h2 class="mt-8 text-xl">
		Show more of <span class="text-2xl font-bold underline decoration-wavy"
			>{data.post.profiles.user_name}</span
		>
	</h2>
	<section class="mt-4 flex gap-4">
		{#each data.otherPostsByUser as post}
			<a
				href="/posts/{post.id}"
				class="whitespace-nowra max-w-sm overflow-hidden text-ellipsis break-words rounded-xl bg-neutral-950 p-6 ring-white transition-all hover:ring-2"
			>
				<h1 class="overflow-hidden text-ellipsis whitespace-nowrap">
					{post.title}
				</h1>
			</a>
		{/each}
	</section>
{:else}
	<h1 class="mt-16 text-center text-3xl">Post not found</h1>
{/if}
