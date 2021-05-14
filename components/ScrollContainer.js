import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native";
import { useState } from "react";

const ScrollContainer = ({
  refreshFn,
  loading,
  children,
  contentContainerStyle,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          tintColor={"white"}
        />
      }
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flex: loading ? 1 : null,
        justifyContent: loading ? "center" : "flex-start",
        ...contentContainerStyle,
      }}
    >
      {loading ? <ActivityIndicator size="small" color="white" /> : children}
    </ScrollView>
  );
};

ScrollContainer.propTyles = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  contentContainerStyle: PropTypes.object,
  refreshFn: PropTypes.func,
};

export default ScrollContainer;
