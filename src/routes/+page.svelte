<script lang="ts">
	import { onMount } from 'svelte';
	import type { Poll } from '../lib/types';
	import { getPolls } from '../lib/api';
	import PollCard from '../components/PollCard.svelte';

	let polls: Poll[] = [];

	onMount(async () => {
		polls = await getPolls();
	});
</script>

<section class="max-w-xl mx-auto mt-10">
	<h1 class="text-3xl font-semibold mb-6">Pollster</h1>
	<div>
		{#each polls as poll (poll.id)}
			<PollCard {poll} />
		{/each}
	</div>
</section>
