<script>
	import { postList } from '$lib/json/stores';
	import ContentCard from '$lib/components/content-card-a.svelte';
	console.log($postList);
</script>

<div class="posts">
	<!-- <SectionHeading {category} headingTitle={headingText} {displayQuantity} {totalQuantity} /> -->
	<!-- <div class="heading">
			<h1 class="heading-title">Posts</h1>
			<h3 class="sub-title">Total posts: {posts.length}</h3>
		</div> -->
	<div class="cards">
		{#each $postList as post}
			<ContentCard article={post} />
		{/each}
	</div>
</div>
<p>This is a test</p>
