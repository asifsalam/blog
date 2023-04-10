<script>
	import {
		articleList,
		postList,
		allThemes,
		allCategories,
		allTopics,
		clickedTheme,
		clickedCategory
	} from '$lib/json/stores';
	import { goto } from '$app/navigation';
	import ContentCard from '$lib/components/content-card-large.svelte';
	import RandomQuote from '$lib/components/random-quote.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	// import Sidebar from '$lib/components/sidebar-home.svelte';
	import SidebarTags from '$lib/components/sidebar-tags.svelte';
	import SidebarHeading from '$lib/components/sidebar-heading.svelte';
	// import SectionHeadingMain from '$lib/components/section-heading-main.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';
	// import SidebarHeadingHome from '$lib/components/sidebar-home-heading.svelte';

	$allCategories.forEach((el) => {
		el.img = el.img.replace('/static', '');
	});
	// const themes = $allCategories.filter((d) => d.type === 'theme');
	const themes = $allThemes;
	console.log('home-page:');
	let sidebarTitle = '';
	let sidebarLeadinText =
		'Greetings! My name is Asif. <br/> And you have wittingly or otherwise chanced upon this space, which is:';
	let sidebarBulletText = [
		'Mostly about data',
		'And how enterprises can become "data-driven" ',
		'Mostly useful links',
		'And some original posts'
	];
	let headingTitlePosts = 'Latest posts';
	let displayQuantityPosts = 6;
	let totalQuantityPosts = $postList.length;

	let headingTitleLinks = 'Latest links:';
	let displayQuantityLinks = 6;
	let totalQuantityLinks = $articleList.length;
	function morePostsClicked(selectedCategory) {
		// @ts-ignore
		$clickedTheme = 'all';
		goto('/blog');
		console.log('morePostsClicked: ', selectedCategory);
	}
	function moreLinksClicked(selectedCategory) {
		// @ts-ignore
		$clickedCategory = 'all';
		goto('/resources/category');
		console.log('moreLinksClicked: ', selectedCategory);
	}
</script>

<RandomQuote />
<Breadcrumbs />

<div class="container">
	<div class="sidebar-container">
		<SidebarHeading {sidebarTitle} {sidebarLeadinText} {sidebarBulletText} />
		<!-- <SidebarHeadingHome /> -->
		<!-- <Sidebar /> -->
		<SidebarTags useThemes={'yes'} useCategories={'no'} />
	</div>
	<div class="main-content">
		<div class="articles">
			<!-- <h1>Latest posts</h1> -->
			<!-- <SectionHeadingMain totalQuantity={8} headingTitle={'Latest posts'} /> -->
			<SectionHeading
				headingTitle={headingTitlePosts}
				displayQuantity={displayQuantityPosts}
				totalQuantity={totalQuantityPosts}
				moreItemsClicked={morePostsClicked}
			/>
			<div class="posts">
				{#each $postList.slice(0, displayQuantityPosts) as post}
					<ContentCard article={post} />
				{/each}
			</div>
			<p class="more-posts"><a href="\blog">More posts</a></p>
		</div>
		<div class="articles">
			<!-- <h1>Latest links</h1> -->
			<SectionHeading
				headingTitle={headingTitleLinks}
				displayQuantity={displayQuantityLinks}
				totalQuantity={totalQuantityLinks}
				moreItemsClicked={moreLinksClicked}
			/>
			<div class="posts">
				{#each $articleList.slice(0, displayQuantityLinks) as article}
					<ContentCard {article} />
				{/each}
			</div>
			<p class="more-posts"><a href="\resources">More links</a></p>
		</div>
	</div>
</div>

<!-- <p>{article.body}</p> -->

<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<style>
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Sanchez&family=Pridi&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Scope+One&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	div.container {
		width: 100%;
		display: grid;
		grid-template-columns: 3fr 7fr;
		margin: 0px 0px 5px 0px;
	}

	div.sidebar-container {
		/* margin: 0;
		padding: 0; */
		float: left;
		margin: 10px 30px 00px 0px;
		flex-flow: column;
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

	.more-posts {
		text-align: right;
		font-size: 1.2rem;
		margin: 5px 0 10px 0;
	}

	/* h1 {
		font-family: 'Sanchez';
		font-weight: normal;
		margin: 0px 0px 10px 0px;
		color: var(--heading-color);
	} */
</style>
