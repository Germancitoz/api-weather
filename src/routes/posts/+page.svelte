<script lang="ts">
	export let data
</script>

<svelte:head>
	<title>Your posts</title>
</svelte:head>

<h1 class="mt-12 text-7xl font-bold">Your posts #{data.posts.length}</h1>
<ul class="mt-8 flex flex-col gap-4">
	{#each data.posts as post, i}
		<a
			class="max text overflow-hidden text-ellipsis whitespace-nowrap rounded-md border-2 border-neutral-700 p-4 transition-all hover:border-white"
			href="posts/{post.id}"><span class="text-xl font-bold">#{i + 1} </span>{post.title}</a
		>
	{/each}
</ul>
