import React from "react";
// import Main from "./pages/Main";

import Home from "./pages/Home/Home";

import { RelayEnvironmentProvider } from "react-relay";
import RelayEnvironment from "./RelayEnvironment";

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Home />
    </RelayEnvironmentProvider>
  );
}

export default App;
