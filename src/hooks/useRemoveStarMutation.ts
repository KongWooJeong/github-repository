import { useMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

function useRemoveStarMutation() {
  const mutationData = useMutation(graphql`
    mutation useRemoveStarMutation($repoId: ID!) {
      removeStar(input: { starrableId: $repoId }) {
        starrable {
          id
          stargazerCount
          viewerHasStarred
        }
      }
    }
  `);

  return mutationData;
}

export default useRemoveStarMutation;
