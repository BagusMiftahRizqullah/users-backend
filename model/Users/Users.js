const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UsersSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const UsersSchemas = mongoose.model("users", UsersSchema);
module.exports = UsersSchemas;
