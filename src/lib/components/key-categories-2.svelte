<script>
	import { clickedCategory } from '$lib/json/stores';
	// import Category from 'src/routes/resources/[category]/[category].svelte';
	export let categories;
	// console.log('key-categories-categories: ', categories);
	function categoryClicked(category) {
		// console.log('key-categories-2-clicked: ', category);
		$clickedCategory = category;
		console.log('key-category-clicked: ', $clickedCategory);
	}
</script>

<div class="sidebar-themes">
	<p class="themes-header">Themes</p>
	<p class="topics">
		{#each categories as category}
			{#if category != 'NA'}
				<!-- <p class="topic topic-box" on:click={categoryClicked(category)}></p> -->
				<a class="topic topic-box" href={`/resources/${category}`}>{category}</a>
			{:else}
				<p class="topic topic-box" on:click={categoryClicked('untagged')}>untagged</p>
			{/if}
		{/each}
	</p>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Sanchez&family=Pridi&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Scope+One&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	.sidebar-themes {
		margin: 0;
		padding: 0;
	}
	.themes-header {
		padding: 5px 0;
		margin: 10px 0;
		font-family: 'Pridi', Georgia, 'Times New Roman', Times, serif;
		font-size: 1.4em;
		font-weight: 300;
		color: hsla(251, 100%, 20%, 0.9);
	}

	.topics {
		display: inline;
		line-height: 1.5;
		margin: 0 0 50px 0px;
		font-size: 1.2rem;
		font-weight: bold;
	}

	.topic-box {
		display: inline-block;
		padding: 0px 5px;
		margin: 5px 10px 5px 0;
		background-color: #eafaff;
		font-weight: normal;
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		border: 0.1px solid hsla(251, 32%, 44%, 0.5);
	}

	.topic:hover {
		color: hsl(251, 100%, 21%);
		font-weight: bold;
	}
</style>
