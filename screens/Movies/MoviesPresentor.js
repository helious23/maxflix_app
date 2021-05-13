import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView, View } from "react-native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SlideContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollView
    style={{ backgroundColor: "black" }}
    contentContainerStyle={{
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
                title={movie.title}
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
          <ScrollView
            style={{ marginTop: 20, marginBottom: 40 }}
            contentContainerStyle={{ paddingLeft: 20 }}
            horizontal
            scrollEnabled
            showsHorizontalScrollIndicator={false}
          >
            {popular.map((movie) => (
              <Vertical
                id={movie.id}
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                votes={movie.vote_average}
              />
            ))}
          </ScrollView>
          <Title title={"Coming Soon"}></Title>
          {upcoming.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              title={movie.title}
              votes={movie.vote_average}
              poster={movie.poster_path}
              overview={movie.overview}
            />
          ))}
        </Container>
      </>
    )}
  </ScrollView>
);
