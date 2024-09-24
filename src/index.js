// import libraries
import React from "react";
import ReactDOM from "react-dom/client";

// import App component
import App from "./App";

// import provider
import { ChakraProvider } from "@chakra-ui/react";

const Root = () => (
  <div className="container">
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
