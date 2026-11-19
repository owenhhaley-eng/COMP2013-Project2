import mongoose from "mongoose";

const clothesItemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  fit: {
    type: String,
    enum: ["men", "women", "kids"],
    required: true,
  },
  category: {
    type: String,
    enum: ["t-shirt", "shirt", "hoodie", "pants", "shorts"],
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    enum: ["XS", "S", "M", "L", "XL", "XXL"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  itemQuantity: {
    type: Number,
    required: true,
  },
});

//export the model
export default mongoose.model("ClothesItem", clothesItemSchema, "clothesItems");
