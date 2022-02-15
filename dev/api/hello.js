export default function handler(req, res) {
  if (req.body.text === "hello") {
    res.status(200).json({ text: "world" })
  } else if (req.body.text === "world"}) {
    res.status(200).json({ text: "hello" })
  } else {
    res.status(200).json({ text: "привет" })
  }
}
