import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getFocusedRouteNameFromRoute(route) ?? "Movies",
    });
  }, [route]);
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Favourites" component={Favs} />
    </Tabs.Navigator>
  );
};
