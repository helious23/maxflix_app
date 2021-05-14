import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native";

const ScrollContainer = ({ loading, children }) => (
  <ScrollView
    refreshControl={<RefreshControl tintColor={"white"} />}
    style={{ backgroundColor: "black" }}
    contentContainerStyle={{
      flex: loading ? 1 : "auto",
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? <ActivityIndicator size="small" color="white" /> : children}
  </ScrollView>
);

ScrollContainer.propTyles = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScrollContainer;
