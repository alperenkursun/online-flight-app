import React from "react";
import styles from "./styles.module.css";
import { Box, Img, Text } from "@chakra-ui/react";

function ImageCard({ image, icon, title }) {
  return (
    <a href="/#">
      <Box
        as="figure"
        borderRadius={20}
        overflow="hidden"
        position="relative"
        width="100%"
        height={264}
        className={styles.imagesCard}
      >
        <Img
          src={image}
          alt="Homepage Right Image 1"
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
}

export default ImageCard;
