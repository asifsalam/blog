<script>
	/*import KeyCategories from '$lib/components/key-categories-2.svelte';
	export let allCategories;

	const categories = allCategories.map((d) => d.category);

	const s1a = 'Links to resources';
	const s2a = 'Click on a category title to view all the relevant resource links.';
	const s2c = 'Starting with the most recent ones';
	console.log('sidebar-resources');
*/
	import KeyCategories from '$lib/components/remove/key-categories-2.svelte';
	export let allCategories;

	const categories = allCategories.map((d) => d.category);

	const s1a = 'Links to resources';
	const s2a = 'Click on a category title to view all the relevant resource links.';
	const s2c = 'Starting with the most recent ones';
	console.log('sidebar-categories');
</script>

<div class="sidebar">
	<div class="sidebar-header">
		<p class="sidebar-header-text">{s1a}&#8212</p>
		<p class="sidebar-text">{s2a}</p>
	</div>
	<KeyCategories {categories} />
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
		font-family: 'Crete Round';
		font-size: 1.4em;
		font-weight: 100;
		color: hsla(251, 100%, 15%, 1);
		text-align: left;
	}

	.sidebar-text {
		position: relative;
		list-style: none;
		margin-left: 0;
		margin-top: 5px;
		margin-bottom: 2px;
		padding-left: 1.2em;
	}
	.sidebar-text:before {
		content: '□';
		position: absolute;
		left: 0;
	}
</style>
