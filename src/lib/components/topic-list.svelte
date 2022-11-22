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
	/* .category-header {
		background-image: url('https://unsplash.com/photos/VWcPlbHglYc');
		display: grid;
		grid-template-columns: 2fr 4fr 3fr;
		height: 3em;
		padding: 0px 0px 10px 0px;
		align-items: center;
		vertical-align: middle;
		font-family: 'Crete Round', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	}

	.category-title {
		margin: 0;
		padding-left: 10px;
		padding-bottom: 0;
		font-size: x-large;
		font-weight: 600;
		color: hsla(251, 100%, 20%, 1);
	}
	 .article-count {
		font-family: 'Scope One', Roboto, Arial, Helvetica, sans-serif;
		font-size: 1em;
		font-weight: bold;
		text-align: right;
		color: hsla(251, 100%, 20%, 1);
	} 
	.article-count a {
		font-weight: normal;
		opacity: 0.7;
		text-decoration: none;
	}
	
	.article-count a:hover {
		text-decoration: underline;
		opacity: 1;
		font-weight: bold;
	}
	
	.category-img {
		background-color: rgba(255, 0, 0, 0.019);
		bottom: 0;
		left: 0;
	}  

	img {
		display: inline;
		position: relative;
		height: inherit;
	}
	*/
</style>
