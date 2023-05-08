<script>
	import { excerptLength } from '$lib/json/stores';
	import { getImageUrl } from '$lib/modules/utility_functions';
	import TopicListCard from '$lib/components/topic-list-card.svelte';
	import TagListCard from '$lib/components/tag-list-card.svelte';
	const twitterLogoUrl = '/img/icons/twitter-svgrepo-com-1.svg';
	export let article;
	let tags;
	let img_url;
	img_url = getImageUrl(article);

	// if (article.img_url != 'non') {
	// 	img_url = article.img_url;
	// } else {
	// 	img_url = 'https://picsum.photos/200/300';
	// }

	if (article.tags.length > 7) {
		tags = article.tags.slice(0, 7);
	} else if (article.tags.lenght < 1) {
		tags = ['all'];
	} else {
		tags = article.tags;
	}

	// article.excerpt = article.excerpt.split(' ').slice(0, 50).join(' ');
	// const excerptLength = 80;
	let excerpt = article.excerpt.substring(0, $excerptLength);
	// console.log('cc-med: ', article.img_url);
</script>

<div class="post-container">
	<div class="left-container">
		<div class="articleId-container">
			<!-- <a href="https://twitter.com">
				<img class="site-logo3" src={twitterLogoUrl} alt="" srcset="" />
			</a> -->
			<a class="articleId-link" href={article.link} target="_blank" rel="noopener noreferrer">
				<p class="articleId">{article.link_id}</p>
			</a>
		</div>
		<div class="image-container">
			<a class="left-image" href={article.link}>
				<!-- <img class="site-logo2" src={img_url} alt="" srcset="" /> -->
				<div class="left-image" style="background-image: url({img_url}); filter:sepia(0.5)" />
			</a>
		</div>
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
	<div class="tags">
		<a class="logo-container" href="https://twitter.com">
			<img class="site-logo4" src={twitterLogoUrl} alt="" srcset="" /></a
		>
		<div class="topics">
			<TopicListCard {tags} size={2} />
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100;300&display=swap');

	.post-container {
		display: grid;
		grid-template-columns: 1fr 4fr;
		width: 100%;
		min-height: 50px;
		max-height: 200px;
		border-top: solid 2px #9999808a;
	}

	.left-container {
		width: 100%;
		min-height: 50px;
		max-height: 400px;
		display: flex;
		flex-direction: column;
	}

	.articleId-container {
		height: 24px;
		background-color: #f5f5dc;
		border-bottom: 1px solid black;
		display: flex;
		flex-direction: row;
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
		margin: 0;
		color: hsl(257, 89%, 21%);
		font-family: Roboto, Verdana, Geneva, Tahoma, sans-serif;
		font-size: 0.9rem;
		padding: 4px 0 2px 4px;
		text-decoration: none;
	}

	.image-container {
		width: 100%;
		height: 100%;
	}

	.left-image {
		/* width: 100%; */
		height: 100%;
		background-color: black;
		/* object-fit: cover; */
		background-size: cover;
		background-position: center;
	}

	.site-logo {
		/* filter: saturate(0.6); */
		width: 30%;
		height: 30%;
		position: relative;
		left: 0;
		bottom: calc(30% - 100%);
		filter: saturate(0);
		background: #131312a6;
	}

	.site-logo2 {
		width: 100%;
		height: 100%;
		/* position: relative; */
		/* left: 20%; */
		/* bottom: -50%; */
		filter: saturate(0.3);
		object-fit: cover;
	}

	.site-logo3 {
		/* filter: saturate(0.6); */
		/* width: 100%; */
		display: inline;
		height: 100%;
		position: relative;
		left: 0;
	}

	.logo-container {
		/* padding-right: 5px; */
		border-right: 0.5px solid rgb(66, 66, 58);
		height: 30px;
		width: 30px;
	}

	.site-logo4 {
		/* height: 30px; */
		width: 30px;
		/* display: inline; */
		height: 100%;
		position: relative;
		left: 0;
		background-color: blueviolet;
		/* bottom: calc(30% - 100%); */
		/* filter: saturate(0); */
	}

	.post-main {
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

	.right-content {
		width: 100%;
		/* height: 100%; */
		z-index: 3;
		margin: 5px 0 0 10px;
		color: black;
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
	.tags {
		display: flex;
		align-items: center;
		/* font-weight: bold; */
		grid-column-start: 1;
		grid-column-end: 3;
		border-top: 1px solid hsla(251, 100%, 30%, 0.1);
		/* background: linear-gradient(hsl(55deg 100% 98% / 90%), hsl(55deg 100% 98% / 100%)); */
		border-bottom: 1px solid hsla(251, 100%, 30%, 0.1);
		z-index: 5;
	}
	.topics {
		line-height: 1.7;
		/* padding: 4px 4px; */
		padding: 0px 0px 0 10px;
		display: flex;
		/* align-items: center; */
		/* font-weight: bold; */
		grid-column-start: 1;
		grid-column-end: 3;
		background: linear-gradient(hsl(55deg 100% 98% / 90%), hsl(55deg 100% 98% / 100%));
		/* border-bottom: 1px dotted hsla(251, 100%, 30%, 0.3); */
		z-index: 5;
	}
</style>
