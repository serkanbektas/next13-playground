import classes from './TodoDetails.module.css';

function TodoDetails({ todo }) {
  return (
    <article className={classes.details}>
      <header>
        <h1>{todo.title}</h1>
      </header>
    </article>
  );
}

export default TodoDetails;
