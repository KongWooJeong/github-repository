import React from "react";
import { usePreloadedQuery, PreloadedQuery } from "react-relay";
import { HomeQuery as HomeQueryType } from "./__generated__/HomeQuery.graphql";

import { graphql } from "babel-plugin-relay/macro";

interface Props {
  initialQueryReference: PreloadedQuery<HomeQueryType>;
}

function Home({ initialQueryReference }: Props) {
  const data = usePreloadedQuery(
    graphql`
      query HomeQuery {
        viewer {
          login
        }
      }
    `,
    initialQueryReference
  );

  return <div>{data.viewer.login}</div>;
}

export default Home;
