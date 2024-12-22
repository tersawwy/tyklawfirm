const express = require("express");
const router = express.Router();
const { HfInference } = require("@huggingface/inference");

const hf = new HfInference("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");

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    const response = await hf.textGeneration({
      model: "facebook/blenderbot-400M-distill",
      inputs: message,
      parameters: {
        max_length: 100,
        temperature: 0.7,
      },
    });

    res.json({ reply: response.generated_text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
