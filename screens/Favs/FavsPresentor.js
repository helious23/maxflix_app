import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { PanResponder, Dimensions, Animated } from "react-native";
import { apiImage } from "../../api";
import { useState } from "react";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;

const style = {
  top: 40,
  height: HEIGHT / 1.5,
  width: "90%",
  position: "absolute",
};

const Poster = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export default ({ results }) => {
  const [topIndex, setTopIndex] = useState(0);
  const nextCard = () => setTopIndex((currentValue) => currentValue + 1);
  const position = new Animated.ValueXY(); // animation 적용 될 obj의 x,y 값을 가지고 있음
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy }); // position의 x, y 값을 dx, dy 로 설정
    },
    onPanResponderRelease: (evt, { dx, dy }) => {
      if (dx >= 250) {
        Animated.spring(position, {
          toValue: {
            x: WIDTH + 100,
            y: dy,
          },
          useNativeDriver: true,
        }).start(nextCard);
      } else if (dx <= -250) {
        Animated.spring(position, {
          toValue: {
            x: -WIDTH - 100,
            y: dy,
          },
          useNativeDriver: true,
        }).start(nextCard); // callback 함수 호출 가능
      } else {
        Animated.spring(position, {
          toValue: {
            // 드래그가 끝나면 (0, 0) 으로 부드럽게 돌아감
            x: 0,
            y: 0,
          },
          useNativeDriver: true, // 실행 시 필수 설정
        }).start(); // 애니메이션 시작
      }
    },
  });
  const rotationValues = position.x.interpolate({
    // porition 의 x 값을 range 안에서 바꿔줌
    inputRange: [-250, 0, 250],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp", // 최소 최대치 고정
  });
  const secondCardOpacity = position.x.interpolate({
    inputRange: [-250, 0, 250],
    outputRange: [1, 0.2, 1],
    extrapolate: "clamp",
  });
  const secondCardScale = position.x.interpolate({
    inputRange: [-250, 0, 250],
    outputRange: [1, 0.8, 1],
    extrapolate: "clamp",
  });

  return (
    <Container>
      {results.map((result, index) => {
        if (index < topIndex) {
          // 버린 카드가 topindex 보다 낮은 index 를 가지므로 랜더링 하지 않음
          return null;
        } else if (index === topIndex) {
          // 첫 번째 카드
          return (
            <Animated.View
              style={{
                ...style,
                zIndex: 1,
                transform: [
                  { rotate: rotationValues },
                  ...position.getTranslateTransform(),
                ],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else if (index === topIndex + 1) {
          // 두 번째 카드
          return (
            <Animated.View
              style={{
                ...style,
                zIndex: -index,
                opacity: secondCardOpacity,
                transform: [{ scale: secondCardScale }],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else {
          return (
            // 나머지 카드
            <Animated.View
              style={{
                ...style,
                zIndex: -index,
                opacity: 0,
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        }
      })}
    </Container>
  );
};
