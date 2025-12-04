
import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const appointment = await Appointment.create(data);
    res.json({ success: true, appointment });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
