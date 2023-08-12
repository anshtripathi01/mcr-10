import React from "react";
import { Link } from "react-router-dom";
import { Box, VStack, Divider, Flex, Heading } from "@chakra-ui/react";

function Sidebar() {
  return (
    <Box
      position="sticky"
      top={0}
      left={0}
      height="100vh"
      width="240px"
      padding="20px"
      background="gray.800"
      color="white"
    >
      <Flex align="center" mb={8}>
        <Heading size="lg" fontWeight="bold" color="blue.600">
          Inventory App
        </Heading>
      </Flex>
      <VStack align="stretch" spacing={4}>
        <Link to="/">Inventory Dashboard</Link>
        <Divider />
        <Link to="/departments">Departments Page</Link>
        <Divider />
        <Link to="/product-management">Product Management</Link>
        <Divider />
        <Link to="/departments/Kitchen">Products</Link>
      </VStack>
    </Box>
  );
}

export default Sidebar;
