import React from 'react';
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="transform 0.2s"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      _hover={{ transform: 'scale(1.05)' }}
      w="15rem"
      m="1rem"
      h="24rem"
    >
      <Image src={product.imageUrl} alt={product.name} h="200px" objectFit="cover" w="250px" />
      <Box p={4}>
        <Text mt={2} fontWeight="semibold" fontSize="lg">
          {product.name}
        </Text>
        <Text color="gray.600">${product.price}</Text>
        <Text color="gray.600">Stock: {product.stock}</Text>
        <Box mt={4}>
          <Link to={`/departments/${product.department}/${product.id}`}>
            <Button colorScheme="blue" size="sm">
              View Details
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductCard;
