import { AppError } from "../utils/AppError.js";

const errorHandler = (err, req, res, next) => {
  console.error(`[ERROR]: ${req.method} ${req.url} ->`, err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      data: null,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Something went wrong. Please try again later.",
    data: null,
  });
};

export default errorHandler;