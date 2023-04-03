<script>
	import { goto } from '$app/navigation';
	import { clickedTheme } from '$lib/json/stores';
	/** @type {undefined}*/
	export let themes;
	export let headingText = 'Themes';
	// console.log('key-themes-categories: ', themes);
	/** @param {string} theme */
	function themeClicked(theme) {
		// @ts-ignore
		$clickedTheme = theme;
		goto('/theme');
		console.log('theme-clicked: ', $clickedTheme);
	}
</script>

<div class="sidebar-themes">
	<p class="themes-header">{headingText}</p>
	<p class="topics">
		{#each // @ts-ignore
		themes as theme}
			{#if theme != 'NA'}
				<button
					class="topic topic-box"
					on:click={() => {
						themeClicked(theme);
					}}>{theme}</button
				>
			{:else}
				<p class="topic topic-box" on:click={themeClicked('untagged')}>untagged</p>
			{/if}
		{/each}
	</p>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Sanchez&family=Pridi&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Scope+One&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	.sidebar-themes {
		margin: 0;
		padding: 0;
	}

	.themes-header {
		padding: 10px 0 0 0;
		margin: 0;
		font-family: 'Pridi', Georgia, 'Times New Roman', Times, serif;
		font-size: 1.4em;
		font-weight: 300;
		color: hsla(251, 100%, 20%, 0.9);
	}

	.topics {
		display: inline;
		line-height: 1.5;
		margin: 0 0 50px 0px;
		font-size: 1rem;
		font-weight: bold;
	}

	.topic-box {
		display: inline-block;
		padding: 2px 5px;
		margin: 5px 10px 5px 0;
		background-color: #eafaff;
		font-family: Roboto, Arial, Helvetica, sans-serif;
		font-weight: normal;
		font-size: 1em;
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		border: 1px solid hsla(251, 32%, 44%, 0.2);
	}

	.topic:hover {
		color: hsl(253, 39%, 95%);
		font-weight: bold;
		/* background-color: #bff0ff; */
		background-color: hsl(251, 100%, 15%);
		cursor: pointer;
	}
	button {
	}
</style>
