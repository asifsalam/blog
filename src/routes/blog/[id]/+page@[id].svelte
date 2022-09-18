<script>
	export let data;
	import '$lib/styles/global.css';
	import '$lib/styles/gruvbox.css';
	// import Sidebar from '/blog//components/sidebar-blog.svelte';
	let postData = data.postData;
	// console.log('blog-test:', data);
</script>

<article>
	<h1>{postData.metadata.title}</h1>
	<p>Author: {postData.metadata.author}</p>
	<p>Published: {postData.metadata.post_date}</p>
	<svelte:component this={postData.content} />
</article>
