import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const emailConfig = {
  host: "smtp.elasticemail.com",
  port: "2525",
  auth: {
    user: "isholasherifdeen@gmail.com",
    pass: "47758DAAC841BAEF259D88D271AA93056A75",
  },
};

const transporter = nodemailer.createTransport(emailConfig);

app.get("/", (req, res) => {
  res.status(200).json({
    success: {
      message: "Welcome to Boogiedml Contact API",
      status_code: 200,
    },
  });
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "isholasherifdeen@gmail.com",
    to: "isholasherifdeen30@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
