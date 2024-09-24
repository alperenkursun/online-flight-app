// import libraries and components
import React from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

const Sort = () => (
  <Box
    display="flex"
    flexDirection={{ base: "column", sm: "row" }}
    justifyContent="space-between"
    alignItems="center"
    my={5}
  >
    <Box display="flex" alignItems="center" gap={1}>
      <Text as="span" fontSize={14}>
        Sort By:
      </Text>
      <Menu>
        <MenuButton
          as="button"
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
            fontWeight={600}
            verticalAlign="center"
            color="#000"
            display="flex"
            alignItems="center"
          >
            Recommended
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
    <Box display="flex" alignItems="center" gap={2}>
      <Text as="span" color="blue.400" fontSize={16}>
        <i className="fa-solid fa-circle-info"></i>
      </Text>
      <Text as="span" fontWeight={500}>
        Avg Fare:{" "}
        <Text as="span" fontWeight={600}>
          $225
        </Text>
      </Text>
    </Box>
  </Box>
);

export default Sort;
