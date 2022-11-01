'use client';

function TodoErrorPage({error}) {
  return <p>{error.message}</p>
}

export default TodoErrorPage;