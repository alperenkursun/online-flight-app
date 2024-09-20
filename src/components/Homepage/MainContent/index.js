// Import necessary libraries and components
import React from "react";
import { Container, Grid } from "@chakra-ui/react";

// Import custom components
import Aside from "./Aside";
import Content from "./Content";

function MainContent() {
  return (
    <Container as="main" maxW="1124px" padding={0}>
      <Grid templateColumns={{ base: "100%", lg: "75% 25%" }} gap={0}>
        <Content />
        <Aside />
      </Grid>
    </Container>
  );
}

export default MainContent;
