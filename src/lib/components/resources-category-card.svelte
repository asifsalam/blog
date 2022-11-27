<script>
	import ResourcesCard from '$lib/components/resources-card.svelte';
	import { clickedCategory } from '$lib/json/stores';
	import { goto } from '$app/navigation';
	import { allCategories } from '$lib/json/stores';
	export let articles;
	export let category;
	export let displayArticles = 5;
	let categories = $allCategories;
	// console.log('resources-category-card: ', category);
	function categoryClicked(selectedCategory) {
		// @ts-ignore
		$clickedCategory = selectedCategory;
		goto('/resources/category');
		console.log('resources-category-card-clicked: ', $clickedCategory);
	}
</script>

<div class="category-container">
	<div class="category-header">
		<img class="category-img" src={category.img} alt={category.title} srcset="" />
		<h2
			class="category-title view-all"
			on:click={() => {
				categoryClicked(category.category);
			}}
		>
			{category.title.toLowerCase()}
		</h2>
		<h3 class="category-title article-count">
			{#if articles.length > displayArticles}
				{displayArticles}
			{:else}
				{articles.length}
			{/if}
			of
			<span
				class="view-all"
				on:click={() => {
					categoryClicked(category.category);
				}}>{articles.length}</span
			>
			items<br />
			<p
				class="article-count view-all"
				on:click={() => {
					categoryClicked(category.category);
				}}
			>
				view all
			</p>
			<!-- <button class="topic topic-box" on:click={() => categoryClicked(category.category)}
				>{category.category}</button -->
			<!-- <a class="article-count" href={`/resources/${category.category}`}>view all</a> -->
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
		color: hsla(251, 100%, 20%, 0.6);
	}
	.article-count {
		font-family: 'Scope One', Roboto, Arial, Helvetica, sans-serif;
		font-size: 1em;
		font-weight: bold;
		text-align: right;
		color: hsla(251, 100%, 20%, 0.6);
		margin: 0;
	}
	.view-all {
		cursor: pointer;
	}
	.view-all:hover {
		text-decoration: underline 4px;
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

	.topic-box {
		display: inline-block;
		padding: 0px 5px;
		margin: 5px 10px 5px 0;
		background-color: #eafaff;
		font-family: Roboto, Arial, Helvetica, sans-serif;
		font-weight: normal;
		font-size: 1em;
		cursor: pointer;
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		border: 0.1px solid hsla(251, 32%, 44%, 0.2);
	}

	.topic:hover {
		color: hsl(251, 100%, 21%);
		font-weight: bold;
	}
</style>
