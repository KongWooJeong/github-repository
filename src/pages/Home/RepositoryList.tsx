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

import styled from "styled-components";
const RepositoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .add-button {
    display: inline-block;
    /* outline: 0; */
    height: 60px;
    cursor: pointer;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    border: 1px solid;
    border-radius: 6px;
    color: #0366d6;
    background-color: #fafbfc;
    border-color: #1b1f2326;
    :hover {
      color: #ffffff;
      background-color: #0366d6;
      border-color: #1b1f2326;
    }
  }
`;

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
    <RepositoryListWrapper>
      {data?.search?.edges?.map((edge: any) => {
        return edge.node ? (
          <RepositoryItem key={edge.cursor} repo={edge.node} />
        ) : null;
      })}
      <button
        className="add-button"
        onClick={() => {
          loadNext(10);
        }}
      >
        더보기
      </button>
    </RepositoryListWrapper>
  );
}

export default RepositoryList;
