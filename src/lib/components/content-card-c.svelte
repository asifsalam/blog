<script>
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
	// article.excerpt = article.excerpt.split(' ').slice(0, 15).join(' ').concat('...');
	article.excerpt = article.excerpt.replace('...', '').split(' ').slice(0, 15).join(' ');
</script>

<div class="post-card">
	<div class="background-image" style="background-image: url({img_url}); filter:sepia(0.5)" />
	<div class="content">
		<div class="left-content">
			{#if article.link_type === 'twitter'}
				<a href="https://twitter.com"
					><img class="site-logo" src={twitterLogoUrl} alt="" srcset="" /></a
				>
			{/if}
		</div>
		<div class="right-content">
			<div class="main-content">
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
				<p class="topics">
					Topics:
					{#each tags as tag}
						{#if tag != 'NA'}
							<a class="topic topic-box" href={`/topics/${tag}`}> {tag} </a>
						{:else}
							<a class="topic topic-box" href={`/topics/untagged`}> untagged </a>
						{/if}
					{/each}
				</p>
				<a href={article.link} class="excerpt-linked"
					><p class="excerpt" style="text-decoration:none">
						{article.excerpt}&#x2026
					</p></a
				>
			</div>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100;300&display=swap');

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

	.post-card:hover .background-image {
		opacity: 30%;
	}
	.post-card .background-image {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-size: cover;
		background-position: center;
		background-blend-mode: color-burn;
		background-color: hsl(55deg 100% 98% / 25%);
		z-index: 1;
	}

	.content {
		display: grid;
		grid-template-columns: 2fr 10fr;
		height: 100%;
		width: 100%;
	}

	.left-content {
		width: 100%;
		height: 100%;
		z-index: 2;
		color: white;
		font-weight: 400;
		margin: 0;
	}
	.site-logo {
		width: 10%;
		position: absolute;
		left: 0.2%;
		bottom: 0.2%;
		filter: saturate(0.3);
	}

	.main-content {
		margin: 0;
		padding: 0;
	}

	.right-content {
		display: grid;
		grid-gap: 0;
		align-content: space-between;
		background-color: rgba(255, 254, 243, 0.93);
		width: 100%;
		height: 100%;
		z-index: 3;
		margin: 0;
		color: black;
	}
	.article-title {
		font-family: 'Roboto Slab', Poppins, sans-serif;
		margin: 1px 0px 0 10px;
		font-size: 1.1rem;
		font-weight: 400;
		color: hsla(251, 100%, 21%, 1);
	}

	.article-author {
		font-family: 'Roboto Slab', Georgia, 'Times New Roman', Times, serif;
		font-size: 1rem;
		font-weight: normal;
		font-style: italic;
		color: rgb(0, 0, 0);
		margin: 0px 0px 1px 10px;
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
	.post-card .excerpt {
		font-family: Roboto, Arial, Helvetica, sans-serif;
		color: hsl(257, 89%, 21%);
		font-size: 1rem;
		line-height: 110%;
		margin: 0 0px 2px 10px;
		flex: 1;
		/* display: block; */
	}
	.excerpt-linked {
		text-decoration: none;
	}
	.excerpt::after {
		/* content: url('/static/img/icons/open-in-new-svgrepo-com-1.svg'); */
		/* content: '\2026\21D2'; \27a8*/
		content: '\2192';
		position: absolute;
		margin-left: 5px;
		color: hsl(257, 89%, 21%, 0.7);
		font-weight: bold;
		font-size: larger;
		transition: all cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.3s;
		padding: 0 5px;
	}

	.excerpt:hover::after {
		font-weight: 900;
		margin-left: 20px;
		transition: margin 0.3s, opacity 0.3s;
	}

	.post-card .read-more-link a:after {
		/* content: ''; */
		content: '\2192';
		/* font-family: FontAwesome; */
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
	}
	.topics {
		display: block;
		/* line-clamp: 2; */
		line-height: 1.7;
		margin: 0 0 2px 10px;
		/* height: 2rem;
		white-space: nowrap; */
		font-weight: bold;
	}
	/* .topic {
		 margin: 0px 50px;
		padding: 20px;
		text-decoration: none;
		color: dimgray; 
	}*/

	.topic-box {
		padding: 0px 2px;
		margin: 0px 3px;
		/* border: 0.25px solid #dedede; */
		background-color: hsla(194, 100%, 96%, 0.5);
		font-weight: normal;
		/* box-shadow: 1px 1px rgba(135, 135, 135, 0.2); */
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		border: 0.2px solid hsla(252, 32%, 44%, 0.2);
		/* line-height: 1.5rem; */
	}

	.topic:hover {
		color: hsl(251, 100%, 21%);
		font-weight: bold;
		background-color: hsla(195, 100%, 82%, 0.5);
	}

	/* .bottom-border {
		width: 100%;
		height: 7px;
		background-color: hsl(251, 100%, 21%);
		background: linear-gradient(rgba(255, 254, 243, 0.9) 5%, hsla(251, 100%, 21%, 0.7) 5%);
		background-image: url('/static/img/borders/taj_mahal_border_floral_01.png');
	} */

	.post-card .read-more {
		/* float: right; */
		/* position: absolute; */
		display: block;
		text-align: end;
		bottom: 0;
		right: 10px;
		justify-items: right;
		vertical-align: bottom;
		/* text-align: center; */
		/* vertical-align: bottom; */
		/* width: 30%; */
		padding: 2px 2px;
		margin: 0 3px 3px 0;
		/* background-color: #d4a373; */
	}
	.post-card .read-more-link {
		background-color: hsla(16, 100%, 66%, 0.1);
		border: 2px solid hsla(251, 100%, 21%, 0.5);
	}
	.post-card .read-more-link a {
		color: var(--color_link);
		display: inline-block;
		position: relative;
		text-decoration: dashed;
	}
	.post-card .read-more-link a:after {
		/* content: ''; */
		content: '\2192';
		/* font-family: FontAwesome; */
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
	}
</style>
