<script>
	import TopicListCard from '$lib/components/topic-list-card-v2.svelte';
	// import TagListCard from '$lib/components/tag-list-card.svelte';
	import { paddedRandomIntFromInterval, getImageUrl } from '$lib/modules/utility_functions';

	const twitterLogoUrl = '/img/icons/twitter-svgrepo-com-2.svg';
	const baseImageUrl = '/img/images/geometric-pattern-';
	export let article;

	let tags = [];
	let img_url;

	img_url = getImageUrl(article);
	// console.log('content-card: ', article);

	if (article.tags.length > 4) {
		tags = article.tags.slice(0, 4);
	} else {
		tags = article.tags;
	}

	const excerptLength = 200;
	if (article.excerpt.length >= excerptLength)
		article.excerpt = article.excerpt.substring(0, excerptLength);
</script>

<div class="post-main">
	<div class="post-title">
		<a style="text-decoration:none" href={article.link}>
			<h3 class="article-title">{article.title}</h3></a
		>
		{#if article.author == 'NA'}
			<p class="article-author">Uncredited</p>
		{:else}
			<p class="article-author">
				<span>{article.author}</span>,
				<span class="article-date">{article.post_date}</span>
			</p>
		{/if}
	</div>

	<!-- <div class="post-content" style="background-image: url({img_url}); filter:sepia(0.2)"> -->
	<div class="post-content">
		<div class="left-content" style="background-image: url({img_url}); filter:sepia(0.3)">
			<!-- <div class="background-image" style="background-image: url({img_url}); filter:sepia(0.3)" /> -->
		</div>
		<div class="right-content">
			<a href={article.link} class="excerpt-linked">
				<p class="excerpt" style="text-decoration:none">
					{article.excerpt}
					<span class="read-more">&#8212 read more</span>
					<!-- &#x2026 -->
				</p>
			</a>
		</div>
	</div>
	<TopicListCard {tags} link_type={article.link_type} size={2} />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100;300&display=swap');

	.post-main {
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: 1fr;
		width: 100%;
		min-height: 20px;
		max-height: 400px;
		margin: 0;
		padding: 0;
		font-family: 'Roboto Slab', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		/* border-top: 3px solid hsla(251, 100%, 28%, 0.9); */
		/* border-top: solid 4px #999980; */
		border-top: solid 4px #9999808a;
		/* border-bottom: 2px dotted hsla(251, 100%, 28%, 0.9); */
		border-radius: 0px;
		overflow: hidden;
		z-index: 0;
		position: relative;
		transition: all ease-in-out 0.2s;
	}

	.post-title {
		/* background-color: darkgray; */
		font-family: 'Roboto Slab', Poppins, sans-serif;
		border-bottom: 1px dotted hsla(251, 100%, 30%, 0.3);
		grid-column-start: 1;
		grid-column-end: 3;
	}

	.article-title {
		font-family: 'Roboto Slab', Poppins, sans-serif;
		/* margin: 1px 0px 0 10px; */
		margin: 5px 3px 1px 0;
		font-size: 1.1rem;
		font-weight: 400;
		color: hsla(251, 100%, 21%, 1);
	}
	.article-title:hover {
		text-decoration: underline;
	}
	.article-author {
		font-family: 'Roboto', Georgia, 'Times New Roman', Times, serif;
		font-size: 1rem;
		font-weight: bold;
		font-style: italic;
		color: hsla(251, 100%, 20%, 0.7);
		margin: 0px 0px 5px 0px;
		padding: 0;
		width: 100%;
	}

	.article-date {
		font-family: Roboto, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-size: 0.95rem;
		font-weight: 400;
		font-style: normal;
		color: hsla(250, 100%, 5%, 0.8);
		margin: 0px 0px 0px 0px;
		width: 100%;
	}

	.post-content {
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-template-rows: auto auto;
		height: 100%;
		width: 100%;
		background-position: center;
		background-blend-mode: color-burn;
		background-color: hsl(55deg 100% 98% / 25%);
		background-size: cover;
	}

	.left-content {
		width: 100%;
		height: 100%;
		z-index: 0;
		color: white;
		font-weight: 400;
		margin: 0;
		background-size: cover;
		background-position: center;
		background-blend-mode: color-burn;
		background-color: hsl(55deg 100% 98% / 25%);
	}

	.right-content {
		width: 100%;
		height: 100%;
		z-index: 3;
		margin: 0;
		color: black;
		background-size: cover;
		background-position: center;
		background-blend-mode: color-burn;
		background-color: hsl(55deg 100% 98% / 85%);
	}

	/* .site-logo {
		width: 30%;
		position: absolute;
		left: 0.2%;
		bottom: 0.2%;
		filter: saturate(0.6);
	} */

	.right-content .excerpt {
		font-family: Roboto, Arial, Helvetica, sans-serif;
		color: hsl(257, 89%, 21%);
		font-size: 1rem;
		line-height: 110%;
		margin: 5px 0px 2px 10px;
		flex: 1;
		min-height: 80px;
	}

	.excerpt-linked {
		text-decoration: none;
	}

	.read-more {
		/* text-decoration: underline; */
		font-weight: bold;
	}
	.read-more:hover {
		font-weight: bold;
		text-decoration: underline;
	}
	/* .excerpt::after { */
	/* content: url('/static/img/icons/open-in-new-svgrepo-com-1.svg'); */
	/* content: '\2026\21D2'; \27a8*/
	/* content: '\2192';
		position: absolute;
		margin-left: 0px;
		color: hsl(257, 89%, 21%, 0.7);
		font-weight: bold;
		font-size: larger;
		transition: all cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.3s;
		padding: 0 5px; */
	/* } */

	.excerpt:hover::after {
		font-weight: 900;
		margin-left: 5px;
		transition: margin 0.3s, opacity 0.3s;
	}

	/*	.post-card .read-more-link a:after {
		content: '';
		content: '\2192';
		font-family: FontAwesome;
		margin-left: -10px;
		opacity: 0;
		vertical-align: bottom;
		transition: margin 0.3s, opacity 0.3s;
		text-decoration: none;
	}
	 .post-card .read-more-link a:hover {
		background-color: hsla(16, 100%, 25%, 0.9);
		color: white;
	}
	.post-card .read-more-link a:hover:after {
		margin-left: 10px;
		opacity: 1;
		text-decoration: none;
	} */
	.topics {
		/* display: block; */
		/* line-clamp: 2; */
		line-height: 1.7;
		/* margin: 4px 0 4px 0px; */
		padding: 4px 0;
		/* height: 2rem;
		white-space: nowrap; */
		font-weight: bold;
		background-color: hsl(55deg 100% 98% / 85%);
		grid-column-start: 1;
		grid-column-end: 3;
		/* border-bottom: 1px dotted hsla(251, 100%, 30%, 0.3); */
	}

	.tags {
		display: flex;
		align-items: flex-start;
		/* margin: 5px 0 5px 0px; */
		padding: 2px 0px;
		/* font-weight: bold; */
		grid-column-start: 1;
		grid-column-end: 3;
		/* border-top: 1px solid hsla(251, 100%, 30%, 0.1);
		border-bottom: 1px solid hsla(251, 100%, 30%, 0.1); */
		z-index: 5;
	}
	/* .logo-container {
		height: 30px;
		width: 30px;
		padding-right: 5px;
	} */

	/* .site-logo {
		width: 30px;
		height: 100%;
		position: relative;
		left: 0;
		top: 0;
		filter: saturate(0.6);
	} */
</style>
