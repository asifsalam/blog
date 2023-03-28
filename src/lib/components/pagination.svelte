<script>
	export let currentPage = 1;
	export let totalPages = 1;
	export let onChangePage = () => {};

	function prevPage() {
		if (currentPage > 1) {
			currentPage--;
			onChangePage(currentPage);
		}
	}

	function nextPage() {
		if (currentPage < totalPages) {
			currentPage++;
			onChangePage(currentPage);
		}
	}

	function gotoPage(page) {
		if (page >= 1 && page <= totalPages) {
			currentPage = page;
			onChangePage(currentPage);
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

<style>
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem;
	}
	.pagination button {
		margin: 0 0.5rem;
		padding: 0.5rem 1rem;
		border: none;
		background-color: hsla(0, 0%, 95%, 0.1);
		border: 0.1px solid hsla(251, 32%, 44%, 0.5);
		border-radius: 5px;
		color: #333;
		cursor: pointer;
	}
	.pagination button.active {
		font-family: Roboto, Arial, Helvetica, sans-serif;
		font-size: medium;
		background-color: hsla(251, 100%, 20%, 0.9);

		color: #fff;
	}

	.article-count {
		font-family: 'Scope One', Roboto, Arial, Helvetica, sans-serif;
		font-size: large;
		font-weight: bold;
		text-align: right;
		color: hsla(251, 100%, 20%, 1);
		margin: 1em 0 0 0;
	}

	.size-1 {
		padding: 0px 5px;
		margin: 5px 10px 5px 0;
		font-weight: normal;
		border-radius: 5px;
		border: 0.1px solid hsla(251, 32%, 44%, 0.5);
	}
</style>
