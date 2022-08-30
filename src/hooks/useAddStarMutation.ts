import { useMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

function useAddStartMutation() {
  const mutationData = useMutation(graphql`
    mutation useAddStarMutation($reposutoryId: ID!) {
      addStar(input: { starrableId: $reposutoryId }) {
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
