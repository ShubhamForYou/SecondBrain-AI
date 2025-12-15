import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      lowercase: true,
    },
  },
  { timestamps: true }
);
const Tag = mongoose.model("Tag", schema);
export default Tag;
