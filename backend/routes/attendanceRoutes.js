const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");

// Mark Attendance
router.post("/attendance", async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;

    const attendance = new Attendance({
      employeeId,
      date,
      status
    });

   

    const savedAttendance = await attendance.save();

    res.status(201).json(savedAttendance);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

 // Get All Attendance Records
router.get("/attendance", async (req, res) => {
  try {
    const records = await Attendance.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;