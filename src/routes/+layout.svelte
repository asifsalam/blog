<script>
	import { articleList, postList, allCategories, allThemes } from '/src/lib/json/stores';

	export let data;
	export let errors;
	// console.log(data);

	data.allCategories.forEach((element) => {
		element.img = element.img.replace('/static', '');
	});
	const test = data.articles.slice(0, 114);
	// console.log('layout: ', data.allCategories[1]);
	$articleList = test;
	$postList = data.posts;
	$allCategories = data.allCategories;
	$allThemes = data.allThemes;

	// $: console.log('articleList.length: ', $articleList.length);
	// console.log($allCategories[1]);
	// console.log('error: ', errors);
</script>

<main class="main-content">
	<p>Total number of articles {$articleList.length}</p>
	<a href="/">home</a>
	<a href="/resources">resources</a>
	<a href="/about">about</a>
	<a href="/topics">topics</a>
	<a href="/blog">blog</a>
	<a href="/category">category</a>

	<slot />
</main>

<style>
	/* .main-container {
		display: flex;
	} */

	.main-content {
		margin: 0 0 0 0;
	}
</style>
