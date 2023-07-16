<script lang="ts">
	export let data
</script>

{#each data.posts as post}
	<h1>{post.title}</h1>
{/each}
