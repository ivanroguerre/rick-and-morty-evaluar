import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import { ApiContextProvider } from "./context/api.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiContextProvider>
      <App />
    </ApiContextProvider>
  </React.StrictMode>
);
