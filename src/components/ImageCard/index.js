// import CSS styles
import styles from "./styles.module.css";

// import libraries and components
import React from "react";
import { Box, Img, Text } from "@chakra-ui/react";

const ImageCard = ({ image, icon, title }) => (
  <a href="/#">
    <Box
      as="figure"
      borderRadius={20}
      overflow="hidden"
      position="relative"
      width="100%"
      height={264}
      className={styles.imagesCard}
      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
    >
      <Img
        src={image}
        alt={title}
        loading="lazy"
        objectFit="cover"
        width="100%"
        height="100%"
      />
      <Box
        as="figcaption"
        position="absolute"
        bottom={5}
        left={5}
        color="white"
        fontSize={20}
      >
        <i className={icon}></i>
        <Text color="white" fontWeight="medium">
          {title}
        </Text>
      </Box>
    </Box>
  </a>
);

export default ImageCard;
