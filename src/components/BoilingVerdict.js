import React from "react";

import styled from "styled-components";

const TextBox = styled.div`
  padding: 30px 0;
`;

const Text = styled.p`
  text-align: left;
  font-size: 1.5rem;
  color: #666;
`;

export default function BoilingVerdict({ temp, scale }) {
  if (scale === "c") {
    return (
      <TextBox>
        {temp >= 100 ? (
          <Text>The water will boil</Text>
        ) : (
          <Text>The water will not boil</Text>
        )}
      </TextBox>
    );
  } else {
    return (
      <TextBox>
        {temp >= 212 ? (
          <Text>The water will boil</Text>
        ) : (
          <Text>The water will not boil</Text>
        )}
      </TextBox>
    );
  }
}
