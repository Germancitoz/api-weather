<script lang="ts">
	import { enhance } from '$app/forms'
	import { createEventDispatcher } from 'svelte'

	export let focus = false

	const dispatch = createEventDispatcher()
	async function handleFocus() {
		dispatch('focus', -1)
	}
</script>

<form
	method="POST"
	action="?/create"
	on:mouseenter={handleFocus}
	use:enhance
	class:opacity-40={!focus}
	class="flex flex-col rounded-lg bg-neutral-950 p-4 ring-1 ring-white/10"
>
	<div class="flex flex-col gap-4">
		<input
			class="rounded-md bg-neutral-800 p-2 text-lg text-neutral-100 outline-none placeholder:text-neutral-500 focus:outline-neutral-200"
			type="text"
			name="title"
			placeholder="CocaCola > Pepsi"
			aria-label="asdadadad"
			maxlength="100"
			required
		/>

		<textarea
			class="resize-none rounded-md bg-neutral-800 p-2 text-neutral-100 outline-none placeholder:text-neutral-500 focus:outline-neutral-200"
			name="body"
			placeholder="CocaCola is better in the all aspectsz"
			cols="1"
			rows="4"
			required
			maxlength="300"
		/>
	</div>
	<button
		class="mt-8 rounded-lg bg-white p-3 text-lg font-bold text-neutral-900 transition-all hover:bg-neutral-950 hover:text-white hover:ring-2 hover:ring-white"
		type="submit">Post</button
	>
</form>
