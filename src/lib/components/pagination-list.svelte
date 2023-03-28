<script>
	import Pagination from '$lib/components/pagination.svelte';
	import ResourcesCard from '$lib/components/resources-card.svelte';

	export let articles;
	export let category;

	let numArticles = articles.length;
	let articlesPerPage = 25;
	let totalPages = Math.ceil(numArticles / articlesPerPage);
	let currentPage = 1;
	let articleSet = articles.slice(1, articlesPerPage);
	//	let currentPage = 1;
	//	let totalPages = 10;

	function handlePageChange(page) {
		currentPage = page;
		const trimStart = (currentPage - 1) * articlesPerPage;
		const trimEnd = trimStart + articlesPerPage;
		articleSet = articles.slice(trimStart, trimEnd);
		console.log(articleSet);
		// fetch new data for the current page
	}
	/*
    In this example, the currentPage and totalPages props are used to display the current page and the total number of pages respectively. The onChangePage prop is a callback function that is called when the user changes the page, and it takes the new page number as its argument. When the user clicks the "Previous" or "Next" buttons or any of the page number buttons, the corresponding functions in the component are called to update the currentPage prop and call the onChangePage callback with the new page number.
    */
</script>

<Pagination {currentPage} {totalPages} onChangePage={handlePageChange} />
<div class="category-container">
	{#each articleSet as article, i}
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
	.paginate-list {
		display: flex;
		justify-content: center;
	}

	.pagination {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
	}

	.pagination li {
		margin: 0 1px;
	}
</style>
