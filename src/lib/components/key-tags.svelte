<script>
	import { goto } from '$app/navigation';
	import { clickedCategory, clickedTheme, clickedTopic } from '$lib/json/stores';
	import CreateTags from '$lib/components/create-tags.svelte';
	/** @type {undefined}*/
	export let tagType = 'theme';
	export let tags;
	export let headingText = 'Main themes';

	if (tagType == 'category') {
		tags = tags.filter((d) => d.type === 'category');
	}

	// console.log('key-themes-categories: ', themes);
	/** @param {string} theme */
	function themeClicked(theme) {
		// @ts-ignore
		$clickedTheme = theme;
		goto('/theme');
		console.log('theme-clicked: ', $clickedTheme);
	}

	function categoryClicked(tag) {
		// @ts-ignore
		$clickedCategory = tag;
		goto('/resources/category');
		console.log('category-clicked: ', $clickedCategory);
	}

	function tagClicked(tag) {
		// @ts-ignore
		$clickedTopic = tag;
		console.log('key-tag-clicked: ', $clickedTopic);
		goto(`/resources/tags/`);
	}
	console.log('key-tags: ', tagType, tags);
</script>

<div class="sidebar-themes">
	<!-- <p class="themes-header">{headingText}</p> -->
	{#if tagType == 'theme'}
		<p class="tags">
			<CreateTags {tags} tagClicked={themeClicked} {tagType} {headingText} />
		</p>
	{:else if tagType == 'category'}
		<p class="tags">
			<CreateTags {tags} tagClicked={categoryClicked} {tagType} {headingText} />
		</p>
	{:else if tagType == 'tag'}
		<p class="tags">
			<CreateTags {tags} {tagClicked} {tagType} {headingText} />
		</p>
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Sanchez&family=Pridi&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Scope+One&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	.sidebar-themes {
		margin: 0;
		padding: 0;
	}

	/* .themes-header {
		padding: 10px 0 0 0;
		margin: 0;
		font-family: 'Pridi', Georgia, 'Times New Roman', Times, serif;
		font-size: 1.4rem;
		font-weight: 300;
		color: hsla(251, 100%, 20%, 0.9);
	} */

	.tags {
		/* display: inline; */
		line-height: 1.5;
		/* margin: 50px 0 50px 0px; */
		/* font-size: 1rem; */
		/* font-weight: bold; */
	}
</style>
