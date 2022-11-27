<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { articleList, allCategories, clickedTheme } from '$lib/json/stores';
	import { filterCategory } from '$lib/modules/utility_functions';
	import CategoryList from '$lib/components/category-list.svelte';
	import RandomQuote from '$lib/components/random-quote.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';
	import SectionHeadingCategory from '$lib/components/section-heading-category.svelte';
	import KeyCategories from '$lib/components/key-themes.svelte';
	// export let data;
	// export let errors;

	$: selectedCategory = '';
	$: category = 'datadrivenenterprise';
	$: articles = [];
	let categories = [];
	let categoryObj = {};
	console.log('page-theme');
	// console.log($allCategories);
	onMount(() => {
		selectedCategory = $clickedTheme;
		categories = $allCategories.filter((d) => d.type != 'category').map((d) => d.category);
		categoryObj = $allCategories.filter((d) => d.category == selectedCategory)[0];
		category = categoryObj.category;
		articles = filterCategory($articleList, categoryObj);
	});

	function categoryClicked(clCategory) {
		selectedCategory = clCategory;
		$clickedTheme = selectedCategory;
		categories = $allCategories.filter((d) => d.type != 'category').map((d) => d.category);
		categoryObj = $allCategories.filter((d) => d.category == selectedCategory)[0];
		category = categoryObj.category;
		articles = filterCategory($articleList, categoryObj);
	}
	/** @type {string}*/
	const headingText = 'Main themes';
	$: totalQuantity = articles.length;
	// $: console.log('category-page: ', category, selectedCategory, categories, articles.length);
</script>

<RandomQuote />
<Breadcrumbs />

<div class="container">
	<div class="sidebar">
		<div class="sidebar-header">
			<p class="sidebar-header-text" />
			<p />
		</div>
		<p class="categories-header">{headingText}</p>
		<p class="topics">
			{#each categories as category}
				<button class="topic topic-box" on:click={() => categoryClicked(category)}
					>{category}</button
				>
			{/each}
		</p>
	</div>
	<div class="posts">
		<SectionHeadingCategory {category} {totalQuantity} />
		<div class="cards">
			<!-- <svelte:component this={component} articles={filteredArticles} {category} /> -->
			{#if articles.length > 0}
				<CategoryList {articles} {category} />
			{:else}
				<p>Houston there is a problem in "category-list.svelte"</p>
			{/if}
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
	.sidebar {
		float: left;
		margin: 10px 30px 00px 0px;
		flex-flow: column;
	}
	.sidebar-header {
		display: block;
		/* float: left; */
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
		/* font-family: 'Roboto Slab'; */
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
		font-family: Roboto, Arial, Helvetica, sans-serif;
		font-weight: normal;
		font-size: 1em;
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		border: 0.1px solid hsla(251, 32%, 44%, 0.2);
	}
	.topic:hover {
		color: hsl(251, 95%, 33%);
		font-weight: bold;
		background-color: #bff0ff;
		cursor: pointer;
	}
</style>
