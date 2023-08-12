import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  Select,
  Button,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { inventoryData } from "../data/inventoryData";
import { toast } from "react-toastify";

function ProductManagement() {
  const [formData, setFormData] = useState({
    department: "Kitchen",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNumberChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: uuidv4(),
      ...formData,
    };
    inventoryData.push(newProduct);
    localStorage.setItem("inventoryData", JSON.stringify(inventoryData));
    setFormData({
      department: "Kitchen",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      sku: "",
      supplier: "",
      delivered: 0,
      imageUrl: "",
    });
    toast.success("New product added successfully!",{autoClose:1000})
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Product Management</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={3}>
          <FormLabel>Department</FormLabel>
          <Select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </Select>
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Product Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Stock</FormLabel>
          <NumberInput
            name="stock"
            value={formData.stock}
            onChange={(value) => handleNumberChange("stock", value)}
            required
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>SKU</FormLabel>
          <Input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Supplier</FormLabel>
          <Input
            type="text"
            name="supplier"
            value={formData.supplier}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Items Delivered</FormLabel>
          <NumberInput
            name="delivered"
            value={formData.delivered}
            onChange={(value) => handleNumberChange("delivered", value)}
            required
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Item Image URL</FormLabel>
          <Input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Add Product
        </Button>
      </form>
    </Box>
  );
}

export default ProductManagement;
