import React from "react";
import { usePaginationFragment } from "react-relay";

import {
  SearchResultsQuery$data,
  SearchResultsQuery as SearchResultsQueryType,
} from "./__generated__/SearchResultsQuery.graphql";

import { RepositoryList_query$key } from "./__generated__/RepositoryList_query.graphql";

import RepositoryItem_repository from "./__generated__/RepositoryItem_repository.graphql";

import { graphql } from "babel-plugin-relay/macro";

import RepositoryItem from "./RepositoryItem";

interface Props {
  query: SearchResultsQuery$data;
}

function RepositoryList({ query }: Props) {
  const { data, loadNext } = usePaginationFragment<
    SearchResultsQueryType,
    RepositoryList_query$key
  >(
    graphql`
      fragment RepositoryList_query on Query
      @refetchable(queryName: "RepositoryList") {
        search(query: $query, type: REPOSITORY, first: $first, after: $cursor)
          @connection(key: "RepositoryList_search") {
          edges {
            node {
              ...RepositoryItem_repository
            }
          }
        }
      }
    `,
    query
  );

  return (
    <div>
      {data?.search?.edges?.map((edge: any) => {
        return edge.node ? (
          <RepositoryItem key={edge.cursor} repo={edge.node} />
        ) : null;
      })}
      <button
        onClick={() => {
          loadNext(10);
        }}
      >
        추가
      </button>
    </div>
  );
}

export default RepositoryList;
