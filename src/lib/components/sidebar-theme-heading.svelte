<script>
	import '/src/styles/global.css';

	const s1a = 'Filter articles and resources by theme';
	// const s1b = 'Click on a category below to view all the related items.';
	// const s1c = 'Sorted by date, starting with the most recent ones';
</script>

<div class="sidebar-header">
	<!-- <p class="sidebar-header-text">{s1a}&#8212</p> -->
	<p class="sidebar-header-leadin">{s1a}</p>
	<!--<p class="sidebar-text">{s1c}</p> -->
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
		border-bottom: 2px solid hsla(23, 8%, 50%, 0.5);
	}
	.sidebar-header-leadin {
		display: inline;
		padding: 0;
		margin: 0 0 15px 0;
		/* font-family: 'Crete Round'; */
		font-family: 'Scope One';
		font-size: 1.1em;
		font-weight: 100;
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
		font-family: 'Scope One';
		font-size: 1em;
		margin-left: 0;
		margin-top: 0px;
		margin-bottom: 0px;
		padding-left: 1.2em;
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
