import React from "react";
import { Grid } from "react-loader-spinner";
import styled from "styled-components";

const LoaderSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function LoaderSpinner() {
  return (
    <LoaderSpinnerWrapper>
      <Grid
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        visible={true}
      />
    </LoaderSpinnerWrapper>
  );
}

export default LoaderSpinner;