<script>
	import NavLink from './NavLink.svelte'
</script>

<nav
	class="mx-auto mt-6 max-w-md rounded-xl bg-neutral-950 p-2 font-medium text-neutral-400 shadow-lg shadow-neutral-700/10 ring-1 ring-white/10"
>
	<ul class="flex justify-around gap-4">
		<NavLink href="/">Home</NavLink>
		<NavLink href="/posts">Posts</NavLink>
		<NavLink href="/project">Project</NavLink>
	</ul>
</nav>
