<script>
	import KeyCategories from '$lib/components/key-categories-2.svelte';
	import '/src/styles/global.css';

	export let themes;

	const s1a = 'Links to';

	// const s2a = 'And the things that make organizations and individuals good at using it.';
	const s2a = 'My posts';
	const s2b = 'Too few. Reading is more enjoyable than writing &#128532;.';
	const s2c = 'Starting with the most recent ones';
	console.log('sidebar-blog:');
</script>

<div class="sidebar">
	<div class="sidebar-header">
		<!-- <p class="sidebar-header-leadin">Greetings! This space is:</p> -->
		<p class="sidebar-header-text">{s1a}&#8212</p>
		<p class="sidebar-text">{s2a}</p>
		<p class="sidebar-text">{@html s2b}</p>
		<!-- <p class="sidebar-text">{s2c}</p> -->
	</div>
	<KeyCategories categories={themes} />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Sanchez&family=Pridi&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Scope+One&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	.sidebar {
		float: left;
		margin: 10px 30px 00px 0px;
		flex-flow: column;
	}

	.sidebar-header {
		display: block;
		/* float: left; */
		height: auto;
		width: 100%;
		background-color: rgb(255, 254, 243);
		padding: 0 0 10px 0;
		margin: 0;
		border-bottom: 2px solid hsl(23, 8%, 50%);
	}

	.sidebar-header-text {
		display: block;
		padding: 0;
		margin: 0px 0 5px 0;
		/* font-family: 'Roboto Slab'; */
		font-family: 'Crete Round';
		font-size: 1.4em;
		font-weight: 100;
		color: hsla(251, 100%, 15%, 1);
		text-align: left;
	}

	.sidebar-text {
		/* padding: 0 0 0 10px; */
		/* margin: 0; */
		position: relative;
		list-style: none;
		margin-left: 0;
		margin-top: 5px;
		margin-bottom: 2px;
		padding-left: 1.2em;
	}
	.sidebar-text:before {
		/* content: '□'; */
		/* left: 0; */
		/* position: relative; */
		/* float: left; */
		/* width: 1em; */
		/* list-style: inside; */
		content: '□';
		position: absolute;
		left: 0;
	}
</style>
