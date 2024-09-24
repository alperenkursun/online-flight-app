// import libraries and components
import React from "react";
import { Box } from "@chakra-ui/react";

// import custom components
import FlightCard from "./FlightCard";

// import context
import { useFlights } from "../../../../../contexts/FlightsContext";

const Flights = () => {
  const { loading, flights } = useFlights();
  if (loading) {
    return <div>Loading...</div>;
  }

  // I added static data in case the API doesn't work."
  const staticFlightData = {
    lastUpdatedAt: "2024-09-24T02:05:00.201+02:00",
    actualLandingTime: "2024-09-23T23:55:00.000+02:00",
    aircraftType: {
      iataMain: "737",
      iataSub: "73H",
    },
    baggageClaim: {
      belts: ["4"],
    },
    codeshares: {
      codeshares: ["KL2558"],
    },
    estimatedLandingTime: "2024-09-23T23:55:00.000+02:00",
    expectedTimeOnBelt: "2024-09-24T00:32:16.471+02:00",
    flightDirection: "A",
    flightName: "HV6874",
    flightNumber: 6874,
    id: "140716953078391004",
    isOperationalFlight: true,
    mainFlight: "HV6874",
    prefixIATA: "HV",
    prefixICAO: "TRA",
    airlineCode: 164,
    publicFlightState: {
      flightStates: ["ARR"],
    },
    route: {
      destinations: ["HER"],
      eu: "S",
      visa: false,
    },
    scheduleDateTime: "2024-09-24T00:00:00.000+02:00",
    scheduleDate: "2024-09-24",
    scheduleTime: "00:00:00",
    serviceType: "J",
    terminal: 1,
    schemaVersion: "4",
  };

  return (
    <>
      <FlightCard flight={staticFlightData} />

      {/* dynamic flight data */}
      <Box display="flex" flexDirection="column" gap={14}>
        {flights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
      </Box>
    </>
  );
};

export default Flights;
