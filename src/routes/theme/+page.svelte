<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { articleList, allCategories, clickedTheme } from '$lib/json/stores';
	import { filterCategory } from '$lib/modules/utility_functions';
	// import CategoryList from '$lib/components/category-list.svelte';
	import RandomQuote from '$lib/components/random-quote.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import CreateTags from '$lib/components/create-tags.svelte';
	import SidebarHeading from '$lib/components/sidebar-heading.svelte';
	import SectionHeadingBasic from '$lib/components/section-heading-basic.svelte';
	import PaginationList from '$lib/components/pagination-list.svelte';

	$: selectedTheme = '';
	$: theme = 'datadrivenenterprise';
	$: articles = [];
	let themes = [];
	let themeObj = {};
	// console.log('page-theme');

	onMount(() => {
		selectedTheme = $clickedTheme;
		themes = $allCategories.filter((d) => d.type != 'category').map((d) => d.category);
		themeObj = $allCategories.filter((d) => d.category == selectedTheme)[0];
		theme = themeObj.category;
		articles = filterCategory($articleList, themeObj);
	});

	function themeClicked(clTheme) {
		selectedTheme = clTheme;
		$clickedTheme = selectedTheme;
		themes = $allCategories.filter((d) => d.type != 'category').map((d) => d.category);
		themeObj = $allCategories.filter((d) => d.category == selectedTheme)[0];
		theme = themeObj.category;
		articles = filterCategory($articleList, themeObj);
		// console.log('themes-page:', themes, themeObj, theme, articles);
	}
	/** @type {string}*/
	const headingText = 'Selected theme: ';
	$: totalQuantity = articles.length;
	// $: console.log('category-page: ', category, selectedCategory, categories, articles.length);
	let sidebarTagHeading = 'Main themes';
	articles = articles;
</script>

<RandomQuote />
<Breadcrumbs />

<div class="container">
	<div class="sidebar">
		<!-- <SidebarThemeHeading /> -->
		<SidebarHeading
			sidebarLeadinText={'Select articles and resources from the main themes below'}
		/>
		<p class="topics">
			<CreateTags
				tags={themes}
				tagClicked={themeClicked}
				tagType="theme"
				headingText={sidebarTagHeading}
			/>
		</p>
	</div>
	<div class="posts-list">
		<SectionHeadingBasic selectedTag={theme} {totalQuantity} headingTitle={headingText} />
		{#key theme}
			<PaginationList {articles} category={theme} {totalQuantity} />
		{/key}
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
	div.posts {
		margin: 0;
		padding: 0;
		display: grid;
		/* grid-template-columns: 1fr 1fr; */
		grid-template-columns: 1fr 1fr;
		align-items: start;
		column-gap: 1.5rem;
		row-gap: 1.5rem;
	}

	/* .themes-header {
		padding: 10px 0 0 0;
		margin: 0;
		font-family: 'Pridi', Georgia, 'Times New Roman', Times, serif;
		font-size: 1.4rem;
		font-weight: 300;
		color: hsla(251, 100%, 20%, 0.9);
	} */
	.topics {
		display: inline;
		line-height: 1.5;
		margin: 0 0 50px 0px;
		font-size: 1.2rem;
		font-weight: bold;
	}
</style>
