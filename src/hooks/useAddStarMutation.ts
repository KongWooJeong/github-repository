import { useMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

function useAddStartMutation() {
  const mutationData = useMutation(graphql`
    mutation useAddStarMutation($repoId: ID!) {
      addStar(input: { starrableId: $repoId }) {
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

export default useAddStartMutation;
