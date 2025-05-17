require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const configureExpress = require("./config/express");
const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");
const logger = require("./middleware/logger");

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Configure Express middleware
configureExpress(app);

// Log requests
app.use(logger);

// API Routes
app.use("/api", routes);

// Error handling middleware (must be last)
app.use(errorHandler);

// Handle 404
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
    error: `Route ${req.originalUrl} does not exist`,
  });
});

module.exports = app;
