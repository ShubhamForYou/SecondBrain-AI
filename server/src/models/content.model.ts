import mongoose from "mongoose";
const contentTypes = [
  "video",
  "image",
  "article",
  "audio",
  "notes",
  "text",
  "pdf",
];
const schema = new mongoose.Schema(
  {
    link: { type: String, required: true },
    type: {
      type: String,
      enum: contentTypes,
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 3,
    },
    tags: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);
const Content = mongoose.model("Content", schema);
export default Content;
