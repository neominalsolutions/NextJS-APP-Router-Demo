import AdminUserList from '../components/admin.user.component';
import { User } from '../models/user.mode';

async function AdminUsers() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users', {
		next: { revalidate: 60000 },
		// cache:'no-store'
	});

	// revalidate default false

	const data = await response.json();

	console.log('response', response.status);

	return (
		<>
			<p>Admin Users</p>

			<AdminUserList users={data} />
		</>
	);
}

export default AdminUsers;
