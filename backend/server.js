const attendanceRoutes = require("./routes/attendanceRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", employeeRoutes);
app.use("/api", attendanceRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("HRMS Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});