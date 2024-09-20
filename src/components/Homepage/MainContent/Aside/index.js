// Import CSS styles
import styles from "./styles.module.css";

// // Import necessary libraries and components
import React from "react";
import { GridItem } from "@chakra-ui/react";

// Import custom components
import ImageCard from "../../../ImageCard";

// Import images
import homepageRight1 from "../../../../assets/images/homepage-right-1.webp";
import homepageRight2 from "../../../../assets/images/homepage-right-2.webp";
import homepageRight3 from "../../../../assets/images/homepage-right-3.webp";

function Sidebar() {
  return (
    <GridItem
      as="aside"
      w="100%"
      display={{ base: "none", lg: "flex" }}
      flexDirection="column"
      gap={8}
      paddingRight={4}
      className={styles.aside}
    >
      <ImageCard
        image={homepageRight1}
        icon="fa-solid fa-car"
        title="CAR RENTALS"
      />
      <ImageCard
        image={homepageRight2}
        icon="fa-solid fa-hotel"
        title="HOTELS"
      />
      <ImageCard
        image={homepageRight3}
        icon="fa-solid fa-umbrella-beach"
        title="TRAVEL PACKAGES"
      />
    </GridItem>
  );
}

export default Sidebar;
