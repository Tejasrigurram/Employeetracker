import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  clockInTime: {
    type: Date,
  },
  clockOutTime: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['Present', 'Absent', 'Late'],
    default: 'Absent',
  },
});

const Attendance = mongoose.model('Attendance', AttendanceSchema);
export default Attendance;