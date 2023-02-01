<script>
	import TodoItem from './TodoItem.svelte';
	import { tasks } from '../stores.js';
	import { get_data, write_data } from '../CRUD';
	import { onMount } from 'svelte';

	let value = '';
	/**
	 * @type {Response | { id: any; task: string; completed: boolean; }[]}
	 */
	let displayTasks;
	// tasks.subscribe((data) => {
	// 	displayTasks = data;
	// });

	const addTasktoList = () => {
		/**
		 * @type {any}
		 */
		// @ts-ignore
		const id = displayTasks.length;

		// @ts-ignore
		displayTasks.push({ id: id, task: value, completed: false });
		// @ts-ignore
		tasks.set(displayTasks);
		value = '';
	};

	onMount(() => {
		tasks.subscribe((data) => {
			displayTasks = data;
		});
	});
</script>

<div class="todo">
	<h1>Tasks</h1>
	{#each $tasks as task}
		<TodoItem {task} />
	{/each}
	<input type="text" bind:value />
	{#if value !== ''}
		<button
			on:click={() => {
				write_data(value);
				addTasktoList();
			}}>Add task</button
		>
	{:else}
		<button>Add task</button>
	{/if}
</div>

<style>
	h1 {
		margin-bottom: 1em;
		font-size: 3rem;
		color: #0084ff;
		text-shadow: 0.1em 0.1em #ffc400;
	}

	.todo {
		background: linear-gradient(#ffffff, #f0f0f0);
		border-radius: 10px;
		width: clamp(calc(10em + 15vw), 50vw, 30em);
		padding: 2em;
		box-shadow: 1em 1em #8f8f8f;
		margin-bottom: 3em;
	}

	input {
		border: 2px solid #e9e9e9;
		width: calc(60% + 5vw);
		height: 1em;
		font-size: 1.5rem;
		padding: 1em;
		border-radius: 10px;
		margin-top: 1em;
		display: block;
	}

	button {
		width: 5em;
		padding: 0.5em;
		border-radius: 5px;
		background-color: #0084ff;
		color: #ffffff;
		border: none;
		font-size: 1rem;
		margin-top: 1em;
		box-shadow: 0.3em 0.3em #8f8f8f;
		transition: all 0.3s;
	}

	button:hover {
		transform: translateX(0.3em) translateY(0.3em);
		box-shadow: none;
	}
</style>
