import TodoDetails from './TodoDetails';

async function TodoDetailsPage({ params }) {

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);
  const todo = await res.json();

  if (!todo) {
    throw new Error('Todo not found!')
  }

  return <TodoDetails todo={todo} />;
}

export default TodoDetailsPage;
