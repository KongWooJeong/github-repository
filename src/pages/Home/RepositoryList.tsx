import React from "react";
import { usePaginationFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import styled from "styled-components";

import RepositoryItem from "./RepositoryItem";
import Button from "../../components/Button";

import {
  SearchResultQuery$data,
  SearchResultQuery as SearchResultsQueryType,
} from "./__generated__/SearchResultQuery.graphql";
import { RepositoryList_query$key } from "./__generated__/RepositoryList_query.graphql";

interface Props {
  fragmentReference: SearchResultQuery$data;
}

function RepositoryList({ fragmentReference }: Props) {
  const { data, loadNext } = usePaginationFragment<
    SearchResultsQueryType,
    RepositoryList_query$key
  >(
    graphql`
      fragment RepositoryList_query on Query
      @refetchable(queryName: "RepositoryListQuery") {
        search(query: $query, type: REPOSITORY, first: $first, after: $cursor)
          @connection(key: "RepositoryItem_search") {
          edges {
            node {
              ...RepositoryItem_repository
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `,
    fragmentReference
  );

  function handleAddRepositoryListButtonClick() {
    loadNext(10);
  }

  return (
    <RepositoryListWrapper>
      {data.search.edges?.map((edge: any) => {
        return edge?.node ? (
          <RepositoryItem key={edge.cursor} fragmentReference={edge.node} />
        ) : null;
      })}
      {data.search.pageInfo.hasNextPage && (
        <div className="add-repository-button-container">
          <Button text="더보기" onClick={handleAddRepositoryListButtonClick} />
        </div>
      )}
    </RepositoryListWrapper>
  );
}

const RepositoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .add-repository-button-container {
    margin-top: 30px;
  }
`;

export default RepositoryList;
