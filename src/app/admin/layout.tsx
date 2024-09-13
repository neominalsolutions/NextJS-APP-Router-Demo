import Link from 'next/link';

export default function AdminLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<h1>Admin Layout</h1>

			{children}
		</section>
	);
}
