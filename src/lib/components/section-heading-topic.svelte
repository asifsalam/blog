<script>
	import TopicBox from './topic-box.svelte';
	export let topic = 'all';
	export let totalQuantity = 50;
	export let headingTitle = 'Topics:';
</script>

<div class="heading">
	<h1 class="heading-title">{headingTitle} <TopicBox category={topic} size={1} /></h1>
	<h3 class="article-count">{totalQuantity} items</h3>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Pridi:wght@200;400&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Sanchez&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&display=swap');
	h1 {
		font-family: 'Sanchez';
		margin: 0;
	}
	.heading {
		background-image: url('https://unsplash.com/photos/VWcPlbHglYc');
		display: grid;
		grid-template-columns: 4fr 1fr;
		height: 4em;
		padding: 0px 0px 10px 0px;
		align-items: center;
		vertical-align: middle;
		font-family: Sanchez;
	}

	.heading-title {
		margin: 0;
		padding-left: 0px;
		padding-bottom: 0;
		font-size: xx-large;
		font-weight: 200;
		color: hsla(251, 100%, 20%, 1);
	}

	.article-count {
		font-family: 'Scope One', Roboto, Arial, Helvetica, sans-serif;
		font-size: large;
		font-weight: bold;
		text-align: right;
		color: hsla(251, 100%, 20%, 1);
		margin: 1em 0 0 0;
	}
	/* .article-count a {
		opacity: 0.7;
		text-decoration: dotted;
		text-decoration-color: hsla(251, 100%, 20%, 1);
		text-decoration-line: underline;
		text-decoration-thickness: 2px;
	}
	.article-count a:hover {
		opacity: 1;
		text-decoration: underline;
		text-decoration-thickness: 3px;
	}
	.category-img {
		background-color: rgba(255, 0, 0, 0.019);
		bottom: 0;
		left: 0;
	}
	img {
		display: inline;
		position: relative;
		height: inherit;
	}

	.topic-box {
		display: inline-block;
		padding: 0px 5px;
		margin: 5px 10px 5px 0;
		background-color: #eafaff;
		font-weight: normal;
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		border: 0.1px solid hsla(251, 32%, 44%, 0.5);
	} */
</style>
