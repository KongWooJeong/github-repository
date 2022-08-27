import React from "react";
import { usePaginationFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import {
  SearchListQuery$data,
  SearchListQuery,
} from "./__generated__/SearchListQuery.graphql";

import { RepositoryList_Search$key } from "./__generated__/RepositoryList_Search.graphql";

interface Props {
  query: SearchListQuery$data;
}

function RepositoryList({ query }: Props) {
  const { data, loadNext } = usePaginationFragment<
    SearchListQuery,
    RepositoryList_Search$key
  >(
    graphql`
      fragment RepositoryList_Search on Query
      @refetchable(queryName: "RepositoryListQuery") {
        search(query: $query, type: REPOSITORY, first: $first, after: $cursor)
          @connection(key: "RepositoryList_search") {
          edges {
            node {
              ... on Repository {
                id
                name
                description
                stargazerCount
              }
            }
          }
        }
      }
    `,
    query
  );

  return (
    <div>
      {data?.search?.edges?.map((value: any) => {
        return value.node ? (
          <p key={value.node.id}>{value.node.description}</p>
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
