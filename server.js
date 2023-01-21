const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(3001, () => console.log("Server is running"));
