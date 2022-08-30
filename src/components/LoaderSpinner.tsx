import React from "react";
import { Grid } from "react-loader-spinner";
import styled from "styled-components";

function LoaderSpinner() {
  return (
    <LoaderSpinnerWrapper>
      <Grid
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="loading"
        radius="12.5"
        visible={true}
      />
    </LoaderSpinnerWrapper>
  );
}

const LoaderSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default LoaderSpinner;
