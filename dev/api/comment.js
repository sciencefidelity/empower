require("dotenv").config()
import sanityClient from "lib/sanityClient"

async function sendComment(req, res) {
  const client = sanityClient.config({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2021-09-20",
    token: process.env.SANITY_API_TOKEN || "",
    useCdn: true
  })
  const doc = {
    _type: "comment",
    email: req.body.email,
    message: req.body.message,
    name: req.body.name,
    post: {
      _ref: req.body.id,
      _type: "reference"
    },
    twitterHandle: req.body.twitterHandle
  }
  try {
    await client.create(doc).then(res => {
      console.log(`Comment was created, document ID is ${res._id}`)
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
  return res.status(200).json({ success: "message sent" })
}
export default sendComment
