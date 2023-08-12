import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { inventoryData } from "../data/inventoryData";

function ProductDetailsPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = inventoryData.find(
    (item) => item.id.toString() === productId.toString()
  );

  if (!product) {
    return <Box>Product not found</Box>;
  }

  return (
    <Box p={4}>
      <Button onClick={() => navigate(-1)} mb={4}>
        Back to Product Listing
      </Button>
      <Heading mb={4}>{product.name}</Heading>
      <Box d="flex" justifyContent="center" alignItems="center" mb={4}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          maxH="300px"
          maxW="100%"
        />
      </Box>
      <Box mb={4}>
        <Text>
          <strong>Department:</strong> {product.department}
        </Text>
        <Text>
          <strong>Price:</strong> ${product.price}
        </Text>
        <Text>
          <strong>Stock:</strong> {product.stock}
        </Text>
        <Text>
          <strong>SKU:</strong> {product.sku}
        </Text>
        <Text>
          <strong>Supplier:</strong> {product.supplier}
        </Text>
        <Text>
          <strong>Delivered:</strong> {product.delivered}
        </Text>
      </Box>
      <Box mb={4}>
        <Text>
          <strong>Description:</strong> {product.description}
        </Text>
      </Box>
      <ChakraLink href={product.imageUrl} target="_blank" color="blue.500">
        View Larger Image
      </ChakraLink>
    </Box>
  );
}

export default ProductDetailsPage;
