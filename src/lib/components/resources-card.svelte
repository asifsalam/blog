<script>
	function randomIntFromInterval(min, max) {
		let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
		let paddedRandomNumber = randomNumber > 9 ? String(randomNumber) : String('0' + randomNumber);
		return paddedRandomNumber;
	}
	// import TopicListCard from '$lib/components/topic-list-card.svelte';
	let baseImgUrl = '/img/images/geometric-pattern-';

	export let article;
	export let category;
	let tags;
	if (article.tags.length > 5) {
		tags = article.tags.slice(0, 5);
	} else {
		tags = article.tags;
	}
	// article.excerpt = article.excerpt.split(' ').slice(0, 15).join(' ').concat('...');
</script>

<div class="post-card">
	<!-- <div class="background-image" style="background-image: url({img_url})" /> -->
	<div class="content">
		<!-- <div class="left-content" /> -->
		<div class="right-content">
			<div class="main-content">
				<div class="img-content">
					<img class="category-img" src={article.img_url} alt={category.title} srcset="" />
				</div>
				<a class="main-link" style="text-decoration:none" href={article.link}>
					<p class="article-title">
						{article.title}
						{#if article.author == 'NA'}
							<span class="article-author">Uncredited</span>
						{:else}
							<span class="article-author"
								>by {article.author},
								{#if article.post_date == 'undated'}
									<span class="article-date"> {article.post_date.toLower()}.</span>
								{:else}
									<span class="article-date"> {article.post_date}.</span>
								{/if}
							</span>
						{/if}
					</p>
				</a>
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
		border-top: 1px solid hsla(278, 13%, 28%, 0.3);
		border-radius: 0px;
		overflow: hidden;
		z-index: 0;
		position: relative;
		/* color: var(--color_grey_dark); */
	}
	/* .post-card:last-child {
		border-top: 2px solid hsla(278, 13%, 28%, 0.4);
	} */
	/* .post-card .background-image {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-size: cover;
		background-position: center;
		z-index: 1;
	} */

	.content {
		display: grid;
		grid-template-columns: 1fr;
		height: 100%;
		width: 100%;
		/* display: flex; */
		/* flex-direction: column; */
	}

	/* .left-content {
		background-color: hsl(0, 0%, 11%, 0.1);
		width: 100%;
		height: 100%;
		z-index: 2;
		color: white;
		font-weight: 400;
		margin: 0;
	} */
	.main-content {
		margin: 0;
		padding: 0;
	}

	.category-img {
		object-fit: fill;
		height: 2.6em;
		width: 2.6em;
	}
	img {
		float: left;
		margin: 0px 10px 2px 3px;
		display: inline;
		position: relative;
		height: 40px;
		max-width: 60px;
		filter: sepia(25%);
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
	.main-link {
		position: relative;
		display: inline;
	}
	.article-date::after {
		content: '\21D2';
		position: absolute;
		margin-left: 5px;
		font-weight: bold;
	}
	.article-date:hover::after {
		text-decoration: underline;
		font-weight: 900;
	}
	.article-title:hover {
		text-decoration: wavy;
	}
	/* .article-title:hover .read-more-link {
		font-style: underline;
		background-color: hsla(31, 100%, 50%, 0.5);
		visibility: visible;
	} */

	.article-title {
		font-family: 'Roboto Slab', Poppins, sans-serif;
		margin: 0px 0px 3px 2px;
		font-size: 1rem;
		font-weight: 400;
		color: hsla(251, 100%, 21%, 1);
	}
	.article-author {
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
		margin: 0 0 3px 0px;
		font-weight: bold;
	}

	.topic-box {
		padding: 0px 2px;
		margin: 0px 3px;
		background-color: hsla(194, 100%, 96%, 0.3);
		font-weight: normal;
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		border: 0px solid hsla(252, 32%, 44%, 0.2);
	}

	.topic:hover {
		color: hsl(251, 100%, 21%);
		font-weight: bold;
		background-color: hsla(194, 100%, 96%, 0.7);
		background-color: hsla(195, 100%, 82%, 0.5);
		outline: 0.2px solid hsla(252, 32%, 44%, 0.2);
	}

	/* .bottom-border {
		width: 100%;
		height: 7px;
		background-color: hsl(251, 100%, 21%);
		background: linear-gradient(rgba(255, 254, 243, 0.9) 5%, hsla(251, 100%, 21%, 0.7) 5%);
		background-image: url('/static/img/borders/taj_mahal_border_floral_01.png');
	} */

	/* .post-card .read-more {
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
		visibility: hidden;
	} */
	.post-card .read-more-link a {
		color: blue;
		display: inline-block;
		position: relative;
		text-decoration: double;
	}
	.post-card .read-more-link a:hover {
		background-color: hsla(16, 100%, 25%, 0);
		text-decoration: underline;
	}
</style>
