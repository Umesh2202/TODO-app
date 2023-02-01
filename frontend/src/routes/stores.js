import { writable } from 'svelte/store';
import { get_data } from './CRUD';

export const tasks = writable([]);

const fetchTasks = async () => {
	const data = await get_data();
	tasks.set(data);
};

fetchTasks();
