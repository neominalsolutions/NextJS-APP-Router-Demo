import { useRouter } from 'next/router';

function UserDetail({
	params,
}: {
	params: { slug: string; pathname: string };
}) {
	console.log('params', params.slug);

	return <>Kullanıcı Adı: {params.slug}</>;
}

export default UserDetail;
