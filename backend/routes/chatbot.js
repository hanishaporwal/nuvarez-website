const express = require("express");
const router = express.Router();

const { getBotResponse } = require("../chatbot/chatbot");

router.post("/", (req, res) => {
  const { message } = req.body;

  const reply = getBotResponse(message);

  res.json({
    user: message,
    bot: reply,
  });
});

module.exports = router;