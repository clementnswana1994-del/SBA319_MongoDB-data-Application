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

  image: {
    type: String,
    required: false
  },
},
{
    timestamps: true
}
);

const Product = mongoose.model("Product", ProductSchema, "Products");

export default Product;
