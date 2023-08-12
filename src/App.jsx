import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import InventoryDashboard from "./components/InventoryDashboard";
import DepartmentsPage from "./components/DepartmentsPage";
import ProductListPage from "./components/ProductListPage";
import ProductManagement from "./components/ProductManagement";
import ProductDetailsPage from "./components/DetailedProductPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Flex>
          <ToastContainer />
          <ScrollToTop />
          <Sidebar />
          <Box flexBasis="80%">
            <Routes>
              <Route path="/" element={<InventoryDashboard />} />
              <Route path="/departments" element={<DepartmentsPage />} />
              <Route
                path="/departments/:department"
                element={<ProductListPage />}
              />
              <Route
                path="/product-management"
                element={<ProductManagement />}
              />
              <Route
                path="/departments/:department/:productId"
                element={<ProductDetailsPage />}
              />
            </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
