import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import { movieApi, tvApi } from "../../api";
import DetailPresentor from "./DetailPresentor";

export default ({
  navigation,
  route: {
    params: { isTv, id, title, backgroundImage, poster, votes, overview },
  },
}) => {
  const [detail, setDetail] = useState({
    loading: true,
    result: {
      title,
      backgroundImage,
      poster,
      overview,
      votes,
      videos: {
        results: [],
      },
    },
  });
  const getData = async () => {
    const [getDetail, getDetailError] = isTv
      ? await tvApi.show(id)
      : await movieApi.movie(id);

    setDetail({
      loading: false,
      result: {
        ...getDetail,
        title: getDetail.name || getDetail.title,
        backgroundImage: getDetail.backdrop_path,
        poster: getDetail.poster_path,
        overview: getDetail.overview,
        votes: getDetail.vote_average,
      },
    });
  };
  useEffect(() => {
    getData();
  }, [id]);
  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  const openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };
  return (
    <DetailPresentor
      {...detail}
      openBrowser={openBrowser}
      refreshFn={getData}
    />
  );
};
