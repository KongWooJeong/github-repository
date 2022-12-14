import React, {
  FormEvent,
  ChangeEvent,
  useState,
  useCallback,
  Suspense,
} from "react";
import { useQueryLoader } from "react-relay";
import { ErrorBoundary } from "react-error-boundary";
import styled from "styled-components";

import SearchResult from "./SearchResult";
import LoaderSpinner from "../../components/LoaderSpinner";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import ErrorBox from "../../components/ErrorBox";

import SearchResultQuery, {
  SearchResultQuery as SearchResultQueryType,
} from "./__generated__/SearchResultQuery.graphql";

function Home() {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResultQueryReference, loadSearchResultQuery] =
    useQueryLoader<SearchResultQueryType>(SearchResultQuery);

  const refetch = useCallback(() => {
    loadSearchResultQuery({ query: searchText, first: 10 });
  }, [searchText]);

  function handleInputTextChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  function handleSearchInputSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    refetch();
    setSearchText("");
  }

  return (
    <HomeWrapper>
      <ErrorBoundary
        fallbackRender={({ error }) => <ErrorBox message={error.message} />}
      >
        <div className="search-form-container">
          <form onSubmit={handleSearchInputSubmit}>
            <TextInput
              type="text"
              value={searchText}
              onChange={handleInputTextChange}
            />
            <Button type="submit" text="검색" />
          </form>
        </div>
        <div className="search-results-container">
          <Suspense fallback={<LoaderSpinner />}>
            {searchResultQueryReference && (
              <SearchResult
                initialQueryReference={searchResultQueryReference}
              />
            )}
          </Suspense>
        </div>
      </ErrorBoundary>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  background-color: #f7fafc;

  .search-form-container {
    display: flex;
    justify-content: center;
  }

  .search-results-container {
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 0px 70px;
  }
`;

export default Home;
