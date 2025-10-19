import express from "express";

import mongoose from "mongoose";

import Product from "./Data/product.js";

const port = 3000;

const connectionString =
  "mongodb+srv://clementnswana1994_db_user:Chomba@cluster0.bt4oawr.mongodb.net/My_Data?retryWrites=true&w=majority&appName=Cluster0";
await mongoose.connect(connectionString);

console.log("connect to MongoDB");
const app = express();

app.use(express.json());

// Define a simple route
app.get("/", async (req, res) => {
  res.send("Server is running!");
});

// Create a new product
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    // const product = await productDoc.save(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all Products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(201).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one Product
app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a Product by ID
app.put("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a product by ID
app.delete("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(3000, async () => {
  console.log("Listening on port:", port);
});
