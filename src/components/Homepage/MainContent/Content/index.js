// import styles
import styles from "./styles.module.css";

// Import necessary libraries and components
import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

// Import custom components
import Search from "./Search";
import Flights from "./Flights";
import Filter from "./Filter";

function Content() {
  return (
    <GridItem w="100%" px={4} className={styles.content}>
      <Search />
      <Grid
        templateColumns={{ base: "100%", lg: "75% 25%" }}
        gap={0}
        marginTop={5}
      >
        <GridItem w="100%" order={{ base: 2, lg: 1 }}>
          <Flights />
        </GridItem>
        <GridItem w="100%" order={{ base: 1, lg: 2 }} paddingLeft={4}>
          <Filter />
        </GridItem>
      </Grid>
    </GridItem>
  );
}

export default Content;
