<script lang="ts">
	import { enhance } from '$app/forms'
	import { createEventDispatcher } from 'svelte'
	import type { ActionData } from '../../routes/$types'

	export let focus = false
	export let data: ActionData

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
			id="title"
			class:outline-red-900={data?.errors?.title}
			class="rounded-md bg-neutral-800 p-2 text-lg {!data?.errors?.title
				? 'focus:outline-neutral-200'
				: ''} text-neutral-100 outline-none placeholder:text-neutral-500"
			type="text"
			name="title"
			placeholder="CocaCola > Pepsi"
			aria-label="Post title"
		/>
		{#if data?.errors?.title}
			<label class="text-sm text-neutral-400" for="title">*{data.errors.title}*</label>
		{/if}

		<textarea
			id="body"
			class:outline-red-900={data?.errors?.body}
			class="resize-none rounded-md bg-neutral-800 p-2 text-neutral-100 outline-none placeholder:text-neutral-500 {!data
				?.errors?.title
				? 'focus:outline-neutral-200'
				: ''}"
			name="body"
			placeholder="CocaCola is better in the all aspectsz"
			cols="1"
			rows="4"
		/>
		{#if data?.errors?.body}
			<label for="body" class="text-sm text-neutral-400">*{data.errors.body}*</label>
		{/if}
	</div>
	<button
		class="mt-4 rounded-lg bg-white p-3 text-lg font-bold text-neutral-900 transition-all hover:bg-neutral-950 hover:text-white hover:ring-2 hover:ring-white"
		type="submit">Post</button
	>
</form>
