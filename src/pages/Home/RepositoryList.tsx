import React from "react";
import { usePaginationFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import styled from "styled-components";

import RepositoryItem from "./RepositoryItem";
import Button from "../../components/Button";

import {
  SearchResultsQuery$data,
  SearchResultsQuery as SearchResultsQueryType,
} from "./__generated__/SearchResultsQuery.graphql";
import { RepositoryList_query$key } from "./__generated__/RepositoryList_query.graphql";

const RepositoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .add-repository-button-container {
    margin-top: 30px;
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

  function handleAddRepositoryListButtonClick() {
    loadNext(10);
  }

  return (
    <RepositoryListWrapper>
      {data?.search?.edges?.map((edge: any) => {
        return edge.node ? (
          <RepositoryItem key={edge.cursor} repo={edge.node} />
        ) : null;
      })}
      <div className="add-repository-button-container">
        <Button text="더보기" onClick={handleAddRepositoryListButtonClick} />
      </div>
    </RepositoryListWrapper>
  );
}

export default RepositoryList;
