import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required."], // Custom error message
    trim: true, 
    minlength: [3, "Product name must be at least 3 characters long."],
    maxlength: [100, "Product name cannot exceed 100 characters."],
  },
  service: {
    type: String,
    required: [true, "Service type is required."],
    enum: {
      // Ensures the value is one of the specified strings
      values: ["delivery", "pickup", "installation"],
      message: "{VALUE} is not a valid service type.",
    },
    default: "delivery", // Changed default to a valid enum value
  },
  price: {
    type: Number, // Price can not be below 0 and above 100,000
    required: [true, "Product price is required."],
    min: [0, "Price cannot be negative."],
    max: [100000, "Price cannot exceed 100,000."],
    default: 0,
  },
});

ProductSchema.index({ category: 1 });

const Product = mongoose.model("Product", ProductSchema, "Products");

export default Product;
