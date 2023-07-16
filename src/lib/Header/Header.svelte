<script lang="ts">
	import type { PageData } from '../../routes/$types'
	import Nav from './Nav.svelte'

	export let data: PageData
</script>

<h1
	class="overflow-hidden bg-gradient-to-r bg-clip-text text-center text-6xl font-bold text-transparent text-white md:text-7xl"
>
	OnlyFacts
</h1>
<Nav {data} />
