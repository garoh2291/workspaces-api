const { Schema, model } = require("mongoose");

const workspaceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  slug: {
    type: String,
    required: true,
    index: { unique: true },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Workspace", workspaceSchema);
