<script>
	import { postList, allThemes } from '$lib/json/stores';
	import Sidebar from '$lib/components/sidebar-blog.svelte';
	import ContentCard from '$lib/components/content-card-a.svelte';
	import RandomQuote from '$lib/components/random-quote.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';

	// console.log($postList);
	let displayQuantity = $postList.length;
	let headingText = 'My posts';
	let totalQuantity = displayQuantity;
	let category = 'all';
</script>

<RandomQuote />
<Breadcrumbs />

<div class="container">
	<div class="sidebar-container">
		<Sidebar themes={$allThemes} />
	</div>
	<div class="main-content">
		<SectionHeading {category} headingTitle={headingText} {displayQuantity} {totalQuantity} />
		<div class="articles">
			<div class="posts">
				{#each $postList.slice(0, 10) as post}
					<ContentCard article={post} />
				{/each}
			</div>
			<p class="more-posts"><a href="\blog">More posts</a></p>
		</div>
	</div>
</div>

<style>
	div.container {
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 7fr;
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

	h1 {
		font-family: 'Sanchez';
		font-weight: normal;
		margin: 0px 0px 10px 0px;
		color: var(--heading-color);
	}
</style>
