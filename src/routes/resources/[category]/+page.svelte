<script>
	import { articleList, allCategories } from '$lib/json/stores';
	import CategoryList from '$lib/components/category-list.svelte';
	import Sidebar from '$lib/components/sidebar-resources.svelte';
	import SectionHeadingCategory from '$lib/components/section-heading-category.svelte';
	import { page } from '$app/stores';
	import { filterCategory } from '$lib/modules/utility_functions';
	// console.log($page);

	let toUpdate = $page.params.category;

	export let data;

	let theme = data.theme;
	let component = CategoryList;
	let mainCategory = $allCategories.filter((d) => d.category == toUpdate)[0];
	$: category = mainCategory;
	$: headingTitle = toUpdate;

	console.log('resources-category-theme: ', category, $articleList[1]);
	$: filteredArticles = filterCategory($articleList, category);
	filteredArticles = filteredArticles;
	console.log('resources-category: ', filteredArticles);
	console.log('resources-category-headingTitle: ', headingTitle);
</script>

<p>This is where the category page will be {filteredArticles.length}</p>
<p>The heading title is: {headingTitle}</p>
<div class="container">
	<Sidebar allCategories={$allCategories} />
	<div class="posts">
		<SectionHeadingCategory category={headingTitle} totalQuantity={filteredArticles.length} />
		<div class="cards">
			<p>{category.category}</p>
			<!-- <svelte:component this={component} articles={filteredArticles} {category} /> -->
			<CategoryList articles={filteredArticles} {category} />
		</div>
	</div>
</div>

<style>
	div.container {
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 7fr;
		margin: 0px 0px 5px 0px;
	}
</style>
