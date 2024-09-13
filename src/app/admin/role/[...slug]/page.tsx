// /admin/role/admin/manager

function Roles({ params }: { params: { slug: string[] } }) {
	console.log('params', params.slug);

	return <>Kullanıcı Adı: {params.slug}</>;
}

export default Roles;
