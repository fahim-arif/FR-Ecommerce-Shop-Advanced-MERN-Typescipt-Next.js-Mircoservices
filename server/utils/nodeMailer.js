import nodemailer from "nodemailer";

export const mailRegister = (name, email) => {
  console.log(name);
  console.log(email);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "frstorebd@gmail.com",
      pass: "sunlite.1245209", // naturally, replace both with your real credentials or an application-specific password
    },
  });

  const mailOptions = {
    from: "frstorebd@gmail.com",
    to: email,
    subject: "User Registration",
    html: `<p>Hello ${name}, You have successfully created an account in FR Store. Stay Tuned. Thank you </p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
