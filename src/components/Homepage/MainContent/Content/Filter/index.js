// import styles
import "./styles.css";

// libraries and components start
import React from "react";
import { Box, Radio, RadioGroup, Select, Text } from "@chakra-ui/react";

function Filter() {
  // select icon start
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

  return (
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
        <Radio
          value="option1"
          htmlFor="option"
          borderColor="var(--primary-color)"
          _checked={{
            bg: "var(--primary-color)",
            borderColor: "var(--primary-color)",
          }}
          className="filter-radio"
        >
          5:00 AM - 11:59 AM
        </Radio>

        <Radio
          value="option2"
          htmlFor="option"
          borderColor="var(--primary-color)"
          _checked={{
            bg: "var(--primary-color)",
            borderColor: "var(--primary-color)",
          }}
          className="filter-radio"
        >
          12:00 PM - 5:59 PM
        </Radio>
      </RadioGroup>
      <Text fontWeight={600}>Stops</Text>
      <RadioGroup
        defaultValue="option1"
        my={4}
        display="flex"
        flexDirection="column"
        gap={1}
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Radio
            value="option1"
            htmlFor="option"
            borderColor="var(--primary-color)"
            _checked={{
              bg: "var(--primary-color)",
              borderColor: "var(--primary-color)",
            }}
            className="filter-radio"
          >
            Nonstop
          </Radio>
          <Text>230 $</Text>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Radio
            value="option2"
            htmlFor="option"
            borderColor="var(--primary-color)"
            _checked={{
              bg: "var(--primary-color)",
              borderColor: "var(--primary-color)",
            }}
            className="filter-radio"
          >
            1 Stop
          </Radio>
          <Text>230 $</Text>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Radio
            value="option2"
            htmlFor="option"
            borderColor="var(--primary-color)"
            _checked={{
              bg: "var(--primary-color)",
              borderColor: "var(--primary-color)",
            }}
            className="filter-radio"
          >
            2+ Stops
          </Radio>
          <Text>230 $</Text>
        </Box>
      </RadioGroup>
      <Text fontWeight={600}>Airlines İncluded</Text>
      <RadioGroup
        defaultValue="option1"
        my={4}
        display="flex"
        flexDirection="column"
        gap={1}
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Radio
            value="option1"
            htmlFor="option"
            borderColor="var(--primary-color)"
            _checked={{
              bg: "var(--primary-color)",
              borderColor: "var(--primary-color)",
            }}
            className="filter-radio"
          >
            Turkish Airlines
          </Radio>
          <Text>230 $</Text>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Radio
            value="option2"
            htmlFor="option"
            borderColor="var(--primary-color)"
            _checked={{
              bg: "var(--primary-color)",
              borderColor: "var(--primary-color)",
            }}
            className="filter-radio"
          >
            Alitalia
          </Radio>
          <Text>230 $</Text>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Radio
            value="option2"
            htmlFor="option"
            borderColor="var(--primary-color)"
            _checked={{
              bg: "var(--primary-color)",
              borderColor: "var(--primary-color)",
            }}
            className="filter-radio"
          >
            Sun Express
          </Radio>
          <Text>230 $</Text>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Radio
            value="option2"
            htmlFor="option"
            borderColor="var(--primary-color)"
            _checked={{
              bg: "var(--primary-color)",
              borderColor: "var(--primary-color)",
            }}
            className="filter-radio"
          >
            Lufthansa
          </Radio>
          <Text>230 $</Text>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Radio
            value="option2"
            htmlFor="option"
            borderColor="var(--primary-color)"
            _checked={{
              bg: "var(--primary-color)",
              borderColor: "var(--primary-color)",
            }}
            className="filter-radio"
          >
            Air France
          </Radio>
          <Text>230 $</Text>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Radio
            value="option2"
            htmlFor="option"
            borderColor="var(--primary-color)"
            _checked={{
              bg: "var(--primary-color)",
              borderColor: "var(--primary-color)",
            }}
            className="filter-radio"
          >
            Brussels Airlines
          </Radio>
          <Text>230 $</Text>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Radio
            value="option2"
            htmlFor="option"
            borderColor="var(--primary-color)"
            _checked={{
              bg: "var(--primary-color)",
              borderColor: "var(--primary-color)",
            }}
            className="filter-radio"
          >
            Air Italy
          </Radio>
          <Text>230 $</Text>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Radio
            value="option2"
            htmlFor="option"
            borderColor="var(--primary-color)"
            _checked={{
              bg: "var(--primary-color)",
              borderColor: "var(--primary-color)",
            }}
            className="filter-radio"
          >
            Siberia
          </Radio>
          <Text>230 $</Text>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Radio
            value="option2"
            htmlFor="option"
            borderColor="var(--primary-color)"
            _checked={{
              bg: "var(--primary-color)",
              borderColor: "var(--primary-color)",
            }}
            className="filter-radio"
          >
            Pegasus
          </Radio>
          <Text>230 $</Text>
        </Box>
      </RadioGroup>
    </Box>
  );
}

export default Filter;
