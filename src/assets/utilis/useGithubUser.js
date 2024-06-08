import { useEffect, useState } from "react";

export default function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [username]);

  return {
    data,
    loading,
    error,
  };
}
