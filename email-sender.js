const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  auth: {
    user: "gomycode_2023@outlook.com",
    pass: "Gomycode2023",
  },
});

const mailOptions = {
  from: '"Fred Foo 👻" <gomycode_2023@outlook.com>',
  to: "rahmadhaouadi7@gmail.com",
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>", // html body
};
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
