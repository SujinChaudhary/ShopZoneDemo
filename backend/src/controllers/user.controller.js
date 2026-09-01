import userService from "../services/user.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

const getMyProfile = asyncHandler(async (req, res) => {
  const user = await userService.getMyProfile(req.user._id);

  return res.status(200).json(new ApiResponse(200, "User retrieved successfully", user));
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await userService.getAllUsers();

  return res.status(200).json(new ApiResponse(200, "Users retrieved successfully", users));
});

export default {
  getMyProfile,
  getAllUsers,
};
