<script>
	import { articleList, postList, allCategories, allThemes } from '$lib/json/stores';
	import ContentCard from '$lib/components/content-card-c.svelte';
	import RandomQuote from '$lib/components/random-quote.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';

	$allCategories.forEach((el) => {
		el.img = el.img.replace('/static', '');
	});
	console.log('home-page:');
</script>

<RandomQuote />
<Breadcrumbs />

<div class="container">
	<div class="sidebar-container">
		<Sidebar themes={$allThemes} />
	</div>
	<div class="main-content">
		<div class="articles">
			<h1>Latest posts</h1>
			<div class="posts">
				{#each $postList.slice(0, 10) as post}
					<ContentCard article={post} />
				{/each}
			</div>
			<p class="more-posts"><a href="\blog">More posts</a></p>
		</div>
		<div class="articles">
			<h1>Latest links</h1>
			<div class="posts">
				{#each $articleList.slice(0, 6) as article}
					<ContentCard {article} />
				{/each}
			</div>
			<p class="more-posts"><a href="\articles">More links</a></p>
		</div>
	</div>
</div>

<!-- <p>{article.body}</p> -->

<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<style>
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Sanchez&family=Pridi&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Scope+One&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	div.container {
		width: 100%;
		display: grid;
		grid-template-columns: 3fr 7fr;
		margin: 0px 0px 5px 0px;
	}

	div.sidebar-container {
		margin: 0;
		padding: 0;
	}

	div.main-content {
		margin: 0;
		padding: 0;
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
	.more-posts {
		text-align: right;
		font-size: 1.2rem;
		margin: 5px 0 10px 0;
	}

	h1 {
		font-family: 'Sanchez';
		font-weight: normal;
		margin: 0px 0px 10px 0px;
		color: var(--heading-color);
	}
</style>
