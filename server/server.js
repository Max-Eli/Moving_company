import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose.config.js";
import router from "./routes/lead.routes.js";
import sendSMS from "./utils/twilio.js";
import { sendEmailWithLeadInfo } from "./utils/nodemailer.js";

const app = express();

app.use(express.json(), cors());
app.use("/api", router);
dotenv.config();

const PORT = process.env.PORT;
dbConnect();

app.post("/api/leads", async (req, res) => {
  try {
    // Save lead to MongoDB
    // Your code to save lead to MongoDB goes here

    // Send SMS notification with lead information
    await sendSMS(req.body); // Assuming req.body contains the lead information

    // Send email notification with lead information
    const { Name, Email, Phone } = req.body; // Assuming the lead information is in req.body
    const emailText = `New lead received!\nName: ${Name}\nEmail: ${Email}\nPhone: ${Phone}`;
    await sendEmailWithLeadInfo(
      process.env.EMAIL_TO,
      "New Lead Notification",
      emailText
    );

    res.status(201).json({ message: "Lead submitted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
