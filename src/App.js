import React from "react";

import { LoggedContainer } from "./containers/LoggedContainer";
import { UnloggedContainer } from "./containers/UnloggedContainer";
import { useAuth } from "./context/AuthContext";

function App() {
  const { currentUser } = useAuth();
  return currentUser ? <LoggedContainer /> : <UnloggedContainer />;
}

export default App;
