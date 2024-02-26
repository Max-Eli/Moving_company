import { model, Schema } from "mongoose";

const LeadSchema = new Schema(
  {
    Name: {
      type: String,
      required: [true, "Name is required!"],
      minlength: [2, "Name must be at least 2 characters long!"],
      maxlength: [255, "Name must be less than 255 characters long"],
    },
    Email: {
      type: String,
      required: [true, "Email is required!"],
      minlength: [2, "Email must be at least 2 characters long!"],
      maxlength: [255, "Email must be less than 255 characters long"],
    },
    Phone: {
      type: Number,
      required: [true, "Phone is required!"],
      min: [10, "Please put in a valid phone number"],
    },
    moveDate: {
      type: Date,
      required: [true, "Date is required"],
    },
    moveSize: {
      type: String,
      required: [true, "Number  of bedrooms is required"],
    },
  },
  { timestamps: true }
);

const Lead = model("Lead", LeadSchema);

export default Lead;
