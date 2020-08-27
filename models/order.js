const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const cartSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: "Product",
    required: true,
  },
  price: Number,
});

const cart = mongoose.model("Cart", cartSchema);

const orderSchema = new mongoose.Schema(
  {
    products: [cartSchema],
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      default: "Recieved",
      enum: ["Cancelled", "Delivered", "Shipped", "Processing", "Recieved"],
    },
    amount: {
      type: Number,
    },
    quantity: {
      type: Number,
      default: 1,
      //   max: 5,
    },
  },
  { timestamps: true }
);

const order = mongoose.model("Order", orderSchema);

module.exports = { cart, order };
