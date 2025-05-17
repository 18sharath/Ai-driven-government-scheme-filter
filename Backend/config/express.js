const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

module.exports = (app) => {
  // Enable CORS
  app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
    })
  );

  // Security headers
  app.use(helmet());

  // Logger
  app.use(morgan("dev"));

  // Body parsers
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Cookie parser
  app.use(cookieParser());

  // Static files (if needed)
  app.use(express.static(path.join(__dirname, "../../client/build")));
};
