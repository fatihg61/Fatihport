<script>
  import { enhance } from "$app/forms";
  import { onMount } from "svelte";

  let isSubmitting = false;
  let successMessage = "";
  let errorMessage = "";
  let errors = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  let validity = {
    name: false,
    email: false,
    phone: false,
    message: false,
  };

  function handleEnhance({ formElement }) {
    const handleSubmit = async ({ result }) => {
      isSubmitting = false;
      successMessage = "";
      errorMessage = "";

      if (result.type === "failure") {
        errorMessage = result.data.error;
      } else if (result.type === "success") {
        formElement.reset();
        successMessage = result.data.message;
        validity = { name: false, email: false, phone: false, message: false };
      }
    };
    return handleSubmit;
  }

  function validateField(name, value) {
    switch (name) {
      case "name":
        if (!value) return "Name is required";
        return "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) return "Email is required";
        if (!emailRegex.test(value)) return "Invalid email format";
        return "";
      case "phone":
        const phoneRegex = /^\d{10,15}$/;
        if (!value) return "Phone is required";
        if (!phoneRegex.test(value)) return "Invalid phone number";
        return "";
      case "message":
        if (!value) return "Message is required";
        return "";
      default:
        return "";
    }
  }

  function handleInput(event) {
    const { name, value } = event.target;
    const error = validateField(name, value);
    errors[name] = error;
    validity[name] = !error;
  }

  onMount(() => {
    const form = document.querySelector("form");
    form.addEventListener("input", handleInput);
  });
</script>

<button id="styled-popover-button" popovertarget="my-popover">Contact Form</button>

<section id="my-popover" popover>
  <section class="form-container">
    <form
      method="POST"
      use:enhance={handleEnhance}
      on:submit={() => (isSubmitting = true)}
      class="contact-form"
    >
      <fieldset class="form-wrapper">
        <legend class="form-legend">Personal Information</legend>

        <label for="name" class="form-label">
          <span>Name</span>
          <div class="input-wrapper">
            <i class="icon user-icon"></i>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="e.g John Doe"
              class="input-field"
            />
            <p class="error-message" id="name-error">Name is required</p>
          </div>
        </label>

        <label for="email" class="form-label">
          <span>Email</span>
          <div class="input-wrapper">
            <i class="icon email-icon"></i>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="e.g johndoe@mail.com"
              class="input-field"
            />
            <p class="error-message" id="email-error">Please enter a valid email</p>
          </div>
        </label>

        <label for="phone" class="form-label">
          <span>Phone</span>
          <div class="input-wrapper">
            <i class="icon phone-icon"></i>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              placeholder="Mobile number"
              class="input-field"
            />
            <p class="error-message" id="phone-error">Invalid phone number</p>
          </div>
        </label>
      </fieldset>

      <fieldset class="form-wrapper">
        <label for="message" class="form-label">
          <span>Message</span>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Tell me your message..."
            class="input-field textarea-field"
          ></textarea>
          <p class="error-message" id="message-error">Message is required</p>
        </label>
      </fieldset>

      <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
        Send
      </button>

      {#if isSubmitting}
        <div class="loader-container">
          <div class="loader"></div>
        </div>
      {/if}
    </form>

    {#if successMessage}
      <div class="message success-message">
        {successMessage}
      </div>
    {/if}

    {#if errorMessage}
      <div class="message error-message">
        {errorMessage}
      </div>
    {/if}
  </section>
</section>

<style>
  /* Loader container */
.loader-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(var(--text-color), 0.8); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it is above all other content */
}

/* Professional spinner */
.loader {
  border: 8px solid var(--grey-color); /* Light grey */
  border-top: 8px solid var(--primary-color); /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1.5s linear infinite;
}

/* Spin animation */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Adjust form container to make room for loader */
.form-container {
  position: relative;
}

/* Message styles */
.message {
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
}

.success-message {
  background-color: #d4edda; /* Light green */
  color: #155724; /* Dark green */
  border: 1px solid #c3e6cb; /* Slightly darker green */
}

.error-message {
  background-color: #f8d7da; /* Light red */
  color: #721c24; /* Dark red */
  border: 1px solid #f5c6cb; /* Slightly darker red */
}

/* Disable button while submitting */
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

#styled-popover-button {
  position: fixed;
  bottom: 20px;
  left: 20px;
  padding: 8px 16px;
  background-color: var(--primary-color);
  color: var(--white-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: var(--box-shadow);
  font-size: 14px;
}

#styled-popover-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}

#my-popover {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
}

/* Form container */
.form-container {
  width: 100%;
  padding: 20px;
  background: var(--background); /* Use background color from the root */
  box-shadow: var(--box-shadow);
  border-radius: 8px;
  border: 1px solid var(--grey-color); /* Use grey color for borders */
}

/* Contact Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Form wrapper */
.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Form legend */
.form-legend {
  font-weight: bold;
  font-size: 18px;
  color: var(--text-color);
  margin-bottom: 10px;
}

/* Form labels */
.form-label {
  font-weight: bold;
  font-size: 14px;
  color: var(--text-color);
  margin-bottom: 5px;
}

.form-label span {
  display: block;
  margin-bottom: 4px;
}

/* Input wrapper */
.input-wrapper {
  position: relative;
}

.icon {
  position: absolute;
  left: 8px;
  color: var(--grey-color);
  font-size: 16px;
}

.user-icon::before {
  content: "👤";
}
.email-icon::before {
  content: "📧";
}
.phone-icon::before {
  content: "📞";
}

/* Input and textarea fields */
.input-field,
.textarea-field {
  width: 100%;
  padding: 10px 12px 10px 36px;
  font-size: 14px;
  border: 1px solid var(--grey-color); /* Use grey color for borders */
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  background-color: var(--white-color); /* White background color */
  color: var(--text-color); /* Text color */
}

.input-field:focus,
.textarea-field:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 4px rgba(var(--primary-color), 0.5);
}

.input-field:valid,
.textarea-field:valid {
  border-color: #28a745; /* Green border for valid input */
  box-shadow: 0 0 4px rgba(40, 167, 69, 0.5); /* Green glow for valid input */
}

.input-field:invalid,
.textarea-field:invalid {
  border-color: #dc3545; /* Red border for invalid input */
  box-shadow: 0 0 4px rgba(220, 53, 69, 0.5); /* Red glow for invalid input */
}

.textarea-field {
  min-height: 100px;
}

/* Error message */
.error-message {
  display: none;
  font-size: 12px;
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  padding: 6px 10px;
  border-radius: 4px;
  margin-top: 4px;
}

.input-field:invalid ~ .error-message,
.textarea-field:invalid ~ .error-message {
  display: block;
}

/* Button styles */
.btn {
  padding: 10px 14px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, transform 0.2s;
  background-color: var(--primary-color);
  color: var(--white-color);
}

.btn-primary:hover {
  background-color: darken(var(--primary-color), 10%);
}

.btn-primary:disabled {
  background-color: var(--grey-color);
  cursor: not-allowed;
}
</style>