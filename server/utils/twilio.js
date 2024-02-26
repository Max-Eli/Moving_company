import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const myPhoneNumber = process.env.MY_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

const sendSMS = async (message) => {
  try {
    await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: myPhoneNumber,
    });
    console.log("SMS notification sent successfully.");
  } catch (error) {
    console.error("Error sending SMS notification:", error);
  }
};

export default sendSMS;
