import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import Title from "./Title";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Slider = ({ title, children }) => (
  <Container>
    {title && <Title title={title} />}
    <Swiper controlsEnabled={false} loop timeout={3} height>
      {children}
    </Swiper>
  </Container>
);

Slider.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Slider;
