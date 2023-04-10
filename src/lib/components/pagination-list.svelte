<script>
	import Pagination from '$lib/components/pagination.svelte';
	// import ResourcesCard from '$lib/components/resources-card.svelte';
	// import ContentCardA from '$lib/components/content-card-a.svelte';
	// import ContentCardC from '$lib/components/content-card-c.svelte';
	import ContentCardMedium from '$lib/components/content-card-medium.svelte';
	export let articles;
	export let category;
	export let totalQuantity;
	// console.log('pagination-list: totalQuantity', totalQuantity, articles);

	let numArticles = articles.length;
	let articlesPerPage = 10;
	$: totalPages = Math.ceil(totalQuantity / articlesPerPage);
	$: currentPage = 1;
	let startArticleNum = 0;
	$: articleSet = articles.slice(startArticleNum, articlesPerPage);
	// console.log('pagination-list-articles: ', articles);
	//	let currentPage = 1;

	function handlePageChange(subPage) {
		currentPage = subPage;
		const trimStart = (currentPage - 1) * articlesPerPage;
		const trimEnd = trimStart + articlesPerPage;
		articleSet = articles.slice(trimStart, trimEnd);
		console.log('pagination-list:', articleSet.length);
		// fetch new data for the current page
	}
	/*
    In this example, the currentPage and totalPages props are used to display the current page and the total number of pages respectively. The onChangePage prop is a callback function that is called when the user changes the page, and it takes the new page number as its argument. When the user clicks the "Previous" or "Next" buttons or any of the page number buttons, the corresponding functions in the component are called to update the currentPage prop and call the onChangePage callback with the new page number.
    */
	currentPage = currentPage;
	articleSet = articleSet;
</script>

<Pagination {currentPage} {totalPages} onChangePage={handlePageChange} />

<div class="category-container">
	{#each articleSet as article, i}
		<!-- <p>Setting the content {i} {currentPage}</p> -->
		<ContentCardMedium {article} />
		<!-- <ResourcesCard {article} {category} /> -->
	{/each}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100;300&display=swap');
	.category-container {
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: start;
		column-gap: 1.5rem;
		row-gap: 1.5rem;
		/* grid-gap: 10px 15px; */
		/* max-height: 1000px; */
		/* overflow: scroll; */
		align-content: start;
		/* margin-bottom: 15px; */
	}

	/* div.posts {
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: start;
		column-gap: 1.5rem;
		row-gap: 1.5rem;
	} */
</style>
