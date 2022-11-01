import Link from 'next/link';

function TodosList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <article>
            <h2>{todo.title}</h2>
            <p>
              <Link href={`/todos/${todo.id}`}>View Details</Link>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default TodosList;
