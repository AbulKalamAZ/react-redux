import React from "react";
import "./App.css";

import styled from "styled-components";

import Calculator from "./components/Calculator";

const Wrapper = styled.div`
  padding: 2em;
  margin: 0 auto;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Calculator />
      </Wrapper>
    </div>
  );
}

export default App;
