import React, { Component } from "react";

import styled from "styled-components";

import BoilingVerdict from "./BoilingVerdict";

const TemperatureInputBox = styled.div`
  width: 50%;
  height: auto;
  margin: 20px auto;
  background: rgba(255, 255, 255, 0.548);
`;

const BoxHeader = styled.p`
  padding: 15px 20px;
  font-size: 1.5rem;
  word-spacing: 3px;
  letter-spacing: 2px;
  text-align: left;
  color: #666;
  background: rgba(255, 255, 255, 0.648);
`;

const BoxBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const Input = styled.input`
  width: 50%;
  padding: 10px;
  border: none;
  font-size: 1.3rem;
  color: #666;

  :focus {
    outline: none;
  }
`;

const scaleNames = {
  c: "Celsius",
  f: "Farenheit"
};

export default class TemperatureInput extends Component {
  render() {
    const temp = this.props.temperature;
    const scale = this.props.scale;

    return (
      <TemperatureInputBox>
        <BoxHeader>Enter temperature in {scaleNames[scale]}</BoxHeader>

        <BoxBody>
          <Input
            type="text"
            value={temp}
            onChange={e => this.props.onChange(e, scale)}
          />

          <BoilingVerdict temp={parseFloat(temp)} />
        </BoxBody>
      </TemperatureInputBox>
    );
  }
}
