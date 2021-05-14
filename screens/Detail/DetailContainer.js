import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { movieApi, tvApi } from "../../api";
import DetailPresentor from "./DetailPresentor";

export default ({
  navigation,
  route: {
    params: { isTv, id, title, backgroundImage, poster, votes, overview },
  },
}) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({
    title,
    backgroundImage,
    poster,
    overview,
    votes,
  });
  const getData = async () => {
    if (isTv) {
      const [getMovie, getMovieError] = await tvApi.show(id);
    } else {
      const [getMovie, getMovieError] = await movieApi.movie(id);
    }
    setMovie({
      ...getMovie,
      title: getMovie.title,
      backgroundImage: getMovie.backdrop_path,
      poster: getMovie.poster_path,
      overview: getMovie.overview,
      votes: getMovie.vote_average,
    });
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [id]);
  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });
  return <DetailPresentor movie={movie} loading={loading} />;
};
