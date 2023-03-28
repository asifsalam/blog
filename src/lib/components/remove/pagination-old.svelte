<script>
	export let currentPage = 1;
	export let totalPages = 1;
	export let onChange = () => {};

	function handleClick(page) {
		if (page !== currentPage) {
			currentPage = page;
			onChange(currentPage);
		}
	}

	function getPages() {
		const pages = [];
		for (let i = 1; i <= totalPages; i++) {
			pages.push(i);
		}
		return pages;
	}

	const pages = getPages();
</script>

<div class="pagination">
	{#if totalPages > 1}
		<ul>
			<li>
				<button on:click={() => handleClick(1)} disabled={currentPage === 1}>First</button>
			</li>
			{#each pages as page}
				{#if Math.abs(page - currentPage) < 3 || page === 1 || page === totalPages}
					<li>
						<button on:click={() => handleClick(page)} disabled={currentPage === page}
							>{page}</button
						>
					</li>
				{:else if pages[pages.indexOf(page) - 1] !== '...'}
					<li>
						<button disabled>...</button>
					</li>
				{/if}
			{/each}
			<li>
				<button on:click={() => handleClick(totalPages)} disabled={currentPage === totalPages}
					>Last</button
				>
			</li>
		</ul>
	{/if}
</div>

<style>
	.pagination {
		display: flex;
		justify-content: center;
		margin-top: 10px;
	}

	ul {
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		margin: 0 5px;
	}

	button {
		font-size: 14px;
		padding: 5px 10px;
		border: 1px solid #ccc;
		border-radius: 3px;
		background-color: #fff;
		color: #333;
		cursor: pointer;
	}

	button:hover:not([disabled]) {
		background-color: #f5f5f5;
	}

	button:active:not([disabled]) {
		background-color: #e6e6e6;
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
