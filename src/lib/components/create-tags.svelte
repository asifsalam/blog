<script>
	export let tags;
	export let tagType = 'topic';
	export let tagClicked = () => {};
	export let headingText = 'Main themes';
	// console.log('create-tags: ', tags, tagType);
</script>

<p class="tags-header">{headingText}</p>
{#each // @ts-ignore
tags as tag}
	{#if tagType == 'category'}
		{#if tag != 'NA'}
			<button
				class="topic topic-box"
				on:click={() => {
					tagClicked(tag.category);
				}}>{tag.category}</button
			>
		{:else}
			<p class="topic topic-box" on:click={tagClicked('untagged')}>untagged</p>
		{/if}
	{:else if tagType == 'theme'}
		{#if tag != 'NA'}
			<button
				class="topic topic-box"
				on:click={() => {
					tagClicked(tag);
				}}>{tag}</button
			>
		{:else}
			<p class="topic topic-box" on:click={tagClicked('untagged')}>untagged</p>
		{/if}
	{:else if tagType == 'topic'}
		{#if tag != 'NA'}
			<button
				class="topic topic-box"
				on:click={() => {
					tagClicked(tag);
				}}>{tag}</button
			>
		{:else}
			<p class="topic topic-box" on:click={tagClicked('untagged')}>untagged</p>
		{/if}
	{/if}
{/each}

<style>
	.tags-header {
		padding: 10px 0 0 0;
		margin: 0;
		font-family: 'Pridi', Georgia, 'Times New Roman', Times, serif;
		font-size: 1.4rem;
		font-weight: 300;
		color: hsla(251, 100%, 20%, 0.9);
	}
	.topic-box {
		display: inline-block;
		padding: 2px 5px;
		margin: 3px 10px 3px 0;
		/* background-color: #eafaff; */
		background-color: hsla(196, 67%, 54%, 0.07);
		font-family: Roboto, Arial, Helvetica, sans-serif;
		font-weight: normal;
		/* font-size: 16em; */
		font-size: 16px;
		color: hsl(251, 100%, 15%);
		border-radius: 4px;
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
</style>
