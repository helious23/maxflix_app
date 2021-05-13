import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Title from "./Title";

const Container = styled.View`
  margin-top: 20px;
`;

const List = ({ title, children }) => (
  <>
    <Title title={title}></Title>
    <Container>{children}</Container>
  </>
);

List.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default List;
