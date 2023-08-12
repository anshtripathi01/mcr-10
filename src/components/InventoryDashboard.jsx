import React from 'react';
import { Box, Text, SimpleGrid, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { inventoryData } from '../data/inventoryData';

function InventoryDashboard() {
  const totalStock = inventoryData.reduce((total, product) => total + product.stock, 0);
  const totalDelivered = inventoryData.reduce((total, product) => total + product.delivered, 0);
  const lowStockItems = inventoryData.filter(product => product.stock <= 10);

  return (
    <Box p={4}>
      <Text fontSize="xl">Inventory Dashboard</Text>
      <SimpleGrid columns={3} spacing={4} mt={4}>
        <Stat>
          <StatLabel>Total Stock</StatLabel>
          <StatNumber>{totalStock}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Total Delivered</StatLabel>
          <StatNumber>{totalDelivered}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Low Stock Items</StatLabel>
          <StatNumber>{lowStockItems.length}</StatNumber>
        </Stat>
      </SimpleGrid>
    </Box>
  );
}

export default InventoryDashboard;
