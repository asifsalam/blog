<script>
	import KeyCategories from '$lib/components/key-themes.svelte';
	import SidebarHeadingHome from '$lib/components/sidebar-heading-home.svelte';
	import '/src/styles/global.css';
	export let themes;
	// const categories = allCategories.map((d) => d.category);
	// const s1a = 'Mostly about data';
	// const s2a = 'And how to use it effectively.';
	// const s2b = 'And the challenges.';
	// const s1b = 'and making companies "data-driven," whatever that means.';
	// const s1c = 'Mostly for practitioners';
	// const s1d = 'Mostly links';
	// const s2c =
	// 	'-And those share an appreciation for a  turn of phrase, an appreciation for  for the details, and an allergy to the superficial broad strokes.';
	// const s2a = 'The promise, the perils, the beauty & the drudgery.';
	// const s2d = ;
	// const s2c =
	// 'And those who find magic in words used well, appreciate an insightful turn of phrase and the long explanation, full of detail and nuance.';
	// const s2e = 'For practiioners.';
	// const s2d = 'But also leaders and managers.';
	// const s2e =
	// 'Actually, anyone engaged in the often ill-defined task of making organizations "data-driven."';
	// const s2g = 'To the &#8212;usually excellent and always instructive&#8212;work of others.';
	// const s1e = 'And some original posts. ';
	// console.log('sidebar: ', themes);
	themes = themes.map((d) => d.category);
</script>

<div class="sidebar">
	<!-- <div class="sidebar-header">
		<p class="sidebar-header-leadin">Greetings! I am Asif, and this space is:</p>
		<p class="sidebar-header-text">{s1a}&#8212</p>
		<p class="sidebar-text">{s2a}</p>
		<p class="sidebar-text">{s2b}</p>
		<p class="sidebar-header-text">{s1c}&#8212</p>
		<p class="sidebar-text">{s2c}</p>
		<p class="sidebar-text" style="font-weight:bold">{s2d}</p>
		<p class="sidebar-text">{s2e}</p>
		<p class="sidebar-header-text">{s1d}&#8212</p>
		<p class="sidebar-text">{@html s2g}</p>
		<p class="sidebar-header-text">{s1e}</p>
	</div> -->
	<SidebarHeadingHome />
	<KeyCategories headingText={'Main themes'} categories={themes} />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Sanchez&family=Pridi:wght@200;300;400&display=swap');
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
	.sidebar-header-leadin {
		display: inline;
		padding: 0;
		margin: 0 0 15px 0;
		font-family: 'Crete Round';
		font-size: 1.1em;
		font-weight: 200;
		color: hsla(251, 100%, 15%, 1);
		text-align: left;
	}
	.sidebar-header-text {
		display: block;
		padding: 0;
		margin: 5px 0 5px 0;
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
