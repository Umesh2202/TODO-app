import { writable } from 'svelte/store';
import axios from 'axios';

export const tasks = writable([]);

const fetchTasks = async () => {
	const data = await axios.get('https://node-todo.up.railway.app/read');
	tasks.set(data.data);
};

fetchTasks();
