<script>
	import ResourcesCard from '$lib/components/resources-card.svelte';
	import Pagination from '$lib/components/pagination-old.svelte';

	export let articles;
	export let category;
	let numArticles = articles.length;
	let articlesPerPage = 10;
	let totalPages = Math.round(articles.length / articlesPerPage);
	let currentPage = 1;

	function buildPage(currentPage) {
		const trimStart = (currentPage - 1) * articlesPerPage;
		const trimEnd = trimStart + articlesPerPage;
		console.log(articles.slice(trimStart, trimEnd).length);
	}
	// this is from chatGPT
	// function handlePageChange(page) {
	// 	currentPage = page;
	// 	console.log(`Page changed to ${currentPage}`);
	// }
</script>

<div class="category-container">
	<Pagination {currentPage} {totalPages} onChange={handlePageChange} />
	<!-- {#each articles as article, i}
		<ResourcesCard {article} {category} />
	{/each} -->
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100;300&display=swap');
	.category-container {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 0px 15px;
		max-height: 1000px;
		overflow: scroll;
		align-content: start;
		margin-bottom: 15px;
	}
	/* .category-header {
		background-image: url('https://unsplash.com/photos/VWcPlbHglYc');
		display: grid;
		grid-template-columns: 2fr 4fr 3fr;
		height: 3em;
		padding: 0px 0px 10px 0px;
		align-items: center;
		vertical-align: middle;
		font-family: 'Crete Round', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	}

	.category-title {
		margin: 0;
		padding-left: 10px;
		padding-bottom: 0;
		font-size: x-large;
		font-weight: 600;
		color: hsla(251, 100%, 20%, 1);
	}
	 .article-count {
		font-family: 'Scope One', Roboto, Arial, Helvetica, sans-serif;
		font-size: 1em;
		font-weight: bold;
		text-align: right;
		color: hsla(251, 100%, 20%, 1);
	} 
	.article-count a {
		font-weight: normal;
		opacity: 0.7;
		text-decoration: none;
	}
	
	.article-count a:hover {
		text-decoration: underline;
		opacity: 1;
		font-weight: bold;
	}
	
	.category-img {
		background-color: rgba(255, 0, 0, 0.019);
		bottom: 0;
		left: 0;
	}  

	img {
		display: inline;
		position: relative;
		height: inherit;
	}
	*/
</style>
