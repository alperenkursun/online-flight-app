// import libraries and components
import React from "react";
import { Box } from "@chakra-ui/react";

// import custom components
import FlightCard from "./FlightCard";

const Flights = () => (
  <Box display="flex" flexDirection="column" gap={14}>
    {[...Array(3)].map((_, index) => (
      <FlightCard key={index} />
    ))}
  </Box>
);

export default Flights;
