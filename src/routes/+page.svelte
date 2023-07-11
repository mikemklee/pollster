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

<h1>Pollster</h1>
<div>
	{#each polls as poll (poll.id)}
		<PollCard {poll} />
	{/each}
</div>
