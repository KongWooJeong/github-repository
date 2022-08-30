import React from "react";
import { usePreloadedQuery, PreloadedQuery } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import RepositoryList from "./RepositoryList";

import { SearchResultsQuery as SearchResultsQueryType } from "./__generated__/SearchResultsQuery.graphql";

interface Props {
  initialQueryReference: PreloadedQuery<SearchResultsQueryType>;
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

  return <RepositoryList query={data} />;
}

export default SearchResult;
