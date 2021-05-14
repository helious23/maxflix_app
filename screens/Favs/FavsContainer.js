import React from "react";
import { useEffect, useState } from "react";
import { movieApi } from "../../api";
import FavsPresentor from "./FavsPresentor";

export default () => {
  const [movies, setMovies] = useState({
    results: [],
    error: null,
  });
  const getData = async () => {
    const [results, error] = await movieApi.discover();
    setMovies({
      results,
      error,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <FavsPresentor {...movies} />;
};
