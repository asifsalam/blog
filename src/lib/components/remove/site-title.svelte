<script>
	import '$lib/styles/global.css';
	let backgroundImage = '/img/islamic-geometric-pattern-14.jpg';
</script>

<div class="site-title-wrap">
	<!-- <div class="site-title"> -->
	<p class="site-title-main">
		a &nbsp
		<span class="site-title-word-left">rough guide</span>
		&nbsp to the &nbsp
		<span class="site-title-word-right">data-driven enterprise</span>
	</p>
	<div class="site-name"><p class="site-title2-text-right">Asif Salam</p></div>
	<!-- <p class="my-quote">The data-driven life is not worth examining</p> -->
	<!-- </div> -->
</div>
<div class="site-sub-title">
	<div class="site-sub-title-left">
		<p class="sub-title-text-left">The promise, the perils, the beauty & the drudgery</p>
	</div>
	<div class="site-sub-title-right">
		<p class="sub-title-text-right">Asif Salam</p>
	</div>
</div>

<div class="title-border">
	<!-- <img src="img/border-01.jpg" height="30" alt="" /> -->
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Cherry+Swash&family=Lancelot&family=Maiden+Orange&family=Noto+Serif+Thai:wght@300;400&family=Offside&family=Scope+One&display=swap');
	:root {
		--heading-color: hsl(251, 100%, 21%);
	}

	.title-border {
		width: 100%;
		height: 15px;
		background-image: url('/img/images/geometric-pattern-07.jpg');
		/* background-size: 400px; */
		background-position: top;
		background-color: bisque;
	}
	.site-title-wrap {
		display: grid;
		grid-template-columns: 13fr 2fr;
		align-content: space-around;
		padding: 0;
		margin: 0;
		/* height: 5em; */
		/* margin: auto; */
		background-color: beige;
	}

	.site-title {
		width: 100%;
		/* margin: auto; */
		display: grid;
		background-color: beige;
		justify-content: center;
	}

	.site-title-main {
		height: 100%;
		font-family: 'Roboto';
		color: hsla(251, 100%, 21%, 0.5);
		font-size: 2em;
		text-align: left;
		margin: 0;
		padding: 0;
		/* vertical-align: top; */
	}

	.site-title-word-left {
		height: 100%;
		font-family: 'Dista Calista';
		color: hsl(251, 100%, 21%);
		font-size: 1.5em;
		text-align: right;
		margin: 0;
		padding: 0;
	}

	.site-title-word-right {
		font-family: 'IBM Plex Mono';
		color: hsl(251, 100%, 21%);
		font-size: 1.2em;
		font-weight: 100;
		text-align: left;
		letter-spacing: 0px;
		margin: 0;
		padding: 0;
	}

	.site-name {
	}

	.site-title2-text-right {
		font-family: 'Great Vibes', 'Pacifico';
		font-size: 1.8em;
		text-align: right;
		/* border-left: 2px solid hsl(251, 100%, 21%);
		height: 100%;
		color: hsla(251, 100%, 21%, 0.5);*/
		margin: 0;
	}
	.site-sub-title {
		height: 45px;
		width: 100%;
		display: flex;
		align-items: center;

		/* flex-direction: row; */
	}
	.site-sub-title-left {
		width: 80%;
		text-align: left;
		vertical-align: middle;
	}
	.sub-title-text-left {
		/* font-family: 'DM Sans'; */
		font-family: 'Cherry Swash';
		font-size: 1.3em;
		/* font-style: oblique; */
		/* font-weight: lighter; */
		/* color: rgb(34, 50, 50); */
		color: hsla(251, 100%, 21%, 0.5);
		text-align: left;
		vertical-align: middle;
		margin: auto;
		padding: 0;
	}

	.site-sub-title-right {
		/* width: 20%; */
		display: inline;
		/* text-align: right; */
		border-left: 2px hsl(251, 100%, 21%);
		/* transform: rotate(-30deg); */
		margin: 0;
		padding: 0px;
	}
	.sub-title-text-right {
		font-family: 'Great Vibes', 'Pacifico';
		font-size: 1.8em;
		font-weight: bold;
		color: hsl(251, 100%, 21%);
		/* color: hsl(--heading-color); */
		/* font-weight: 100; */
		text-align: right;
		/* text-shadow: 0px 0px 4px rgb(227, 227, 227); */

		margin: 0 5px 0px 0;
		padding: 0;
	}
</style>
