<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { articleList, allCategories } from '$lib/json/stores';
	import CategoryList from '$lib/components/category-list.svelte';
	import Sidebar from '$lib/components/sidebar-resources.svelte';
	import SectionHeadingCategory from '$lib/components/section-heading-category.svelte';
	import { filterCategory } from '$lib/modules/utility_functions';
	export let data;
	export let errors;

	$: selectedCategory = 'python';
	$: category = 'python';
	$: articles = [];
	let categories = [];
	let categoryObj = {};

	onMount(() => {
		selectedCategory = 'book';
		categories = $allCategories.map((d) => d.category);
		categoryObj = $allCategories.filter((d) => d.category == selectedCategory)[0];
		category = categoryObj.category;
		console.log('mounted-1', selectedCategory);
		console.log('mounted-2', categoryObj);
		console.log('mounted-3', categories);
		articles = filterCategory($articleList, categoryObj);
	});

	function categoryClicked(clickedCategory) {
		console.log(clickedCategory);
		selectedCategory = clickedCategory;
		categories = $allCategories.map((d) => d.category);
		categoryObj = $allCategories.filter((d) => d.category == selectedCategory)[0];
		console.log('mounted-', selectedCategory);
		category = categoryObj.category;
		articles = filterCategory($articleList, categoryObj);
	}

	$: totalQuantity = articles.length;
	$: console.log('category-page: ', category, selectedCategory, categories, articles.length);
</script>

<p>this is a test</p>

<div class="container">
	<div class="sidebar">
		<p class="topics">
			{#each categories as category}
				<!-- <a class="topic topic-box" href={`/category?${category}`}>{category}</a> -->
				<button class="topic topic-box" on:click={() => categoryClicked(category)}
					>{category}</button
				>
			{/each}
		</p>
		<!-- <p on:click={() => categoryClicked(category)}>sidebar {category}</p> -->
	</div>
	<div class="posts">
		<SectionHeadingCategory {category} {totalQuantity} />
		<div class="cards">
			<!-- <svelte:component this={component} articles={filteredArticles} {category} /> -->
			<CategoryList {articles} {category} />
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
		font-weight: normal;
		color: hsla(251, 100%, 15%, 0.5);
		border-radius: 5px;
		text-decoration: none;
		border: 0.1px solid hsla(251, 32%, 44%, 0.5);
	}
	.topic:hover {
		color: hsl(251, 100%, 60%);
		font-weight: bold;
	}
</style>
