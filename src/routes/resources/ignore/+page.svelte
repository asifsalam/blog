<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { articleList, allCategories, clickedCategory } from '$lib/json/stores';
	import { filterCategory } from '$lib/modules/utility_functions';
	import RandomQuote from '$lib/components/random-quote.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import SectionHeadingCategory from '$lib/components/section-heading-category.svelte';
	import PaginationList from '$lib/components/pagination-list.svelte';
	import CategoryList from '$lib/components/category-list-paginate.svelte';
	import SidebarHeading from '$lib/components/sidebar-heading.svelte';
	import CreateTags from '$lib/components/create-tags.svelte';

	$: selectedCategory = '';
	$: category = 'all';
	$: articles = [];
	$: categories = [];
	$: categoryObj = {};
	$: totalArticles = $articleList.length;

	onMount(() => {
		//console.log('category: ', $clickedCategory);
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
	// $: console.log('category-page. articles.length: ', articles.length, 'category: ', category);

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
			<!-- <CategoryList {articles} category={$clickedCategory} /> -->
			<PaginationList {articles} category={$clickedCategory} totalQuantity={totalArticles} />
			<p class="test">this is a test</p>
			<p>{articles.length}</p>
			<!-- {:else}
			<p>Houston there is a problem in "category-list.svelte"</p> -->
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

	/* .sidebar-header {
		display: block;
	
		height: auto;
		width: 100%;
		background-color: rgb(255, 254, 243);
		padding: 0 0 10px 0;
		margin: 0;
		border-bottom: 2px solid hsl(23, 8%, 50%);
	}
	.sidebar-header-text {
		display: block;
		padding: 0;
		margin: 0px 0 5px 0;
		font-family: 'Crete Round';
		font-size: 1.4em;
		font-weight: 100;
		color: hsla(251, 100%, 15%, 1);
		text-align: left;
	}
	.categories-header {
		padding: 5px 0;
		margin: 10px 0;
		font-family: 'Pridi', Georgia, 'Times New Roman', Times, serif;
		font-size: 1.4em;
		font-weight: 300;
		color: hsla(251, 100%, 20%, 0.9);
	}
	.topic-box {
		display: inline-block;
		padding: 0px 5px;
		margin: 5px 10px 5px 0;
		background-color: #eafaff;
		font-family: Roboto, Arial, Helvetica, sans-serif;
		cursor: pointer;
		font-weight: normal;
		font-size: 1em;
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		border: 0.1px solid hsla(251, 32%, 44%, 0.2);
	}
	.topic:hover {
		color: hsl(251, 100%, 60%);
		font-weight: bold;
	} */
</style>
