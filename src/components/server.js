import axios from 'axios'


const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false,
  auth: {
    user: "your-email@example.com",
    pass: "your-password"
  }
});

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: email,
    to: "recipient@example.com",
    subject: "New message from contact form",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.send("Email sent");
    }
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});