import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { tvApi } from "../api";

export default () => {
  const [shows, setShows] = useState({
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
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Text style={{ color: "white" }}>{shows.today?.length}</Text>
    </View>
  );
};
