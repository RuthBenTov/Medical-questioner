import express from "express";
// import nodemailer from "nodemailer";

export async function sendMail(req:any) {
  try {
    //     const {getSignsOfPaintOject}= req.body;
    //     console.log(getSignsOfPaintOject)
    //   const nodemailer = require("nodemailer");
    //   const transporter = nodemailer.createTransport({
    //     service: "gmail",
    //     auth: {
    //       user: process.env.EMAIL,
    //       pass: process.env.PASSWORD,
    //     },
    //   });
    //   const mailOptions = {
    //     // from: '"Rachel Haham- Capture the moment" <RachelH@gmail.com>',
    //     // to: `${email}`,
    //     // subject: `${subject}`,
    //     // text: "Your request is DENIED, Please choose new date event",
    //     // html: `${content}`,
    //   };
    //   transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log("Email sent: " + info.response);
    //     }
    //   });
    console.log("hi")
  } catch (error) {
    console.error(error);
  }
}
