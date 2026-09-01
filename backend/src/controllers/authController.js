import authService from "../services/auth.service.js";
import asyncHandler from "../utils/asyncHandler.js";

const register = asyncHandler(async (req, res) => {
  const result = await authService.register(req.body);

  return res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: result,
  });
});

const login = asyncHandler(async (req, res) => {
  const result = await authService.login(req.body);

  return res.status(200).json({
    success: true,
    message: "Login successful",
    data: result,
  });
});

const refreshToken = asyncHandler(async (req, res) => {
  const result = await authService.refreshToken(req.body);

  return res.status(200).json({
    success: true,
    message: "Token refreshed successfully",
    data: result,
  });
});

export default {
  register,
  login,
  refreshToken,
};
