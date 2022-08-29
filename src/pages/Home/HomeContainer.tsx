import React, { useEffect } from "react";
import { useQueryLoader } from "react-relay";

import HomeQuery, {
  HomeQuery as HomeQueryType,
} from "./__generated__/HomeQuery.graphql";

import Home from "./";

function HomeContainer() {
  const [queryRef, loadQuery] = useQueryLoader<HomeQueryType>(HomeQuery);

  useEffect(() => {
    loadQuery({});
  }, []);

  return <>{queryRef && <Home initialQueryReference={queryRef} />}</>;
}

export default HomeContainer;
