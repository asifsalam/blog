<script>
	import Pagination from './Pagination.svelte';

	let currentPage = 1;
	const totalPages = 10;

	function handlePageChange(page) {
		currentPage = page;
		console.log(`Page changed to ${currentPage}`);
	}
</script>

<Pagination {currentPage} {totalPages} onChange={handlePageChange} />
