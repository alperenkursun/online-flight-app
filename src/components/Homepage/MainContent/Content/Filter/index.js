// import CSS styles
import "./styles.css";

// import libraries and components
import React from "react";
import { Box, Radio, RadioGroup, Select, Text } from "@chakra-ui/react";

// caret icon variable
const CaretIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M3.204 5h9.592L8 10.481 3.204 5z" />
  </svg>
);

// radio option custom component
const RadioOption = ({ value, children, price }) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    width="100%"
  >
    <Radio
      value={value}
      borderColor="var(--primary-color)"
      _checked={{
        bg: "var(--primary-color)",
        borderColor: "var(--primary-color)",
      }}
      className="filter-radio"
    >
      {children}
    </Radio>
    {price && <Text>{price}</Text>}
  </Box>
);

const Filter = () => (
  <Box py={4} paddingTop={{ base: 0, lg: "4" }}>
    <Text fontWeight={600}>Sort By:</Text>
    <Select
      placeholder="Select option"
      backgroundColor="var(--third-color)"
      focusBorderColor="#4a1b96"
      icon={CaretIcon}
      iconColor="#4a1b96"
      my={4}
    >
      <option value="option1">Lowest Price</option>
      <option value="option2">Highest Price</option>
    </Select>

    <Text fontWeight={600}>Arrival Time</Text>
    <RadioGroup
      defaultValue="option1"
      my={4}
      display="flex"
      flexDirection="column"
      gap={1}
    >
      <RadioOption value="option1">5:00 AM - 11:59 AM</RadioOption>
      <RadioOption value="option2">12:00 PM - 5:59 PM</RadioOption>
    </RadioGroup>

    <Text fontWeight={600}>Stops</Text>
    <RadioGroup
      defaultValue="option1"
      my={4}
      display="flex"
      flexDirection="column"
      gap={1}
    >
      <RadioOption value="option1" price="230 $">
        Nonstop
      </RadioOption>
      <RadioOption value="option2" price="230 $">
        1 Stop
      </RadioOption>
      <RadioOption value="option2" price="230 $">
        2+ Stops
      </RadioOption>
    </RadioGroup>

    <Text fontWeight={600}>Airlines Included</Text>
    <RadioGroup
      defaultValue="option1"
      my={4}
      display="flex"
      flexDirection="column"
      gap={1}
    >
      <RadioOption value="option1" price="230 $">
        Turkish Airlines
      </RadioOption>
      <RadioOption value="option2" price="230 $">
        Alitalia
      </RadioOption>
      <RadioOption value="option2" price="230 $">
        Sun Express
      </RadioOption>
      <RadioOption value="option2" price="230 $">
        Lufthansa
      </RadioOption>
      <RadioOption value="option2" price="230 $">
        Air France
      </RadioOption>
      <RadioOption value="option2" price="230 $">
        Brussels Airlines
      </RadioOption>
      <RadioOption value="option2" price="230 $">
        Air Italy
      </RadioOption>
      <RadioOption value="option2" price="230 $">
        Siberia
      </RadioOption>
      <RadioOption value="option2" price="230 $">
        Pegasus
      </RadioOption>
    </RadioGroup>
  </Box>
);

export default Filter;
