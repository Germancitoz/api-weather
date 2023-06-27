<script lang="ts">
	import Post from '$lib/Post/Post.svelte'
	import PostForm from '$lib/Post/PostForm.svelte'

	export let data

	let focus = -1

	function handleFocus(event: CustomEvent<number>) {
		focus = event.detail
	}

	function handleFocusLeave() {
		focus = -1
	}
</script>

<main
	on:mouseleave={handleFocusLeave}
	class="mx-auto mt-6 flex max-w-3xl flex-col gap-6 transition-all"
>
	<PostForm focus={focus === -1} on:focus={handleFocus} />
	{#each data.posts as post}
		{#if focus === -1 || post.id == focus}
			<Post {post} on:focus={handleFocus} focus />
		{:else}
			<Post {post} on:focus={handleFocus} />
		{/if}
	{/each}
</main>
