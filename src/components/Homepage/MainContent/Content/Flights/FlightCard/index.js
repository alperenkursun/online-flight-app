// import libraries and components
import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";

// import images
import turkish_airlines from "../../../../../../assets/images/turkish-airlines.webp";

const FlightCard = () => (
  <Box
    border="1px solid #eee"
    backgroundColor="white"
    borderRadius={20}
    borderBottomLeftRadius={0}
    borderBottomRightRadius={{ base: 0, sm: 20 }}
    padding={5}
    boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
    position="relative"
  >
    <Text
      fontSize={14}
      fontWeight={600}
      textAlign={{ base: "center", sm: "start" }}
    >
      Milano - Madrid
    </Text>

    <Box
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      my={3}
      gap={{ base: 5, sm: 0 }}
    >
      {/* Departure Info */}
      <Box
        width={{ base: "100%", sm: "33.3%", md: "20%" }}
        textAlign={{ base: "center", sm: "start" }}
      >
        <Text fontSize={12} fontWeight={500} color="grey">
          <i className="fa-solid fa-plane-departure"></i>
          <Text as="span" marginLeft={1}>
            Departure
          </Text>
        </Text>
        <Text fontSize={14} fontWeight="600">
          7:30 AM
        </Text>
        <Text fontSize={13} fontWeight="500" color="grey">
          Airport: MXP
        </Text>
      </Box>

      {/* Center Divider */}
      <Box
        width="20%"
        textAlign="center"
        height={2}
        display={{ base: "none", md: "flex" }}
        justifyContent="center"
        alignItems="center"
        my="auto"
      >
        <Box height={0.5} width="50%" backgroundColor="grey"></Box>
      </Box>

      {/* Flight Info */}
      <Box
        width={{ base: "100%", sm: "100%", md: "20%" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={0.6}
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image
            src={turkish_airlines}
            alt="Turkish Airlines Img"
            width={18}
            height={18}
          />
          <Text
            as="span"
            fontSize={12}
            paddingLeft={1}
            fontWeight={500}
            textAlign="center"
          >
            Turkish Airlines
          </Text>
        </Box>
        <Text color="var(--primary-color)" fontSize={14} textAlign="center">
          <i className="fa-solid fa-plane"></i>
        </Text>
        <Text color="grey" fontSize={12} fontWeight={500} textAlign="center">
          2h 25m (Nonstop)
        </Text>
      </Box>

      {/* Arrival Info */}
      <Box
        width="20%"
        textAlign="center"
        height={2}
        display={{ base: "none", md: "flex" }}
        justifyContent="center"
        alignItems="center"
        my="auto"
      >
        <Box height={0.5} width="50%" backgroundColor="grey"></Box>
      </Box>
      <Box
        width={{ base: "100%", sm: "33.3%", md: "20%" }}
        textAlign={{ base: "center", sm: "end" }}
      >
        <Text fontSize={12} fontWeight={500} color="grey">
          <i className="fa-solid fa-plane-arrival"></i>
          <Text as="span" marginLeft={1}>
            Arrival
          </Text>
        </Text>
        <Text fontSize={14} fontWeight="600">
          9:55 AM
        </Text>
        <Text fontSize={13} fontWeight="500" color="grey">
          Airport: MAD
        </Text>
      </Box>
    </Box>

    {/* Footer with Price and Buttons */}
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box>
        <Text fontSize={16} fontWeight={600} color="var(--primary-color)">
          Price: $200
        </Text>
        <Text fontSize={13} fontWeight={500} color="grey">
          Round Trip
        </Text>
      </Box>
      <Button
        position="absolute"
        bottom={0}
        right={0}
        colorScheme="purple"
        backgroundColor="var(--primary-color)"
        color="var(--third-color)"
        padding="30px"
        borderRadius={{ base: 0, sm: 6 }}
        borderBottomEndRadius={{ base: 0, sm: 20 }}
        borderTopLeftRadius={6}
      >
        <Text fontSize={12}>Book Flight</Text>
      </Button>
      <Button
        position="absolute"
        bottom="-40px"
        left={0}
        colorScheme="purple"
        variant="outline"
        backgroundColor={"var(--secondary-color)"}
        color="var(--third-color)"
        px="30px"
        zIndex={5}
        borderTopRadius={0}
        borderBottomRadius={{ base: 20, sm: 6 }}
        borderColor="#ddd"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
        width={{ base: "100%", sm: "max-content" }}
      >
        <Text
          fontSize={12}
          textDecorationLine="underline"
          color="var(--primary-color)"
        >
          Check The Details
        </Text>
      </Button>
    </Box>
  </Box>
);

export default FlightCard;
