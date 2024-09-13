const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const { logger } = require("./middlewares/logger");
const userRoutes = require("./routes/user-route");
const categoryRoutes = require("./routes/category-route");
const authRoutes = require("./routes/auth-route");
const recordRoutes = require("./routes/record-route");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/categories", categoryRoutes);
app.use("/records", recordRoutes);

app.get("/", (_, res) => {
  res.send("Welcome Expense Tracker API");
});

app.listen(PORT, () => {
  console.log(`Server is running at localhost: ${PORT}`);
});
