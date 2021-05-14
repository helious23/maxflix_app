import React from "react";
import styled from "styled-components/native";
import Vertical from "../../components/Vertical";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScrollContainer from "../../components/ScrollContainer";
import List from "../../components/List";
import Horizontal from "../../components/Horizontal";
import Slider from "../../components/Slider";
import Slide from "../../components/Slide";

const Container = styled.View``;

export default ({ refreshFn, loading, popular, topRated, today, thisWeek }) => (
  <ScrollContainer refreshFn={refreshFn} loading={loading}>
    <>
      <Container>
        <Slider>
          {thisWeek.map((show) => (
            <Slide
              key={show.id}
              id={show.id}
              title={show.name}
              overview={show.overview}
              votes={show.vote_average}
              backgroundImage={show.backdrop_path}
              poster={show.poster_path}
            />
          ))}
        </Slider>
        <HorizontalSlider title="Popular Shows">
          {popular.map((show) => (
            <Vertical
              id={show.id}
              key={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
        <HorizontalSlider title="Top Rated">
          {topRated.map((show) => (
            <Vertical
              id={show.id}
              key={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
        <List title="Airing Today">
          {today.map((show) => (
            <Horizontal
              key={show.id}
              id={show.id}
              title={show.name}
              poster={show.poster_path}
              overview={show.overview}
            />
          ))}
        </List>
      </Container>
    </>
  </ScrollContainer>
);
