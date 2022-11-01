import TodoList from './TodoList';
import classes from './layout.module.css';

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return res.json();
}

async function TodosLayout({ children }) {
    const todos = await getData();

  return (
    <div className={classes.layout}>
      <aside className={classes.sidebar}>
        <TodoList todos={todos} />
      </aside>
      {children}
    </div>
  );
}

export default TodosLayout;
