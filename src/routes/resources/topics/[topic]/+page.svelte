<script>
	export let data;
	import { onMount } from 'svelte';
	import { articleList, filteredArticles, allTopics, clickedTopic } from '$lib/json/stores';
	import { filterTopic } from '$lib/modules/utility_functions';
	import RandomQuote from '$lib/components/random-quote.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import SectionHeadingTopic from '$lib/components/section-heading-topic.svelte';
	import TopicList from '$lib/components/topic-list.svelte';

	$: topic = data.topic;
	$: articles = filterTopic($articleList, topic);
	// console.log('topic', data.topic);

	// onMount(() => {
	// 	articles = filterTopic($articleList, topic);
	// });

	function topicClicked(clTopic) {
		topic = clTopic;
		console.log('[Topic]Clicked', topic);
		articles = filterTopic($articleList, clTopic);
	}
	/** @type {string}*/
	const headingText = 'Topic';
	$: totalQuantity = articles.length;
	// $: console.log('topics-page: articles ', articles);
</script>

<RandomQuote />
<Breadcrumbs />

<div class="container">
	<div class="sidebar">
		<div class="sidebar-header">
			<p class="sidebar-header-text">Items by [topic]</p>
			<p />
		</div>
		<p class="topics-header">{headingText}</p>
		<p class="topics">
			{#each $allTopics as topic}
				<!-- <button class="topic topic-box" on:click={() => topicClicked(topic)}>{topic}</button> -->
				<a class="topic topic-box" href={`/resources/topics/${topic}`}> {topic} </a>
			{/each}
		</p>
	</div>
	<div class="posts">
		<SectionHeadingTopic {topic} {totalQuantity} />
		<div class="cards">
			{#if articles.length > 0}
				<TopicList {articles} {topic} />
			{:else}
				<p>No articles found on {topic}</p>
			{/if}
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100;300&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Pridi:wght@200;400&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Sanchez&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&display=swap');

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
		font-weight: normal;
		font-size: 1em;
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		border: 0.1px solid hsla(251, 32%, 44%, 0.2);
	}
	.topic:hover {
		color: hsl(251, 95%, 33%);
		font-weight: bold;
		background-color: #bff0ff;
		cursor: pointer;
	}
</style>
