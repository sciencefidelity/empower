<script>
let firstName = ""
let lastName = ""
let email = ""
let message = ""
//let showMessage = false
// let responseMessage = ""
const submitForm = async () => {
  const res = await fetch("api/sendgrid", {
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message
    }),
    headers: {"Content-Type": "application/json"},
    method: "POST"
  })
  // const data = await submit.json()
  // if (data.message === "bad request") {
  //   showMessage = true
  //   responseMessage = "That looks like a bad request"
  // }
  // if (data.message === "email sent!") {
  //   showMessage = true
  //   responseMessage = "Your message was sent!"
  // }
  // if (
  //   data.message === "something went wrong with the email submit!"
  // ) {
  //   showMessage = false
  // }
}
</script>

<section>
<!--   {#if success}
    <div class="text-center">
      <h3 class="font-extrabold text-3xl">{responseMessage}</h3>
    </div>
  {:else} -->
    <div>
      <form on:submit|preventDefault={submitForm}>
        <p>Send a message with Svelte</p>
        <label for="firstName">First Name</label>
        <input
          id="firstName"
          aria-label="First Name"
          type="text"
          bind:value={firstName}
          name="firstName"
          placeholder="Your name..."
        >
        <label for="lastName">Last Name</label>
        <input
          id="lastName"
          aria-label="Last Name"
          type="text"
          bind:value={lastName}
          name="lastName"
          placeholder="Your last name..."
        >
        <label for="email">Email</label>
        <input
          id="email"
          aria-label="email"
          type="email"
          bind:value={email}
          name="lastName"
          placeholder="Your email address..."
        >
        <label for="message">Subject</label>
        <textarea
          id="message"
          aria-label="message"
          type="text"
          bind:value={message}
          name="message"
          placeholder="Write something..."
        ></textarea>
        <input type="submit" value="Submit">
      </form>
    </div>
<!--   {/if} -->
</section>

<style>
input,
label {
  display: block;
}
textarea {
  height: 200px;
}
</style>
