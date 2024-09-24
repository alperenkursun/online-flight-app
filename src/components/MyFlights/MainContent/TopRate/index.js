// import libraries and components
import React from "react";
import {
  Box,
  Button,
  Container,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

// import images
import stars from "../../../../assets/images/stars.webp";

const TopRate = () => (
  <Container
    as="main"
    maxW="1124px"
    p={4}
    display="flex"
    flexDirection={{ base: "column", lg: "row" }}
    justifyContent="space-between"
    alignItems="center"
    gap={{ base: 3, lg: 0 }}
    boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
  >
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap={5}
    >
      {["Times", "Stops", "Airlines", "Airports", "Amenities"].map((item) => (
        <Button
          key={item}
          variant="outline"
          borderColor="#ddd"
          color="#444"
          height={35}
          fontSize={14}
          fontWeight={500}
        >
          {item}
        </Button>
      ))}
      <Menu>
        <MenuButton
          as={Button}
          backgroundColor="initial"
          color="initial"
          borderRadius="0"
          p="0"
          m="0"
          fontSize="inherit"
          lineHeight="inherit"
          boxShadow="none"
          border="none"
          _hover={{ backgroundColor: "transparent", boxShadow: "none" }}
          _focus={{ backgroundColor: "transparent", boxShadow: "none" }}
          _active={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Text
            fontSize={14}
            fontWeight={500}
            verticalAlign="center"
            color="blue.400"
            display="flex"
            alignItems="center"
          >
            Edit Search{" "}
            <Text as="span" fontSize={10} ml={1}>
              <i className="fa-solid fa-chevron-down"></i>
            </Text>
          </Text>
        </MenuButton>
        <MenuList fontSize={14}>
          <MenuItem>Placeholder 1</MenuItem>
          <MenuItem>Placeholder 2</MenuItem>
          <MenuItem>Placeholder 3</MenuItem>
        </MenuList>
      </Menu>
    </Box>

    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap={5}
    >
      {[...Array(5)].map((_, index) => (
        <React.Fragment key={index}>
          <Image src={stars} alt="Stars" width={45} cursor="pointer" />
          {index < 4 && (
            <Box width="1px" height={30} backgroundColor="#ddd"></Box>
          )}
        </React.Fragment>
      ))}
    </Box>
  </Container>
);

export default TopRate;
