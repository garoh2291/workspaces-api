const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const userRouter = require("./routes/users");
const workspaceRouter = require("./routes/workspaces");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/workspaces", workspaceRouter);

module.exports = app;
