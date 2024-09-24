// import styles
import styles from "./styles.module.css";

// import libraries and components
import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";

// import custom components
import TopRate from "./TopRate";
import Sort from "./Sort";
import MyFlightCard from "./MyFlightCard";

// import context
import { useMyFlights } from "../../../contexts/MyFlightsContext";

const MainContent = () => {
  // use context
  const { myFlights } = useMyFlights();

  return (
    <>
      <Box backgroundColor="var(--third-color)" className={styles.content}>
        <TopRate />
      </Box>
      <Container
        as="main"
        maxW="1124px"
        py={0}
        px={4}
        paddingBottom={10}
        minHeight="90vh"
        className={styles.content}
      >
        <Sort />
        <Box display="flex" flexDirection="column" gap={3}>
          {myFlights.length > 0 ? (
            myFlights.map((myFlight, index) => (
              <MyFlightCard key={index} myFlight={myFlight} />
            ))
          ) : (
            <Text fontSize={16} color="gray.500">
              Henüz uçuş eklemediniz...
            </Text>
          )}
        </Box>
      </Container>
    </>
  );
};

export default MainContent;
