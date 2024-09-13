'use server';

import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
	// api login işlemi
	const reqBody = await request.json();
	console.log('username', reqBody);

	// axios post ile veriyi gönder.

	return NextResponse.json({ message: 'Kayıt başarılı' }, { status: 201 });
};
