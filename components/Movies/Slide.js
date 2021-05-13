import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { apiImage } from "../../api";
import Poster from "../Poster";
import { TouchableOpacity } from "react-native";
import Votes from "../Votes";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
`;

const VotesContainer = styled.Text`
  margin-bottom: 5px;
`;

const Overview = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 13px;
  font-weight: 500;
`;

const Button = styled.View`
  margin-top: 5px;
  background-color: #e74c3c;
  padding: 5px 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => (
  <Container>
    <BG resizeMode="cover" source={{ uri: apiImage(backgroundImage) }} />
    <Content>
      <Poster url={apiImage(poster)} />
      <Data>
        <Title>{title.length > 30 ? `${title.slice(0, 30)} ...` : title}</Title>
        <VotesContainer>
          <Votes votes={votes} />
        </VotesContainer>
        <Overview>
          {overview.length > 100 ? `${overview.slice(0, 100)}...` : overview}
        </Overview>
        <TouchableOpacity>
          <Button>
            <ButtonText>View Details</ButtonText>
          </Button>
        </TouchableOpacity>
      </Data>
    </Content>
  </Container>
);

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

export default Slide;
