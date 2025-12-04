import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  name: 
  { type: String,
     required: true },
  phone: { 
    type: String,
     required: true },
  service: { 
    type: String,
     required: true },
  date: { type: String,
     required: true },
  message: { 
    type: String },
  createdAt: { 
    type: Date,
     default: Date.now }
});

export default mongoose.model("Appointment", AppointmentSchema);
