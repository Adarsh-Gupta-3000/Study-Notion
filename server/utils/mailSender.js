const nodemailer = require("nodemailer")
require("dotenv").config()

const mailSender = async (email, title, body) => {
  try {
    //kis id se mail sent krna h

    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      service: "gmail",
      port: 25,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    let info = await transporter.sendMail({
      from: `"Study Notion" <${process.env.MAIL_USER}>`,
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    })
    console.log(info)
    return info
  } catch (error) {
    console.log(error.message)
    return error
  }
}

module.exports = mailSender
