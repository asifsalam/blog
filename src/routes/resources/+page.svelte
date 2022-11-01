<script>
	import { articleList, allCategories, allThemes } from '$lib/json/stores';
	import { filterCategory } from '$lib/modules/utility_functions';
	import RandomQuote from '$lib/components/random-quote.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import Sidebar from '$lib/components/sidebar-resources.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';
	import ResourcesCategoryCard from '$lib/components/resources-category-card.svelte';
	// export let errors, data;

	const categories = $allCategories.filter((d) => d.id > 10);
	const headingTitle = 'Resource categories';
	const totalQuantity = $articleList.length;
	const articlesPerCategory = 3;
	const displayQuantity = articlesPerCategory * categories.length;

	let article = $articleList[6];
	console.log('resources-page');
</script>

<RandomQuote />
<Breadcrumbs />

<div class="container">
	<Sidebar allCategories={$allCategories} />
	<div class="posts">
		<SectionHeading {headingTitle} {displayQuantity} {totalQuantity} />
		<div class="resources-container">
			{#each categories as category}
				<div class="category-container-1">
					<ResourcesCategoryCard
						articles={filterCategory($articleList, category)}
						{category}
						displayArticles={articlesPerCategory}
					/>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100;300&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Pridi:wght@200;400&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Sanchez&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&display=swap');

	div.container {
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 7fr;
		margin: 0px 0px 5px 0px;
	}

	.resources-container {
		display: grid;
		gap: 50px;
		grid-template-columns: 1fr 1fr;
		padding-top: 5px;
		justify-content: center;
		border-top: 2px solid hsla(251, 100%, 21%, 0.5);
	}
	.category-container-1 {
		border-bottom: 8px;
		border-bottom-style: dotted;
		/* border-bottom-right-radius: 10px; */
		border-bottom-color: rgb(77, 2, 2);
	}
</style>
