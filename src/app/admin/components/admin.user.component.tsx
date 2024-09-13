'use client';

import Link from 'next/link';
import { User } from '../models/user.mode';

type Props = {
	users: User[];
};

function AdminUserList({ users }: Props) {
	return (
		<>
			{users.map((item: User) => {
				return (
					<div key={item.id}>
						<Link href={`/admin/users/${item.name}`}>{item.name}</Link>
					</div>
				);
			})}
		</>
	);
}

export default AdminUserList;
