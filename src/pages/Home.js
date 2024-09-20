import React from "react";
import Header from "../components/Header";
import { Container } from "@chakra-ui/react";

function Home() {
  return (
    <>
      <Header />
      <Container maxW="1124px" padding={0}>
        Anasayfa
      </Container>
    </>
  );
}

export default Home;
