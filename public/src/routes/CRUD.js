const get_data = async () => {
	let data = await fetch('http://localhost:5000/read');
	data = await data.json();
	return data;
};

const write_data = async (/** @type {string} */ value) => {
	await fetch('http://localhost:5000/write', {
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
	await fetch(`http://localhost:5000/delete/${todoid}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	});
};

export { get_data, delete_data, write_data };
