import express from "express";
import Content from "../models/content.model.js";
import User from "../models/user.model.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    //@ts-ignore
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const { title, link, type, tags } = req.body;
    if (!title || !link || !type) {
      return res.status(400).send({ message: "Missing required fields" });
    }
    const titleExists = await Content.findOne({ title, userId: user._id });
    if (titleExists) {
      return res
        .status(409)
        .json({ message: `Content with this ${title} title already exists` });
    }
    const content = new Content({
      title,
      link,
      type: type?.toLowerCase(),
      userId: user._id,
      tags: tags?.split(",").map((tag: string) => tag.trim().toLowerCase()),
    });
    await content.save();
    return res
      .status(201)
      .json({ message: "Content created successfully", content });
  } catch (err) {
    // @ts-ignore
    return res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const contents = await Content.find({
      // @ts-ignore
      userId: req.userId,
    })
      .sort({ createdAt: -1 })
      .populate("userId", "username");
    return res.status(200).json({ contents });
  } catch (error) {
    // @ts-ignore
    return res.status(500).json({ error: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const content = await Content.findOne({ _id: id });
    if (!content) {
      return res.status(404).json({ message: "Content not found" });
    }
    // @ts-ignore
    await Content.deleteOne({ _id: id, userId: req.userId });
    return res
      .status(200)
      .json({ message: `${content.title} deleted successfully` });
  } catch (error) {
    // @ts-ignore
    return res.status(500).json({ error: error.message });
  }
});

export default router;
