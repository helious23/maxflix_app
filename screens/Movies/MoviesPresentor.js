import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, View } from "react-native";
import Slide from "../../components/Movies/Slide";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;

const SlideContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
`;

export default ({ loading, nowPlaying }) => (
  <Container>
    {loading ? (
      <ActivityIndicator size="small" color="white" /> // loading : true 일 때 모래시계
    ) : (
      <>
        <SlideContainer>
          <Swiper controlsEnabled={false} loop timeout={3} height>
            {nowPlaying.map((movie) => (
              <Slide
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                overview={movie.overview}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
                poster={movie.poster_path}
              />
            ))}
          </Swiper>
        </SlideContainer>
      </>
    )}
  </Container>
);
