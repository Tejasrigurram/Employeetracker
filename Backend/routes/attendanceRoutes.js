const express = require("express");
const { clockIn, clockOut, getAttendance } = require("../controllers/attendanceController");

const router = express.Router();

router.post("/clock-in", clockIn);
router.post("/clock-out", clockOut);
router.get("/", getAttendance);

module.exports = router;
