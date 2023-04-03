<script>
	import '/src/styles/global.css';
	// import '$lib/styles/global.css';
	//console.log($lib);
	let backgroundImage = '/static/img/geometric-pattern-14.jpg';
</script>

<div class="title-border">
	<!-- <img src="img/border-01.jpg" height="30" alt="" /> -->
</div>
<div class="site-sub-title">
	<div class="site-sub-title-left">
		<p class="sub-title-text-left">Data - the promise, the perils, the beauty and the drudgery</p>
	</div>
	<div class="site-sub-title-right">
		<p class="sub-title-text-right">Asif Salam</p>
	</div>
</div>

<div class="site-title-wrap">
	<div class="site-title">
		<p class="site-title-text-left">
			the digital &nbsp
			<span class="site-title-word-left">peregrinations</span>
			&nbsp of a &nbsp
			<span class="site-title-word-right">data scribe</span>
		</p>
		<!-- <p class="my-quote">The data-driven life is not worth examining</p> -->
	</div>
</div>

<style>
	.title-border {
		width: 100%;
		height: 48px;
		background-image: url('/static/img/islamic-geometric-pattern-14.jpg');
		background-size: 48px;
		background-repeat: repeat-x;
	}
	.site-title-wrap {
		padding: 0px 0 5px 0;
		background: linear-gradient(
			90deg,
			rgba(34, 193, 195, 1) 0%,
			rgba(71, 192, 136, 1) 17%,
			rgba(104, 120, 191, 1) 32%,
			rgba(155, 147, 137, 1) 49%,
			rgba(184, 110, 110, 1) 64%,
			rgba(217, 183, 79, 1) 81%,
			rgba(69, 45, 253, 1) 100%
		);
		height: 100px;
		justify-content: center;
		vertical-align: middle;
	}

	.site-sub-title {
		height: 40px;
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
		font-family: 'DM Sans';
		font-size: 1.2em;
		font-style: oblique;
		color: rgb(34, 50, 50);
		text-align: left;
		vertical-align: middle;
		margin: 0px 0 0 5px;
		padding: 0;
	}

	.site-sub-title-right {
		width: 20%;
		text-align: right;
		border-left: 2px hsl(251, 100%, 21%);
	}
	.sub-title-text-right {
		font-family: 'Pacifico';
		font-size: 2em;
		color: hsl(251, 100%, 21%);
		/* font-weight: 100; */
		text-align: right;
		/* text-shadow: 0px 0px 4px rgb(227, 227, 227); */

		margin: 0 5px 0px 0;
		padding: 0;
	}

	.site-title {
		height: 105px;
		width: 100%;
		display: grid;
		background-color: beige;
		/* display: block; */
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		/* vertical-align: middle; */
		/* height: 100%; */
	}

	.site-title-text-left {
		height: 100%;
		/* font-family: 'blog-title-1'; */
		font-family: 'Roboto Slab';
		color: grey;
		font-size: 2em;
		text-align: left;
		letter-spacing: px;
		margin: 0 0 0 5px;
		padding: 0;
		vertical-align: top;
	}

	.site-title-word-left {
		height: 100%;
		/* font-family: 'blog-title-1'; */
		font-family: 'Dista Calista';
		color: hsl(251, 100%, 21%);
		font-size: 2em;
		text-align: left;
		margin: 0;
		padding: 0;
	}

	.site-title-word-right {
		font-family: 'Bukhari';
		/* color: rgb(19, 0, 106); */
		color: hsl(251, 100%, 21%);
		font-size: 1.7em;
		text-align: left;
		letter-spacing: 0px;
		margin: 0;
		padding: 0;
	}
</style>
