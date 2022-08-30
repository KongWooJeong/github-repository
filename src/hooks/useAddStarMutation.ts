import { useMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { useAddStarMutation } from "./__generated__/useAddStarMutation.graphql";

function useAddStartMutation() {
  const mutationData = useMutation<useAddStarMutation>(graphql`
    mutation useAddStarMutation($repositoryId: ID!) {
      addStar(input: { starrableId: $repositoryId }) {
        starrable {
          stargazerCount
          viewerHasStarred
        }
      }
    }
  `);
  return mutationData;
}

export default useAddStartMutation;
