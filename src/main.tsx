import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import { ApiContextProvider } from "./context/api.tsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ApiContextProvider>
  </React.StrictMode>
);
