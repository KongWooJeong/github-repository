import React from "react";
import { useFragment, useMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import styled from "styled-components";

const RepositoryItemWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;

  box-shadow: 10px 8px 0px rgb(191 219 254);

  button {
    display: inline-block;
    outline: 0;
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

function RepositoryItem({ repo }: any) {
  const data = useFragment(
    graphql`
      fragment RepositoryItem_repository on Repository {
        id
        name
        description
        stargazerCount
        viewerHasStarred
      }
    `,
    repo
  );

  const [addcommitMutation, addisMutationInFlight] = useMutation(graphql`
    mutation RepositoryItemMutation($repoId: ID!) {
      addStar(input: { starrableId: $repoId }) {
        starrable {
          id
          stargazerCount
          viewerHasStarred
        }
      }
    }
  `);

  const [recommitMutation, reisMutationInFlight] = useMutation(graphql`
    mutation RepositoryItemRemoveMutation($repoId: ID!) {
      removeStar(input: { starrableId: $repoId }) {
        starrable {
          id
          stargazerCount
          viewerHasStarred
        }
      }
    }
  `);

  return (
    <RepositoryItemWrapper>
      <strong>{data.name}</strong>
      <p>{data.description}</p>
      <p>{data.stargazerCount}</p>
      <button
        onClick={() => {
          addcommitMutation({
            variables: {
              repoId: data.id,
            },
          });
        }}
        disabled={data.viewerHasStarred || addisMutationInFlight}
      >
        addStart
      </button>
      <button
        onClick={() => {
          recommitMutation({
            variables: {
              repoId: data.id,
            },
          });
        }}
        disabled={!data.viewerHasStarred || reisMutationInFlight}
      >
        removeStar
      </button>
    </RepositoryItemWrapper>
  );
}

export default RepositoryItem;
