import React from "react";
import { useFragment, useMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

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
    <div>
      <p>{data.name}</p>
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
    </div>
  );
}

export default RepositoryItem;
