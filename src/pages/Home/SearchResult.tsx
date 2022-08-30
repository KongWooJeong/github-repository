import React from "react";
import { usePreloadedQuery, PreloadedQuery } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import RepositoryList from "./RepositoryList";

import { SearchResultQuery as SearchResultQueryType } from "./__generated__/SearchResultQuery.graphql";

interface Props {
  initialQueryReference: PreloadedQuery<SearchResultQueryType>;
}

function SearchResult({ initialQueryReference }: Props) {
  const data = usePreloadedQuery(
    graphql`
      query SearchResultQuery($query: String!, $cursor: String, $first: Int) {
        ...RepositoryList_query
      }
    `,
    initialQueryReference
  );

  return <RepositoryList fragmentReference={data} />;
}

export default SearchResult;
