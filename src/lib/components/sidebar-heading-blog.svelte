<script>
	import '/src/styles/global.css';

	const s1a = 'My posts';
	const s1b = 'Too few. Reading is more enjoyable than writing &#128532;.';
	const s1c = 'Starting with the most recent ones';
</script>

<div class="sidebar-header">
	<!-- <p class="sidebar-header-leadin">Greetings! I am Asif, and this space is:</p> -->
	<p class="sidebar-header-text">{s1a}&#8212</p>
	<p class="sidebar-text">{s1b}</p>
	<p class="sidebar-text">{s1c}</p>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Sanchez&family=Pridi:wght@200;300;400&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Scope+One&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

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
