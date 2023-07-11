<script lang="ts">
	import type { Poll } from '../lib/types';

	export let poll: Poll;
</script>

<div class="border-t border-neutral-300 py-4">
	<h3 class="font-medium mb-4">{poll.question}</h3>
	<ul class="flex flex-col gap-y-2">
		{#each poll.options as option}
			<li class="border-2 border-neutral-200 px-2 py-2 rounded cursor-pointer">{option}</li>
		{/each}
	</ul>
</div>
