import express from "express";
import { ShareBrain } from "../models/shareBrain.model.js";
import crypto from "crypto";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import Content from "../models/content.model.js";
const router = express.Router();

router.post("/share", authMiddleware, async (req, res) => {
  try {
    const { share } = req.body;
    if (share === undefined || share === null || share === "") {
      return res.status(422).json({ message: "Share data is required " });
    }
    if (share === "false" || share === false) {
      const shareBrainExist = await ShareBrain.findOne({
        // @ts-ignore
        userId: req.userId,
      });
      if (shareBrainExist) {
        await ShareBrain.deleteOne({
          // @ts-ignore
          userId: req.userId,
        });
        return res.status(200).json({ message: "Share disabled successfully" });
      }
      return res
        .status(404)
        .json({ message: "No share setting found to disable" });
    }
    const shareBrainExist = await ShareBrain.findOne({
      // @ts-ignore
      userId: req.userId,
    });
    if (shareBrainExist) {
      return res
        .status(409)
        .json({
          message: `http://localhost:7001/api/v1/brain/${shareBrainExist.hash}`,
        });
    }
    const hash = await crypto.randomBytes(6).toString("base64url");
    const shareBrain = await ShareBrain.create({
      hash: hash,
      // @ts-ignore
      userId: req.userId,
    });
    return res.status(201).json({
      message: "Share enabled successfully",
      hash: `http://localhost:7001/api/v1/brain/${shareBrain.hash}`,
    });
  } catch (err) {
    // @ts-ignore
    return res.status(500).json({ error: err.message });
  }
});

router.get("/:hash", async (req, res) => {
  try {
    const hash = req.params.hash;
    const hashExist = await ShareBrain.findOne({ hash: hash });
    if (!hashExist) {
      return res.status(404).json({ message: "Shared brain not found" });
    }
    const shareBrain = await Content.find({
      userId: hashExist.userId,
    })
      .populate("userId", "username")
      .sort({ createdAt: -1 });
    return res.status(200).json({ shareBrain });
  } catch (err) {
    // @ts-ignore
    return res.status(500).json({ error: err.message });
  }
});
export default router;
