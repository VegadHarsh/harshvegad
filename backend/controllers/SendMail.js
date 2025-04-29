import nodemailer from "nodemailer";

const SendMail = async (req, res) => {

    let testaccount = await nodemailer.createTestAccount();

    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
            user: "harshvegad135@gmail.com",
            pass: "Hvx@101359",
        },
    })
    
    let info = await transporter.SendMail({
        from: '"Harsh Vegad" <harshevagd135@gmail.com>', // sender address
        to: "harshvegad135@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Send the mail</b>", // html body
    });

    res.send(info);     
};


export default SendMail;