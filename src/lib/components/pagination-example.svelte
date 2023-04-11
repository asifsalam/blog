<script>
	let currentPage = 1;
	let totalPages = 50; // Total number of pages
	let pageSize = 5; // Number of items per page
	let visiblePages = 5; // Number of visible page numbers in the pagination
	let startPage = 1; // Starting page number in the pagination

	// Function to calculate the last visible page number
	function lastVisiblePage() {
		let lastPage = startPage + visiblePages - 1;
		return Math.min(lastPage, totalPages);
	}

	// Function to go to the next page
	function nextPage() {
		if (currentPage < totalPages) {
			currentPage++;
			if (currentPage > lastVisiblePage()) {
				startPage++;
			}
		}
	}

	// Function to go to the previous page
	function prevPage() {
		if (currentPage > 1) {
			currentPage--;
			if (currentPage < startPage) {
				startPage--;
			}
		}
	}

	// Function to go to a specific page
	function goToPage(page) {
		if (page >= 1 && page <= totalPages) {
			currentPage = page;
			if (page < startPage || page > lastVisiblePage()) {
				startPage = page;
			}
		}
	}

	// Function to go to the next set of pages
	function nextSet() {
		if (startPage + visiblePages <= totalPages) {
			startPage += visiblePages;
			currentPage = startPage;
		} else {
			startPage = totalPages - visiblePages + 1;
			currentPage = totalPages;
		}
	}

	// Function to go to the previous set of pages
	function prevSet() {
		if (startPage - visiblePages >= 1) {
			startPage -= visiblePages;
			currentPage = startPage;
		} else {
			startPage = 1;
			currentPage = 1;
		}
	}
</script>

<div class="pagination">
	<button class="page-link" on:click={prevSet} class:disabled={startPage === 1}> &laquo; </button>
	<button class="page-link" on:click={prevPage} class:disabled={currentPage === 1}>
		Previous
	</button>
	{#each Array.from({ length: lastVisiblePage() - startPage + 1 }, (_, i) => i + startPage) as page}
		<button class="page-link" on:click={() => goToPage(page)} class:selected={page === currentPage}>
			{page}
		</button>
	{/each}
	<button class="page-link" on:click={nextPage} disabled={currentPage === totalPages}>
		Next
	</button>
	<button class="page-link" on:click={nextSet} disabled={startPage + visiblePages > totalPages}>
		&raquo;
	</button>
</div>

<style>
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 1rem;
	}

	.page-link {
		margin: 0 0.5rem;
		cursor: pointer;
		color: #007bff;
		text-decoration: none;
	}

	.page-link:hover {
		text-decoration: underline;
	}

	.page-link.disabled {
		pointer-events: none;
		color: #6c757d;
	}
</style>
