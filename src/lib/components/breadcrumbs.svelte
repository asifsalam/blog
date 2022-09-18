<script>
	import { page } from '$app/stores';
	import { capitalizeFirstLetter } from '$lib/modules/utility_functions.js';
	$: currentPage = $page.url.pathname;
	// $: console.log('breadcrumbs: ', $page.url.pathname);

	$: crumbsList = () => {
		const tokens = $page.url.pathname.split('/').filter((t) => t !== '');
		let tokenPath = '';
		// Create { label, href } pairs for each token.
		let x = tokens.map((t) => {
			tokenPath += '/' + t;
			return {
				label: t,
				href: tokenPath,
				labelCap: capitalizeFirstLetter(t)
			};
		});
		x.unshift({ labelCap: 'Home', href: '/' });

		return x;
	};
	$: crumbs = crumbsList();
</script>

<ul class="breadcrumbs">
	{#each crumbs as c, i}
		{#if i == crumbs.length - 1}
			<li class="breadcrumbs-item">{c.labelCap}</li>
		{:else}
			<li class="breadcrumbs-item-active">
				<a href={c.href}> {c.labelCap}</a>&nbsp;&nbsp;&gt;
			</li>
		{/if}
	{/each}
</ul>

<style>
	.breadcrumbs {
		padding: 0;
		margin: 0 0 10px 0;
		/* background-color: hsla(0, 26%, 54%, 0.7); */
		/* background-color: hsla(0, 90%, 25%, 1); */
		background-color: hsla(23, 8%, 50%, 1);
		font-family: Roboto, Verdana, Geneva, Tahoma, sans-serif;
		font-size: 1.1rem;
		position: sticky;
		top: 0;
		z-index: 250;
		/* color: hsl(54, 100%, 72%); */
	}
	.breadcrumbs-item {
		display: inline-block;
		/* padding: 5px 0px; */
		color: rgb(193, 255, 154);
		/* color: rgba(239, 236, 253, 0.9); */
	}
	/* a {
		color: hsl(308, 91%, 87%);
	} */
	.breadcrumbs-item-active {
		display: inline-block;
		/* padding: 5px 0px; */
		/* color: hsl(240, 100%, 100%); */
		color: rgb(255 208 0);
	}
	.breadcrumbs-item-active a {
		/* color: hsl(240, 100%, 100%); */
		/* color: hsl(251, 100%, 95%, 1); */
		color: rgb(255 208 0);
	}
	li {
		list-style: none;
		margin: 5px 5px;
		padding: 0;
	}
	ul {
		margin: 0;
		padding: 0;
	}
</style>
