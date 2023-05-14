const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

module.exports = model("User", userSchema);
