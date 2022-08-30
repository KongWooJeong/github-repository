import React from "react";
import { useFragment, useMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import styled from "styled-components";

import { RepositoryItem_repository$key } from "./__generated__/RepositoryItem_repository.graphql";

import Button from "../../components/Button";
import useAddStartMutation from "../../hooks/useAddStarMutation";
import useRemoveStarMutation from "../../hooks/useRemoveStarMutation";

interface Props {
  repo: RepositoryItem_repository$key;
}

const RepositoryItemWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 8px 0px rgb(191 219 254);
`;

function RepositoryItem({ repo }: Props) {
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

  const [commitAddStarMutation, isAddStarMutationInFlight] =
    useAddStartMutation();

  const [commitRemoveStarMutation, isRemoveStarMutationInFlight] =
    useRemoveStarMutation();

  function handleStarButtonClick() {
    if (data.viewerHasStarred) {
      commitRemoveStarMutation({
        variables: {
          repoId: data.id,
        },
      });
    } else {
      commitAddStarMutation({
        variables: {
          repoId: data.id,
        },
      });
    }
  }

  return (
    <RepositoryItemWrapper>
      <strong>{data.name}</strong>
      <p>{data.description}</p>
      <Button
        backgroundColor={data.viewerHasStarred ? "#0366d6" : "#fafbfc"}
        textColor={data.viewerHasStarred ? "#fafbfc" : "#0366d6"}
        text={`⭐️ ${data.stargazerCount}`}
        onClick={handleStarButtonClick}
        isDisabled={data.viewerHasStarred}
      />
    </RepositoryItemWrapper>
  );
}

export default RepositoryItem;
