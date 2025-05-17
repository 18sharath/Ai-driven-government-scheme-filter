// routes/api/test.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  name: String,
});

const Test = mongoose.model("Test", TestSchema);

router.post("/add", async (req, res) => {
  try {
    const doc = new Test({ name: "Sample Document" });
    await doc.save();
    res.json({ message: "✅ Document saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
