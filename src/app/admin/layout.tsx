import Link from 'next/link';

export default function AdminLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<h1>Admin Layout</h1>
			<Link style={{ color: 'blue' }} href="/admin/users">
				Users
			</Link>{' '}
			<span> | </span>
			<Link style={{ color: 'blue' }} href="/admin/role/manager">
				Manager Detail
			</Link>
			<p style={{ padding: 10 }}>{children}</p>
		</section>
	);
}
