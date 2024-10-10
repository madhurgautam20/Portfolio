import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const DB = 'mongodb+srv://madhurgautam99:90909090@cluster0.i6lv8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(DB)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("No connection", err);
  });

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

const server = express();
server.use(cors());
server.use(bodyParser.json());

server.post("/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const doc = await contact.save();
    console.log(doc);
    res.status(200).json(doc);
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).send("Failed to save contact message");
  }
});

server.listen(8080, () => {
  console.log("server connected");
});
