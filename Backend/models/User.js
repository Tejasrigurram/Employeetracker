import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true }, // e.g., "Employee", "Manager", "Team Lead"
});

const User = mongoose.model('User', UserSchema);
export default User;