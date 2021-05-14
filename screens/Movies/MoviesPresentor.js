import React from "react";
import styled from "styled-components/native";
import Slide from "../../components/Slide";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Slider from "../../components/Slider";
import List from "../../components/List";

const Container = styled.View``;

export default ({ refreshFn, loading, nowPlaying, popular, upcoming }) => (
  <ScrollContainer refreshFn={refreshFn} loading={loading}>
    <>
      <Slider>
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
      </Slider>
      <Container>
        <HorizontalSlider title={"Popular Movies"}>
          {popular.map((movie) => (
            <Vertical
              id={movie.id}
              key={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
        <List title={"Comming Soon"}>
          {upcoming.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              poster={movie.poster_path}
              overview={movie.overview}
            />
          ))}
        </List>
      </Container>
    </>
  </ScrollContainer>
);
