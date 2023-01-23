<script>
	import Todos from './todo/Todos.svelte';
</script>

<body>
	<h1>TODO List</h1>
	<Todos />
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap');

	:global(*) {
		margin: 0;
		padding: 0;
		font-family: 'Rowdies', cursive;
	}

	body {
		min-height: 100vh;
		background-color: #ffc400;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	h1 {
		font-weight: 100;
		font-size: clamp(4rem, 3vw, 6rem);
		text-align: center;
	}
</style>
