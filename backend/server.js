const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", require("./routes/User"));
app.use("/api/groups", require("./routes/Group"));
app.use("/api/user-expenses", require("./routes/UserExpenses"));
app.use("/api/group-expenses", require("./routes/GroupExpenses"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
