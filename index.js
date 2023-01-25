const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect to the database
connectDB();

const port = process.env.PORT || 4000;

// Enable express.json
app.use(express.json({ extended: true }));

// Enable cors
const corsOptions = {
  origin: process.env.FRONTEND_URL,
};
app.use(cors(corsOptions));

// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/host", require("./routes/host"));
app.use("/api/payment", require("./routes/payment"));

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
