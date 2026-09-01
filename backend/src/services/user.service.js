import User from "../models/User.js";
import { AppError } from "../utils/AppError.js";

const getMyProfile = async (userId) => {
  const user = await User.findById(userId).select("-password");

  if (!user) {
    throw new AppError("User not found.", 404);
  }

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
};

const getAllUsers = async () => {
  const users = await User.find().select("-password");
  return users;
};

export default {
  getMyProfile,
  getAllUsers,
};
