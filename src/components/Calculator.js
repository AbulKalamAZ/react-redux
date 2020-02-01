import React, { Component } from "react";

import TemperatureInput from "./TemperatureInput";

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: "",
      scale: "c",
      showError: false
    };
  }

  toCelsius = farenheit => {
    return ((farenheit - 32) * 5) / 9;
  };

  toFarenheit = celsius => {
    return (celsius * 9) / 5 + 32;
  };

  //method that will conver both celsius and farenheit

  tempConverter = (temp, convert) => {
    let input = parseFloat(temp);

    if (Number.isNaN(input)) {
      return "";
    }

    let output = convert(input);
    let rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
  };

  handleTemperatureChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale: scale
    });
  };
  //Method that will handle error

  handleError = () => {
    this.setState(state => ({
      showError: !state.showError
    }));
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f"
        ? this.tempConverter(temperature, this.toCelsius)
        : temperature;

    const farenheit =
      scale === "c"
        ? this.tempConverter(temperature, this.toFarenheit)
        : temperature;

    return (
      <div className="calculator">
        <TemperatureInput
          scale="c"
          onChange={this.handleTemperatureChange}
          temperature={celsius}
        />
        <TemperatureInput
          scale="f"
          onChange={this.handleTemperatureChange}
          temperature={farenheit}
        />
      </div>
    );
  }
}
