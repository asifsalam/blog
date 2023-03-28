<script>
	import { goto } from '$app/navigation';
	import { clickedTopic } from '$lib/json/stores';
	/** @type {undefined}*/
	export let topics;
	export let headingText = 'Main topics';
	// console.log('key-topics-topics: ', topics);
	/** @param {string} topic */
	function topicClicked(topic) {
		// @ts-ignore
		$clickedTopic = topic;
		goto('/resources/topic/');
		console.log('key-topic-clicked: ', $clickedTopic);
	}
</script>

<div class="sidebar-topic">
	<p class="topics-header">{headingText}</p>
	<p class="topics">
		{#each // @ts-ignore
		topics as topic}
			{#if topic != 'NA'}
				<button
					class="topic topic-box"
					on:click={() => {
						topicClicked(topic);
					}}>{topic}</button
				>
			{:else}
				<p class="topic topic-box" on:click={topicClicked('untagged')}>untagged</p>
			{/if}
		{/each}
	</p>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Sanchez&family=Pridi&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Scope+One&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	.sidebar-topic {
		margin: 0;
		padding: 0;
	}

	.topics-header {
		padding: 5px 0;
		margin: 10px 0;
		font-family: 'Pridi', Georgia, 'Times New Roman', Times, serif;
		font-size: 1.4em;
		font-weight: 300;
		color: hsla(251, 100%, 20%, 0.9);
	}

	.topics {
		display: inline;
		line-height: 1.5;
		margin: 0 0 50px 0px;

		font-size: 1.2rem;
		font-weight: bold;
	}

	.topic-box {
		display: inline-block;
		padding: 0px 5px;
		margin: 5px 10px 5px 0;
		background-color: #eafaff;
		font-family: Roboto, Arial, Helvetica, sans-serif;
		font-weight: normal;
		font-size: 1em;
		color: hsl(251, 100%, 15%);
		border-radius: 5px;
		text-decoration: none;
		border: 0.1px solid hsla(251, 32%, 44%, 0.2);
	}

	.topic:hover {
		color: hsl(251, 95%, 33%);
		font-weight: bold;
		background-color: #bff0ff;
		cursor: pointer;
	}
	button {
	}
</style>
