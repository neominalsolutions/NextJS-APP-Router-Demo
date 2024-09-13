'use client';

import { User } from '../models/user.mode';

type Props = {
	users: User[];
};

function AdminUserList({ users }: Props) {
	return (
		<>
			{users.map((item: User) => {
				return <div key={item.id}>{item.name}</div>;
			})}
		</>
	);
}

export default AdminUserList;
