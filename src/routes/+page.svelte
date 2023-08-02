<script>
	import {
		articleList,
		postList,
		// allThemes,
		// themes,
		// categories,
		// tags,
		// allCategories,
		// allTopics,
		clickedTheme,
		clickedCategory
	} from '$lib/json/stores';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import ContentCard from '$lib/components/content-card-large.svelte';
	import RandomQuote from '$lib/components/random-quote.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import SidebarTags from '$lib/components/sidebar-tags.svelte';
	import SidebarHeading from '$lib/components/sidebar-heading.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';

	// const themes = $allThemes;
	// console.log('home-page:');
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
	}
	function moreLinksClicked(selectedCategory) {
		// @ts-ignore
		$clickedCategory = 'all';
		goto('/resources/category');
	}
	// console.log($postList);
</script>

<RandomQuote />
<Breadcrumbs />
{#key $articleList.length}
	<div class="container" transition:fade={{ delay: 250, duration: 300 }}>
		<div class="sidebar-container">
			<SidebarHeading {sidebarTitle} {sidebarLeadinText} {sidebarBulletText} />
			<SidebarTags useThemes={'yes'} useCategories={'yes'} />
		</div>
		<div class="main-content">
			<div class="articles">
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
				<!-- <p class="more-posts"><a href="\blog">More posts</a></p> -->
			</div>
			<div class="section-break" />
			<div class="articles">
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
				<!-- <p class="more-posts"><a href="\resources">More links</a></p> -->
			</div>
		</div>
	</div>
{/key}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Sanchez&family=Pridi&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Scope+One&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	div.container {
		width: 100%;
		display: grid;
		grid-template-columns: 3fr 7fr;
		margin: 10px 0px 5px 0px;
	}

	div.sidebar-container {
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
		grid-template-columns: 1fr 1fr;
		align-items: start;
		column-gap: 1.5rem;
		row-gap: 1.5rem;
	}

	div.section-break {
		background-image: url('/img/borders/taj_mahal_border_floral_03.png');
		height: 15px;
		background-size: contain;
		margin: 10px 0;
		padding: 0;
	}
	/* .more-posts {
		text-align: right;
		font-size: 1.2rem;
		margin: 5px 0 10px 0;
	} */

	.articles {
		margin-bottom: 20px;
	}
</style>
