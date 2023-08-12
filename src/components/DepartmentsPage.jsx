import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, SimpleGrid, Button } from '@chakra-ui/react';
import { inventoryData } from '../data/inventoryData';

function DepartmentsPage() {
  const departments = [...new Set(inventoryData.map(product => product.department))];

  return (
    <Box p={4}>
      <Text fontSize="xl">Departments Page</Text>
      <SimpleGrid columns={3} spacing={4} mt={4}>
        {departments.map(department => (
          <Link key={department} to={`/departments/${department}`}>
            <Button colorScheme="blue">{department}</Button>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default DepartmentsPage;
