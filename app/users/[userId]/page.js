import UserDetails from './UserDetails';

async function UserDetailsPage({ params }) {

  const res = await fetch(`https://24pullrequests.com/users/${params.userId}.json`);
  const user = await res.json();

  if (!user) {
    throw new Error('User not found!')
  }

  return <UserDetails user={user} />;
}

export default UserDetailsPage;
