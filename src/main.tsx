import React from "react";
import ReactDOM from "react-dom/client";
import { Web3OnboardProvider } from "@web3-onboard/react";
import web3Onboard from "./connection";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Web3OnboardProvider web3Onboard={web3Onboard}>
        <App />
      </Web3OnboardProvider>
    </ChakraProvider>
  </React.StrictMode>
);
