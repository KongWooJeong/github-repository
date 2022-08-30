import React from "react";
import styled from "styled-components";

interface Props {
  text: string | number;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  textColor?: string;
  backgroundColor?: string;
}

interface StyleProps {
  textColor?: string;
  backgroundColor?: string;
}

function Button({
  text,
  isDisabled,
  type,
  onClick,
  backgroundColor,
  textColor,
}: Props) {
  return (
    <ButtonWrapper textColor={textColor} backgroundColor={backgroundColor}>
      <button type={type} onClick={onClick} disabled={isDisabled}>
        {text}
      </button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div<StyleProps>`
  display: inline;

  button {
    display: inline-block;
    border: 1px solid;
    border-radius: 6px;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    cursor: pointer;
    color: ${({ textColor }) => (textColor ? textColor : "#0366d6")};
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : "#ffffff"};
    border-color: #1b1f2326;

    :hover {
      color: #ffffff;
      background-color: #0366d6;
      border-color: #1b1f2326;
    }
  }
`;

export default Button;
