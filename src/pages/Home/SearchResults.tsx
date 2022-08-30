import React from "react";
import { usePreloadedQuery, PreloadedQuery } from "react-relay";

import { SearchResultsQuery as SearchResultsQueryType } from "./__generated__/SearchResultsQuery.graphql";

import RepositoryList from "./RepositoryList";

import { graphql } from "babel-plugin-relay/macro";

interface Props {
  initialQueryReference: PreloadedQuery<SearchResultsQueryType>;
}

function SearchResults({ initialQueryReference }: Props) {
  const data = usePreloadedQuery(
    graphql`
      query SearchResultsQuery($query: String!, $cursor: String, $first: Int) {
        ...RepositoryList_query
      }
    `,
    initialQueryReference
  );

  return (
    <>
      <RepositoryList query={data} />
    </>
  );
}

export default SearchResults;
