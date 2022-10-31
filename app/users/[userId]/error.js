'use client';

function UserErrorPage({error}) {
  return <p>{error.message}</p>
}

export default UserErrorPage;