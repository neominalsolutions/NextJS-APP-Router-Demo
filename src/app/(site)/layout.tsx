import Link from 'next/link';

export default function SiteLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			{/* Include shared UI here e.g. a header or sidebar */}
			<nav>
				<Link href={'/about'}>Hakkımızda</Link> <Link href={'/'}>Anasayfa</Link>
			</nav>

			{children}
		</section>
	);
}
