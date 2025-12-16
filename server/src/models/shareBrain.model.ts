import mongoose from "mongoose";
const schema = new mongoose.Schema({
  hash: { type: String, required: true, unique: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
});
export const ShareBrain = mongoose.model("ShareBrain", schema);
