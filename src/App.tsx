import React from "react";
import { RelayEnvironmentProvider } from "react-relay";

import Home from "./pages/home/Home";
import relayEnvironment from "./relayEnvironment";

function App() {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Home />
    </RelayEnvironmentProvider>
  );
}

export default App;
