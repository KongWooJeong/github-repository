import React, { ChangeEvent, useState, useCallback, Suspense } from "react";
import { useQueryLoader } from "react-relay";
import { ErrorBoundary } from "react-error-boundary";
import * as SearchListQuery from "../components/__generated__/SearchListQuery.graphql";
import SearchList from "../components/SearchList";

function Main() {
  const [text, setText] = useState<string>("");
  const [queryRef, loadQuery] = useQueryLoader<SearchListQuery.SearchListQuery>(
    SearchListQuery.default
  );

  const refetch = useCallback(() => {
    loadQuery({ query: text });
  }, [text]);

  function handleChangeText(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <ErrorBoundary fallbackRender={({ error }) => <div>{error.message}</div>}>
      <Suspense fallback={<div>Loading</div>}>
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
        {queryRef && <SearchList initialQueryReference={queryRef} />}
      </Suspense>
    </ErrorBoundary>
  );
}

export default Main;
