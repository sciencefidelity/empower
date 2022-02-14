<script lang="ts">
let fields = { firstName: "", lastName: "", email: "", message: "" }
let errors = { firstName: "", lastName: "", email: "", message: "" }
let valid = false
let submitMessage = ""

const submitHandler = async () => {
  valid = true
  if (fields.firstName.trim().length < 1) {
    valid = false
    errors.firstName = "Please fill in First Name"
  } else {
    errors.firstName = ""
  }
  if (fields.lastName.trim().length < 1) {
    valid = false
    errors.lastName = "Please fill in Last Name"
  } else {
    errors.lastName = ""
  }
  // if (regex.test(fields.email.trim())) {
  if (fields.email.trim().length < 1) {
    valid = false
    errors.email = "Please provide a valid email address"
  } else {
    errors.email = ""
  }
  if (fields.message.trim().length < 1) {
    valid = false
    errors.message = "Please leave us a message"
  } else {
    errors.message = ""
  }
  if (valid) {
    await fetch("api/sendgrid", {
      body: JSON.stringify(fields),
      headers: {"Content-Type": "application/json"},
      method: "POST"
    }).then(data => {
      data.status === 200
        ? submitMessage = "Thankyou! Your Message has been delivered."
        : submitMessage = "Oops! Something went wrong, please try again."
    })
    fields = { firstName: "", lastName: "", email: "", message: "" }
  }
}
</script>

<section>
  <div>
    <form on:submit|preventDefault={submitHandler}>
      <p>Send a message</p>
      <!-- First Name -->
      <label for="firstName">First Name</label>
      <input
        id="firstName"
        aria-label="First Name"
        type="text"
        bind:value={fields.firstName}
        name="firstName"
        placeholder="Your name..."
      >
      <div class="errors">{ errors.firstName }</div>
      <!-- Last Name -->
      <label for="lastName">Last Name</label>
      <input
        id="lastName"
        aria-label="Last Name"
        type="text"
        bind:value={fields.lastName}
        name="lastName"
        placeholder="Your last name..."
      >
      <div class="errors">{ errors.lastName }</div>
      <!-- Email -->
      <label for="email">Email</label>
      <input
        id="email"
        aria-label="Email"
        type="email"
        bind:value={fields.email}
        name="email"
        placeholder="Your email address..."
      >
      <div class="errors">{ errors.email }</div>
      <!-- Message -->
      <label for="message">Message</label>
      <textarea
        id="message"
        aria-label="message"
        type="text"
        bind:value={fields.message}
        name="message"
        placeholder="Write something..."
      ></textarea>
      <div class="errors">{ errors.message }</div>
      <!-- Submit -->
      <input type="submit" value="Submit">
      <div>{submitMessage}</div>
    </form>
  </div>
</section>

<style>
input,
label {
  display: block;
}
textarea {
  height: 200px;
}
.errors {
  color: red;
}
</style>
