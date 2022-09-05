<script>
	export let tags;
</script>

<p class="topics">
	Topics:
	{#each tags as tag}
		{#if tag != 'NA'}
			<a class="topic topic-box" href={`/topics/${tag}`}> {tag} </a>
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
		font-weight: bold;
	}

	.topic-box {
		padding: 0px 2px;
		margin: 0px 3px;
		/* border: 0.25px solid #dedede; */
		background-color: hsla(194, 100%, 96%, 0.3);
		font-weight: normal;
		/* box-shadow: 1px 1px rgba(135, 135, 135, 0.2); */
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		border: 0px solid hsla(252, 32%, 44%, 0.2);
		/* line-height: 1.5rem; */
	}

	.topic:hover {
		color: hsl(251, 100%, 21%);
		font-weight: bold;
		background-color: hsla(194, 100%, 96%, 0.7);
		outline: 0.2px solid hsla(252, 32%, 44%, 0.2);
	}
</style>
