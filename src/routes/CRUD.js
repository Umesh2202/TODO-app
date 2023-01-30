import axios from 'axios';

const get_data = async () => {
	let data = await axios.get('https://node-todo.up.railway.app/read');
	return data.data;
};

const write_data = async (/** @type {string} */ value) => {
	await axios.post('https://node-todo.up.railway.app/write', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			data: value
		})
	});
};

const delete_data = async (/** @type {any} */ todoid) => {
	await axios.delete(`https://node-todo.up.railway.app/delete/${todoid}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	});
};

export { get_data, delete_data, write_data };
