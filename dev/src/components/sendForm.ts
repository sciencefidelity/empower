const data = {
  "firstName":"Matt",
  "lastName":"Cook",
  "email":"sciencefidelity@hotmail.com",
  "message":"This is the message content"
}
fetch("api/sendgrid", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log("Success:", data)
})
.catch((error) => {
  console.error("Error:", error)
})
