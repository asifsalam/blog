<script>
	import ResourcesCard from '$lib/components/resources-card.svelte';
	import Pagination from '$lib/components/pagination.svelte';

	export let articles;
	export let category;
	// export let currentPage = 1;
	export let totalArticles = articles.length;
	let articlesPerPage = 30;
	let totalPages = Math.ceil(totalArticles / articlesPerPage);
	$: currentPage = 1;
	let startArticleNum = 0;
	$: articleSet = articles.slice(startArticleNum, articlesPerPage);

	function handlePageChange(subPage) {
		currentPage = subPage;
		const trimStart = (currentPage - 1) * articlesPerPage;
		const trimEnd = trimStart + articlesPerPage;
		articleSet = articles.slice(trimStart, trimEnd);
		console.log(articleSet);
		// fetch new data for the current page
	}

	function prevPage() {
		if (currentPage > 1) {
			currentPage--;
			handlePageChange(currentPage);
		}
	}

	function nextPage() {
		if (currentPage < totalPages) {
			currentPage++;
			handlePageChange(currentPage);
		}
	}

	function gotoPage(subPage) {
		if (subPage >= 1 && subPage <= totalPages) {
			currentPage = subPage;
			handlePageChange(currentPage);
		}
	}
</script>

<div class="pagination">
	<button on:click={prevPage}>Previous</button>
	{#each Array(totalPages) as _, i}
		<button class={currentPage === i + 1 ? 'active' : ''} on:click={() => gotoPage(i + 1)}>
			{i + 1}
		</button>
	{/each}
	<button on:click={nextPage}>Next</button>
</div>

<div class="category-container">
	{#each articleSet as article, i}
		<!-- <p>counter:{i}, title: {article.title}</p> -->
		<ResourcesCard {article} {category} />
	{/each}
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
