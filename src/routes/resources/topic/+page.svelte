<script>
	import { onMount } from 'svelte';
	// import { page } from '$app/stores';
	import { articleList, allTopics, clickedTopic } from '$lib/json/stores';
	import { filterTopic } from '$lib/modules/utility_functions';
	import RandomQuote from '$lib/components/random-quote.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import SectionHeadingTopic from '$lib/components/section-heading-topic.svelte';
	import TopicList from '$lib/components/topic-list.svelte';

	import CreateTags from '$lib/components/create-tags.svelte';
	import SidebarHeading from '$lib/components/sidebar-heading.svelte';
	import SectionHeadingBasic from '$lib/components/section-heading-basic.svelte';
	import PaginationList from '$lib/components/pagination-list.svelte';

	$: selectedTopic = 'rstats';
	$: articles = [];
	let topics = $allTopics;

	onMount(() => {
		// console.log('topic: ', $clickedTopic);
		selectedTopic = $clickedTopic;
		articles = filterTopic($articleList, selectedTopic);
	});

	function topicClicked(topic) {
		$clickedTopic = topic;
		articles = filterTopic($articleList, $clickedTopic);
	}
	/** @type {string}*/
	const headingText = 'Main topics';
	$: totalQuantity = articles.length;
	// $: console.log('resource-topics: ', topics, totalQuantity);
	let sidebarTagHeading = 'All tags';
	articles = articles;
	selectedTopic = $clickedTopic;
</script>

<RandomQuote />
<Breadcrumbs />

<div class="container">
	<div class="sidebar">
		<!-- <div class="sidebar-header">
			<p class="sidebar-header-text">Resources by topic</p>
			<p />
		</div>
		<p class="topics-header">{headingText}</p>
		<p class="topics">
			{#each $allTopics as topic}
				<button class="topic topic-box" on:click={() => topicClicked(topic)}>{topic}</button>
			{/each}
		</p> -->
		<!-- <KeyCategories headingText={'Resource categories'} {categories} /> -->
		<!-- <p on:click={() => categoryClicked(category)}>sidebar {category}</p> -->
		<SidebarHeading
			sidebarLeadinText={'Select articles and resources from the categories and tags below.'}
		/>
		<p class="topics">
			<CreateTags
				tags={topics}
				tagClicked={topicClicked}
				tagType="topic"
				headingText={sidebarTagHeading}
			/>
		</p>
	</div>
	<!-- <div class="posts">
		<SectionHeadingTopic topic={selectedTopic} {totalQuantity} />
		<div class="cards">
			{#if articles.length > 0}
				<TopicList {articles} topic={selectedTopic} />
			{:else}
				<p>Houston there is a problem in "category-list.svelte"</p>
			{/if}
		</div>
	</div> -->
	<div class="posts-list">
		<SectionHeadingBasic selectedTag={selectedTopic} {totalQuantity} headingTitle={headingText} />
		{#key topic}
			<PaginationList {articles} category={selectedTopic} {totalQuantity} />
		{/key}
	</div>
</div>

<style>
	div.container {
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 7fr;
		margin: 0px 0px 5px 0px;
	}
	.sidebar {
		float: left;
		margin: 10px 30px 00px 0px;
		flex-flow: column;
	}
	.sidebar-header {
		display: block;
		/* float: left; */
		height: auto;
		width: 100%;
		background-color: rgb(255, 254, 243);
		padding: 0 0 10px 0;
		margin: 0;
		border-bottom: 2px solid hsl(23, 8%, 50%);
	}
	.sidebar-header-text {
		display: block;
		padding: 0;
		margin: 0px 0 5px 0;
		/* font-family: 'Roboto Slab'; */
		font-family: 'Crete Round';
		font-size: 1.4em;
		font-weight: 100;
		color: hsla(251, 100%, 15%, 1);
		text-align: left;
	}
	.topics-header {
		padding: 5px 0;
		margin: 10px 0;
		font-family: 'Pridi', Georgia, 'Times New Roman', Times, serif;
		font-size: 1.4em;
		font-weight: 300;
		color: hsla(251, 100%, 20%, 0.9);
	}
	.topics {
		display: inline;
		line-height: 1.5;
		margin: 0 0 50px 0px;
		font-size: 1.2rem;
		font-weight: bold;
	}

	.topic-box {
		display: inline-block;
		padding: 0px 5px;
		margin: 5px 10px 5px 0;
		background-color: #eafaff;
		font-family: Roboto, Arial, Helvetica, sans-serif;
		cursor: pointer;
		font-weight: normal;
		font-size: 1em;
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		border: 0.1px solid hsla(251, 32%, 44%, 0.2);
	}
	.topic:hover {
		color: hsl(251, 100%, 60%);
		font-weight: bold;
	}
</style>
