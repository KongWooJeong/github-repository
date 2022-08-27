import React from "react";
import Main from "./pages/Main";
import { RelayEnvironmentProvider } from "react-relay";
import RelayEnvironment from "./RelayEnvironment";

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Main />
    </RelayEnvironmentProvider>
  );
}

export default App;
