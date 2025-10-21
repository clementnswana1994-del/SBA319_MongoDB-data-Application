import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true,
    default: 0
  },

  price: {
    type: Number,
    required: true,
    default: 0
  },
},

{
    timestamps: true
}
);

ProductSchema.index({ category: 1 });

const Product = mongoose.model("Product", ProductSchema, "Products");

export default Product;
