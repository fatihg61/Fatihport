// import nodemailer from 'nodemailer';

// export async function post(request) {
//   const { email, subject, message } = request.body;

//   // Create a SMTP transporter
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.mailersend.net',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'MS_O81wg9@trial-351ndgwyz9xlzqx8.mlsender.net',
//       pass: 'JMjOLvVGSmON3uY0'
//     }
//   });

//   // Prepare email message
//   const mailOptions = {
//     from: 'trial-351ndgwyz9xlzqx8.mlsender.net',
//     to: email,
//     subject: subject,
//     text: message
//   };

//   try {
//     // Send email
//     await transporter.sendMail(mailOptions);
//     return {
//       status: 200,
//       body: { message: 'Email sent successfully' }
//     };
//   } catch (error) {
//     return {
//       status: 500,
//       body: { message: 'Failed to send email' }
//     };
//   }
// }
