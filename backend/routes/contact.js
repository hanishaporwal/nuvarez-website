const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

// POST /contact
router.post("/", async (req, res) => {
    console.log("API HIT ✅");   
  console.log("BODY:", req.body);
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    res.json({
      message: "Data saved successfully ✅",
      data: newContact,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error saving data" });
  }
});

module.exports = router;