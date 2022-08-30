import { useMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

function useRemoveStarMutation() {
  const mutationData = useMutation(graphql`
    mutation useRemoveStarMutation($reposutoryId: ID!) {
      removeStar(input: { starrableId: $reposutoryId }) {
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
