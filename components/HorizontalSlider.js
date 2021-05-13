import React from "react";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";
import Title from "./Title";

const HorizontalSlider = ({ title, children }) => (
  <>
    <Title title={title} />
    <ScrollView
      style={{ marginTop: 20, marginBottom: 40 }}
      contentContainerStyle={{ paddingLeft: 20 }}
      horizontal
      scrollEnabled
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  </>
);

HorizontalSlider.propTyles = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalSlider;
