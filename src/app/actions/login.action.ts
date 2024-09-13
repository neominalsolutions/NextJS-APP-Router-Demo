// Server Side Form işlemleri için kullanabiliriz

'use server';

export type FormState = {
	message: string;
};

export const login = async (formState: FormState, formdata: FormData) => {
	// api login işlemi
	const username = formdata.get('username') as string;
	console.log('username', username);

	// axios post ile veriyi gönder.

	return {
		message: 'OK',
	};
};
