import UserList from './UserList';
import classes from './layout.module.css';

async function UsersLayout({ children }) {
    const res = await fetch('https://24pullrequests.com/users.json');
    const users = await res.json();

  return (
    <div className={classes.layout}>
      <aside className={classes.sidebar}>
        <UserList users={users} />
      </aside>
      {children}
    </div>
  );
}

export default UsersLayout;
