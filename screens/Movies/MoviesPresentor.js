import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView, View } from "react-native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SlideContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

export default ({ loading, nowPlaying }) => (
  <ScrollView
    style={{
      backgroundColor: "black",
    }}
    contentContainerStyle={{
      flex: 1,
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
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
        <Container>
          <Title title={"Popular Movies"} />
        </Container>
      </>
    )}
  </ScrollView>
);
