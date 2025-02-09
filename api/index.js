const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("../routes/index");

const app = express();

require("../config/DB");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/", indexRouter);

if (process.env.NODE_ENV === "development")
  app._router.stack.forEach(consoleRoutes.bind(null, []));

module.exports = app;
