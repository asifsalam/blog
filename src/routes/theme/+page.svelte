<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { articleList, themes, allCategories, clickedTheme } from '$lib/json/stores';
	import { filterCategory, filterArticles } from '$lib/modules/utility_functions';
	// import CategoryList from '$lib/components/category-list.svelte';
	import RandomQuote from '$lib/components/random-quote.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import CreateTags from '$lib/components/create-tags.svelte';
	import SidebarHeading from '$lib/components/sidebar-heading.svelte';
	import SectionHeadingBasic from '$lib/components/section-heading-basic.svelte';
	import PaginationList from '$lib/components/pagination-list.svelte';
	import SidebarTags from '$lib/components/sidebar-tags.svelte';

	$: selectedTheme = $clickedTheme;
	$: theme = $clickedTheme;
	$: articles = [];
	// let themes = [];
	let themeObj = {};
	console.log('theme-selectedTheme-clickedTheme', theme, selectedTheme, $clickedTheme);

	onMount(() => {
		console.log('theme-page-onmount');
		selectedTheme = $clickedTheme;
		console.log($themes);
		// del- themes = $allCategories.filter((d) => d.type != 'category').map((d) => d.category);
		// del- themeObj = $allCategories.filter((d) => d.category == selectedTheme)[0];
		// new
		// theme = themeObj.category;

		themeObj = $themes.filter((d) => d.name == $clickedTheme)[0];
		// theme = themeObj.theme;
		console.log('themeObj,clicked-theme: ', themeObj.name, $clickedTheme);
		// articles = filterCategory($articleList, themeObj);
		// articles = $articleList.slice(1, 15);
		articles = filterArticles($articleList, themeObj);
	});

	function themeClicked(clTheme) {
		console.log('theme-page-themeClicked');
		selectedTheme = clTheme;
		$clickedTheme = selectedTheme;
		// themes = $allCategories.filter((d) => d.type != 'category').map((d) => d.category);
		// themeObj = $allCategories.filter((d) => d.category == selectedTheme)[0];
		// theme = themeObj.category;
		themeObj = $themes.filter((d) => d.name == selectedTheme)[0];
		console.log('themeClicked-themeObj: ', themeObj);
		articles = filterArticles($articleList, themeObj);
		// articles = $articleList.slice(1, 15);
		// articles = filterCategory($articleList, themeObj);
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
				tags={$themes}
				tagClicked={themeClicked}
				tagType="theme"
				headingText={sidebarTagHeading}
			/>
		</p>
		<SidebarTags useThemes={'no'} useCategories={'yes'} useTopics={'no'} />
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
	/* div.posts {
		margin: 0;
		padding: 0;
		display: grid;

		grid-template-columns: 1fr 1fr;
		align-items: start;
		column-gap: 1.5rem;
		row-gap: 1.5rem;
	} */

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
