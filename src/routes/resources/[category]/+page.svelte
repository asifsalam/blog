<script>
	import { articleList, allCategories } from '$lib/json/stores';
	import CategoryList from '$lib/components/category-list.svelte';
	import Sidebar from '$lib/components/sidebar-resources.svelte';
	import RandomQuote from '$lib/components/random-quote.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import SectionHeadingCategory from '$lib/components/section-heading-category.svelte';
	import { page } from '$app/stores';
	import { filterCategory } from '$lib/modules/utility_functions';
	// console.log($page);

	let toUpdate = $page.params.category;
	const categories = $allCategories.filter((d) => d.type === 'category');

	export let data;

	let theme = data.theme;
	let component = CategoryList;
	let mainCategory = $allCategories.filter((d) => d.category == toUpdate)[0];
	$: category = mainCategory;
	$: headingTitle = toUpdate;

	$: filteredArticles = filterCategory($articleList, category);
	filteredArticles = filteredArticles;
</script>

<RandomQuote />
<Breadcrumbs />
<div class="container">
	<Sidebar allCategories={categories} />
	<div class="posts">
		<SectionHeadingCategory category={headingTitle} totalQuantity={filteredArticles.length} />
		<div class="cards">
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
