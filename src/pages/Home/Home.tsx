import React, { ChangeEvent, useState, useCallback, Suspense } from "react";
import { useQueryLoader } from "react-relay";
import { ErrorBoundary } from "react-error-boundary";
import SearchResults from "./SearchResults";

import SearchResultsQuery, {
  SearchResultsQuery as SearchResultsQueryType,
} from "./__generated__/SearchResultsQuery.graphql";

function Home() {
  const [text, setText] = useState<string>("");
  const [queryRef, loadQuery] =
    useQueryLoader<SearchResultsQueryType>(SearchResultsQuery);

  const refetch = useCallback(() => {
    loadQuery({ query: text, cursor: null, first: 10 });
  }, [text]);

  function handleChangeText(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <>
      <div>
        <form>
          <input type="text" value={text} onChange={handleChangeText} />
        </form>
        <button
          onClick={() => {
            refetch();
            setText("");
          }}
        >
          검색
        </button>
      </div>
      <ErrorBoundary fallbackRender={({ error }) => <div>{error.message}</div>}>
        <Suspense fallback={<div>Loading</div>}>
          {queryRef && <SearchResults initialQueryReference={queryRef} />}
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default Home;
