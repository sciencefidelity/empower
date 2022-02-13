require("dotenv").config()
import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  const subject = "New Message from artsed.wales"
  const fullName = `${req.body.firstName} ${req.body.lastName}`
  try {
    // console.log("REQ.BODY", req.body)
    await sendgrid.send({
      to: "Matt Cook <hello@empower-us-all.org>",
      from: "NAEN Website <hello@empower-us-all.org>",
      replyTo: `${fullName} <${req.body.email}>`,
      subject: `${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>${subject}</title>
          <meta name="description" content="${subject}">
        </head>
        <body>
          <p>New message from ${fullName}.</p>
          <p>Their email is: <a href="mailto:${req.body.email}">${req.body.email}</a></p>
          <p>Message:</p>
          <p>${req.body.message}</p>
        </body>
        </html>
      `
    }).then(() => {
      console.log("Email sent")
    })
  } catch (error) {
    // console.log(error)
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
  return res.status(200).json({ error: "" })
}
export default sendEmail
