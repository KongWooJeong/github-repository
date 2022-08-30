import { useMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

function useRemoveStarMutation() {
  const mutationData = useMutation(graphql`
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
