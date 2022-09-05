<script>
	import { articleList, allCategories, allThemes } from '/src/lib/json/stores';
	import ContentCard from '$lib/components/content-card-c.svelte';

	$allCategories.forEach((el) => {
		el.img = el.img.replace('/static', '');
	});
	console.log('routes-page:');
	console.log($allCategories[1].category);
	$: console.log('articleList[5] ', $articleList[5].author);
	console.log('page.svelte: articleList.length: ', $articleList.length);
</script>

<div class="main-content">
	<div class="articles">
		<h1>Latest links</h1>
		<ContentCard article={$articleList[4]} />
		<p class="more-posts"><a href="\articles">More links</a></p>
	</div>
</div>

<!-- <p>{article.body}</p> -->
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Sanchez&family=Pridi&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Scope+One&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>
