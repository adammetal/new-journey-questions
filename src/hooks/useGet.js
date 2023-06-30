import { useEffect, useState } from "react";

function useGet(url, selector) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isValid = true;

    setLoading(true);

    fetch(url)
      .then((r) => r.json())
      .then((r) => {

        // state guard
        if (!isValid) {
          return;
        }

        setLoading(false);
        setError(null);
        setData(r);
      })
      .catch((err) => {
        setLoading(false);
        setData(null);
        setError(err);
      });

    return () => {
      isValid = false;
    }
  }, [url]);

  return {
    data: !loading ? selector(data) : data,
    loading,
    error
  };
}

export default useGet;
