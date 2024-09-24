// import styles
import styles from "./styles.module.css";

// import libraries and components
import React from "react";
import { Container, Box } from "@chakra-ui/react";

// import custom components
import TopRate from "./TopRate";
import Sort from "./Sort";
import MyFlightCard from "./MyFlightCard";

const MainContent = () => (
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
        {[...Array(4)].map((_, index) => (
          <MyFlightCard key={index} />
        ))}
      </Box>
    </Container>
  </>
);

export default MainContent;
