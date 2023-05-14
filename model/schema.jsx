import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required, unique },
  password: {
    type: String,
    required,
  },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
