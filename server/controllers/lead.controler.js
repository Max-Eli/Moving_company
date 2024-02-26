import Lead from "../models/lead.model.js";
import sendSMS from "../utils/twilio.js";
import { sendEmailWithLeadInfo } from "../utils/nodemailer.js"; // Import the sendEmailWithLeadInfo function

// create new
async function createLead(req, res) {
  try {
    const newLead = await Lead.create(req.body);
    // Construct message for SMS notification
    const message = `New lead received!\nName: ${newLead.Name}\nEmail: ${newLead.Email}\nPhone: ${newLead.Phone}`;
    // Send SMS notification
    await sendSMS(message);
    // Send email notification
    await sendEmailWithLeadInfo(newLead);
    res.json(newLead);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getAllLeads(req, res) {
  try {
    const Leads = await Lead.find();
    res.json(Leads);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export { createLead, getAllLeads };
