import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { verifyAccessToken } from "../utils/jwt.js";
import asyncHandler from "../utils/asyncHandler.js";

const protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token",
      });
    }

    const decoded = verifyAccessToken(token);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, user not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, token failed",
    });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.role.includes("ADMIN")) {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "Not authorized as admin",
    });
  }
};

const isVendor = (req, res, next) => {
  if (req.user && req.user.role.includes("VENDOR")) {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "Not authorized as vendor",
    });
  }
};

const isCustomer = (req, res, next) => {
  if (req.user && req.user.role.includes("CUSTOMER")) {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "Not authorized as customer",
    });
  }
};

export default {
  protect,
  isAdmin,
  isVendor,
  isCustomer,
};
