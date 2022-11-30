<script>
	export let tags;
	export let size = 1;
	let boxSize = 'size-' + size;
</script>

<p class="topics">
	<span style="font-size:1.1em;font-weight:bold">Topics:</span>
	{#each tags as tag}
		{#if tag != 'NA'}
			<a class="topic topic-box {boxSize}" href={`/topics/${tag}`}> {tag} </a>
		{:else}
			<a class="topic topic-box" href={`/topics/untagged`}> untagged </a>
		{/if}
	{/each}
</p>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100;300&display=swap');

	.topics {
		display: block;
		margin: 0 0 3px 0px;
		font-size: smaller;
	}

	.size-1 {
		font-size: 0.9rem;
	}

	.size-2 {
		font-size: 1rem;
	}

	.topic-box {
		padding: 0px 2px;
		margin: 0px 3px;
		background-color: hsla(195, 89%, 69%, 0.1);
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		border: 0px solid hsla(252, 32%, 44%, 0.2);
	}

	.topic:hover {
		color: hsl(251, 100%, 21%);
		font-weight: bold;
		background-color: hsla(195, 89%, 69%, 0.4);
		outline: 0.2px solid hsla(252, 32%, 44%, 0.2);
	}
</style>
