// Import CSS styles
import styles from "./styles.module.css";

// Import necessary libraries and components
import React, { useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";

function Search() {
  // state start
  const [isOneWay, setIsOneWay] = useState(false);

  // function start
  const toggleIsOneWay = () => {
    setIsOneWay(!isOneWay);
  };

  return (
    <Box
      border="1px solid #eee"
      backgroundColor="white"
      borderRadius={20}
      padding={5}
      box-shadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize={18} fontWeight="medium">
          <i class="fa-solid fa-plane"></i>{" "}
          <Text as="span" marginLeft={2}>
            BOOK YOUR FLIGHT
          </Text>
        </Text>
        <Box
          display="flex"
          alignItems="center"
          borderRadius={20}
          overflow="hidden"
          cursor="pointer"
          marginTop={{ base: 2, sm: 0 }}
        >
          <Box
            px={4}
            py={2}
            className={`${styles.wayButton} ${!isOneWay && styles.active}`}
            onClick={toggleIsOneWay}
          >
            <Text fontSize={14} fontWeight="medium">
              Round trip
            </Text>
          </Box>
          <Box
            px={4}
            py={2}
            className={`${styles.wayButton} ${isOneWay && styles.active}`}
            onClick={toggleIsOneWay}
          >
            <Text fontSize={14} fontWeight="medium">
              One way
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        gap="2%"
        marginY={5}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width={{ base: "100%", md: "49%" }}
        >
          <Box position="relative" width="49.5%">
            <Input
              placeholder="Nereden"
              paddingLeft={10}
              borderTopLeftRadius={20}
              borderBottomLeftRadius={20}
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
              focusBorderColor="#4a1b96"
              height={35}
            />
            <Box
              as="span"
              position="absolute"
              left="5"
              top="50%"
              transform="translate(-50%,-50%) "
              color="var(--primary-color)"
            >
              <i class="fa-solid fa-plane-departure"></i>
            </Box>
          </Box>
          <Box position="relative" width="49.5%">
            <Input
              placeholder="Nereye"
              paddingLeft={10}
              borderTopLeftRadius={0}
              borderBottomLeftRadius={0}
              borderTopRightRadius={20}
              borderBottomRightRadius={20}
              borderColor="#ddd"
              focusBorderColor="#4a1b96"
              height={35}
            />
            <Box
              as="span"
              position="absolute"
              left="5"
              top="50%"
              transform="translate(-50%,-50%) "
              color="var(--primary-color)"
            >
              <i class="fa-solid fa-plane-arrival"></i>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width={{ base: "100%", md: "49%" }}
          marginTop={{ base: 2, md: 0 }}
        >
          <Box position="relative" width="49.5%">
            <Input
              placeholder="Gidiş Tarihi"
              paddingLeft={10}
              borderTopLeftRadius={20}
              borderBottomLeftRadius={20}
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
              focusBorderColor="#4a1b96"
              height={35}
            />
            <Box
              as="span"
              position="absolute"
              left="5"
              top="50%"
              transform="translate(-50%,-50%) "
              color="var(--primary-color)"
            >
              <i class="fa-solid fa-calendar-days"></i>
            </Box>
          </Box>
          <Box position="relative" width="49.5%">
            <Input
              placeholder="Dönüş Tarihi"
              paddingLeft={10}
              borderTopLeftRadius={0}
              borderBottomLeftRadius={0}
              borderTopRightRadius={20}
              borderBottomRightRadius={20}
              borderColor="#ddd"
              focusBorderColor="#4a1b96"
              height={35}
            />
            <Box
              as="span"
              position="absolute"
              left="5"
              top="50%"
              transform="translate(-50%,-50%) "
              color="var(--primary-color)"
            >
              <i class="fa-solid fa-calendar-days"></i>
            </Box>
          </Box>
        </Box>
      </Box>
      <Button
        colorScheme="purple"
        backgroundColor="var(--primary-color)"
        color="var(--third-color)"
        width={{ base: "100%", sm: "max-content" }}
      >
        Show Flights
      </Button>
    </Box>
  );
}

export default Search;
