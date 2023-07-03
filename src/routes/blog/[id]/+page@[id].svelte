<script>
	export let data;
	import { page } from '$app/stores';
	import '$lib/styles/global.css';
	import '$lib/styles/gruvbox-light-scribe.css';
	import '$lib/styles/blog.css';
	// import '$lib/styles/gruvbox.css';

	// import Sidebar from '/blog//components/sidebar-blog.svelte';
	import TopicListCard from '$lib/components/topic-list-card.svelte';
	let postData = data.postData;
	const tags = postData.metadata.categories;
	// console.log($page.params.id);
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
	</div>
{/key}

<style>
	.heading h1 {
		font-size: 2.5rem;
		color: hsl(251, 100%, 15%);
		margin-top: 10px;
		margin-bottom: 20px;
	}

	.meta-info {
		border-left: hsl(251, 100%, 15%) solid 4px;
		padding: 0 0 0 10px;
	}
</style>
