// import libraries and components
import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  // current year variable
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" py={6} px={4} mt={20} color="var(--primary-color)">
      <Text fontSize="sm" textAlign="center">
        © {currentYear} Bu website çalışması{" "}
        <Link
          href="https://alperenkursun.netlify.app/"
          _hover={{ textDecoration: "underline" }}
          fontWeight={500}
          color="var(--primary-color)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alperen Kurşun
        </Link>{" "}
        tarafından yapılmıştır.
      </Text>
    </Box>
  );
};

export default Footer;
