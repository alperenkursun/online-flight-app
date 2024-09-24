// import CSS styles
import styles from "./styles.module.css";

// import libraries and components
import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

// Import custom components
import Search from "./Search";
import Flights from "./Flights";
import Filter from "./Filter";

const Content = () => (
  <GridItem w="100%" px={4} className={styles.content}>
    <Search />
    <Grid templateColumns={{ base: "100%", lg: "75% 25%" }} gap={0} mt={5}>
      <GridItem w="100%" order={{ base: 2, lg: 1 }}>
        <Flights />
      </GridItem>
      <GridItem w="100%" order={{ base: 1, lg: 2 }} pl={4}>
        <Filter />
      </GridItem>
    </Grid>
  </GridItem>
);

export default Content;
