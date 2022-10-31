import classes from './UserDetails.module.css';

function UserDetails({ user }) {
  return (
    <article className={classes.details}>
      <header>
        <h1>{user.nickname}</h1>
        <p>{user.github_profile}</p>
      </header>
      <p>{user.twitter_profile}</p>
    </article>
  );
}

export default UserDetails;
