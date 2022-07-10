import React, { useEffect, useState } from "react";

const initialState = {
  data: null,
  loading: true,
};
const useFetch = (urlNumber) => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    setState({ data: null, loading: true });
    fetch(`http://numbersapi.com/${urlNumber}`)
      .then((res) => res.text())
      .then((data) => {
        setState({ data: data, loading: false });
      });
  }, [urlNumber]);

  return state;
};

export default useFetch;
