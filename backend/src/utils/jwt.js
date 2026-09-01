import jwt from "jsonwebtoken";
import config from "../config/config.js";

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    config.jwt_secret,
    {
      expiresIn: config.jwt_expires_in,
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
    },
    config.jwt_refresh_secret,
    {
      expiresIn: config.jwt_refresh_expires_in,
    }
  );
};

const verifyAccessToken = (token) => {
  return jwt.verify(token, config.jwt_secret);
};

const verifyRefreshToken = (token) => {
  return jwt.verify(token, config.jwt_refresh_secret);
};

export {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
