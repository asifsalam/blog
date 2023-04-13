<script>
	import { allThemes, allCategories, allTopics } from '$lib/json/stores';
	// import KeyThemes from '$lib/components/key-themes.svelte';
	// import KeyCategories from './key-categories.svelte';
	// import KeyTopics from '$lib/components/key-topics.svelte';
	import KeyTags from '$lib/components/key-tags.svelte';
	// import SidebarHeadingHome from '$lib/components/sidebar-heading-home.svelte';
	import '/src/styles/global.css';

	export let useThemes = 'yes';
	export let useCategories = 'yes';
	export let useTopics = 'no';
</script>

<div class="sidebar">
	{#if useThemes == 'yes'}
		<KeyTags headingText={'Main themes'} tags={$allThemes} tagType="theme" />
	{/if}
	{#if useCategories == 'yes'}
		<KeyTags headingText={'Categories'} tags={$allCategories} tagType="category" />
	{/if}
	{#if useTopics == 'yes'}
		<KeyTags headingText={'All tags'} tags={$allTopics} tagType="topic" />
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Sanchez&family=Pridi:wght@200;300;400&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Scope+One&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	.sidebar {
		/* float: left;
		margin: 10px 30px 00px 0px;
		flex-flow: column; */
	}

	/* .sidebar-header {
		display: block;
		height: auto;
		width: 100%;
		background-color: rgb(255, 254, 243);
		padding: 0 0 10px 0;
		margin: 0;
		border-bottom: 2px solid hsl(23, 8%, 50%);
	}
	.sidebar-header-leadin {
		display: inline;
		padding: 0;
		margin: 0 0 15px 0;
		font-family: 'Crete Round';
		font-size: 1.1em;
		font-weight: 200;
		color: hsla(251, 100%, 15%, 1);
		text-align: left;
	}
	.sidebar-header-text {
		display: block;
		padding: 0;
		margin: 5px 0 5px 0;
		font-family: 'Crete Round';
		font-size: 1.4em;
		font-weight: 100;
		color: hsla(251, 100%, 15%, 1);
		text-align: left;
	}

	.sidebar-text {
		position: relative;
		list-style: none;
		margin-left: 0;
		margin-top: 5px;
		margin-bottom: 2px;
		padding-left: 1.2em;
	}
	.sidebar-text:before {
		content: '□';
		position: absolute;
		left: 0;
	} */
</style>
