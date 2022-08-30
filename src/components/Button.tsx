import React from "react";
import styled from "styled-components";

interface Props {
  backgroundColor: string;
  textColor: string;
  text: string | number;
  onClick: () => void;
  isDisabled: boolean;
}

interface StyleProps {
  textColor: string;
  backgroundColor: string;
}

const ButtonWrapper = styled.div<StyleProps>`
  button {
    display: inline-block;
    outline: 0;
    cursor: pointer;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    border: 1px solid;
    border-radius: 6px;
    color: ${({ textColor }) => textColor};
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-color: #1b1f2326;
    :hover {
      color: #ffffff;
      background-color: #0366d6;
      border-color: #1b1f2326;
    }
  }
`;

function Button({
  backgroundColor,
  textColor,
  text,
  onClick,
  isDisabled,
}: Props) {
  return (
    <ButtonWrapper textColor={textColor} backgroundColor={backgroundColor}>
      <button onClick={onClick}>{text}</button>
    </ButtonWrapper>
  );
}

export default Button;
