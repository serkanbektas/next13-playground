import IssuesList from './IssueList';
import classes from './layout.module.css';

async function IssuesLayout({ children }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const issues = await res.json();

  return (
    <div className={classes.layout}>
      <aside className={classes.sidebar}>
        <IssuesList issues={issues} />
      </aside>
      {children}
    </div>
  );
}

export default IssuesLayout;
