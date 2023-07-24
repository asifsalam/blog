<script>
	import {
		articleList,
		postList,
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
	// console.log('layout.svelte-articles: ', data.articles);
	let numArticles = 350;

	data.allCategories.forEach((element) => {
		element.img = element.img.replace('/static', '');
	});
	const articleData = data.articles.slice(0, numArticles);
	$articleList = articleData;
	$postList = data.posts;
	$allCategories = data.allCategories;
	$allThemes = data.allThemes;
	$allTopics = data.allTopics;
	$excerptLength = 100;
	// console.log('layout-svelte: ', $articleList);
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
