import React, { useEffect, useState } from "react";
import { tvApi } from "../../api";
import TvPresneter from "./TvPresentor";

export default () => {
  const [shows, setShows] = useState({
    loading: true,
    today: [],
    popular: [],
    thisWeek: [],
    topRated: [],
    todayError: null,
    popularError: null,
    thisWeekError: null,
    topRatedError: null,
  });
  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [popular, popularError] = await tvApi.popular();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    setShows({
      loading: false,
      today,
      popular,
      thisWeek,
      topRated,
      todayError,
      popularError,
      thisWeekError,
      topRatedError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <TvPresneter {...shows} />;
};
