import userService from "../services/user.service.js";
import asyncHandler from "../utils/asyncHandler.js";

const getMyProfile = asyncHandler(async (req, res) => {
  const user = await userService.getMyProfile(req.user._id);

  return res.status(200).json({
    success: true,
    message: "User retrieved successfully",
    data: user,
  });
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await userService.getAllUsers();

  return res.status(200).json({
    success: true,
    message: "Users retrieved successfully",
    data: users,
  });
});

export default {
  getMyProfile,
  getAllUsers,
};
