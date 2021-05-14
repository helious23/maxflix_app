import React from "react";
import { useEffect } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";
import Poster from "../../components/Poster";
import ScrollContainer from "../../components/ScrollContainer";
import Votes from "../../components/Votes";

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const Data = styled.View`
  margin-top: 60px;
  padding: 0px 30px;
`;

const DataName = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 15px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

export default ({ result, loading }) => (
  <ScrollContainer>
    <>
      <Header>
        <BG source={{ uri: apiImage(result.backgroundImage, "-") }} />
        <Container>
          <Poster url={result.poster} />
          <Info>
            <Title>{result.title}</Title>
            {result.votes && <Votes votes={result.votes} />}
          </Info>
        </Container>
      </Header>
      <Data>
        {result.overview && (
          <>
            <DataName>Overview</DataName>
            <DataValue>{result.overview}</DataValue>
          </>
        )}
        {loading && (
          <ActivityIndicator color={"white"} style={{ marginTop: 30 }} />
        )}
      </Data>
    </>
  </ScrollContainer>
);
