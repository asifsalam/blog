<script>
	import { excerptLength } from '$lib/json/stores';
	import TopicListCard from '$lib/components/topic-list-card.svelte';
	const twitterLogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg';
	export let article;
	let tags;
	let img_url;
	if (article.img_url != 'non') {
		img_url = article.img_url;
	} else {
		img_url = 'https://picsum.photos/200/300';
	}
	if (article.tags.length > 4) {
		tags = article.tags.slice(0, 4);
	} else {
		tags = article.tags;
	}
	// article.excerpt = article.excerpt.split(' ').slice(0, 50).join(' ');
	// const excerptLength = 80;
	let excerpt = article.excerpt.substring(0, $excerptLength);
	// console.log('content-card: ', excerpt);
</script>

<div class="post-container">
	<div class="left-container">
		<a class="articleId-link" href={article.link} target="_blank" rel="noopener noreferrer">
			<p class="articleId">{article.link_id}</p>
		</a>
		<div class="left-image" style="background-image: url({img_url}); filter:sepia(0.9)" />
	</div>
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
		<div class="right-content">
			<a href={article.link} class="excerpt-linked">
				<p class="excerpt" style="text-decoration:none">
					<!-- {excerpt} -->
					{article.excerpt.substring(0, $excerptLength)}
					<span class="read-more">&#8212 read more</span>
					<!-- &#x2026 -->
				</p>
			</a>
		</div>
	</div>
	<div class="topics"><TopicListCard {tags} size={2} /></div>
	<!-- <div class="post-content" style="background-image: url({img_url}); filter:sepia(0.2)"> -->
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100;300&display=swap');

	.post-container {
		display: grid;
		grid-template-columns: 1fr 4fr;
		grid-template-rows: auto;
		width: 100%;
		/* min-height: 50px; */
		/* max-height: 200px; */
		/* border-top: 1px solid hsla(251, 100%, 28%, 0.9); */
		border-top: 1px solid hsla(288, 100%, 15%, 0.95);
		margin: 0;
		padding: 0;
	}
	.left-container {
	}
	.left-image {
		height: 100%;
		/* padding-left: 100%; */
		/* width: 30%; */
		background-size: cover;
		background-position: center;
		background-blend-mode: color-burn;
		background-color: hsl(55deg 100% 98% / 25%);
	}
	.articleId-link {
		margin: 0;
		padding: 0;
		text-decoration: none;
	}
	.articleId-link:hover {
		text-decoration: underline;
	}
	.articleId {
		margin: auto;
		height: 20px;
		background-color: #f5f5dc;
		color: hsl(257, 89%, 21%);
		font-family: Roboto, Verdana, Geneva, Tahoma, sans-serif;
		/* background-color: hsla(288, 100%, 15%, 0.95); */
		/* color: #f5f5dc; */
		font-size: 0.9rem;
		/* font-weight: bold; */
		padding-top: 3px;
		padding-left: 5px;
		text-decoration: none;
		/* border-bottom: 1px dotted hsla(251, 100%, 30%, 0.5); */
		border-bottom: 1px solid hsla(288, 100%, 15%, 0.95);
	}
	.post-main {
		/* display: grid; */
		/* grid-template-columns: 1fr 2fr; */
		/* grid-template-rows: auto; */
		/* grid-template-columns: 1fr; */
		width: 100%;
		min-height: 20px;
		margin: 0;
		padding: 0;
		font-family: 'Roboto Slab', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		border-radius: 0px;
		overflow: hidden;
		z-index: 0;
		position: relative;
		transition: all ease-in-out 0.2s;
	}

	.post-title {
		font-family: 'Roboto Slab', Poppins, sans-serif;
		border-bottom: 1px dotted hsla(251, 100%, 30%, 0.3);
	}

	.article-title {
		font-family: 'Roboto Slab', Poppins, sans-serif;
		margin: 3px 0px 1px 10px;
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
		/* font-style: italic; */
		color: hsla(251, 100%, 20%, 0.7);
		margin: 0px 0px 5px 10px;
		padding: 0;
		width: 100%;
	}

	.article-date {
		font-family: Roboto, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-size: 0.95rem;
		font-weight: 400;
		font-style: normal;
		color: hsla(250, 100%, 5%, 0.8);
		margin: 0px 0px 0px p3x;
		/* width: 100%; */
	}

	.post-content {
		display: grid;
		grid-template-columns: 1fr 2fr;
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
	}

	.right-content {
		width: 100%;
		/* height: 100%; */
		z-index: 3;
		margin: 5px 0 0 10px;
		color: black;
		/* background-size: cover;
		background-position: center;
		background-blend-mode: color-burn;
		background-color: hsl(55deg 100% 98% / 85%); */
	}

	.site-logo {
		width: 10%;
		position: absolute;
		left: 0.2%;
		bottom: 0.2%;
		filter: saturate(0.3);
	}

	.right-content .excerpt {
		font-family: Roboto, Arial, Helvetica, sans-serif;
		color: hsl(257, 89%, 21%);
		font-size: 1rem;
		line-height: 110%;
		margin: 0;
		/* margin: 5px 0px 2px 10px; */
		flex: 1;
		/* min-height: 80px; */
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

	.excerpt:hover::after {
		font-weight: 900;
		margin-left: 5px;
		transition: margin 0.3s, opacity 0.3s;
	}

	.topics {
		/* display: block; */
		/* line-clamp: 2; */
		line-height: 1.7;
		/* margin: 4px 0 4px 0px; */
		padding: 4px 0;
		/* height: 2rem;
		white-space: nowrap; */
		font-weight: bold;
		/* background-color: hsl(55deg 100% 98% / 85%); */
		grid-column-start: 1;
		grid-column-end: 3;
		background: linear-gradient(hsl(55deg 100% 98% / 90%), hsl(55deg 100% 98% / 100%));
		border-bottom: 1px dotted hsla(251, 100%, 30%, 0.3);
		z-index: 5;
	}
</style>
