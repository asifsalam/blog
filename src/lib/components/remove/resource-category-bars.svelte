<script>
	// import { allThemes } from '/src/lib/components/app-data.js';
	import { scaleLinear } from 'd3-scale';
	import { max } from 'd3-array';
	export let categories;

	const resourceScale = scaleLinear()
		.domain([0, max(categories, (d) => d.numArticles)])
		.range([0, 200]);
	console.log('barchart: ', resourceScale.domain());
	console.log(`${resourceScale(categories[2].numArticles)}px`);
</script>

<div class="sidebar-themes">
	<p class="themes-header">Categories</p>
	<div class="topic-bar">
		{#each categories as category}
			{#if category != 'NA'}
				<a class="topic topic-box" href={`/resources/${category.category}`}>
					{category.category}
				</a>
			{:else}
				<a class="topic topic-box" href={`/resources/untagged`}> untagged </a>
			{/if}
		{/each}
	</div>
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

	.topic-box {
		display: block;
		padding: 0px 5px;
		margin: 5px 10px 5px 0;
		background-color: #eafaff;
		font-weight: normal;
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		border: 0.1px solid hsla(251, 32%, 44%, 0.5);
		width: 100px;
	}

	.topic-box:hover {
		color: hsl(251, 100%, 21%);
		font-weight: bold;
	}
</style>
