<script>
	import ResourcesCard from '$lib/components/resources-card.svelte';
	export let articles;
	export let topic;
</script>

<div class="topic-container">
	{#each articles as article, i}
		<!-- <p>counter:{i}, title: {article.title}</p> -->
		<ResourcesCard {article} category={topic} />
	{/each}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100;300&display=swap');
	.topic-container {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 0px 15px;
		max-height: 1000px;
		overflow: scroll;
		align-content: start;
		margin-bottom: 15px;
	}
</style>
