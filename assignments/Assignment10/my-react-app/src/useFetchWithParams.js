import React, { useState, useEffect } from 'react';

function useFetchWithParams(url, params) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams(params);
        const response = await fetch(`${url}?${queryParams}`);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, params]); // Re-run on URL or params change

  return { data, loading, error };
}

export default useFetchWithParams;
