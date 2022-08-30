import { useMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { useRemoveStarMutation as useRemoveStarMutationType } from "./__generated__/useRemoveStarMutation.graphql";

function useRemoveStarMutation() {
  const mutationData = useMutation<useRemoveStarMutationType>(graphql`
    mutation useRemoveStarMutation($repositoryId: ID!) {
      removeStar(input: { starrableId: $repositoryId }) {
        starrable {
          stargazerCount
          viewerHasStarred
        }
      }
    }
  `);

  return mutationData;
}

export default useRemoveStarMutation;
