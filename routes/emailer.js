var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'scriptdp@gmail.com',
    pass: 'xxxxxxxxxx'
  }
});

// var mailOptions = {
//   from: 'scriptdp@gmail.com',
//   to: 'scriptdp@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

module.exports = transporter;