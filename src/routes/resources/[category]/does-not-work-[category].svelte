<script>
	// import RandomQuote from '$lib/components/tagline-quote.svelte';
	// import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Sidebar from '$lib/components/sidebar-resources.svelte';
	import ContentCard from '$lib/components/resources-card.svelte';
	import SectionHeadingCategory from '$lib/components/section-heading-category.svelte';
	import { filterCategory } from '$lib/modules/utility_functions';
	import { allCategories } from '$lib/json/stores.js';
	import { page } from '$app/stores';
	let selectedCategory = $page.params.category;
	const category = $allCategories.filter((d) => d.category == selectedCategory)[0];
	let filteredArticles = filterCategory($articleList, category);
	console.log('resources-[category]');
</script>

<p>{$page}</p>
<!-- <RandomQuote /> -->
<!-- <Breadcrumbs /> -->

<!-- <div class="container">
	<Sidebar allCategories={$allCategories} />
	<div class="posts">
		<SectionHeadingCategory category={selectedCategory} totalQuantity={filteredArticles.length} />
		<div class="cards">
			{#each filteredArticles as article}
				<ContentCard {article} {category} />
			{/each}
		</div>
	</div>
</div> -->
<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100;300&display=swap');

	div.container {
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 6fr;
		margin: 0px 0px 5px 3px;
	}
</style>
