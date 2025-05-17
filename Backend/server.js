require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/test", require("./routes/api/test"));

// Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/schemes", require("./routes/api/schemes"));
app.use("/api/profile", require("./routes/api/profile"));
// Add other routes similarly

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
