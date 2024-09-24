// import libraries and components
import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

// import images
import turkishAirlines from "../../../../assets/images/turkish-airlines.webp";

function MyFlightCard() {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems={{ base: "center", lg: "start" }}
      border="1px solid #ddd"
      borderRadius={5}
      backgroundColor="white"
      box-shadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      padding={{ base: 4, lg: 8 }}
      gap={{ base: 5, lg: 0 }}
    >
      {/* my flights left */}
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        alignItems={{ base: "center", sm: "flex-start" }}
        gap={5}
      >
        <Image
          src={turkishAirlines}
          alt="Turkish Airlines"
          border="1px solid #ddd"
          borderRadius="100%"
          box-shadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ base: "center", sm: "flex-start" }}
          gap={2}
        >
          <Text fontSize={{ base: 20, sm: 24 }} fontWeight={400} color="#555">
            7:40 AM --- 9:12 AM
          </Text>
          <Box
            display="flex"
            justifyContent={{ base: "center", sm: "start" }}
            alignItems="center"
            flexWrap="wrap"
            gap={{ base: 5, md: "80px" }}
          >
            <Box paddingRight={{ base: 0, lg: 14 }}>
              <Text fontSize={14} fontWeight={500}>
                Delta Airlines
              </Text>
              <Text
                fontSize={12}
                fontWeight={500}
                display="flex"
                alignItems="center"
                gap={1}
                color="blue.400"
                cursor="pointer"
              >
                Flight Details{" "}
                <Text as="span" fontSize={10}>
                  <i class="fa-solid fa-chevron-down"></i>
                </Text>
              </Text>
            </Box>
            <Box>
              <Text fontSize={14} fontWeight={500}>
                Nonstop
              </Text>
              <Text fontSize={14} fontWeight={500} color="grey">
                1h 52m
              </Text>
            </Box>
            <Box>
              <Text fontSize={14} fontWeight={500}>
                SFO to LAX
              </Text>
              <Text fontSize={14} fontWeight={500} color="grey">
                AA 166
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* my flights right */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        gap={2}
      >
        <Box
          width="76px"
          height={92}
          borderRadius={5}
          border="1px solid #ddd"
          box-shadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={4}
          cursor="pointer"
        >
          <Text fontSize={17} fontWeight={600}>
            $152
          </Text>
          <Text fontSize={12} fontWeight="bold" color="grey">
            Main
          </Text>
        </Box>
        <Box
          width="76px"
          height={92}
          borderRadius={5}
          border="1px solid #ddd"
          box-shadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={4}
          cursor="pointer"
        >
          <Text fontSize={17} fontWeight={600}>
            $204
          </Text>
          <Text fontSize={12} fontWeight="bold" color="grey">
            Comfort+
          </Text>
        </Box>
        <Box
          width="76px"
          height={92}
          borderRadius={5}
          border="1px solid #ddd"
          backgroundColor="var(--background-color)"
          box-shadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={4}
          cursor="pointer"
        >
          <Text fontSize={17} fontWeight={600}></Text>
          <Text fontSize={12} fontWeight="bold" color="grey"></Text>
        </Box>
        <Box
          width="76px"
          height={92}
          borderRadius={5}
          border="1px solid #ddd"
          box-shadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={4}
          cursor="pointer"
        >
          <Text fontSize={17} fontWeight={600}>
            $204
          </Text>
          <Text fontSize={12} fontWeight="bold" color="grey">
            Comfort+
          </Text>
        </Box>
        <Box
          width="76px"
          height={92}
          borderRadius={5}
          border="1px solid #ddd"
          backgroundColor="var(--background-color)"
          box-shadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={4}
          cursor="pointer"
        >
          <Text fontSize={17} fontWeight={600}></Text>
          <Text fontSize={12} fontWeight="bold" color="grey"></Text>
        </Box>
      </Box>
    </Box>
  );
}

export default MyFlightCard;
