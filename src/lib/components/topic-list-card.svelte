<script>
	export let tags;
	export let size = 1;
	import { goto } from '$app/navigation';
	import { clickedTopic } from '$lib/json/stores';

	let boxSize = 'size-' + size;
	// console.log('component: topic-list-card');
	function topicClicked(topic) {
		// @ts-ignore
		$clickedTopic = topic;
		goto('/resources/topic/');
		// console.log('topic-card: ', $clickedTopic);
	}
</script>

<p class="tags">
	<!-- <span style="font-size:1.1em;font-weight:bold">tags </span> -->
	{#each tags as tag}
		{#if tag != 'NA'}
			<a class="topic topic-box {boxSize}" href={`/resources/topics/${tag}`}>{tag}</a>
		{:else}
			<a class="topic topic-box" href={`/resources/topics/untagged`}>untagged</a>
		{/if}
	{/each}
</p>

<!-- <p class="topics">
	<span style="font-size:1.1em;font-weight:bold">Topics:</span>
	{#each tags as topic}
		{#if topic != 'NA'}
			<button
				class="topic topic-box {boxSize}"
				on:click={() => {
					topicClicked(topic);
				}}
			>
				{topic}
			</button>
		{:else}
			<p>Error</p>
		{/if}
	{/each}
</p> -->
<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100;300&display=swap');

	.tags {
		display: block;
		margin: 0 0 0px 0px;
		font-size: smaller;
	}

	.size-1 {
		font-size: 0.9rem;
	}

	.size-2 {
		font-size: 1rem;
	}

	.topic-box {
		padding: 0px 4px;
		/* margin: 0px 3px; */
		margin: 0px 5px 3px 0px;
		/* background-color: hsla(195, 89%, 69%, 0.1); */
		background-color: #eafaff;
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		/* border: 0px solid hsla(252, 32%, 44%, 0.2); */
		border: 1px solid hsla(251, 32%, 44%, 0.2);
		display: inline-block;
	}

	.topic:hover {
		outline: 0.2px solid hsla(252, 32%, 44%, 0.2);
		cursor: pointer;
		color: hsl(253, 39%, 95%);
		background-color: hsl(251, 100%, 15%);
	}
</style>
