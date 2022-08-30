import React from "react";
import styled from "styled-components";

interface Props {
  message: string;
}

function ErrorBox({ message }: Props) {
  return (
    <ErrorWrapper>
      <p className="error-title">Error 발생가 발생되었습니다.</p>
      <p className="error-message">{message}</p>
    </ErrorWrapper>
  );
}

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .error-title {
    font-size: 40px;
    font-weight: 500;
  }

  .error-message {
    font-size: 30px;
  }
`;

export default ErrorBox;
