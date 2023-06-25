<script>
	import NavLink from './NavLink.svelte'

	import { page } from '$app/stores'
</script>

<nav
	class="shadow-lg font-medium shadow-neutral-700/5 ring-1 ring-white/10 bg-neutral-950 text-neutral-400 rounded-xl max-w-md mx-auto p-2 mt-6"
>
	<ul class="flex gap-4 justify-around">
		<NavLink href="/">Home</NavLink>
		<NavLink href="/posts">Posts</NavLink>
		<NavLink href="/project">Project</NavLink>

		{#if $page.data.session}
			<NavLink href="/admin">L</NavLink>
		{/if}
	</ul>
</nav>
