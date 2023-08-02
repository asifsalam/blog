<script>
	import {
		articleList,
		postList,
		themes,
		categories,
		tags,
		allCategories,
		allThemes,
		allTopics,
		excerptLength
	} from '$lib/json/stores.js';

	import MainTitle from '$lib/components/main-title.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '$lib/styles/global.css';

	export let data;
	export let errors;
	// console.log('layout.svelte-data: ', data);
	let numArticles = 350;

	data.allCategories.forEach((element) => {
		element.img = element.img.replace('/static', '');
	});
	const articleData = data.articles.slice(0, numArticles);
	$articleList = articleData;
	$postList = data.posts;
	$themes = data.themes;
	$categories = data.categories;
	$tags = data.tags;
	$allCategories = data.allCategories;
	$allThemes = data.allThemes;
	$allTopics = data.allTopics;
	$excerptLength = 100;
	// console.log('layout-svelte: ', $postList);
</script>

<svelte:head><title>asifsalam</title></svelte:head>
<MainTitle />
<Navbar />

<main>
	<slot />
</main>

<Footer />

<style>
</style>
