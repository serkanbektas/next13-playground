import IssueDetails from './IssueDetails';

async function IssueDetailsPage({ params }) {

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.issueId}`);
  const issue = await res.json();

  if (!issue) {
    throw new Error('Issue not found!')
  }

  return <IssueDetails issue={issue} />;
}

export default IssueDetailsPage;
