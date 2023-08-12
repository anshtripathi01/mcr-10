import React from 'react';
import { Box, Text, SimpleGrid, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { inventoryData } from '../data/inventoryData';

function InventoryDashboard() {
  const totalStock = inventoryData.reduce((total, product) => total + Number(product.stock), 0);
  const totalDelivered = inventoryData.reduce((total, product) => total + Number(product.delivered), 0);
  const lowStockItems = inventoryData.filter(product => Number(product.stock) <= 10);

  return (
    <Box p={4}>
      <Text fontSize="xl">Inventory Dashboard</Text>
      <SimpleGrid columns={3} spacing={4} mt={4}>
        <Stat>
          <StatLabel>Total Stock</StatLabel>
          <StatNumber color="green.400" fontWeight="bold">{totalStock}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Total Delivered</StatLabel>
          <StatNumber color="orange.400" fontWeight="bold">{totalDelivered}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Low Stock Items</StatLabel>
          <StatNumber color="red.400" fontWeight="bold">{lowStockItems.length}</StatNumber>
        </Stat>
      </SimpleGrid>
    </Box>
  );
}

export default InventoryDashboard;
