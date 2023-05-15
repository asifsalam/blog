<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { articleList, allCategories, clickedCategory } from '$lib/json/stores';
	import { filterCategory } from '$lib/modules/utility_functions';
	import RandomQuote from '$lib/components/random-quote.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import SectionHeadingCategory from '$lib/components/remove/section-heading-category.svelte';
	import PaginationList from '$lib/components/pagination-list.svelte';
	import SidebarHeading from '$lib/components/sidebar-heading.svelte';
	import CreateTags from '$lib/components/create-tags.svelte';

	$: selectedCategory = '';
	$: category = 'all';
	$: articles = [];
	$: categories = [];
	$: categoryObj = {};
	$: totalArticles = $articleList.length;

	onMount(() => {
		selectedCategory = $clickedCategory;
		categories = $allCategories.filter((d) => d.type === 'category').map((d) => d.category);
		categoryObj = $allCategories
			.filter((d) => d.type === 'category' || d.type === 'all')
			.filter((d) => d.category == selectedCategory)[0];
		category = categoryObj.category;
		articles = filterCategory($articleList, categoryObj);
		totalArticles = articles.length;
	});

	function categoryClicked(selectedCategory) {
		$clickedCategory = selectedCategory;
		categories = $allCategories.filter((d) => d.type === 'category').map((d) => d.category);
		categoryObj = $allCategories
			.filter((d) => d.type === 'category')
			.filter((d) => d.category == selectedCategory)[0];
		category = categoryObj.category;
		articles = filterCategory($articleList, categoryObj);
		totalArticles = articles.length;
	}
	articles = articles;
	/** @type {string}*/
	const headingText = 'Main categories';
	$: totalQuantity = articles.length;
	let sidebarTitle = 'This is a temporary title';
	let sidebarLeadinText =
		'Just ignore this for the moment. This was used to create and test the pagination component.';
	let sidebarBulletText = ['Ignore bullet 1', 'ignore bullet 2'];
</script>

<RandomQuote />
<Breadcrumbs />

<div class="container">
	<div class="sidebar">
		<SidebarHeading {sidebarTitle} {sidebarLeadinText} {sidebarBulletText} />
		<p class="topics">
			<CreateTags tags={categories} tagClicked={categoryClicked} tagType="theme" {headingText} />
		</p>
	</div>

	<div class="posts">
		{#if articles.length > 0}
			<SectionHeadingCategory category={$clickedCategory} totalQuantity={totalArticles} />
			<PaginationList {articles} category={$clickedCategory} totalQuantity={totalArticles} />
			<p class="test">this is a test</p>
			<p>{articles.length}</p>
		{/if}
	</div>
</div>

<style>
	div.container {
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 7fr;
		margin: 0px 0px 5px 0px;
	}
	.sidebar {
		float: left;
		margin: 10px 30px 00px 0px;
		flex-flow: column;
	}

	.topics {
		display: inline;
		line-height: 1.5;
		margin: 0 0 50px 0px;
		font-size: 1.2rem;
		font-weight: bold;
	}
</style>
