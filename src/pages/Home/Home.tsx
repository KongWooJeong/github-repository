import React, {
  FormEvent,
  ChangeEvent,
  useState,
  useCallback,
  Suspense,
} from "react";
import { useQueryLoader } from "react-relay";
import { ErrorBoundary } from "react-error-boundary";
import SearchResults from "./SearchResults";
import LoaderSpinner from "../../components/LoaderSpinner";

import SearchResultsQuery, {
  SearchResultsQuery as SearchResultsQueryType,
} from "./__generated__/SearchResultsQuery.graphql";

import TextInput from "../../components/TextInput";

import styled from "styled-components";

const HomeWrapper = styled.div`
  background-color: #f7fafc;

  .search-input-container {
    display: flex;
    justify-content: center;
  }

  .search-results-container {
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 0px 70px;
  }

  .button {
    display: inline-block;
    outline: 0;
    cursor: pointer;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    border: 1px solid;
    border-radius: 6px;
    color: #0366d6;
    background-color: #fafbfc;
    border-color: #1b1f2326;
    :hover {
      color: #ffffff;
      background-color: #0366d6;
      border-color: #1b1f2326;
    }
  }
`;

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

  function handleSearchInputSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    refetch();
    setText("");
  }

  return (
    <HomeWrapper>
      <div className="search-input-container">
        <form onSubmit={handleSearchInputSubmit}>
          <TextInput type="text" value={text} onChange={handleChangeText} />
          <button type="submit" className="button">
            검색
          </button>
        </form>
      </div>
      <div className="search-results-container">
        <ErrorBoundary
          fallbackRender={({ error }) => <div>{error.message}</div>}
        >
          <Suspense fallback={<LoaderSpinner />}>
            {queryRef && <SearchResults initialQueryReference={queryRef} />}
          </Suspense>
        </ErrorBoundary>
      </div>
    </HomeWrapper>
  );
}

export default Home;
