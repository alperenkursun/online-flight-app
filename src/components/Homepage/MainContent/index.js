// import libraries and components
import React from "react";
import { Container, Grid } from "@chakra-ui/react";

// import custom components
import Aside from "./Aside";
import Content from "./Content";

const MainContent = () => (
  <Container as="main" maxW="1124px" p={0} minHeight="90vh">
    <Grid templateColumns={{ base: "100%", lg: "75% 25%" }} gap={0}>
      <Content />
      <Aside />
    </Grid>
  </Container>
);

export default MainContent;
