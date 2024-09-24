// import libraries
import React from "react";
import ReactDOM from "react-dom/client";

// import App component
import App from "./App";

// import provider
import { ChakraProvider } from "@chakra-ui/react";
import { FlightsContextProvider } from "./contexts/FlightsContext";
import { MyFlightsContextProvider } from "./contexts/MyFlightsContext";

const Root = () => (
  <div className="container">
    <ChakraProvider>
      <FlightsContextProvider>
        <MyFlightsContextProvider>
          <App />
        </MyFlightsContextProvider>
      </FlightsContextProvider>
    </ChakraProvider>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
