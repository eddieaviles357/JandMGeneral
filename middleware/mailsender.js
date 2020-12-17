const nodemailer = require("nodemailer");


const mailSender = (req, res, next) => {
  const subj = "Hello from Node js";
  const txt = "This is a test!";
  const srcTo = "eduardoaviles357@yahoo.com";
  // const srcTo = "eduardoaviles357@gmail.com";
  const bodyHTML = "<h1>This is a test html</h1><div>this is part of the div</div>";

  SendEmail(subj, txt, srcTo, bodyHTML);
  next();
  return;
};


function SendEmail(subject, text, to, html) {
  
  // create reusable transporter object using the default SMTP transport 
  const transporter = nodemailer.createTransport({
    // host: 'smtp.mail.yahoo.com',
    // host: 'smtp.gmail.com',
    // host: 'mail.mgcinc.com',
    // name: 'office365',
    // name: 'yahoo',
    // name: 'gmail',
    // host: 'smtp.office365.com',
    // port:   587,
    // port:   465,
    // secureConnection: false, // true for 465, false for other ports
    // secure: false,
    // auth: {
    //     user: process.env.USER_NAME,
    //     pass: process.env.PASSWORD
    // },
    // tls: {
    //   rejectUnauthorized: false,
    //   ciphers: 'SSLv3'
    // }
    // STARTTLS: {
    //   rejectUnauthorized: false,
    //   ciphers: 'SSLv3'
    // }

    // test
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.USER_NAME,
        pass: process.env.PASSWORD  
    }
  });
  
  // setup e-mail data with unicode symbols 
  let mailOptions = {
    from: process.env.USER_NAME,
    to,
    subject,
    text,
    html
  };
  
  // send mail with defined transport object 
  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      return console.log("ERROR::",error);
    }
    console.log("message sent");
    console.log(info);
    console.log("COPY URL on the browser and see the message")
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
}

module.exports = mailSender;