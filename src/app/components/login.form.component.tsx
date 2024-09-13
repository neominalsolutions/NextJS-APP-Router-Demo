'use client';

import { useFormState } from 'react-dom';
import { login } from '../actions/login.action';

function LoginForm() {
	const [formState, action] = useFormState(login, { message: '' });

	return (
		<>
			<form action={action}>
				<input name="username" />
				<input type="submit" />
			</form>

			<p>{formState.message}</p>
		</>
	);
}

export default LoginForm;
