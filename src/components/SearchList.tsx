import React from "react";
import { usePreloadedQuery, PreloadedQuery } from "react-relay";
import { SearchListQuery } from "./__generated__/SearchListQuery.graphql";

import { graphql } from "babel-plugin-relay/macro";

import RepositoryList from "./RepositoryList";

interface Props {
  initialQueryReference: PreloadedQuery<SearchListQuery>;
}

function SearchList({ initialQueryReference }: Props) {
  const data = usePreloadedQuery(
    graphql`
      query SearchListQuery($query: String!, $cursor: String, $first: Int) {
        ...RepositoryList_Search
      }
    `,
    initialQueryReference
  );

  return (
    <div>
      <RepositoryList query={data} />
    </div>
  );
}

export default SearchList;
