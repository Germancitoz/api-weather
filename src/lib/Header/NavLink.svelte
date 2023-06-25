<script lang="ts">
	import { page } from '$app/stores'

	export let href: string

	let isActive = false

	page.subscribe((data) => {
		isActive = data.url.pathname === href
	})
</script>

<li class:text-white={isActive} class="transition-all hover:text-white"><a {href}><slot /></a></li>
