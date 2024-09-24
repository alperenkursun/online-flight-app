// import CSS styles
import styles from "./styles.module.css";

// import libraries and components
import React from "react";
import { GridItem } from "@chakra-ui/react";

// import custom components
import ImageCard from "../../../ImageCard";

// import images
import homepageRight1 from "../../../../assets/images/homepage-right-1.webp";
import homepageRight2 from "../../../../assets/images/homepage-right-2.webp";
import homepageRight3 from "../../../../assets/images/homepage-right-3.webp";

const Aside = () => {
  // aside images content array
  const asideItems = [
    {
      image: homepageRight1,
      icon: "fa-solid fa-car",
      title: "CAR RENTALS",
    },
    {
      image: homepageRight2,
      icon: "fa-solid fa-hotel",
      title: "HOTELS",
    },
    {
      image: homepageRight3,
      icon: "fa-solid fa-umbrella-beach",
      title: "TRAVEL PACKAGES",
    },
  ];

  return (
    <GridItem
      as="aside"
      w="100%"
      display={{ base: "none", lg: "flex" }}
      flexDirection="column"
      gap={8}
      pr={4}
      className={styles.aside}
    >
      {asideItems.map((item, index) => (
        <ImageCard
          key={index}
          image={item.image}
          icon={item.icon}
          title={item.title}
        />
      ))}
    </GridItem>
  );
};

export default Aside;
