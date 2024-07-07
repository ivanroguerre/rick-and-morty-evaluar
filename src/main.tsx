import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { ColorModeScript } from "@chakra-ui/react";

import { ApiContextProvider } from "./context/api.tsx";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiContextProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </ApiContextProvider>
  </React.StrictMode>
);
