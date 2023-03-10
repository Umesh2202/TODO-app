import axios from 'axios';

const get_data = async () => {
	let data = await axios.get('http://localhost:5173/api/todo');
	return data.data;
};

const write_data = async (/** @type {string} */ value) => {
	await axios.post('http://localhost:5173/api/todo', {
		data: value
	});
};

const delete_data = async (/** @type {any} */ todoid) => {
	await axios.delete(`http://localhost:5173/api/todo?id=${todoid}`);
};

export { get_data, delete_data, write_data };
