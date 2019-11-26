import React from "react";
import "./App.css";

import styled from "styled-components";

const Title = styled.h1`
  font-size: 3em;
  font-weight: light;
  color: palevioletred;
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

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>Hello, World!</Title>
      </Wrapper>
      <Wrapper>
        <Button>Send Message</Button>
        <Button primary>Send Message</Button>
      </Wrapper>
    </div>
  );
}

export default App;
