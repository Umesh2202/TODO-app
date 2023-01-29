<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { get_data, delete_data } from '../CRUD.js';
	import { tasks } from '../stores.js';

	export let task;
	let displayTasks;
	let completed = task['completed'];
	let delete_flag = false;

	const toggleCompleted = () => {
		completed = !completed;
		for (let i = 0; i < displayTasks.length; i++) {
			if (displayTasks[i].id === task['id']) {
				task['completed'] = !task['completed'];
				break;
			}
		}
		tasks.set(displayTasks);
	};

	const deletetodo = () => {
		const item = document.getElementsByClassName('item');
		delete_flag = true;
		delete_data(task['id']);
		displayTasks = displayTasks.filter((el) => el.id !== task['id']);
		tasks.set(displayTasks);
	};

	onMount(async () => {
		displayTasks = await get_data();
	});
</script>

<div class="item">
	<p class={`${completed ? 'done' : 'undefined'}`} in:fly={{ x: 500, duration: 500 }}>
		{task['task']}
	</p>
	<div class="toggle">
		{#if !completed}
			<button on:click={toggleCompleted}>❌</button>
		{:else}
			<button on:click={toggleCompleted}>✅</button>
		{/if}
		<button on:click={deletetodo}>🗑️</button>
	</div>
</div>

<style>
	.item {
		display: flex;
		justify-content: space-between;
	}

	p {
		font-size: clamp(1.5rem, 2vw, 2rem);
		padding-bottom: 1em;
		color: #ff4040;
		max-width: 79%;
	}

	.done {
		color: #0c7c01;
		text-decoration: line-through;
		text-decoration-thickness: 10px;
	}

	button {
		background-color: #f1f0f0;
		border: 2px solid #000000;
		width: 2em;
		aspect-ratio: 1;
		font-size: clamp(1rem, 2vw, 1.5rem);
		cursor: pointer;
	}
</style>
