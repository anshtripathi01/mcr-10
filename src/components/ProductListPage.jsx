import React, { useState } from "react";
import { Box, Heading, Select, Checkbox, Flex } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { inventoryData } from "../data/inventoryData";

function ProductListingPage() {
  const [selectedDepartment, setSelectedDepartment] =
    useState("All departments");
  const [lowStockOnly, setLowStockOnly] = useState(false);

  const filteredProducts = inventoryData.filter((product) => {
    const departmentCondition =
      selectedDepartment === "All departments" ||
      product.department === selectedDepartment;

    const stockCondition = lowStockOnly ? product.stock <= 10 : true;

    return departmentCondition && stockCondition;
  });

  return (
    <Box p={4}>
      <Heading mb={4}>Product Listing</Heading>
      <Box mb={4}>
        <Select
          onChange={(e) => setSelectedDepartment(e.target.value)}
          value={selectedDepartment}
          mr={2}
          mt={1}
        >
          <option value="All departments">All departments</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </Select>
        <Checkbox
          onChange={() => setLowStockOnly(!lowStockOnly)}
          isChecked={lowStockOnly}
          mt={2}
        >
          Low Stock Only
        </Checkbox>
      </Box>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Flex>
    </Box>
  );
}

export default ProductListingPage;
