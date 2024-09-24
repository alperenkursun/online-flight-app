// import libraries and components
import React from "react";
import { Box } from "@chakra-ui/react";

// import custom components
import Header from "../../components/Header";
import MainContent from "../../components/Homepage/MainContent";
import Footer from "../../components/Footer";

const Home = () => (
  <Box>
    <Header />
    <MainContent />
    <Footer />
  </Box>
);

export default Home;
