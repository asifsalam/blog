<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import {
		articleList,
		themes,
		categories,
		tags,
		allCategories,
		allTopics,
		clickedTopic
	} from '$lib/json/stores';
	import { filterTopic, filterTag } from '$lib/modules/utility_functions';
	import RandomQuote from '$lib/components/random-quote.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import CreateTags from '$lib/components/create-tags.svelte';
	import SidebarHeading from '$lib/components/sidebar-heading.svelte';
	import SectionHeadingBasic from '$lib/components/section-heading-basic.svelte';
	import PaginationList from '$lib/components/pagination-list.svelte';

	$: selectedTopic = 'rstats';
	let topics = $allTopics;
	let tagObj = {};
	/** @type {Array} */
	let articles = [];

	onMount(() => {
		selectedTopic = $clickedTopic;
		articles = filterTopic($articleList, selectedTopic);
		console.log(selectedTopic);
	});

	function tagClicked(tag) {
		// @ts-ignore
		$clickedTopic = tag;
		console.log('key-tag-clicked: ', $clickedTopic);
		goto(`/resources/topics/`);
	}

	function topicClicked(selectedTag) {
		// $clickedTopic = topic;
		// selectedTopic = $clickedTopic;
		// console.log('topics-page-function-clicked: ', $clickedTopic);
		// articles = filterTag($articleList, selectedTopic);
		// goto(`/resources/topics/${topic}`);
		$clickedTopic = selectedTag;
		console.log('topics-page-function-clicked: ', $clickedTopic);
		tagObj = $tags.filter((d) => d.name == selectedTag)[0];
		// articles = filterTag($articleList, tagObj);
		goto(`/resources/topics/${selectedTag}`);
	}

	/** @type {string}*/
	const headingText = 'Tag';
	$: totalQuantity = articles.length;
	console.log('topics-page-tags-topics-selectedTopic: ', $tags, topics, selectedTopic);
	let sidebarTagHeading = 'All tags';
	articles = articles;
	selectedTopic = $clickedTopic;
</script>

<RandomQuote />
<Breadcrumbs />

<div class="container">
	<div class="sidebar">
		<SidebarHeading sidebarLeadinText={'Select articles and resources from the tags below.'} />
		<p class="topics">
			<CreateTags
				tags={$tags}
				tagClicked={topicClicked}
				tagType="tag"
				headingText={sidebarTagHeading}
			/>
		</p>
	</div>
	{#key $clickedTopic}
		<div class="posts">
			<div class="posts-list">
				<SectionHeadingBasic
					selectedTag={selectedTopic}
					{totalQuantity}
					headingTitle={headingText}
				/>
				{#key selectedTopic}
					<PaginationList {articles} category={selectedTopic} {totalQuantity} />
				{/key}
			</div>
		</div>
	{/key}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100;300&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Pridi:wght@200;400&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Sanchez&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&display=swap');

	div.container {
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 5fr;
		margin: 0px 0px 5px 0px;
	}

	.sidebar {
		float: left;
		margin: 10px 30px 00px 0px;
		flex-flow: column;
	}
	/* .sidebar-header {
		display: block;
		height: auto;
		width: 100%;
		background-color: rgb(255, 254, 243);
		padding: 0 0 10px 0;
		margin: 0;
		border-bottom: 2px solid hsl(23, 8%, 50%);
	} */
	/* .sidebar-header-text {
		display: block;
		padding: 0;
		margin: 0px 0 5px 0;
		font-family: 'Crete Round';
		font-size: 1.4em;
		font-weight: 100;
		color: hsla(251, 100%, 15%, 1);
		text-align: left;
	} */
	/* .topics-header {
		padding: 5px 0;
		margin: 10px 0;
		font-family: 'Pridi', Georgia, 'Times New Roman', Times, serif;
		font-size: 1.4em;
		font-weight: 300;
		color: hsla(251, 100%, 20%, 0.9);
	} */
	.topics {
		display: inline;
		line-height: 1.5;
		margin: 0 0 50px 0px;
		font-size: 1.2rem;
		font-weight: bold;
	}

	/* .topic-box {
		display: inline-block;
		padding: 0px 5px;
		margin: 5px 10px 5px 0;
		background-color: #eafaff;
		font-family: Roboto, Arial, Helvetica, sans-serif;
		font-weight: normal;
		font-size: 1em;
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		border: 0.1px solid hsla(251, 32%, 44%, 0.2);
	} */
	/* .topic:hover {
		color: hsl(251, 95%, 33%);
		font-weight: bold;
		background-color: #bff0ff;
		cursor: pointer;
	} */
</style>
