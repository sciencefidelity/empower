export default function handler(req, res) {
  if (req === {text: "hello"}) {
    res.status(200).json({ text: "world" })
  } else if (req === {text: "world"}) {
    res.status(200).json({ text: "hello" })
  } else {
    res.status(200).json({ text: "empty" })
  }
}
