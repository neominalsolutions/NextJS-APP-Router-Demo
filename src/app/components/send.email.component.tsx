'use client';

import axios from 'axios';

function SendEmail() {
	const sendToApi = async () => {
		const response = (
			await axios.post('/api/sendEmail', { message: 'From Api' })
		).data;

		window.alert(response.message);
	};

	return (
		<>
			<button onClick={sendToApi}>Send Email</button>
		</>
	);
}

export default SendEmail;
