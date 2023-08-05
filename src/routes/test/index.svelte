<script context="module">
	/* export const load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();
		// console.log('blog-index', allPosts);
		return {
			props: {
				posts: parsePosts(allPosts)
			}
		};
	};*/
</script>

<script>
	import Sidebar from '$lib/components/remove/sidebar-blog.svelte';
	import ContentCard from '$lib/components/remove/content-card-a.svelte';
	import RandomQuote from '$lib/components/tagline-quote.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';
	import { postList } from '$lib/components/stores';
	import { parsePosts } from '$lib/modules/utility_functions';
	export let posts = $postList;
	const category = 'mypost';
	const headingText = 'My posts';
	const displayQuantity = 5;
	const totalQuantity = posts.length;
	if (posts.length > displayQuantity) {
		posts = posts.slice(0, displayQuantity);
	}

	// posts = postList;
	// console.log('blog: ', posts[0]);
</script>

<RandomQuote quoteIndex={19} />
<Breadcrumbs />
<div class="container">
	<div class="sidebar-container">
		<Sidebar />
	</div>
	<div class="posts">
		<SectionHeading {category} headingTitle={headingText} {displayQuantity} {totalQuantity} />
		<!-- <div class="heading">
			<h1 class="heading-title">Posts</h1>
			<h3 class="sub-title">Total posts: {posts.length}</h3>
		</div> -->
		<div class="cards">
			{#each posts as post}
				<ContentCard article={post} />
			{/each}
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100;300&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Pridi:wght@200;400&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Sanchez&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&display=swap');

	div.container {
		/* float: right; */
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 7fr;
		margin: 0px 0px 5px 0px;
	}
	div.sidebar-container {
		margin: 0;
		padding: 0;
	}
	.container h1 {
		font-family: 'Sanchez';
		margin: 0;
	}
	.container .heading {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-family: Sanchez;
		font-size: 1em;
		color: hsla(251, 100%, 25%, 1);
		margin: 10px 0;
		padding: 0;
	}
	.heading-title {
		width: 60%;
		/* font-weight: normal; */
	}
	.sub-title {
		/* font-size: 1em; */
		display: inline;
		margin: auto 0;
		padding: 1px 8px;
		text-align: right;
		font-size: 1.5em;
		/* padding: 0; */
		font-weight: 400;
		border-radius: 0%;
		/* background-color: aqua; */
		border: 2px solid hsla(251, 100%, 25%);
	}
	.cards {
		display: grid;
		gap: 20px;
		grid-template-columns: 1fr 1fr;
		justify-content: center;
	}

	h1 {
		margin: 0;
	}
</style>
