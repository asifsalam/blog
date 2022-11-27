<script>
	export let article;
	console.log(article);
</script>

<div class="post-card">
	<p>{article.title}</p>
</div>

<style>
	.post-card {
		width: 100%;
		min-height: 20px;
		max-height: 200px;
		margin: 0;
		padding: 0;
		font-family: 'Roboto Slab', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		border-top: 3px solid hsla(251, 100%, 28%, 0.9);
		border-radius: 0px;
		overflow: hidden;
		z-index: 0;
		position: relative;
		transition: all ease-in-out 0.2s;
	}
</style>
