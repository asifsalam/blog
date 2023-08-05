<script>
	export let data;
	import { page } from '$app/stores';
	// import '$lib/styles/global.css';
	import '$lib/styles/gruvbox-light-scribe.css';
	import '$lib/styles/blog.css';
	import { cleanTags } from '$lib/modules/utility_functions.js';
	// import '$lib/styles/gruvbox.css';

	import TopicListCard from '$lib/components/topic-list-card.svelte';
	let postData = data.postData;
	// const tags = postData.metadata.categories;
	const tags = cleanTags(data.posts.filter((d) => d.link_id === postData.metadata.id)[0].tags);
	// console.log('[id-page] ', $page.params.id, tags);
</script>

{#key $page.params.id}
	<div class="heading">
		<h1>{postData.metadata.title}</h1>
		<!-- <p>Author: {postData.metadata.author}</p> -->
	</div>
	<div class="meta-info">
		<p>Posted: {postData.metadata.post_date}</p>
		<TopicListCard {tags} size={2} tagType={'light-tag'} />
	</div>
	<div class="main-content">
		<svelte:component this={postData.content} />
		<!-- <p>{@html postData.content}</p> -->
	</div>
{/key}

<style>
	.heading h1 {
		font-size: 2.5rem;
		color: hsl(251, 100%, 15%);
		margin-top: 10px;
		margin-bottom: 20px;
	}

	h2 {
		font-size: 2rem;
	}

	.meta-info {
		border-left: hsl(251, 100%, 15%) solid 4px;
		padding: 0 0 0 10px;
	}
</style>
