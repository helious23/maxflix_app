import React from "react";
import { ScrollView } from "react-native";
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

export default HorizontalSlider;
