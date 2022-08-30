import React from "react";
import { RelayEnvironmentProvider } from "react-relay";

import Home from "./pages/Home/Home";
import RelayEnvironment from "./RelayEnvironment";

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Home />
    </RelayEnvironmentProvider>
  );
}

export default App;
