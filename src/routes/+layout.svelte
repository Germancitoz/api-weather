<script lang="ts">
	import Header from '$lib/Header/Header.svelte'
	import '../app.css'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<Header {data} />
<slot />
