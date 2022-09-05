<script>
	export let data;
	let postData = data.postData;
	console.log('blog-test:', data);
</script>

<article>
	<h1>{postData.metadata.title}</h1>
	<p>Published: {postData.metadata.post_date}</p>
	<svelte:component this={postData.content} />
</article>
