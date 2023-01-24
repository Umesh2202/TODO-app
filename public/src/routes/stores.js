import { writable } from 'svelte/store';

export const tasks = writable([]);

const fetchTasks = async () => {
	const data = await fetch('http://localhost:5000/read');
	const res = await data.json();
	tasks.set(res);
};

fetchTasks();
