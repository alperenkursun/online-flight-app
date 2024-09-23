// libraries and components start
import React from "react";
import { Box } from "@chakra-ui/react";
// custom component start
import FlightCard from "./FlightCard";

function Flights() {
  return (
    <Box display="flex" flexDirection="column" gap={14}>
      <FlightCard />
      <FlightCard />
      <FlightCard />
    </Box>
  );
}

export default Flights;
