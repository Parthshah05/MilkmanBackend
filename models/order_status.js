const mongoose = require("mongoose");

const Order_statusSchema = new mongoose.Schema(
  {
    status: {
        type: String,
        default: "Processing",
        enum: ["Cancelled", "Delivered", "Shipped", "Processing", "Recieved"]
      }
  }
  
);

module.exports = mongoose.model("Order_status", Order_statusSchema);
