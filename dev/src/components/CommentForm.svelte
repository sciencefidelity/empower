<script lang="ts">
export let id
let fields = { name: "", email: "", twitterHandle: "", message: "", id: id }
let errors = { name: "", message: "" }
let valid = false
let submitMessage = ""

const submitHandler = async () => {
  valid = true
  if (fields.name.trim().length < 1) {
    valid = false
    errors.name = "Please tell us your name"
  } else {
    errors.name = ""
  }
  if (fields.message.trim().length < 1) {
    valid = false
    errors.message = "Please write your comment"
  } else {
    errors.message = ""
  }
  if (valid) {
    const res = await fetch("/api/comment", {
      body: JSON.stringify(fields),
      headers: {"Content-Type": "application/json"},
      method: "POST"
    })
    const { error } = await res.json()
    if (error) submitMessage = "Oops! Something went wrong, please try again."
    submitMessage = "Thankyou! Your comment has been delivered."
    fields = { name: "", email: "", twitterHandle: "", message: "" }
  }
}
</script>

<section>
  <div>
    <form on:submit|preventDefault={submitHandler}>
      <p>Leave a comment</p>
      <!-- Name -->
      <label for="name">Name<span class="required">*</span></label>
      <input
        id="name"
        aria-label="Name"
        type="text"
        bind:value={fields.name}
        name="name"
        placeholder="Your name..."
      >
      <div class="errors">{ errors.name }</div>
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
      <!-- Twitter Handle -->
      <label for="twitterHandle">Twitter Handle</label>
      <input
        id="twitterHandle"
        aria-label="Twitter Handle"
        type="text"
        bind:value={fields.twitterHandle}
        name="twitterHandle"
        placeholder="Your Twitter handle..."
      >
      <div class="errors">{ errors.twitterHandle }</div>
      <!-- Message -->
      <label for="message">Comment<span class="required">*</span></label>
      <textarea
        id="message"
        aria-label="Comment"
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
.errors,
.required {
  color: red;
}
</style>
