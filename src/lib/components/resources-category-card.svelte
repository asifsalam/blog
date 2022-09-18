<script>
	import ResourcesCard from '$lib/components/resources-card.svelte';

	import { allCategories } from '$lib/json/stores';
	export let articles;
	export let category;
	export let displayArticles = 5;
	let categories = $allCategories;
	// console.log('resources-category-card: ', $allCategories[2]);
</script>

<div class="category-container">
	<div class="category-header">
		<img class="category-img" src={category.img} alt={category.title} srcset="" />
		<h2 class="category-title">{category.title.toLowerCase()}</h2>
		<h3 class="category-title article-count">
			{#if articles.length > displayArticles}
				{displayArticles}
			{:else}
				{articles.length}
			{/if}
			of {articles.length} items<br />
			<a class="article-count" href={`/resources/${category.category}`}>view all</a>
		</h3>
	</div>
	{#each articles.slice(0, displayArticles) as article}
		<ResourcesCard {article} {category} />
	{/each}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100;300&display=swap');

	.category-container {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 0px 15px;
		max-height: 1000px;
		overflow: hidden;
		align-content: start;
		margin-bottom: 15px;
	}
	.category-header {
		/* text-align: left; */
		/* width: 50%; */
		background-image: url('https://unsplash.com/photos/VWcPlbHglYc');
		display: grid;
		grid-template-columns: 2fr 5fr 3fr;
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
		font-size: 1.2em;
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
		/* font-family: 'Roboto Slab', Arial, Helvetica, sans-serif; */
		font-weight: normal;
		opacity: 0.7;
		text-decoration: none;
	}
	.article-count a:hover {
		/* font-family: 'Roboto Slab', Arial, Helvetica, sans-serif; */
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
		/* outline: 0.5px solid rgb(119, 119, 119); */
		/* top: 50%;
        left: 10%;
        transform: translate(0%, -50%); */
	}
</style>
