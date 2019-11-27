import React from "react";
import "./App.css";

import styled from "styled-components";

const Title = styled.h1`
  font-size: 4.5em;
  font-weight: light;
  color: #fff;
  cursor: pointer;
`;

const SubTitle = styled.h1`
  font-size: 2em;
  font-weight: light;
  color: #fff;
  cursor: pointer;
`;

const Wrapper = styled.div`
  padding: 2em;
  margin: 0 auto;
`;

const Button = styled.button`
  margin: 1em;
  padding: 0.25em 1em;
  font-size: 2.4em;
  color: ${props => (props.primary ? "white" : "palevioletred")};
  background: ${props => (props.primary ? "palevioletred" : "transparent")};
  border: 2px solid palevioletred;
  border-radius: 10px;
  cursor: pointer;
`;

const DataBox = styled.div`
  margin: 0 auto;
  padding: 2.5em 0.5em;
  width: 25%;
  height: 70vh;
  background: #ffffff81;
  cursor: pointer;
  border-radius: 5px;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 2px;
  word-spacing: 3px;
`;

function App() {
  return (
    <div className="App">
      <Wrapper></Wrapper>
      <Wrapper>
        <DataBox>
          <Title>10</Title>
          <SubTitle>Location, Location</SubTitle>
        </DataBox>
      </Wrapper>
    </div>
  );
}

export default App;
