import Link from 'next/link';

function UsersList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <article>
            <h2>{user.nickname}</h2>
            <p>{user.github_profile}</p>
            <p>
              <Link href={`/users/${user.nickname}.json`}>View Details</Link>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
