const mongoose = require("mongoose");

const Role_typeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 34,
      unique: true
    }
  }
  
);

module.exports = mongoose.model("Role_type", Role_typeSchema);
