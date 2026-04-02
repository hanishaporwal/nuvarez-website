const express = require("express");
const mongoose = require("mongoose");

const app = express();

// middleware 
app.use(express.json());

// routes
const contactRoutes = require("./routes/contact");
app.use("/contact", contactRoutes);

const chatbotRoutes = require("./routes/chatbot");
app.use("/chatbot", chatbotRoutes);
// MongoDB connection
mongoose.connect(
  "mongodb://admin404:NUVAREZ@ac-9zpmyhd-shard-00-00.lnqfwjo.mongodb.net:27017,ac-9zpmyhd-shard-00-01.lnqfwjo.mongodb.net:27017,ac-9zpmyhd-shard-00-02.lnqfwjo.mongodb.net:27017/nuvarezDB?ssl=true&replicaSet=atlas-6na7gh-shard-0&authSource=admin&retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB connected ✅"))
.catch((err) => console.log("MongoDB Error ❌:", err));

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});