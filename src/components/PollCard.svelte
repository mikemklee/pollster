<script lang="ts">
	import type { Poll } from '../lib/types';

	export let poll: Poll;
</script>

<div class="poll-card">
	<h3>{poll.question}</h3>
	<ul>
		{#each poll.options as option}
			<li>{option}</li>
		{/each}
	</ul>
</div>

<style>
	.poll-card {
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 1rem;
		margin-bottom: 1rem;
	}
</style>
