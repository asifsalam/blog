<script>
	// import TopicListCard from '$lib/components/topic-list-card-v2.svelte';
	// import TopicListCard from '$lib/components/resources-card.svelte';
	// import { getImageUrl } from '$lib/modules/utility_functions';
	let baseImgUrl = '/img/images/geometric-pattern-';

	export let posts;
	// console.log(posts);
</script>

<div class="post-card">
	<h3>Recent posts</h3>
	{#each posts as post}
		<a class="main-link" href={post.link}>
			<p class="article-title">
				{post.title}
			</p>
		</a>
	{/each}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100;300&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Scope+One&display=swap');

	.post-card {
		width: 100%;
		min-height: 20px;
		/* max-height: 400px; */
		margin: 10px 0 0px 0;
		padding-bottom: 10px;
		font-size: 1.1rem;
		font-family: 'Scope One', Cochin, Georgia, Times, 'Times New Roman', serif;
		/* border-bottom: 1px solid hsla(278, 13%, 28%, 0.3); */
		border-bottom: 3px solid #9999808a;
		border-radius: 0px;
		z-index: 0;
		position: relative;
		/* overflow: scroll; */
	}

	h3 {
		margin: 0px 0 10px 0;
		/* font-family: 'Scope One', Cochin, Georgia, Times, 'Times New Roman', serif; */
		/* font-size: 1.5rem; */
		font-family: 'Pridi', Georgia, 'Times New Roman', Times, serif;
		font-size: 1.4rem;
		font-weight: 300;
		color: hsla(251, 100%, 20%, 0.9);
	}

	.main-link {
		position: relative;
		display: inline;
		text-decoration: none;
	}

	.article-title:hover {
		text-decoration: underline;
		/* font-weight: bolder; */
	}

	.article-title {
		display: block;
		font-family: Roboto, Poppins, sans-serif;
		/* font-family: 'Scope One', Cochin, Georgia, Times, 'Times New Roman', serif; */
		margin: 0px 0px 15px 2px;
		font-size: 1.1rem;
		/* line-height: 1rem; */
		/* color: rgb(0, 0, 0); */
		color: #3b3882;
	}

	/* .article-author {
		font-family: 'Roboto', Georgia, 'Times New Roman', Times, serif;
		font-size: 1rem;
		font-weight: normal;
		font-style: italic;
		color: rgb(0, 0, 0);
		margin: 0px 0px 0px 0px;
		padding: 0;
		width: 100%;
	}

	.article-date {
		font-family: Roboto, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-size: 0.95rem;
		font-weight: 400;
		font-style: normal;
		color: hsla(250, 100%, 5%, 1);
		margin: 0px 0px 0px 0px;
		width: 100%;
	}

	.topics {
		display: block;
		margin: 0 0 0px 0px;
	} */

	/* .post-card .read-more-link a {
		color: blue;
		display: inline-block;
		position: relative;
		text-decoration: double;
	}

	.post-card .read-more-link a:hover {
		background-color: hsla(16, 100%, 25%, 0);
		text-decoration: underline;
	} */

	/* .logo-container {
		height: 30px;
		width: 30px;
		margin-top: 3px;
		padding-right: 10px;
	}

	.site-logo {
		width: 30px;
		height: 100%;
		position: relative;
		left: 0;
		top: 0;
	}

	.site-logo:hover {
		filter: brightness(0.5);
	} */
</style>
