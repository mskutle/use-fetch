import React, { useState, useEffect } from "react";

function useFetch(url, options, dependencies) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, options)
      .then(response => response.json())
      .then(d => {
        setLoading(false);
        setData(d);
        if (error) {
          setError(null);
        }
      })
      .catch(err => {
        setLoading(false);
        setData(null);
        setError(err);
      });
  }, dependencies);

  return {
    loading,
    data,
    error
  };
}

export default useFetch;
