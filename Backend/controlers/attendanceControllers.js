import Attendance from "../models/Attendance";

export const clockIn = async (req, res) => {
  try {
    const { employeeId, role, date } = req.body;

    const attendance = new Attendance({ employeeId, role, date, clockIn: new Date().toLocaleTimeString() });
    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const clockOut = async (req, res) => {
  try {
    const { employeeId, date } = req.body;

    const attendance = await Attendance.findOneAndUpdate(
      { employeeId, date },
      { clockOut: new Date().toLocaleTimeString() },
      { new: true }
    );
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};