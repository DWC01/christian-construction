import axios from 'axios';
import to from 'await-to-js';

const sendContactLeadMail = async ({ name, email, message }) => {
	const data = { name, email, message };

	const [error, response] = await to(
		axios({
			method: 'post',
			url: '/api/contact',
			headers: {
				'Content-Type': 'application/json',
			},
			data,
		}),
	);

	if (error) {
		throw new Error(error);
	}

	return response;
};

export default sendContactLeadMail;
