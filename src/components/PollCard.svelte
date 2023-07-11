<script lang="ts">
	import type { Poll } from '../lib/types';

	export let poll: Poll;
</script>

<div class="border-t border-neutral-300 py-4">
	<div class="flex items-center mb-2">
		<img src={poll.author.profileImage} alt="avatar" class="w-10 h-10 rounded-full mr-2" />
		<div class="flex flex-col">
			<span class="text-sm font-medium">{poll.author.name}</span>
			<span class="text-xs text-neutral-500">@{poll.author.handle}</span>
		</div>
		<span class="text-sm text-neutral-500 ml-auto">
			{poll.postedAt}
		</span>
	</div>
	<h3 class="font-medium mb-4">{poll.question}</h3>
	<ul class="flex flex-col gap-y-2">
		{#each poll.options as option}
			<li class="border-2 border-neutral-200 px-2 py-2 rounded cursor-pointer">{option}</li>
		{/each}
	</ul>
</div>
