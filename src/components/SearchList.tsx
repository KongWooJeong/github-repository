import React from "react";
import { usePreloadedQuery, PreloadedQuery } from "react-relay";
import { SearchListQuery } from "./__generated__/SearchListQuery.graphql";

import { graphql } from "babel-plugin-relay/macro";

interface Props {
  initialQueryReference: PreloadedQuery<SearchListQuery>;
}

function SearchList({ initialQueryReference }: Props) {
  const data = usePreloadedQuery(
    graphql`
      query SearchListQuery($query: String!) {
        search(query: $query, type: REPOSITORY, first: 10) {
          nodes {
            ... on Repository {
              id
              name
              description
              stargazerCount
            }
          }
        }
      }
    `,
    initialQueryReference
  );

  return (
    <div>
      {data.search.nodes?.map((node) => {
        return node ? <p key={node.id}>{node.description}</p> : null;
      })}
    </div>
  );
}

export default SearchList;
