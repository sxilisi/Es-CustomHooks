import useGithubUser from "../utilis/useGithubUser";

export default function GithubUser({ username }) {
  const { data, loading, error } = useGithubUser(username);
  return (
    <div>
      {data && (
        <>
          <img src={data.avatar_url} />
          <div>{data.login}</div>
          <div>{data.name}</div>
        </>
      )}
      {error && <div>{error.message}</div>}
      {loading && <div>loading...</div>}
    </div>
  );
}
