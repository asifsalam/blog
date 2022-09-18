<script>
	import { page } from '$app/stores';
	console.log('id-layout: ', $page.url.pathname);
</script>

<main>
	<p>This is the id layout</p>
	<slot />
</main>

<style>
</style>
