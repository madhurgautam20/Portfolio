import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/contact");
  console.log("db connected")
}
const contactSchema = new mongoose.Schema({
    name: String,
    email:String ,
    message: String,
  });
  const Contact = mongoose.model('Contact', contactSchema);

  const server = express();
  server.use(cors());
  server.use(bodyParser.json());

  server.post("/contact" ,async(req , res)=>{
    try {
        const contact =new Contact(req.body);
        const doc = await contact.save();
        console.log(doc);
        res.status(200).json(doc);
        
    } catch (error) {
        console.error("Error saving contact message:" , error)
        res.status(500).send("Failed to save contact message");
    }
  });
  server.listen(8080,()=>{
    console.log("server connected")
  })