<script>
	function randomIntFromInterval(min, max) {
		let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
		let paddedRandomNumber = randomNumber > 9 ? String(randomNumber) : String('0' + randomNumber);
		return paddedRandomNumber;
	}

	let baseImgUrl = '/img/geometric-pattern-';
	let bottomBorderUrl = '/img/borders/taj_mahal_border_floral_01.png';
	const twitterLogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg';
	const youtubeLogoUrl =
		'https://upload.wikimedia.org/wikipedia/commons/4/4f/YouTube_social_white_squircle.svg';
	const githubLogoUrlUrl =
		'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg';
	export let article;

	let tags;
	let img_url;
	if (article.img_url != 'non') {
		img_url = article.img_url;
	} else {
		img_url = baseImgUrl.concat(randomIntFromInterval(1, 33), '.jpg');
	}
	if (article.tags.length > 5) {
		tags = article.tags.slice(0, 5);
	} else {
		tags = article.tags;
	}

	// article.excerpt = article.excerpt.split(' ').slice(0, 15).join(' ').concat('...');
	article.excerpt = article.excerpt.split(' ').slice(0, 15).join(' ');
</script>

<div class="post-card">
	<div class="background-image" style="background-image: url({img_url})" />
	<div class="content">
		<div class="left-content" />
		<div class="right-content">
			<div class="main-content">
				<a style="text-decoration:none" href={article.link}>
					<h3 class="article-title">{article.title}</h3></a
				>
				{#if article.author == 'NA'}
					<h2 class="article-author">Uncredited</h2>
				{:else}
					<p class="article-author">
						<span>{article.author}</span> <br />
						<span class="article-date">{article.post_date}</span>
					</p>
					<!-- <p class="article-date">{article.post_date}</p> -->
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
						{article.excerpt}
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
		min-height: 100px;
		max-height: 500px;
		margin: 0;
		padding: 0;
		font-family: 'Roboto Slab', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		border-top: 7px solid hsla(251, 100%, 21%, 0.7);
		border-radius: 0px;
		overflow: hidden;
		z-index: 0;
		position: relative;
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
		/* transition: transform 0.2s; */
		z-index: 1;
	}

	.content {
		/* float: left; */
		display: grid;
		grid-template-columns: 2fr 8fr;
		height: 100%;
		width: 100%;
		/* display: flex; */
		/* flex-direction: column; */
	}

	.left-content {
		/* float: left; */
		background-color: hsl(0, 0%, 11%, 0.1);
		width: 100%;
		height: 100%;
		z-index: 2;
		color: white;
		font-weight: 400;
		/* text-shadow: antiquewhite; */
		/* position: absolute;
		top: 0;
		left: 0;
		overflow: hidden; */
		margin: 0;
	}
	.main-content {
		margin: 0;
		padding: 0;
	}

	.right-content {
		/* float: right; */
		display: grid;
		grid-gap: 0;
		align-content: space-between;
		background-color: rgba(255, 254, 243, 0.93);
		width: 100%;
		height: 100%;
		z-index: 3;
		margin: 0;
		color: black;
		/* font-weight: 500; */
		/* text-shadow: 2px 2px 1px white; */
	}
	.article-title {
		font-family: 'Roboto Slab', Poppins, sans-serif;
		/* line-height: 1; */
		margin: 5px 0px 03px 10px;
		font-size: 1.1rem;
		font-weight: 400;
		color: hsla(251, 100%, 21%, 1);
		/* width: 100%; */
		/* overflow: hidden; */
		/* overflow-wrap: break-word; */
	}
	.article-author {
		font-family: 'Roboto Slab', Georgia, 'Times New Roman', Times, serif;
		font-size: 1rem;
		font-weight: normal;
		font-style: italic;
		/* text-transform: uppercase; */
		color: rgb(0, 0, 0);
		margin: 0px 0px 3px 10px;
		padding: 0;
		width: 100%;
		/* height: 1.25rem;
		overflow: hidden; */
	}
	.article-date {
		font-family: Roboto, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-size: 0.95rem;
		font-weight: 400;
		font-style: normal;
		/* text-transform: uppercase; */
		color: hsla(250, 100%, 5%, 1);
		margin: 0px 0px 0px 0px;
		width: 100%;
		/* height: 1.25rem;
		overflow: hidden; */
	}
	.topics {
		display: block;
		line-height: 1.7;
		margin: 0 0 10px 10px;
		font-weight: bold;
	}
	.topic {
		margin: 0px 50px;
		padding: 20px;
		text-decoration: none;
		color: dimgray;
	}

	.topic-box {
		padding: 0px 2px;
		margin: 0px 3px;
		background-color: #eafaff;
		font-weight: normal;
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		border: 0.1px solid hsla(252, 32%, 44%, 0.2);
	}

	.topic:hover {
		color: hsl(251, 100%, 21%);
		font-weight: bold;
	}
	.post-card .excerpt {
		font-family: Roboto, Arial, Helvetica, sans-serif;
		color: #210666;
		font-size: 1rem;
		line-height: 110%;
		margin: 0 3px 5px 10px;
		flex: 1;
		/* display: block; */
	}
	.excerpt-linked {
		text-decoration: none;
	}
	.excerpt::after {
		/* content: url('/static/img/icons/open-in-new-svgrepo-com-1.svg'); */
		/* content: '\2026\21D2'; \27a8*/
		/* content: '\2192'; */
		content: '\21DD';
		position: absolute;
		margin-left: 0;
		color: hsl(257, 89%, 21%, 0.7);
		font-weight: bold;
		font-size: larger;
		transition: all cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.3s;
		padding: 0 5px;
	}

	.excerpt:hover::after {
		font-weight: 900;
		/* font-size: xx-large; */
		margin-left: 10px;
		transition: margin 0.3s, opacity 0.3s;
	}

	/* .bottom-border {
		width: 100%;
		height: 7px;
		background-color: hsl(251, 100%, 21%);
		background: linear-gradient(rgba(255, 254, 243, 0.9) 5%, hsla(251, 100%, 21%, 0.7) 5%);
		background-image: url('/static/img/borders/taj_mahal_border_floral_01.png');
	} */

	.post-card .read-more {
		display: block;
		text-align: end;
		bottom: 0;
		right: 10px;
		justify-items: right;
		vertical-align: bottom;
		padding: 2px 2px;
		margin: 0 3px 3px 0;
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
