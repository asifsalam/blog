<script>
	import { articleList, postList, allCategories, allThemes } from '/src/lib/json/stores';
	// import SiteTitle from '$lib/components/site-title.svelte';
	import MainTitle from '$lib/components/main-title.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '$lib/styles/global.css';

	export let data;
	export let errors;

	data.allCategories.forEach((element) => {
		element.img = element.img.replace('/static', '');
	});
	const articleData = data.articles.slice(0, 114);
	$articleList = articleData;
	$postList = data.posts;
	$allCategories = data.allCategories;
	$allThemes = data.allThemes;
</script>

<svelte:head><title>asifsalam</title></svelte:head>
<MainTitle />
<Navbar />

<main>
	<slot />
</main>

<Footer />

<style>
	/* .main-container {
		display: flex;
	} */

	/* .main-content {
		margin: 0 0 0 0;
	} */
</style>
